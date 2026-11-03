export function resolveAutoMounts(api,keep,outline,p,w,d,coords){
 if(p.holePosition!=='Авто')return coords;
 const radius=p.holeShape==='Под потай'?p.hole*.85:p.hole/2;
 const fits=([x,y])=>{const shape=p.holeShape==='Продолговатое'?keep(api.CrossSection.square([Math.max(.01,p.slotLength-p.hole),.01]).offset(p.hole/2+1.2,'Round',2,96).translate([x-Math.max(.01,p.slotLength-p.hole)/2,y])):keep(api.CrossSection.circle(radius+1.2,96).translate([x,y]));return keep(shape.subtract(outline)).area()<.001;};
 const selected=[];
 for(const target of coords){const separated=point=>selected.every(other=>Math.hypot(point[0]-other[0],point[1]-other[1])>Math.max(p.hole*2,p.slotLength||0));if(fits(target)&&separated(target)){selected.push(target);continue;}
  const candidates=[];for(let y=1;y<20;y++)for(let x=1;x<20;x++)candidates.push([w*x/20,d*y/20]);candidates.sort((a,b)=>Math.hypot(a[0]-target[0],a[1]-target[1])-Math.hypot(b[0]-target[0],b[1]-target[1]));const point=candidates.find(point=>separated(point)&&fits(point));if(!point)throw Error('Для крепления мало места. Уменьшите отверстие или увеличьте контур.');selected.push(point);
 }
 return selected;
}
