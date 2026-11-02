import QRCode from 'qrcode';
import jsQR from 'jsqr';
export function verifyQR(payload,ecc='M'){const q=QRCode.create(payload,{errorCorrectionLevel:ecc}),N=q.modules.size,S=6,W=(N+8)*S,data=new Uint8ClampedArray(W*W*4);data.fill(255);for(let y=0;y<N;y++)for(let x=0;x<N;x++)if(q.modules.get(y,x))for(let j=0;j<S;j++)for(let i=0;i<S;i++){const k=(((y+4)*S+j)*W+(x+4)*S+i)*4;data[k]=data[k+1]=data[k+2]=0;}const decoded=jsQR(data,W,W,{inversionAttempts:'dontInvert'});if(!decoded||decoded.data!==payload)throw Error('QR не прошёл проверку декодирования');return q;}
