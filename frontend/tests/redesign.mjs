import {initialize,generate} from '../source/geometry.js';
import {catalog,defaults} from '../source/catalog.js';
import {inspect,stl,threeMF,meshFromBuffer} from '../source/formats.js';
import opentype from 'opentype.js';
import fs from 'node:fs';
import assert from 'node:assert/strict';
import {unzipSync,strFromU8} from 'fflate';
await initialize();const fonts={};for(const k of ['sans','serif','mono']){const b=fs.readFileSync(new URL('../source/public/fonts/'+k+'.ttf',import.meta.url));fonts[k]=opentype.parse(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength));}
const image={width:32,height:24,data:Array.from({length:768},(_,i)=>(i%32)/31)},resources={fonts,image};let count=0;const failures=[];
function check(id,changes={},roundtrip=false){try{const p={...defaults(id),...changes},parts=generate(id,p,resources),report=inspect(parts);assert.ok(report.valid,JSON.stringify(report.reports));assert.ok(report.size.every(x=>x>0&&Number.isFinite(x)));if(roundtrip){const bytes=stl(parts),again=inspect([meshFromBuffer(bytes,'model.stl')]);assert.ok(again.valid);assert.ok(again.size.every((x,i)=>Math.abs(x-report.size[i])<.01));assert.ok(Math.abs(again.volume-report.volume)<Math.max(.01,report.volume*1e-5));const archive=unzipSync(threeMF(parts));const xml=strFromU8(archive['3D/3dmodel.model']);assert.ok(xml.includes('unit="millimeter"'));assert.equal((xml.match(/<triangle /g)||[]).length,report.triangles);}count++;}catch(e){failures.push({id,changes,error:e.message});}}
for(const t of catalog)check(t.id,{},true);
for(const motif of catalog.find(t=>t.id==='cutter').fields.find(f=>f.key==='motif').options)for(const mode of ['Формочка','Трафарет','Штамп'])check('cutter',{motif,mode});
for(const character of ['А','Б','Я','O','8','9'])for(const mode of ['Формочка','Трафарет','Штамп'])check('cutter',{motif:'Буква или цифра',character,mode});
for(const phone of ['Да','Нет'])for(const [cols,rows] of [[1,1],[3,2],[5,3]])check('organizer',{phone,cols,rows});
for(const angle of [5,18,35])for(const cable of ['Да','Нет'])check('stand',{angle,cable},true);
for(const shape of ['Круг','Шестиугольник','Скруглённая'])check('coaster',{shape},true);
for(const mode of ['Кашпо с поддоном','Чехол','Спиральная печать'])check('vase',{mode},true);
for(const lid of ['Без крышки','Накладная','Вставная','Сдвижная'])check('box',{lid},true);
for(const part of ['Панель','Полка','Лоток','Держатель телефона','Крючок'])check('skadis',{part},true);
for(const shape of ['Дуга','Цилиндр'])check('lithophane',{shape},true);
for(const id of ['tag','plate'])for(const engrave of ['Рельеф','Гравировка'])check(id,{engrave},true);
fs.writeFileSync(new URL('../redesign-test-result.json',import.meta.url),JSON.stringify({passed:count,failures},null,2));console.log(JSON.stringify({passed:count,failures},null,2));if(failures.length)process.exit(1);
