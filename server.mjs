import http from 'node:http';
import {mkdir,writeFile,readFile,rename,readdir} from 'node:fs/promises';
import {resolve,join} from 'node:path';
import {createHash} from 'node:crypto';
import {pathToFileURL} from 'node:url';
import {zipFiles} from './zip.mjs';
import {validateOrder,inspectSTL,orderText,MAX_STL} from './order-core.mjs';

export function createOrderServer({token=process.env.TELEGRAM_BOT_TOKEN,chat=process.env.TELEGRAM_CHAT_ID,origin=process.env.ALLOWED_ORIGIN||'https://snoopy-3d.github.io',dir=process.env.DATA_DIR||'./private-orders',fetchTelegram=fetch,rateLimit=5,maxOrders=100}={}) {
  const root=resolve(dir),active=new Set(),rates=new Map();
  const json=(res,code,obj)=>{res.writeHead(code,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});res.end(JSON.stringify(obj))};
  return http.createServer(async(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin',origin);res.setHeader('Vary','Origin');
    if(req.headers.origin!==origin)return json(res,403,{error:'Источник запроса не разрешён'});
    if(req.url!=='/orders')return json(res,404,{error:'Не найдено'});
    if(req.method==='OPTIONS'){res.writeHead(204,{'Access-Control-Allow-Methods':'POST','Access-Control-Allow-Headers':'Content-Type','Access-Control-Max-Age':'600'});return res.end()}
    if(req.method!=='POST')return json(res,405,{error:'Метод не разрешён'});
    if(!token||!chat)return json(res,503,{error:'Приём заказов ещё не настроен'});
    if(!req.headers['content-type']?.startsWith('application/json'))return json(res,415,{error:'Ожидается JSON'});
    // Uses the socket address; never trusts a client-supplied X-Forwarded-For.
    const ip=req.socket.remoteAddress,now=Date.now();for(const [k,v] of rates)if(now>v.until)rates.delete(k);
    const rate=rates.get(ip)||{count:0,until:now+600000};rates.set(ip,rate);if(++rate.count>rateLimit)return json(res,429,{error:'Слишком много запросов. Повторите через 10 минут'});
    let id,ownsLock=false;
    try {
      const chunks=[];let length=0;
      for await(const chunk of req){length+=chunk.length;if(length>MAX_STL*4/3+40000){json(res,413,{error:'Файл слишком большой'});req.resume();return}chunks.push(chunk)}
      const body=JSON.parse(Buffer.concat(chunks).toString('utf8')),order=validateOrder(body.order);id=order.id;
      if(typeof body.stl!=='string'||body.stl.length>Math.ceil(MAX_STL/3)*4||!/^[A-Za-z0-9+/]+={0,2}$/.test(body.stl))throw Error('Неверный файл');
      const bytes=Buffer.from(body.stl,'base64'),info=inspectSTL(bytes),sha=createHash('sha256').update(bytes).digest('hex');
      if(sha!==order.sha256)throw Error('Контрольная сумма STL не совпадает');
      order.size=info.size;
      // Bind the idempotency key to the complete request, not just the STL.
      const fingerprint=createHash('sha256').update(JSON.stringify(order)).update(bytes).digest('hex');
      if(active.has(id))return json(res,409,{error:'Заказ уже обрабатывается; повторите проверку позднее'});active.add(id);ownsLock=true;
      await mkdir(root,{recursive:true,mode:0o700});
      const folder=join(root,id);let fresh=true;
      const folders=await readdir(root);
      if(!folders.includes(id)&&folders.length>=maxOrders)return json(res,503,{error:'Хранилище заявок заполнено. Свяжитесь с владельцем'});
      try{await mkdir(folder,{mode:0o700})}catch(e){if(e.code!=='EEXIST')throw e;fresh=false}
      const statePath=join(folder,'state.json');
      const stateWrite=async state=>{await writeFile(statePath+'.tmp',JSON.stringify(state),{mode:0o600});await rename(statePath+'.tmp',statePath)};
      if(!fresh){
        let previous;try{previous=JSON.parse(await readFile(statePath,'utf8'))}catch{return json(res,409,{error:'Нужна проверка владельцем по номеру заказа'})}
        if(previous.fingerprint!==fingerprint)return json(res,409,{error:'Номер уже используется другой заявкой'});
        if(previous.status==='delivered')return json(res,200,{id,status:'delivered'});
        // Telegram has no idempotency key. Never automatically resend an uncertain delivery.
        return json(res,409,{error:'Получение не подтверждено. Уточните у владельца по номеру заказа перед ручной отправкой'});
      }
      const state={fingerprint,status:'stored',createdAt:new Date().toISOString()};
      await writeFile(join(folder,'model.stl'),bytes,{mode:0o600});
      await writeFile(join(folder,'order.json'),JSON.stringify(order,null,2),{mode:0o600});
      await writeFile(join(folder,'order.txt'),orderText(order),{mode:0o600});await stateWrite(state);
      // One Telegram document contains both exact STL bytes and full order parameters.
      const form=new FormData();form.set('chat_id',chat);
      const archive=zipFiles({'model.stl':bytes,'order.json':JSON.stringify(order,null,2),'order.txt':orderText(order)});
      form.set('document',new Blob([archive],{type:'application/zip'}),`SNOOPY3D_${id}.zip`);
      const caption=`Заявка ${id}\n${order.model.type}\n${order.material}, ${order.color}, ${order.quantity} шт.\n${order.name}\n${order.contact}\n${order.city}\n${info.size.map(x=>x.toFixed(1)).join(' × ')} мм\nSTL и полные параметры — внутри ZIP. Цена и доставка — по согласованию.`;
      form.set('caption',caption);
      await stateWrite({...state,status:'sending'});
      try {
        const result=await fetchTelegram(`https://api.telegram.org/bot${token}/sendDocument`,{method:'POST',body:form,signal:AbortSignal.timeout(45000)});
        const data=await result.json();if(!result.ok||!data.ok||!data.result?.document?.file_id)throw Error('Telegram did not confirm');
        await stateWrite({...state,status:'delivered',messageId:data.result.message_id,fileId:data.result.document.file_id});
        return json(res,201,{id,status:'delivered'});
      }catch {await stateWrite({...state,status:'unconfirmed'});return json(res,502,{error:'Telegram не подтвердил доставку. Заявка сохранена у владельца; уточните получение по номеру'})}
    }catch(e){return json(res,400,{error:e instanceof SyntaxError?'Некорректный JSON':e.code?'Ошибка хранения. Отправка не подтверждена':e.message})}finally{if(ownsLock)active.delete(id)}
  });
}
if(process.argv[1]&&import.meta.url===pathToFileURL(resolve(process.argv[1])).href){
  if(!process.env.TELEGRAM_BOT_TOKEN||!process.env.TELEGRAM_CHAT_ID)throw Error('Set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in server secrets');
  const server=createOrderServer();server.requestTimeout=70000;server.headersTimeout=15000;
  server.listen(Number(process.env.PORT||8787),'0.0.0.0',()=>console.log('Order handler listening'));
}
