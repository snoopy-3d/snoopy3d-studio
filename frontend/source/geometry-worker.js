import {initialize,generate} from './geometry.js';
import {inspect} from './formats.js';
import opentype from 'opentype.js';
import wasmURL from 'manifold-3d/manifold.wasm?url';
let ready,fonts={};
self.onmessage=async({data})=>{const {id,type,parameters,resources,baseURL}=data;try{if(!ready)ready=Promise.all([initialize({locateFile:()=>wasmURL}),...['sans','serif','mono'].map(async k=>{const r=await fetch(new URL('fonts/'+k+'.ttf',baseURL));if(!r.ok)throw Error('Не загружен шрифт '+k);fonts[k]=opentype.parse(await r.arrayBuffer())})]);await ready;const parts=generate(type,parameters,{...resources,fonts}),check=inspect(parts);if(!check.valid)throw Error('Сетка не прошла проверку: '+check.reports.filter(r=>!r.valid).map(r=>r.name).join(', '));const transfer=[],packed=parts.map(p=>{const vertices=new Float32Array(p.vertices.flat()),triangles=new Uint32Array(p.triangles);transfer.push(vertices.buffer,triangles.buffer);return {...p,vertices,triangles}});self.postMessage({id,parts:packed,check},transfer);}catch(e){self.postMessage({id,error:e.message});}};
