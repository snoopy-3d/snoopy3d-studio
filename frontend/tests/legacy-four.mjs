import {initialize,generate} from '../source/geometry.js';
import {catalog,defaults} from '../source/catalog.js';
import {inspect,stl,threeMF} from '../source/formats.js';
import opentype from 'opentype.js';import fs from 'node:fs';import assert from 'node:assert/strict';
await initialize();const fonts={};for(const k of ['sans','serif','mono']){const b=fs.readFileSync('source/public/fonts/'+k+'.ttf');fonts[k]=opentype.parse(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength));}
const results=[],failures=[];fs.mkdirSync('test-output/four/samples',{recursive:true});
function check(id,changes={},label='default'){try{const p={...defaults(id),...changes},parts=generate(id,p,{fonts}),r=inspect(parts);assert.ok(r.valid,JSON.stringify(r.reports));const bytes=stl(parts);assert.ok(bytes.byteLength>84);results.push({id,label,triangles:r.triangles,size:r.size,volume:r.volume});if(label==='default'){fs.writeFileSync('test-output/four/samples/'+id+'.stl',new Uint8Array(bytes));fs.writeFileSync('test-output/four/samples/'+id+'.3mf',threeMF(parts));}console.log('PASS',id,label);return r;}catch(e){failures.push({id,label,error:e.message});console.log('FAIL',id,label,e.message);}}
assert.ok(['box','vase','lamp','skadis'].every(id=>catalog.some(t=>t.id===id)));
for(const id of ['box','vase','lamp','skadis'])check(id);
for(const lid of ['Без крышки','Накладная','Вставная','Сдвижная']){check('box',{lid,cols:3,rows:2},lid+' dividers');if(lid!=='Без крышки'){const a=check('box',{lid,text:''},lid+' blank'),b=check('box',{lid},lid+' text');if(a&&b)assert.ok(b.volume>a.volume+5,'Text must be attached and visible '+lid);}}
check('box',{engrave:'Гравировка',relief:.6,texture:'Рифлёные'},'engraved ribbed');
for(const mode of ['Кашпо с поддоном','Чехол','Спиральная печать'])check('vase',{mode},mode);
for(const section of ['Шестиугольник','Квадрат','Звезда'])check('vase',{section},section);
check('vase',{style:'Двухцветная'},'two colors');
for(const style of ['Звёздное небо','Ажурные ромбы'])check('lamp',{style,ribs:0,wave:0},style);
check('lamp',{mount:'Сверху',socket:'E14',diffuser:'Да'},'E14 diffuser');
check('lamp',{socket:'Свой',socketDiameter:35},'custom socket');
for(const part of catalog.find(t=>t.id==='skadis').fields.find(f=>f.key==='part').options)if(part!=='Панель')check('skadis',{part},part);
check('skadis',{part:'Крючок',hooks:4},'four hooks');check('skadis',{part:'Лоток',divX:3,divY:2},'tray dividers');
for(const holes of [0,1,2,4])check('skadis',{holes,spacer:4},'panel holes '+holes);
for(const [id,change] of [['box',{wall:60}],['box',{engrave:'Гравировка',relief:3}],['skadis',{holes:3}],['vase',{wall:.8,wave:8,ribs:64}]])assert.throws(()=>generate(id,{...defaults(id),...change},{fonts}));
for(const id of ['gridfinity','mold','terrain','lithophane','plate','tag','pet','qr','garden','illusion'])assert.throws(()=>generate(id,{}));
fs.writeFileSync('test-output/four/geometry.json',JSON.stringify({results,failures},null,2));console.log(results.length+' passed; '+failures.length+' failed');if(failures.length)process.exitCode=1;
