export const MAX_STL = 8 * 1024 * 1024;
export function validateOrder(o) {
  if (!o || !/^[a-f0-9-]{36}$/.test(o.id)) throw Error('Некорректный номер заказа');
  for (const [key, max] of Object.entries({name:80,contact:120,city:100,color:60,comment:400})) {
    if (typeof o[key] !== 'string' || o[key].length > max || (key !== 'comment' && !o[key].trim()) || /[\x00-\x08\x0b-\x1f]/.test(o[key])) throw Error('Проверьте поле: '+key);
  }
  if (!['PLA','PETG','ABS','ASA','Помогите выбрать'].includes(o.material)) throw Error('Выберите материал');
  if (!Number.isInteger(o.quantity) || o.quantity < 1 || o.quantity > 100) throw Error('Количество: от 1 до 100');
  if (o.consent !== true) throw Error('Нужно согласие на передачу данных владельцу');
  if (!o.model || typeof o.model.type !== 'string' || !['box','vase','lamp','skadis'].includes(o.model.type) || !o.model.parameters || JSON.stringify(o.model).length > 16000) throw Error('Некорректные параметры модели');
  return o;
}
export function inspectSTL(bytes) {
  const a = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  if (a.byteLength < 134 || a.byteLength > MAX_STL) throw Error('STL должен быть от 134 байт до 8 МБ');
  const v = new DataView(a.buffer, a.byteOffset, a.byteLength), count = v.getUint32(80,true);
  if (!count || 84 + count * 50 !== a.byteLength) throw Error('Повреждён бинарный STL');
  const min=[Infinity,Infinity,Infinity],max=[-Infinity,-Infinity,-Infinity];
  for(let t=0;t<count;t++) for(let p=0;p<3;p++) for(let k=0;k<3;k++) {
    const x=v.getFloat32(84+t*50+12+p*12+k*4,true);
    if(!Number.isFinite(x)||Math.abs(x)>10000) throw Error('Некорректные координаты STL');
    min[k]=Math.min(min[k],x); max[k]=Math.max(max[k],x);
  }
  const size=max.map((x,k)=>x-min[k]);
  if(size.some(x=>x<=0)) throw Error('Модель не имеет объёма');
  return {triangles:count,size};
}
export function orderText(o) {
  return `SNOOPY3D • Заявка ${o.id}\nМодель: ${o.model.name} (${o.model.type})\nМатериал: ${o.material}\nЦвет: ${o.color}\nКоличество: ${o.quantity}\nИмя: ${o.name}\nКонтакт: ${o.contact}\nГород доставки: ${o.city}\nКомментарий: ${o.comment || '—'}\nРазмеры STL, мм: ${o.size.map(x=>x.toFixed(1)).join(' × ')}\nSHA-256 STL: ${o.sha256}\nПечать: Bambu Lab P1S. Цена и доставка согласуются владельцем до оплаты.\nПараметры модели:\n${JSON.stringify(o.model.parameters,null,2)}`;
}
