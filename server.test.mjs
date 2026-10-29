import {test} from 'node:test';import assert from 'node:assert/strict';
import {mkdtemp,readFile,rm} from 'node:fs/promises';import {tmpdir} from 'node:os';import {join} from 'node:path';import {createHash,randomUUID} from 'node:crypto';
import {createOrderServer} from './server.mjs';import {inspectSTL,validateOrder} from './order-core.mjs';
// A tetrahedron fixture, independent of the generator implementation.
const stl=Buffer.alloc(84+4*50);stl.writeUInt32LE(4,80);
const points=[[0,0,0],[10,0,0],[0,10,0],[0,0,10]],faces=[[0,2,1],[0,1,3],[1,2,3],[2,0,3]];
faces.forEach((face,t)=>face.forEach((p,j)=>points[p].forEach((x,k)=>stl.writeFloatLE(x,84+t*50+12+j*12+k*4))));
const make=()=>({id:randomUUID(),name:'Тест',contact:'@test_only',city:'Тестовый город',material:'PLA',color:'Белый',quantity:2,comment:'Проверка',consent:true,model:{type:'box',name:'Коробки',parameters:{w:10,d:10,h:10}},sha256:createHash('sha256').update(stl).digest('hex'),size:[10,10,10]});
function unzipStored(b){let p=0,result={};while(b.readUInt32LE(p)===0x04034b50){const size=b.readUInt32LE(p+18),n=b.readUInt16LE(p+26),e=b.readUInt16LE(p+28),start=p+30+n+e;result[b.subarray(p+30,p+30+n).toString()]=b.subarray(start,start+size);p=start+size}return result}
async function fixture(fn,{mode='ok',rateLimit=100,configured=true}={}){
 const dir=await mkdtemp(join(tmpdir(),'snoopy-test-'));let deliveries=[];
 const server=createOrderServer({dir,token:configured?'TEST_SECRET':null,chat:'123',rateLimit,fetchTelegram:async(url,options)=>{assert.equal(url,'https://api.telegram.org/botTEST_SECRET/sendDocument');deliveries.push({file:Buffer.from(await options.body.get('document').arrayBuffer()),caption:options.body.get('caption')});if(mode==='timeout')throw Error('timeout');return {ok:mode==='ok',json:async()=>mode==='ok'?{ok:true,result:{message_id:42,document:{file_id:'verified-file'}}}:{ok:false}}}});
 await new Promise(r=>server.listen(0,'127.0.0.1',r));const url=`http://127.0.0.1:${server.address().port}/orders`;
 const post=(order=make(),extra={})=>fetch(url,{method:'POST',headers:{Origin:'https://snoopy-3d.github.io','Content-Type':'application/json'},body:JSON.stringify({order,stl:stl.toString('base64'),...extra})});
 try{await fn({post,dir,deliveries,url})}finally{await new Promise(r=>server.close(r));await rm(dir,{recursive:true,force:true})}
}
test('STL fixture and validation reject truncated, NaN, size and fields',()=>{
 assert.deepEqual(inspectSTL(stl).size,[10,10,10]);assert.throws(()=>inspectSTL(stl.subarray(1)));const bad=Buffer.from(stl);bad.writeFloatLE(NaN,96);assert.throws(()=>inspectSTL(bad));
 for(const delta of [{quantity:0},{quantity:1.2},{consent:false},{contact:''},{material:'unknown'},{id:'../../x'},{city:'x'.repeat(101)}])assert.throws(()=>validateOrder({...make(),...delta}));
});
test('delivers exact STL and all parameters in ZIP; persists privately; retries do not resend',()=>fixture(async({post,dir,deliveries})=>{
 const o=make(),r=await post(o);assert.equal(r.status,201);assert.deepEqual(await r.json(),{id:o.id,status:'delivered'});
 const files=unzipStored(deliveries[0].file);assert.deepEqual(files['model.stl'],stl);assert.deepEqual(JSON.parse(files['order.json']).model.parameters,o.model.parameters);assert.match(files['order.txt'].toString(),/Тестовый город/);
 assert.deepEqual(await readFile(join(dir,o.id,'model.stl')),stl);assert.equal(JSON.parse(await readFile(join(dir,o.id,'state.json'))).status,'delivered');
 assert.equal((await post(o)).status,200);assert.equal(deliveries.length,1);assert.equal((await post({...o,color:'Чёрный'})).status,409);
}));
test('rejects wrong SHA, malformed STL and invalid consent before Telegram',()=>fixture(async({post,deliveries})=>{
 assert.equal((await post({...make(),sha256:'bad'})).status,400);assert.equal((await post(make(),{stl:'broken'})).status,400);assert.equal((await post({...make(),consent:false})).status,400);assert.equal(deliveries.length,0);
}));
for(const mode of ['timeout','rejected'])test(mode+' never claims success or silently resends',()=>fixture(async({post,dir,deliveries})=>{
 const o=make();assert.equal((await post(o)).status,502);assert.equal((await post(o)).status,409);assert.equal(deliveries.length,1);assert.equal(JSON.parse(await readFile(join(dir,o.id,'state.json'))).status,'unconfirmed');
},{mode}));
test('CORS, method, path and JSON errors',()=>fixture(async({url,post})=>{
 assert.equal((await fetch(url,{method:'POST'})).status,403);
 assert.equal((await fetch(url,{headers:{Origin:'https://snoopy-3d.github.io'}})).status,405);
 assert.equal((await fetch(url+'/private',{headers:{Origin:'https://snoopy-3d.github.io'}})).status,404);
 assert.equal((await fetch(url,{method:'OPTIONS',headers:{Origin:'https://snoopy-3d.github.io'}})).status,204);
 assert.equal((await fetch(url,{method:'POST',headers:{Origin:'https://snoopy-3d.github.io','Content-Type':'application/json'},body:'{'})).status,400);
 assert.equal((await post()).status,201);
}));
test('rate limit rejects excess requests',()=>fixture(async({post})=>{assert.equal((await post()).status,201);assert.equal((await post()).status,429)},{rateLimit:1}));
test('missing credentials fails closed',()=>fixture(async({post,deliveries})=>{assert.equal((await post()).status,503);assert.equal(deliveries.length,0)},{configured:false}));
