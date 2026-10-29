(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();const va=[{id:"box",name:"Коробки",icon:"▣",description:"Крышка, перегородки, скругление и надпись",fields:[{key:"w",label:"Ширина, мм",value:100,min:10,max:500,step:.1,type:"number"},{key:"d",label:"Глубина, мм",value:80,min:10,max:500,step:.1,type:"number"},{key:"h",label:"Высота, мм",value:40,min:3,max:500,step:.1,type:"number"},{key:"wall",label:"Стенка, мм",value:2,min:.8,max:12,step:.1,type:"number"},{key:"bottom",label:"Дно, мм",value:2,min:.8,max:12,step:.1,type:"number"},{key:"radius",label:"Радиус углов, мм",value:4,min:0,max:30,step:.1,type:"number"},{key:"lid",label:"Крышка",value:"Накладная",options:["Без крышки","Накладная","Вставная","Сдвижная"],type:"select"},{key:"clearance",label:"Зазор посадки, мм",value:.3,min:.15,max:1,step:.1,type:"number"},{key:"cols",label:"Колонки",value:1,min:1,max:8,step:1,type:"number"},{key:"rows",label:"Ряды",value:1,min:1,max:8,step:1,type:"number"},{key:"texture",label:"Стенки",value:"Гладкие",options:["Гладкие","Рифлёные"],type:"select"},{key:"text",label:"Надпись (до 3 строк, разделитель /)",value:"SNOOPY3D",type:"text"},{key:"font",label:"Шрифт",value:"sans",options:["sans","serif","mono"],type:"select"},{key:"textSize",label:"Высота текста, мм",value:10,min:3,max:80,step:.1,type:"number"},{key:"relief",label:"Рельеф, мм",value:1,min:.4,max:5,step:.1,type:"number"},{key:"engrave",label:"Текст",value:"Рельеф",options:["Рельеф","Гравировка"],type:"select"},{key:"align",label:"Выравнивание",value:"Центр",options:["Слева","Центр","Справа"],type:"select"},{key:"spacing",label:"Интервал букв, мм",value:0,min:0,max:5,step:.1,type:"number"}],notes:"Корпус и крышка разложены рядом на столе. Посадочный зазор регулируется."},{id:"vase",name:"Вазы и кашпо",icon:"◉",description:"Профиль, шёлк, скрутка, дренаж и поддон",fields:[{key:"style",label:"Образ",value:"Классика",options:["Классика","Конус с рёбрами","Гранёная","Волнистая","Плиссе","Шёлковая","Элегантная","Рифлёная","Закрученная","Гладкая","Кашпо","Двухцветная","Ромбы","Звезда-вихрь","Мягкий квадрат","Чехол-волна","Косой срез","Лепестки"],type:"select"},{key:"h",label:"Высота, мм",value:130,min:20,max:300,step:.1,type:"number"},{key:"diameter",label:"Диаметр снизу, мм",value:90,min:20,max:260,step:.1,type:"number"},{key:"top",label:"Диаметр горловины, мм",value:65,min:15,max:260,step:.1,type:"number"},{key:"bulge",label:"Выпуклость, %",value:20,min:-40,max:80,step:1,type:"number"},{key:"ribs",label:"Рёбра",value:24,min:0,max:64,step:1,type:"number"},{key:"wave",label:"Глубина рельефа, мм",value:2,min:0,max:10,step:.1,type:"number"},{key:"twist",label:"Скрутка, °",value:90,min:-360,max:360,step:1,type:"number"},{key:"section",label:"Сечение",value:"Круг",options:["Круг","Шестиугольник","Квадрат","Звезда"],type:"select"},{key:"wall",label:"Стенка, мм",value:2,min:.8,max:12,step:.1,type:"number"},{key:"bottom",label:"Дно, мм",value:2,min:.8,max:12,step:.1,type:"number"},{key:"mode",label:"Назначение",value:"Ваза",options:["Ваза","Кашпо с поддоном","Чехол","Спиральная печать"],type:"select"},{key:"drain",label:"Дренаж, мм",value:6,min:2,max:20,step:.1,type:"number"},{key:"seed",label:"Номер формы",value:1,min:1,max:999999,step:1,type:"number"},{key:"colorSplit",label:"Граница второго цвета, %",value:50,min:10,max:90,step:1,type:"number"}],notes:"Для спиральной печати экспортируется замкнутый внешний объём; дно и один периметр настраиваются в слайсере."},{id:"lamp",name:"Абажуры",icon:"✧",description:"Форма, узор, патрон E27/E14 и диффузор",fields:[{key:"style",label:"Образ",value:"Плиссе-конус",options:["Плиссе-конус","Купол","Витой шестигранник","Звёздное небо","Ажурные ромбы","Бочка-волна","Плетёный колокол","Песочные часы","Барабан"],type:"select"},{key:"h",label:"Высота, мм",value:130,min:20,max:300,step:.1,type:"number"},{key:"diameter",label:"Диаметр снизу, мм",value:90,min:20,max:260,step:.1,type:"number"},{key:"top",label:"Диаметр горловины, мм",value:65,min:15,max:260,step:.1,type:"number"},{key:"bulge",label:"Выпуклость, %",value:20,min:-40,max:80,step:1,type:"number"},{key:"ribs",label:"Рёбра",value:24,min:0,max:64,step:1,type:"number"},{key:"wave",label:"Глубина рельефа, мм",value:2,min:0,max:10,step:.1,type:"number"},{key:"twist",label:"Скрутка, °",value:90,min:-360,max:360,step:1,type:"number"},{key:"section",label:"Сечение",value:"Круг",options:["Круг","Шестиугольник","Квадрат","Звезда"],type:"select"},{key:"wall",label:"Стенка, мм",value:2,min:.8,max:12,step:.1,type:"number"},{key:"bottom",label:"Дно, мм",value:2,min:.8,max:12,step:.1,type:"number"},{key:"mount",label:"Положение патрона",value:"Снизу",options:["Снизу","Сверху"],type:"select"},{key:"socket",label:"Патрон",value:"E27",options:["E27","E14","Свой","Без крепления"],type:"select"},{key:"socketDiameter",label:"Свой диаметр, мм",value:40,min:20,max:60,step:.1,type:"number"},{key:"ring",label:"Толщина кольца, мм",value:3,min:2,max:8,step:.1,type:"number"},{key:"spokes",label:"Спицы",value:4,min:3,max:8,step:1,type:"number"},{key:"diffuser",label:"Диффузор",value:"Нет",options:["Нет","Да"],type:"select"}],notes:"Только LED. Допустимая температура и посадка зависят от материала и реального патрона."},{id:"skadis",name:"SKÅDIS",icon:"▧",description:"Панель и аксессуары с креплениями",fields:[{key:"part",label:"Деталь",value:"Панель",options:["Панель","Крючок","Полка","Лоток","Стакан","Держатель кабеля","Держатель наушников","Держатель отвёртки","Держатель плоскогубцев","Держатель скотча","Держатель катушки","Держатель телефона","Зажим","Крепёж"],type:"select"},{key:"cols",label:"Шаги X (40 мм)",value:4,min:1,max:8,step:1,type:"number"},{key:"rows",label:"Шаги Y (40 мм)",value:4,min:1,max:8,step:1,type:"number"},{key:"h",label:"Толщина панели, мм",value:5,min:4,max:10,step:.1,type:"number"},{key:"w",label:"Ширина аксессуара, мм",value:100,min:20,max:240,step:.1,type:"number"},{key:"d",label:"Глубина аксессуара, мм",value:60,min:15,max:160,step:.1,type:"number"},{key:"height",label:"Высота аксессуара, мм",value:40,min:10,max:150,step:.1,type:"number"},{key:"wall",label:"Стенка, мм",value:2.4,min:1.2,max:8,step:.1,type:"number"},{key:"hooks",label:"Крючки",value:1,min:1,max:4,step:1,type:"number"},{key:"divX",label:"Отсеки лотка X",value:1,min:1,max:8,step:1,type:"number"},{key:"divY",label:"Отсеки лотка Y",value:1,min:1,max:8,step:1,type:"number"},{key:"clipGap",label:"Зазор зажима, мм",value:2,min:.5,max:8,step:.1,type:"number"},{key:"clearance",label:"Зазор крепления, мм",value:.25,min:0,max:.6,step:.1,type:"number"},{key:"panelThickness",label:"Толщина ответной панели, мм",value:5,min:3,max:8,step:.1,type:"number"},{key:"clipBulge",label:"Выступ защёлки, мм",value:.4,min:.2,max:.7,step:.1,type:"number"},{key:"spacer",label:"Дистанционная рамка, мм",value:0,min:0,max:15,step:.1,type:"number"},{key:"holes",label:"Монтажные отверстия",value:4,min:0,max:4,step:1,type:"number"},{key:"hole",label:"Диаметр крепёжных отверстий, мм",value:5,min:3,max:8,step:.1,type:"number"}],notes:"Номинальные отверстия 5×15 мм. Крепления требуют теста посадки на вашей панели."}],fh=t=>{const e=va.find(n=>n.id===t);if(!e)throw Error("Генератор недоступен");return Object.fromEntries(e.fields.map(n=>[n.key,n.value]))},fm="modulepreload",hm=function(t){return"/snoopy3d-studio/"+t},vu={},dm=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),o=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));i=Promise.allSettled(n.map(l=>{if(l=hm(l),l in vu)return;vu[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":fm,c||(h.as="script"),h.crossOrigin="",h.href=l,o&&h.setAttribute("nonce",o),document.head.appendChild(h),c)return new Promise((f,p)=>{h.addEventListener("load",f),h.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function a(s){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s}return i.then(s=>{for(const o of s||[])o.status==="rejected"&&a(o.reason);return e().catch(a)})};var pm=(()=>{var t=import.meta.url;return async function(e={}){var n,r=e,i,a,s=new Promise((v,g)=>{i=v,a=g}),o=typeof window=="object",l=typeof importScripts=="function",c=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string";if(c){const{createRequire:v}=await dm(()=>import("./__vite-browser-external-BIHI7g3E.js"),[]);var u=v(import.meta.url)}var h=!1;r.setup=function(){if(h)return;h=!0,r.initTBB();function v(O,W,se=_e=>_e){if(W)for(let _e of W)O.push_back(se(_e));return O}function g(O,W=se=>se){const se=[],_e=O.size();for(let it=0;it<_e;it++)se.push(W(O.get(it)));return se}function A(O,W=se=>se){const se=[],_e=O.size();for(let it=0;it<_e;it++){const Pt=O.get(it),jt=Pt.size(),Sn=[];for(let zt=0;zt<jt;zt++)Sn.push(W(Pt.get(zt)));se.push(Sn)}return se}function L(O){return O[0].length<3&&(O=[O]),v(new r.Vector2_vec2,O,W=>v(new r.Vector_vec2,W,se=>se instanceof Array?{x:se[0],y:se[1]}:se))}function z(O){for(let W=0;W<O.size();W++)O.get(W).delete();O.delete()}function Q(O){return O[0]instanceof Array?{x:O[0][0],y:O[0][1]}:typeof O[0]=="number"?{x:O[0]||0,y:O[1]||0}:O[0]}function ue(O){return O[0]instanceof Array?{x:O[0][0],y:O[0][1],z:O[0][2]}:typeof O[0]=="number"?{x:O[0]||0,y:O[1]||0,z:O[2]||0}:O[0]}function te(O){return O=="EvenOdd"?0:O=="NonZero"?1:O=="Negative"?3:2}function he(O){return O=="Round"?1:O=="Miter"?2:0}const ge=r.CrossSection;function be(O,W="Positive"){if(O instanceof ge)return O;{const se=L(O),_e=new ge(se,te(W));return z(se),_e}}r.CrossSection.prototype.translate=function(...O){return this._Translate(Q(O))},r.CrossSection.prototype.scale=function(O){return typeof O=="number"?this._Scale({x:O,y:O}):this._Scale(Q([O]))},r.CrossSection.prototype.mirror=function(O){return this._Mirror(Q([O]))},r.CrossSection.prototype.warp=function(O){const W=Ea(function(_e){const it=vt(_e,"double"),Pt=vt(_e+8,"double"),jt=[it,Pt];O(jt),D(_e,jt[0],"double"),D(_e+8,jt[1],"double")},"vi"),se=this._Warp(W);return Ta(W),se},r.CrossSection.prototype.decompose=function(){const O=this._Decompose(),W=g(O);return O.delete(),W},r.CrossSection.prototype.bounds=function(){const O=this._Bounds();return{min:["x","y"].map(W=>O.min[W]),max:["x","y"].map(W=>O.max[W])}},r.CrossSection.prototype.offset=function(O,W="Round",se=2,_e=0){return this._Offset(O,he(W),se,_e)},r.CrossSection.prototype.simplify=function(O=1e-6){return this._Simplify(O)},r.CrossSection.prototype.extrude=function(O,W=0,se=0,_e=[1,1],it=!1){_e=Q([_e]);const Pt=r._Extrude(this._ToPolygons(),O,W,se,_e);return it?Pt.translate([0,0,-O/2]):Pt},r.CrossSection.prototype.revolve=function(O=0,W=360){return r._Revolve(this._ToPolygons(),O,W)},r.CrossSection.prototype.add=function(O){return this._add(be(O))},r.CrossSection.prototype.subtract=function(O){return this._subtract(be(O))},r.CrossSection.prototype.intersect=function(O){return this._intersect(be(O))},r.CrossSection.prototype.toPolygons=function(){const O=this._ToPolygons(),W=A(O,se=>[se.x,se.y]);return O.delete(),W},r.Manifold.prototype.smoothOut=function(O=60,W=0){return this._SmoothOut(O,W)},r.Manifold.prototype.warp=function(O){const W=Ea(function(it){const Pt=vt(it,"double"),jt=vt(it+8,"double"),Sn=vt(it+16,"double"),zt=[Pt,jt,Sn];O(zt),D(it,zt[0],"double"),D(it+8,zt[1],"double"),D(it+16,zt[2],"double")},"vi"),se=this._Warp(W);Ta(W);const _e=se.status();if(_e!=="NoError")throw new r.ManifoldError(_e);return se},r.Manifold.prototype.calculateNormals=function(O,W=60){return this._CalculateNormals(O,W)},r.Manifold.prototype.setProperties=function(O,W){const se=this.numProp(),_e=Ea(function(Pt,jt,Sn){const zt=[];for(let Ht=0;Ht<O;++Ht)zt[Ht]=vt(Pt+8*Ht,"double");const Gi=[];for(let Ht=0;Ht<3;++Ht)Gi[Ht]=vt(jt+8*Ht,"double");const zi=[];for(let Ht=0;Ht<se;++Ht)zi[Ht]=vt(Sn+8*Ht,"double");W(zt,Gi,zi);for(let Ht=0;Ht<O;++Ht)D(Pt+8*Ht,zt[Ht],"double")},"viii"),it=this._SetProperties(O,_e);return Ta(_e),it},r.Manifold.prototype.translate=function(...O){return this._Translate(ue(O))},r.Manifold.prototype.rotate=function(O,W,se){return Array.isArray(O)?this._Rotate(...O):this._Rotate(O,W||0,se||0)},r.Manifold.prototype.scale=function(O){return typeof O=="number"?this._Scale({x:O,y:O,z:O}):this._Scale(ue([O]))},r.Manifold.prototype.mirror=function(O){return this._Mirror(ue([O]))},r.Manifold.prototype.trimByPlane=function(O,W=0){return this._TrimByPlane(ue([O]),W)},r.Manifold.prototype.slice=function(O=0){const W=this._Slice(O),se=new ge(W,te("Positive"));return z(W),se},r.Manifold.prototype.project=function(){const O=this._Project(),W=new ge(O,te("Positive"));return z(O),W},r.Manifold.prototype.split=function(O){const W=this._Split(O),se=g(W);return W.delete(),se},r.Manifold.prototype.splitByPlane=function(O,W=0){const se=this._SplitByPlane(ue([O]),W),_e=g(se);return se.delete(),_e},r.Manifold.prototype.decompose=function(){const O=this._Decompose(),W=g(O);return O.delete(),W},r.Manifold.prototype.boundingBox=function(){const O=this._boundingBox();return{min:["x","y","z"].map(W=>O.min[W]),max:["x","y","z"].map(W=>O.max[W])}};class rt{constructor({numProp:W=3,triVerts:se=new Uint32Array,vertProperties:_e=new Float32Array,mergeFromVert:it,mergeToVert:Pt,runIndex:jt,runOriginalID:Sn,faceID:zt,halfedgeTangent:Gi,runTransform:zi}={}){this.numProp=W,this.triVerts=se,this.vertProperties=_e,this.mergeFromVert=it,this.mergeToVert=Pt,this.runIndex=jt,this.runOriginalID=Sn,this.faceID=zt,this.halfedgeTangent=Gi,this.runTransform=zi}get numTri(){return this.triVerts.length/3}get numVert(){return this.vertProperties.length/this.numProp}get numRun(){return this.runOriginalID.length}merge(){const{changed:W,mesh:se}=r._Merge(this);return Object.assign(this,{...se}),W}verts(W){return this.triVerts.subarray(3*W,3*(W+1))}position(W){return this.vertProperties.subarray(this.numProp*W,this.numProp*W+3)}extras(W){return this.vertProperties.subarray(this.numProp*W+3,this.numProp*(W+1))}tangent(W){return this.halfedgeTangent.subarray(4*W,4*(W+1))}transform(W){const se=new Array(16);for(const _e of[0,1,2,3])for(const it of[0,1,2])se[4*_e+it]=this.runTransform[12*W+3*_e+it];return se[15]=1,se}}r.Mesh=rt,r.Manifold.prototype.getMesh=function(O=-1){return new rt(this._GetMeshJS(O))},r.ManifoldError=function(W,...se){let _e="Unknown error";switch(W){case"NonFiniteVertex":_e="Non-finite vertex";break;case"NotManifold":_e="Not manifold";break;case"VertexOutOfBounds":_e="Vertex index out of bounds";break;case"PropertiesWrongLength":_e="Properties have wrong length";break;case"MissingPositionProperties":_e="Less than three properties";break;case"MergeVectorsDifferentLengths":_e="Merge vectors have different lengths";break;case"MergeIndexOutOfBounds":_e="Merge index out of bounds";break;case"TransformWrongLength":_e="Transform vector has wrong length";break;case"RunIndexWrongLength":_e="Run index vector has wrong length";break;case"FaceIDWrongLength":_e="Face ID vector has wrong length";case"InvalidConstruction":_e="Manifold constructed with invalid parameters"}const it=Error.apply(this,[_e,...se]);it.name=this.name="ManifoldError",this.message=it.message,this.stack=it.stack,this.code=W},r.ManifoldError.prototype=Object.create(Error.prototype,{constructor:{value:r.ManifoldError,writable:!0,configurable:!0}}),r.CrossSection=function(O,W="Positive"){const se=L(O),_e=new ge(se,te(W));return z(se),_e},r.CrossSection.ofPolygons=function(O,W="Positive"){return new r.CrossSection(O,W)},r.CrossSection.square=function(...O){let W;O.length==0?W={x:1,y:1}:typeof O[0]=="number"?W={x:O[0],y:O[0]}:W=Q(O);const se=O[1]||!1;return r._Square(W,se)},r.CrossSection.circle=function(O,W=0){return r._Circle(O,W)};function St(O){return function(...W){W.length==1&&(W=W[0]);const se=new r.Vector_crossSection;for(const it of W)se.push_back(be(it));const _e=r["_crossSection"+O](se);return se.delete(),_e}}r.CrossSection.compose=St("Compose"),r.CrossSection.union=St("UnionN"),r.CrossSection.difference=St("DifferenceN"),r.CrossSection.intersection=St("IntersectionN");function Yt(O,W){v(O,W,se=>se instanceof Array?{x:se[0],y:se[1]}:se)}r.CrossSection.hull=function(...O){O.length==1&&(O=O[0]);let W=new r.Vector_vec2;for(const _e of O)if(_e instanceof ge)r._crossSectionCollectVertices(W,_e);else if(_e instanceof Array&&_e.length==2&&typeof _e[0]=="number")W.push_back({x:_e[0],y:_e[1]});else if(_e.x)W.push_back(_e);else{const Pt=_e[0].length==2&&typeof _e[0][0]=="number"||_e[0].x?[_e]:_e;for(const jt of Pt)Yt(W,jt)}const se=r._crossSectionHullPoints(W);return W.delete(),se},r.CrossSection.prototype=Object.create(ge.prototype),Object.defineProperty(r.CrossSection,Symbol.hasInstance,{get:()=>O=>O instanceof ge});const Nt=r.Manifold;r.Manifold=function(O){const W=new Nt(O),se=W.status();if(se!=="NoError")throw new r.ManifoldError(se);return W},r.Manifold.ofMesh=function(O){return new r.Manifold(O)},r.Manifold.tetrahedron=function(){return r._Tetrahedron()},r.Manifold.cube=function(...O){let W;O.length==0?W={x:1,y:1,z:1}:typeof O[0]=="number"?W={x:O[0],y:O[0],z:O[0]}:W=ue(O);const se=O[1]||!1;return r._Cube(W,se)},r.Manifold.cylinder=function(O,W,se=-1,_e=0,it=!1){return r._Cylinder(O,W,se,_e,it)},r.Manifold.sphere=function(O,W=0){return r._Sphere(O,W)},r.Manifold.smooth=function(O,W=[]){const se=new r.Vector_smoothness;v(se,W);const _e=r._Smooth(O,se);return se.delete(),_e},r.Manifold.extrude=function(O,W,se=0,_e=0,it=[1,1],Pt=!1){return(O instanceof ge?O:r.CrossSection(O,"Positive")).extrude(W,se,_e,it,Pt)},r.Manifold.revolve=function(O,W=0,se=360){return(O instanceof ge?O:r.CrossSection(O,"Positive")).revolve(W,se)},r.Manifold.reserveIDs=function(O){return r._ReserveIDs(O)},r.Manifold.compose=function(O){const W=new r.Vector_manifold;v(W,O);const se=r._manifoldCompose(W);return W.delete(),se};function zn(O){return function(...W){W.length==1&&(W=W[0]);const se=new r.Vector_manifold;for(const it of W)se.push_back(it);const _e=r["_manifold"+O+"N"](se);return se.delete(),_e}}r.Manifold.union=zn("Union"),r.Manifold.difference=zn("Difference"),r.Manifold.intersection=zn("Intersection"),r.Manifold.levelSet=function(O,W,se,_e=0,it=-1){const Pt={min:{x:W.min[0],y:W.min[1],z:W.min[2]},max:{x:W.max[0],y:W.max[1],z:W.max[2]}},jt=Ea(function(zt){const Gi=vt(zt,"double"),zi=vt(zt+8,"double"),Ht=vt(zt+16,"double");return O([Gi,zi,Ht])},"di"),Sn=r._LevelSet(jt,Pt,se,_e,it);return Ta(jt),Sn};function Hn(O,W){v(O,W,se=>se instanceof Array?{x:se[0],y:se[1],z:se[2]}:se)}r.Manifold.hull=function(...O){O.length==1&&(O=O[0]);let W=new r.Vector_vec3;for(const _e of O)_e instanceof Nt?r._manifoldCollectVertices(W,_e):_e instanceof Array&&_e.length==3&&typeof _e[0]=="number"?W.push_back({x:_e[0],y:_e[1],z:_e[2]}):_e.x?W.push_back(_e):Hn(W,_e);const se=r._manifoldHullPoints(W);return W.delete(),se},r.Manifold.prototype=Object.create(Nt.prototype),Object.defineProperty(r.Manifold,Symbol.hasInstance,{get:()=>O=>O instanceof Nt}),r.triangulate=function(O,W=-1,se=!0){const _e=L(O),it=g(r._Triangulate(_e,W,se),Pt=>[Pt[0],Pt[1],Pt[2]]);return z(_e),it}};var f=Object.assign({},r),p="";function _(v){return r.locateFile?r.locateFile(v,p):p+v}var x,m;if(c){var d=u("fs"),w=u("path");p=u("url").fileURLToPath(new URL("/snoopy3d-studio/assets/manifold-B8h_vZ5O.js",import.meta.url)),m=v=>{v=Rt(v)?new URL(v):w.normalize(v);var g=d.readFileSync(v);return g},x=(v,g=!0)=>(v=Rt(v)?new URL(v):w.normalize(v),new Promise((A,L)=>{d.readFile(v,g?void 0:"utf8",(z,Q)=>{z?L(z):A(g?Q.buffer:Q)})})),!r.thisProgram&&process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2)}else(o||l)&&(l?p=self.location.href:typeof document<"u"&&document.currentScript&&(p=document.currentScript.src),t&&(p=t),p.startsWith("blob:")?p="":p=p.substr(0,p.replace(/[?#].*/,"").lastIndexOf("/")+1),l&&(m=v=>{var g=new XMLHttpRequest;return g.open("GET",v,!1),g.responseType="arraybuffer",g.send(null),new Uint8Array(g.response)}),x=v=>Rt(v)?new Promise((g,A)=>{var L=new XMLHttpRequest;L.open("GET",v,!0),L.responseType="arraybuffer",L.onload=()=>{(L.status==200||L.status==0&&L.response)&&A(L.response),g(L.status)},L.onerror=g,L.send(null)}):fetch(v,{credentials:"same-origin"}).then(g=>g.ok?g.arrayBuffer():Promise.reject(new Error(g.status+" : "+g.url))));r.print||console.log.bind(console);var b=r.printErr||console.error.bind(console);Object.assign(r,f),f=null,r.arguments&&r.arguments,r.thisProgram&&r.thisProgram,r.quit&&r.quit;var E;r.wasmBinary&&(E=r.wasmBinary);var R,U=!1,C,P,S,T,I,k,Y,X;function K(){var v=R.buffer;r.HEAP8=C=new Int8Array(v),r.HEAP16=S=new Int16Array(v),r.HEAPU8=P=new Uint8Array(v),r.HEAPU16=T=new Uint16Array(v),r.HEAP32=I=new Int32Array(v),r.HEAPU32=k=new Uint32Array(v),r.HEAPF32=Y=new Float32Array(v),r.HEAPF64=X=new Float64Array(v)}var $=[],ne=[],H=[];function oe(){if(r.preRun)for(typeof r.preRun=="function"&&(r.preRun=[r.preRun]);r.preRun.length;)Ue(r.preRun.shift());Ot($)}function xe(){Ot(ne)}function pe(){if(r.postRun)for(typeof r.postRun=="function"&&(r.postRun=[r.postRun]);r.postRun.length;)ot(r.postRun.shift());Ot(H)}function Ue(v){$.unshift(v)}function tt(v){ne.unshift(v)}function ot(v){H.unshift(v)}var Be=0,ee=null;function ce(v){var g;Be++,(g=r.monitorRunDependencies)==null||g.call(r,Be)}function Te(v){var A;if(Be--,(A=r.monitorRunDependencies)==null||A.call(r,Be),Be==0&&ee){var g=ee;ee=null,g()}}function Xe(v){var A;(A=r.onAbort)==null||A.call(r,v),v="Aborted("+v+")",b(v),U=!0,v+=". Build with -sASSERTIONS for more info.";var g=new WebAssembly.RuntimeError(v);throw a(g),g}var ze="data:application/octet-stream;base64,",at=v=>v.startsWith(ze),Rt=v=>v.startsWith("file://");function F(){if(r.locateFile){var v="manifold.wasm";return at(v)?v:_(v)}return new URL("/snoopy3d-studio/assets/manifold-D9yvTBHx.wasm",import.meta.url).href}var mt;function nt(v){if(v==mt&&E)return new Uint8Array(E);if(m)return m(v);throw"both async and sync fetching of the wasm failed"}function Ke(v){return E?Promise.resolve().then(()=>nt(v)):x(v).then(g=>new Uint8Array(g),()=>nt(v))}function He(v,g,A){return Ke(v).then(L=>WebAssembly.instantiate(L,g)).then(A,L=>{b(`failed to asynchronously prepare wasm: ${L}`),Xe(L)})}function Dt(v,g,A,L){return!v&&typeof WebAssembly.instantiateStreaming=="function"&&!at(g)&&!Rt(g)&&!c&&typeof fetch=="function"?fetch(g,{credentials:"same-origin"}).then(z=>{var Q=WebAssembly.instantiateStreaming(z,A);return Q.then(L,function(ue){return b(`wasm streaming compile failed: ${ue}`),b("falling back to ArrayBuffer instantiation"),He(g,A,L)})}):He(g,A,L)}function Ve(){return{a:cm}}function lt(){var v=Ve();function g(L,z){return Gn=L.exports,Gn=um(Gn),R=Gn.J,K(),ht=Gn.M,tt(Gn.K),Te(),Gn}ce();function A(L){g(L.instance)}if(r.instantiateWasm)try{return r.instantiateWasm(v,g)}catch(L){b(`Module.instantiateWasm callback failed with error: ${L}`),a(L)}return mt||(mt=F()),Dt(E,mt,v,A).catch(a),{}}var Ot=v=>{for(;v.length>0;)v.shift()(r)};function vt(v,g="i8"){switch(g.endsWith("*")&&(g="*"),g){case"i1":return C[v>>>0];case"i8":return C[v>>>0];case"i16":return S[v>>>1>>>0];case"i32":return I[v>>>2>>>0];case"i64":Xe("to do getValue(i64) use WASM_BIGINT");case"float":return Y[v>>>2>>>0];case"double":return X[v>>>3>>>0];case"*":return k[v>>>2>>>0];default:Xe(`invalid type for getValue: ${g}`)}}r.noExitRuntime;function D(v,g,A="i8"){switch(A.endsWith("*")&&(A="*"),A){case"i1":C[v>>>0]=g;break;case"i8":C[v>>>0]=g;break;case"i16":S[v>>>1>>>0]=g;break;case"i32":I[v>>>2>>>0]=g;break;case"i64":Xe("to do setValue(i64) use WASM_BIGINT");case"float":Y[v>>>2>>>0]=g;break;case"double":X[v>>>3>>>0]=g;break;case"*":k[v>>>2>>>0]=g;break;default:Xe(`invalid type for setValue: ${A}`)}}class y{constructor(g){this.excPtr=g,this.ptr=g-24}set_type(g){k[this.ptr+4>>>2>>>0]=g}get_type(){return k[this.ptr+4>>>2>>>0]}set_destructor(g){k[this.ptr+8>>>2>>>0]=g}get_destructor(){return k[this.ptr+8>>>2>>>0]}set_caught(g){g=g?1:0,C[this.ptr+12>>>0]=g}get_caught(){return C[this.ptr+12>>>0]!=0}set_rethrown(g){g=g?1:0,C[this.ptr+13>>>0]=g}get_rethrown(){return C[this.ptr+13>>>0]!=0}init(g,A){this.set_adjusted_ptr(0),this.set_type(g),this.set_destructor(A)}set_adjusted_ptr(g){k[this.ptr+16>>>2>>>0]=g}get_adjusted_ptr(){return k[this.ptr+16>>>2>>>0]}get_exception_ptr(){var g=pu(this.get_type());if(g)return k[this.excPtr>>>2>>>0];var A=this.get_adjusted_ptr();return A!==0?A:this.excPtr}}var V=0;function ae(v,g,A){v>>>=0,g>>>=0,A>>>=0;var L=new y(v);throw L.init(g,A),V=v,V}var fe=()=>{Xe("")},re={},We=v=>{for(;v.length;){var g=v.pop(),A=v.pop();A(g)}};function Se(v){return this.fromWireType(k[v>>>2>>>0])}var Fe={},Ie={},me={},Re,je=v=>{throw new Re(v)},Oe=(v,g,A)=>{v.forEach(function(te){me[te]=g});function L(te){var he=A(te);he.length!==v.length&&je("Mismatched type converter count");for(var ge=0;ge<v.length;++ge)Ce(v[ge],he[ge])}var z=new Array(g.length),Q=[],ue=0;g.forEach((te,he)=>{Ie.hasOwnProperty(te)?z[he]=Ie[te]:(Q.push(te),Fe.hasOwnProperty(te)||(Fe[te]=[]),Fe[te].push(()=>{z[he]=Ie[te],++ue,ue===Q.length&&L(z)}))}),Q.length===0&&L(z)},we=function(v){v>>>=0;var g=re[v];delete re[v];var A=g.rawConstructor,L=g.rawDestructor,z=g.fields,Q=z.map(ue=>ue.getterReturnType).concat(z.map(ue=>ue.setterArgumentType));Oe([v],Q,ue=>{var te={};return z.forEach((he,ge)=>{var be=he.fieldName,rt=ue[ge],St=he.getter,Yt=he.getterContext,Nt=ue[ge+z.length],zn=he.setter,Hn=he.setterContext;te[be]={read:O=>rt.fromWireType(St(Yt,O)),write:(O,W)=>{var se=[];zn(Hn,O,Nt.toWireType(se,W)),We(se)}}}),[{name:g.name,fromWireType:he=>{var ge={};for(var be in te)ge[be]=te[be].read(he);return L(he),ge},toWireType:(he,ge)=>{for(var be in te)if(!(be in ge))throw new TypeError(`Missing field: "${be}"`);var rt=A();for(be in te)te[be].write(rt,ge[be]);return he!==null&&he.push(L,rt),rt},argPackAdvance:$e,readValueFromPointer:Se,destructorFunction:L}]})};function st(v,g,A,L,z){}var N=()=>{for(var v=new Array(256),g=0;g<256;++g)v[g]=String.fromCharCode(g);ye=v},ye,de=v=>{for(var g="",A=v;P[A>>>0];)g+=ye[P[A++>>>0]];return g},Pe,ie=v=>{throw new Pe(v)};function le(v,g,A={}){var L=g.name;if(v||ie(`type "${L}" must have a positive integer typeid pointer`),Ie.hasOwnProperty(v)){if(A.ignoreDuplicateRegistrations)return;ie(`Cannot register type '${L}' twice`)}if(Ie[v]=g,delete me[v],Fe.hasOwnProperty(v)){var z=Fe[v];delete Fe[v],z.forEach(Q=>Q())}}function Ce(v,g,A={}){if(!("argPackAdvance"in g))throw new TypeError("registerType registeredInstance requires argPackAdvance");return le(v,g,A)}var $e=8;function Et(v,g,A,L){v>>>=0,g>>>=0,g=de(g),Ce(v,{name:g,fromWireType:function(z){return!!z},toWireType:function(z,Q){return Q?A:L},argPackAdvance:$e,readValueFromPointer:function(z){return this.fromWireType(P[z>>>0])},destructorFunction:null})}var xt=v=>({count:v.count,deleteScheduled:v.deleteScheduled,preservePointerOnDelete:v.preservePointerOnDelete,ptr:v.ptr,ptrType:v.ptrType,smartPtr:v.smartPtr,smartPtrType:v.smartPtrType}),Cn=v=>{function g(A){return A.$$.ptrType.registeredClass.name}ie(g(v)+" instance already deleted")},yn=!1,Sa=v=>{},yr=v=>{v.smartPtr?v.smartPtrType.rawDestructor(v.smartPtr):v.ptrType.registeredClass.rawDestructor(v.ptr)},Oi=v=>{v.count.value-=1;var g=v.count.value===0;g&&yr(v)},ba=(v,g,A)=>{if(g===A)return v;if(A.baseClass===void 0)return null;var L=ba(v,g,A.baseClass);return L===null?null:A.downcast(L)},Ma={},Ni=()=>Object.keys(pi).length,ss=()=>{var v=[];for(var g in pi)pi.hasOwnProperty(g)&&v.push(pi[g]);return v},nr=[],ki=()=>{for(;nr.length;){var v=nr.pop();v.$$.deleteScheduled=!1,v.delete()}},zr,go=v=>{zr=v,nr.length&&zr&&zr(ki)},_o=()=>{r.getInheritedInstanceCount=Ni,r.getLiveInheritedInstances=ss,r.flushPendingDeletes=ki,r.setDelayFunction=go},pi={},xo=(v,g)=>{for(g===void 0&&ie("ptr should not be undefined");v.baseClass;)g=v.upcast(g),v=v.baseClass;return g},yo=(v,g)=>(g=xo(v,g),pi[g]),Bi=(v,g)=>{(!g.ptrType||!g.ptr)&&je("makeClassHandle requires ptr and ptrType");var A=!!g.smartPtrType,L=!!g.smartPtr;return A!==L&&je("Both smartPtrType and smartPtr must be specified"),g.count={value:1},B(Object.create(v,{$$:{value:g,writable:!0}}))};function M(v){var g=this.getPointee(v);if(!g)return this.destructor(v),null;var A=yo(this.registeredClass,g);if(A!==void 0){if(A.$$.count.value===0)return A.$$.ptr=g,A.$$.smartPtr=v,A.clone();var L=A.clone();return this.destructor(v),L}function z(){return this.isSmartPointer?Bi(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:g,smartPtrType:this,smartPtr:v}):Bi(this.registeredClass.instancePrototype,{ptrType:this,ptr:v})}var Q=this.registeredClass.getActualType(g),ue=Ma[Q];if(!ue)return z.call(this);var te;this.isConst?te=ue.constPointerType:te=ue.pointerType;var he=ba(g,this.registeredClass,te.registeredClass);return he===null?z.call(this):this.isSmartPointer?Bi(te.registeredClass.instancePrototype,{ptrType:te,ptr:he,smartPtrType:this,smartPtr:v}):Bi(te.registeredClass.instancePrototype,{ptrType:te,ptr:he})}var B=v=>typeof FinalizationRegistry>"u"?(B=g=>g,v):(yn=new FinalizationRegistry(g=>{Oi(g.$$)}),B=g=>{var A=g.$$,L=!!A.smartPtr;if(L){var z={$$:A};yn.register(g,z,g)}return g},Sa=g=>yn.unregister(g),B(v)),J=()=>{Object.assign(Z.prototype,{isAliasOf(v){if(!(this instanceof Z)||!(v instanceof Z))return!1;var g=this.$$.ptrType.registeredClass,A=this.$$.ptr;v.$$=v.$$;for(var L=v.$$.ptrType.registeredClass,z=v.$$.ptr;g.baseClass;)A=g.upcast(A),g=g.baseClass;for(;L.baseClass;)z=L.upcast(z),L=L.baseClass;return g===L&&A===z},clone(){if(this.$$.ptr||Cn(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var v=B(Object.create(Object.getPrototypeOf(this),{$$:{value:xt(this.$$)}}));return v.$$.count.value+=1,v.$$.deleteScheduled=!1,v},delete(){this.$$.ptr||Cn(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&ie("Object already scheduled for deletion"),Sa(this),Oi(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||Cn(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&ie("Object already scheduled for deletion"),nr.push(this),nr.length===1&&zr&&zr(ki),this.$$.deleteScheduled=!0,this}})};function Z(){}var G=(v,g)=>Object.defineProperty(g,"name",{value:v}),ve=(v,g,A)=>{if(v[g].overloadTable===void 0){var L=v[g];v[g]=function(...z){return v[g].overloadTable.hasOwnProperty(z.length)||ie(`Function '${A}' called with an invalid number of arguments (${z.length}) - expects one of (${v[g].overloadTable})!`),v[g].overloadTable[z.length].apply(this,z)},v[g].overloadTable=[],v[g].overloadTable[L.argCount]=L}},Me=(v,g,A)=>{r.hasOwnProperty(v)?((A===void 0||r[v].overloadTable!==void 0&&r[v].overloadTable[A]!==void 0)&&ie(`Cannot register public name '${v}' twice`),ve(r,v,v),r.hasOwnProperty(A)&&ie(`Cannot register multiple overloads of a function with the same number of arguments (${A})!`),r[v].overloadTable[A]=g):(r[v]=g,A!==void 0&&(r[v].numArguments=A))},Ge=48,Le=57,Ze=v=>{if(v===void 0)return"_unknown";v=v.replace(/[^a-zA-Z0-9_]/g,"$");var g=v.charCodeAt(0);return g>=Ge&&g<=Le?`_${v}`:v};function Je(v,g,A,L,z,Q,ue,te){this.name=v,this.constructor=g,this.instancePrototype=A,this.rawDestructor=L,this.baseClass=z,this.getActualType=Q,this.upcast=ue,this.downcast=te,this.pureVirtualFunctions=[]}var qe=(v,g,A)=>{for(;g!==A;)g.upcast||ie(`Expected null or instance of ${A.name}, got an instance of ${g.name}`),v=g.upcast(v),g=g.baseClass;return v};function dt(v,g){if(g===null)return this.isReference&&ie(`null is not a valid ${this.name}`),0;g.$$||ie(`Cannot pass "${Eo(g)}" as a ${this.name}`),g.$$.ptr||ie(`Cannot pass deleted object as a pointer of type ${this.name}`);var A=g.$$.ptrType.registeredClass,L=qe(g.$$.ptr,A,this.registeredClass);return L}function Mt(v,g){var A;if(g===null)return this.isReference&&ie(`null is not a valid ${this.name}`),this.isSmartPointer?(A=this.rawConstructor(),v!==null&&v.push(this.rawDestructor,A),A):0;(!g||!g.$$)&&ie(`Cannot pass "${Eo(g)}" as a ${this.name}`),g.$$.ptr||ie(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&g.$$.ptrType.isConst&&ie(`Cannot convert argument of type ${g.$$.smartPtrType?g.$$.smartPtrType.name:g.$$.ptrType.name} to parameter type ${this.name}`);var L=g.$$.ptrType.registeredClass;if(A=qe(g.$$.ptr,L,this.registeredClass),this.isSmartPointer)switch(g.$$.smartPtr===void 0&&ie("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:g.$$.smartPtrType===this?A=g.$$.smartPtr:ie(`Cannot convert argument of type ${g.$$.smartPtrType?g.$$.smartPtrType.name:g.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:A=g.$$.smartPtr;break;case 2:if(g.$$.smartPtrType===this)A=g.$$.smartPtr;else{var z=g.clone();A=this.rawShare(A,rn.toHandle(()=>z.delete())),v!==null&&v.push(this.rawDestructor,A)}break;default:ie("Unsupporting sharing policy")}return A}function It(v,g){if(g===null)return this.isReference&&ie(`null is not a valid ${this.name}`),0;g.$$||ie(`Cannot pass "${Eo(g)}" as a ${this.name}`),g.$$.ptr||ie(`Cannot pass deleted object as a pointer of type ${this.name}`),g.$$.ptrType.isConst&&ie(`Cannot convert argument of type ${g.$$.ptrType.name} to parameter type ${this.name}`);var A=g.$$.ptrType.registeredClass,L=qe(g.$$.ptr,A,this.registeredClass);return L}var Ct=()=>{Object.assign(yt.prototype,{getPointee(v){return this.rawGetPointee&&(v=this.rawGetPointee(v)),v},destructor(v){var g;(g=this.rawDestructor)==null||g.call(this,v)},argPackAdvance:$e,readValueFromPointer:Se,fromWireType:M})};function yt(v,g,A,L,z,Q,ue,te,he,ge,be){this.name=v,this.registeredClass=g,this.isReference=A,this.isConst=L,this.isSmartPointer=z,this.pointeeType=Q,this.sharingPolicy=ue,this.rawGetPointee=te,this.rawConstructor=he,this.rawShare=ge,this.rawDestructor=be,!z&&g.baseClass===void 0?L?(this.toWireType=dt,this.destructorFunction=null):(this.toWireType=It,this.destructorFunction=null):this.toWireType=Mt}var Ye=(v,g,A)=>{r.hasOwnProperty(v)||je("Replacing nonexistent public symbol"),r[v].overloadTable!==void 0&&A!==void 0?r[v].overloadTable[A]=g:(r[v]=g,r[v].argCount=A)},Ut=(v,g,A)=>{v=v.replace(/p/g,"i");var L=r["dynCall_"+v];return L(g,...A)},ht,nn=v=>ht.get(v),Hr=(v,g,A=[])=>{if(v.includes("j"))return Ut(v,g,A);var L=nn(g)(...A);return v[0]=="p"?L>>>0:L},hn=(v,g)=>(...A)=>Hr(v,g,A),on=(v,g)=>{v=de(v);function A(){return v.includes("j")||v.includes("p")?hn(v,g):nn(g)}var L=A();return typeof L!="function"&&ie(`unknown function pointer with signature ${v}: ${g}`),L},Lt=(v,g)=>{var A=G(g,function(L){this.name=g,this.message=L;var z=new Error(L).stack;z!==void 0&&(this.stack=this.toString()+`
`+z.replace(/^Error(:[^\n]*)?\n/,""))});return A.prototype=Object.create(v.prototype),A.prototype.constructor=A,A.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},A},vn,gn=v=>{var g=du(v),A=de(g);return br(g),A},$t=(v,g)=>{var A=[],L={};function z(Q){if(!L[Q]&&!Ie[Q]){if(me[Q]){me[Q].forEach(z);return}A.push(Q),L[Q]=!0}}throw g.forEach(z),new vn(`${v}: `+A.map(gn).join([", "]))};function dn(v,g,A,L,z,Q,ue,te,he,ge,be,rt,St){v>>>=0,g>>>=0,A>>>=0,L>>>=0,z>>>=0,Q>>>=0,ue>>>=0,te>>>=0,he>>>=0,ge>>>=0,be>>>=0,rt>>>=0,St>>>=0,be=de(be),Q=on(z,Q),te&&(te=on(ue,te)),ge&&(ge=on(he,ge)),St=on(rt,St);var Yt=Ze(be);Me(Yt,function(){$t(`Cannot construct ${be} due to unbound types`,[L])}),Oe([v,g,A],L?[L]:[],Nt=>{var jt;Nt=Nt[0];var zn,Hn;L?(zn=Nt.registeredClass,Hn=zn.instancePrototype):Hn=Z.prototype;var O=G(be,function(...Sn){if(Object.getPrototypeOf(this)!==W)throw new Pe("Use 'new' to construct "+be);if(se.constructor_body===void 0)throw new Pe(be+" has no accessible constructor");var zt=se.constructor_body[Sn.length];if(zt===void 0)throw new Pe(`Tried to invoke ctor of ${be} with invalid number of parameters (${Sn.length}) - expected (${Object.keys(se.constructor_body).toString()}) parameters instead!`);return zt.apply(this,Sn)}),W=Object.create(Hn,{constructor:{value:O}});O.prototype=W;var se=new Je(be,O,W,St,zn,Q,te,ge);se.baseClass&&((jt=se.baseClass).__derivedClasses??(jt.__derivedClasses=[]),se.baseClass.__derivedClasses.push(se));var _e=new yt(be,se,!0,!1,!1),it=new yt(be+"*",se,!1,!1,!1),Pt=new yt(be+" const*",se,!1,!0,!1);return Ma[v]={pointerType:it,constPointerType:Pt},Ye(Yt,O),[_e,it,Pt]})}var mi=(v,g)=>{for(var A=[],L=0;L<v;L++)A.push(k[g+L*4>>>2>>>0]);return A};function rr(v){for(var g=1;g<v.length;++g)if(v[g]!==null&&v[g].destructorFunction===void 0)return!0;return!1}function au(v,g){if(!(v instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof v} which is not a function`);var A=G(v.name||"unknownFunctionName",function(){});A.prototype=v.prototype;var L=new A,z=v.apply(L,g);return z instanceof Object?z:L}function op(v,g,A,L){for(var z=rr(v),Q=v.length,ue="",te="",he=0;he<Q-2;++he)ue+=(he!==0?", ":"")+"arg"+he,te+=(he!==0?", ":"")+"arg"+he+"Wired";var ge=`
        return function (${ue}) {
        if (arguments.length !== ${Q-2}) {
          throwBindingError('function ' + humanName + ' called with ' + arguments.length + ' arguments, expected ${Q-2}');
        }`;z&&(ge+=`var destructors = [];
`);var be=z?"destructors":"null",rt=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];g&&(ge+="var thisWired = classParam['toWireType']("+be+`, this);
`);for(var he=0;he<Q-2;++he)ge+="var arg"+he+"Wired = argType"+he+"['toWireType']("+be+", arg"+he+`);
`,rt.push("argType"+he);if(g&&(te="thisWired"+(te.length>0?", ":"")+te),ge+=(A||L?"var rv = ":"")+"invoker(fn"+(te.length>0?", ":"")+te+`);
`,z)ge+=`runDestructors(destructors);
`;else for(var he=g?1:2;he<v.length;++he){var St=he===1?"thisWired":"arg"+(he-2)+"Wired";v[he].destructorFunction!==null&&(ge+=`${St}_dtor(${St});
`,rt.push(`${St}_dtor`))}return A&&(ge+=`var ret = retType['fromWireType'](rv);
return ret;
`),ge+=`}
`,[rt,ge]}function So(v,g,A,L,z,Q){var ue=g.length;ue<2&&ie("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var te=g[1]!==null&&A!==null,he=rr(g),ge=g[0].name!=="void",be=[v,ie,L,z,We,g[0],g[1]],rt=0;rt<ue-2;++rt)be.push(g[rt+2]);if(!he)for(var rt=te?1:2;rt<g.length;++rt)g[rt].destructorFunction!==null&&be.push(g[rt].destructorFunction);let[St,Yt]=op(g,te,ge,Q);St.push(Yt);var Nt=au(Function,St)(...be);return G(v,Nt)}var lp=function(v,g,A,L,z,Q){v>>>=0,A>>>=0,L>>>=0,z>>>=0,Q>>>=0;var ue=mi(g,A);z=on(L,z),Oe([],[v],te=>{te=te[0];var he=`constructor ${te.name}`;if(te.registeredClass.constructor_body===void 0&&(te.registeredClass.constructor_body=[]),te.registeredClass.constructor_body[g-1]!==void 0)throw new Pe(`Cannot register multiple constructors with identical number of parameters (${g-1}) for class '${te.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return te.registeredClass.constructor_body[g-1]=()=>{$t(`Cannot construct ${te.name} due to unbound types`,ue)},Oe([],ue,ge=>(ge.splice(1,0,null),te.registeredClass.constructor_body[g-1]=So(he,ge,null,z,Q),[])),[]})},su=v=>{v=v.trim();const g=v.indexOf("(");return g!==-1?v.substr(0,g):v},cp=function(v,g,A,L,z,Q,ue,te,he){v>>>=0,g>>>=0,L>>>=0,z>>>=0,Q>>>=0,ue>>>=0;var ge=mi(A,L);g=de(g),g=su(g),Q=on(z,Q),Oe([],[v],be=>{be=be[0];var rt=`${be.name}.${g}`;g.startsWith("@@")&&(g=Symbol[g.substring(2)]),te&&be.registeredClass.pureVirtualFunctions.push(g);function St(){$t(`Cannot call ${rt} due to unbound types`,ge)}var Yt=be.registeredClass.instancePrototype,Nt=Yt[g];return Nt===void 0||Nt.overloadTable===void 0&&Nt.className!==be.name&&Nt.argCount===A-2?(St.argCount=A-2,St.className=be.name,Yt[g]=St):(ve(Yt,g,rt),Yt[g].overloadTable[A-2]=St),Oe([],ge,zn=>{var Hn=So(rt,zn,be,Q,ue,he);return Yt[g].overloadTable===void 0?(Hn.argCount=A-2,Yt[g]=Hn):Yt[g].overloadTable[A-2]=Hn,[]}),[]})},bo=[],Sr=[];function Mo(v){v>>>=0,v>9&&--Sr[v+1]===0&&(Sr[v]=void 0,bo.push(v))}var up=()=>Sr.length/2-5-bo.length,fp=()=>{Sr.push(0,1,void 0,1,null,1,!0,1,!1,1),r.count_emval_handles=up},rn={toValue:v=>(v||ie("Cannot use deleted val. handle = "+v),Sr[v]),toHandle:v=>{switch(v){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const g=bo.pop()||Sr.length;return Sr[g]=v,Sr[g+1]=1,g}}}},hp={name:"emscripten::val",fromWireType:v=>{var g=rn.toValue(v);return Mo(v),g},toWireType:(v,g)=>rn.toHandle(g),argPackAdvance:$e,readValueFromPointer:Se,destructorFunction:null};function ou(v){return v>>>=0,Ce(v,hp)}var dp=(v,g,A)=>{switch(g){case 1:return A?function(L){return this.fromWireType(C[L>>>0])}:function(L){return this.fromWireType(P[L>>>0])};case 2:return A?function(L){return this.fromWireType(S[L>>>1>>>0])}:function(L){return this.fromWireType(T[L>>>1>>>0])};case 4:return A?function(L){return this.fromWireType(I[L>>>2>>>0])}:function(L){return this.fromWireType(k[L>>>2>>>0])};default:throw new TypeError(`invalid integer width (${g}): ${v}`)}};function pp(v,g,A,L){v>>>=0,g>>>=0,A>>>=0,g=de(g);function z(){}z.values={},Ce(v,{name:g,constructor:z,fromWireType:function(Q){return this.constructor.values[Q]},toWireType:(Q,ue)=>ue.value,argPackAdvance:$e,readValueFromPointer:dp(g,A,L),destructorFunction:null}),Me(g,z)}var os=(v,g)=>{var A=Ie[v];return A===void 0&&ie(`${g} has unknown type ${gn(v)}`),A};function mp(v,g,A){v>>>=0,g>>>=0;var L=os(v,"enum");g=de(g);var z=L.constructor,Q=Object.create(L.constructor.prototype,{value:{value:A},constructor:{value:G(`${L.name}_${g}`,function(){})}});z.values[A]=Q,z[g]=Q}var Eo=v=>{if(v===null)return"null";var g=typeof v;return g==="object"||g==="array"||g==="function"?v.toString():""+v},vp=(v,g)=>{switch(g){case 4:return function(A){return this.fromWireType(Y[A>>>2>>>0])};case 8:return function(A){return this.fromWireType(X[A>>>3>>>0])};default:throw new TypeError(`invalid float width (${g}): ${v}`)}},gp=function(v,g,A){v>>>=0,g>>>=0,A>>>=0,g=de(g),Ce(v,{name:g,fromWireType:L=>L,toWireType:(L,z)=>z,argPackAdvance:$e,readValueFromPointer:vp(g,A),destructorFunction:null})};function _p(v,g,A,L,z,Q,ue){v>>>=0,A>>>=0,L>>>=0,z>>>=0,Q>>>=0;var te=mi(g,A);v=de(v),v=su(v),z=on(L,z),Me(v,function(){$t(`Cannot call ${v} due to unbound types`,te)},g-1),Oe([],te,he=>{var ge=[he[0],null].concat(he.slice(1));return Ye(v,So(v,ge,null,z,Q,ue),g-1),[]})}var xp=(v,g,A)=>{switch(g){case 1:return A?L=>C[L>>>0]:L=>P[L>>>0];case 2:return A?L=>S[L>>>1>>>0]:L=>T[L>>>1>>>0];case 4:return A?L=>I[L>>>2>>>0]:L=>k[L>>>2>>>0];default:throw new TypeError(`invalid integer width (${g}): ${v}`)}};function yp(v,g,A,L,z){v>>>=0,g>>>=0,A>>>=0,g=de(g);var Q=be=>be;if(L===0){var ue=32-8*A;Q=be=>be<<ue>>>ue}var te=g.includes("unsigned"),he=(be,rt)=>{},ge;te?ge=function(be,rt){return he(rt,this.name),rt>>>0}:ge=function(be,rt){return he(rt,this.name),rt},Ce(v,{name:g,fromWireType:Q,toWireType:ge,argPackAdvance:$e,readValueFromPointer:xp(g,A,L!==0),destructorFunction:null})}function Sp(v,g,A){v>>>=0,A>>>=0;var L=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],z=L[g];function Q(ue){var te=k[ue>>>2>>>0],he=k[ue+4>>>2>>>0];return new z(C.buffer,he,te)}A=de(A),Ce(v,{name:A,fromWireType:Q,argPackAdvance:$e,readValueFromPointer:Q},{ignoreDuplicateRegistrations:!0})}function bp(v,g){v>>>=0,ou(v)}var Mp=(v,g,A,L)=>{if(A>>>=0,!(L>0))return 0;for(var z=A,Q=A+L-1,ue=0;ue<v.length;++ue){var te=v.charCodeAt(ue);if(te>=55296&&te<=57343){var he=v.charCodeAt(++ue);te=65536+((te&1023)<<10)|he&1023}if(te<=127){if(A>=Q)break;g[A++>>>0]=te}else if(te<=2047){if(A+1>=Q)break;g[A++>>>0]=192|te>>6,g[A++>>>0]=128|te&63}else if(te<=65535){if(A+2>=Q)break;g[A++>>>0]=224|te>>12,g[A++>>>0]=128|te>>6&63,g[A++>>>0]=128|te&63}else{if(A+3>=Q)break;g[A++>>>0]=240|te>>18,g[A++>>>0]=128|te>>12&63,g[A++>>>0]=128|te>>6&63,g[A++>>>0]=128|te&63}}return g[A>>>0]=0,A-z},Ep=(v,g,A)=>Mp(v,P,g,A),Tp=v=>{for(var g=0,A=0;A<v.length;++A){var L=v.charCodeAt(A);L<=127?g++:L<=2047?g+=2:L>=55296&&L<=57343?(g+=4,++A):g+=3}return g},lu=typeof TextDecoder<"u"?new TextDecoder:void 0,wp=(v,g,A)=>{g>>>=0;for(var L=g+A,z=g;v[z]&&!(z>=L);)++z;if(z-g>16&&v.buffer&&lu)return lu.decode(v.subarray(g,z));for(var Q="";g<z;){var ue=v[g++];if(!(ue&128)){Q+=String.fromCharCode(ue);continue}var te=v[g++]&63;if((ue&224)==192){Q+=String.fromCharCode((ue&31)<<6|te);continue}var he=v[g++]&63;if((ue&240)==224?ue=(ue&15)<<12|te<<6|he:ue=(ue&7)<<18|te<<12|he<<6|v[g++]&63,ue<65536)Q+=String.fromCharCode(ue);else{var ge=ue-65536;Q+=String.fromCharCode(55296|ge>>10,56320|ge&1023)}}return Q},Ap=(v,g)=>(v>>>=0,v?wp(P,v,g):"");function Rp(v,g){v>>>=0,g>>>=0,g=de(g);var A=g==="std::string";Ce(v,{name:g,fromWireType(L){var z=k[L>>>2>>>0],Q=L+4,ue;if(A)for(var te=Q,he=0;he<=z;++he){var ge=Q+he;if(he==z||P[ge>>>0]==0){var be=ge-te,rt=Ap(te,be);ue===void 0?ue=rt:(ue+="\0",ue+=rt),te=ge+1}}else{for(var St=new Array(z),he=0;he<z;++he)St[he]=String.fromCharCode(P[Q+he>>>0]);ue=St.join("")}return br(L),ue},toWireType(L,z){z instanceof ArrayBuffer&&(z=new Uint8Array(z));var Q,ue=typeof z=="string";ue||z instanceof Uint8Array||z instanceof Uint8ClampedArray||z instanceof Int8Array||ie("Cannot pass non-string to std::string"),A&&ue?Q=Tp(z):Q=z.length;var te=Ro(4+Q+1),he=te+4;if(k[te>>>2>>>0]=Q,A&&ue)Ep(z,he,Q+1);else if(ue)for(var ge=0;ge<Q;++ge){var be=z.charCodeAt(ge);be>255&&(br(he),ie("String has UTF-16 code units that do not fit in 8 bits")),P[he+ge>>>0]=be}else for(var ge=0;ge<Q;++ge)P[he+ge>>>0]=z[ge];return L!==null&&L.push(br,te),te},argPackAdvance:$e,readValueFromPointer:Se,destructorFunction(L){br(L)}})}var cu=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Cp=(v,g)=>{for(var A=v,L=A>>1,z=L+g/2;!(L>=z)&&T[L>>>0];)++L;if(A=L<<1,A-v>32&&cu)return cu.decode(P.subarray(v>>>0,A>>>0));for(var Q="",ue=0;!(ue>=g/2);++ue){var te=S[v+ue*2>>>1>>>0];if(te==0)break;Q+=String.fromCharCode(te)}return Q},Pp=(v,g,A)=>{if(A??(A=2147483647),A<2)return 0;A-=2;for(var L=g,z=A<v.length*2?A/2:v.length,Q=0;Q<z;++Q){var ue=v.charCodeAt(Q);S[g>>>1>>>0]=ue,g+=2}return S[g>>>1>>>0]=0,g-L},Dp=v=>v.length*2,Up=(v,g)=>{for(var A=0,L="";!(A>=g/4);){var z=I[v+A*4>>>2>>>0];if(z==0)break;if(++A,z>=65536){var Q=z-65536;L+=String.fromCharCode(55296|Q>>10,56320|Q&1023)}else L+=String.fromCharCode(z)}return L},Lp=(v,g,A)=>{if(g>>>=0,A??(A=2147483647),A<4)return 0;for(var L=g,z=L+A-4,Q=0;Q<v.length;++Q){var ue=v.charCodeAt(Q);if(ue>=55296&&ue<=57343){var te=v.charCodeAt(++Q);ue=65536+((ue&1023)<<10)|te&1023}if(I[g>>>2>>>0]=ue,g+=4,g+4>z)break}return I[g>>>2>>>0]=0,g-L},Fp=v=>{for(var g=0,A=0;A<v.length;++A){var L=v.charCodeAt(A);L>=55296&&L<=57343&&++A,g+=4}return g},Ip=function(v,g,A){v>>>=0,g>>>=0,A>>>=0,A=de(A);var L,z,Q,ue;g===2?(L=Cp,z=Pp,ue=Dp,Q=te=>T[te>>>1>>>0]):g===4&&(L=Up,z=Lp,ue=Fp,Q=te=>k[te>>>2>>>0]),Ce(v,{name:A,fromWireType:te=>{for(var he=k[te>>>2>>>0],ge,be=te+4,rt=0;rt<=he;++rt){var St=te+4+rt*g;if(rt==he||Q(St)==0){var Yt=St-be,Nt=L(be,Yt);ge===void 0?ge=Nt:(ge+="\0",ge+=Nt),be=St+g}}return br(te),ge},toWireType:(te,he)=>{typeof he!="string"&&ie(`Cannot pass non-string to C++ string type ${A}`);var ge=ue(he),be=Ro(4+ge+g);return k[be>>>2>>>0]=ge/g,z(he,be+4,ge+g),te!==null&&te.push(br,be),be},argPackAdvance:$e,readValueFromPointer:Se,destructorFunction(te){br(te)}})};function Op(v,g,A,L,z,Q){v>>>=0,g>>>=0,A>>>=0,L>>>=0,z>>>=0,Q>>>=0,re[v]={name:de(g),rawConstructor:on(A,L),rawDestructor:on(z,Q),fields:[]}}function Np(v,g,A,L,z,Q,ue,te,he,ge){v>>>=0,g>>>=0,A>>>=0,L>>>=0,z>>>=0,Q>>>=0,ue>>>=0,te>>>=0,he>>>=0,ge>>>=0,re[v].fields.push({fieldName:de(g),getterReturnType:A,getter:on(L,z),getterContext:Q,setterArgumentType:ue,setter:on(te,he),setterContext:ge})}var kp=function(v,g){v>>>=0,g>>>=0,g=de(g),Ce(v,{isVoid:!0,name:g,argPackAdvance:0,fromWireType:()=>{},toWireType:(A,L)=>{}})};function Bp(v,g,A){return v>>>=0,g>>>=0,A>>>=0,P.copyWithin(v>>>0,g>>>0,g+A>>>0)}var uu=(v,g,A)=>{var L=[],z=v.toWireType(L,A);return L.length&&(k[g>>>2>>>0]=rn.toHandle(L)),z};function Gp(v,g,A){return v>>>=0,g>>>=0,A>>>=0,v=rn.toValue(v),g=os(g,"emval::as"),uu(g,A,v)}var zp={},fu=v=>{var g=zp[v];return g===void 0?de(v):g},To=[];function Hp(v,g,A,L,z){return v>>>=0,g>>>=0,A>>>=0,L>>>=0,z>>>=0,v=To[v],g=rn.toValue(g),A=fu(A),v(g,g[A],L,z)}function Vp(v,g){return v>>>=0,g>>>=0,v=rn.toValue(v),g=rn.toValue(g),v==g}var Wp=v=>{var g=To.length;return To.push(v),g},Xp=(v,g)=>{for(var A=new Array(v),L=0;L<v;++L)A[L]=os(k[g+L*4>>>2>>>0],"parameter "+L);return A};function qp(v,g,A){g>>>=0;var L=Xp(v,g),z=L.shift();v--;var Q=`return function (obj, func, destructorsRef, args) {
`,ue=0,te=[];A===0&&te.push("obj");for(var he=["retType"],ge=[z],be=0;be<v;++be)te.push("arg"+be),he.push("argType"+be),ge.push(L[be]),Q+=`  var arg${be} = argType${be}.readValueFromPointer(args${ue?"+"+ue:""});
`,ue+=L[be].argPackAdvance;var rt=A===1?"new func":"func.call";Q+=`  var rv = ${rt}(${te.join(", ")});
`,z.isVoid||(he.push("emval_returnValue"),ge.push(uu),Q+=`  return emval_returnValue(retType, destructorsRef, rv);
`),Q+=`};
`,he.push(Q);var St=au(Function,he)(...ge),Yt=`methodCaller<(${L.map(Nt=>Nt.name).join(", ")}) => ${z.name}>`;return Wp(G(Yt,St))}function $p(v,g){return v>>>=0,g>>>=0,v=rn.toValue(v),g=rn.toValue(g),rn.toHandle(v[g])}function Yp(v){v>>>=0,v>9&&(Sr[v+1]+=1)}function jp(v){return v>>>=0,rn.toHandle(fu(v))}function Zp(){return rn.toHandle({})}function Kp(v){v>>>=0;var g=rn.toValue(v);We(g),Mo(v)}function Jp(v,g,A){v>>>=0,g>>>=0,A>>>=0,v=rn.toValue(v),g=rn.toValue(g),A=rn.toValue(A),v[g]=A}function Qp(v,g){v>>>=0,g>>>=0,v=os(v,"_emval_take_value");var A=v.readValueFromPointer(g);return rn.toHandle(A)}var em=()=>4294901760,tm=v=>{var g=R.buffer,A=(v-g.byteLength+65535)/65536;try{return R.grow(A),K(),1}catch{}};function nm(v){v>>>=0;var g=P.length,A=em();if(v>A)return!1;for(var L=(he,ge)=>he+(ge-he%ge)%ge,z=1;z<=4;z*=2){var Q=g*(1+.2/z);Q=Math.min(Q,v+100663296);var ue=Math.min(A,L(Math.max(v,Q),65536)),te=tm(ue);if(te)return!0}return!1}var hu=(v,g)=>{v<128?g.push(v):g.push(v%128|128,v>>7)},rm=v=>{for(var g={i:"i32",j:"i64",f:"f32",d:"f64",e:"externref",p:"i32"},A={parameters:[],results:v[0]=="v"?[]:[g[v[0]]]},L=1;L<v.length;++L)A.parameters.push(g[v[L]]);return A},im=(v,g)=>{var A=v.slice(0,1),L=v.slice(1),z={i:127,p:127,j:126,f:125,d:124,e:111};g.push(96),hu(L.length,g);for(var Q=0;Q<L.length;++Q)g.push(z[L[Q]]);A=="v"?g.push(0):g.push(1,z[A])},am=(v,g)=>{if(typeof WebAssembly.Function=="function")return new WebAssembly.Function(rm(g),v);var A=[1];im(g,A);var L=[0,97,115,109,1,0,0,0,1];hu(A.length,L),L.push(...A),L.push(2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0);var z=new WebAssembly.Module(new Uint8Array(L)),Q=new WebAssembly.Instance(z,{e:{f:v}}),ue=Q.exports.f;return ue},sm=(v,g)=>{if(vi)for(var A=v;A<v+g;A++){var L=nn(A);L&&vi.set(L,A)}},vi,om=v=>(vi||(vi=new WeakMap,sm(0,ht.length)),vi.get(v)||0),wo=[],lm=()=>{if(wo.length)return wo.pop();try{ht.grow(1)}catch(v){throw v instanceof RangeError?"Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.":v}return ht.length-1},Ao=(v,g)=>ht.set(v,g),Ea=(v,g)=>{var A=om(v);if(A)return A;var L=lm();try{Ao(L,v)}catch(Q){if(!(Q instanceof TypeError))throw Q;var z=am(v,g);Ao(L,z)}return vi.set(v,L),L},Ta=v=>{vi.delete(nn(v)),Ao(v,null),wo.push(v)};Re=r.InternalError=class extends Error{constructor(g){super(g),this.name="InternalError"}},N(),Pe=r.BindingError=class extends Error{constructor(g){super(g),this.name="BindingError"}},J(),_o(),Ct(),vn=r.UnboundTypeError=Lt(Error,"UnboundTypeError"),fp();var cm={i:ae,D:fe,n:we,C:st,H:Et,h:dn,g:lp,a:cp,G:ou,t:pp,e:mp,x:gp,c:_p,j:yp,f:Sp,k:bp,w:Rp,s:Ip,o:Op,l:Np,I:kp,F:Bp,v:Gp,z:Hp,b:Mo,m:Vp,y:qp,B:$p,u:Yp,q:jp,A:Zp,p:Kp,r:Jp,d:Qp,E:nm},Gn=lt(),du=v=>(du=Gn.L)(v),Ro=v=>(Ro=Gn.N)(v),br=v=>(br=Gn.O)(v),pu=v=>(pu=Gn.P)(v);function um(v){v=Object.assign({},v);var g=L=>z=>L(z)>>>0,A=L=>()=>L()>>>0;return v.L=g(v.L),v.N=g(v.N),v._emscripten_stack_alloc=g(v._emscripten_stack_alloc),v.emscripten_stack_get_current=A(v.emscripten_stack_get_current),v}r.addFunction=Ea,r.removeFunction=Ta;var ls;ee=function v(){ls||mu(),ls||(ee=v)};function mu(){if(Be>0||(oe(),Be>0))return;function v(){var g;ls||(ls=!0,r.calledRun=!0,!U&&(xe(),i(r),(g=r.onRuntimeInitialized)==null||g.call(r),pe()))}r.setStatus?(r.setStatus("Running..."),setTimeout(function(){setTimeout(function(){r.setStatus("")},1),v()},1)):v()}if(r.preInit)for(typeof r.preInit=="function"&&(r.preInit=[r.preInit]);r.preInit.length>0;)r.preInit.pop()();return mu(),n=s,n}})();let Bn;async function mm(t={}){return Bn=await pm(t),Bn.setup(),Bn}const vm=()=>Bn;let Ns=[];const wn=t=>(Ns.push(t),t),gt=(t,e,n,r=0,i=0,a=0)=>wn(Bn.Manifold.cube([t,e,n]).translate([r,i,a])),or=(t,e,n=0,r=0,i=0,a=e)=>wn(Bn.Manifold.cylinder(t,e,a,64).translate([n,r,i])),Qt=(...t)=>wn(Bn.Manifold.union(t.flat())),En=(t,...e)=>wn(t.subtract(Qt(...e))),Pc=t=>wn(new Bn.CrossSection(t,"EvenOdd")),so=(t,e)=>wn(t.extrude(e)),Tn=(t,e)=>wn(t.translate(e));function hh(t,e,n){return n=Math.min(n,t/2-.01,e/2-.01),n<=0?Pc([[[0,0],[t,0],[t,e],[0,e]]]):wn(Bn.CrossSection.square([t-2*n,e-2*n]).offset(n,"Round",2,32).translate([n,n]))}const Lr=(t,e,n,r=0)=>so(hh(t,e,r),n);function dh(t){if(t.w<=2*t.wall||t.d<=2*t.wall||t.h<=t.bottom)throw Error("Стенки или дно не помещаются");let n=[En(Lr(t.w,t.d,t.h,t.radius||0),Tn(Lr(t.w-2*t.wall,t.d-2*t.wall,t.h,t.radius?Math.max(0,t.radius-t.wall):0),[t.wall,t.wall,t.bottom]))];for(let r=1;r<t.cols;r++)n.push(gt(t.wall,t.d-2*t.wall,t.h,t.w*r/t.cols-t.wall/2,t.wall,0));for(let r=1;r<t.rows;r++)n.push(gt(t.w-2*t.wall,t.wall,t.h,t.wall,t.d*r/t.rows-t.wall/2,0));return Qt(n)}function gm(t,e,n,r=0){if(!e)throw Error("Шрифт ещё загружается");if(t.length>90)throw Error("Надпись слишком длинная (максимум 90 символов)");const i=n/(e.tables.os2.sCapHeight||e.unitsPerEm*.72);let a=0,s=[];for(const o of e.stringToGlyphs(t)){const l=o.getPath(a,0,e.unitsPerEm*i);let c=[],u=null,h=[0,0];const f=(p,_)=>{c.push([p,-_]),h=[p,_]};for(const p of l.commands){if(p.type==="M"&&(c.length>2&&s.push(c),c=[],f(p.x,p.y),u=[p.x,p.y]),p.type==="L"&&f(p.x,p.y),p.type==="Q"||p.type==="C"){const[_,x]=h;for(let m=1;m<=8;m++){const d=m/8,w=1-d;p.type==="Q"?f(w*w*_+2*w*d*p.x1+d*d*p.x,w*w*x+2*w*d*p.y1+d*d*p.y):f(w*w*w*_+3*w*w*d*p.x1+3*w*d*d*p.x2+d*d*d*p.x,w*w*w*x+3*w*w*d*p.y1+3*w*d*d*p.y2+d*d*d*p.y)}}p.type==="Z"&&(c.length>2&&s.push(c),c=[],h=u)}c.length>2&&s.push(c),a+=(o.advanceWidth||e.unitsPerEm*.5)*i+r}return s.length?Pc(s):null}function _m(t,e,n=t.w,r=t.d,i=t.h){const a=t.text.split("/").map(c=>c.trim()).filter(Boolean);if(!a.length)return null;if(a.length>3)throw Error("Не более трёх строк");const s=a.map(c=>gm(c,e[t.font],t.textSize,t.spacing||0)),o=t.textSize*1.4,l=o*a.length;return Qt(s.map((c,u)=>{const h=c.bounds(),f=h.max[0]-h.min[0],p=h.max[1]-h.min[1];if(f>n-12||l>r-6)throw Error("Надпись не помещается: уменьшите размер букв или увеличьте табличку");const _=t.align==="Слева"?6:t.align==="Справа"?n-f-6:(n-f)/2;return Tn(so(c,t.relief),[_-h.min[0],(r+l)/2-(u+1)*o-h.min[1]+(o-p)/2,i])}))}function ph(t,e){const n=Math.min(t.diameter,t.top)/2-t.wave,r=Math.hypot(t.ribs*t.wave/Math.max(1,n),Math.abs(t.top-t.diameter)/(2*t.h)+Math.abs(t.bulge)*Math.PI*Math.max(t.diameter,t.top)/(200*t.h)+Math.abs(t.twist)*Math.PI/180*t.ribs*t.wave/t.h);if(t.mode!=="Спиральная печать"&&t.wall/Math.sqrt(1+r*r)<.75)throw Error("При таком рельефе стенка местами тоньше 0,75 мм. Увеличьте стенку или уменьшите рельеф и скрутку.");const i=128,a=64,s=[],o=[],l=e==="vase"&&t.mode==="Спиральная печать",c=e==="lamp"||t.mode==="Чехол",u=c?0:t.bottom,h=(m,d,w)=>{let b=m/a,E=2*Math.PI*d/i,R=w?u+(t.h-u)*b:t.h*b,U=R/t.h,C=(t.diameter/2+(t.top-t.diameter)/2*U)*(1+t.bulge/100*Math.sin(Math.PI*U)),P=E-t.twist*Math.PI/180*U,S=1;t.section==="Шестиугольник"&&(S=Math.cos(Math.PI/6)/Math.cos(((P+Math.PI/6)%(Math.PI/3)+Math.PI/3)%(Math.PI/3)-Math.PI/6)),t.section==="Квадрат"&&(S=1/Math.max(Math.abs(Math.cos(P)),Math.abs(Math.sin(P)))),t.section==="Звезда"&&(S=1+.12*Math.cos(5*P));const T=t.style==="Ромбы"||t.style==="Плетёный колокол"?Math.cos(8*Math.PI*U):1;if(C=C*S+t.wave*Math.cos(t.ribs*P)*T-(w?t.wall:0),t.style==="Косой срез"&&(R=R*(1+.12*Math.cos(E)*U**4)/1.12),t.style==="Лепестки"&&(R=R*(1+.08*Math.cos(5*E)*U**6)/1.08),C<2)throw Error("Профиль слишком узкий для заданной стенки");return[C*Math.cos(E),C*Math.sin(E),R]};for(let m=0;m<(l?1:2);m++)for(let d=0;d<=a;d++)for(let w=0;w<i;w++)s.push(h(d,w,m));const f=(m,d,w)=>m*(a+1)*i+d*i+(w+i)%i,p=(m,d,w,b)=>{o.push(m,d,w,m,w,b)};for(let m=0;m<a;m++)for(let d=0;d<i;d++)p(f(0,m,d),f(0,m,d+1),f(0,m+1,d+1),f(0,m+1,d)),l||p(f(1,m+1,d),f(1,m+1,d+1),f(1,m,d+1),f(1,m,d));if(l){const m=s.length;s.push([0,0,0],[0,0,t.h]);for(let d=0;d<i;d++)o.push(m,f(0,0,d+1),f(0,0,d),m+1,f(0,a,d),f(0,a,d+1))}else{for(let m=0;m<i;m++)p(f(0,a,m),f(0,a,m+1),f(1,a,m+1),f(1,a,m));if(c)for(let m=0;m<i;m++)p(f(0,0,m+1),f(0,0,m),f(1,0,m),f(1,0,m+1));else{const m=s.length;s.push([0,0,0],[0,0,u]);for(let d=0;d<i;d++)o.push(m,f(0,0,d+1),f(0,0,d),m+1,f(1,0,d),f(1,0,d+1))}}let _=xm(s,o);if(e==="lamp"&&["Звёздное небо","Ажурные ромбы"].includes(t.style)){const m=[],d=Math.max(1,Math.min(7,Math.floor(t.h/20))),w=Math.max(6,Math.min(16,Math.floor(Math.min(t.diameter,t.top)*Math.PI/14)));for(let b=0;b<d;b++)for(let E=0;E<w;E++){const R=(b+.5)/d*.7+.15,U=(E+b%2*.5)*Math.PI*2/w,C=(t.diameter/2+(t.top-t.diameter)/2*R)*(1+t.bulge/100*Math.sin(Math.PI*R)),P=U-t.twist*Math.PI/180*R,S=C+t.wave*Math.cos(t.ribs*P);let T=t.style==="Звёздное небо"?Array.from({length:10},(k,Y)=>{const X=Y%2?1.3:3.2;return[Math.cos(Y*Math.PI/5)*X,Math.sin(Y*Math.PI/5)*X]}):[[0,3],[4.5,0],[0,-3],[-4.5,0]],I=wn(so(Pc([T]),t.wall*6+t.wave*2+4).rotate([0,90,U*180/Math.PI]));m.push(Tn(I,[(S-t.wall*3-2)*Math.cos(U),(S-t.wall*3-2)*Math.sin(U),t.h*R]))}_=En(_,m)}if(e==="lamp"&&t.socket!=="Без крепления"){const m=t.socket==="E27"?40:t.socket==="E14"?28:t.socketDiameter,d=m/2,w=(t.mount==="Сверху"?t.top:t.diameter)/2,b=t.mount==="Сверху"?t.h-t.ring:0;if(d+5>=w-t.wall)throw Error("Абажур слишком узкий для патрона");let R=[En(or(t.ring,d+5,0,0,b),or(t.ring+2,d,0,0,b-1))];for(let U=0;U<t.spokes;U++)R.push(wn(gt(w-d+3,4,t.ring,d-2,-2,b).rotate([0,0,U*360/t.spokes])));_=Qt(_,R),_=En(_,or(t.h+2,d,0,0,-1))}let x=[{name:e==="lamp"?"Абажур":"Ваза",solid:_}];if(e==="vase"&&t.style==="Двухцветная"){const m=Math.max(t.diameter,t.top)*(1+Math.abs(t.bulge)/100)+t.wave+10,d=t.h*(t.colorSplit||50)/100,w=gt(m*2,m*2,d,-m,-m);x=[{name:"Нижний цвет",solid:wn(_.intersect(w))},{name:"Верхний цвет",solid:En(_,w),color:"#f2eee5"}]}return e==="vase"&&t.mode==="Кашпо с поддоном"&&(x[0].solid=En(_,or(t.bottom+2,t.drain/2,0,0,-1)),x.push({name:"Поддон",solid:Tn(En(or(8,t.diameter/2+8),or(8,t.diameter/2+5,0,0,2)),[t.diameter+20,0,0])})),e==="lamp"&&t.diffuser==="Да"&&x.push({name:"Диффузор",solid:Tn(ph({...t,diameter:t.diameter-12,top:t.top-12,wave:0,ribs:0,socket:"Без крепления",wall:.8,diffuser:"Нет"},"lamp")[0].solid,[t.diameter+20,0,0]),color:"#f2eee5"}),x}function xm(t,e){const n=new Bn.Mesh({numProp:3,vertProperties:new Float32Array(t.flat()),triVerts:new Uint32Array(e)});n.merge();const r=wn(new Bn.Manifold(n));if(r.status()!=="NoError")throw Error("Некорректная сетка: "+r.status());return r}function ym(t){if(t.part==="Панель"){const o=t.cols*40,l=t.rows*40;let c=Lr(o,l,t.h,5),u=[];for(let h=20;h<l;h+=20)for(let f=20+(h/20%2?0:20);f<o;f+=40)u.push(Tn(so(hh(5,15,2.5),t.h+2),[f-2.5,h-7.5,-1]));if(![0,1,2,4].includes(t.holes))throw Error("Монтажных отверстий: 0, 1, 2 или 4");if(t.holes){const h=t.holes===1?[[o/2,l-10]]:t.holes===2?[[10,l-10],[o-10,l-10]]:[[10,10],[o-10,10],[10,l-10],[o-10,l-10]];for(const[f,p]of h)u.push(or(t.h+2,t.hole/2,f,p,-1))}return c=En(c,u),t.spacer&&(c=Qt(c,Tn(En(Lr(o,l,t.spacer,5),Tn(Lr(o-10,l-10,t.spacer+2,1),[5,5,-1])),[0,0,t.h]))),[{name:"Панель SKÅDIS",solid:c}]}let e;const n=t.part==="Крючок"?(t.hooks-1)*40+12:t.w,r=t.d,i=t.height,a=t.wall;if(t.part==="Лоток"||t.part==="Стакан")e=dh({w:n,d:r,h:i,wall:a,bottom:a,cols:t.divX,rows:t.divY,radius:4});else if(t.part==="Полка"||t.part==="Держатель телефона")e=Qt(gt(n,r,a),gt(n,a,i),gt(n,a,8,0,r-a));else if(t.part==="Крючок"){e=gt(n,a,25);for(let o=0;o<t.hooks;o++)e=Qt(e,gt(12,r,a,o*40),gt(12,a,20,o*40,r-a))}else if(t.part==="Держатель катушки"||t.part==="Держатель скотча")e=Qt(gt(n,5,i),Tn(wn(or(r,8).rotate([-90,0,0])),[n/2,5,i/2]),Tn(wn(or(3,12).rotate([-90,0,0])),[n/2,r+2,i/2]));else if(t.part==="Держатель наушников")e=Qt(gt(n,a,i),gt(n,r,a,0,0,i/2),gt(n,a,10,0,r-a,i/2));else if(t.part==="Держатель плоскогубцев")e=En(Qt(gt(n,r,a),gt(n,a,i)),gt(16,r*.6,a+2,n/2-8,r*.3,-1));else if(t.part==="Зажим")e=Qt(gt(n,r,a),gt(n,r,a,0,0,t.clipGap+a),gt(n,a,t.clipGap+2*a));else if(t.part==="Держатель отвёртки"||t.part==="Держатель кабеля"){e=Qt(gt(n,r,a),gt(n,a,25));let o=[];for(let l=10;l<n-5;l+=20)o.push(or(a+2,t.part==="Держатель кабеля"?4:6,l,r*.65,-1));e=En(e,o)}else e=Qt(gt(15,6,30),gt(15,18,3,0,0,27));const s=[];for(const o of t.part==="Крючок"&&t.hooks===1||t.part==="Крепёж"?[3.75]:n>=60?[n/2-22.25,n/2+17.75]:[n/2-2.25]){const l=4.5-t.clearance,c=t.panelThickness||5,u=t.clearance,h=-c-u-1.4;s.push(Qt(gt(l,c+u+3.4,3,o,h,12),gt(1.3,1.4,12,o,h,0),gt(1.3,1.4,12,o+l-1.3,h,0),gt(1.3,1.4+t.clipBulge,2,o,h-t.clipBulge,0),gt(1.3,1.4+t.clipBulge,2,o+l-1.3,h-t.clipBulge,0)))}return e=Qt(e,s),[{name:t.part,solid:e}]}function Sm(t,e,n={}){if(!Bn)throw Error("Геометрическое ядро не загружено");Ns=[];try{const r=va.find(s=>s.id===t);if(!r)throw Error("Генератор недоступен");for(const s of r.fields){const o=e[s.key];if(s.type==="number"&&(!Number.isFinite(o)||o<s.min||o>s.max||s.step===1&&!Number.isInteger(o)))throw Error(s.label+": допустимо "+s.min+"…"+s.max);if(s.type==="select"&&!s.options.includes(o))throw Error("Неизвестный вариант: "+s.label)}let i;if(t==="box"){let s=dh(e);if(e.lid==="Сдвижная"){if(e.wall<1.6||e.h<e.bottom*3+2)throw Error("Для сдвижной крышки стенка ≥1,6 мм и достаточная высота");s=En(s,gt(e.w-2*e.wall+1.6,e.d-e.wall+1,e.bottom+2*e.clearance,e.wall-.8,-1,e.h-e.bottom-1.2-e.clearance))}if(e.texture==="Рифлёные"){const o=[];for(let l=5;l<e.w-2;l+=5)o.push(gt(.8,.8,e.h,l,-.4),gt(.8,.8,e.h,l,e.d-.4));s=Qt(s,o)}if(i=[{name:"Корпус",solid:s}],e.lid!=="Без крышки"){let o=Lr(e.w+2*e.wall+2*e.clearance,e.d+2*e.wall+2*e.clearance,e.bottom,e.radius);const l=e.w+2*e.wall+2*e.clearance,c=e.d+2*e.wall+2*e.clearance;if(e.lid==="Накладная"?o=Qt(o,Tn(En(Lr(l,c,7,e.radius),Tn(Lr(e.w+2*e.clearance,e.d+2*e.clearance,8,e.radius),[e.wall,e.wall,-.1])),[0,0,e.bottom])):e.lid==="Сдвижная"?o=Lr(e.w-2*e.wall+1.6-2*e.clearance,e.d-e.wall-e.clearance,e.bottom,.6):o=Qt(o,gt(e.w-2*e.wall-2*e.clearance,e.d-2*e.wall-2*e.clearance,3,2*e.wall+2*e.clearance,2*e.wall+2*e.clearance,e.bottom-.1)),e.engrave==="Гравировка"&&e.relief>e.bottom-.6)throw Error("Гравировка должна оставлять минимум 0,6 мм материала");const u=o.boundingBox();let h=_m({...e,w:u.max[0]-u.min[0],d:u.max[1]-u.min[1],h:e.lid==="Вставная"?e.bottom+2.9:e.bottom},n.fonts||{});h&&(o=e.engrave==="Гравировка"?En(o,Tn(h,[0,0,-e.relief])):Qt(o,h)),i.push({name:"Крышка",solid:Tn(o,[e.w+15,0,0])})}}else t==="vase"||t==="lamp"?i=ph(e,t):t==="skadis"&&(i=ym(e));return i.map(s=>{if(s.solid.isEmpty()||s.solid.status()!=="NoError")throw Error("Пустая или некорректная деталь: "+s.name);const o=s.solid.getMesh();return(l=>l)({name:s.name,color:s.color||"#3ce0c1",vertices:Array.from({length:o.numVert},(l,c)=>Array.from(o.vertProperties.slice(c*o.numProp,c*o.numProp+3))),triangles:Array.from(o.triVerts),volume:s.solid.volume()})})}finally{for(const r of[...new Set(Ns)].reverse())try{r.delete()}catch{}Ns=[]}}function bm(t){const e=Math.min(t.diameter,t.top)/2-t.wave,n=Math.hypot(t.ribs*t.wave/Math.max(1,e),Math.abs(t.top-t.diameter)/(2*t.h)+Math.abs(t.bulge)*Math.PI*Math.max(t.diameter,t.top)/(200*t.h)+Math.abs(t.twist)*Math.PI/180*t.ribs*t.wave/t.h);return Math.max(.8,Math.ceil(.8*Math.sqrt(1+n*n)*10)/10)}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dc="180",sa={ROTATE:0,DOLLY:1,PAN:2},ra={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Mm=0,gu=1,Em=2,mh=1,Tm=2,Cr=3,ci=0,An=1,Ur=2,ai=0,oa=1,_u=2,xu=3,yu=4,wm=5,Ti=100,Am=101,Rm=102,Cm=103,Pm=104,Dm=200,Um=201,Lm=202,Fm=203,bl=204,Ml=205,Im=206,Om=207,Nm=208,km=209,Bm=210,Gm=211,zm=212,Hm=213,Vm=214,El=0,Tl=1,wl=2,ua=3,Al=4,Rl=5,Cl=6,Pl=7,vh=0,Wm=1,Xm=2,si=0,qm=1,$m=2,Ym=3,jm=4,Zm=5,Km=6,Jm=7,gh=300,fa=301,ha=302,Dl=303,Ul=304,oo=306,Ll=1e3,Ci=1001,Fl=1002,Zn=1003,Qm=1004,cs=1005,ur=1006,Co=1007,Pi=1008,_r=1009,_h=1010,xh=1011,ka=1012,Uc=1013,Di=1014,Fr=1015,ja=1016,Lc=1017,Fc=1018,Ba=1020,yh=35902,Sh=35899,bh=1021,Mh=1022,jn=1023,Ga=1026,za=1027,Eh=1028,Ic=1029,Th=1030,Oc=1031,Nc=1033,ks=33776,Bs=33777,Gs=33778,zs=33779,Il=35840,Ol=35841,Nl=35842,kl=35843,Bl=36196,Gl=37492,zl=37496,Hl=37808,Vl=37809,Wl=37810,Xl=37811,ql=37812,$l=37813,Yl=37814,jl=37815,Zl=37816,Kl=37817,Jl=37818,Ql=37819,ec=37820,tc=37821,nc=36492,rc=36494,ic=36495,ac=36283,sc=36284,oc=36285,lc=36286,ev=3200,tv=3201,wh=0,nv=1,ri="",Nn="srgb",da="srgb-linear",Ys="linear",Tt="srgb",Hi=7680,Su=519,rv=512,iv=513,av=514,Ah=515,sv=516,ov=517,lv=518,cv=519,bu=35044,Mu="300 es",fr=2e3,js=2001;class Ii{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const i=r[e];if(i!==void 0){const a=i.indexOf(n);a!==-1&&i.splice(a,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const i=r.slice(0);for(let a=0,s=i.length;a<s;a++)i[a].call(this,e);e.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hs=Math.PI/180,cc=180/Math.PI;function Za(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(pn[t&255]+pn[t>>8&255]+pn[t>>16&255]+pn[t>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[n&63|128]+pn[n>>8&255]+"-"+pn[n>>16&255]+pn[n>>24&255]+pn[r&255]+pn[r>>8&255]+pn[r>>16&255]+pn[r>>24&255]).toLowerCase()}function pt(t,e,n){return Math.max(e,Math.min(n,t))}function uv(t,e){return(t%e+e)%e}function Po(t,e,n){return(1-n)*t+n*e}function wa(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function bn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const fv={DEG2RAD:Hs};class ct{constructor(e=0,n=0){ct.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,i=e.elements;return this.x=i[0]*n+i[3]*r+i[6],this.y=i[1]*n+i[4]*r+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=pt(this.x,e.x,n.x),this.y=pt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=pt(this.x,e,n),this.y=pt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(pt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(pt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),i=Math.sin(n),a=this.x-e.x,s=this.y-e.y;return this.x=a*r-s*i+e.x,this.y=a*i+s*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ui{constructor(e=0,n=0,r=0,i=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=i}static slerpFlat(e,n,r,i,a,s,o){let l=r[i+0],c=r[i+1],u=r[i+2],h=r[i+3];const f=a[s+0],p=a[s+1],_=a[s+2],x=a[s+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h;return}if(o===1){e[n+0]=f,e[n+1]=p,e[n+2]=_,e[n+3]=x;return}if(h!==x||l!==f||c!==p||u!==_){let m=1-o;const d=l*f+c*p+u*_+h*x,w=d>=0?1:-1,b=1-d*d;if(b>Number.EPSILON){const R=Math.sqrt(b),U=Math.atan2(R,d*w);m=Math.sin(m*U)/R,o=Math.sin(o*U)/R}const E=o*w;if(l=l*m+f*E,c=c*m+p*E,u=u*m+_*E,h=h*m+x*E,m===1-o){const R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,r,i,a,s){const o=r[i],l=r[i+1],c=r[i+2],u=r[i+3],h=a[s],f=a[s+1],p=a[s+2],_=a[s+3];return e[n]=o*_+u*h+l*p-c*f,e[n+1]=l*_+u*f+c*h-o*p,e[n+2]=c*_+u*p+o*f-l*h,e[n+3]=u*_-o*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,i){return this._x=e,this._y=n,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,i=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(r/2),u=o(i/2),h=o(a/2),f=l(r/2),p=l(i/2),_=l(a/2);switch(s){case"XYZ":this._x=f*u*h+c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h-f*p*_;break;case"YXZ":this._x=f*u*h+c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h+f*p*_;break;case"ZXY":this._x=f*u*h-c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h-f*p*_;break;case"ZYX":this._x=f*u*h-c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h+f*p*_;break;case"YZX":this._x=f*u*h+c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h-f*p*_;break;case"XZY":this._x=f*u*h-c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,i=Math.sin(r);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],i=n[4],a=n[8],s=n[1],o=n[5],l=n[9],c=n[2],u=n[6],h=n[10],f=r+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(a-c)*p,this._z=(s-i)*p}else if(r>o&&r>h){const p=2*Math.sqrt(1+r-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+s)/p,this._z=(a+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-r-h);this._w=(a-c)/p,this._x=(i+s)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-r-o);this._w=(s-i)/p,this._x=(a+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const i=Math.min(1,n/r);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,i=e._y,a=e._z,s=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=r*u+s*o+i*c-a*l,this._y=i*u+s*l+a*o-r*c,this._z=a*u+s*c+r*l-i*o,this._w=s*u-r*o-i*l-a*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,i=this._y,a=this._z,s=this._w;let o=s*e._w+r*e._x+i*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=r,this._y=i,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*r+n*this._x,this._y=p*i+n*this._y,this._z=p*a+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=s*h+this._w*f,this._x=r*h+this._x*f,this._y=i*h+this._y*f,this._z=a*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),i=Math.sqrt(1-r),a=Math.sqrt(r);return this.set(i*Math.sin(e),i*Math.cos(e),a*Math.sin(n),a*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,n=0,r=0){q.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Eu.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Eu.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,i=this.z,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6]*i,this.y=a[1]*n+a[4]*r+a[7]*i,this.z=a[2]*n+a[5]*r+a[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,i=this.z,a=e.elements,s=1/(a[3]*n+a[7]*r+a[11]*i+a[15]);return this.x=(a[0]*n+a[4]*r+a[8]*i+a[12])*s,this.y=(a[1]*n+a[5]*r+a[9]*i+a[13])*s,this.z=(a[2]*n+a[6]*r+a[10]*i+a[14])*s,this}applyQuaternion(e){const n=this.x,r=this.y,i=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*i-o*r),u=2*(o*n-a*i),h=2*(a*r-s*n);return this.x=n+l*c+s*h-o*u,this.y=r+l*u+o*c-a*h,this.z=i+l*h+a*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,i=this.z,a=e.elements;return this.x=a[0]*n+a[4]*r+a[8]*i,this.y=a[1]*n+a[5]*r+a[9]*i,this.z=a[2]*n+a[6]*r+a[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=pt(this.x,e.x,n.x),this.y=pt(this.y,e.y,n.y),this.z=pt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=pt(this.x,e,n),this.y=pt(this.y,e,n),this.z=pt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(pt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,i=e.y,a=e.z,s=n.x,o=n.y,l=n.z;return this.x=i*l-a*o,this.y=a*s-r*l,this.z=r*o-i*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Do.copy(this).projectOnVector(e),this.sub(Do)}reflect(e){return this.sub(Do.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(pt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,i=this.z-e.z;return n*n+r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const i=Math.sin(n)*e;return this.x=i*Math.sin(r),this.y=Math.cos(n)*e,this.z=i*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=i,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Do=new q,Eu=new Ui;class ut{constructor(e,n,r,i,a,s,o,l,c){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,i,a,s,o,l,c)}set(e,n,r,i,a,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=n,u[4]=a,u[5]=l,u[6]=r,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,i=n.elements,a=this.elements,s=r[0],o=r[3],l=r[6],c=r[1],u=r[4],h=r[7],f=r[2],p=r[5],_=r[8],x=i[0],m=i[3],d=i[6],w=i[1],b=i[4],E=i[7],R=i[2],U=i[5],C=i[8];return a[0]=s*x+o*w+l*R,a[3]=s*m+o*b+l*U,a[6]=s*d+o*E+l*C,a[1]=c*x+u*w+h*R,a[4]=c*m+u*b+h*U,a[7]=c*d+u*E+h*C,a[2]=f*x+p*w+_*R,a[5]=f*m+p*b+_*U,a[8]=f*d+p*E+_*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],i=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*s*u-n*o*c-r*a*u+r*o*l+i*a*c-i*s*l}invert(){const e=this.elements,n=e[0],r=e[1],i=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*s-o*c,f=o*l-u*a,p=c*a-s*l,_=n*h+r*f+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=h*x,e[1]=(i*c-u*r)*x,e[2]=(o*r-i*s)*x,e[3]=f*x,e[4]=(u*n-i*l)*x,e[5]=(i*a-o*n)*x,e[6]=p*x,e[7]=(r*l-c*n)*x,e[8]=(s*n-r*a)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,i,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(r*l,r*c,-r*(l*s+c*o)+s+e,-i*c,i*l,-i*(-c*s+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Uo.makeScale(e,n)),this}rotate(e){return this.premultiply(Uo.makeRotation(-e)),this}translate(e,n){return this.premultiply(Uo.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let i=0;i<9;i++)if(n[i]!==r[i])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Uo=new ut;function Rh(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Zs(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function hv(){const t=Zs("canvas");return t.style.display="block",t}const Tu={};function Ha(t){t in Tu||(Tu[t]=!0,console.warn(t))}function dv(t,e,n){return new Promise(function(r,i){function a(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:i();break;case t.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}const wu=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Au=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pv(){const t={enabled:!0,workingColorSpace:da,spaces:{},convert:function(i,a,s){return this.enabled===!1||a===s||!a||!s||(this.spaces[a].transfer===Tt&&(i.r=Or(i.r),i.g=Or(i.g),i.b=Or(i.b)),this.spaces[a].primaries!==this.spaces[s].primaries&&(i.applyMatrix3(this.spaces[a].toXYZ),i.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Tt&&(i.r=la(i.r),i.g=la(i.g),i.b=la(i.b))),i},workingToColorSpace:function(i,a){return this.convert(i,this.workingColorSpace,a)},colorSpaceToWorking:function(i,a){return this.convert(i,a,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ri?Ys:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,a=this.workingColorSpace){return i.fromArray(this.spaces[a].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,a,s){return i.copy(this.spaces[a].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,a){return Ha("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(i,a)},toWorkingColorSpace:function(i,a){return Ha("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(i,a)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return t.define({[da]:{primaries:e,whitePoint:r,transfer:Ys,toXYZ:wu,fromXYZ:Au,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Nn},outputColorSpaceConfig:{drawingBufferColorSpace:Nn}},[Nn]:{primaries:e,whitePoint:r,transfer:Tt,toXYZ:wu,fromXYZ:Au,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Nn}}}),t}const bt=pv();function Or(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function la(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Vi;class mv{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Vi===void 0&&(Vi=Zs("canvas")),Vi.width=e.width,Vi.height=e.height;const i=Vi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),r=Vi}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Zs("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const i=r.getImageData(0,0,e.width,e.height),a=i.data;for(let s=0;s<a.length;s++)a[s]=Or(a[s]/255)*255;return r.putImageData(i,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Or(n[r]/255)*255):n[r]=Or(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vv=0;class kc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vv++}),this.uuid=Za(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?a.push(Lo(i[s].image)):a.push(Lo(i[s]))}else a=Lo(i);r.url=a}return n||(e.images[this.uuid]=r),r}}function Lo(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?mv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gv=0;const Fo=new q;class Rn extends Ii{constructor(e=Rn.DEFAULT_IMAGE,n=Rn.DEFAULT_MAPPING,r=Ci,i=Ci,a=ur,s=Pi,o=jn,l=_r,c=Rn.DEFAULT_ANISOTROPY,u=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gv++}),this.uuid=Za(),this.name="",this.source=new kc(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Fo).x}get height(){return this.source.getSize(Fo).y}get depth(){return this.source.getSize(Fo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const i=this[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}i&&r&&i.isVector2&&r.isVector2||i&&r&&i.isVector3&&r.isVector3||i&&r&&i.isMatrix3&&r.isMatrix3?i.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ll:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case Fl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ll:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case Fl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=gh;Rn.DEFAULT_ANISOTROPY=1;class kt{constructor(e=0,n=0,r=0,i=1){kt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,i){return this.x=e,this.y=n,this.z=r,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,i=this.z,a=this.w,s=e.elements;return this.x=s[0]*n+s[4]*r+s[8]*i+s[12]*a,this.y=s[1]*n+s[5]*r+s[9]*i+s[13]*a,this.z=s[2]*n+s[6]*r+s[10]*i+s[14]*a,this.w=s[3]*n+s[7]*r+s[11]*i+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,i,a;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],_=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const b=(c+1)/2,E=(p+1)/2,R=(d+1)/2,U=(u+f)/4,C=(h+x)/4,P=(_+m)/4;return b>E&&b>R?b<.01?(r=0,i=.707106781,a=.707106781):(r=Math.sqrt(b),i=U/r,a=C/r):E>R?E<.01?(r=.707106781,i=0,a=.707106781):(i=Math.sqrt(E),r=U/i,a=P/i):R<.01?(r=.707106781,i=.707106781,a=0):(a=Math.sqrt(R),r=C/a,i=P/a),this.set(r,i,a,n),this}let w=Math.sqrt((m-_)*(m-_)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(m-_)/w,this.y=(h-x)/w,this.z=(f-u)/w,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=pt(this.x,e.x,n.x),this.y=pt(this.y,e.y,n.y),this.z=pt(this.z,e.z,n.z),this.w=pt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=pt(this.x,e,n),this.y=pt(this.y,e,n),this.z=pt(this.z,e,n),this.w=pt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(pt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _v extends Ii{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ur,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new kt(0,0,e,n),this.scissorTest=!1,this.viewport=new kt(0,0,e,n);const i={width:e,height:n,depth:r.depth},a=new Rn(i);this.textures=[];const s=r.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:ur,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let i=0,a=this.textures.length;i<a;i++)this.textures[i].image.width=e,this.textures[i].image.height=n,this.textures[i].image.depth=r,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const i=Object.assign({},e.textures[n].image);this.textures[n].source=new kc(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Li extends _v{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Ch extends Rn{constructor(e=null,n=1,r=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:i},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xv extends Rn{constructor(e=null,n=1,r=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:i},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ga{constructor(e=new q(1/0,1/0,1/0),n=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Vn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Vn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Vn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const a=r.getAttribute("position");if(n===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Vn):Vn.fromBufferAttribute(a,s),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),us.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),us.copy(r.boundingBox)),us.applyMatrix4(e.matrixWorld),this.union(us)}const i=e.children;for(let a=0,s=i.length;a<s;a++)this.expandByObject(i[a],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Aa),fs.subVectors(this.max,Aa),Wi.subVectors(e.a,Aa),Xi.subVectors(e.b,Aa),qi.subVectors(e.c,Aa),Vr.subVectors(Xi,Wi),Wr.subVectors(qi,Xi),gi.subVectors(Wi,qi);let n=[0,-Vr.z,Vr.y,0,-Wr.z,Wr.y,0,-gi.z,gi.y,Vr.z,0,-Vr.x,Wr.z,0,-Wr.x,gi.z,0,-gi.x,-Vr.y,Vr.x,0,-Wr.y,Wr.x,0,-gi.y,gi.x,0];return!Io(n,Wi,Xi,qi,fs)||(n=[1,0,0,0,1,0,0,0,1],!Io(n,Wi,Xi,qi,fs))?!1:(hs.crossVectors(Vr,Wr),n=[hs.x,hs.y,hs.z],Io(n,Wi,Xi,qi,fs))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mr=[new q,new q,new q,new q,new q,new q,new q,new q],Vn=new q,us=new ga,Wi=new q,Xi=new q,qi=new q,Vr=new q,Wr=new q,gi=new q,Aa=new q,fs=new q,hs=new q,_i=new q;function Io(t,e,n,r,i){for(let a=0,s=t.length-3;a<=s;a+=3){_i.fromArray(t,a);const o=i.x*Math.abs(_i.x)+i.y*Math.abs(_i.y)+i.z*Math.abs(_i.z),l=e.dot(_i),c=n.dot(_i),u=r.dot(_i);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const yv=new ga,Ra=new q,Oo=new q;class Bc{constructor(e=new q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):yv.setFromPoints(e).getCenter(r);let i=0;for(let a=0,s=e.length;a<s;a++)i=Math.max(i,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ra.subVectors(e,this.center);const n=Ra.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),i=(r-this.radius)*.5;this.center.addScaledVector(Ra,i/r),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ra.copy(e.center).add(Oo)),this.expandByPoint(Ra.copy(e.center).sub(Oo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Er=new q,No=new q,ds=new q,Xr=new q,ko=new q,ps=new q,Bo=new q;class Ph{constructor(e=new q,n=new q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Er)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Er.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Er.copy(this.origin).addScaledVector(this.direction,n),Er.distanceToSquared(e))}distanceSqToSegment(e,n,r,i){No.copy(e).add(n).multiplyScalar(.5),ds.copy(n).sub(e).normalize(),Xr.copy(this.origin).sub(No);const a=e.distanceTo(n)*.5,s=-this.direction.dot(ds),o=Xr.dot(this.direction),l=-Xr.dot(ds),c=Xr.lengthSq(),u=Math.abs(1-s*s);let h,f,p,_;if(u>0)if(h=s*l-o,f=s*o-l,_=a*u,h>=0)if(f>=-_)if(f<=_){const x=1/u;h*=x,f*=x,p=h*(h+s*f+2*o)+f*(s*h+f+2*l)+c}else f=a,h=Math.max(0,-(s*f+o)),p=-h*h+f*(f+2*l)+c;else f=-a,h=Math.max(0,-(s*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-s*a+o)),f=h>0?-a:Math.min(Math.max(-a,-l),a),p=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-a,-l),a),p=f*(f+2*l)+c):(h=Math.max(0,-(s*a+o)),f=h>0?a:Math.min(Math.max(-a,-l),a),p=-h*h+f*(f+2*l)+c);else f=s>0?-a:a,h=Math.max(0,-(s*f+o)),p=-h*h+f*(f+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(No).addScaledVector(ds,f),p}intersectSphere(e,n){Er.subVectors(e.center,this.origin);const r=Er.dot(this.direction),i=Er.dot(Er)-r*r,a=e.radius*e.radius;if(i>a)return null;const s=Math.sqrt(a-i),o=r-s,l=r+s;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,i,a,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(r=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(r=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(a=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(a=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),r>s||a>i||((a>r||isNaN(r))&&(r=a),(s<i||isNaN(i))&&(i=s),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),r>l||o>i)||((o>r||r!==r)&&(r=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(r>=0?r:i,n)}intersectsBox(e){return this.intersectBox(e,Er)!==null}intersectTriangle(e,n,r,i,a){ko.subVectors(n,e),ps.subVectors(r,e),Bo.crossVectors(ko,ps);let s=this.direction.dot(Bo),o;if(s>0){if(i)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Xr.subVectors(this.origin,e);const l=o*this.direction.dot(ps.crossVectors(Xr,ps));if(l<0)return null;const c=o*this.direction.dot(ko.cross(Xr));if(c<0||l+c>s)return null;const u=-o*Xr.dot(Bo);return u<0?null:this.at(u/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(e,n,r,i,a,s,o,l,c,u,h,f,p,_,x,m){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,i,a,s,o,l,c,u,h,f,p,_,x,m)}set(e,n,r,i,a,s,o,l,c,u,h,f,p,_,x,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=r,d[12]=i,d[1]=a,d[5]=s,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=_,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,i=1/$i.setFromMatrixColumn(e,0).length(),a=1/$i.setFromMatrixColumn(e,1).length(),s=1/$i.setFromMatrixColumn(e,2).length();return n[0]=r[0]*i,n[1]=r[1]*i,n[2]=r[2]*i,n[3]=0,n[4]=r[4]*a,n[5]=r[5]*a,n[6]=r[6]*a,n[7]=0,n[8]=r[8]*s,n[9]=r[9]*s,n[10]=r[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,i=e.y,a=e.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(i),c=Math.sin(i),u=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const f=s*u,p=s*h,_=o*u,x=o*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=p+_*c,n[5]=f-x*c,n[9]=-o*l,n[2]=x-f*c,n[6]=_+p*c,n[10]=s*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,_=c*u,x=c*h;n[0]=f+x*o,n[4]=_*o-p,n[8]=s*c,n[1]=s*h,n[5]=s*u,n[9]=-o,n[2]=p*o-_,n[6]=x+f*o,n[10]=s*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,_=c*u,x=c*h;n[0]=f-x*o,n[4]=-s*h,n[8]=_+p*o,n[1]=p+_*o,n[5]=s*u,n[9]=x-f*o,n[2]=-s*c,n[6]=o,n[10]=s*l}else if(e.order==="ZYX"){const f=s*u,p=s*h,_=o*u,x=o*h;n[0]=l*u,n[4]=_*c-p,n[8]=f*c+x,n[1]=l*h,n[5]=x*c+f,n[9]=p*c-_,n[2]=-c,n[6]=o*l,n[10]=s*l}else if(e.order==="YZX"){const f=s*l,p=s*c,_=o*l,x=o*c;n[0]=l*u,n[4]=x-f*h,n[8]=_*h+p,n[1]=h,n[5]=s*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*h+_,n[10]=f-x*h}else if(e.order==="XZY"){const f=s*l,p=s*c,_=o*l,x=o*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=f*h+x,n[5]=s*u,n[9]=p*h-_,n[2]=_*h-p,n[6]=o*u,n[10]=x*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sv,e,bv)}lookAt(e,n,r){const i=this.elements;return Pn.subVectors(e,n),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),qr.crossVectors(r,Pn),qr.lengthSq()===0&&(Math.abs(r.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),qr.crossVectors(r,Pn)),qr.normalize(),ms.crossVectors(Pn,qr),i[0]=qr.x,i[4]=ms.x,i[8]=Pn.x,i[1]=qr.y,i[5]=ms.y,i[9]=Pn.y,i[2]=qr.z,i[6]=ms.z,i[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,i=n.elements,a=this.elements,s=r[0],o=r[4],l=r[8],c=r[12],u=r[1],h=r[5],f=r[9],p=r[13],_=r[2],x=r[6],m=r[10],d=r[14],w=r[3],b=r[7],E=r[11],R=r[15],U=i[0],C=i[4],P=i[8],S=i[12],T=i[1],I=i[5],k=i[9],Y=i[13],X=i[2],K=i[6],$=i[10],ne=i[14],H=i[3],oe=i[7],xe=i[11],pe=i[15];return a[0]=s*U+o*T+l*X+c*H,a[4]=s*C+o*I+l*K+c*oe,a[8]=s*P+o*k+l*$+c*xe,a[12]=s*S+o*Y+l*ne+c*pe,a[1]=u*U+h*T+f*X+p*H,a[5]=u*C+h*I+f*K+p*oe,a[9]=u*P+h*k+f*$+p*xe,a[13]=u*S+h*Y+f*ne+p*pe,a[2]=_*U+x*T+m*X+d*H,a[6]=_*C+x*I+m*K+d*oe,a[10]=_*P+x*k+m*$+d*xe,a[14]=_*S+x*Y+m*ne+d*pe,a[3]=w*U+b*T+E*X+R*H,a[7]=w*C+b*I+E*K+R*oe,a[11]=w*P+b*k+E*$+R*xe,a[15]=w*S+b*Y+E*ne+R*pe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],i=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],_=e[3],x=e[7],m=e[11],d=e[15];return _*(+a*l*h-i*c*h-a*o*f+r*c*f+i*o*p-r*l*p)+x*(+n*l*p-n*c*f+a*s*f-i*s*p+i*c*u-a*l*u)+m*(+n*c*h-n*o*p-a*s*h+r*s*p+a*o*u-r*c*u)+d*(-i*o*u-n*l*h+n*o*f+i*s*h-r*s*f+r*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=n,i[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],i=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],_=e[12],x=e[13],m=e[14],d=e[15],w=h*m*c-x*f*c+x*l*p-o*m*p-h*l*d+o*f*d,b=_*f*c-u*m*c-_*l*p+s*m*p+u*l*d-s*f*d,E=u*x*c-_*h*c+_*o*p-s*x*p-u*o*d+s*h*d,R=_*h*l-u*x*l-_*o*f+s*x*f+u*o*m-s*h*m,U=n*w+r*b+i*E+a*R;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/U;return e[0]=w*C,e[1]=(x*f*a-h*m*a-x*i*p+r*m*p+h*i*d-r*f*d)*C,e[2]=(o*m*a-x*l*a+x*i*c-r*m*c-o*i*d+r*l*d)*C,e[3]=(h*l*a-o*f*a-h*i*c+r*f*c+o*i*p-r*l*p)*C,e[4]=b*C,e[5]=(u*m*a-_*f*a+_*i*p-n*m*p-u*i*d+n*f*d)*C,e[6]=(_*l*a-s*m*a-_*i*c+n*m*c+s*i*d-n*l*d)*C,e[7]=(s*f*a-u*l*a+u*i*c-n*f*c-s*i*p+n*l*p)*C,e[8]=E*C,e[9]=(_*h*a-u*x*a-_*r*p+n*x*p+u*r*d-n*h*d)*C,e[10]=(s*x*a-_*o*a+_*r*c-n*x*c-s*r*d+n*o*d)*C,e[11]=(u*o*a-s*h*a-u*r*c+n*h*c+s*r*p-n*o*p)*C,e[12]=R*C,e[13]=(u*x*i-_*h*i+_*r*f-n*x*f-u*r*m+n*h*m)*C,e[14]=(_*o*i-s*x*i-_*r*l+n*x*l+s*r*m-n*o*m)*C,e[15]=(s*h*i-u*o*i+u*r*l-n*h*l-s*r*f+n*o*f)*C,this}scale(e){const n=this.elements,r=e.x,i=e.y,a=e.z;return n[0]*=r,n[4]*=i,n[8]*=a,n[1]*=r,n[5]*=i,n[9]*=a,n[2]*=r,n[6]*=i,n[10]*=a,n[3]*=r,n[7]*=i,n[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,i))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),i=Math.sin(n),a=1-r,s=e.x,o=e.y,l=e.z,c=a*s,u=a*o;return this.set(c*s+r,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+r,u*l-i*s,0,c*l-i*o,u*l+i*s,a*l*l+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,i,a,s){return this.set(1,r,a,0,e,1,s,0,n,i,1,0,0,0,0,1),this}compose(e,n,r){const i=this.elements,a=n._x,s=n._y,o=n._z,l=n._w,c=a+a,u=s+s,h=o+o,f=a*c,p=a*u,_=a*h,x=s*u,m=s*h,d=o*h,w=l*c,b=l*u,E=l*h,R=r.x,U=r.y,C=r.z;return i[0]=(1-(x+d))*R,i[1]=(p+E)*R,i[2]=(_-b)*R,i[3]=0,i[4]=(p-E)*U,i[5]=(1-(f+d))*U,i[6]=(m+w)*U,i[7]=0,i[8]=(_+b)*C,i[9]=(m-w)*C,i[10]=(1-(f+x))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,n,r){const i=this.elements;let a=$i.set(i[0],i[1],i[2]).length();const s=$i.set(i[4],i[5],i[6]).length(),o=$i.set(i[8],i[9],i[10]).length();this.determinant()<0&&(a=-a),e.x=i[12],e.y=i[13],e.z=i[14],Wn.copy(this);const c=1/a,u=1/s,h=1/o;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=u,Wn.elements[5]*=u,Wn.elements[6]*=u,Wn.elements[8]*=h,Wn.elements[9]*=h,Wn.elements[10]*=h,n.setFromRotationMatrix(Wn),r.x=a,r.y=s,r.z=o,this}makePerspective(e,n,r,i,a,s,o=fr,l=!1){const c=this.elements,u=2*a/(n-e),h=2*a/(r-i),f=(n+e)/(n-e),p=(r+i)/(r-i);let _,x;if(l)_=a/(s-a),x=s*a/(s-a);else if(o===fr)_=-(s+a)/(s-a),x=-2*s*a/(s-a);else if(o===js)_=-s/(s-a),x=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,r,i,a,s,o=fr,l=!1){const c=this.elements,u=2/(n-e),h=2/(r-i),f=-(n+e)/(n-e),p=-(r+i)/(r-i);let _,x;if(l)_=1/(s-a),x=s/(s-a);else if(o===fr)_=-2/(s-a),x=-(s+a)/(s-a);else if(o===js)_=-1/(s-a),x=-a/(s-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let i=0;i<16;i++)if(n[i]!==r[i])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const $i=new q,Wn=new qt,Sv=new q(0,0,0),bv=new q(1,1,1),qr=new q,ms=new q,Pn=new q,Ru=new qt,Cu=new Ui;class xr{constructor(e=0,n=0,r=0,i=xr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,i=this._order){return this._x=e,this._y=n,this._z=r,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const i=e.elements,a=i[0],s=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],p=i[10];switch(n){case"XYZ":this._y=Math.asin(pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(pt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-pt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-pt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Ru.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ru,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Cu.setFromEuler(this),this.setFromQuaternion(Cu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xr.DEFAULT_ORDER="XYZ";class Dh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Mv=0;const Pu=new q,Yi=new Ui,Tr=new qt,vs=new q,Ca=new q,Ev=new q,Tv=new Ui,Du=new q(1,0,0),Uu=new q(0,1,0),Lu=new q(0,0,1),Fu={type:"added"},wv={type:"removed"},ji={type:"childadded",child:null},Go={type:"childremoved",child:null};class fn extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mv++}),this.uuid=Za(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DEFAULT_UP.clone();const e=new q,n=new xr,r=new Ui,i=new q(1,1,1);function a(){r.setFromEuler(n,!1)}function s(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new qt},normalMatrix:{value:new ut}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Yi.setFromAxisAngle(e,n),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(e,n){return Yi.setFromAxisAngle(e,n),this.quaternion.premultiply(Yi),this}rotateX(e){return this.rotateOnAxis(Du,e)}rotateY(e){return this.rotateOnAxis(Uu,e)}rotateZ(e){return this.rotateOnAxis(Lu,e)}translateOnAxis(e,n){return Pu.copy(e).applyQuaternion(this.quaternion),this.position.add(Pu.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Du,e)}translateY(e){return this.translateOnAxis(Uu,e)}translateZ(e){return this.translateOnAxis(Lu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tr.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?vs.copy(e):vs.set(e,n,r);const i=this.parent;this.updateWorldMatrix(!0,!1),Ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tr.lookAt(Ca,vs,this.up):Tr.lookAt(vs,Ca,this.up),this.quaternion.setFromRotationMatrix(Tr),i&&(Tr.extractRotation(i.matrixWorld),Yi.setFromRotationMatrix(Tr),this.quaternion.premultiply(Yi.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fu),ji.child=e,this.dispatchEvent(ji),ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(wv),Go.child=e,this.dispatchEvent(Go),Go.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Tr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fu),ji.child=e,this.dispatchEvent(ji),ji.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,i=this.children.length;r<i;r++){const s=this.children[r].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const i=this.children;for(let a=0,s=i.length;a<s;a++)i[a].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,e,Ev),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,Tv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const i=this.children;for(let a=0,s=i.length;a<s;a++)i[a].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];a(e.shapes,h)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));i.material=o}else i.material=a(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(a(e.animations,l))}}if(n){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),h=s(e.shapes),f=s(e.skeletons),p=s(e.animations),_=s(e.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),u.length>0&&(r.images=u),h.length>0&&(r.shapes=h),f.length>0&&(r.skeletons=f),p.length>0&&(r.animations=p),_.length>0&&(r.nodes=_)}return r.object=i,r;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const i=e.children[r];this.add(i.clone())}return this}}fn.DEFAULT_UP=new q(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new q,wr=new q,zo=new q,Ar=new q,Zi=new q,Ki=new q,Iu=new q,Ho=new q,Vo=new q,Wo=new q,Xo=new kt,qo=new kt,$o=new kt;class Yn{constructor(e=new q,n=new q,r=new q){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,i){i.subVectors(r,n),Xn.subVectors(e,n),i.cross(Xn);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(e,n,r,i,a){Xn.subVectors(i,n),wr.subVectors(r,n),zo.subVectors(e,n);const s=Xn.dot(Xn),o=Xn.dot(wr),l=Xn.dot(zo),c=wr.dot(wr),u=wr.dot(zo),h=s*c-o*o;if(h===0)return a.set(0,0,0),null;const f=1/h,p=(c*l-o*u)*f,_=(s*u-o*l)*f;return a.set(1-p-_,_,p)}static containsPoint(e,n,r,i){return this.getBarycoord(e,n,r,i,Ar)===null?!1:Ar.x>=0&&Ar.y>=0&&Ar.x+Ar.y<=1}static getInterpolation(e,n,r,i,a,s,o,l){return this.getBarycoord(e,n,r,i,Ar)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Ar.x),l.addScaledVector(s,Ar.y),l.addScaledVector(o,Ar.z),l)}static getInterpolatedAttribute(e,n,r,i,a,s){return Xo.setScalar(0),qo.setScalar(0),$o.setScalar(0),Xo.fromBufferAttribute(e,n),qo.fromBufferAttribute(e,r),$o.fromBufferAttribute(e,i),s.setScalar(0),s.addScaledVector(Xo,a.x),s.addScaledVector(qo,a.y),s.addScaledVector($o,a.z),s}static isFrontFacing(e,n,r,i){return Xn.subVectors(r,n),wr.subVectors(e,n),Xn.cross(wr).dot(i)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,i){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,n,r,i){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),wr.subVectors(this.a,this.b),Xn.cross(wr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Yn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,i,a){return Yn.getInterpolation(e,this.a,this.b,this.c,n,r,i,a)}containsPoint(e){return Yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,i=this.b,a=this.c;let s,o;Zi.subVectors(i,r),Ki.subVectors(a,r),Ho.subVectors(e,r);const l=Zi.dot(Ho),c=Ki.dot(Ho);if(l<=0&&c<=0)return n.copy(r);Vo.subVectors(e,i);const u=Zi.dot(Vo),h=Ki.dot(Vo);if(u>=0&&h<=u)return n.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return s=l/(l-u),n.copy(r).addScaledVector(Zi,s);Wo.subVectors(e,a);const p=Zi.dot(Wo),_=Ki.dot(Wo);if(_>=0&&p<=_)return n.copy(a);const x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(r).addScaledVector(Ki,o);const m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return Iu.subVectors(a,i),o=(h-u)/(h-u+(p-_)),n.copy(i).addScaledVector(Iu,o);const d=1/(m+x+f);return s=x*d,o=f*d,n.copy(r).addScaledVector(Zi,s).addScaledVector(Ki,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Uh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$r={h:0,s:0,l:0},gs={h:0,s:0,l:0};function Yo(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class _t{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,n),this}setRGB(e,n,r,i=bt.workingColorSpace){return this.r=e,this.g=n,this.b=r,bt.colorSpaceToWorking(this,i),this}setHSL(e,n,r,i=bt.workingColorSpace){if(e=uv(e,1),n=pt(n,0,1),r=pt(r,0,1),n===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+n):r+n-r*n,s=2*r-a;this.r=Yo(s,a,e+1/3),this.g=Yo(s,a,e),this.b=Yo(s,a,e-1/3)}return bt.colorSpaceToWorking(this,i),this}setStyle(e,n=Nn){function r(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=i[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Nn){const r=Uh[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Or(e.r),this.g=Or(e.g),this.b=Or(e.b),this}copyLinearToSRGB(e){return this.r=la(e.r),this.g=la(e.g),this.b=la(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nn){return bt.workingToColorSpace(mn.copy(this),e),Math.round(pt(mn.r*255,0,255))*65536+Math.round(pt(mn.g*255,0,255))*256+Math.round(pt(mn.b*255,0,255))}getHexString(e=Nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=bt.workingColorSpace){bt.workingToColorSpace(mn.copy(this),n);const r=mn.r,i=mn.g,a=mn.b,s=Math.max(r,i,a),o=Math.min(r,i,a);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const h=s-o;switch(c=u<=.5?h/(s+o):h/(2-s-o),s){case r:l=(i-a)/h+(i<a?6:0);break;case i:l=(a-r)/h+2;break;case a:l=(r-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=bt.workingColorSpace){return bt.workingToColorSpace(mn.copy(this),n),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=Nn){bt.workingToColorSpace(mn.copy(this),e);const n=mn.r,r=mn.g,i=mn.b;return e!==Nn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(i*255)})`}offsetHSL(e,n,r){return this.getHSL($r),this.setHSL($r.h+e,$r.s+n,$r.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL($r),e.getHSL(gs);const r=Po($r.h,gs.h,n),i=Po($r.s,gs.s,n),a=Po($r.l,gs.l,n);return this.setHSL(r,i,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,i=this.b,a=e.elements;return this.r=a[0]*n+a[3]*r+a[6]*i,this.g=a[1]*n+a[4]*r+a[7]*i,this.b=a[2]*n+a[5]*r+a[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new _t;_t.NAMES=Uh;let Av=0;class Ka extends Ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Av++}),this.uuid=Za(),this.name="",this.type="Material",this.blending=oa,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bl,this.blendDst=Ml,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=ua,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Su,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hi,this.stencilZFail=Hi,this.stencilZPass=Hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const i=this[n];if(i===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(r):i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==oa&&(r.blending=this.blending),this.side!==ci&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==bl&&(r.blendSrc=this.blendSrc),this.blendDst!==Ml&&(r.blendDst=this.blendDst),this.blendEquation!==Ti&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ua&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Su&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hi&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Hi&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Hi&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function i(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(n){const a=i(e.textures),s=i(e.images);a.length>0&&(r.textures=a),s.length>0&&(r.images=s)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const i=n.length;r=new Array(i);for(let a=0;a!==i;++a)r[a]=n[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Lh extends Ka{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xr,this.combine=vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new q,_s=new ct;let Rv=0;class mr{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rv++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=bu,this.updateRanges=[],this.gpuType=Fr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[e+i]=n.array[r+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)_s.fromBufferAttribute(this,n),_s.applyMatrix3(e),this.setXY(n,_s.x,_s.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Zt.fromBufferAttribute(this,n),Zt.applyMatrix3(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Zt.fromBufferAttribute(this,n),Zt.applyMatrix4(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Zt.fromBufferAttribute(this,n),Zt.applyNormalMatrix(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Zt.fromBufferAttribute(this,n),Zt.transformDirection(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=wa(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=bn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=wa(n,this.array)),n}setX(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=wa(n,this.array)),n}setY(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=wa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=wa(n,this.array)),n}setW(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=bn(n,this.array),r=bn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,i){return e*=this.itemSize,this.normalized&&(n=bn(n,this.array),r=bn(r,this.array),i=bn(i,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=i,this}setXYZW(e,n,r,i,a){return e*=this.itemSize,this.normalized&&(n=bn(n,this.array),r=bn(r,this.array),i=bn(i,this.array),a=bn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=i,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bu&&(e.usage=this.usage),e}}class Fh extends mr{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Ih extends mr{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class oi extends mr{constructor(e,n,r){super(new Float32Array(e),n,r)}}let Cv=0;const On=new qt,jo=new fn,Ji=new q,Dn=new ga,Pa=new ga,an=new q;class di extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cv++}),this.uuid=Za(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rh(e)?Ih:Fh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new ut().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,n,r){return On.makeTranslation(e,n,r),this.applyMatrix4(On),this}scale(e,n,r){return On.makeScale(e,n,r),this.applyMatrix4(On),this}lookAt(e){return jo.lookAt(e),jo.updateMatrix(),this.applyMatrix4(jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let i=0,a=e.length;i<a;i++){const s=e[i];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new oi(r,3))}else{const r=Math.min(e.length,n.count);for(let i=0;i<r;i++){const a=e[i];n.setXYZ(i,a.x,a.y,a.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ga);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,i=n.length;r<i;r++){const a=n[r];Dn.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const r=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),n)for(let a=0,s=n.length;a<s;a++){const o=n[a];Pa.setFromBufferAttribute(o),this.morphTargetsRelative?(an.addVectors(Dn.min,Pa.min),Dn.expandByPoint(an),an.addVectors(Dn.max,Pa.max),Dn.expandByPoint(an)):(Dn.expandByPoint(Pa.min),Dn.expandByPoint(Pa.max))}Dn.getCenter(r);let i=0;for(let a=0,s=e.count;a<s;a++)an.fromBufferAttribute(e,a),i=Math.max(i,r.distanceToSquared(an));if(n)for(let a=0,s=n.length;a<s;a++){const o=n[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)an.fromBufferAttribute(o,c),l&&(Ji.fromBufferAttribute(e,c),an.add(Ji)),i=Math.max(i,r.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,i=n.normal,a=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mr(new Float32Array(4*r.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<r.count;P++)o[P]=new q,l[P]=new q;const c=new q,u=new q,h=new q,f=new ct,p=new ct,_=new ct,x=new q,m=new q;function d(P,S,T){c.fromBufferAttribute(r,P),u.fromBufferAttribute(r,S),h.fromBufferAttribute(r,T),f.fromBufferAttribute(a,P),p.fromBufferAttribute(a,S),_.fromBufferAttribute(a,T),u.sub(c),h.sub(c),p.sub(f),_.sub(f);const I=1/(p.x*_.y-_.x*p.y);isFinite(I)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(I),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(I),o[P].add(x),o[S].add(x),o[T].add(x),l[P].add(m),l[S].add(m),l[T].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let P=0,S=w.length;P<S;++P){const T=w[P],I=T.start,k=T.count;for(let Y=I,X=I+k;Y<X;Y+=3)d(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const b=new q,E=new q,R=new q,U=new q;function C(P){R.fromBufferAttribute(i,P),U.copy(R);const S=o[P];b.copy(S),b.sub(R.multiplyScalar(R.dot(S))).normalize(),E.crossVectors(U,S);const I=E.dot(l[P])<0?-1:1;s.setXYZW(P,b.x,b.y,b.z,I)}for(let P=0,S=w.length;P<S;++P){const T=w[P],I=T.start,k=T.count;for(let Y=I,X=I+k;Y<X;Y+=3)C(e.getX(Y+0)),C(e.getX(Y+1)),C(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new mr(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let f=0,p=r.count;f<p;f++)r.setXYZ(f,0,0,0);const i=new q,a=new q,s=new q,o=new q,l=new q,c=new q,u=new q,h=new q;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(n,_),a.fromBufferAttribute(n,x),s.fromBufferAttribute(n,m),u.subVectors(s,a),h.subVectors(i,a),u.cross(h),o.fromBufferAttribute(r,_),l.fromBufferAttribute(r,x),c.fromBufferAttribute(r,m),o.add(u),l.add(u),c.add(u),r.setXYZ(_,o.x,o.y,o.z),r.setXYZ(x,l.x,l.y,l.z),r.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)i.fromBufferAttribute(n,f+0),a.fromBufferAttribute(n,f+1),s.fromBufferAttribute(n,f+2),u.subVectors(s,a),h.subVectors(i,a),u.cross(h),r.setXYZ(f+0,u.x,u.y,u.z),r.setXYZ(f+1,u.x,u.y,u.z),r.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)an.fromBufferAttribute(e,n),an.normalize(),e.setXYZ(n,an.x,an.y,an.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let p=0,_=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*u;for(let d=0;d<u;d++)f[_++]=c[p++]}return new mr(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new di,r=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,r);n.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,r);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,a=!0)}a&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(n))}const a=e.morphAttributes;for(const c in a){const u=[],h=a[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ou=new qt,xi=new Ph,xs=new Bc,Nu=new q,ys=new q,Ss=new q,bs=new q,Zo=new q,Ms=new q,ku=new q,Es=new q;class hr extends fn{constructor(e=new di,n=new Lh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const i=n[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=i.length;a<s;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,n){const r=this.geometry,i=r.attributes.position,a=r.morphAttributes.position,s=r.morphTargetsRelative;n.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(a&&o){Ms.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=o[l],h=a[l];u!==0&&(Zo.fromBufferAttribute(h,e),s?Ms.addScaledVector(Zo,u):Ms.addScaledVector(Zo.sub(n),u))}n.add(Ms)}return n}raycast(e,n){const r=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),xs.copy(r.boundingSphere),xs.applyMatrix4(a),xi.copy(e.ray).recast(e.near),!(xs.containsPoint(xi.origin)===!1&&(xi.intersectSphere(xs,Nu)===null||xi.origin.distanceToSquared(Nu)>(e.far-e.near)**2))&&(Ou.copy(a).invert(),xi.copy(e.ray).applyMatrix4(Ou),!(r.boundingBox!==null&&xi.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,xi)))}_computeIntersections(e,n,r){let i;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,h=a.attributes.normal,f=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(s))for(let _=0,x=f.length;_<x;_++){const m=f[_],d=s[m.materialIndex],w=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let E=w,R=b;E<R;E+=3){const U=o.getX(E),C=o.getX(E+1),P=o.getX(E+2);i=Ts(this,d,e,r,c,u,h,U,C,P),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,n.push(i))}}else{const _=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){const w=o.getX(m),b=o.getX(m+1),E=o.getX(m+2);i=Ts(this,s,e,r,c,u,h,w,b,E),i&&(i.faceIndex=Math.floor(m/3),n.push(i))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,x=f.length;_<x;_++){const m=f[_],d=s[m.materialIndex],w=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=w,R=b;E<R;E+=3){const U=E,C=E+1,P=E+2;i=Ts(this,d,e,r,c,u,h,U,C,P),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,n.push(i))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){const w=m,b=m+1,E=m+2;i=Ts(this,s,e,r,c,u,h,w,b,E),i&&(i.faceIndex=Math.floor(m/3),n.push(i))}}}}function Pv(t,e,n,r,i,a,s,o){let l;if(e.side===An?l=r.intersectTriangle(s,a,i,!0,o):l=r.intersectTriangle(i,a,s,e.side===ci,o),l===null)return null;Es.copy(o),Es.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Es);return c<n.near||c>n.far?null:{distance:c,point:Es.clone(),object:t}}function Ts(t,e,n,r,i,a,s,o,l,c){t.getVertexPosition(o,ys),t.getVertexPosition(l,Ss),t.getVertexPosition(c,bs);const u=Pv(t,e,n,r,ys,Ss,bs,ku);if(u){const h=new q;Yn.getBarycoord(ku,ys,Ss,bs,h),i&&(u.uv=Yn.getInterpolatedAttribute(i,o,l,c,h,new ct)),a&&(u.uv1=Yn.getInterpolatedAttribute(a,o,l,c,h,new ct)),s&&(u.normal=Yn.getInterpolatedAttribute(s,o,l,c,h,new q),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new q,materialIndex:0};Yn.getNormal(ys,Ss,bs,f.normal),u.face=f,u.barycoord=h}return u}class Ja extends di{constructor(e=1,n=1,r=1,i=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:i,heightSegments:a,depthSegments:s};const o=this;i=Math.floor(i),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],u=[],h=[];let f=0,p=0;_("z","y","x",-1,-1,r,n,e,s,a,0),_("z","y","x",1,-1,r,n,-e,s,a,1),_("x","z","y",1,1,e,r,n,i,s,2),_("x","z","y",1,-1,e,r,-n,i,s,3),_("x","y","z",1,-1,e,n,r,i,a,4),_("x","y","z",-1,-1,e,n,-r,i,a,5),this.setIndex(l),this.setAttribute("position",new oi(c,3)),this.setAttribute("normal",new oi(u,3)),this.setAttribute("uv",new oi(h,2));function _(x,m,d,w,b,E,R,U,C,P,S){const T=E/C,I=R/P,k=E/2,Y=R/2,X=U/2,K=C+1,$=P+1;let ne=0,H=0;const oe=new q;for(let xe=0;xe<$;xe++){const pe=xe*I-Y;for(let Ue=0;Ue<K;Ue++){const tt=Ue*T-k;oe[x]=tt*w,oe[m]=pe*b,oe[d]=X,c.push(oe.x,oe.y,oe.z),oe[x]=0,oe[m]=0,oe[d]=U>0?1:-1,u.push(oe.x,oe.y,oe.z),h.push(Ue/C),h.push(1-xe/P),ne+=1}}for(let xe=0;xe<P;xe++)for(let pe=0;pe<C;pe++){const Ue=f+pe+K*xe,tt=f+pe+K*(xe+1),ot=f+(pe+1)+K*(xe+1),Be=f+(pe+1)+K*xe;l.push(Ue,tt,Be),l.push(tt,ot,Be),H+=6}o.addGroup(p,H,S),p+=H,f+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ja(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function pa(t){const e={};for(const n in t){e[n]={};for(const r in t[n]){const i=t[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=i.clone():Array.isArray(i)?e[n][r]=i.slice():e[n][r]=i}}return e}function _n(t){const e={};for(let n=0;n<t.length;n++){const r=pa(t[n]);for(const i in r)e[i]=r[i]}return e}function Dv(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Oh(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const Uv={clone:pa,merge:_n};var Lv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ui extends Ka{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lv,this.fragmentShader=Fv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pa(e.uniforms),this.uniformsGroups=Dv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?n.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[i]={type:"m4",value:s.toArray()}:n.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const i in this.extensions)this.extensions[i]===!0&&(r[i]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Nh extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=fr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yr=new q,Bu=new ct,Gu=new ct;class kn extends Nh{constructor(e=50,n=1,r=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=cc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cc*2*Math.atan(Math.tan(Hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yr.x,Yr.y).multiplyScalar(-e/Yr.z),Yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Yr.x,Yr.y).multiplyScalar(-e/Yr.z)}getViewSize(e,n){return this.getViewBounds(e,Bu,Gu),n.subVectors(Gu,Bu)}setViewOffset(e,n,r,i,a,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=i,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Hs*.5*this.fov)/this.zoom,r=2*n,i=this.aspect*r,a=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*i/l,n-=s.offsetY*r/c,i*=s.width/l,r*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Qi=-90,ea=1;class Iv extends fn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new kn(Qi,ea,e,n);i.layers=this.layers,this.add(i);const a=new kn(Qi,ea,e,n);a.layers=this.layers,this.add(a);const s=new kn(Qi,ea,e,n);s.layers=this.layers,this.add(s);const o=new kn(Qi,ea,e,n);o.layers=this.layers,this.add(o);const l=new kn(Qi,ea,e,n);l.layers=this.layers,this.add(l);const c=new kn(Qi,ea,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,i,a,s,o,l]=n;for(const c of n)this.remove(c);if(e===fr)r.up.set(0,1,0),r.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===js)r.up.set(0,-1,0),r.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,i),e.render(n,a),e.setRenderTarget(r,1,i),e.render(n,s),e.setRenderTarget(r,2,i),e.render(n,o),e.setRenderTarget(r,3,i),e.render(n,l),e.setRenderTarget(r,4,i),e.render(n,c),r.texture.generateMipmaps=x,e.setRenderTarget(r,5,i),e.render(n,u),e.setRenderTarget(h,f,p),e.xr.enabled=_,r.texture.needsPMREMUpdate=!0}}class kh extends Rn{constructor(e=[],n=fa,r,i,a,s,o,l,c,u){super(e,n,r,i,a,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ov extends Li{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},i=[r,r,r,r,r,r];this.texture=new kh(i),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ja(5,5,5),a=new ui({name:"CubemapFromEquirect",uniforms:pa(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:An,blending:ai});a.uniforms.tEquirect.value=n;const s=new hr(i,a),o=n.minFilter;return n.minFilter===Pi&&(n.minFilter=ur),new Iv(1,10,this).update(e,s),n.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,n=!0,r=!0,i=!0){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,r,i);e.setRenderTarget(a)}}class Fa extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Nv={type:"move"};class Ko{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let i=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,r),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=n.getPose(e.gripSpace,r),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=n.getPose(e.targetRaySpace,r),i===null&&a!==null&&(i=a),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Nv)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Fa;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class kv extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xr,this.environmentIntensity=1,this.environmentRotation=new xr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Jo=new q,Bv=new q,Gv=new ut;class ni{constructor(e=new q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,i){return this.normal.set(e,n,r),this.constant=i,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const i=Jo.subVectors(r,n).cross(Bv.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Jo),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Gv.getNormalMatrix(e),i=this.coplanarPoint(Jo).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yi=new Bc,zv=new ct(.5,.5),ws=new q;class Gc{constructor(e=new ni,n=new ni,r=new ni,i=new ni,a=new ni,s=new ni){this.planes=[e,n,r,i,a,s]}set(e,n,r,i,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(r),o[3].copy(i),o[4].copy(a),o[5].copy(s),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=fr,r=!1){const i=this.planes,a=e.elements,s=a[0],o=a[1],l=a[2],c=a[3],u=a[4],h=a[5],f=a[6],p=a[7],_=a[8],x=a[9],m=a[10],d=a[11],w=a[12],b=a[13],E=a[14],R=a[15];if(i[0].setComponents(c-s,p-u,d-_,R-w).normalize(),i[1].setComponents(c+s,p+u,d+_,R+w).normalize(),i[2].setComponents(c+o,p+h,d+x,R+b).normalize(),i[3].setComponents(c-o,p-h,d-x,R-b).normalize(),r)i[4].setComponents(l,f,m,E).normalize(),i[5].setComponents(c-l,p-f,d-m,R-E).normalize();else if(i[4].setComponents(c-l,p-f,d-m,R-E).normalize(),n===fr)i[5].setComponents(c+l,p+f,d+m,R+E).normalize();else if(n===js)i[5].setComponents(l,f,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),yi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(e){yi.center.set(0,0,0);const n=zv.distanceTo(e.center);return yi.radius=.7071067811865476+n,yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(e){const n=this.planes,r=e.center,i=-e.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(r)<i)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const i=n[r];if(ws.x=i.normal.x>0?e.max.x:e.min.x,ws.y=i.normal.y>0?e.max.y:e.min.y,ws.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ws)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Bh extends Rn{constructor(e,n,r=Di,i,a,s,o=Zn,l=Zn,c,u=Ga,h=1){if(u!==Ga&&u!==za)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:h};super(f,i,a,s,o,l,u,r,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new kc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Gh extends Rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class lo extends di{constructor(e=1,n=1,r=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:i};const a=e/2,s=n/2,o=Math.floor(r),l=Math.floor(i),c=o+1,u=l+1,h=e/o,f=n/l,p=[],_=[],x=[],m=[];for(let d=0;d<u;d++){const w=d*f-s;for(let b=0;b<c;b++){const E=b*h-a;_.push(E,-w,0),x.push(0,0,1),m.push(b/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let w=0;w<o;w++){const b=w+c*d,E=w+c*(d+1),R=w+1+c*(d+1),U=w+1+c*d;p.push(b,E,U),p.push(E,R,U)}this.setIndex(p),this.setAttribute("position",new oi(_,3)),this.setAttribute("normal",new oi(x,3)),this.setAttribute("uv",new oi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Hv extends Ka{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wh,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Vv extends Ka{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ev,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wv extends Ka{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class zh extends fn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class Xv extends zh{constructor(e,n,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _t(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Qo=new qt,zu=new q,Hu=new q;class qv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=_r,this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gc,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;zu.setFromMatrixPosition(e.matrixWorld),n.position.copy(zu),Hu.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Hu),n.updateMatrixWorld(),Qo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qo,n.coordinateSystem,n.reversedDepth),n.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Qo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Hh extends Nh{constructor(e=-1,n=1,r=1,i=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=i,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,i,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=i,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=r-e,s=r+e,o=i+n,l=i-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class $v extends qv{constructor(){super(new Hh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yv extends zh{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.shadow=new $v}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class jv extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Vu{constructor(e=1,n=0,r=0){this.radius=e,this.phi=n,this.theta=r}set(e,n,r){return this.radius=e,this.phi=n,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=pt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,r){return this.radius=Math.sqrt(e*e+n*n+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(pt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Zv extends Ii{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Wu(t,e,n,r){const i=Kv(r);switch(n){case bh:return t*e;case Eh:return t*e/i.components*i.byteLength;case Ic:return t*e/i.components*i.byteLength;case Th:return t*e*2/i.components*i.byteLength;case Oc:return t*e*2/i.components*i.byteLength;case Mh:return t*e*3/i.components*i.byteLength;case jn:return t*e*4/i.components*i.byteLength;case Nc:return t*e*4/i.components*i.byteLength;case ks:case Bs:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Gs:case zs:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ol:case kl:return Math.max(t,16)*Math.max(e,8)/4;case Il:case Nl:return Math.max(t,8)*Math.max(e,8)/2;case Bl:case Gl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case zl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Hl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Vl:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case ql:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case $l:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case jl:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Zl:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Jl:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Ql:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case ec:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case tc:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case nc:case rc:case ic:return Math.ceil(t/4)*Math.ceil(e/4)*16;case ac:case sc:return Math.ceil(t/4)*Math.ceil(e/4)*8;case oc:case lc:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Kv(t){switch(t){case _r:case _h:return{byteLength:1,components:1};case ka:case xh:case ja:return{byteLength:2,components:1};case Lc:case Fc:return{byteLength:2,components:4};case Di:case Uc:case Fr:return{byteLength:4,components:1};case yh:case Sh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Vh(){let t=null,e=!1,n=null,r=null;function i(a,s){n(a,s),r=t.requestAnimationFrame(i)}return{start:function(){e!==!0&&n!==null&&(r=t.requestAnimationFrame(i),e=!0)},stop:function(){t.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){n=a},setContext:function(a){t=a}}}function Jv(t){const e=new WeakMap;function n(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function r(o,l,c){const u=l.array,h=l.updateRanges;if(t.bindBuffer(c,o),h.length===0)t.bufferSubData(c,0,u);else{h.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<h.length;p++){const _=h[f],x=h[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++f,h[f]=x)}h.length=f+1;for(let p=0,_=h.length;p<_;p++){const x=h[p];t.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,o,l),c.version=o.version}}return{get:i,remove:a,update:s}}var Qv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,e0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,t0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,n0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,i0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,a0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,s0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,o0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,l0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,c0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,u0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,f0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,h0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,d0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,x0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,y0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,S0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,b0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,M0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,E0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,T0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,w0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,A0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,R0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,C0="gl_FragColor = linearToOutputTexel( gl_FragColor );",P0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,D0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,U0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,L0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,F0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,I0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,O0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,N0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,k0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,B0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,G0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,z0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,H0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,V0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,W0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,X0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,q0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Y0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,j0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Z0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,K0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,J0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Q0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,eg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ng=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ig=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ag=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,og=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ug=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_g=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Eg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ag=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Rg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ug=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ig=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Og=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ng=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Gg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Hg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$g=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Kg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,a_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,s_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,o_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,l_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,c_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,f_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,h_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,d_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,g_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,__=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,x_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,y_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,M_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,A_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,R_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,P_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,D_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ft={alphahash_fragment:Qv,alphahash_pars_fragment:e0,alphamap_fragment:t0,alphamap_pars_fragment:n0,alphatest_fragment:r0,alphatest_pars_fragment:i0,aomap_fragment:a0,aomap_pars_fragment:s0,batching_pars_vertex:o0,batching_vertex:l0,begin_vertex:c0,beginnormal_vertex:u0,bsdfs:f0,iridescence_fragment:h0,bumpmap_pars_fragment:d0,clipping_planes_fragment:p0,clipping_planes_pars_fragment:m0,clipping_planes_pars_vertex:v0,clipping_planes_vertex:g0,color_fragment:_0,color_pars_fragment:x0,color_pars_vertex:y0,color_vertex:S0,common:b0,cube_uv_reflection_fragment:M0,defaultnormal_vertex:E0,displacementmap_pars_vertex:T0,displacementmap_vertex:w0,emissivemap_fragment:A0,emissivemap_pars_fragment:R0,colorspace_fragment:C0,colorspace_pars_fragment:P0,envmap_fragment:D0,envmap_common_pars_fragment:U0,envmap_pars_fragment:L0,envmap_pars_vertex:F0,envmap_physical_pars_fragment:X0,envmap_vertex:I0,fog_vertex:O0,fog_pars_vertex:N0,fog_fragment:k0,fog_pars_fragment:B0,gradientmap_pars_fragment:G0,lightmap_pars_fragment:z0,lights_lambert_fragment:H0,lights_lambert_pars_fragment:V0,lights_pars_begin:W0,lights_toon_fragment:q0,lights_toon_pars_fragment:$0,lights_phong_fragment:Y0,lights_phong_pars_fragment:j0,lights_physical_fragment:Z0,lights_physical_pars_fragment:K0,lights_fragment_begin:J0,lights_fragment_maps:Q0,lights_fragment_end:eg,logdepthbuf_fragment:tg,logdepthbuf_pars_fragment:ng,logdepthbuf_pars_vertex:rg,logdepthbuf_vertex:ig,map_fragment:ag,map_pars_fragment:sg,map_particle_fragment:og,map_particle_pars_fragment:lg,metalnessmap_fragment:cg,metalnessmap_pars_fragment:ug,morphinstance_vertex:fg,morphcolor_vertex:hg,morphnormal_vertex:dg,morphtarget_pars_vertex:pg,morphtarget_vertex:mg,normal_fragment_begin:vg,normal_fragment_maps:gg,normal_pars_fragment:_g,normal_pars_vertex:xg,normal_vertex:yg,normalmap_pars_fragment:Sg,clearcoat_normal_fragment_begin:bg,clearcoat_normal_fragment_maps:Mg,clearcoat_pars_fragment:Eg,iridescence_pars_fragment:Tg,opaque_fragment:wg,packing:Ag,premultiplied_alpha_fragment:Rg,project_vertex:Cg,dithering_fragment:Pg,dithering_pars_fragment:Dg,roughnessmap_fragment:Ug,roughnessmap_pars_fragment:Lg,shadowmap_pars_fragment:Fg,shadowmap_pars_vertex:Ig,shadowmap_vertex:Og,shadowmask_pars_fragment:Ng,skinbase_vertex:kg,skinning_pars_vertex:Bg,skinning_vertex:Gg,skinnormal_vertex:zg,specularmap_fragment:Hg,specularmap_pars_fragment:Vg,tonemapping_fragment:Wg,tonemapping_pars_fragment:Xg,transmission_fragment:qg,transmission_pars_fragment:$g,uv_pars_fragment:Yg,uv_pars_vertex:jg,uv_vertex:Zg,worldpos_vertex:Kg,background_vert:Jg,background_frag:Qg,backgroundCube_vert:e_,backgroundCube_frag:t_,cube_vert:n_,cube_frag:r_,depth_vert:i_,depth_frag:a_,distanceRGBA_vert:s_,distanceRGBA_frag:o_,equirect_vert:l_,equirect_frag:c_,linedashed_vert:u_,linedashed_frag:f_,meshbasic_vert:h_,meshbasic_frag:d_,meshlambert_vert:p_,meshlambert_frag:m_,meshmatcap_vert:v_,meshmatcap_frag:g_,meshnormal_vert:__,meshnormal_frag:x_,meshphong_vert:y_,meshphong_frag:S_,meshphysical_vert:b_,meshphysical_frag:M_,meshtoon_vert:E_,meshtoon_frag:T_,points_vert:w_,points_frag:A_,shadow_vert:R_,shadow_frag:C_,sprite_vert:P_,sprite_frag:D_},Ae={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},lr={basic:{uniforms:_n([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:_n([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new _t(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:_n([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:_n([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:_n([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new _t(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:_n([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:_n([Ae.points,Ae.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:_n([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:_n([Ae.common,Ae.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:_n([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:_n([Ae.sprite,Ae.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:_n([Ae.common,Ae.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:_n([Ae.lights,Ae.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};lr.physical={uniforms:_n([lr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const As={r:0,b:0,g:0},Si=new xr,U_=new qt;function L_(t,e,n,r,i,a,s){const o=new _t(0);let l=a===!0?0:1,c,u,h=null,f=0,p=null;function _(b){let E=b.isScene===!0?b.background:null;return E&&E.isTexture&&(E=(b.backgroundBlurriness>0?n:e).get(E)),E}function x(b){let E=!1;const R=_(b);R===null?d(o,l):R&&R.isColor&&(d(R,1),E=!0);const U=t.xr.getEnvironmentBlendMode();U==="additive"?r.buffers.color.setClear(0,0,0,1,s):U==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,s),(t.autoClear||E)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(b,E){const R=_(E);R&&(R.isCubeTexture||R.mapping===oo)?(u===void 0&&(u=new hr(new Ja(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:pa(lr.backgroundCube.uniforms),vertexShader:lr.backgroundCube.vertexShader,fragmentShader:lr.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Si.copy(E.backgroundRotation),Si.x*=-1,Si.y*=-1,Si.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(U_.makeRotationFromEuler(Si)),u.material.toneMapped=bt.getTransfer(R.colorSpace)!==Tt,(h!==R||f!==R.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=R,f=R.version,p=t.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new hr(new lo(2,2),new ui({name:"BackgroundMaterial",uniforms:pa(lr.background.uniforms),vertexShader:lr.background.vertexShader,fragmentShader:lr.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=bt.getTransfer(R.colorSpace)!==Tt,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(h!==R||f!==R.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=R,f=R.version,p=t.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function d(b,E){b.getRGB(As,Oh(t)),r.buffers.color.setClear(As.r,As.g,As.b,E,s)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,E=1){o.set(b),l=E,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,d(o,l)},render:x,addToRenderList:m,dispose:w}}function F_(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),r={},i=f(null);let a=i,s=!1;function o(T,I,k,Y,X){let K=!1;const $=h(Y,k,I);a!==$&&(a=$,c(a.object)),K=p(T,Y,k,X),K&&_(T,Y,k,X),X!==null&&e.update(X,t.ELEMENT_ARRAY_BUFFER),(K||s)&&(s=!1,E(T,I,k,Y),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return t.createVertexArray()}function c(T){return t.bindVertexArray(T)}function u(T){return t.deleteVertexArray(T)}function h(T,I,k){const Y=k.wireframe===!0;let X=r[T.id];X===void 0&&(X={},r[T.id]=X);let K=X[I.id];K===void 0&&(K={},X[I.id]=K);let $=K[Y];return $===void 0&&($=f(l()),K[Y]=$),$}function f(T){const I=[],k=[],Y=[];for(let X=0;X<n;X++)I[X]=0,k[X]=0,Y[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:k,attributeDivisors:Y,object:T,attributes:{},index:null}}function p(T,I,k,Y){const X=a.attributes,K=I.attributes;let $=0;const ne=k.getAttributes();for(const H in ne)if(ne[H].location>=0){const xe=X[H];let pe=K[H];if(pe===void 0&&(H==="instanceMatrix"&&T.instanceMatrix&&(pe=T.instanceMatrix),H==="instanceColor"&&T.instanceColor&&(pe=T.instanceColor)),xe===void 0||xe.attribute!==pe||pe&&xe.data!==pe.data)return!0;$++}return a.attributesNum!==$||a.index!==Y}function _(T,I,k,Y){const X={},K=I.attributes;let $=0;const ne=k.getAttributes();for(const H in ne)if(ne[H].location>=0){let xe=K[H];xe===void 0&&(H==="instanceMatrix"&&T.instanceMatrix&&(xe=T.instanceMatrix),H==="instanceColor"&&T.instanceColor&&(xe=T.instanceColor));const pe={};pe.attribute=xe,xe&&xe.data&&(pe.data=xe.data),X[H]=pe,$++}a.attributes=X,a.attributesNum=$,a.index=Y}function x(){const T=a.newAttributes;for(let I=0,k=T.length;I<k;I++)T[I]=0}function m(T){d(T,0)}function d(T,I){const k=a.newAttributes,Y=a.enabledAttributes,X=a.attributeDivisors;k[T]=1,Y[T]===0&&(t.enableVertexAttribArray(T),Y[T]=1),X[T]!==I&&(t.vertexAttribDivisor(T,I),X[T]=I)}function w(){const T=a.newAttributes,I=a.enabledAttributes;for(let k=0,Y=I.length;k<Y;k++)I[k]!==T[k]&&(t.disableVertexAttribArray(k),I[k]=0)}function b(T,I,k,Y,X,K,$){$===!0?t.vertexAttribIPointer(T,I,k,X,K):t.vertexAttribPointer(T,I,k,Y,X,K)}function E(T,I,k,Y){x();const X=Y.attributes,K=k.getAttributes(),$=I.defaultAttributeValues;for(const ne in K){const H=K[ne];if(H.location>=0){let oe=X[ne];if(oe===void 0&&(ne==="instanceMatrix"&&T.instanceMatrix&&(oe=T.instanceMatrix),ne==="instanceColor"&&T.instanceColor&&(oe=T.instanceColor)),oe!==void 0){const xe=oe.normalized,pe=oe.itemSize,Ue=e.get(oe);if(Ue===void 0)continue;const tt=Ue.buffer,ot=Ue.type,Be=Ue.bytesPerElement,ee=ot===t.INT||ot===t.UNSIGNED_INT||oe.gpuType===Uc;if(oe.isInterleavedBufferAttribute){const ce=oe.data,Te=ce.stride,Xe=oe.offset;if(ce.isInstancedInterleavedBuffer){for(let ze=0;ze<H.locationSize;ze++)d(H.location+ze,ce.meshPerAttribute);T.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ze=0;ze<H.locationSize;ze++)m(H.location+ze);t.bindBuffer(t.ARRAY_BUFFER,tt);for(let ze=0;ze<H.locationSize;ze++)b(H.location+ze,pe/H.locationSize,ot,xe,Te*Be,(Xe+pe/H.locationSize*ze)*Be,ee)}else{if(oe.isInstancedBufferAttribute){for(let ce=0;ce<H.locationSize;ce++)d(H.location+ce,oe.meshPerAttribute);T.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ce=0;ce<H.locationSize;ce++)m(H.location+ce);t.bindBuffer(t.ARRAY_BUFFER,tt);for(let ce=0;ce<H.locationSize;ce++)b(H.location+ce,pe/H.locationSize,ot,xe,pe*Be,pe/H.locationSize*ce*Be,ee)}}else if($!==void 0){const xe=$[ne];if(xe!==void 0)switch(xe.length){case 2:t.vertexAttrib2fv(H.location,xe);break;case 3:t.vertexAttrib3fv(H.location,xe);break;case 4:t.vertexAttrib4fv(H.location,xe);break;default:t.vertexAttrib1fv(H.location,xe)}}}}w()}function R(){P();for(const T in r){const I=r[T];for(const k in I){const Y=I[k];for(const X in Y)u(Y[X].object),delete Y[X];delete I[k]}delete r[T]}}function U(T){if(r[T.id]===void 0)return;const I=r[T.id];for(const k in I){const Y=I[k];for(const X in Y)u(Y[X].object),delete Y[X];delete I[k]}delete r[T.id]}function C(T){for(const I in r){const k=r[I];if(k[T.id]===void 0)continue;const Y=k[T.id];for(const X in Y)u(Y[X].object),delete Y[X];delete k[T.id]}}function P(){S(),s=!0,a!==i&&(a=i,c(a.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:U,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:w}}function I_(t,e,n){let r;function i(c){r=c}function a(c,u){t.drawArrays(r,c,u),n.update(u,r,1)}function s(c,u,h){h!==0&&(t.drawArraysInstanced(r,c,u,h),n.update(u,r,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,c,0,u,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_];n.update(p,r,1)}function l(c,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)s(c[_],u[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(r,c,0,u,0,f,0,h);let _=0;for(let x=0;x<h;x++)_+=u[x]*f[x];n.update(_,r,1)}}this.setMode=i,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function O_(t,e,n,r){let i;function a(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){return!(C!==jn&&r.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const P=C===ja&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==_r&&r.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Fr&&!P)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),w=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),b=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=_>0,U=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:E,vertexTextures:R,maxSamples:U}}function N_(t){const e=this;let n=null,r=0,i=!1,a=!1;const s=new ni,o=new ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||r!==0||i;return i=f,r=h.length,p},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,f){n=u(h,f,0)},this.setState=function(h,f,p){const _=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,d=t.get(h);if(!i||_===null||_.length===0||a&&!m)a?u(null):c();else{const w=a?0:r,b=w*4;let E=d.clippingState||null;l.value=E,E=u(_,f,b,p);for(let R=0;R!==b;++R)E[R]=n[R];d.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(h,f,p,_){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const d=p+x*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<d)&&(m=new Float32Array(d));for(let b=0,E=p;b!==x;++b,E+=4)s.copy(h[b]).applyMatrix4(w,o),s.normal.toArray(m,E),m[E+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function k_(t){let e=new WeakMap;function n(s,o){return o===Dl?s.mapping=fa:o===Ul&&(s.mapping=ha),s}function r(s){if(s&&s.isTexture){const o=s.mapping;if(o===Dl||o===Ul)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new Ov(l.height);return c.fromEquirectangularTexture(t,s),e.set(s,c),s.addEventListener("dispose",i),n(c.texture,s.mapping)}else return null}}return s}function i(s){const o=s.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:r,dispose:a}}const ia=4,Xu=[.125,.215,.35,.446,.526,.582],wi=20,el=new Hh,qu=new _t;let tl=null,nl=0,rl=0,il=!1;const Ei=(1+Math.sqrt(5))/2,ta=1/Ei,$u=[new q(-Ei,ta,0),new q(Ei,ta,0),new q(-ta,0,Ei),new q(ta,0,Ei),new q(0,Ei,-ta),new q(0,Ei,ta),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)],B_=new q;class Yu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,i=100,a={}){const{size:s=256,position:o=B_}=a;tl=this._renderer.getRenderTarget(),nl=this._renderer.getActiveCubeFace(),rl=this._renderer.getActiveMipmapLevel(),il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,i,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ku(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tl,nl,rl),this._renderer.xr.enabled=il,e.scissorTest=!1,Rs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===fa||e.mapping===ha?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tl=this._renderer.getRenderTarget(),nl=this._renderer.getActiveCubeFace(),rl=this._renderer.getActiveMipmapLevel(),il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:ur,minFilter:ur,generateMipmaps:!1,type:ja,format:jn,colorSpace:da,depthBuffer:!1},i=ju(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ju(e,n,r);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=G_(a)),this._blurMaterial=z_(a,e,n)}return i}_compileMaterial(e){const n=new hr(this._lodPlanes[0],e);this._renderer.compile(n,el)}_sceneToCubeUV(e,n,r,i,a){const l=new kn(90,1,n,r),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(qu),h.toneMapping=si,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null));const x=new Lh({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1}),m=new hr(new Ja,x);let d=!1;const w=e.background;w?w.isColor&&(x.color.copy(w),e.background=null,d=!0):(x.color.copy(qu),d=!0);for(let b=0;b<6;b++){const E=b%3;E===0?(l.up.set(0,c[b],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+u[b],a.y,a.z)):E===1?(l.up.set(0,0,c[b]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+u[b],a.z)):(l.up.set(0,c[b],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+u[b]));const R=this._cubeSize;Rs(i,E*R,b>2?R:0,R,R),h.setRenderTarget(i),d&&h.render(m,l),h.render(e,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=f,e.background=w}_textureToCubeUV(e,n){const r=this._renderer,i=e.mapping===fa||e.mapping===ha;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ku()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zu());const a=i?this._cubemapMaterial:this._equirectMaterial,s=new hr(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;Rs(n,0,0,3*l,2*l),r.setRenderTarget(n),r.render(s,el)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const i=this._lodPlanes.length;for(let a=1;a<i;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=$u[(i-a-1)%$u.length];this._blur(e,a-1,a,s,o)}n.autoClear=r}_blur(e,n,r,i,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,r,i,"latitudinal",a),this._halfBlur(s,e,r,r,i,"longitudinal",a)}_halfBlur(e,n,r,i,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new hr(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[r]-1,_=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*wi-1),x=a/_,m=isFinite(a)?1+Math.floor(u*x):wi;m>wi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${wi}`);const d=[];let w=0;for(let C=0;C<wi;++C){const P=C/x,S=Math.exp(-P*P/2);d.push(S),C===0?w+=S:C<m&&(w+=2*S)}for(let C=0;C<d.length;C++)d[C]=d[C]/w;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=_,f.mipInt.value=b-r;const E=this._sizeLods[i],R=3*E*(i>b-ia?i-b+ia:0),U=4*(this._cubeSize-E);Rs(n,R,U,3*E,2*E),l.setRenderTarget(n),l.render(h,el)}}function G_(t){const e=[],n=[],r=[];let i=t;const a=t-ia+1+Xu.length;for(let s=0;s<a;s++){const o=Math.pow(2,i);n.push(o);let l=1/o;s>t-ia?l=Xu[s-t+ia-1]:s===0&&(l=0),r.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,x=3,m=2,d=1,w=new Float32Array(x*_*p),b=new Float32Array(m*_*p),E=new Float32Array(d*_*p);for(let U=0;U<p;U++){const C=U%3*2/3-1,P=U>2?0:-1,S=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];w.set(S,x*_*U),b.set(f,m*_*U);const T=[U,U,U,U,U,U];E.set(T,d*_*U)}const R=new di;R.setAttribute("position",new mr(w,x)),R.setAttribute("uv",new mr(b,m)),R.setAttribute("faceIndex",new mr(E,d)),e.push(R),i>ia&&i--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function ju(t,e,n){const r=new Li(t,e,n);return r.texture.mapping=oo,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Rs(t,e,n,r,i){t.viewport.set(e,n,r,i),t.scissor.set(e,n,r,i)}function z_(t,e,n){const r=new Float32Array(wi),i=new q(0,1,0);return new ui({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Zu(){return new ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Ku(){return new ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function zc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function H_(t){let e=new WeakMap,n=null;function r(o){if(o&&o.isTexture){const l=o.mapping,c=l===Dl||l===Ul,u=l===fa||l===ha;if(c||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new Yu(t)),h=c?n.fromEquirectangular(o,h):n.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&i(p)?(n===null&&(n=new Yu(t)),h=c?n.fromEquirectangular(o):n.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",a),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:s}}function V_(t){const e={};function n(r){if(e[r]!==void 0)return e[r];let i;switch(r){case"WEBGL_depth_texture":i=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=t.getExtension(r)}return e[r]=i,i}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const i=n(r);return i===null&&Ha("THREE.WebGLRenderer: "+r+" extension not supported."),i}}}function W_(t,e,n,r){const i={},a=new WeakMap;function s(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",s),delete i[f.id];const p=a.get(f);p&&(e.remove(p),a.delete(f)),r.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",s),i[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)e.update(f[p],t.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,_=h.attributes.position;let x=0;if(p!==null){const w=p.array;x=p.version;for(let b=0,E=w.length;b<E;b+=3){const R=w[b+0],U=w[b+1],C=w[b+2];f.push(R,U,U,C,C,R)}}else if(_!==void 0){const w=_.array;x=_.version;for(let b=0,E=w.length/3-1;b<E;b+=3){const R=b+0,U=b+1,C=b+2;f.push(R,U,U,C,C,R)}}else return;const m=new(Rh(f)?Ih:Fh)(f,1);m.version=x;const d=a.get(h);d&&e.remove(d),a.set(h,m)}function u(h){const f=a.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return a.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function X_(t,e,n){let r;function i(f){r=f}let a,s;function o(f){a=f.type,s=f.bytesPerElement}function l(f,p){t.drawElements(r,p,a,f*s),n.update(p,r,1)}function c(f,p,_){_!==0&&(t.drawElementsInstanced(r,p,a,f*s,_),n.update(p,r,_))}function u(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,p,0,a,f,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];n.update(m,r,1)}function h(f,p,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/s,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(r,p,0,a,f,0,x,0,_);let d=0;for(let w=0;w<_;w++)d+=p[w]*x[w];n.update(d,r,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function q_(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,s,o){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=o*(a/3);break;case t.LINES:n.lines+=o*(a/2);break;case t.LINE_STRIP:n.lines+=o*(a-1);break;case t.LINE_LOOP:n.lines+=o*a;break;case t.POINTS:n.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:i,update:r}}function $_(t,e,n){const r=new WeakMap,i=new kt;function a(s,o,l){const c=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=r.get(o);if(f===void 0||f.count!==h){let S=function(){C.dispose(),r.delete(o),o.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let b=0;p===!0&&(b=1),_===!0&&(b=2),x===!0&&(b=3);let E=o.attributes.position.count*b,R=1;E>e.maxTextureSize&&(R=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const U=new Float32Array(E*R*4*h),C=new Ch(U,E,R,h);C.type=Fr,C.needsUpdate=!0;const P=b*4;for(let T=0;T<h;T++){const I=m[T],k=d[T],Y=w[T],X=E*R*4*T;for(let K=0;K<I.count;K++){const $=K*P;p===!0&&(i.fromBufferAttribute(I,K),U[X+$+0]=i.x,U[X+$+1]=i.y,U[X+$+2]=i.z,U[X+$+3]=0),_===!0&&(i.fromBufferAttribute(k,K),U[X+$+4]=i.x,U[X+$+5]=i.y,U[X+$+6]=i.z,U[X+$+7]=0),x===!0&&(i.fromBufferAttribute(Y,K),U[X+$+8]=i.x,U[X+$+9]=i.y,U[X+$+10]=i.z,U[X+$+11]=Y.itemSize===4?i.w:1)}}f={count:h,texture:C,size:new ct(E,R)},r.set(o,f),o.addEventListener("dispose",S)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];const _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:a}}function Y_(t,e,n,r){let i=new WeakMap;function a(l){const c=r.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function s(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:a,dispose:s}}const Wh=new Rn,Ju=new Bh(1,1),Xh=new Ch,qh=new xv,$h=new kh,Qu=[],ef=[],tf=new Float32Array(16),nf=new Float32Array(9),rf=new Float32Array(4);function _a(t,e,n){const r=t[0];if(r<=0||r>0)return t;const i=e*n;let a=Qu[i];if(a===void 0&&(a=new Float32Array(i),Qu[i]=a),e!==0){r.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=n,t[s].toArray(a,o)}return a}function en(t,e){if(t.length!==e.length)return!1;for(let n=0,r=t.length;n<r;n++)if(t[n]!==e[n])return!1;return!0}function tn(t,e){for(let n=0,r=e.length;n<r;n++)t[n]=e[n]}function co(t,e){let n=ef[e];n===void 0&&(n=new Int32Array(e),ef[e]=n);for(let r=0;r!==e;++r)n[r]=t.allocateTextureUnit();return n}function j_(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Z_(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;t.uniform2fv(this.addr,e),tn(n,e)}}function K_(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(en(n,e))return;t.uniform3fv(this.addr,e),tn(n,e)}}function J_(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;t.uniform4fv(this.addr,e),tn(n,e)}}function Q_(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(en(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),tn(n,e)}else{if(en(n,r))return;rf.set(r),t.uniformMatrix2fv(this.addr,!1,rf),tn(n,r)}}function ex(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(en(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),tn(n,e)}else{if(en(n,r))return;nf.set(r),t.uniformMatrix3fv(this.addr,!1,nf),tn(n,r)}}function tx(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(en(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),tn(n,e)}else{if(en(n,r))return;tf.set(r),t.uniformMatrix4fv(this.addr,!1,tf),tn(n,r)}}function nx(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function rx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;t.uniform2iv(this.addr,e),tn(n,e)}}function ix(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(en(n,e))return;t.uniform3iv(this.addr,e),tn(n,e)}}function ax(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;t.uniform4iv(this.addr,e),tn(n,e)}}function sx(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function ox(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;t.uniform2uiv(this.addr,e),tn(n,e)}}function lx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(en(n,e))return;t.uniform3uiv(this.addr,e),tn(n,e)}}function cx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;t.uniform4uiv(this.addr,e),tn(n,e)}}function ux(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i);let a;this.type===t.SAMPLER_2D_SHADOW?(Ju.compareFunction=Ah,a=Ju):a=Wh,n.setTexture2D(e||a,i)}function fx(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(e||qh,i)}function hx(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(e||$h,i)}function dx(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(e||Xh,i)}function px(t){switch(t){case 5126:return j_;case 35664:return Z_;case 35665:return K_;case 35666:return J_;case 35674:return Q_;case 35675:return ex;case 35676:return tx;case 5124:case 35670:return nx;case 35667:case 35671:return rx;case 35668:case 35672:return ix;case 35669:case 35673:return ax;case 5125:return sx;case 36294:return ox;case 36295:return lx;case 36296:return cx;case 35678:case 36198:case 36298:case 36306:case 35682:return ux;case 35679:case 36299:case 36307:return fx;case 35680:case 36300:case 36308:case 36293:return hx;case 36289:case 36303:case 36311:case 36292:return dx}}function mx(t,e){t.uniform1fv(this.addr,e)}function vx(t,e){const n=_a(e,this.size,2);t.uniform2fv(this.addr,n)}function gx(t,e){const n=_a(e,this.size,3);t.uniform3fv(this.addr,n)}function _x(t,e){const n=_a(e,this.size,4);t.uniform4fv(this.addr,n)}function xx(t,e){const n=_a(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function yx(t,e){const n=_a(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Sx(t,e){const n=_a(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function bx(t,e){t.uniform1iv(this.addr,e)}function Mx(t,e){t.uniform2iv(this.addr,e)}function Ex(t,e){t.uniform3iv(this.addr,e)}function Tx(t,e){t.uniform4iv(this.addr,e)}function wx(t,e){t.uniform1uiv(this.addr,e)}function Ax(t,e){t.uniform2uiv(this.addr,e)}function Rx(t,e){t.uniform3uiv(this.addr,e)}function Cx(t,e){t.uniform4uiv(this.addr,e)}function Px(t,e,n){const r=this.cache,i=e.length,a=co(n,i);en(r,a)||(t.uniform1iv(this.addr,a),tn(r,a));for(let s=0;s!==i;++s)n.setTexture2D(e[s]||Wh,a[s])}function Dx(t,e,n){const r=this.cache,i=e.length,a=co(n,i);en(r,a)||(t.uniform1iv(this.addr,a),tn(r,a));for(let s=0;s!==i;++s)n.setTexture3D(e[s]||qh,a[s])}function Ux(t,e,n){const r=this.cache,i=e.length,a=co(n,i);en(r,a)||(t.uniform1iv(this.addr,a),tn(r,a));for(let s=0;s!==i;++s)n.setTextureCube(e[s]||$h,a[s])}function Lx(t,e,n){const r=this.cache,i=e.length,a=co(n,i);en(r,a)||(t.uniform1iv(this.addr,a),tn(r,a));for(let s=0;s!==i;++s)n.setTexture2DArray(e[s]||Xh,a[s])}function Fx(t){switch(t){case 5126:return mx;case 35664:return vx;case 35665:return gx;case 35666:return _x;case 35674:return xx;case 35675:return yx;case 35676:return Sx;case 5124:case 35670:return bx;case 35667:case 35671:return Mx;case 35668:case 35672:return Ex;case 35669:case 35673:return Tx;case 5125:return wx;case 36294:return Ax;case 36295:return Rx;case 36296:return Cx;case 35678:case 36198:case 36298:case 36306:case 35682:return Px;case 35679:case 36299:case 36307:return Dx;case 35680:case 36300:case 36308:case 36293:return Ux;case 36289:case 36303:case 36311:case 36292:return Lx}}class Ix{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=px(n.type)}}class Ox{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Fx(n.type)}}class Nx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const i=this.seq;for(let a=0,s=i.length;a!==s;++a){const o=i[a];o.setValue(e,n[o.id],r)}}}const al=/(\w+)(\])?(\[|\.)?/g;function af(t,e){t.seq.push(e),t.map[e.id]=e}function kx(t,e,n){const r=t.name,i=r.length;for(al.lastIndex=0;;){const a=al.exec(r),s=al.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===i){af(n,c===void 0?new Ix(o,t,e):new Ox(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new Nx(o),af(n,h)),n=h}}}class Vs{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let i=0;i<r;++i){const a=e.getActiveUniform(n,i),s=e.getUniformLocation(n,a.name);kx(a,s,this)}}setValue(e,n,r,i){const a=this.map[n];a!==void 0&&a.setValue(e,r,i)}setOptional(e,n,r){const i=n[r];i!==void 0&&this.setValue(e,r,i)}static upload(e,n,r,i){for(let a=0,s=n.length;a!==s;++a){const o=n[a],l=r[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,n){const r=[];for(let i=0,a=e.length;i!==a;++i){const s=e[i];s.id in n&&r.push(s)}return r}}function sf(t,e,n){const r=t.createShader(e);return t.shaderSource(r,n),t.compileShader(r),r}const Bx=37297;let Gx=0;function zx(t,e){const n=t.split(`
`),r=[],i=Math.max(e-6,0),a=Math.min(e+6,n.length);for(let s=i;s<a;s++){const o=s+1;r.push(`${o===e?">":" "} ${o}: ${n[s]}`)}return r.join(`
`)}const of=new ut;function Hx(t){bt._getMatrix(of,bt.workingColorSpace,t);const e=`mat3( ${of.elements.map(n=>n.toFixed(4))} )`;switch(bt.getTransfer(t)){case Ys:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function lf(t,e,n){const r=t.getShaderParameter(e,t.COMPILE_STATUS),a=(t.getShaderInfoLog(e)||"").trim();if(r&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+a+`

`+zx(t.getShaderSource(e),o)}else return a}function Vx(t,e){const n=Hx(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function Wx(t,e){let n;switch(e){case qm:n="Linear";break;case $m:n="Reinhard";break;case Ym:n="Cineon";break;case jm:n="ACESFilmic";break;case Km:n="AgX";break;case Jm:n="Neutral";break;case Zm:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Cs=new q;function Xx(){bt.getLuminanceCoefficients(Cs);const t=Cs.x.toFixed(4),e=Cs.y.toFixed(4),n=Cs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qx(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ia).join(`
`)}function $x(t){const e=[];for(const n in t){const r=t[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function Yx(t,e){const n={},r=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){const a=t.getActiveAttrib(e,i),s=a.name;let o=1;a.type===t.FLOAT_MAT2&&(o=2),a.type===t.FLOAT_MAT3&&(o=3),a.type===t.FLOAT_MAT4&&(o=4),n[s]={type:a.type,location:t.getAttribLocation(e,s),locationSize:o}}return n}function Ia(t){return t!==""}function cf(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uf(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jx=/^[ \t]*#include +<([\w\d./]+)>/gm;function uc(t){return t.replace(jx,Kx)}const Zx=new Map;function Kx(t,e){let n=ft[e];if(n===void 0){const r=Zx.get(e);if(r!==void 0)n=ft[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return uc(n)}const Jx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ff(t){return t.replace(Jx,Qx)}function Qx(t,e,n,r){let i="";for(let a=parseInt(e);a<parseInt(n);a++)i+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function hf(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ey(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===mh?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Tm?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Cr&&(e="SHADOWMAP_TYPE_VSM"),e}function ty(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case fa:case ha:e="ENVMAP_TYPE_CUBE";break;case oo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ny(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ha:e="ENVMAP_MODE_REFRACTION";break}return e}function ry(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case vh:e="ENVMAP_BLENDING_MULTIPLY";break;case Wm:e="ENVMAP_BLENDING_MIX";break;case Xm:e="ENVMAP_BLENDING_ADD";break}return e}function iy(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function ay(t,e,n,r){const i=t.getContext(),a=n.defines;let s=n.vertexShader,o=n.fragmentShader;const l=ey(n),c=ty(n),u=ny(n),h=ry(n),f=iy(n),p=qx(n),_=$x(a),x=i.createProgram();let m,d,w=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ia).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ia).join(`
`),d.length>0&&(d+=`
`)):(m=[hf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ia).join(`
`),d=[hf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==si?"#define TONE_MAPPING":"",n.toneMapping!==si?ft.tonemapping_pars_fragment:"",n.toneMapping!==si?Wx("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,Vx("linearToOutputTexel",n.outputColorSpace),Xx(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ia).join(`
`)),s=uc(s),s=cf(s,n),s=uf(s,n),o=uc(o),o=cf(o,n),o=uf(o,n),s=ff(s),o=ff(o),n.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===Mu?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Mu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const b=w+m+s,E=w+d+o,R=sf(i,i.VERTEX_SHADER,b),U=sf(i,i.FRAGMENT_SHADER,E);i.attachShader(x,R),i.attachShader(x,U),n.index0AttributeName!==void 0?i.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function C(I){if(t.debug.checkShaderErrors){const k=i.getProgramInfoLog(x)||"",Y=i.getShaderInfoLog(R)||"",X=i.getShaderInfoLog(U)||"",K=k.trim(),$=Y.trim(),ne=X.trim();let H=!0,oe=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(H=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(i,x,R,U);else{const xe=lf(i,R,"vertex"),pe=lf(i,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+K+`
`+xe+`
`+pe)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):($===""||ne==="")&&(oe=!1);oe&&(I.diagnostics={runnable:H,programLog:K,vertexShader:{log:$,prefix:m},fragmentShader:{log:ne,prefix:d}})}i.deleteShader(R),i.deleteShader(U),P=new Vs(i,x),S=Yx(i,x)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(x,Bx)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Gx++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=U,this}let sy=0;class oy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,i=this._getShaderStage(n),a=this._getShaderStage(r),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new ly(e),n.set(e,r)),r}}class ly{constructor(e){this.id=sy++,this.code=e,this.usedTimes=0}}function cy(t,e,n,r,i,a,s){const o=new Dh,l=new oy,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,T,I,k,Y){const X=k.fog,K=Y.geometry,$=S.isMeshStandardMaterial?k.environment:null,ne=(S.isMeshStandardMaterial?n:e).get(S.envMap||$),H=ne&&ne.mapping===oo?ne.image.height:null,oe=_[S.type];S.precision!==null&&(p=i.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const xe=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,pe=xe!==void 0?xe.length:0;let Ue=0;K.morphAttributes.position!==void 0&&(Ue=1),K.morphAttributes.normal!==void 0&&(Ue=2),K.morphAttributes.color!==void 0&&(Ue=3);let tt,ot,Be,ee;if(oe){const xt=lr[oe];tt=xt.vertexShader,ot=xt.fragmentShader}else tt=S.vertexShader,ot=S.fragmentShader,l.update(S),Be=l.getVertexShaderID(S),ee=l.getFragmentShaderID(S);const ce=t.getRenderTarget(),Te=t.state.buffers.depth.getReversed(),Xe=Y.isInstancedMesh===!0,ze=Y.isBatchedMesh===!0,at=!!S.map,Rt=!!S.matcap,F=!!ne,mt=!!S.aoMap,nt=!!S.lightMap,Ke=!!S.bumpMap,He=!!S.normalMap,Dt=!!S.displacementMap,Ve=!!S.emissiveMap,lt=!!S.metalnessMap,Ot=!!S.roughnessMap,vt=S.anisotropy>0,D=S.clearcoat>0,y=S.dispersion>0,V=S.iridescence>0,ae=S.sheen>0,fe=S.transmission>0,re=vt&&!!S.anisotropyMap,We=D&&!!S.clearcoatMap,Se=D&&!!S.clearcoatNormalMap,Fe=D&&!!S.clearcoatRoughnessMap,Ie=V&&!!S.iridescenceMap,me=V&&!!S.iridescenceThicknessMap,Re=ae&&!!S.sheenColorMap,je=ae&&!!S.sheenRoughnessMap,Oe=!!S.specularMap,we=!!S.specularColorMap,st=!!S.specularIntensityMap,N=fe&&!!S.transmissionMap,ye=fe&&!!S.thicknessMap,de=!!S.gradientMap,Pe=!!S.alphaMap,ie=S.alphaTest>0,le=!!S.alphaHash,Ce=!!S.extensions;let $e=si;S.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&($e=t.toneMapping);const Et={shaderID:oe,shaderType:S.type,shaderName:S.name,vertexShader:tt,fragmentShader:ot,defines:S.defines,customVertexShaderID:Be,customFragmentShaderID:ee,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:ze,batchingColor:ze&&Y._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&Y.instanceColor!==null,instancingMorph:Xe&&Y.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ce===null?t.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:da,alphaToCoverage:!!S.alphaToCoverage,map:at,matcap:Rt,envMap:F,envMapMode:F&&ne.mapping,envMapCubeUVHeight:H,aoMap:mt,lightMap:nt,bumpMap:Ke,normalMap:He,displacementMap:f&&Dt,emissiveMap:Ve,normalMapObjectSpace:He&&S.normalMapType===nv,normalMapTangentSpace:He&&S.normalMapType===wh,metalnessMap:lt,roughnessMap:Ot,anisotropy:vt,anisotropyMap:re,clearcoat:D,clearcoatMap:We,clearcoatNormalMap:Se,clearcoatRoughnessMap:Fe,dispersion:y,iridescence:V,iridescenceMap:Ie,iridescenceThicknessMap:me,sheen:ae,sheenColorMap:Re,sheenRoughnessMap:je,specularMap:Oe,specularColorMap:we,specularIntensityMap:st,transmission:fe,transmissionMap:N,thicknessMap:ye,gradientMap:de,opaque:S.transparent===!1&&S.blending===oa&&S.alphaToCoverage===!1,alphaMap:Pe,alphaTest:ie,alphaHash:le,combine:S.combine,mapUv:at&&x(S.map.channel),aoMapUv:mt&&x(S.aoMap.channel),lightMapUv:nt&&x(S.lightMap.channel),bumpMapUv:Ke&&x(S.bumpMap.channel),normalMapUv:He&&x(S.normalMap.channel),displacementMapUv:Dt&&x(S.displacementMap.channel),emissiveMapUv:Ve&&x(S.emissiveMap.channel),metalnessMapUv:lt&&x(S.metalnessMap.channel),roughnessMapUv:Ot&&x(S.roughnessMap.channel),anisotropyMapUv:re&&x(S.anisotropyMap.channel),clearcoatMapUv:We&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:Se&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:me&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:je&&x(S.sheenRoughnessMap.channel),specularMapUv:Oe&&x(S.specularMap.channel),specularColorMapUv:we&&x(S.specularColorMap.channel),specularIntensityMapUv:st&&x(S.specularIntensityMap.channel),transmissionMapUv:N&&x(S.transmissionMap.channel),thicknessMapUv:ye&&x(S.thicknessMap.channel),alphaMapUv:Pe&&x(S.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(He||vt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!K.attributes.uv&&(at||Pe),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Te,skinning:Y.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Ue,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:$e,decodeVideoTexture:at&&S.map.isVideoTexture===!0&&bt.getTransfer(S.map.colorSpace)===Tt,decodeVideoTextureEmissive:Ve&&S.emissiveMap.isVideoTexture===!0&&bt.getTransfer(S.emissiveMap.colorSpace)===Tt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ur,flipSided:S.side===An,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ce&&S.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&S.extensions.multiDraw===!0||ze)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Et.vertexUv1s=c.has(1),Et.vertexUv2s=c.has(2),Et.vertexUv3s=c.has(3),c.clear(),Et}function d(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)T.push(I),T.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(w(T,S),b(T,S),T.push(t.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function w(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function b(S,T){o.disableAll(),T.supportsVertexTextures&&o.enable(0),T.instancing&&o.enable(1),T.instancingColor&&o.enable(2),T.instancingMorph&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),T.dispersion&&o.enable(20),T.batchingColor&&o.enable(21),T.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),S.push(o.mask)}function E(S){const T=_[S.type];let I;if(T){const k=lr[T];I=Uv.clone(k.uniforms)}else I=S.uniforms;return I}function R(S,T){let I;for(let k=0,Y=u.length;k<Y;k++){const X=u[k];if(X.cacheKey===T){I=X,++I.usedTimes;break}}return I===void 0&&(I=new ay(t,T,S,a),u.push(I)),I}function U(S){if(--S.usedTimes===0){const T=u.indexOf(S);u[T]=u[u.length-1],u.pop(),S.destroy()}}function C(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:E,acquireProgram:R,releaseProgram:U,releaseShaderCache:C,programs:u,dispose:P}}function uy(){let t=new WeakMap;function e(s){return t.has(s)}function n(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function r(s){t.delete(s)}function i(s,o,l){t.get(s)[o]=l}function a(){t=new WeakMap}return{has:e,get:n,remove:r,update:i,dispose:a}}function fy(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function df(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function pf(){const t=[];let e=0;const n=[],r=[],i=[];function a(){e=0,n.length=0,r.length=0,i.length=0}function s(h,f,p,_,x,m){let d=t[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:_,renderOrder:h.renderOrder,z:x,group:m},t[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=_,d.renderOrder=h.renderOrder,d.z=x,d.group=m),e++,d}function o(h,f,p,_,x,m){const d=s(h,f,p,_,x,m);p.transmission>0?r.push(d):p.transparent===!0?i.push(d):n.push(d)}function l(h,f,p,_,x,m){const d=s(h,f,p,_,x,m);p.transmission>0?r.unshift(d):p.transparent===!0?i.unshift(d):n.unshift(d)}function c(h,f){n.length>1&&n.sort(h||fy),r.length>1&&r.sort(f||df),i.length>1&&i.sort(f||df)}function u(){for(let h=e,f=t.length;h<f;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:o,unshift:l,finish:u,sort:c}}function hy(){let t=new WeakMap;function e(r,i){const a=t.get(r);let s;return a===void 0?(s=new pf,t.set(r,[s])):i>=a.length?(s=new pf,a.push(s)):s=a[i],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function dy(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new q,color:new _t};break;case"SpotLight":n={position:new q,direction:new q,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new q,color:new _t,distance:0,decay:0};break;case"HemisphereLight":n={direction:new q,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":n={color:new _t,position:new q,halfWidth:new q,halfHeight:new q};break}return t[e.id]=n,n}}}function py(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let my=0;function vy(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function gy(t){const e=new dy,n=py(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new q);const i=new q,a=new qt,s=new qt;function o(c){let u=0,h=0,f=0;for(let S=0;S<9;S++)r.probe[S].set(0,0,0);let p=0,_=0,x=0,m=0,d=0,w=0,b=0,E=0,R=0,U=0,C=0;c.sort(vy);for(let S=0,T=c.length;S<T;S++){const I=c[S],k=I.color,Y=I.intensity,X=I.distance,K=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=k.r*Y,h+=k.g*Y,f+=k.b*Y;else if(I.isLightProbe){for(let $=0;$<9;$++)r.probe[$].addScaledVector(I.sh.coefficients[$],Y);C++}else if(I.isDirectionalLight){const $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ne=I.shadow,H=n.get(I);H.shadowIntensity=ne.intensity,H.shadowBias=ne.bias,H.shadowNormalBias=ne.normalBias,H.shadowRadius=ne.radius,H.shadowMapSize=ne.mapSize,r.directionalShadow[p]=H,r.directionalShadowMap[p]=K,r.directionalShadowMatrix[p]=I.shadow.matrix,w++}r.directional[p]=$,p++}else if(I.isSpotLight){const $=e.get(I);$.position.setFromMatrixPosition(I.matrixWorld),$.color.copy(k).multiplyScalar(Y),$.distance=X,$.coneCos=Math.cos(I.angle),$.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),$.decay=I.decay,r.spot[x]=$;const ne=I.shadow;if(I.map&&(r.spotLightMap[R]=I.map,R++,ne.updateMatrices(I),I.castShadow&&U++),r.spotLightMatrix[x]=ne.matrix,I.castShadow){const H=n.get(I);H.shadowIntensity=ne.intensity,H.shadowBias=ne.bias,H.shadowNormalBias=ne.normalBias,H.shadowRadius=ne.radius,H.shadowMapSize=ne.mapSize,r.spotShadow[x]=H,r.spotShadowMap[x]=K,E++}x++}else if(I.isRectAreaLight){const $=e.get(I);$.color.copy(k).multiplyScalar(Y),$.halfWidth.set(I.width*.5,0,0),$.halfHeight.set(0,I.height*.5,0),r.rectArea[m]=$,m++}else if(I.isPointLight){const $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),$.distance=I.distance,$.decay=I.decay,I.castShadow){const ne=I.shadow,H=n.get(I);H.shadowIntensity=ne.intensity,H.shadowBias=ne.bias,H.shadowNormalBias=ne.normalBias,H.shadowRadius=ne.radius,H.shadowMapSize=ne.mapSize,H.shadowCameraNear=ne.camera.near,H.shadowCameraFar=ne.camera.far,r.pointShadow[_]=H,r.pointShadowMap[_]=K,r.pointShadowMatrix[_]=I.shadow.matrix,b++}r.point[_]=$,_++}else if(I.isHemisphereLight){const $=e.get(I);$.skyColor.copy(I.color).multiplyScalar(Y),$.groundColor.copy(I.groundColor).multiplyScalar(Y),r.hemi[d]=$,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ae.LTC_FLOAT_1,r.rectAreaLTC2=Ae.LTC_FLOAT_2):(r.rectAreaLTC1=Ae.LTC_HALF_1,r.rectAreaLTC2=Ae.LTC_HALF_2)),r.ambient[0]=u,r.ambient[1]=h,r.ambient[2]=f;const P=r.hash;(P.directionalLength!==p||P.pointLength!==_||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==d||P.numDirectionalShadows!==w||P.numPointShadows!==b||P.numSpotShadows!==E||P.numSpotMaps!==R||P.numLightProbes!==C)&&(r.directional.length=p,r.spot.length=x,r.rectArea.length=m,r.point.length=_,r.hemi.length=d,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=E+R-U,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=C,P.directionalLength=p,P.pointLength=_,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=d,P.numDirectionalShadows=w,P.numPointShadows=b,P.numSpotShadows=E,P.numSpotMaps=R,P.numLightProbes=C,r.version=my++)}function l(c,u){let h=0,f=0,p=0,_=0,x=0;const m=u.matrixWorldInverse;for(let d=0,w=c.length;d<w;d++){const b=c[d];if(b.isDirectionalLight){const E=r.directional[h];E.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(m),h++}else if(b.isSpotLight){const E=r.spot[p];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const E=r.rectArea[_];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),s.identity(),a.copy(b.matrixWorld),a.premultiply(m),s.extractRotation(a),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),_++}else if(b.isPointLight){const E=r.point[f];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const E=r.hemi[x];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:r}}function mf(t){const e=new gy(t),n=[],r=[];function i(u){c.camera=u,n.length=0,r.length=0}function a(u){n.push(u)}function s(u){r.push(u)}function o(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:s}}function _y(t){let e=new WeakMap;function n(i,a=0){const s=e.get(i);let o;return s===void 0?(o=new mf(t),e.set(i,[o])):a>=s.length?(o=new mf(t),s.push(o)):o=s[a],o}function r(){e=new WeakMap}return{get:n,dispose:r}}const xy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Sy(t,e,n){let r=new Gc;const i=new ct,a=new ct,s=new kt,o=new Vv({depthPacking:tv}),l=new Wv,c={},u=n.maxTextureSize,h={[ci]:An,[An]:ci,[Ur]:Ur},f=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:xy,fragmentShader:yy}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new di;_.setAttribute("position",new mr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new hr(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mh;let d=this.type;this.render=function(U,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||U.length===0)return;const S=t.getRenderTarget(),T=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),k=t.state;k.setBlending(ai),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const Y=d!==Cr&&this.type===Cr,X=d===Cr&&this.type!==Cr;for(let K=0,$=U.length;K<$;K++){const ne=U[K],H=ne.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const oe=H.getFrameExtents();if(i.multiply(oe),a.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/oe.x),i.x=a.x*oe.x,H.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/oe.y),i.y=a.y*oe.y,H.mapSize.y=a.y)),H.map===null||Y===!0||X===!0){const pe=this.type!==Cr?{minFilter:Zn,magFilter:Zn}:{};H.map!==null&&H.map.dispose(),H.map=new Li(i.x,i.y,pe),H.map.texture.name=ne.name+".shadowMap",H.camera.updateProjectionMatrix()}t.setRenderTarget(H.map),t.clear();const xe=H.getViewportCount();for(let pe=0;pe<xe;pe++){const Ue=H.getViewport(pe);s.set(a.x*Ue.x,a.y*Ue.y,a.x*Ue.z,a.y*Ue.w),k.viewport(s),H.updateMatrices(ne,pe),r=H.getFrustum(),E(C,P,H.camera,ne,this.type)}H.isPointLightShadow!==!0&&this.type===Cr&&w(H,P),H.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(S,T,I)};function w(U,C){const P=e.update(x);f.defines.VSM_SAMPLES!==U.blurSamples&&(f.defines.VSM_SAMPLES=U.blurSamples,p.defines.VSM_SAMPLES=U.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Li(i.x,i.y)),f.uniforms.shadow_pass.value=U.map.texture,f.uniforms.resolution.value=U.mapSize,f.uniforms.radius.value=U.radius,t.setRenderTarget(U.mapPass),t.clear(),t.renderBufferDirect(C,null,P,f,x,null),p.uniforms.shadow_pass.value=U.mapPass.texture,p.uniforms.resolution.value=U.mapSize,p.uniforms.radius.value=U.radius,t.setRenderTarget(U.map),t.clear(),t.renderBufferDirect(C,null,P,p,x,null)}function b(U,C,P,S){let T=null;const I=P.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(I!==void 0)T=I;else if(T=P.isPointLight===!0?l:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const k=T.uuid,Y=C.uuid;let X=c[k];X===void 0&&(X={},c[k]=X);let K=X[Y];K===void 0&&(K=T.clone(),X[Y]=K,C.addEventListener("dispose",R)),T=K}if(T.visible=C.visible,T.wireframe=C.wireframe,S===Cr?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:h[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,P.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const k=t.properties.get(T);k.light=P}return T}function E(U,C,P,S,T){if(U.visible===!1)return;if(U.layers.test(C.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&T===Cr)&&(!U.frustumCulled||r.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,U.matrixWorld);const Y=e.update(U),X=U.material;if(Array.isArray(X)){const K=Y.groups;for(let $=0,ne=K.length;$<ne;$++){const H=K[$],oe=X[H.materialIndex];if(oe&&oe.visible){const xe=b(U,oe,S,T);U.onBeforeShadow(t,U,C,P,Y,xe,H),t.renderBufferDirect(P,null,Y,xe,U,H),U.onAfterShadow(t,U,C,P,Y,xe,H)}}}else if(X.visible){const K=b(U,X,S,T);U.onBeforeShadow(t,U,C,P,Y,K,null),t.renderBufferDirect(P,null,Y,K,U,null),U.onAfterShadow(t,U,C,P,Y,K,null)}}const k=U.children;for(let Y=0,X=k.length;Y<X;Y++)E(k[Y],C,P,S,T)}function R(U){U.target.removeEventListener("dispose",R);for(const P in c){const S=c[P],T=U.target.uuid;T in S&&(S[T].dispose(),delete S[T])}}}const by={[El]:Tl,[wl]:Cl,[Al]:Pl,[ua]:Rl,[Tl]:El,[Cl]:wl,[Pl]:Al,[Rl]:ua};function My(t,e){function n(){let N=!1;const ye=new kt;let de=null;const Pe=new kt(0,0,0,0);return{setMask:function(ie){de!==ie&&!N&&(t.colorMask(ie,ie,ie,ie),de=ie)},setLocked:function(ie){N=ie},setClear:function(ie,le,Ce,$e,Et){Et===!0&&(ie*=$e,le*=$e,Ce*=$e),ye.set(ie,le,Ce,$e),Pe.equals(ye)===!1&&(t.clearColor(ie,le,Ce,$e),Pe.copy(ye))},reset:function(){N=!1,de=null,Pe.set(-1,0,0,0)}}}function r(){let N=!1,ye=!1,de=null,Pe=null,ie=null;return{setReversed:function(le){if(ye!==le){const Ce=e.get("EXT_clip_control");le?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),ye=le;const $e=ie;ie=null,this.setClear($e)}},getReversed:function(){return ye},setTest:function(le){le?ce(t.DEPTH_TEST):Te(t.DEPTH_TEST)},setMask:function(le){de!==le&&!N&&(t.depthMask(le),de=le)},setFunc:function(le){if(ye&&(le=by[le]),Pe!==le){switch(le){case El:t.depthFunc(t.NEVER);break;case Tl:t.depthFunc(t.ALWAYS);break;case wl:t.depthFunc(t.LESS);break;case ua:t.depthFunc(t.LEQUAL);break;case Al:t.depthFunc(t.EQUAL);break;case Rl:t.depthFunc(t.GEQUAL);break;case Cl:t.depthFunc(t.GREATER);break;case Pl:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Pe=le}},setLocked:function(le){N=le},setClear:function(le){ie!==le&&(ye&&(le=1-le),t.clearDepth(le),ie=le)},reset:function(){N=!1,de=null,Pe=null,ie=null,ye=!1}}}function i(){let N=!1,ye=null,de=null,Pe=null,ie=null,le=null,Ce=null,$e=null,Et=null;return{setTest:function(xt){N||(xt?ce(t.STENCIL_TEST):Te(t.STENCIL_TEST))},setMask:function(xt){ye!==xt&&!N&&(t.stencilMask(xt),ye=xt)},setFunc:function(xt,Cn,yn){(de!==xt||Pe!==Cn||ie!==yn)&&(t.stencilFunc(xt,Cn,yn),de=xt,Pe=Cn,ie=yn)},setOp:function(xt,Cn,yn){(le!==xt||Ce!==Cn||$e!==yn)&&(t.stencilOp(xt,Cn,yn),le=xt,Ce=Cn,$e=yn)},setLocked:function(xt){N=xt},setClear:function(xt){Et!==xt&&(t.clearStencil(xt),Et=xt)},reset:function(){N=!1,ye=null,de=null,Pe=null,ie=null,le=null,Ce=null,$e=null,Et=null}}}const a=new n,s=new r,o=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],_=null,x=!1,m=null,d=null,w=null,b=null,E=null,R=null,U=null,C=new _t(0,0,0),P=0,S=!1,T=null,I=null,k=null,Y=null,X=null;const K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,ne=0;const H=t.getParameter(t.VERSION);H.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(H)[1]),$=ne>=1):H.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),$=ne>=2);let oe=null,xe={};const pe=t.getParameter(t.SCISSOR_BOX),Ue=t.getParameter(t.VIEWPORT),tt=new kt().fromArray(pe),ot=new kt().fromArray(Ue);function Be(N,ye,de,Pe){const ie=new Uint8Array(4),le=t.createTexture();t.bindTexture(N,le),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ce=0;Ce<de;Ce++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(ye,0,t.RGBA,1,1,Pe,0,t.RGBA,t.UNSIGNED_BYTE,ie):t.texImage2D(ye+Ce,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ie);return le}const ee={};ee[t.TEXTURE_2D]=Be(t.TEXTURE_2D,t.TEXTURE_2D,1),ee[t.TEXTURE_CUBE_MAP]=Be(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[t.TEXTURE_2D_ARRAY]=Be(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ee[t.TEXTURE_3D]=Be(t.TEXTURE_3D,t.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ce(t.DEPTH_TEST),s.setFunc(ua),Ke(!1),He(gu),ce(t.CULL_FACE),mt(ai);function ce(N){u[N]!==!0&&(t.enable(N),u[N]=!0)}function Te(N){u[N]!==!1&&(t.disable(N),u[N]=!1)}function Xe(N,ye){return h[N]!==ye?(t.bindFramebuffer(N,ye),h[N]=ye,N===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=ye),N===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=ye),!0):!1}function ze(N,ye){let de=p,Pe=!1;if(N){de=f.get(ye),de===void 0&&(de=[],f.set(ye,de));const ie=N.textures;if(de.length!==ie.length||de[0]!==t.COLOR_ATTACHMENT0){for(let le=0,Ce=ie.length;le<Ce;le++)de[le]=t.COLOR_ATTACHMENT0+le;de.length=ie.length,Pe=!0}}else de[0]!==t.BACK&&(de[0]=t.BACK,Pe=!0);Pe&&t.drawBuffers(de)}function at(N){return _!==N?(t.useProgram(N),_=N,!0):!1}const Rt={[Ti]:t.FUNC_ADD,[Am]:t.FUNC_SUBTRACT,[Rm]:t.FUNC_REVERSE_SUBTRACT};Rt[Cm]=t.MIN,Rt[Pm]=t.MAX;const F={[Dm]:t.ZERO,[Um]:t.ONE,[Lm]:t.SRC_COLOR,[bl]:t.SRC_ALPHA,[Bm]:t.SRC_ALPHA_SATURATE,[Nm]:t.DST_COLOR,[Im]:t.DST_ALPHA,[Fm]:t.ONE_MINUS_SRC_COLOR,[Ml]:t.ONE_MINUS_SRC_ALPHA,[km]:t.ONE_MINUS_DST_COLOR,[Om]:t.ONE_MINUS_DST_ALPHA,[Gm]:t.CONSTANT_COLOR,[zm]:t.ONE_MINUS_CONSTANT_COLOR,[Hm]:t.CONSTANT_ALPHA,[Vm]:t.ONE_MINUS_CONSTANT_ALPHA};function mt(N,ye,de,Pe,ie,le,Ce,$e,Et,xt){if(N===ai){x===!0&&(Te(t.BLEND),x=!1);return}if(x===!1&&(ce(t.BLEND),x=!0),N!==wm){if(N!==m||xt!==S){if((d!==Ti||E!==Ti)&&(t.blendEquation(t.FUNC_ADD),d=Ti,E=Ti),xt)switch(N){case oa:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case _u:t.blendFunc(t.ONE,t.ONE);break;case xu:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case yu:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case oa:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case _u:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case xu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}w=null,b=null,R=null,U=null,C.set(0,0,0),P=0,m=N,S=xt}return}ie=ie||ye,le=le||de,Ce=Ce||Pe,(ye!==d||ie!==E)&&(t.blendEquationSeparate(Rt[ye],Rt[ie]),d=ye,E=ie),(de!==w||Pe!==b||le!==R||Ce!==U)&&(t.blendFuncSeparate(F[de],F[Pe],F[le],F[Ce]),w=de,b=Pe,R=le,U=Ce),($e.equals(C)===!1||Et!==P)&&(t.blendColor($e.r,$e.g,$e.b,Et),C.copy($e),P=Et),m=N,S=!1}function nt(N,ye){N.side===Ur?Te(t.CULL_FACE):ce(t.CULL_FACE);let de=N.side===An;ye&&(de=!de),Ke(de),N.blending===oa&&N.transparent===!1?mt(ai):mt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),a.setMask(N.colorWrite);const Pe=N.stencilWrite;o.setTest(Pe),Pe&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ve(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ce(t.SAMPLE_ALPHA_TO_COVERAGE):Te(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(N){T!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),T=N)}function He(N){N!==Mm?(ce(t.CULL_FACE),N!==I&&(N===gu?t.cullFace(t.BACK):N===Em?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Te(t.CULL_FACE),I=N}function Dt(N){N!==k&&($&&t.lineWidth(N),k=N)}function Ve(N,ye,de){N?(ce(t.POLYGON_OFFSET_FILL),(Y!==ye||X!==de)&&(t.polygonOffset(ye,de),Y=ye,X=de)):Te(t.POLYGON_OFFSET_FILL)}function lt(N){N?ce(t.SCISSOR_TEST):Te(t.SCISSOR_TEST)}function Ot(N){N===void 0&&(N=t.TEXTURE0+K-1),oe!==N&&(t.activeTexture(N),oe=N)}function vt(N,ye,de){de===void 0&&(oe===null?de=t.TEXTURE0+K-1:de=oe);let Pe=xe[de];Pe===void 0&&(Pe={type:void 0,texture:void 0},xe[de]=Pe),(Pe.type!==N||Pe.texture!==ye)&&(oe!==de&&(t.activeTexture(de),oe=de),t.bindTexture(N,ye||ee[N]),Pe.type=N,Pe.texture=ye)}function D(){const N=xe[oe];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function y(){try{t.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function V(){try{t.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ae(){try{t.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{t.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{t.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function We(){try{t.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Se(){try{t.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Fe(){try{t.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ie(){try{t.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function me(){try{t.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(N){tt.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),tt.copy(N))}function je(N){ot.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),ot.copy(N))}function Oe(N,ye){let de=c.get(ye);de===void 0&&(de=new WeakMap,c.set(ye,de));let Pe=de.get(N);Pe===void 0&&(Pe=t.getUniformBlockIndex(ye,N.name),de.set(N,Pe))}function we(N,ye){const Pe=c.get(ye).get(N);l.get(ye)!==Pe&&(t.uniformBlockBinding(ye,Pe,N.__bindingPointIndex),l.set(ye,Pe))}function st(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},oe=null,xe={},h={},f=new WeakMap,p=[],_=null,x=!1,m=null,d=null,w=null,b=null,E=null,R=null,U=null,C=new _t(0,0,0),P=0,S=!1,T=null,I=null,k=null,Y=null,X=null,tt.set(0,0,t.canvas.width,t.canvas.height),ot.set(0,0,t.canvas.width,t.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:ce,disable:Te,bindFramebuffer:Xe,drawBuffers:ze,useProgram:at,setBlending:mt,setMaterial:nt,setFlipSided:Ke,setCullFace:He,setLineWidth:Dt,setPolygonOffset:Ve,setScissorTest:lt,activeTexture:Ot,bindTexture:vt,unbindTexture:D,compressedTexImage2D:y,compressedTexImage3D:V,texImage2D:Ie,texImage3D:me,updateUBOMapping:Oe,uniformBlockBinding:we,texStorage2D:Se,texStorage3D:Fe,texSubImage2D:ae,texSubImage3D:fe,compressedTexSubImage2D:re,compressedTexSubImage3D:We,scissor:Re,viewport:je,reset:st}}function Ey(t,e,n,r,i,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(D,y){return p?new OffscreenCanvas(D,y):Zs("canvas")}function x(D,y,V){let ae=1;const fe=vt(D);if((fe.width>V||fe.height>V)&&(ae=V/Math.max(fe.width,fe.height)),ae<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const re=Math.floor(ae*fe.width),We=Math.floor(ae*fe.height);h===void 0&&(h=_(re,We));const Se=y?_(re,We):h;return Se.width=re,Se.height=We,Se.getContext("2d").drawImage(D,0,0,re,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+re+"x"+We+")."),Se}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),D;return D}function m(D){return D.generateMipmaps}function d(D){t.generateMipmap(D)}function w(D){return D.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?t.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function b(D,y,V,ae,fe=!1){if(D!==null){if(t[D]!==void 0)return t[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let re=y;if(y===t.RED&&(V===t.FLOAT&&(re=t.R32F),V===t.HALF_FLOAT&&(re=t.R16F),V===t.UNSIGNED_BYTE&&(re=t.R8)),y===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(re=t.R8UI),V===t.UNSIGNED_SHORT&&(re=t.R16UI),V===t.UNSIGNED_INT&&(re=t.R32UI),V===t.BYTE&&(re=t.R8I),V===t.SHORT&&(re=t.R16I),V===t.INT&&(re=t.R32I)),y===t.RG&&(V===t.FLOAT&&(re=t.RG32F),V===t.HALF_FLOAT&&(re=t.RG16F),V===t.UNSIGNED_BYTE&&(re=t.RG8)),y===t.RG_INTEGER&&(V===t.UNSIGNED_BYTE&&(re=t.RG8UI),V===t.UNSIGNED_SHORT&&(re=t.RG16UI),V===t.UNSIGNED_INT&&(re=t.RG32UI),V===t.BYTE&&(re=t.RG8I),V===t.SHORT&&(re=t.RG16I),V===t.INT&&(re=t.RG32I)),y===t.RGB_INTEGER&&(V===t.UNSIGNED_BYTE&&(re=t.RGB8UI),V===t.UNSIGNED_SHORT&&(re=t.RGB16UI),V===t.UNSIGNED_INT&&(re=t.RGB32UI),V===t.BYTE&&(re=t.RGB8I),V===t.SHORT&&(re=t.RGB16I),V===t.INT&&(re=t.RGB32I)),y===t.RGBA_INTEGER&&(V===t.UNSIGNED_BYTE&&(re=t.RGBA8UI),V===t.UNSIGNED_SHORT&&(re=t.RGBA16UI),V===t.UNSIGNED_INT&&(re=t.RGBA32UI),V===t.BYTE&&(re=t.RGBA8I),V===t.SHORT&&(re=t.RGBA16I),V===t.INT&&(re=t.RGBA32I)),y===t.RGB&&(V===t.UNSIGNED_INT_5_9_9_9_REV&&(re=t.RGB9_E5),V===t.UNSIGNED_INT_10F_11F_11F_REV&&(re=t.R11F_G11F_B10F)),y===t.RGBA){const We=fe?Ys:bt.getTransfer(ae);V===t.FLOAT&&(re=t.RGBA32F),V===t.HALF_FLOAT&&(re=t.RGBA16F),V===t.UNSIGNED_BYTE&&(re=We===Tt?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT_4_4_4_4&&(re=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(re=t.RGB5_A1)}return(re===t.R16F||re===t.R32F||re===t.RG16F||re===t.RG32F||re===t.RGBA16F||re===t.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function E(D,y){let V;return D?y===null||y===Di||y===Ba?V=t.DEPTH24_STENCIL8:y===Fr?V=t.DEPTH32F_STENCIL8:y===ka&&(V=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Di||y===Ba?V=t.DEPTH_COMPONENT24:y===Fr?V=t.DEPTH_COMPONENT32F:y===ka&&(V=t.DEPTH_COMPONENT16),V}function R(D,y){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==Zn&&D.minFilter!==ur?Math.log2(Math.max(y.width,y.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?y.mipmaps.length:1}function U(D){const y=D.target;y.removeEventListener("dispose",U),P(y),y.isVideoTexture&&u.delete(y)}function C(D){const y=D.target;y.removeEventListener("dispose",C),T(y)}function P(D){const y=r.get(D);if(y.__webglInit===void 0)return;const V=D.source,ae=f.get(V);if(ae){const fe=ae[y.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&S(D),Object.keys(ae).length===0&&f.delete(V)}r.remove(D)}function S(D){const y=r.get(D);t.deleteTexture(y.__webglTexture);const V=D.source,ae=f.get(V);delete ae[y.__cacheKey],s.memory.textures--}function T(D){const y=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(y.__webglFramebuffer[ae]))for(let fe=0;fe<y.__webglFramebuffer[ae].length;fe++)t.deleteFramebuffer(y.__webglFramebuffer[ae][fe]);else t.deleteFramebuffer(y.__webglFramebuffer[ae]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[ae])}else{if(Array.isArray(y.__webglFramebuffer))for(let ae=0;ae<y.__webglFramebuffer.length;ae++)t.deleteFramebuffer(y.__webglFramebuffer[ae]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let ae=0;ae<y.__webglColorRenderbuffer.length;ae++)y.__webglColorRenderbuffer[ae]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[ae]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const V=D.textures;for(let ae=0,fe=V.length;ae<fe;ae++){const re=r.get(V[ae]);re.__webglTexture&&(t.deleteTexture(re.__webglTexture),s.memory.textures--),r.remove(V[ae])}r.remove(D)}let I=0;function k(){I=0}function Y(){const D=I;return D>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),I+=1,D}function X(D){const y=[];return y.push(D.wrapS),y.push(D.wrapT),y.push(D.wrapR||0),y.push(D.magFilter),y.push(D.minFilter),y.push(D.anisotropy),y.push(D.internalFormat),y.push(D.format),y.push(D.type),y.push(D.generateMipmaps),y.push(D.premultiplyAlpha),y.push(D.flipY),y.push(D.unpackAlignment),y.push(D.colorSpace),y.join()}function K(D,y){const V=r.get(D);if(D.isVideoTexture&&lt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&V.__version!==D.version){const ae=D.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(V,D,y);return}}else D.isExternalTexture&&(V.__webglTexture=D.sourceTexture?D.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+y)}function $(D,y){const V=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&V.__version!==D.version){ee(V,D,y);return}n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+y)}function ne(D,y){const V=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&V.__version!==D.version){ee(V,D,y);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+y)}function H(D,y){const V=r.get(D);if(D.version>0&&V.__version!==D.version){ce(V,D,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+y)}const oe={[Ll]:t.REPEAT,[Ci]:t.CLAMP_TO_EDGE,[Fl]:t.MIRRORED_REPEAT},xe={[Zn]:t.NEAREST,[Qm]:t.NEAREST_MIPMAP_NEAREST,[cs]:t.NEAREST_MIPMAP_LINEAR,[ur]:t.LINEAR,[Co]:t.LINEAR_MIPMAP_NEAREST,[Pi]:t.LINEAR_MIPMAP_LINEAR},pe={[rv]:t.NEVER,[cv]:t.ALWAYS,[iv]:t.LESS,[Ah]:t.LEQUAL,[av]:t.EQUAL,[lv]:t.GEQUAL,[sv]:t.GREATER,[ov]:t.NOTEQUAL};function Ue(D,y){if(y.type===Fr&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===ur||y.magFilter===Co||y.magFilter===cs||y.magFilter===Pi||y.minFilter===ur||y.minFilter===Co||y.minFilter===cs||y.minFilter===Pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(D,t.TEXTURE_WRAP_S,oe[y.wrapS]),t.texParameteri(D,t.TEXTURE_WRAP_T,oe[y.wrapT]),(D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY)&&t.texParameteri(D,t.TEXTURE_WRAP_R,oe[y.wrapR]),t.texParameteri(D,t.TEXTURE_MAG_FILTER,xe[y.magFilter]),t.texParameteri(D,t.TEXTURE_MIN_FILTER,xe[y.minFilter]),y.compareFunction&&(t.texParameteri(D,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(D,t.TEXTURE_COMPARE_FUNC,pe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Zn||y.minFilter!==cs&&y.minFilter!==Pi||y.type===Fr&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");t.texParameterf(D,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function tt(D,y){let V=!1;D.__webglInit===void 0&&(D.__webglInit=!0,y.addEventListener("dispose",U));const ae=y.source;let fe=f.get(ae);fe===void 0&&(fe={},f.set(ae,fe));const re=X(y);if(re!==D.__cacheKey){fe[re]===void 0&&(fe[re]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,V=!0),fe[re].usedTimes++;const We=fe[D.__cacheKey];We!==void 0&&(fe[D.__cacheKey].usedTimes--,We.usedTimes===0&&S(y)),D.__cacheKey=re,D.__webglTexture=fe[re].texture}return V}function ot(D,y,V){return Math.floor(Math.floor(D/V)/y)}function Be(D,y,V,ae){const re=D.updateRanges;if(re.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,y.width,y.height,V,ae,y.data);else{re.sort((me,Re)=>me.start-Re.start);let We=0;for(let me=1;me<re.length;me++){const Re=re[We],je=re[me],Oe=Re.start+Re.count,we=ot(je.start,y.width,4),st=ot(Re.start,y.width,4);je.start<=Oe+1&&we===st&&ot(je.start+je.count-1,y.width,4)===we?Re.count=Math.max(Re.count,je.start+je.count-Re.start):(++We,re[We]=je)}re.length=We+1;const Se=t.getParameter(t.UNPACK_ROW_LENGTH),Fe=t.getParameter(t.UNPACK_SKIP_PIXELS),Ie=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,y.width);for(let me=0,Re=re.length;me<Re;me++){const je=re[me],Oe=Math.floor(je.start/4),we=Math.ceil(je.count/4),st=Oe%y.width,N=Math.floor(Oe/y.width),ye=we,de=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,st),t.pixelStorei(t.UNPACK_SKIP_ROWS,N),n.texSubImage2D(t.TEXTURE_2D,0,st,N,ye,de,V,ae,y.data)}D.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,Se),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Fe),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ie)}}function ee(D,y,V){let ae=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ae=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ae=t.TEXTURE_3D);const fe=tt(D,y),re=y.source;n.bindTexture(ae,D.__webglTexture,t.TEXTURE0+V);const We=r.get(re);if(re.version!==We.__version||fe===!0){n.activeTexture(t.TEXTURE0+V);const Se=bt.getPrimaries(bt.workingColorSpace),Fe=y.colorSpace===ri?null:bt.getPrimaries(y.colorSpace),Ie=y.colorSpace===ri||Se===Fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let me=x(y.image,!1,i.maxTextureSize);me=Ot(y,me);const Re=a.convert(y.format,y.colorSpace),je=a.convert(y.type);let Oe=b(y.internalFormat,Re,je,y.colorSpace,y.isVideoTexture);Ue(ae,y);let we;const st=y.mipmaps,N=y.isVideoTexture!==!0,ye=We.__version===void 0||fe===!0,de=re.dataReady,Pe=R(y,me);if(y.isDepthTexture)Oe=E(y.format===za,y.type),ye&&(N?n.texStorage2D(t.TEXTURE_2D,1,Oe,me.width,me.height):n.texImage2D(t.TEXTURE_2D,0,Oe,me.width,me.height,0,Re,je,null));else if(y.isDataTexture)if(st.length>0){N&&ye&&n.texStorage2D(t.TEXTURE_2D,Pe,Oe,st[0].width,st[0].height);for(let ie=0,le=st.length;ie<le;ie++)we=st[ie],N?de&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,we.width,we.height,Re,je,we.data):n.texImage2D(t.TEXTURE_2D,ie,Oe,we.width,we.height,0,Re,je,we.data);y.generateMipmaps=!1}else N?(ye&&n.texStorage2D(t.TEXTURE_2D,Pe,Oe,me.width,me.height),de&&Be(y,me,Re,je)):n.texImage2D(t.TEXTURE_2D,0,Oe,me.width,me.height,0,Re,je,me.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){N&&ye&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Pe,Oe,st[0].width,st[0].height,me.depth);for(let ie=0,le=st.length;ie<le;ie++)if(we=st[ie],y.format!==jn)if(Re!==null)if(N){if(de)if(y.layerUpdates.size>0){const Ce=Wu(we.width,we.height,y.format,y.type);for(const $e of y.layerUpdates){const Et=we.data.subarray($e*Ce/we.data.BYTES_PER_ELEMENT,($e+1)*Ce/we.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,$e,we.width,we.height,1,Re,Et)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,we.width,we.height,me.depth,Re,we.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ie,Oe,we.width,we.height,me.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?de&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,we.width,we.height,me.depth,Re,je,we.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ie,Oe,we.width,we.height,me.depth,0,Re,je,we.data)}else{N&&ye&&n.texStorage2D(t.TEXTURE_2D,Pe,Oe,st[0].width,st[0].height);for(let ie=0,le=st.length;ie<le;ie++)we=st[ie],y.format!==jn?Re!==null?N?de&&n.compressedTexSubImage2D(t.TEXTURE_2D,ie,0,0,we.width,we.height,Re,we.data):n.compressedTexImage2D(t.TEXTURE_2D,ie,Oe,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?de&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,we.width,we.height,Re,je,we.data):n.texImage2D(t.TEXTURE_2D,ie,Oe,we.width,we.height,0,Re,je,we.data)}else if(y.isDataArrayTexture)if(N){if(ye&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Pe,Oe,me.width,me.height,me.depth),de)if(y.layerUpdates.size>0){const ie=Wu(me.width,me.height,y.format,y.type);for(const le of y.layerUpdates){const Ce=me.data.subarray(le*ie/me.data.BYTES_PER_ELEMENT,(le+1)*ie/me.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,le,me.width,me.height,1,Re,je,Ce)}y.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Re,je,me.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Oe,me.width,me.height,me.depth,0,Re,je,me.data);else if(y.isData3DTexture)N?(ye&&n.texStorage3D(t.TEXTURE_3D,Pe,Oe,me.width,me.height,me.depth),de&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Re,je,me.data)):n.texImage3D(t.TEXTURE_3D,0,Oe,me.width,me.height,me.depth,0,Re,je,me.data);else if(y.isFramebufferTexture){if(ye)if(N)n.texStorage2D(t.TEXTURE_2D,Pe,Oe,me.width,me.height);else{let ie=me.width,le=me.height;for(let Ce=0;Ce<Pe;Ce++)n.texImage2D(t.TEXTURE_2D,Ce,Oe,ie,le,0,Re,je,null),ie>>=1,le>>=1}}else if(st.length>0){if(N&&ye){const ie=vt(st[0]);n.texStorage2D(t.TEXTURE_2D,Pe,Oe,ie.width,ie.height)}for(let ie=0,le=st.length;ie<le;ie++)we=st[ie],N?de&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,Re,je,we):n.texImage2D(t.TEXTURE_2D,ie,Oe,Re,je,we);y.generateMipmaps=!1}else if(N){if(ye){const ie=vt(me);n.texStorage2D(t.TEXTURE_2D,Pe,Oe,ie.width,ie.height)}de&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Re,je,me)}else n.texImage2D(t.TEXTURE_2D,0,Oe,Re,je,me);m(y)&&d(ae),We.__version=re.version,y.onUpdate&&y.onUpdate(y)}D.__version=y.version}function ce(D,y,V){if(y.image.length!==6)return;const ae=tt(D,y),fe=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+V);const re=r.get(fe);if(fe.version!==re.__version||ae===!0){n.activeTexture(t.TEXTURE0+V);const We=bt.getPrimaries(bt.workingColorSpace),Se=y.colorSpace===ri?null:bt.getPrimaries(y.colorSpace),Fe=y.colorSpace===ri||We===Se?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const Ie=y.isCompressedTexture||y.image[0].isCompressedTexture,me=y.image[0]&&y.image[0].isDataTexture,Re=[];for(let le=0;le<6;le++)!Ie&&!me?Re[le]=x(y.image[le],!0,i.maxCubemapSize):Re[le]=me?y.image[le].image:y.image[le],Re[le]=Ot(y,Re[le]);const je=Re[0],Oe=a.convert(y.format,y.colorSpace),we=a.convert(y.type),st=b(y.internalFormat,Oe,we,y.colorSpace),N=y.isVideoTexture!==!0,ye=re.__version===void 0||ae===!0,de=fe.dataReady;let Pe=R(y,je);Ue(t.TEXTURE_CUBE_MAP,y);let ie;if(Ie){N&&ye&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Pe,st,je.width,je.height);for(let le=0;le<6;le++){ie=Re[le].mipmaps;for(let Ce=0;Ce<ie.length;Ce++){const $e=ie[Ce];y.format!==jn?Oe!==null?N?de&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ce,0,0,$e.width,$e.height,Oe,$e.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ce,st,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ce,0,0,$e.width,$e.height,Oe,we,$e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ce,st,$e.width,$e.height,0,Oe,we,$e.data)}}}else{if(ie=y.mipmaps,N&&ye){ie.length>0&&Pe++;const le=vt(Re[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Pe,st,le.width,le.height)}for(let le=0;le<6;le++)if(me){N?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Re[le].width,Re[le].height,Oe,we,Re[le].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,st,Re[le].width,Re[le].height,0,Oe,we,Re[le].data);for(let Ce=0;Ce<ie.length;Ce++){const Et=ie[Ce].image[le].image;N?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ce+1,0,0,Et.width,Et.height,Oe,we,Et.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ce+1,st,Et.width,Et.height,0,Oe,we,Et.data)}}else{N?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Oe,we,Re[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,st,Oe,we,Re[le]);for(let Ce=0;Ce<ie.length;Ce++){const $e=ie[Ce];N?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ce+1,0,0,Oe,we,$e.image[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ce+1,st,Oe,we,$e.image[le])}}}m(y)&&d(t.TEXTURE_CUBE_MAP),re.__version=fe.version,y.onUpdate&&y.onUpdate(y)}D.__version=y.version}function Te(D,y,V,ae,fe,re){const We=a.convert(V.format,V.colorSpace),Se=a.convert(V.type),Fe=b(V.internalFormat,We,Se,V.colorSpace),Ie=r.get(y),me=r.get(V);if(me.__renderTarget=y,!Ie.__hasExternalTextures){const Re=Math.max(1,y.width>>re),je=Math.max(1,y.height>>re);fe===t.TEXTURE_3D||fe===t.TEXTURE_2D_ARRAY?n.texImage3D(fe,re,Fe,Re,je,y.depth,0,We,Se,null):n.texImage2D(fe,re,Fe,Re,je,0,We,Se,null)}n.bindFramebuffer(t.FRAMEBUFFER,D),Ve(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ae,fe,me.__webglTexture,0,Dt(y)):(fe===t.TEXTURE_2D||fe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ae,fe,me.__webglTexture,re),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Xe(D,y,V){if(t.bindRenderbuffer(t.RENDERBUFFER,D),y.depthBuffer){const ae=y.depthTexture,fe=ae&&ae.isDepthTexture?ae.type:null,re=E(y.stencilBuffer,fe),We=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=Dt(y);Ve(y)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Se,re,y.width,y.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,Se,re,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,re,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,We,t.RENDERBUFFER,D)}else{const ae=y.textures;for(let fe=0;fe<ae.length;fe++){const re=ae[fe],We=a.convert(re.format,re.colorSpace),Se=a.convert(re.type),Fe=b(re.internalFormat,We,Se,re.colorSpace),Ie=Dt(y);V&&Ve(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ie,Fe,y.width,y.height):Ve(y)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ie,Fe,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,Fe,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ze(D,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,D),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ae=r.get(y.depthTexture);ae.__renderTarget=y,(!ae.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),K(y.depthTexture,0);const fe=ae.__webglTexture,re=Dt(y);if(y.depthTexture.format===Ga)Ve(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,fe,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,fe,0);else if(y.depthTexture.format===za)Ve(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,fe,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function at(D){const y=r.get(D),V=D.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==D.depthTexture){const ae=D.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),ae){const fe=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,ae.removeEventListener("dispose",fe)};ae.addEventListener("dispose",fe),y.__depthDisposeCallback=fe}y.__boundDepthTexture=ae}if(D.depthTexture&&!y.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const ae=D.texture.mipmaps;ae&&ae.length>0?ze(y.__webglFramebuffer[0],D):ze(y.__webglFramebuffer,D)}else if(V){y.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[ae]),y.__webglDepthbuffer[ae]===void 0)y.__webglDepthbuffer[ae]=t.createRenderbuffer(),Xe(y.__webglDepthbuffer[ae],D,!1);else{const fe=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=y.__webglDepthbuffer[ae];t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,fe,t.RENDERBUFFER,re)}}else{const ae=D.texture.mipmaps;if(ae&&ae.length>0?n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=t.createRenderbuffer(),Xe(y.__webglDepthbuffer,D,!1);else{const fe=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=y.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,fe,t.RENDERBUFFER,re)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Rt(D,y,V){const ae=r.get(D);y!==void 0&&Te(ae.__webglFramebuffer,D,D.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&at(D)}function F(D){const y=D.texture,V=r.get(D),ae=r.get(y);D.addEventListener("dispose",C);const fe=D.textures,re=D.isWebGLCubeRenderTarget===!0,We=fe.length>1;if(We||(ae.__webglTexture===void 0&&(ae.__webglTexture=t.createTexture()),ae.__version=y.version,s.memory.textures++),re){V.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer[Se]=[];for(let Fe=0;Fe<y.mipmaps.length;Fe++)V.__webglFramebuffer[Se][Fe]=t.createFramebuffer()}else V.__webglFramebuffer[Se]=t.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer=[];for(let Se=0;Se<y.mipmaps.length;Se++)V.__webglFramebuffer[Se]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(We)for(let Se=0,Fe=fe.length;Se<Fe;Se++){const Ie=r.get(fe[Se]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=t.createTexture(),s.memory.textures++)}if(D.samples>0&&Ve(D)===!1){V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Se=0;Se<fe.length;Se++){const Fe=fe[Se];V.__webglColorRenderbuffer[Se]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[Se]);const Ie=a.convert(Fe.format,Fe.colorSpace),me=a.convert(Fe.type),Re=b(Fe.internalFormat,Ie,me,Fe.colorSpace,D.isXRRenderTarget===!0),je=Dt(D);t.renderbufferStorageMultisample(t.RENDERBUFFER,je,Re,D.width,D.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,V.__webglColorRenderbuffer[Se])}t.bindRenderbuffer(t.RENDERBUFFER,null),D.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),Xe(V.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(re){n.bindTexture(t.TEXTURE_CUBE_MAP,ae.__webglTexture),Ue(t.TEXTURE_CUBE_MAP,y);for(let Se=0;Se<6;Se++)if(y.mipmaps&&y.mipmaps.length>0)for(let Fe=0;Fe<y.mipmaps.length;Fe++)Te(V.__webglFramebuffer[Se][Fe],D,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Fe);else Te(V.__webglFramebuffer[Se],D,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);m(y)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(We){for(let Se=0,Fe=fe.length;Se<Fe;Se++){const Ie=fe[Se],me=r.get(Ie);let Re=t.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Re=D.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Re,me.__webglTexture),Ue(Re,Ie),Te(V.__webglFramebuffer,D,Ie,t.COLOR_ATTACHMENT0+Se,Re,0),m(Ie)&&d(Re)}n.unbindTexture()}else{let Se=t.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Se=D.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Se,ae.__webglTexture),Ue(Se,y),y.mipmaps&&y.mipmaps.length>0)for(let Fe=0;Fe<y.mipmaps.length;Fe++)Te(V.__webglFramebuffer[Fe],D,y,t.COLOR_ATTACHMENT0,Se,Fe);else Te(V.__webglFramebuffer,D,y,t.COLOR_ATTACHMENT0,Se,0);m(y)&&d(Se),n.unbindTexture()}D.depthBuffer&&at(D)}function mt(D){const y=D.textures;for(let V=0,ae=y.length;V<ae;V++){const fe=y[V];if(m(fe)){const re=w(D),We=r.get(fe).__webglTexture;n.bindTexture(re,We),d(re),n.unbindTexture()}}}const nt=[],Ke=[];function He(D){if(D.samples>0){if(Ve(D)===!1){const y=D.textures,V=D.width,ae=D.height;let fe=t.COLOR_BUFFER_BIT;const re=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,We=r.get(D),Se=y.length>1;if(Se)for(let Ie=0;Ie<y.length;Ie++)n.bindFramebuffer(t.FRAMEBUFFER,We.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ie,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,We.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ie,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer);const Fe=D.texture.mipmaps;Fe&&Fe.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,We.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Ie=0;Ie<y.length;Ie++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(fe|=t.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(fe|=t.STENCIL_BUFFER_BIT)),Se){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,We.__webglColorRenderbuffer[Ie]);const me=r.get(y[Ie]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,me,0)}t.blitFramebuffer(0,0,V,ae,0,0,V,ae,fe,t.NEAREST),l===!0&&(nt.length=0,Ke.length=0,nt.push(t.COLOR_ATTACHMENT0+Ie),D.depthBuffer&&D.resolveDepthBuffer===!1&&(nt.push(re),Ke.push(re),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ke)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,nt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Se)for(let Ie=0;Ie<y.length;Ie++){n.bindFramebuffer(t.FRAMEBUFFER,We.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ie,t.RENDERBUFFER,We.__webglColorRenderbuffer[Ie]);const me=r.get(y[Ie]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,We.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ie,t.TEXTURE_2D,me,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const y=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function Dt(D){return Math.min(i.maxSamples,D.samples)}function Ve(D){const y=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function lt(D){const y=s.render.frame;u.get(D)!==y&&(u.set(D,y),D.update())}function Ot(D,y){const V=D.colorSpace,ae=D.format,fe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||V!==da&&V!==ri&&(bt.getTransfer(V)===Tt?(ae!==jn||fe!==_r)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),y}function vt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=k,this.setTexture2D=K,this.setTexture2DArray=$,this.setTexture3D=ne,this.setTextureCube=H,this.rebindTextures=Rt,this.setupRenderTarget=F,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=Ve}function Ty(t,e){function n(r,i=ri){let a;const s=bt.getTransfer(i);if(r===_r)return t.UNSIGNED_BYTE;if(r===Lc)return t.UNSIGNED_SHORT_4_4_4_4;if(r===Fc)return t.UNSIGNED_SHORT_5_5_5_1;if(r===yh)return t.UNSIGNED_INT_5_9_9_9_REV;if(r===Sh)return t.UNSIGNED_INT_10F_11F_11F_REV;if(r===_h)return t.BYTE;if(r===xh)return t.SHORT;if(r===ka)return t.UNSIGNED_SHORT;if(r===Uc)return t.INT;if(r===Di)return t.UNSIGNED_INT;if(r===Fr)return t.FLOAT;if(r===ja)return t.HALF_FLOAT;if(r===bh)return t.ALPHA;if(r===Mh)return t.RGB;if(r===jn)return t.RGBA;if(r===Ga)return t.DEPTH_COMPONENT;if(r===za)return t.DEPTH_STENCIL;if(r===Eh)return t.RED;if(r===Ic)return t.RED_INTEGER;if(r===Th)return t.RG;if(r===Oc)return t.RG_INTEGER;if(r===Nc)return t.RGBA_INTEGER;if(r===ks||r===Bs||r===Gs||r===zs)if(s===Tt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===ks)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Bs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Gs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===zs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===ks)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Bs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Gs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===zs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Il||r===Ol||r===Nl||r===kl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Il)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ol)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Nl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===kl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Bl||r===Gl||r===zl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Bl||r===Gl)return s===Tt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===zl)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Hl||r===Vl||r===Wl||r===Xl||r===ql||r===$l||r===Yl||r===jl||r===Zl||r===Kl||r===Jl||r===Ql||r===ec||r===tc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Hl)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Vl)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Wl)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Xl)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ql)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===$l)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Yl)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===jl)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Zl)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Kl)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Jl)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ql)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ec)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===tc)return s===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===nc||r===rc||r===ic)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===nc)return s===Tt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===rc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ic)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ac||r===sc||r===oc||r===lc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===ac)return a.COMPRESSED_RED_RGTC1_EXT;if(r===sc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===oc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===lc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ba?t.UNSIGNED_INT_24_8:t[r]!==void 0?t[r]:null}return{convert:n}}const wy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ay=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ry{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new Gh(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new ui({vertexShader:wy,fragmentShader:Ay,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new hr(new lo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Cy extends Ii{constructor(e,n){super();const r=this;let i=null,a=1,s=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,_=null;const x=typeof XRWebGLBinding<"u",m=new Ry,d={},w=n.getContextAttributes();let b=null,E=null;const R=[],U=[],C=new ct;let P=null;const S=new kn;S.viewport=new kt;const T=new kn;T.viewport=new kt;const I=[S,T],k=new jv;let Y=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ce=R[ee];return ce===void 0&&(ce=new Ko,R[ee]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(ee){let ce=R[ee];return ce===void 0&&(ce=new Ko,R[ee]=ce),ce.getGripSpace()},this.getHand=function(ee){let ce=R[ee];return ce===void 0&&(ce=new Ko,R[ee]=ce),ce.getHandSpace()};function K(ee){const ce=U.indexOf(ee.inputSource);if(ce===-1)return;const Te=R[ce];Te!==void 0&&(Te.update(ee.inputSource,ee.frame,c||s),Te.dispatchEvent({type:ee.type,data:ee.inputSource}))}function $(){i.removeEventListener("select",K),i.removeEventListener("selectstart",K),i.removeEventListener("selectend",K),i.removeEventListener("squeeze",K),i.removeEventListener("squeezestart",K),i.removeEventListener("squeezeend",K),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",ne);for(let ee=0;ee<R.length;ee++){const ce=U[ee];ce!==null&&(U[ee]=null,R[ee].disconnect(ce))}Y=null,X=null,m.reset();for(const ee in d)delete d[ee];e.setRenderTarget(b),p=null,f=null,h=null,i=null,E=null,Be.stop(),r.isPresenting=!1,e.setPixelRatio(P),e.setSize(C.width,C.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){a=ee,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(i,n)),h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(ee){if(i=ee,i!==null){if(b=e.getRenderTarget(),i.addEventListener("select",K),i.addEventListener("selectstart",K),i.addEventListener("selectend",K),i.addEventListener("squeeze",K),i.addEventListener("squeezestart",K),i.addEventListener("squeezeend",K),i.addEventListener("end",$),i.addEventListener("inputsourceschange",ne),w.xrCompatible!==!0&&await n.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,Xe=null,ze=null;w.depth&&(ze=w.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Te=w.stencil?za:Ga,Xe=w.stencil?Ba:Di);const at={colorFormat:n.RGBA8,depthFormat:ze,scaleFactor:a};h=this.getBinding(),f=h.createProjectionLayer(at),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new Li(f.textureWidth,f.textureHeight,{format:jn,type:_r,depthTexture:new Bh(f.textureWidth,f.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Te={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(i,n,Te),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Li(p.framebufferWidth,p.framebufferHeight,{format:jn,type:_r,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await i.requestReferenceSpace(o),Be.setContext(i),Be.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(ee){for(let ce=0;ce<ee.removed.length;ce++){const Te=ee.removed[ce],Xe=U.indexOf(Te);Xe>=0&&(U[Xe]=null,R[Xe].disconnect(Te))}for(let ce=0;ce<ee.added.length;ce++){const Te=ee.added[ce];let Xe=U.indexOf(Te);if(Xe===-1){for(let at=0;at<R.length;at++)if(at>=U.length){U.push(Te),Xe=at;break}else if(U[at]===null){U[at]=Te,Xe=at;break}if(Xe===-1)break}const ze=R[Xe];ze&&ze.connect(Te)}}const H=new q,oe=new q;function xe(ee,ce,Te){H.setFromMatrixPosition(ce.matrixWorld),oe.setFromMatrixPosition(Te.matrixWorld);const Xe=H.distanceTo(oe),ze=ce.projectionMatrix.elements,at=Te.projectionMatrix.elements,Rt=ze[14]/(ze[10]-1),F=ze[14]/(ze[10]+1),mt=(ze[9]+1)/ze[5],nt=(ze[9]-1)/ze[5],Ke=(ze[8]-1)/ze[0],He=(at[8]+1)/at[0],Dt=Rt*Ke,Ve=Rt*He,lt=Xe/(-Ke+He),Ot=lt*-Ke;if(ce.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Ot),ee.translateZ(lt),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),ze[10]===-1)ee.projectionMatrix.copy(ce.projectionMatrix),ee.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const vt=Rt+lt,D=F+lt,y=Dt-Ot,V=Ve+(Xe-Ot),ae=mt*F/D*vt,fe=nt*F/D*vt;ee.projectionMatrix.makePerspective(y,V,ae,fe,vt,D),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function pe(ee,ce){ce===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ce.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(i===null)return;let ce=ee.near,Te=ee.far;m.texture!==null&&(m.depthNear>0&&(ce=m.depthNear),m.depthFar>0&&(Te=m.depthFar)),k.near=T.near=S.near=ce,k.far=T.far=S.far=Te,(Y!==k.near||X!==k.far)&&(i.updateRenderState({depthNear:k.near,depthFar:k.far}),Y=k.near,X=k.far),k.layers.mask=ee.layers.mask|6,S.layers.mask=k.layers.mask&3,T.layers.mask=k.layers.mask&5;const Xe=ee.parent,ze=k.cameras;pe(k,Xe);for(let at=0;at<ze.length;at++)pe(ze[at],Xe);ze.length===2?xe(k,S,T):k.projectionMatrix.copy(S.projectionMatrix),Ue(ee,k,Xe)};function Ue(ee,ce,Te){Te===null?ee.matrix.copy(ce.matrixWorld):(ee.matrix.copy(Te.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ce.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ce.projectionMatrix),ee.projectionMatrixInverse.copy(ce.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=cc*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(ee){l=ee,f!==null&&(f.fixedFoveation=ee),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ee)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(ee){return d[ee]};let tt=null;function ot(ee,ce){if(u=ce.getViewerPose(c||s),_=ce,u!==null){const Te=u.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let Xe=!1;Te.length!==k.cameras.length&&(k.cameras.length=0,Xe=!0);for(let F=0;F<Te.length;F++){const mt=Te[F];let nt=null;if(p!==null)nt=p.getViewport(mt);else{const He=h.getViewSubImage(f,mt);nt=He.viewport,F===0&&(e.setRenderTargetTextures(E,He.colorTexture,He.depthStencilTexture),e.setRenderTarget(E))}let Ke=I[F];Ke===void 0&&(Ke=new kn,Ke.layers.enable(F),Ke.viewport=new kt,I[F]=Ke),Ke.matrix.fromArray(mt.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(mt.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(nt.x,nt.y,nt.width,nt.height),F===0&&(k.matrix.copy(Ke.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Xe===!0&&k.cameras.push(Ke)}const ze=i.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){h=r.getBinding();const F=h.getDepthInformation(Te[0]);F&&F.isValid&&F.texture&&m.init(F,i.renderState)}if(ze&&ze.includes("camera-access")&&x){e.state.unbindTexture(),h=r.getBinding();for(let F=0;F<Te.length;F++){const mt=Te[F].camera;if(mt){let nt=d[mt];nt||(nt=new Gh,d[mt]=nt);const Ke=h.getCameraImage(mt);nt.sourceTexture=Ke}}}}for(let Te=0;Te<R.length;Te++){const Xe=U[Te],ze=R[Te];Xe!==null&&ze!==void 0&&ze.update(Xe,ce,c||s)}tt&&tt(ee,ce),ce.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ce}),_=null}const Be=new Vh;Be.setAnimationLoop(ot),this.setAnimationLoop=function(ee){tt=ee},this.dispose=function(){}}}const bi=new xr,Py=new qt;function Dy(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function r(m,d){d.color.getRGB(m.fogColor.value,Oh(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,w,b,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?a(m,d):d.isMeshToonMaterial?(a(m,d),h(m,d)):d.isMeshPhongMaterial?(a(m,d),u(m,d)):d.isMeshStandardMaterial?(a(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,E)):d.isMeshMatcapMaterial?(a(m,d),_(m,d)):d.isMeshDepthMaterial?a(m,d):d.isMeshDistanceMaterial?(a(m,d),x(m,d)):d.isMeshNormalMaterial?a(m,d):d.isLineBasicMaterial?(s(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,w,b):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===An&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===An&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const w=e.get(d),b=w.envMap,E=w.envMapRotation;b&&(m.envMap.value=b,bi.copy(E),bi.x*=-1,bi.y*=-1,bi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),m.envMapRotation.value.setFromMatrix4(Py.makeRotationFromEuler(bi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function s(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,w,b){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*w,m.scale.value=b*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,w){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===An&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const w=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Uy(t,e,n,r){let i={},a={},s=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,b){const E=b.program;r.uniformBlockBinding(w,E)}function c(w,b){let E=i[w.id];E===void 0&&(_(w),E=u(w),i[w.id]=E,w.addEventListener("dispose",m));const R=b.program;r.updateUBOMapping(w,R);const U=e.render.frame;a[w.id]!==U&&(f(w),a[w.id]=U)}function u(w){const b=h();w.__bindingPointIndex=b;const E=t.createBuffer(),R=w.__size,U=w.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,R,U),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,b,E),E}function h(){for(let w=0;w<o;w++)if(s.indexOf(w)===-1)return s.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const b=i[w.id],E=w.uniforms,R=w.__cache;t.bindBuffer(t.UNIFORM_BUFFER,b);for(let U=0,C=E.length;U<C;U++){const P=Array.isArray(E[U])?E[U]:[E[U]];for(let S=0,T=P.length;S<T;S++){const I=P[S];if(p(I,U,S,R)===!0){const k=I.__offset,Y=Array.isArray(I.value)?I.value:[I.value];let X=0;for(let K=0;K<Y.length;K++){const $=Y[K],ne=x($);typeof $=="number"||typeof $=="boolean"?(I.__data[0]=$,t.bufferSubData(t.UNIFORM_BUFFER,k+X,I.__data)):$.isMatrix3?(I.__data[0]=$.elements[0],I.__data[1]=$.elements[1],I.__data[2]=$.elements[2],I.__data[3]=0,I.__data[4]=$.elements[3],I.__data[5]=$.elements[4],I.__data[6]=$.elements[5],I.__data[7]=0,I.__data[8]=$.elements[6],I.__data[9]=$.elements[7],I.__data[10]=$.elements[8],I.__data[11]=0):($.toArray(I.__data,X),X+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,k,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(w,b,E,R){const U=w.value,C=b+"_"+E;if(R[C]===void 0)return typeof U=="number"||typeof U=="boolean"?R[C]=U:R[C]=U.clone(),!0;{const P=R[C];if(typeof U=="number"||typeof U=="boolean"){if(P!==U)return R[C]=U,!0}else if(P.equals(U)===!1)return P.copy(U),!0}return!1}function _(w){const b=w.uniforms;let E=0;const R=16;for(let C=0,P=b.length;C<P;C++){const S=Array.isArray(b[C])?b[C]:[b[C]];for(let T=0,I=S.length;T<I;T++){const k=S[T],Y=Array.isArray(k.value)?k.value:[k.value];for(let X=0,K=Y.length;X<K;X++){const $=Y[X],ne=x($),H=E%R,oe=H%ne.boundary,xe=H+oe;E+=oe,xe!==0&&R-xe<ne.storage&&(E+=R-xe),k.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=E,E+=ne.storage}}}const U=E%R;return U>0&&(E+=R-U),w.__size=E,w.__cache={},this}function x(w){const b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function m(w){const b=w.target;b.removeEventListener("dispose",m);const E=s.indexOf(b.__bindingPointIndex);s.splice(E,1),t.deleteBuffer(i[b.id]),delete i[b.id],delete a[b.id]}function d(){for(const w in i)t.deleteBuffer(i[w]);s=[],i={},a={}}return{bind:l,update:c,dispose:d}}class Ly{constructor(e={}){const{canvas:n=hv(),context:r=null,depth:i=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=r.getContextAttributes().alpha}else p=s;const _=new Uint32Array(4),x=new Int32Array(4);let m=null,d=null;const w=[],b=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let R=!1;this._outputColorSpace=Nn;let U=0,C=0,P=null,S=-1,T=null;const I=new kt,k=new kt;let Y=null;const X=new _t(0);let K=0,$=n.width,ne=n.height,H=1,oe=null,xe=null;const pe=new kt(0,0,$,ne),Ue=new kt(0,0,$,ne);let tt=!1;const ot=new Gc;let Be=!1,ee=!1;const ce=new qt,Te=new q,Xe=new kt,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function Rt(){return P===null?H:1}let F=r;function mt(M,B){return n.getContext(M,B)}try{const M={alpha:!0,depth:i,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Dc}`),n.addEventListener("webglcontextlost",de,!1),n.addEventListener("webglcontextrestored",Pe,!1),n.addEventListener("webglcontextcreationerror",ie,!1),F===null){const B="webgl2";if(F=mt(B,M),F===null)throw mt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let nt,Ke,He,Dt,Ve,lt,Ot,vt,D,y,V,ae,fe,re,We,Se,Fe,Ie,me,Re,je,Oe,we,st;function N(){nt=new V_(F),nt.init(),Oe=new Ty(F,nt),Ke=new O_(F,nt,e,Oe),He=new My(F,nt),Ke.reversedDepthBuffer&&f&&He.buffers.depth.setReversed(!0),Dt=new q_(F),Ve=new uy,lt=new Ey(F,nt,He,Ve,Ke,Oe,Dt),Ot=new k_(E),vt=new H_(E),D=new Jv(F),we=new F_(F,D),y=new W_(F,D,Dt,we),V=new Y_(F,y,D,Dt),me=new $_(F,Ke,lt),Se=new N_(Ve),ae=new cy(E,Ot,vt,nt,Ke,we,Se),fe=new Dy(E,Ve),re=new hy,We=new _y(nt),Ie=new L_(E,Ot,vt,He,V,p,l),Fe=new Sy(E,V,Ke),st=new Uy(F,Dt,Ke,He),Re=new I_(F,nt,Dt),je=new X_(F,nt,Dt),Dt.programs=ae.programs,E.capabilities=Ke,E.extensions=nt,E.properties=Ve,E.renderLists=re,E.shadowMap=Fe,E.state=He,E.info=Dt}N();const ye=new Cy(E,F);this.xr=ye,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const M=nt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=nt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(M){M!==void 0&&(H=M,this.setSize($,ne,!1))},this.getSize=function(M){return M.set($,ne)},this.setSize=function(M,B,J=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=M,ne=B,n.width=Math.floor(M*H),n.height=Math.floor(B*H),J===!0&&(n.style.width=M+"px",n.style.height=B+"px"),this.setViewport(0,0,M,B)},this.getDrawingBufferSize=function(M){return M.set($*H,ne*H).floor()},this.setDrawingBufferSize=function(M,B,J){$=M,ne=B,H=J,n.width=Math.floor(M*J),n.height=Math.floor(B*J),this.setViewport(0,0,M,B)},this.getCurrentViewport=function(M){return M.copy(I)},this.getViewport=function(M){return M.copy(pe)},this.setViewport=function(M,B,J,Z){M.isVector4?pe.set(M.x,M.y,M.z,M.w):pe.set(M,B,J,Z),He.viewport(I.copy(pe).multiplyScalar(H).round())},this.getScissor=function(M){return M.copy(Ue)},this.setScissor=function(M,B,J,Z){M.isVector4?Ue.set(M.x,M.y,M.z,M.w):Ue.set(M,B,J,Z),He.scissor(k.copy(Ue).multiplyScalar(H).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(M){He.setScissorTest(tt=M)},this.setOpaqueSort=function(M){oe=M},this.setTransparentSort=function(M){xe=M},this.getClearColor=function(M){return M.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(M=!0,B=!0,J=!0){let Z=0;if(M){let G=!1;if(P!==null){const ve=P.texture.format;G=ve===Nc||ve===Oc||ve===Ic}if(G){const ve=P.texture.type,Me=ve===_r||ve===Di||ve===ka||ve===Ba||ve===Lc||ve===Fc,Ge=Ie.getClearColor(),Le=Ie.getClearAlpha(),Ze=Ge.r,Je=Ge.g,qe=Ge.b;Me?(_[0]=Ze,_[1]=Je,_[2]=qe,_[3]=Le,F.clearBufferuiv(F.COLOR,0,_)):(x[0]=Ze,x[1]=Je,x[2]=qe,x[3]=Le,F.clearBufferiv(F.COLOR,0,x))}else Z|=F.COLOR_BUFFER_BIT}B&&(Z|=F.DEPTH_BUFFER_BIT),J&&(Z|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",de,!1),n.removeEventListener("webglcontextrestored",Pe,!1),n.removeEventListener("webglcontextcreationerror",ie,!1),Ie.dispose(),re.dispose(),We.dispose(),Ve.dispose(),Ot.dispose(),vt.dispose(),V.dispose(),we.dispose(),st.dispose(),ae.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",yn),ye.removeEventListener("sessionend",Sa),yr.stop()};function de(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const M=Dt.autoReset,B=Fe.enabled,J=Fe.autoUpdate,Z=Fe.needsUpdate,G=Fe.type;N(),Dt.autoReset=M,Fe.enabled=B,Fe.autoUpdate=J,Fe.needsUpdate=Z,Fe.type=G}function ie(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function le(M){const B=M.target;B.removeEventListener("dispose",le),Ce(B)}function Ce(M){$e(M),Ve.remove(M)}function $e(M){const B=Ve.get(M).programs;B!==void 0&&(B.forEach(function(J){ae.releaseProgram(J)}),M.isShaderMaterial&&ae.releaseShaderCache(M))}this.renderBufferDirect=function(M,B,J,Z,G,ve){B===null&&(B=ze);const Me=G.isMesh&&G.matrixWorld.determinant()<0,Ge=go(M,B,J,Z,G);He.setMaterial(Z,Me);let Le=J.index,Ze=1;if(Z.wireframe===!0){if(Le=y.getWireframeAttribute(J),Le===void 0)return;Ze=2}const Je=J.drawRange,qe=J.attributes.position;let dt=Je.start*Ze,Mt=(Je.start+Je.count)*Ze;ve!==null&&(dt=Math.max(dt,ve.start*Ze),Mt=Math.min(Mt,(ve.start+ve.count)*Ze)),Le!==null?(dt=Math.max(dt,0),Mt=Math.min(Mt,Le.count)):qe!=null&&(dt=Math.max(dt,0),Mt=Math.min(Mt,qe.count));const It=Mt-dt;if(It<0||It===1/0)return;we.setup(G,Z,Ge,J,Le);let Ct,yt=Re;if(Le!==null&&(Ct=D.get(Le),yt=je,yt.setIndex(Ct)),G.isMesh)Z.wireframe===!0?(He.setLineWidth(Z.wireframeLinewidth*Rt()),yt.setMode(F.LINES)):yt.setMode(F.TRIANGLES);else if(G.isLine){let Ye=Z.linewidth;Ye===void 0&&(Ye=1),He.setLineWidth(Ye*Rt()),G.isLineSegments?yt.setMode(F.LINES):G.isLineLoop?yt.setMode(F.LINE_LOOP):yt.setMode(F.LINE_STRIP)}else G.isPoints?yt.setMode(F.POINTS):G.isSprite&&yt.setMode(F.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Ha("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))yt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ye=G._multiDrawStarts,Ut=G._multiDrawCounts,ht=G._multiDrawCount,nn=Le?D.get(Le).bytesPerElement:1,Hr=Ve.get(Z).currentProgram.getUniforms();for(let hn=0;hn<ht;hn++)Hr.setValue(F,"_gl_DrawID",hn),yt.render(Ye[hn]/nn,Ut[hn])}else if(G.isInstancedMesh)yt.renderInstances(dt,It,G.count);else if(J.isInstancedBufferGeometry){const Ye=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ut=Math.min(J.instanceCount,Ye);yt.renderInstances(dt,It,Ut)}else yt.render(dt,It)};function Et(M,B,J){M.transparent===!0&&M.side===Ur&&M.forceSinglePass===!1?(M.side=An,M.needsUpdate=!0,nr(M,B,J),M.side=ci,M.needsUpdate=!0,nr(M,B,J),M.side=Ur):nr(M,B,J)}this.compile=function(M,B,J=null){J===null&&(J=M),d=We.get(J),d.init(B),b.push(d),J.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(d.pushLight(G),G.castShadow&&d.pushShadow(G))}),M!==J&&M.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(d.pushLight(G),G.castShadow&&d.pushShadow(G))}),d.setupLights();const Z=new Set;return M.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ve=G.material;if(ve)if(Array.isArray(ve))for(let Me=0;Me<ve.length;Me++){const Ge=ve[Me];Et(Ge,J,G),Z.add(Ge)}else Et(ve,J,G),Z.add(ve)}),d=b.pop(),Z},this.compileAsync=function(M,B,J=null){const Z=this.compile(M,B,J);return new Promise(G=>{function ve(){if(Z.forEach(function(Me){Ve.get(Me).currentProgram.isReady()&&Z.delete(Me)}),Z.size===0){G(M);return}setTimeout(ve,10)}nt.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let xt=null;function Cn(M){xt&&xt(M)}function yn(){yr.stop()}function Sa(){yr.start()}const yr=new Vh;yr.setAnimationLoop(Cn),typeof self<"u"&&yr.setContext(self),this.setAnimationLoop=function(M){xt=M,ye.setAnimationLoop(M),M===null?yr.stop():yr.start()},ye.addEventListener("sessionstart",yn),ye.addEventListener("sessionend",Sa),this.render=function(M,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(B),B=ye.getCamera()),M.isScene===!0&&M.onBeforeRender(E,M,B,P),d=We.get(M,b.length),d.init(B),b.push(d),ce.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ot.setFromProjectionMatrix(ce,fr,B.reversedDepth),ee=this.localClippingEnabled,Be=Se.init(this.clippingPlanes,ee),m=re.get(M,w.length),m.init(),w.push(m),ye.enabled===!0&&ye.isPresenting===!0){const ve=E.xr.getDepthSensingMesh();ve!==null&&Oi(ve,B,-1/0,E.sortObjects)}Oi(M,B,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(oe,xe),at=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,at&&Ie.addToRenderList(m,M),this.info.render.frame++,Be===!0&&Se.beginShadows();const J=d.state.shadowsArray;Fe.render(J,M,B),Be===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=m.opaque,G=m.transmissive;if(d.setupLights(),B.isArrayCamera){const ve=B.cameras;if(G.length>0)for(let Me=0,Ge=ve.length;Me<Ge;Me++){const Le=ve[Me];Ma(Z,G,M,Le)}at&&Ie.render(M);for(let Me=0,Ge=ve.length;Me<Ge;Me++){const Le=ve[Me];ba(m,M,Le,Le.viewport)}}else G.length>0&&Ma(Z,G,M,B),at&&Ie.render(M),ba(m,M,B);P!==null&&C===0&&(lt.updateMultisampleRenderTarget(P),lt.updateRenderTargetMipmap(P)),M.isScene===!0&&M.onAfterRender(E,M,B),we.resetDefaultState(),S=-1,T=null,b.pop(),b.length>0?(d=b[b.length-1],Be===!0&&Se.setGlobalState(E.clippingPlanes,d.state.camera)):d=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Oi(M,B,J,Z){if(M.visible===!1)return;if(M.layers.test(B.layers)){if(M.isGroup)J=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(B);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||ot.intersectsSprite(M)){Z&&Xe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ce);const Me=V.update(M),Ge=M.material;Ge.visible&&m.push(M,Me,Ge,J,Xe.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||ot.intersectsObject(M))){const Me=V.update(M),Ge=M.material;if(Z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Xe.copy(M.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Xe.copy(Me.boundingSphere.center)),Xe.applyMatrix4(M.matrixWorld).applyMatrix4(ce)),Array.isArray(Ge)){const Le=Me.groups;for(let Ze=0,Je=Le.length;Ze<Je;Ze++){const qe=Le[Ze],dt=Ge[qe.materialIndex];dt&&dt.visible&&m.push(M,Me,dt,J,Xe.z,qe)}}else Ge.visible&&m.push(M,Me,Ge,J,Xe.z,null)}}const ve=M.children;for(let Me=0,Ge=ve.length;Me<Ge;Me++)Oi(ve[Me],B,J,Z)}function ba(M,B,J,Z){const G=M.opaque,ve=M.transmissive,Me=M.transparent;d.setupLightsView(J),Be===!0&&Se.setGlobalState(E.clippingPlanes,J),Z&&He.viewport(I.copy(Z)),G.length>0&&Ni(G,B,J),ve.length>0&&Ni(ve,B,J),Me.length>0&&Ni(Me,B,J),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function Ma(M,B,J,Z){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[Z.id]===void 0&&(d.state.transmissionRenderTarget[Z.id]=new Li(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?ja:_r,minFilter:Pi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace}));const ve=d.state.transmissionRenderTarget[Z.id],Me=Z.viewport||I;ve.setSize(Me.z*E.transmissionResolutionScale,Me.w*E.transmissionResolutionScale);const Ge=E.getRenderTarget(),Le=E.getActiveCubeFace(),Ze=E.getActiveMipmapLevel();E.setRenderTarget(ve),E.getClearColor(X),K=E.getClearAlpha(),K<1&&E.setClearColor(16777215,.5),E.clear(),at&&Ie.render(J);const Je=E.toneMapping;E.toneMapping=si;const qe=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),d.setupLightsView(Z),Be===!0&&Se.setGlobalState(E.clippingPlanes,Z),Ni(M,J,Z),lt.updateMultisampleRenderTarget(ve),lt.updateRenderTargetMipmap(ve),nt.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let Mt=0,It=B.length;Mt<It;Mt++){const Ct=B[Mt],yt=Ct.object,Ye=Ct.geometry,Ut=Ct.material,ht=Ct.group;if(Ut.side===Ur&&yt.layers.test(Z.layers)){const nn=Ut.side;Ut.side=An,Ut.needsUpdate=!0,ss(yt,J,Z,Ye,Ut,ht),Ut.side=nn,Ut.needsUpdate=!0,dt=!0}}dt===!0&&(lt.updateMultisampleRenderTarget(ve),lt.updateRenderTargetMipmap(ve))}E.setRenderTarget(Ge,Le,Ze),E.setClearColor(X,K),qe!==void 0&&(Z.viewport=qe),E.toneMapping=Je}function Ni(M,B,J){const Z=B.isScene===!0?B.overrideMaterial:null;for(let G=0,ve=M.length;G<ve;G++){const Me=M[G],Ge=Me.object,Le=Me.geometry,Ze=Me.group;let Je=Me.material;Je.allowOverride===!0&&Z!==null&&(Je=Z),Ge.layers.test(J.layers)&&ss(Ge,B,J,Le,Je,Ze)}}function ss(M,B,J,Z,G,ve){M.onBeforeRender(E,B,J,Z,G,ve),M.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(E,B,J,Z,M,ve),G.transparent===!0&&G.side===Ur&&G.forceSinglePass===!1?(G.side=An,G.needsUpdate=!0,E.renderBufferDirect(J,B,Z,G,M,ve),G.side=ci,G.needsUpdate=!0,E.renderBufferDirect(J,B,Z,G,M,ve),G.side=Ur):E.renderBufferDirect(J,B,Z,G,M,ve),M.onAfterRender(E,B,J,Z,G,ve)}function nr(M,B,J){B.isScene!==!0&&(B=ze);const Z=Ve.get(M),G=d.state.lights,ve=d.state.shadowsArray,Me=G.state.version,Ge=ae.getParameters(M,G.state,ve,B,J),Le=ae.getProgramCacheKey(Ge);let Ze=Z.programs;Z.environment=M.isMeshStandardMaterial?B.environment:null,Z.fog=B.fog,Z.envMap=(M.isMeshStandardMaterial?vt:Ot).get(M.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&M.envMap===null?B.environmentRotation:M.envMapRotation,Ze===void 0&&(M.addEventListener("dispose",le),Ze=new Map,Z.programs=Ze);let Je=Ze.get(Le);if(Je!==void 0){if(Z.currentProgram===Je&&Z.lightsStateVersion===Me)return zr(M,Ge),Je}else Ge.uniforms=ae.getUniforms(M),M.onBeforeCompile(Ge,E),Je=ae.acquireProgram(Ge,Le),Ze.set(Le,Je),Z.uniforms=Ge.uniforms;const qe=Z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(qe.clippingPlanes=Se.uniform),zr(M,Ge),Z.needsLights=pi(M),Z.lightsStateVersion=Me,Z.needsLights&&(qe.ambientLightColor.value=G.state.ambient,qe.lightProbe.value=G.state.probe,qe.directionalLights.value=G.state.directional,qe.directionalLightShadows.value=G.state.directionalShadow,qe.spotLights.value=G.state.spot,qe.spotLightShadows.value=G.state.spotShadow,qe.rectAreaLights.value=G.state.rectArea,qe.ltc_1.value=G.state.rectAreaLTC1,qe.ltc_2.value=G.state.rectAreaLTC2,qe.pointLights.value=G.state.point,qe.pointLightShadows.value=G.state.pointShadow,qe.hemisphereLights.value=G.state.hemi,qe.directionalShadowMap.value=G.state.directionalShadowMap,qe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,qe.spotShadowMap.value=G.state.spotShadowMap,qe.spotLightMatrix.value=G.state.spotLightMatrix,qe.spotLightMap.value=G.state.spotLightMap,qe.pointShadowMap.value=G.state.pointShadowMap,qe.pointShadowMatrix.value=G.state.pointShadowMatrix),Z.currentProgram=Je,Z.uniformsList=null,Je}function ki(M){if(M.uniformsList===null){const B=M.currentProgram.getUniforms();M.uniformsList=Vs.seqWithValue(B.seq,M.uniforms)}return M.uniformsList}function zr(M,B){const J=Ve.get(M);J.outputColorSpace=B.outputColorSpace,J.batching=B.batching,J.batchingColor=B.batchingColor,J.instancing=B.instancing,J.instancingColor=B.instancingColor,J.instancingMorph=B.instancingMorph,J.skinning=B.skinning,J.morphTargets=B.morphTargets,J.morphNormals=B.morphNormals,J.morphColors=B.morphColors,J.morphTargetsCount=B.morphTargetsCount,J.numClippingPlanes=B.numClippingPlanes,J.numIntersection=B.numClipIntersection,J.vertexAlphas=B.vertexAlphas,J.vertexTangents=B.vertexTangents,J.toneMapping=B.toneMapping}function go(M,B,J,Z,G){B.isScene!==!0&&(B=ze),lt.resetTextureUnits();const ve=B.fog,Me=Z.isMeshStandardMaterial?B.environment:null,Ge=P===null?E.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:da,Le=(Z.isMeshStandardMaterial?vt:Ot).get(Z.envMap||Me),Ze=Z.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Je=!!J.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),qe=!!J.morphAttributes.position,dt=!!J.morphAttributes.normal,Mt=!!J.morphAttributes.color;let It=si;Z.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(It=E.toneMapping);const Ct=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,yt=Ct!==void 0?Ct.length:0,Ye=Ve.get(Z),Ut=d.state.lights;if(Be===!0&&(ee===!0||M!==T)){const $t=M===T&&Z.id===S;Se.setState(Z,M,$t)}let ht=!1;Z.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Ut.state.version||Ye.outputColorSpace!==Ge||G.isBatchedMesh&&Ye.batching===!1||!G.isBatchedMesh&&Ye.batching===!0||G.isBatchedMesh&&Ye.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ye.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ye.instancing===!1||!G.isInstancedMesh&&Ye.instancing===!0||G.isSkinnedMesh&&Ye.skinning===!1||!G.isSkinnedMesh&&Ye.skinning===!0||G.isInstancedMesh&&Ye.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ye.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ye.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ye.instancingMorph===!1&&G.morphTexture!==null||Ye.envMap!==Le||Z.fog===!0&&Ye.fog!==ve||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Se.numPlanes||Ye.numIntersection!==Se.numIntersection)||Ye.vertexAlphas!==Ze||Ye.vertexTangents!==Je||Ye.morphTargets!==qe||Ye.morphNormals!==dt||Ye.morphColors!==Mt||Ye.toneMapping!==It||Ye.morphTargetsCount!==yt)&&(ht=!0):(ht=!0,Ye.__version=Z.version);let nn=Ye.currentProgram;ht===!0&&(nn=nr(Z,B,G));let Hr=!1,hn=!1,on=!1;const Lt=nn.getUniforms(),vn=Ye.uniforms;if(He.useProgram(nn.program)&&(Hr=!0,hn=!0,on=!0),Z.id!==S&&(S=Z.id,hn=!0),Hr||T!==M){He.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Lt.setValue(F,"projectionMatrix",M.projectionMatrix),Lt.setValue(F,"viewMatrix",M.matrixWorldInverse);const dn=Lt.map.cameraPosition;dn!==void 0&&dn.setValue(F,Te.setFromMatrixPosition(M.matrixWorld)),Ke.logarithmicDepthBuffer&&Lt.setValue(F,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Lt.setValue(F,"isOrthographic",M.isOrthographicCamera===!0),T!==M&&(T=M,hn=!0,on=!0)}if(G.isSkinnedMesh){Lt.setOptional(F,G,"bindMatrix"),Lt.setOptional(F,G,"bindMatrixInverse");const $t=G.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),Lt.setValue(F,"boneTexture",$t.boneTexture,lt))}G.isBatchedMesh&&(Lt.setOptional(F,G,"batchingTexture"),Lt.setValue(F,"batchingTexture",G._matricesTexture,lt),Lt.setOptional(F,G,"batchingIdTexture"),Lt.setValue(F,"batchingIdTexture",G._indirectTexture,lt),Lt.setOptional(F,G,"batchingColorTexture"),G._colorsTexture!==null&&Lt.setValue(F,"batchingColorTexture",G._colorsTexture,lt));const gn=J.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&me.update(G,J,nn),(hn||Ye.receiveShadow!==G.receiveShadow)&&(Ye.receiveShadow=G.receiveShadow,Lt.setValue(F,"receiveShadow",G.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(vn.envMap.value=Le,vn.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&B.environment!==null&&(vn.envMapIntensity.value=B.environmentIntensity),hn&&(Lt.setValue(F,"toneMappingExposure",E.toneMappingExposure),Ye.needsLights&&_o(vn,on),ve&&Z.fog===!0&&fe.refreshFogUniforms(vn,ve),fe.refreshMaterialUniforms(vn,Z,H,ne,d.state.transmissionRenderTarget[M.id]),Vs.upload(F,ki(Ye),vn,lt)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Vs.upload(F,ki(Ye),vn,lt),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Lt.setValue(F,"center",G.center),Lt.setValue(F,"modelViewMatrix",G.modelViewMatrix),Lt.setValue(F,"normalMatrix",G.normalMatrix),Lt.setValue(F,"modelMatrix",G.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const $t=Z.uniformsGroups;for(let dn=0,mi=$t.length;dn<mi;dn++){const rr=$t[dn];st.update(rr,nn),st.bind(rr,nn)}}return nn}function _o(M,B){M.ambientLightColor.needsUpdate=B,M.lightProbe.needsUpdate=B,M.directionalLights.needsUpdate=B,M.directionalLightShadows.needsUpdate=B,M.pointLights.needsUpdate=B,M.pointLightShadows.needsUpdate=B,M.spotLights.needsUpdate=B,M.spotLightShadows.needsUpdate=B,M.rectAreaLights.needsUpdate=B,M.hemisphereLights.needsUpdate=B}function pi(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(M,B,J){const Z=Ve.get(M);Z.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),Ve.get(M.texture).__webglTexture=B,Ve.get(M.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:J,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,B){const J=Ve.get(M);J.__webglFramebuffer=B,J.__useDefaultFramebuffer=B===void 0};const xo=F.createFramebuffer();this.setRenderTarget=function(M,B=0,J=0){P=M,U=B,C=J;let Z=!0,G=null,ve=!1,Me=!1;if(M){const Le=Ve.get(M);if(Le.__useDefaultFramebuffer!==void 0)He.bindFramebuffer(F.FRAMEBUFFER,null),Z=!1;else if(Le.__webglFramebuffer===void 0)lt.setupRenderTarget(M);else if(Le.__hasExternalTextures)lt.rebindTextures(M,Ve.get(M.texture).__webglTexture,Ve.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const qe=M.depthTexture;if(Le.__boundDepthTexture!==qe){if(qe!==null&&Ve.has(qe)&&(M.width!==qe.image.width||M.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");lt.setupDepthRenderbuffer(M)}}const Ze=M.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Me=!0);const Je=Ve.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Je[B])?G=Je[B][J]:G=Je[B],ve=!0):M.samples>0&&lt.useMultisampledRTT(M)===!1?G=Ve.get(M).__webglMultisampledFramebuffer:Array.isArray(Je)?G=Je[J]:G=Je,I.copy(M.viewport),k.copy(M.scissor),Y=M.scissorTest}else I.copy(pe).multiplyScalar(H).floor(),k.copy(Ue).multiplyScalar(H).floor(),Y=tt;if(J!==0&&(G=xo),He.bindFramebuffer(F.FRAMEBUFFER,G)&&Z&&He.drawBuffers(M,G),He.viewport(I),He.scissor(k),He.setScissorTest(Y),ve){const Le=Ve.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+B,Le.__webglTexture,J)}else if(Me){const Le=B;for(let Ze=0;Ze<M.textures.length;Ze++){const Je=Ve.get(M.textures[Ze]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ze,Je.__webglTexture,J,Le)}}else if(M!==null&&J!==0){const Le=Ve.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Le.__webglTexture,J)}S=-1},this.readRenderTargetPixels=function(M,B,J,Z,G,ve,Me,Ge=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Ve.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Me!==void 0&&(Le=Le[Me]),Le){He.bindFramebuffer(F.FRAMEBUFFER,Le);try{const Ze=M.textures[Ge],Je=Ze.format,qe=Ze.type;if(!Ke.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=M.width-Z&&J>=0&&J<=M.height-G&&(M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ge),F.readPixels(B,J,Z,G,Oe.convert(Je),Oe.convert(qe),ve))}finally{const Ze=P!==null?Ve.get(P).__webglFramebuffer:null;He.bindFramebuffer(F.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(M,B,J,Z,G,ve,Me,Ge=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=Ve.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Me!==void 0&&(Le=Le[Me]),Le)if(B>=0&&B<=M.width-Z&&J>=0&&J<=M.height-G){He.bindFramebuffer(F.FRAMEBUFFER,Le);const Ze=M.textures[Ge],Je=Ze.format,qe=Ze.type;if(!Ke.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const dt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,dt),F.bufferData(F.PIXEL_PACK_BUFFER,ve.byteLength,F.STREAM_READ),M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ge),F.readPixels(B,J,Z,G,Oe.convert(Je),Oe.convert(qe),0);const Mt=P!==null?Ve.get(P).__webglFramebuffer:null;He.bindFramebuffer(F.FRAMEBUFFER,Mt);const It=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await dv(F,It,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,dt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ve),F.deleteBuffer(dt),F.deleteSync(It),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,B=null,J=0){const Z=Math.pow(2,-J),G=Math.floor(M.image.width*Z),ve=Math.floor(M.image.height*Z),Me=B!==null?B.x:0,Ge=B!==null?B.y:0;lt.setTexture2D(M,0),F.copyTexSubImage2D(F.TEXTURE_2D,J,0,0,Me,Ge,G,ve),He.unbindTexture()};const yo=F.createFramebuffer(),Bi=F.createFramebuffer();this.copyTextureToTexture=function(M,B,J=null,Z=null,G=0,ve=null){ve===null&&(G!==0?(Ha("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ve=G,G=0):ve=0);let Me,Ge,Le,Ze,Je,qe,dt,Mt,It;const Ct=M.isCompressedTexture?M.mipmaps[ve]:M.image;if(J!==null)Me=J.max.x-J.min.x,Ge=J.max.y-J.min.y,Le=J.isBox3?J.max.z-J.min.z:1,Ze=J.min.x,Je=J.min.y,qe=J.isBox3?J.min.z:0;else{const gn=Math.pow(2,-G);Me=Math.floor(Ct.width*gn),Ge=Math.floor(Ct.height*gn),M.isDataArrayTexture?Le=Ct.depth:M.isData3DTexture?Le=Math.floor(Ct.depth*gn):Le=1,Ze=0,Je=0,qe=0}Z!==null?(dt=Z.x,Mt=Z.y,It=Z.z):(dt=0,Mt=0,It=0);const yt=Oe.convert(B.format),Ye=Oe.convert(B.type);let Ut;B.isData3DTexture?(lt.setTexture3D(B,0),Ut=F.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(lt.setTexture2DArray(B,0),Ut=F.TEXTURE_2D_ARRAY):(lt.setTexture2D(B,0),Ut=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,B.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,B.unpackAlignment);const ht=F.getParameter(F.UNPACK_ROW_LENGTH),nn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Hr=F.getParameter(F.UNPACK_SKIP_PIXELS),hn=F.getParameter(F.UNPACK_SKIP_ROWS),on=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ct.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ct.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ze),F.pixelStorei(F.UNPACK_SKIP_ROWS,Je),F.pixelStorei(F.UNPACK_SKIP_IMAGES,qe);const Lt=M.isDataArrayTexture||M.isData3DTexture,vn=B.isDataArrayTexture||B.isData3DTexture;if(M.isDepthTexture){const gn=Ve.get(M),$t=Ve.get(B),dn=Ve.get(gn.__renderTarget),mi=Ve.get($t.__renderTarget);He.bindFramebuffer(F.READ_FRAMEBUFFER,dn.__webglFramebuffer),He.bindFramebuffer(F.DRAW_FRAMEBUFFER,mi.__webglFramebuffer);for(let rr=0;rr<Le;rr++)Lt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ve.get(M).__webglTexture,G,qe+rr),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ve.get(B).__webglTexture,ve,It+rr)),F.blitFramebuffer(Ze,Je,Me,Ge,dt,Mt,Me,Ge,F.DEPTH_BUFFER_BIT,F.NEAREST);He.bindFramebuffer(F.READ_FRAMEBUFFER,null),He.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(G!==0||M.isRenderTargetTexture||Ve.has(M)){const gn=Ve.get(M),$t=Ve.get(B);He.bindFramebuffer(F.READ_FRAMEBUFFER,yo),He.bindFramebuffer(F.DRAW_FRAMEBUFFER,Bi);for(let dn=0;dn<Le;dn++)Lt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,gn.__webglTexture,G,qe+dn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,gn.__webglTexture,G),vn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,$t.__webglTexture,ve,It+dn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,$t.__webglTexture,ve),G!==0?F.blitFramebuffer(Ze,Je,Me,Ge,dt,Mt,Me,Ge,F.COLOR_BUFFER_BIT,F.NEAREST):vn?F.copyTexSubImage3D(Ut,ve,dt,Mt,It+dn,Ze,Je,Me,Ge):F.copyTexSubImage2D(Ut,ve,dt,Mt,Ze,Je,Me,Ge);He.bindFramebuffer(F.READ_FRAMEBUFFER,null),He.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else vn?M.isDataTexture||M.isData3DTexture?F.texSubImage3D(Ut,ve,dt,Mt,It,Me,Ge,Le,yt,Ye,Ct.data):B.isCompressedArrayTexture?F.compressedTexSubImage3D(Ut,ve,dt,Mt,It,Me,Ge,Le,yt,Ct.data):F.texSubImage3D(Ut,ve,dt,Mt,It,Me,Ge,Le,yt,Ye,Ct):M.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ve,dt,Mt,Me,Ge,yt,Ye,Ct.data):M.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ve,dt,Mt,Ct.width,Ct.height,yt,Ct.data):F.texSubImage2D(F.TEXTURE_2D,ve,dt,Mt,Me,Ge,yt,Ye,Ct);F.pixelStorei(F.UNPACK_ROW_LENGTH,ht),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,nn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Hr),F.pixelStorei(F.UNPACK_SKIP_ROWS,hn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,on),ve===0&&B.generateMipmaps&&F.generateMipmap(Ut),He.unbindTexture()},this.initRenderTarget=function(M){Ve.get(M).__webglFramebuffer===void 0&&lt.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?lt.setTextureCube(M,0):M.isData3DTexture?lt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?lt.setTexture2DArray(M,0):lt.setTexture2D(M,0),He.unbindTexture()},this.resetState=function(){U=0,C=0,P=null,He.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),n.unpackColorSpace=bt._getUnpackColorSpace()}}var Bt=Uint8Array,Un=Uint16Array,Hc=Int32Array,uo=new Bt([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),fo=new Bt([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),fc=new Bt([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Yh=function(t,e){for(var n=new Un(31),r=0;r<31;++r)n[r]=e+=1<<t[r-1];for(var i=new Hc(n[30]),r=1;r<30;++r)for(var a=n[r];a<n[r+1];++a)i[a]=a-n[r]<<5|r;return{b:n,r:i}},jh=Yh(uo,2),Zh=jh.b,hc=jh.r;Zh[28]=258,hc[258]=28;var Kh=Yh(fo,0),Fy=Kh.b,vf=Kh.r,dc=new Un(32768);for(var Ft=0;Ft<32768;++Ft){var jr=(Ft&43690)>>1|(Ft&21845)<<1;jr=(jr&52428)>>2|(jr&13107)<<2,jr=(jr&61680)>>4|(jr&3855)<<4,dc[Ft]=((jr&65280)>>8|(jr&255)<<8)>>1}var vr=function(t,e,n){for(var r=t.length,i=0,a=new Un(e);i<r;++i)t[i]&&++a[t[i]-1];var s=new Un(e);for(i=1;i<e;++i)s[i]=s[i-1]+a[i-1]<<1;var o;if(n){o=new Un(1<<e);var l=15-e;for(i=0;i<r;++i)if(t[i])for(var c=i<<4|t[i],u=e-t[i],h=s[t[i]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)o[dc[h]>>l]=c}else for(o=new Un(r),i=0;i<r;++i)t[i]&&(o[i]=dc[s[t[i]-1]++]>>15-t[i]);return o},fi=new Bt(288);for(var Ft=0;Ft<144;++Ft)fi[Ft]=8;for(var Ft=144;Ft<256;++Ft)fi[Ft]=9;for(var Ft=256;Ft<280;++Ft)fi[Ft]=7;for(var Ft=280;Ft<288;++Ft)fi[Ft]=8;var Va=new Bt(32);for(var Ft=0;Ft<32;++Ft)Va[Ft]=5;var Iy=vr(fi,9,0),Oy=vr(fi,9,1),Ny=vr(Va,5,0),ky=vr(Va,5,1),sl=function(t){for(var e=t[0],n=1;n<t.length;++n)t[n]>e&&(e=t[n]);return e},qn=function(t,e,n){var r=e/8|0;return(t[r]|t[r+1]<<8)>>(e&7)&n},ol=function(t,e){var n=e/8|0;return(t[n]|t[n+1]<<8|t[n+2]<<16)>>(e&7)},Vc=function(t){return(t+7)/8|0},Qa=function(t,e,n){return(e==null||e<0)&&(e=0),(n==null||n>t.length)&&(n=t.length),new Bt(t.subarray(e,n))},By=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],xn=function(t,e,n){var r=new Error(e||By[t]);if(r.code=t,Error.captureStackTrace&&Error.captureStackTrace(r,xn),!n)throw r;return r},Gy=function(t,e,n,r){var i=t.length,a=r?r.length:0;if(!i||e.f&&!e.l)return n||new Bt(0);var s=!n,o=s||e.i!=2,l=e.i;s&&(n=new Bt(i*3));var c=function(at){var Rt=n.length;if(at>Rt){var F=new Bt(Math.max(Rt*2,at));F.set(n),n=F}},u=e.f||0,h=e.p||0,f=e.b||0,p=e.l,_=e.d,x=e.m,m=e.n,d=i*8;do{if(!p){u=qn(t,h,1);var w=qn(t,h+1,3);if(h+=3,w)if(w==1)p=Oy,_=ky,x=9,m=5;else if(w==2){var U=qn(t,h,31)+257,C=qn(t,h+10,15)+4,P=U+qn(t,h+5,31)+1;h+=14;for(var S=new Bt(P),T=new Bt(19),I=0;I<C;++I)T[fc[I]]=qn(t,h+I*3,7);h+=C*3;for(var k=sl(T),Y=(1<<k)-1,X=vr(T,k,1),I=0;I<P;){var K=X[qn(t,h,Y)];h+=K&15;var b=K>>4;if(b<16)S[I++]=b;else{var $=0,ne=0;for(b==16?(ne=3+qn(t,h,3),h+=2,$=S[I-1]):b==17?(ne=3+qn(t,h,7),h+=3):b==18&&(ne=11+qn(t,h,127),h+=7);ne--;)S[I++]=$}}var H=S.subarray(0,U),oe=S.subarray(U);x=sl(H),m=sl(oe),p=vr(H,x,1),_=vr(oe,m,1)}else xn(1);else{var b=Vc(h)+4,E=t[b-4]|t[b-3]<<8,R=b+E;if(R>i){l&&xn(0);break}o&&c(f+E),n.set(t.subarray(b,R),f),e.b=f+=E,e.p=h=R*8,e.f=u;continue}if(h>d){l&&xn(0);break}}o&&c(f+131072);for(var xe=(1<<x)-1,pe=(1<<m)-1,Ue=h;;Ue=h){var $=p[ol(t,h)&xe],tt=$>>4;if(h+=$&15,h>d){l&&xn(0);break}if($||xn(2),tt<256)n[f++]=tt;else if(tt==256){Ue=h,p=null;break}else{var ot=tt-254;if(tt>264){var I=tt-257,Be=uo[I];ot=qn(t,h,(1<<Be)-1)+Zh[I],h+=Be}var ee=_[ol(t,h)&pe],ce=ee>>4;ee||xn(3),h+=ee&15;var oe=Fy[ce];if(ce>3){var Be=fo[ce];oe+=ol(t,h)&(1<<Be)-1,h+=Be}if(h>d){l&&xn(0);break}o&&c(f+131072);var Te=f+ot;if(f<oe){var Xe=a-oe,ze=Math.min(oe,Te);for(Xe+f<0&&xn(3);f<ze;++f)n[f]=r[Xe+f]}for(;f<Te;++f)n[f]=n[f-oe]}}e.l=p,e.p=Ue,e.b=f,e.f=u,p&&(u=1,e.m=x,e.d=_,e.n=m)}while(!u);return f!=n.length&&s?Qa(n,0,f):n.subarray(0,f)},Rr=function(t,e,n){n<<=e&7;var r=e/8|0;t[r]|=n,t[r+1]|=n>>8},Da=function(t,e,n){n<<=e&7;var r=e/8|0;t[r]|=n,t[r+1]|=n>>8,t[r+2]|=n>>16},ll=function(t,e){for(var n=[],r=0;r<t.length;++r)t[r]&&n.push({s:r,f:t[r]});var i=n.length,a=n.slice();if(!i)return{t:Qh,l:0};if(i==1){var s=new Bt(n[0].s+1);return s[n[0].s]=1,{t:s,l:1}}n.sort(function(R,U){return R.f-U.f}),n.push({s:-1,f:25001});var o=n[0],l=n[1],c=0,u=1,h=2;for(n[0]={s:-1,f:o.f+l.f,l:o,r:l};u!=i-1;)o=n[n[c].f<n[h].f?c++:h++],l=n[c!=u&&n[c].f<n[h].f?c++:h++],n[u++]={s:-1,f:o.f+l.f,l:o,r:l};for(var f=a[0].s,r=1;r<i;++r)a[r].s>f&&(f=a[r].s);var p=new Un(f+1),_=pc(n[u-1],p,0);if(_>e){var r=0,x=0,m=_-e,d=1<<m;for(a.sort(function(U,C){return p[C.s]-p[U.s]||U.f-C.f});r<i;++r){var w=a[r].s;if(p[w]>e)x+=d-(1<<_-p[w]),p[w]=e;else break}for(x>>=m;x>0;){var b=a[r].s;p[b]<e?x-=1<<e-p[b]++-1:++r}for(;r>=0&&x;--r){var E=a[r].s;p[E]==e&&(--p[E],++x)}_=e}return{t:new Bt(p),l:_}},pc=function(t,e,n){return t.s==-1?Math.max(pc(t.l,e,n+1),pc(t.r,e,n+1)):e[t.s]=n},gf=function(t){for(var e=t.length;e&&!t[--e];);for(var n=new Un(++e),r=0,i=t[0],a=1,s=function(l){n[r++]=l},o=1;o<=e;++o)if(t[o]==i&&o!=e)++a;else{if(!i&&a>2){for(;a>138;a-=138)s(32754);a>2&&(s(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(s(i),--a;a>6;a-=6)s(8304);a>2&&(s(a-3<<5|8208),a=0)}for(;a--;)s(i);a=1,i=t[o]}return{c:n.subarray(0,r),n:e}},Ua=function(t,e){for(var n=0,r=0;r<e.length;++r)n+=t[r]*e[r];return n},Jh=function(t,e,n){var r=n.length,i=Vc(e+2);t[i]=r&255,t[i+1]=r>>8,t[i+2]=t[i]^255,t[i+3]=t[i+1]^255;for(var a=0;a<r;++a)t[i+a+4]=n[a];return(i+4+r)*8},_f=function(t,e,n,r,i,a,s,o,l,c,u){Rr(e,u++,n),++i[256];for(var h=ll(i,15),f=h.t,p=h.l,_=ll(a,15),x=_.t,m=_.l,d=gf(f),w=d.c,b=d.n,E=gf(x),R=E.c,U=E.n,C=new Un(19),P=0;P<w.length;++P)++C[w[P]&31];for(var P=0;P<R.length;++P)++C[R[P]&31];for(var S=ll(C,7),T=S.t,I=S.l,k=19;k>4&&!T[fc[k-1]];--k);var Y=c+5<<3,X=Ua(i,fi)+Ua(a,Va)+s,K=Ua(i,f)+Ua(a,x)+s+14+3*k+Ua(C,T)+2*C[16]+3*C[17]+7*C[18];if(l>=0&&Y<=X&&Y<=K)return Jh(e,u,t.subarray(l,l+c));var $,ne,H,oe;if(Rr(e,u,1+(K<X)),u+=2,K<X){$=vr(f,p,0),ne=f,H=vr(x,m,0),oe=x;var xe=vr(T,I,0);Rr(e,u,b-257),Rr(e,u+5,U-1),Rr(e,u+10,k-4),u+=14;for(var P=0;P<k;++P)Rr(e,u+3*P,T[fc[P]]);u+=3*k;for(var pe=[w,R],Ue=0;Ue<2;++Ue)for(var tt=pe[Ue],P=0;P<tt.length;++P){var ot=tt[P]&31;Rr(e,u,xe[ot]),u+=T[ot],ot>15&&(Rr(e,u,tt[P]>>5&127),u+=tt[P]>>12)}}else $=Iy,ne=fi,H=Ny,oe=Va;for(var P=0;P<o;++P){var Be=r[P];if(Be>255){var ot=Be>>18&31;Da(e,u,$[ot+257]),u+=ne[ot+257],ot>7&&(Rr(e,u,Be>>23&31),u+=uo[ot]);var ee=Be&31;Da(e,u,H[ee]),u+=oe[ee],ee>3&&(Da(e,u,Be>>5&8191),u+=fo[ee])}else Da(e,u,$[Be]),u+=ne[Be]}return Da(e,u,$[256]),u+ne[256]},zy=new Hc([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Qh=new Bt(0),Hy=function(t,e,n,r,i,a){var s=a.z||t.length,o=new Bt(r+s+5*(1+Math.ceil(s/7e3))+i),l=o.subarray(r,o.length-i),c=a.l,u=(a.r||0)&7;if(e){u&&(l[0]=a.r>>3);for(var h=zy[e-1],f=h>>13,p=h&8191,_=(1<<n)-1,x=a.p||new Un(32768),m=a.h||new Un(_+1),d=Math.ceil(n/3),w=2*d,b=function(mt){return(t[mt]^t[mt+1]<<d^t[mt+2]<<w)&_},E=new Hc(25e3),R=new Un(288),U=new Un(32),C=0,P=0,S=a.i||0,T=0,I=a.w||0,k=0;S+2<s;++S){var Y=b(S),X=S&32767,K=m[Y];if(x[X]=K,m[Y]=X,I<=S){var $=s-S;if((C>7e3||T>24576)&&($>423||!c)){u=_f(t,l,0,E,R,U,P,T,k,S-k,u),T=C=P=0,k=S;for(var ne=0;ne<286;++ne)R[ne]=0;for(var ne=0;ne<30;++ne)U[ne]=0}var H=2,oe=0,xe=p,pe=X-K&32767;if($>2&&Y==b(S-pe))for(var Ue=Math.min(f,$)-1,tt=Math.min(32767,S),ot=Math.min(258,$);pe<=tt&&--xe&&X!=K;){if(t[S+H]==t[S+H-pe]){for(var Be=0;Be<ot&&t[S+Be]==t[S+Be-pe];++Be);if(Be>H){if(H=Be,oe=pe,Be>Ue)break;for(var ee=Math.min(pe,Be-2),ce=0,ne=0;ne<ee;++ne){var Te=S-pe+ne&32767,Xe=x[Te],ze=Te-Xe&32767;ze>ce&&(ce=ze,K=Te)}}}X=K,K=x[X],pe+=X-K&32767}if(oe){E[T++]=268435456|hc[H]<<18|vf[oe];var at=hc[H]&31,Rt=vf[oe]&31;P+=uo[at]+fo[Rt],++R[257+at],++U[Rt],I=S+H,++C}else E[T++]=t[S],++R[t[S]]}}for(S=Math.max(S,I);S<s;++S)E[T++]=t[S],++R[t[S]];u=_f(t,l,c,E,R,U,P,T,k,S-k,u),c||(a.r=u&7|l[u/8|0]<<3,u-=7,a.h=m,a.p=x,a.i=S,a.w=I)}else{for(var S=a.w||0;S<s+c;S+=65535){var F=S+65535;F>=s&&(l[u/8|0]=c,F=s),u=Jh(l,u+1,t.subarray(S,F))}a.i=s}return Qa(o,0,r+Vc(u)+i)},Vy=function(){for(var t=new Int32Array(256),e=0;e<256;++e){for(var n=e,r=9;--r;)n=(n&1&&-306674912)^n>>>1;t[e]=n}return t}(),Wy=function(){var t=-1;return{p:function(e){for(var n=t,r=0;r<e.length;++r)n=Vy[n&255^e[r]]^n>>>8;t=n},d:function(){return~t}}},Xy=function(t,e,n,r,i){if(!i&&(i={l:1},e.dictionary)){var a=e.dictionary.subarray(-32768),s=new Bt(a.length+t.length);s.set(a),s.set(t,a.length),t=s,i.w=a.length}return Hy(t,e.level==null?6:e.level,e.mem==null?i.l?Math.ceil(Math.max(8,Math.min(13,Math.log(t.length)))*1.5):20:12+e.mem,n,r,i)},ed=function(t,e){var n={};for(var r in t)n[r]=t[r];for(var r in e)n[r]=e[r];return n},cr=function(t,e){return t[e]|t[e+1]<<8},$n=function(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24)>>>0},cl=function(t,e){return $n(t,e)+$n(t,e+4)*4294967296},ln=function(t,e,n){for(;n;++e)t[e]=n,n>>>=8};function qy(t,e){return Xy(t,e||{},0,0)}function $y(t,e){return Gy(t,{i:2},e&&e.out,e&&e.dictionary)}var td=function(t,e,n,r){for(var i in t){var a=t[i],s=e+i,o=r;Array.isArray(a)&&(o=ed(r,a[1]),a=a[0]),a instanceof Bt?n[s]=[a,o]:(n[s+="/"]=[new Bt(0),o],td(a,s,n,r))}},xf=typeof TextEncoder<"u"&&new TextEncoder,mc=typeof TextDecoder<"u"&&new TextDecoder,Yy=0;try{mc.decode(Qh,{stream:!0}),Yy=1}catch{}var jy=function(t){for(var e="",n=0;;){var r=t[n++],i=(r>127)+(r>223)+(r>239);if(n+i>t.length)return{s:e,r:Qa(t,n-1)};i?i==3?(r=((r&15)<<18|(t[n++]&63)<<12|(t[n++]&63)<<6|t[n++]&63)-65536,e+=String.fromCharCode(55296|r>>10,56320|r&1023)):i&1?e+=String.fromCharCode((r&31)<<6|t[n++]&63):e+=String.fromCharCode((r&15)<<12|(t[n++]&63)<<6|t[n++]&63):e+=String.fromCharCode(r)}};function Nr(t,e){var n;if(xf)return xf.encode(t);for(var r=t.length,i=new Bt(t.length+(t.length>>1)),a=0,s=function(c){i[a++]=c},n=0;n<r;++n){if(a+5>i.length){var o=new Bt(a+8+(r-n<<1));o.set(i),i=o}var l=t.charCodeAt(n);l<128||e?s(l):l<2048?(s(192|l>>6),s(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|t.charCodeAt(++n)&1023,s(240|l>>18),s(128|l>>12&63),s(128|l>>6&63),s(128|l&63)):(s(224|l>>12),s(128|l>>6&63),s(128|l&63))}return Qa(i,0,a)}function nd(t,e){if(e){for(var n="",r=0;r<t.length;r+=16384)n+=String.fromCharCode.apply(null,t.subarray(r,r+16384));return n}else{if(mc)return mc.decode(t);var i=jy(t),a=i.s,n=i.r;return n.length&&xn(8),a}}var Zy=function(t,e){return e+30+cr(t,e+26)+cr(t,e+28)},Ky=function(t,e,n){var r=cr(t,e+28),i=nd(t.subarray(e+46,e+46+r),!(cr(t,e+8)&2048)),a=e+46+r,s=$n(t,e+20),o=n&&s==4294967295?Jy(t,a):[s,$n(t,e+24),$n(t,e+42)],l=o[0],c=o[1],u=o[2];return[cr(t,e+10),l,c,i,a+cr(t,e+30)+cr(t,e+32),u]},Jy=function(t,e){for(;cr(t,e)!=1;e+=4+cr(t,e+2));return[cl(t,e+12),cl(t,e+4),cl(t,e+20)]},vc=function(t){var e=0;if(t)for(var n in t){var r=t[n].length;r>65535&&xn(9),e+=r+4}return e},yf=function(t,e,n,r,i,a,s,o){var l=r.length,c=n.extra,u=o&&o.length,h=vc(c);ln(t,e,s!=null?33639248:67324752),e+=4,s!=null&&(t[e++]=20,t[e++]=n.os),t[e]=20,e+=2,t[e++]=n.flag<<1|(a<0&&8),t[e++]=i&&8,t[e++]=n.compression&255,t[e++]=n.compression>>8;var f=new Date(n.mtime==null?Date.now():n.mtime),p=f.getFullYear()-1980;if((p<0||p>119)&&xn(10),ln(t,e,p<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>1),e+=4,a!=-1&&(ln(t,e,n.crc),ln(t,e+4,a<0?-a-2:a),ln(t,e+8,n.size)),ln(t,e+12,l),ln(t,e+14,h),e+=16,s!=null&&(ln(t,e,u),ln(t,e+6,n.attrs),ln(t,e+10,s),e+=14),t.set(r,e),e+=l,h)for(var _ in c){var x=c[_],m=x.length;ln(t,e,+_),ln(t,e+2,m),t.set(x,e+4),e+=4+m}return u&&(t.set(o,e),e+=u),e},Qy=function(t,e,n,r,i){ln(t,e,101010256),ln(t,e+8,n),ln(t,e+10,n),ln(t,e+12,r),ln(t,e+16,i)};function rd(t,e){e||(e={});var n={},r=[];td(t,"",n,e);var i=0,a=0;for(var s in n){var o=n[s],l=o[0],c=o[1],u=c.level==0?0:8,h=Nr(s),f=h.length,p=c.comment,_=p&&Nr(p),x=_&&_.length,m=vc(c.extra);f>65535&&xn(11);var d=u?qy(l,c):l,w=d.length,b=Wy();b.p(l),r.push(ed(c,{size:l.length,crc:b.d(),c:d,f:h,m:_,u:f!=s.length||_&&p.length!=x,o:i,compression:u})),i+=30+f+m+w,a+=76+2*(f+m)+(x||0)+w}for(var E=new Bt(a+22),R=i,U=a-i,C=0;C<r.length;++C){var h=r[C];yf(E,h.o,h,h.f,h.u,h.c.length);var P=30+h.f.length+vc(h.extra);E.set(h.c,h.o+P),yf(E,i,h,h.f,h.u,h.c.length,h.o,h.m),i+=16+P+(h.m?h.m.length:0)}return Qy(E,i,r.length,U,R),E}function eS(t,e){for(var n={},r=t.length-22;$n(t,r)!=101010256;--r)(!r||t.length-r>65558)&&xn(13);var i=cr(t,r+8);if(!i)return{};var a=$n(t,r+16),s=a==4294967295||i==65535;if(s){var o=$n(t,r-12);s=$n(t,o)==101075792,s&&(i=$n(t,o+32),a=$n(t,o+48))}for(var l=0;l<i;++l){var c=Ky(t,a,s),u=c[0],h=c[1],f=c[2],p=c[3],_=c[4],x=c[5],m=Zy(t,x);a=_,u?u==8?n[p]=$y(t.subarray(m,m+h),{out:new Bt(f)}):xn(14,"unknown compression type "+u):n[p]=Qa(t,m,m+h)}return n}const gc=t=>String(t).replace(/[<>&"']/g,e=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&apos;"})[e]);function ho(t){const e={min:[1/0,1/0,1/0],max:[-1/0,-1/0,-1/0]};let n=0,r=0;const i=t.map(a=>{const s=new Map;let o=0,l=0;const c=a.vertices;c.forEach(p=>p.forEach((_,x)=>{if(!Number.isFinite(_))throw Error("Неконечная координата");e.min[x]=Math.min(e.min[x],_),e.max[x]=Math.max(e.max[x],_)}));const u=new Map;let h=c.map(p=>{const _=p.map(x=>Math.round(x*1e5)).join(",");return u.has(_)||u.set(_,u.size),u.get(_)});for(let p=0;p<a.triangles.length;p+=3){const _=a.triangles.slice(p,p+3),[x,m,d]=_.map(R=>c[R]);if(!x||!m||!d)throw Error("Индекс грани за пределами сетки");const w=m.map((R,U)=>R-x[U]),b=d.map((R,U)=>R-x[U]),E=[w[1]*b[2]-w[2]*b[1],w[2]*b[0]-w[0]*b[2],w[0]*b[1]-w[1]*b[0]];Math.hypot(...E)<1e-9&&l++,o+=(x[0]*(m[1]*d[2]-m[2]*d[1])+x[1]*(m[2]*d[0]-m[0]*d[2])+x[2]*(m[0]*d[1]-m[1]*d[0]))/6;for(let R=0;R<3;R++){const U=h[_[R]],C=h[_[(R+1)%3]],P=Math.min(U,C)+":"+Math.max(U,C),S=s.get(P)||{count:0,direction:0};S.count++,S.direction+=U<C?1:-1,s.set(P,S)}}let f=0;for(const p of s.values())(p.count!==2||p.direction!==0)&&f++;return n+=a.triangles.length/3,r+=o,{name:a.name,triangles:a.triangles.length/3,volume:o,badEdges:f,degenerate:l,valid:f===0&&l===0&&o>0}});return{valid:i.every(a=>a.valid),reports:i,bounds:e,size:e.max.map((a,s)=>a-e.min[s]),triangles:n,volume:r}}function tS(t){const e=vm(),n=[];try{for(const a of t){const s=new e.Mesh({numProp:3,vertProperties:new Float32Array(a.vertices.flat()),triVerts:new Uint32Array(a.triangles)});s.merge(),n.push(new e.Manifold(s))}const r=e.Manifold.union(n);n.push(r);const i=r.getMesh();return[{name:"Объединённая модель",vertices:Array.from({length:i.numVert},(a,s)=>Array.from(i.vertProperties.slice(s*i.numProp,s*i.numProp+3))),triangles:Array.from(i.triVerts)}]}finally{for(const r of n)r.delete()}}function id(t){if(t=tS(t),!ho(t).valid)throw Error("Объединённая STL-сетка не прошла проверку. Измените параметры.");const e=t.reduce((a,s)=>a+s.triangles.length/3,0),n=new ArrayBuffer(84+e*50),r=new DataView(n);new Uint8Array(n).set(Nr("SNOOPY3D Studio | coordinates in millimeters")),r.setUint32(80,e,!0);let i=84;for(const a of t)for(let s=0;s<a.triangles.length;s+=3){const[o,l,c]=a.triangles.slice(s,s+3).map(_=>a.vertices[_]),u=l.map((_,x)=>_-o[x]),h=c.map((_,x)=>_-o[x]),f=[u[1]*h[2]-u[2]*h[1],u[2]*h[0]-u[0]*h[2],u[0]*h[1]-u[1]*h[0]],p=Math.hypot(...f);for(const _ of[...f.map(x=>x/p),...o,...l,...c])r.setFloat32(i,_,!0),i+=4;i+=2}return n}function Wc(t){const e=t.map((n,r)=>`<object id="${r+1}" name="${gc(n.name)}" type="model" pid="900" pindex="${r}"><mesh><vertices>${n.vertices.map(i=>`<vertex x="${i[0]}" y="${i[1]}" z="${i[2]}"/>`).join("")}</vertices><triangles>${Array.from({length:n.triangles.length/3},(i,a)=>`<triangle v1="${n.triangles[a*3]}" v2="${n.triangles[a*3+1]}" v3="${n.triangles[a*3+2]}"/>`).join("")}</triangles></mesh></object>`).join("");return rd({"[Content_Types].xml":Nr('<?xml version="1.0"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="model" ContentType="application/vnd.ms-package.3dmanufacturing-3dmodel+xml"/></Types>'),"_rels/.rels":Nr('<?xml version="1.0"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Target="/3D/3dmodel.model" Id="rel0" Type="http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel"/></Relationships>'),"3D/3dmodel.model":Nr(`<?xml version="1.0" encoding="UTF-8"?><model unit="millimeter" xml:lang="ru-RU" xmlns="http://schemas.microsoft.com/3dmanufacturing/core/2015/02"><metadata name="Application">SNOOPY3D Studio</metadata><resources><basematerials id="900">${t.map(n=>`<base name="${gc(n.name)}" displaycolor="${n.color||"#3CE0C1"}FF"/>`).join("")}</basematerials>${e}<object id="901" type="model" name="SNOOPY3D"><components>${t.map((n,r)=>`<component objectid="${r+1}"/>`).join("")}</components></object></resources><build><item objectid="901"/></build></model>`)})}function nS(t){const e=eS(Wc(t)),n=[...new Set(t.map(i=>i.color||"#3ce0c1"))];let r=nd(e["3D/3dmodel.model"]);return r=r.replace("<model unit=",'<model xmlns:BambuStudio="http://schemas.bambulab.com/package/2021" unit=').replace('<metadata name="Application">SNOOPY3D Studio</metadata>','<metadata name="Application">SNOOPY3D Studio</metadata><metadata name="BambuStudio:3mfVersion">1</metadata>'),e["3D/3dmodel.model"]=Nr(r),e["Metadata/project_settings.config"]=Nr(JSON.stringify({filament_colour:n,filament_type:n.map(()=>"PLA"),filament_settings_id:n.map(()=>"Generic PLA"),printer_model:"",printer_variant:"0.4"})),e["Metadata/model_settings.config"]=Nr(`<?xml version="1.0" encoding="UTF-8"?><config><object id="901"><metadata key="name" value="SNOOPY3D"/><metadata key="extruder" value="1"/>${t.map((i,a)=>`<part id="${a+1}" subtype="normal_part"><metadata key="name" value="${gc(i.name)}"/><metadata key="extruder" value="${n.indexOf(i.color||"#3ce0c1")+1}"/></part>`).join("")}</object><plate><metadata key="plater_id" value="1"/><model_instance><metadata key="object_id" value="901"/><metadata key="instance_id" value="0"/><metadata key="identify_id" value="1"/></model_instance></plate><assemble/></config>`),rd(e)}const Sf={type:"change"},Xc={type:"start"},ad={type:"end"},Ps=new Ph,bf=new ni,rS=Math.cos(70*fv.DEG2RAD),Jt=new q,Mn=2*Math.PI,wt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ul=1e-6;class iS extends Zv{constructor(e,n=null){super(e,n),this.state=wt.NONE,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:sa.ROTATE,MIDDLE:sa.DOLLY,RIGHT:sa.PAN},this.touches={ONE:ra.ROTATE,TWO:ra.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new q,this._lastQuaternion=new Ui,this._lastTargetPosition=new q,this._quat=new Ui().setFromUnitVectors(e.up,new q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Vu,this._sphericalDelta=new Vu,this._scale=1,this._panOffset=new q,this._rotateStart=new ct,this._rotateEnd=new ct,this._rotateDelta=new ct,this._panStart=new ct,this._panEnd=new ct,this._panDelta=new ct,this._dollyStart=new ct,this._dollyEnd=new ct,this._dollyDelta=new ct,this._dollyDirection=new q,this._mouse=new ct,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=sS.bind(this),this._onPointerDown=aS.bind(this),this._onPointerUp=oS.bind(this),this._onContextMenu=pS.bind(this),this._onMouseWheel=uS.bind(this),this._onKeyDown=fS.bind(this),this._onTouchStart=hS.bind(this),this._onTouchMove=dS.bind(this),this._onMouseDown=lS.bind(this),this._onMouseMove=cS.bind(this),this._interceptControlDown=mS.bind(this),this._interceptControlUp=vS.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Sf),this.update(),this.state=wt.NONE}update(e=null){const n=this.object.position;Jt.copy(n).sub(this.target),Jt.applyQuaternion(this._quat),this._spherical.setFromVector3(Jt),this.autoRotate&&this.state===wt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(r)&&isFinite(i)&&(r<-Math.PI?r+=Mn:r>Math.PI&&(r-=Mn),i<-Math.PI?i+=Mn:i>Math.PI&&(i-=Mn),r<=i?this._spherical.theta=Math.max(r,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+i)/2?Math.max(r,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=s!=this._spherical.radius}if(Jt.setFromSpherical(this._spherical),Jt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Jt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const o=Jt.length();s=this._clampDistance(o*this._scale);const l=o-s;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),a=!!l}else if(this.object.isOrthographicCamera){const o=new q(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=l!==this.object.zoom;const c=new q(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),s=Jt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(Ps.origin.copy(this.object.position),Ps.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ps.direction))<rS?this.object.lookAt(this.target):(bf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ps.intersectPlane(bf,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>ul||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ul||this._lastTargetPosition.distanceToSquared(this.target)>ul?(this.dispatchEvent(Sf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Mn/60*this.autoRotateSpeed*e:Mn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Jt.setFromMatrixColumn(n,0),Jt.multiplyScalar(-e),this._panOffset.add(Jt)}_panUp(e,n){this.screenSpacePanning===!0?Jt.setFromMatrixColumn(n,1):(Jt.setFromMatrixColumn(n,0),Jt.crossVectors(this.object.up,Jt)),Jt.multiplyScalar(e),this._panOffset.add(Jt)}_pan(e,n){const r=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Jt.copy(i).sub(this.target);let a=Jt.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/r.clientHeight,this.object.matrix),this._panUp(2*n*a/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),i=e-r.left,a=n-r.top,s=r.width,o=r.height;this._mouse.x=i/s*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Mn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Mn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),i=.5*(e.pageY+n.y);this._rotateStart.set(r,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),i=.5*(e.pageY+n.y);this._panStart.set(r,i)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),r=e.pageX-n.x,i=e.pageY-n.y,a=Math.sqrt(r*r+i*i);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),i=.5*(e.pageX+r.x),a=.5*(e.pageY+r.y);this._rotateEnd.set(i,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Mn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Mn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),i=.5*(e.pageY+n.y);this._panEnd.set(r,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),r=e.pageX-n.x,i=e.pageY-n.y,a=Math.sqrt(r*r+i*i);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+n.x)*.5,o=(e.pageY+n.y)*.5;this._updateZoomParameters(s,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new ct,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function aS(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function sS(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function oS(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ad),this.state=wt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function lS(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case sa.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=wt.DOLLY;break;case sa.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=wt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=wt.ROTATE}break;case sa.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=wt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=wt.PAN}break;default:this.state=wt.NONE}this.state!==wt.NONE&&this.dispatchEvent(Xc)}function cS(t){switch(this.state){case wt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case wt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case wt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function uS(t){this.enabled===!1||this.enableZoom===!1||this.state!==wt.NONE||(t.preventDefault(),this.dispatchEvent(Xc),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(ad))}function fS(t){this.enabled!==!1&&this._handleKeyDown(t)}function hS(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case ra.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=wt.TOUCH_ROTATE;break;case ra.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=wt.TOUCH_PAN;break;default:this.state=wt.NONE}break;case 2:switch(this.touches.TWO){case ra.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=wt.TOUCH_DOLLY_PAN;break;case ra.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=wt.TOUCH_DOLLY_ROTATE;break;default:this.state=wt.NONE}break;default:this.state=wt.NONE}this.state!==wt.NONE&&this.dispatchEvent(Xc)}function dS(t){switch(this._trackPointer(t),this.state){case wt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case wt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case wt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case wt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=wt.NONE}}function pS(t){this.enabled!==!1&&t.preventDefault()}function mS(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function vS(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class gS{constructor(e){this.host=e,this.scene=new kv,this.scene.background=new _t("#101924"),this.camera=new kn(38,1,.1,1e4),this.camera.up.set(0,0,1),this.renderer=new Ly({antialias:!0,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.renderer.setClearColor("#101924"),e.replaceChildren(this.renderer.domElement),this.controls=new iS(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.scene.add(new Xv(16777215,2241348,2.4));const n=new Yv(16777215,3);n.position.set(200,-200,400),this.scene.add(n),this.group=new Fa,this.scene.add(this.group),this.resize=new ResizeObserver(()=>{let r=e.clientWidth,i=e.clientHeight||450;this.camera.aspect=r/i,this.camera.updateProjectionMatrix(),this.renderer.setSize(r,i,!1)}),this.resize.observe(e),this.renderer.setAnimationLoop(()=>{this.controls.update(),this.renderer.render(this.scene,this.camera)})}set(e){for(const n of[...this.group.children])n.geometry.dispose(),n.material.dispose(),this.group.remove(n);for(const n of e){const r=new di;r.setAttribute("position",new oi(n.vertices.flat(),3)),r.setIndex(n.triangles),r.computeVertexNormals();const i=new hr(r,new Hv({color:n.color||"#3ce0c1",roughness:.4,metalness:.12,flatShading:!0}));this.group.add(i)}this.parts=e,this.fit()}fit(){if(!this.group.children.length)return;const e=new ga().setFromObject(this.group),n=e.getCenter(new q),r=e.getSize(new q),i=Math.max(...r.toArray())*1.9;this.controls.target.copy(n),this.camera.position.copy(n).add(new q(i,-i,i*.8)),this.camera.near=.1,this.camera.far=i*30,this.camera.updateProjectionMatrix(),this.controls.update()}wire(e){for(const n of this.group.children)n.material.wireframe=e}night(e){for(const n of this.group.children)n.material.emissive.set(e?"#d28a32":"#000000"),n.material.emissiveIntensity=e?.4:0}dispose(){this.resize.disconnect(),this.renderer.setAnimationLoop(null),this.controls.dispose();for(const e of this.group.children)e.geometry.dispose(),e.material.dispose();this.renderer.dispose()}}/*! https://mths.be/codepointat v0.2.0 by @mathias */String.prototype.codePointAt||function(){var t=function(){try{var n={},r=Object.defineProperty,i=r(n,n,n)&&r}catch{}return i}(),e=function(n){if(this==null)throw TypeError();var r=String(this),i=r.length,a=n?Number(n):0;if(a!=a&&(a=0),!(a<0||a>=i)){var s=r.charCodeAt(a),o;return s>=55296&&s<=56319&&i>a+1&&(o=r.charCodeAt(a+1),o>=56320&&o<=57343)?(s-55296)*1024+o-56320+65536:s}};t?t(String.prototype,"codePointAt",{value:e,configurable:!0,writable:!0}):String.prototype.codePointAt=e}();var qc=0,sd=-3;function Wa(){this.table=new Uint16Array(16),this.trans=new Uint16Array(288)}function _S(t,e){this.source=t,this.sourceIndex=0,this.tag=0,this.bitcount=0,this.dest=e,this.destLen=0,this.ltree=new Wa,this.dtree=new Wa}var od=new Wa,ld=new Wa,$c=new Uint8Array(30),Yc=new Uint16Array(30),cd=new Uint8Array(30),ud=new Uint16Array(30),xS=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Mf=new Wa,ir=new Uint8Array(320);function fd(t,e,n,r){var i,a;for(i=0;i<n;++i)t[i]=0;for(i=0;i<30-n;++i)t[i+n]=i/n|0;for(a=r,i=0;i<30;++i)e[i]=a,a+=1<<t[i]}function yS(t,e){var n;for(n=0;n<7;++n)t.table[n]=0;for(t.table[7]=24,t.table[8]=152,t.table[9]=112,n=0;n<24;++n)t.trans[n]=256+n;for(n=0;n<144;++n)t.trans[24+n]=n;for(n=0;n<8;++n)t.trans[168+n]=280+n;for(n=0;n<112;++n)t.trans[176+n]=144+n;for(n=0;n<5;++n)e.table[n]=0;for(e.table[5]=32,n=0;n<32;++n)e.trans[n]=n}var Ef=new Uint16Array(16);function fl(t,e,n,r){var i,a;for(i=0;i<16;++i)t.table[i]=0;for(i=0;i<r;++i)t.table[e[n+i]]++;for(t.table[0]=0,a=0,i=0;i<16;++i)Ef[i]=a,a+=t.table[i];for(i=0;i<r;++i)e[n+i]&&(t.trans[Ef[e[n+i]]++]=i)}function SS(t){t.bitcount--||(t.tag=t.source[t.sourceIndex++],t.bitcount=7);var e=t.tag&1;return t.tag>>>=1,e}function ar(t,e,n){if(!e)return n;for(;t.bitcount<24;)t.tag|=t.source[t.sourceIndex++]<<t.bitcount,t.bitcount+=8;var r=t.tag&65535>>>16-e;return t.tag>>>=e,t.bitcount-=e,r+n}function _c(t,e){for(;t.bitcount<24;)t.tag|=t.source[t.sourceIndex++]<<t.bitcount,t.bitcount+=8;var n=0,r=0,i=0,a=t.tag;do r=2*r+(a&1),a>>>=1,++i,n+=e.table[i],r-=e.table[i];while(r>=0);return t.tag=a,t.bitcount-=i,e.trans[n+r]}function bS(t,e,n){var r,i,a,s,o,l;for(r=ar(t,5,257),i=ar(t,5,1),a=ar(t,4,4),s=0;s<19;++s)ir[s]=0;for(s=0;s<a;++s){var c=ar(t,3,0);ir[xS[s]]=c}for(fl(Mf,ir,0,19),o=0;o<r+i;){var u=_c(t,Mf);switch(u){case 16:var h=ir[o-1];for(l=ar(t,2,3);l;--l)ir[o++]=h;break;case 17:for(l=ar(t,3,3);l;--l)ir[o++]=0;break;case 18:for(l=ar(t,7,11);l;--l)ir[o++]=0;break;default:ir[o++]=u;break}}fl(e,ir,0,r),fl(n,ir,r,i)}function Tf(t,e,n){for(;;){var r=_c(t,e);if(r===256)return qc;if(r<256)t.dest[t.destLen++]=r;else{var i,a,s,o;for(r-=257,i=ar(t,$c[r],Yc[r]),a=_c(t,n),s=t.destLen-ar(t,cd[a],ud[a]),o=s;o<s+i;++o)t.dest[t.destLen++]=t.dest[o]}}}function MS(t){for(var e,n,r;t.bitcount>8;)t.sourceIndex--,t.bitcount-=8;if(e=t.source[t.sourceIndex+1],e=256*e+t.source[t.sourceIndex],n=t.source[t.sourceIndex+3],n=256*n+t.source[t.sourceIndex+2],e!==(~n&65535))return sd;for(t.sourceIndex+=4,r=e;r;--r)t.dest[t.destLen++]=t.source[t.sourceIndex++];return t.bitcount=0,qc}function ES(t,e){var n=new _S(t,e),r,i,a;do{switch(r=SS(n),i=ar(n,2,0),i){case 0:a=MS(n);break;case 1:a=Tf(n,od,ld);break;case 2:bS(n,n.ltree,n.dtree),a=Tf(n,n.ltree,n.dtree);break;default:a=sd}if(a!==qc)throw new Error("Data error")}while(!r);return n.destLen<n.dest.length?typeof n.dest.slice=="function"?n.dest.slice(0,n.destLen):n.dest.subarray(0,n.destLen):n.dest}yS(od,ld);fd($c,Yc,4,3);fd(cd,ud,2,1);$c[28]=0;Yc[28]=258;var TS=ES;function na(t,e,n,r,i){return Math.pow(1-i,3)*t+3*Math.pow(1-i,2)*i*e+3*(1-i)*Math.pow(i,2)*n+Math.pow(i,3)*r}function Gr(){this.x1=Number.NaN,this.y1=Number.NaN,this.x2=Number.NaN,this.y2=Number.NaN}Gr.prototype.isEmpty=function(){return isNaN(this.x1)||isNaN(this.y1)||isNaN(this.x2)||isNaN(this.y2)};Gr.prototype.addPoint=function(t,e){typeof t=="number"&&((isNaN(this.x1)||isNaN(this.x2))&&(this.x1=t,this.x2=t),t<this.x1&&(this.x1=t),t>this.x2&&(this.x2=t)),typeof e=="number"&&((isNaN(this.y1)||isNaN(this.y2))&&(this.y1=e,this.y2=e),e<this.y1&&(this.y1=e),e>this.y2&&(this.y2=e))};Gr.prototype.addX=function(t){this.addPoint(t,null)};Gr.prototype.addY=function(t){this.addPoint(null,t)};Gr.prototype.addBezier=function(t,e,n,r,i,a,s,o){var l=[t,e],c=[n,r],u=[i,a],h=[s,o];this.addPoint(t,e),this.addPoint(s,o);for(var f=0;f<=1;f++){var p=6*l[f]-12*c[f]+6*u[f],_=-3*l[f]+9*c[f]-9*u[f]+3*h[f],x=3*c[f]-3*l[f];if(_===0){if(p===0)continue;var m=-x/p;0<m&&m<1&&(f===0&&this.addX(na(l[f],c[f],u[f],h[f],m)),f===1&&this.addY(na(l[f],c[f],u[f],h[f],m)));continue}var d=Math.pow(p,2)-4*x*_;if(!(d<0)){var w=(-p+Math.sqrt(d))/(2*_);0<w&&w<1&&(f===0&&this.addX(na(l[f],c[f],u[f],h[f],w)),f===1&&this.addY(na(l[f],c[f],u[f],h[f],w)));var b=(-p-Math.sqrt(d))/(2*_);0<b&&b<1&&(f===0&&this.addX(na(l[f],c[f],u[f],h[f],b)),f===1&&this.addY(na(l[f],c[f],u[f],h[f],b)))}}};Gr.prototype.addQuad=function(t,e,n,r,i,a){var s=t+.6666666666666666*(n-t),o=e+2/3*(r-e),l=s+1/3*(i-t),c=o+1/3*(a-e);this.addBezier(t,e,s,o,l,c,i,a)};function Kt(){this.commands=[],this.fill="black",this.stroke=null,this.strokeWidth=1}Kt.prototype.moveTo=function(t,e){this.commands.push({type:"M",x:t,y:e})};Kt.prototype.lineTo=function(t,e){this.commands.push({type:"L",x:t,y:e})};Kt.prototype.curveTo=Kt.prototype.bezierCurveTo=function(t,e,n,r,i,a){this.commands.push({type:"C",x1:t,y1:e,x2:n,y2:r,x:i,y:a})};Kt.prototype.quadTo=Kt.prototype.quadraticCurveTo=function(t,e,n,r){this.commands.push({type:"Q",x1:t,y1:e,x:n,y:r})};Kt.prototype.close=Kt.prototype.closePath=function(){this.commands.push({type:"Z"})};Kt.prototype.extend=function(t){if(t.commands)t=t.commands;else if(t instanceof Gr){var e=t;this.moveTo(e.x1,e.y1),this.lineTo(e.x2,e.y1),this.lineTo(e.x2,e.y2),this.lineTo(e.x1,e.y2),this.close();return}Array.prototype.push.apply(this.commands,t)};Kt.prototype.getBoundingBox=function(){for(var t=new Gr,e=0,n=0,r=0,i=0,a=0;a<this.commands.length;a++){var s=this.commands[a];switch(s.type){case"M":t.addPoint(s.x,s.y),e=r=s.x,n=i=s.y;break;case"L":t.addPoint(s.x,s.y),r=s.x,i=s.y;break;case"Q":t.addQuad(r,i,s.x1,s.y1,s.x,s.y),r=s.x,i=s.y;break;case"C":t.addBezier(r,i,s.x1,s.y1,s.x2,s.y2,s.x,s.y),r=s.x,i=s.y;break;case"Z":r=e,i=n;break;default:throw new Error("Unexpected path command "+s.type)}}return t.isEmpty()&&t.addPoint(0,0),t};Kt.prototype.draw=function(t){t.beginPath();for(var e=0;e<this.commands.length;e+=1){var n=this.commands[e];n.type==="M"?t.moveTo(n.x,n.y):n.type==="L"?t.lineTo(n.x,n.y):n.type==="C"?t.bezierCurveTo(n.x1,n.y1,n.x2,n.y2,n.x,n.y):n.type==="Q"?t.quadraticCurveTo(n.x1,n.y1,n.x,n.y):n.type==="Z"&&t.closePath()}this.fill&&(t.fillStyle=this.fill,t.fill()),this.stroke&&(t.strokeStyle=this.stroke,t.lineWidth=this.strokeWidth,t.stroke())};Kt.prototype.toPathData=function(t){t=t!==void 0?t:2;function e(s){return Math.round(s)===s?""+Math.round(s):s.toFixed(t)}function n(){for(var s=arguments,o="",l=0;l<arguments.length;l+=1){var c=s[l];c>=0&&l>0&&(o+=" "),o+=e(c)}return o}for(var r="",i=0;i<this.commands.length;i+=1){var a=this.commands[i];a.type==="M"?r+="M"+n(a.x,a.y):a.type==="L"?r+="L"+n(a.x,a.y):a.type==="C"?r+="C"+n(a.x1,a.y1,a.x2,a.y2,a.x,a.y):a.type==="Q"?r+="Q"+n(a.x1,a.y1,a.x,a.y):a.type==="Z"&&(r+="Z")}return r};Kt.prototype.toSVG=function(t){var e='<path d="';return e+=this.toPathData(t),e+='"',this.fill&&this.fill!=="black"&&(this.fill===null?e+=' fill="none"':e+=' fill="'+this.fill+'"'),this.stroke&&(e+=' stroke="'+this.stroke+'" stroke-width="'+this.strokeWidth+'"'),e+="/>",e};Kt.prototype.toDOMElement=function(t){var e=this.toPathData(t),n=document.createElementNS("http://www.w3.org/2000/svg","path");return n.setAttribute("d",e),n};function hd(t){throw new Error(t)}function wf(t,e){t||hd(e)}var Qe={fail:hd,argument:wf,assert:wf},Af=32768,Rf=2147483648,ma={},Ee={},et={};function er(t){return function(){return t}}Ee.BYTE=function(t){return Qe.argument(t>=0&&t<=255,"Byte value should be between 0 and 255."),[t]};et.BYTE=er(1);Ee.CHAR=function(t){return[t.charCodeAt(0)]};et.CHAR=er(1);Ee.CHARARRAY=function(t){typeof t>"u"&&(t="",console.warn("Undefined CHARARRAY encountered and treated as an empty string. This is probably caused by a missing glyph name."));for(var e=[],n=0;n<t.length;n+=1)e[n]=t.charCodeAt(n);return e};et.CHARARRAY=function(t){return typeof t>"u"?0:t.length};Ee.USHORT=function(t){return[t>>8&255,t&255]};et.USHORT=er(2);Ee.SHORT=function(t){return t>=Af&&(t=-(2*Af-t)),[t>>8&255,t&255]};et.SHORT=er(2);Ee.UINT24=function(t){return[t>>16&255,t>>8&255,t&255]};et.UINT24=er(3);Ee.ULONG=function(t){return[t>>24&255,t>>16&255,t>>8&255,t&255]};et.ULONG=er(4);Ee.LONG=function(t){return t>=Rf&&(t=-(2*Rf-t)),[t>>24&255,t>>16&255,t>>8&255,t&255]};et.LONG=er(4);Ee.FIXED=Ee.ULONG;et.FIXED=et.ULONG;Ee.FWORD=Ee.SHORT;et.FWORD=et.SHORT;Ee.UFWORD=Ee.USHORT;et.UFWORD=et.USHORT;Ee.LONGDATETIME=function(t){return[0,0,0,0,t>>24&255,t>>16&255,t>>8&255,t&255]};et.LONGDATETIME=er(8);Ee.TAG=function(t){return Qe.argument(t.length===4,"Tag should be exactly 4 ASCII characters."),[t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2),t.charCodeAt(3)]};et.TAG=er(4);Ee.Card8=Ee.BYTE;et.Card8=et.BYTE;Ee.Card16=Ee.USHORT;et.Card16=et.USHORT;Ee.OffSize=Ee.BYTE;et.OffSize=et.BYTE;Ee.SID=Ee.USHORT;et.SID=et.USHORT;Ee.NUMBER=function(t){return t>=-107&&t<=107?[t+139]:t>=108&&t<=1131?(t=t-108,[(t>>8)+247,t&255]):t>=-1131&&t<=-108?(t=-t-108,[(t>>8)+251,t&255]):t>=-32768&&t<=32767?Ee.NUMBER16(t):Ee.NUMBER32(t)};et.NUMBER=function(t){return Ee.NUMBER(t).length};Ee.NUMBER16=function(t){return[28,t>>8&255,t&255]};et.NUMBER16=er(3);Ee.NUMBER32=function(t){return[29,t>>24&255,t>>16&255,t>>8&255,t&255]};et.NUMBER32=er(5);Ee.REAL=function(t){var e=t.toString(),n=/\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(e);if(n){var r=parseFloat("1e"+((n[2]?+n[2]:0)+n[1].length));e=(Math.round(t*r)/r).toString()}for(var i="",a=0,s=e.length;a<s;a+=1){var o=e[a];o==="e"?i+=e[++a]==="-"?"c":"b":o==="."?i+="a":o==="-"?i+="e":i+=o}i+=i.length&1?"f":"ff";for(var l=[30],c=0,u=i.length;c<u;c+=2)l.push(parseInt(i.substr(c,2),16));return l};et.REAL=function(t){return Ee.REAL(t).length};Ee.NAME=Ee.CHARARRAY;et.NAME=et.CHARARRAY;Ee.STRING=Ee.CHARARRAY;et.STRING=et.CHARARRAY;ma.UTF8=function(t,e,n){for(var r=[],i=n,a=0;a<i;a++,e+=1)r[a]=t.getUint8(e);return String.fromCharCode.apply(null,r)};ma.UTF16=function(t,e,n){for(var r=[],i=n/2,a=0;a<i;a++,e+=2)r[a]=t.getUint16(e);return String.fromCharCode.apply(null,r)};Ee.UTF16=function(t){for(var e=[],n=0;n<t.length;n+=1){var r=t.charCodeAt(n);e[e.length]=r>>8&255,e[e.length]=r&255}return e};et.UTF16=function(t){return t.length*2};var xc={"x-mac-croatian":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č… ÀÃÕŒœĐ—“”‘’÷◊©⁄€‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ","x-mac-cyrillic":"АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю","x-mac-gaelic":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØḂ±≤≥ḃĊċḊḋḞḟĠġṀæøṁṖṗɼƒſṠ«»… ÀÃÕŒœ–—“”‘’ṡẛÿŸṪ€‹›Ŷŷṫ·Ỳỳ⁊ÂÊÁËÈÍÎÏÌÓÔ♣ÒÚÛÙıÝýŴŵẄẅẀẁẂẃ","x-mac-greek":"Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦€ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»… ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ­","x-mac-icelandic":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ","x-mac-inuit":"ᐃᐄᐅᐆᐊᐋᐱᐲᐳᐴᐸᐹᑉᑎᑏᑐᑑᑕᑖᑦᑭᑮᑯᑰᑲᑳᒃᒋᒌᒍᒎᒐᒑ°ᒡᒥᒦ•¶ᒧ®©™ᒨᒪᒫᒻᓂᓃᓄᓅᓇᓈᓐᓯᓰᓱᓲᓴᓵᔅᓕᓖᓗᓘᓚᓛᓪᔨᔩᔪᔫᔭ… ᔮᔾᕕᕖᕗ–—“”‘’ᕘᕙᕚᕝᕆᕇᕈᕉᕋᕌᕐᕿᖀᖁᖂᖃᖄᖅᖏᖐᖑᖒᖓᖔᖕᙱᙲᙳᙴᙵᙶᖖᖠᖡᖢᖣᖤᖥᖦᕼŁł","x-mac-ce":"ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»… ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ",macintosh:"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ","x-mac-romanian":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂȘ∞±≤≥¥µ∂∑∏π∫ªºΩăș¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›Țț‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ","x-mac-turkish":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙˆ˜¯˘˙˚¸˝˛ˇ"};ma.MACSTRING=function(t,e,n,r){var i=xc[r];if(i!==void 0){for(var a="",s=0;s<n;s++){var o=t.getUint8(e+s);o<=127?a+=String.fromCharCode(o):a+=i[o&127]}return a}};var Ds=typeof WeakMap=="function"&&new WeakMap,Us,wS=function(t){if(!Us){Us={};for(var e in xc)Us[e]=new String(e)}var n=Us[t];if(n!==void 0){if(Ds){var r=Ds.get(n);if(r!==void 0)return r}var i=xc[t];if(i!==void 0){for(var a={},s=0;s<i.length;s++)a[i.charCodeAt(s)]=s+128;return Ds&&Ds.set(n,a),a}}};Ee.MACSTRING=function(t,e){var n=wS(e);if(n!==void 0){for(var r=[],i=0;i<t.length;i++){var a=t.charCodeAt(i);if(a>=128&&(a=n[a],a===void 0))return;r[i]=a}return r}};et.MACSTRING=function(t,e){var n=Ee.MACSTRING(t,e);return n!==void 0?n.length:0};function yc(t){return t>=-128&&t<=127}function AS(t,e,n){for(var r=0,i=t.length;e<i&&r<64&&t[e]===0;)++e,++r;return n.push(128|r-1),e}function RS(t,e,n){for(var r=0,i=t.length,a=e;a<i&&r<64;){var s=t[a];if(!yc(s)||s===0&&a+1<i&&t[a+1]===0)break;++a,++r}n.push(r-1);for(var o=e;o<a;++o)n.push(t[o]+256&255);return a}function CS(t,e,n){for(var r=0,i=t.length,a=e;a<i&&r<64;){var s=t[a];if(s===0||yc(s)&&a+1<i&&yc(t[a+1]))break;++a,++r}n.push(64|r-1);for(var o=e;o<a;++o){var l=t[o];n.push(l+65536>>8&255,l+256&255)}return a}Ee.VARDELTAS=function(t){for(var e=0,n=[];e<t.length;){var r=t[e];r===0?e=AS(t,e,n):r>=-128&&r<=127?e=RS(t,e,n):e=CS(t,e,n)}return n};Ee.INDEX=function(t){for(var e=1,n=[e],r=[],i=0;i<t.length;i+=1){var a=Ee.OBJECT(t[i]);Array.prototype.push.apply(r,a),e+=a.length,n.push(e)}if(r.length===0)return[0,0];for(var s=[],o=1+Math.floor(Math.log(e)/Math.log(2))/8|0,l=[void 0,Ee.BYTE,Ee.USHORT,Ee.UINT24,Ee.ULONG][o],c=0;c<n.length;c+=1){var u=l(n[c]);Array.prototype.push.apply(s,u)}return Array.prototype.concat(Ee.Card16(t.length),Ee.OffSize(o),s,r)};et.INDEX=function(t){return Ee.INDEX(t).length};Ee.DICT=function(t){for(var e=[],n=Object.keys(t),r=n.length,i=0;i<r;i+=1){var a=parseInt(n[i],0),s=t[a];e=e.concat(Ee.OPERAND(s.value,s.type)),e=e.concat(Ee.OPERATOR(a))}return e};et.DICT=function(t){return Ee.DICT(t).length};Ee.OPERATOR=function(t){return t<1200?[t]:[12,t-1200]};Ee.OPERAND=function(t,e){var n=[];if(Array.isArray(e))for(var r=0;r<e.length;r+=1)Qe.argument(t.length===e.length,"Not enough arguments given for type"+e),n=n.concat(Ee.OPERAND(t[r],e[r]));else if(e==="SID")n=n.concat(Ee.NUMBER(t));else if(e==="offset")n=n.concat(Ee.NUMBER32(t));else if(e==="number")n=n.concat(Ee.NUMBER(t));else if(e==="real")n=n.concat(Ee.REAL(t));else throw new Error("Unknown operand type "+e);return n};Ee.OP=Ee.BYTE;et.OP=et.BYTE;var Ls=typeof WeakMap=="function"&&new WeakMap;Ee.CHARSTRING=function(t){if(Ls){var e=Ls.get(t);if(e!==void 0)return e}for(var n=[],r=t.length,i=0;i<r;i+=1){var a=t[i];n=n.concat(Ee[a.type](a.value))}return Ls&&Ls.set(t,n),n};et.CHARSTRING=function(t){return Ee.CHARSTRING(t).length};Ee.OBJECT=function(t){var e=Ee[t.type];return Qe.argument(e!==void 0,"No encoding function for type "+t.type),e(t.value)};et.OBJECT=function(t){var e=et[t.type];return Qe.argument(e!==void 0,"No sizeOf function for type "+t.type),e(t.value)};Ee.TABLE=function(t){for(var e=[],n=t.fields.length,r=[],i=[],a=0;a<n;a+=1){var s=t.fields[a],o=Ee[s.type];Qe.argument(o!==void 0,"No encoding function for field type "+s.type+" ("+s.name+")");var l=t[s.name];l===void 0&&(l=s.value);var c=o(l);s.type==="TABLE"?(i.push(e.length),e=e.concat([0,0]),r.push(c)):e=e.concat(c)}for(var u=0;u<r.length;u+=1){var h=i[u],f=e.length;Qe.argument(f<65536,"Table "+t.tableName+" too big."),e[h]=f>>8,e[h+1]=f&255,e=e.concat(r[u])}return e};et.TABLE=function(t){for(var e=0,n=t.fields.length,r=0;r<n;r+=1){var i=t.fields[r],a=et[i.type];Qe.argument(a!==void 0,"No sizeOf function for field type "+i.type+" ("+i.name+")");var s=t[i.name];s===void 0&&(s=i.value),e+=a(s),i.type==="TABLE"&&(e+=2)}return e};Ee.RECORD=Ee.TABLE;et.RECORD=et.TABLE;Ee.LITERAL=function(t){return t};et.LITERAL=function(t){return t.length};function sn(t,e,n){if(e.length&&(e[0].name!=="coverageFormat"||e[0].value===1))for(var r=0;r<e.length;r+=1){var i=e[r];this[i.name]=i.value}if(this.tableName=t,this.fields=e,n)for(var a=Object.keys(n),s=0;s<a.length;s+=1){var o=a[s],l=n[o];this[o]!==void 0&&(this[o]=l)}}sn.prototype.encode=function(){return Ee.TABLE(this)};sn.prototype.sizeOf=function(){return et.TABLE(this)};function Xa(t,e,n){n===void 0&&(n=e.length);var r=new Array(e.length+1);r[0]={name:t+"Count",type:"USHORT",value:n};for(var i=0;i<e.length;i++)r[i+1]={name:t+i,type:"USHORT",value:e[i]};return r}function Sc(t,e,n){var r=e.length,i=new Array(r+1);i[0]={name:t+"Count",type:"USHORT",value:r};for(var a=0;a<r;a++)i[a+1]={name:t+a,type:"TABLE",value:n(e[a],a)};return i}function qa(t,e,n){var r=e.length,i=[];i[0]={name:t+"Count",type:"USHORT",value:r};for(var a=0;a<r;a++)i=i.concat(n(e[a],a));return i}function Ks(t){t.format===1?sn.call(this,"coverageTable",[{name:"coverageFormat",type:"USHORT",value:1}].concat(Xa("glyph",t.glyphs))):t.format===2?sn.call(this,"coverageTable",[{name:"coverageFormat",type:"USHORT",value:2}].concat(qa("rangeRecord",t.ranges,function(e){return[{name:"startGlyphID",type:"USHORT",value:e.start},{name:"endGlyphID",type:"USHORT",value:e.end},{name:"startCoverageIndex",type:"USHORT",value:e.index}]}))):Qe.assert(!1,"Coverage format must be 1 or 2.")}Ks.prototype=Object.create(sn.prototype);Ks.prototype.constructor=Ks;function Js(t){sn.call(this,"scriptListTable",qa("scriptRecord",t,function(e,n){var r=e.script,i=r.defaultLangSys;return Qe.assert(!!i,"Unable to write GSUB: script "+e.tag+" has no default language system."),[{name:"scriptTag"+n,type:"TAG",value:e.tag},{name:"script"+n,type:"TABLE",value:new sn("scriptTable",[{name:"defaultLangSys",type:"TABLE",value:new sn("defaultLangSys",[{name:"lookupOrder",type:"USHORT",value:0},{name:"reqFeatureIndex",type:"USHORT",value:i.reqFeatureIndex}].concat(Xa("featureIndex",i.featureIndexes)))}].concat(qa("langSys",r.langSysRecords,function(a,s){var o=a.langSys;return[{name:"langSysTag"+s,type:"TAG",value:a.tag},{name:"langSys"+s,type:"TABLE",value:new sn("langSys",[{name:"lookupOrder",type:"USHORT",value:0},{name:"reqFeatureIndex",type:"USHORT",value:o.reqFeatureIndex}].concat(Xa("featureIndex",o.featureIndexes)))}]})))}]}))}Js.prototype=Object.create(sn.prototype);Js.prototype.constructor=Js;function Qs(t){sn.call(this,"featureListTable",qa("featureRecord",t,function(e,n){var r=e.feature;return[{name:"featureTag"+n,type:"TAG",value:e.tag},{name:"feature"+n,type:"TABLE",value:new sn("featureTable",[{name:"featureParams",type:"USHORT",value:r.featureParams}].concat(Xa("lookupListIndex",r.lookupListIndexes)))}]}))}Qs.prototype=Object.create(sn.prototype);Qs.prototype.constructor=Qs;function eo(t,e){sn.call(this,"lookupListTable",Sc("lookup",t,function(n){var r=e[n.lookupType];return Qe.assert(!!r,"Unable to write GSUB lookup type "+n.lookupType+" tables."),new sn("lookupTable",[{name:"lookupType",type:"USHORT",value:n.lookupType},{name:"lookupFlag",type:"USHORT",value:n.lookupFlag}].concat(Sc("subtable",n.subtables,r)))}))}eo.prototype=Object.create(sn.prototype);eo.prototype.constructor=eo;var De={Table:sn,Record:sn,Coverage:Ks,ScriptList:Js,FeatureList:Qs,LookupList:eo,ushortList:Xa,tableList:Sc,recordList:qa};function Cf(t,e){return t.getUint8(e)}function to(t,e){return t.getUint16(e,!1)}function PS(t,e){return t.getInt16(e,!1)}function jc(t,e){return t.getUint32(e,!1)}function dd(t,e){var n=t.getInt16(e,!1),r=t.getUint16(e+2,!1);return n+r/65535}function DS(t,e){for(var n="",r=e;r<e+4;r+=1)n+=String.fromCharCode(t.getInt8(r));return n}function US(t,e,n){for(var r=0,i=0;i<n;i+=1)r<<=8,r+=t.getUint8(e+i);return r}function LS(t,e,n){for(var r=[],i=e;i<n;i+=1)r.push(t.getUint8(i));return r}function FS(t){for(var e="",n=0;n<t.length;n+=1)e+=String.fromCharCode(t[n]);return e}var IS={byte:1,uShort:2,short:2,uLong:4,fixed:4,longDateTime:8,tag:4};function j(t,e){this.data=t,this.offset=e,this.relativeOffset=0}j.prototype.parseByte=function(){var t=this.data.getUint8(this.offset+this.relativeOffset);return this.relativeOffset+=1,t};j.prototype.parseChar=function(){var t=this.data.getInt8(this.offset+this.relativeOffset);return this.relativeOffset+=1,t};j.prototype.parseCard8=j.prototype.parseByte;j.prototype.parseUShort=function(){var t=this.data.getUint16(this.offset+this.relativeOffset);return this.relativeOffset+=2,t};j.prototype.parseCard16=j.prototype.parseUShort;j.prototype.parseSID=j.prototype.parseUShort;j.prototype.parseOffset16=j.prototype.parseUShort;j.prototype.parseShort=function(){var t=this.data.getInt16(this.offset+this.relativeOffset);return this.relativeOffset+=2,t};j.prototype.parseF2Dot14=function(){var t=this.data.getInt16(this.offset+this.relativeOffset)/16384;return this.relativeOffset+=2,t};j.prototype.parseULong=function(){var t=jc(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,t};j.prototype.parseOffset32=j.prototype.parseULong;j.prototype.parseFixed=function(){var t=dd(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,t};j.prototype.parseString=function(t){var e=this.data,n=this.offset+this.relativeOffset,r="";this.relativeOffset+=t;for(var i=0;i<t;i++)r+=String.fromCharCode(e.getUint8(n+i));return r};j.prototype.parseTag=function(){return this.parseString(4)};j.prototype.parseLongDateTime=function(){var t=jc(this.data,this.offset+this.relativeOffset+4);return t-=2082844800,this.relativeOffset+=8,t};j.prototype.parseVersion=function(t){var e=to(this.data,this.offset+this.relativeOffset),n=to(this.data,this.offset+this.relativeOffset+2);return this.relativeOffset+=4,t===void 0&&(t=4096),e+n/t/10};j.prototype.skip=function(t,e){e===void 0&&(e=1),this.relativeOffset+=IS[t]*e};j.prototype.parseULongList=function(t){t===void 0&&(t=this.parseULong());for(var e=new Array(t),n=this.data,r=this.offset+this.relativeOffset,i=0;i<t;i++)e[i]=n.getUint32(r),r+=4;return this.relativeOffset+=t*4,e};j.prototype.parseOffset16List=j.prototype.parseUShortList=function(t){t===void 0&&(t=this.parseUShort());for(var e=new Array(t),n=this.data,r=this.offset+this.relativeOffset,i=0;i<t;i++)e[i]=n.getUint16(r),r+=2;return this.relativeOffset+=t*2,e};j.prototype.parseShortList=function(t){for(var e=new Array(t),n=this.data,r=this.offset+this.relativeOffset,i=0;i<t;i++)e[i]=n.getInt16(r),r+=2;return this.relativeOffset+=t*2,e};j.prototype.parseByteList=function(t){for(var e=new Array(t),n=this.data,r=this.offset+this.relativeOffset,i=0;i<t;i++)e[i]=n.getUint8(r++);return this.relativeOffset+=t,e};j.prototype.parseList=function(t,e){e||(e=t,t=this.parseUShort());for(var n=new Array(t),r=0;r<t;r++)n[r]=e.call(this);return n};j.prototype.parseList32=function(t,e){e||(e=t,t=this.parseULong());for(var n=new Array(t),r=0;r<t;r++)n[r]=e.call(this);return n};j.prototype.parseRecordList=function(t,e){e||(e=t,t=this.parseUShort());for(var n=new Array(t),r=Object.keys(e),i=0;i<t;i++){for(var a={},s=0;s<r.length;s++){var o=r[s],l=e[o];a[o]=l.call(this)}n[i]=a}return n};j.prototype.parseRecordList32=function(t,e){e||(e=t,t=this.parseULong());for(var n=new Array(t),r=Object.keys(e),i=0;i<t;i++){for(var a={},s=0;s<r.length;s++){var o=r[s],l=e[o];a[o]=l.call(this)}n[i]=a}return n};j.prototype.parseStruct=function(t){if(typeof t=="function")return t.call(this);for(var e=Object.keys(t),n={},r=0;r<e.length;r++){var i=e[r],a=t[i];n[i]=a.call(this)}return n};j.prototype.parseValueRecord=function(t){if(t===void 0&&(t=this.parseUShort()),t!==0){var e={};return t&1&&(e.xPlacement=this.parseShort()),t&2&&(e.yPlacement=this.parseShort()),t&4&&(e.xAdvance=this.parseShort()),t&8&&(e.yAdvance=this.parseShort()),t&16&&(e.xPlaDevice=void 0,this.parseShort()),t&32&&(e.yPlaDevice=void 0,this.parseShort()),t&64&&(e.xAdvDevice=void 0,this.parseShort()),t&128&&(e.yAdvDevice=void 0,this.parseShort()),e}};j.prototype.parseValueRecordList=function(){for(var t=this.parseUShort(),e=this.parseUShort(),n=new Array(e),r=0;r<e;r++)n[r]=this.parseValueRecord(t);return n};j.prototype.parsePointer=function(t){var e=this.parseOffset16();if(e>0)return new j(this.data,this.offset+e).parseStruct(t)};j.prototype.parsePointer32=function(t){var e=this.parseOffset32();if(e>0)return new j(this.data,this.offset+e).parseStruct(t)};j.prototype.parseListOfLists=function(t){for(var e=this.parseOffset16List(),n=e.length,r=this.relativeOffset,i=new Array(n),a=0;a<n;a++){var s=e[a];if(s===0){i[a]=void 0;continue}if(this.relativeOffset=s,t){for(var o=this.parseOffset16List(),l=new Array(o.length),c=0;c<o.length;c++)this.relativeOffset=s+o[c],l[c]=t.call(this);i[a]=l}else i[a]=this.parseUShortList()}return this.relativeOffset=r,i};j.prototype.parseCoverage=function(){var t=this.offset+this.relativeOffset,e=this.parseUShort(),n=this.parseUShort();if(e===1)return{format:1,glyphs:this.parseUShortList(n)};if(e===2){for(var r=new Array(n),i=0;i<n;i++)r[i]={start:this.parseUShort(),end:this.parseUShort(),index:this.parseUShort()};return{format:2,ranges:r}}throw new Error("0x"+t.toString(16)+": Coverage format must be 1 or 2.")};j.prototype.parseClassDef=function(){var t=this.offset+this.relativeOffset,e=this.parseUShort();if(e===1)return{format:1,startGlyph:this.parseUShort(),classes:this.parseUShortList()};if(e===2)return{format:2,ranges:this.parseRecordList({start:j.uShort,end:j.uShort,classId:j.uShort})};throw new Error("0x"+t.toString(16)+": ClassDef format must be 1 or 2.")};j.list=function(t,e){return function(){return this.parseList(t,e)}};j.list32=function(t,e){return function(){return this.parseList32(t,e)}};j.recordList=function(t,e){return function(){return this.parseRecordList(t,e)}};j.recordList32=function(t,e){return function(){return this.parseRecordList32(t,e)}};j.pointer=function(t){return function(){return this.parsePointer(t)}};j.pointer32=function(t){return function(){return this.parsePointer32(t)}};j.tag=j.prototype.parseTag;j.byte=j.prototype.parseByte;j.uShort=j.offset16=j.prototype.parseUShort;j.uShortList=j.prototype.parseUShortList;j.uLong=j.offset32=j.prototype.parseULong;j.uLongList=j.prototype.parseULongList;j.struct=j.prototype.parseStruct;j.coverage=j.prototype.parseCoverage;j.classDef=j.prototype.parseClassDef;var Pf={reserved:j.uShort,reqFeatureIndex:j.uShort,featureIndexes:j.uShortList};j.prototype.parseScriptList=function(){return this.parsePointer(j.recordList({tag:j.tag,script:j.pointer({defaultLangSys:j.pointer(Pf),langSysRecords:j.recordList({tag:j.tag,langSys:j.pointer(Pf)})})}))||[]};j.prototype.parseFeatureList=function(){return this.parsePointer(j.recordList({tag:j.tag,feature:j.pointer({featureParams:j.offset16,lookupListIndexes:j.uShortList})}))||[]};j.prototype.parseLookupList=function(t){return this.parsePointer(j.list(j.pointer(function(){var e=this.parseUShort();Qe.argument(1<=e&&e<=9,"GPOS/GSUB lookup type "+e+" unknown.");var n=this.parseUShort(),r=n&16;return{lookupType:e,lookupFlag:n,subtables:this.parseList(j.pointer(t[e])),markFilteringSet:r?this.parseUShort():void 0}})))||[]};j.prototype.parseFeatureVariationsList=function(){return this.parsePointer32(function(){var t=this.parseUShort(),e=this.parseUShort();Qe.argument(t===1&&e<1,"GPOS/GSUB feature variations table unknown.");var n=this.parseRecordList32({conditionSetOffset:j.offset32,featureTableSubstitutionOffset:j.offset32});return n})||[]};var ke={getByte:Cf,getCard8:Cf,getUShort:to,getCard16:to,getShort:PS,getULong:jc,getFixed:dd,getTag:DS,getOffset:US,getBytes:LS,bytesToString:FS,Parser:j};function OS(t,e){e.parseUShort(),t.length=e.parseULong(),t.language=e.parseULong();var n;t.groupCount=n=e.parseULong(),t.glyphIndexMap={};for(var r=0;r<n;r+=1)for(var i=e.parseULong(),a=e.parseULong(),s=e.parseULong(),o=i;o<=a;o+=1)t.glyphIndexMap[o]=s,s++}function NS(t,e,n,r,i){t.length=e.parseUShort(),t.language=e.parseUShort();var a;t.segCount=a=e.parseUShort()>>1,e.skip("uShort",3),t.glyphIndexMap={};for(var s=new ke.Parser(n,r+i+14),o=new ke.Parser(n,r+i+16+a*2),l=new ke.Parser(n,r+i+16+a*4),c=new ke.Parser(n,r+i+16+a*6),u=r+i+16+a*8,h=0;h<a-1;h+=1)for(var f=void 0,p=s.parseUShort(),_=o.parseUShort(),x=l.parseShort(),m=c.parseUShort(),d=_;d<=p;d+=1)m!==0?(u=c.offset+c.relativeOffset-2,u+=m,u+=(d-_)*2,f=ke.getUShort(n,u),f!==0&&(f=f+x&65535)):f=d+x&65535,t.glyphIndexMap[d]=f}function kS(t,e){var n={};n.version=ke.getUShort(t,e),Qe.argument(n.version===0,"cmap table version should be 0."),n.numTables=ke.getUShort(t,e+2);for(var r=-1,i=n.numTables-1;i>=0;i-=1){var a=ke.getUShort(t,e+4+i*8),s=ke.getUShort(t,e+4+i*8+2);if(a===3&&(s===0||s===1||s===10)||a===0&&(s===0||s===1||s===2||s===3||s===4)){r=ke.getULong(t,e+4+i*8+4);break}}if(r===-1)throw new Error("No valid cmap sub-tables found.");var o=new ke.Parser(t,e+r);if(n.format=o.parseUShort(),n.format===12)OS(n,o);else if(n.format===4)NS(n,o,t,e,r);else throw new Error("Only format 4 and 12 cmap tables are supported (found format "+n.format+").");return n}function BS(t,e,n){t.segments.push({end:e,start:e,delta:-(e-n),offset:0,glyphIndex:n})}function GS(t){t.segments.push({end:65535,start:65535,delta:1,offset:0})}function zS(t){var e=!0,n;for(n=t.length-1;n>0;n-=1){var r=t.get(n);if(r.unicode>65535){console.log("Adding CMAP format 12 (needed!)"),e=!1;break}}var i=[{name:"version",type:"USHORT",value:0},{name:"numTables",type:"USHORT",value:e?1:2},{name:"platformID",type:"USHORT",value:3},{name:"encodingID",type:"USHORT",value:1},{name:"offset",type:"ULONG",value:e?12:20}];e||(i=i.concat([{name:"cmap12PlatformID",type:"USHORT",value:3},{name:"cmap12EncodingID",type:"USHORT",value:10},{name:"cmap12Offset",type:"ULONG",value:0}])),i=i.concat([{name:"format",type:"USHORT",value:4},{name:"cmap4Length",type:"USHORT",value:0},{name:"language",type:"USHORT",value:0},{name:"segCountX2",type:"USHORT",value:0},{name:"searchRange",type:"USHORT",value:0},{name:"entrySelector",type:"USHORT",value:0},{name:"rangeShift",type:"USHORT",value:0}]);var a=new De.Table("cmap",i);for(a.segments=[],n=0;n<t.length;n+=1){for(var s=t.get(n),o=0;o<s.unicodes.length;o+=1)BS(a,s.unicodes[o],n);a.segments=a.segments.sort(function(w,b){return w.start-b.start})}GS(a);var l=a.segments.length,c=0,u=[],h=[],f=[],p=[],_=[],x=[];for(n=0;n<l;n+=1){var m=a.segments[n];m.end<=65535&&m.start<=65535?(u=u.concat({name:"end_"+n,type:"USHORT",value:m.end}),h=h.concat({name:"start_"+n,type:"USHORT",value:m.start}),f=f.concat({name:"idDelta_"+n,type:"SHORT",value:m.delta}),p=p.concat({name:"idRangeOffset_"+n,type:"USHORT",value:m.offset}),m.glyphId!==void 0&&(_=_.concat({name:"glyph_"+n,type:"USHORT",value:m.glyphId}))):c+=1,!e&&m.glyphIndex!==void 0&&(x=x.concat({name:"cmap12Start_"+n,type:"ULONG",value:m.start}),x=x.concat({name:"cmap12End_"+n,type:"ULONG",value:m.end}),x=x.concat({name:"cmap12Glyph_"+n,type:"ULONG",value:m.glyphIndex}))}if(a.segCountX2=(l-c)*2,a.searchRange=Math.pow(2,Math.floor(Math.log(l-c)/Math.log(2)))*2,a.entrySelector=Math.log(a.searchRange/2)/Math.log(2),a.rangeShift=a.segCountX2-a.searchRange,a.fields=a.fields.concat(u),a.fields.push({name:"reservedPad",type:"USHORT",value:0}),a.fields=a.fields.concat(h),a.fields=a.fields.concat(f),a.fields=a.fields.concat(p),a.fields=a.fields.concat(_),a.cmap4Length=14+u.length*2+2+h.length*2+f.length*2+p.length*2+_.length*2,!e){var d=16+x.length*4;a.cmap12Offset=12+2*2+4+a.cmap4Length,a.fields=a.fields.concat([{name:"cmap12Format",type:"USHORT",value:12},{name:"cmap12Reserved",type:"USHORT",value:0},{name:"cmap12Length",type:"ULONG",value:d},{name:"cmap12Language",type:"ULONG",value:0},{name:"cmap12nGroups",type:"ULONG",value:x.length/3}]),a.fields=a.fields.concat(x)}return a}var pd={parse:kS,make:zS},Ws=[".notdef","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","endash","dagger","daggerdbl","periodcentered","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","questiondown","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","ring","cedilla","hungarumlaut","ogonek","caron","emdash","AE","ordfeminine","Lslash","Oslash","OE","ordmasculine","ae","dotlessi","lslash","oslash","oe","germandbls","onesuperior","logicalnot","mu","trademark","Eth","onehalf","plusminus","Thorn","onequarter","divide","brokenbar","degree","thorn","threequarters","twosuperior","registered","minus","eth","multiply","threesuperior","copyright","Aacute","Acircumflex","Adieresis","Agrave","Aring","Atilde","Ccedilla","Eacute","Ecircumflex","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Ntilde","Oacute","Ocircumflex","Odieresis","Ograve","Otilde","Scaron","Uacute","Ucircumflex","Udieresis","Ugrave","Yacute","Ydieresis","Zcaron","aacute","acircumflex","adieresis","agrave","aring","atilde","ccedilla","eacute","ecircumflex","edieresis","egrave","iacute","icircumflex","idieresis","igrave","ntilde","oacute","ocircumflex","odieresis","ograve","otilde","scaron","uacute","ucircumflex","udieresis","ugrave","yacute","ydieresis","zcaron","exclamsmall","Hungarumlautsmall","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","266 ff","onedotenleader","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","commasuperior","threequartersemdash","periodsuperior","questionsmall","asuperior","bsuperior","centsuperior","dsuperior","esuperior","isuperior","lsuperior","msuperior","nsuperior","osuperior","rsuperior","ssuperior","tsuperior","ff","ffi","ffl","parenleftinferior","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","exclamdownsmall","centoldstyle","Lslashsmall","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","Dotaccentsmall","Macronsmall","figuredash","hypheninferior","Ogoneksmall","Ringsmall","Cedillasmall","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","zerosuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall","001.000","001.001","001.002","001.003","Black","Bold","Book","Light","Medium","Regular","Roman","Semibold"],HS=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","","endash","dagger","daggerdbl","periodcentered","","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","","questiondown","","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","","ring","cedilla","","hungarumlaut","ogonek","caron","emdash","","","","","","","","","","","","","","","","","AE","","ordfeminine","","","","","Lslash","Oslash","OE","ordmasculine","","","","","","ae","","","","dotlessi","","","lslash","oslash","oe","germandbls"],VS=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclamsmall","Hungarumlautsmall","","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","commasuperior","threequartersemdash","periodsuperior","questionsmall","","asuperior","bsuperior","centsuperior","dsuperior","esuperior","","","isuperior","","","lsuperior","msuperior","nsuperior","osuperior","","","rsuperior","ssuperior","tsuperior","","ff","fi","fl","ffi","ffl","parenleftinferior","","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdownsmall","centoldstyle","Lslashsmall","","","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","","Dotaccentsmall","","","Macronsmall","","","figuredash","hypheninferior","","","Ogoneksmall","Ringsmall","Cedillasmall","","","","onequarter","onehalf","threequarters","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","","","zerosuperior","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall"],Ai=[".notdef",".null","nonmarkingreturn","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quotesingle","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","grave","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","Adieresis","Aring","Ccedilla","Eacute","Ntilde","Odieresis","Udieresis","aacute","agrave","acircumflex","adieresis","atilde","aring","ccedilla","eacute","egrave","ecircumflex","edieresis","iacute","igrave","icircumflex","idieresis","ntilde","oacute","ograve","ocircumflex","odieresis","otilde","uacute","ugrave","ucircumflex","udieresis","dagger","degree","cent","sterling","section","bullet","paragraph","germandbls","registered","copyright","trademark","acute","dieresis","notequal","AE","Oslash","infinity","plusminus","lessequal","greaterequal","yen","mu","partialdiff","summation","product","pi","integral","ordfeminine","ordmasculine","Omega","ae","oslash","questiondown","exclamdown","logicalnot","radical","florin","approxequal","Delta","guillemotleft","guillemotright","ellipsis","nonbreakingspace","Agrave","Atilde","Otilde","OE","oe","endash","emdash","quotedblleft","quotedblright","quoteleft","quoteright","divide","lozenge","ydieresis","Ydieresis","fraction","currency","guilsinglleft","guilsinglright","fi","fl","daggerdbl","periodcentered","quotesinglbase","quotedblbase","perthousand","Acircumflex","Ecircumflex","Aacute","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Oacute","Ocircumflex","apple","Ograve","Uacute","Ucircumflex","Ugrave","dotlessi","circumflex","tilde","macron","breve","dotaccent","ring","cedilla","hungarumlaut","ogonek","caron","Lslash","lslash","Scaron","scaron","Zcaron","zcaron","brokenbar","Eth","eth","Yacute","yacute","Thorn","thorn","minus","multiply","onesuperior","twosuperior","threesuperior","onehalf","onequarter","threequarters","franc","Gbreve","gbreve","Idotaccent","Scedilla","scedilla","Cacute","cacute","Ccaron","ccaron","dcroat"];function md(t){this.font=t}md.prototype.charToGlyphIndex=function(t){var e=t.codePointAt(0),n=this.font.glyphs;if(n){for(var r=0;r<n.length;r+=1)for(var i=n.get(r),a=0;a<i.unicodes.length;a+=1)if(i.unicodes[a]===e)return r}return null};function vd(t){this.cmap=t}vd.prototype.charToGlyphIndex=function(t){return this.cmap.glyphIndexMap[t.codePointAt(0)]||0};function no(t,e){this.encoding=t,this.charset=e}no.prototype.charToGlyphIndex=function(t){var e=t.codePointAt(0),n=this.encoding[e];return this.charset.indexOf(n)};function Zc(t){switch(t.version){case 1:this.names=Ai.slice();break;case 2:this.names=new Array(t.numberOfGlyphs);for(var e=0;e<t.numberOfGlyphs;e++)t.glyphNameIndex[e]<Ai.length?this.names[e]=Ai[t.glyphNameIndex[e]]:this.names[e]=t.names[t.glyphNameIndex[e]-Ai.length];break;case 2.5:this.names=new Array(t.numberOfGlyphs);for(var n=0;n<t.numberOfGlyphs;n++)this.names[n]=Ai[n+t.glyphNameIndex[n]];break;case 3:this.names=[];break;default:this.names=[];break}}Zc.prototype.nameToGlyphIndex=function(t){return this.names.indexOf(t)};Zc.prototype.glyphIndexToName=function(t){return this.names[t]};function WS(t){for(var e,n=t.tables.cmap.glyphIndexMap,r=Object.keys(n),i=0;i<r.length;i+=1){var a=r[i],s=n[a];e=t.glyphs.get(s),e.addUnicode(parseInt(a))}for(var o=0;o<t.glyphs.length;o+=1)e=t.glyphs.get(o),t.cffEncoding?t.isCIDFont?e.name="gid"+o:e.name=t.cffEncoding.charset[o]:t.glyphNames.names&&(e.name=t.glyphNames.glyphIndexToName(o))}function XS(t){t._IndexToUnicodeMap={};for(var e=t.tables.cmap.glyphIndexMap,n=Object.keys(e),r=0;r<n.length;r+=1){var i=n[r],a=e[i];t._IndexToUnicodeMap[a]===void 0?t._IndexToUnicodeMap[a]={unicodes:[parseInt(i)]}:t._IndexToUnicodeMap[a].unicodes.push(parseInt(i))}}function qS(t,e){e.lowMemory?XS(t):WS(t)}function $S(t,e,n,r,i){t.beginPath(),t.moveTo(e,n),t.lineTo(r,i),t.stroke()}var Mi={line:$S};function YS(t,e){var n=e||new Kt;return{configurable:!0,get:function(){return typeof n=="function"&&(n=n()),n},set:function(r){n=r}}}function Ln(t){this.bindConstructorValues(t)}Ln.prototype.bindConstructorValues=function(t){this.index=t.index||0,this.name=t.name||null,this.unicode=t.unicode||void 0,this.unicodes=t.unicodes||t.unicode!==void 0?[t.unicode]:[],"xMin"in t&&(this.xMin=t.xMin),"yMin"in t&&(this.yMin=t.yMin),"xMax"in t&&(this.xMax=t.xMax),"yMax"in t&&(this.yMax=t.yMax),"advanceWidth"in t&&(this.advanceWidth=t.advanceWidth),Object.defineProperty(this,"path",YS(this,t.path))};Ln.prototype.addUnicode=function(t){this.unicodes.length===0&&(this.unicode=t),this.unicodes.push(t)};Ln.prototype.getBoundingBox=function(){return this.path.getBoundingBox()};Ln.prototype.getPath=function(t,e,n,r,i){t=t!==void 0?t:0,e=e!==void 0?e:0,n=n!==void 0?n:72;var a,s;r||(r={});var o=r.xScale,l=r.yScale;if(r.hinting&&i&&i.hinting&&(s=this.path&&i.hinting.exec(this,n)),s)a=i.hinting.getCommands(s),t=Math.round(t),e=Math.round(e),o=l=1;else{a=this.path.commands;var c=1/(this.path.unitsPerEm||1e3)*n;o===void 0&&(o=c),l===void 0&&(l=c)}for(var u=new Kt,h=0;h<a.length;h+=1){var f=a[h];f.type==="M"?u.moveTo(t+f.x*o,e+-f.y*l):f.type==="L"?u.lineTo(t+f.x*o,e+-f.y*l):f.type==="Q"?u.quadraticCurveTo(t+f.x1*o,e+-f.y1*l,t+f.x*o,e+-f.y*l):f.type==="C"?u.curveTo(t+f.x1*o,e+-f.y1*l,t+f.x2*o,e+-f.y2*l,t+f.x*o,e+-f.y*l):f.type==="Z"&&u.closePath()}return u};Ln.prototype.getContours=function(){if(this.points===void 0)return[];for(var t=[],e=[],n=0;n<this.points.length;n+=1){var r=this.points[n];e.push(r),r.lastPointOfContour&&(t.push(e),e=[])}return Qe.argument(e.length===0,"There are still points left in the current contour."),t};Ln.prototype.getMetrics=function(){for(var t=this.path.commands,e=[],n=[],r=0;r<t.length;r+=1){var i=t[r];i.type!=="Z"&&(e.push(i.x),n.push(i.y)),(i.type==="Q"||i.type==="C")&&(e.push(i.x1),n.push(i.y1)),i.type==="C"&&(e.push(i.x2),n.push(i.y2))}var a={xMin:Math.min.apply(null,e),yMin:Math.min.apply(null,n),xMax:Math.max.apply(null,e),yMax:Math.max.apply(null,n),leftSideBearing:this.leftSideBearing};return isFinite(a.xMin)||(a.xMin=0),isFinite(a.xMax)||(a.xMax=this.advanceWidth),isFinite(a.yMin)||(a.yMin=0),isFinite(a.yMax)||(a.yMax=0),a.rightSideBearing=this.advanceWidth-a.leftSideBearing-(a.xMax-a.xMin),a};Ln.prototype.draw=function(t,e,n,r,i){this.getPath(e,n,r,i).draw(t)};Ln.prototype.drawPoints=function(t,e,n,r){function i(h,f,p,_){t.beginPath();for(var x=0;x<h.length;x+=1)t.moveTo(f+h[x].x*_,p+h[x].y*_),t.arc(f+h[x].x*_,p+h[x].y*_,2,0,Math.PI*2,!1);t.closePath(),t.fill()}e=e!==void 0?e:0,n=n!==void 0?n:0,r=r!==void 0?r:24;for(var a=1/this.path.unitsPerEm*r,s=[],o=[],l=this.path,c=0;c<l.commands.length;c+=1){var u=l.commands[c];u.x!==void 0&&s.push({x:u.x,y:-u.y}),u.x1!==void 0&&o.push({x:u.x1,y:-u.y1}),u.x2!==void 0&&o.push({x:u.x2,y:-u.y2})}t.fillStyle="blue",i(s,e,n,a),t.fillStyle="red",i(o,e,n,a)};Ln.prototype.drawMetrics=function(t,e,n,r){var i;e=e!==void 0?e:0,n=n!==void 0?n:0,r=r!==void 0?r:24,i=1/this.path.unitsPerEm*r,t.lineWidth=1,t.strokeStyle="black",Mi.line(t,e,-1e4,e,1e4),Mi.line(t,-1e4,n,1e4,n);var a=this.xMin||0,s=this.yMin||0,o=this.xMax||0,l=this.yMax||0,c=this.advanceWidth||0;t.strokeStyle="blue",Mi.line(t,e+a*i,-1e4,e+a*i,1e4),Mi.line(t,e+o*i,-1e4,e+o*i,1e4),Mi.line(t,-1e4,n+-s*i,1e4,n+-s*i),Mi.line(t,-1e4,n+-l*i,1e4,n+-l*i),t.strokeStyle="green",Mi.line(t,e+c*i,-1e4,e+c*i,1e4)};function Fs(t,e,n){Object.defineProperty(t,e,{get:function(){return t.path,t[n]},set:function(r){t[n]=r},enumerable:!0,configurable:!0})}function Kc(t,e){if(this.font=t,this.glyphs={},Array.isArray(e))for(var n=0;n<e.length;n++){var r=e[n];r.path.unitsPerEm=t.unitsPerEm,this.glyphs[n]=r}this.length=e&&e.length||0}Kc.prototype.get=function(t){if(this.glyphs[t]===void 0){this.font._push(t),typeof this.glyphs[t]=="function"&&(this.glyphs[t]=this.glyphs[t]());var e=this.glyphs[t],n=this.font._IndexToUnicodeMap[t];if(n)for(var r=0;r<n.unicodes.length;r++)e.addUnicode(n.unicodes[r]);this.font.cffEncoding?this.font.isCIDFont?e.name="gid"+t:e.name=this.font.cffEncoding.charset[t]:this.font.glyphNames.names&&(e.name=this.font.glyphNames.glyphIndexToName(t)),this.glyphs[t].advanceWidth=this.font._hmtxTableData[t].advanceWidth,this.glyphs[t].leftSideBearing=this.font._hmtxTableData[t].leftSideBearing}else typeof this.glyphs[t]=="function"&&(this.glyphs[t]=this.glyphs[t]());return this.glyphs[t]};Kc.prototype.push=function(t,e){this.glyphs[t]=e,this.length++};function jS(t,e){return new Ln({index:e,font:t})}function ZS(t,e,n,r,i,a){return function(){var s=new Ln({index:e,font:t});return s.path=function(){n(s,r,i);var o=a(t.glyphs,s);return o.unitsPerEm=t.unitsPerEm,o},Fs(s,"xMin","_xMin"),Fs(s,"xMax","_xMax"),Fs(s,"yMin","_yMin"),Fs(s,"yMax","_yMax"),s}}function KS(t,e,n,r){return function(){var i=new Ln({index:e,font:t});return i.path=function(){var a=n(t,i,r);return a.unitsPerEm=t.unitsPerEm,a},i}}var gr={GlyphSet:Kc,glyphLoader:jS,ttfGlyphLoader:ZS,cffGlyphLoader:KS};function gd(t,e){if(t===e)return!0;if(Array.isArray(t)&&Array.isArray(e)){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n+=1)if(!gd(t[n],e[n]))return!1;return!0}else return!1}function bc(t){var e;return t.length<1240?e=107:t.length<33900?e=1131:e=32768,e}function Qr(t,e,n){var r=[],i=[],a=ke.getCard16(t,e),s,o;if(a!==0){var l=ke.getByte(t,e+2);s=e+(a+1)*l+2;for(var c=e+3,u=0;u<a+1;u+=1)r.push(ke.getOffset(t,c,l)),c+=l;o=s+r[a]}else o=e+2;for(var h=0;h<r.length-1;h+=1){var f=ke.getBytes(t,s+r[h],s+r[h+1]);n&&(f=n(f)),i.push(f)}return{objects:i,startOffset:e,endOffset:o}}function JS(t,e){var n=[],r=ke.getCard16(t,e),i,a;if(r!==0){var s=ke.getByte(t,e+2);i=e+(r+1)*s+2;for(var o=e+3,l=0;l<r+1;l+=1)n.push(ke.getOffset(t,o,s)),o+=s;a=i+n[r]}else a=e+2;return{offsets:n,startOffset:e,endOffset:a}}function QS(t,e,n,r,i){var a=ke.getCard16(n,r),s=0;if(a!==0){var o=ke.getByte(n,r+2);s=r+(a+1)*o+2}var l=ke.getBytes(n,s+e[t],s+e[t+1]);return l}function eb(t){for(var e="",n=15,r=["0","1","2","3","4","5","6","7","8","9",".","E","E-",null,"-"];;){var i=t.parseByte(),a=i>>4,s=i&15;if(a===n||(e+=r[a],s===n))break;e+=r[s]}return parseFloat(e)}function tb(t,e){var n,r,i,a;if(e===28)return n=t.parseByte(),r=t.parseByte(),n<<8|r;if(e===29)return n=t.parseByte(),r=t.parseByte(),i=t.parseByte(),a=t.parseByte(),n<<24|r<<16|i<<8|a;if(e===30)return eb(t);if(e>=32&&e<=246)return e-139;if(e>=247&&e<=250)return n=t.parseByte(),(e-247)*256+n+108;if(e>=251&&e<=254)return n=t.parseByte(),-(e-251)*256-n-108;throw new Error("Invalid b0 "+e)}function nb(t){for(var e={},n=0;n<t.length;n+=1){var r=t[n][0],i=t[n][1],a=void 0;if(i.length===1?a=i[0]:a=i,e.hasOwnProperty(r)&&!isNaN(e[r]))throw new Error("Object "+e+" already has key "+r);e[r]=a}return e}function _d(t,e,n){e=e!==void 0?e:0;var r=new ke.Parser(t,e),i=[],a=[];for(n=n!==void 0?n:t.length;r.relativeOffset<n;){var s=r.parseByte();s<=21?(s===12&&(s=1200+r.parseByte()),i.push([s,a]),a=[]):a.push(tb(r,s))}return nb(i)}function Oa(t,e){return e<=390?e=Ws[e]:e=t[e-391],e}function xd(t,e,n){for(var r={},i,a=0;a<e.length;a+=1){var s=e[a];if(Array.isArray(s.type)){var o=[];o.length=s.type.length;for(var l=0;l<s.type.length;l++)i=t[s.op]!==void 0?t[s.op][l]:void 0,i===void 0&&(i=s.value!==void 0&&s.value[l]!==void 0?s.value[l]:null),s.type[l]==="SID"&&(i=Oa(n,i)),o[l]=i;r[s.name]=o}else i=t[s.op],i===void 0&&(i=s.value!==void 0?s.value:null),s.type==="SID"&&(i=Oa(n,i)),r[s.name]=i}return r}function rb(t,e){var n={};return n.formatMajor=ke.getCard8(t,e),n.formatMinor=ke.getCard8(t,e+1),n.size=ke.getCard8(t,e+2),n.offsetSize=ke.getCard8(t,e+3),n.startOffset=e,n.endOffset=e+4,n}var yd=[{name:"version",op:0,type:"SID"},{name:"notice",op:1,type:"SID"},{name:"copyright",op:1200,type:"SID"},{name:"fullName",op:2,type:"SID"},{name:"familyName",op:3,type:"SID"},{name:"weight",op:4,type:"SID"},{name:"isFixedPitch",op:1201,type:"number",value:0},{name:"italicAngle",op:1202,type:"number",value:0},{name:"underlinePosition",op:1203,type:"number",value:-100},{name:"underlineThickness",op:1204,type:"number",value:50},{name:"paintType",op:1205,type:"number",value:0},{name:"charstringType",op:1206,type:"number",value:2},{name:"fontMatrix",op:1207,type:["real","real","real","real","real","real"],value:[.001,0,0,.001,0,0]},{name:"uniqueId",op:13,type:"number"},{name:"fontBBox",op:5,type:["number","number","number","number"],value:[0,0,0,0]},{name:"strokeWidth",op:1208,type:"number",value:0},{name:"xuid",op:14,type:[],value:null},{name:"charset",op:15,type:"offset",value:0},{name:"encoding",op:16,type:"offset",value:0},{name:"charStrings",op:17,type:"offset",value:0},{name:"private",op:18,type:["number","offset"],value:[0,0]},{name:"ros",op:1230,type:["SID","SID","number"]},{name:"cidFontVersion",op:1231,type:"number",value:0},{name:"cidFontRevision",op:1232,type:"number",value:0},{name:"cidFontType",op:1233,type:"number",value:0},{name:"cidCount",op:1234,type:"number",value:8720},{name:"uidBase",op:1235,type:"number"},{name:"fdArray",op:1236,type:"offset"},{name:"fdSelect",op:1237,type:"offset"},{name:"fontName",op:1238,type:"SID"}],Sd=[{name:"subrs",op:19,type:"offset",value:0},{name:"defaultWidthX",op:20,type:"number",value:0},{name:"nominalWidthX",op:21,type:"number",value:0}];function ib(t,e){var n=_d(t,0,t.byteLength);return xd(n,yd,e)}function bd(t,e,n,r){var i=_d(t,e,n);return xd(i,Sd,r)}function Df(t,e,n,r){for(var i=[],a=0;a<n.length;a+=1){var s=new DataView(new Uint8Array(n[a]).buffer),o=ib(s,r);o._subrs=[],o._subrsBias=0,o._defaultWidthX=0,o._nominalWidthX=0;var l=o.private[0],c=o.private[1];if(l!==0&&c!==0){var u=bd(t,c+e,l,r);if(o._defaultWidthX=u.defaultWidthX,o._nominalWidthX=u.nominalWidthX,u.subrs!==0){var h=c+u.subrs,f=Qr(t,h+e);o._subrs=f.objects,o._subrsBias=bc(o._subrs)}o._privateDict=u}i.push(o)}return i}function ab(t,e,n,r){var i,a,s=new ke.Parser(t,e);n-=1;var o=[".notdef"],l=s.parseCard8();if(l===0)for(var c=0;c<n;c+=1)i=s.parseSID(),o.push(Oa(r,i));else if(l===1)for(;o.length<=n;){i=s.parseSID(),a=s.parseCard8();for(var u=0;u<=a;u+=1)o.push(Oa(r,i)),i+=1}else if(l===2)for(;o.length<=n;){i=s.parseSID(),a=s.parseCard16();for(var h=0;h<=a;h+=1)o.push(Oa(r,i)),i+=1}else throw new Error("Unknown charset format "+l);return o}function sb(t,e,n){var r,i={},a=new ke.Parser(t,e),s=a.parseCard8();if(s===0)for(var o=a.parseCard8(),l=0;l<o;l+=1)r=a.parseCard8(),i[r]=l;else if(s===1){var c=a.parseCard8();r=1;for(var u=0;u<c;u+=1)for(var h=a.parseCard8(),f=a.parseCard8(),p=h;p<=h+f;p+=1)i[p]=r,r+=1}else throw new Error("Unknown encoding format "+s);return new no(i,n)}function Uf(t,e,n){var r,i,a,s,o=new Kt,l=[],c=0,u=!1,h=!1,f=0,p=0,_,x,m,d;if(t.isCIDFont){var w=t.tables.cff.topDict._fdSelect[e.index],b=t.tables.cff.topDict._fdArray[w];_=b._subrs,x=b._subrsBias,m=b._defaultWidthX,d=b._nominalWidthX}else _=t.tables.cff.topDict._subrs,x=t.tables.cff.topDict._subrsBias,m=t.tables.cff.topDict._defaultWidthX,d=t.tables.cff.topDict._nominalWidthX;var E=m;function R(P,S){h&&o.closePath(),o.moveTo(P,S),h=!0}function U(){var P;P=l.length%2!==0,P&&!u&&(E=l.shift()+d),c+=l.length>>1,l.length=0,u=!0}function C(P){for(var S,T,I,k,Y,X,K,$,ne,H,oe,xe,pe=0;pe<P.length;){var Ue=P[pe];switch(pe+=1,Ue){case 1:U();break;case 3:U();break;case 4:l.length>1&&!u&&(E=l.shift()+d,u=!0),p+=l.pop(),R(f,p);break;case 5:for(;l.length>0;)f+=l.shift(),p+=l.shift(),o.lineTo(f,p);break;case 6:for(;l.length>0&&(f+=l.shift(),o.lineTo(f,p),l.length!==0);)p+=l.shift(),o.lineTo(f,p);break;case 7:for(;l.length>0&&(p+=l.shift(),o.lineTo(f,p),l.length!==0);)f+=l.shift(),o.lineTo(f,p);break;case 8:for(;l.length>0;)r=f+l.shift(),i=p+l.shift(),a=r+l.shift(),s=i+l.shift(),f=a+l.shift(),p=s+l.shift(),o.curveTo(r,i,a,s,f,p);break;case 10:Y=l.pop()+x,X=_[Y],X&&C(X);break;case 11:return;case 12:switch(Ue=P[pe],pe+=1,Ue){case 35:r=f+l.shift(),i=p+l.shift(),a=r+l.shift(),s=i+l.shift(),K=a+l.shift(),$=s+l.shift(),ne=K+l.shift(),H=$+l.shift(),oe=ne+l.shift(),xe=H+l.shift(),f=oe+l.shift(),p=xe+l.shift(),l.shift(),o.curveTo(r,i,a,s,K,$),o.curveTo(ne,H,oe,xe,f,p);break;case 34:r=f+l.shift(),i=p,a=r+l.shift(),s=i+l.shift(),K=a+l.shift(),$=s,ne=K+l.shift(),H=s,oe=ne+l.shift(),xe=p,f=oe+l.shift(),o.curveTo(r,i,a,s,K,$),o.curveTo(ne,H,oe,xe,f,p);break;case 36:r=f+l.shift(),i=p+l.shift(),a=r+l.shift(),s=i+l.shift(),K=a+l.shift(),$=s,ne=K+l.shift(),H=s,oe=ne+l.shift(),xe=H+l.shift(),f=oe+l.shift(),o.curveTo(r,i,a,s,K,$),o.curveTo(ne,H,oe,xe,f,p);break;case 37:r=f+l.shift(),i=p+l.shift(),a=r+l.shift(),s=i+l.shift(),K=a+l.shift(),$=s+l.shift(),ne=K+l.shift(),H=$+l.shift(),oe=ne+l.shift(),xe=H+l.shift(),Math.abs(oe-f)>Math.abs(xe-p)?f=oe+l.shift():p=xe+l.shift(),o.curveTo(r,i,a,s,K,$),o.curveTo(ne,H,oe,xe,f,p);break;default:console.log("Glyph "+e.index+": unknown operator 1200"+Ue),l.length=0}break;case 14:l.length>0&&!u&&(E=l.shift()+d,u=!0),h&&(o.closePath(),h=!1);break;case 18:U();break;case 19:case 20:U(),pe+=c+7>>3;break;case 21:l.length>2&&!u&&(E=l.shift()+d,u=!0),p+=l.pop(),f+=l.pop(),R(f,p);break;case 22:l.length>1&&!u&&(E=l.shift()+d,u=!0),f+=l.pop(),R(f,p);break;case 23:U();break;case 24:for(;l.length>2;)r=f+l.shift(),i=p+l.shift(),a=r+l.shift(),s=i+l.shift(),f=a+l.shift(),p=s+l.shift(),o.curveTo(r,i,a,s,f,p);f+=l.shift(),p+=l.shift(),o.lineTo(f,p);break;case 25:for(;l.length>6;)f+=l.shift(),p+=l.shift(),o.lineTo(f,p);r=f+l.shift(),i=p+l.shift(),a=r+l.shift(),s=i+l.shift(),f=a+l.shift(),p=s+l.shift(),o.curveTo(r,i,a,s,f,p);break;case 26:for(l.length%2&&(f+=l.shift());l.length>0;)r=f,i=p+l.shift(),a=r+l.shift(),s=i+l.shift(),f=a,p=s+l.shift(),o.curveTo(r,i,a,s,f,p);break;case 27:for(l.length%2&&(p+=l.shift());l.length>0;)r=f+l.shift(),i=p,a=r+l.shift(),s=i+l.shift(),f=a+l.shift(),p=s,o.curveTo(r,i,a,s,f,p);break;case 28:S=P[pe],T=P[pe+1],l.push((S<<24|T<<16)>>16),pe+=2;break;case 29:Y=l.pop()+t.gsubrsBias,X=t.gsubrs[Y],X&&C(X);break;case 30:for(;l.length>0&&(r=f,i=p+l.shift(),a=r+l.shift(),s=i+l.shift(),f=a+l.shift(),p=s+(l.length===1?l.shift():0),o.curveTo(r,i,a,s,f,p),l.length!==0);)r=f+l.shift(),i=p,a=r+l.shift(),s=i+l.shift(),p=s+l.shift(),f=a+(l.length===1?l.shift():0),o.curveTo(r,i,a,s,f,p);break;case 31:for(;l.length>0&&(r=f+l.shift(),i=p,a=r+l.shift(),s=i+l.shift(),p=s+l.shift(),f=a+(l.length===1?l.shift():0),o.curveTo(r,i,a,s,f,p),l.length!==0);)r=f,i=p+l.shift(),a=r+l.shift(),s=i+l.shift(),f=a+l.shift(),p=s+(l.length===1?l.shift():0),o.curveTo(r,i,a,s,f,p);break;default:Ue<32?console.log("Glyph "+e.index+": unknown operator "+Ue):Ue<247?l.push(Ue-139):Ue<251?(S=P[pe],pe+=1,l.push((Ue-247)*256+S+108)):Ue<255?(S=P[pe],pe+=1,l.push(-(Ue-251)*256-S-108)):(S=P[pe],T=P[pe+1],I=P[pe+2],k=P[pe+3],pe+=4,l.push((S<<24|T<<16|I<<8|k)/65536))}}}return C(n),e.advanceWidth=E,o}function ob(t,e,n,r){var i=[],a,s=new ke.Parser(t,e),o=s.parseCard8();if(o===0)for(var l=0;l<n;l++){if(a=s.parseCard8(),a>=r)throw new Error("CFF table CID Font FDSelect has bad FD index value "+a+" (FD count "+r+")");i.push(a)}else if(o===3){var c=s.parseCard16(),u=s.parseCard16();if(u!==0)throw new Error("CFF Table CID Font FDSelect format 3 range has bad initial GID "+u);for(var h,f=0;f<c;f++){if(a=s.parseCard8(),h=s.parseCard16(),a>=r)throw new Error("CFF table CID Font FDSelect has bad FD index value "+a+" (FD count "+r+")");if(h>n)throw new Error("CFF Table CID Font FDSelect format 3 range has bad GID "+h);for(;u<h;u++)i.push(a);u=h}if(h!==n)throw new Error("CFF Table CID Font FDSelect format 3 range has bad final GID "+h)}else throw new Error("CFF Table CID Font FDSelect table has unsupported format "+o);return i}function lb(t,e,n,r){n.tables.cff={};var i=rb(t,e),a=Qr(t,i.endOffset,ke.bytesToString),s=Qr(t,a.endOffset),o=Qr(t,s.endOffset,ke.bytesToString),l=Qr(t,o.endOffset);n.gsubrs=l.objects,n.gsubrsBias=bc(n.gsubrs);var c=Df(t,e,s.objects,o.objects);if(c.length!==1)throw new Error("CFF table has too many fonts in 'FontSet' - count of fonts NameIndex.length = "+c.length);var u=c[0];if(n.tables.cff.topDict=u,u._privateDict&&(n.defaultWidthX=u._privateDict.defaultWidthX,n.nominalWidthX=u._privateDict.nominalWidthX),u.ros[0]!==void 0&&u.ros[1]!==void 0&&(n.isCIDFont=!0),n.isCIDFont){var h=u.fdArray,f=u.fdSelect;if(h===0||f===0)throw new Error("Font is marked as a CID font, but FDArray and/or FDSelect information is missing");h+=e;var p=Qr(t,h),_=Df(t,e,p.objects,o.objects);u._fdArray=_,f+=e,u._fdSelect=ob(t,f,n.numGlyphs,_.length)}var x=e+u.private[1],m=bd(t,x,u.private[0],o.objects);if(n.defaultWidthX=m.defaultWidthX,n.nominalWidthX=m.nominalWidthX,m.subrs!==0){var d=x+m.subrs,w=Qr(t,d);n.subrs=w.objects,n.subrsBias=bc(n.subrs)}else n.subrs=[],n.subrsBias=0;var b;r.lowMemory?(b=JS(t,e+u.charStrings),n.nGlyphs=b.offsets.length):(b=Qr(t,e+u.charStrings),n.nGlyphs=b.objects.length);var E=ab(t,e+u.charset,n.nGlyphs,o.objects);if(u.encoding===0?n.cffEncoding=new no(HS,E):u.encoding===1?n.cffEncoding=new no(VS,E):n.cffEncoding=sb(t,e+u.encoding,E),n.encoding=n.encoding||n.cffEncoding,n.glyphs=new gr.GlyphSet(n),r.lowMemory)n._push=function(C){var P=QS(C,b.offsets,t,e+u.charStrings);n.glyphs.push(C,gr.cffGlyphLoader(n,C,Uf,P))};else for(var R=0;R<n.nGlyphs;R+=1){var U=b.objects[R];n.glyphs.push(R,gr.cffGlyphLoader(n,R,Uf,U))}}function Md(t,e){var n,r=Ws.indexOf(t);return r>=0&&(n=r),r=e.indexOf(t),r>=0?n=r+Ws.length:(n=Ws.length+e.length,e.push(t)),n}function cb(){return new De.Record("Header",[{name:"major",type:"Card8",value:1},{name:"minor",type:"Card8",value:0},{name:"hdrSize",type:"Card8",value:4},{name:"major",type:"Card8",value:1}])}function ub(t){var e=new De.Record("Name INDEX",[{name:"names",type:"INDEX",value:[]}]);e.names=[];for(var n=0;n<t.length;n+=1)e.names.push({name:"name_"+n,type:"NAME",value:t[n]});return e}function Ed(t,e,n){for(var r={},i=0;i<t.length;i+=1){var a=t[i],s=e[a.name];s!==void 0&&!gd(s,a.value)&&(a.type==="SID"&&(s=Md(s,n)),r[a.op]={name:a.name,type:a.type,value:s})}return r}function Lf(t,e){var n=new De.Record("Top DICT",[{name:"dict",type:"DICT",value:{}}]);return n.dict=Ed(yd,t,e),n}function Ff(t){var e=new De.Record("Top DICT INDEX",[{name:"topDicts",type:"INDEX",value:[]}]);return e.topDicts=[{name:"topDict_0",type:"TABLE",value:t}],e}function fb(t){var e=new De.Record("String INDEX",[{name:"strings",type:"INDEX",value:[]}]);e.strings=[];for(var n=0;n<t.length;n+=1)e.strings.push({name:"string_"+n,type:"STRING",value:t[n]});return e}function hb(){return new De.Record("Global Subr INDEX",[{name:"subrs",type:"INDEX",value:[]}])}function db(t,e){for(var n=new De.Record("Charsets",[{name:"format",type:"Card8",value:0}]),r=0;r<t.length;r+=1){var i=t[r],a=Md(i,e);n.fields.push({name:"glyph_"+r,type:"SID",value:a})}return n}function pb(t){var e=[],n=t.path;e.push({name:"width",type:"NUMBER",value:t.advanceWidth});for(var r=0,i=0,a=0;a<n.commands.length;a+=1){var s=void 0,o=void 0,l=n.commands[a];if(l.type==="Q"){var c=.3333333333333333,u=2/3;l={type:"C",x:l.x,y:l.y,x1:Math.round(c*r+u*l.x1),y1:Math.round(c*i+u*l.y1),x2:Math.round(c*l.x+u*l.x1),y2:Math.round(c*l.y+u*l.y1)}}if(l.type==="M")s=Math.round(l.x-r),o=Math.round(l.y-i),e.push({name:"dx",type:"NUMBER",value:s}),e.push({name:"dy",type:"NUMBER",value:o}),e.push({name:"rmoveto",type:"OP",value:21}),r=Math.round(l.x),i=Math.round(l.y);else if(l.type==="L")s=Math.round(l.x-r),o=Math.round(l.y-i),e.push({name:"dx",type:"NUMBER",value:s}),e.push({name:"dy",type:"NUMBER",value:o}),e.push({name:"rlineto",type:"OP",value:5}),r=Math.round(l.x),i=Math.round(l.y);else if(l.type==="C"){var h=Math.round(l.x1-r),f=Math.round(l.y1-i),p=Math.round(l.x2-l.x1),_=Math.round(l.y2-l.y1);s=Math.round(l.x-l.x2),o=Math.round(l.y-l.y2),e.push({name:"dx1",type:"NUMBER",value:h}),e.push({name:"dy1",type:"NUMBER",value:f}),e.push({name:"dx2",type:"NUMBER",value:p}),e.push({name:"dy2",type:"NUMBER",value:_}),e.push({name:"dx",type:"NUMBER",value:s}),e.push({name:"dy",type:"NUMBER",value:o}),e.push({name:"rrcurveto",type:"OP",value:8}),r=Math.round(l.x),i=Math.round(l.y)}}return e.push({name:"endchar",type:"OP",value:14}),e}function mb(t){for(var e=new De.Record("CharStrings INDEX",[{name:"charStrings",type:"INDEX",value:[]}]),n=0;n<t.length;n+=1){var r=t.get(n),i=pb(r);e.charStrings.push({name:r.name,type:"CHARSTRING",value:i})}return e}function vb(t,e){var n=new De.Record("Private DICT",[{name:"dict",type:"DICT",value:{}}]);return n.dict=Ed(Sd,t,e),n}function gb(t,e){for(var n=new De.Table("CFF ",[{name:"header",type:"RECORD"},{name:"nameIndex",type:"RECORD"},{name:"topDictIndex",type:"RECORD"},{name:"stringIndex",type:"RECORD"},{name:"globalSubrIndex",type:"RECORD"},{name:"charsets",type:"RECORD"},{name:"charStringsIndex",type:"RECORD"},{name:"privateDict",type:"RECORD"}]),r=1/e.unitsPerEm,i={version:e.version,fullName:e.fullName,familyName:e.familyName,weight:e.weightName,fontBBox:e.fontBBox||[0,0,0,0],fontMatrix:[r,0,0,r,0,0],charset:999,encoding:0,charStrings:999,private:[0,999]},a={},s=[],o,l=1;l<t.length;l+=1)o=t.get(l),s.push(o.name);var c=[];n.header=cb(),n.nameIndex=ub([e.postScriptName]);var u=Lf(i,c);n.topDictIndex=Ff(u),n.globalSubrIndex=hb(),n.charsets=db(s,c),n.charStringsIndex=mb(t),n.privateDict=vb(a,c),n.stringIndex=fb(c);var h=n.header.sizeOf()+n.nameIndex.sizeOf()+n.topDictIndex.sizeOf()+n.stringIndex.sizeOf()+n.globalSubrIndex.sizeOf();return i.charset=h,i.encoding=0,i.charStrings=i.charset+n.charsets.sizeOf(),i.private[1]=i.charStrings+n.charStringsIndex.sizeOf(),u=Lf(i,c),n.topDictIndex=Ff(u),n}var Td={parse:lb,make:gb};function _b(t,e){var n={},r=new ke.Parser(t,e);return n.version=r.parseVersion(),n.fontRevision=Math.round(r.parseFixed()*1e3)/1e3,n.checkSumAdjustment=r.parseULong(),n.magicNumber=r.parseULong(),Qe.argument(n.magicNumber===1594834165,"Font header has wrong magic number."),n.flags=r.parseUShort(),n.unitsPerEm=r.parseUShort(),n.created=r.parseLongDateTime(),n.modified=r.parseLongDateTime(),n.xMin=r.parseShort(),n.yMin=r.parseShort(),n.xMax=r.parseShort(),n.yMax=r.parseShort(),n.macStyle=r.parseUShort(),n.lowestRecPPEM=r.parseUShort(),n.fontDirectionHint=r.parseShort(),n.indexToLocFormat=r.parseShort(),n.glyphDataFormat=r.parseShort(),n}function xb(t){var e=Math.round(new Date().getTime()/1e3)+2082844800,n=e;return t.createdTimestamp&&(n=t.createdTimestamp+2082844800),new De.Table("head",[{name:"version",type:"FIXED",value:65536},{name:"fontRevision",type:"FIXED",value:65536},{name:"checkSumAdjustment",type:"ULONG",value:0},{name:"magicNumber",type:"ULONG",value:1594834165},{name:"flags",type:"USHORT",value:0},{name:"unitsPerEm",type:"USHORT",value:1e3},{name:"created",type:"LONGDATETIME",value:n},{name:"modified",type:"LONGDATETIME",value:e},{name:"xMin",type:"SHORT",value:0},{name:"yMin",type:"SHORT",value:0},{name:"xMax",type:"SHORT",value:0},{name:"yMax",type:"SHORT",value:0},{name:"macStyle",type:"USHORT",value:0},{name:"lowestRecPPEM",type:"USHORT",value:0},{name:"fontDirectionHint",type:"SHORT",value:2},{name:"indexToLocFormat",type:"SHORT",value:0},{name:"glyphDataFormat",type:"SHORT",value:0}],t)}var wd={parse:_b,make:xb};function yb(t,e){var n={},r=new ke.Parser(t,e);return n.version=r.parseVersion(),n.ascender=r.parseShort(),n.descender=r.parseShort(),n.lineGap=r.parseShort(),n.advanceWidthMax=r.parseUShort(),n.minLeftSideBearing=r.parseShort(),n.minRightSideBearing=r.parseShort(),n.xMaxExtent=r.parseShort(),n.caretSlopeRise=r.parseShort(),n.caretSlopeRun=r.parseShort(),n.caretOffset=r.parseShort(),r.relativeOffset+=8,n.metricDataFormat=r.parseShort(),n.numberOfHMetrics=r.parseUShort(),n}function Sb(t){return new De.Table("hhea",[{name:"version",type:"FIXED",value:65536},{name:"ascender",type:"FWORD",value:0},{name:"descender",type:"FWORD",value:0},{name:"lineGap",type:"FWORD",value:0},{name:"advanceWidthMax",type:"UFWORD",value:0},{name:"minLeftSideBearing",type:"FWORD",value:0},{name:"minRightSideBearing",type:"FWORD",value:0},{name:"xMaxExtent",type:"FWORD",value:0},{name:"caretSlopeRise",type:"SHORT",value:1},{name:"caretSlopeRun",type:"SHORT",value:0},{name:"caretOffset",type:"SHORT",value:0},{name:"reserved1",type:"SHORT",value:0},{name:"reserved2",type:"SHORT",value:0},{name:"reserved3",type:"SHORT",value:0},{name:"reserved4",type:"SHORT",value:0},{name:"metricDataFormat",type:"SHORT",value:0},{name:"numberOfHMetrics",type:"USHORT",value:0}],t)}var Ad={parse:yb,make:Sb};function bb(t,e,n,r,i){for(var a,s,o=new ke.Parser(t,e),l=0;l<r;l+=1){l<n&&(a=o.parseUShort(),s=o.parseShort());var c=i.get(l);c.advanceWidth=a,c.leftSideBearing=s}}function Mb(t,e,n,r,i){t._hmtxTableData={};for(var a,s,o=new ke.Parser(e,n),l=0;l<i;l+=1)l<r&&(a=o.parseUShort(),s=o.parseShort()),t._hmtxTableData[l]={advanceWidth:a,leftSideBearing:s}}function Eb(t,e,n,r,i,a,s){s.lowMemory?Mb(t,e,n,r,i):bb(e,n,r,i,a)}function Tb(t){for(var e=new De.Table("hmtx",[]),n=0;n<t.length;n+=1){var r=t.get(n),i=r.advanceWidth||0,a=r.leftSideBearing||0;e.fields.push({name:"advanceWidth_"+n,type:"USHORT",value:i}),e.fields.push({name:"leftSideBearing_"+n,type:"SHORT",value:a})}return e}var Rd={parse:Eb,make:Tb};function wb(t){for(var e=new De.Table("ltag",[{name:"version",type:"ULONG",value:1},{name:"flags",type:"ULONG",value:0},{name:"numTags",type:"ULONG",value:t.length}]),n="",r=12+t.length*4,i=0;i<t.length;++i){var a=n.indexOf(t[i]);a<0&&(a=n.length,n+=t[i]),e.fields.push({name:"offset "+i,type:"USHORT",value:r+a}),e.fields.push({name:"length "+i,type:"USHORT",value:t[i].length})}return e.fields.push({name:"stringPool",type:"CHARARRAY",value:n}),e}function Ab(t,e){var n=new ke.Parser(t,e),r=n.parseULong();Qe.argument(r===1,"Unsupported ltag table version."),n.skip("uLong",1);for(var i=n.parseULong(),a=[],s=0;s<i;s++){for(var o="",l=e+n.parseUShort(),c=n.parseUShort(),u=l;u<l+c;++u)o+=String.fromCharCode(t.getInt8(u));a.push(o)}return a}var Cd={make:wb,parse:Ab};function Rb(t,e){var n={},r=new ke.Parser(t,e);return n.version=r.parseVersion(),n.numGlyphs=r.parseUShort(),n.version===1&&(n.maxPoints=r.parseUShort(),n.maxContours=r.parseUShort(),n.maxCompositePoints=r.parseUShort(),n.maxCompositeContours=r.parseUShort(),n.maxZones=r.parseUShort(),n.maxTwilightPoints=r.parseUShort(),n.maxStorage=r.parseUShort(),n.maxFunctionDefs=r.parseUShort(),n.maxInstructionDefs=r.parseUShort(),n.maxStackElements=r.parseUShort(),n.maxSizeOfInstructions=r.parseUShort(),n.maxComponentElements=r.parseUShort(),n.maxComponentDepth=r.parseUShort()),n}function Cb(t){return new De.Table("maxp",[{name:"version",type:"FIXED",value:20480},{name:"numGlyphs",type:"USHORT",value:t}])}var Pd={parse:Rb,make:Cb},Dd=["copyright","fontFamily","fontSubfamily","uniqueID","fullName","version","postScriptName","trademark","manufacturer","designer","description","manufacturerURL","designerURL","license","licenseURL","reserved","preferredFamily","preferredSubfamily","compatibleFullName","sampleText","postScriptFindFontName","wwsFamily","wwsSubfamily"],Ud={0:"en",1:"fr",2:"de",3:"it",4:"nl",5:"sv",6:"es",7:"da",8:"pt",9:"no",10:"he",11:"ja",12:"ar",13:"fi",14:"el",15:"is",16:"mt",17:"tr",18:"hr",19:"zh-Hant",20:"ur",21:"hi",22:"th",23:"ko",24:"lt",25:"pl",26:"hu",27:"es",28:"lv",29:"se",30:"fo",31:"fa",32:"ru",33:"zh",34:"nl-BE",35:"ga",36:"sq",37:"ro",38:"cz",39:"sk",40:"si",41:"yi",42:"sr",43:"mk",44:"bg",45:"uk",46:"be",47:"uz",48:"kk",49:"az-Cyrl",50:"az-Arab",51:"hy",52:"ka",53:"mo",54:"ky",55:"tg",56:"tk",57:"mn-CN",58:"mn",59:"ps",60:"ks",61:"ku",62:"sd",63:"bo",64:"ne",65:"sa",66:"mr",67:"bn",68:"as",69:"gu",70:"pa",71:"or",72:"ml",73:"kn",74:"ta",75:"te",76:"si",77:"my",78:"km",79:"lo",80:"vi",81:"id",82:"tl",83:"ms",84:"ms-Arab",85:"am",86:"ti",87:"om",88:"so",89:"sw",90:"rw",91:"rn",92:"ny",93:"mg",94:"eo",128:"cy",129:"eu",130:"ca",131:"la",132:"qu",133:"gn",134:"ay",135:"tt",136:"ug",137:"dz",138:"jv",139:"su",140:"gl",141:"af",142:"br",143:"iu",144:"gd",145:"gv",146:"ga",147:"to",148:"el-polyton",149:"kl",150:"az",151:"nn"},Pb={0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:5,11:1,12:4,13:0,14:6,15:0,16:0,17:0,18:0,19:2,20:4,21:9,22:21,23:3,24:29,25:29,26:29,27:29,28:29,29:0,30:0,31:4,32:7,33:25,34:0,35:0,36:0,37:0,38:29,39:29,40:0,41:5,42:7,43:7,44:7,45:7,46:7,47:7,48:7,49:7,50:4,51:24,52:23,53:7,54:7,55:7,56:7,57:27,58:7,59:4,60:4,61:4,62:4,63:26,64:9,65:9,66:9,67:13,68:13,69:11,70:10,71:12,72:17,73:16,74:14,75:15,76:18,77:19,78:20,79:22,80:30,81:0,82:0,83:0,84:4,85:28,86:28,87:28,88:0,89:0,90:0,91:0,92:0,93:0,94:0,128:0,129:0,130:0,131:0,132:0,133:0,134:0,135:7,136:4,137:26,138:0,139:0,140:0,141:0,142:0,143:28,144:0,145:0,146:0,147:0,148:6,149:0,150:0,151:0},Ld={1078:"af",1052:"sq",1156:"gsw",1118:"am",5121:"ar-DZ",15361:"ar-BH",3073:"ar",2049:"ar-IQ",11265:"ar-JO",13313:"ar-KW",12289:"ar-LB",4097:"ar-LY",6145:"ary",8193:"ar-OM",16385:"ar-QA",1025:"ar-SA",10241:"ar-SY",7169:"aeb",14337:"ar-AE",9217:"ar-YE",1067:"hy",1101:"as",2092:"az-Cyrl",1068:"az",1133:"ba",1069:"eu",1059:"be",2117:"bn",1093:"bn-IN",8218:"bs-Cyrl",5146:"bs",1150:"br",1026:"bg",1027:"ca",3076:"zh-HK",5124:"zh-MO",2052:"zh",4100:"zh-SG",1028:"zh-TW",1155:"co",1050:"hr",4122:"hr-BA",1029:"cs",1030:"da",1164:"prs",1125:"dv",2067:"nl-BE",1043:"nl",3081:"en-AU",10249:"en-BZ",4105:"en-CA",9225:"en-029",16393:"en-IN",6153:"en-IE",8201:"en-JM",17417:"en-MY",5129:"en-NZ",13321:"en-PH",18441:"en-SG",7177:"en-ZA",11273:"en-TT",2057:"en-GB",1033:"en",12297:"en-ZW",1061:"et",1080:"fo",1124:"fil",1035:"fi",2060:"fr-BE",3084:"fr-CA",1036:"fr",5132:"fr-LU",6156:"fr-MC",4108:"fr-CH",1122:"fy",1110:"gl",1079:"ka",3079:"de-AT",1031:"de",5127:"de-LI",4103:"de-LU",2055:"de-CH",1032:"el",1135:"kl",1095:"gu",1128:"ha",1037:"he",1081:"hi",1038:"hu",1039:"is",1136:"ig",1057:"id",1117:"iu",2141:"iu-Latn",2108:"ga",1076:"xh",1077:"zu",1040:"it",2064:"it-CH",1041:"ja",1099:"kn",1087:"kk",1107:"km",1158:"quc",1159:"rw",1089:"sw",1111:"kok",1042:"ko",1088:"ky",1108:"lo",1062:"lv",1063:"lt",2094:"dsb",1134:"lb",1071:"mk",2110:"ms-BN",1086:"ms",1100:"ml",1082:"mt",1153:"mi",1146:"arn",1102:"mr",1148:"moh",1104:"mn",2128:"mn-CN",1121:"ne",1044:"nb",2068:"nn",1154:"oc",1096:"or",1123:"ps",1045:"pl",1046:"pt",2070:"pt-PT",1094:"pa",1131:"qu-BO",2155:"qu-EC",3179:"qu",1048:"ro",1047:"rm",1049:"ru",9275:"smn",4155:"smj-NO",5179:"smj",3131:"se-FI",1083:"se",2107:"se-SE",8251:"sms",6203:"sma-NO",7227:"sms",1103:"sa",7194:"sr-Cyrl-BA",3098:"sr",6170:"sr-Latn-BA",2074:"sr-Latn",1132:"nso",1074:"tn",1115:"si",1051:"sk",1060:"sl",11274:"es-AR",16394:"es-BO",13322:"es-CL",9226:"es-CO",5130:"es-CR",7178:"es-DO",12298:"es-EC",17418:"es-SV",4106:"es-GT",18442:"es-HN",2058:"es-MX",19466:"es-NI",6154:"es-PA",15370:"es-PY",10250:"es-PE",20490:"es-PR",3082:"es",1034:"es",21514:"es-US",14346:"es-UY",8202:"es-VE",2077:"sv-FI",1053:"sv",1114:"syr",1064:"tg",2143:"tzm",1097:"ta",1092:"tt",1098:"te",1054:"th",1105:"bo",1055:"tr",1090:"tk",1152:"ug",1058:"uk",1070:"hsb",1056:"ur",2115:"uz-Cyrl",1091:"uz",1066:"vi",1106:"cy",1160:"wo",1157:"sah",1144:"ii",1130:"yo"};function Db(t,e,n){switch(t){case 0:if(e===65535)return"und";if(n)return n[e];break;case 1:return Ud[e];case 3:return Ld[e]}}var Mc="utf-16",Ub={0:"macintosh",1:"x-mac-japanese",2:"x-mac-chinesetrad",3:"x-mac-korean",6:"x-mac-greek",7:"x-mac-cyrillic",9:"x-mac-devanagai",10:"x-mac-gurmukhi",11:"x-mac-gujarati",12:"x-mac-oriya",13:"x-mac-bengali",14:"x-mac-tamil",15:"x-mac-telugu",16:"x-mac-kannada",17:"x-mac-malayalam",18:"x-mac-sinhalese",19:"x-mac-burmese",20:"x-mac-khmer",21:"x-mac-thai",22:"x-mac-lao",23:"x-mac-georgian",24:"x-mac-armenian",25:"x-mac-chinesesimp",26:"x-mac-tibetan",27:"x-mac-mongolian",28:"x-mac-ethiopic",29:"x-mac-ce",30:"x-mac-vietnamese",31:"x-mac-extarabic"},Lb={15:"x-mac-icelandic",17:"x-mac-turkish",18:"x-mac-croatian",24:"x-mac-ce",25:"x-mac-ce",26:"x-mac-ce",27:"x-mac-ce",28:"x-mac-ce",30:"x-mac-icelandic",37:"x-mac-romanian",38:"x-mac-ce",39:"x-mac-ce",40:"x-mac-ce",143:"x-mac-inuit",146:"x-mac-gaelic"};function Fd(t,e,n){switch(t){case 0:return Mc;case 1:return Lb[n]||Ub[e];case 3:if(e===1||e===10)return Mc;break}}function Fb(t,e,n){for(var r={},i=new ke.Parser(t,e),a=i.parseUShort(),s=i.parseUShort(),o=i.offset+i.parseUShort(),l=0;l<s;l++){var c=i.parseUShort(),u=i.parseUShort(),h=i.parseUShort(),f=i.parseUShort(),p=Dd[f]||f,_=i.parseUShort(),x=i.parseUShort(),m=Db(c,h,n),d=Fd(c,u,h);if(d!==void 0&&m!==void 0){var w=void 0;if(d===Mc?w=ma.UTF16(t,o+x,_):w=ma.MACSTRING(t,o+x,_,d),w){var b=r[p];b===void 0&&(b=r[p]={}),b[m]=w}}}return a===1&&i.parseUShort(),r}function hl(t){var e={};for(var n in t)e[t[n]]=parseInt(n);return e}function If(t,e,n,r,i,a){return new De.Record("NameRecord",[{name:"platformID",type:"USHORT",value:t},{name:"encodingID",type:"USHORT",value:e},{name:"languageID",type:"USHORT",value:n},{name:"nameID",type:"USHORT",value:r},{name:"length",type:"USHORT",value:i},{name:"offset",type:"USHORT",value:a}])}function Ib(t,e){var n=t.length,r=e.length-n+1;e:for(var i=0;i<r;i++)for(;i<r;i++){for(var a=0;a<n;a++)if(e[i+a]!==t[a])continue e;return i}return-1}function Of(t,e){var n=Ib(t,e);if(n<0){n=e.length;for(var r=0,i=t.length;r<i;++r)e.push(t[r])}return n}function Ob(t,e){var n,r=[],i={},a=hl(Dd);for(var s in t){var o=a[s];if(o===void 0&&(o=s),n=parseInt(o),isNaN(n))throw new Error('Name table entry "'+s+'" does not exist, see nameTableNames for complete list.');i[n]=t[s],r.push(n)}for(var l=hl(Ud),c=hl(Ld),u=[],h=[],f=0;f<r.length;f++){n=r[f];var p=i[n];for(var _ in p){var x=p[_],m=1,d=l[_],w=Pb[d],b=Fd(m,w,d),E=Ee.MACSTRING(x,b);E===void 0&&(m=0,d=e.indexOf(_),d<0&&(d=e.length,e.push(_)),w=4,E=Ee.UTF16(x));var R=Of(E,h);u.push(If(m,w,d,n,E.length,R));var U=c[_];if(U!==void 0){var C=Ee.UTF16(x),P=Of(C,h);u.push(If(3,1,U,n,C.length,P))}}}u.sort(function(I,k){return I.platformID-k.platformID||I.encodingID-k.encodingID||I.languageID-k.languageID||I.nameID-k.nameID});for(var S=new De.Table("name",[{name:"format",type:"USHORT",value:0},{name:"count",type:"USHORT",value:u.length},{name:"stringOffset",type:"USHORT",value:6+u.length*12}]),T=0;T<u.length;T++)S.fields.push({name:"record_"+T,type:"RECORD",value:u[T]});return S.fields.push({name:"strings",type:"LITERAL",value:h}),S}var Id={parse:Fb,make:Ob},Ec=[{begin:0,end:127},{begin:128,end:255},{begin:256,end:383},{begin:384,end:591},{begin:592,end:687},{begin:688,end:767},{begin:768,end:879},{begin:880,end:1023},{begin:11392,end:11519},{begin:1024,end:1279},{begin:1328,end:1423},{begin:1424,end:1535},{begin:42240,end:42559},{begin:1536,end:1791},{begin:1984,end:2047},{begin:2304,end:2431},{begin:2432,end:2559},{begin:2560,end:2687},{begin:2688,end:2815},{begin:2816,end:2943},{begin:2944,end:3071},{begin:3072,end:3199},{begin:3200,end:3327},{begin:3328,end:3455},{begin:3584,end:3711},{begin:3712,end:3839},{begin:4256,end:4351},{begin:6912,end:7039},{begin:4352,end:4607},{begin:7680,end:7935},{begin:7936,end:8191},{begin:8192,end:8303},{begin:8304,end:8351},{begin:8352,end:8399},{begin:8400,end:8447},{begin:8448,end:8527},{begin:8528,end:8591},{begin:8592,end:8703},{begin:8704,end:8959},{begin:8960,end:9215},{begin:9216,end:9279},{begin:9280,end:9311},{begin:9312,end:9471},{begin:9472,end:9599},{begin:9600,end:9631},{begin:9632,end:9727},{begin:9728,end:9983},{begin:9984,end:10175},{begin:12288,end:12351},{begin:12352,end:12447},{begin:12448,end:12543},{begin:12544,end:12591},{begin:12592,end:12687},{begin:43072,end:43135},{begin:12800,end:13055},{begin:13056,end:13311},{begin:44032,end:55215},{begin:55296,end:57343},{begin:67840,end:67871},{begin:19968,end:40959},{begin:57344,end:63743},{begin:12736,end:12783},{begin:64256,end:64335},{begin:64336,end:65023},{begin:65056,end:65071},{begin:65040,end:65055},{begin:65104,end:65135},{begin:65136,end:65279},{begin:65280,end:65519},{begin:65520,end:65535},{begin:3840,end:4095},{begin:1792,end:1871},{begin:1920,end:1983},{begin:3456,end:3583},{begin:4096,end:4255},{begin:4608,end:4991},{begin:5024,end:5119},{begin:5120,end:5759},{begin:5760,end:5791},{begin:5792,end:5887},{begin:6016,end:6143},{begin:6144,end:6319},{begin:10240,end:10495},{begin:40960,end:42127},{begin:5888,end:5919},{begin:66304,end:66351},{begin:66352,end:66383},{begin:66560,end:66639},{begin:118784,end:119039},{begin:119808,end:120831},{begin:1044480,end:1048573},{begin:65024,end:65039},{begin:917504,end:917631},{begin:6400,end:6479},{begin:6480,end:6527},{begin:6528,end:6623},{begin:6656,end:6687},{begin:11264,end:11359},{begin:11568,end:11647},{begin:19904,end:19967},{begin:43008,end:43055},{begin:65536,end:65663},{begin:65856,end:65935},{begin:66432,end:66463},{begin:66464,end:66527},{begin:66640,end:66687},{begin:66688,end:66735},{begin:67584,end:67647},{begin:68096,end:68191},{begin:119552,end:119647},{begin:73728,end:74751},{begin:119648,end:119679},{begin:7040,end:7103},{begin:7168,end:7247},{begin:7248,end:7295},{begin:43136,end:43231},{begin:43264,end:43311},{begin:43312,end:43359},{begin:43520,end:43615},{begin:65936,end:65999},{begin:66e3,end:66047},{begin:66208,end:66271},{begin:127024,end:127135}];function Nb(t){for(var e=0;e<Ec.length;e+=1){var n=Ec[e];if(t>=n.begin&&t<n.end)return e}return-1}function kb(t,e){var n={},r=new ke.Parser(t,e);n.version=r.parseUShort(),n.xAvgCharWidth=r.parseShort(),n.usWeightClass=r.parseUShort(),n.usWidthClass=r.parseUShort(),n.fsType=r.parseUShort(),n.ySubscriptXSize=r.parseShort(),n.ySubscriptYSize=r.parseShort(),n.ySubscriptXOffset=r.parseShort(),n.ySubscriptYOffset=r.parseShort(),n.ySuperscriptXSize=r.parseShort(),n.ySuperscriptYSize=r.parseShort(),n.ySuperscriptXOffset=r.parseShort(),n.ySuperscriptYOffset=r.parseShort(),n.yStrikeoutSize=r.parseShort(),n.yStrikeoutPosition=r.parseShort(),n.sFamilyClass=r.parseShort(),n.panose=[];for(var i=0;i<10;i++)n.panose[i]=r.parseByte();return n.ulUnicodeRange1=r.parseULong(),n.ulUnicodeRange2=r.parseULong(),n.ulUnicodeRange3=r.parseULong(),n.ulUnicodeRange4=r.parseULong(),n.achVendID=String.fromCharCode(r.parseByte(),r.parseByte(),r.parseByte(),r.parseByte()),n.fsSelection=r.parseUShort(),n.usFirstCharIndex=r.parseUShort(),n.usLastCharIndex=r.parseUShort(),n.sTypoAscender=r.parseShort(),n.sTypoDescender=r.parseShort(),n.sTypoLineGap=r.parseShort(),n.usWinAscent=r.parseUShort(),n.usWinDescent=r.parseUShort(),n.version>=1&&(n.ulCodePageRange1=r.parseULong(),n.ulCodePageRange2=r.parseULong()),n.version>=2&&(n.sxHeight=r.parseShort(),n.sCapHeight=r.parseShort(),n.usDefaultChar=r.parseUShort(),n.usBreakChar=r.parseUShort(),n.usMaxContent=r.parseUShort()),n}function Bb(t){return new De.Table("OS/2",[{name:"version",type:"USHORT",value:3},{name:"xAvgCharWidth",type:"SHORT",value:0},{name:"usWeightClass",type:"USHORT",value:0},{name:"usWidthClass",type:"USHORT",value:0},{name:"fsType",type:"USHORT",value:0},{name:"ySubscriptXSize",type:"SHORT",value:650},{name:"ySubscriptYSize",type:"SHORT",value:699},{name:"ySubscriptXOffset",type:"SHORT",value:0},{name:"ySubscriptYOffset",type:"SHORT",value:140},{name:"ySuperscriptXSize",type:"SHORT",value:650},{name:"ySuperscriptYSize",type:"SHORT",value:699},{name:"ySuperscriptXOffset",type:"SHORT",value:0},{name:"ySuperscriptYOffset",type:"SHORT",value:479},{name:"yStrikeoutSize",type:"SHORT",value:49},{name:"yStrikeoutPosition",type:"SHORT",value:258},{name:"sFamilyClass",type:"SHORT",value:0},{name:"bFamilyType",type:"BYTE",value:0},{name:"bSerifStyle",type:"BYTE",value:0},{name:"bWeight",type:"BYTE",value:0},{name:"bProportion",type:"BYTE",value:0},{name:"bContrast",type:"BYTE",value:0},{name:"bStrokeVariation",type:"BYTE",value:0},{name:"bArmStyle",type:"BYTE",value:0},{name:"bLetterform",type:"BYTE",value:0},{name:"bMidline",type:"BYTE",value:0},{name:"bXHeight",type:"BYTE",value:0},{name:"ulUnicodeRange1",type:"ULONG",value:0},{name:"ulUnicodeRange2",type:"ULONG",value:0},{name:"ulUnicodeRange3",type:"ULONG",value:0},{name:"ulUnicodeRange4",type:"ULONG",value:0},{name:"achVendID",type:"CHARARRAY",value:"XXXX"},{name:"fsSelection",type:"USHORT",value:0},{name:"usFirstCharIndex",type:"USHORT",value:0},{name:"usLastCharIndex",type:"USHORT",value:0},{name:"sTypoAscender",type:"SHORT",value:0},{name:"sTypoDescender",type:"SHORT",value:0},{name:"sTypoLineGap",type:"SHORT",value:0},{name:"usWinAscent",type:"USHORT",value:0},{name:"usWinDescent",type:"USHORT",value:0},{name:"ulCodePageRange1",type:"ULONG",value:0},{name:"ulCodePageRange2",type:"ULONG",value:0},{name:"sxHeight",type:"SHORT",value:0},{name:"sCapHeight",type:"SHORT",value:0},{name:"usDefaultChar",type:"USHORT",value:0},{name:"usBreakChar",type:"USHORT",value:0},{name:"usMaxContext",type:"USHORT",value:0}],t)}var Tc={parse:kb,make:Bb,unicodeRanges:Ec,getUnicodeRange:Nb};function Gb(t,e){var n={},r=new ke.Parser(t,e);switch(n.version=r.parseVersion(),n.italicAngle=r.parseFixed(),n.underlinePosition=r.parseShort(),n.underlineThickness=r.parseShort(),n.isFixedPitch=r.parseULong(),n.minMemType42=r.parseULong(),n.maxMemType42=r.parseULong(),n.minMemType1=r.parseULong(),n.maxMemType1=r.parseULong(),n.version){case 1:n.names=Ai.slice();break;case 2:n.numberOfGlyphs=r.parseUShort(),n.glyphNameIndex=new Array(n.numberOfGlyphs);for(var i=0;i<n.numberOfGlyphs;i++)n.glyphNameIndex[i]=r.parseUShort();n.names=[];for(var a=0;a<n.numberOfGlyphs;a++)if(n.glyphNameIndex[a]>=Ai.length){var s=r.parseChar();n.names.push(r.parseString(s))}break;case 2.5:n.numberOfGlyphs=r.parseUShort(),n.offset=new Array(n.numberOfGlyphs);for(var o=0;o<n.numberOfGlyphs;o++)n.offset[o]=r.parseChar();break}return n}function zb(){return new De.Table("post",[{name:"version",type:"FIXED",value:196608},{name:"italicAngle",type:"FIXED",value:0},{name:"underlinePosition",type:"FWORD",value:0},{name:"underlineThickness",type:"FWORD",value:0},{name:"isFixedPitch",type:"ULONG",value:0},{name:"minMemType42",type:"ULONG",value:0},{name:"maxMemType42",type:"ULONG",value:0},{name:"minMemType1",type:"ULONG",value:0},{name:"maxMemType1",type:"ULONG",value:0}])}var Od={parse:Gb,make:zb},Kn=new Array(9);Kn[1]=function(){var e=this.offset+this.relativeOffset,n=this.parseUShort();if(n===1)return{substFormat:1,coverage:this.parsePointer(j.coverage),deltaGlyphId:this.parseUShort()};if(n===2)return{substFormat:2,coverage:this.parsePointer(j.coverage),substitute:this.parseOffset16List()};Qe.assert(!1,"0x"+e.toString(16)+": lookup type 1 format must be 1 or 2.")};Kn[2]=function(){var e=this.parseUShort();return Qe.argument(e===1,"GSUB Multiple Substitution Subtable identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(j.coverage),sequences:this.parseListOfLists()}};Kn[3]=function(){var e=this.parseUShort();return Qe.argument(e===1,"GSUB Alternate Substitution Subtable identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(j.coverage),alternateSets:this.parseListOfLists()}};Kn[4]=function(){var e=this.parseUShort();return Qe.argument(e===1,"GSUB ligature table identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(j.coverage),ligatureSets:this.parseListOfLists(function(){return{ligGlyph:this.parseUShort(),components:this.parseUShortList(this.parseUShort()-1)}})}};var ca={sequenceIndex:j.uShort,lookupListIndex:j.uShort};Kn[5]=function(){var e=this.offset+this.relativeOffset,n=this.parseUShort();if(n===1)return{substFormat:n,coverage:this.parsePointer(j.coverage),ruleSets:this.parseListOfLists(function(){var a=this.parseUShort(),s=this.parseUShort();return{input:this.parseUShortList(a-1),lookupRecords:this.parseRecordList(s,ca)}})};if(n===2)return{substFormat:n,coverage:this.parsePointer(j.coverage),classDef:this.parsePointer(j.classDef),classSets:this.parseListOfLists(function(){var a=this.parseUShort(),s=this.parseUShort();return{classes:this.parseUShortList(a-1),lookupRecords:this.parseRecordList(s,ca)}})};if(n===3){var r=this.parseUShort(),i=this.parseUShort();return{substFormat:n,coverages:this.parseList(r,j.pointer(j.coverage)),lookupRecords:this.parseRecordList(i,ca)}}Qe.assert(!1,"0x"+e.toString(16)+": lookup type 5 format must be 1, 2 or 3.")};Kn[6]=function(){var e=this.offset+this.relativeOffset,n=this.parseUShort();if(n===1)return{substFormat:1,coverage:this.parsePointer(j.coverage),chainRuleSets:this.parseListOfLists(function(){return{backtrack:this.parseUShortList(),input:this.parseUShortList(this.parseShort()-1),lookahead:this.parseUShortList(),lookupRecords:this.parseRecordList(ca)}})};if(n===2)return{substFormat:2,coverage:this.parsePointer(j.coverage),backtrackClassDef:this.parsePointer(j.classDef),inputClassDef:this.parsePointer(j.classDef),lookaheadClassDef:this.parsePointer(j.classDef),chainClassSet:this.parseListOfLists(function(){return{backtrack:this.parseUShortList(),input:this.parseUShortList(this.parseShort()-1),lookahead:this.parseUShortList(),lookupRecords:this.parseRecordList(ca)}})};if(n===3)return{substFormat:3,backtrackCoverage:this.parseList(j.pointer(j.coverage)),inputCoverage:this.parseList(j.pointer(j.coverage)),lookaheadCoverage:this.parseList(j.pointer(j.coverage)),lookupRecords:this.parseRecordList(ca)};Qe.assert(!1,"0x"+e.toString(16)+": lookup type 6 format must be 1, 2 or 3.")};Kn[7]=function(){var e=this.parseUShort();Qe.argument(e===1,"GSUB Extension Substitution subtable identifier-format must be 1");var n=this.parseUShort(),r=new j(this.data,this.offset+this.parseULong());return{substFormat:1,lookupType:n,extension:Kn[n].call(r)}};Kn[8]=function(){var e=this.parseUShort();return Qe.argument(e===1,"GSUB Reverse Chaining Contextual Single Substitution Subtable identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(j.coverage),backtrackCoverage:this.parseList(j.pointer(j.coverage)),lookaheadCoverage:this.parseList(j.pointer(j.coverage)),substitutes:this.parseUShortList()}};function Hb(t,e){e=e||0;var n=new j(t,e),r=n.parseVersion(1);return Qe.argument(r===1||r===1.1,"Unsupported GSUB table version."),r===1?{version:r,scripts:n.parseScriptList(),features:n.parseFeatureList(),lookups:n.parseLookupList(Kn)}:{version:r,scripts:n.parseScriptList(),features:n.parseFeatureList(),lookups:n.parseLookupList(Kn),variations:n.parseFeatureVariationsList()}}var xa=new Array(9);xa[1]=function(e){return e.substFormat===1?new De.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new De.Coverage(e.coverage)},{name:"deltaGlyphID",type:"USHORT",value:e.deltaGlyphId}]):new De.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:2},{name:"coverage",type:"TABLE",value:new De.Coverage(e.coverage)}].concat(De.ushortList("substitute",e.substitute)))};xa[2]=function(e){return Qe.assert(e.substFormat===1,"Lookup type 2 substFormat must be 1."),new De.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new De.Coverage(e.coverage)}].concat(De.tableList("seqSet",e.sequences,function(n){return new De.Table("sequenceSetTable",De.ushortList("sequence",n))})))};xa[3]=function(e){return Qe.assert(e.substFormat===1,"Lookup type 3 substFormat must be 1."),new De.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new De.Coverage(e.coverage)}].concat(De.tableList("altSet",e.alternateSets,function(n){return new De.Table("alternateSetTable",De.ushortList("alternate",n))})))};xa[4]=function(e){return Qe.assert(e.substFormat===1,"Lookup type 4 substFormat must be 1."),new De.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new De.Coverage(e.coverage)}].concat(De.tableList("ligSet",e.ligatureSets,function(n){return new De.Table("ligatureSetTable",De.tableList("ligature",n,function(r){return new De.Table("ligatureTable",[{name:"ligGlyph",type:"USHORT",value:r.ligGlyph}].concat(De.ushortList("component",r.components,r.components.length+1)))}))})))};xa[6]=function(e){if(e.substFormat===1){var n=new De.Table("chainContextTable",[{name:"substFormat",type:"USHORT",value:e.substFormat},{name:"coverage",type:"TABLE",value:new De.Coverage(e.coverage)}].concat(De.tableList("chainRuleSet",e.chainRuleSets,function(a){return new De.Table("chainRuleSetTable",De.tableList("chainRule",a,function(s){var o=De.ushortList("backtrackGlyph",s.backtrack,s.backtrack.length).concat(De.ushortList("inputGlyph",s.input,s.input.length+1)).concat(De.ushortList("lookaheadGlyph",s.lookahead,s.lookahead.length)).concat(De.ushortList("substitution",[],s.lookupRecords.length));return s.lookupRecords.forEach(function(l,c){o=o.concat({name:"sequenceIndex"+c,type:"USHORT",value:l.sequenceIndex}).concat({name:"lookupListIndex"+c,type:"USHORT",value:l.lookupListIndex})}),new De.Table("chainRuleTable",o)}))})));return n}else if(e.substFormat===2)Qe.assert(!1,"lookup type 6 format 2 is not yet supported.");else if(e.substFormat===3){var r=[{name:"substFormat",type:"USHORT",value:e.substFormat}];r.push({name:"backtrackGlyphCount",type:"USHORT",value:e.backtrackCoverage.length}),e.backtrackCoverage.forEach(function(a,s){r.push({name:"backtrackCoverage"+s,type:"TABLE",value:new De.Coverage(a)})}),r.push({name:"inputGlyphCount",type:"USHORT",value:e.inputCoverage.length}),e.inputCoverage.forEach(function(a,s){r.push({name:"inputCoverage"+s,type:"TABLE",value:new De.Coverage(a)})}),r.push({name:"lookaheadGlyphCount",type:"USHORT",value:e.lookaheadCoverage.length}),e.lookaheadCoverage.forEach(function(a,s){r.push({name:"lookaheadCoverage"+s,type:"TABLE",value:new De.Coverage(a)})}),r.push({name:"substitutionCount",type:"USHORT",value:e.lookupRecords.length}),e.lookupRecords.forEach(function(a,s){r=r.concat({name:"sequenceIndex"+s,type:"USHORT",value:a.sequenceIndex}).concat({name:"lookupListIndex"+s,type:"USHORT",value:a.lookupListIndex})});var i=new De.Table("chainContextTable",r);return i}Qe.assert(!1,"lookup type 6 format must be 1, 2 or 3.")};function Vb(t){return new De.Table("GSUB",[{name:"version",type:"ULONG",value:65536},{name:"scripts",type:"TABLE",value:new De.ScriptList(t.scripts)},{name:"features",type:"TABLE",value:new De.FeatureList(t.features)},{name:"lookups",type:"TABLE",value:new De.LookupList(t.lookups,xa)}])}var Nd={parse:Hb,make:Vb};function Wb(t,e){var n=new ke.Parser(t,e),r=n.parseULong();Qe.argument(r===1,"Unsupported META table version."),n.parseULong(),n.parseULong();for(var i=n.parseULong(),a={},s=0;s<i;s++){var o=n.parseTag(),l=n.parseULong(),c=n.parseULong(),u=ma.UTF8(t,e+l,c);a[o]=u}return a}function Xb(t){var e=Object.keys(t).length,n="",r=16+e*12,i=new De.Table("meta",[{name:"version",type:"ULONG",value:1},{name:"flags",type:"ULONG",value:0},{name:"offset",type:"ULONG",value:r},{name:"numTags",type:"ULONG",value:e}]);for(var a in t){var s=n.length;n+=t[a],i.fields.push({name:"tag "+a,type:"TAG",value:a}),i.fields.push({name:"offset "+a,type:"ULONG",value:r+s}),i.fields.push({name:"length "+a,type:"ULONG",value:t[a].length})}return i.fields.push({name:"stringPool",type:"CHARARRAY",value:n}),i}var kd={parse:Wb,make:Xb};function Nf(t){return Math.log(t)/Math.log(2)|0}function Jc(t){for(;t.length%4!==0;)t.push(0);for(var e=0,n=0;n<t.length;n+=4)e+=(t[n]<<24)+(t[n+1]<<16)+(t[n+2]<<8)+t[n+3];return e%=Math.pow(2,32),e}function kf(t,e,n,r){return new De.Record("Table Record",[{name:"tag",type:"TAG",value:t!==void 0?t:""},{name:"checkSum",type:"ULONG",value:e!==void 0?e:0},{name:"offset",type:"ULONG",value:n!==void 0?n:0},{name:"length",type:"ULONG",value:r!==void 0?r:0}])}function Bd(t){var e=new De.Table("sfnt",[{name:"version",type:"TAG",value:"OTTO"},{name:"numTables",type:"USHORT",value:0},{name:"searchRange",type:"USHORT",value:0},{name:"entrySelector",type:"USHORT",value:0},{name:"rangeShift",type:"USHORT",value:0}]);e.tables=t,e.numTables=t.length;var n=Math.pow(2,Nf(e.numTables));e.searchRange=16*n,e.entrySelector=Nf(n),e.rangeShift=e.numTables*16-e.searchRange;for(var r=[],i=[],a=e.sizeOf()+kf().sizeOf()*e.numTables;a%4!==0;)a+=1,i.push({name:"padding",type:"BYTE",value:0});for(var s=0;s<t.length;s+=1){var o=t[s];Qe.argument(o.tableName.length===4,"Table name"+o.tableName+" is invalid.");var l=o.sizeOf(),c=kf(o.tableName,Jc(o.encode()),a,l);for(r.push({name:c.tag+" Table Record",type:"RECORD",value:c}),i.push({name:o.tableName+" table",type:"RECORD",value:o}),a+=l,Qe.argument(!isNaN(a),"Something went wrong calculating the offset.");a%4!==0;)a+=1,i.push({name:"padding",type:"BYTE",value:0})}return r.sort(function(u,h){return u.value.tag>h.value.tag?1:-1}),e.fields=e.fields.concat(r),e.fields=e.fields.concat(i),e}function Bf(t,e,n){for(var r=0;r<e.length;r+=1){var i=t.charToGlyphIndex(e[r]);if(i>0){var a=t.glyphs.get(i);return a.getMetrics()}}return n}function qb(t){for(var e=0,n=0;n<t.length;n+=1)e+=t[n];return e/t.length}function $b(t){for(var e=[],n=[],r=[],i=[],a=[],s=[],o=[],l,c=0,u=0,h=0,f=0,p=0,_=0;_<t.glyphs.length;_+=1){var x=t.glyphs.get(_),m=x.unicode|0;if(isNaN(x.advanceWidth))throw new Error("Glyph "+x.name+" ("+_+"): advanceWidth is not a number.");(l>m||l===void 0)&&m>0&&(l=m),c<m&&(c=m);var d=Tc.getUnicodeRange(m);if(d<32)u|=1<<d;else if(d<64)h|=1<<d-32;else if(d<96)f|=1<<d-64;else if(d<123)p|=1<<d-96;else throw new Error("Unicode ranges bits > 123 are reserved for internal usage");if(x.name!==".notdef"){var w=x.getMetrics();e.push(w.xMin),n.push(w.yMin),r.push(w.xMax),i.push(w.yMax),s.push(w.leftSideBearing),o.push(w.rightSideBearing),a.push(x.advanceWidth)}}var b={xMin:Math.min.apply(null,e),yMin:Math.min.apply(null,n),xMax:Math.max.apply(null,r),yMax:Math.max.apply(null,i),advanceWidthMax:Math.max.apply(null,a),advanceWidthAvg:qb(a),minLeftSideBearing:Math.min.apply(null,s),maxLeftSideBearing:Math.max.apply(null,s),minRightSideBearing:Math.min.apply(null,o)};b.ascender=t.ascender,b.descender=t.descender;var E=wd.make({flags:3,unitsPerEm:t.unitsPerEm,xMin:b.xMin,yMin:b.yMin,xMax:b.xMax,yMax:b.yMax,lowestRecPPEM:3,createdTimestamp:t.createdTimestamp}),R=Ad.make({ascender:b.ascender,descender:b.descender,advanceWidthMax:b.advanceWidthMax,minLeftSideBearing:b.minLeftSideBearing,minRightSideBearing:b.minRightSideBearing,xMaxExtent:b.maxLeftSideBearing+(b.xMax-b.xMin),numberOfHMetrics:t.glyphs.length}),U=Pd.make(t.glyphs.length),C=Tc.make(Object.assign({xAvgCharWidth:Math.round(b.advanceWidthAvg),usFirstCharIndex:l,usLastCharIndex:c,ulUnicodeRange1:u,ulUnicodeRange2:h,ulUnicodeRange3:f,ulUnicodeRange4:p,sTypoAscender:b.ascender,sTypoDescender:b.descender,sTypoLineGap:0,usWinAscent:b.yMax,usWinDescent:Math.abs(b.yMin),ulCodePageRange1:1,sxHeight:Bf(t,"xyvw",{yMax:Math.round(b.ascender/2)}).yMax,sCapHeight:Bf(t,"HIKLEFJMNTZBDPRAGOQSUVWXY",b).yMax,usDefaultChar:t.hasChar(" ")?32:0,usBreakChar:t.hasChar(" ")?32:0},t.tables.os2)),P=Rd.make(t.glyphs),S=pd.make(t.glyphs),T=t.getEnglishName("fontFamily"),I=t.getEnglishName("fontSubfamily"),k=T+" "+I,Y=t.getEnglishName("postScriptName");Y||(Y=T.replace(/\s/g,"")+"-"+I);var X={};for(var K in t.names)X[K]=t.names[K];X.uniqueID||(X.uniqueID={en:t.getEnglishName("manufacturer")+":"+k}),X.postScriptName||(X.postScriptName={en:Y}),X.preferredFamily||(X.preferredFamily=t.names.fontFamily),X.preferredSubfamily||(X.preferredSubfamily=t.names.fontSubfamily);var $=[],ne=Id.make(X,$),H=$.length>0?Cd.make($):void 0,oe=Od.make(),xe=Td.make(t.glyphs,{version:t.getEnglishName("version"),fullName:k,familyName:T,weightName:I,postScriptName:Y,unitsPerEm:t.unitsPerEm,fontBBox:[0,b.yMin,b.ascender,b.advanceWidthMax]}),pe=t.metas&&Object.keys(t.metas).length>0?kd.make(t.metas):void 0,Ue=[E,R,U,C,ne,S,oe,xe,P];H&&Ue.push(H),t.tables.gsub&&Ue.push(Nd.make(t.tables.gsub)),pe&&Ue.push(pe);for(var tt=Bd(Ue),ot=tt.encode(),Be=Jc(ot),ee=tt.fields,ce=!1,Te=0;Te<ee.length;Te+=1)if(ee[Te].name==="head table"){ee[Te].value.checkSumAdjustment=2981146554-Be,ce=!0;break}if(!ce)throw new Error("Could not find head table with checkSum to adjust.");return tt}var Yb={make:Bd,fontToTable:$b,computeCheckSum:Jc};function dl(t,e){for(var n=0,r=t.length-1;n<=r;){var i=n+r>>>1,a=t[i].tag;if(a===e)return i;a<e?n=i+1:r=i-1}return-n-1}function Gf(t,e){for(var n=0,r=t.length-1;n<=r;){var i=n+r>>>1,a=t[i];if(a===e)return i;a<e?n=i+1:r=i-1}return-n-1}function zf(t,e){for(var n,r=0,i=t.length-1;r<=i;){var a=r+i>>>1;n=t[a];var s=n.start;if(s===e)return n;s<e?r=a+1:i=a-1}if(r>0)return n=t[r-1],e>n.end?0:n}function es(t,e){this.font=t,this.tableName=e}es.prototype={searchTag:dl,binSearch:Gf,getTable:function(t){var e=this.font.tables[this.tableName];return!e&&t&&(e=this.font.tables[this.tableName]=this.createDefaultTable()),e},getScriptNames:function(){var t=this.getTable();return t?t.scripts.map(function(e){return e.tag}):[]},getDefaultScriptName:function(){var t=this.getTable();if(t){for(var e=!1,n=0;n<t.scripts.length;n++){var r=t.scripts[n].tag;if(r==="DFLT")return r;r==="latn"&&(e=!0)}if(e)return"latn"}},getScriptTable:function(t,e){var n=this.getTable(e);if(n){t=t||"DFLT";var r=n.scripts,i=dl(n.scripts,t);if(i>=0)return r[i].script;if(e){var a={tag:t,script:{defaultLangSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]},langSysRecords:[]}};return r.splice(-1-i,0,a),a.script}}},getLangSysTable:function(t,e,n){var r=this.getScriptTable(t,n);if(r){if(!e||e==="dflt"||e==="DFLT")return r.defaultLangSys;var i=dl(r.langSysRecords,e);if(i>=0)return r.langSysRecords[i].langSys;if(n){var a={tag:e,langSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]}};return r.langSysRecords.splice(-1-i,0,a),a.langSys}}},getFeatureTable:function(t,e,n,r){var i=this.getLangSysTable(t,e,r);if(i){for(var a,s=i.featureIndexes,o=this.font.tables[this.tableName].features,l=0;l<s.length;l++)if(a=o[s[l]],a.tag===n)return a.feature;if(r){var c=o.length;return Qe.assert(c===0||n>=o[c-1].tag,"Features must be added in alphabetical order."),a={tag:n,feature:{params:0,lookupListIndexes:[]}},o.push(a),s.push(c),a.feature}}},getLookupTables:function(t,e,n,r,i){var a=this.getFeatureTable(t,e,n,i),s=[];if(a){for(var o,l=a.lookupListIndexes,c=this.font.tables[this.tableName].lookups,u=0;u<l.length;u++)o=c[l[u]],o.lookupType===r&&s.push(o);if(s.length===0&&i){o={lookupType:r,lookupFlag:0,subtables:[],markFilteringSet:void 0};var h=c.length;return c.push(o),l.push(h),[o]}}return s},getGlyphClass:function(t,e){switch(t.format){case 1:return t.startGlyph<=e&&e<t.startGlyph+t.classes.length?t.classes[e-t.startGlyph]:0;case 2:var n=zf(t.ranges,e);return n?n.classId:0}},getCoverageIndex:function(t,e){switch(t.format){case 1:var n=Gf(t.glyphs,e);return n>=0?n:-1;case 2:var r=zf(t.ranges,e);return r?r.index+e-r.start:-1}},expandCoverage:function(t){if(t.format===1)return t.glyphs;for(var e=[],n=t.ranges,r=0;r<n.length;r++)for(var i=n[r],a=i.start,s=i.end,o=a;o<=s;o++)e.push(o);return e}};function ts(t){es.call(this,t,"gpos")}ts.prototype=es.prototype;ts.prototype.init=function(){var t=this.getDefaultScriptName();this.defaultKerningTables=this.getKerningTables(t)};ts.prototype.getKerningValue=function(t,e,n){for(var r=0;r<t.length;r++)for(var i=t[r].subtables,a=0;a<i.length;a++){var s=i[a],o=this.getCoverageIndex(s.coverage,e);if(!(o<0))switch(s.posFormat){case 1:for(var l=s.pairSets[o],c=0;c<l.length;c++){var u=l[c];if(u.secondGlyph===n)return u.value1&&u.value1.xAdvance||0}break;case 2:var h=this.getGlyphClass(s.classDef1,e),f=this.getGlyphClass(s.classDef2,n),p=s.classRecords[h][f];return p.value1&&p.value1.xAdvance||0}}return 0};ts.prototype.getKerningTables=function(t,e){if(this.font.tables.gpos)return this.getLookupTables(t,e,"kern",2)};function Fn(t){es.call(this,t,"gsub")}function jb(t,e){var n=t.length;if(n!==e.length)return!1;for(var r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function Qc(t,e,n){for(var r=t.subtables,i=0;i<r.length;i++){var a=r[i];if(a.substFormat===e)return a}if(n)return r.push(n),n}Fn.prototype=es.prototype;Fn.prototype.createDefaultTable=function(){return{version:1,scripts:[{tag:"DFLT",script:{defaultLangSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]},langSysRecords:[]}}],features:[],lookups:[]}};Fn.prototype.getSingle=function(t,e,n){for(var r=[],i=this.getLookupTables(e,n,t,1),a=0;a<i.length;a++)for(var s=i[a].subtables,o=0;o<s.length;o++){var l=s[o],c=this.expandCoverage(l.coverage),u=void 0;if(l.substFormat===1){var h=l.deltaGlyphId;for(u=0;u<c.length;u++){var f=c[u];r.push({sub:f,by:f+h})}}else{var p=l.substitute;for(u=0;u<c.length;u++)r.push({sub:c[u],by:p[u]})}}return r};Fn.prototype.getMultiple=function(t,e,n){for(var r=[],i=this.getLookupTables(e,n,t,2),a=0;a<i.length;a++)for(var s=i[a].subtables,o=0;o<s.length;o++){var l=s[o],c=this.expandCoverage(l.coverage),u=void 0;for(u=0;u<c.length;u++){var h=c[u],f=l.sequences[u];r.push({sub:h,by:f})}}return r};Fn.prototype.getAlternates=function(t,e,n){for(var r=[],i=this.getLookupTables(e,n,t,3),a=0;a<i.length;a++)for(var s=i[a].subtables,o=0;o<s.length;o++)for(var l=s[o],c=this.expandCoverage(l.coverage),u=l.alternateSets,h=0;h<c.length;h++)r.push({sub:c[h],by:u[h]});return r};Fn.prototype.getLigatures=function(t,e,n){for(var r=[],i=this.getLookupTables(e,n,t,4),a=0;a<i.length;a++)for(var s=i[a].subtables,o=0;o<s.length;o++)for(var l=s[o],c=this.expandCoverage(l.coverage),u=l.ligatureSets,h=0;h<c.length;h++)for(var f=c[h],p=u[h],_=0;_<p.length;_++){var x=p[_];r.push({sub:[f].concat(x.components),by:x.ligGlyph})}return r};Fn.prototype.addSingle=function(t,e,n,r){var i=this.getLookupTables(n,r,t,1,!0)[0],a=Qc(i,2,{substFormat:2,coverage:{format:1,glyphs:[]},substitute:[]});Qe.assert(a.coverage.format===1,"Single: unable to modify coverage table format "+a.coverage.format);var s=e.sub,o=this.binSearch(a.coverage.glyphs,s);o<0&&(o=-1-o,a.coverage.glyphs.splice(o,0,s),a.substitute.splice(o,0,0)),a.substitute[o]=e.by};Fn.prototype.addMultiple=function(t,e,n,r){Qe.assert(e.by instanceof Array&&e.by.length>1,'Multiple: "by" must be an array of two or more ids');var i=this.getLookupTables(n,r,t,2,!0)[0],a=Qc(i,1,{substFormat:1,coverage:{format:1,glyphs:[]},sequences:[]});Qe.assert(a.coverage.format===1,"Multiple: unable to modify coverage table format "+a.coverage.format);var s=e.sub,o=this.binSearch(a.coverage.glyphs,s);o<0&&(o=-1-o,a.coverage.glyphs.splice(o,0,s),a.sequences.splice(o,0,0)),a.sequences[o]=e.by};Fn.prototype.addAlternate=function(t,e,n,r){var i=this.getLookupTables(n,r,t,3,!0)[0],a=Qc(i,1,{substFormat:1,coverage:{format:1,glyphs:[]},alternateSets:[]});Qe.assert(a.coverage.format===1,"Alternate: unable to modify coverage table format "+a.coverage.format);var s=e.sub,o=this.binSearch(a.coverage.glyphs,s);o<0&&(o=-1-o,a.coverage.glyphs.splice(o,0,s),a.alternateSets.splice(o,0,0)),a.alternateSets[o]=e.by};Fn.prototype.addLigature=function(t,e,n,r){var i=this.getLookupTables(n,r,t,4,!0)[0],a=i.subtables[0];a||(a={substFormat:1,coverage:{format:1,glyphs:[]},ligatureSets:[]},i.subtables[0]=a),Qe.assert(a.coverage.format===1,"Ligature: unable to modify coverage table format "+a.coverage.format);var s=e.sub[0],o=e.sub.slice(1),l={ligGlyph:e.by,components:o},c=this.binSearch(a.coverage.glyphs,s);if(c>=0){for(var u=a.ligatureSets[c],h=0;h<u.length;h++)if(jb(u[h].components,o))return;u.push(l)}else c=-1-c,a.coverage.glyphs.splice(c,0,s),a.ligatureSets.splice(c,0,[l])};Fn.prototype.getFeature=function(t,e,n){if(/ss\d\d/.test(t))return this.getSingle(t,e,n);switch(t){case"aalt":case"salt":return this.getSingle(t,e,n).concat(this.getAlternates(t,e,n));case"dlig":case"liga":case"rlig":return this.getLigatures(t,e,n);case"ccmp":return this.getMultiple(t,e,n).concat(this.getLigatures(t,e,n));case"stch":return this.getMultiple(t,e,n)}};Fn.prototype.add=function(t,e,n,r){if(/ss\d\d/.test(t))return this.addSingle(t,e,n,r);switch(t){case"aalt":case"salt":return typeof e.by=="number"?this.addSingle(t,e,n,r):this.addAlternate(t,e,n,r);case"dlig":case"liga":case"rlig":return this.addLigature(t,e,n,r);case"ccmp":return e.by instanceof Array?this.addMultiple(t,e,n,r):this.addLigature(t,e,n,r)}};function Zb(){return typeof window<"u"}function Gd(t){for(var e=new ArrayBuffer(t.length),n=new Uint8Array(e),r=0;r<t.length;++r)n[r]=t[r];return e}function Kb(t){for(var e=new Buffer(t.byteLength),n=new Uint8Array(t),r=0;r<e.length;++r)e[r]=n[r];return e}function La(t,e){if(!t)throw e}function Hf(t,e,n,r,i){var a;return(e&r)>0?(a=t.parseByte(),e&i||(a=-a),a=n+a):(e&i)>0?a=n:a=n+t.parseShort(),a}function zd(t,e,n){var r=new ke.Parser(e,n);t.numberOfContours=r.parseShort(),t._xMin=r.parseShort(),t._yMin=r.parseShort(),t._xMax=r.parseShort(),t._yMax=r.parseShort();var i,a;if(t.numberOfContours>0){for(var s=t.endPointIndices=[],o=0;o<t.numberOfContours;o+=1)s.push(r.parseUShort());t.instructionLength=r.parseUShort(),t.instructions=[];for(var l=0;l<t.instructionLength;l+=1)t.instructions.push(r.parseByte());var c=s[s.length-1]+1;i=[];for(var u=0;u<c;u+=1)if(a=r.parseByte(),i.push(a),(a&8)>0)for(var h=r.parseByte(),f=0;f<h;f+=1)i.push(a),u+=1;if(Qe.argument(i.length===c,"Bad flags."),s.length>0){var p=[],_;if(c>0){for(var x=0;x<c;x+=1)a=i[x],_={},_.onCurve=!!(a&1),_.lastPointOfContour=s.indexOf(x)>=0,p.push(_);for(var m=0,d=0;d<c;d+=1)a=i[d],_=p[d],_.x=Hf(r,a,m,2,16),m=_.x;for(var w=0,b=0;b<c;b+=1)a=i[b],_=p[b],_.y=Hf(r,a,w,4,32),w=_.y}t.points=p}else t.points=[]}else if(t.numberOfContours===0)t.points=[];else{t.isComposite=!0,t.points=[],t.components=[];for(var E=!0;E;){i=r.parseUShort();var R={glyphIndex:r.parseUShort(),xScale:1,scale01:0,scale10:0,yScale:1,dx:0,dy:0};(i&1)>0?(i&2)>0?(R.dx=r.parseShort(),R.dy=r.parseShort()):R.matchedPoints=[r.parseUShort(),r.parseUShort()]:(i&2)>0?(R.dx=r.parseChar(),R.dy=r.parseChar()):R.matchedPoints=[r.parseByte(),r.parseByte()],(i&8)>0?R.xScale=R.yScale=r.parseF2Dot14():(i&64)>0?(R.xScale=r.parseF2Dot14(),R.yScale=r.parseF2Dot14()):(i&128)>0&&(R.xScale=r.parseF2Dot14(),R.scale01=r.parseF2Dot14(),R.scale10=r.parseF2Dot14(),R.yScale=r.parseF2Dot14()),t.components.push(R),E=!!(i&32)}if(i&256){t.instructionLength=r.parseUShort(),t.instructions=[];for(var U=0;U<t.instructionLength;U+=1)t.instructions.push(r.parseByte())}}}function pl(t,e){for(var n=[],r=0;r<t.length;r+=1){var i=t[r],a={x:e.xScale*i.x+e.scale01*i.y+e.dx,y:e.scale10*i.x+e.yScale*i.y+e.dy,onCurve:i.onCurve,lastPointOfContour:i.lastPointOfContour};n.push(a)}return n}function Jb(t){for(var e=[],n=[],r=0;r<t.length;r+=1){var i=t[r];n.push(i),i.lastPointOfContour&&(e.push(n),n=[])}return Qe.argument(n.length===0,"There are still points left in the current contour."),e}function Hd(t){var e=new Kt;if(!t)return e;for(var n=Jb(t),r=0;r<n.length;++r){var i=n[r],a=null,s=i[i.length-1],o=i[0];if(s.onCurve)e.moveTo(s.x,s.y);else if(o.onCurve)e.moveTo(o.x,o.y);else{var l={x:(s.x+o.x)*.5,y:(s.y+o.y)*.5};e.moveTo(l.x,l.y)}for(var c=0;c<i.length;++c)if(a=s,s=o,o=i[(c+1)%i.length],s.onCurve)e.lineTo(s.x,s.y);else{var u=o;a.onCurve||((s.x+a.x)*.5,(s.y+a.y)*.5),o.onCurve||(u={x:(s.x+o.x)*.5,y:(s.y+o.y)*.5}),e.quadraticCurveTo(s.x,s.y,u.x,u.y)}e.closePath()}return e}function Vd(t,e){if(e.isComposite)for(var n=0;n<e.components.length;n+=1){var r=e.components[n],i=t.get(r.glyphIndex);if(i.getPath(),i.points){var a=void 0;if(r.matchedPoints===void 0)a=pl(i.points,r);else{if(r.matchedPoints[0]>e.points.length-1||r.matchedPoints[1]>i.points.length-1)throw Error("Matched points out of range in "+e.name);var s=e.points[r.matchedPoints[0]],o=i.points[r.matchedPoints[1]],l={xScale:r.xScale,scale01:r.scale01,scale10:r.scale10,yScale:r.yScale,dx:0,dy:0};o=pl([o],l)[0],l.dx=s.x-o.x,l.dy=s.y-o.y,a=pl(i.points,l)}e.points=e.points.concat(a)}}return Hd(e.points)}function Qb(t,e,n,r){for(var i=new gr.GlyphSet(r),a=0;a<n.length-1;a+=1){var s=n[a],o=n[a+1];s!==o?i.push(a,gr.ttfGlyphLoader(r,a,zd,t,e+s,Vd)):i.push(a,gr.glyphLoader(r,a))}return i}function e1(t,e,n,r){var i=new gr.GlyphSet(r);return r._push=function(a){var s=n[a],o=n[a+1];s!==o?i.push(a,gr.ttfGlyphLoader(r,a,zd,t,e+s,Vd)):i.push(a,gr.glyphLoader(r,a))},i}function t1(t,e,n,r,i){return i.lowMemory?e1(t,e,n,r):Qb(t,e,n,r)}var Wd={getPath:Hd,parse:t1},Xd,Fi,qd,wc;function $d(t){this.font=t,this.getCommands=function(e){return Wd.getPath(e).commands},this._fpgmState=this._prepState=void 0,this._errorState=0}function n1(t){return t}function Yd(t){return Math.sign(t)*Math.round(Math.abs(t))}function r1(t){return Math.sign(t)*Math.round(Math.abs(t*2))/2}function i1(t){return Math.sign(t)*(Math.round(Math.abs(t)+.5)-.5)}function a1(t){return Math.sign(t)*Math.ceil(Math.abs(t))}function s1(t){return Math.sign(t)*Math.floor(Math.abs(t))}var jd=function(t){var e=this.srPeriod,n=this.srPhase,r=this.srThreshold,i=1;return t<0&&(t=-t,i=-1),t+=r-n,t=Math.trunc(t/e)*e,t+=n,t<0?n*i:t*i},dr={x:1,y:0,axis:"x",distance:function(t,e,n,r){return(n?t.xo:t.x)-(r?e.xo:e.x)},interpolate:function(t,e,n,r){var i,a,s,o,l,c,u;if(!r||r===this){if(i=t.xo-e.xo,a=t.xo-n.xo,l=e.x-e.xo,c=n.x-n.xo,s=Math.abs(i),o=Math.abs(a),u=s+o,u===0){t.x=t.xo+(l+c)/2;return}t.x=t.xo+(l*o+c*s)/u;return}if(i=r.distance(t,e,!0,!0),a=r.distance(t,n,!0,!0),l=r.distance(e,e,!1,!0),c=r.distance(n,n,!1,!0),s=Math.abs(i),o=Math.abs(a),u=s+o,u===0){dr.setRelative(t,t,(l+c)/2,r,!0);return}dr.setRelative(t,t,(l*o+c*s)/u,r,!0)},normalSlope:Number.NEGATIVE_INFINITY,setRelative:function(t,e,n,r,i){if(!r||r===this){t.x=(i?e.xo:e.x)+n;return}var a=i?e.xo:e.x,s=i?e.yo:e.y,o=a+n*r.x,l=s+n*r.y;t.x=o+(t.y-l)/r.normalSlope},slope:0,touch:function(t){t.xTouched=!0},touched:function(t){return t.xTouched},untouch:function(t){t.xTouched=!1}},Ir={x:0,y:1,axis:"y",distance:function(t,e,n,r){return(n?t.yo:t.y)-(r?e.yo:e.y)},interpolate:function(t,e,n,r){var i,a,s,o,l,c,u;if(!r||r===this){if(i=t.yo-e.yo,a=t.yo-n.yo,l=e.y-e.yo,c=n.y-n.yo,s=Math.abs(i),o=Math.abs(a),u=s+o,u===0){t.y=t.yo+(l+c)/2;return}t.y=t.yo+(l*o+c*s)/u;return}if(i=r.distance(t,e,!0,!0),a=r.distance(t,n,!0,!0),l=r.distance(e,e,!1,!0),c=r.distance(n,n,!1,!0),s=Math.abs(i),o=Math.abs(a),u=s+o,u===0){Ir.setRelative(t,t,(l+c)/2,r,!0);return}Ir.setRelative(t,t,(l*o+c*s)/u,r,!0)},normalSlope:0,setRelative:function(t,e,n,r,i){if(!r||r===this){t.y=(i?e.yo:e.y)+n;return}var a=i?e.xo:e.x,s=i?e.yo:e.y,o=a+n*r.x,l=s+n*r.y;t.y=l+r.normalSlope*(t.x-o)},slope:Number.POSITIVE_INFINITY,touch:function(t){t.yTouched=!0},touched:function(t){return t.yTouched},untouch:function(t){t.yTouched=!1}};Object.freeze(dr);Object.freeze(Ir);function ns(t,e){this.x=t,this.y=e,this.axis=void 0,this.slope=e/t,this.normalSlope=-t/e,Object.freeze(this)}ns.prototype.distance=function(t,e,n,r){return this.x*dr.distance(t,e,n,r)+this.y*Ir.distance(t,e,n,r)};ns.prototype.interpolate=function(t,e,n,r){var i,a,s,o,l,c,u;if(s=r.distance(t,e,!0,!0),o=r.distance(t,n,!0,!0),i=r.distance(e,e,!1,!0),a=r.distance(n,n,!1,!0),l=Math.abs(s),c=Math.abs(o),u=l+c,u===0){this.setRelative(t,t,(i+a)/2,r,!0);return}this.setRelative(t,t,(i*c+a*l)/u,r,!0)};ns.prototype.setRelative=function(t,e,n,r,i){r=r||this;var a=i?e.xo:e.x,s=i?e.yo:e.y,o=a+n*r.x,l=s+n*r.y,c=r.normalSlope,u=this.slope,h=t.x,f=t.y;t.x=(u*h-c*o+l-f)/(u-c),t.y=u*(t.x-h)+f};ns.prototype.touch=function(t){t.xTouched=!0,t.yTouched=!0};function rs(t,e){var n=Math.sqrt(t*t+e*e);return t/=n,e/=n,t===1&&e===0?dr:t===0&&e===1?Ir:new ns(t,e)}function kr(t,e,n,r){this.x=this.xo=Math.round(t*64)/64,this.y=this.yo=Math.round(e*64)/64,this.lastPointOfContour=n,this.onCurve=r,this.prevPointOnContour=void 0,this.nextPointOnContour=void 0,this.xTouched=!1,this.yTouched=!1,Object.preventExtensions(this)}kr.prototype.nextTouched=function(t){for(var e=this.nextPointOnContour;!t.touched(e)&&e!==this;)e=e.nextPointOnContour;return e};kr.prototype.prevTouched=function(t){for(var e=this.prevPointOnContour;!t.touched(e)&&e!==this;)e=e.prevPointOnContour;return e};var $a=Object.freeze(new kr(0,0)),o1={cvCutIn:17/16,deltaBase:9,deltaShift:.125,loop:1,minDis:1,autoFlip:!0};function ii(t,e){switch(this.env=t,this.stack=[],this.prog=e,t){case"glyf":this.zp0=this.zp1=this.zp2=1,this.rp0=this.rp1=this.rp2=0;case"prep":this.fv=this.pv=this.dpv=dr,this.round=Yd}}$d.prototype.exec=function(t,e){if(typeof e!="number")throw new Error("Point size is not a number!");if(!(this._errorState>2)){var n=this.font,r=this._prepState;if(!r||r.ppem!==e){var i=this._fpgmState;if(!i){ii.prototype=o1,i=this._fpgmState=new ii("fpgm",n.tables.fpgm),i.funcs=[],i.font=n,exports.DEBUG&&(console.log("---EXEC FPGM---"),i.step=-1);try{Fi(i)}catch(c){console.log("Hinting error in FPGM:"+c),this._errorState=3;return}}ii.prototype=i,r=this._prepState=new ii("prep",n.tables.prep),r.ppem=e;var a=n.tables.cvt;if(a)for(var s=r.cvt=new Array(a.length),o=e/n.unitsPerEm,l=0;l<a.length;l++)s[l]=a[l]*o;else r.cvt=[];exports.DEBUG&&(console.log("---EXEC PREP---"),r.step=-1);try{Fi(r)}catch(c){this._errorState<2&&console.log("Hinting error in PREP:"+c),this._errorState=2}}if(!(this._errorState>1))try{return qd(t,r)}catch(c){this._errorState<1&&(console.log("Hinting error:"+c),console.log("Note: further hinting errors are silenced")),this._errorState=1;return}}};qd=function(t,e){var n=e.ppem/e.font.unitsPerEm,r=n,i=t.components,a,s,o;if(ii.prototype=e,!i)o=new ii("glyf",t.instructions),exports.DEBUG&&(console.log("---EXEC GLYPH---"),o.step=-1),wc(t,o,n,r),s=o.gZone;else{var l=e.font;s=[],a=[];for(var c=0;c<i.length;c++){var u=i[c],h=l.glyphs.get(u.glyphIndex);o=new ii("glyf",h.instructions),exports.DEBUG&&(console.log("---EXEC COMP "+c+"---"),o.step=-1),wc(h,o,n,r);for(var f=Math.round(u.dx*n),p=Math.round(u.dy*r),_=o.gZone,x=o.contours,m=0;m<_.length;m++){var d=_[m];d.xTouched=d.yTouched=!1,d.xo=d.x=d.x+f,d.yo=d.y=d.y+p}var w=s.length;s.push.apply(s,_);for(var b=0;b<x.length;b++)a.push(x[b]+w)}t.instructions&&!o.inhibitGridFit&&(o=new ii("glyf",t.instructions),o.gZone=o.z0=o.z1=o.z2=s,o.contours=a,s.push(new kr(0,0),new kr(Math.round(t.advanceWidth*n),0)),exports.DEBUG&&(console.log("---EXEC COMPOSITE---"),o.step=-1),Fi(o),s.length-=2)}return s};wc=function(t,e,n,r){for(var i=t.points||[],a=i.length,s=e.gZone=e.z0=e.z1=e.z2=[],o=e.contours=[],l,c=0;c<a;c++)l=i[c],s[c]=new kr(l.x*n,l.y*r,l.lastPointOfContour,l.onCurve);for(var u,h,f=0;f<a;f++)l=s[f],u||(u=l,o.push(f)),l.lastPointOfContour?(l.nextPointOnContour=u,u.prevPointOnContour=l,u=void 0):(h=s[f+1],l.nextPointOnContour=h,h.prevPointOnContour=l);if(!e.inhibitGridFit){if(exports.DEBUG){console.log("PROCESSING GLYPH",e.stack);for(var p=0;p<a;p++)console.log(p,s[p].x,s[p].y)}if(s.push(new kr(0,0),new kr(Math.round(t.advanceWidth*n),0)),Fi(e),s.length-=2,exports.DEBUG){console.log("FINISHED GLYPH",e.stack);for(var _=0;_<a;_++)console.log(_,s[_].x,s[_].y)}}};Fi=function(t){var e=t.prog;if(e){var n=e.length,r;for(t.ip=0;t.ip<n;t.ip++){if(exports.DEBUG&&t.step++,r=Xd[e[t.ip]],!r)throw new Error("unknown instruction: 0x"+Number(e[t.ip]).toString(16));r(t)}}};function po(t){for(var e=t.tZone=new Array(t.gZone.length),n=0;n<e.length;n++)e[n]=new kr(0,0)}function Zd(t,e){var n=t.prog,r=t.ip,i=1,a;do if(a=n[++r],a===88)i++;else if(a===89)i--;else if(a===64)r+=n[r+1]+1;else if(a===65)r+=2*n[r+1]+1;else if(a>=176&&a<=183)r+=a-176+1;else if(a>=184&&a<=191)r+=(a-184+1)*2;else if(e&&i===1&&a===27)break;while(i>0);t.ip=r}function Vf(t,e){exports.DEBUG&&console.log(e.step,"SVTCA["+t.axis+"]"),e.fv=e.pv=e.dpv=t}function Wf(t,e){exports.DEBUG&&console.log(e.step,"SPVTCA["+t.axis+"]"),e.pv=e.dpv=t}function Xf(t,e){exports.DEBUG&&console.log(e.step,"SFVTCA["+t.axis+"]"),e.fv=t}function qf(t,e){var n=e.stack,r=n.pop(),i=n.pop(),a=e.z2[r],s=e.z1[i];exports.DEBUG&&console.log("SPVTL["+t+"]",r,i);var o,l;t?(o=a.y-s.y,l=s.x-a.x):(o=s.x-a.x,l=s.y-a.y),e.pv=e.dpv=rs(o,l)}function $f(t,e){var n=e.stack,r=n.pop(),i=n.pop(),a=e.z2[r],s=e.z1[i];exports.DEBUG&&console.log("SFVTL["+t+"]",r,i);var o,l;t?(o=a.y-s.y,l=s.x-a.x):(o=s.x-a.x,l=s.y-a.y),e.fv=rs(o,l)}function l1(t){var e=t.stack,n=e.pop(),r=e.pop();exports.DEBUG&&console.log(t.step,"SPVFS[]",n,r),t.pv=t.dpv=rs(r,n)}function c1(t){var e=t.stack,n=e.pop(),r=e.pop();exports.DEBUG&&console.log(t.step,"SPVFS[]",n,r),t.fv=rs(r,n)}function u1(t){var e=t.stack,n=t.pv;exports.DEBUG&&console.log(t.step,"GPV[]"),e.push(n.x*16384),e.push(n.y*16384)}function f1(t){var e=t.stack,n=t.fv;exports.DEBUG&&console.log(t.step,"GFV[]"),e.push(n.x*16384),e.push(n.y*16384)}function h1(t){t.fv=t.pv,exports.DEBUG&&console.log(t.step,"SFVTPV[]")}function d1(t){var e=t.stack,n=e.pop(),r=e.pop(),i=e.pop(),a=e.pop(),s=e.pop(),o=t.z0,l=t.z1,c=o[n],u=o[r],h=l[i],f=l[a],p=t.z2[s];exports.DEBUG&&console.log("ISECT[], ",n,r,i,a,s);var _=c.x,x=c.y,m=u.x,d=u.y,w=h.x,b=h.y,E=f.x,R=f.y,U=(_-m)*(b-R)-(x-d)*(w-E),C=_*d-x*m,P=w*R-b*E;p.x=(C*(w-E)-P*(_-m))/U,p.y=(C*(b-R)-P*(x-d))/U}function p1(t){t.rp0=t.stack.pop(),exports.DEBUG&&console.log(t.step,"SRP0[]",t.rp0)}function m1(t){t.rp1=t.stack.pop(),exports.DEBUG&&console.log(t.step,"SRP1[]",t.rp1)}function v1(t){t.rp2=t.stack.pop(),exports.DEBUG&&console.log(t.step,"SRP2[]",t.rp2)}function g1(t){var e=t.stack.pop();switch(exports.DEBUG&&console.log(t.step,"SZP0[]",e),t.zp0=e,e){case 0:t.tZone||po(t),t.z0=t.tZone;break;case 1:t.z0=t.gZone;break;default:throw new Error("Invalid zone pointer")}}function _1(t){var e=t.stack.pop();switch(exports.DEBUG&&console.log(t.step,"SZP1[]",e),t.zp1=e,e){case 0:t.tZone||po(t),t.z1=t.tZone;break;case 1:t.z1=t.gZone;break;default:throw new Error("Invalid zone pointer")}}function x1(t){var e=t.stack.pop();switch(exports.DEBUG&&console.log(t.step,"SZP2[]",e),t.zp2=e,e){case 0:t.tZone||po(t),t.z2=t.tZone;break;case 1:t.z2=t.gZone;break;default:throw new Error("Invalid zone pointer")}}function y1(t){var e=t.stack.pop();switch(exports.DEBUG&&console.log(t.step,"SZPS[]",e),t.zp0=t.zp1=t.zp2=e,e){case 0:t.tZone||po(t),t.z0=t.z1=t.z2=t.tZone;break;case 1:t.z0=t.z1=t.z2=t.gZone;break;default:throw new Error("Invalid zone pointer")}}function S1(t){t.loop=t.stack.pop(),exports.DEBUG&&console.log(t.step,"SLOOP[]",t.loop)}function b1(t){exports.DEBUG&&console.log(t.step,"RTG[]"),t.round=Yd}function M1(t){exports.DEBUG&&console.log(t.step,"RTHG[]"),t.round=i1}function E1(t){var e=t.stack.pop();exports.DEBUG&&console.log(t.step,"SMD[]",e),t.minDis=e/64}function T1(t){exports.DEBUG&&console.log(t.step,"ELSE[]"),Zd(t,!1)}function w1(t){var e=t.stack.pop();exports.DEBUG&&console.log(t.step,"JMPR[]",e),t.ip+=e-1}function A1(t){var e=t.stack.pop();exports.DEBUG&&console.log(t.step,"SCVTCI[]",e),t.cvCutIn=e/64}function R1(t){var e=t.stack;exports.DEBUG&&console.log(t.step,"DUP[]"),e.push(e[e.length-1])}function ml(t){exports.DEBUG&&console.log(t.step,"POP[]"),t.stack.pop()}function C1(t){exports.DEBUG&&console.log(t.step,"CLEAR[]"),t.stack.length=0}function P1(t){var e=t.stack,n=e.pop(),r=e.pop();exports.DEBUG&&console.log(t.step,"SWAP[]"),e.push(n),e.push(r)}function D1(t){var e=t.stack;exports.DEBUG&&console.log(t.step,"DEPTH[]"),e.push(e.length)}function U1(t){var e=t.stack,n=e.pop(),r=e.pop();exports.DEBUG&&console.log(t.step,"LOOPCALL[]",n,r);var i=t.ip,a=t.prog;t.prog=t.funcs[n];for(var s=0;s<r;s++)Fi(t),exports.DEBUG&&console.log(++t.step,s+1<r?"next loopcall":"done loopcall",s);t.ip=i,t.prog=a}function L1(t){var e=t.stack.pop();exports.DEBUG&&console.log(t.step,"CALL[]",e);var n=t.ip,r=t.prog;t.prog=t.funcs[e],Fi(t),t.ip=n,t.prog=r,exports.DEBUG&&console.log(++t.step,"returning from",e)}function F1(t){var e=t.stack,n=e.pop();exports.DEBUG&&console.log(t.step,"CINDEX[]",n),e.push(e[e.length-n])}function I1(t){var e=t.stack,n=e.pop();exports.DEBUG&&console.log(t.step,"MINDEX[]",n),e.push(e.splice(e.length-n,1)[0])}function O1(t){if(t.env!=="fpgm")throw new Error("FDEF not allowed here");var e=t.stack,n=t.prog,r=t.ip,i=e.pop(),a=r;for(exports.DEBUG&&console.log(t.step,"FDEF[]",i);n[++r]!==45;);t.ip=r,t.funcs[i]=n.slice(a+1,r)}function Yf(t,e){var n=e.stack.pop(),r=e.z0[n],i=e.fv,a=e.pv;exports.DEBUG&&console.log(e.step,"MDAP["+t+"]",n);var s=a.distance(r,$a);t&&(s=e.round(s)),i.setRelative(r,$a,s,a),i.touch(r),e.rp0=e.rp1=n}function jf(t,e){var n=e.z2,r=n.length-2,i,a,s;exports.DEBUG&&console.log(e.step,"IUP["+t.axis+"]");for(var o=0;o<r;o++)i=n[o],!t.touched(i)&&(a=i.prevTouched(t),a!==i&&(s=i.nextTouched(t),a===s&&t.setRelative(i,i,t.distance(a,a,!1,!0),t,!0),t.interpolate(i,a,s,t)))}function Zf(t,e){for(var n=e.stack,r=t?e.rp1:e.rp2,i=(t?e.z0:e.z1)[r],a=e.fv,s=e.pv,o=e.loop,l=e.z2;o--;){var c=n.pop(),u=l[c],h=s.distance(i,i,!1,!0);a.setRelative(u,u,h,s),a.touch(u),exports.DEBUG&&console.log(e.step,(e.loop>1?"loop "+(e.loop-o)+": ":"")+"SHP["+(t?"rp1":"rp2")+"]",c)}e.loop=1}function Kf(t,e){var n=e.stack,r=t?e.rp1:e.rp2,i=(t?e.z0:e.z1)[r],a=e.fv,s=e.pv,o=n.pop(),l=e.z2[e.contours[o]],c=l;exports.DEBUG&&console.log(e.step,"SHC["+t+"]",o);var u=s.distance(i,i,!1,!0);do c!==i&&a.setRelative(c,c,u,s),c=c.nextPointOnContour;while(c!==l)}function Jf(t,e){var n=e.stack,r=t?e.rp1:e.rp2,i=(t?e.z0:e.z1)[r],a=e.fv,s=e.pv,o=n.pop();exports.DEBUG&&console.log(e.step,"SHZ["+t+"]",o);var l;switch(o){case 0:l=e.tZone;break;case 1:l=e.gZone;break;default:throw new Error("Invalid zone")}for(var c,u=s.distance(i,i,!1,!0),h=l.length-2,f=0;f<h;f++)c=l[f],a.setRelative(c,c,u,s)}function N1(t){for(var e=t.stack,n=t.loop,r=t.fv,i=e.pop()/64,a=t.z2;n--;){var s=e.pop(),o=a[s];exports.DEBUG&&console.log(t.step,(t.loop>1?"loop "+(t.loop-n)+": ":"")+"SHPIX[]",s,i),r.setRelative(o,o,i),r.touch(o)}t.loop=1}function k1(t){for(var e=t.stack,n=t.rp1,r=t.rp2,i=t.loop,a=t.z0[n],s=t.z1[r],o=t.fv,l=t.dpv,c=t.z2;i--;){var u=e.pop(),h=c[u];exports.DEBUG&&console.log(t.step,(t.loop>1?"loop "+(t.loop-i)+": ":"")+"IP[]",u,n,"<->",r),o.interpolate(h,a,s,l),o.touch(h)}t.loop=1}function Qf(t,e){var n=e.stack,r=n.pop()/64,i=n.pop(),a=e.z1[i],s=e.z0[e.rp0],o=e.fv,l=e.pv;o.setRelative(a,s,r,l),o.touch(a),exports.DEBUG&&console.log(e.step,"MSIRP["+t+"]",r,i),e.rp1=e.rp0,e.rp2=i,t&&(e.rp0=i)}function B1(t){for(var e=t.stack,n=t.rp0,r=t.z0[n],i=t.loop,a=t.fv,s=t.pv,o=t.z1;i--;){var l=e.pop(),c=o[l];exports.DEBUG&&console.log(t.step,(t.loop>1?"loop "+(t.loop-i)+": ":"")+"ALIGNRP[]",l),a.setRelative(c,r,0,s),a.touch(c)}t.loop=1}function G1(t){exports.DEBUG&&console.log(t.step,"RTDG[]"),t.round=r1}function eh(t,e){var n=e.stack,r=n.pop(),i=n.pop(),a=e.z0[i],s=e.fv,o=e.pv,l=e.cvt[r];exports.DEBUG&&console.log(e.step,"MIAP["+t+"]",r,"(",l,")",i);var c=o.distance(a,$a);t&&(Math.abs(c-l)<e.cvCutIn&&(c=l),c=e.round(c)),s.setRelative(a,$a,c,o),e.zp0===0&&(a.xo=a.x,a.yo=a.y),s.touch(a),e.rp0=e.rp1=i}function z1(t){var e=t.prog,n=t.ip,r=t.stack,i=e[++n];exports.DEBUG&&console.log(t.step,"NPUSHB[]",i);for(var a=0;a<i;a++)r.push(e[++n]);t.ip=n}function H1(t){var e=t.ip,n=t.prog,r=t.stack,i=n[++e];exports.DEBUG&&console.log(t.step,"NPUSHW[]",i);for(var a=0;a<i;a++){var s=n[++e]<<8|n[++e];s&32768&&(s=-((s^65535)+1)),r.push(s)}t.ip=e}function V1(t){var e=t.stack,n=t.store;n||(n=t.store=[]);var r=e.pop(),i=e.pop();exports.DEBUG&&console.log(t.step,"WS",r,i),n[i]=r}function W1(t){var e=t.stack,n=t.store,r=e.pop();exports.DEBUG&&console.log(t.step,"RS",r);var i=n&&n[r]||0;e.push(i)}function X1(t){var e=t.stack,n=e.pop(),r=e.pop();exports.DEBUG&&console.log(t.step,"WCVTP",n,r),t.cvt[r]=n/64}function q1(t){var e=t.stack,n=e.pop();exports.DEBUG&&console.log(t.step,"RCVT",n),e.push(t.cvt[n]*64)}function th(t,e){var n=e.stack,r=n.pop(),i=e.z2[r];exports.DEBUG&&console.log(e.step,"GC["+t+"]",r),n.push(e.dpv.distance(i,$a,t,!1)*64)}function nh(t,e){var n=e.stack,r=n.pop(),i=n.pop(),a=e.z1[r],s=e.z0[i],o=e.dpv.distance(s,a,t,t);exports.DEBUG&&console.log(e.step,"MD["+t+"]",r,i,"->",o),e.stack.push(Math.round(o*64))}function $1(t){exports.DEBUG&&console.log(t.step,"MPPEM[]"),t.stack.push(t.ppem)}function Y1(t){exports.DEBUG&&console.log(t.step,"FLIPON[]"),t.autoFlip=!0}function j1(t){var e=t.stack,n=e.pop(),r=e.pop();exports.DEBUG&&console.log(t.step,"LT[]",n,r),e.push(r<n?1:0)}function Z1(t){var e=t.stack,n=e.pop(),r=e.pop();exports.DEBUG&&console.log(t.step,"LTEQ[]",n,r),e.push(r<=n?1:0)}function K1(t){var e=t.stack,n=e.pop(),r=e.pop();exports.DEBUG&&console.log(t.step,"GT[]",n,r),e.push(r>n?1:0)}function J1(t){var e=t.stack,n=e.pop(),r=e.pop();exports.DEBUG&&console.log(t.step,"GTEQ[]",n,r),e.push(r>=n?1:0)}function Q1(t){var e=t.stack,n=e.pop(),r=e.pop();exports.DEBUG&&console.log(t.step,"EQ[]",n,r),e.push(n===r?1:0)}function eM(t){var e=t.stack,n=e.pop(),r=e.pop();exports.DEBUG&&console.log(t.step,"NEQ[]",n,r),e.push(n!==r?1:0)}function tM(t){var e=t.stack,n=e.pop();exports.DEBUG&&console.log(t.step,"ODD[]",n),e.push(Math.trunc(n)%2?1:0)}function nM(t){var e=t.stack,n=e.pop();exports.DEBUG&&console.log(t.step,"EVEN[]",n),e.push(Math.trunc(n)%2?0:1)}function rM(t){var e=t.stack.pop();exports.DEBUG&&console.log(t.step,"IF[]",e),e||(Zd(t,!0),exports.DEBUG&&console.log(t.step,"EIF[]"))}function iM(t){exports.DEBUG&&console.log(t.step,"EIF[]")}function aM(t){var e=t.stack,n=e.pop(),r=e.pop();exports.DEBUG&&console.log(t.step,"AND[]",n,r),e.push(n&&r?1:0)}function sM(t){var e=t.stack,n=e.pop(),r=e.pop();exports.DEBUG&&console.log(t.step,"OR[]",n,r),e.push(n||r?1:0)}function oM(t){var e=t.stack,n=e.pop();exports.DEBUG&&console.log(t.step,"NOT[]",n),e.push(n?0:1)}function vl(t,e){var n=e.stack,r=n.pop(),i=e.fv,a=e.pv,s=e.ppem,o=e.deltaBase+(t-1)*16,l=e.deltaShift,c=e.z0;exports.DEBUG&&console.log(e.step,"DELTAP["+t+"]",r,n);for(var u=0;u<r;u++){var h=n.pop(),f=n.pop(),p=o+((f&240)>>4);if(p===s){var _=(f&15)-8;_>=0&&_++,exports.DEBUG&&console.log(e.step,"DELTAPFIX",h,"by",_*l);var x=c[h];i.setRelative(x,x,_*l,a)}}}function lM(t){var e=t.stack,n=e.pop();exports.DEBUG&&console.log(t.step,"SDB[]",n),t.deltaBase=n}function cM(t){var e=t.stack,n=e.pop();exports.DEBUG&&console.log(t.step,"SDS[]",n),t.deltaShift=Math.pow(.5,n)}function uM(t){var e=t.stack,n=e.pop(),r=e.pop();exports.DEBUG&&console.log(t.step,"ADD[]",n,r),e.push(r+n)}function fM(t){var e=t.stack,n=e.pop(),r=e.pop();exports.DEBUG&&console.log(t.step,"SUB[]",n,r),e.push(r-n)}function hM(t){var e=t.stack,n=e.pop(),r=e.pop();exports.DEBUG&&console.log(t.step,"DIV[]",n,r),e.push(r*64/n)}function dM(t){var e=t.stack,n=e.pop(),r=e.pop();exports.DEBUG&&console.log(t.step,"MUL[]",n,r),e.push(r*n/64)}function pM(t){var e=t.stack,n=e.pop();exports.DEBUG&&console.log(t.step,"ABS[]",n),e.push(Math.abs(n))}function mM(t){var e=t.stack,n=e.pop();exports.DEBUG&&console.log(t.step,"NEG[]",n),e.push(-n)}function vM(t){var e=t.stack,n=e.pop();exports.DEBUG&&console.log(t.step,"FLOOR[]",n),e.push(Math.floor(n/64)*64)}function gM(t){var e=t.stack,n=e.pop();exports.DEBUG&&console.log(t.step,"CEILING[]",n),e.push(Math.ceil(n/64)*64)}function Is(t,e){var n=e.stack,r=n.pop();exports.DEBUG&&console.log(e.step,"ROUND[]"),n.push(e.round(r/64)*64)}function _M(t){var e=t.stack,n=e.pop(),r=e.pop();exports.DEBUG&&console.log(t.step,"WCVTF[]",n,r),t.cvt[r]=n*t.ppem/t.font.unitsPerEm}function gl(t,e){var n=e.stack,r=n.pop(),i=e.ppem,a=e.deltaBase+(t-1)*16,s=e.deltaShift;exports.DEBUG&&console.log(e.step,"DELTAC["+t+"]",r,n);for(var o=0;o<r;o++){var l=n.pop(),c=n.pop(),u=a+((c&240)>>4);if(u===i){var h=(c&15)-8;h>=0&&h++;var f=h*s;exports.DEBUG&&console.log(e.step,"DELTACFIX",l,"by",f),e.cvt[l]+=f}}}function xM(t){var e=t.stack.pop();exports.DEBUG&&console.log(t.step,"SROUND[]",e),t.round=jd;var n;switch(e&192){case 0:n=.5;break;case 64:n=1;break;case 128:n=2;break;default:throw new Error("invalid SROUND value")}switch(t.srPeriod=n,e&48){case 0:t.srPhase=0;break;case 16:t.srPhase=.25*n;break;case 32:t.srPhase=.5*n;break;case 48:t.srPhase=.75*n;break;default:throw new Error("invalid SROUND value")}e&=15,e===0?t.srThreshold=0:t.srThreshold=(e/8-.5)*n}function yM(t){var e=t.stack.pop();exports.DEBUG&&console.log(t.step,"S45ROUND[]",e),t.round=jd;var n;switch(e&192){case 0:n=Math.sqrt(2)/2;break;case 64:n=Math.sqrt(2);break;case 128:n=2*Math.sqrt(2);break;default:throw new Error("invalid S45ROUND value")}switch(t.srPeriod=n,e&48){case 0:t.srPhase=0;break;case 16:t.srPhase=.25*n;break;case 32:t.srPhase=.5*n;break;case 48:t.srPhase=.75*n;break;default:throw new Error("invalid S45ROUND value")}e&=15,e===0?t.srThreshold=0:t.srThreshold=(e/8-.5)*n}function SM(t){exports.DEBUG&&console.log(t.step,"ROFF[]"),t.round=n1}function bM(t){exports.DEBUG&&console.log(t.step,"RUTG[]"),t.round=a1}function MM(t){exports.DEBUG&&console.log(t.step,"RDTG[]"),t.round=s1}function EM(t){var e=t.stack.pop();exports.DEBUG&&console.log(t.step,"SCANCTRL[]",e)}function rh(t,e){var n=e.stack,r=n.pop(),i=n.pop(),a=e.z2[r],s=e.z1[i];exports.DEBUG&&console.log(e.step,"SDPVTL["+t+"]",r,i);var o,l;t?(o=a.y-s.y,l=s.x-a.x):(o=s.x-a.x,l=s.y-a.y),e.dpv=rs(o,l)}function TM(t){var e=t.stack,n=e.pop(),r=0;exports.DEBUG&&console.log(t.step,"GETINFO[]",n),n&1&&(r=35),n&32&&(r|=4096),e.push(r)}function wM(t){var e=t.stack,n=e.pop(),r=e.pop(),i=e.pop();exports.DEBUG&&console.log(t.step,"ROLL[]"),e.push(r),e.push(n),e.push(i)}function AM(t){var e=t.stack,n=e.pop(),r=e.pop();exports.DEBUG&&console.log(t.step,"MAX[]",n,r),e.push(Math.max(r,n))}function RM(t){var e=t.stack,n=e.pop(),r=e.pop();exports.DEBUG&&console.log(t.step,"MIN[]",n,r),e.push(Math.min(r,n))}function CM(t){var e=t.stack.pop();exports.DEBUG&&console.log(t.step,"SCANTYPE[]",e)}function PM(t){var e=t.stack.pop(),n=t.stack.pop();switch(exports.DEBUG&&console.log(t.step,"INSTCTRL[]",e,n),e){case 1:t.inhibitGridFit=!!n;return;case 2:t.ignoreCvt=!!n;return;default:throw new Error("invalid INSTCTRL[] selector")}}function Zr(t,e){var n=e.stack,r=e.prog,i=e.ip;exports.DEBUG&&console.log(e.step,"PUSHB["+t+"]");for(var a=0;a<t;a++)n.push(r[++i]);e.ip=i}function Kr(t,e){var n=e.ip,r=e.prog,i=e.stack;exports.DEBUG&&console.log(e.ip,"PUSHW["+t+"]");for(var a=0;a<t;a++){var s=r[++n]<<8|r[++n];s&32768&&(s=-((s^65535)+1)),i.push(s)}e.ip=n}function Ne(t,e,n,r,i,a){var s=a.stack,o=t&&s.pop(),l=s.pop(),c=a.rp0,u=a.z0[c],h=a.z1[l],f=a.minDis,p=a.fv,_=a.dpv,x,m,d,w;m=x=_.distance(h,u,!0,!0),d=m>=0?1:-1,m=Math.abs(m),t&&(w=a.cvt[o],r&&Math.abs(m-w)<a.cvCutIn&&(m=w)),n&&m<f&&(m=f),r&&(m=a.round(m)),p.setRelative(h,u,d*m,_),p.touch(h),exports.DEBUG&&console.log(a.step,(t?"MIRP[":"MDRP[")+(e?"M":"m")+(n?">":"_")+(r?"R":"_")+(i===0?"Gr":i===1?"Bl":i===2?"Wh":"")+"]",t?o+"("+a.cvt[o]+","+w+")":"",l,"(d =",x,"->",d*m,")"),a.rp1=a.rp0,a.rp2=l,e&&(a.rp0=l)}Xd=[Vf.bind(void 0,Ir),Vf.bind(void 0,dr),Wf.bind(void 0,Ir),Wf.bind(void 0,dr),Xf.bind(void 0,Ir),Xf.bind(void 0,dr),qf.bind(void 0,0),qf.bind(void 0,1),$f.bind(void 0,0),$f.bind(void 0,1),l1,c1,u1,f1,h1,d1,p1,m1,v1,g1,_1,x1,y1,S1,b1,M1,E1,T1,w1,A1,void 0,void 0,R1,ml,C1,P1,D1,F1,I1,void 0,void 0,void 0,U1,L1,O1,void 0,Yf.bind(void 0,0),Yf.bind(void 0,1),jf.bind(void 0,Ir),jf.bind(void 0,dr),Zf.bind(void 0,0),Zf.bind(void 0,1),Kf.bind(void 0,0),Kf.bind(void 0,1),Jf.bind(void 0,0),Jf.bind(void 0,1),N1,k1,Qf.bind(void 0,0),Qf.bind(void 0,1),B1,G1,eh.bind(void 0,0),eh.bind(void 0,1),z1,H1,V1,W1,X1,q1,th.bind(void 0,0),th.bind(void 0,1),void 0,nh.bind(void 0,0),nh.bind(void 0,1),$1,void 0,Y1,void 0,void 0,j1,Z1,K1,J1,Q1,eM,tM,nM,rM,iM,aM,sM,oM,vl.bind(void 0,1),lM,cM,uM,fM,hM,dM,pM,mM,vM,gM,Is.bind(void 0,0),Is.bind(void 0,1),Is.bind(void 0,2),Is.bind(void 0,3),void 0,void 0,void 0,void 0,_M,vl.bind(void 0,2),vl.bind(void 0,3),gl.bind(void 0,1),gl.bind(void 0,2),gl.bind(void 0,3),xM,yM,void 0,void 0,SM,void 0,bM,MM,ml,ml,void 0,void 0,void 0,void 0,void 0,EM,rh.bind(void 0,0),rh.bind(void 0,1),TM,void 0,wM,AM,RM,CM,PM,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,Zr.bind(void 0,1),Zr.bind(void 0,2),Zr.bind(void 0,3),Zr.bind(void 0,4),Zr.bind(void 0,5),Zr.bind(void 0,6),Zr.bind(void 0,7),Zr.bind(void 0,8),Kr.bind(void 0,1),Kr.bind(void 0,2),Kr.bind(void 0,3),Kr.bind(void 0,4),Kr.bind(void 0,5),Kr.bind(void 0,6),Kr.bind(void 0,7),Kr.bind(void 0,8),Ne.bind(void 0,0,0,0,0,0),Ne.bind(void 0,0,0,0,0,1),Ne.bind(void 0,0,0,0,0,2),Ne.bind(void 0,0,0,0,0,3),Ne.bind(void 0,0,0,0,1,0),Ne.bind(void 0,0,0,0,1,1),Ne.bind(void 0,0,0,0,1,2),Ne.bind(void 0,0,0,0,1,3),Ne.bind(void 0,0,0,1,0,0),Ne.bind(void 0,0,0,1,0,1),Ne.bind(void 0,0,0,1,0,2),Ne.bind(void 0,0,0,1,0,3),Ne.bind(void 0,0,0,1,1,0),Ne.bind(void 0,0,0,1,1,1),Ne.bind(void 0,0,0,1,1,2),Ne.bind(void 0,0,0,1,1,3),Ne.bind(void 0,0,1,0,0,0),Ne.bind(void 0,0,1,0,0,1),Ne.bind(void 0,0,1,0,0,2),Ne.bind(void 0,0,1,0,0,3),Ne.bind(void 0,0,1,0,1,0),Ne.bind(void 0,0,1,0,1,1),Ne.bind(void 0,0,1,0,1,2),Ne.bind(void 0,0,1,0,1,3),Ne.bind(void 0,0,1,1,0,0),Ne.bind(void 0,0,1,1,0,1),Ne.bind(void 0,0,1,1,0,2),Ne.bind(void 0,0,1,1,0,3),Ne.bind(void 0,0,1,1,1,0),Ne.bind(void 0,0,1,1,1,1),Ne.bind(void 0,0,1,1,1,2),Ne.bind(void 0,0,1,1,1,3),Ne.bind(void 0,1,0,0,0,0),Ne.bind(void 0,1,0,0,0,1),Ne.bind(void 0,1,0,0,0,2),Ne.bind(void 0,1,0,0,0,3),Ne.bind(void 0,1,0,0,1,0),Ne.bind(void 0,1,0,0,1,1),Ne.bind(void 0,1,0,0,1,2),Ne.bind(void 0,1,0,0,1,3),Ne.bind(void 0,1,0,1,0,0),Ne.bind(void 0,1,0,1,0,1),Ne.bind(void 0,1,0,1,0,2),Ne.bind(void 0,1,0,1,0,3),Ne.bind(void 0,1,0,1,1,0),Ne.bind(void 0,1,0,1,1,1),Ne.bind(void 0,1,0,1,1,2),Ne.bind(void 0,1,0,1,1,3),Ne.bind(void 0,1,1,0,0,0),Ne.bind(void 0,1,1,0,0,1),Ne.bind(void 0,1,1,0,0,2),Ne.bind(void 0,1,1,0,0,3),Ne.bind(void 0,1,1,0,1,0),Ne.bind(void 0,1,1,0,1,1),Ne.bind(void 0,1,1,0,1,2),Ne.bind(void 0,1,1,0,1,3),Ne.bind(void 0,1,1,1,0,0),Ne.bind(void 0,1,1,1,0,1),Ne.bind(void 0,1,1,1,0,2),Ne.bind(void 0,1,1,1,0,3),Ne.bind(void 0,1,1,1,1,0),Ne.bind(void 0,1,1,1,1,1),Ne.bind(void 0,1,1,1,1,2),Ne.bind(void 0,1,1,1,1,3)];function ya(t){this.char=t,this.state={},this.activeState=null}function eu(t,e,n){this.contextName=n,this.startIndex=t,this.endOffset=e}function DM(t,e,n){this.contextName=t,this.openRange=null,this.ranges=[],this.checkStart=e,this.checkEnd=n}function Jn(t,e){this.context=t,this.index=e,this.length=t.length,this.current=t[e],this.backtrack=t.slice(0,e),this.lookahead=t.slice(e+1)}function mo(t){this.eventId=t,this.subscribers=[]}function UM(t){var e=this,n=["start","end","next","newToken","contextStart","contextEnd","insertToken","removeToken","removeRange","replaceToken","replaceRange","composeRUD","updateContextsRanges"];n.forEach(function(i){Object.defineProperty(e.events,i,{value:new mo(i)})}),t&&n.forEach(function(i){var a=t[i];typeof a=="function"&&e.events[i].subscribe(a)});var r=["insertToken","removeToken","removeRange","replaceToken","replaceRange","composeRUD"];r.forEach(function(i){e.events[i].subscribe(e.updateContextsRanges)})}function Gt(t){this.tokens=[],this.registeredContexts={},this.contextCheckers=[],this.events={},this.registeredModifiers=[],UM.call(this,t)}ya.prototype.setState=function(t,e){return this.state[t]=e,this.activeState={key:t,value:this.state[t]},this.activeState};ya.prototype.getState=function(t){return this.state[t]||null};Gt.prototype.inboundIndex=function(t){return t>=0&&t<this.tokens.length};Gt.prototype.composeRUD=function(t){var e=this,n=!0,r=t.map(function(a){return e[a[0]].apply(e,a.slice(1).concat(n))}),i=function(a){return typeof a=="object"&&a.hasOwnProperty("FAIL")};if(r.every(i))return{FAIL:"composeRUD: one or more operations hasn't completed successfully",report:r.filter(i)};this.dispatch("composeRUD",[r.filter(function(a){return!i(a)})])};Gt.prototype.replaceRange=function(t,e,n,r){e=e!==null?e:this.tokens.length;var i=n.every(function(s){return s instanceof ya});if(!isNaN(t)&&this.inboundIndex(t)&&i){var a=this.tokens.splice.apply(this.tokens,[t,e].concat(n));return r||this.dispatch("replaceToken",[t,e,n]),[a,n]}else return{FAIL:"replaceRange: invalid tokens or startIndex."}};Gt.prototype.replaceToken=function(t,e,n){if(!isNaN(t)&&this.inboundIndex(t)&&e instanceof ya){var r=this.tokens.splice(t,1,e);return n||this.dispatch("replaceToken",[t,e]),[r[0],e]}else return{FAIL:"replaceToken: invalid token or index."}};Gt.prototype.removeRange=function(t,e,n){e=isNaN(e)?this.tokens.length:e;var r=this.tokens.splice(t,e);return n||this.dispatch("removeRange",[r,t,e]),r};Gt.prototype.removeToken=function(t,e){if(!isNaN(t)&&this.inboundIndex(t)){var n=this.tokens.splice(t,1);return e||this.dispatch("removeToken",[n,t]),n}else return{FAIL:"removeToken: invalid token index."}};Gt.prototype.insertToken=function(t,e,n){var r=t.every(function(i){return i instanceof ya});return r?(this.tokens.splice.apply(this.tokens,[e,0].concat(t)),n||this.dispatch("insertToken",[t,e]),t):{FAIL:"insertToken: invalid token(s)."}};Gt.prototype.registerModifier=function(t,e,n){this.events.newToken.subscribe(function(r,i){var a=[r,i],s=e===null||e.apply(this,a)===!0,o=[r,i];if(s){var l=n.apply(this,o);r.setState(t,l)}}),this.registeredModifiers.push(t)};mo.prototype.subscribe=function(t){return typeof t=="function"?this.subscribers.push(t)-1:{FAIL:"invalid '"+this.eventId+"' event handler"}};mo.prototype.unsubscribe=function(t){this.subscribers.splice(t,1)};Jn.prototype.setCurrentIndex=function(t){this.index=t,this.current=this.context[t],this.backtrack=this.context.slice(0,t),this.lookahead=this.context.slice(t+1)};Jn.prototype.get=function(t){switch(!0){case t===0:return this.current;case(t<0&&Math.abs(t)<=this.backtrack.length):return this.backtrack.slice(t)[0];case(t>0&&t<=this.lookahead.length):return this.lookahead[t-1];default:return null}};Gt.prototype.rangeToText=function(t){if(t instanceof eu)return this.getRangeTokens(t).map(function(e){return e.char}).join("")};Gt.prototype.getText=function(){return this.tokens.map(function(t){return t.char}).join("")};Gt.prototype.getContext=function(t){var e=this.registeredContexts[t];return e||null};Gt.prototype.on=function(t,e){var n=this.events[t];return n?n.subscribe(e):null};Gt.prototype.dispatch=function(t,e){var n=this,r=this.events[t];r instanceof mo&&r.subscribers.forEach(function(i){i.apply(n,e||[])})};Gt.prototype.registerContextChecker=function(t,e,n){if(this.getContext(t))return{FAIL:"context name '"+t+"' is already registered."};if(typeof e!="function")return{FAIL:"missing context start check."};if(typeof n!="function")return{FAIL:"missing context end check."};var r=new DM(t,e,n);return this.registeredContexts[t]=r,this.contextCheckers.push(r),r};Gt.prototype.getRangeTokens=function(t){var e=t.startIndex+t.endOffset;return[].concat(this.tokens.slice(t.startIndex,e))};Gt.prototype.getContextRanges=function(t){var e=this.getContext(t);return e?e.ranges:{FAIL:"context checker '"+t+"' is not registered."}};Gt.prototype.resetContextsRanges=function(){var t=this.registeredContexts;for(var e in t)if(t.hasOwnProperty(e)){var n=t[e];n.ranges=[]}};Gt.prototype.updateContextsRanges=function(){this.resetContextsRanges();for(var t=this.tokens.map(function(r){return r.char}),e=0;e<t.length;e++){var n=new Jn(t,e);this.runContextCheck(n)}this.dispatch("updateContextsRanges",[this.registeredContexts])};Gt.prototype.setEndOffset=function(t,e){var n=this.getContext(e).openRange.startIndex,r=new eu(n,t,e),i=this.getContext(e).ranges;return r.rangeId=e+"."+i.length,i.push(r),this.getContext(e).openRange=null,r};Gt.prototype.runContextCheck=function(t){var e=this,n=t.index;this.contextCheckers.forEach(function(r){var i=r.contextName,a=e.getContext(i).openRange;if(!a&&r.checkStart(t)&&(a=new eu(n,null,i),e.getContext(i).openRange=a,e.dispatch("contextStart",[i,n])),a&&r.checkEnd(t)){var s=n-a.startIndex+1,o=e.setEndOffset(s,i);e.dispatch("contextEnd",[i,o])}})};Gt.prototype.tokenize=function(t){this.tokens=[],this.resetContextsRanges();var e=Array.from(t);this.dispatch("start");for(var n=0;n<e.length;n++){var r=e[n],i=new Jn(e,n);this.dispatch("next",[i]),this.runContextCheck(i);var a=new ya(r);this.tokens.push(a),this.dispatch("newToken",[a,i])}return this.dispatch("end",[this.tokens]),this.tokens};function li(t){return/[\u0600-\u065F\u066A-\u06D2\u06FA-\u06FF]/.test(t)}function Kd(t){return/[\u0630\u0690\u0621\u0631\u0661\u0671\u0622\u0632\u0672\u0692\u06C2\u0623\u0673\u0693\u06C3\u0624\u0694\u06C4\u0625\u0675\u0695\u06C5\u06E5\u0676\u0696\u06C6\u0627\u0677\u0697\u06C7\u0648\u0688\u0698\u06C8\u0689\u0699\u06C9\u068A\u06CA\u066B\u068B\u06CB\u068C\u068D\u06CD\u06FD\u068E\u06EE\u06FE\u062F\u068F\u06CF\u06EF]/.test(t)}function hi(t){return/[\u0600-\u0605\u060C-\u060E\u0610-\u061B\u061E\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED]/.test(t)}function Xs(t){return/[A-z]/.test(t)}function LM(t){return/\s/.test(t)}function In(t){this.font=t,this.features={}}function Ri(t){this.id=t.id,this.tag=t.tag,this.substitution=t.substitution}function is(t,e){if(!t)return-1;switch(e.format){case 1:return e.glyphs.indexOf(t);case 2:for(var n=e.ranges,r=0;r<n.length;r++){var i=n[r];if(t>=i.start&&t<=i.end){var a=t-i.start;return i.index+a}}break;default:return-1}return-1}function FM(t,e){var n=is(t,e.coverage);return n===-1?null:t+e.deltaGlyphId}function IM(t,e){var n=is(t,e.coverage);return n===-1?null:e.substitute[n]}function _l(t,e){for(var n=[],r=0;r<t.length;r++){var i=t[r],a=e.current;a=Array.isArray(a)?a[0]:a;var s=is(a,i);s!==-1&&n.push(s)}return n.length!==t.length?-1:n}function OM(t,e){var n=e.inputCoverage.length+e.lookaheadCoverage.length+e.backtrackCoverage.length;if(t.context.length<n)return[];var r=_l(e.inputCoverage,t);if(r===-1)return[];var i=e.inputCoverage.length-1;if(t.lookahead.length<e.lookaheadCoverage.length)return[];for(var a=t.lookahead.slice(i);a.length&&hi(a[0].char);)a.shift();var s=new Jn(a,0),o=_l(e.lookaheadCoverage,s),l=[].concat(t.backtrack);for(l.reverse();l.length&&hi(l[0].char);)l.shift();if(l.length<e.backtrackCoverage.length)return[];var c=new Jn(l,0),u=_l(e.backtrackCoverage,c),h=r.length===e.inputCoverage.length&&o.length===e.lookaheadCoverage.length&&u.length===e.backtrackCoverage.length,f=[];if(h)for(var p=0;p<e.lookupRecords.length;p++)for(var _=e.lookupRecords[p],x=_.lookupListIndex,m=this.getLookupByIndex(x),d=0;d<m.subtables.length;d++){var w=m.subtables[d],b=this.getLookupMethod(m,w),E=this.getSubstitutionType(m,w);if(E==="12")for(var R=0;R<r.length;R++){var U=t.get(R),C=b(U);C&&f.push(C)}}return f}function NM(t,e){var n=t.current,r=is(n,e.coverage);if(r===-1)return null;for(var i,a=e.ligatureSets[r],s=0;s<a.length;s++){i=a[s];for(var o=0;o<i.components.length;o++){var l=t.lookahead[o],c=i.components[o];if(l!==c)break;if(o===i.components.length-1)return i}}return null}function kM(t,e){var n=is(t,e.coverage);return n===-1?null:e.sequences[n]}In.prototype.getDefaultScriptFeaturesIndexes=function(){for(var t=this.font.tables.gsub.scripts,e=0;e<t.length;e++){var n=t[e];if(n.tag==="DFLT")return n.script.defaultLangSys.featureIndexes}return[]};In.prototype.getScriptFeaturesIndexes=function(t){var e=this.font.tables;if(!e.gsub)return[];if(!t)return this.getDefaultScriptFeaturesIndexes();for(var n=this.font.tables.gsub.scripts,r=0;r<n.length;r++){var i=n[r];if(i.tag===t&&i.script.defaultLangSys)return i.script.defaultLangSys.featureIndexes;var a=i.langSysRecords;if(a)for(var s=0;s<a.length;s++){var o=a[s];if(o.tag===t){var l=o.langSys;return l.featureIndexes}}}return this.getDefaultScriptFeaturesIndexes()};In.prototype.mapTagsToFeatures=function(t,e){for(var n={},r=0;r<t.length;r++){var i=t[r].tag,a=t[r].feature;n[i]=a}this.features[e].tags=n};In.prototype.getScriptFeatures=function(t){var e=this.features[t];if(this.features.hasOwnProperty(t))return e;var n=this.getScriptFeaturesIndexes(t);if(!n)return null;var r=this.font.tables.gsub;return e=n.map(function(i){return r.features[i]}),this.features[t]=e,this.mapTagsToFeatures(e,t),e};In.prototype.getSubstitutionType=function(t,e){var n=t.lookupType.toString(),r=e.substFormat.toString();return n+r};In.prototype.getLookupMethod=function(t,e){var n=this,r=this.getSubstitutionType(t,e);switch(r){case"11":return function(i){return FM.apply(n,[i,e])};case"12":return function(i){return IM.apply(n,[i,e])};case"63":return function(i){return OM.apply(n,[i,e])};case"41":return function(i){return NM.apply(n,[i,e])};case"21":return function(i){return kM.apply(n,[i,e])};default:throw new Error("lookupType: "+t.lookupType+" - substFormat: "+e.substFormat+" is not yet supported")}};In.prototype.lookupFeature=function(t){var e=t.contextParams,n=e.index,r=this.getFeature({tag:t.tag,script:t.script});if(!r)return new Error("font '"+this.font.names.fullName.en+"' doesn't support feature '"+t.tag+"' for script '"+t.script+"'.");for(var i=this.getFeatureLookups(r),a=[].concat(e.context),s=0;s<i.length;s++)for(var o=i[s],l=this.getLookupSubtables(o),c=0;c<l.length;c++){var u=l[c],h=this.getSubstitutionType(o,u),f=this.getLookupMethod(o,u),p=void 0;switch(h){case"11":p=f(e.current),p&&a.splice(n,1,new Ri({id:11,tag:t.tag,substitution:p}));break;case"12":p=f(e.current),p&&a.splice(n,1,new Ri({id:12,tag:t.tag,substitution:p}));break;case"63":p=f(e),Array.isArray(p)&&p.length&&a.splice(n,1,new Ri({id:63,tag:t.tag,substitution:p}));break;case"41":p=f(e),p&&a.splice(n,1,new Ri({id:41,tag:t.tag,substitution:p}));break;case"21":p=f(e.current),p&&a.splice(n,1,new Ri({id:21,tag:t.tag,substitution:p}));break}e=new Jn(a,n),!(Array.isArray(p)&&!p.length)&&(p=null)}return a.length?a:null};In.prototype.supports=function(t){if(!t.script)return!1;this.getScriptFeatures(t.script);var e=this.features.hasOwnProperty(t.script);if(!t.tag)return e;var n=this.features[t.script].some(function(r){return r.tag===t.tag});return e&&n};In.prototype.getLookupSubtables=function(t){return t.subtables||null};In.prototype.getLookupByIndex=function(t){var e=this.font.tables.gsub.lookups;return e[t]||null};In.prototype.getFeatureLookups=function(t){return t.lookupListIndexes.map(this.getLookupByIndex.bind(this))};In.prototype.getFeature=function(e){if(!this.font)return{FAIL:"No font was found"};this.features.hasOwnProperty(e.script)||this.getScriptFeatures(e.script);var n=this.features[e.script];return n?n.tags[e.tag]?this.features[e.script].tags[e.tag]:null:{FAIL:"No feature for script "+e.script}};function BM(t){var e=t.current,n=t.get(-1);return n===null&&li(e)||!li(n)&&li(e)}function GM(t){var e=t.get(1);return e===null||!li(e)}var zM={startCheck:BM,endCheck:GM};function HM(t){var e=t.current,n=t.get(-1);return(li(e)||hi(e))&&!li(n)}function VM(t){var e=t.get(1);switch(!0){case e===null:return!0;case(!li(e)&&!hi(e)):var n=LM(e);if(!n)return!0;if(n){var r=!1;if(r=t.lookahead.some(function(i){return li(i)||hi(i)}),!r)return!0}break;default:return!1}}var WM={startCheck:HM,endCheck:VM};function XM(t,e,n){e[n].setState(t.tag,t.substitution)}function qM(t,e,n){e[n].setState(t.tag,t.substitution)}function $M(t,e,n){t.substitution.forEach(function(r,i){var a=e[n+i];a.setState(t.tag,r)})}function YM(t,e,n){var r=e[n];r.setState(t.tag,t.substitution.ligGlyph);for(var i=t.substitution.components.length,a=0;a<i;a++)r=e[n+a+1],r.setState("deleted",!0)}var ih={11:XM,12:qM,63:$M,41:YM};function tu(t,e,n){t instanceof Ri&&ih[t.id]&&ih[t.id](t,e,n)}function jM(t){for(var e=[].concat(t.backtrack),n=e.length-1;n>=0;n--){var r=e[n],i=Kd(r),a=hi(r);if(!i&&!a)return!0;if(i)return!1}return!1}function ZM(t){if(Kd(t.current))return!1;for(var e=0;e<t.lookahead.length;e++){var n=t.lookahead[e],r=hi(n);if(!r)return!0}return!1}function KM(t){var e=this,n="arab",r=this.featuresTags[n],i=this.tokenizer.getRangeTokens(t);if(i.length!==1){var a=new Jn(i.map(function(o){return o.getState("glyphIndex")}),0),s=new Jn(i.map(function(o){return o.char}),0);i.forEach(function(o,l){if(!hi(o.char)){a.setCurrentIndex(l),s.setCurrentIndex(l);var c=0;jM(s)&&(c|=1),ZM(s)&&(c|=2);var u;switch(c){case 1:u="fina";break;case 2:u="init";break;case 3:u="medi";break}if(r.indexOf(u)!==-1){var h=e.query.lookupFeature({tag:u,script:n,contextParams:a});if(h instanceof Error)return console.info(h.message);h.forEach(function(f,p){f instanceof Ri&&(tu(f,i,p),a.context[p]=f.substitution)})}}})}}function ah(t,e){var n=t.map(function(r){return r.activeState.value});return new Jn(n,0)}function JM(t){var e=this,n="arab",r=this.tokenizer.getRangeTokens(t),i=ah(r);i.context.forEach(function(a,s){i.setCurrentIndex(s);var o=e.query.lookupFeature({tag:"rlig",script:n,contextParams:i});o.length&&(o.forEach(function(l){return tu(l,r,s)}),i=ah(r))})}function QM(t){var e=t.current,n=t.get(-1);return n===null&&Xs(e)||!Xs(n)&&Xs(e)}function eE(t){var e=t.get(1);return e===null||!Xs(e)}var tE={startCheck:QM,endCheck:eE};function sh(t,e){var n=t.map(function(r){return r.activeState.value});return new Jn(n,0)}function nE(t){var e=this,n="latn",r=this.tokenizer.getRangeTokens(t),i=sh(r);i.context.forEach(function(a,s){i.setCurrentIndex(s);var o=e.query.lookupFeature({tag:"liga",script:n,contextParams:i});o.length&&(o.forEach(function(l){return tu(l,r,s)}),i=sh(r))})}function tr(t){this.baseDir=t||"ltr",this.tokenizer=new Gt,this.featuresTags={}}tr.prototype.setText=function(t){this.text=t};tr.prototype.contextChecks={latinWordCheck:tE,arabicWordCheck:zM,arabicSentenceCheck:WM};function xl(t){var e=this.contextChecks[t+"Check"];return this.tokenizer.registerContextChecker(t,e.startCheck,e.endCheck)}function rE(){return xl.call(this,"latinWord"),xl.call(this,"arabicWord"),xl.call(this,"arabicSentence"),this.tokenizer.tokenize(this.text)}function iE(){var t=this,e=this.tokenizer.getContextRanges("arabicSentence");e.forEach(function(n){var r=t.tokenizer.getRangeTokens(n);t.tokenizer.replaceRange(n.startIndex,n.endOffset,r.reverse())})}tr.prototype.registerFeatures=function(t,e){var n=this,r=e.filter(function(i){return n.query.supports({script:t,tag:i})});this.featuresTags.hasOwnProperty(t)?this.featuresTags[t]=this.featuresTags[t].concat(r):this.featuresTags[t]=r};tr.prototype.applyFeatures=function(t,e){if(!t)throw new Error("No valid font was provided to apply features");this.query||(this.query=new In(t));for(var n=0;n<e.length;n++){var r=e[n];this.query.supports({script:r.script})&&this.registerFeatures(r.script,r.tags)}};tr.prototype.registerModifier=function(t,e,n){this.tokenizer.registerModifier(t,e,n)};function nu(){if(this.tokenizer.registeredModifiers.indexOf("glyphIndex")===-1)throw new Error("glyphIndex modifier is required to apply arabic presentation features.")}function aE(){var t=this,e="arab";if(this.featuresTags.hasOwnProperty(e)){nu.call(this);var n=this.tokenizer.getContextRanges("arabicWord");n.forEach(function(r){KM.call(t,r)})}}function sE(){var t=this,e="arab";if(this.featuresTags.hasOwnProperty(e)){var n=this.featuresTags[e];if(n.indexOf("rlig")!==-1){nu.call(this);var r=this.tokenizer.getContextRanges("arabicWord");r.forEach(function(i){JM.call(t,i)})}}}function oE(){var t=this,e="latn";if(this.featuresTags.hasOwnProperty(e)){var n=this.featuresTags[e];if(n.indexOf("liga")!==-1){nu.call(this);var r=this.tokenizer.getContextRanges("latinWord");r.forEach(function(i){nE.call(t,i)})}}}tr.prototype.checkContextReady=function(t){return!!this.tokenizer.getContext(t)};tr.prototype.applyFeaturesToContexts=function(){this.checkContextReady("arabicWord")&&(aE.call(this),sE.call(this)),this.checkContextReady("latinWord")&&oE.call(this),this.checkContextReady("arabicSentence")&&iE.call(this)};tr.prototype.processText=function(t){(!this.text||this.text!==t)&&(this.setText(t),rE.call(this),this.applyFeaturesToContexts())};tr.prototype.getBidiText=function(t){return this.processText(t),this.tokenizer.getText()};tr.prototype.getTextGlyphs=function(t){this.processText(t);for(var e=[],n=0;n<this.tokenizer.tokens.length;n++){var r=this.tokenizer.tokens[n];if(!r.state.deleted){var i=r.activeState.value;e.push(Array.isArray(i)?i[0]:i)}}return e};function At(t){t=t||{},t.tables=t.tables||{},t.empty||(La(t.familyName,"When creating a new Font object, familyName is required."),La(t.styleName,"When creating a new Font object, styleName is required."),La(t.unitsPerEm,"When creating a new Font object, unitsPerEm is required."),La(t.ascender,"When creating a new Font object, ascender is required."),La(t.descender<=0,"When creating a new Font object, negative descender value is required."),this.names={fontFamily:{en:t.familyName||" "},fontSubfamily:{en:t.styleName||" "},fullName:{en:t.fullName||t.familyName+" "+t.styleName},postScriptName:{en:t.postScriptName||(t.familyName+t.styleName).replace(/\s/g,"")},designer:{en:t.designer||" "},designerURL:{en:t.designerURL||" "},manufacturer:{en:t.manufacturer||" "},manufacturerURL:{en:t.manufacturerURL||" "},license:{en:t.license||" "},licenseURL:{en:t.licenseURL||" "},version:{en:t.version||"Version 0.1"},description:{en:t.description||" "},copyright:{en:t.copyright||" "},trademark:{en:t.trademark||" "}},this.unitsPerEm=t.unitsPerEm||1e3,this.ascender=t.ascender,this.descender=t.descender,this.createdTimestamp=t.createdTimestamp,this.tables=Object.assign(t.tables,{os2:Object.assign({usWeightClass:t.weightClass||this.usWeightClasses.MEDIUM,usWidthClass:t.widthClass||this.usWidthClasses.MEDIUM,fsSelection:t.fsSelection||this.fsSelectionValues.REGULAR},t.tables.os2)})),this.supported=!0,this.glyphs=new gr.GlyphSet(this,t.glyphs||[]),this.encoding=new md(this),this.position=new ts(this),this.substitution=new Fn(this),this.tables=this.tables||{},this._push=null,this._hmtxTableData={},Object.defineProperty(this,"hinting",{get:function(){if(this._hinting)return this._hinting;if(this.outlinesFormat==="truetype")return this._hinting=new $d(this)}})}At.prototype.hasChar=function(t){return this.encoding.charToGlyphIndex(t)!==null};At.prototype.charToGlyphIndex=function(t){return this.encoding.charToGlyphIndex(t)};At.prototype.charToGlyph=function(t){var e=this.charToGlyphIndex(t),n=this.glyphs.get(e);return n||(n=this.glyphs.get(0)),n};At.prototype.updateFeatures=function(t){return this.defaultRenderOptions.features.map(function(e){return e.script==="latn"?{script:"latn",tags:e.tags.filter(function(n){return t[n]})}:e})};At.prototype.stringToGlyphs=function(t,e){var n=this,r=new tr,i=function(h){return n.charToGlyphIndex(h.char)};r.registerModifier("glyphIndex",null,i);var a=e?this.updateFeatures(e.features):this.defaultRenderOptions.features;r.applyFeatures(this,a);for(var s=r.getTextGlyphs(t),o=s.length,l=new Array(o),c=this.glyphs.get(0),u=0;u<o;u+=1)l[u]=this.glyphs.get(s[u])||c;return l};At.prototype.nameToGlyphIndex=function(t){return this.glyphNames.nameToGlyphIndex(t)};At.prototype.nameToGlyph=function(t){var e=this.nameToGlyphIndex(t),n=this.glyphs.get(e);return n||(n=this.glyphs.get(0)),n};At.prototype.glyphIndexToName=function(t){return this.glyphNames.glyphIndexToName?this.glyphNames.glyphIndexToName(t):""};At.prototype.getKerningValue=function(t,e){t=t.index||t,e=e.index||e;var n=this.position.defaultKerningTables;return n?this.position.getKerningValue(n,t,e):this.kerningPairs[t+","+e]||0};At.prototype.defaultRenderOptions={kerning:!0,features:[{script:"arab",tags:["init","medi","fina","rlig"]},{script:"latn",tags:["liga","rlig"]}]};At.prototype.forEachGlyph=function(t,e,n,r,i,a){e=e!==void 0?e:0,n=n!==void 0?n:0,r=r!==void 0?r:72,i=Object.assign({},this.defaultRenderOptions,i);var s=1/this.unitsPerEm*r,o=this.stringToGlyphs(t,i),l;if(i.kerning){var c=i.script||this.position.getDefaultScriptName();l=this.position.getKerningTables(c,i.language)}for(var u=0;u<o.length;u+=1){var h=o[u];if(a.call(this,h,e,n,r,i),h.advanceWidth&&(e+=h.advanceWidth*s),i.kerning&&u<o.length-1){var f=l?this.position.getKerningValue(l,h.index,o[u+1].index):this.getKerningValue(h,o[u+1]);e+=f*s}i.letterSpacing?e+=i.letterSpacing*r:i.tracking&&(e+=i.tracking/1e3*r)}return e};At.prototype.getPath=function(t,e,n,r,i){var a=new Kt;return this.forEachGlyph(t,e,n,r,i,function(s,o,l,c){var u=s.getPath(o,l,c,i,this);a.extend(u)}),a};At.prototype.getPaths=function(t,e,n,r,i){var a=[];return this.forEachGlyph(t,e,n,r,i,function(s,o,l,c){var u=s.getPath(o,l,c,i,this);a.push(u)}),a};At.prototype.getAdvanceWidth=function(t,e,n){return this.forEachGlyph(t,0,0,e,n,function(){})};At.prototype.draw=function(t,e,n,r,i,a){this.getPath(e,n,r,i,a).draw(t)};At.prototype.drawPoints=function(t,e,n,r,i,a){this.forEachGlyph(e,n,r,i,a,function(s,o,l,c){s.drawPoints(t,o,l,c)})};At.prototype.drawMetrics=function(t,e,n,r,i,a){this.forEachGlyph(e,n,r,i,a,function(s,o,l,c){s.drawMetrics(t,o,l,c)})};At.prototype.getEnglishName=function(t){var e=this.names[t];if(e)return e.en};At.prototype.validate=function(){var t=this;function e(r,i){}function n(r){var i=t.getEnglishName(r);i&&i.trim().length>0}n("fontFamily"),n("weightName"),n("manufacturer"),n("copyright"),n("version"),this.unitsPerEm>0};At.prototype.toTables=function(){return Yb.fontToTable(this)};At.prototype.toBuffer=function(){return console.warn("Font.toBuffer is deprecated. Use Font.toArrayBuffer instead."),this.toArrayBuffer()};At.prototype.toArrayBuffer=function(){for(var t=this.toTables(),e=t.encode(),n=new ArrayBuffer(e.length),r=new Uint8Array(n),i=0;i<e.length;i++)r[i]=e[i];return n};At.prototype.download=function(t){var e=this.getEnglishName("fontFamily"),n=this.getEnglishName("fontSubfamily");t=t||e.replace(/\s/g,"")+"-"+n+".otf";var r=this.toArrayBuffer();if(Zb())if(window.URL=window.URL||window.webkitURL,window.URL){var i=new DataView(r),a=new Blob([i],{type:"font/opentype"}),s=document.createElement("a");s.href=window.URL.createObjectURL(a),s.download=t;var o=document.createEvent("MouseEvents");o.initEvent("click",!0,!1),s.dispatchEvent(o)}else console.warn("Font file could not be downloaded. Try using a different browser.");else{var l=require("fs"),c=Kb(r);l.writeFileSync(t,c)}};At.prototype.fsSelectionValues={ITALIC:1,UNDERSCORE:2,NEGATIVE:4,OUTLINED:8,STRIKEOUT:16,BOLD:32,REGULAR:64,USER_TYPO_METRICS:128,WWS:256,OBLIQUE:512};At.prototype.usWidthClasses={ULTRA_CONDENSED:1,EXTRA_CONDENSED:2,CONDENSED:3,SEMI_CONDENSED:4,MEDIUM:5,SEMI_EXPANDED:6,EXPANDED:7,EXTRA_EXPANDED:8,ULTRA_EXPANDED:9};At.prototype.usWeightClasses={THIN:100,EXTRA_LIGHT:200,LIGHT:300,NORMAL:400,MEDIUM:500,SEMI_BOLD:600,BOLD:700,EXTRA_BOLD:800,BLACK:900};function Jd(t,e){var n=JSON.stringify(t),r=256;for(var i in e){var a=parseInt(i);if(!(!a||a<256)){if(JSON.stringify(e[i])===n)return a;r<=a&&(r=a+1)}}return e[r]=t,r}function lE(t,e,n){var r=Jd(e.name,n);return[{name:"tag_"+t,type:"TAG",value:e.tag},{name:"minValue_"+t,type:"FIXED",value:e.minValue<<16},{name:"defaultValue_"+t,type:"FIXED",value:e.defaultValue<<16},{name:"maxValue_"+t,type:"FIXED",value:e.maxValue<<16},{name:"flags_"+t,type:"USHORT",value:0},{name:"nameID_"+t,type:"USHORT",value:r}]}function cE(t,e,n){var r={},i=new ke.Parser(t,e);return r.tag=i.parseTag(),r.minValue=i.parseFixed(),r.defaultValue=i.parseFixed(),r.maxValue=i.parseFixed(),i.skip("uShort",1),r.name=n[i.parseUShort()]||{},r}function uE(t,e,n,r){for(var i=Jd(e.name,r),a=[{name:"nameID_"+t,type:"USHORT",value:i},{name:"flags_"+t,type:"USHORT",value:0}],s=0;s<n.length;++s){var o=n[s].tag;a.push({name:"axis_"+t+" "+o,type:"FIXED",value:e.coordinates[o]<<16})}return a}function fE(t,e,n,r){var i={},a=new ke.Parser(t,e);i.name=r[a.parseUShort()]||{},a.skip("uShort",1),i.coordinates={};for(var s=0;s<n.length;++s)i.coordinates[n[s].tag]=a.parseFixed();return i}function hE(t,e){var n=new De.Table("fvar",[{name:"version",type:"ULONG",value:65536},{name:"offsetToData",type:"USHORT",value:0},{name:"countSizePairs",type:"USHORT",value:2},{name:"axisCount",type:"USHORT",value:t.axes.length},{name:"axisSize",type:"USHORT",value:20},{name:"instanceCount",type:"USHORT",value:t.instances.length},{name:"instanceSize",type:"USHORT",value:4+t.axes.length*4}]);n.offsetToData=n.sizeOf();for(var r=0;r<t.axes.length;r++)n.fields=n.fields.concat(lE(r,t.axes[r],e));for(var i=0;i<t.instances.length;i++)n.fields=n.fields.concat(uE(i,t.instances[i],t.axes,e));return n}function dE(t,e,n){var r=new ke.Parser(t,e),i=r.parseULong();Qe.argument(i===65536,"Unsupported fvar table version.");var a=r.parseOffset16();r.skip("uShort",1);for(var s=r.parseUShort(),o=r.parseUShort(),l=r.parseUShort(),c=r.parseUShort(),u=[],h=0;h<s;h++)u.push(cE(t,e+a+h*o,n));for(var f=[],p=e+a+s*o,_=0;_<l;_++)f.push(fE(t,p+_*c,u,n));return{axes:u,instances:f}}var pE={make:hE,parse:dE},mE=function(){return{coverage:this.parsePointer(j.coverage),attachPoints:this.parseList(j.pointer(j.uShortList))}},vE=function(){var t=this.parseUShort();if(Qe.argument(t===1||t===2||t===3,"Unsupported CaretValue table version."),t===1)return{coordinate:this.parseShort()};if(t===2)return{pointindex:this.parseShort()};if(t===3)return{coordinate:this.parseShort()}},gE=function(){return this.parseList(j.pointer(vE))},_E=function(){return{coverage:this.parsePointer(j.coverage),ligGlyphs:this.parseList(j.pointer(gE))}},xE=function(){return this.parseUShort(),this.parseList(j.pointer(j.coverage))};function yE(t,e){e=e||0;var n=new j(t,e),r=n.parseVersion(1);Qe.argument(r===1||r===1.2||r===1.3,"Unsupported GDEF table version.");var i={version:r,classDef:n.parsePointer(j.classDef),attachList:n.parsePointer(mE),ligCaretList:n.parsePointer(_E),markAttachClassDef:n.parsePointer(j.classDef)};return r>=1.2&&(i.markGlyphSets=n.parsePointer(xE)),i}var SE={parse:yE},Qn=new Array(10);Qn[1]=function(){var e=this.offset+this.relativeOffset,n=this.parseUShort();if(n===1)return{posFormat:1,coverage:this.parsePointer(j.coverage),value:this.parseValueRecord()};if(n===2)return{posFormat:2,coverage:this.parsePointer(j.coverage),values:this.parseValueRecordList()};Qe.assert(!1,"0x"+e.toString(16)+": GPOS lookup type 1 format must be 1 or 2.")};Qn[2]=function(){var e=this.offset+this.relativeOffset,n=this.parseUShort();Qe.assert(n===1||n===2,"0x"+e.toString(16)+": GPOS lookup type 2 format must be 1 or 2.");var r=this.parsePointer(j.coverage),i=this.parseUShort(),a=this.parseUShort();if(n===1)return{posFormat:n,coverage:r,valueFormat1:i,valueFormat2:a,pairSets:this.parseList(j.pointer(j.list(function(){return{secondGlyph:this.parseUShort(),value1:this.parseValueRecord(i),value2:this.parseValueRecord(a)}})))};if(n===2){var s=this.parsePointer(j.classDef),o=this.parsePointer(j.classDef),l=this.parseUShort(),c=this.parseUShort();return{posFormat:n,coverage:r,valueFormat1:i,valueFormat2:a,classDef1:s,classDef2:o,class1Count:l,class2Count:c,classRecords:this.parseList(l,j.list(c,function(){return{value1:this.parseValueRecord(i),value2:this.parseValueRecord(a)}}))}}};Qn[3]=function(){return{error:"GPOS Lookup 3 not supported"}};Qn[4]=function(){return{error:"GPOS Lookup 4 not supported"}};Qn[5]=function(){return{error:"GPOS Lookup 5 not supported"}};Qn[6]=function(){return{error:"GPOS Lookup 6 not supported"}};Qn[7]=function(){return{error:"GPOS Lookup 7 not supported"}};Qn[8]=function(){return{error:"GPOS Lookup 8 not supported"}};Qn[9]=function(){return{error:"GPOS Lookup 9 not supported"}};function bE(t,e){e=e||0;var n=new j(t,e),r=n.parseVersion(1);return Qe.argument(r===1||r===1.1,"Unsupported GPOS table version "+r),r===1?{version:r,scripts:n.parseScriptList(),features:n.parseFeatureList(),lookups:n.parseLookupList(Qn)}:{version:r,scripts:n.parseScriptList(),features:n.parseFeatureList(),lookups:n.parseLookupList(Qn),variations:n.parseFeatureVariationsList()}}var ME=new Array(10);function EE(t){return new De.Table("GPOS",[{name:"version",type:"ULONG",value:65536},{name:"scripts",type:"TABLE",value:new De.ScriptList(t.scripts)},{name:"features",type:"TABLE",value:new De.FeatureList(t.features)},{name:"lookups",type:"TABLE",value:new De.LookupList(t.lookups,ME)}])}var TE={parse:bE,make:EE};function wE(t){var e={};t.skip("uShort");var n=t.parseUShort();Qe.argument(n===0,"Unsupported kern sub-table version."),t.skip("uShort",2);var r=t.parseUShort();t.skip("uShort",3);for(var i=0;i<r;i+=1){var a=t.parseUShort(),s=t.parseUShort(),o=t.parseShort();e[a+","+s]=o}return e}function AE(t){var e={};t.skip("uShort");var n=t.parseULong();n>1&&console.warn("Only the first kern subtable is supported."),t.skip("uLong");var r=t.parseUShort(),i=r&255;if(t.skip("uShort"),i===0){var a=t.parseUShort();t.skip("uShort",3);for(var s=0;s<a;s+=1){var o=t.parseUShort(),l=t.parseUShort(),c=t.parseShort();e[o+","+l]=c}}return e}function RE(t,e){var n=new ke.Parser(t,e),r=n.parseUShort();if(r===0)return wE(n);if(r===1)return AE(n);throw new Error("Unsupported kern table version ("+r+").")}var CE={parse:RE};function PE(t,e,n,r){for(var i=new ke.Parser(t,e),a=r?i.parseUShort:i.parseULong,s=[],o=0;o<n+1;o+=1){var l=a.call(i);r&&(l*=2),s.push(l)}return s}var DE={parse:PE};function UE(t,e){var n=require("fs");n.readFile(t,function(r,i){if(r)return e(r.message);e(null,Gd(i))})}function LE(t,e){var n=new XMLHttpRequest;n.open("get",t,!0),n.responseType="arraybuffer",n.onload=function(){return n.response?e(null,n.response):e("Font could not be loaded: "+n.statusText)},n.onerror=function(){e("Font could not be loaded")},n.send()}function oh(t,e){for(var n=[],r=12,i=0;i<e;i+=1){var a=ke.getTag(t,r),s=ke.getULong(t,r+4),o=ke.getULong(t,r+8),l=ke.getULong(t,r+12);n.push({tag:a,checksum:s,offset:o,length:l,compression:!1}),r+=16}return n}function FE(t,e){for(var n=[],r=44,i=0;i<e;i+=1){var a=ke.getTag(t,r),s=ke.getULong(t,r+4),o=ke.getULong(t,r+8),l=ke.getULong(t,r+12),c=void 0;o<l?c="WOFF":c=!1,n.push({tag:a,offset:s,compression:c,compressedLength:o,length:l}),r+=20}return n}function Vt(t,e){if(e.compression==="WOFF"){var n=new Uint8Array(t.buffer,e.offset+2,e.compressedLength-2),r=new Uint8Array(e.length);if(TS(n,r),r.byteLength!==e.length)throw new Error("Decompression error: "+e.tag+" decompressed length doesn't match recorded length");var i=new DataView(r.buffer,0);return{data:i,offset:0}}else return{data:t,offset:e.offset}}function ru(t,e){e=e??{};var n,r,i=new At({empty:!0}),a=new DataView(t,0),s,o=[],l=ke.getTag(a,0);if(l==="\0\0\0"||l==="true"||l==="typ1")i.outlinesFormat="truetype",s=ke.getUShort(a,4),o=oh(a,s);else if(l==="OTTO")i.outlinesFormat="cff",s=ke.getUShort(a,4),o=oh(a,s);else if(l==="wOFF"){var c=ke.getTag(a,4);if(c==="\0\0\0")i.outlinesFormat="truetype";else if(c==="OTTO")i.outlinesFormat="cff";else throw new Error("Unsupported OpenType flavor "+l);s=ke.getUShort(a,12),o=FE(a,s)}else throw new Error("Unsupported OpenType signature "+l);for(var u,h,f,p,_,x,m,d,w,b,E,R,U=0;U<s;U+=1){var C=o[U],P=void 0;switch(C.tag){case"cmap":P=Vt(a,C),i.tables.cmap=pd.parse(P.data,P.offset),i.encoding=new vd(i.tables.cmap);break;case"cvt ":P=Vt(a,C),R=new ke.Parser(P.data,P.offset),i.tables.cvt=R.parseShortList(C.length/2);break;case"fvar":h=C;break;case"fpgm":P=Vt(a,C),R=new ke.Parser(P.data,P.offset),i.tables.fpgm=R.parseByteList(C.length);break;case"head":P=Vt(a,C),i.tables.head=wd.parse(P.data,P.offset),i.unitsPerEm=i.tables.head.unitsPerEm,n=i.tables.head.indexToLocFormat;break;case"hhea":P=Vt(a,C),i.tables.hhea=Ad.parse(P.data,P.offset),i.ascender=i.tables.hhea.ascender,i.descender=i.tables.hhea.descender,i.numberOfHMetrics=i.tables.hhea.numberOfHMetrics;break;case"hmtx":m=C;break;case"ltag":P=Vt(a,C),r=Cd.parse(P.data,P.offset);break;case"maxp":P=Vt(a,C),i.tables.maxp=Pd.parse(P.data,P.offset),i.numGlyphs=i.tables.maxp.numGlyphs;break;case"name":b=C;break;case"OS/2":P=Vt(a,C),i.tables.os2=Tc.parse(P.data,P.offset);break;case"post":P=Vt(a,C),i.tables.post=Od.parse(P.data,P.offset),i.glyphNames=new Zc(i.tables.post);break;case"prep":P=Vt(a,C),R=new ke.Parser(P.data,P.offset),i.tables.prep=R.parseByteList(C.length);break;case"glyf":f=C;break;case"loca":w=C;break;case"CFF ":u=C;break;case"kern":d=C;break;case"GDEF":p=C;break;case"GPOS":_=C;break;case"GSUB":x=C;break;case"meta":E=C;break}}var S=Vt(a,b);if(i.tables.name=Id.parse(S.data,S.offset,r),i.names=i.tables.name,f&&w){var T=n===0,I=Vt(a,w),k=DE.parse(I.data,I.offset,i.numGlyphs,T),Y=Vt(a,f);i.glyphs=Wd.parse(Y.data,Y.offset,k,i,e)}else if(u){var X=Vt(a,u);Td.parse(X.data,X.offset,i,e)}else throw new Error("Font doesn't contain TrueType or CFF outlines.");var K=Vt(a,m);if(Rd.parse(i,K.data,K.offset,i.numberOfHMetrics,i.numGlyphs,i.glyphs,e),qS(i,e),d){var $=Vt(a,d);i.kerningPairs=CE.parse($.data,$.offset)}else i.kerningPairs={};if(p){var ne=Vt(a,p);i.tables.gdef=SE.parse(ne.data,ne.offset)}if(_){var H=Vt(a,_);i.tables.gpos=TE.parse(H.data,H.offset),i.position.init()}if(x){var oe=Vt(a,x);i.tables.gsub=Nd.parse(oe.data,oe.offset)}if(h){var xe=Vt(a,h);i.tables.fvar=pE.parse(xe.data,xe.offset,i.names)}if(E){var pe=Vt(a,E);i.tables.meta=kd.parse(pe.data,pe.offset),i.metas=i.tables.meta}return i}function IE(t,e,n){n=n??{};var r=typeof window>"u",i=r&&!n.isUrl?UE:LE;return new Promise(function(a,s){i(t,function(o,l){if(o){if(e)return e(o);s(o)}var c;try{c=ru(l,n)}catch(u){if(e)return e(u,null);s(u)}if(e)return e(null,c);a(c)})})}function OE(t,e){var n=require("fs"),r=n.readFileSync(t);return ru(Gd(r),e)}var NE=Object.freeze({__proto__:null,Font:At,Glyph:Ln,Path:Kt,BoundingBox:Gr,_parse:ke,parse:ru,load:IE,loadSync:OE});const kE="/snoopy3d-studio/assets/manifold-D9yvTBHx.wasm";let pr,Wt,cn=[],Dr={fonts:{}},ro,Ac,Qd,aa=0;const sr=t=>String(t).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function BE(t){Qd=t,Ac=Promise.all([mm({locateFile:()=>kE}),...["sans","serif","mono"].map(async e=>{const n=await fetch("/snoopy3d-studio/fonts/"+e+".ttf");if(!n.ok)throw Error("Не загружен шрифт "+e);Dr.fonts[e]=NE.parse(await n.arrayBuffer())})]),Ac.catch(e=>Br(e.message,!0))}const Ya=()=>Object.fromEntries(Wt.fields.map(t=>[t.key,t.type==="number"?Number(document.getElementById("g_"+t.key).value):document.getElementById("g_"+t.key).value])),GE=(t,e)=>`<label class="field">${sr(t.label)}${t.type==="select"?`<select id="g_${t.key}">${t.options.map(n=>`<option ${e===n?"selected":""}>${sr(n)}</option>`).join("")}</select>`:`<input id="g_${t.key}" type="${t.type}" value="${sr(e)}" ${t.type==="number"?`min="${t.min}" max="${t.max}" step="${t.step}"`:'maxlength="200"'}>`}</label>`;function zE(){return`<div class="hero"><span class="eyebrow">Локальная мастерская / STL + 3MF</span><h2>Из идеи — в объём</h2><p>Четыре генератора: коробки, вазы, абажуры и SKÅDIS. Размеры в миллиметрах, вращаемое превью и экспорт одной геометрии. Параметры можно сохранить в «Мои модели». <a href="LIMITATIONS.md" class="link">Примечания к печати</a>.</p></div><div class="grid">${va.map(t=>`<button class="card toolcard" data-tool="${t.id}"><div class="ico">${t.icon}</div><h3>${t.name}</h3><p>${t.description}</p><span class="tag">STL / 3MF</span></button>`).join("")}</div><div id="toolArea"></div>`}function Rc(){clearTimeout(ro),aa++,pr==null||pr.dispose(),pr=null,cn=[]}function Br(t,e=!1){const n=document.getElementById("genStatus");n&&(n.textContent=t,n.className=e?"status error":"status")}function ep(t,e,n){var a,s,o;if(Rc(),Wt=va.find(l=>l.id===t),!Wt)return;let r={...fh(t),...e};Dr.cached=n,Dr.cachedParams=JSON.stringify(r);const i=document.getElementById("toolArea");i.innerHTML=`<section class="card editor"><div class="actions editor-heading"><div><span class="eyebrow">Параметрический редактор</span><h2>${Wt.name}</h2></div><button class="secondary" id="closeEditor">Закрыть ×</button></div><div class="editor-grid"><div class="controls"><div class="fields">${Wt.fields.map(l=>GE(l,r[l.key])).join("")}</div><div class="actions">${["vase","lamp"].includes(t)?'<button class="secondary" id="surprise">Удиви меня</button><button class="secondary" id="seedLoad">Открыть номер</button>':""}<button class="secondary" id="resetModel">Сбросить параметры</button></div><p class="small">${Wt.notes||"Текст и основа экспортируются отдельными частями в 3MF."}</p></div><div class="viewport-panel"><div class="viewer-toolbar actions"><button class="secondary" id="fitView">По размеру</button><button class="secondary" id="wireView" aria-pressed="false">Сетка</button>${t==="lamp"?'<button class="secondary" id="nightView" aria-pressed="false">Подсветка</button>':""}<label class="field color-field">Цвет<input id="modelColor" type="color" value="#3ce0c1"></label></div><div id="preview" class="preview" aria-label="Интерактивное 3D-превью"></div><p class="small">Перетаскивание — вращение · колесо / жест — масштаб · правая кнопка — перемещение</p><div id="meshInfo" class="mesh-info"></div><p id="genStatus" class="status" role="status">Загрузка геометрического ядра и шрифтов…</p><div class="actions"><button id="exportSTL" disabled>↓ STL</button><button id="export3MF" disabled>↓ 3MF</button><button id="exportBambu" disabled>↓ 3MF Bambu · части</button><button class="secondary" id="saveModel" disabled>Сохранить модель</button></div></div></div></section>`;try{pr=new gS(document.getElementById("preview"))}catch(l){Br("3D-превью недоступно: "+l.message,!0);return}document.getElementById("closeEditor").onclick=()=>{Rc(),location.hash="generators"},i.querySelectorAll(".fields input,.fields select").forEach(l=>l.oninput=()=>{vo(),clearTimeout(ro),ro=setTimeout(io,300)}),document.getElementById("fitView").onclick=()=>pr.fit();for(const[l,c]of[["wireView","wire"],["nightView","night"]]){const u=document.getElementById(l);u&&(u.onclick=()=>{const h=u.getAttribute("aria-pressed")!=="true";u.setAttribute("aria-pressed",String(h)),pr[c](h)})}document.getElementById("modelColor").oninput=l=>{cn.forEach((c,u)=>{u===0&&(c.color=l.target.value)}),pr.set(cn)},document.getElementById("resetModel").onclick=()=>ep(t),(a=document.getElementById("surprise"))==null||a.addEventListener("click",()=>{const l=Math.floor(Math.random()*999998)+1,c=document.getElementById("g_seed");c&&(c.value=l),lh(l)}),(s=document.getElementById("seedLoad"))==null||s.addEventListener("click",()=>{var l;return lh(Number(((l=document.getElementById("g_seed"))==null?void 0:l.value)||1))}),document.getElementById("exportSTL").onclick=()=>yl("stl"),document.getElementById("export3MF").onclick=()=>yl("3mf"),document.getElementById("exportBambu").onclick=()=>yl("bambu"),document.getElementById("saveModel").onclick=()=>{if(cn.length)try{Qd({type:t,name:Wt.name,parameters:Ya(),parts:cn}),Br("Модель и параметры сохранены в «Мои модели».")}catch(l){Br(l.message,!0)}},(o=document.getElementById("g_style"))==null||o.addEventListener("change",l=>VE(t,l.target.value)),i.scrollIntoView({behavior:"smooth",block:"start"}),io()}function vo(){cn=[],aa++;for(const t of["exportSTL","export3MF","exportBambu","saveModel"]){const e=document.getElementById(t);e&&(e.disabled=!0)}}async function io(){clearTimeout(ro),XE(),++aa,vo();const t=aa;Br("Построение и проверка сетки…");try{if(await Ac,t!==aa||!pr)return;let e=Wt.upload&&Dr.cached&&!Dr.image&&!Dr.uploaded&&JSON.stringify(Ya())===Dr.cachedParams?Dr.cached:Sm(Wt.id,Ya(),Dr);const n=ho(e);if(!n.valid)throw Error("Сетка не прошла проверку: "+n.reports.filter(i=>!i.valid).map(i=>i.name).join(", "));if(t!==aa)return;cn=e,pr.set(cn);const r=document.getElementById("meshInfo");r.innerHTML=`<b>${n.size.map(i=>i.toFixed(1)).join(" × ")} мм</b><span>${n.triangles.toLocaleString("ru")} треугольников · ${(n.volume/1e3).toFixed(1)} см³ · ${cn.length} деталей</span><span class="ok">Замкнутая сетка · согласованные нормали</span>`,r.dataset.triangles=n.triangles,r.dataset.parts=cn.length,document.getElementById("preview").dataset.meshSignature=tp(cn);for(const i of["exportSTL","export3MF","exportBambu","saveModel"])document.getElementById(i).disabled=!1;Br("Превью и экспорт используют одну сетку.")}catch(e){Br(e.message,!0),document.getElementById("meshInfo").textContent="Экспорт заблокирован до исправления параметров."}}function tp(t){let e=2166136261;for(const n of t)for(const r of n.vertices)for(const i of r)e^=Math.round(i*1e3),e=Math.imul(e,16777619);return(e>>>0).toString(16)}function np(t,e,n){const r=document.createElement("a"),i=URL.createObjectURL(new Blob([t],{type:n}));r.href=i,r.download=e,document.body.append(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(i),1e4)}function yl(t){try{if(!cn.length||!ho(cn).valid)throw Error("Сначала постройте корректную модель");const e=tp(cn);np(t==="stl"?id(cn):t==="bambu"?nS(cn):Wc(cn),`SNOOPY3D_${Wt.id}_${e}.${t==="bambu"?"bambu.3mf":t}`,t==="stl"?"model/stl":"model/3mf"),Br(`Файл ${t.toUpperCase()} передан на скачивание. Сетка ${e}.`)}catch(e){Br(e.message,!0)}}function HE(t){return`<section class="card"><h2>Мои модели</h2><p class="muted">Модели сохраняются в этом браузере. Резервная копия содержит геометрию и параметры.</p><div class="actions"><button class="secondary" data-action="import">Импорт резервной копии</button></div><div class="grid saved-grid">${t.filter(e=>va.some(n=>n.id===e.type)).map(e=>`<article class="card"><h3>${sr(e.name)}</h3><p class="small">${sr(e.date)} · ${sr(e.type)}</p><div class="actions"><button class="secondary" data-open-project="${sr(e.id)}">Открыть</button>${e.parts?`<button data-project-stl="${sr(e.id)}">STL</button><button data-project-3mf="${sr(e.id)}">3MF</button>`:""}<button class="secondary" data-delete-project="${sr(e.id)}">Удалить</button></div></article>`).join("")||"<p>Сохраните первую модель из редактора.</p>"}</div></section>`}function VE(t,e){const n={Классика:{bulge:12,ribs:0,wave:0,twist:0},"Конус с рёбрами":{top:110,bulge:0,ribs:24,wave:2,twist:0},Гранёная:{section:"Шестиугольник",ribs:0,wave:0,twist:0},Волнистая:{ribs:8,wave:4,twist:45},Плиссе:{ribs:48,wave:3,bulge:35},Шёлковая:{section:"Шестиугольник",ribs:0,wave:0,twist:120},Элегантная:{top:45,bulge:45,ribs:12,wave:1,twist:60},Рифлёная:{ribs:40,wave:2,twist:0},Закрученная:{ribs:16,wave:3,twist:240},Гладкая:{ribs:0,wave:0,twist:0},Кашпо:{mode:"Кашпо с поддоном",h:90,top:110,bulge:0},Двухцветная:{ribs:24,wave:2,twist:90},Ромбы:{ribs:18,wave:4,twist:0},"Звезда-вихрь":{section:"Звезда",ribs:0,wave:0,twist:120},"Мягкий квадрат":{section:"Квадрат",ribs:0,wave:0,twist:15},"Чехол-волна":{mode:"Чехол",ribs:8,wave:4,twist:30},"Косой срез":{mode:"Чехол",ribs:0,wave:0,twist:0},Лепестки:{mode:"Чехол",section:"Звезда",ribs:5,wave:3},"Плиссе-конус":{diameter:130,top:75,ribs:48,wave:2,twist:0,bulge:0},Купол:{diameter:130,top:65,bulge:35,ribs:18,wave:2,twist:0},"Витой шестигранник":{section:"Шестиугольник",ribs:0,wave:0,twist:120},"Звёздное небо":{ribs:0,wave:0,twist:0},"Ажурные ромбы":{ribs:16,wave:2,twist:0},"Бочка-волна":{diameter:110,top:110,bulge:35,ribs:12,wave:3},"Плетёный колокол":{diameter:140,top:65,bulge:20,ribs:16,wave:2,twist:90},"Песочные часы":{diameter:110,top:110,bulge:-35,ribs:24,wave:1},Барабан:{diameter:110,top:110,bulge:0,ribs:0,wave:0,twist:0}};for(const[r,i]of Object.entries({h:130,wall:2,bottom:2,section:"Круг",mode:"Ваза",ribs:24,wave:2,twist:90,bulge:20,diameter:90,top:65,...n[e]})){const a=document.getElementById("g_"+r);a&&(a.value=i)}WE(),vo(),io()}function lh(t){for(const[i,a]of Object.entries(fh(Wt.id))){const s=document.getElementById("g_"+i);s&&(s.value=a)}document.getElementById("g_style").value=Wt.id==="vase"?"Классика":"Барабан";const e=document.getElementById("g_seed");e&&(e.value=t);let n=t>>>0;const r=()=>(n=n*1664525+1013904223>>>0,n/4294967296);for(const[i,a,s]of[["h",80,220],["diameter",70,120],["top",50,90],["ribs",8,24],["twist",-120,120],["bulge",0,35],["wave",.5,2]]){const o=document.getElementById("g_"+i);o&&(o.value=i==="wave"?(a+r()*(s-a)).toFixed(1):Math.round(a+r()*(s-a)))}vo(),io()}function WE(){if(!["vase","lamp"].includes(Wt.id))return;const t=Ya();t.mode!=="Спиральная печать"&&(document.getElementById("g_wall").value=Math.max(t.wall,bm(t)))}function XE(){if(!Wt||!document.getElementById("g_"+Wt.fields[0].key))return;const t=Ya(),e=new Set;if(Wt.id==="box"&&t.lid==="Без крышки")for(const n of["clearance","text","font","textSize","relief","engrave","align","spacing"])e.add(n);if(Wt.id==="vase"&&(t.mode!=="Кашпо с поддоном"&&e.add("drain"),t.style!=="Двухцветная"&&e.add("colorSplit"),(t.mode==="Чехол"||t.mode==="Спиральная печать")&&e.add("bottom"),t.mode==="Спиральная печать"&&e.add("wall")),Wt.id==="lamp"&&(e.add("bottom"),t.socket!=="Свой"&&e.add("socketDiameter"),t.socket==="Без крепления"))for(const n of["mount","ring","spokes"])e.add(n);if(Wt.id==="skadis"){const n=t.part==="Панель"?["part","cols","rows","h","spacer","holes","hole"]:["part","w","d","height","wall","clearance","panelThickness","clipBulge"];if(t.part==="Крючок"&&(n.push("hooks"),e.add("w"),e.add("height")),["Лоток","Стакан"].includes(t.part)&&n.push("divX","divY"),t.part==="Зажим"&&(n.push("clipGap"),e.add("height")),["Держатель кабеля","Держатель отвёртки"].includes(t.part)&&e.add("height"),t.part==="Крепёж")for(const r of["w","d","height","wall"])e.add(r);for(const r of Wt.fields)n.includes(r.key)||e.add(r.key)}for(const n of Wt.fields){const r=document.getElementById("g_"+n.key);r&&(r.closest("label").style.display=e.has(n.key)?"none":"")}}const Xt=t=>document.querySelector(t),Jr=t=>[...document.querySelectorAll(t)],qs=t=>new Intl.NumberFormat("ru-RU",{maximumFractionDigits:2}).format(t),$s=t=>qs(t)+" ₽",rp="snoopy3d_studio_v1";let un;try{un=JSON.parse(localStorage.getItem(rp))||{orders:[],materials:[],projects:[],settings:{}}}catch{un={orders:[],materials:[],projects:[],settings:{}}}for(const t of["orders","materials","projects"])Array.isArray(un[t])||(un[t]=[]);un.settings||(un.settings={});const iu=()=>{try{return localStorage.setItem(rp,JSON.stringify(un)),Xt("#saveState").textContent="Сохранено локально",!0}catch{return Xt("#saveState").textContent="Хранилище недоступно или заполнено",!1}},Os=[["calc","▣","Калькулятор печати"],["generators","⬡","Генераторы 3D"],["utility","⚙","Калькуляторы"],["projects","▤","Мои модели"]],ei=(t,e,n,r="1",i="0",a="")=>`<label class="field">${e}<input id="${t}" type="number" value="${n}" step="${r}" min="${i}" ${a!==""?`max="${a}"`:""}></label>`,ti=t=>{var e;return Number((e=Xt("#"+t))==null?void 0:e.value)},qE=(...t)=>t.every(e=>Number.isFinite(e)&&e>0),ch=(t,e,n=!1)=>`<button ${n?'class="secondary"':""} data-action="${e}">${t}</button>`,uh=(t,e)=>`<section class="card"><h2>${t}</h2>${e}</section>`,$E=()=>new Date().toISOString().slice(0,10);function Sl(t,e,n="application/octet-stream"){const r=URL.createObjectURL(new Blob([t],{type:n})),i=document.createElement("a");i.href=r,i.download=e,document.body.append(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(r),2e3)}let Pr=null;function Na(t){location.hash==="#"+t?as():location.hash=t}function as(){Rc();const t=location.hash.slice(1).split("/")[0],e=Os.some(r=>r[0]===t)?t:"calc";t!==e&&history.replaceState(null,"",location.pathname+location.search+"#"+e),Xt("#nav").innerHTML=Os.map(([r,i,a])=>`<button class="${e===r?"active":""}" data-page="${r}">${i} &nbsp; ${a}</button>`).join("");const n=Os.find(r=>r[0]===e)||Os[0];Xt("#heading").textContent=n[2],Xt("#subtitle").textContent=e==="generators"?"Параметрические модели с экспортом STL":"SNOOPY3D • Своя 3D-мастерская",Xt("#content").innerHTML={calc:YE,generators:ZE,utility:jE,projects:KE}[e](),QE(),e==="calc"&&ao(),e==="utility"&&ap(),e==="generators"&&location.hash.includes("/")&&JE(location.hash.split("/")[1])}const ip=[["mass","Масса пластика, г",100],["filament","Цена пластика, ₽/кг",1500],["hours","Время печати, ч",5],["watts","Средняя мощность, Вт",120],["kwh","Электричество, ₽/кВт·ч",7],["printer","Цена принтера, ₽",6e4],["life","Ресурс принтера, ч",5e3],["maintenance","Обслуживание, ₽/ч",3],["labor","Работа оператора, ₽",100],["packing","Упаковка, ₽",15],["other","Прочие расходы, ₽",0],["waste","Резерв на брак, %",5],["markup","Наценка к затратам, %",50],["tax","Налог с выручки, %",6],["commission","Комиссия с выручки, %",0],["quantity","Количество изделий, шт",1]];function YE(){let t={};try{t=JSON.parse(localStorage.getItem("snoopy_calc")||"{}")}catch{}return`<div class="grid two"><section class="card"><h2>Расчёт себестоимости FDM</h2><div class="fields">${ip.map(([e,n,r])=>ei(e,n,t[e]??r,e==="hours"?"0.1":"1")).join("")}</div><div class="actions">${ch("Сохранить расчёт","save-calc")}${ch("Скачать CSV","csv-calc",!0)}</div></section><section class="card"><h2>Смета</h2><div id="calcResult"></div><p class="small">Модель оценки: резерв на брак применяется к затратам, налог и комиссия — к выручке. Это не бухгалтерская или налоговая консультация.</p></section></div>`}let Cc={};function ao(){if(!Xt("#mass"))return;const t=Object.fromEntries(ip.map(([h])=>[h,ti(h)]));if(Object.values(t).some(h=>!Number.isFinite(h)||h<0)||t.life<=0||t.quantity<1||t.tax+t.commission>=100){Xt("#calcResult").innerHTML='<p class="error">Проверьте параметры: ресурс и количество должны быть больше нуля, сумма удержаний — меньше 100%.</p>';return}const e=t.mass/1e3*t.filament,n=t.hours*t.watts/1e3*t.kwh,r=t.hours*t.printer/t.life,i=t.hours*t.maintenance,a=t.labor+t.packing+t.other,s=(e+n+r+i+a)*(1+t.waste/100),o=s*(1+t.markup/100)/(1-(t.tax+t.commission)/100),l=o*t.tax/100,c=o*t.commission/100,u=o-s-l-c;Cc={...t,material:e,electric:n,depreciation:r,service:i,other:a,base:s,price:o,tax:l,commission:c,profit:u},Xt("#calcResult").innerHTML=`<div class="result"><span class="eyebrow">Рекомендуемая цена за 1 шт.</span><br><b>${$s(o)}</b><p>Плановая прибыль: <strong>${$s(u)}</strong></p></div><div class="tablewrap"><table><tbody>${[["Материал",e],["Электричество",n],["Амортизация",r],["Обслуживание",i],["Работа, упаковка и прочее",a],["Себестоимость с резервом",s],["Налог",l],["Комиссия",c],["Прибыль",u],["Цена всей партии",o*t.quantity]].map(([h,f])=>`<tr><td>${h}</td><td>${$s(f)}</td></tr>`).join("")}</tbody></table></div>`;try{localStorage.setItem("snoopy_calc",JSON.stringify(t))}catch{}}function jE(){return`<div class="grid two">${uh("Электричество",`<div class="fields">${ei("uPower","Мощность, Вт",120)}${ei("uHours","Время, ч",8)}${ei("uRate","Тариф, ₽/кВт·ч",7)}</div><div class="result" id="energyResult"></div>`)}${uh("Остаток филамента",`<div class="fields">${ei("uGross","Вес с катушкой, г",530)}${ei("uEmpty","Вес пустой катушки, г",220)}${ei("uDiameter","Диаметр нити, мм",1.75,".01")}${ei("uDensity","Плотность, г/см³",1.24,".01")}</div><div class="result" id="filamentResult"></div>`)}</div>`}function ap(){if(!Xt("#uPower"))return;const t=ti("uPower")*ti("uHours")/1e3,e=Math.max(0,ti("uGross")-ti("uEmpty")),n=ti("uDiameter"),r=ti("uDensity"),i=qE(n,r)?e/(r*Math.PI*(n/2)**2):0;Xt("#energyResult").innerHTML=`<b>${qs(t)} кВт·ч</b><p>${$s(t*ti("uRate"))}</p>`,Xt("#filamentResult").innerHTML=`<b>${qs(e)} г</b><p>≈ ${qs(i)} метров</p>`}function ZE(){return zE()}function KE(){return HE(un.projects)}function JE(t,e){if(!va.some(i=>i.id===t)){Pr=null,history.replaceState(null,"",location.pathname+location.search+"#generators");return}const n=Pr==null?void 0:Pr.parameters,r=Pr==null?void 0:Pr.parts;Pr=null,ep(t,n,r)}function QE(){Jr("[data-page]").forEach(t=>t.onclick=()=>{Na(t.dataset.page),Xt(".sidebar").classList.remove("open")}),Jr("[data-tool]").forEach(t=>t.onclick=()=>Na("generators/"+t.dataset.tool)),Jr("[data-action]").forEach(t=>t.onclick=()=>sp(t.dataset.action)),Jr("[data-delete-project]").forEach(t=>t.onclick=()=>{un.projects=un.projects.filter(e=>e.id!==t.dataset.deleteProject),iu(),as()}),Jr("[data-open-project]").forEach(t=>t.onclick=()=>{const e=un.projects.find(n=>n.id===t.dataset.openProject);Pr=e,Na("generators/"+e.type)});for(const[t,e]of[["data-project-stl","stl"],["data-project-3mf","3mf"]])Jr("["+t+"]").forEach(n=>n.onclick=()=>{try{const r=un.projects.find(i=>i.id===n.getAttribute(t));if(!ho(r.parts).valid)throw Error("Повреждённая модель");np(e==="stl"?id(r.parts):Wc(r.parts),"SNOOPY3D_"+r.type+"."+e,"model/"+e)}catch(r){alert(r.message)}});Xt("#mass")&&Jr("#content input").forEach(t=>t.oninput=ao),Xt("#uPower")&&Jr("#content input").forEach(t=>t.oninput=ap)}function sp(t){if(t.startsWith("go-"))return Na(t.slice(3));if(t==="close-tool"){Na("generators");return}if(t==="generate")return makeModel();if(t==="save-project")return saveProject();if(t==="save-calc"){ao(),Sl(JSON.stringify(Cc,null,2),"SNOOPY3D_cost.json","application/json");return}if(t==="csv-calc"){ao(),Sl("\uFEFF"+Object.entries(Cc).map(([e,n])=>e+";"+n).join(`\r
`),"SNOOPY3D_cost.csv","text/csv");return}if(t==="backup")return Sl(JSON.stringify({app:"SNOOPY3D",version:1,data:un},null,2),"SNOOPY3D_backup.json","application/json");t==="import"&&Xt("#fileImport").click()}Xt("#exportData").onclick=()=>sp("backup");Xt("#menu").onclick=()=>Xt(".sidebar").classList.toggle("open");Xt("#fileImport").onchange=async t=>{try{const e=t.target.files[0];if(!e)return;const n=JSON.parse(await e.text());if(n.app!=="SNOOPY3D"||!n.data||!["orders","materials","projects"].every(r=>Array.isArray(n.data[r])))throw Error("Неподходящий файл резервной копии");if(!confirm("Заменить локальные данные содержимым файла?"))return;un={orders:n.data.orders,materials:n.data.materials,projects:n.data.projects,settings:n.data.settings||{}},iu(),as()}catch(e){alert("Ошибка импорта: "+e.message)}finally{t.target.value=""}};BE(t=>{if(un.projects.unshift({...t,id:crypto.randomUUID(),date:$E()}),!iu())throw un.projects.shift(),Error("Модель не сохранена: хранилище заполнено. Скачайте STL/3MF или резервную копию.")});window.addEventListener("hashchange",as);as();
