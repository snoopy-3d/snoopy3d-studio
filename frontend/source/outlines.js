import {circleSegments} from './quality.js';
export const outlineNames=['Прямоугольник','Скруглённая','Круг','Овал','Шестиугольник','Восьмиугольник','Треугольник','Ромб','Щит','Сердце','Кость','Звезда','Цветок','Облако','Лист','Капля','Капсула','Билет','Котик','Лапка','Шестерня'];
export function makeOutline(api,p,keep){const C=api.CrossSection,w=p.w,d=p.d??w,N=Math.max(192,circleSegments(Math.max(w,d)/2,p)),poly=pts=>keep(new C([pts],'EvenOdd')),ellipse=(x,y,rx,ry)=>keep(C.circle(1,N).scale([rx,ry]).translate([x,y])),union=(...a)=>keep(C.union(a.flat())),rect=(x,y,W,H)=>keep(C.square([W,H]).translate([x,y]));let a;
 const radial=(r,n=N)=>poly(Array.from({length:n},(_,i)=>{const t=i*2*Math.PI/n;return[Math.cos(t)*r(t),Math.sin(t)*r(t)]}));
 switch(p.shape){
 case 'Круг':case 'Овал':a=ellipse(0,0,w/2,p.shape==='Круг'?w/2:d/2);break;
 case 'Скруглённая':case 'Мягкий квадрат':{const r=Math.min(p.radius??Math.min(w,d)*.18,w/2-.01,d/2-.01);a=keep(C.square([w-2*r,d-2*r]).offset(r,'Round',2,N).translate([r,r]));break;}
 case 'Шестиугольник':case 'Восьмиугольник':case 'Треугольник':case 'Ромб':{const n=({'Шестиугольник':6,'Восьмиугольник':8,'Треугольник':3,'Ромб':4})[p.shape];a=radial(()=>1,n);break;}
 case 'Щит':a=poly([[-1,1],[1,1],[1,-.25],[.6,-.7],[0,-1],[-.6,-.7],[-1,-.25]]);break;
 case 'Сердце':a=poly(Array.from({length:N},(_,i)=>{const t=i*2*Math.PI/N;return[16*Math.sin(t)**3,13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t)]}));break;
 case 'Кость':a=union(rect(-.65,-.25,1.3,.5),[[-.65,-.3],[-.65,.3],[.65,-.3],[.65,.3]].map(([x,y])=>ellipse(x,y,.4,.4)));break;
 case 'Звезда':a=poly(Array.from({length:10},(_,i)=>{const t=i*Math.PI/5+Math.PI/2,r=i%2?.46:1;return[Math.cos(t)*r,Math.sin(t)*r]}));break;
 case 'Цветок':a=radial(t=>.8+.2*Math.cos(6*t));break;
 case 'Облако':a=union(rect(-.8,-.5,1.6,.7),ellipse(-.65,0,.45,.5),ellipse(-.1,.25,.65,.7),ellipse(.65,.05,.5,.55));break;
 case 'Лист':a=poly(Array.from({length:N},(_,i)=>{const t=i*2*Math.PI/N;return[Math.sin(t)*(.65+.2*Math.cos(t)),Math.cos(t)]}));break;
 case 'Капля':a=radial(t=>1-.55*Math.sin(t));break;
 case 'Капсула':a=union(rect(-.5,-.5,1,1),ellipse(-.5,0,.5,.5),ellipse(.5,0,.5,.5));break;
 case 'Билет':a=keep(rect(-1,-.5,2,1).subtract(union(ellipse(-1,0,.2,.2),ellipse(1,0,.2,.2))));break;
 case 'Котик':a=union(ellipse(0,0,1,.85),poly([[-.9,.3],[-.85,1.2],[-.2,.75]]),poly([[.2,.75],[.85,1.2],[.9,.3]]));break;
 case 'Лапка':a=union(ellipse(0,-.18,.9,.85),ellipse(-.8,.4,.3,.4),ellipse(-.3,.85,.28,.4),ellipse(.3,.85,.28,.4),ellipse(.8,.4,.3,.4));break;
 case 'Шестерня':a=radial(t=>1+.1*Math.tanh(4*Math.cos(12*t)));break;
 default:a=rect(0,0,w,d);
 }
 let b=a.bounds(),W=b.max[0]-b.min[0],D=b.max[1]-b.min[1];a=keep(a.translate([-b.min[0],-b.min[1]]).scale([w/W,(p.shape==='Круг'?w:d)/D]));
 const soft=p.contourRound||0;if(soft>0){const inner=keep(a.offset(-soft,'Round',2,N));if(!inner.isEmpty())a=keep(inner.offset(soft,'Round',2,N));}
 return a;
}
