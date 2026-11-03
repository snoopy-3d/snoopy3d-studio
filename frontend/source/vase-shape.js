// Independent parametric surface implementation. No third-party generator code.
export const silhouettes={
 'Цилиндр':[1,1,1,1,1,1,1], 'Бочка':[.72,.88,.98,1,.98,.88,.72],
 'Амфора':[.5,.82,1,.94,.68,.4,.46], 'Тюльпан':[.48,.58,.68,.74,.82,.92,1],
 'Бутылка':[.8,.94,.96,.94,.66,.37,.37], 'Кубок':[.42,.36,.44,.7,.92,1,.94],
 'Конус':[.5,.58,.67,.75,.83,.92,1], 'Шар':[.38,.77,.95,1,.95,.77,.38]
};
export const usesVaseConstructor=p=>p.profile!=='Прежние параметры'||p.vaseType!=='Обычная'||p.pattern!=='Прежний рельеф'||['Многоугольник','Мягкий квадрат','Лепестки'].includes(p.section)||p.twistCurve!=='Равномерно'||p.quality!=='Обычная';
const clamp=(x,a,b)=>Math.min(b,Math.max(a,x));
export function profilePoints(p){
 if(p.profile==='Свой силуэт'){let a;try{a=JSON.parse(p.profileData)}catch{}if(!Array.isArray(a)||a.length!==7||a.some(x=>!Number.isFinite(x)||x<.15||x>1.5))throw Error('Силуэт должен содержать семь радиусов от 15 до 150%.');return a;}
 return silhouettes[p.profile]||null;
}
function interpolate(a,t){const x=clamp(t,0,1)*(a.length-1),i=Math.min(a.length-2,Math.floor(x)),f=x-i;return a[i]+(a[i+1]-a[i])*f*f*(3-2*f);}
export function envelopeFromChannels(channels,sampleRate,maxSeconds=30){
 const length=Math.min(...channels.map(c=>c.length));if(!channels.length||!length||!Number.isFinite(sampleRate)||sampleRate<=0)throw Error('Аудиозапись пуста.');
 if(length/sampleRate>maxSeconds+.05)throw Error('Загрузите аудио длительностью до 30 секунд.');
 const out=Array.from({length:128},(_,i)=>{let sum=0,n=0;for(let k=Math.floor(i*length/128);k<Math.floor((i+1)*length/128);k++)for(const c of channels){sum+=c[k]*c[k];n++;}return Math.sqrt(sum/Math.max(1,n));});
 const peak=Math.max(...out);if(peak<1e-5)throw Error('В записи не найден звук.');return out.map(x=>Math.round(x/peak*1000)/1000);
}
export function buildVaseMesh(p){
 const profile=profilePoints(p),night=p.vaseType==='Ваза-ночник',sound=p.vaseType==='Звуковая',solid=p.mode==='Спиральная печать',open=p.mode==='Чехол';
 if((night||sound)&&solid)throw Error('Для звуковой вазы и ночника выберите обычную стенку, не спиральную печать.');
 let audio=null,image=null;
 if(sound){try{audio=JSON.parse(p.soundData)}catch{}if(!Array.isArray(audio)||audio.length!==128||audio.some(x=>!Number.isFinite(x)||x<0||x>1))throw Error('Загрузите аудио или запишите голос для звуковой вазы.');if(p.soundDirection==='Вокруг'){const seam=(audio[0]+audio[127])/2;audio[0]=seam;audio[127]=seam;}}
 if(night){try{image=JSON.parse(p.lightData)}catch{}if(!image||image.width!==96||image.height!==96||!Array.isArray(image.data)||image.data.length!==9216||image.data.some(x=>!Number.isInteger(x)||x<0||x>255))throw Error('Загрузите изображение для вазы-ночника.');if(p.lightMax<=p.lightMin)throw Error('Максимальная толщина ночника должна быть больше минимальной.');}
 let N=p.quality==='Высокая'?192:128,M=p.quality==='Высокая'?128:80;
 if(p.pattern==='Грани'){N=p.facets*Math.max(1,Math.floor(N/p.facets));M=48;}
 const bottom=open?0:p.bottom,vs=[],ts=[],q=(a,b,c,d)=>ts.push(a,b,c,a,c,d);
 const twistAt=u=>{const t=p.twistCurve==='Кверху'?u*u:p.twistCurve==='К основанию'?1-(1-u)*(1-u):u;return p.twist*Math.PI/180*t;};
 const radius=(u,a)=>{
  const rot=a-twistAt(u),r=profile?p.diameter/2*interpolate(profile,u):(p.diameter/2+(p.top-p.diameter)/2*u)*(1+p.bulge/100*Math.sin(Math.PI*u));
  let section=1;const fold=angle=>{const v=(rot+Math.PI/angle)%(2*Math.PI/angle);return ((v+2*Math.PI/angle)%(2*Math.PI/angle))-Math.PI/angle;};
  if(p.section==='Шестиугольник'||p.section==='Многоугольник'){const n=p.section==='Шестиугольник'?6:p.facets;section=Math.cos(Math.PI/n)/Math.cos(fold(n));}
  if(p.section==='Квадрат')section=1/Math.max(Math.abs(Math.cos(rot)),Math.abs(Math.sin(rot)));
  if(p.section==='Мягкий квадрат')section=1/Math.pow(Math.pow(Math.abs(Math.cos(rot)),4)+Math.pow(Math.abs(Math.sin(rot)),4),.25);
  if(p.section==='Звезда')section=1+.12*Math.cos(p.lobes*rot);
  if(p.section==='Лепестки')section=1+.12*(1+Math.cos(p.lobes*rot));
  const phase=p.ribs*rot,z=2*Math.PI*p.patternRows*u;let relief=0;
  if(p.pattern==='Прежний рельеф'||p.pattern==='Рёбра')relief=Math.cos(phase);
  if(p.pattern==='Волны')relief=Math.sin(phase+.8*Math.sin(z));
  if(p.pattern==='Ромбы')relief=Math.cos(phase)*Math.cos(z);
  if(p.pattern==='Капли')relief=Math.pow((1+Math.cos(phase))/2,3)*Math.pow((1+Math.cos(z))/2,2)*2-1;
  if(p.pattern==='Спираль')relief=Math.cos(phase-z);
  if(p.pattern==='Плетение')relief=(Math.sin(phase+z)+Math.sin(phase-z))/2;
  if(p.pattern==='Чешуя')relief=Math.cos(phase+Math.PI*Math.sin(z/2))*Math.pow((1+Math.cos(z))/2,2);
  if(p.pattern==='Грани'){const n=p.facets;section=Math.cos(Math.PI/n)/Math.cos(fold(n));}
  const fade=Math.min(1,u*p.h/Math.max(3,p.bottom*2));
  let out=r*section+p.wave*relief*fade;
  if(sound){const sample=p.soundDirection==='Кольцами'?u:((a/(2*Math.PI))%1+1)%1;out+=p.soundDepth*interpolate(audio,sample)*fade;}
  return out;
 };
 const wallAt=(u,a)=>{
  let w=p.wall;
  if(night){const x=((a/(2*Math.PI))%1+1)%1*(image.width-1),y=(1-u)*(image.height-1),i=Math.floor(x),j=Math.floor(y),fx=x-i,fy=y-j;
   const at=(xx,yy)=>image.data[clamp(yy,0,95)*96+clamp(xx,0,95)]/255;
   // Blend at the seam: first and final image columns share the same sample.
   const sample=(xx,yy)=>xx===0||xx===95?(at(0,yy)+at(95,yy))/2:at(xx,yy);
   let b=(sample(i,j)*(1-fx)+sample(i+1,j)*fx)*(1-fy)+(sample(i,j+1)*(1-fx)+sample(i+1,j+1)*fx)*fy;
   if(p.lightInvert==='Да')b=1-b;w=p.lightMin+(p.lightMax-p.lightMin)*(1-b);
  }
  // Radial allowance for surface slope; rejects collapsed inner walls below.
  const du=.001,da=.001,r=radius(u,a),dz=(radius(clamp(u+du,0,1),a)-radius(clamp(u-du,0,1),a))/(p.h*(Math.min(1,u+du)-Math.max(0,u-du))),dt=(radius(u,a+da)-radius(u,a-da))/(2*da*Math.max(2,r));
  return w*Math.sqrt(1+dz*dz+dt*dt);
 };
 for(let side=0;side<(solid?1:2);side++)for(let j=0;j<=M;j++)for(let k=0;k<N;k++){
  const z=side?bottom+(p.h-bottom)*j/M:p.h*j/M,u=z/p.h,a=2*Math.PI*k/N,r=radius(u,a)-(side?wallAt(u,a):0);
  if(!Number.isFinite(r)||r<2)throw Error('Силуэт слишком узкий для стенки или рельефа. Увеличьте диаметр либо уменьшите рельеф и толщину.');
  vs.push([r*Math.cos(a),r*Math.sin(a),z]);
 }
 const ix=(s,j,k)=>s*(M+1)*N+j*N+(k+N)%N;
 for(let j=0;j<M;j++)for(let k=0;k<N;k++){q(ix(0,j,k),ix(0,j,k+1),ix(0,j+1,k+1),ix(0,j+1,k));if(!solid)q(ix(1,j+1,k),ix(1,j+1,k+1),ix(1,j,k+1),ix(1,j,k));}
 if(solid){const b=vs.length;vs.push([0,0,0],[0,0,p.h]);for(let k=0;k<N;k++)ts.push(b,ix(0,0,k+1),ix(0,0,k),b+1,ix(0,M,k),ix(0,M,k+1));}
 else{for(let k=0;k<N;k++)q(ix(0,M,k),ix(0,M,k+1),ix(1,M,k+1),ix(1,M,k));if(open){for(let k=0;k<N;k++)q(ix(0,0,k+1),ix(0,0,k),ix(1,0,k),ix(1,0,k+1));}else{const b=vs.length;vs.push([0,0,0],[0,0,bottom]);for(let k=0;k<N;k++)ts.push(b,ix(0,0,k+1),ix(0,0,k),b+1,ix(1,0,k),ix(1,0,k+1));}}
 return {vertices:vs,triangles:ts};
}
