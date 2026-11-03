import {bezierPoints,qualityOf} from './quality.js';
export function createTextSection(api,keep,text,font,size,spacing=0,parameters={}){
 if(!font)throw Error('Шрифт ещё не загружен.');if([...text].length>90)throw Error('Максимум 90 символов в строке.');const scale=size/(font.tables.os2.sCapHeight||font.unitsPerEm*.72),tolerance=qualityOf(parameters).tolerance;let x=0,contours=[],previous=null;
 for(const glyph of font.stringToGlyphs(text)){if(glyph.index===0&&glyph.name!=='.space')throw Error('Шрифт не содержит один из символов. Выберите другой шрифт.');if(previous)x+=font.getKerningValue(previous,glyph)*scale;const path=glyph.getPath(x,0,font.unitsPerEm*scale);let line=[],prev=[0,0],start=null;
  const add=(px,py)=>{const v=[px,-py];if(!line.length||Math.hypot(v[0]-line.at(-1)[0],v[1]-line.at(-1)[1])>1e-6)line.push(v);prev=[px,py]};
  const close=()=>{if(line.length>2){if(Math.hypot(line[0][0]-line.at(-1)[0],line[0][1]-line.at(-1)[1])<1e-6)line.pop();contours.push(line);}line=[];};
  for(const c of path.commands){if(c.type==='M'){close();add(c.x,c.y);start=[c.x,c.y];}if(c.type==='L')add(c.x,c.y);if(c.type==='Q'||c.type==='C'){const ps=c.type==='Q'?[prev,[c.x1,c.y1],[c.x,c.y]]:[prev,[c.x1,c.y1],[c.x2,c.y2],[c.x,c.y]];for(const [px,py] of bezierPoints(ps,tolerance))add(px,py);}if(c.type==='Z'){close();prev=start;}}
  close();x+=(glyph.advanceWidth||font.unitsPerEm*.5)*scale+spacing;previous=glyph;
 }
 if(!contours.length)return null;return keep(new api.CrossSection(contours,'EvenOdd'));
}
