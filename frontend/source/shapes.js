// Original, procedural silhouettes. They do not contain third-party SVG artwork.
export function customShape(api,p,fonts,keep,textSection){
 const C=api.CrossSection;
 const poly=points=>keep(new C([points],'EvenOdd'));
 const circle=(x,y,r)=>keep(C.circle(r,64).translate([x,y]));
 const rect=(x,y,w,h)=>keep(C.square([w,h]).translate([x,y]));
 const merge=(...items)=>keep(C.union(items.flat()));
 const oval=(x,y,rx,ry)=>keep(C.circle(1,64).scale([rx,ry]).translate([x,y]));
 const star=(n=5,r=45,inner=21)=>poly(Array.from({length:n*2},(_,i)=>{const a=i*Math.PI/n+Math.PI/2;return[Math.cos(a)*(i%2?inner:r),Math.sin(a)*(i%2?inner:r)]}));
 const animal=(ears,tail=false)=>merge(oval(48,36,32,22),circle(70,66,23),...ears,...(tail?[poly([[20,35],[0,70],[10,27]])]:[]),rect(25,0,14,30),rect(59,0,14,30));
 let shape;
 switch(p.motif){
 case 'Звёздочка':shape=star();break;
 case 'Сердце':shape=poly(Array.from({length:128},(_,i)=>{const a=i*Math.PI*2/128;return[16*Math.sin(a)**3,13*Math.cos(a)-5*Math.cos(2*a)-2*Math.cos(3*a)-Math.cos(4*a)]}));break;
 case 'Цветок':shape=merge(circle(0,0,20),Array.from({length:6},(_,i)=>circle(Math.cos(i*Math.PI/3)*22,Math.sin(i*Math.PI/3)*22,18)));break;
 case 'Круг':shape=circle(0,0,45);break;
 case 'Квадрат':shape=rect(0,0,85,85);break;
 case 'Треугольник':shape=poly([[0,0],[90,0],[45,85]]);break;
 case 'Шестиугольник':shape=poly(Array.from({length:6},(_,i)=>[Math.cos(i*Math.PI/3)*45,Math.sin(i*Math.PI/3)*45]));break;
 case 'Собачка':shape=animal([oval(53,80,10,21),oval(83,65,14,18)],true);break;
 case 'Кошечка':shape=animal([poly([[48,70],[48,105],[69,83]]),poly([[72,82],[92,105],[94,68]])],true);break;
 case 'Зайчик':shape=merge(oval(45,30,32,29),circle(57,59,22),oval(44,86,10,27),oval(66,88,10,29),circle(12,25,12));break;
 case 'Мишка':shape=merge(circle(45,35,30),circle(45,72,23),circle(24,91,12),circle(66,91,12),circle(15,40,15),circle(75,40,15),oval(27,8,17,11),oval(63,8,17,11));break;
 case 'Рыбка':shape=merge(oval(50,40,34,24),poly([[23,40],[0,67],[0,13]]),poly([[44,55],[62,80],[70,53]]));break;
 case 'Бабочка':shape=merge(oval(0,0,7,36),oval(-25,18,27,23),oval(25,18,27,23),oval(-21,-21,22,22),oval(21,-21,22,22));break;
 case 'Птичка':shape=merge(oval(40,35,32,24),circle(63,62,22),poly([[80,70],[105,60],[80,52]]),poly([[15,40],[-15,63],[0,25]]));break;
 case 'Черепашка':shape=merge(oval(45,40,32,26),circle(86,43,14),circle(25,13,11),circle(65,13,11),circle(25,66,11),circle(65,66,11));break;
 case 'Динозавр':shape=merge(oval(45,35,29,26),rect(55,40,18,35),circle(70,76,19),poly([[20,37],[-20,59],[19,15]]),rect(29,0,12,24),rect(56,0,12,24),poly([[30,55],[30,83],[46,59]]));break;
 case 'Лисичка':shape=merge(oval(45,35,29,23),poly([[30,60],[30,99],[54,76],[81,101],[79,55],[57,37]]),poly([[20,36],[-10,64],[-7,29],[23,20]]));break;
 case 'Ёжик':shape=merge(star(11,38,27),poly([[20,-17],[58,-8],[33,12]]));break;
 case 'Машинка':shape=merge(rect(0,15,95,30),poly([[15,44],[30,70],[65,70],[83,44]]),circle(22,15,15),circle(73,15,15));break;
 case 'Самолёт':shape=merge(oval(0,0,10,48),poly([[-7,12],[-50,-20],[-50,-31],[0,-12],[50,-31],[50,-20],[7,12]]),poly([[-7,-27],[-27,-43],[27,-43],[7,-27]]));break;
 case 'Ракета':shape=merge(poly([[-18,-28],[-18,20],[0,49],[18,20],[18,-28]]),poly([[-16,-5],[-35,-37],[-14,-28]]),poly([[16,-5],[35,-37],[14,-28]]),poly([[-10,-25],[0,-47],[10,-25]]));break;
 case 'Кораблик':shape=merge(poly([[0,18],[95,18],[74,-5],[20,-5]]),rect(45,15,5,75),poly([[40,30],[40,90],[6,30]]),poly([[53,30],[53,78],[83,30]]));break;
 case 'Домик':shape=merge(rect(10,0,70,55),poly([[0,53],[45,92],[90,53]]));break;
 case 'Ёлочка':shape=merge(poly([[0,48],[-32,5],[-17,5],[-45,-26],[45,-26],[17,5],[32,5]]),rect(-7,-43,14,25));break;
 case 'Облачко':shape=merge(rect(0,0,75,28),circle(7,26,22),circle(33,40,28),circle(62,30,22));break;
 case 'Солнышко':shape=merge(circle(0,0,29),star(12,47,27));break;
 case 'Луна':shape=keep(circle(0,0,45).subtract(circle(22,7,39)));break;
 case 'Листик':shape=poly(Array.from({length:96},(_,i)=>{const a=i*Math.PI*2/96;return[Math.sin(a)*30,Math.cos(a)*48]}));break;
 case 'Яблочко':shape=merge(circle(-16,0,29),circle(16,0,29),rect(-4,18,8,24),oval(12,34,19,9));break;
 case 'Грибочек':shape=merge(rect(-13,-34,26,45),keep(circle(0,0,45).intersect(rect(-50,0,100,50))));break;
 case 'Снежинка':shape=merge(Array.from({length:6},(_,i)=>keep(rect(-5,0,10,45).rotate(i*60))));break;
 case 'Буква или цифра':{const ch=p.character.trim();if([...ch].length!==1||!/[А-Яа-яЁёA-Za-z0-9]/.test(ch))throw Error('Введите одну букву или цифру');shape=textSection(ch,fonts[p.font],80);break;}
 default:throw Error('Выберите мотив из каталога');
 }
 const b=shape.bounds(),w=b.max[0]-b.min[0],h=b.max[1]-b.min[1];
 if(w<=0||h<=0)throw Error('Пустой контур');
 return keep(shape.translate([-b.min[0],-b.min[1]]).scale([p.w/w,p.d/h]));
}
