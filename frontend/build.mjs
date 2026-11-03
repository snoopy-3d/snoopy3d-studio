import {build} from 'vite';
import {cp,mkdir,readdir,copyFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {resolve,join} from 'node:path';
const dir=fileURLToPath(new URL('.',import.meta.url)),repo=resolve(dir,'..'),staging=join(dir,'.public'),out=join(dir,'.dist');
await mkdir(staging,{recursive:true});
// Only public website media is staged; Git metadata and server files are excluded.
for(const name of ['photos','fonts','tools','media','hero-dragon.webp','brand-symbol.webp','studio-logo.webp','work-0.webp','work-7.webp','work-17.webp','older-0.webp','older-10.webp'])await cp(join(repo,name),join(staging,name),{recursive:true});
await build({worker:{format:'es'},configFile:false,root:join(dir,'source'),publicDir:staging,base:'./',build:{outDir:out,emptyOutDir:true,assetsDir:'assets-v3'}});
for(const name of await readdir(out))if(name!=='index.html')await cp(join(out,name),join(repo,name),{recursive:true});
await copyFile(join(out,'index.html'),join(repo,'index.html'));
console.log('Updated static site in repository root.');
