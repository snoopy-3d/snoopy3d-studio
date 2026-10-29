// ZIP STORE, UTF-8 filenames; no third-party runtime dependencies.
export function zipFiles(files){
  const crc=bytes=>{let c=0xffffffff;for(const x of bytes){c^=x;for(let k=0;k<8;k++)c=(c>>>1)^((c&1)?0xedb88320:0)}return(c^0xffffffff)>>>0};
  const local=[],central=[];let offset=0;
  for(const [name,value]of Object.entries(files)){
    const n=Buffer.from(name),b=Buffer.from(value),sum=crc(b),h=Buffer.alloc(30),d=Buffer.alloc(46);
    h.writeUInt32LE(0x04034b50);h.writeUInt16LE(20,4);h.writeUInt16LE(0x800,6);h.writeUInt32LE(sum,14);h.writeUInt32LE(b.length,18);h.writeUInt32LE(b.length,22);h.writeUInt16LE(n.length,26);
    d.writeUInt32LE(0x02014b50);d.writeUInt16LE(20,4);d.writeUInt16LE(20,6);d.writeUInt16LE(0x800,8);d.writeUInt32LE(sum,16);d.writeUInt32LE(b.length,20);d.writeUInt32LE(b.length,24);d.writeUInt16LE(n.length,28);d.writeUInt32LE(offset,42);
    local.push(h,n,b);central.push(d,n);offset+=h.length+n.length+b.length;
  }
  const c=Buffer.concat(central),end=Buffer.alloc(22);end.writeUInt32LE(0x06054b50);end.writeUInt16LE(Object.keys(files).length,8);end.writeUInt16LE(Object.keys(files).length,10);end.writeUInt32LE(c.length,12);end.writeUInt32LE(offset,16);return Buffer.concat([...local,c,end]);
}
