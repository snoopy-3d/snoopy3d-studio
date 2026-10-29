import { getOrderModel, packOrder } from './index-CBphGRmV.js?v=orders1';
import { orderConfig as config } from './order-config.js';
import { validateOrder, inspectSTL, orderText } from './order-core.mjs';

const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const save=(bytes,name,type)=>{const url=URL.createObjectURL(new Blob([bytes],{type}));const a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),60000)};
const digest=async bytes=>Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',bytes))).map(x=>x.toString(16).padStart(2,'0')).join('');
let trigger;
function sync(){
  const stl=document.getElementById('exportSTL');
  if(!stl) return;
  if(!document.getElementById('orderPrint')) { trigger=document.createElement('button');trigger.id='orderPrint';trigger.textContent='Заказать печать';trigger.onclick=openOrder;stl.parentNode.append(trigger); }
  const b=document.getElementById('orderPrint');if(b.disabled!==stl.disabled)b.disabled=stl.disabled;
}
new MutationObserver(sync).observe(document.getElementById('content'),{childList:true,subtree:true,attributes:true,attributeFilter:['disabled']});sync();
async function openOrder(){
  let model,bytes,sha,size;
  try {model=getOrderModel();bytes=new Uint8Array(model.stl);size=inspectSTL(bytes).size;sha=await digest(bytes)}catch(e){alert(e.message);return}
  const id=crypto.randomUUID(),filename=`SNOOPY3D_${id}.stl`,dialog=document.createElement('dialog');
  dialog.className='order-dialog';
  dialog.innerHTML=`<form><div class="actions editor-heading"><h2>Заказать печать</h2><button type="button" class="secondary" id="orderClose" aria-label="Закрыть заказ">×</button></div><p>${esc(model.name)} · ${size.map(x=>x.toFixed(1)).join(' × ')} мм · ${(bytes.length/1024/1024).toFixed(2)} МБ</p><p>Печать на Bambu Lab P1S. Цену, наличие цвета и доставку согласуем с вами перед оплатой.</p><div class="fields"><label class="field">Материал<select name="material"><option>PLA</option><option>PETG</option><option>ABS</option><option>ASA</option><option>Помогите выбрать</option></select></label><label class="field">Цвет<input name="color" required maxlength="60" placeholder="Например, белый"></label><label class="field">Количество<input name="quantity" type="number" min="1" max="100" step="1" value="1" required></label><label class="field">Ваше имя<input name="name" autocomplete="name" required maxlength="80"></label><label class="field">Telegram, телефон или email<input name="contact" required maxlength="120" placeholder="Как с вами связаться"></label><label class="field">Город доставки<input name="city" autocomplete="address-level2" required maxlength="100"></label></div><label class="field">Комментарий<textarea name="comment" maxlength="400" rows="2"></textarea></label><label class="order-consent"><input type="checkbox" name="consent" required>Согласен передать модель и данные заявки владельцу @${esc(config.telegram)} для согласования печати и доставки через Telegram. Данные останутся в переписке владельца; удаление можно запросить у него.</label><p class="small">${config.endpoint?'Сервис отправит STL вместе с заявкой. При ошибке можно сохранить архив и отправить его вручную.':'Автоматическая отправка пока не подключена. Сохраните один ZIP с STL и заявкой и прикрепите его в чат владельца. Открытие Telegram само по себе заказ не отправляет.'}</p><p id="orderStatus" role="status" aria-live="polite"></p><div class="actions"><button type="submit" id="orderSend">${config.endpoint?'Отправить заказ со STL':'Сохранить ZIP для Telegram'}</button><button type="button" id="orderZip" class="secondary" ${config.endpoint?'':'hidden'}>Сохранить ZIP</button><button type="button" id="orderStl" class="secondary">Скачать STL</button><a id="orderTelegram" class="order-link" href="https://t.me/${esc(config.telegram)}" target="_blank" rel="noopener noreferrer">Открыть @${esc(config.telegram)}</a></div><p class="small">Размеры STL — в мм. STL сохраняет форму, но не цвет: цвет и материал указаны в заявке. Не отправляйте предоплату до согласования.</p></form>`;
  document.body.append(dialog);dialog.showModal();
  const form=dialog.querySelector('form'),status=dialog.querySelector('#orderStatus'),send=dialog.querySelector('#orderSend');let pending=null,busy=false,finished=false;
  const close=()=>{if(busy)return;dialog.close();dialog.remove();trigger?.focus()};dialog.querySelector('#orderClose').onclick=close;dialog.addEventListener('cancel',e=>{e.preventDefault();close()});
  const collect=()=>{if(!form.reportValidity())return null;const f=new FormData(form);const o={id,name:String(f.get('name')).trim(),contact:String(f.get('contact')).trim(),city:String(f.get('city')).trim(),color:String(f.get('color')).trim(),material:f.get('material'),quantity:Number(f.get('quantity')),comment:String(f.get('comment')).trim(),consent:f.get('consent')==='on',model:{type:model.type,name:model.name,parameters:model.parameters,signature:model.signature},sha256:sha,size,createdAt:new Date().toISOString()};return validateOrder(o)};
  const zip=()=>{try{const o=pending||collect();if(!o)return;save(packOrder({[filename]:bytes,'order.json':new TextEncoder().encode(JSON.stringify(o,null,2)),'order.txt':new TextEncoder().encode(orderText(o))}),`SNOOPY3D_order_${id}.zip`,'application/zip');status.textContent='Архив передан на скачивание. Прикрепите ZIP в чат @'+config.telegram+'. Заказ ещё не отправлен.'}catch(e){status.textContent=e.message}};
  dialog.querySelector('#orderZip').onclick=zip;dialog.querySelector('#orderStl').onclick=()=>save(bytes,filename,'model/stl');
  form.onsubmit=async e=>{e.preventDefault();if(busy||finished)return;if(!config.endpoint){zip();return}try{
    pending ||= collect();if(!pending)return;busy=true;send.disabled=true;
    form.querySelectorAll('input,select,textarea').forEach(x=>x.disabled=true);
    status.textContent='Отправляем STL и заявку…';
    const blob=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(String(r.result).split(',')[1]);r.onerror=reject;r.readAsDataURL(new Blob([bytes]))});
    const response=await fetch(config.endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({order:pending,stl:blob}),signal:AbortSignal.timeout(60000)});
    const result=await response.json();if(!response.ok||result.status!=='delivered'||result.id!==id)throw Error(result.error||'Нет подтверждения доставки');
    status.textContent='Заказ '+id+' со STL доставлен в Telegram владельца. Ожидайте согласования цены и доставки.';finished=true;send.textContent='Доставлено';
  }catch(err){status.textContent='Доставка не подтверждена. '+(err.message||'Ошибка связи')+'. Сохраните ZIP; перед ручной отправкой уточните получение по номеру '+id+'.';send.textContent='Проверить / повторить';}finally{busy=false;send.disabled=finished;dialog.querySelector('#orderZip').hidden=false}};
}
