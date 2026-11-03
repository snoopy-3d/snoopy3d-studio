import assert from 'node:assert/strict';
import fs from 'node:fs';
import {initialize,generate} from '../source/geometry.js';
import {defaults} from '../source/catalog.js';
import {silhouettes,envelopeFromChannels} from '../source/vase-shape.js';
import {encodeVaseCode,decodeVaseCode} from '../source/vase-code.js';
import {inspect,stl,threeMF,meshFromBuffer} from '../source/formats.js';
import {unzipSync,strFromU8} from 'fflate';
await initialize();let count=0;const failures=[];
const base={...defaults('vase'),profile:'Цилиндр',pattern:'Без узора',twist:0};
function check(label,change={},roundtrip=false){try{const p={...base,...change},parts=generate('vase',p),r=inspect(parts);assert.ok(r.valid,JSON.stringify(r.reports));assert.ok(r.size.every(Number.isFinite));assert.ok(Math.abs(r.size[2]-p.h)<.01);if(roundtrip){const again=inspect([meshFromBuffer(stl(parts),'vase.stl')]);assert.ok(again.valid);assert.ok(again.size.every((x,i)=>Math.abs(x-r.size[i])<.02));assert.ok(Math.abs(again.volume-r.volume)<r.volume*1e-5);const xml=strFromU8(unzipSync(threeMF(parts))['3D/3dmodel.model']);assert.ok(xml.includes('unit="millimeter"'));}count++;}catch(e){failures.push({label,error:e.message})}}
for(const profile of Object.keys(silhouettes))check(profile,{profile},true);
for(const pattern of ['Прежний рельеф','Без узора','Рёбра','Волны','Ромбы','Капли','Спираль','Грани','Плетение','Чешуя'])check(pattern,{pattern,wave:1,ribs:12,patternRows:4},true);
for(const section of ['Круг','Шестиугольник','Квадрат','Звезда','Многоугольник','Мягкий квадрат','Лепестки'])for(const twistCurve of ['Равномерно','Кверху','К основанию'])check(section+twistCurve,{section,twistCurve,twist:90,wave:.5});
for(const mode of ['Ваза','Кашпо с поддоном','Чехол','Спиральная печать'])check(mode,{mode},true);
check('Свой силуэт',{profile:'Свой силуэт',profileData:JSON.stringify([.6,.9,1,.8,.7,.5,.6])},true);
check('Высокая детализация',{quality:'Высокая'},true);
check('Двухцветная',{style:'Двухцветная'},true);
for(const section of ['Многоугольник','Мягкий квадрат','Лепестки'])check('Новое сечение с прежними размерами',{profile:'Прежние параметры',section,pattern:'Прежний рельеф',wave:.5},true);
const old=defaults('vase');for(const key of ['profile','pattern','vaseType','profileData','soundData','lightData','twistCurve','quality'])delete old[key];assert.ok(inspect(generate('vase',old)).valid);count++;
const soundData=JSON.stringify(Array.from({length:128},(_,i)=>(1+Math.sin(i/10))/2));
for(const soundDirection of ['Вокруг','Кольцами'])check(soundDirection,{vaseType:'Звуковая',soundDirection,soundData},true);
check('Звук и грани',{vaseType:'Звуковая',soundData,pattern:'Грани'},true);
check('Шов звуковой волны',{vaseType:'Звуковая',soundData:JSON.stringify(Array.from({length:128},(_,i)=>i/127))},true);
const lightData=JSON.stringify({width:96,height:96,data:Array.from({length:9216},(_,i)=>Math.floor(i%96/95*255))});
for(const lightInvert of ['Нет','Да'])check('Ночник '+lightInvert,{vaseType:'Ваза-ночник',lightData,lightInvert},true);
const rejects=[{profile:'Свой силуэт',profileData:'[0]'}, {vaseType:'Звуковая'}, {vaseType:'Ваза-ночник'}, {vaseType:'Ваза-ночник',lightData,lightMin:2,lightMax:1}, {vaseType:'Звуковая',soundData,mode:'Спиральная печать'}, {diameter:20,wall:12}, {soundDepth:100}];
for(const p of rejects){assert.throws(()=>generate('vase',{...base,...p}));count++;}
for(const p of [base,{...base,soundData},{...base,lightData}, {...base,profile:'Свой силуэт',profileData:'[1,1,1,1,1,1,1]'}]){assert.deepEqual(decodeVaseCode(encodeVaseCode(p)),p);count++;}
assert.throws(()=>decodeVaseCode('VZ-1234'));assert.throws(()=>decodeVaseCode(encodeVaseCode(base)+'x'));count+=2;
const signal=Float32Array.from({length:48000},(_,i)=>Math.sin(i*.1));const envelope=envelopeFromChannels([signal],48000);assert.equal(envelope.length,128);assert.ok(Math.max(...envelope)===1);assert.throws(()=>envelopeFromChannels([new Float32Array(100)],100));assert.throws(()=>envelopeFromChannels([signal],1000));count+=4;
fs.writeFileSync(new URL('./last-vase-result.json',import.meta.url),JSON.stringify({passed:count,failures},null,2));console.log(JSON.stringify({passed:count,failures}));if(failures.length)process.exitCode=1;
