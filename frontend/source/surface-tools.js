import {patternSection,patternValue} from './patterns.js';
export function radialDecoration(p,u,a,r){if(!p.wallPattern||p.wallPattern==='Гладкие')return 0;const name=p.wallPattern==='Прорези'?'Параллельные линии':p.wallPattern,x=a*r,y=u*p.h,fade=Math.min(1,u*p.h/3,(1-u)*p.h/3);return p.wallPatternDepth*patternValue(name,x,y,p.wallPatternPitch)*Math.max(0,fade);}
export function decorateSurfaces(parts,p,id,c){if(!p.wallPattern||p.wallPattern==='Гладкие'||['vase','lamp','stand'].includes(id))return parts;const {api,keep,extrude,move,diff}=c;const depth=Math.min(p.wallPatternDepth,(p.wall||p.h||2)*.3),name=p.wallPattern==='Прорези'?'Параллельные линии':p.wallPattern;
 return parts.map(part=>{if(part.noDecoration||/Штифт|Вкладыш|Ручка|шторка|Крышка/.test(part.name))return part;const b=part.solid.boundingBox(),w=b.max[0]-b.min[0],d=b.max[1]-b.min[1],h=b.max[2]-b.min[2],cuts=[];
  if(['plate','tag','coaster','skadis'].includes(id)){const shape=keep(part.solid.slice(b.max[2]-.1)),P=patternSection(api,keep,name,w,d,p.wallPatternPitch,.7);if(P&&!P.isEmpty()){const shifted=keep(P.translate([b.min[0],b.min[1]])),mask=keep(shifted.intersect(shape));if(!mask.isEmpty())cuts.push(move(extrude(mask,depth+.2),[0,0,b.max[2]-depth]));}}
  else if(h>8){for(const side of [0,1,2,3]){const span=side<2?w:d,P=patternSection(api,keep,name,span,h-6,p.wallPatternPitch,.8);if(!P||P.isEmpty())continue;const slab=extrude(P,depth+.2);const cut=side<2?move(keep(slab.rotate([90,0,0])),[b.min[0],side===0?b.min[1]+depth:b.max[1]+.1,b.min[2]+3]):move(keep(slab.rotate([90,0,90])),[side===2?b.min[0]-.1:b.max[0]-depth,b.min[1],b.min[2]+3]);cuts.push(cut);}}
  return cuts.length?{...part,solid:diff(part.solid,cuts)}:part;
 });
}
