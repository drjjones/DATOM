import{r as Se,a as DS,b as NS}from"./vendor-BEg11Z1w.js";var w_={exports:{}},bh={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var US=Se,OS=Symbol.for("react.element"),FS=Symbol.for("react.fragment"),BS=Object.prototype.hasOwnProperty,zS=US.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kS={key:!0,ref:!0,__self:!0,__source:!0};function T_(r,e,t){var n,i={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(n in e)BS.call(e,n)&&!kS.hasOwnProperty(n)&&(i[n]=e[n]);if(r&&r.defaultProps)for(n in e=r.defaultProps,e)i[n]===void 0&&(i[n]=e[n]);return{$$typeof:OS,type:r,key:s,ref:o,props:i,_owner:zS.current}}bh.Fragment=FS;bh.jsx=T_;bh.jsxs=T_;w_.exports=bh;var Bi=w_.exports,x0={},A_,y0=DS;A_=x0.createRoot=y0.createRoot,x0.hydrateRoot=y0.hydrateRoot;const VS="modulepreload",HS=function(r){return"/app/"+r},S0={},BP=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(t.map(u=>{if(u=HS(u),u in S0)return;S0[u]=!0;const h=u.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":VS,h||(p.as="script"),p.crossOrigin="",p.href=u,c&&p.setAttribute("nonce",c),document.head.appendChild(p),h)return new Promise((m,g)=>{p.addEventListener("load",m),p.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return i.then(o=>{for(const c of o||[])c.status==="rejected"&&s(c.reason);return e().catch(s)})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xl="184",Ds={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ns={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},C_=0,gp=1,R_=2,GS=3,P_=0,Xo=1,Wa=2,Fs=3,Dr=0,Yn=1,ki=2,hr=0,Vs=1,vp=2,_p=3,xp=4,I_=5,WS=6,Qr=100,L_=101,D_=102,N_=103,U_=104,O_=200,F_=201,B_=202,z_=203,Cu=204,Ru=205,k_=206,V_=207,H_=208,G_=209,W_=210,X_=211,Y_=212,q_=213,Z_=214,Pu=0,Iu=1,Lu=2,Ys=3,Du=4,Nu=5,Uu=6,Ou=7,yl=0,j_=1,J_=2,Ri=0,zp=1,kp=2,Vp=3,Eh=4,Hp=5,Gp=6,Wp=7,yp="attached",K_="detached",wh=300,fr=301,ns=302,Xa=303,Ya=304,ea=306,tl=1e3,ni=1001,nl=1002,ln=1003,Xp=1004,XS=1004,Vo=1005,YS=1005,jt=1006,qa=1007,qS=1007,cr=1008,ZS=1008,Gn=1009,Yp=1010,qp=1011,qo=1012,Th=1013,Pi=1014,Xn=1015,dr=1016,Ah=1017,Ch=1018,Zo=1020,Zp=35902,jp=35899,Jp=1021,Kp=1022,Un=1023,pr=1026,$r=1027,Rh=1028,Sl=1029,is=1030,Ph=1031,jS=1032,Ih=1033,Za=33776,ja=33777,Ja=33778,Ka=33779,Fu=35840,Bu=35841,zu=35842,ku=35843,Vu=36196,Hu=37492,Gu=37496,Wu=37488,Xu=37489,il=37490,Yu=37491,qu=37808,Zu=37809,ju=37810,Ju=37811,Ku=37812,Qu=37813,$u=37814,eh=37815,th=37816,nh=37817,ih=37818,rh=37819,sh=37820,oh=37821,ah=36492,lh=36494,ch=36495,uh=36283,hh=36284,rl=36285,fh=36286,Q_=2200,$_=2201,ex=2202,sl=2300,dh=2301,Eu=2302,Sp=2303,Bs=2400,zs=2401,ol=2402,Lh=2500,Qp=2501,JS=0,KS=1,QS=2,tx=3200,$S=3201,eM=3202,tM=3203,Nr=0,nx=1,Pr="",ei="srgb",al="srgb-linear",ll="linear",Gt="srgb",nM="",iM="rg",rM="ga",sM=0,Us=7680,oM=7681,aM=7682,lM=7683,cM=34055,uM=34056,hM=5386,fM=512,dM=513,pM=514,mM=515,gM=516,vM=517,_M=518,Mp=519,ix=512,rx=513,sx=514,Dh=515,ox=516,ax=517,Nh=518,lx=519,cl=35044,xM=35048,yM=35040,SM=35045,MM=35049,bM=35041,EM=35046,wM=35050,TM=35042,AM="100",bp="300 es",fi=2e3,qs=2001,CM={COMPUTE:"compute",RENDER:"render"},RM={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},PM={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},IM={TEXTURE_COMPARE:"depthTextureCompare"};function LM(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}const DM={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Ho(r,e){return new DM[r](e)}function cx(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function ul(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ux(){const r=ul("canvas");return r.style.display="block",r}const M0={};let rs=null;function NM(r){rs=r}function UM(){return rs}function hl(...r){const e="THREE."+r.shift();rs?rs("log",e,...r):console.log(e,...r)}function hx(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ze(...r){r=hx(r);const e="THREE."+r.shift();if(rs)rs("warn",e,...r);else{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function ot(...r){r=hx(r);const e="THREE."+r.shift();if(rs)rs("error",e,...r);else{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function ph(...r){const e=r.join(" ");e in M0||(M0[e]=!0,ze(...r))}function OM(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const FM={[Pu]:Iu,[Lu]:Uu,[Du]:Ou,[Ys]:Nu,[Iu]:Pu,[Uu]:Lu,[Ou]:Du,[Nu]:Ys};let Xi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}};const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let b0=1234567;const Hs=Math.PI/180,jo=180/Math.PI;function pi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[t&63|128]+Ln[t>>8&255]+"-"+Ln[t>>16&255]+Ln[t>>24&255]+Ln[n&255]+Ln[n>>8&255]+Ln[n>>16&255]+Ln[n>>24&255]).toLowerCase()}function vt(r,e,t){return Math.max(e,Math.min(t,r))}function $p(r,e){return(r%e+e)%e}function BM(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function zM(r,e,t){return r!==e?(t-r)/(e-r):0}function Qa(r,e,t){return(1-t)*r+t*e}function kM(r,e,t,n){return Qa(r,e,1-Math.exp(-t*n))}function VM(r,e=1){return e-Math.abs($p(r,e*2)-e)}function HM(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function GM(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function WM(r,e){return r+Math.floor(Math.random()*(e-r+1))}function XM(r,e){return r+Math.random()*(e-r)}function YM(r){return r*(.5-Math.random())}function qM(r){r!==void 0&&(b0=r);let e=b0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ZM(r){return r*Hs}function jM(r){return r*jo}function JM(r){return(r&r-1)===0&&r!==0}function KM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function QM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function $M(r,e,t,n,i){const s=Math.cos,o=Math.sin,c=s(t/2),u=o(t/2),h=s((e+n)/2),f=o((e+n)/2),p=s((e-n)/2),m=o((e-n)/2),g=s((n-e)/2),x=o((n-e)/2);switch(i){case"XYX":r.set(c*f,u*p,u*m,c*h);break;case"YZY":r.set(u*m,c*f,u*p,c*h);break;case"ZXZ":r.set(u*p,u*m,c*f,c*h);break;case"XZX":r.set(c*f,u*x,u*g,c*h);break;case"YXY":r.set(u*g,c*f,u*x,c*h);break;case"ZYZ":r.set(u*x,u*g,c*f,c*h);break;default:ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Wn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function wt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const fx={DEG2RAD:Hs,RAD2DEG:jo,generateUUID:pi,clamp:vt,euclideanModulo:$p,mapLinear:BM,inverseLerp:zM,lerp:Qa,damp:kM,pingpong:VM,smoothstep:HM,smootherstep:GM,randInt:WM,randFloat:XM,randFloatSpread:YM,seededRandom:qM,degToRad:ZM,radToDeg:jM,isPowerOfTwo:JM,ceilPowerOfTwo:KM,floorPowerOfTwo:QM,setQuaternionFromProperEuler:$M,normalize:wt,denormalize:Wn},Fm=class Fm{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Fm.prototype.isVector2=!0;let me=Fm;class An{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,c){let u=n[i+0],h=n[i+1],f=n[i+2],p=n[i+3],m=s[o+0],g=s[o+1],x=s[o+2],b=s[o+3];if(p!==b||u!==m||h!==g||f!==x){let y=u*m+h*g+f*x+p*b;y<0&&(m=-m,g=-g,x=-x,b=-b,y=-y);let _=1-c;if(y<.9995){const M=Math.acos(y),E=Math.sin(M);_=Math.sin(_*M)/E,c=Math.sin(c*M)/E,u=u*_+m*c,h=h*_+g*c,f=f*_+x*c,p=p*_+b*c}else{u=u*_+m*c,h=h*_+g*c,f=f*_+x*c,p=p*_+b*c;const M=1/Math.sqrt(u*u+h*h+f*f+p*p);u*=M,h*=M,f*=M,p*=M}}e[t]=u,e[t+1]=h,e[t+2]=f,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,i,s,o){const c=n[i],u=n[i+1],h=n[i+2],f=n[i+3],p=s[o],m=s[o+1],g=s[o+2],x=s[o+3];return e[t]=c*x+f*p+u*g-h*m,e[t+1]=u*x+f*m+h*p-c*g,e[t+2]=h*x+f*g+c*m-u*p,e[t+3]=f*x-c*p-u*m-h*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,c=Math.cos,u=Math.sin,h=c(n/2),f=c(i/2),p=c(s/2),m=u(n/2),g=u(i/2),x=u(s/2);switch(o){case"XYZ":this._x=m*f*p+h*g*x,this._y=h*g*p-m*f*x,this._z=h*f*x+m*g*p,this._w=h*f*p-m*g*x;break;case"YXZ":this._x=m*f*p+h*g*x,this._y=h*g*p-m*f*x,this._z=h*f*x-m*g*p,this._w=h*f*p+m*g*x;break;case"ZXY":this._x=m*f*p-h*g*x,this._y=h*g*p+m*f*x,this._z=h*f*x+m*g*p,this._w=h*f*p-m*g*x;break;case"ZYX":this._x=m*f*p-h*g*x,this._y=h*g*p+m*f*x,this._z=h*f*x-m*g*p,this._w=h*f*p+m*g*x;break;case"YZX":this._x=m*f*p+h*g*x,this._y=h*g*p+m*f*x,this._z=h*f*x-m*g*p,this._w=h*f*p-m*g*x;break;case"XZY":this._x=m*f*p-h*g*x,this._y=h*g*p-m*f*x,this._z=h*f*x+m*g*p,this._w=h*f*p+m*g*x;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],c=t[5],u=t[9],h=t[2],f=t[6],p=t[10],m=n+c+p;if(m>0){const g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(f-u)*g,this._y=(s-h)*g,this._z=(o-i)*g}else if(n>c&&n>p){const g=2*Math.sqrt(1+n-c-p);this._w=(f-u)/g,this._x=.25*g,this._y=(i+o)/g,this._z=(s+h)/g}else if(c>p){const g=2*Math.sqrt(1+c-n-p);this._w=(s-h)/g,this._x=(i+o)/g,this._y=.25*g,this._z=(u+f)/g}else{const g=2*Math.sqrt(1+p-n-c);this._w=(o-i)/g,this._x=(s+h)/g,this._y=(u+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,c=t._x,u=t._y,h=t._z,f=t._w;return this._x=n*f+o*c+i*h-s*u,this._y=i*f+o*u+s*c-n*h,this._z=s*f+o*h+n*u-i*c,this._w=o*f-n*c-i*u-s*h,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,c=this.dot(e);c<0&&(n=-n,i=-i,s=-s,o=-o,c=-c);let u=1-t;if(c<.9995){const h=Math.acos(c),f=Math.sin(h);u=Math.sin(u*h)/f,t=Math.sin(t*h)/f,this._x=this._x*u+n*t,this._y=this._y*u+i*t,this._z=this._z*u+s*t,this._w=this._w*u+o*t,this._onChangeCallback()}else this._x=this._x*u+n*t,this._y=this._y*u+i*t,this._z=this._z*u+s*t,this._w=this._w*u+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Bm=class Bm{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(E0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(E0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,c=e.z,u=e.w,h=2*(o*i-c*n),f=2*(c*t-s*i),p=2*(s*n-o*t);return this.x=t+u*h+o*p-c*f,this.y=n+u*f+c*h-s*p,this.z=i+u*p+s*f-o*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,c=t.y,u=t.z;return this.x=i*u-s*c,this.y=s*o-n*u,this.z=n*c-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return dd.copy(this).projectOnVector(e),this.sub(dd)}reflect(e){return this.sub(dd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Bm.prototype.isVector3=!0;let F=Bm;const dd=new F,E0=new An,zm=class zm{constructor(e,t,n,i,s,o,c,u,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,c,u,h)}set(e,t,n,i,s,o,c,u,h){const f=this.elements;return f[0]=e,f[1]=i,f[2]=c,f[3]=t,f[4]=s,f[5]=u,f[6]=n,f[7]=o,f[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],c=n[3],u=n[6],h=n[1],f=n[4],p=n[7],m=n[2],g=n[5],x=n[8],b=i[0],y=i[3],_=i[6],M=i[1],E=i[4],w=i[7],I=i[2],C=i[5],O=i[8];return s[0]=o*b+c*M+u*I,s[3]=o*y+c*E+u*C,s[6]=o*_+c*w+u*O,s[1]=h*b+f*M+p*I,s[4]=h*y+f*E+p*C,s[7]=h*_+f*w+p*O,s[2]=m*b+g*M+x*I,s[5]=m*y+g*E+x*C,s[8]=m*_+g*w+x*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],c=e[5],u=e[6],h=e[7],f=e[8];return t*o*f-t*c*h-n*s*f+n*c*u+i*s*h-i*o*u}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],c=e[5],u=e[6],h=e[7],f=e[8],p=f*o-c*h,m=c*u-f*s,g=h*s-o*u,x=t*p+n*m+i*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/x;return e[0]=p*b,e[1]=(i*h-f*n)*b,e[2]=(c*n-i*o)*b,e[3]=m*b,e[4]=(f*t-i*u)*b,e[5]=(i*s-c*t)*b,e[6]=g*b,e[7]=(n*u-h*t)*b,e[8]=(o*t-n*s)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,c){const u=Math.cos(s),h=Math.sin(s);return this.set(n*u,n*h,-n*(u*o+h*c)+o+e,-i*h,i*u,-i*(-h*o+u*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(pd.makeScale(e,t)),this}rotate(e){return this.premultiply(pd.makeRotation(-e)),this}translate(e,t){return this.premultiply(pd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};zm.prototype.isMatrix3=!0;let yt=zm;const pd=new yt,w0=new yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),T0=new yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function e1(){const r={enabled:!0,workingColorSpace:al,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Gt&&(i.r=Lr(i.r),i.g=Lr(i.g),i.b=Lr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Gt&&(i.r=Yo(i.r),i.g=Yo(i.g),i.b=Yo(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Pr?ll:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return ph("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return ph("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[al]:{primaries:e,whitePoint:n,transfer:ll,toXYZ:w0,fromXYZ:T0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:e,whitePoint:n,transfer:Gt,toXYZ:w0,fromXYZ:T0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),r}const Rt=e1();function Lr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Yo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let go;class dx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{go===void 0&&(go=ul("canvas")),go.width=e.width,go.height=e.height;const i=go.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=go}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ul("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Lr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Lr(t[n]/255)*255):t[n]=Lr(t[n]);return{data:t,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let t1=0;class es{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:t1++}),this.uuid=pi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,c=i.length;o<c;o++)i[o].isDataTexture?s.push(md(i[o].image)):s.push(md(i[o]))}else s=md(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function md(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?dx.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}let n1=0;const gd=new F;class nn extends Xi{constructor(e=nn.DEFAULT_IMAGE,t=nn.DEFAULT_MAPPING,n=ni,i=ni,s=jt,o=cr,c=Un,u=Gn,h=nn.DEFAULT_ANISOTROPY,f=Pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:n1++}),this.uuid=pi(),this.name="",this.source=new es(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=u,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(gd).x}get height(){return this.source.getSize(gd).y}get depth(){return this.source.getSize(gd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){ze(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case tl:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case nl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case tl:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case nl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=wh;nn.DEFAULT_ANISOTROPY=1;const km=class km{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const u=e.elements,h=u[0],f=u[4],p=u[8],m=u[1],g=u[5],x=u[9],b=u[2],y=u[6],_=u[10];if(Math.abs(f-m)<.01&&Math.abs(p-b)<.01&&Math.abs(x-y)<.01){if(Math.abs(f+m)<.1&&Math.abs(p+b)<.1&&Math.abs(x+y)<.1&&Math.abs(h+g+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(h+1)/2,w=(g+1)/2,I=(_+1)/2,C=(f+m)/4,O=(p+b)/4,T=(x+y)/4;return E>w&&E>I?E<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(E),i=C/n,s=O/n):w>I?w<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(w),n=C/i,s=T/i):I<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(I),n=O/s,i=T/s),this.set(n,i,s,t),this}let M=Math.sqrt((y-x)*(y-x)+(p-b)*(p-b)+(m-f)*(m-f));return Math.abs(M)<.001&&(M=1),this.x=(y-x)/M,this.y=(p-b)/M,this.z=(m-f)/M,this.w=Math.acos((h+g+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this.w=vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this.w=vt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};km.prototype.isVector4=!0;let Lt=km;class em extends Xi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new nn(i),o=n.count;for(let c=0;c<o;c++)this.textures[c]=s.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new es(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mi extends em{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Uh extends nn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class i1 extends mi{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Uh(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class Oh extends nn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class r1 extends mi{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Oh(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}const Mh=class Mh{constructor(e,t,n,i,s,o,c,u,h,f,p,m,g,x,b,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,c,u,h,f,p,m,g,x,b,y)}set(e,t,n,i,s,o,c,u,h,f,p,m,g,x,b,y){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=o,_[9]=c,_[13]=u,_[2]=h,_[6]=f,_[10]=p,_[14]=m,_[3]=g,_[7]=x,_[11]=b,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mh().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/vo.setFromMatrixColumn(e,0).length(),s=1/vo.setFromMatrixColumn(e,1).length(),o=1/vo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),c=Math.sin(n),u=Math.cos(i),h=Math.sin(i),f=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const m=o*f,g=o*p,x=c*f,b=c*p;t[0]=u*f,t[4]=-u*p,t[8]=h,t[1]=g+x*h,t[5]=m-b*h,t[9]=-c*u,t[2]=b-m*h,t[6]=x+g*h,t[10]=o*u}else if(e.order==="YXZ"){const m=u*f,g=u*p,x=h*f,b=h*p;t[0]=m+b*c,t[4]=x*c-g,t[8]=o*h,t[1]=o*p,t[5]=o*f,t[9]=-c,t[2]=g*c-x,t[6]=b+m*c,t[10]=o*u}else if(e.order==="ZXY"){const m=u*f,g=u*p,x=h*f,b=h*p;t[0]=m-b*c,t[4]=-o*p,t[8]=x+g*c,t[1]=g+x*c,t[5]=o*f,t[9]=b-m*c,t[2]=-o*h,t[6]=c,t[10]=o*u}else if(e.order==="ZYX"){const m=o*f,g=o*p,x=c*f,b=c*p;t[0]=u*f,t[4]=x*h-g,t[8]=m*h+b,t[1]=u*p,t[5]=b*h+m,t[9]=g*h-x,t[2]=-h,t[6]=c*u,t[10]=o*u}else if(e.order==="YZX"){const m=o*u,g=o*h,x=c*u,b=c*h;t[0]=u*f,t[4]=b-m*p,t[8]=x*p+g,t[1]=p,t[5]=o*f,t[9]=-c*f,t[2]=-h*f,t[6]=g*p+x,t[10]=m-b*p}else if(e.order==="XZY"){const m=o*u,g=o*h,x=c*u,b=c*h;t[0]=u*f,t[4]=-p,t[8]=h*f,t[1]=m*p+b,t[5]=o*f,t[9]=g*p-x,t[2]=x*p-g,t[6]=c*f,t[10]=b*p+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(s1,e,o1)}lookAt(e,t,n){const i=this.elements;return ui.subVectors(e,t),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),Xr.crossVectors(n,ui),Xr.lengthSq()===0&&(Math.abs(n.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),Xr.crossVectors(n,ui)),Xr.normalize(),Ac.crossVectors(ui,Xr),i[0]=Xr.x,i[4]=Ac.x,i[8]=ui.x,i[1]=Xr.y,i[5]=Ac.y,i[9]=ui.y,i[2]=Xr.z,i[6]=Ac.z,i[10]=ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],c=n[4],u=n[8],h=n[12],f=n[1],p=n[5],m=n[9],g=n[13],x=n[2],b=n[6],y=n[10],_=n[14],M=n[3],E=n[7],w=n[11],I=n[15],C=i[0],O=i[4],T=i[8],P=i[12],U=i[1],D=i[5],H=i[9],K=i[13],ie=i[2],G=i[6],Z=i[10],j=i[14],z=i[3],X=i[7],Y=i[11],oe=i[15];return s[0]=o*C+c*U+u*ie+h*z,s[4]=o*O+c*D+u*G+h*X,s[8]=o*T+c*H+u*Z+h*Y,s[12]=o*P+c*K+u*j+h*oe,s[1]=f*C+p*U+m*ie+g*z,s[5]=f*O+p*D+m*G+g*X,s[9]=f*T+p*H+m*Z+g*Y,s[13]=f*P+p*K+m*j+g*oe,s[2]=x*C+b*U+y*ie+_*z,s[6]=x*O+b*D+y*G+_*X,s[10]=x*T+b*H+y*Z+_*Y,s[14]=x*P+b*K+y*j+_*oe,s[3]=M*C+E*U+w*ie+I*z,s[7]=M*O+E*D+w*G+I*X,s[11]=M*T+E*H+w*Z+I*Y,s[15]=M*P+E*K+w*j+I*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],c=e[5],u=e[9],h=e[13],f=e[2],p=e[6],m=e[10],g=e[14],x=e[3],b=e[7],y=e[11],_=e[15],M=u*g-h*m,E=c*g-h*p,w=c*m-u*p,I=o*g-h*f,C=o*m-u*f,O=o*p-c*f;return t*(b*M-y*E+_*w)-n*(x*M-y*I+_*C)+i*(x*E-b*I+_*O)-s*(x*w-b*C+y*O)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],c=e[5],u=e[6],h=e[7],f=e[8],p=e[9],m=e[10],g=e[11],x=e[12],b=e[13],y=e[14],_=e[15],M=t*c-n*o,E=t*u-i*o,w=t*h-s*o,I=n*u-i*c,C=n*h-s*c,O=i*h-s*u,T=f*b-p*x,P=f*y-m*x,U=f*_-g*x,D=p*y-m*b,H=p*_-g*b,K=m*_-g*y,ie=M*K-E*H+w*D+I*U-C*P+O*T;if(ie===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/ie;return e[0]=(c*K-u*H+h*D)*G,e[1]=(i*H-n*K-s*D)*G,e[2]=(b*O-y*C+_*I)*G,e[3]=(m*C-p*O-g*I)*G,e[4]=(u*U-o*K-h*P)*G,e[5]=(t*K-i*U+s*P)*G,e[6]=(y*w-x*O-_*E)*G,e[7]=(f*O-m*w+g*E)*G,e[8]=(o*H-c*U+h*T)*G,e[9]=(n*U-t*H-s*T)*G,e[10]=(x*C-b*w+_*M)*G,e[11]=(p*w-f*C-g*M)*G,e[12]=(c*P-o*D-u*T)*G,e[13]=(t*D-n*P+i*T)*G,e[14]=(b*E-x*I-y*M)*G,e[15]=(f*I-p*E+m*M)*G,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,c=e.y,u=e.z,h=s*o,f=s*c;return this.set(h*o+n,h*c-i*u,h*u+i*c,0,h*c+i*u,f*c+n,f*u-i*o,0,h*u-i*c,f*u+i*o,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,c=t._z,u=t._w,h=s+s,f=o+o,p=c+c,m=s*h,g=s*f,x=s*p,b=o*f,y=o*p,_=c*p,M=u*h,E=u*f,w=u*p,I=n.x,C=n.y,O=n.z;return i[0]=(1-(b+_))*I,i[1]=(g+w)*I,i[2]=(x-E)*I,i[3]=0,i[4]=(g-w)*C,i[5]=(1-(m+_))*C,i[6]=(y+M)*C,i[7]=0,i[8]=(x+E)*O,i[9]=(y-M)*O,i[10]=(1-(m+b))*O,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let o=vo.set(i[0],i[1],i[2]).length();const c=vo.set(i[4],i[5],i[6]).length(),u=vo.set(i[8],i[9],i[10]).length();s<0&&(o=-o),Ui.copy(this);const h=1/o,f=1/c,p=1/u;return Ui.elements[0]*=h,Ui.elements[1]*=h,Ui.elements[2]*=h,Ui.elements[4]*=f,Ui.elements[5]*=f,Ui.elements[6]*=f,Ui.elements[8]*=p,Ui.elements[9]*=p,Ui.elements[10]*=p,t.setFromRotationMatrix(Ui),n.x=o,n.y=c,n.z=u,this}makePerspective(e,t,n,i,s,o,c=fi,u=!1){const h=this.elements,f=2*s/(t-e),p=2*s/(n-i),m=(t+e)/(t-e),g=(n+i)/(n-i);let x,b;if(u)x=s/(o-s),b=o*s/(o-s);else if(c===fi)x=-(o+s)/(o-s),b=-2*o*s/(o-s);else if(c===qs)x=-o/(o-s),b=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=f,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=p,h[9]=g,h[13]=0,h[2]=0,h[6]=0,h[10]=x,h[14]=b,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,i,s,o,c=fi,u=!1){const h=this.elements,f=2/(t-e),p=2/(n-i),m=-(t+e)/(t-e),g=-(n+i)/(n-i);let x,b;if(u)x=1/(o-s),b=o/(o-s);else if(c===fi)x=-2/(o-s),b=-(o+s)/(o-s);else if(c===qs)x=-1/(o-s),b=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=f,h[4]=0,h[8]=0,h[12]=m,h[1]=0,h[5]=p,h[9]=0,h[13]=g,h[2]=0,h[6]=0,h[10]=x,h[14]=b,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Mh.prototype.isMatrix4=!0;let _t=Mh;const vo=new F,Ui=new _t,s1=new F(0,0,0),o1=new F(1,1,1),Xr=new F,Ac=new F,ui=new F,A0=new _t,C0=new An;class Wi{constructor(e=0,t=0,n=0,i=Wi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],c=i[8],u=i[1],h=i[5],f=i[9],p=i[2],m=i[6],g=i[10];switch(t){case"XYZ":this._y=Math.asin(vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(vt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-vt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-f,h),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return A0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(A0,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return C0.setFromEuler(this),this.setFromQuaternion(C0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wi.DEFAULT_ORDER="XYZ";class Gs{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let a1=0;const R0=new F,_o=new An,br=new _t,Cc=new F,wa=new F,l1=new F,c1=new An,P0=new F(1,0,0),I0=new F(0,1,0),L0=new F(0,0,1),D0={type:"added"},u1={type:"removed"},xo={type:"childadded",child:null},vd={type:"childremoved",child:null};class Ut extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:a1++}),this.uuid=pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new F,t=new Wi,n=new An,i=new F(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new _t},normalMatrix:{value:new yt}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _o.setFromAxisAngle(e,t),this.quaternion.multiply(_o),this}rotateOnWorldAxis(e,t){return _o.setFromAxisAngle(e,t),this.quaternion.premultiply(_o),this}rotateX(e){return this.rotateOnAxis(P0,e)}rotateY(e){return this.rotateOnAxis(I0,e)}rotateZ(e){return this.rotateOnAxis(L0,e)}translateOnAxis(e,t){return R0.copy(e).applyQuaternion(this.quaternion),this.position.add(R0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(P0,e)}translateY(e){return this.translateOnAxis(I0,e)}translateZ(e){return this.translateOnAxis(L0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(br.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Cc.copy(e):Cc.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?br.lookAt(wa,Cc,this.up):br.lookAt(Cc,wa,this.up),this.quaternion.setFromRotationMatrix(br),i&&(br.extractRotation(i.matrixWorld),_o.setFromRotationMatrix(br),this.quaternion.premultiply(_o.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(D0),xo.child=e,this.dispatchEvent(xo),xo.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(u1),vd.child=e,this.dispatchEvent(vd),vd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),br.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),br.multiply(e.parent.matrixWorld)),e.applyMatrix4(br),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(D0),xo.child=e,this.dispatchEvent(xo),xo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,e,l1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,c1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(c=>({...c})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(c,u){return c[u.uuid]===void 0&&(c[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const u=c.shapes;if(Array.isArray(u))for(let h=0,f=u.length;h<f;h++){const p=u[h];s(e.shapes,p)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let u=0,h=this.material.length;u<h;u++)c.push(s(e.materials,this.material[u]));i.material=c}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let c=0;c<this.children.length;c++)i.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let c=0;c<this.animations.length;c++){const u=this.animations[c];i.animations.push(s(e.animations,u))}}if(t){const c=o(e.geometries),u=o(e.materials),h=o(e.textures),f=o(e.images),p=o(e.shapes),m=o(e.skeletons),g=o(e.animations),x=o(e.nodes);c.length>0&&(n.geometries=c),u.length>0&&(n.materials=u),h.length>0&&(n.textures=h),f.length>0&&(n.images=f),p.length>0&&(n.shapes=p),m.length>0&&(n.skeletons=m),g.length>0&&(n.animations=g),x.length>0&&(n.nodes=x)}return n.object=i,n;function o(c){const u=[];for(const h in c){const f=c[h];delete f.metadata,u.push(f)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ut.DEFAULT_UP=new F(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Go extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const h1={type:"move"};class wu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Go,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Go,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Go,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const c=this._targetRay,u=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){o=!0;for(const b of e.hand.values()){const y=t.getJointPose(b,n),_=this._getHandJoint(h,b);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const f=h.joints["index-finger-tip"],p=h.joints["thumb-tip"],m=f.position.distanceTo(p.position),g=.02,x=.005;h.inputState.pinching&&m>g+x?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=g-x&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,u.eventsEnabled&&u.dispatchEvent({type:"gripUpdated",data:e,target:this})));c!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(c.matrix.fromArray(i.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,i.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(i.linearVelocity)):c.hasLinearVelocity=!1,i.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(i.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(h1)))}return c!==null&&(c.visible=i!==null),u!==null&&(u.visible=s!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Go;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const px={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yr={h:0,s:0,l:0},Rc={h:0,s:0,l:0};function _d(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Rt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Rt.workingColorSpace){if(e=$p(e,1),t=vt(t,0,1),n=vt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=_d(o,s,e+1/3),this.g=_d(o,s,e),this.b=_d(o,s,e-1/3)}return Rt.colorSpaceToWorking(this,i),this}setStyle(e,t=ei){function n(s){s!==void 0&&parseFloat(s)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],c=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ze("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ei){const n=px[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Lr(e.r),this.g=Lr(e.g),this.b=Lr(e.b),this}copyLinearToSRGB(e){return this.r=Yo(e.r),this.g=Yo(e.g),this.b=Yo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return Rt.workingToColorSpace(Dn.copy(this),e),Math.round(vt(Dn.r*255,0,255))*65536+Math.round(vt(Dn.g*255,0,255))*256+Math.round(vt(Dn.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.workingToColorSpace(Dn.copy(this),t);const n=Dn.r,i=Dn.g,s=Dn.b,o=Math.max(n,i,s),c=Math.min(n,i,s);let u,h;const f=(c+o)/2;if(c===o)u=0,h=0;else{const p=o-c;switch(h=f<=.5?p/(o+c):p/(2-o-c),o){case n:u=(i-s)/p+(i<s?6:0);break;case i:u=(s-n)/p+2;break;case s:u=(n-i)/p+4;break}u/=6}return e.h=u,e.s=h,e.l=f,e}getRGB(e,t=Rt.workingColorSpace){return Rt.workingToColorSpace(Dn.copy(this),t),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=ei){Rt.workingToColorSpace(Dn.copy(this),e);const t=Dn.r,n=Dn.g,i=Dn.b;return e!==ei?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Yr),this.setHSL(Yr.h+e,Yr.s+t,Yr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yr),e.getHSL(Rc);const n=Qa(Yr.h,Rc.h,t),i=Qa(Yr.s,Rc.s,t),s=Qa(Yr.l,Rc.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new Je;Je.NAMES=px;class Fh{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Je(e),this.density=t}clone(){return new Fh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Bh{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Je(e),this.near=t,this.far=n}clone(){return new Bh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class tm extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wi,this.environmentIntensity=1,this.environmentRotation=new Wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Oi=new F,Er=new F,xd=new F,wr=new F,yo=new F,So=new F,N0=new F,yd=new F,Sd=new F,Md=new F,bd=new Lt,Ed=new Lt,wd=new Lt;class ti{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Oi.subVectors(e,t),i.cross(Oi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Oi.subVectors(i,t),Er.subVectors(n,t),xd.subVectors(e,t);const o=Oi.dot(Oi),c=Oi.dot(Er),u=Oi.dot(xd),h=Er.dot(Er),f=Er.dot(xd),p=o*h-c*c;if(p===0)return s.set(0,0,0),null;const m=1/p,g=(h*u-c*f)*m,x=(o*f-c*u)*m;return s.set(1-g-x,x,g)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,wr)===null?!1:wr.x>=0&&wr.y>=0&&wr.x+wr.y<=1}static getInterpolation(e,t,n,i,s,o,c,u){return this.getBarycoord(e,t,n,i,wr)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,wr.x),u.addScaledVector(o,wr.y),u.addScaledVector(c,wr.z),u)}static getInterpolatedAttribute(e,t,n,i,s,o){return bd.setScalar(0),Ed.setScalar(0),wd.setScalar(0),bd.fromBufferAttribute(e,t),Ed.fromBufferAttribute(e,n),wd.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(bd,s.x),o.addScaledVector(Ed,s.y),o.addScaledVector(wd,s.z),o}static isFrontFacing(e,t,n,i){return Oi.subVectors(n,t),Er.subVectors(e,t),Oi.cross(Er).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Oi.subVectors(this.c,this.b),Er.subVectors(this.a,this.b),Oi.cross(Er).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ti.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return ti.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,c;yo.subVectors(i,n),So.subVectors(s,n),yd.subVectors(e,n);const u=yo.dot(yd),h=So.dot(yd);if(u<=0&&h<=0)return t.copy(n);Sd.subVectors(e,i);const f=yo.dot(Sd),p=So.dot(Sd);if(f>=0&&p<=f)return t.copy(i);const m=u*p-f*h;if(m<=0&&u>=0&&f<=0)return o=u/(u-f),t.copy(n).addScaledVector(yo,o);Md.subVectors(e,s);const g=yo.dot(Md),x=So.dot(Md);if(x>=0&&g<=x)return t.copy(s);const b=g*h-u*x;if(b<=0&&h>=0&&x<=0)return c=h/(h-x),t.copy(n).addScaledVector(So,c);const y=f*x-g*p;if(y<=0&&p-f>=0&&g-x>=0)return N0.subVectors(s,i),c=(p-f)/(p-f+(g-x)),t.copy(i).addScaledVector(N0,c);const _=1/(y+b+m);return o=b*_,c=m*_,t.copy(n).addScaledVector(yo,o).addScaledVector(So,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class mn{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,c=s.count;o<c;o++)e.isMesh===!0?e.getVertexPosition(o,Fi):Fi.fromBufferAttribute(s,o),Fi.applyMatrix4(e.matrixWorld),this.expandByPoint(Fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Pc.copy(n.boundingBox)),Pc.applyMatrix4(e.matrixWorld),this.union(Pc)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fi),Fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ta),Ic.subVectors(this.max,Ta),Mo.subVectors(e.a,Ta),bo.subVectors(e.b,Ta),Eo.subVectors(e.c,Ta),qr.subVectors(bo,Mo),Zr.subVectors(Eo,bo),Ss.subVectors(Mo,Eo);let t=[0,-qr.z,qr.y,0,-Zr.z,Zr.y,0,-Ss.z,Ss.y,qr.z,0,-qr.x,Zr.z,0,-Zr.x,Ss.z,0,-Ss.x,-qr.y,qr.x,0,-Zr.y,Zr.x,0,-Ss.y,Ss.x,0];return!Td(t,Mo,bo,Eo,Ic)||(t=[1,0,0,0,1,0,0,0,1],!Td(t,Mo,bo,Eo,Ic))?!1:(Lc.crossVectors(qr,Zr),t=[Lc.x,Lc.y,Lc.z],Td(t,Mo,bo,Eo,Ic))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Tr=[new F,new F,new F,new F,new F,new F,new F,new F],Fi=new F,Pc=new mn,Mo=new F,bo=new F,Eo=new F,qr=new F,Zr=new F,Ss=new F,Ta=new F,Ic=new F,Lc=new F,Ms=new F;function Td(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Ms.fromArray(r,s);const c=i.x*Math.abs(Ms.x)+i.y*Math.abs(Ms.y)+i.z*Math.abs(Ms.z),u=e.dot(Ms),h=t.dot(Ms),f=n.dot(Ms);if(Math.max(-Math.max(u,h,f),Math.min(u,h,f))>c)return!1}return!0}const Ir=f1();function f1(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let u=0;u<256;++u){const h=u-127;h<-27?(n[u]=0,n[u|256]=32768,i[u]=24,i[u|256]=24):h<-14?(n[u]=1024>>-h-14,n[u|256]=1024>>-h-14|32768,i[u]=-h-1,i[u|256]=-h-1):h<=15?(n[u]=h+15<<10,n[u|256]=h+15<<10|32768,i[u]=13,i[u|256]=13):h<128?(n[u]=31744,n[u|256]=64512,i[u]=24,i[u|256]=24):(n[u]=31744,n[u|256]=64512,i[u]=13,i[u|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),c=new Uint32Array(64);for(let u=1;u<1024;++u){let h=u<<13,f=0;for(;!(h&8388608);)h<<=1,f-=8388608;h&=-8388609,f+=947912704,s[u]=h|f}for(let u=1024;u<2048;++u)s[u]=939524096+(u-1024<<13);for(let u=1;u<31;++u)o[u]=u<<23;o[31]=1199570944,o[32]=2147483648;for(let u=33;u<63;++u)o[u]=2147483648+(u-32<<23);o[63]=3347054592;for(let u=1;u<64;++u)u!==32&&(c[u]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:c}}function $n(r){Math.abs(r)>65504&&ze("DataUtils.toHalfFloat(): Value out of range."),r=vt(r,-65504,65504),Ir.floatView[0]=r;const e=Ir.uint32View[0],t=e>>23&511;return Ir.baseTable[t]+((e&8388607)>>Ir.shiftTable[t])}function Va(r){const e=r>>10;return Ir.uint32View[0]=Ir.mantissaTable[Ir.offsetTable[e]+(r&1023)]+Ir.exponentTable[e],Ir.floatView[0]}class d1{static toHalfFloat(e){return $n(e)}static fromHalfFloat(e){return Va(e)}}const fn=new F,Dc=new me;let p1=0;class Xt extends Xi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:p1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=cl,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Dc.fromBufferAttribute(this,t),Dc.applyMatrix3(e),this.setXY(t,Dc.x,Dc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix3(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cl&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class m1 extends Xt{constructor(e,t,n){super(new Int8Array(e),t,n)}}class g1 extends Xt{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class v1 extends Xt{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class _1 extends Xt{constructor(e,t,n){super(new Int16Array(e),t,n)}}class nm extends Xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class x1 extends Xt{constructor(e,t,n){super(new Int32Array(e),t,n)}}class im extends Xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class y1 extends Xt{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=Va(this.array[e*this.itemSize]);return this.normalized&&(t=Wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=$n(t),this}getY(e){let t=Va(this.array[e*this.itemSize+1]);return this.normalized&&(t=Wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=$n(t),this}getZ(e){let t=Va(this.array[e*this.itemSize+2]);return this.normalized&&(t=Wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=$n(t),this}getW(e){let t=Va(this.array[e*this.itemSize+3]);return this.normalized&&(t=Wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=$n(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.array[e+0]=$n(t),this.array[e+1]=$n(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array)),this.array[e+0]=$n(t),this.array[e+1]=$n(n),this.array[e+2]=$n(i),this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array),s=wt(s,this.array)),this.array[e+0]=$n(t),this.array[e+1]=$n(n),this.array[e+2]=$n(i),this.array[e+3]=$n(s),this}}class et extends Xt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const S1=new mn,Aa=new F,Ad=new F;class gn{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):S1.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Aa.subVectors(e,this.center);const t=Aa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Aa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ad.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Aa.copy(e.center).add(Ad)),this.expandByPoint(Aa.copy(e.center).sub(Ad))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let M1=0;const Ci=new _t,Cd=new Ut,wo=new F,hi=new mn,Ca=new mn,Mn=new F;class Mt extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:M1++}),this.uuid=pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(LM(e)?im:nm)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new yt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ci.makeRotationFromQuaternion(e),this.applyMatrix4(Ci),this}rotateX(e){return Ci.makeRotationX(e),this.applyMatrix4(Ci),this}rotateY(e){return Ci.makeRotationY(e),this.applyMatrix4(Ci),this}rotateZ(e){return Ci.makeRotationZ(e),this.applyMatrix4(Ci),this}translate(e,t,n){return Ci.makeTranslation(e,t,n),this.applyMatrix4(Ci),this}scale(e,t,n){return Ci.makeScale(e,t,n),this.applyMatrix4(Ci),this}lookAt(e){return Cd.lookAt(e),Cd.updateMatrix(),this.applyMatrix4(Cd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wo).negate(),this.translate(wo.x,wo.y,wo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new et(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];hi.setFromBufferAttribute(s),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(hi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const c=t[s];Ca.setFromBufferAttribute(c),this.morphTargetsRelative?(Mn.addVectors(hi.min,Ca.min),hi.expandByPoint(Mn),Mn.addVectors(hi.max,Ca.max),hi.expandByPoint(Mn)):(hi.expandByPoint(Ca.min),hi.expandByPoint(Ca.max))}hi.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Mn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Mn));if(t)for(let s=0,o=t.length;s<o;s++){const c=t[s],u=this.morphTargetsRelative;for(let h=0,f=c.count;h<f;h++)Mn.fromBufferAttribute(c,h),u&&(wo.fromBufferAttribute(e,h),Mn.add(wo)),i=Math.max(i,n.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),c=[],u=[];for(let T=0;T<n.count;T++)c[T]=new F,u[T]=new F;const h=new F,f=new F,p=new F,m=new me,g=new me,x=new me,b=new F,y=new F;function _(T,P,U){h.fromBufferAttribute(n,T),f.fromBufferAttribute(n,P),p.fromBufferAttribute(n,U),m.fromBufferAttribute(s,T),g.fromBufferAttribute(s,P),x.fromBufferAttribute(s,U),f.sub(h),p.sub(h),g.sub(m),x.sub(m);const D=1/(g.x*x.y-x.x*g.y);isFinite(D)&&(b.copy(f).multiplyScalar(x.y).addScaledVector(p,-g.y).multiplyScalar(D),y.copy(p).multiplyScalar(g.x).addScaledVector(f,-x.x).multiplyScalar(D),c[T].add(b),c[P].add(b),c[U].add(b),u[T].add(y),u[P].add(y),u[U].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let T=0,P=M.length;T<P;++T){const U=M[T],D=U.start,H=U.count;for(let K=D,ie=D+H;K<ie;K+=3)_(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const E=new F,w=new F,I=new F,C=new F;function O(T){I.fromBufferAttribute(i,T),C.copy(I);const P=c[T];E.copy(P),E.sub(I.multiplyScalar(I.dot(P))).normalize(),w.crossVectors(C,P);const D=w.dot(u[T])<0?-1:1;o.setXYZW(T,E.x,E.y,E.z,D)}for(let T=0,P=M.length;T<P;++T){const U=M[T],D=U.start,H=U.count;for(let K=D,ie=D+H;K<ie;K+=3)O(e.getX(K+0)),O(e.getX(K+1)),O(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,g=n.count;m<g;m++)n.setXYZ(m,0,0,0);const i=new F,s=new F,o=new F,c=new F,u=new F,h=new F,f=new F,p=new F;if(e)for(let m=0,g=e.count;m<g;m+=3){const x=e.getX(m+0),b=e.getX(m+1),y=e.getX(m+2);i.fromBufferAttribute(t,x),s.fromBufferAttribute(t,b),o.fromBufferAttribute(t,y),f.subVectors(o,s),p.subVectors(i,s),f.cross(p),c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,y),c.add(f),u.add(f),h.add(f),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(b,u.x,u.y,u.z),n.setXYZ(y,h.x,h.y,h.z)}else for(let m=0,g=t.count;m<g;m+=3)i.fromBufferAttribute(t,m+0),s.fromBufferAttribute(t,m+1),o.fromBufferAttribute(t,m+2),f.subVectors(o,s),p.subVectors(i,s),f.cross(p),n.setXYZ(m+0,f.x,f.y,f.z),n.setXYZ(m+1,f.x,f.y,f.z),n.setXYZ(m+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mn.fromBufferAttribute(e,t),Mn.normalize(),e.setXYZ(t,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(c,u){const h=c.array,f=c.itemSize,p=c.normalized,m=new h.constructor(u.length*f);let g=0,x=0;for(let b=0,y=u.length;b<y;b++){c.isInterleavedBufferAttribute?g=u[b]*c.data.stride+c.offset:g=u[b]*f;for(let _=0;_<f;_++)m[x++]=h[g++]}return new Xt(m,f,p)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mt,n=this.index.array,i=this.attributes;for(const c in i){const u=i[c],h=e(u,n);t.setAttribute(c,h)}const s=this.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++){const m=h[f],g=e(m,n);u.push(g)}t.morphAttributes[c]=u}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const h in u)u[h]!==void 0&&(e[h]=u[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const h=n[u];e.data.attributes[u]=h.toJSON(e.data)}const i={};let s=!1;for(const u in this.morphAttributes){const h=this.morphAttributes[u],f=[];for(let p=0,m=h.length;p<m;p++){const g=h[p];f.push(g.toJSON(e.data))}f.length>0&&(i[u]=f,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const h in i){const f=i[h];this.setAttribute(h,f.clone(t))}const s=e.morphAttributes;for(const h in s){const f=[],p=s[h];for(let m=0,g=p.length;m<g;m++)f.push(p[m].clone(t));this.morphAttributes[h]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let h=0,f=o.length;h<f;h++){const p=o[h];this.addGroup(p.start,p.count,p.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=cl,this.updateRanges=[],this.version=0,this.uuid=pi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Vn=new F;class di{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Vn.fromBufferAttribute(this,t),Vn.applyMatrix4(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vn.fromBufferAttribute(this,t),Vn.applyNormalMatrix(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vn.fromBufferAttribute(this,t),Vn.transformDirection(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Wn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array),s=wt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){hl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new di(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){hl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let b1=0;class On extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:b1++}),this.uuid=pi(),this.name="",this.type="Material",this.blending=Vs,this.side=Dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cu,this.blendDst=Ru,this.blendEquation=Qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){ze(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(n.blending=this.blending),this.side!==Dr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Cu&&(n.blendSrc=this.blendSrc),this.blendDst!==Ru&&(n.blendDst=this.blendDst),this.blendEquation!==Qr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ys&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mp&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Us&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Us&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Us&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const c in s){const u=s[c];delete u.metadata,o.push(u)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class rm extends On{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let To;const Ra=new F,Ao=new F,Co=new F,Ro=new me,Pa=new me,mx=new _t,Nc=new F,Ia=new F,Uc=new F,U0=new me,Rd=new me,O0=new me;class gx extends Ut{constructor(e=new rm){if(super(),this.isSprite=!0,this.type="Sprite",To===void 0){To=new Mt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new zh(t,5);To.setIndex([0,1,2,0,2,3]),To.setAttribute("position",new di(n,3,0,!1)),To.setAttribute("uv",new di(n,2,3,!1))}this.geometry=To,this.material=e,this.center=new me(.5,.5),this.count=1}raycast(e,t){e.camera===null&&ot('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ao.setFromMatrixScale(this.matrixWorld),mx.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Co.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ao.multiplyScalar(-Co.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;Oc(Nc.set(-.5,-.5,0),Co,o,Ao,i,s),Oc(Ia.set(.5,-.5,0),Co,o,Ao,i,s),Oc(Uc.set(.5,.5,0),Co,o,Ao,i,s),U0.set(0,0),Rd.set(1,0),O0.set(1,1);let c=e.ray.intersectTriangle(Nc,Ia,Uc,!1,Ra);if(c===null&&(Oc(Ia.set(-.5,.5,0),Co,o,Ao,i,s),Rd.set(0,1),c=e.ray.intersectTriangle(Nc,Uc,Ia,!1,Ra),c===null))return;const u=e.ray.origin.distanceTo(Ra);u<e.near||u>e.far||t.push({distance:u,point:Ra.clone(),uv:ti.getInterpolation(Ra,Nc,Ia,Uc,U0,Rd,O0,new me),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Oc(r,e,t,n,i,s){Ro.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Pa.x=s*Ro.x-i*Ro.y,Pa.y=i*Ro.x+s*Ro.y):Pa.copy(Ro),r.copy(e),r.x+=Pa.x,r.y+=Pa.y,r.applyMatrix4(mx)}const Fc=new F,F0=new F;class vx extends Ut{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const s=t[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let s;for(s=0;s<i.length&&!(t<i[s].distance);s++);return i.splice(s,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const i=t.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),e<s)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Fc.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Fc);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Fc.setFromMatrixPosition(e.matrixWorld),F0.setFromMatrixPosition(this.matrixWorld);const n=Fc.distanceTo(F0)/e.zoom;t[0].object.visible=!0;let i,s;for(i=1,s=t.length;i<s;i++){let o=t[i].distance;if(t[i].object.visible&&(o-=o*t[i].hysteresis),n>=o)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<s;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,s=n.length;i<s;i++){const o=n[i];t.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return t}}const Ar=new F,Pd=new F,Bc=new F,jr=new F,Id=new F,zc=new F,Ld=new F;class Ks{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ar)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ar.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ar.copy(this.origin).addScaledVector(this.direction,t),Ar.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Pd.copy(e).add(t).multiplyScalar(.5),Bc.copy(t).sub(e).normalize(),jr.copy(this.origin).sub(Pd);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Bc),c=jr.dot(this.direction),u=-jr.dot(Bc),h=jr.lengthSq(),f=Math.abs(1-o*o);let p,m,g,x;if(f>0)if(p=o*u-c,m=o*c-u,x=s*f,p>=0)if(m>=-x)if(m<=x){const b=1/f;p*=b,m*=b,g=p*(p+o*m+2*c)+m*(o*p+m+2*u)+h}else m=s,p=Math.max(0,-(o*m+c)),g=-p*p+m*(m+2*u)+h;else m=-s,p=Math.max(0,-(o*m+c)),g=-p*p+m*(m+2*u)+h;else m<=-x?(p=Math.max(0,-(-o*s+c)),m=p>0?-s:Math.min(Math.max(-s,-u),s),g=-p*p+m*(m+2*u)+h):m<=x?(p=0,m=Math.min(Math.max(-s,-u),s),g=m*(m+2*u)+h):(p=Math.max(0,-(o*s+c)),m=p>0?s:Math.min(Math.max(-s,-u),s),g=-p*p+m*(m+2*u)+h);else m=o>0?-s:s,p=Math.max(0,-(o*m+c)),g=-p*p+m*(m+2*u)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,p),i&&i.copy(Pd).addScaledVector(Bc,m),g}intersectSphere(e,t){Ar.subVectors(e.center,this.origin);const n=Ar.dot(this.direction),i=Ar.dot(Ar)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),c=n-o,u=n+o;return u<0?null:c<0?this.at(u,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,c,u;const h=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,m=this.origin;return h>=0?(n=(e.min.x-m.x)*h,i=(e.max.x-m.x)*h):(n=(e.max.x-m.x)*h,i=(e.min.x-m.x)*h),f>=0?(s=(e.min.y-m.y)*f,o=(e.max.y-m.y)*f):(s=(e.max.y-m.y)*f,o=(e.min.y-m.y)*f),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),p>=0?(c=(e.min.z-m.z)*p,u=(e.max.z-m.z)*p):(c=(e.max.z-m.z)*p,u=(e.min.z-m.z)*p),n>u||c>i)||((c>n||n!==n)&&(n=c),(u<i||i!==i)&&(i=u),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ar)!==null}intersectTriangle(e,t,n,i,s){Id.subVectors(t,e),zc.subVectors(n,e),Ld.crossVectors(Id,zc);let o=this.direction.dot(Ld),c;if(o>0){if(i)return null;c=1}else if(o<0)c=-1,o=-o;else return null;jr.subVectors(this.origin,e);const u=c*this.direction.dot(zc.crossVectors(jr,zc));if(u<0)return null;const h=c*this.direction.dot(Id.cross(jr));if(h<0||u+h>o)return null;const f=-c*jr.dot(Ld);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class os extends On{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const B0=new _t,bs=new Ks,kc=new gn,z0=new F,Vc=new F,Hc=new F,Gc=new F,Dd=new F,Wc=new F,k0=new F,Xc=new F;class cn extends Ut{constructor(e=new Mt,t=new os){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const c=this.morphTargetInfluences;if(s&&c){Wc.set(0,0,0);for(let u=0,h=s.length;u<h;u++){const f=c[u],p=s[u];f!==0&&(Dd.fromBufferAttribute(p,e),o?Wc.addScaledVector(Dd,f):Wc.addScaledVector(Dd.sub(t),f))}t.add(Wc)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),kc.copy(n.boundingSphere),kc.applyMatrix4(s),bs.copy(e.ray).recast(e.near),!(kc.containsPoint(bs.origin)===!1&&(bs.intersectSphere(kc,z0)===null||bs.origin.distanceToSquared(z0)>(e.far-e.near)**2))&&(B0.copy(s).invert(),bs.copy(e.ray).applyMatrix4(B0),!(n.boundingBox!==null&&bs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,bs)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,c=s.index,u=s.attributes.position,h=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,m=s.groups,g=s.drawRange;if(c!==null)if(Array.isArray(o))for(let x=0,b=m.length;x<b;x++){const y=m[x],_=o[y.materialIndex],M=Math.max(y.start,g.start),E=Math.min(c.count,Math.min(y.start+y.count,g.start+g.count));for(let w=M,I=E;w<I;w+=3){const C=c.getX(w),O=c.getX(w+1),T=c.getX(w+2);i=Yc(this,_,e,n,h,f,p,C,O,T),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=y.materialIndex,t.push(i))}}else{const x=Math.max(0,g.start),b=Math.min(c.count,g.start+g.count);for(let y=x,_=b;y<_;y+=3){const M=c.getX(y),E=c.getX(y+1),w=c.getX(y+2);i=Yc(this,o,e,n,h,f,p,M,E,w),i&&(i.faceIndex=Math.floor(y/3),t.push(i))}}else if(u!==void 0)if(Array.isArray(o))for(let x=0,b=m.length;x<b;x++){const y=m[x],_=o[y.materialIndex],M=Math.max(y.start,g.start),E=Math.min(u.count,Math.min(y.start+y.count,g.start+g.count));for(let w=M,I=E;w<I;w+=3){const C=w,O=w+1,T=w+2;i=Yc(this,_,e,n,h,f,p,C,O,T),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=y.materialIndex,t.push(i))}}else{const x=Math.max(0,g.start),b=Math.min(u.count,g.start+g.count);for(let y=x,_=b;y<_;y+=3){const M=y,E=y+1,w=y+2;i=Yc(this,o,e,n,h,f,p,M,E,w),i&&(i.faceIndex=Math.floor(y/3),t.push(i))}}}}function E1(r,e,t,n,i,s,o,c){let u;if(e.side===Yn?u=n.intersectTriangle(o,s,i,!0,c):u=n.intersectTriangle(i,s,o,e.side===Dr,c),u===null)return null;Xc.copy(c),Xc.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(Xc);return h<t.near||h>t.far?null:{distance:h,point:Xc.clone(),object:r}}function Yc(r,e,t,n,i,s,o,c,u,h){r.getVertexPosition(c,Vc),r.getVertexPosition(u,Hc),r.getVertexPosition(h,Gc);const f=E1(r,e,t,n,Vc,Hc,Gc,k0);if(f){const p=new F;ti.getBarycoord(k0,Vc,Hc,Gc,p),i&&(f.uv=ti.getInterpolatedAttribute(i,c,u,h,p,new me)),s&&(f.uv1=ti.getInterpolatedAttribute(s,c,u,h,p,new me)),o&&(f.normal=ti.getInterpolatedAttribute(o,c,u,h,p,new F),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const m={a:c,b:u,c:h,normal:new F,materialIndex:0};ti.getNormal(Vc,Hc,Gc,m.normal),f.face=m,f.barycoord=p}return f}const La=new Lt,V0=new Lt,H0=new Lt,w1=new Lt,G0=new _t,qc=new F,Nd=new gn,W0=new _t,Ud=new Ks;class _x extends cn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=yp,this.bindMatrix=new _t,this.bindMatrixInverse=new _t,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new mn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,qc),this.boundingBox.expandByPoint(qc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new gn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,qc),this.boundingSphere.expandByPoint(qc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nd.copy(this.boundingSphere),Nd.applyMatrix4(i),e.ray.intersectsSphere(Nd)!==!1&&(W0.copy(i).invert(),Ud.copy(e.ray).applyMatrix4(W0),!(this.boundingBox!==null&&Ud.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ud)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Lt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===yp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===K_?this.bindMatrixInverse.copy(this.bindMatrix).invert():ze("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;V0.fromBufferAttribute(i.attributes.skinIndex,e),H0.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(La.copy(t),t.set(0,0,0,0)):(La.set(...t,1),t.set(0,0,0)),La.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){const o=H0.getComponent(s);if(o!==0){const c=V0.getComponent(s);G0.multiplyMatrices(n.bones[c].matrixWorld,n.boneInverses[c]),t.addScaledVector(w1.copy(La).applyMatrix4(G0),o)}}return t.isVector4&&(t.w=La.w),t.applyMatrix4(this.bindMatrixInverse)}}class sm extends Ut{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Hi extends nn{constructor(e=null,t=1,n=1,i,s,o,c,u,h=ln,f=ln,p,m){super(null,o,c,u,h,f,i,s,p,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const X0=new _t,T1=new _t;class kh{constructor(e=[],t=[]){this.uuid=pi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ze("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new _t)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new _t;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const c=e[s]?e[s].matrixWorld:T1;X0.multiplyMatrices(c,t[s]),X0.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new kh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Hi(t,e,e,Un,Xn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(ze("Skeleton: No bone found with UUID:",s),o=new sm),this.bones.push(o),this.boneInverses.push(new _t().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const c=n[i];e.boneInverses.push(c.toArray())}return e}}class Jo extends Xt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Po=new _t,Y0=new _t,Zc=[],q0=new mn,A1=new _t,Da=new cn,Na=new gn;class xx extends cn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Jo(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,A1)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Po),q0.copy(e.boundingBox).applyMatrix4(Po),this.boundingBox.union(q0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Po),Na.copy(e.boundingSphere).applyMatrix4(Po),this.boundingSphere.union(Na)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let c=0;c<n.length;c++)n[c]=i[o+c]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Da.geometry=this.geometry,Da.material=this.material,Da.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Na.copy(this.boundingSphere),Na.applyMatrix4(n),e.ray.intersectsSphere(Na)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Po),Y0.multiplyMatrices(n,Po),Da.matrixWorld=Y0,Da.raycast(e,Zc);for(let o=0,c=Zc.length;o<c;o++){const u=Zc[o];u.instanceId=s,u.object=this,t.push(u)}Zc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Jo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Hi(new Float32Array(i*this.count),i,this.count,Rh,Xn));const s=this.morphTexture.source.data.data;let o=0;for(let h=0;h<n.length;h++)o+=n[h];const c=this.geometry.morphTargetsRelative?1:1-o,u=i*e;return s[u]=c,s.set(n,u+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Od=new F,C1=new F,R1=new yt;class Rr{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Od.subVectors(n,t).cross(C1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(Od),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||R1.getNormalMatrix(e),i=this.coplanarPoint(Od).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Es=new gn,P1=new me(.5,.5),jc=new F;class ta{constructor(e=new Rr,t=new Rr,n=new Rr,i=new Rr,s=new Rr,o=new Rr){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(i),c[4].copy(s),c[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=fi,n=!1){const i=this.planes,s=e.elements,o=s[0],c=s[1],u=s[2],h=s[3],f=s[4],p=s[5],m=s[6],g=s[7],x=s[8],b=s[9],y=s[10],_=s[11],M=s[12],E=s[13],w=s[14],I=s[15];if(i[0].setComponents(h-o,g-f,_-x,I-M).normalize(),i[1].setComponents(h+o,g+f,_+x,I+M).normalize(),i[2].setComponents(h+c,g+p,_+b,I+E).normalize(),i[3].setComponents(h-c,g-p,_-b,I-E).normalize(),n)i[4].setComponents(u,m,y,w).normalize(),i[5].setComponents(h-u,g-m,_-y,I-w).normalize();else if(i[4].setComponents(h-u,g-m,_-y,I-w).normalize(),t===fi)i[5].setComponents(h+u,g+m,_+y,I+w).normalize();else if(t===qs)i[5].setComponents(u,m,y,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(e){Es.center.set(0,0,0);const t=P1.distanceTo(e.center);return Es.radius=.7071067811865476+t,Es.applyMatrix4(e.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(jc.x=i.normal.x>0?e.max.x:e.min.x,jc.y=i.normal.y>0?e.max.y:e.min.y,jc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(jc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const tr=new _t,nr=new ta;class Vh{constructor(){this.coordinateSystem=fi}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(tr.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),nr.setFromProjectionMatrix(tr,i.coordinateSystem,i.reversedDepth),nr.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(tr.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),nr.setFromProjectionMatrix(tr,i.coordinateSystem,i.reversedDepth),nr.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(tr.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),nr.setFromProjectionMatrix(tr,i.coordinateSystem,i.reversedDepth),nr.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(tr.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),nr.setFromProjectionMatrix(tr,i.coordinateSystem,i.reversedDepth),nr.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(tr.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),nr.setFromProjectionMatrix(tr,i.coordinateSystem,i.reversedDepth),nr.containsPoint(e))return!0}return!1}clone(){return new Vh}}function Fd(r,e){return r-e}function I1(r,e){return r.z-e.z}function L1(r,e){return e.z-r.z}class D1{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){const s=this.pool,o=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});const c=s[this.index];o.push(c),this.index++,c.start=e,c.count=t,c.z=n,c.index=i}reset(){this.list.length=0,this.index=0}}const Qn=new _t,N1=new Je(1,1,1),Z0=new ta,U1=new Vh,Jc=new mn,ws=new gn,Ua=new F,j0=new F,O1=new F,Bd=new D1,Nn=new cn,Kc=[];function F1(r,e,t=0){const n=e.itemSize;if(r.isInterleavedBufferAttribute||r.array.constructor!==e.array.constructor){const i=r.count;for(let s=0;s<i;s++)for(let o=0;o<n;o++)e.setComponent(s+t,o,r.getComponent(s,o))}else e.array.set(r.array,t*n);e.needsUpdate=!0}function Ts(r,e){if(r.constructor!==e.constructor){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++)e[n]=r[n]}else{const t=Math.min(r.length,e.length);e.set(new r.constructor(r.buffer,0,t))}}class yx extends cn{constructor(e,t,n=t*2,i){super(new Mt,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new Hi(t,e,e,Un,Xn);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new Hi(t,e,e,Sl,Pi);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new Hi(t,e,e,Un,Xn);n.colorSpace=Rt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const s in e.attributes){const o=e.getAttribute(s),{array:c,itemSize:u,normalized:h}=o,f=new c.constructor(n*u),p=new Xt(f,u,h);t.setAttribute(s,p)}if(e.getIndex()!==null){const s=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new Xt(s,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),s=t.getAttribute(n);if(i.itemSize!==s.itemSize||i.normalized!==s.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){const t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){const t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,Qn),this.getBoundingBoxAt(s,Jc).applyMatrix4(Qn),e.union(Jc)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gn);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,Qn),this.getBoundingSphereAt(s,ws).applyMatrix4(Qn),e.union(ws)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Fd),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));const s=this._matricesTexture;Qn.identity().toArray(s.image.data,i*16),s.needsUpdate=!0;const o=this._colorsTexture;return o&&(N1.toArray(o.image.data,i*4),o.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);const i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},s=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const o=e.getIndex();if(o!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?o.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let u;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Fd),u=this._availableGeometryIds.shift(),s[u]=i):(u=this._geometryCount,this._geometryCount++,s.push(i)),this.setGeometryAt(u,e),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,u}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,s=n.getIndex(),o=t.getIndex(),c=this._geometryInfo[e];if(i&&o.count>c.reservedIndexCount||t.attributes.position.count>c.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const u=c.vertexStart,h=c.reservedVertexCount;c.vertexCount=t.getAttribute("position").count;for(const f in n.attributes){const p=t.getAttribute(f),m=n.getAttribute(f);F1(p,m,u);const g=p.itemSize;for(let x=p.count,b=h;x<b;x++){const y=u+x;for(let _=0;_<g;_++)m.setComponent(y,_,0)}m.needsUpdate=!0,m.addUpdateRange(u*g,h*g)}if(i){const f=c.indexStart,p=c.reservedIndexCount;c.indexCount=t.getIndex().count;for(let m=0;m<o.count;m++)s.setX(f+m,u+o.getX(m));for(let m=o.count,g=p;m<g;m++)s.setX(f+m,u);s.needsUpdate=!0,s.addUpdateRange(f,c.reservedIndexCount)}return c.start=i?c.indexStart:c.vertexStart,c.count=i?c.indexCount:c.vertexCount,c.boundingBox=null,t.boundingBox!==null&&(c.boundingBox=t.boundingBox.clone()),c.boundingSphere=null,t.boundingSphere!==null&&(c.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const n=this._instanceInfo;for(let i=0,s=n.length;i<s;i++)n[i].active&&n[i].geometryIndex===e&&this.deleteInstance(i);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0;const n=this._geometryInfo,i=n.map((o,c)=>c).sort((o,c)=>n[o].vertexStart-n[c].vertexStart),s=this.geometry;for(let o=0,c=n.length;o<c;o++){const u=i[o],h=n[u];if(h.active!==!1){if(s.index!==null){if(h.indexStart!==t){const{indexStart:f,vertexStart:p,reservedIndexCount:m}=h,g=s.index,x=g.array,b=e-p;for(let y=f;y<f+m;y++)x[y]=x[y]+b;g.array.copyWithin(t,f,f+m),g.addUpdateRange(t,m),g.needsUpdate=!0,h.indexStart=t}t+=h.reservedIndexCount}if(h.vertexStart!==e){const{vertexStart:f,reservedVertexCount:p}=h,m=s.attributes;for(const g in m){const x=m[g],{array:b,itemSize:y}=x;b.copyWithin(e*y,f*y,(f+p)*y),x.addUpdateRange(e*y,p*y),x.needsUpdate=!0}h.vertexStart=e}e+=h.reservedVertexCount,h.start=s.index?h.indexStart:h.vertexStart}}return this._nextIndexStart=t,this._nextVertexStart=e,this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingBox===null){const s=new mn,o=n.index,c=n.attributes.position;for(let u=i.start,h=i.start+i.count;u<h;u++){let f=u;o&&(f=o.getX(f)),s.expandByPoint(Ua.fromBufferAttribute(c,f))}i.boundingBox=s}return t.copy(i.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingSphere===null){const s=new gn;this.getBoundingBoxAt(e,Jc),Jc.getCenter(s.center);const o=n.index,c=n.attributes.position;let u=0;for(let h=i.start,f=i.start+i.count;h<f;h++){let p=h;o&&(p=o.getX(p)),Ua.fromBufferAttribute(c,p),u=Math.max(u,s.center.distanceToSquared(Ua))}s.radius=Math.sqrt(u),i.boundingSphere=s}return t.copy(i.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);const n=this._matricesTexture,i=this._matricesTexture.image.data;return t.toArray(i,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null?t.isVector4?t.set(1,1,1,1):t.setRGB(1,1,1):t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);const n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){const t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(Fd);t[t.length-1]===n.length-1;)n.pop(),t.pop();if(e<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const i=new Int32Array(e),s=new Int32Array(e);Ts(this._multiDrawCounts,i),Ts(this._multiDrawStarts,s),this._multiDrawCounts=i,this._multiDrawStarts=s,this._maxInstanceCount=e;const o=this._indirectTexture,c=this._matricesTexture,u=this._colorsTexture;o.dispose(),this._initIndirectTexture(),Ts(o.image.data,this._indirectTexture.image.data),c.dispose(),this._initMatricesTexture(),Ts(c.image.data,this._matricesTexture.image.data),u&&(u.dispose(),this._initColorsTexture(),Ts(u.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const n=[...this._geometryInfo].filter(c=>c.active);if(Math.max(...n.map(c=>c.vertexStart+c.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(u=>u.indexStart+u.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const s=this.geometry;s.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new Mt,this._initializeGeometry(s));const o=this.geometry;s.index&&Ts(s.index.array,o.index.array);for(const c in s.attributes)Ts(s.attributes[c].array,o.attributes[c].array)}raycast(e,t){const n=this._instanceInfo,i=this._geometryInfo,s=this.matrixWorld,o=this.geometry;Nn.material=this.material,Nn.geometry.index=o.index,Nn.geometry.attributes=o.attributes,Nn.geometry.boundingBox===null&&(Nn.geometry.boundingBox=new mn),Nn.geometry.boundingSphere===null&&(Nn.geometry.boundingSphere=new gn);for(let c=0,u=n.length;c<u;c++){if(!n[c].visible||!n[c].active)continue;const h=n[c].geometryIndex,f=i[h];Nn.geometry.setDrawRange(f.start,f.count),this.getMatrixAt(c,Nn.matrixWorld).premultiply(s),this.getBoundingBoxAt(h,Nn.geometry.boundingBox),this.getBoundingSphereAt(h,Nn.geometry.boundingSphere),Nn.raycast(e,Kc);for(let p=0,m=Kc.length;p<m;p++){const g=Kc[p];g.object=this,g.batchId=c,t.push(g)}Kc.length=0}Nn.material=null,Nn.geometry.index=null,Nn.geometry.attributes={},Nn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,n,i,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const o=i.getIndex();let c=o===null?1:o.array.BYTES_PER_ELEMENT,u=1;s.wireframe&&(u=2,c=i.attributes.position.count>65535?4:2);const h=this._instanceInfo,f=this._multiDrawStarts,p=this._multiDrawCounts,m=this._geometryInfo,g=this.perObjectFrustumCulled,x=this._indirectTexture,b=x.image.data,y=n.isArrayCamera?U1:Z0;g&&!n.isArrayCamera&&(Qn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),Z0.setFromProjectionMatrix(Qn,n.coordinateSystem,n.reversedDepth));let _=0;if(this.sortObjects){Qn.copy(this.matrixWorld).invert(),Ua.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Qn),j0.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(Qn);for(let w=0,I=h.length;w<I;w++)if(h[w].visible&&h[w].active){const C=h[w].geometryIndex;this.getMatrixAt(w,Qn),this.getBoundingSphereAt(C,ws).applyMatrix4(Qn);let O=!1;if(g&&(O=!y.intersectsSphere(ws,n)),!O){const T=m[C],P=O1.subVectors(ws.center,Ua).dot(j0);Bd.push(T.start,T.count,P,w)}}const M=Bd.list,E=this.customSort;E===null?M.sort(s.transparent?L1:I1):E.call(this,M,n);for(let w=0,I=M.length;w<I;w++){const C=M[w];f[_]=C.start*c*u,p[_]=C.count*u,b[_]=C.index,_++}Bd.reset()}else for(let M=0,E=h.length;M<E;M++)if(h[M].visible&&h[M].active){const w=h[M].geometryIndex;let I=!1;if(g&&(this.getMatrixAt(M,Qn),this.getBoundingSphereAt(w,ws).applyMatrix4(Qn),I=!y.intersectsSphere(ws,n)),!I){const C=m[w];f[_]=C.start*c*u,p[_]=C.count*u,b[_]=M,_++}}x.needsUpdate=!0,this._multiDrawCount=_,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,s,o){this.onBeforeRender(e,null,i,s,o)}}class qn extends On{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const mh=new F,gh=new F,J0=new _t,Oa=new Ks,Qc=new gn,zd=new F,K0=new F;let ss=class extends Ut{constructor(e=new Mt,t=new qn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)mh.fromBufferAttribute(t,i-1),gh.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=mh.distanceTo(gh);e.setAttribute("lineDistance",new et(n,1))}else ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qc.copy(n.boundingSphere),Qc.applyMatrix4(i),Qc.radius+=s,e.ray.intersectsSphere(Qc)===!1)return;J0.copy(i).invert(),Oa.copy(e.ray).applyMatrix4(J0);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,h=this.isLineSegments?2:1,f=n.index,m=n.attributes.position;if(f!==null){const g=Math.max(0,o.start),x=Math.min(f.count,o.start+o.count);for(let b=g,y=x-1;b<y;b+=h){const _=f.getX(b),M=f.getX(b+1),E=$c(this,e,Oa,u,_,M,b);E&&t.push(E)}if(this.isLineLoop){const b=f.getX(x-1),y=f.getX(g),_=$c(this,e,Oa,u,b,y,x-1);_&&t.push(_)}}else{const g=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let b=g,y=x-1;b<y;b+=h){const _=$c(this,e,Oa,u,b,b+1,b);_&&t.push(_)}if(this.isLineLoop){const b=$c(this,e,Oa,u,x-1,g,x-1);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}};function $c(r,e,t,n,i,s,o){const c=r.geometry.attributes.position;if(mh.fromBufferAttribute(c,i),gh.fromBufferAttribute(c,s),t.distanceSqToSegment(mh,gh,zd,K0)>n)return;zd.applyMatrix4(r.matrixWorld);const h=e.ray.origin.distanceTo(zd);if(!(h<e.near||h>e.far))return{distance:h,point:K0.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const Q0=new F,$0=new F;class mr extends ss{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Q0.fromBufferAttribute(t,i),$0.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Q0.distanceTo($0);e.setAttribute("lineDistance",new et(n,1))}else ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Sx extends ss{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class om extends On{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ev=new _t,Ep=new Ks,eu=new gn,tu=new F;class Mx extends Ut{constructor(e=new Mt,t=new om){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),eu.copy(n.boundingSphere),eu.applyMatrix4(i),eu.radius+=s,e.ray.intersectsSphere(eu)===!1)return;ev.copy(i).invert(),Ep.copy(e.ray).applyMatrix4(ev);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,h=n.index,p=n.attributes.position;if(h!==null){const m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=m,b=g;x<b;x++){const y=h.getX(x);tu.fromBufferAttribute(p,y),tv(tu,y,u,i,e,t,this)}}else{const m=Math.max(0,o.start),g=Math.min(p.count,o.start+o.count);for(let x=m,b=g;x<b;x++)tu.fromBufferAttribute(p,x),tv(tu,x,u,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function tv(r,e,t,n,i,s,o){const c=Ep.distanceSqToPoint(r);if(c<t){const u=new F;Ep.closestPointToPoint(r,u),u.applyMatrix4(n);const h=i.ray.origin.distanceTo(u);if(h<i.near||h>i.far)return;s.push({distance:h,distanceToRay:Math.sqrt(c),point:u,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class bx extends nn{constructor(e,t,n,i,s=jt,o=jt,c,u,h){super(e,t,n,i,s,o,c,u,h),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const f=this;function p(){f.needsUpdate=!0,f._requestVideoFrameCallbackId=e.requestVideoFrameCallback(p)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(p))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class B1 extends bx{constructor(e,t,n,i,s,o,c,u){super({},e,t,n,i,s,o,c,u),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}}class z1 extends nn{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=ln,this.minFilter=ln,this.generateMipmaps=!1,this.needsUpdate=!0}}class Hh extends nn{constructor(e,t,n,i,s,o,c,u,h,f,p,m){super(null,o,c,u,h,f,i,s,p,m),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class k1 extends Hh{constructor(e,t,n,i,s,o){super(e,t,n,s,o),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=ni,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class V1 extends Hh{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,fr),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class Ml extends nn{constructor(e=[],t=fr,n,i,s,o,c,u,h,f){super(e,t,n,i,s,o,c,u,h,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class H1 extends nn{constructor(e,t,n,i,s,o,c,u,h){super(e,t,n,i,s,o,c,u,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class G1 extends nn{constructor(e,t,n,i,s,o,c,u,h){super(e,t,n,i,s,o,c,u,h),this.isHTMLTexture=!0,this.generateMipmaps=!1,this.needsUpdate=!0;const f=e?e.parentNode:null;f!==null&&"requestPaint"in f&&(f.onpaint=()=>{this.needsUpdate=!0},f.requestPaint())}dispose(){const e=this.image?this.image.parentNode:null;e!==null&&"onpaint"in e&&(e.onpaint=null),super.dispose()}}class Zs extends nn{constructor(e,t,n=Pi,i,s,o,c=ln,u=ln,h,f=pr,p=1){if(f!==pr&&f!==$r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:p};super(m,i,s,o,c,u,f,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new es(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ex extends Zs{constructor(e,t=Pi,n=fr,i,s,o=ln,c=ln,u,h=pr){const f={width:e,height:e,depth:1},p=[f,f,f,f,f,f];super(e,e,t,n,i,s,o,c,u,h),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class am extends nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Qs extends Mt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const c=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const u=[],h=[],f=[],p=[];let m=0,g=0;x("z","y","x",-1,-1,n,t,e,o,s,0),x("z","y","x",1,-1,n,t,-e,o,s,1),x("x","z","y",1,1,e,n,t,i,o,2),x("x","z","y",1,-1,e,n,-t,i,o,3),x("x","y","z",1,-1,e,t,n,i,s,4),x("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(u),this.setAttribute("position",new et(h,3)),this.setAttribute("normal",new et(f,3)),this.setAttribute("uv",new et(p,2));function x(b,y,_,M,E,w,I,C,O,T,P){const U=w/O,D=I/T,H=w/2,K=I/2,ie=C/2,G=O+1,Z=T+1;let j=0,z=0;const X=new F;for(let Y=0;Y<Z;Y++){const oe=Y*D-K;for(let pe=0;pe<G;pe++){const Ie=pe*U-H;X[b]=Ie*M,X[y]=oe*E,X[_]=ie,h.push(X.x,X.y,X.z),X[b]=0,X[y]=0,X[_]=C>0?1:-1,f.push(X.x,X.y,X.z),p.push(pe/O),p.push(1-Y/T),j+=1}}for(let Y=0;Y<T;Y++)for(let oe=0;oe<O;oe++){const pe=m+oe+G*Y,Ie=m+oe+G*(Y+1),rt=m+(oe+1)+G*(Y+1),Qe=m+(oe+1)+G*Y;u.push(pe,Ie,Qe),u.push(Ie,rt,Qe),z+=6}c.addGroup(g,z,P),g+=z,m+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Gh extends Mt{constructor(e=1,t=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));const o=[],c=[],u=[],h=[],f=t/2,p=Math.PI/2*e,m=t,g=2*p+m,x=n*2+s,b=i+1,y=new F,_=new F;for(let M=0;M<=x;M++){let E=0,w=0,I=0,C=0;if(M<=n){const P=M/n,U=P*Math.PI/2;w=-f-e*Math.cos(U),I=e*Math.sin(U),C=-e*Math.cos(U),E=P*p}else if(M<=n+s){const P=(M-n)/s;w=-f+P*t,I=e,C=0,E=p+P*m}else{const P=(M-n-s)/n,U=P*Math.PI/2;w=f+e*Math.sin(U),I=e*Math.cos(U),C=e*Math.sin(U),E=p+m+P*p}const O=Math.max(0,Math.min(1,E/g));let T=0;M===0?T=.5/i:M===x&&(T=-.5/i);for(let P=0;P<=i;P++){const U=P/i,D=U*Math.PI*2,H=Math.sin(D),K=Math.cos(D);_.x=-I*K,_.y=w,_.z=I*H,c.push(_.x,_.y,_.z),y.set(-I*K,C,I*H),y.normalize(),u.push(y.x,y.y,y.z),h.push(U+T,O)}if(M>0){const P=(M-1)*b;for(let U=0;U<i;U++){const D=P+U,H=P+U+1,K=M*b+U,ie=M*b+U+1;o.push(D,H,K),o.push(H,ie,K)}}}this.setIndex(o),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(u,3)),this.setAttribute("uv",new et(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gh(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Wh extends Mt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],c=[],u=[],h=new F,f=new me;o.push(0,0,0),c.push(0,0,1),u.push(.5,.5);for(let p=0,m=3;p<=t;p++,m+=3){const g=n+p/t*i;h.x=e*Math.cos(g),h.y=e*Math.sin(g),o.push(h.x,h.y,h.z),c.push(0,0,1),f.x=(o[m]/e+1)/2,f.y=(o[m+1]/e+1)/2,u.push(f.x,f.y)}for(let p=1;p<=t;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new et(o,3)),this.setAttribute("normal",new et(c,3)),this.setAttribute("uv",new et(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class bl extends Mt{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,c=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:c,thetaLength:u};const h=this;i=Math.floor(i),s=Math.floor(s);const f=[],p=[],m=[],g=[];let x=0;const b=[],y=n/2;let _=0;M(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(f),this.setAttribute("position",new et(p,3)),this.setAttribute("normal",new et(m,3)),this.setAttribute("uv",new et(g,2));function M(){const w=new F,I=new F;let C=0;const O=(t-e)/n;for(let T=0;T<=s;T++){const P=[],U=T/s,D=U*(t-e)+e;for(let H=0;H<=i;H++){const K=H/i,ie=K*u+c,G=Math.sin(ie),Z=Math.cos(ie);I.x=D*G,I.y=-U*n+y,I.z=D*Z,p.push(I.x,I.y,I.z),w.set(G,O,Z).normalize(),m.push(w.x,w.y,w.z),g.push(K,1-U),P.push(x++)}b.push(P)}for(let T=0;T<i;T++)for(let P=0;P<s;P++){const U=b[P][T],D=b[P+1][T],H=b[P+1][T+1],K=b[P][T+1];(e>0||P!==0)&&(f.push(U,D,K),C+=3),(t>0||P!==s-1)&&(f.push(D,H,K),C+=3)}h.addGroup(_,C,0),_+=C}function E(w){const I=x,C=new me,O=new F;let T=0;const P=w===!0?e:t,U=w===!0?1:-1;for(let H=1;H<=i;H++)p.push(0,y*U,0),m.push(0,U,0),g.push(.5,.5),x++;const D=x;for(let H=0;H<=i;H++){const ie=H/i*u+c,G=Math.cos(ie),Z=Math.sin(ie);O.x=P*Z,O.y=y*U,O.z=P*G,p.push(O.x,O.y,O.z),m.push(0,U,0),C.x=G*.5+.5,C.y=Z*.5*U+.5,g.push(C.x,C.y),x++}for(let H=0;H<i;H++){const K=I+H,ie=D+H;w===!0?f.push(ie,ie+1,K):f.push(ie+1,ie,K),T+=3}h.addGroup(_,T,w===!0?1:2),_+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class El extends bl{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,c=Math.PI*2){super(0,e,t,n,i,s,o,c),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:c}}static fromJSON(e){return new El(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class as extends Mt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];c(i),h(n),f(),this.setAttribute("position",new et(s,3)),this.setAttribute("normal",new et(s.slice(),3)),this.setAttribute("uv",new et(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function c(M){const E=new F,w=new F,I=new F;for(let C=0;C<t.length;C+=3)g(t[C+0],E),g(t[C+1],w),g(t[C+2],I),u(E,w,I,M)}function u(M,E,w,I){const C=I+1,O=[];for(let T=0;T<=C;T++){O[T]=[];const P=M.clone().lerp(w,T/C),U=E.clone().lerp(w,T/C),D=C-T;for(let H=0;H<=D;H++)H===0&&T===C?O[T][H]=P:O[T][H]=P.clone().lerp(U,H/D)}for(let T=0;T<C;T++)for(let P=0;P<2*(C-T)-1;P++){const U=Math.floor(P/2);P%2===0?(m(O[T][U+1]),m(O[T+1][U]),m(O[T][U])):(m(O[T][U+1]),m(O[T+1][U+1]),m(O[T+1][U]))}}function h(M){const E=new F;for(let w=0;w<s.length;w+=3)E.x=s[w+0],E.y=s[w+1],E.z=s[w+2],E.normalize().multiplyScalar(M),s[w+0]=E.x,s[w+1]=E.y,s[w+2]=E.z}function f(){const M=new F;for(let E=0;E<s.length;E+=3){M.x=s[E+0],M.y=s[E+1],M.z=s[E+2];const w=y(M)/2/Math.PI+.5,I=_(M)/Math.PI+.5;o.push(w,1-I)}x(),p()}function p(){for(let M=0;M<o.length;M+=6){const E=o[M+0],w=o[M+2],I=o[M+4],C=Math.max(E,w,I),O=Math.min(E,w,I);C>.9&&O<.1&&(E<.2&&(o[M+0]+=1),w<.2&&(o[M+2]+=1),I<.2&&(o[M+4]+=1))}}function m(M){s.push(M.x,M.y,M.z)}function g(M,E){const w=M*3;E.x=e[w+0],E.y=e[w+1],E.z=e[w+2]}function x(){const M=new F,E=new F,w=new F,I=new F,C=new me,O=new me,T=new me;for(let P=0,U=0;P<s.length;P+=9,U+=6){M.set(s[P+0],s[P+1],s[P+2]),E.set(s[P+3],s[P+4],s[P+5]),w.set(s[P+6],s[P+7],s[P+8]),C.set(o[U+0],o[U+1]),O.set(o[U+2],o[U+3]),T.set(o[U+4],o[U+5]),I.copy(M).add(E).add(w).divideScalar(3);const D=y(I);b(C,U+0,M,D),b(O,U+2,E,D),b(T,U+4,w,D)}}function b(M,E,w,I){I<0&&M.x===1&&(o[E]=M.x-1),w.x===0&&w.z===0&&(o[E]=I/2/Math.PI+.5)}function y(M){return Math.atan2(M.z,-M.x)}function _(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new as(e.vertices,e.indices,e.radius,e.detail)}}class Xh extends as{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Xh(e.radius,e.detail)}}const nu=new F,iu=new F,kd=new F,ru=new ti;class lm extends Mt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(Hs*t),o=e.getIndex(),c=e.getAttribute("position"),u=o?o.count:c.count,h=[0,0,0],f=["a","b","c"],p=new Array(3),m={},g=[];for(let x=0;x<u;x+=3){o?(h[0]=o.getX(x),h[1]=o.getX(x+1),h[2]=o.getX(x+2)):(h[0]=x,h[1]=x+1,h[2]=x+2);const{a:b,b:y,c:_}=ru;if(b.fromBufferAttribute(c,h[0]),y.fromBufferAttribute(c,h[1]),_.fromBufferAttribute(c,h[2]),ru.getNormal(kd),p[0]=`${Math.round(b.x*i)},${Math.round(b.y*i)},${Math.round(b.z*i)}`,p[1]=`${Math.round(y.x*i)},${Math.round(y.y*i)},${Math.round(y.z*i)}`,p[2]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let M=0;M<3;M++){const E=(M+1)%3,w=p[M],I=p[E],C=ru[f[M]],O=ru[f[E]],T=`${w}_${I}`,P=`${I}_${w}`;P in m&&m[P]?(kd.dot(m[P].normal)<=s&&(g.push(C.x,C.y,C.z),g.push(O.x,O.y,O.z)),m[P]=null):T in m||(m[T]={index0:h[M],index1:h[E],normal:kd.clone()})}}for(const x in m)if(m[x]){const{index0:b,index1:y}=m[x];nu.fromBufferAttribute(c,b),iu.fromBufferAttribute(c,y),g.push(nu.x,nu.y,nu.z),g.push(iu.x,iu.y,iu.z)}this.setAttribute("position",new et(g,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Yi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ze("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let c=0,u=s-1,h;for(;c<=u;)if(i=Math.floor(c+(u-c)/2),h=n[i]-o,h<0)c=i+1;else if(h>0)u=i-1;else{u=i;break}if(i=u,n[i]===o)return i/(s-1);const f=n[i],m=n[i+1]-f,g=(o-f)/m;return(i+g)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),c=this.getPoint(s),u=t||(o.isVector2?new me:new F);return u.copy(c).sub(o).normalize(),u}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new F,i=[],s=[],o=[],c=new F,u=new _t;for(let g=0;g<=e;g++){const x=g/e;i[g]=this.getTangentAt(x,new F)}s[0]=new F,o[0]=new F;let h=Number.MAX_VALUE;const f=Math.abs(i[0].x),p=Math.abs(i[0].y),m=Math.abs(i[0].z);f<=h&&(h=f,n.set(1,0,0)),p<=h&&(h=p,n.set(0,1,0)),m<=h&&n.set(0,0,1),c.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],c),o[0].crossVectors(i[0],s[0]);for(let g=1;g<=e;g++){if(s[g]=s[g-1].clone(),o[g]=o[g-1].clone(),c.crossVectors(i[g-1],i[g]),c.length()>Number.EPSILON){c.normalize();const x=Math.acos(vt(i[g-1].dot(i[g]),-1,1));s[g].applyMatrix4(u.makeRotationAxis(c,x))}o[g].crossVectors(i[g],s[g])}if(t===!0){let g=Math.acos(vt(s[0].dot(s[e]),-1,1));g/=e,i[0].dot(c.crossVectors(s[0],s[e]))>0&&(g=-g);for(let x=1;x<=e;x++)s[x].applyMatrix4(u.makeRotationAxis(i[x],g*x)),o[x].crossVectors(i[x],s[x])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Yh extends Yi{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,c=!1,u=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=c,this.aRotation=u}getPoint(e,t=new me){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const c=this.aStartAngle+e*s;let u=this.aX+this.xRadius*Math.cos(c),h=this.aY+this.yRadius*Math.sin(c);if(this.aRotation!==0){const f=Math.cos(this.aRotation),p=Math.sin(this.aRotation),m=u-this.aX,g=h-this.aY;u=m*f-g*p+this.aX,h=m*p+g*f+this.aY}return n.set(u,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class wx extends Yh{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function cm(){let r=0,e=0,t=0,n=0;function i(s,o,c,u){r=s,e=c,t=-3*s+3*o-2*c-u,n=2*s-2*o+c+u}return{initCatmullRom:function(s,o,c,u,h){i(o,c,h*(c-s),h*(u-o))},initNonuniformCatmullRom:function(s,o,c,u,h,f,p){let m=(o-s)/h-(c-s)/(h+f)+(c-o)/f,g=(c-o)/f-(u-o)/(f+p)+(u-c)/p;m*=f,g*=f,i(o,c,m,g)},calc:function(s){const o=s*s,c=o*s;return r+e*s+t*o+n*c}}}const nv=new F,iv=new F,Vd=new cm,Hd=new cm,Gd=new cm;class Tx extends Yi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new F){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let c=Math.floor(o),u=o-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:u===0&&c===s-1&&(c=s-2,u=1);let h,f;this.closed||c>0?h=i[(c-1)%s]:(iv.subVectors(i[0],i[1]).add(i[0]),h=iv);const p=i[c%s],m=i[(c+1)%s];if(this.closed||c+2<s?f=i[(c+2)%s]:(nv.subVectors(i[s-1],i[s-2]).add(i[s-1]),f=nv),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let x=Math.pow(h.distanceToSquared(p),g),b=Math.pow(p.distanceToSquared(m),g),y=Math.pow(m.distanceToSquared(f),g);b<1e-4&&(b=1),x<1e-4&&(x=b),y<1e-4&&(y=b),Vd.initNonuniformCatmullRom(h.x,p.x,m.x,f.x,x,b,y),Hd.initNonuniformCatmullRom(h.y,p.y,m.y,f.y,x,b,y),Gd.initNonuniformCatmullRom(h.z,p.z,m.z,f.z,x,b,y)}else this.curveType==="catmullrom"&&(Vd.initCatmullRom(h.x,p.x,m.x,f.x,this.tension),Hd.initCatmullRom(h.y,p.y,m.y,f.y,this.tension),Gd.initCatmullRom(h.z,p.z,m.z,f.z,this.tension));return n.set(Vd.calc(u),Hd.calc(u),Gd.calc(u)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new F().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function rv(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,c=r*r,u=r*c;return(2*t-2*n+s+o)*u+(-3*t+3*n-2*s-o)*c+s*r+t}function W1(r,e){const t=1-r;return t*t*e}function X1(r,e){return 2*(1-r)*r*e}function Y1(r,e){return r*r*e}function $a(r,e,t,n){return W1(r,e)+X1(r,t)+Y1(r,n)}function q1(r,e){const t=1-r;return t*t*t*e}function Z1(r,e){const t=1-r;return 3*t*t*r*e}function j1(r,e){return 3*(1-r)*r*r*e}function J1(r,e){return r*r*r*e}function el(r,e,t,n,i){return q1(r,e)+Z1(r,t)+j1(r,n)+J1(r,i)}class um extends Yi{constructor(e=new me,t=new me,n=new me,i=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new me){const n=t,i=this.v0,s=this.v1,o=this.v2,c=this.v3;return n.set(el(e,i.x,s.x,o.x,c.x),el(e,i.y,s.y,o.y,c.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ax extends Yi{constructor(e=new F,t=new F,n=new F,i=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new F){const n=t,i=this.v0,s=this.v1,o=this.v2,c=this.v3;return n.set(el(e,i.x,s.x,o.x,c.x),el(e,i.y,s.y,o.y,c.y),el(e,i.z,s.z,o.z,c.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class hm extends Yi{constructor(e=new me,t=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new me){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cx extends Yi{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fm extends Yi{constructor(e=new me,t=new me,n=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new me){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set($a(e,i.x,s.x,o.x),$a(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dm extends Yi{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set($a(e,i.x,s.x,o.x),$a(e,i.y,s.y,o.y),$a(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pm extends Yi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new me){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),c=s-o,u=i[o===0?o:o-1],h=i[o],f=i[o>i.length-2?i.length-1:o+1],p=i[o>i.length-3?i.length-1:o+2];return n.set(rv(c,u.x,h.x,f.x,p.x),rv(c,u.y,h.y,f.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new me().fromArray(i))}return this}}var vh=Object.freeze({__proto__:null,ArcCurve:wx,CatmullRomCurve3:Tx,CubicBezierCurve:um,CubicBezierCurve3:Ax,EllipseCurve:Yh,LineCurve:hm,LineCurve3:Cx,QuadraticBezierCurve:fm,QuadraticBezierCurve3:dm,SplineCurve:pm});class Rx extends Yi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vh[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,c=this.curves[s],u=c.getLength(),h=u===0?0:1-o/u;return c.getPointAt(h,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],c=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,u=o.getPoints(c);for(let h=0;h<u.length;h++){const f=u[h];n&&n.equals(f)||(t.push(f),n=f)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new vh[i.type]().fromJSON(i))}return this}}class _h extends Rx{constructor(e){super(),this.type="Path",this.currentPoint=new me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new hm(this.currentPoint.clone(),new me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new fm(this.currentPoint.clone(),new me(e,t),new me(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const c=new um(this.currentPoint.clone(),new me(e,t),new me(n,i),new me(s,o));return this.curves.push(c),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new pm(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absarc(e+c,t+u,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,c,u){const h=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+h,t+f,n,i,s,o,c,u),this}absellipse(e,t,n,i,s,o,c,u){const h=new Yh(e,t,n,i,s,o,c,u);if(this.curves.length>0){const p=h.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(h);const f=h.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ws extends _h{constructor(e){super(e),this.uuid=pi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new _h().fromJSON(i))}return this}}function K1(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=Px(r,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let c,u,h;if(n&&(s=nb(r,e,s,t)),r.length>80*t){c=r[0],u=r[1];let f=c,p=u;for(let m=t;m<i;m+=t){const g=r[m],x=r[m+1];g<c&&(c=g),x<u&&(u=x),g>f&&(f=g),x>p&&(p=x)}h=Math.max(f-c,p-u),h=h!==0?32767/h:0}return fl(s,o,t,c,u,h,0),o}function Px(r,e,t,n,i){let s;if(i===db(r,e,t,n)>0)for(let o=e;o<t;o+=n)s=sv(o/n|0,r[o],r[o+1],s);else for(let o=t-n;o>=e;o-=n)s=sv(o/n|0,r[o],r[o+1],s);return s&&Ko(s,s.next)&&(pl(s),s=s.next),s}function js(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Ko(t,t.next)||tn(t.prev,t,t.next)===0)){if(pl(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function fl(r,e,t,n,i,s,o){if(!r)return;!o&&s&&ab(r,n,i,s);let c=r;for(;r.prev!==r.next;){const u=r.prev,h=r.next;if(s?$1(r,n,i,s):Q1(r)){e.push(u.i,r.i,h.i),pl(r),r=h.next,c=h.next;continue}if(r=h,r===c){o?o===1?(r=eb(js(r),e),fl(r,e,t,n,i,s,2)):o===2&&tb(r,e,t,n,i,s):fl(js(r),e,t,n,i,s,1);break}}}function Q1(r){const e=r.prev,t=r,n=r.next;if(tn(e,t,n)>=0)return!1;const i=e.x,s=t.x,o=n.x,c=e.y,u=t.y,h=n.y,f=Math.min(i,s,o),p=Math.min(c,u,h),m=Math.max(i,s,o),g=Math.max(c,u,h);let x=n.next;for(;x!==e;){if(x.x>=f&&x.x<=m&&x.y>=p&&x.y<=g&&Ha(i,c,s,u,o,h,x.x,x.y)&&tn(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function $1(r,e,t,n){const i=r.prev,s=r,o=r.next;if(tn(i,s,o)>=0)return!1;const c=i.x,u=s.x,h=o.x,f=i.y,p=s.y,m=o.y,g=Math.min(c,u,h),x=Math.min(f,p,m),b=Math.max(c,u,h),y=Math.max(f,p,m),_=wp(g,x,e,t,n),M=wp(b,y,e,t,n);let E=r.prevZ,w=r.nextZ;for(;E&&E.z>=_&&w&&w.z<=M;){if(E.x>=g&&E.x<=b&&E.y>=x&&E.y<=y&&E!==i&&E!==o&&Ha(c,f,u,p,h,m,E.x,E.y)&&tn(E.prev,E,E.next)>=0||(E=E.prevZ,w.x>=g&&w.x<=b&&w.y>=x&&w.y<=y&&w!==i&&w!==o&&Ha(c,f,u,p,h,m,w.x,w.y)&&tn(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;E&&E.z>=_;){if(E.x>=g&&E.x<=b&&E.y>=x&&E.y<=y&&E!==i&&E!==o&&Ha(c,f,u,p,h,m,E.x,E.y)&&tn(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;w&&w.z<=M;){if(w.x>=g&&w.x<=b&&w.y>=x&&w.y<=y&&w!==i&&w!==o&&Ha(c,f,u,p,h,m,w.x,w.y)&&tn(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function eb(r,e){let t=r;do{const n=t.prev,i=t.next.next;!Ko(n,i)&&Lx(n,t,t.next,i)&&dl(n,i)&&dl(i,n)&&(e.push(n.i,t.i,i.i),pl(t),pl(t.next),t=r=i),t=t.next}while(t!==r);return js(t)}function tb(r,e,t,n,i,s){let o=r;do{let c=o.next.next;for(;c!==o.prev;){if(o.i!==c.i&&ub(o,c)){let u=Dx(o,c);o=js(o,o.next),u=js(u,u.next),fl(o,e,t,n,i,s,0),fl(u,e,t,n,i,s,0);return}c=c.next}o=o.next}while(o!==r)}function nb(r,e,t,n){const i=[];for(let s=0,o=e.length;s<o;s++){const c=e[s]*n,u=s<o-1?e[s+1]*n:r.length,h=Px(r,c,u,n,!1);h===h.next&&(h.steiner=!0),i.push(cb(h))}i.sort(ib);for(let s=0;s<i.length;s++)t=rb(i[s],t);return t}function ib(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){const n=(r.next.y-r.y)/(r.next.x-r.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function rb(r,e){const t=sb(r,e);if(!t)return e;const n=Dx(t,r);return js(n,n.next),js(t,t.next)}function sb(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,o;if(Ko(r,t))return t;do{if(Ko(r,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const p=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=n&&p>s&&(s=p,o=t.x<t.next.x?t:t.next,p===n))return o}t=t.next}while(t!==e);if(!o)return null;const c=o,u=o.x,h=o.y;let f=1/0;t=o;do{if(n>=t.x&&t.x>=u&&n!==t.x&&Ix(i<h?n:s,i,u,h,i<h?s:n,i,t.x,t.y)){const p=Math.abs(i-t.y)/(n-t.x);dl(t,r)&&(p<f||p===f&&(t.x>o.x||t.x===o.x&&ob(o,t)))&&(o=t,f=p)}t=t.next}while(t!==c);return o}function ob(r,e){return tn(r.prev,r,e.prev)<0&&tn(e.next,r,r.next)<0}function ab(r,e,t,n){let i=r;do i.z===0&&(i.z=wp(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,lb(i)}function lb(r){let e,t=1;do{let n=r,i;r=null;let s=null;for(e=0;n;){e++;let o=n,c=0;for(let h=0;h<t&&(c++,o=o.nextZ,!!o);h++);let u=t;for(;c>0||u>0&&o;)c!==0&&(u===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,c--):(i=o,o=o.nextZ,u--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=o}s.nextZ=null,t*=2}while(e>1);return r}function wp(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function cb(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Ix(r,e,t,n,i,s,o,c){return(i-o)*(e-c)>=(r-o)*(s-c)&&(r-o)*(n-c)>=(t-o)*(e-c)&&(t-o)*(s-c)>=(i-o)*(n-c)}function Ha(r,e,t,n,i,s,o,c){return!(r===o&&e===c)&&Ix(r,e,t,n,i,s,o,c)}function ub(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!hb(r,e)&&(dl(r,e)&&dl(e,r)&&fb(r,e)&&(tn(r.prev,r,e.prev)||tn(r,e.prev,e))||Ko(r,e)&&tn(r.prev,r,r.next)>0&&tn(e.prev,e,e.next)>0)}function tn(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Ko(r,e){return r.x===e.x&&r.y===e.y}function Lx(r,e,t,n){const i=ou(tn(r,e,t)),s=ou(tn(r,e,n)),o=ou(tn(t,n,r)),c=ou(tn(t,n,e));return!!(i!==s&&o!==c||i===0&&su(r,t,e)||s===0&&su(r,n,e)||o===0&&su(t,r,n)||c===0&&su(t,e,n))}function su(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function ou(r){return r>0?1:r<0?-1:0}function hb(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Lx(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function dl(r,e){return tn(r.prev,r,r.next)<0?tn(r,e,r.next)>=0&&tn(r,r.prev,e)>=0:tn(r,e,r.prev)<0||tn(r,r.next,e)<0}function fb(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Dx(r,e){const t=Tp(r.i,r.x,r.y),n=Tp(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function sv(r,e,t,n){const i=Tp(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function pl(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Tp(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function db(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class pb{static triangulate(e,t,n=2){return K1(e,t,n)}}class Vi{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return Vi.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];ov(e),av(n,e);let o=e.length;t.forEach(ov);for(let u=0;u<t.length;u++)i.push(o),o+=t[u].length,av(n,t[u]);const c=pb.triangulate(n,i);for(let u=0;u<c.length;u+=3)s.push(c.slice(u,u+3));return s}}function ov(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function av(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class qh extends Mt{constructor(e=new Ws([new me(.5,.5),new me(-.5,.5),new me(-.5,-.5),new me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];o(h)}this.setAttribute("position",new et(i,3)),this.setAttribute("uv",new et(s,2)),this.computeVertexNormals();function o(c){const u=[],h=t.curveSegments!==void 0?t.curveSegments:12,f=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1;let m=t.bevelEnabled!==void 0?t.bevelEnabled:!0,g=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:g-.1,b=t.bevelOffset!==void 0?t.bevelOffset:0,y=t.bevelSegments!==void 0?t.bevelSegments:3;const _=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:mb;let E,w=!1,I,C,O,T;if(_){E=_.getSpacedPoints(f),w=!0,m=!1;const ve=_.isCatmullRomCurve3?_.closed:!1;I=_.computeFrenetFrames(f,ve),C=new F,O=new F,T=new F}m||(y=0,g=0,x=0,b=0);const P=c.extractPoints(h);let U=P.shape;const D=P.holes;if(!Vi.isClockWise(U)){U=U.reverse();for(let ve=0,be=D.length;ve<be;ve++){const xe=D[ve];Vi.isClockWise(xe)&&(D[ve]=xe.reverse())}}function K(ve){const xe=10000000000000001e-36;let Oe=ve[0];for(let Ue=1;Ue<=ve.length;Ue++){const ct=Ue%ve.length,k=ve[ct],pt=k.x-Oe.x,tt=k.y-Oe.y,ut=pt*pt+tt*tt,Me=Math.max(Math.abs(k.x),Math.abs(k.y),Math.abs(Oe.x),Math.abs(Oe.y)),Pt=xe*Me*Me;if(ut<=Pt){ve.splice(ct,1),Ue--;continue}Oe=k}}K(U),D.forEach(K);const ie=D.length,G=U;for(let ve=0;ve<ie;ve++){const be=D[ve];U=U.concat(be)}function Z(ve,be,xe){return be||ot("ExtrudeGeometry: vec does not exist"),ve.clone().addScaledVector(be,xe)}const j=U.length;function z(ve,be,xe){let Oe,Ue,ct;const k=ve.x-be.x,pt=ve.y-be.y,tt=xe.x-ve.x,ut=xe.y-ve.y,Me=k*k+pt*pt,Pt=k*ut-pt*tt;if(Math.abs(Pt)>Number.EPSILON){const N=Math.sqrt(Me),R=Math.sqrt(tt*tt+ut*ut),$=be.x-pt/N,de=be.y+k/N,ye=xe.x-ut/R,Ce=xe.y+tt/R,Le=((ye-$)*ut-(Ce-de)*tt)/(k*ut-pt*tt);Oe=$+k*Le-ve.x,Ue=de+pt*Le-ve.y;const ce=Oe*Oe+Ue*Ue;if(ce<=2)return new me(Oe,Ue);ct=Math.sqrt(ce/2)}else{let N=!1;k>Number.EPSILON?tt>Number.EPSILON&&(N=!0):k<-Number.EPSILON?tt<-Number.EPSILON&&(N=!0):Math.sign(pt)===Math.sign(ut)&&(N=!0),N?(Oe=-pt,Ue=k,ct=Math.sqrt(Me)):(Oe=k,Ue=pt,ct=Math.sqrt(Me/2))}return new me(Oe/ct,Ue/ct)}const X=[];for(let ve=0,be=G.length,xe=be-1,Oe=ve+1;ve<be;ve++,xe++,Oe++)xe===be&&(xe=0),Oe===be&&(Oe=0),X[ve]=z(G[ve],G[xe],G[Oe]);const Y=[];let oe,pe=X.concat();for(let ve=0,be=ie;ve<be;ve++){const xe=D[ve];oe=[];for(let Oe=0,Ue=xe.length,ct=Ue-1,k=Oe+1;Oe<Ue;Oe++,ct++,k++)ct===Ue&&(ct=0),k===Ue&&(k=0),oe[Oe]=z(xe[Oe],xe[ct],xe[k]);Y.push(oe),pe=pe.concat(oe)}let Ie;if(y===0)Ie=Vi.triangulateShape(G,D);else{const ve=[],be=[];for(let xe=0;xe<y;xe++){const Oe=xe/y,Ue=g*Math.cos(Oe*Math.PI/2),ct=x*Math.sin(Oe*Math.PI/2)+b;for(let k=0,pt=G.length;k<pt;k++){const tt=Z(G[k],X[k],ct);$e(tt.x,tt.y,-Ue),Oe===0&&ve.push(tt)}for(let k=0,pt=ie;k<pt;k++){const tt=D[k];oe=Y[k];const ut=[];for(let Me=0,Pt=tt.length;Me<Pt;Me++){const N=Z(tt[Me],oe[Me],ct);$e(N.x,N.y,-Ue),Oe===0&&ut.push(N)}Oe===0&&be.push(ut)}}Ie=Vi.triangulateShape(ve,be)}const rt=Ie.length,Qe=x+b;for(let ve=0;ve<j;ve++){const be=m?Z(U[ve],pe[ve],Qe):U[ve];w?(O.copy(I.normals[0]).multiplyScalar(be.x),C.copy(I.binormals[0]).multiplyScalar(be.y),T.copy(E[0]).add(O).add(C),$e(T.x,T.y,T.z)):$e(be.x,be.y,0)}for(let ve=1;ve<=f;ve++)for(let be=0;be<j;be++){const xe=m?Z(U[be],pe[be],Qe):U[be];w?(O.copy(I.normals[ve]).multiplyScalar(xe.x),C.copy(I.binormals[ve]).multiplyScalar(xe.y),T.copy(E[ve]).add(O).add(C),$e(T.x,T.y,T.z)):$e(xe.x,xe.y,p/f*ve)}for(let ve=y-1;ve>=0;ve--){const be=ve/y,xe=g*Math.cos(be*Math.PI/2),Oe=x*Math.sin(be*Math.PI/2)+b;for(let Ue=0,ct=G.length;Ue<ct;Ue++){const k=Z(G[Ue],X[Ue],Oe);$e(k.x,k.y,p+xe)}for(let Ue=0,ct=D.length;Ue<ct;Ue++){const k=D[Ue];oe=Y[Ue];for(let pt=0,tt=k.length;pt<tt;pt++){const ut=Z(k[pt],oe[pt],Oe);w?$e(ut.x,ut.y+E[f-1].y,E[f-1].x+xe):$e(ut.x,ut.y,p+xe)}}}ae(),Re();function ae(){const ve=i.length/3;if(m){let be=0,xe=j*be;for(let Oe=0;Oe<rt;Oe++){const Ue=Ie[Oe];Ke(Ue[2]+xe,Ue[1]+xe,Ue[0]+xe)}be=f+y*2,xe=j*be;for(let Oe=0;Oe<rt;Oe++){const Ue=Ie[Oe];Ke(Ue[0]+xe,Ue[1]+xe,Ue[2]+xe)}}else{for(let be=0;be<rt;be++){const xe=Ie[be];Ke(xe[2],xe[1],xe[0])}for(let be=0;be<rt;be++){const xe=Ie[be];Ke(xe[0]+j*f,xe[1]+j*f,xe[2]+j*f)}}n.addGroup(ve,i.length/3-ve,0)}function Re(){const ve=i.length/3;let be=0;we(G,be),be+=G.length;for(let xe=0,Oe=D.length;xe<Oe;xe++){const Ue=D[xe];we(Ue,be),be+=Ue.length}n.addGroup(ve,i.length/3-ve,1)}function we(ve,be){let xe=ve.length;for(;--xe>=0;){const Oe=xe;let Ue=xe-1;Ue<0&&(Ue=ve.length-1);for(let ct=0,k=f+y*2;ct<k;ct++){const pt=j*ct,tt=j*(ct+1),ut=be+Oe+pt,Me=be+Ue+pt,Pt=be+Ue+tt,N=be+Oe+tt;Pe(ut,Me,Pt,N)}}}function $e(ve,be,xe){u.push(ve),u.push(be),u.push(xe)}function Ke(ve,be,xe){gt(ve),gt(be),gt(xe);const Oe=i.length/3,Ue=M.generateTopUV(n,i,Oe-3,Oe-2,Oe-1);Ye(Ue[0]),Ye(Ue[1]),Ye(Ue[2])}function Pe(ve,be,xe,Oe){gt(ve),gt(be),gt(Oe),gt(be),gt(xe),gt(Oe);const Ue=i.length/3,ct=M.generateSideWallUV(n,i,Ue-6,Ue-3,Ue-2,Ue-1);Ye(ct[0]),Ye(ct[1]),Ye(ct[3]),Ye(ct[1]),Ye(ct[2]),Ye(ct[3])}function gt(ve){i.push(u[ve*3+0]),i.push(u[ve*3+1]),i.push(u[ve*3+2])}function Ye(ve){s.push(ve.x),s.push(ve.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return gb(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const c=t[e.shapes[s]];n.push(c)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new vh[i.type]().fromJSON(i)),new qh(n,e.options)}}const mb={generateTopUV:function(r,e,t,n,i){const s=e[t*3],o=e[t*3+1],c=e[n*3],u=e[n*3+1],h=e[i*3],f=e[i*3+1];return[new me(s,o),new me(c,u),new me(h,f)]},generateSideWallUV:function(r,e,t,n,i,s){const o=e[t*3],c=e[t*3+1],u=e[t*3+2],h=e[n*3],f=e[n*3+1],p=e[n*3+2],m=e[i*3],g=e[i*3+1],x=e[i*3+2],b=e[s*3],y=e[s*3+1],_=e[s*3+2];return Math.abs(c-f)<Math.abs(o-h)?[new me(o,1-u),new me(h,1-p),new me(m,1-x),new me(b,1-_)]:[new me(c,1-u),new me(f,1-p),new me(g,1-x),new me(y,1-_)]}};function gb(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Zh extends as{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Zh(e.radius,e.detail)}}class jh extends Mt{constructor(e=[new me(0,-.5),new me(.5,0),new me(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=vt(i,0,Math.PI*2);const s=[],o=[],c=[],u=[],h=[],f=1/t,p=new F,m=new me,g=new F,x=new F,b=new F;let y=0,_=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:y=e[M+1].x-e[M].x,_=e[M+1].y-e[M].y,g.x=_*1,g.y=-y,g.z=_*0,b.copy(g),g.normalize(),u.push(g.x,g.y,g.z);break;case e.length-1:u.push(b.x,b.y,b.z);break;default:y=e[M+1].x-e[M].x,_=e[M+1].y-e[M].y,g.x=_*1,g.y=-y,g.z=_*0,x.copy(g),g.x+=b.x,g.y+=b.y,g.z+=b.z,g.normalize(),u.push(g.x,g.y,g.z),b.copy(x)}for(let M=0;M<=t;M++){const E=n+M*f*i,w=Math.sin(E),I=Math.cos(E);for(let C=0;C<=e.length-1;C++){p.x=e[C].x*w,p.y=e[C].y,p.z=e[C].x*I,o.push(p.x,p.y,p.z),m.x=M/t,m.y=C/(e.length-1),c.push(m.x,m.y);const O=u[3*C+0]*w,T=u[3*C+1],P=u[3*C+0]*I;h.push(O,T,P)}}for(let M=0;M<t;M++)for(let E=0;E<e.length-1;E++){const w=E+M*e.length,I=w,C=w+e.length,O=w+e.length+1,T=w+1;s.push(I,C,T),s.push(O,T,C)}this.setIndex(s),this.setAttribute("position",new et(o,3)),this.setAttribute("uv",new et(c,2)),this.setAttribute("normal",new et(h,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jh(e.points,e.segments,e.phiStart,e.phiLength)}}class wl extends as{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new wl(e.radius,e.detail)}}class na extends Mt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,c=Math.floor(n),u=Math.floor(i),h=c+1,f=u+1,p=e/c,m=t/u,g=[],x=[],b=[],y=[];for(let _=0;_<f;_++){const M=_*m-o;for(let E=0;E<h;E++){const w=E*p-s;x.push(w,-M,0),b.push(0,0,1),y.push(E/c),y.push(1-_/u)}}for(let _=0;_<u;_++)for(let M=0;M<c;M++){const E=M+h*_,w=M+h*(_+1),I=M+1+h*(_+1),C=M+1+h*_;g.push(E,w,C),g.push(w,I,C)}this.setIndex(g),this.setAttribute("position",new et(x,3)),this.setAttribute("normal",new et(b,3)),this.setAttribute("uv",new et(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new na(e.width,e.height,e.widthSegments,e.heightSegments)}}class Jh extends Mt{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const c=[],u=[],h=[],f=[];let p=e;const m=(t-e)/i,g=new F,x=new me;for(let b=0;b<=i;b++){for(let y=0;y<=n;y++){const _=s+y/n*o;g.x=p*Math.cos(_),g.y=p*Math.sin(_),u.push(g.x,g.y,g.z),h.push(0,0,1),x.x=(g.x/t+1)/2,x.y=(g.y/t+1)/2,f.push(x.x,x.y)}p+=m}for(let b=0;b<i;b++){const y=b*(n+1);for(let _=0;_<n;_++){const M=_+y,E=M,w=M+n+1,I=M+n+2,C=M+1;c.push(E,w,C),c.push(w,I,C)}}this.setIndex(c),this.setAttribute("position",new et(u,3)),this.setAttribute("normal",new et(h,3)),this.setAttribute("uv",new et(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Kh extends Mt{constructor(e=new Ws([new me(0,.5),new me(-.5,-.5),new me(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],o=[];let c=0,u=0;if(Array.isArray(e)===!1)h(e);else for(let f=0;f<e.length;f++)h(e[f]),this.addGroup(c,u,f),c+=u,u=0;this.setIndex(n),this.setAttribute("position",new et(i,3)),this.setAttribute("normal",new et(s,3)),this.setAttribute("uv",new et(o,2));function h(f){const p=i.length/3,m=f.extractPoints(t);let g=m.shape;const x=m.holes;Vi.isClockWise(g)===!1&&(g=g.reverse());for(let y=0,_=x.length;y<_;y++){const M=x[y];Vi.isClockWise(M)===!0&&(x[y]=M.reverse())}const b=Vi.triangulateShape(g,x);for(let y=0,_=x.length;y<_;y++){const M=x[y];g=g.concat(M)}for(let y=0,_=g.length;y<_;y++){const M=g[y];i.push(M.x,M.y,0),s.push(0,0,1),o.push(M.x,M.y)}for(let y=0,_=b.length;y<_;y++){const M=b[y],E=M[0]+p,w=M[1]+p,I=M[2]+p;n.push(E,w,I),u+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return vb(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const o=t[e.shapes[i]];n.push(o)}return new Kh(n,e.curveSegments)}}function vb(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class Tl extends Mt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const u=Math.min(o+c,Math.PI);let h=0;const f=[],p=new F,m=new F,g=[],x=[],b=[],y=[];for(let _=0;_<=n;_++){const M=[],E=_/n;let w=0;_===0&&o===0?w=.5/t:_===n&&u===Math.PI&&(w=-.5/t);for(let I=0;I<=t;I++){const C=I/t;p.x=-e*Math.cos(i+C*s)*Math.sin(o+E*c),p.y=e*Math.cos(o+E*c),p.z=e*Math.sin(i+C*s)*Math.sin(o+E*c),x.push(p.x,p.y,p.z),m.copy(p).normalize(),b.push(m.x,m.y,m.z),y.push(C+w,1-E),M.push(h++)}f.push(M)}for(let _=0;_<n;_++)for(let M=0;M<t;M++){const E=f[_][M+1],w=f[_][M],I=f[_+1][M],C=f[_+1][M+1];(_!==0||o>0)&&g.push(E,w,C),(_!==n-1||u<Math.PI)&&g.push(w,I,C)}this.setIndex(g),this.setAttribute("position",new et(x,3)),this.setAttribute("normal",new et(b,3)),this.setAttribute("uv",new et(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Qh extends as{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Qh(e.radius,e.detail)}}class $h extends Mt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2,o=0,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s,thetaStart:o,thetaLength:c},n=Math.floor(n),i=Math.floor(i);const u=[],h=[],f=[],p=[],m=new F,g=new F,x=new F;for(let b=0;b<=n;b++){const y=o+b/n*c;for(let _=0;_<=i;_++){const M=_/i*s;g.x=(e+t*Math.cos(y))*Math.cos(M),g.y=(e+t*Math.cos(y))*Math.sin(M),g.z=t*Math.sin(y),h.push(g.x,g.y,g.z),m.x=e*Math.cos(M),m.y=e*Math.sin(M),x.subVectors(g,m).normalize(),f.push(x.x,x.y,x.z),p.push(_/i),p.push(b/n)}}for(let b=1;b<=n;b++)for(let y=1;y<=i;y++){const _=(i+1)*b+y-1,M=(i+1)*(b-1)+y-1,E=(i+1)*(b-1)+y,w=(i+1)*b+y;u.push(_,M,w),u.push(M,E,w)}this.setIndex(u),this.setAttribute("position",new et(h,3)),this.setAttribute("normal",new et(f,3)),this.setAttribute("uv",new et(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $h(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ef extends Mt{constructor(e=1,t=.4,n=64,i=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:o},n=Math.floor(n),i=Math.floor(i);const c=[],u=[],h=[],f=[],p=new F,m=new F,g=new F,x=new F,b=new F,y=new F,_=new F;for(let E=0;E<=n;++E){const w=E/n*s*Math.PI*2;M(w,s,o,e,g),M(w+.01,s,o,e,x),y.subVectors(x,g),_.addVectors(x,g),b.crossVectors(y,_),_.crossVectors(b,y),b.normalize(),_.normalize();for(let I=0;I<=i;++I){const C=I/i*Math.PI*2,O=-t*Math.cos(C),T=t*Math.sin(C);p.x=g.x+(O*_.x+T*b.x),p.y=g.y+(O*_.y+T*b.y),p.z=g.z+(O*_.z+T*b.z),u.push(p.x,p.y,p.z),m.subVectors(p,g).normalize(),h.push(m.x,m.y,m.z),f.push(E/n),f.push(I/i)}}for(let E=1;E<=n;E++)for(let w=1;w<=i;w++){const I=(i+1)*(E-1)+(w-1),C=(i+1)*E+(w-1),O=(i+1)*E+w,T=(i+1)*(E-1)+w;c.push(I,C,T),c.push(C,O,T)}this.setIndex(c),this.setAttribute("position",new et(u,3)),this.setAttribute("normal",new et(h,3)),this.setAttribute("uv",new et(f,2));function M(E,w,I,C,O){const T=Math.cos(E),P=Math.sin(E),U=I/w*E,D=Math.cos(U);O.x=C*(2+D)*.5*T,O.y=C*(2+D)*P*.5,O.z=C*Math.sin(U)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ef(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class tf extends Mt{constructor(e=new dm(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const c=new F,u=new F,h=new me;let f=new F;const p=[],m=[],g=[],x=[];b(),this.setIndex(x),this.setAttribute("position",new et(p,3)),this.setAttribute("normal",new et(m,3)),this.setAttribute("uv",new et(g,2));function b(){for(let E=0;E<t;E++)y(E);y(s===!1?t:0),M(),_()}function y(E){f=e.getPointAt(E/t,f);const w=o.normals[E],I=o.binormals[E];for(let C=0;C<=i;C++){const O=C/i*Math.PI*2,T=Math.sin(O),P=-Math.cos(O);u.x=P*w.x+T*I.x,u.y=P*w.y+T*I.y,u.z=P*w.z+T*I.z,u.normalize(),m.push(u.x,u.y,u.z),c.x=f.x+n*u.x,c.y=f.y+n*u.y,c.z=f.z+n*u.z,p.push(c.x,c.y,c.z)}}function _(){for(let E=1;E<=t;E++)for(let w=1;w<=i;w++){const I=(i+1)*(E-1)+(w-1),C=(i+1)*E+(w-1),O=(i+1)*E+w,T=(i+1)*(E-1)+w;x.push(I,C,T),x.push(C,O,T)}}function M(){for(let E=0;E<=t;E++)for(let w=0;w<=i;w++)h.x=E/t,h.y=w/i,g.push(h.x,h.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new tf(new vh[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class mm extends Mt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new F,s=new F;if(e.index!==null){const o=e.attributes.position,c=e.index;let u=e.groups;u.length===0&&(u=[{start:0,count:c.count,materialIndex:0}]);for(let h=0,f=u.length;h<f;++h){const p=u[h],m=p.start,g=p.count;for(let x=m,b=m+g;x<b;x+=3)for(let y=0;y<3;y++){const _=c.getX(x+y),M=c.getX(x+(y+1)%3);i.fromBufferAttribute(o,_),s.fromBufferAttribute(o,M),lv(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let c=0,u=o.count/3;c<u;c++)for(let h=0;h<3;h++){const f=3*c+h,p=3*c+(h+1)%3;i.fromBufferAttribute(o,f),s.fromBufferAttribute(o,p),lv(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new et(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function lv(r,e,t){const n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var cv=Object.freeze({__proto__:null,BoxGeometry:Qs,CapsuleGeometry:Gh,CircleGeometry:Wh,ConeGeometry:El,CylinderGeometry:bl,DodecahedronGeometry:Xh,EdgesGeometry:lm,ExtrudeGeometry:qh,IcosahedronGeometry:Zh,LatheGeometry:jh,OctahedronGeometry:wl,PlaneGeometry:na,PolyhedronGeometry:as,RingGeometry:Jh,ShapeGeometry:Kh,SphereGeometry:Tl,TetrahedronGeometry:Qh,TorusGeometry:$h,TorusKnotGeometry:ef,TubeGeometry:tf,WireframeGeometry:mm});class Nx extends On{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Je(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function Qo(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];if(uv(i))i.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(uv(i[0])){const s=[];for(let o=0,c=i.length;o<c;o++)s[o]=i[o].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Hn(r){const e={};for(let t=0;t<r.length;t++){const n=Qo(r[t]);for(const i in n)e[i]=n[i]}return e}function uv(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function _b(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Ux(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const xh={clone:Qo,merge:Hn};var xb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends On{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xb,this.fragmentShader=yb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qo(e.uniforms),this.uniformsGroups=_b(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class gm extends gi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class vm extends On{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nr,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ox extends vm{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Fx extends On{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Je(16777215),this.specular=new Je(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nr,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=yl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Bx extends On{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Je(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nr,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class zx extends On{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nr,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class kx extends On{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nr,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=yl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _m extends On{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xm extends On{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Vx extends On{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Je(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nr,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Hx extends qn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function ks(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Gx(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ap(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const c=t[s]*e;for(let u=0;u!==e;++u)i[o++]=r[c+u]}return i}function ym(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}function Sb(r,e,t,n,i=30){const s=r.clone();s.name=e;const o=[];for(let u=0;u<s.tracks.length;++u){const h=s.tracks[u],f=h.getValueSize(),p=[],m=[];for(let g=0;g<h.times.length;++g){const x=h.times[g]*i;if(!(x<t||x>=n)){p.push(h.times[g]);for(let b=0;b<f;++b)m.push(h.values[g*f+b])}}p.length!==0&&(h.times=ks(p,h.times.constructor),h.values=ks(m,h.values.constructor),o.push(h))}s.tracks=o;let c=1/0;for(let u=0;u<s.tracks.length;++u)c>s.tracks[u].times[0]&&(c=s.tracks[u].times[0]);for(let u=0;u<s.tracks.length;++u)s.tracks[u].shift(-1*c);return s.resetDuration(),s}function Mb(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let o=0;o<i;++o){const c=t.tracks[o],u=c.ValueTypeName;if(u==="bool"||u==="string")continue;const h=r.tracks.find(function(_){return _.name===c.name&&_.ValueTypeName===u});if(h===void 0)continue;let f=0;const p=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=p/3);let m=0;const g=h.getValueSize();h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(m=g/3);const x=c.times.length-1;let b;if(s<=c.times[0]){const _=f,M=p-f;b=c.values.slice(_,M)}else if(s>=c.times[x]){const _=x*p+f,M=_+p-f;b=c.values.slice(_,M)}else{const _=c.createInterpolant(),M=f,E=p-f;_.evaluate(s),b=_.resultBuffer.slice(M,E)}u==="quaternion"&&new An().fromArray(b).normalize().conjugate().toArray(b);const y=h.times.length;for(let _=0;_<y;++_){const M=_*g+m;if(u==="quaternion")An.multiplyQuaternionsFlat(h.values,M,b,0,h.values,M);else{const E=g-m*2;for(let w=0;w<E;++w)h.values[M+w]-=b[w]}}}return r.blendMode=Qp,r}class bb{static convertArray(e,t){return ks(e,t)}static isTypedArray(e){return cx(e)}static getKeyframeOrder(e){return Gx(e)}static sortedArray(e,t,n){return Ap(e,t,n)}static flattenJSON(e,t,n,i){ym(e,t,n,i)}static subclip(e,t,n,i,s=30){return Sb(e,t,n,i,s)}static makeClipAdditive(e,t=0,n=e,i=30){return Mb(e,t,n,i)}}class ia{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let c=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const c=t[1];e<c&&(n=2,s=c);for(let u=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const c=n+o>>>1;e<t[c]?o=c:n=c+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Wx extends ia{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bs,endingEnd:Bs}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,c=i[s],u=i[o];if(c===void 0)switch(this.getSettings_().endingStart){case zs:s=e,c=2*t-n;break;case ol:s=i.length-2,c=t+i[s]-i[s+1];break;default:s=e,c=n}if(u===void 0)switch(this.getSettings_().endingEnd){case zs:o=e,u=2*n-t;break;case ol:o=1,u=n+i[1]-i[0];break;default:o=e-1,u=t}const h=(n-t)*.5,f=this.valueSize;this._weightPrev=h/(t-c),this._weightNext=h/(u-n),this._offsetPrev=s*f,this._offsetNext=o*f}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,c=this.valueSize,u=e*c,h=u-c,f=this._offsetPrev,p=this._offsetNext,m=this._weightPrev,g=this._weightNext,x=(n-t)/(i-t),b=x*x,y=b*x,_=-m*y+2*m*b-m*x,M=(1+m)*y+(-1.5-2*m)*b+(-.5+m)*x+1,E=(-1-g)*y+(1.5+g)*b+.5*x,w=g*y-g*b;for(let I=0;I!==c;++I)s[I]=_*o[f+I]+M*o[h+I]+E*o[u+I]+w*o[p+I];return s}}class Sm extends ia{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,c=this.valueSize,u=e*c,h=u-c,f=(n-t)/(i-t),p=1-f;for(let m=0;m!==c;++m)s[m]=o[h+m]*p+o[u+m]*f;return s}}class Xx extends ia{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Yx extends ia{interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,c=this.valueSize,u=e*c,h=u-c,f=this.settings||this.DefaultSettings_,p=f.inTangents,m=f.outTangents;if(!p||!m){const b=(n-t)/(i-t),y=1-b;for(let _=0;_!==c;++_)s[_]=o[h+_]*y+o[u+_]*b;return s}const g=c*2,x=e-1;for(let b=0;b!==c;++b){const y=o[h+b],_=o[u+b],M=x*g+b*2,E=m[M],w=m[M+1],I=e*g+b*2,C=p[I],O=p[I+1];let T=(n-t)/(i-t),P,U,D,H,K;for(let ie=0;ie<8;ie++){P=T*T,U=P*T,D=1-T,H=D*D,K=H*D;const Z=K*t+3*H*T*E+3*D*P*C+U*i-n;if(Math.abs(Z)<1e-10)break;const j=3*H*(E-t)+6*D*T*(C-E)+3*P*(i-C);if(Math.abs(j)<1e-10)break;T=T-Z/j,T=Math.max(0,Math.min(1,T))}s[b]=K*y+3*H*T*w+3*D*P*O+U*_}return s}}class Ii{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ks(t,this.TimeBufferType),this.values=ks(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ks(e.times,Array),values:ks(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Sm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Wx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Yx(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case sl:t=this.InterpolantFactoryMethodDiscrete;break;case dh:t=this.InterpolantFactoryMethodLinear;break;case Eu:t=this.InterpolantFactoryMethodSmooth;break;case Sp:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ze("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return sl;case this.InterpolantFactoryMethodLinear:return dh;case this.InterpolantFactoryMethodSmooth:return Eu;case this.InterpolantFactoryMethodBezier:return Sp}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const c=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*c,o*c)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(ot("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(ot("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let c=0;c!==s;c++){const u=n[c];if(typeof u=="number"&&isNaN(u)){ot("KeyframeTrack: Time is not a valid number.",this,c,u),e=!1;break}if(o!==null&&o>u){ot("KeyframeTrack: Out of order keys.",this,c,u,o),e=!1;break}o=u}if(i!==void 0&&cx(i))for(let c=0,u=i.length;c!==u;++c){const h=i[c];if(isNaN(h)){ot("KeyframeTrack: Value is not a valid number.",this,c,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Eu,s=e.length-1;let o=1;for(let c=1;c<s;++c){let u=!1;const h=e[c],f=e[c+1];if(h!==f&&(c!==1||h!==e[0]))if(i)u=!0;else{const p=c*n,m=p-n,g=p+n;for(let x=0;x!==n;++x){const b=t[p+x];if(b!==t[m+x]||b!==t[g+x]){u=!0;break}}}if(u){if(c!==o){e[o]=e[c];const p=c*n,m=o*n;for(let g=0;g!==n;++g)t[m+g]=t[p+g]}++o}}if(s>0){e[o]=e[s];for(let c=s*n,u=o*n,h=0;h!==n;++h)t[u+h]=t[c+h];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Ii.prototype.ValueTypeName="";Ii.prototype.TimeBufferType=Float32Array;Ii.prototype.ValueBufferType=Float32Array;Ii.prototype.DefaultInterpolation=dh;class $s extends Ii{constructor(e,t,n){super(e,t,n)}}$s.prototype.ValueTypeName="bool";$s.prototype.ValueBufferType=Array;$s.prototype.DefaultInterpolation=sl;$s.prototype.InterpolantFactoryMethodLinear=void 0;$s.prototype.InterpolantFactoryMethodSmooth=void 0;class Mm extends Ii{constructor(e,t,n,i){super(e,t,n,i)}}Mm.prototype.ValueTypeName="color";class ml extends Ii{constructor(e,t,n,i){super(e,t,n,i)}}ml.prototype.ValueTypeName="number";class qx extends ia{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,c=this.valueSize,u=(n-t)/(i-t);let h=e*c;for(let f=h+c;h!==f;h+=4)An.slerpFlat(s,0,o,h-c,o,h,u);return s}}class Al extends Ii{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new qx(this.times,this.values,this.getValueSize(),e)}}Al.prototype.ValueTypeName="quaternion";Al.prototype.InterpolantFactoryMethodSmooth=void 0;class eo extends Ii{constructor(e,t,n){super(e,t,n)}}eo.prototype.ValueTypeName="string";eo.prototype.ValueBufferType=Array;eo.prototype.DefaultInterpolation=sl;eo.prototype.InterpolantFactoryMethodLinear=void 0;eo.prototype.InterpolantFactoryMethodSmooth=void 0;class gl extends Ii{constructor(e,t,n,i){super(e,t,n,i)}}gl.prototype.ValueTypeName="vector";class vl{constructor(e="",t=-1,n=[],i=Lh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=pi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,c=n.length;o!==c;++o)t.push(wb(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(Ii.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let c=0;c<s;c++){let u=[],h=[];u.push((c+s-1)%s,c,(c+1)%s),h.push(0,1,0);const f=Gx(u);u=Ap(u,1,f),h=Ap(h,1,f),!i&&u[0]===0&&(u.push(s),h.push(h[0])),o.push(new ml(".morphTargetInfluences["+t[c].name+"]",u,h).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let c=0,u=e.length;c<u;c++){const h=e[c],f=h.name.match(s);if(f&&f.length>1){const p=f[1];let m=i[p];m||(i[p]=m=[]),m.push(h)}}const o=[];for(const c in i)o.push(this.CreateFromMorphTargetSequence(c,i[c],t,n));return o}static parseAnimation(e,t){if(ze("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return ot("AnimationClip: No animation in JSONLoader data."),null;const n=function(p,m,g,x,b){if(g.length!==0){const y=[],_=[];ym(g,y,_,x),y.length!==0&&b.push(new p(m,y,_))}},i=[],s=e.name||"default",o=e.fps||30,c=e.blendMode;let u=e.length||-1;const h=e.hierarchy||[];for(let p=0;p<h.length;p++){const m=h[p].keys;if(!(!m||m.length===0))if(m[0].morphTargets){const g={};let x;for(x=0;x<m.length;x++)if(m[x].morphTargets)for(let b=0;b<m[x].morphTargets.length;b++)g[m[x].morphTargets[b]]=-1;for(const b in g){const y=[],_=[];for(let M=0;M!==m[x].morphTargets.length;++M){const E=m[x];y.push(E.time),_.push(E.morphTarget===b?1:0)}i.push(new ml(".morphTargetInfluence["+b+"]",y,_))}u=g.length*o}else{const g=".bones["+t[p].name+"]";n(gl,g+".position",m,"pos",i),n(Al,g+".quaternion",m,"rot",i),n(gl,g+".scale",m,"scl",i)}}return i.length===0?null:new this(s,u,i,c)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Eb(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ml;case"vector":case"vector2":case"vector3":case"vector4":return gl;case"color":return Mm;case"quaternion":return Al;case"bool":case"boolean":return $s;case"string":return eo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function wb(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Eb(r.type);if(r.times===void 0){const t=[],n=[];ym(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const ur={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(hv(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!hv(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function hv(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class bm{constructor(e,t,n){const i=this;let s=!1,o=0,c=0,u;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(f){c++,s===!1&&i.onStart!==void 0&&i.onStart(f,o,c),s=!0},this.itemEnd=function(f){o++,i.onProgress!==void 0&&i.onProgress(f,o,c),o===c&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(f){i.onError!==void 0&&i.onError(f)},this.resolveURL=function(f){return u?u(f):f},this.setURLModifier=function(f){return u=f,this},this.addHandler=function(f,p){return h.push(f,p),this},this.removeHandler=function(f){const p=h.indexOf(f);return p!==-1&&h.splice(p,2),this},this.getHandler=function(f){for(let p=0,m=h.length;p<m;p+=2){const g=h[p],x=h[p+1];if(g.global&&(g.lastIndex=0),g.test(f))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Zx=new bm;class ii{constructor(e){this.manager=e!==void 0?e:Zx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ii.DEFAULT_MATERIAL_NAME="__DEFAULT";const Cr={};class Tb extends Error{constructor(e,t){super(e),this.response=t}}class Ur extends ii{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ur.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Cr[e]!==void 0){Cr[e].push({onLoad:t,onProgress:n,onError:i});return}Cr[e]=[],Cr[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),c=this.mimeType,u=this.responseType;fetch(o).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&ze("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const f=Cr[e],p=h.body.getReader(),m=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),g=m?parseInt(m):0,x=g!==0;let b=0;const y=new ReadableStream({start(_){M();function M(){p.read().then(({done:E,value:w})=>{if(E)_.close();else{b+=w.byteLength;const I=new ProgressEvent("progress",{lengthComputable:x,loaded:b,total:g});for(let C=0,O=f.length;C<O;C++){const T=f[C];T.onProgress&&T.onProgress(I)}_.enqueue(w),M()}},E=>{_.error(E)})}}});return new Response(y)}else throw new Tb(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(u){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(f=>new DOMParser().parseFromString(f,c));case"json":return h.json();default:if(c==="")return h.text();{const p=/charset="?([^;"\s]*)"?/i.exec(c),m=p&&p[1]?p[1].toLowerCase():void 0,g=new TextDecoder(m);return h.arrayBuffer().then(x=>g.decode(x))}}}).then(h=>{ur.add(`file:${e}`,h);const f=Cr[e];delete Cr[e];for(let p=0,m=f.length;p<m;p++){const g=f[p];g.onLoad&&g.onLoad(h)}}).catch(h=>{const f=Cr[e];if(f===void 0)throw this.manager.itemError(e),h;delete Cr[e];for(let p=0,m=f.length;p<m;p++){const g=f[p];g.onError&&g.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Ab extends ii{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Ur(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(c){try{t(s.parse(JSON.parse(c)))}catch(u){i?i(u):ot(u),s.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=vl.parse(e[n]);t.push(i)}return t}}class Cb extends ii{constructor(e){super(e)}load(e,t,n,i){const s=this,o=[],c=new Hh,u=new Ur(this.manager);u.setPath(this.path),u.setResponseType("arraybuffer"),u.setRequestHeader(this.requestHeader),u.setWithCredentials(s.withCredentials);let h=0;function f(p){u.load(e[p],function(m){const g=s.parse(m,!0);o[p]={width:g.width,height:g.height,format:g.format,mipmaps:g.mipmaps},h+=1,h===6&&(g.mipmapCount===1&&(c.minFilter=jt),c.image=o,c.format=g.format,c.needsUpdate=!0,t&&t(c))},n,i)}if(Array.isArray(e))for(let p=0,m=e.length;p<m;++p)f(p);else u.load(e,function(p){const m=s.parse(p,!0);if(m.isCubemap){const g=m.mipmaps.length/m.mipmapCount;for(let x=0;x<g;x++){o[x]={mipmaps:[]};for(let b=0;b<m.mipmapCount;b++)o[x].mipmaps.push(m.mipmaps[x*m.mipmapCount+b]),o[x].format=m.format,o[x].width=m.width,o[x].height=m.height}c.image=o}else c.image.width=m.width,c.image.height=m.height,c.mipmaps=m.mipmaps;m.mipmapCount===1&&(c.minFilter=jt),c.format=m.format,c.needsUpdate=!0,t&&t(c)},n,i);return c}}const Io=new WeakMap;class _l extends ii{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ur.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let p=Io.get(o);p===void 0&&(p=[],Io.set(o,p)),p.push({onLoad:t,onError:i})}return o}const c=ul("img");function u(){f(),t&&t(this);const p=Io.get(this)||[];for(let m=0;m<p.length;m++){const g=p[m];g.onLoad&&g.onLoad(this)}Io.delete(this),s.manager.itemEnd(e)}function h(p){f(),i&&i(p),ur.remove(`image:${e}`);const m=Io.get(this)||[];for(let g=0;g<m.length;g++){const x=m[g];x.onError&&x.onError(p)}Io.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){c.removeEventListener("load",u,!1),c.removeEventListener("error",h,!1)}return c.addEventListener("load",u,!1),c.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),ur.add(`image:${e}`,c),s.manager.itemStart(e),c.src=e,c}}class Rb extends ii{constructor(e){super(e)}load(e,t,n,i){const s=new Ml;s.colorSpace=ei;const o=new _l(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let c=0;function u(h){o.load(e[h],function(f){s.images[h]=f,c++,c===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let h=0;h<e.length;++h)u(h);return s}}class Pb extends ii{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Hi,c=new Ur(this.manager);return c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setPath(this.path),c.setWithCredentials(s.withCredentials),c.load(e,function(u){let h;try{h=s.parse(u)}catch(f){i!==void 0?i(f):ot(f);return}h.image!==void 0?o.image=h.image:h.data!==void 0&&(o.image.width=h.width,o.image.height=h.height,o.image.data=h.data),o.wrapS=h.wrapS!==void 0?h.wrapS:ni,o.wrapT=h.wrapT!==void 0?h.wrapT:ni,o.magFilter=h.magFilter!==void 0?h.magFilter:jt,o.minFilter=h.minFilter!==void 0?h.minFilter:jt,o.anisotropy=h.anisotropy!==void 0?h.anisotropy:1,h.colorSpace!==void 0&&(o.colorSpace=h.colorSpace),h.flipY!==void 0&&(o.flipY=h.flipY),h.format!==void 0&&(o.format=h.format),h.type!==void 0&&(o.type=h.type),h.mipmaps!==void 0&&(o.mipmaps=h.mipmaps,o.minFilter=cr),h.mipmapCount===1&&(o.minFilter=jt),h.generateMipmaps!==void 0&&(o.generateMipmaps=h.generateMipmaps),o.needsUpdate=!0,t&&t(o,h)},n,i),o}}class Ib extends ii{constructor(e){super(e)}load(e,t,n,i){const s=new nn,o=new _l(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(c){s.image=c,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class ls extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class jx extends ls{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Wd=new _t,fv=new F,dv=new F;class Em{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.mapType=Gn,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ta,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;fv.setFromMatrixPosition(e.matrixWorld),t.position.copy(fv),dv.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dv),t.updateMatrixWorld(),Wd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wd,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===qs||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const au=new F,lu=new An,ir=new F;class Cl extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(au,lu,ir),ir.x===1&&ir.y===1&&ir.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(au,lu,ir.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(au,lu,ir),ir.x===1&&ir.y===1&&ir.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(au,lu,ir.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Jr=new F,pv=new me,mv=new me;class en extends Cl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=jo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jo*2*Math.atan(Math.tan(Hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Jr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Jr.x,Jr.y).multiplyScalar(-e/Jr.z),Jr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Jr.x,Jr.y).multiplyScalar(-e/Jr.z)}getViewSize(e,t){return this.getViewBounds(e,pv,mv),t.subVectors(mv,pv)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const u=o.fullWidth,h=o.fullHeight;s+=o.offsetX*i/u,t-=o.offsetY*n/h,i*=o.width/u,n*=o.height/h}const c=this.filmOffset;c!==0&&(s+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Lb extends Em{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=jo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Jx extends ls{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Lb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Db extends Em{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0}}class Kx extends ls{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Db}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Gi extends Cl{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,c=i+t,u=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,o=s+h*this.view.width,c-=f*this.view.offsetY,u=c-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,c,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Nb extends Em{constructor(){super(new Gi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qx extends ls{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new Nb}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class $x extends ls{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ey extends ls{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class wm{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new F)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*i),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*i)),t.addScaledVector(o[5],1.092548*(i*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(n*s)),t.addScaledVector(o[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*i),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*i),t.addScaledVector(o[5],2*.429043*i*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*n*s),t.addScaledVector(o[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}class ty extends ls{constructor(e=new wm,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class nf extends ii{constructor(e){super(e),this.textures={}}load(e,t,n,i){const s=this,o=new Ur(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(c){try{t(s.parse(JSON.parse(c)))}catch(u){i?i(u):ot(u),s.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(s){return t[s]===void 0&&ze("MaterialLoader: Undefined texture",s),t[s]}const i=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new Je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(i.dispersion=e.dispersion),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(i.allowOverride=e.allowOverride),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const o=e.uniforms[s];switch(i.uniforms[s]={},o.type){case"t":i.uniforms[s].value=n(o.value);break;case"c":i.uniforms[s].value=new Je().setHex(o.value);break;case"v2":i.uniforms[s].value=new me().fromArray(o.value);break;case"v3":i.uniforms[s].value=new F().fromArray(o.value);break;case"v4":i.uniforms[s].value=new Lt().fromArray(o.value);break;case"m3":i.uniforms[s].value=new yt().fromArray(o.value);break;case"m4":i.uniforms[s].value=new _t().fromArray(o.value);break;default:i.uniforms[s].value=o.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)i.extensions[s]=e.extensions[s];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),i.normalScale=new me().fromArray(s)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new me().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return nf.createMaterialFromType(e)}static createMaterialFromType(e){const t={ShadowMaterial:Nx,SpriteMaterial:rm,RawShaderMaterial:gm,ShaderMaterial:gi,PointsMaterial:om,MeshPhysicalMaterial:Ox,MeshStandardMaterial:vm,MeshPhongMaterial:Fx,MeshToonMaterial:Bx,MeshNormalMaterial:zx,MeshLambertMaterial:kx,MeshDepthMaterial:_m,MeshDistanceMaterial:xm,MeshBasicMaterial:os,MeshMatcapMaterial:Vx,LineDashedMaterial:Hx,LineBasicMaterial:qn,Material:On};return new t[e]}}class Cp{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Tm extends Mt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class ny extends ii{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Ur(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(c){try{t(s.parse(JSON.parse(c)))}catch(u){i?i(u):ot(u),s.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(g,x){if(t[x]!==void 0)return t[x];const y=g.interleavedBuffers[x],_=s(g,y.buffer),M=Ho(y.type,_),E=new zh(M,y.stride);return E.uuid=y.uuid,t[x]=E,E}function s(g,x){if(n[x]!==void 0)return n[x];const y=g.arrayBuffers[x],_=new Uint32Array(y).buffer;return n[x]=_,_}const o=e.isInstancedBufferGeometry?new Tm:new Mt,c=e.data.index;if(c!==void 0){const g=Ho(c.type,c.array);o.setIndex(new Xt(g,1))}const u=e.data.attributes;for(const g in u){const x=u[g];let b;if(x.isInterleavedBufferAttribute){const y=i(e.data,x.data);b=new di(y,x.itemSize,x.offset,x.normalized)}else{const y=Ho(x.type,x.array),_=x.isInstancedBufferAttribute?Jo:Xt;b=new _(y,x.itemSize,x.normalized)}x.name!==void 0&&(b.name=x.name),x.usage!==void 0&&b.setUsage(x.usage),o.setAttribute(g,b)}const h=e.data.morphAttributes;if(h)for(const g in h){const x=h[g],b=[];for(let y=0,_=x.length;y<_;y++){const M=x[y];let E;if(M.isInterleavedBufferAttribute){const w=i(e.data,M.data);E=new di(w,M.itemSize,M.offset,M.normalized)}else{const w=Ho(M.type,M.array);E=new Xt(w,M.itemSize,M.normalized)}M.name!==void 0&&(E.name=M.name),b.push(E)}o.morphAttributes[g]=b}e.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const p=e.data.groups||e.data.drawcalls||e.data.offsets;if(p!==void 0)for(let g=0,x=p.length;g!==x;++g){const b=p[g];o.addGroup(b.start,b.count,b.materialIndex)}const m=e.data.boundingSphere;return m!==void 0&&(o.boundingSphere=new gn().fromJSON(m)),e.name&&(o.name=e.name),e.userData&&(o.userData=e.userData),o}}const Xd={};class Ub extends ii{constructor(e){super(e)}load(e,t,n,i){const s=this,o=this.path===""?Cp.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||o;const c=new Ur(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){let h=null;try{h=JSON.parse(u)}catch(p){i!==void 0&&i(p),ot("ObjectLoader: Can't parse "+e+".",p.message);return}const f=h.metadata;if(f===void 0||f.type===void 0||f.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),ot("ObjectLoader: Can't load "+e);return}s.parse(h,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?Cp.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const s=new Ur(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const o=await s.loadAsync(e,t);let c;try{c=JSON.parse(o)}catch(h){throw new Error("ObjectLoader: Can't parse "+e+". "+h.message)}const u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(c)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,i),o=this.parseImages(e.images,function(){t!==void 0&&t(h)}),c=this.parseTextures(e.textures,o),u=this.parseMaterials(e.materials,c),h=this.parseObject(e.object,s,u,c,n),f=this.parseSkeletons(e.skeletons,h);if(this.bindSkeletons(h,f),this.bindLightTargets(h),t!==void 0){let p=!1;for(const m in o)if(o[m].data instanceof HTMLImageElement){p=!0;break}p===!1&&t(h)}return h}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),s=await this.parseImagesAsync(e.images),o=this.parseTextures(e.textures,s),c=this.parseMaterials(e.materials,o),u=this.parseObject(e.object,i,c,o,t),h=this.parseSkeletons(e.skeletons,u);return this.bindSkeletons(u,h),this.bindLightTargets(u),u}static registerGeometry(e,t){Xd[e]=t}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const s=new Ws().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(s){s.isBone&&(i[s.uuid]=s)}),e!==void 0)for(let s=0,o=e.length;s<o;s++){const c=new kh().fromJSON(e[s],i);n[c.uuid]=c}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new ny;for(let s=0,o=e.length;s<o;s++){let c;const u=e[s];switch(u.type){case"BufferGeometry":case"InstancedBufferGeometry":c=i.parse(u);break;default:u.type in cv?c=cv[u.type].fromJSON(u,t):u.type in Xd?c=Xd[u.type].fromJSON(u,t):ze(`ObjectLoader: Unknown geometry type "${u.type}". Use .registerGeometry() before starting the deserialization process.`)}c.uuid=u.uuid,u.name!==void 0&&(c.name=u.name),u.userData!==void 0&&(c.userData=u.userData),n[u.uuid]=c}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const s=new nf;s.setTextures(t);for(let o=0,c=e.length;o<c;o++){const u=e[o];n[u.uuid]===void 0&&(n[u.uuid]=s.parse(u)),i[u.uuid]=n[u.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],s=vl.parse(i);t[s.uuid]=s}return t}parseImages(e,t){const n=this,i={};let s;function o(u){return n.manager.itemStart(u),s.load(u,function(){n.manager.itemEnd(u)},void 0,function(){n.manager.itemError(u),n.manager.itemEnd(u)})}function c(u){if(typeof u=="string"){const h=u,f=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(h)?h:n.resourcePath+h;return o(f)}else return u.data?{data:Ho(u.type,u.data),width:u.width,height:u.height}:null}if(e!==void 0&&e.length>0){const u=new bm(t);s=new _l(u),s.setCrossOrigin(this.crossOrigin);for(let h=0,f=e.length;h<f;h++){const p=e[h],m=p.url;if(Array.isArray(m)){const g=[];for(let x=0,b=m.length;x<b;x++){const y=m[x],_=c(y);_!==null&&(_ instanceof HTMLImageElement?g.push(_):g.push(new Hi(_.data,_.width,_.height)))}i[p.uuid]=new es(g)}else{const g=c(p.url);i[p.uuid]=new es(g)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function s(o){if(typeof o=="string"){const c=o,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:t.resourcePath+c;return await i.loadAsync(u)}else return o.data?{data:Ho(o.type,o.data),width:o.width,height:o.height}:null}if(e!==void 0&&e.length>0){i=new _l(this.manager),i.setCrossOrigin(this.crossOrigin);for(let o=0,c=e.length;o<c;o++){const u=e[o],h=u.url;if(Array.isArray(h)){const f=[];for(let p=0,m=h.length;p<m;p++){const g=h[p],x=await s(g);x!==null&&(x instanceof HTMLImageElement?f.push(x):f.push(new Hi(x.data,x.width,x.height)))}n[u.uuid]=new es(f)}else{const f=await s(u.url);n[u.uuid]=new es(f)}}}return n}parseTextures(e,t){function n(s,o){return typeof s=="number"?s:(ze("ObjectLoader.parseTexture: Constant should be in numeric form.",s),o[s])}const i={};if(e!==void 0)for(let s=0,o=e.length;s<o;s++){const c=e[s];c.image===void 0&&ze('ObjectLoader: No "image" specified for',c.uuid),t[c.image]===void 0&&ze("ObjectLoader: Undefined image",c.image);const u=t[c.image],h=u.data;let f;Array.isArray(h)?(f=new Ml,h.length===6&&(f.needsUpdate=!0)):(h&&h.data?f=new Hi:f=new nn,h&&(f.needsUpdate=!0)),f.source=u,f.uuid=c.uuid,c.name!==void 0&&(f.name=c.name),c.mapping!==void 0&&(f.mapping=n(c.mapping,Ob)),c.channel!==void 0&&(f.channel=c.channel),c.offset!==void 0&&f.offset.fromArray(c.offset),c.repeat!==void 0&&f.repeat.fromArray(c.repeat),c.center!==void 0&&f.center.fromArray(c.center),c.rotation!==void 0&&(f.rotation=c.rotation),c.wrap!==void 0&&(f.wrapS=n(c.wrap[0],gv),f.wrapT=n(c.wrap[1],gv)),c.format!==void 0&&(f.format=c.format),c.internalFormat!==void 0&&(f.internalFormat=c.internalFormat),c.type!==void 0&&(f.type=c.type),c.colorSpace!==void 0&&(f.colorSpace=c.colorSpace),c.minFilter!==void 0&&(f.minFilter=n(c.minFilter,vv)),c.magFilter!==void 0&&(f.magFilter=n(c.magFilter,vv)),c.anisotropy!==void 0&&(f.anisotropy=c.anisotropy),c.flipY!==void 0&&(f.flipY=c.flipY),c.generateMipmaps!==void 0&&(f.generateMipmaps=c.generateMipmaps),c.premultiplyAlpha!==void 0&&(f.premultiplyAlpha=c.premultiplyAlpha),c.unpackAlignment!==void 0&&(f.unpackAlignment=c.unpackAlignment),c.compareFunction!==void 0&&(f.compareFunction=c.compareFunction),c.normalized!==void 0&&(f.normalized=c.normalized),c.userData!==void 0&&(f.userData=c.userData),i[c.uuid]=f}return i}parseObject(e,t,n,i,s){let o;function c(m){return t[m]===void 0&&ze("ObjectLoader: Undefined geometry",m),t[m]}function u(m){if(m!==void 0){if(Array.isArray(m)){const g=[];for(let x=0,b=m.length;x<b;x++){const y=m[x];n[y]===void 0&&ze("ObjectLoader: Undefined material",y),g.push(n[y])}return g}return n[m]===void 0&&ze("ObjectLoader: Undefined material",m),n[m]}}function h(m){return i[m]===void 0&&ze("ObjectLoader: Undefined texture",m),i[m]}let f,p;switch(e.type){case"Scene":o=new tm,e.background!==void 0&&(Number.isInteger(e.background)?o.background=new Je(e.background):o.background=h(e.background)),e.environment!==void 0&&(o.environment=h(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?o.fog=new Bh(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(o.fog=new Fh(e.fog.color,e.fog.density)),e.fog.name!==""&&(o.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(o.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&o.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(o.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&o.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":o=new en(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(o.focus=e.focus),e.zoom!==void 0&&(o.zoom=e.zoom),e.filmGauge!==void 0&&(o.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(o.filmOffset=e.filmOffset),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"OrthographicCamera":o=new Gi(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(o.zoom=e.zoom),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"AmbientLight":o=new $x(e.color,e.intensity);break;case"DirectionalLight":o=new Qx(e.color,e.intensity),o.target=e.target||"";break;case"PointLight":o=new Kx(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":o=new ey(e.color,e.intensity,e.width,e.height);break;case"SpotLight":o=new Jx(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),o.target=e.target||"";break;case"HemisphereLight":o=new jx(e.color,e.groundColor,e.intensity);break;case"LightProbe":const m=new wm().fromArray(e.sh);o=new ty(m,e.intensity);break;case"SkinnedMesh":f=c(e.geometry),p=u(e.material),o=new _x(f,p),e.bindMode!==void 0&&(o.bindMode=e.bindMode),e.bindMatrix!==void 0&&o.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(o.skeleton=e.skeleton);break;case"Mesh":f=c(e.geometry),p=u(e.material),o=new cn(f,p);break;case"InstancedMesh":f=c(e.geometry),p=u(e.material);const g=e.count,x=e.instanceMatrix,b=e.instanceColor;o=new xx(f,p,g),o.instanceMatrix=new Jo(new Float32Array(x.array),16),b!==void 0&&(o.instanceColor=new Jo(new Float32Array(b.array),b.itemSize));break;case"BatchedMesh":f=c(e.geometry),p=u(e.material),o=new yx(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,p),o.geometry=f,o.perObjectFrustumCulled=e.perObjectFrustumCulled,o.sortObjects=e.sortObjects,o._drawRanges=e.drawRanges,o._reservedRanges=e.reservedRanges,o._geometryInfo=e.geometryInfo.map(y=>{let _=null,M=null;return y.boundingBox!==void 0&&(_=new mn().fromJSON(y.boundingBox)),y.boundingSphere!==void 0&&(M=new gn().fromJSON(y.boundingSphere)),{...y,boundingBox:_,boundingSphere:M}}),o._instanceInfo=e.instanceInfo,o._availableInstanceIds=e._availableInstanceIds,o._availableGeometryIds=e._availableGeometryIds,o._nextIndexStart=e.nextIndexStart,o._nextVertexStart=e.nextVertexStart,o._geometryCount=e.geometryCount,o._maxInstanceCount=e.maxInstanceCount,o._maxVertexCount=e.maxVertexCount,o._maxIndexCount=e.maxIndexCount,o._geometryInitialized=e.geometryInitialized,o._matricesTexture=h(e.matricesTexture.uuid),o._indirectTexture=h(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(o._colorsTexture=h(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(o.boundingSphere=new gn().fromJSON(e.boundingSphere)),e.boundingBox!==void 0&&(o.boundingBox=new mn().fromJSON(e.boundingBox));break;case"LOD":o=new vx;break;case"Line":o=new ss(c(e.geometry),u(e.material));break;case"LineLoop":o=new Sx(c(e.geometry),u(e.material));break;case"LineSegments":o=new mr(c(e.geometry),u(e.material));break;case"PointCloud":case"Points":o=new Mx(c(e.geometry),u(e.material));break;case"Sprite":o=new gx(u(e.material));break;case"Group":o=new Go;break;case"Bone":o=new sm;break;default:o=new Ut}if(o.uuid=e.uuid,e.name!==void 0&&(o.name=e.name),e.matrix!==void 0?(o.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=e.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(e.position!==void 0&&o.position.fromArray(e.position),e.rotation!==void 0&&o.rotation.fromArray(e.rotation),e.quaternion!==void 0&&o.quaternion.fromArray(e.quaternion),e.scale!==void 0&&o.scale.fromArray(e.scale)),e.up!==void 0&&o.up.fromArray(e.up),e.pivot!==void 0&&(o.pivot=new F().fromArray(e.pivot)),e.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),e.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=e.morphTargetInfluences.slice()),e.castShadow!==void 0&&(o.castShadow=e.castShadow),e.receiveShadow!==void 0&&(o.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(o.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(o.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(o.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(o.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(o.visible=e.visible),e.frustumCulled!==void 0&&(o.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(o.renderOrder=e.renderOrder),e.static!==void 0&&(o.static=e.static),e.userData!==void 0&&(o.userData=e.userData),e.layers!==void 0&&(o.layers.mask=e.layers),e.children!==void 0){const m=e.children;for(let g=0;g<m.length;g++)o.add(this.parseObject(m[g],t,n,i,s))}if(e.animations!==void 0){const m=e.animations;for(let g=0;g<m.length;g++){const x=m[g];o.animations.push(s[x])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(o.autoUpdate=e.autoUpdate);const m=e.levels;for(let g=0;g<m.length;g++){const x=m[g],b=o.getObjectByProperty("uuid",x.object);b!==void 0&&o.addLevel(b,x.distance,x.hysteresis)}}return o}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?ze("ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,i=e.getObjectByProperty("uuid",n);i!==void 0?t.target=i:t.target=new Ut}})}}const Ob={UVMapping:wh,CubeReflectionMapping:fr,CubeRefractionMapping:ns,EquirectangularReflectionMapping:Xa,EquirectangularRefractionMapping:Ya,CubeUVReflectionMapping:ea},gv={RepeatWrapping:tl,ClampToEdgeWrapping:ni,MirroredRepeatWrapping:nl},vv={NearestFilter:ln,NearestMipmapNearestFilter:Xp,NearestMipmapLinearFilter:Vo,LinearFilter:jt,LinearMipmapNearestFilter:qa,LinearMipmapLinearFilter:cr},Yd=new WeakMap;class Fb extends ii{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ze("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ze("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ur.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(h=>{Yd.has(o)===!0?(i&&i(Yd.get(o)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(h),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);return}const c={};c.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",c.headers=this.requestHeader,c.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const u=fetch(e,c).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(h){ur.add(`image-bitmap:${e}`,h),t&&t(h),s.manager.itemEnd(e)}).catch(function(h){i&&i(h),Yd.set(u,h),ur.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});ur.add(`image-bitmap:${e}`,u),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}let cu;class Am{static getContext(){return cu===void 0&&(cu=new(window.AudioContext||window.webkitAudioContext)),cu}static setContext(e){cu=e}}class Bb extends ii{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Ur(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(u){try{const h=u.slice(0),f=Am.getContext(),p=e+"#decode";s.manager.itemStart(p),f.decodeAudioData(h,function(m){t(m),s.manager.itemEnd(p)}).catch(function(m){c(m),s.manager.itemEnd(p)})}catch(h){c(h)}},n,i);function c(u){i?i(u):ot(u),s.manager.itemError(e)}}}const _v=new _t,xv=new _t,As=new _t;class zb{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new en,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new en,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,As.copy(e.projectionMatrix);const i=t.eyeSep/2,s=i*t.near/t.focus,o=t.near*Math.tan(Hs*t.fov*.5)/t.zoom;let c,u;xv.elements[12]=-i,_v.elements[12]=i,c=-o*t.aspect+s,u=o*t.aspect+s,As.elements[0]=2*t.near/(u-c),As.elements[8]=(u+c)/(u-c),this.cameraL.projectionMatrix.copy(As),c=-o*t.aspect-s,u=o*t.aspect-s,As.elements[0]=2*t.near/(u-c),As.elements[8]=(u+c)/(u-c),this.cameraR.projectionMatrix.copy(As)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(xv),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(_v)}}const Lo=-90,Do=1;class iy extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new en(Lo,Do,e,t);i.layers=this.layers,this.add(i);const s=new en(Lo,Do,e,t);s.layers=this.layers,this.add(s);const o=new en(Lo,Do,e,t);o.layers=this.layers,this.add(o);const c=new en(Lo,Do,e,t);c.layers=this.layers,this.add(c);const u=new en(Lo,Do,e,t);u.layers=this.layers,this.add(u);const h=new en(Lo,Do,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,c,u]=t;for(const h of t)this.remove(h);if(e===fi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,c,u,h,f]=this.children,p=e.getRenderTarget(),m=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,3,i),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(n,4,i),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,i),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(p,m,g),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class ry extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class sy{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=kb.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function kb(){this._document.hidden===!1&&this.reset()}const Cs=new F,qd=new An,Vb=new F,Rs=new F,Ps=new F;class Hb extends Ut{constructor(){super(),this.type="AudioListener",this.context=Am.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new sy}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e),this._timer.update();const t=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(Cs,qd,Vb),Rs.set(0,0,-1).applyQuaternion(qd),Ps.set(0,1,0).applyQuaternion(qd),t.positionX){const n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Cs.x,n),t.positionY.linearRampToValueAtTime(Cs.y,n),t.positionZ.linearRampToValueAtTime(Cs.z,n),t.forwardX.linearRampToValueAtTime(Rs.x,n),t.forwardY.linearRampToValueAtTime(Rs.y,n),t.forwardZ.linearRampToValueAtTime(Rs.z,n),t.upX.linearRampToValueAtTime(Ps.x,n),t.upY.linearRampToValueAtTime(Ps.y,n),t.upZ.linearRampToValueAtTime(Ps.z,n)}else t.setPosition(Cs.x,Cs.y,Cs.z),t.setOrientation(Rs.x,Rs.y,Rs.z,Ps.x,Ps.y,Ps.z)}}class oy extends Ut{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){ze("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){ze("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){ze("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){ze("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){ze("Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(ze("Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){ze("Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(ze("Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}}const Is=new F,yv=new An,Gb=new F,Ls=new F;class Wb extends oy{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Is,yv,Gb),Ls.set(0,0,1).applyQuaternion(yv);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Is.x,n),t.positionY.linearRampToValueAtTime(Is.y,n),t.positionZ.linearRampToValueAtTime(Is.z,n),t.orientationX.linearRampToValueAtTime(Ls.x,n),t.orientationY.linearRampToValueAtTime(Ls.y,n),t.orientationZ.linearRampToValueAtTime(Ls.z,n)}else t.setPosition(Is.x,Is.y,Is.z),t.setOrientation(Ls.x,Ls.y,Ls.z)}}class Xb{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class ay{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let c=0;c!==i;++c)n[s+c]=n[c];o=t}else{o+=t;const c=t/o;this._mixBufferRegion(n,s,0,c,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,c=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const u=t*this._origIndex;this._mixBufferRegion(n,i,u,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let u=t,h=t+t;u!==h;++u)if(n[u]!==n[u+t]){c.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){An.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const o=this._workIndex*s;An.multiplyQuaternionsFlat(e,o,e,t,e,n),An.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){const o=1-i;for(let c=0;c!==s;++c){const u=t+c;e[u]=e[u]*o+e[n+c]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){const c=t+o;e[c]=e[c]+e[n+o]*i}}}const Cm="\\[\\]\\.:\\/",Yb=new RegExp("["+Cm+"]","g"),Rm="[^"+Cm+"]",qb="[^"+Cm.replace("\\.","")+"]",Zb=/((?:WC+[\/:])*)/.source.replace("WC",Rm),jb=/(WCOD+)?/.source.replace("WCOD",qb),Jb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rm),Kb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rm),Qb=new RegExp("^"+Zb+jb+Jb+Kb+"$"),$b=["material","materials","bones","map"];class eE{constructor(e,t,n){const i=n||Nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Nt{constructor(e,t,n){this.path=t,this.parsedPath=n||Nt.parseTrackName(t),this.node=Nt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Nt.Composite(e,t,n):new Nt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Yb,"")}static parseTrackName(e){const t=Qb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);$b.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const c=s[o];if(c.name===t||c.uuid===t)return c;const u=n(c.children);if(u)return u}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Nt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ot("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ot("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===h){h=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ot("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ot("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){ot("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const o=e[i];if(o===void 0){const h=t.nodeName;ot("PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?c=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}u=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(u=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Nt.Composite=eE;Nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Nt.prototype.GetterByBindingType=[Nt.prototype._getValue_direct,Nt.prototype._getValue_array,Nt.prototype._getValue_arrayElement,Nt.prototype._getValue_toArray];Nt.prototype.SetterByBindingTypeAndVersioning=[[Nt.prototype._setValue_direct,Nt.prototype._setValue_direct_setNeedsUpdate,Nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_array,Nt.prototype._setValue_array_setNeedsUpdate,Nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_arrayElement,Nt.prototype._setValue_arrayElement_setNeedsUpdate,Nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_fromArray,Nt.prototype._setValue_fromArray_setNeedsUpdate,Nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class tE{constructor(){this.isAnimationObjectGroup=!0,this.uuid=pi(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,s=this._bindings,o=s.length;let c,u=e.length,h=this.nCachedObjects_;for(let f=0,p=arguments.length;f!==p;++f){const m=arguments[f],g=m.uuid;let x=t[g];if(x===void 0){x=u++,t[g]=x,e.push(m);for(let b=0,y=o;b!==y;++b)s[b].push(new Nt(m,n[b],i[b]))}else if(x<h){c=e[x];const b=--h,y=e[b];t[y.uuid]=x,e[x]=y,t[g]=b,e[b]=m;for(let _=0,M=o;_!==M;++_){const E=s[_],w=E[b];let I=E[x];E[x]=w,I===void 0&&(I=new Nt(m,n[_],i[_])),E[b]=I}}else e[x]!==c&&ot("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=h}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_;for(let o=0,c=arguments.length;o!==c;++o){const u=arguments[o],h=u.uuid,f=t[h];if(f!==void 0&&f>=s){const p=s++,m=e[p];t[m.uuid]=f,e[f]=m,t[h]=p,e[p]=u;for(let g=0,x=i;g!==x;++g){const b=n[g],y=b[p],_=b[f];b[f]=y,b[p]=_}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_,o=e.length;for(let c=0,u=arguments.length;c!==u;++c){const h=arguments[c],f=h.uuid,p=t[f];if(p!==void 0)if(delete t[f],p<s){const m=--s,g=e[m],x=--o,b=e[x];t[g.uuid]=p,e[p]=g,t[b.uuid]=m,e[m]=b,e.pop();for(let y=0,_=i;y!==_;++y){const M=n[y],E=M[m],w=M[x];M[p]=E,M[m]=w,M.pop()}}else{const m=--o,g=e[m];m>0&&(t[g.uuid]=p),e[p]=g,e.pop();for(let x=0,b=i;x!==b;++x){const y=n[x];y[p]=y[m],y.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const s=this._bindings;if(i!==void 0)return s[i];const o=this._paths,c=this._parsedPaths,u=this._objects,h=u.length,f=this.nCachedObjects_,p=new Array(h);i=s.length,n[e]=i,o.push(e),c.push(t),s.push(p);for(let m=f,g=u.length;m!==g;++m){const x=u[m];p[m]=new Nt(x,e,t)}return p}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,s=this._parsedPaths,o=this._bindings,c=o.length-1,u=o[c],h=e[c];t[h]=n,o[n]=u,o.pop(),s[n]=s[c],s.pop(),i[n]=i[c],i.pop()}}}class ly{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,o=s.length,c=new Array(o),u={endingStart:Bs,endingEnd:Bs};for(let h=0;h!==o;++h){const f=s[h].createInterpolant(null);c[h]=f,f.settings&&Object.assign(u,f.settings),f.settings=u}this._interpolantSettings=u,this._interpolants=c,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=$_,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,s=e._clip.duration,o=s/i,c=i/s;e.warp(1,o,t),this.warp(c,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,o=this.timeScale;let c=this._timeScaleInterpolant;c===null&&(c=i._lendControlInterpolant(),this._timeScaleInterpolant=c);const u=c.parameterPositions,h=c.sampleValues;return u[0]=s,u[1]=s+n,h[0]=e/o,h[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const u=(e-s)*n;u<0||n===0?t=0:(this._startTime=null,t=n*u)}t*=this._updateTimeScale(e);const o=this._updateTime(t),c=this._updateWeight(e);if(c>0){const u=this._interpolants,h=this._propertyBindings;switch(this.blendMode){case Qp:for(let f=0,p=u.length;f!==p;++f)u[f].evaluate(o),h[f].accumulateAdditive(c);break;case Lh:default:for(let f=0,p=u.length;f!==p;++f)u[f].evaluate(o),h[f].accumulate(i,c)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const o=n===ex;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===Q_){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const c=Math.floor(i/t);i-=t*c,s+=Math.abs(c);const u=this.repetitions-s;if(u<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(u===1){const h=e<0;this._setEndings(h,!h,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:c})}}else this._loopCount=s,this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=zs,i.endingEnd=zs):(e?i.endingStart=this.zeroSlopeAtStart?zs:Bs:i.endingStart=ol,t?i.endingEnd=this.zeroSlopeAtEnd?zs:Bs:i.endingEnd=ol)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const c=o.parameterPositions,u=o.sampleValues;return c[0]=s,u[0]=t,c[1]=s+e,u[1]=n,this}}const nE=new Float32Array(1);class iE extends Xi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,c=e._interpolants,u=n.uuid,h=this._bindingsByRootAndName;let f=h[u];f===void 0&&(f={},h[u]=f);for(let p=0;p!==s;++p){const m=i[p],g=m.name;let x=f[g];if(x!==void 0)++x.referenceCount,o[p]=x;else{if(x=o[p],x!==void 0){x._cacheIndex===null&&(++x.referenceCount,this._addInactiveBinding(x,u,g));continue}const b=t&&t._propertyBindings[p].binding.parsedPath;x=new ay(Nt.create(n,g,b),m.ValueTypeName,m.getValueSize()),++x.referenceCount,this._addInactiveBinding(x,u,g),o[p]=x}c[p].resultBuffer=x.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const c=o.knownActions;e._byClipCacheIndex=c.length,c.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,c=o[s],u=c.knownActions,h=u[u.length-1],f=e._byClipCacheIndex;h._byClipCacheIndex=f,u[f]=h,u.pop(),e._byClipCacheIndex=null;const p=c.actionByRoot,m=(e._localRoot||this._root).uuid;delete p[m],u.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,c=o[i],u=t[t.length-1],h=e._cacheIndex;u._cacheIndex=h,t[h]=u,t.pop(),delete c[s],Object.keys(c).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Sm(new Float32Array(2),new Float32Array(2),1,nE),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let o=typeof e=="string"?vl.findByName(i,e):e;const c=o!==null?o.uuid:e,u=this._actionsByClip[c];let h=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Lh),u!==void 0){const p=u.actionByRoot[s];if(p!==void 0&&p.blendMode===n)return p;h=u.knownActions[0],o===null&&(o=h._clip)}if(o===null)return null;const f=new ly(this,o,t,n);return this._bindAction(f,h),this._addInactiveAction(f,c,s),f}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?vl.findByName(n,e):e,o=s?s.uuid:e,c=this._actionsByClip[o];return c!==void 0&&c.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let h=0;h!==n;++h)t[h]._update(i,e,s,o);const c=this._bindings,u=this._nActiveBindings;for(let h=0;h!==u;++h)c[h].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let c=0,u=o.length;c!==u;++c){const h=o[c];this._deactivateAction(h);const f=h._cacheIndex,p=t[t.length-1];h._cacheIndex=null,h._byClipCacheIndex=null,p._cacheIndex=f,t[f]=p,t.pop(),this._removeInactiveBindingsForAction(h)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const c=n[o].actionByRoot,u=c[t];u!==void 0&&(this._deactivateAction(u),this._removeInactiveAction(u))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const o in s){const c=s[o];c.restoreOriginalState(),this._removeInactiveBinding(c)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class rE extends em{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isRenderTarget3D=!0,this.depth=n,this.texture=new Oh(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class Pm{constructor(e){this.value=e}clone(){return new Pm(this.value.clone===void 0?this.value:this.value.clone())}}let sE=0;class oE extends Xi{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:sE++}),this.name="",this.usage=cl,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){const s=Array.isArray(t[n])?t[n]:[t[n]];for(let o=0;o<s.length;o++)this.uniforms.push(s[o].clone())}return this}clone(){return new this.constructor().copy(this)}}class yh extends zh{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class aE{constructor(e,t,n,i,s,o=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=s,this.normalized=o,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const Sv=new _t;class cy{constructor(e,t,n=0,i=1/0){this.ray=new Ks(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Gs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ot("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Sv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Sv),this}intersectObject(e,t=!0,n=[]){return Rp(e,this,n,t),n.sort(Mv),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Rp(e[i],this,n,t);return n.sort(Mv),n}}function Mv(r,e){return r.distance-e.distance}function Rp(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,c=s.length;o<c;o++)Rp(s[o],e,t,!0)}}class uy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ze("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class Pp{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=vt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(vt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class lE{constructor(e=1,t=0,n=0){this.radius=e,this.theta=t,this.y=n}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}const Vm=class Vm{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};Vm.prototype.isMatrix2=!0;let Ip=Vm;const bv=new me;class cE{constructor(e=new me(1/0,1/0),t=new me(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=bv.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bv).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ev=new F,uu=new F,No=new F,Uo=new F,Zd=new F,uE=new F,hE=new F;class hy{constructor(e=new F,t=new F){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Ev.subVectors(e,this.start),uu.subVectors(this.end,this.start);const n=uu.dot(uu);if(n===0)return 0;let s=uu.dot(Ev)/n;return t&&(s=vt(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(e,t=uE,n=hE){const i=10000000000000001e-32;let s,o;const c=this.start,u=e.start,h=this.end,f=e.end;No.subVectors(h,c),Uo.subVectors(f,u),Zd.subVectors(c,u);const p=No.dot(No),m=Uo.dot(Uo),g=Uo.dot(Zd);if(p<=i&&m<=i)return t.copy(c),n.copy(u),t.sub(n),t.dot(t);if(p<=i)s=0,o=g/m,o=vt(o,0,1);else{const x=No.dot(Zd);if(m<=i)o=0,s=vt(-x/p,0,1);else{const b=No.dot(Uo),y=p*m-b*b;y!==0?s=vt((b*g-x*m)/y,0,1):s=0,o=(b*s+g)/m,o<0?(o=0,s=vt(-x/p,0,1)):o>1&&(o=1,s=vt((b-x)/p,0,1))}}return t.copy(c).addScaledVector(No,s),n.copy(u).addScaledVector(Uo,o),t.distanceToSquared(n)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const wv=new F;class fE extends Ut{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new Mt,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,c=1,u=32;o<u;o++,c++){const h=o/u*Math.PI*2,f=c/u*Math.PI*2;i.push(Math.cos(h),Math.sin(h),1,Math.cos(f),Math.sin(f),1)}n.setAttribute("position",new et(i,3));const s=new qn({fog:!1,toneMapped:!1});this.cone=new mr(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),wv.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(wv),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Kr=new F,hu=new _t,jd=new _t;class dE extends mr{constructor(e){const t=fy(e),n=new Mt,i=[],s=[];for(let h=0;h<t.length;h++){const f=t[h];f.parent&&f.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(0,0,0),s.push(0,0,0))}n.setAttribute("position",new et(i,3)),n.setAttribute("color",new et(s,3));const o=new qn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,o),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;const c=new Je(255),u=new Je(65280);this.setColors(c,u)}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");jd.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){const c=t[s];c.parent&&c.parent.isBone&&(hu.multiplyMatrices(jd,c.matrixWorld),Kr.setFromMatrixPosition(hu),i.setXYZ(o,Kr.x,Kr.y,Kr.z),hu.multiplyMatrices(jd,c.parent.matrixWorld),Kr.setFromMatrixPosition(hu),i.setXYZ(o+1,Kr.x,Kr.y,Kr.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){const i=this.geometry.getAttribute("color");for(let s=0;s<i.count;s+=2)i.setXYZ(s,e.r,e.g,e.b),i.setXYZ(s+1,t.r,t.g,t.b);return i.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function fy(r){const e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push(...fy(r.children[t]));return e}class pE extends cn{constructor(e,t,n){const i=new Tl(t,4,2),s=new os({wireframe:!0,fog:!1,toneMapped:!1});super(i,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const mE=new F,Tv=new Je,Av=new Je;class gE extends Ut{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new wl(t);i.rotateY(Math.PI*.5),this.material=new os({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=i.getAttribute("position"),o=new Float32Array(s.count*3);i.setAttribute("color",new Xt(o,3)),this.add(new cn(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");Tv.copy(this.light.color),Av.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const s=n<i/2?Tv:Av;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(mE.setFromMatrixPosition(this.light.matrixWorld).negate())}}class vE extends mr{constructor(e=10,t=10,n=4473924,i=8947848){n=new Je(n),i=new Je(i);const s=t/2,o=e/t,c=e/2,u=[],h=[];for(let m=0,g=0,x=-c;m<=t;m++,x+=o){u.push(-c,0,x,c,0,x),u.push(x,0,-c,x,0,c);const b=m===s?n:i;b.toArray(h,g),g+=3,b.toArray(h,g),g+=3,b.toArray(h,g),g+=3,b.toArray(h,g),g+=3}const f=new Mt;f.setAttribute("position",new et(u,3)),f.setAttribute("color",new et(h,3));const p=new qn({vertexColors:!0,toneMapped:!1});super(f,p),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class _E extends mr{constructor(e=10,t=16,n=8,i=64,s=4473924,o=8947848){s=new Je(s),o=new Je(o);const c=[],u=[];if(t>1)for(let p=0;p<t;p++){const m=p/t*(Math.PI*2),g=Math.sin(m)*e,x=Math.cos(m)*e;c.push(0,0,0),c.push(g,0,x);const b=p&1?s:o;u.push(b.r,b.g,b.b),u.push(b.r,b.g,b.b)}for(let p=0;p<n;p++){const m=p&1?s:o,g=e-e/n*p;for(let x=0;x<i;x++){let b=x/i*(Math.PI*2),y=Math.sin(b)*g,_=Math.cos(b)*g;c.push(y,0,_),u.push(m.r,m.g,m.b),b=(x+1)/i*(Math.PI*2),y=Math.sin(b)*g,_=Math.cos(b)*g,c.push(y,0,_),u.push(m.r,m.g,m.b)}}const h=new Mt;h.setAttribute("position",new et(c,3)),h.setAttribute("color",new et(u,3));const f=new qn({vertexColors:!0,toneMapped:!1});super(h,f),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Cv=new F,fu=new F,Rv=new F;class xE extends Ut{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new Mt;i.setAttribute("position",new et([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new qn({fog:!1,toneMapped:!1});this.lightPlane=new ss(i,s),this.add(this.lightPlane),i=new Mt,i.setAttribute("position",new et([0,0,0,0,0,1],3)),this.targetLine=new ss(i,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Cv.setFromMatrixPosition(this.light.matrixWorld),fu.setFromMatrixPosition(this.light.target.matrixWorld),Rv.subVectors(fu,Cv),this.lightPlane.lookAt(fu),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(fu),this.targetLine.scale.z=Rv.length()}}const du=new F,sn=new Cl;class yE extends mr{constructor(e){const t=new Mt,n=new qn({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],o={};c("n1","n2"),c("n2","n4"),c("n4","n3"),c("n3","n1"),c("f1","f2"),c("f2","f4"),c("f4","f3"),c("f3","f1"),c("n1","f1"),c("n2","f2"),c("n3","f3"),c("n4","f4"),c("p","n1"),c("p","n2"),c("p","n3"),c("p","n4"),c("u1","u2"),c("u2","u3"),c("u3","u1"),c("c","t"),c("p","c"),c("cn1","cn2"),c("cn3","cn4"),c("cf1","cf2"),c("cf3","cf4");function c(x,b){u(x),u(b)}function u(x){i.push(0,0,0),s.push(0,0,0),o[x]===void 0&&(o[x]=[]),o[x].push(i.length/3-1)}t.setAttribute("position",new et(i,3)),t.setAttribute("color",new et(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();const h=new Je(16755200),f=new Je(16711680),p=new Je(43775),m=new Je(16777215),g=new Je(3355443);this.setColors(h,f,p,m,g)}setColors(e,t,n,i,s){const c=this.geometry.getAttribute("color");return c.setXYZ(0,e.r,e.g,e.b),c.setXYZ(1,e.r,e.g,e.b),c.setXYZ(2,e.r,e.g,e.b),c.setXYZ(3,e.r,e.g,e.b),c.setXYZ(4,e.r,e.g,e.b),c.setXYZ(5,e.r,e.g,e.b),c.setXYZ(6,e.r,e.g,e.b),c.setXYZ(7,e.r,e.g,e.b),c.setXYZ(8,e.r,e.g,e.b),c.setXYZ(9,e.r,e.g,e.b),c.setXYZ(10,e.r,e.g,e.b),c.setXYZ(11,e.r,e.g,e.b),c.setXYZ(12,e.r,e.g,e.b),c.setXYZ(13,e.r,e.g,e.b),c.setXYZ(14,e.r,e.g,e.b),c.setXYZ(15,e.r,e.g,e.b),c.setXYZ(16,e.r,e.g,e.b),c.setXYZ(17,e.r,e.g,e.b),c.setXYZ(18,e.r,e.g,e.b),c.setXYZ(19,e.r,e.g,e.b),c.setXYZ(20,e.r,e.g,e.b),c.setXYZ(21,e.r,e.g,e.b),c.setXYZ(22,e.r,e.g,e.b),c.setXYZ(23,e.r,e.g,e.b),c.setXYZ(24,t.r,t.g,t.b),c.setXYZ(25,t.r,t.g,t.b),c.setXYZ(26,t.r,t.g,t.b),c.setXYZ(27,t.r,t.g,t.b),c.setXYZ(28,t.r,t.g,t.b),c.setXYZ(29,t.r,t.g,t.b),c.setXYZ(30,t.r,t.g,t.b),c.setXYZ(31,t.r,t.g,t.b),c.setXYZ(32,n.r,n.g,n.b),c.setXYZ(33,n.r,n.g,n.b),c.setXYZ(34,n.r,n.g,n.b),c.setXYZ(35,n.r,n.g,n.b),c.setXYZ(36,n.r,n.g,n.b),c.setXYZ(37,n.r,n.g,n.b),c.setXYZ(38,i.r,i.g,i.b),c.setXYZ(39,i.r,i.g,i.b),c.setXYZ(40,s.r,s.g,s.b),c.setXYZ(41,s.r,s.g,s.b),c.setXYZ(42,s.r,s.g,s.b),c.setXYZ(43,s.r,s.g,s.b),c.setXYZ(44,s.r,s.g,s.b),c.setXYZ(45,s.r,s.g,s.b),c.setXYZ(46,s.r,s.g,s.b),c.setXYZ(47,s.r,s.g,s.b),c.setXYZ(48,s.r,s.g,s.b),c.setXYZ(49,s.r,s.g,s.b),c.needsUpdate=!0,this}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;let s,o;if(sn.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)s=1,o=0;else if(this.camera.coordinateSystem===fi)s=-1,o=1;else if(this.camera.coordinateSystem===qs)s=0,o=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);an("c",t,e,sn,0,0,s),an("t",t,e,sn,0,0,o),an("n1",t,e,sn,-n,-i,s),an("n2",t,e,sn,n,-i,s),an("n3",t,e,sn,-n,i,s),an("n4",t,e,sn,n,i,s),an("f1",t,e,sn,-n,-i,o),an("f2",t,e,sn,n,-i,o),an("f3",t,e,sn,-n,i,o),an("f4",t,e,sn,n,i,o),an("u1",t,e,sn,n*.7,i*1.1,s),an("u2",t,e,sn,-n*.7,i*1.1,s),an("u3",t,e,sn,0,i*2,s),an("cf1",t,e,sn,-n,0,o),an("cf2",t,e,sn,n,0,o),an("cf3",t,e,sn,0,-i,o),an("cf4",t,e,sn,0,i,o),an("cn1",t,e,sn,-n,0,s),an("cn2",t,e,sn,n,0,s),an("cn3",t,e,sn,0,-i,s),an("cn4",t,e,sn,0,i,s),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function an(r,e,t,n,i,s,o){du.set(i,s,o).unproject(n);const c=e[r];if(c!==void 0){const u=t.getAttribute("position");for(let h=0,f=c.length;h<f;h++)u.setXYZ(c[h],du.x,du.y,du.z)}}const pu=new mn;class SE extends mr{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),s=new Mt;s.setIndex(new Xt(n,1)),s.setAttribute("position",new Xt(i,3)),super(s,new qn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&pu.setFromObject(this.object),pu.isEmpty())return;const e=pu.min,t=pu.max,n=this.geometry.attributes.position,i=n.array;i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=e.x,i[4]=t.y,i[5]=t.z,i[6]=e.x,i[7]=e.y,i[8]=t.z,i[9]=t.x,i[10]=e.y,i[11]=t.z,i[12]=t.x,i[13]=t.y,i[14]=e.z,i[15]=e.x,i[16]=t.y,i[17]=e.z,i[18]=e.x,i[19]=e.y,i[20]=e.z,i[21]=t.x,i[22]=e.y,i[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class ME extends mr{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new Mt;s.setIndex(new Xt(n,1)),s.setAttribute("position",new et(i,3)),super(s,new qn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class bE extends ss{constructor(e,t=1,n=16776960){const i=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new Mt;o.setAttribute("position",new et(s,3)),o.computeBoundingSphere(),super(o,new qn({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const c=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],u=new Mt;u.setAttribute("position",new et(c,3)),u.computeBoundingSphere(),this.add(new cn(u,new os({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const Pv=new F;let mu,Jd;class EE extends Ut{constructor(e=new F(0,0,1),t=new F(0,0,0),n=1,i=16776960,s=n*.2,o=s*.2){super(),this.type="ArrowHelper",mu===void 0&&(mu=new Mt,mu.setAttribute("position",new et([0,0,0,0,1,0],3)),Jd=new El(.5,1,5,1),Jd.translate(0,-.5,0)),this.position.copy(t),this.line=new ss(mu,new qn({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new cn(Jd,new os({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Pv.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Pv,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class wE extends mr{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Mt;i.setAttribute("position",new et(t,3)),i.setAttribute("color",new et(n,3));const s=new qn({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new Je,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class TE{constructor(){this.type="ShapePath",this.color=new Je,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new _h,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,o){return this.currentPath.bezierCurveTo(e,t,n,i,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(_){const M=[];for(let E=0,w=_.length;E<w;E++){const I=_[E],C=new Ws;C.curves=I.curves,M.push(C)}return M}function n(_,M){const E=M.length;let w=!1;for(let I=E-1,C=0;C<E;I=C++){let O=M[I],T=M[C],P=T.x-O.x,U=T.y-O.y;if(Math.abs(U)>Number.EPSILON){if(U<0&&(O=M[C],P=-P,T=M[I],U=-U),_.y<O.y||_.y>T.y)continue;if(_.y===O.y){if(_.x===O.x)return!0}else{const D=U*(_.x-O.x)-P*(_.y-O.y);if(D===0)return!0;if(D<0)continue;w=!w}}else{if(_.y!==O.y)continue;if(T.x<=_.x&&_.x<=O.x||O.x<=_.x&&_.x<=T.x)return!0}}return w}const i=Vi.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,c,u;const h=[];if(s.length===1)return c=s[0],u=new Ws,u.curves=c.curves,h.push(u),h;let f=!i(s[0].getPoints());f=e?!f:f;const p=[],m=[];let g=[],x=0,b;m[x]=void 0,g[x]=[];for(let _=0,M=s.length;_<M;_++)c=s[_],b=c.getPoints(),o=i(b),o=e?!o:o,o?(!f&&m[x]&&x++,m[x]={s:new Ws,p:b},m[x].s.curves=c.curves,f&&x++,g[x]=[]):g[x].push({h:c,p:b[0]});if(!m[0])return t(s);if(m.length>1){let _=!1,M=0;for(let E=0,w=m.length;E<w;E++)p[E]=[];for(let E=0,w=m.length;E<w;E++){const I=g[E];for(let C=0;C<I.length;C++){const O=I[C];let T=!0;for(let P=0;P<m.length;P++)n(O.p,m[P].p)&&(E!==P&&M++,T?(T=!1,p[P].push(O)):_=!0);T&&p[E].push(O)}}M>0&&_===!1&&(g=p)}let y;for(let _=0,M=m.length;_<M;_++){u=m[_].s,h.push(u),y=g[_];for(let E=0,w=y.length;E<w;E++)u.holes.push(y[E].h)}return h}}class AE extends Xi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){ze("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function CE(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2):(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0),r}function RE(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0):(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2),r}function PE(r){return r.repeat.x=1,r.repeat.y=1,r.offset.x=0,r.offset.y=0,r}function Lp(r,e,t,n){const i=IE(n);switch(t){case Jp:return r*e;case Rh:return r*e/i.components*i.byteLength;case Sl:return r*e/i.components*i.byteLength;case is:return r*e*2/i.components*i.byteLength;case Ph:return r*e*2/i.components*i.byteLength;case Kp:return r*e*3/i.components*i.byteLength;case Un:return r*e*4/i.components*i.byteLength;case Ih:return r*e*4/i.components*i.byteLength;case Za:case ja:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ja:case Ka:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Bu:case ku:return Math.max(r,16)*Math.max(e,8)/4;case Fu:case zu:return Math.max(r,8)*Math.max(e,8)/2;case Vu:case Hu:case Wu:case Xu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Gu:case il:case Yu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case qu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Zu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case ju:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Ju:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Ku:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Qu:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case $u:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case eh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case th:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case nh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case ih:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case rh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case sh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case oh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case ah:case lh:case ch:return Math.ceil(r/4)*Math.ceil(e/4)*16;case uh:case hh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case rl:case fh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function IE(r){switch(r){case Gn:case Yp:return{byteLength:1,components:1};case qo:case qp:case dr:return{byteLength:2,components:1};case Ah:case Ch:return{byteLength:2,components:4};case Pi:case Th:case Xn:return{byteLength:4,components:1};case Zp:case jp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}class LE{static contain(e,t){return CE(e,t)}static cover(e,t){return RE(e,t)}static fill(e){return PE(e)}static getByteLength(e,t,n,i){return Lp(e,t,n,i)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xl}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function dy(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function DE(r){const e=new WeakMap;function t(c,u){const h=c.array,f=c.usage,p=h.byteLength,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)g=r.HALF_FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?g=r.HALF_FLOAT:g=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=r.SHORT;else if(h instanceof Uint32Array)g=r.UNSIGNED_INT;else if(h instanceof Int32Array)g=r.INT;else if(h instanceof Int8Array)g=r.BYTE;else if(h instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:p}}function n(c,u,h){const f=u.array,p=u.updateRanges;if(r.bindBuffer(h,c),p.length===0)r.bufferSubData(h,0,f);else{p.sort((g,x)=>g.start-x.start);let m=0;for(let g=1;g<p.length;g++){const x=p[m],b=p[g];b.start<=x.start+x.count+1?x.count=Math.max(x.count,b.start+b.count-x.start):(++m,p[m]=b)}p.length=m+1;for(let g=0,x=p.length;g<x;g++){const b=p[g];r.bufferSubData(h,b.start*f.BYTES_PER_ELEMENT,f,b.start,b.count)}u.clearUpdateRanges()}u.onUploadCallback()}function i(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=e.get(c);u&&(r.deleteBuffer(u.buffer),e.delete(c))}function o(c,u){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const f=e.get(c);(!f||f.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,c,u),h.version=c.version}}return{get:i,remove:s,update:o}}var NE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,UE=`#ifdef USE_ALPHAHASH
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
#endif`,OE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,FE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kE=`#ifdef USE_AOMAP
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
#endif`,VE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,HE=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,GE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,WE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,XE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,YE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qE=`#ifdef USE_IRIDESCENCE
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
#endif`,ZE=`#ifdef USE_BUMPMAP
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
#endif`,jE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,JE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,KE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,QE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$E=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ew=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,tw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,nw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,iw=`#define PI 3.141592653589793
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
} // validated`,rw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sw=`vec3 transformedNormal = objectNormal;
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
#endif`,ow=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,aw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uw="gl_FragColor = linearToOutputTexel( gl_FragColor );",hw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fw=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,dw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,pw=`#ifdef USE_ENVMAP
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
#endif`,mw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gw=`#ifdef USE_ENVMAP
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
#endif`,vw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_w=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sw=`#ifdef USE_GRADIENTMAP
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
}`,Mw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ew=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ww=`uniform bool receiveShadow;
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
#endif
#include <lightprobes_pars_fragment>`,Tw=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,Aw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Iw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Lw=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dw=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Nw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,Uw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ow=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Fw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ww=`#if defined( USE_POINTS_UV )
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
#endif`,Xw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jw=`#ifdef USE_MORPHTARGETS
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
#endif`,Kw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$w=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,eT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,iT=`#ifdef USE_NORMALMAP
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
#endif`,rT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,oT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,aT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,uT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,vT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_T=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,xT=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,yT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ST=`#ifdef USE_SKINNING
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
#endif`,MT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bT=`#ifdef USE_SKINNING
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
#endif`,ET=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,TT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,AT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,CT=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,RT=`#ifdef USE_TRANSMISSION
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
#endif`,PT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const NT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,UT=`uniform sampler2D t2D;
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
}`,OT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kT=`#include <common>
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
}`,VT=`#if DEPTH_PACKING == 3200
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
}`,HT=`#define DISTANCE
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
}`,GT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,WT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YT=`uniform float scale;
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
}`,qT=`uniform vec3 diffuse;
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
}`,ZT=`#include <common>
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
}`,jT=`uniform vec3 diffuse;
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
}`,JT=`#define LAMBERT
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
}`,KT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,QT=`#define MATCAP
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
}`,$T=`#define MATCAP
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
}`,eA=`#define NORMAL
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
}`,tA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nA=`#define PHONG
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
}`,iA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,rA=`#define STANDARD
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
}`,sA=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,oA=`#define TOON
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
}`,aA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,lA=`uniform float size;
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
}`,cA=`uniform vec3 diffuse;
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
}`,uA=`#include <common>
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
}`,hA=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,fA=`uniform float rotation;
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
}`,dA=`uniform vec3 diffuse;
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
}`,Tt={alphahash_fragment:NE,alphahash_pars_fragment:UE,alphamap_fragment:OE,alphamap_pars_fragment:FE,alphatest_fragment:BE,alphatest_pars_fragment:zE,aomap_fragment:kE,aomap_pars_fragment:VE,batching_pars_vertex:HE,batching_vertex:GE,begin_vertex:WE,beginnormal_vertex:XE,bsdfs:YE,iridescence_fragment:qE,bumpmap_pars_fragment:ZE,clipping_planes_fragment:jE,clipping_planes_pars_fragment:JE,clipping_planes_pars_vertex:KE,clipping_planes_vertex:QE,color_fragment:$E,color_pars_fragment:ew,color_pars_vertex:tw,color_vertex:nw,common:iw,cube_uv_reflection_fragment:rw,defaultnormal_vertex:sw,displacementmap_pars_vertex:ow,displacementmap_vertex:aw,emissivemap_fragment:lw,emissivemap_pars_fragment:cw,colorspace_fragment:uw,colorspace_pars_fragment:hw,envmap_fragment:fw,envmap_common_pars_fragment:dw,envmap_pars_fragment:pw,envmap_pars_vertex:mw,envmap_physical_pars_fragment:Tw,envmap_vertex:gw,fog_vertex:vw,fog_pars_vertex:_w,fog_fragment:xw,fog_pars_fragment:yw,gradientmap_pars_fragment:Sw,lightmap_pars_fragment:Mw,lights_lambert_fragment:bw,lights_lambert_pars_fragment:Ew,lights_pars_begin:ww,lights_toon_fragment:Aw,lights_toon_pars_fragment:Cw,lights_phong_fragment:Rw,lights_phong_pars_fragment:Pw,lights_physical_fragment:Iw,lights_physical_pars_fragment:Lw,lights_fragment_begin:Dw,lights_fragment_maps:Nw,lights_fragment_end:Uw,lightprobes_pars_fragment:Ow,logdepthbuf_fragment:Fw,logdepthbuf_pars_fragment:Bw,logdepthbuf_pars_vertex:zw,logdepthbuf_vertex:kw,map_fragment:Vw,map_pars_fragment:Hw,map_particle_fragment:Gw,map_particle_pars_fragment:Ww,metalnessmap_fragment:Xw,metalnessmap_pars_fragment:Yw,morphinstance_vertex:qw,morphcolor_vertex:Zw,morphnormal_vertex:jw,morphtarget_pars_vertex:Jw,morphtarget_vertex:Kw,normal_fragment_begin:Qw,normal_fragment_maps:$w,normal_pars_fragment:eT,normal_pars_vertex:tT,normal_vertex:nT,normalmap_pars_fragment:iT,clearcoat_normal_fragment_begin:rT,clearcoat_normal_fragment_maps:sT,clearcoat_pars_fragment:oT,iridescence_pars_fragment:aT,opaque_fragment:lT,packing:cT,premultiplied_alpha_fragment:uT,project_vertex:hT,dithering_fragment:fT,dithering_pars_fragment:dT,roughnessmap_fragment:pT,roughnessmap_pars_fragment:mT,shadowmap_pars_fragment:gT,shadowmap_pars_vertex:vT,shadowmap_vertex:_T,shadowmask_pars_fragment:xT,skinbase_vertex:yT,skinning_pars_vertex:ST,skinning_vertex:MT,skinnormal_vertex:bT,specularmap_fragment:ET,specularmap_pars_fragment:wT,tonemapping_fragment:TT,tonemapping_pars_fragment:AT,transmission_fragment:CT,transmission_pars_fragment:RT,uv_pars_fragment:PT,uv_pars_vertex:IT,uv_vertex:LT,worldpos_vertex:DT,background_vert:NT,background_frag:UT,backgroundCube_vert:OT,backgroundCube_frag:FT,cube_vert:BT,cube_frag:zT,depth_vert:kT,depth_frag:VT,distance_vert:HT,distance_frag:GT,equirect_vert:WT,equirect_frag:XT,linedashed_vert:YT,linedashed_frag:qT,meshbasic_vert:ZT,meshbasic_frag:jT,meshlambert_vert:JT,meshlambert_frag:KT,meshmatcap_vert:QT,meshmatcap_frag:$T,meshnormal_vert:eA,meshnormal_frag:tA,meshphong_vert:nA,meshphong_frag:iA,meshphysical_vert:rA,meshphysical_frag:sA,meshtoon_vert:oA,meshtoon_frag:aA,points_vert:lA,points_frag:cA,shadow_vert:uA,shadow_frag:hA,sprite_vert:fA,sprite_frag:dA},Ge={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new yt}},envmap:{envMap:{value:null},envMapRotation:{value:new yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new yt},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}}},zi={basic:{uniforms:Hn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:Hn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:Hn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:Hn([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:Hn([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new Je(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:Hn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:Hn([Ge.points,Ge.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:Hn([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:Hn([Ge.common,Ge.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:Hn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:Hn([Ge.sprite,Ge.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new yt}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distance:{uniforms:Hn([Ge.common,Ge.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distance_vert,fragmentShader:Tt.distance_frag},shadow:{uniforms:Hn([Ge.lights,Ge.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};zi.physical={uniforms:Hn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new yt},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new yt},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new yt},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new yt},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new yt},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new yt}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};const gu={r:0,b:0,g:0},pA=new _t,py=new yt;py.set(-1,0,0,0,1,0,0,0,1);function mA(r,e,t,n,i,s){const o=new Je(0);let c=i===!0?0:1,u,h,f=null,p=0,m=null;function g(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){const w=M.backgroundBlurriness>0;E=e.get(E,w)}return E}function x(M){let E=!1;const w=g(M);w===null?y(o,c):w&&w.isColor&&(y(w,1),E=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,s):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function b(M,E){const w=g(E);w&&(w.isCubeTexture||w.mapping===ea)?(h===void 0&&(h=new cn(new Qs(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:Qo(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,C,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=w,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(pA.makeRotationFromEuler(E.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(py),h.material.toneMapped=Rt.getTransfer(w.colorSpace)!==Gt,(f!==w||p!==w.version||m!==r.toneMapping)&&(h.material.needsUpdate=!0,f=w,p=w.version,m=r.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(u===void 0&&(u=new cn(new na(2,2),new gi({name:"BackgroundMaterial",uniforms:Qo(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:Dr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(u)),u.material.uniforms.t2D.value=w,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.toneMapped=Rt.getTransfer(w.colorSpace)!==Gt,w.matrixAutoUpdate===!0&&w.updateMatrix(),u.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||p!==w.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,f=w,p=w.version,m=r.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null))}function y(M,E){M.getRGB(gu,Ux(r)),t.buffers.color.setClear(gu.r,gu.g,gu.b,E,s)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,E=1){o.set(M),c=E,y(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,y(o,c)},render:x,addToRenderList:b,dispose:_}}function gA(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=m(null);let s=i,o=!1;function c(D,H,K,ie,G){let Z=!1;const j=p(D,ie,K,H);s!==j&&(s=j,h(s.object)),Z=g(D,ie,K,G),Z&&x(D,ie,K,G),G!==null&&e.update(G,r.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,w(D,H,K,ie),G!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function u(){return r.createVertexArray()}function h(D){return r.bindVertexArray(D)}function f(D){return r.deleteVertexArray(D)}function p(D,H,K,ie){const G=ie.wireframe===!0;let Z=n[H.id];Z===void 0&&(Z={},n[H.id]=Z);const j=D.isInstancedMesh===!0?D.id:0;let z=Z[j];z===void 0&&(z={},Z[j]=z);let X=z[K.id];X===void 0&&(X={},z[K.id]=X);let Y=X[G];return Y===void 0&&(Y=m(u()),X[G]=Y),Y}function m(D){const H=[],K=[],ie=[];for(let G=0;G<t;G++)H[G]=0,K[G]=0,ie[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:K,attributeDivisors:ie,object:D,attributes:{},index:null}}function g(D,H,K,ie){const G=s.attributes,Z=H.attributes;let j=0;const z=K.getAttributes();for(const X in z)if(z[X].location>=0){const oe=G[X];let pe=Z[X];if(pe===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(pe=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(pe=D.instanceColor)),oe===void 0||oe.attribute!==pe||pe&&oe.data!==pe.data)return!0;j++}return s.attributesNum!==j||s.index!==ie}function x(D,H,K,ie){const G={},Z=H.attributes;let j=0;const z=K.getAttributes();for(const X in z)if(z[X].location>=0){let oe=Z[X];oe===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(oe=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(oe=D.instanceColor));const pe={};pe.attribute=oe,oe&&oe.data&&(pe.data=oe.data),G[X]=pe,j++}s.attributes=G,s.attributesNum=j,s.index=ie}function b(){const D=s.newAttributes;for(let H=0,K=D.length;H<K;H++)D[H]=0}function y(D){_(D,0)}function _(D,H){const K=s.newAttributes,ie=s.enabledAttributes,G=s.attributeDivisors;K[D]=1,ie[D]===0&&(r.enableVertexAttribArray(D),ie[D]=1),G[D]!==H&&(r.vertexAttribDivisor(D,H),G[D]=H)}function M(){const D=s.newAttributes,H=s.enabledAttributes;for(let K=0,ie=H.length;K<ie;K++)H[K]!==D[K]&&(r.disableVertexAttribArray(K),H[K]=0)}function E(D,H,K,ie,G,Z,j){j===!0?r.vertexAttribIPointer(D,H,K,G,Z):r.vertexAttribPointer(D,H,K,ie,G,Z)}function w(D,H,K,ie){b();const G=ie.attributes,Z=K.getAttributes(),j=H.defaultAttributeValues;for(const z in Z){const X=Z[z];if(X.location>=0){let Y=G[z];if(Y===void 0&&(z==="instanceMatrix"&&D.instanceMatrix&&(Y=D.instanceMatrix),z==="instanceColor"&&D.instanceColor&&(Y=D.instanceColor)),Y!==void 0){const oe=Y.normalized,pe=Y.itemSize,Ie=e.get(Y);if(Ie===void 0)continue;const rt=Ie.buffer,Qe=Ie.type,ae=Ie.bytesPerElement,Re=Qe===r.INT||Qe===r.UNSIGNED_INT||Y.gpuType===Th;if(Y.isInterleavedBufferAttribute){const we=Y.data,$e=we.stride,Ke=Y.offset;if(we.isInstancedInterleavedBuffer){for(let Pe=0;Pe<X.locationSize;Pe++)_(X.location+Pe,we.meshPerAttribute);D.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let Pe=0;Pe<X.locationSize;Pe++)y(X.location+Pe);r.bindBuffer(r.ARRAY_BUFFER,rt);for(let Pe=0;Pe<X.locationSize;Pe++)E(X.location+Pe,pe/X.locationSize,Qe,oe,$e*ae,(Ke+pe/X.locationSize*Pe)*ae,Re)}else{if(Y.isInstancedBufferAttribute){for(let we=0;we<X.locationSize;we++)_(X.location+we,Y.meshPerAttribute);D.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let we=0;we<X.locationSize;we++)y(X.location+we);r.bindBuffer(r.ARRAY_BUFFER,rt);for(let we=0;we<X.locationSize;we++)E(X.location+we,pe/X.locationSize,Qe,oe,pe*ae,pe/X.locationSize*we*ae,Re)}}else if(j!==void 0){const oe=j[z];if(oe!==void 0)switch(oe.length){case 2:r.vertexAttrib2fv(X.location,oe);break;case 3:r.vertexAttrib3fv(X.location,oe);break;case 4:r.vertexAttrib4fv(X.location,oe);break;default:r.vertexAttrib1fv(X.location,oe)}}}}M()}function I(){P();for(const D in n){const H=n[D];for(const K in H){const ie=H[K];for(const G in ie){const Z=ie[G];for(const j in Z)f(Z[j].object),delete Z[j];delete ie[G]}}delete n[D]}}function C(D){if(n[D.id]===void 0)return;const H=n[D.id];for(const K in H){const ie=H[K];for(const G in ie){const Z=ie[G];for(const j in Z)f(Z[j].object),delete Z[j];delete ie[G]}}delete n[D.id]}function O(D){for(const H in n){const K=n[H];for(const ie in K){const G=K[ie];if(G[D.id]===void 0)continue;const Z=G[D.id];for(const j in Z)f(Z[j].object),delete Z[j];delete G[D.id]}}}function T(D){for(const H in n){const K=n[H],ie=D.isInstancedMesh===!0?D.id:0,G=K[ie];if(G!==void 0){for(const Z in G){const j=G[Z];for(const z in j)f(j[z].object),delete j[z];delete G[Z]}delete K[ie],Object.keys(K).length===0&&delete n[H]}}}function P(){U(),o=!0,s!==i&&(s=i,h(s.object))}function U(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:c,reset:P,resetDefaultState:U,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfObject:T,releaseStatesOfProgram:O,initAttributes:b,enableAttribute:y,disableUnusedAttributes:M}}function vA(r,e,t){let n;function i(u){n=u}function s(u,h){r.drawArrays(n,u,h),t.update(h,n,1)}function o(u,h,f){f!==0&&(r.drawArraysInstanced(n,u,h,f),t.update(h,n,f))}function c(u,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,h,0,f);let m=0;for(let g=0;g<f;g++)m+=h[g];t.update(m,n,1)}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=c}function _A(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(O){return!(O!==Un&&n.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(O){const T=O===dr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Gn&&n.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Xn&&!T)}function u(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const f=u(h);f!==h&&(ze("WebGLRenderer:",h,"not supported, using",f,"instead."),h=f);const p=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const g=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),E=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=r.getParameter(r.MAX_SAMPLES),C=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:o,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:p,reversedDepthBuffer:m,maxTextures:g,maxVertexTextures:x,maxTextureSize:b,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:w,maxSamples:I,samples:C}}function xA(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Rr,c=new yt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const g=p.length!==0||m||n!==0||i;return i=m,n=p.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,m){t=f(p,m,0)},this.setState=function(p,m,g){const x=p.clippingPlanes,b=p.clipIntersection,y=p.clipShadows,_=r.get(p);if(!i||x===null||x.length===0||s&&!y)s?f(null):h();else{const M=s?0:n,E=M*4;let w=_.clippingState||null;u.value=w,w=f(x,m,E,g);for(let I=0;I!==E;++I)w[I]=t[I];_.clippingState=w,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=M}};function h(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(p,m,g,x){const b=p!==null?p.length:0;let y=null;if(b!==0){if(y=u.value,x!==!0||y===null){const _=g+b*4,M=m.matrixWorldInverse;c.getNormalMatrix(M),(y===null||y.length<_)&&(y=new Float32Array(_));for(let E=0,w=g;E!==b;++E,w+=4)o.copy(p[E]).applyMatrix4(M,c),o.normal.toArray(y,w),y[w+3]=o.constant}u.value=y,u.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,y}}const ts=4,Iv=[.125,.215,.35,.446,.526,.582],Os=20,yA=256,Fa=new Gi,Lv=new Je;let Kd=null,Qd=0,$d=0,ep=!1;const SA=new F;class Dp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:c=SA}=s;Kd=this._renderer.getRenderTarget(),Qd=this._renderer.getActiveCubeFace(),$d=this._renderer.getActiveMipmapLevel(),ep=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,n,i,u,c),t>0&&this._blur(u,0,0,t),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Kd,Qd,$d),this._renderer.xr.enabled=ep,e.scissorTest=!1,Oo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fr||e.mapping===ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kd=this._renderer.getRenderTarget(),Qd=this._renderer.getActiveCubeFace(),$d=this._renderer.getActiveMipmapLevel(),ep=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:dr,format:Un,colorSpace:al,depthBuffer:!1},i=Dv(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dv(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=MA(s)),this._blurMaterial=EA(s,e,t),this._ggxMaterial=bA(s,e,t)}return i}_compileMaterial(e){const t=new cn(new Mt,e);this._renderer.compile(t,Fa)}_sceneToCubeUV(e,t,n,i,s){const u=new en(90,1,t,n),h=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,m=p.autoClear,g=p.toneMapping;p.getClearColor(Lv),p.toneMapping=Ri,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(i),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new cn(new Qs,new os({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,y=b.material;let _=!1;const M=e.background;M?M.isColor&&(y.color.copy(M),e.background=null,_=!0):(y.color.copy(Lv),_=!0);for(let E=0;E<6;E++){const w=E%3;w===0?(u.up.set(0,h[E],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x+f[E],s.y,s.z)):w===1?(u.up.set(0,0,h[E]),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y+f[E],s.z)):(u.up.set(0,h[E],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y,s.z+f[E]));const I=this._cubeSize;Oo(i,w*I,E>2?I:0,I,I),p.setRenderTarget(i),_&&p.render(b,u),p.render(e,u)}p.toneMapping=g,p.autoClear=m,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===fr||e.mapping===ns;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nv());const s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const c=s.uniforms;c.envMap.value=e;const u=this._cubeSize;Oo(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(o,Fa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,c=this._lodMeshes[n];c.material=o;const u=o.uniforms,h=n/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),p=Math.sqrt(h*h-f*f),m=0+h*1.25,g=p*m,{_lodMax:x}=this,b=this._sizeLods[n],y=3*b*(n>x-ts?n-x+ts:0),_=4*(this._cubeSize-b);u.envMap.value=e.texture,u.roughness.value=g,u.mipInt.value=x-t,Oo(s,y,_,3*b,2*b),i.setRenderTarget(s),i.render(c,Fa),u.envMap.value=s.texture,u.roughness.value=0,u.mipInt.value=x-n,Oo(e,y,_,3*b,2*b),i.setRenderTarget(e),i.render(c,Fa)}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,c){const u=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ot("blur direction must be either latitudinal or longitudinal!");const f=3,p=this._lodMeshes[i];p.material=h;const m=h.uniforms,g=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Os-1),b=s/x,y=isFinite(s)?1+Math.floor(f*b):Os;y>Os&&ze(`sigmaRadians, ${s}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Os}`);const _=[];let M=0;for(let O=0;O<Os;++O){const T=O/b,P=Math.exp(-T*T/2);_.push(P),O===0?M+=P:O<y&&(M+=2*P)}for(let O=0;O<_.length;O++)_[O]=_[O]/M;m.envMap.value=e.texture,m.samples.value=y,m.weights.value=_,m.latitudinal.value=o==="latitudinal",c&&(m.poleAxis.value=c);const{_lodMax:E}=this;m.dTheta.value=x,m.mipInt.value=E-n;const w=this._sizeLods[i],I=3*w*(i>E-ts?i-E+ts:0),C=4*(this._cubeSize-w);Oo(t,I,C,3*w,2*w),u.setRenderTarget(t),u.render(p,Fa)}}function MA(r){const e=[],t=[],n=[];let i=r;const s=r-ts+1+Iv.length;for(let o=0;o<s;o++){const c=Math.pow(2,i);e.push(c);let u=1/c;o>r-ts?u=Iv[o-r+ts-1]:o===0&&(u=0),t.push(u);const h=1/(c-2),f=-h,p=1+h,m=[f,f,p,f,p,p,f,f,p,p,f,p],g=6,x=6,b=3,y=2,_=1,M=new Float32Array(b*x*g),E=new Float32Array(y*x*g),w=new Float32Array(_*x*g);for(let C=0;C<g;C++){const O=C%3*2/3-1,T=C>2?0:-1,P=[O,T,0,O+2/3,T,0,O+2/3,T+1,0,O,T,0,O+2/3,T+1,0,O,T+1,0];M.set(P,b*x*C),E.set(m,y*x*C);const U=[C,C,C,C,C,C];w.set(U,_*x*C)}const I=new Mt;I.setAttribute("position",new Xt(M,b)),I.setAttribute("uv",new Xt(E,y)),I.setAttribute("faceIndex",new Xt(w,_)),n.push(new cn(I,null)),i>ts&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Dv(r,e,t){const n=new mi(r,e,t);return n.texture.mapping=ea,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Oo(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function bA(r,e,t){return new gi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:yA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:rf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function EA(r,e,t){const n=new Float32Array(Os),i=new F(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:Os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:rf(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function Nv(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rf(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function Uv(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function rf(){return`

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
	`}class Im extends mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ml(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Qs(5,5,5),s=new gi({name:"CubemapFromEquirect",uniforms:Qo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yn,blending:hr});s.uniforms.tEquirect.value=t;const o=new cn(i,s),c=t.minFilter;return t.minFilter===cr&&(t.minFilter=jt),new iy(1,10,this).update(e,o),t.minFilter=c,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}function wA(r){let e=new WeakMap,t=new WeakMap,n=null;function i(m,g=!1){return m==null?null:g?o(m):s(m)}function s(m){if(m&&m.isTexture){const g=m.mapping;if(g===Xa||g===Ya)if(e.has(m)){const x=e.get(m).texture;return c(x,m.mapping)}else{const x=m.image;if(x&&x.height>0){const b=new Im(x.height);return b.fromEquirectangularTexture(r,m),e.set(m,b),m.addEventListener("dispose",h),c(b.texture,m.mapping)}else return null}}return m}function o(m){if(m&&m.isTexture){const g=m.mapping,x=g===Xa||g===Ya,b=g===fr||g===ns;if(x||b){let y=t.get(m);const _=y!==void 0?y.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==_)return n===null&&(n=new Dp(r)),y=x?n.fromEquirectangular(m,y):n.fromCubemap(m,y),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),y.texture;if(y!==void 0)return y.texture;{const M=m.image;return x&&M&&M.height>0||b&&M&&u(M)?(n===null&&(n=new Dp(r)),y=x?n.fromEquirectangular(m):n.fromCubemap(m),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),m.addEventListener("dispose",f),y.texture):null}}}return m}function c(m,g){return g===Xa?m.mapping=fr:g===Ya&&(m.mapping=ns),m}function u(m){let g=0;const x=6;for(let b=0;b<x;b++)m[b]!==void 0&&g++;return g===x}function h(m){const g=m.target;g.removeEventListener("dispose",h);const x=e.get(g);x!==void 0&&(e.delete(g),x.dispose())}function f(m){const g=m.target;g.removeEventListener("dispose",f);const x=t.get(g);x!==void 0&&(t.delete(g),x.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:p}}function TA(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ph("WebGLRenderer: "+n+" extension not supported."),i}}}function AA(r,e,t,n){const i={},s=new WeakMap;function o(p){const m=p.target;m.index!==null&&e.remove(m.index);for(const x in m.attributes)e.remove(m.attributes[x]);m.removeEventListener("dispose",o),delete i[m.id];const g=s.get(m);g&&(e.remove(g),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(p,m){return i[m.id]===!0||(m.addEventListener("dispose",o),i[m.id]=!0,t.memory.geometries++),m}function u(p){const m=p.attributes;for(const g in m)e.update(m[g],r.ARRAY_BUFFER)}function h(p){const m=[],g=p.index,x=p.attributes.position;let b=0;if(x===void 0)return;if(g!==null){const M=g.array;b=g.version;for(let E=0,w=M.length;E<w;E+=3){const I=M[E+0],C=M[E+1],O=M[E+2];m.push(I,C,C,O,O,I)}}else{const M=x.array;b=x.version;for(let E=0,w=M.length/3-1;E<w;E+=3){const I=E+0,C=E+1,O=E+2;m.push(I,C,C,O,O,I)}}const y=new(x.count>=65535?im:nm)(m,1);y.version=b;const _=s.get(p);_&&e.remove(_),s.set(p,y)}function f(p){const m=s.get(p);if(m){const g=p.index;g!==null&&m.version<g.version&&h(p)}else h(p);return s.get(p)}return{get:c,update:u,getWireframeAttribute:f}}function CA(r,e,t){let n;function i(p){n=p}let s,o;function c(p){s=p.type,o=p.bytesPerElement}function u(p,m){r.drawElements(n,m,s,p*o),t.update(m,n,1)}function h(p,m,g){g!==0&&(r.drawElementsInstanced(n,m,s,p*o,g),t.update(m,n,g))}function f(p,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,p,0,g);let b=0;for(let y=0;y<g;y++)b+=m[y];t.update(b,n,1)}this.setMode=i,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function RA(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,c){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=c*(s/3);break;case r.LINES:t.lines+=c*(s/2);break;case r.LINE_STRIP:t.lines+=c*(s-1);break;case r.LINE_LOOP:t.lines+=c*s;break;case r.POINTS:t.points+=c*s;break;default:ot("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function PA(r,e,t){const n=new WeakMap,i=new Lt;function s(o,c,u){const h=o.morphTargetInfluences,f=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=f!==void 0?f.length:0;let m=n.get(c);if(m===void 0||m.count!==p){let P=function(){O.dispose(),n.delete(c),c.removeEventListener("dispose",P)};m!==void 0&&m.texture.dispose();const g=c.morphAttributes.position!==void 0,x=c.morphAttributes.normal!==void 0,b=c.morphAttributes.color!==void 0,y=c.morphAttributes.position||[],_=c.morphAttributes.normal||[],M=c.morphAttributes.color||[];let E=0;g===!0&&(E=1),x===!0&&(E=2),b===!0&&(E=3);let w=c.attributes.position.count*E,I=1;w>e.maxTextureSize&&(I=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const C=new Float32Array(w*I*4*p),O=new Uh(C,w,I,p);O.type=Xn,O.needsUpdate=!0;const T=E*4;for(let U=0;U<p;U++){const D=y[U],H=_[U],K=M[U],ie=w*I*4*U;for(let G=0;G<D.count;G++){const Z=G*T;g===!0&&(i.fromBufferAttribute(D,G),C[ie+Z+0]=i.x,C[ie+Z+1]=i.y,C[ie+Z+2]=i.z,C[ie+Z+3]=0),x===!0&&(i.fromBufferAttribute(H,G),C[ie+Z+4]=i.x,C[ie+Z+5]=i.y,C[ie+Z+6]=i.z,C[ie+Z+7]=0),b===!0&&(i.fromBufferAttribute(K,G),C[ie+Z+8]=i.x,C[ie+Z+9]=i.y,C[ie+Z+10]=i.z,C[ie+Z+11]=K.itemSize===4?i.w:1)}}m={count:p,texture:O,size:new me(w,I)},n.set(c,m),c.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)u.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let g=0;for(let b=0;b<h.length;b++)g+=h[b];const x=c.morphTargetsRelative?1:1-g;u.getUniforms().setValue(r,"morphTargetBaseInfluence",x),u.getUniforms().setValue(r,"morphTargetInfluences",h)}u.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}return{update:s}}function IA(r,e,t,n,i){let s=new WeakMap;function o(h){const f=i.render.frame,p=h.geometry,m=e.get(h,p);if(s.get(m)!==f&&(e.update(m),s.set(m,f)),h.isInstancedMesh&&(h.hasEventListener("dispose",u)===!1&&h.addEventListener("dispose",u),s.get(h)!==f&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),s.set(h,f))),h.isSkinnedMesh){const g=h.skeleton;s.get(g)!==f&&(g.update(),s.set(g,f))}return m}function c(){s=new WeakMap}function u(h){const f=h.target;f.removeEventListener("dispose",u),n.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:o,dispose:c}}const LA={[zp]:"LINEAR_TONE_MAPPING",[kp]:"REINHARD_TONE_MAPPING",[Vp]:"CINEON_TONE_MAPPING",[Eh]:"ACES_FILMIC_TONE_MAPPING",[Gp]:"AGX_TONE_MAPPING",[Wp]:"NEUTRAL_TONE_MAPPING",[Hp]:"CUSTOM_TONE_MAPPING"};function DA(r,e,t,n,i){const s=new mi(e,t,{type:r,depthBuffer:n,stencilBuffer:i,depthTexture:n?new Zs(e,t):void 0}),o=new mi(e,t,{type:dr,depthBuffer:!1,stencilBuffer:!1}),c=new Mt;c.setAttribute("position",new et([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new et([0,2,0,0,2,0],2));const u=new gm({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new cn(c,u),f=new Gi(-1,1,1,-1,0,1);let p=null,m=null,g=!1,x,b=null,y=[],_=!1;this.setSize=function(M,E){s.setSize(M,E),o.setSize(M,E);for(let w=0;w<y.length;w++){const I=y[w];I.setSize&&I.setSize(M,E)}},this.setEffects=function(M){y=M,_=y.length>0&&y[0].isRenderPass===!0;const E=s.width,w=s.height;for(let I=0;I<y.length;I++){const C=y[I];C.setSize&&C.setSize(E,w)}},this.begin=function(M,E){if(g||M.toneMapping===Ri&&y.length===0)return!1;if(b=E,E!==null){const w=E.width,I=E.height;(s.width!==w||s.height!==I)&&this.setSize(w,I)}return _===!1&&M.setRenderTarget(s),x=M.toneMapping,M.toneMapping=Ri,!0},this.hasRenderPass=function(){return _},this.end=function(M,E){M.toneMapping=x,g=!0;let w=s,I=o;for(let C=0;C<y.length;C++){const O=y[C];if(O.enabled!==!1&&(O.render(M,I,w,E),O.needsSwap!==!1)){const T=w;w=I,I=T}}if(p!==M.outputColorSpace||m!==M.toneMapping){p=M.outputColorSpace,m=M.toneMapping,u.defines={},Rt.getTransfer(p)===Gt&&(u.defines.SRGB_TRANSFER="");const C=LA[m];C&&(u.defines[C]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,M.setRenderTarget(b),M.render(h,f),b=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),c.dispose(),u.dispose()}}const my=new nn,Np=new Zs(1,1),gy=new Uh,vy=new Oh,_y=new Ml,Ov=[],Fv=[],Bv=new Float32Array(16),zv=new Float32Array(9),kv=new Float32Array(4);function ra(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Ov[i];if(s===void 0&&(s=new Float32Array(i),Ov[i]=s),e!==0){n.toArray(s,0);for(let o=1,c=0;o!==e;++o)c+=t,r[o].toArray(s,c)}return s}function vn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function _n(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function sf(r,e){let t=Fv[e];t===void 0&&(t=new Int32Array(e),Fv[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function NA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function UA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;r.uniform2fv(this.addr,e),_n(t,e)}}function OA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vn(t,e))return;r.uniform3fv(this.addr,e),_n(t,e)}}function FA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;r.uniform4fv(this.addr,e),_n(t,e)}}function BA(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),_n(t,e)}else{if(vn(t,n))return;kv.set(n),r.uniformMatrix2fv(this.addr,!1,kv),_n(t,n)}}function zA(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),_n(t,e)}else{if(vn(t,n))return;zv.set(n),r.uniformMatrix3fv(this.addr,!1,zv),_n(t,n)}}function kA(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),_n(t,e)}else{if(vn(t,n))return;Bv.set(n),r.uniformMatrix4fv(this.addr,!1,Bv),_n(t,n)}}function VA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function HA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;r.uniform2iv(this.addr,e),_n(t,e)}}function GA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;r.uniform3iv(this.addr,e),_n(t,e)}}function WA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;r.uniform4iv(this.addr,e),_n(t,e)}}function XA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function YA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;r.uniform2uiv(this.addr,e),_n(t,e)}}function qA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;r.uniform3uiv(this.addr,e),_n(t,e)}}function ZA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;r.uniform4uiv(this.addr,e),_n(t,e)}}function jA(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Np.compareFunction=t.isReversedDepthBuffer()?Nh:Dh,s=Np):s=my,t.setTexture2D(e||s,i)}function JA(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||vy,i)}function KA(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||_y,i)}function QA(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||gy,i)}function $A(r){switch(r){case 5126:return NA;case 35664:return UA;case 35665:return OA;case 35666:return FA;case 35674:return BA;case 35675:return zA;case 35676:return kA;case 5124:case 35670:return VA;case 35667:case 35671:return HA;case 35668:case 35672:return GA;case 35669:case 35673:return WA;case 5125:return XA;case 36294:return YA;case 36295:return qA;case 36296:return ZA;case 35678:case 36198:case 36298:case 36306:case 35682:return jA;case 35679:case 36299:case 36307:return JA;case 35680:case 36300:case 36308:case 36293:return KA;case 36289:case 36303:case 36311:case 36292:return QA}}function eC(r,e){r.uniform1fv(this.addr,e)}function tC(r,e){const t=ra(e,this.size,2);r.uniform2fv(this.addr,t)}function nC(r,e){const t=ra(e,this.size,3);r.uniform3fv(this.addr,t)}function iC(r,e){const t=ra(e,this.size,4);r.uniform4fv(this.addr,t)}function rC(r,e){const t=ra(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function sC(r,e){const t=ra(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function oC(r,e){const t=ra(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function aC(r,e){r.uniform1iv(this.addr,e)}function lC(r,e){r.uniform2iv(this.addr,e)}function cC(r,e){r.uniform3iv(this.addr,e)}function uC(r,e){r.uniform4iv(this.addr,e)}function hC(r,e){r.uniform1uiv(this.addr,e)}function fC(r,e){r.uniform2uiv(this.addr,e)}function dC(r,e){r.uniform3uiv(this.addr,e)}function pC(r,e){r.uniform4uiv(this.addr,e)}function mC(r,e,t){const n=this.cache,i=e.length,s=sf(t,i);vn(n,s)||(r.uniform1iv(this.addr,s),_n(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=Np:o=my;for(let c=0;c!==i;++c)t.setTexture2D(e[c]||o,s[c])}function gC(r,e,t){const n=this.cache,i=e.length,s=sf(t,i);vn(n,s)||(r.uniform1iv(this.addr,s),_n(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||vy,s[o])}function vC(r,e,t){const n=this.cache,i=e.length,s=sf(t,i);vn(n,s)||(r.uniform1iv(this.addr,s),_n(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||_y,s[o])}function _C(r,e,t){const n=this.cache,i=e.length,s=sf(t,i);vn(n,s)||(r.uniform1iv(this.addr,s),_n(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||gy,s[o])}function xC(r){switch(r){case 5126:return eC;case 35664:return tC;case 35665:return nC;case 35666:return iC;case 35674:return rC;case 35675:return sC;case 35676:return oC;case 5124:case 35670:return aC;case 35667:case 35671:return lC;case 35668:case 35672:return cC;case 35669:case 35673:return uC;case 5125:return hC;case 36294:return fC;case 36295:return dC;case 36296:return pC;case 35678:case 36198:case 36298:case 36306:case 35682:return mC;case 35679:case 36299:case 36307:return gC;case 35680:case 36300:case 36308:case 36293:return vC;case 36289:case 36303:case 36311:case 36292:return _C}}class yC{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$A(t.type)}}class SC{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xC(t.type)}}class MC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const c=i[s];c.setValue(e,t[c.id],n)}}}const tp=/(\w+)(\])?(\[|\.)?/g;function Vv(r,e){r.seq.push(e),r.map[e.id]=e}function bC(r,e,t){const n=r.name,i=n.length;for(tp.lastIndex=0;;){const s=tp.exec(n),o=tp.lastIndex;let c=s[1];const u=s[2]==="]",h=s[3];if(u&&(c=c|0),h===void 0||h==="["&&o+2===i){Vv(t,h===void 0?new yC(c,r,e):new SC(c,r,e));break}else{let p=t.map[c];p===void 0&&(p=new MC(c),Vv(t,p)),t=p}}}class Tu{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const c=e.getActiveUniform(t,o),u=e.getUniformLocation(t,c.name);bC(c,u,this)}const i=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const c=t[s],u=n[c.id];u.needsUpdate!==!1&&c.setValue(e,u.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Hv(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const EC=37297;let wC=0;function TC(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const c=o+1;n.push(`${c===e?">":" "} ${c}: ${t[o]}`)}return n.join(`
`)}const Gv=new yt;function AC(r){Rt._getMatrix(Gv,Rt.workingColorSpace,r);const e=`mat3( ${Gv.elements.map(t=>t.toFixed(4))} )`;switch(Rt.getTransfer(r)){case ll:return[e,"LinearTransferOETF"];case Gt:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Wv(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const c=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+TC(r.getShaderSource(e),c)}else return s}function CC(r,e){const t=AC(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const RC={[zp]:"Linear",[kp]:"Reinhard",[Vp]:"Cineon",[Eh]:"ACESFilmic",[Gp]:"AgX",[Wp]:"Neutral",[Hp]:"Custom"};function PC(r,e){const t=RC[e];return t===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const vu=new F;function IC(){Rt.getLuminanceCoefficients(vu);const r=vu.x.toFixed(4),e=vu.y.toFixed(4),t=vu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function LC(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ga).join(`
`)}function DC(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function NC(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let c=1;s.type===r.FLOAT_MAT2&&(c=2),s.type===r.FLOAT_MAT3&&(c=3),s.type===r.FLOAT_MAT4&&(c=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:c}}return t}function Ga(r){return r!==""}function Xv(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const UC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Up(r){return r.replace(UC,FC)}const OC=new Map;function FC(r,e){let t=Tt[e];if(t===void 0){const n=OC.get(e);if(n!==void 0)t=Tt[n],ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Up(t)}const BC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qv(r){return r.replace(BC,zC)}function zC(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Zv(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const kC={[Xo]:"SHADOWMAP_TYPE_PCF",[Fs]:"SHADOWMAP_TYPE_VSM"};function VC(r){return kC[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const HC={[fr]:"ENVMAP_TYPE_CUBE",[ns]:"ENVMAP_TYPE_CUBE",[ea]:"ENVMAP_TYPE_CUBE_UV"};function GC(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":HC[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const WC={[ns]:"ENVMAP_MODE_REFRACTION"};function XC(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":WC[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const YC={[yl]:"ENVMAP_BLENDING_MULTIPLY",[j_]:"ENVMAP_BLENDING_MIX",[J_]:"ENVMAP_BLENDING_ADD"};function qC(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":YC[r.combine]||"ENVMAP_BLENDING_NONE"}function ZC(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function jC(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,c=t.fragmentShader;const u=VC(t),h=GC(t),f=XC(t),p=qC(t),m=ZC(t),g=LC(t),x=DC(s),b=i.createProgram();let y,_,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ga).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ga).join(`
`),_.length>0&&(_+=`
`)):(y=[Zv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ga).join(`
`),_=[Zv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?Tt.tonemapping_pars_fragment:"",t.toneMapping!==Ri?PC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Tt.colorspace_pars_fragment,CC("linearToOutputTexel",t.outputColorSpace),IC(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ga).join(`
`)),o=Up(o),o=Xv(o,t),o=Yv(o,t),c=Up(c),c=Xv(c,t),c=Yv(c,t),o=qv(o),c=qv(c),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,y=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",t.glslVersion===bp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const E=M+y+o,w=M+_+c,I=Hv(i,i.VERTEX_SHADER,E),C=Hv(i,i.FRAGMENT_SHADER,w);i.attachShader(b,I),i.attachShader(b,C),t.index0AttributeName!==void 0?i.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(b,0,"position"),i.linkProgram(b);function O(D){if(r.debug.checkShaderErrors){const H=i.getProgramInfoLog(b)||"",K=i.getShaderInfoLog(I)||"",ie=i.getShaderInfoLog(C)||"",G=H.trim(),Z=K.trim(),j=ie.trim();let z=!0,X=!0;if(i.getProgramParameter(b,i.LINK_STATUS)===!1)if(z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,b,I,C);else{const Y=Wv(i,I,"vertex"),oe=Wv(i,C,"fragment");ot("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(b,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+G+`
`+Y+`
`+oe)}else G!==""?ze("WebGLProgram: Program Info Log:",G):(Z===""||j==="")&&(X=!1);X&&(D.diagnostics={runnable:z,programLog:G,vertexShader:{log:Z,prefix:y},fragmentShader:{log:j,prefix:_}})}i.deleteShader(I),i.deleteShader(C),T=new Tu(i,b),P=NC(i,b)}let T;this.getUniforms=function(){return T===void 0&&O(this),T};let P;this.getAttributes=function(){return P===void 0&&O(this),P};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=i.getProgramParameter(b,EC)),U},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wC++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=I,this.fragmentShader=C,this}let JC=0;class KC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new QC(e),t.set(e,n)),n}}class QC{constructor(e){this.id=JC++,this.code=e,this.usedTimes=0}}function $C(r){return r===is||r===il||r===rl}function eR(r,e,t,n,i,s){const o=new Gs,c=new KC,u=new Set,h=[],f=new Map,p=n.logarithmicDepthBuffer;let m=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return u.add(T),T===0?"uv":`uv${T}`}function b(T,P,U,D,H,K){const ie=D.fog,G=H.geometry,Z=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?D.environment:null,j=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,z=e.get(T.envMap||Z,j),X=z&&z.mapping===ea?z.image.height:null,Y=g[T.type];T.precision!==null&&(m=n.getMaxPrecision(T.precision),m!==T.precision&&ze("WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const oe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,pe=oe!==void 0?oe.length:0;let Ie=0;G.morphAttributes.position!==void 0&&(Ie=1),G.morphAttributes.normal!==void 0&&(Ie=2),G.morphAttributes.color!==void 0&&(Ie=3);let rt,Qe,ae,Re;if(Y){const dt=zi[Y];rt=dt.vertexShader,Qe=dt.fragmentShader}else rt=T.vertexShader,Qe=T.fragmentShader,c.update(T),ae=c.getVertexShaderID(T),Re=c.getFragmentShaderID(T);const we=r.getRenderTarget(),$e=r.state.buffers.depth.getReversed(),Ke=H.isInstancedMesh===!0,Pe=H.isBatchedMesh===!0,gt=!!T.map,Ye=!!T.matcap,ve=!!z,be=!!T.aoMap,xe=!!T.lightMap,Oe=!!T.bumpMap,Ue=!!T.normalMap,ct=!!T.displacementMap,k=!!T.emissiveMap,pt=!!T.metalnessMap,tt=!!T.roughnessMap,ut=T.anisotropy>0,Me=T.clearcoat>0,Pt=T.dispersion>0,N=T.iridescence>0,R=T.sheen>0,$=T.transmission>0,de=ut&&!!T.anisotropyMap,ye=Me&&!!T.clearcoatMap,Ce=Me&&!!T.clearcoatNormalMap,Le=Me&&!!T.clearcoatRoughnessMap,ce=N&&!!T.iridescenceMap,ge=N&&!!T.iridescenceThicknessMap,Ve=R&&!!T.sheenColorMap,V=R&&!!T.sheenRoughnessMap,ee=!!T.specularMap,ue=!!T.specularColorMap,He=!!T.specularIntensityMap,st=$&&!!T.transmissionMap,St=$&&!!T.thicknessMap,W=!!T.gradientMap,De=!!T.alphaMap,fe=T.alphaTest>0,Be=!!T.alphaHash,Te=!!T.extensions;let _e=Ri;T.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(_e=r.toneMapping);const nt={shaderID:Y,shaderType:T.type,shaderName:T.name,vertexShader:rt,fragmentShader:Qe,defines:T.defines,customVertexShaderID:ae,customFragmentShaderID:Re,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:Pe,batchingColor:Pe&&H._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&H.instanceColor!==null,instancingMorph:Ke&&H.morphTexture!==null,outputColorSpace:we===null?r.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:Rt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:gt,matcap:Ye,envMap:ve,envMapMode:ve&&z.mapping,envMapCubeUVHeight:X,aoMap:be,lightMap:xe,bumpMap:Oe,normalMap:Ue,displacementMap:ct,emissiveMap:k,normalMapObjectSpace:Ue&&T.normalMapType===nx,normalMapTangentSpace:Ue&&T.normalMapType===Nr,packedNormalMap:Ue&&T.normalMapType===Nr&&$C(T.normalMap.format),metalnessMap:pt,roughnessMap:tt,anisotropy:ut,anisotropyMap:de,clearcoat:Me,clearcoatMap:ye,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Le,dispersion:Pt,iridescence:N,iridescenceMap:ce,iridescenceThicknessMap:ge,sheen:R,sheenColorMap:Ve,sheenRoughnessMap:V,specularMap:ee,specularColorMap:ue,specularIntensityMap:He,transmission:$,transmissionMap:st,thicknessMap:St,gradientMap:W,opaque:T.transparent===!1&&T.blending===Vs&&T.alphaToCoverage===!1,alphaMap:De,alphaTest:fe,alphaHash:Be,combine:T.combine,mapUv:gt&&x(T.map.channel),aoMapUv:be&&x(T.aoMap.channel),lightMapUv:xe&&x(T.lightMap.channel),bumpMapUv:Oe&&x(T.bumpMap.channel),normalMapUv:Ue&&x(T.normalMap.channel),displacementMapUv:ct&&x(T.displacementMap.channel),emissiveMapUv:k&&x(T.emissiveMap.channel),metalnessMapUv:pt&&x(T.metalnessMap.channel),roughnessMapUv:tt&&x(T.roughnessMap.channel),anisotropyMapUv:de&&x(T.anisotropyMap.channel),clearcoatMapUv:ye&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:V&&x(T.sheenRoughnessMap.channel),specularMapUv:ee&&x(T.specularMap.channel),specularColorMapUv:ue&&x(T.specularColorMap.channel),specularIntensityMapUv:He&&x(T.specularIntensityMap.channel),transmissionMapUv:st&&x(T.transmissionMap.channel),thicknessMapUv:St&&x(T.thicknessMap.channel),alphaMapUv:De&&x(T.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Ue||ut),vertexNormals:!!G.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!G.attributes.uv&&(gt||De),fog:!!ie,useFog:T.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||G.attributes.normal===void 0&&Ue===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:$e,skinning:H.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Ie,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:K.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&U.length>0,shadowMapType:r.shadowMap.type,toneMapping:_e,decodeVideoTexture:gt&&T.map.isVideoTexture===!0&&Rt.getTransfer(T.map.colorSpace)===Gt,decodeVideoTextureEmissive:k&&T.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(T.emissiveMap.colorSpace)===Gt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ki,flipSided:T.side===Yn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Te&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&T.extensions.multiDraw===!0||Pe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return nt.vertexUv1s=u.has(1),nt.vertexUv2s=u.has(2),nt.vertexUv3s=u.has(3),u.clear(),nt}function y(T){const P=[];if(T.shaderID?P.push(T.shaderID):(P.push(T.customVertexShaderID),P.push(T.customFragmentShaderID)),T.defines!==void 0)for(const U in T.defines)P.push(U),P.push(T.defines[U]);return T.isRawShaderMaterial===!1&&(_(P,T),M(P,T),P.push(r.outputColorSpace)),P.push(T.customProgramCacheKey),P.join()}function _(T,P){T.push(P.precision),T.push(P.outputColorSpace),T.push(P.envMapMode),T.push(P.envMapCubeUVHeight),T.push(P.mapUv),T.push(P.alphaMapUv),T.push(P.lightMapUv),T.push(P.aoMapUv),T.push(P.bumpMapUv),T.push(P.normalMapUv),T.push(P.displacementMapUv),T.push(P.emissiveMapUv),T.push(P.metalnessMapUv),T.push(P.roughnessMapUv),T.push(P.anisotropyMapUv),T.push(P.clearcoatMapUv),T.push(P.clearcoatNormalMapUv),T.push(P.clearcoatRoughnessMapUv),T.push(P.iridescenceMapUv),T.push(P.iridescenceThicknessMapUv),T.push(P.sheenColorMapUv),T.push(P.sheenRoughnessMapUv),T.push(P.specularMapUv),T.push(P.specularColorMapUv),T.push(P.specularIntensityMapUv),T.push(P.transmissionMapUv),T.push(P.thicknessMapUv),T.push(P.combine),T.push(P.fogExp2),T.push(P.sizeAttenuation),T.push(P.morphTargetsCount),T.push(P.morphAttributeCount),T.push(P.numDirLights),T.push(P.numPointLights),T.push(P.numSpotLights),T.push(P.numSpotLightMaps),T.push(P.numHemiLights),T.push(P.numRectAreaLights),T.push(P.numDirLightShadows),T.push(P.numPointLightShadows),T.push(P.numSpotLightShadows),T.push(P.numSpotLightShadowsWithMaps),T.push(P.numLightProbes),T.push(P.shadowMapType),T.push(P.toneMapping),T.push(P.numClippingPlanes),T.push(P.numClipIntersection),T.push(P.depthPacking)}function M(T,P){o.disableAll(),P.instancing&&o.enable(0),P.instancingColor&&o.enable(1),P.instancingMorph&&o.enable(2),P.matcap&&o.enable(3),P.envMap&&o.enable(4),P.normalMapObjectSpace&&o.enable(5),P.normalMapTangentSpace&&o.enable(6),P.clearcoat&&o.enable(7),P.iridescence&&o.enable(8),P.alphaTest&&o.enable(9),P.vertexColors&&o.enable(10),P.vertexAlphas&&o.enable(11),P.vertexUv1s&&o.enable(12),P.vertexUv2s&&o.enable(13),P.vertexUv3s&&o.enable(14),P.vertexTangents&&o.enable(15),P.anisotropy&&o.enable(16),P.alphaHash&&o.enable(17),P.batching&&o.enable(18),P.dispersion&&o.enable(19),P.batchingColor&&o.enable(20),P.gradientMap&&o.enable(21),P.packedNormalMap&&o.enable(22),P.vertexNormals&&o.enable(23),T.push(o.mask),o.disableAll(),P.fog&&o.enable(0),P.useFog&&o.enable(1),P.flatShading&&o.enable(2),P.logarithmicDepthBuffer&&o.enable(3),P.reversedDepthBuffer&&o.enable(4),P.skinning&&o.enable(5),P.morphTargets&&o.enable(6),P.morphNormals&&o.enable(7),P.morphColors&&o.enable(8),P.premultipliedAlpha&&o.enable(9),P.shadowMapEnabled&&o.enable(10),P.doubleSided&&o.enable(11),P.flipSided&&o.enable(12),P.useDepthPacking&&o.enable(13),P.dithering&&o.enable(14),P.transmission&&o.enable(15),P.sheen&&o.enable(16),P.opaque&&o.enable(17),P.pointsUvs&&o.enable(18),P.decodeVideoTexture&&o.enable(19),P.decodeVideoTextureEmissive&&o.enable(20),P.alphaToCoverage&&o.enable(21),P.numLightProbeGrids>0&&o.enable(22),T.push(o.mask)}function E(T){const P=g[T.type];let U;if(P){const D=zi[P];U=xh.clone(D.uniforms)}else U=T.uniforms;return U}function w(T,P){let U=f.get(P);return U!==void 0?++U.usedTimes:(U=new jC(r,P,T,i),h.push(U),f.set(P,U)),U}function I(T){if(--T.usedTimes===0){const P=h.indexOf(T);h[P]=h[h.length-1],h.pop(),f.delete(T.cacheKey),T.destroy()}}function C(T){c.remove(T)}function O(){c.dispose()}return{getParameters:b,getProgramCacheKey:y,getUniforms:E,acquireProgram:w,releaseProgram:I,releaseShaderCache:C,programs:h,dispose:O}}function tR(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let c=r.get(o);return c===void 0&&(c={},r.set(o,c)),c}function n(o){r.delete(o)}function i(o,c,u){r.get(o)[c]=u}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function nR(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function jv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Jv(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(m){let g=0;return m.isInstancedMesh&&(g+=2),m.isSkinnedMesh&&(g+=1),g}function c(m,g,x,b,y,_){let M=r[e];return M===void 0?(M={id:m.id,object:m,geometry:g,material:x,materialVariant:o(m),groupOrder:b,renderOrder:m.renderOrder,z:y,group:_},r[e]=M):(M.id=m.id,M.object=m,M.geometry=g,M.material=x,M.materialVariant=o(m),M.groupOrder=b,M.renderOrder=m.renderOrder,M.z=y,M.group=_),e++,M}function u(m,g,x,b,y,_){const M=c(m,g,x,b,y,_);x.transmission>0?n.push(M):x.transparent===!0?i.push(M):t.push(M)}function h(m,g,x,b,y,_){const M=c(m,g,x,b,y,_);x.transmission>0?n.unshift(M):x.transparent===!0?i.unshift(M):t.unshift(M)}function f(m,g){t.length>1&&t.sort(m||nR),n.length>1&&n.sort(g||jv),i.length>1&&i.sort(g||jv)}function p(){for(let m=e,g=r.length;m<g;m++){const x=r[m];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:u,unshift:h,finish:p,sort:f}}function iR(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Jv,r.set(n,[o])):i>=s.length?(o=new Jv,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function rR(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Je};break;case"SpotLight":t={position:new F,direction:new F,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new F,halfWidth:new F,halfHeight:new F};break}return r[e.id]=t,t}}}function sR(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let oR=0;function aR(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function lR(r){const e=new rR,t=sR(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new F);const i=new F,s=new _t,o=new _t;function c(h){let f=0,p=0,m=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let g=0,x=0,b=0,y=0,_=0,M=0,E=0,w=0,I=0,C=0,O=0;h.sort(aR);for(let P=0,U=h.length;P<U;P++){const D=h[P],H=D.color,K=D.intensity,ie=D.distance;let G=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===is?G=D.shadow.map.texture:G=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)f+=H.r*K,p+=H.g*K,m+=H.b*K;else if(D.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(D.sh.coefficients[Z],K);O++}else if(D.isDirectionalLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const j=D.shadow,z=t.get(D);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,n.directionalShadow[g]=z,n.directionalShadowMap[g]=G,n.directionalShadowMatrix[g]=D.shadow.matrix,M++}n.directional[g]=Z,g++}else if(D.isSpotLight){const Z=e.get(D);Z.position.setFromMatrixPosition(D.matrixWorld),Z.color.copy(H).multiplyScalar(K),Z.distance=ie,Z.coneCos=Math.cos(D.angle),Z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Z.decay=D.decay,n.spot[b]=Z;const j=D.shadow;if(D.map&&(n.spotLightMap[I]=D.map,I++,j.updateMatrices(D),D.castShadow&&C++),n.spotLightMatrix[b]=j.matrix,D.castShadow){const z=t.get(D);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,n.spotShadow[b]=z,n.spotShadowMap[b]=G,w++}b++}else if(D.isRectAreaLight){const Z=e.get(D);Z.color.copy(H).multiplyScalar(K),Z.halfWidth.set(D.width*.5,0,0),Z.halfHeight.set(0,D.height*.5,0),n.rectArea[y]=Z,y++}else if(D.isPointLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),Z.distance=D.distance,Z.decay=D.decay,D.castShadow){const j=D.shadow,z=t.get(D);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,z.shadowCameraNear=j.camera.near,z.shadowCameraFar=j.camera.far,n.pointShadow[x]=z,n.pointShadowMap[x]=G,n.pointShadowMatrix[x]=D.shadow.matrix,E++}n.point[x]=Z,x++}else if(D.isHemisphereLight){const Z=e.get(D);Z.skyColor.copy(D.color).multiplyScalar(K),Z.groundColor.copy(D.groundColor).multiplyScalar(K),n.hemi[_]=Z,_++}}y>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ge.LTC_FLOAT_1,n.rectAreaLTC2=Ge.LTC_FLOAT_2):(n.rectAreaLTC1=Ge.LTC_HALF_1,n.rectAreaLTC2=Ge.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=p,n.ambient[2]=m;const T=n.hash;(T.directionalLength!==g||T.pointLength!==x||T.spotLength!==b||T.rectAreaLength!==y||T.hemiLength!==_||T.numDirectionalShadows!==M||T.numPointShadows!==E||T.numSpotShadows!==w||T.numSpotMaps!==I||T.numLightProbes!==O)&&(n.directional.length=g,n.spot.length=b,n.rectArea.length=y,n.point.length=x,n.hemi.length=_,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=w+I-C,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=O,T.directionalLength=g,T.pointLength=x,T.spotLength=b,T.rectAreaLength=y,T.hemiLength=_,T.numDirectionalShadows=M,T.numPointShadows=E,T.numSpotShadows=w,T.numSpotMaps=I,T.numLightProbes=O,n.version=oR++)}function u(h,f){let p=0,m=0,g=0,x=0,b=0;const y=f.matrixWorldInverse;for(let _=0,M=h.length;_<M;_++){const E=h[_];if(E.isDirectionalLight){const w=n.directional[p];w.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(y),p++}else if(E.isSpotLight){const w=n.spot[g];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(y),w.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(y),g++}else if(E.isRectAreaLight){const w=n.rectArea[x];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(y),o.identity(),s.copy(E.matrixWorld),s.premultiply(y),o.extractRotation(s),w.halfWidth.set(E.width*.5,0,0),w.halfHeight.set(0,E.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),x++}else if(E.isPointLight){const w=n.point[m];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(y),m++}else if(E.isHemisphereLight){const w=n.hemi[b];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(y),b++}}}return{setup:c,setupView:u,state:n}}function Kv(r){const e=new lR(r),t=[],n=[],i=[];function s(m){p.camera=m,t.length=0,n.length=0,i.length=0}function o(m){t.push(m)}function c(m){n.push(m)}function u(m){i.push(m)}function h(){e.setup(t)}function f(m){e.setupView(t,m)}const p={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:h,setupLightsView:f,pushLight:o,pushShadow:c,pushLightProbeGrid:u}}function cR(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let c;return o===void 0?(c=new Kv(r),e.set(i,[c])):s>=o.length?(c=new Kv(r),o.push(c)):c=o[s],c}function n(){e=new WeakMap}return{get:t,dispose:n}}const uR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,fR=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],dR=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Qv=new _t,Ba=new F,np=new F;function pR(r,e,t){let n=new ta;const i=new me,s=new me,o=new Lt,c=new _m,u=new xm,h={},f=t.maxTextureSize,p={[Dr]:Yn,[Yn]:Dr,[ki]:ki},m=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:uR,fragmentShader:hR}),g=m.clone();g.defines.HORIZONTAL_PASS=1;const x=new Mt;x.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new cn(x,m),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xo;let _=this.type;this.render=function(C,O,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||C.length===0)return;this.type===Wa&&(ze("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Xo);const P=r.getRenderTarget(),U=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),H=r.state;H.setBlending(hr),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const K=_!==this.type;K&&O.traverse(function(ie){ie.material&&(Array.isArray(ie.material)?ie.material.forEach(G=>G.needsUpdate=!0):ie.material.needsUpdate=!0)});for(let ie=0,G=C.length;ie<G;ie++){const Z=C[ie],j=Z.shadow;if(j===void 0){ze("WebGLShadowMap:",Z,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;i.copy(j.mapSize);const z=j.getFrameExtents();i.multiply(z),s.copy(j.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(s.x=Math.floor(f/z.x),i.x=s.x*z.x,j.mapSize.x=s.x),i.y>f&&(s.y=Math.floor(f/z.y),i.y=s.y*z.y,j.mapSize.y=s.y));const X=r.state.buffers.depth.getReversed();if(j.camera._reversedDepth=X,j.map===null||K===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===Fs){if(Z.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new mi(i.x,i.y,{format:is,type:dr,minFilter:jt,magFilter:jt,generateMipmaps:!1}),j.map.texture.name=Z.name+".shadowMap",j.map.depthTexture=new Zs(i.x,i.y,Xn),j.map.depthTexture.name=Z.name+".shadowMapDepth",j.map.depthTexture.format=pr,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=ln,j.map.depthTexture.magFilter=ln}else Z.isPointLight?(j.map=new Im(i.x),j.map.depthTexture=new Ex(i.x,Pi)):(j.map=new mi(i.x,i.y),j.map.depthTexture=new Zs(i.x,i.y,Pi)),j.map.depthTexture.name=Z.name+".shadowMap",j.map.depthTexture.format=pr,this.type===Xo?(j.map.depthTexture.compareFunction=X?Nh:Dh,j.map.depthTexture.minFilter=jt,j.map.depthTexture.magFilter=jt):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=ln,j.map.depthTexture.magFilter=ln);j.camera.updateProjectionMatrix()}const Y=j.map.isWebGLCubeRenderTarget?6:1;for(let oe=0;oe<Y;oe++){if(j.map.isWebGLCubeRenderTarget)r.setRenderTarget(j.map,oe),r.clear();else{oe===0&&(r.setRenderTarget(j.map),r.clear());const pe=j.getViewport(oe);o.set(s.x*pe.x,s.y*pe.y,s.x*pe.z,s.y*pe.w),H.viewport(o)}if(Z.isPointLight){const pe=j.camera,Ie=j.matrix,rt=Z.distance||pe.far;rt!==pe.far&&(pe.far=rt,pe.updateProjectionMatrix()),Ba.setFromMatrixPosition(Z.matrixWorld),pe.position.copy(Ba),np.copy(pe.position),np.add(fR[oe]),pe.up.copy(dR[oe]),pe.lookAt(np),pe.updateMatrixWorld(),Ie.makeTranslation(-Ba.x,-Ba.y,-Ba.z),Qv.multiplyMatrices(pe.projectionMatrix,pe.matrixWorldInverse),j._frustum.setFromProjectionMatrix(Qv,pe.coordinateSystem,pe.reversedDepth)}else j.updateMatrices(Z);n=j.getFrustum(),w(O,T,j.camera,Z,this.type)}j.isPointLightShadow!==!0&&this.type===Fs&&M(j,T),j.needsUpdate=!1}_=this.type,y.needsUpdate=!1,r.setRenderTarget(P,U,D)};function M(C,O){const T=e.update(b);m.defines.VSM_SAMPLES!==C.blurSamples&&(m.defines.VSM_SAMPLES=C.blurSamples,g.defines.VSM_SAMPLES=C.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new mi(i.x,i.y,{format:is,type:dr})),m.uniforms.shadow_pass.value=C.map.depthTexture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,r.setRenderTarget(C.mapPass),r.clear(),r.renderBufferDirect(O,null,T,m,b,null),g.uniforms.shadow_pass.value=C.mapPass.texture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,r.setRenderTarget(C.map),r.clear(),r.renderBufferDirect(O,null,T,g,b,null)}function E(C,O,T,P){let U=null;const D=T.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)U=D;else if(U=T.isPointLight===!0?u:c,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const H=U.uuid,K=O.uuid;let ie=h[H];ie===void 0&&(ie={},h[H]=ie);let G=ie[K];G===void 0&&(G=U.clone(),ie[K]=G,O.addEventListener("dispose",I)),U=G}if(U.visible=O.visible,U.wireframe=O.wireframe,P===Fs?U.side=O.shadowSide!==null?O.shadowSide:O.side:U.side=O.shadowSide!==null?O.shadowSide:p[O.side],U.alphaMap=O.alphaMap,U.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,U.map=O.map,U.clipShadows=O.clipShadows,U.clippingPlanes=O.clippingPlanes,U.clipIntersection=O.clipIntersection,U.displacementMap=O.displacementMap,U.displacementScale=O.displacementScale,U.displacementBias=O.displacementBias,U.wireframeLinewidth=O.wireframeLinewidth,U.linewidth=O.linewidth,T.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const H=r.properties.get(U);H.light=T}return U}function w(C,O,T,P,U){if(C.visible===!1)return;if(C.layers.test(O.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&U===Fs)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,C.matrixWorld);const K=e.update(C),ie=C.material;if(Array.isArray(ie)){const G=K.groups;for(let Z=0,j=G.length;Z<j;Z++){const z=G[Z],X=ie[z.materialIndex];if(X&&X.visible){const Y=E(C,X,P,U);C.onBeforeShadow(r,C,O,T,K,Y,z),r.renderBufferDirect(T,null,K,Y,C,z),C.onAfterShadow(r,C,O,T,K,Y,z)}}}else if(ie.visible){const G=E(C,ie,P,U);C.onBeforeShadow(r,C,O,T,K,G,null),r.renderBufferDirect(T,null,K,G,C,null),C.onAfterShadow(r,C,O,T,K,G,null)}}const H=C.children;for(let K=0,ie=H.length;K<ie;K++)w(H[K],O,T,P,U)}function I(C){C.target.removeEventListener("dispose",I);for(const T in h){const P=h[T],U=C.target.uuid;U in P&&(P[U].dispose(),delete P[U])}}}function mR(r,e){function t(){let W=!1;const De=new Lt;let fe=null;const Be=new Lt(0,0,0,0);return{setMask:function(Te){fe!==Te&&!W&&(r.colorMask(Te,Te,Te,Te),fe=Te)},setLocked:function(Te){W=Te},setClear:function(Te,_e,nt,dt,Wt){Wt===!0&&(Te*=dt,_e*=dt,nt*=dt),De.set(Te,_e,nt,dt),Be.equals(De)===!1&&(r.clearColor(Te,_e,nt,dt),Be.copy(De))},reset:function(){W=!1,fe=null,Be.set(-1,0,0,0)}}}function n(){let W=!1,De=!1,fe=null,Be=null,Te=null;return{setReversed:function(_e){if(De!==_e){const nt=e.get("EXT_clip_control");_e?nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.ZERO_TO_ONE_EXT):nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.NEGATIVE_ONE_TO_ONE_EXT),De=_e;const dt=Te;Te=null,this.setClear(dt)}},getReversed:function(){return De},setTest:function(_e){_e?we(r.DEPTH_TEST):$e(r.DEPTH_TEST)},setMask:function(_e){fe!==_e&&!W&&(r.depthMask(_e),fe=_e)},setFunc:function(_e){if(De&&(_e=FM[_e]),Be!==_e){switch(_e){case Pu:r.depthFunc(r.NEVER);break;case Iu:r.depthFunc(r.ALWAYS);break;case Lu:r.depthFunc(r.LESS);break;case Ys:r.depthFunc(r.LEQUAL);break;case Du:r.depthFunc(r.EQUAL);break;case Nu:r.depthFunc(r.GEQUAL);break;case Uu:r.depthFunc(r.GREATER);break;case Ou:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Be=_e}},setLocked:function(_e){W=_e},setClear:function(_e){Te!==_e&&(Te=_e,De&&(_e=1-_e),r.clearDepth(_e))},reset:function(){W=!1,fe=null,Be=null,Te=null,De=!1}}}function i(){let W=!1,De=null,fe=null,Be=null,Te=null,_e=null,nt=null,dt=null,Wt=null;return{setTest:function(Vt){W||(Vt?we(r.STENCIL_TEST):$e(r.STENCIL_TEST))},setMask:function(Vt){De!==Vt&&!W&&(r.stencilMask(Vt),De=Vt)},setFunc:function(Vt,Li,ri){(fe!==Vt||Be!==Li||Te!==ri)&&(r.stencilFunc(Vt,Li,ri),fe=Vt,Be=Li,Te=ri)},setOp:function(Vt,Li,ri){(_e!==Vt||nt!==Li||dt!==ri)&&(r.stencilOp(Vt,Li,ri),_e=Vt,nt=Li,dt=ri)},setLocked:function(Vt){W=Vt},setClear:function(Vt){Wt!==Vt&&(r.clearStencil(Vt),Wt=Vt)},reset:function(){W=!1,De=null,fe=null,Be=null,Te=null,_e=null,nt=null,dt=null,Wt=null}}}const s=new t,o=new n,c=new i,u=new WeakMap,h=new WeakMap;let f={},p={},m={},g=new WeakMap,x=[],b=null,y=!1,_=null,M=null,E=null,w=null,I=null,C=null,O=null,T=new Je(0,0,0),P=0,U=!1,D=null,H=null,K=null,ie=null,G=null;const Z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,z=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(X)[1]),j=z>=1):X.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),j=z>=2);let Y=null,oe={};const pe=r.getParameter(r.SCISSOR_BOX),Ie=r.getParameter(r.VIEWPORT),rt=new Lt().fromArray(pe),Qe=new Lt().fromArray(Ie);function ae(W,De,fe,Be){const Te=new Uint8Array(4),_e=r.createTexture();r.bindTexture(W,_e),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let nt=0;nt<fe;nt++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(De,0,r.RGBA,1,1,Be,0,r.RGBA,r.UNSIGNED_BYTE,Te):r.texImage2D(De+nt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Te);return _e}const Re={};Re[r.TEXTURE_2D]=ae(r.TEXTURE_2D,r.TEXTURE_2D,1),Re[r.TEXTURE_CUBE_MAP]=ae(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[r.TEXTURE_2D_ARRAY]=ae(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Re[r.TEXTURE_3D]=ae(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),c.setClear(0),we(r.DEPTH_TEST),o.setFunc(Ys),Oe(!1),Ue(gp),we(r.CULL_FACE),be(hr);function we(W){f[W]!==!0&&(r.enable(W),f[W]=!0)}function $e(W){f[W]!==!1&&(r.disable(W),f[W]=!1)}function Ke(W,De){return m[W]!==De?(r.bindFramebuffer(W,De),m[W]=De,W===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=De),W===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=De),!0):!1}function Pe(W,De){let fe=x,Be=!1;if(W){fe=g.get(De),fe===void 0&&(fe=[],g.set(De,fe));const Te=W.textures;if(fe.length!==Te.length||fe[0]!==r.COLOR_ATTACHMENT0){for(let _e=0,nt=Te.length;_e<nt;_e++)fe[_e]=r.COLOR_ATTACHMENT0+_e;fe.length=Te.length,Be=!0}}else fe[0]!==r.BACK&&(fe[0]=r.BACK,Be=!0);Be&&r.drawBuffers(fe)}function gt(W){return b!==W?(r.useProgram(W),b=W,!0):!1}const Ye={[Qr]:r.FUNC_ADD,[L_]:r.FUNC_SUBTRACT,[D_]:r.FUNC_REVERSE_SUBTRACT};Ye[N_]=r.MIN,Ye[U_]=r.MAX;const ve={[O_]:r.ZERO,[F_]:r.ONE,[B_]:r.SRC_COLOR,[Cu]:r.SRC_ALPHA,[W_]:r.SRC_ALPHA_SATURATE,[H_]:r.DST_COLOR,[k_]:r.DST_ALPHA,[z_]:r.ONE_MINUS_SRC_COLOR,[Ru]:r.ONE_MINUS_SRC_ALPHA,[G_]:r.ONE_MINUS_DST_COLOR,[V_]:r.ONE_MINUS_DST_ALPHA,[X_]:r.CONSTANT_COLOR,[Y_]:r.ONE_MINUS_CONSTANT_COLOR,[q_]:r.CONSTANT_ALPHA,[Z_]:r.ONE_MINUS_CONSTANT_ALPHA};function be(W,De,fe,Be,Te,_e,nt,dt,Wt,Vt){if(W===hr){y===!0&&($e(r.BLEND),y=!1);return}if(y===!1&&(we(r.BLEND),y=!0),W!==I_){if(W!==_||Vt!==U){if((M!==Qr||I!==Qr)&&(r.blendEquation(r.FUNC_ADD),M=Qr,I=Qr),Vt)switch(W){case Vs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case vp:r.blendFunc(r.ONE,r.ONE);break;case _p:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case xp:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:ot("WebGLState: Invalid blending: ",W);break}else switch(W){case Vs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case vp:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case _p:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xp:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",W);break}E=null,w=null,C=null,O=null,T.set(0,0,0),P=0,_=W,U=Vt}return}Te=Te||De,_e=_e||fe,nt=nt||Be,(De!==M||Te!==I)&&(r.blendEquationSeparate(Ye[De],Ye[Te]),M=De,I=Te),(fe!==E||Be!==w||_e!==C||nt!==O)&&(r.blendFuncSeparate(ve[fe],ve[Be],ve[_e],ve[nt]),E=fe,w=Be,C=_e,O=nt),(dt.equals(T)===!1||Wt!==P)&&(r.blendColor(dt.r,dt.g,dt.b,Wt),T.copy(dt),P=Wt),_=W,U=!1}function xe(W,De){W.side===ki?$e(r.CULL_FACE):we(r.CULL_FACE);let fe=W.side===Yn;De&&(fe=!fe),Oe(fe),W.blending===Vs&&W.transparent===!1?be(hr):be(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),s.setMask(W.colorWrite);const Be=W.stencilWrite;c.setTest(Be),Be&&(c.setMask(W.stencilWriteMask),c.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),c.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),k(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?we(r.SAMPLE_ALPHA_TO_COVERAGE):$e(r.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(W){D!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),D=W)}function Ue(W){W!==C_?(we(r.CULL_FACE),W!==H&&(W===gp?r.cullFace(r.BACK):W===R_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):$e(r.CULL_FACE),H=W}function ct(W){W!==K&&(j&&r.lineWidth(W),K=W)}function k(W,De,fe){W?(we(r.POLYGON_OFFSET_FILL),(ie!==De||G!==fe)&&(ie=De,G=fe,o.getReversed()&&(De=-De),r.polygonOffset(De,fe))):$e(r.POLYGON_OFFSET_FILL)}function pt(W){W?we(r.SCISSOR_TEST):$e(r.SCISSOR_TEST)}function tt(W){W===void 0&&(W=r.TEXTURE0+Z-1),Y!==W&&(r.activeTexture(W),Y=W)}function ut(W,De,fe){fe===void 0&&(Y===null?fe=r.TEXTURE0+Z-1:fe=Y);let Be=oe[fe];Be===void 0&&(Be={type:void 0,texture:void 0},oe[fe]=Be),(Be.type!==W||Be.texture!==De)&&(Y!==fe&&(r.activeTexture(fe),Y=fe),r.bindTexture(W,De||Re[W]),Be.type=W,Be.texture=De)}function Me(){const W=oe[Y];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Pt(){try{r.compressedTexImage2D(...arguments)}catch(W){ot("WebGLState:",W)}}function N(){try{r.compressedTexImage3D(...arguments)}catch(W){ot("WebGLState:",W)}}function R(){try{r.texSubImage2D(...arguments)}catch(W){ot("WebGLState:",W)}}function $(){try{r.texSubImage3D(...arguments)}catch(W){ot("WebGLState:",W)}}function de(){try{r.compressedTexSubImage2D(...arguments)}catch(W){ot("WebGLState:",W)}}function ye(){try{r.compressedTexSubImage3D(...arguments)}catch(W){ot("WebGLState:",W)}}function Ce(){try{r.texStorage2D(...arguments)}catch(W){ot("WebGLState:",W)}}function Le(){try{r.texStorage3D(...arguments)}catch(W){ot("WebGLState:",W)}}function ce(){try{r.texImage2D(...arguments)}catch(W){ot("WebGLState:",W)}}function ge(){try{r.texImage3D(...arguments)}catch(W){ot("WebGLState:",W)}}function Ve(W){return p[W]!==void 0?p[W]:r.getParameter(W)}function V(W,De){p[W]!==De&&(r.pixelStorei(W,De),p[W]=De)}function ee(W){rt.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),rt.copy(W))}function ue(W){Qe.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),Qe.copy(W))}function He(W,De){let fe=h.get(De);fe===void 0&&(fe=new WeakMap,h.set(De,fe));let Be=fe.get(W);Be===void 0&&(Be=r.getUniformBlockIndex(De,W.name),fe.set(W,Be))}function st(W,De){const Be=h.get(De).get(W);u.get(De)!==Be&&(r.uniformBlockBinding(De,Be,W.__bindingPointIndex),u.set(De,Be))}function St(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),f={},p={},Y=null,oe={},m={},g=new WeakMap,x=[],b=null,y=!1,_=null,M=null,E=null,w=null,I=null,C=null,O=null,T=new Je(0,0,0),P=0,U=!1,D=null,H=null,K=null,ie=null,G=null,rt.set(0,0,r.canvas.width,r.canvas.height),Qe.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),c.reset()}return{buffers:{color:s,depth:o,stencil:c},enable:we,disable:$e,bindFramebuffer:Ke,drawBuffers:Pe,useProgram:gt,setBlending:be,setMaterial:xe,setFlipSided:Oe,setCullFace:Ue,setLineWidth:ct,setPolygonOffset:k,setScissorTest:pt,activeTexture:tt,bindTexture:ut,unbindTexture:Me,compressedTexImage2D:Pt,compressedTexImage3D:N,texImage2D:ce,texImage3D:ge,pixelStorei:V,getParameter:Ve,updateUBOMapping:He,uniformBlockBinding:st,texStorage2D:Ce,texStorage3D:Le,texSubImage2D:R,texSubImage3D:$,compressedTexSubImage2D:de,compressedTexSubImage3D:ye,scissor:ee,viewport:ue,reset:St}}function gR(r,e,t,n,i,s,o){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new me,f=new WeakMap,p=new Set;let m;const g=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(N,R){return x?new OffscreenCanvas(N,R):ul("canvas")}function y(N,R,$){let de=1;const ye=Pt(N);if((ye.width>$||ye.height>$)&&(de=$/Math.max(ye.width,ye.height)),de<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const Ce=Math.floor(de*ye.width),Le=Math.floor(de*ye.height);m===void 0&&(m=b(Ce,Le));const ce=R?b(Ce,Le):m;return ce.width=Ce,ce.height=Le,ce.getContext("2d").drawImage(N,0,0,Ce,Le),ze("WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+Ce+"x"+Le+")."),ce}else return"data"in N&&ze("WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),N;return N}function _(N){return N.generateMipmaps}function M(N){r.generateMipmap(N)}function E(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(N,R,$,de,ye,Ce=!1){if(N!==null){if(r[N]!==void 0)return r[N];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Le;de&&(Le=e.get("EXT_texture_norm16"),Le||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ce=R;if(R===r.RED&&($===r.FLOAT&&(ce=r.R32F),$===r.HALF_FLOAT&&(ce=r.R16F),$===r.UNSIGNED_BYTE&&(ce=r.R8),$===r.UNSIGNED_SHORT&&Le&&(ce=Le.R16_EXT),$===r.SHORT&&Le&&(ce=Le.R16_SNORM_EXT)),R===r.RED_INTEGER&&($===r.UNSIGNED_BYTE&&(ce=r.R8UI),$===r.UNSIGNED_SHORT&&(ce=r.R16UI),$===r.UNSIGNED_INT&&(ce=r.R32UI),$===r.BYTE&&(ce=r.R8I),$===r.SHORT&&(ce=r.R16I),$===r.INT&&(ce=r.R32I)),R===r.RG&&($===r.FLOAT&&(ce=r.RG32F),$===r.HALF_FLOAT&&(ce=r.RG16F),$===r.UNSIGNED_BYTE&&(ce=r.RG8),$===r.UNSIGNED_SHORT&&Le&&(ce=Le.RG16_EXT),$===r.SHORT&&Le&&(ce=Le.RG16_SNORM_EXT)),R===r.RG_INTEGER&&($===r.UNSIGNED_BYTE&&(ce=r.RG8UI),$===r.UNSIGNED_SHORT&&(ce=r.RG16UI),$===r.UNSIGNED_INT&&(ce=r.RG32UI),$===r.BYTE&&(ce=r.RG8I),$===r.SHORT&&(ce=r.RG16I),$===r.INT&&(ce=r.RG32I)),R===r.RGB_INTEGER&&($===r.UNSIGNED_BYTE&&(ce=r.RGB8UI),$===r.UNSIGNED_SHORT&&(ce=r.RGB16UI),$===r.UNSIGNED_INT&&(ce=r.RGB32UI),$===r.BYTE&&(ce=r.RGB8I),$===r.SHORT&&(ce=r.RGB16I),$===r.INT&&(ce=r.RGB32I)),R===r.RGBA_INTEGER&&($===r.UNSIGNED_BYTE&&(ce=r.RGBA8UI),$===r.UNSIGNED_SHORT&&(ce=r.RGBA16UI),$===r.UNSIGNED_INT&&(ce=r.RGBA32UI),$===r.BYTE&&(ce=r.RGBA8I),$===r.SHORT&&(ce=r.RGBA16I),$===r.INT&&(ce=r.RGBA32I)),R===r.RGB&&($===r.UNSIGNED_SHORT&&Le&&(ce=Le.RGB16_EXT),$===r.SHORT&&Le&&(ce=Le.RGB16_SNORM_EXT),$===r.UNSIGNED_INT_5_9_9_9_REV&&(ce=r.RGB9_E5),$===r.UNSIGNED_INT_10F_11F_11F_REV&&(ce=r.R11F_G11F_B10F)),R===r.RGBA){const ge=Ce?ll:Rt.getTransfer(ye);$===r.FLOAT&&(ce=r.RGBA32F),$===r.HALF_FLOAT&&(ce=r.RGBA16F),$===r.UNSIGNED_BYTE&&(ce=ge===Gt?r.SRGB8_ALPHA8:r.RGBA8),$===r.UNSIGNED_SHORT&&Le&&(ce=Le.RGBA16_EXT),$===r.SHORT&&Le&&(ce=Le.RGBA16_SNORM_EXT),$===r.UNSIGNED_SHORT_4_4_4_4&&(ce=r.RGBA4),$===r.UNSIGNED_SHORT_5_5_5_1&&(ce=r.RGB5_A1)}return(ce===r.R16F||ce===r.R32F||ce===r.RG16F||ce===r.RG32F||ce===r.RGBA16F||ce===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function I(N,R){let $;return N?R===null||R===Pi||R===Zo?$=r.DEPTH24_STENCIL8:R===Xn?$=r.DEPTH32F_STENCIL8:R===qo&&($=r.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Pi||R===Zo?$=r.DEPTH_COMPONENT24:R===Xn?$=r.DEPTH_COMPONENT32F:R===qo&&($=r.DEPTH_COMPONENT16),$}function C(N,R){return _(N)===!0||N.isFramebufferTexture&&N.minFilter!==ln&&N.minFilter!==jt?Math.log2(Math.max(R.width,R.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?R.mipmaps.length:1}function O(N){const R=N.target;R.removeEventListener("dispose",O),P(R),R.isVideoTexture&&f.delete(R),R.isHTMLTexture&&p.delete(R)}function T(N){const R=N.target;R.removeEventListener("dispose",T),D(R)}function P(N){const R=n.get(N);if(R.__webglInit===void 0)return;const $=N.source,de=g.get($);if(de){const ye=de[R.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&U(N),Object.keys(de).length===0&&g.delete($)}n.remove(N)}function U(N){const R=n.get(N);r.deleteTexture(R.__webglTexture);const $=N.source,de=g.get($);delete de[R.__cacheKey],o.memory.textures--}function D(N){const R=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(R.__webglFramebuffer[de]))for(let ye=0;ye<R.__webglFramebuffer[de].length;ye++)r.deleteFramebuffer(R.__webglFramebuffer[de][ye]);else r.deleteFramebuffer(R.__webglFramebuffer[de]);R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer[de])}else{if(Array.isArray(R.__webglFramebuffer))for(let de=0;de<R.__webglFramebuffer.length;de++)r.deleteFramebuffer(R.__webglFramebuffer[de]);else r.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&r.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let de=0;de<R.__webglColorRenderbuffer.length;de++)R.__webglColorRenderbuffer[de]&&r.deleteRenderbuffer(R.__webglColorRenderbuffer[de]);R.__webglDepthRenderbuffer&&r.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const $=N.textures;for(let de=0,ye=$.length;de<ye;de++){const Ce=n.get($[de]);Ce.__webglTexture&&(r.deleteTexture(Ce.__webglTexture),o.memory.textures--),n.remove($[de])}n.remove(N)}let H=0;function K(){H=0}function ie(){return H}function G(N){H=N}function Z(){const N=H;return N>=i.maxTextures&&ze("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+i.maxTextures),H+=1,N}function j(N){const R=[];return R.push(N.wrapS),R.push(N.wrapT),R.push(N.wrapR||0),R.push(N.magFilter),R.push(N.minFilter),R.push(N.anisotropy),R.push(N.internalFormat),R.push(N.format),R.push(N.type),R.push(N.generateMipmaps),R.push(N.premultiplyAlpha),R.push(N.flipY),R.push(N.unpackAlignment),R.push(N.colorSpace),R.join()}function z(N,R){const $=n.get(N);if(N.isVideoTexture&&ut(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&$.__version!==N.version){const de=N.image;if(de===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{$e($,N,R);return}}else N.isExternalTexture&&($.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,$.__webglTexture,r.TEXTURE0+R)}function X(N,R){const $=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&$.__version!==N.version){$e($,N,R);return}else N.isExternalTexture&&($.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,$.__webglTexture,r.TEXTURE0+R)}function Y(N,R){const $=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&$.__version!==N.version){$e($,N,R);return}t.bindTexture(r.TEXTURE_3D,$.__webglTexture,r.TEXTURE0+R)}function oe(N,R){const $=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&$.__version!==N.version){Ke($,N,R);return}t.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture,r.TEXTURE0+R)}const pe={[tl]:r.REPEAT,[ni]:r.CLAMP_TO_EDGE,[nl]:r.MIRRORED_REPEAT},Ie={[ln]:r.NEAREST,[Xp]:r.NEAREST_MIPMAP_NEAREST,[Vo]:r.NEAREST_MIPMAP_LINEAR,[jt]:r.LINEAR,[qa]:r.LINEAR_MIPMAP_NEAREST,[cr]:r.LINEAR_MIPMAP_LINEAR},rt={[ix]:r.NEVER,[lx]:r.ALWAYS,[rx]:r.LESS,[Dh]:r.LEQUAL,[sx]:r.EQUAL,[Nh]:r.GEQUAL,[ox]:r.GREATER,[ax]:r.NOTEQUAL};function Qe(N,R){if(R.type===Xn&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===jt||R.magFilter===qa||R.magFilter===Vo||R.magFilter===cr||R.minFilter===jt||R.minFilter===qa||R.minFilter===Vo||R.minFilter===cr)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,pe[R.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,pe[R.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,pe[R.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,Ie[R.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,Ie[R.minFilter]),R.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,rt[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===ln||R.minFilter!==Vo&&R.minFilter!==cr||R.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");r.texParameterf(N,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,i.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function ae(N,R){let $=!1;N.__webglInit===void 0&&(N.__webglInit=!0,R.addEventListener("dispose",O));const de=R.source;let ye=g.get(de);ye===void 0&&(ye={},g.set(de,ye));const Ce=j(R);if(Ce!==N.__cacheKey){ye[Ce]===void 0&&(ye[Ce]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,$=!0),ye[Ce].usedTimes++;const Le=ye[N.__cacheKey];Le!==void 0&&(ye[N.__cacheKey].usedTimes--,Le.usedTimes===0&&U(R)),N.__cacheKey=Ce,N.__webglTexture=ye[Ce].texture}return $}function Re(N,R,$){return Math.floor(Math.floor(N/$)/R)}function we(N,R,$,de){const Ce=N.updateRanges;if(Ce.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,R.width,R.height,$,de,R.data);else{Ce.sort((V,ee)=>V.start-ee.start);let Le=0;for(let V=1;V<Ce.length;V++){const ee=Ce[Le],ue=Ce[V],He=ee.start+ee.count,st=Re(ue.start,R.width,4),St=Re(ee.start,R.width,4);ue.start<=He+1&&st===St&&Re(ue.start+ue.count-1,R.width,4)===st?ee.count=Math.max(ee.count,ue.start+ue.count-ee.start):(++Le,Ce[Le]=ue)}Ce.length=Le+1;const ce=t.getParameter(r.UNPACK_ROW_LENGTH),ge=t.getParameter(r.UNPACK_SKIP_PIXELS),Ve=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,R.width);for(let V=0,ee=Ce.length;V<ee;V++){const ue=Ce[V],He=Math.floor(ue.start/4),st=Math.ceil(ue.count/4),St=He%R.width,W=Math.floor(He/R.width),De=st,fe=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,St),t.pixelStorei(r.UNPACK_SKIP_ROWS,W),t.texSubImage2D(r.TEXTURE_2D,0,St,W,De,fe,$,de,R.data)}N.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,ce),t.pixelStorei(r.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(r.UNPACK_SKIP_ROWS,Ve)}}function $e(N,R,$){let de=r.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(de=r.TEXTURE_2D_ARRAY),R.isData3DTexture&&(de=r.TEXTURE_3D);const ye=ae(N,R),Ce=R.source;t.bindTexture(de,N.__webglTexture,r.TEXTURE0+$);const Le=n.get(Ce);if(Ce.version!==Le.__version||ye===!0){if(t.activeTexture(r.TEXTURE0+$),(typeof ImageBitmap<"u"&&R.image instanceof ImageBitmap)===!1){const fe=Rt.getPrimaries(Rt.workingColorSpace),Be=R.colorSpace===Pr?null:Rt.getPrimaries(R.colorSpace),Te=R.colorSpace===Pr||fe===Be?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te)}t.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment);let ge=y(R.image,!1,i.maxTextureSize);ge=Me(R,ge);const Ve=s.convert(R.format,R.colorSpace),V=s.convert(R.type);let ee=w(R.internalFormat,Ve,V,R.normalized,R.colorSpace,R.isVideoTexture);Qe(de,R);let ue;const He=R.mipmaps,st=R.isVideoTexture!==!0,St=Le.__version===void 0||ye===!0,W=Ce.dataReady,De=C(R,ge);if(R.isDepthTexture)ee=I(R.format===$r,R.type),St&&(st?t.texStorage2D(r.TEXTURE_2D,1,ee,ge.width,ge.height):t.texImage2D(r.TEXTURE_2D,0,ee,ge.width,ge.height,0,Ve,V,null));else if(R.isDataTexture)if(He.length>0){st&&St&&t.texStorage2D(r.TEXTURE_2D,De,ee,He[0].width,He[0].height);for(let fe=0,Be=He.length;fe<Be;fe++)ue=He[fe],st?W&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,ue.width,ue.height,Ve,V,ue.data):t.texImage2D(r.TEXTURE_2D,fe,ee,ue.width,ue.height,0,Ve,V,ue.data);R.generateMipmaps=!1}else st?(St&&t.texStorage2D(r.TEXTURE_2D,De,ee,ge.width,ge.height),W&&we(R,ge,Ve,V)):t.texImage2D(r.TEXTURE_2D,0,ee,ge.width,ge.height,0,Ve,V,ge.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){st&&St&&t.texStorage3D(r.TEXTURE_2D_ARRAY,De,ee,He[0].width,He[0].height,ge.depth);for(let fe=0,Be=He.length;fe<Be;fe++)if(ue=He[fe],R.format!==Un)if(Ve!==null)if(st){if(W)if(R.layerUpdates.size>0){const Te=Lp(ue.width,ue.height,R.format,R.type);for(const _e of R.layerUpdates){const nt=ue.data.subarray(_e*Te/ue.data.BYTES_PER_ELEMENT,(_e+1)*Te/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,_e,ue.width,ue.height,1,Ve,nt)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,0,ue.width,ue.height,ge.depth,Ve,ue.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,fe,ee,ue.width,ue.height,ge.depth,0,ue.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?W&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,0,ue.width,ue.height,ge.depth,Ve,V,ue.data):t.texImage3D(r.TEXTURE_2D_ARRAY,fe,ee,ue.width,ue.height,ge.depth,0,Ve,V,ue.data)}else{st&&St&&t.texStorage2D(r.TEXTURE_2D,De,ee,He[0].width,He[0].height);for(let fe=0,Be=He.length;fe<Be;fe++)ue=He[fe],R.format!==Un?Ve!==null?st?W&&t.compressedTexSubImage2D(r.TEXTURE_2D,fe,0,0,ue.width,ue.height,Ve,ue.data):t.compressedTexImage2D(r.TEXTURE_2D,fe,ee,ue.width,ue.height,0,ue.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?W&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,ue.width,ue.height,Ve,V,ue.data):t.texImage2D(r.TEXTURE_2D,fe,ee,ue.width,ue.height,0,Ve,V,ue.data)}else if(R.isDataArrayTexture)if(st){if(St&&t.texStorage3D(r.TEXTURE_2D_ARRAY,De,ee,ge.width,ge.height,ge.depth),W)if(R.layerUpdates.size>0){const fe=Lp(ge.width,ge.height,R.format,R.type);for(const Be of R.layerUpdates){const Te=ge.data.subarray(Be*fe/ge.data.BYTES_PER_ELEMENT,(Be+1)*fe/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Be,ge.width,ge.height,1,Ve,V,Te)}R.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Ve,V,ge.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ee,ge.width,ge.height,ge.depth,0,Ve,V,ge.data);else if(R.isData3DTexture)st?(St&&t.texStorage3D(r.TEXTURE_3D,De,ee,ge.width,ge.height,ge.depth),W&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Ve,V,ge.data)):t.texImage3D(r.TEXTURE_3D,0,ee,ge.width,ge.height,ge.depth,0,Ve,V,ge.data);else if(R.isFramebufferTexture){if(St)if(st)t.texStorage2D(r.TEXTURE_2D,De,ee,ge.width,ge.height);else{let fe=ge.width,Be=ge.height;for(let Te=0;Te<De;Te++)t.texImage2D(r.TEXTURE_2D,Te,ee,fe,Be,0,Ve,V,null),fe>>=1,Be>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in r){const fe=r.canvas;if(fe.hasAttribute("layoutsubtree")||fe.setAttribute("layoutsubtree","true"),ge.parentNode!==fe){fe.appendChild(ge),p.add(R),fe.onpaint=dt=>{const Wt=dt.changedElements;for(const Vt of p)Wt.includes(Vt.image)&&(Vt.needsUpdate=!0)},fe.requestPaint();return}const Be=0,Te=r.RGBA,_e=r.RGBA,nt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,Be,Te,_e,nt,ge),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(He.length>0){if(st&&St){const fe=Pt(He[0]);t.texStorage2D(r.TEXTURE_2D,De,ee,fe.width,fe.height)}for(let fe=0,Be=He.length;fe<Be;fe++)ue=He[fe],st?W&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,Ve,V,ue):t.texImage2D(r.TEXTURE_2D,fe,ee,Ve,V,ue);R.generateMipmaps=!1}else if(st){if(St){const fe=Pt(ge);t.texStorage2D(r.TEXTURE_2D,De,ee,fe.width,fe.height)}W&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ve,V,ge)}else t.texImage2D(r.TEXTURE_2D,0,ee,Ve,V,ge);_(R)&&M(de),Le.__version=Ce.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function Ke(N,R,$){if(R.image.length!==6)return;const de=ae(N,R),ye=R.source;t.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+$);const Ce=n.get(ye);if(ye.version!==Ce.__version||de===!0){t.activeTexture(r.TEXTURE0+$);const Le=Rt.getPrimaries(Rt.workingColorSpace),ce=R.colorSpace===Pr?null:Rt.getPrimaries(R.colorSpace),ge=R.colorSpace===Pr||Le===ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ve=R.isCompressedTexture||R.image[0].isCompressedTexture,V=R.image[0]&&R.image[0].isDataTexture,ee=[];for(let _e=0;_e<6;_e++)!Ve&&!V?ee[_e]=y(R.image[_e],!0,i.maxCubemapSize):ee[_e]=V?R.image[_e].image:R.image[_e],ee[_e]=Me(R,ee[_e]);const ue=ee[0],He=s.convert(R.format,R.colorSpace),st=s.convert(R.type),St=w(R.internalFormat,He,st,R.normalized,R.colorSpace),W=R.isVideoTexture!==!0,De=Ce.__version===void 0||de===!0,fe=ye.dataReady;let Be=C(R,ue);Qe(r.TEXTURE_CUBE_MAP,R);let Te;if(Ve){W&&De&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Be,St,ue.width,ue.height);for(let _e=0;_e<6;_e++){Te=ee[_e].mipmaps;for(let nt=0;nt<Te.length;nt++){const dt=Te[nt];R.format!==Un?He!==null?W?fe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,nt,0,0,dt.width,dt.height,He,dt.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,nt,St,dt.width,dt.height,0,dt.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,nt,0,0,dt.width,dt.height,He,st,dt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,nt,St,dt.width,dt.height,0,He,st,dt.data)}}}else{if(Te=R.mipmaps,W&&De){Te.length>0&&Be++;const _e=Pt(ee[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Be,St,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(V){W?fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,ee[_e].width,ee[_e].height,He,st,ee[_e].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,St,ee[_e].width,ee[_e].height,0,He,st,ee[_e].data);for(let nt=0;nt<Te.length;nt++){const Wt=Te[nt].image[_e].image;W?fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,nt+1,0,0,Wt.width,Wt.height,He,st,Wt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,nt+1,St,Wt.width,Wt.height,0,He,st,Wt.data)}}else{W?fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,He,st,ee[_e]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,St,He,st,ee[_e]);for(let nt=0;nt<Te.length;nt++){const dt=Te[nt];W?fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,nt+1,0,0,He,st,dt.image[_e]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,nt+1,St,He,st,dt.image[_e])}}}_(R)&&M(r.TEXTURE_CUBE_MAP),Ce.__version=ye.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function Pe(N,R,$,de,ye,Ce){const Le=s.convert($.format,$.colorSpace),ce=s.convert($.type),ge=w($.internalFormat,Le,ce,$.normalized,$.colorSpace),Ve=n.get(R),V=n.get($);if(V.__renderTarget=R,!Ve.__hasExternalTextures){const ee=Math.max(1,R.width>>Ce),ue=Math.max(1,R.height>>Ce);ye===r.TEXTURE_3D||ye===r.TEXTURE_2D_ARRAY?t.texImage3D(ye,Ce,ge,ee,ue,R.depth,0,Le,ce,null):t.texImage2D(ye,Ce,ge,ee,ue,0,Le,ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,N),tt(R)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,de,ye,V.__webglTexture,0,pt(R)):(ye===r.TEXTURE_2D||ye>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,de,ye,V.__webglTexture,Ce),t.bindFramebuffer(r.FRAMEBUFFER,null)}function gt(N,R,$){if(r.bindRenderbuffer(r.RENDERBUFFER,N),R.depthBuffer){const de=R.depthTexture,ye=de&&de.isDepthTexture?de.type:null,Ce=I(R.stencilBuffer,ye),Le=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;tt(R)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,pt(R),Ce,R.width,R.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,pt(R),Ce,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,Ce,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Le,r.RENDERBUFFER,N)}else{const de=R.textures;for(let ye=0;ye<de.length;ye++){const Ce=de[ye],Le=s.convert(Ce.format,Ce.colorSpace),ce=s.convert(Ce.type),ge=w(Ce.internalFormat,Le,ce,Ce.normalized,Ce.colorSpace);tt(R)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,pt(R),ge,R.width,R.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,pt(R),ge,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,ge,R.width,R.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ye(N,R,$){const de=R.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,N),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ye=n.get(R.depthTexture);if(ye.__renderTarget=R,(!ye.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),de){if(ye.__webglInit===void 0&&(ye.__webglInit=!0,R.depthTexture.addEventListener("dispose",O)),ye.__webglTexture===void 0){ye.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,ye.__webglTexture),Qe(r.TEXTURE_CUBE_MAP,R.depthTexture);const Ve=s.convert(R.depthTexture.format),V=s.convert(R.depthTexture.type);let ee;R.depthTexture.format===pr?ee=r.DEPTH_COMPONENT24:R.depthTexture.format===$r&&(ee=r.DEPTH24_STENCIL8);for(let ue=0;ue<6;ue++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,ee,R.width,R.height,0,Ve,V,null)}}else z(R.depthTexture,0);const Ce=ye.__webglTexture,Le=pt(R),ce=de?r.TEXTURE_CUBE_MAP_POSITIVE_X+$:r.TEXTURE_2D,ge=R.depthTexture.format===$r?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(R.depthTexture.format===pr)tt(R)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ge,ce,Ce,0,Le):r.framebufferTexture2D(r.FRAMEBUFFER,ge,ce,Ce,0);else if(R.depthTexture.format===$r)tt(R)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ge,ce,Ce,0,Le):r.framebufferTexture2D(r.FRAMEBUFFER,ge,ce,Ce,0);else throw new Error("Unknown depthTexture format")}function ve(N){const R=n.get(N),$=N.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==N.depthTexture){const de=N.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),de){const ye=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,de.removeEventListener("dispose",ye)};de.addEventListener("dispose",ye),R.__depthDisposeCallback=ye}R.__boundDepthTexture=de}if(N.depthTexture&&!R.__autoAllocateDepthBuffer)if($)for(let de=0;de<6;de++)Ye(R.__webglFramebuffer[de],N,de);else{const de=N.texture.mipmaps;de&&de.length>0?Ye(R.__webglFramebuffer[0],N,0):Ye(R.__webglFramebuffer,N,0)}else if($){R.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer[de]),R.__webglDepthbuffer[de]===void 0)R.__webglDepthbuffer[de]=r.createRenderbuffer(),gt(R.__webglDepthbuffer[de],N,!1);else{const ye=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=R.__webglDepthbuffer[de];r.bindRenderbuffer(r.RENDERBUFFER,Ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,ye,r.RENDERBUFFER,Ce)}}else{const de=N.texture.mipmaps;if(de&&de.length>0?t.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=r.createRenderbuffer(),gt(R.__webglDepthbuffer,N,!1);else{const ye=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=R.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,ye,r.RENDERBUFFER,Ce)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function be(N,R,$){const de=n.get(N);R!==void 0&&Pe(de.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),$!==void 0&&ve(N)}function xe(N){const R=N.texture,$=n.get(N),de=n.get(R);N.addEventListener("dispose",T);const ye=N.textures,Ce=N.isWebGLCubeRenderTarget===!0,Le=ye.length>1;if(Le||(de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture()),de.__version=R.version,o.memory.textures++),Ce){$.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(R.mipmaps&&R.mipmaps.length>0){$.__webglFramebuffer[ce]=[];for(let ge=0;ge<R.mipmaps.length;ge++)$.__webglFramebuffer[ce][ge]=r.createFramebuffer()}else $.__webglFramebuffer[ce]=r.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){$.__webglFramebuffer=[];for(let ce=0;ce<R.mipmaps.length;ce++)$.__webglFramebuffer[ce]=r.createFramebuffer()}else $.__webglFramebuffer=r.createFramebuffer();if(Le)for(let ce=0,ge=ye.length;ce<ge;ce++){const Ve=n.get(ye[ce]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=r.createTexture(),o.memory.textures++)}if(N.samples>0&&tt(N)===!1){$.__webglMultisampledFramebuffer=r.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ce=0;ce<ye.length;ce++){const ge=ye[ce];$.__webglColorRenderbuffer[ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,$.__webglColorRenderbuffer[ce]);const Ve=s.convert(ge.format,ge.colorSpace),V=s.convert(ge.type),ee=w(ge.internalFormat,Ve,V,ge.normalized,ge.colorSpace,N.isXRRenderTarget===!0),ue=pt(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,ue,ee,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.RENDERBUFFER,$.__webglColorRenderbuffer[ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&($.__webglDepthRenderbuffer=r.createRenderbuffer(),gt($.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Ce){t.bindTexture(r.TEXTURE_CUBE_MAP,de.__webglTexture),Qe(r.TEXTURE_CUBE_MAP,R);for(let ce=0;ce<6;ce++)if(R.mipmaps&&R.mipmaps.length>0)for(let ge=0;ge<R.mipmaps.length;ge++)Pe($.__webglFramebuffer[ce][ge],N,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ge);else Pe($.__webglFramebuffer[ce],N,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);_(R)&&M(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let ce=0,ge=ye.length;ce<ge;ce++){const Ve=ye[ce],V=n.get(Ve);let ee=r.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ee=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ee,V.__webglTexture),Qe(ee,Ve),Pe($.__webglFramebuffer,N,Ve,r.COLOR_ATTACHMENT0+ce,ee,0),_(Ve)&&M(ee)}t.unbindTexture()}else{let ce=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ce=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ce,de.__webglTexture),Qe(ce,R),R.mipmaps&&R.mipmaps.length>0)for(let ge=0;ge<R.mipmaps.length;ge++)Pe($.__webglFramebuffer[ge],N,R,r.COLOR_ATTACHMENT0,ce,ge);else Pe($.__webglFramebuffer,N,R,r.COLOR_ATTACHMENT0,ce,0);_(R)&&M(ce),t.unbindTexture()}N.depthBuffer&&ve(N)}function Oe(N){const R=N.textures;for(let $=0,de=R.length;$<de;$++){const ye=R[$];if(_(ye)){const Ce=E(N),Le=n.get(ye).__webglTexture;t.bindTexture(Ce,Le),M(Ce),t.unbindTexture()}}}const Ue=[],ct=[];function k(N){if(N.samples>0){if(tt(N)===!1){const R=N.textures,$=N.width,de=N.height;let ye=r.COLOR_BUFFER_BIT;const Ce=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Le=n.get(N),ce=R.length>1;if(ce)for(let Ve=0;Ve<R.length;Ve++)t.bindFramebuffer(r.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ve,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ve,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const ge=N.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Ve=0;Ve<R.length;Ve++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ye|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ye|=r.STENCIL_BUFFER_BIT)),ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Le.__webglColorRenderbuffer[Ve]);const V=n.get(R[Ve]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,V,0)}r.blitFramebuffer(0,0,$,de,0,0,$,de,ye,r.NEAREST),u===!0&&(Ue.length=0,ct.length=0,Ue.push(r.COLOR_ATTACHMENT0+Ve),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Ue.push(Ce),ct.push(Ce),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ct)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ue))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ce)for(let Ve=0;Ve<R.length;Ve++){t.bindFramebuffer(r.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ve,r.RENDERBUFFER,Le.__webglColorRenderbuffer[Ve]);const V=n.get(R[Ve]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ve,r.TEXTURE_2D,V,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&u){const R=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[R])}}}function pt(N){return Math.min(i.maxSamples,N.samples)}function tt(N){const R=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function ut(N){const R=o.render.frame;f.get(N)!==R&&(f.set(N,R),N.update())}function Me(N,R){const $=N.colorSpace,de=N.format,ye=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||$!==al&&$!==Pr&&(Rt.getTransfer($)===Gt?(de!==Un||ye!==Gn)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",$)),R}function Pt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(h.width=N.naturalWidth||N.width,h.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(h.width=N.displayWidth,h.height=N.displayHeight):(h.width=N.width,h.height=N.height),h}this.allocateTextureUnit=Z,this.resetTextureUnits=K,this.getTextureUnits=ie,this.setTextureUnits=G,this.setTexture2D=z,this.setTexture2DArray=X,this.setTexture3D=Y,this.setTextureCube=oe,this.rebindTextures=be,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=k,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=tt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function xy(r,e){function t(n,i=Pr){let s;const o=Rt.getTransfer(i);if(n===Gn)return r.UNSIGNED_BYTE;if(n===Ah)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Ch)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Zp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===jp)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Yp)return r.BYTE;if(n===qp)return r.SHORT;if(n===qo)return r.UNSIGNED_SHORT;if(n===Th)return r.INT;if(n===Pi)return r.UNSIGNED_INT;if(n===Xn)return r.FLOAT;if(n===dr)return r.HALF_FLOAT;if(n===Jp)return r.ALPHA;if(n===Kp)return r.RGB;if(n===Un)return r.RGBA;if(n===pr)return r.DEPTH_COMPONENT;if(n===$r)return r.DEPTH_STENCIL;if(n===Rh)return r.RED;if(n===Sl)return r.RED_INTEGER;if(n===is)return r.RG;if(n===Ph)return r.RG_INTEGER;if(n===Ih)return r.RGBA_INTEGER;if(n===Za||n===ja||n===Ja||n===Ka)if(o===Gt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Za)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Za)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ja)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ja)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ka)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fu||n===Bu||n===zu||n===ku)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Fu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ku)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vu||n===Hu||n===Gu||n===Wu||n===Xu||n===il||n===Yu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Vu||n===Hu)return o===Gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Gu)return o===Gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Wu)return s.COMPRESSED_R11_EAC;if(n===Xu)return s.COMPRESSED_SIGNED_R11_EAC;if(n===il)return s.COMPRESSED_RG11_EAC;if(n===Yu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===qu||n===Zu||n===ju||n===Ju||n===Ku||n===Qu||n===$u||n===eh||n===th||n===nh||n===ih||n===rh||n===sh||n===oh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===qu)return o===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zu)return o===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ju)return o===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ju)return o===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ku)return o===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qu)return o===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$u)return o===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===eh)return o===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===th)return o===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nh)return o===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ih)return o===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===rh)return o===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sh)return o===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oh)return o===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ah||n===lh||n===ch)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ah)return o===Gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ch)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===uh||n===hh||n===rl||n===fh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===uh)return s.COMPRESSED_RED_RGTC1_EXT;if(n===hh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===rl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Zo?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const vR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_R=`
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

}`;class xR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new am(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new gi({vertexShader:vR,fragmentShader:_R,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new cn(new na(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yR extends Xi{constructor(e,t){super();const n=this;let i=null,s=1,o=null,c="local-floor",u=1,h=null,f=null,p=null,m=null,g=null,x=null;const b=typeof XRWebGLBinding<"u",y=new xR,_={},M=t.getContextAttributes();let E=null,w=null;const I=[],C=[],O=new me;let T=null;const P=new en;P.viewport=new Lt;const U=new en;U.viewport=new Lt;const D=[P,U],H=new ry;let K=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let Re=I[ae];return Re===void 0&&(Re=new wu,I[ae]=Re),Re.getTargetRaySpace()},this.getControllerGrip=function(ae){let Re=I[ae];return Re===void 0&&(Re=new wu,I[ae]=Re),Re.getGripSpace()},this.getHand=function(ae){let Re=I[ae];return Re===void 0&&(Re=new wu,I[ae]=Re),Re.getHandSpace()};function G(ae){const Re=C.indexOf(ae.inputSource);if(Re===-1)return;const we=I[Re];we!==void 0&&(we.update(ae.inputSource,ae.frame,h||o),we.dispatchEvent({type:ae.type,data:ae.inputSource}))}function Z(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",j);for(let ae=0;ae<I.length;ae++){const Re=C[ae];Re!==null&&(C[ae]=null,I[ae].disconnect(Re))}K=null,ie=null,y.reset();for(const ae in _)delete _[ae];e.setRenderTarget(E),g=null,m=null,p=null,i=null,w=null,Qe.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){s=ae,n.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){c=ae,n.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(ae){h=ae},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return p===null&&b&&(p=new XRWebGLBinding(i,t)),p},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(ae){if(i=ae,i!==null){if(E=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",j),M.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(O),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,$e=null,Ke=null;M.depth&&(Ke=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=M.stencil?$r:pr,$e=M.stencil?Zo:Pi);const Pe={colorFormat:t.RGBA8,depthFormat:Ke,scaleFactor:s};p=this.getBinding(),m=p.createProjectionLayer(Pe),i.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),w=new mi(m.textureWidth,m.textureHeight,{format:Un,type:Gn,depthTexture:new Zs(m.textureWidth,m.textureHeight,$e,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const we={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(i,t,we),i.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),w=new mi(g.framebufferWidth,g.framebufferHeight,{format:Un,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(u),h=null,o=await i.requestReferenceSpace(c),Qe.setContext(i),Qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function j(ae){for(let Re=0;Re<ae.removed.length;Re++){const we=ae.removed[Re],$e=C.indexOf(we);$e>=0&&(C[$e]=null,I[$e].disconnect(we))}for(let Re=0;Re<ae.added.length;Re++){const we=ae.added[Re];let $e=C.indexOf(we);if($e===-1){for(let Pe=0;Pe<I.length;Pe++)if(Pe>=C.length){C.push(we),$e=Pe;break}else if(C[Pe]===null){C[Pe]=we,$e=Pe;break}if($e===-1)break}const Ke=I[$e];Ke&&Ke.connect(we)}}const z=new F,X=new F;function Y(ae,Re,we){z.setFromMatrixPosition(Re.matrixWorld),X.setFromMatrixPosition(we.matrixWorld);const $e=z.distanceTo(X),Ke=Re.projectionMatrix.elements,Pe=we.projectionMatrix.elements,gt=Ke[14]/(Ke[10]-1),Ye=Ke[14]/(Ke[10]+1),ve=(Ke[9]+1)/Ke[5],be=(Ke[9]-1)/Ke[5],xe=(Ke[8]-1)/Ke[0],Oe=(Pe[8]+1)/Pe[0],Ue=gt*xe,ct=gt*Oe,k=$e/(-xe+Oe),pt=k*-xe;if(Re.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(pt),ae.translateZ(k),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),Ke[10]===-1)ae.projectionMatrix.copy(Re.projectionMatrix),ae.projectionMatrixInverse.copy(Re.projectionMatrixInverse);else{const tt=gt+k,ut=Ye+k,Me=Ue-pt,Pt=ct+($e-pt),N=ve*Ye/ut*tt,R=be*Ye/ut*tt;ae.projectionMatrix.makePerspective(Me,Pt,N,R,tt,ut),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function oe(ae,Re){Re===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(Re.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(i===null)return;let Re=ae.near,we=ae.far;y.texture!==null&&(y.depthNear>0&&(Re=y.depthNear),y.depthFar>0&&(we=y.depthFar)),H.near=U.near=P.near=Re,H.far=U.far=P.far=we,(K!==H.near||ie!==H.far)&&(i.updateRenderState({depthNear:H.near,depthFar:H.far}),K=H.near,ie=H.far),H.layers.mask=ae.layers.mask|6,P.layers.mask=H.layers.mask&-5,U.layers.mask=H.layers.mask&-3;const $e=ae.parent,Ke=H.cameras;oe(H,$e);for(let Pe=0;Pe<Ke.length;Pe++)oe(Ke[Pe],$e);Ke.length===2?Y(H,P,U):H.projectionMatrix.copy(P.projectionMatrix),pe(ae,H,$e)};function pe(ae,Re,we){we===null?ae.matrix.copy(Re.matrixWorld):(ae.matrix.copy(we.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(Re.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(Re.projectionMatrix),ae.projectionMatrixInverse.copy(Re.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=jo*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(m===null&&g===null))return u},this.setFoveation=function(ae){u=ae,m!==null&&(m.fixedFoveation=ae),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=ae)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(H)},this.getCameraTexture=function(ae){return _[ae]};let Ie=null;function rt(ae,Re){if(f=Re.getViewerPose(h||o),x=Re,f!==null){const we=f.views;g!==null&&(e.setRenderTargetFramebuffer(w,g.framebuffer),e.setRenderTarget(w));let $e=!1;we.length!==H.cameras.length&&(H.cameras.length=0,$e=!0);for(let Ye=0;Ye<we.length;Ye++){const ve=we[Ye];let be=null;if(g!==null)be=g.getViewport(ve);else{const Oe=p.getViewSubImage(m,ve);be=Oe.viewport,Ye===0&&(e.setRenderTargetTextures(w,Oe.colorTexture,Oe.depthStencilTexture),e.setRenderTarget(w))}let xe=D[Ye];xe===void 0&&(xe=new en,xe.layers.enable(Ye),xe.viewport=new Lt,D[Ye]=xe),xe.matrix.fromArray(ve.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(ve.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(be.x,be.y,be.width,be.height),Ye===0&&(H.matrix.copy(xe.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),$e===!0&&H.cameras.push(xe)}const Ke=i.enabledFeatures;if(Ke&&Ke.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&b){p=n.getBinding();const Ye=p.getDepthInformation(we[0]);Ye&&Ye.isValid&&Ye.texture&&y.init(Ye,i.renderState)}if(Ke&&Ke.includes("camera-access")&&b){e.state.unbindTexture(),p=n.getBinding();for(let Ye=0;Ye<we.length;Ye++){const ve=we[Ye].camera;if(ve){let be=_[ve];be||(be=new am,_[ve]=be);const xe=p.getCameraImage(ve);be.sourceTexture=xe}}}}for(let we=0;we<I.length;we++){const $e=C[we],Ke=I[we];$e!==null&&Ke!==void 0&&Ke.update($e,Re,h||o)}Ie&&Ie(ae,Re),Re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Re}),x=null}const Qe=new dy;Qe.setAnimationLoop(rt),this.setAnimationLoop=function(ae){Ie=ae},this.dispose=function(){}}}const SR=new _t,yy=new yt;yy.set(-1,0,0,0,1,0,0,0,1);function MR(r,e){function t(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function n(y,_){_.color.getRGB(y.fogColor.value,Ux(r)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function i(y,_,M,E,w){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?s(y,_):_.isMeshLambertMaterial?(s(y,_),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(s(y,_),p(y,_)):_.isMeshPhongMaterial?(s(y,_),f(y,_),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(s(y,_),m(y,_),_.isMeshPhysicalMaterial&&g(y,_,w)):_.isMeshMatcapMaterial?(s(y,_),x(y,_)):_.isMeshDepthMaterial?s(y,_):_.isMeshDistanceMaterial?(s(y,_),b(y,_)):_.isMeshNormalMaterial?s(y,_):_.isLineBasicMaterial?(o(y,_),_.isLineDashedMaterial&&c(y,_)):_.isPointsMaterial?u(y,_,M,E):_.isSpriteMaterial?h(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,t(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Yn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,t(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Yn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,t(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,t(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const M=e.get(_),E=M.envMap,w=M.envMapRotation;E&&(y.envMap.value=E,y.envMapRotation.value.setFromMatrix4(SR.makeRotationFromEuler(w)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(yy),y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,y.aoMapTransform))}function o(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform))}function c(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function u(y,_,M,E){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*M,y.scale.value=E*.5,_.map&&(y.map.value=_.map,t(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function f(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function p(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function m(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function g(y,_,M){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Yn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=M.texture,y.transmissionSamplerSize.value.set(M.width,M.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,y.specularIntensityMapTransform))}function x(y,_){_.matcap&&(y.matcap.value=_.matcap)}function b(y,_){const M=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(M.matrixWorld),y.nearDistance.value=M.shadow.camera.near,y.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function bR(r,e,t,n){let i={},s={},o=[];const c=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function u(M,E){const w=E.program;n.uniformBlockBinding(M,w)}function h(M,E){let w=i[M.id];w===void 0&&(x(M),w=f(M),i[M.id]=w,M.addEventListener("dispose",y));const I=E.program;n.updateUBOMapping(M,I);const C=e.render.frame;s[M.id]!==C&&(m(M),s[M.id]=C)}function f(M){const E=p();M.__bindingPointIndex=E;const w=r.createBuffer(),I=M.__size,C=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,I,C),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,E,w),w}function p(){for(let M=0;M<c;M++)if(o.indexOf(M)===-1)return o.push(M),M;return ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(M){const E=i[M.id],w=M.uniforms,I=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,E);for(let C=0,O=w.length;C<O;C++){const T=Array.isArray(w[C])?w[C]:[w[C]];for(let P=0,U=T.length;P<U;P++){const D=T[P];if(g(D,C,P,I)===!0){const H=D.__offset,K=Array.isArray(D.value)?D.value:[D.value];let ie=0;for(let G=0;G<K.length;G++){const Z=K[G],j=b(Z);typeof Z=="number"||typeof Z=="boolean"?(D.__data[0]=Z,r.bufferSubData(r.UNIFORM_BUFFER,H+ie,D.__data)):Z.isMatrix3?(D.__data[0]=Z.elements[0],D.__data[1]=Z.elements[1],D.__data[2]=Z.elements[2],D.__data[3]=0,D.__data[4]=Z.elements[3],D.__data[5]=Z.elements[4],D.__data[6]=Z.elements[5],D.__data[7]=0,D.__data[8]=Z.elements[6],D.__data[9]=Z.elements[7],D.__data[10]=Z.elements[8],D.__data[11]=0):ArrayBuffer.isView(Z)?D.__data.set(new Z.constructor(Z.buffer,Z.byteOffset,D.__data.length)):(Z.toArray(D.__data,ie),ie+=j.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,H,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function g(M,E,w,I){const C=M.value,O=E+"_"+w;if(I[O]===void 0)return typeof C=="number"||typeof C=="boolean"?I[O]=C:ArrayBuffer.isView(C)?I[O]=C.slice():I[O]=C.clone(),!0;{const T=I[O];if(typeof C=="number"||typeof C=="boolean"){if(T!==C)return I[O]=C,!0}else{if(ArrayBuffer.isView(C))return!0;if(T.equals(C)===!1)return T.copy(C),!0}}return!1}function x(M){const E=M.uniforms;let w=0;const I=16;for(let O=0,T=E.length;O<T;O++){const P=Array.isArray(E[O])?E[O]:[E[O]];for(let U=0,D=P.length;U<D;U++){const H=P[U],K=Array.isArray(H.value)?H.value:[H.value];for(let ie=0,G=K.length;ie<G;ie++){const Z=K[ie],j=b(Z),z=w%I,X=z%j.boundary,Y=z+X;w+=X,Y!==0&&I-Y<j.storage&&(w+=I-Y),H.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=w,w+=j.storage}}}const C=w%I;return C>0&&(w+=I-C),M.__size=w,M.__cache={},this}function b(M){const E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=48,E.storage=48):M.isMatrix4?(E.boundary=64,E.storage=64):M.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(E.boundary=16,E.storage=M.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",M),E}function y(M){const E=M.target;E.removeEventListener("dispose",y);const w=o.indexOf(E.__bindingPointIndex);o.splice(w,1),r.deleteBuffer(i[E.id]),delete i[E.id],delete s[E.id]}function _(){for(const M in i)r.deleteBuffer(i[M]);o=[],i={},s={}}return{bind:u,update:h,dispose:_}}const ER=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let rr=null;function wR(){return rr===null&&(rr=new Hi(ER,16,16,is,dr),rr.name="DFG_LUT",rr.minFilter=jt,rr.magFilter=jt,rr.wrapS=ni,rr.wrapT=ni,rr.generateMipmaps=!1,rr.needsUpdate=!0),rr}class Sy{constructor(e={}){const{canvas:t=ux(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:c=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:m=!1,outputBufferType:g=Gn}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=o;const b=g,y=new Set([Ih,Ph,Sl]),_=new Set([Gn,Pi,qo,Zo,Ah,Ch]),M=new Uint32Array(4),E=new Int32Array(4),w=new F;let I=null,C=null;const O=[],T=[];let P=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let D=!1,H=null;this._outputColorSpace=ei;let K=0,ie=0,G=null,Z=-1,j=null;const z=new Lt,X=new Lt;let Y=null;const oe=new Je(0);let pe=0,Ie=t.width,rt=t.height,Qe=1,ae=null,Re=null;const we=new Lt(0,0,Ie,rt),$e=new Lt(0,0,Ie,rt);let Ke=!1;const Pe=new ta;let gt=!1,Ye=!1;const ve=new _t,be=new F,xe=new Lt,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ue=!1;function ct(){return G===null?Qe:1}let k=n;function pt(L,J){return t.getContext(L,J)}try{const L={alpha:!0,depth:i,stencil:s,antialias:c,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xl}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",nt,!1),t.addEventListener("webglcontextcreationerror",dt,!1),k===null){const J="webgl2";if(k=pt(J,L),k===null)throw pt(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw ot("WebGLRenderer: "+L.message),L}let tt,ut,Me,Pt,N,R,$,de,ye,Ce,Le,ce,ge,Ve,V,ee,ue,He,st,St,W,De,fe;function Be(){tt=new TA(k),tt.init(),W=new xy(k,tt),ut=new _A(k,tt,e,W),Me=new mR(k,tt),ut.reversedDepthBuffer&&m&&Me.buffers.depth.setReversed(!0),Pt=new RA(k),N=new tR,R=new gR(k,tt,Me,N,ut,W,Pt),$=new wA(U),de=new DE(k),De=new gA(k,de),ye=new AA(k,de,Pt,De),Ce=new IA(k,ye,de,De,Pt),He=new PA(k,ut,R),V=new xA(N),Le=new eR(U,$,tt,ut,De,V),ce=new MR(U,N),ge=new iR,Ve=new cR(tt),ue=new mA(U,$,Me,Ce,x,u),ee=new pR(U,Ce,ut),fe=new bR(k,Pt,ut,Me),st=new vA(k,tt,Pt),St=new CA(k,tt,Pt),Pt.programs=Le.programs,U.capabilities=ut,U.extensions=tt,U.properties=N,U.renderLists=ge,U.shadowMap=ee,U.state=Me,U.info=Pt}Be(),b!==Gn&&(P=new DA(b,t.width,t.height,i,s));const Te=new yR(U,k);this.xr=Te,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const L=tt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=tt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return Qe},this.setPixelRatio=function(L){L!==void 0&&(Qe=L,this.setSize(Ie,rt,!1))},this.getSize=function(L){return L.set(Ie,rt)},this.setSize=function(L,J,se=!0){if(Te.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}Ie=L,rt=J,t.width=Math.floor(L*Qe),t.height=Math.floor(J*Qe),se===!0&&(t.style.width=L+"px",t.style.height=J+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,L,J)},this.getDrawingBufferSize=function(L){return L.set(Ie*Qe,rt*Qe).floor()},this.setDrawingBufferSize=function(L,J,se){Ie=L,rt=J,Qe=se,t.width=Math.floor(L*se),t.height=Math.floor(J*se),this.setViewport(0,0,L,J)},this.setEffects=function(L){if(b===Gn){ot("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let J=0;J<L.length;J++)if(L[J].isOutputPass===!0){ze("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(z)},this.getViewport=function(L){return L.copy(we)},this.setViewport=function(L,J,se,ne){L.isVector4?we.set(L.x,L.y,L.z,L.w):we.set(L,J,se,ne),Me.viewport(z.copy(we).multiplyScalar(Qe).round())},this.getScissor=function(L){return L.copy($e)},this.setScissor=function(L,J,se,ne){L.isVector4?$e.set(L.x,L.y,L.z,L.w):$e.set(L,J,se,ne),Me.scissor(X.copy($e).multiplyScalar(Qe).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(L){Me.setScissorTest(Ke=L)},this.setOpaqueSort=function(L){ae=L},this.setTransparentSort=function(L){Re=L},this.getClearColor=function(L){return L.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor(...arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha(...arguments)},this.clear=function(L=!0,J=!0,se=!0){let ne=0;if(L){let te=!1;if(G!==null){const Ee=G.texture.format;te=y.has(Ee)}if(te){const Ee=G.texture.type,Ae=_.has(Ee),Fe=ue.getClearColor(),We=ue.getClearAlpha(),qe=Fe.r,mt=Fe.g,xt=Fe.b;Ae?(M[0]=qe,M[1]=mt,M[2]=xt,M[3]=We,k.clearBufferuiv(k.COLOR,0,M)):(E[0]=qe,E[1]=mt,E[2]=xt,E[3]=We,k.clearBufferiv(k.COLOR,0,E))}else ne|=k.COLOR_BUFFER_BIT}J&&(ne|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(ne|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&k.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),H=L},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",dt,!1),ue.dispose(),ge.dispose(),Ve.dispose(),N.dispose(),$.dispose(),Ce.dispose(),De.dispose(),fe.dispose(),Le.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Or),Te.removeEventListener("sessionend",Il),gr.stop()};function _e(L){L.preventDefault(),hl("WebGLRenderer: Context Lost."),D=!0}function nt(){hl("WebGLRenderer: Context Restored."),D=!1;const L=Pt.autoReset,J=ee.enabled,se=ee.autoUpdate,ne=ee.needsUpdate,te=ee.type;Be(),Pt.autoReset=L,ee.enabled=J,ee.autoUpdate=se,ee.needsUpdate=ne,ee.type=te}function dt(L){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Wt(L){const J=L.target;J.removeEventListener("dispose",Wt),Vt(J)}function Vt(L){Li(L),N.remove(L)}function Li(L){const J=N.get(L).programs;J!==void 0&&(J.forEach(function(se){Le.releaseProgram(se)}),L.isShaderMaterial&&Le.releaseShaderCache(L))}this.renderBufferDirect=function(L,J,se,ne,te,Ee){J===null&&(J=Oe);const Ae=te.isMesh&&te.matrixWorld.determinant()<0,Fe=lf(L,J,se,ne,te);Me.setMaterial(ne,Ae);let We=se.index,qe=1;if(ne.wireframe===!0){if(We=ye.getWireframeAttribute(se),We===void 0)return;qe=2}const mt=se.drawRange,xt=se.attributes.position;let je=mt.start*qe,Dt=(mt.start+mt.count)*qe;Ee!==null&&(je=Math.max(je,Ee.start*qe),Dt=Math.min(Dt,(Ee.start+Ee.count)*qe)),We!==null?(je=Math.max(je,0),Dt=Math.min(Dt,We.count)):xt!=null&&(je=Math.max(je,0),Dt=Math.min(Dt,xt.count));const Jt=Dt-je;if(Jt<0||Jt===1/0)return;De.setup(te,ne,Fe,se,We);let qt,Ot=st;if(We!==null&&(qt=de.get(We),Ot=St,Ot.setIndex(qt)),te.isMesh)ne.wireframe===!0?(Me.setLineWidth(ne.wireframeLinewidth*ct()),Ot.setMode(k.LINES)):Ot.setMode(k.TRIANGLES);else if(te.isLine){let dn=ne.linewidth;dn===void 0&&(dn=1),Me.setLineWidth(dn*ct()),te.isLineSegments?Ot.setMode(k.LINES):te.isLineLoop?Ot.setMode(k.LINE_LOOP):Ot.setMode(k.LINE_STRIP)}else te.isPoints?Ot.setMode(k.POINTS):te.isSprite&&Ot.setMode(k.TRIANGLES);if(te.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))Ot.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const dn=te._multiDrawStarts,ke=te._multiDrawCounts,Fn=te._multiDrawCount,It=We?de.get(We).bytesPerElement:1,Zn=N.get(ne).currentProgram.getUniforms();for(let Bn=0;Bn<Fn;Bn++)Zn.setValue(k,"_gl_DrawID",Bn),Ot.render(dn[Bn]/It,ke[Bn])}else if(te.isInstancedMesh)Ot.renderInstances(je,Jt,te.count);else if(se.isInstancedBufferGeometry){const dn=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,ke=Math.min(se.instanceCount,dn);Ot.renderInstances(je,Jt,ke)}else Ot.render(je,Jt)};function ri(L,J,se){L.transparent===!0&&L.side===ki&&L.forceSinglePass===!1?(L.side=Yn,L.needsUpdate=!0,us(L,J,se),L.side=Dr,L.needsUpdate=!0,us(L,J,se),L.side=ki):us(L,J,se)}this.compile=function(L,J,se=null){se===null&&(se=L),C=Ve.get(se),C.init(J),T.push(C),se.traverseVisible(function(te){te.isLight&&te.layers.test(J.layers)&&(C.pushLight(te),te.castShadow&&C.pushShadow(te))}),L!==se&&L.traverseVisible(function(te){te.isLight&&te.layers.test(J.layers)&&(C.pushLight(te),te.castShadow&&C.pushShadow(te))}),C.setupLights();const ne=new Set;return L.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const Ee=te.material;if(Ee)if(Array.isArray(Ee))for(let Ae=0;Ae<Ee.length;Ae++){const Fe=Ee[Ae];ri(Fe,se,te),ne.add(Fe)}else ri(Ee,se,te),ne.add(Ee)}),C=T.pop(),ne},this.compileAsync=function(L,J,se=null){const ne=this.compile(L,J,se);return new Promise(te=>{function Ee(){if(ne.forEach(function(Ae){N.get(Ae).currentProgram.isReady()&&ne.delete(Ae)}),ne.size===0){te(L);return}setTimeout(Ee,10)}tt.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let cs=null;function of(L){cs&&cs(L)}function Or(){gr.stop()}function Il(){gr.start()}const gr=new dy;gr.setAnimationLoop(of),typeof self<"u"&&gr.setContext(self),this.setAnimationLoop=function(L){cs=L,Te.setAnimationLoop(L),L===null?gr.stop():gr.start()},Te.addEventListener("sessionstart",Or),Te.addEventListener("sessionend",Il),this.render=function(L,J){if(J!==void 0&&J.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;H!==null&&H.renderStart(L,J);const se=Te.enabled===!0&&Te.isPresenting===!0,ne=P!==null&&(G===null||se)&&P.begin(U,G);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(J),J=Te.getCamera()),L.isScene===!0&&L.onBeforeRender(U,L,J,G),C=Ve.get(L,T.length),C.init(J),C.state.textureUnits=R.getTextureUnits(),T.push(C),ve.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Pe.setFromProjectionMatrix(ve,fi,J.reversedDepth),Ye=this.localClippingEnabled,gt=V.init(this.clippingPlanes,Ye),I=ge.get(L,O.length),I.init(),O.push(I),Te.enabled===!0&&Te.isPresenting===!0){const Ae=U.xr.getDepthSensingMesh();Ae!==null&&sa(Ae,J,-1/0,U.sortObjects)}sa(L,J,0,U.sortObjects),I.finish(),U.sortObjects===!0&&I.sort(ae,Re),Ue=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,Ue&&ue.addToRenderList(I,L),this.info.render.frame++,gt===!0&&V.beginShadows();const te=C.state.shadowsArray;if(ee.render(te,L,J),gt===!0&&V.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&P.hasRenderPass())===!1){const Ae=I.opaque,Fe=I.transmissive;if(C.setupLights(),J.isArrayCamera){const We=J.cameras;if(Fe.length>0)for(let qe=0,mt=We.length;qe<mt;qe++){const xt=We[qe];Dl(Ae,Fe,L,xt)}Ue&&ue.render(L);for(let qe=0,mt=We.length;qe<mt;qe++){const xt=We[qe];Ll(I,L,xt,xt.viewport)}}else Fe.length>0&&Dl(Ae,Fe,L,J),Ue&&ue.render(L),Ll(I,L,J)}G!==null&&ie===0&&(R.updateMultisampleRenderTarget(G),R.updateRenderTargetMipmap(G)),ne&&P.end(U),L.isScene===!0&&L.onAfterRender(U,L,J),De.resetDefaultState(),Z=-1,j=null,T.pop(),T.length>0?(C=T[T.length-1],R.setTextureUnits(C.state.textureUnits),gt===!0&&V.setGlobalState(U.clippingPlanes,C.state.camera)):C=null,O.pop(),O.length>0?I=O[O.length-1]:I=null,H!==null&&H.renderEnd()};function sa(L,J,se,ne){if(L.visible===!1)return;if(L.layers.test(J.layers)){if(L.isGroup)se=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(J);else if(L.isLightProbeGrid)C.pushLightProbeGrid(L);else if(L.isLight)C.pushLight(L),L.castShadow&&C.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||Pe.intersectsSprite(L)){ne&&xe.setFromMatrixPosition(L.matrixWorld).applyMatrix4(ve);const Ae=Ce.update(L),Fe=L.material;Fe.visible&&I.push(L,Ae,Fe,se,xe.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||Pe.intersectsObject(L))){const Ae=Ce.update(L),Fe=L.material;if(ne&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),xe.copy(L.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),xe.copy(Ae.boundingSphere.center)),xe.applyMatrix4(L.matrixWorld).applyMatrix4(ve)),Array.isArray(Fe)){const We=Ae.groups;for(let qe=0,mt=We.length;qe<mt;qe++){const xt=We[qe],je=Fe[xt.materialIndex];je&&je.visible&&I.push(L,Ae,je,se,xe.z,xt)}}else Fe.visible&&I.push(L,Ae,Fe,se,xe.z,null)}}const Ee=L.children;for(let Ae=0,Fe=Ee.length;Ae<Fe;Ae++)sa(Ee[Ae],J,se,ne)}function Ll(L,J,se,ne){const{opaque:te,transmissive:Ee,transparent:Ae}=L;C.setupLightsView(se),gt===!0&&V.setGlobalState(U.clippingPlanes,se),ne&&Me.viewport(z.copy(ne)),te.length>0&&no(te,J,se),Ee.length>0&&no(Ee,J,se),Ae.length>0&&no(Ae,J,se),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Dl(L,J,se,ne){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[ne.id]===void 0){const je=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[ne.id]=new mi(1,1,{generateMipmaps:!0,type:je?dr:Gn,minFilter:cr,samples:Math.max(4,ut.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}const Ee=C.state.transmissionRenderTarget[ne.id],Ae=ne.viewport||z;Ee.setSize(Ae.z*U.transmissionResolutionScale,Ae.w*U.transmissionResolutionScale);const Fe=U.getRenderTarget(),We=U.getActiveCubeFace(),qe=U.getActiveMipmapLevel();U.setRenderTarget(Ee),U.getClearColor(oe),pe=U.getClearAlpha(),pe<1&&U.setClearColor(16777215,.5),U.clear(),Ue&&ue.render(se);const mt=U.toneMapping;U.toneMapping=Ri;const xt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),C.setupLightsView(ne),gt===!0&&V.setGlobalState(U.clippingPlanes,ne),no(L,se,ne),R.updateMultisampleRenderTarget(Ee),R.updateRenderTargetMipmap(Ee),tt.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Dt=0,Jt=J.length;Dt<Jt;Dt++){const qt=J[Dt],{object:Ot,geometry:dn,material:ke,group:Fn}=qt;if(ke.side===ki&&Ot.layers.test(ne.layers)){const It=ke.side;ke.side=Yn,ke.needsUpdate=!0,Nl(Ot,se,ne,dn,ke,Fn),ke.side=It,ke.needsUpdate=!0,je=!0}}je===!0&&(R.updateMultisampleRenderTarget(Ee),R.updateRenderTargetMipmap(Ee))}U.setRenderTarget(Fe,We,qe),U.setClearColor(oe,pe),xt!==void 0&&(ne.viewport=xt),U.toneMapping=mt}function no(L,J,se){const ne=J.isScene===!0?J.overrideMaterial:null;for(let te=0,Ee=L.length;te<Ee;te++){const Ae=L[te],{object:Fe,geometry:We,group:qe}=Ae;let mt=Ae.material;mt.allowOverride===!0&&ne!==null&&(mt=ne),Fe.layers.test(se.layers)&&Nl(Fe,J,se,We,mt,qe)}}function Nl(L,J,se,ne,te,Ee){L.onBeforeRender(U,J,se,ne,te,Ee),L.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),te.onBeforeRender(U,J,se,ne,L,Ee),te.transparent===!0&&te.side===ki&&te.forceSinglePass===!1?(te.side=Yn,te.needsUpdate=!0,U.renderBufferDirect(se,J,ne,te,L,Ee),te.side=Dr,te.needsUpdate=!0,U.renderBufferDirect(se,J,ne,te,L,Ee),te.side=ki):U.renderBufferDirect(se,J,ne,te,L,Ee),L.onAfterRender(U,J,se,ne,te,Ee)}function us(L,J,se){J.isScene!==!0&&(J=Oe);const ne=N.get(L),te=C.state.lights,Ee=C.state.shadowsArray,Ae=te.state.version,Fe=Le.getParameters(L,te.state,Ee,J,se,C.state.lightProbeGridArray),We=Le.getProgramCacheKey(Fe);let qe=ne.programs;ne.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?J.environment:null,ne.fog=J.fog;const mt=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;ne.envMap=$.get(L.envMap||ne.environment,mt),ne.envMapRotation=ne.environment!==null&&L.envMap===null?J.environmentRotation:L.envMapRotation,qe===void 0&&(L.addEventListener("dispose",Wt),qe=new Map,ne.programs=qe);let xt=qe.get(We);if(xt!==void 0){if(ne.currentProgram===xt&&ne.lightsStateVersion===Ae)return Ol(L,Fe),xt}else Fe.uniforms=Le.getUniforms(L),H!==null&&L.isNodeMaterial&&H.build(L,se,Fe),L.onBeforeCompile(Fe,U),xt=Le.acquireProgram(Fe,We),qe.set(We,xt),ne.uniforms=Fe.uniforms;const je=ne.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(je.clippingPlanes=V.uniform),Ol(L,Fe),ne.needsLights=uf(L),ne.lightsStateVersion=Ae,ne.needsLights&&(je.ambientLightColor.value=te.state.ambient,je.lightProbe.value=te.state.probe,je.directionalLights.value=te.state.directional,je.directionalLightShadows.value=te.state.directionalShadow,je.spotLights.value=te.state.spot,je.spotLightShadows.value=te.state.spotShadow,je.rectAreaLights.value=te.state.rectArea,je.ltc_1.value=te.state.rectAreaLTC1,je.ltc_2.value=te.state.rectAreaLTC2,je.pointLights.value=te.state.point,je.pointLightShadows.value=te.state.pointShadow,je.hemisphereLights.value=te.state.hemi,je.directionalShadowMatrix.value=te.state.directionalShadowMatrix,je.spotLightMatrix.value=te.state.spotLightMatrix,je.spotLightMap.value=te.state.spotLightMap,je.pointShadowMatrix.value=te.state.pointShadowMatrix),ne.lightProbeGrid=C.state.lightProbeGridArray.length>0,ne.currentProgram=xt,ne.uniformsList=null,xt}function Ul(L){if(L.uniformsList===null){const J=L.currentProgram.getUniforms();L.uniformsList=Tu.seqWithValue(J.seq,L.uniforms)}return L.uniformsList}function Ol(L,J){const se=N.get(L);se.outputColorSpace=J.outputColorSpace,se.batching=J.batching,se.batchingColor=J.batchingColor,se.instancing=J.instancing,se.instancingColor=J.instancingColor,se.instancingMorph=J.instancingMorph,se.skinning=J.skinning,se.morphTargets=J.morphTargets,se.morphNormals=J.morphNormals,se.morphColors=J.morphColors,se.morphTargetsCount=J.morphTargetsCount,se.numClippingPlanes=J.numClippingPlanes,se.numIntersection=J.numClipIntersection,se.vertexAlphas=J.vertexAlphas,se.vertexTangents=J.vertexTangents,se.toneMapping=J.toneMapping}function af(L,J){if(L.length===0)return null;if(L.length===1)return L[0].texture!==null?L[0]:null;w.setFromMatrixPosition(J.matrixWorld);for(let se=0,ne=L.length;se<ne;se++){const te=L[se];if(te.texture!==null&&te.boundingBox.containsPoint(w))return te}return null}function lf(L,J,se,ne,te){J.isScene!==!0&&(J=Oe),R.resetTextureUnits();const Ee=J.fog,Ae=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?J.environment:null,Fe=G===null?U.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Rt.workingColorSpace,We=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,qe=$.get(ne.envMap||Ae,We),mt=ne.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,xt=!!se.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),je=!!se.morphAttributes.position,Dt=!!se.morphAttributes.normal,Jt=!!se.morphAttributes.color;let qt=Ri;ne.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(qt=U.toneMapping);const Ot=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,dn=Ot!==void 0?Ot.length:0,ke=N.get(ne),Fn=C.state.lights;if(gt===!0&&(Ye===!0||L!==j)){const Ht=L===j&&ne.id===Z;V.setState(ne,L,Ht)}let It=!1;ne.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Fn.state.version||ke.outputColorSpace!==Fe||te.isBatchedMesh&&ke.batching===!1||!te.isBatchedMesh&&ke.batching===!0||te.isBatchedMesh&&ke.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&ke.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&ke.instancing===!1||!te.isInstancedMesh&&ke.instancing===!0||te.isSkinnedMesh&&ke.skinning===!1||!te.isSkinnedMesh&&ke.skinning===!0||te.isInstancedMesh&&ke.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&ke.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&ke.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&ke.instancingMorph===!1&&te.morphTexture!==null||ke.envMap!==qe||ne.fog===!0&&ke.fog!==Ee||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==V.numPlanes||ke.numIntersection!==V.numIntersection)||ke.vertexAlphas!==mt||ke.vertexTangents!==xt||ke.morphTargets!==je||ke.morphNormals!==Dt||ke.morphColors!==Jt||ke.toneMapping!==qt||ke.morphTargetsCount!==dn||!!ke.lightProbeGrid!=C.state.lightProbeGridArray.length>0)&&(It=!0):(It=!0,ke.__version=ne.version);let Zn=ke.currentProgram;It===!0&&(Zn=us(ne,J,te),H&&ne.isNodeMaterial&&H.onUpdateProgram(ne,Zn,ke));let Bn=!1,si=!1,vi=!1;const Ft=Zn.getUniforms(),Qt=ke.uniforms;if(Me.useProgram(Zn.program)&&(Bn=!0,si=!0,vi=!0),ne.id!==Z&&(Z=ne.id,si=!0),ke.needsLights){const Ht=af(C.state.lightProbeGridArray,te);ke.lightProbeGrid!==Ht&&(ke.lightProbeGrid=Ht,si=!0)}if(Bn||j!==L){Me.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),Ft.setValue(k,"projectionMatrix",L.projectionMatrix),Ft.setValue(k,"viewMatrix",L.matrixWorldInverse);const _i=Ft.map.cameraPosition;_i!==void 0&&_i.setValue(k,be.setFromMatrixPosition(L.matrixWorld)),ut.logarithmicDepthBuffer&&Ft.setValue(k,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Ft.setValue(k,"isOrthographic",L.isOrthographicCamera===!0),j!==L&&(j=L,si=!0,vi=!0)}if(ke.needsLights&&(Fn.state.directionalShadowMap.length>0&&Ft.setValue(k,"directionalShadowMap",Fn.state.directionalShadowMap,R),Fn.state.spotShadowMap.length>0&&Ft.setValue(k,"spotShadowMap",Fn.state.spotShadowMap,R),Fn.state.pointShadowMap.length>0&&Ft.setValue(k,"pointShadowMap",Fn.state.pointShadowMap,R)),te.isSkinnedMesh){Ft.setOptional(k,te,"bindMatrix"),Ft.setOptional(k,te,"bindMatrixInverse");const Ht=te.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),Ft.setValue(k,"boneTexture",Ht.boneTexture,R))}te.isBatchedMesh&&(Ft.setOptional(k,te,"batchingTexture"),Ft.setValue(k,"batchingTexture",te._matricesTexture,R),Ft.setOptional(k,te,"batchingIdTexture"),Ft.setValue(k,"batchingIdTexture",te._indirectTexture,R),Ft.setOptional(k,te,"batchingColorTexture"),te._colorsTexture!==null&&Ft.setValue(k,"batchingColorTexture",te._colorsTexture,R));const qi=se.morphAttributes;if((qi.position!==void 0||qi.normal!==void 0||qi.color!==void 0)&&He.update(te,se,Zn),(si||ke.receiveShadow!==te.receiveShadow)&&(ke.receiveShadow=te.receiveShadow,Ft.setValue(k,"receiveShadow",te.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&J.environment!==null&&(Qt.envMapIntensity.value=J.environmentIntensity),Qt.dfgLUT!==void 0&&(Qt.dfgLUT.value=wR()),si){if(Ft.setValue(k,"toneMappingExposure",U.toneMappingExposure),ke.needsLights&&cf(Qt,vi),Ee&&ne.fog===!0&&ce.refreshFogUniforms(Qt,Ee),ce.refreshMaterialUniforms(Qt,ne,Qe,rt,C.state.transmissionRenderTarget[L.id]),ke.needsLights&&ke.lightProbeGrid){const Ht=ke.lightProbeGrid;Qt.probesSH.value=Ht.texture,Qt.probesMin.value.copy(Ht.boundingBox.min),Qt.probesMax.value.copy(Ht.boundingBox.max),Qt.probesResolution.value.copy(Ht.resolution)}Tu.upload(k,Ul(ke),Qt,R)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Tu.upload(k,Ul(ke),Qt,R),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Ft.setValue(k,"center",te.center),Ft.setValue(k,"modelViewMatrix",te.modelViewMatrix),Ft.setValue(k,"normalMatrix",te.normalMatrix),Ft.setValue(k,"modelMatrix",te.matrixWorld),ne.uniformsGroups!==void 0){const Ht=ne.uniformsGroups;for(let _i=0,xi=Ht.length;_i<xi;_i++){const Fl=Ht[_i];fe.update(Fl,Zn),fe.bind(Fl,Zn)}}return Zn}function cf(L,J){L.ambientLightColor.needsUpdate=J,L.lightProbe.needsUpdate=J,L.directionalLights.needsUpdate=J,L.directionalLightShadows.needsUpdate=J,L.pointLights.needsUpdate=J,L.pointLightShadows.needsUpdate=J,L.spotLights.needsUpdate=J,L.spotLightShadows.needsUpdate=J,L.rectAreaLights.needsUpdate=J,L.hemisphereLights.needsUpdate=J}function uf(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return ie},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(L,J,se){const ne=N.get(L);ne.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),N.get(L.texture).__webglTexture=J,N.get(L.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:se,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,J){const se=N.get(L);se.__webglFramebuffer=J,se.__useDefaultFramebuffer=J===void 0};const oa=k.createFramebuffer();this.setRenderTarget=function(L,J=0,se=0){G=L,K=J,ie=se;let ne=null,te=!1,Ee=!1;if(L){const Fe=N.get(L);if(Fe.__useDefaultFramebuffer!==void 0){Me.bindFramebuffer(k.FRAMEBUFFER,Fe.__webglFramebuffer),z.copy(L.viewport),X.copy(L.scissor),Y=L.scissorTest,Me.viewport(z),Me.scissor(X),Me.setScissorTest(Y),Z=-1;return}else if(Fe.__webglFramebuffer===void 0)R.setupRenderTarget(L);else if(Fe.__hasExternalTextures)R.rebindTextures(L,N.get(L.texture).__webglTexture,N.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const mt=L.depthTexture;if(Fe.__boundDepthTexture!==mt){if(mt!==null&&N.has(mt)&&(L.width!==mt.image.width||L.height!==mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(L)}}const We=L.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ee=!0);const qe=N.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(qe[J])?ne=qe[J][se]:ne=qe[J],te=!0):L.samples>0&&R.useMultisampledRTT(L)===!1?ne=N.get(L).__webglMultisampledFramebuffer:Array.isArray(qe)?ne=qe[se]:ne=qe,z.copy(L.viewport),X.copy(L.scissor),Y=L.scissorTest}else z.copy(we).multiplyScalar(Qe).floor(),X.copy($e).multiplyScalar(Qe).floor(),Y=Ke;if(se!==0&&(ne=oa),Me.bindFramebuffer(k.FRAMEBUFFER,ne)&&Me.drawBuffers(L,ne),Me.viewport(z),Me.scissor(X),Me.setScissorTest(Y),te){const Fe=N.get(L.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+J,Fe.__webglTexture,se)}else if(Ee){const Fe=J;for(let We=0;We<L.textures.length;We++){const qe=N.get(L.textures[We]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+We,qe.__webglTexture,se,Fe)}}else if(L!==null&&se!==0){const Fe=N.get(L.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Fe.__webglTexture,se)}Z=-1},this.readRenderTargetPixels=function(L,J,se,ne,te,Ee,Ae,Fe=0){if(!(L&&L.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=N.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ae!==void 0&&(We=We[Ae]),We){Me.bindFramebuffer(k.FRAMEBUFFER,We);try{const qe=L.textures[Fe],mt=qe.format,xt=qe.type;if(L.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Fe),!ut.textureFormatReadable(mt)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(xt)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=L.width-ne&&se>=0&&se<=L.height-te&&k.readPixels(J,se,ne,te,W.convert(mt),W.convert(xt),Ee)}finally{const qe=G!==null?N.get(G).__webglFramebuffer:null;Me.bindFramebuffer(k.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(L,J,se,ne,te,Ee,Ae,Fe=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=N.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ae!==void 0&&(We=We[Ae]),We)if(J>=0&&J<=L.width-ne&&se>=0&&se<=L.height-te){Me.bindFramebuffer(k.FRAMEBUFFER,We);const qe=L.textures[Fe],mt=qe.format,xt=qe.type;if(L.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Fe),!ut.textureFormatReadable(mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,je),k.bufferData(k.PIXEL_PACK_BUFFER,Ee.byteLength,k.STREAM_READ),k.readPixels(J,se,ne,te,W.convert(mt),W.convert(xt),0);const Dt=G!==null?N.get(G).__webglFramebuffer:null;Me.bindFramebuffer(k.FRAMEBUFFER,Dt);const Jt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await OM(k,Jt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,je),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ee),k.deleteBuffer(je),k.deleteSync(Jt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,J=null,se=0){const ne=Math.pow(2,-se),te=Math.floor(L.image.width*ne),Ee=Math.floor(L.image.height*ne),Ae=J!==null?J.x:0,Fe=J!==null?J.y:0;R.setTexture2D(L,0),k.copyTexSubImage2D(k.TEXTURE_2D,se,0,0,Ae,Fe,te,Ee),Me.unbindTexture()};const hs=k.createFramebuffer(),aa=k.createFramebuffer();this.copyTextureToTexture=function(L,J,se=null,ne=null,te=0,Ee=0){let Ae,Fe,We,qe,mt,xt,je,Dt,Jt;const qt=L.isCompressedTexture?L.mipmaps[Ee]:L.image;if(se!==null)Ae=se.max.x-se.min.x,Fe=se.max.y-se.min.y,We=se.isBox3?se.max.z-se.min.z:1,qe=se.min.x,mt=se.min.y,xt=se.isBox3?se.min.z:0;else{const Qt=Math.pow(2,-te);Ae=Math.floor(qt.width*Qt),Fe=Math.floor(qt.height*Qt),L.isDataArrayTexture?We=qt.depth:L.isData3DTexture?We=Math.floor(qt.depth*Qt):We=1,qe=0,mt=0,xt=0}ne!==null?(je=ne.x,Dt=ne.y,Jt=ne.z):(je=0,Dt=0,Jt=0);const Ot=W.convert(J.format),dn=W.convert(J.type);let ke;J.isData3DTexture?(R.setTexture3D(J,0),ke=k.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(R.setTexture2DArray(J,0),ke=k.TEXTURE_2D_ARRAY):(R.setTexture2D(J,0),ke=k.TEXTURE_2D),Me.activeTexture(k.TEXTURE0),Me.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,J.flipY),Me.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),Me.pixelStorei(k.UNPACK_ALIGNMENT,J.unpackAlignment);const Fn=Me.getParameter(k.UNPACK_ROW_LENGTH),It=Me.getParameter(k.UNPACK_IMAGE_HEIGHT),Zn=Me.getParameter(k.UNPACK_SKIP_PIXELS),Bn=Me.getParameter(k.UNPACK_SKIP_ROWS),si=Me.getParameter(k.UNPACK_SKIP_IMAGES);Me.pixelStorei(k.UNPACK_ROW_LENGTH,qt.width),Me.pixelStorei(k.UNPACK_IMAGE_HEIGHT,qt.height),Me.pixelStorei(k.UNPACK_SKIP_PIXELS,qe),Me.pixelStorei(k.UNPACK_SKIP_ROWS,mt),Me.pixelStorei(k.UNPACK_SKIP_IMAGES,xt);const vi=L.isDataArrayTexture||L.isData3DTexture,Ft=J.isDataArrayTexture||J.isData3DTexture;if(L.isDepthTexture){const Qt=N.get(L),qi=N.get(J),Ht=N.get(Qt.__renderTarget),_i=N.get(qi.__renderTarget);Me.bindFramebuffer(k.READ_FRAMEBUFFER,Ht.__webglFramebuffer),Me.bindFramebuffer(k.DRAW_FRAMEBUFFER,_i.__webglFramebuffer);for(let xi=0;xi<We;xi++)vi&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,N.get(L).__webglTexture,te,xt+xi),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,N.get(J).__webglTexture,Ee,Jt+xi)),k.blitFramebuffer(qe,mt,Ae,Fe,je,Dt,Ae,Fe,k.DEPTH_BUFFER_BIT,k.NEAREST);Me.bindFramebuffer(k.READ_FRAMEBUFFER,null),Me.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(te!==0||L.isRenderTargetTexture||N.has(L)){const Qt=N.get(L),qi=N.get(J);Me.bindFramebuffer(k.READ_FRAMEBUFFER,hs),Me.bindFramebuffer(k.DRAW_FRAMEBUFFER,aa);for(let Ht=0;Ht<We;Ht++)vi?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Qt.__webglTexture,te,xt+Ht):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Qt.__webglTexture,te),Ft?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,qi.__webglTexture,Ee,Jt+Ht):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,qi.__webglTexture,Ee),te!==0?k.blitFramebuffer(qe,mt,Ae,Fe,je,Dt,Ae,Fe,k.COLOR_BUFFER_BIT,k.NEAREST):Ft?k.copyTexSubImage3D(ke,Ee,je,Dt,Jt+Ht,qe,mt,Ae,Fe):k.copyTexSubImage2D(ke,Ee,je,Dt,qe,mt,Ae,Fe);Me.bindFramebuffer(k.READ_FRAMEBUFFER,null),Me.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Ft?L.isDataTexture||L.isData3DTexture?k.texSubImage3D(ke,Ee,je,Dt,Jt,Ae,Fe,We,Ot,dn,qt.data):J.isCompressedArrayTexture?k.compressedTexSubImage3D(ke,Ee,je,Dt,Jt,Ae,Fe,We,Ot,qt.data):k.texSubImage3D(ke,Ee,je,Dt,Jt,Ae,Fe,We,Ot,dn,qt):L.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ee,je,Dt,Ae,Fe,Ot,dn,qt.data):L.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ee,je,Dt,qt.width,qt.height,Ot,qt.data):k.texSubImage2D(k.TEXTURE_2D,Ee,je,Dt,Ae,Fe,Ot,dn,qt);Me.pixelStorei(k.UNPACK_ROW_LENGTH,Fn),Me.pixelStorei(k.UNPACK_IMAGE_HEIGHT,It),Me.pixelStorei(k.UNPACK_SKIP_PIXELS,Zn),Me.pixelStorei(k.UNPACK_SKIP_ROWS,Bn),Me.pixelStorei(k.UNPACK_SKIP_IMAGES,si),Ee===0&&J.generateMipmaps&&k.generateMipmap(ke),Me.unbindTexture()},this.initRenderTarget=function(L){N.get(L).__webglFramebuffer===void 0&&R.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?R.setTextureCube(L,0):L.isData3DTexture?R.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?R.setTexture2DArray(L,0):R.setTexture2D(L,0),Me.unbindTexture()},this.resetState=function(){K=0,ie=0,G=null,Me.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}}const TR=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Eh,AddEquation:Qr,AddOperation:J_,AdditiveAnimationBlendMode:Qp,AdditiveBlending:vp,AgXToneMapping:Gp,AlphaFormat:Jp,AlwaysCompare:lx,AlwaysDepth:Iu,AlwaysStencilFunc:Mp,AmbientLight:$x,AnimationAction:ly,AnimationClip:vl,AnimationLoader:Ab,AnimationMixer:iE,AnimationObjectGroup:tE,AnimationUtils:bb,ArcCurve:wx,ArrayCamera:ry,ArrowHelper:EE,AttachedBindMode:yp,Audio:oy,AudioAnalyser:Xb,AudioContext:Am,AudioListener:Hb,AudioLoader:Bb,AxesHelper:wE,BackSide:Yn,BasicDepthPacking:tx,BasicShadowMap:P_,BatchedMesh:yx,BezierInterpolant:Yx,Bone:sm,BooleanKeyframeTrack:$s,Box2:cE,Box3:mn,Box3Helper:ME,BoxGeometry:Qs,BoxHelper:SE,BufferAttribute:Xt,BufferGeometry:Mt,BufferGeometryLoader:ny,ByteType:Yp,Cache:ur,Camera:Cl,CameraHelper:yE,CanvasTexture:H1,CapsuleGeometry:Gh,CatmullRomCurve3:Tx,CineonToneMapping:Vp,CircleGeometry:Wh,ClampToEdgeWrapping:ni,Clock:uy,Color:Je,ColorKeyframeTrack:Mm,ColorManagement:Rt,Compatibility:IM,CompressedArrayTexture:k1,CompressedCubeTexture:V1,CompressedTexture:Hh,CompressedTextureLoader:Cb,ConeGeometry:El,ConstantAlphaFactor:q_,ConstantColorFactor:X_,Controls:AE,CubeCamera:iy,CubeDepthTexture:Ex,CubeReflectionMapping:fr,CubeRefractionMapping:ns,CubeTexture:Ml,CubeTextureLoader:Rb,CubeUVReflectionMapping:ea,CubicBezierCurve:um,CubicBezierCurve3:Ax,CubicInterpolant:Wx,CullFaceBack:gp,CullFaceFront:R_,CullFaceFrontBack:GS,CullFaceNone:C_,Curve:Yi,CurvePath:Rx,CustomBlending:I_,CustomToneMapping:Hp,CylinderGeometry:bl,Cylindrical:lE,Data3DTexture:Oh,DataArrayTexture:Uh,DataTexture:Hi,DataTextureLoader:Pb,DataUtils:d1,DecrementStencilOp:lM,DecrementWrapStencilOp:uM,DefaultLoadingManager:Zx,DepthFormat:pr,DepthStencilFormat:$r,DepthTexture:Zs,DetachedBindMode:K_,DirectionalLight:Qx,DirectionalLightHelper:xE,DiscreteInterpolant:Xx,DodecahedronGeometry:Xh,DoubleSide:ki,DstAlphaFactor:k_,DstColorFactor:H_,DynamicCopyUsage:wM,DynamicDrawUsage:xM,DynamicReadUsage:MM,EdgesGeometry:lm,EllipseCurve:Yh,EqualCompare:sx,EqualDepth:Du,EqualStencilFunc:pM,EquirectangularReflectionMapping:Xa,EquirectangularRefractionMapping:Ya,Euler:Wi,EventDispatcher:Xi,ExternalTexture:am,ExtrudeGeometry:qh,FileLoader:Ur,Float16BufferAttribute:y1,Float32BufferAttribute:et,FloatType:Xn,Fog:Bh,FogExp2:Fh,FramebufferTexture:z1,FrontSide:Dr,Frustum:ta,FrustumArray:Vh,GLBufferAttribute:aE,GLSL1:AM,GLSL3:bp,GreaterCompare:ox,GreaterDepth:Uu,GreaterEqualCompare:Nh,GreaterEqualDepth:Nu,GreaterEqualStencilFunc:_M,GreaterStencilFunc:gM,GridHelper:vE,Group:Go,HTMLTexture:G1,HalfFloatType:dr,HemisphereLight:jx,HemisphereLightHelper:gE,IcosahedronGeometry:Zh,ImageBitmapLoader:Fb,ImageLoader:_l,ImageUtils:dx,IncrementStencilOp:aM,IncrementWrapStencilOp:cM,InstancedBufferAttribute:Jo,InstancedBufferGeometry:Tm,InstancedInterleavedBuffer:yh,InstancedMesh:xx,Int16BufferAttribute:_1,Int32BufferAttribute:x1,Int8BufferAttribute:m1,IntType:Th,InterleavedBuffer:zh,InterleavedBufferAttribute:di,Interpolant:ia,InterpolateBezier:Sp,InterpolateDiscrete:sl,InterpolateLinear:dh,InterpolateSmooth:Eu,InterpolationSamplingMode:PM,InterpolationSamplingType:RM,InvertStencilOp:hM,KeepStencilOp:Us,KeyframeTrack:Ii,LOD:vx,LatheGeometry:jh,Layers:Gs,LessCompare:rx,LessDepth:Lu,LessEqualCompare:Dh,LessEqualDepth:Ys,LessEqualStencilFunc:mM,LessStencilFunc:dM,Light:ls,LightProbe:ty,Line:ss,Line3:hy,LineBasicMaterial:qn,LineCurve:hm,LineCurve3:Cx,LineDashedMaterial:Hx,LineLoop:Sx,LineSegments:mr,LinearFilter:jt,LinearInterpolant:Sm,LinearMipMapLinearFilter:ZS,LinearMipMapNearestFilter:qS,LinearMipmapLinearFilter:cr,LinearMipmapNearestFilter:qa,LinearSRGBColorSpace:al,LinearToneMapping:zp,LinearTransfer:ll,Loader:ii,LoaderUtils:Cp,LoadingManager:bm,LoopOnce:Q_,LoopPingPong:ex,LoopRepeat:$_,MOUSE:Ds,Material:On,MaterialBlending:WS,MaterialLoader:nf,MathUtils:fx,Matrix2:Ip,Matrix3:yt,Matrix4:_t,MaxEquation:U_,Mesh:cn,MeshBasicMaterial:os,MeshDepthMaterial:_m,MeshDistanceMaterial:xm,MeshLambertMaterial:kx,MeshMatcapMaterial:Vx,MeshNormalMaterial:zx,MeshPhongMaterial:Fx,MeshPhysicalMaterial:Ox,MeshStandardMaterial:vm,MeshToonMaterial:Bx,MinEquation:N_,MirroredRepeatWrapping:nl,MixOperation:j_,MultiplyBlending:xp,MultiplyOperation:yl,NearestFilter:ln,NearestMipMapLinearFilter:YS,NearestMipMapNearestFilter:XS,NearestMipmapLinearFilter:Vo,NearestMipmapNearestFilter:Xp,NeutralToneMapping:Wp,NeverCompare:ix,NeverDepth:Pu,NeverStencilFunc:fM,NoBlending:hr,NoColorSpace:Pr,NoNormalPacking:nM,NoToneMapping:Ri,NormalAnimationBlendMode:Lh,NormalBlending:Vs,NormalGAPacking:rM,NormalRGPacking:iM,NotEqualCompare:ax,NotEqualDepth:Ou,NotEqualStencilFunc:vM,NumberKeyframeTrack:ml,Object3D:Ut,ObjectLoader:Ub,ObjectSpaceNormalMap:nx,OctahedronGeometry:wl,OneFactor:F_,OneMinusConstantAlphaFactor:Z_,OneMinusConstantColorFactor:Y_,OneMinusDstAlphaFactor:V_,OneMinusDstColorFactor:G_,OneMinusSrcAlphaFactor:Ru,OneMinusSrcColorFactor:z_,OrthographicCamera:Gi,PCFShadowMap:Xo,PCFSoftShadowMap:Wa,PMREMGenerator:Dp,Path:_h,PerspectiveCamera:en,Plane:Rr,PlaneGeometry:na,PlaneHelper:bE,PointLight:Kx,PointLightHelper:pE,Points:Mx,PointsMaterial:om,PolarGridHelper:_E,PolyhedronGeometry:as,PositionalAudio:Wb,PropertyBinding:Nt,PropertyMixer:ay,QuadraticBezierCurve:fm,QuadraticBezierCurve3:dm,Quaternion:An,QuaternionKeyframeTrack:Al,QuaternionLinearInterpolant:qx,R11_EAC_Format:Wu,RED_GREEN_RGTC2_Format:rl,RED_RGTC1_Format:uh,REVISION:xl,RG11_EAC_Format:il,RGBADepthPacking:$S,RGBAFormat:Un,RGBAIntegerFormat:Ih,RGBA_ASTC_10x10_Format:rh,RGBA_ASTC_10x5_Format:th,RGBA_ASTC_10x6_Format:nh,RGBA_ASTC_10x8_Format:ih,RGBA_ASTC_12x10_Format:sh,RGBA_ASTC_12x12_Format:oh,RGBA_ASTC_4x4_Format:qu,RGBA_ASTC_5x4_Format:Zu,RGBA_ASTC_5x5_Format:ju,RGBA_ASTC_6x5_Format:Ju,RGBA_ASTC_6x6_Format:Ku,RGBA_ASTC_8x5_Format:Qu,RGBA_ASTC_8x6_Format:$u,RGBA_ASTC_8x8_Format:eh,RGBA_BPTC_Format:ah,RGBA_ETC2_EAC_Format:Gu,RGBA_PVRTC_2BPPV1_Format:ku,RGBA_PVRTC_4BPPV1_Format:zu,RGBA_S3TC_DXT1_Format:ja,RGBA_S3TC_DXT3_Format:Ja,RGBA_S3TC_DXT5_Format:Ka,RGBDepthPacking:eM,RGBFormat:Kp,RGBIntegerFormat:jS,RGB_BPTC_SIGNED_Format:lh,RGB_BPTC_UNSIGNED_Format:ch,RGB_ETC1_Format:Vu,RGB_ETC2_Format:Hu,RGB_PVRTC_2BPPV1_Format:Bu,RGB_PVRTC_4BPPV1_Format:Fu,RGB_S3TC_DXT1_Format:Za,RGDepthPacking:tM,RGFormat:is,RGIntegerFormat:Ph,RawShaderMaterial:gm,Ray:Ks,Raycaster:cy,RectAreaLight:ey,RedFormat:Rh,RedIntegerFormat:Sl,ReinhardToneMapping:kp,RenderTarget:em,RenderTarget3D:rE,RepeatWrapping:tl,ReplaceStencilOp:oM,ReverseSubtractEquation:D_,RingGeometry:Jh,SIGNED_R11_EAC_Format:Xu,SIGNED_RED_GREEN_RGTC2_Format:fh,SIGNED_RED_RGTC1_Format:hh,SIGNED_RG11_EAC_Format:Yu,SRGBColorSpace:ei,SRGBTransfer:Gt,Scene:tm,ShaderChunk:Tt,ShaderLib:zi,ShaderMaterial:gi,ShadowMaterial:Nx,Shape:Ws,ShapeGeometry:Kh,ShapePath:TE,ShapeUtils:Vi,ShortType:qp,Skeleton:kh,SkeletonHelper:dE,SkinnedMesh:_x,Source:es,Sphere:gn,SphereGeometry:Tl,Spherical:Pp,SphericalHarmonics3:wm,SplineCurve:pm,SpotLight:Jx,SpotLightHelper:fE,Sprite:gx,SpriteMaterial:rm,SrcAlphaFactor:Cu,SrcAlphaSaturateFactor:W_,SrcColorFactor:B_,StaticCopyUsage:EM,StaticDrawUsage:cl,StaticReadUsage:SM,StereoCamera:zb,StreamCopyUsage:TM,StreamDrawUsage:yM,StreamReadUsage:bM,StringKeyframeTrack:eo,SubtractEquation:L_,SubtractiveBlending:_p,TOUCH:Ns,TangentSpaceNormalMap:Nr,TetrahedronGeometry:Qh,Texture:nn,TextureLoader:Ib,TextureUtils:LE,Timer:sy,TimestampQuery:CM,TorusGeometry:$h,TorusKnotGeometry:ef,Triangle:ti,TriangleFanDrawMode:QS,TriangleStripDrawMode:KS,TrianglesDrawMode:JS,TubeGeometry:tf,UVMapping:wh,Uint16BufferAttribute:nm,Uint32BufferAttribute:im,Uint8BufferAttribute:g1,Uint8ClampedBufferAttribute:v1,Uniform:Pm,UniformsGroup:oE,UniformsLib:Ge,UniformsUtils:xh,UnsignedByteType:Gn,UnsignedInt101111Type:jp,UnsignedInt248Type:Zo,UnsignedInt5999Type:Zp,UnsignedIntType:Pi,UnsignedShort4444Type:Ah,UnsignedShort5551Type:Ch,UnsignedShortType:qo,VSMShadowMap:Fs,Vector2:me,Vector3:F,Vector4:Lt,VectorKeyframeTrack:gl,VideoFrameTexture:B1,VideoTexture:bx,WebGL3DRenderTarget:r1,WebGLArrayRenderTarget:i1,WebGLCoordinateSystem:fi,WebGLCubeRenderTarget:Im,WebGLRenderTarget:mi,WebGLRenderer:Sy,WebGLUtils:xy,WebGPUCoordinateSystem:qs,WebXRController:wu,WireframeGeometry:mm,WrapAroundEnding:ol,ZeroCurvatureEnding:Bs,ZeroFactor:O_,ZeroSlopeEnding:zs,ZeroStencilOp:sM,createCanvasElement:ux,error:ot,getConsoleFunction:UM,log:hl,setConsoleFunction:NM,warn:ze,warnOnce:ph},Symbol.toStringTag,{value:"Module"}));var My={exports:{}},to={};/**
 * @license React
 * react-reconciler-constants.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */to.ConcurrentRoot=1;to.ContinuousEventPriority=4;to.DefaultEventPriority=16;to.DiscreteEventPriority=1;to.IdleEventPriority=536870912;to.LegacyRoot=0;My.exports=to;var Wo=My.exports;function AR(r){let e;const t=new Set,n=(h,f)=>{const p=typeof h=="function"?h(e):h;if(p!==e){const m=e;e=f?p:Object.assign({},e,p),t.forEach(g=>g(e,m))}},i=()=>e,s=(h,f=i,p=Object.is)=>{console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");let m=f(e);function g(){const x=f(e);if(!p(m,x)){const b=m;h(m=x,b)}}return t.add(g),()=>t.delete(g)},u={setState:n,getState:i,subscribe:(h,f,p)=>f||p?s(h,f,p):(t.add(h),()=>t.delete(h)),destroy:()=>t.clear()};return e=r(n,i,u),u}const CR=typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),$v=CR?Se.useEffect:Se.useLayoutEffect;function RR(r){const e=typeof r=="function"?AR(r):r,t=(n=e.getState,i=Object.is)=>{const[,s]=Se.useReducer(y=>y+1,0),o=e.getState(),c=Se.useRef(o),u=Se.useRef(n),h=Se.useRef(i),f=Se.useRef(!1),p=Se.useRef();p.current===void 0&&(p.current=n(o));let m,g=!1;(c.current!==o||u.current!==n||h.current!==i||f.current)&&(m=n(o),g=!i(p.current,m)),$v(()=>{g&&(p.current=m),c.current=o,u.current=n,h.current=i,f.current=!1});const x=Se.useRef(o);$v(()=>{const y=()=>{try{const M=e.getState(),E=u.current(M);h.current(p.current,E)||(c.current=M,p.current=E,s())}catch{f.current=!0,s()}},_=e.subscribe(y);return e.getState()!==x.current&&y(),_},[]);const b=g?m:p.current;return Se.useDebugValue(b),b};return Object.assign(t,e),t[Symbol.iterator]=function(){console.warn("[useStore, api] = create() is deprecated and will be removed in v4");const n=[t,e];return{next(){const i=n.length<=0;return{value:n.shift(),done:i}}}},t}var by={exports:{}},ip={exports:{}},rp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e_;function PR(){return e_||(e_=1,function(r){function e(z,X){var Y=z.length;z.push(X);e:for(;0<Y;){var oe=Y-1>>>1,pe=z[oe];if(0<i(pe,X))z[oe]=X,z[Y]=pe,Y=oe;else break e}}function t(z){return z.length===0?null:z[0]}function n(z){if(z.length===0)return null;var X=z[0],Y=z.pop();if(Y!==X){z[0]=Y;e:for(var oe=0,pe=z.length,Ie=pe>>>1;oe<Ie;){var rt=2*(oe+1)-1,Qe=z[rt],ae=rt+1,Re=z[ae];if(0>i(Qe,Y))ae<pe&&0>i(Re,Qe)?(z[oe]=Re,z[ae]=Y,oe=ae):(z[oe]=Qe,z[rt]=Y,oe=rt);else if(ae<pe&&0>i(Re,Y))z[oe]=Re,z[ae]=Y,oe=ae;else break e}}return X}function i(z,X){var Y=z.sortIndex-X.sortIndex;return Y!==0?Y:z.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;r.unstable_now=function(){return s.now()}}else{var o=Date,c=o.now();r.unstable_now=function(){return o.now()-c}}var u=[],h=[],f=1,p=null,m=3,g=!1,x=!1,b=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(z){for(var X=t(h);X!==null;){if(X.callback===null)n(h);else if(X.startTime<=z)n(h),X.sortIndex=X.expirationTime,e(u,X);else break;X=t(h)}}function w(z){if(b=!1,E(z),!x)if(t(u)!==null)x=!0,Z(I);else{var X=t(h);X!==null&&j(w,X.startTime-z)}}function I(z,X){x=!1,b&&(b=!1,_(T),T=-1),g=!0;var Y=m;try{for(E(X),p=t(u);p!==null&&(!(p.expirationTime>X)||z&&!D());){var oe=p.callback;if(typeof oe=="function"){p.callback=null,m=p.priorityLevel;var pe=oe(p.expirationTime<=X);X=r.unstable_now(),typeof pe=="function"?p.callback=pe:p===t(u)&&n(u),E(X)}else n(u);p=t(u)}if(p!==null)var Ie=!0;else{var rt=t(h);rt!==null&&j(w,rt.startTime-X),Ie=!1}return Ie}finally{p=null,m=Y,g=!1}}var C=!1,O=null,T=-1,P=5,U=-1;function D(){return!(r.unstable_now()-U<P)}function H(){if(O!==null){var z=r.unstable_now();U=z;var X=!0;try{X=O(!0,z)}finally{X?K():(C=!1,O=null)}}else C=!1}var K;if(typeof M=="function")K=function(){M(H)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,G=ie.port2;ie.port1.onmessage=H,K=function(){G.postMessage(null)}}else K=function(){y(H,0)};function Z(z){O=z,C||(C=!0,K())}function j(z,X){T=y(function(){z(r.unstable_now())},X)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_continueExecution=function(){x||g||(x=!0,Z(I))},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return m},r.unstable_getFirstCallbackNode=function(){return t(u)},r.unstable_next=function(z){switch(m){case 1:case 2:case 3:var X=3;break;default:X=m}var Y=m;m=X;try{return z()}finally{m=Y}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(z,X){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Y=m;m=z;try{return X()}finally{m=Y}},r.unstable_scheduleCallback=function(z,X,Y){var oe=r.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?oe+Y:oe):Y=oe,z){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=Y+pe,z={id:f++,callback:X,priorityLevel:z,startTime:Y,expirationTime:pe,sortIndex:-1},Y>oe?(z.sortIndex=Y,e(h,z),t(u)===null&&z===t(h)&&(b?(_(T),T=-1):b=!0,j(w,Y-oe))):(z.sortIndex=pe,e(u,z),x||g||(x=!0,Z(I))),z},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(z){var X=m;return function(){var Y=m;m=X;try{return z.apply(this,arguments)}finally{m=Y}}}}(rp)),rp}var t_;function IR(){return t_||(t_=1,ip.exports=PR()),ip.exports}/**
 * @license React
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var LR=function(e){var t={},n=Se,i=IR(),s=Object.assign;function o(a){for(var l="https://reactjs.org/docs/error-decoder.html?invariant="+a,d=1;d<arguments.length;d++)l+="&args[]="+encodeURIComponent(arguments[d]);return"Minified React error #"+a+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,u=Symbol.for("react.element"),h=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),x=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),_=Symbol.for("react.suspense_list"),M=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),w=Symbol.for("react.offscreen"),I=Symbol.iterator;function C(a){return a===null||typeof a!="object"?null:(a=I&&a[I]||a["@@iterator"],typeof a=="function"?a:null)}function O(a){if(a==null)return null;if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case f:return"Fragment";case h:return"Portal";case m:return"Profiler";case p:return"StrictMode";case y:return"Suspense";case _:return"SuspenseList"}if(typeof a=="object")switch(a.$$typeof){case x:return(a.displayName||"Context")+".Consumer";case g:return(a._context.displayName||"Context")+".Provider";case b:var l=a.render;return a=a.displayName,a||(a=l.displayName||l.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case M:return l=a.displayName||null,l!==null?l:O(a.type)||"Memo";case E:l=a._payload,a=a._init;try{return O(a(l))}catch{}}return null}function T(a){var l=a.type;switch(a.tag){case 24:return"Cache";case 9:return(l.displayName||"Context")+".Consumer";case 10:return(l._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return a=l.render,a=a.displayName||a.name||"",l.displayName||(a!==""?"ForwardRef("+a+")":"ForwardRef");case 7:return"Fragment";case 5:return l;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return O(l);case 8:return l===p?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof l=="function")return l.displayName||l.name||null;if(typeof l=="string")return l}return null}function P(a){var l=a,d=a;if(a.alternate)for(;l.return;)l=l.return;else{a=l;do l=a,l.flags&4098&&(d=l.return),a=l.return;while(a)}return l.tag===3?d:null}function U(a){if(P(a)!==a)throw Error(o(188))}function D(a){var l=a.alternate;if(!l){if(l=P(a),l===null)throw Error(o(188));return l!==a?null:a}for(var d=a,v=l;;){var S=d.return;if(S===null)break;var A=S.alternate;if(A===null){if(v=S.return,v!==null){d=v;continue}break}if(S.child===A.child){for(A=S.child;A;){if(A===d)return U(S),a;if(A===v)return U(S),l;A=A.sibling}throw Error(o(188))}if(d.return!==v.return)d=S,v=A;else{for(var B=!1,q=S.child;q;){if(q===d){B=!0,d=S,v=A;break}if(q===v){B=!0,v=S,d=A;break}q=q.sibling}if(!B){for(q=A.child;q;){if(q===d){B=!0,d=A,v=S;break}if(q===v){B=!0,v=A,d=S;break}q=q.sibling}if(!B)throw Error(o(189))}}if(d.alternate!==v)throw Error(o(190))}if(d.tag!==3)throw Error(o(188));return d.stateNode.current===d?a:l}function H(a){return a=D(a),a!==null?K(a):null}function K(a){if(a.tag===5||a.tag===6)return a;for(a=a.child;a!==null;){var l=K(a);if(l!==null)return l;a=a.sibling}return null}function ie(a){if(a.tag===5||a.tag===6)return a;for(a=a.child;a!==null;){if(a.tag!==4){var l=ie(a);if(l!==null)return l}a=a.sibling}return null}var G=Array.isArray,Z=e.getPublicInstance,j=e.getRootHostContext,z=e.getChildHostContext,X=e.prepareForCommit,Y=e.resetAfterCommit,oe=e.createInstance,pe=e.appendInitialChild,Ie=e.finalizeInitialChildren,rt=e.prepareUpdate,Qe=e.shouldSetTextContent,ae=e.createTextInstance,Re=e.scheduleTimeout,we=e.cancelTimeout,$e=e.noTimeout,Ke=e.isPrimaryRenderer,Pe=e.supportsMutation,gt=e.supportsPersistence,Ye=e.supportsHydration,ve=e.getInstanceFromNode,be=e.preparePortalMount,xe=e.getCurrentEventPriority,Oe=e.detachDeletedInstance,Ue=e.supportsMicrotasks,ct=e.scheduleMicrotask,k=e.supportsTestSelectors,pt=e.findFiberRoot,tt=e.getBoundingRect,ut=e.getTextContent,Me=e.isHiddenSubtree,Pt=e.matchAccessibilityRole,N=e.setFocusIfFocusable,R=e.setupIntersectionObserver,$=e.appendChild,de=e.appendChildToContainer,ye=e.commitTextUpdate,Ce=e.commitMount,Le=e.commitUpdate,ce=e.insertBefore,ge=e.insertInContainerBefore,Ve=e.removeChild,V=e.removeChildFromContainer,ee=e.resetTextContent,ue=e.hideInstance,He=e.hideTextInstance,st=e.unhideInstance,St=e.unhideTextInstance,W=e.clearContainer,De=e.cloneInstance,fe=e.createContainerChildSet,Be=e.appendChildToContainerChildSet,Te=e.finalizeContainerChildren,_e=e.replaceContainerChildren,nt=e.cloneHiddenInstance,dt=e.cloneHiddenTextInstance,Wt=e.canHydrateInstance,Vt=e.canHydrateTextInstance,Li=e.canHydrateSuspenseInstance,ri=e.isSuspenseInstancePending,cs=e.isSuspenseInstanceFallback,of=e.registerSuspenseInstanceRetry,Or=e.getNextHydratableSibling,Il=e.getFirstHydratableChild,gr=e.getFirstHydratableChildWithinContainer,sa=e.getFirstHydratableChildWithinSuspenseInstance,Ll=e.hydrateInstance,Dl=e.hydrateTextInstance,no=e.hydrateSuspenseInstance,Nl=e.getNextHydratableInstanceAfterSuspenseInstance,us=e.commitHydratedContainer,Ul=e.commitHydratedSuspenseInstance,Ol=e.clearSuspenseBoundary,af=e.clearSuspenseBoundaryFromContainer,lf=e.shouldDeleteUnhydratedTailInstances,cf=e.didNotMatchHydratedContainerTextInstance,uf=e.didNotMatchHydratedTextInstance,oa;function hs(a){if(oa===void 0)try{throw Error()}catch(d){var l=d.stack.trim().match(/\n( *(at )?)/);oa=l&&l[1]||""}return`
`+oa+a}var aa=!1;function L(a,l){if(!a||aa)return"";aa=!0;var d=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(l)if(l=function(){throw Error()},Object.defineProperty(l.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(l,[])}catch(Ne){var v=Ne}Reflect.construct(a,[],l)}else{try{l.call()}catch(Ne){v=Ne}a.call(l.prototype)}else{try{throw Error()}catch(Ne){v=Ne}a()}}catch(Ne){if(Ne&&v&&typeof Ne.stack=="string"){for(var S=Ne.stack.split(`
`),A=v.stack.split(`
`),B=S.length-1,q=A.length-1;1<=B&&0<=q&&S[B]!==A[q];)q--;for(;1<=B&&0<=q;B--,q--)if(S[B]!==A[q]){if(B!==1||q!==1)do if(B--,q--,0>q||S[B]!==A[q]){var he=`
`+S[B].replace(" at new "," at ");return a.displayName&&he.includes("<anonymous>")&&(he=he.replace("<anonymous>",a.displayName)),he}while(1<=B&&0<=q);break}}}finally{aa=!1,Error.prepareStackTrace=d}return(a=a?a.displayName||a.name:"")?hs(a):""}var J=Object.prototype.hasOwnProperty,se=[],ne=-1;function te(a){return{current:a}}function Ee(a){0>ne||(a.current=se[ne],se[ne]=null,ne--)}function Ae(a,l){ne++,se[ne]=a.current,a.current=l}var Fe={},We=te(Fe),qe=te(!1),mt=Fe;function xt(a,l){var d=a.type.contextTypes;if(!d)return Fe;var v=a.stateNode;if(v&&v.__reactInternalMemoizedUnmaskedChildContext===l)return v.__reactInternalMemoizedMaskedChildContext;var S={},A;for(A in d)S[A]=l[A];return v&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=l,a.__reactInternalMemoizedMaskedChildContext=S),S}function je(a){return a=a.childContextTypes,a!=null}function Dt(){Ee(qe),Ee(We)}function Jt(a,l,d){if(We.current!==Fe)throw Error(o(168));Ae(We,l),Ae(qe,d)}function qt(a,l,d){var v=a.stateNode;if(l=l.childContextTypes,typeof v.getChildContext!="function")return d;v=v.getChildContext();for(var S in v)if(!(S in l))throw Error(o(108,T(a)||"Unknown",S));return s({},d,v)}function Ot(a){return a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Fe,mt=We.current,Ae(We,a),Ae(qe,qe.current),!0}function dn(a,l,d){var v=a.stateNode;if(!v)throw Error(o(169));d?(a=qt(a,l,mt),v.__reactInternalMemoizedMergedChildContext=a,Ee(qe),Ee(We),Ae(We,a)):Ee(qe),Ae(qe,d)}var ke=Math.clz32?Math.clz32:Zn,Fn=Math.log,It=Math.LN2;function Zn(a){return a>>>=0,a===0?32:31-(Fn(a)/It|0)|0}var Bn=64,si=4194304;function vi(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return a}}function Ft(a,l){var d=a.pendingLanes;if(d===0)return 0;var v=0,S=a.suspendedLanes,A=a.pingedLanes,B=d&268435455;if(B!==0){var q=B&~S;q!==0?v=vi(q):(A&=B,A!==0&&(v=vi(A)))}else B=d&~S,B!==0?v=vi(B):A!==0&&(v=vi(A));if(v===0)return 0;if(l!==0&&l!==v&&!(l&S)&&(S=v&-v,A=l&-l,S>=A||S===16&&(A&4194240)!==0))return l;if(v&4&&(v|=d&16),l=a.entangledLanes,l!==0)for(a=a.entanglements,l&=v;0<l;)d=31-ke(l),S=1<<d,v|=a[d],l&=~S;return v}function Qt(a,l){switch(a){case 1:case 2:case 4:return l+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qi(a,l){for(var d=a.suspendedLanes,v=a.pingedLanes,S=a.expirationTimes,A=a.pendingLanes;0<A;){var B=31-ke(A),q=1<<B,he=S[B];he===-1?(!(q&d)||q&v)&&(S[B]=Qt(q,l)):he<=l&&(a.expiredLanes|=q),A&=~q}}function Ht(a){return a=a.pendingLanes&-1073741825,a!==0?a:a&1073741824?1073741824:0}function _i(a){for(var l=[],d=0;31>d;d++)l.push(a);return l}function xi(a,l,d){a.pendingLanes|=l,l!==536870912&&(a.suspendedLanes=0,a.pingedLanes=0),a=a.eventTimes,l=31-ke(l),a[l]=d}function Fl(a,l){var d=a.pendingLanes&~l;a.pendingLanes=l,a.suspendedLanes=0,a.pingedLanes=0,a.expiredLanes&=l,a.mutableReadLanes&=l,a.entangledLanes&=l,l=a.entanglements;var v=a.eventTimes;for(a=a.expirationTimes;0<d;){var S=31-ke(d),A=1<<S;l[S]=0,v[S]=-1,a[S]=-1,d&=~A}}function hf(a,l){var d=a.entangledLanes|=l;for(a=a.entanglements;d;){var v=31-ke(d),S=1<<v;S&l|a[v]&l&&(a[v]|=l),d&=~S}}var Bt=0;function Hm(a){return a&=-a,1<a?4<a?a&268435455?16:536870912:4:1}var ff=i.unstable_scheduleCallback,Gm=i.unstable_cancelCallback,Zy=i.unstable_shouldYield,jy=i.unstable_requestPaint,xn=i.unstable_now,df=i.unstable_ImmediatePriority,Jy=i.unstable_UserBlockingPriority,pf=i.unstable_NormalPriority,Ky=i.unstable_IdlePriority,Bl=null,Zi=null;function Qy(a){if(Zi&&typeof Zi.onCommitFiberRoot=="function")try{Zi.onCommitFiberRoot(Bl,a,void 0,(a.current.flags&128)===128)}catch{}}function $y(a,l){return a===l&&(a!==0||1/a===1/l)||a!==a&&l!==l}var ji=typeof Object.is=="function"?Object.is:$y,vr=null,zl=!1,mf=!1;function Wm(a){vr===null?vr=[a]:vr.push(a)}function eS(a){zl=!0,Wm(a)}function Ji(){if(!mf&&vr!==null){mf=!0;var a=0,l=Bt;try{var d=vr;for(Bt=1;a<d.length;a++){var v=d[a];do v=v(!0);while(v!==null)}vr=null,zl=!1}catch(S){throw vr!==null&&(vr=vr.slice(a+1)),ff(df,Ji),S}finally{Bt=l,mf=!1}}return null}var tS=c.ReactCurrentBatchConfig;function kl(a,l){if(ji(a,l))return!0;if(typeof a!="object"||a===null||typeof l!="object"||l===null)return!1;var d=Object.keys(a),v=Object.keys(l);if(d.length!==v.length)return!1;for(v=0;v<d.length;v++){var S=d[v];if(!J.call(l,S)||!ji(a[S],l[S]))return!1}return!0}function nS(a){switch(a.tag){case 5:return hs(a.type);case 16:return hs("Lazy");case 13:return hs("Suspense");case 19:return hs("SuspenseList");case 0:case 2:case 15:return a=L(a.type,!1),a;case 11:return a=L(a.type.render,!1),a;case 1:return a=L(a.type,!0),a;default:return""}}function Di(a,l){if(a&&a.defaultProps){l=s({},l),a=a.defaultProps;for(var d in a)l[d]===void 0&&(l[d]=a[d]);return l}return l}var Vl=te(null),Hl=null,io=null,gf=null;function vf(){gf=io=Hl=null}function Xm(a,l,d){Ke?(Ae(Vl,l._currentValue),l._currentValue=d):(Ae(Vl,l._currentValue2),l._currentValue2=d)}function _f(a){var l=Vl.current;Ee(Vl),Ke?a._currentValue=l:a._currentValue2=l}function xf(a,l,d){for(;a!==null;){var v=a.alternate;if((a.childLanes&l)!==l?(a.childLanes|=l,v!==null&&(v.childLanes|=l)):v!==null&&(v.childLanes&l)!==l&&(v.childLanes|=l),a===d)break;a=a.return}}function ro(a,l){Hl=a,gf=io=null,a=a.dependencies,a!==null&&a.firstContext!==null&&(a.lanes&l&&(li=!0),a.firstContext=null)}function yi(a){var l=Ke?a._currentValue:a._currentValue2;if(gf!==a)if(a={context:a,memoizedValue:l,next:null},io===null){if(Hl===null)throw Error(o(308));io=a,Hl.dependencies={lanes:0,firstContext:a}}else io=io.next=a;return l}var Ki=null,Fr=!1;function yf(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ym(a,l){a=a.updateQueue,l.updateQueue===a&&(l.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function _r(a,l){return{eventTime:a,lane:l,tag:0,payload:null,callback:null,next:null}}function Br(a,l){var d=a.updateQueue;d!==null&&(d=d.shared,un!==null&&a.mode&1&&!(Ct&2)?(a=d.interleaved,a===null?(l.next=l,Ki===null?Ki=[d]:Ki.push(d)):(l.next=a.next,a.next=l),d.interleaved=l):(a=d.pending,a===null?l.next=l:(l.next=a.next,a.next=l),d.pending=l))}function Gl(a,l,d){if(l=l.updateQueue,l!==null&&(l=l.shared,(d&4194240)!==0)){var v=l.lanes;v&=a.pendingLanes,d|=v,l.lanes=d,hf(a,d)}}function qm(a,l){var d=a.updateQueue,v=a.alternate;if(v!==null&&(v=v.updateQueue,d===v)){var S=null,A=null;if(d=d.firstBaseUpdate,d!==null){do{var B={eventTime:d.eventTime,lane:d.lane,tag:d.tag,payload:d.payload,callback:d.callback,next:null};A===null?S=A=B:A=A.next=B,d=d.next}while(d!==null);A===null?S=A=l:A=A.next=l}else S=A=l;d={baseState:v.baseState,firstBaseUpdate:S,lastBaseUpdate:A,shared:v.shared,effects:v.effects},a.updateQueue=d;return}a=d.lastBaseUpdate,a===null?d.firstBaseUpdate=l:a.next=l,d.lastBaseUpdate=l}function Wl(a,l,d,v){var S=a.updateQueue;Fr=!1;var A=S.firstBaseUpdate,B=S.lastBaseUpdate,q=S.shared.pending;if(q!==null){S.shared.pending=null;var he=q,Ne=he.next;he.next=null,B===null?A=Ne:B.next=Ne,B=he;var it=a.alternate;it!==null&&(it=it.updateQueue,q=it.lastBaseUpdate,q!==B&&(q===null?it.firstBaseUpdate=Ne:q.next=Ne,it.lastBaseUpdate=he))}if(A!==null){var bt=S.baseState;B=0,it=Ne=he=null,q=A;do{var ht=q.lane,Yt=q.eventTime;if((v&ht)===ht){it!==null&&(it=it.next={eventTime:Yt,lane:0,tag:q.tag,payload:q.payload,callback:q.callback,next:null});e:{var lt=a,In=q;switch(ht=l,Yt=d,In.tag){case 1:if(lt=In.payload,typeof lt=="function"){bt=lt.call(Yt,bt,ht);break e}bt=lt;break e;case 3:lt.flags=lt.flags&-65537|128;case 0:if(lt=In.payload,ht=typeof lt=="function"?lt.call(Yt,bt,ht):lt,ht==null)break e;bt=s({},bt,ht);break e;case 2:Fr=!0}}q.callback!==null&&q.lane!==0&&(a.flags|=64,ht=S.effects,ht===null?S.effects=[q]:ht.push(q))}else Yt={eventTime:Yt,lane:ht,tag:q.tag,payload:q.payload,callback:q.callback,next:null},it===null?(Ne=it=Yt,he=bt):it=it.next=Yt,B|=ht;if(q=q.next,q===null){if(q=S.shared.pending,q===null)break;ht=q,q=ht.next,ht.next=null,S.lastBaseUpdate=ht,S.shared.pending=null}}while(!0);if(it===null&&(he=bt),S.baseState=he,S.firstBaseUpdate=Ne,S.lastBaseUpdate=it,l=S.shared.interleaved,l!==null){S=l;do B|=S.lane,S=S.next;while(S!==l)}else A===null&&(S.shared.lanes=0);po|=B,a.lanes=B,a.memoizedState=bt}}function Zm(a,l,d){if(a=l.effects,l.effects=null,a!==null)for(l=0;l<a.length;l++){var v=a[l],S=v.callback;if(S!==null){if(v.callback=null,v=d,typeof S!="function")throw Error(o(191,S));S.call(v)}}}var jm=new n.Component().refs;function Sf(a,l,d,v){l=a.memoizedState,d=d(v,l),d=d==null?l:s({},l,d),a.memoizedState=d,a.lanes===0&&(a.updateQueue.baseState=d)}var Xl={isMounted:function(a){return(a=a._reactInternals)?P(a)===a:!1},enqueueSetState:function(a,l,d){a=a._reactInternals;var v=kn(),S=Vr(a),A=_r(v,S);A.payload=l,d!=null&&(A.callback=d),Br(a,A),l=wi(a,S,v),l!==null&&Gl(l,a,S)},enqueueReplaceState:function(a,l,d){a=a._reactInternals;var v=kn(),S=Vr(a),A=_r(v,S);A.tag=1,A.payload=l,d!=null&&(A.callback=d),Br(a,A),l=wi(a,S,v),l!==null&&Gl(l,a,S)},enqueueForceUpdate:function(a,l){a=a._reactInternals;var d=kn(),v=Vr(a),S=_r(d,v);S.tag=2,l!=null&&(S.callback=l),Br(a,S),l=wi(a,v,d),l!==null&&Gl(l,a,v)}};function Jm(a,l,d,v,S,A,B){return a=a.stateNode,typeof a.shouldComponentUpdate=="function"?a.shouldComponentUpdate(v,A,B):l.prototype&&l.prototype.isPureReactComponent?!kl(d,v)||!kl(S,A):!0}function Km(a,l,d){var v=!1,S=Fe,A=l.contextType;return typeof A=="object"&&A!==null?A=yi(A):(S=je(l)?mt:We.current,v=l.contextTypes,A=(v=v!=null)?xt(a,S):Fe),l=new l(d,A),a.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=Xl,a.stateNode=l,l._reactInternals=a,v&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=S,a.__reactInternalMemoizedMaskedChildContext=A),l}function Qm(a,l,d,v){a=l.state,typeof l.componentWillReceiveProps=="function"&&l.componentWillReceiveProps(d,v),typeof l.UNSAFE_componentWillReceiveProps=="function"&&l.UNSAFE_componentWillReceiveProps(d,v),l.state!==a&&Xl.enqueueReplaceState(l,l.state,null)}function Mf(a,l,d,v){var S=a.stateNode;S.props=d,S.state=a.memoizedState,S.refs=jm,yf(a);var A=l.contextType;typeof A=="object"&&A!==null?S.context=yi(A):(A=je(l)?mt:We.current,S.context=xt(a,A)),S.state=a.memoizedState,A=l.getDerivedStateFromProps,typeof A=="function"&&(Sf(a,l,A,d),S.state=a.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof S.getSnapshotBeforeUpdate=="function"||typeof S.UNSAFE_componentWillMount!="function"&&typeof S.componentWillMount!="function"||(l=S.state,typeof S.componentWillMount=="function"&&S.componentWillMount(),typeof S.UNSAFE_componentWillMount=="function"&&S.UNSAFE_componentWillMount(),l!==S.state&&Xl.enqueueReplaceState(S,S.state,null),Wl(a,d,S,v),S.state=a.memoizedState),typeof S.componentDidMount=="function"&&(a.flags|=4194308)}var so=[],oo=0,Yl=null,ql=0,Si=[],Mi=0,fs=null,xr=1,yr="";function ds(a,l){so[oo++]=ql,so[oo++]=Yl,Yl=a,ql=l}function $m(a,l,d){Si[Mi++]=xr,Si[Mi++]=yr,Si[Mi++]=fs,fs=a;var v=xr;a=yr;var S=32-ke(v)-1;v&=~(1<<S),d+=1;var A=32-ke(l)+S;if(30<A){var B=S-S%5;A=(v&(1<<B)-1).toString(32),v>>=B,S-=B,xr=1<<32-ke(l)+S|d<<S|v,yr=A+a}else xr=1<<A|d<<S|v,yr=a}function bf(a){a.return!==null&&(ds(a,1),$m(a,1,0))}function Ef(a){for(;a===Yl;)Yl=so[--oo],so[oo]=null,ql=so[--oo],so[oo]=null;for(;a===fs;)fs=Si[--Mi],Si[Mi]=null,yr=Si[--Mi],Si[Mi]=null,xr=Si[--Mi],Si[Mi]=null}var oi=null,ai=null,Kt=!1,la=!1,Ni=null;function eg(a,l){var d=Ti(5,null,null,0);d.elementType="DELETED",d.stateNode=l,d.return=a,l=a.deletions,l===null?(a.deletions=[d],a.flags|=16):l.push(d)}function tg(a,l){switch(a.tag){case 5:return l=Wt(l,a.type,a.pendingProps),l!==null?(a.stateNode=l,oi=a,ai=Il(l),!0):!1;case 6:return l=Vt(l,a.pendingProps),l!==null?(a.stateNode=l,oi=a,ai=null,!0):!1;case 13:if(l=Li(l),l!==null){var d=fs!==null?{id:xr,overflow:yr}:null;return a.memoizedState={dehydrated:l,treeContext:d,retryLane:1073741824},d=Ti(18,null,null,0),d.stateNode=l,d.return=a,a.child=d,oi=a,ai=null,!0}return!1;default:return!1}}function wf(a){return(a.mode&1)!==0&&(a.flags&128)===0}function Tf(a){if(Kt){var l=ai;if(l){var d=l;if(!tg(a,l)){if(wf(a))throw Error(o(418));l=Or(d);var v=oi;l&&tg(a,l)?eg(v,d):(a.flags=a.flags&-4097|2,Kt=!1,oi=a)}}else{if(wf(a))throw Error(o(418));a.flags=a.flags&-4097|2,Kt=!1,oi=a}}}function ng(a){for(a=a.return;a!==null&&a.tag!==5&&a.tag!==3&&a.tag!==13;)a=a.return;oi=a}function ca(a){if(!Ye||a!==oi)return!1;if(!Kt)return ng(a),Kt=!0,!1;if(a.tag!==3&&(a.tag!==5||lf(a.type)&&!Qe(a.type,a.memoizedProps))){var l=ai;if(l){if(wf(a)){for(a=ai;a;)a=Or(a);throw Error(o(418))}for(;l;)eg(a,l),l=Or(l)}}if(ng(a),a.tag===13){if(!Ye)throw Error(o(316));if(a=a.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(o(317));ai=Nl(a)}else ai=oi?Or(a.stateNode):null;return!0}function ao(){Ye&&(ai=oi=null,la=Kt=!1)}function Af(a){Ni===null?Ni=[a]:Ni.push(a)}function ua(a,l,d){if(a=d.ref,a!==null&&typeof a!="function"&&typeof a!="object"){if(d._owner){if(d=d._owner,d){if(d.tag!==1)throw Error(o(309));var v=d.stateNode}if(!v)throw Error(o(147,a));var S=v,A=""+a;return l!==null&&l.ref!==null&&typeof l.ref=="function"&&l.ref._stringRef===A?l.ref:(l=function(B){var q=S.refs;q===jm&&(q=S.refs={}),B===null?delete q[A]:q[A]=B},l._stringRef=A,l)}if(typeof a!="string")throw Error(o(284));if(!d._owner)throw Error(o(290,a))}return a}function Zl(a,l){throw a=Object.prototype.toString.call(l),Error(o(31,a==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":a))}function ig(a){var l=a._init;return l(a._payload)}function rg(a){function l(re,Q){if(a){var le=re.deletions;le===null?(re.deletions=[Q],re.flags|=16):le.push(Q)}}function d(re,Q){if(!a)return null;for(;Q!==null;)l(re,Q),Q=Q.sibling;return null}function v(re,Q){for(re=new Map;Q!==null;)Q.key!==null?re.set(Q.key,Q):re.set(Q.index,Q),Q=Q.sibling;return re}function S(re,Q){return re=Gr(re,Q),re.index=0,re.sibling=null,re}function A(re,Q,le){return re.index=le,a?(le=re.alternate,le!==null?(le=le.index,le<Q?(re.flags|=2,Q):le):(re.flags|=2,Q)):(re.flags|=1048576,Q)}function B(re){return a&&re.alternate===null&&(re.flags|=2),re}function q(re,Q,le,Ze){return Q===null||Q.tag!==6?(Q=ud(le,re.mode,Ze),Q.return=re,Q):(Q=S(Q,le),Q.return=re,Q)}function he(re,Q,le,Ze){var at=le.type;return at===f?it(re,Q,le.props.children,Ze,le.key):Q!==null&&(Q.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===E&&ig(at)===Q.type)?(Ze=S(Q,le.props),Ze.ref=ua(re,Q,le),Ze.return=re,Ze):(Ze=wc(le.type,le.key,le.props,null,re.mode,Ze),Ze.ref=ua(re,Q,le),Ze.return=re,Ze)}function Ne(re,Q,le,Ze){return Q===null||Q.tag!==4||Q.stateNode.containerInfo!==le.containerInfo||Q.stateNode.implementation!==le.implementation?(Q=hd(le,re.mode,Ze),Q.return=re,Q):(Q=S(Q,le.children||[]),Q.return=re,Q)}function it(re,Q,le,Ze,at){return Q===null||Q.tag!==7?(Q=ys(le,re.mode,Ze,at),Q.return=re,Q):(Q=S(Q,le),Q.return=re,Q)}function bt(re,Q,le){if(typeof Q=="string"&&Q!==""||typeof Q=="number")return Q=ud(""+Q,re.mode,le),Q.return=re,Q;if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case u:return le=wc(Q.type,Q.key,Q.props,null,re.mode,le),le.ref=ua(re,null,Q),le.return=re,le;case h:return Q=hd(Q,re.mode,le),Q.return=re,Q;case E:var Ze=Q._init;return bt(re,Ze(Q._payload),le)}if(G(Q)||C(Q))return Q=ys(Q,re.mode,le,null),Q.return=re,Q;Zl(re,Q)}return null}function ht(re,Q,le,Ze){var at=Q!==null?Q.key:null;if(typeof le=="string"&&le!==""||typeof le=="number")return at!==null?null:q(re,Q,""+le,Ze);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case u:return le.key===at?he(re,Q,le,Ze):null;case h:return le.key===at?Ne(re,Q,le,Ze):null;case E:return at=le._init,ht(re,Q,at(le._payload),Ze)}if(G(le)||C(le))return at!==null?null:it(re,Q,le,Ze,null);Zl(re,le)}return null}function Yt(re,Q,le,Ze,at){if(typeof Ze=="string"&&Ze!==""||typeof Ze=="number")return re=re.get(le)||null,q(Q,re,""+Ze,at);if(typeof Ze=="object"&&Ze!==null){switch(Ze.$$typeof){case u:return re=re.get(Ze.key===null?le:Ze.key)||null,he(Q,re,Ze,at);case h:return re=re.get(Ze.key===null?le:Ze.key)||null,Ne(Q,re,Ze,at);case E:var At=Ze._init;return Yt(re,Q,le,At(Ze._payload),at)}if(G(Ze)||C(Ze))return re=re.get(le)||null,it(Q,re,Ze,at,null);Zl(Q,Ze)}return null}function lt(re,Q,le,Ze){for(var at=null,At=null,Et=Q,zt=Q=0,Sn=null;Et!==null&&zt<le.length;zt++){Et.index>zt?(Sn=Et,Et=null):Sn=Et.sibling;var kt=ht(re,Et,le[zt],Ze);if(kt===null){Et===null&&(Et=Sn);break}a&&Et&&kt.alternate===null&&l(re,Et),Q=A(kt,Q,zt),At===null?at=kt:At.sibling=kt,At=kt,Et=Sn}if(zt===le.length)return d(re,Et),Kt&&ds(re,zt),at;if(Et===null){for(;zt<le.length;zt++)Et=bt(re,le[zt],Ze),Et!==null&&(Q=A(Et,Q,zt),At===null?at=Et:At.sibling=Et,At=Et);return Kt&&ds(re,zt),at}for(Et=v(re,Et);zt<le.length;zt++)Sn=Yt(Et,re,zt,le[zt],Ze),Sn!==null&&(a&&Sn.alternate!==null&&Et.delete(Sn.key===null?zt:Sn.key),Q=A(Sn,Q,zt),At===null?at=Sn:At.sibling=Sn,At=Sn);return a&&Et.forEach(function(Wr){return l(re,Wr)}),Kt&&ds(re,zt),at}function In(re,Q,le,Ze){var at=C(le);if(typeof at!="function")throw Error(o(150));if(le=at.call(le),le==null)throw Error(o(151));for(var At=at=null,Et=Q,zt=Q=0,Sn=null,kt=le.next();Et!==null&&!kt.done;zt++,kt=le.next()){Et.index>zt?(Sn=Et,Et=null):Sn=Et.sibling;var Wr=ht(re,Et,kt.value,Ze);if(Wr===null){Et===null&&(Et=Sn);break}a&&Et&&Wr.alternate===null&&l(re,Et),Q=A(Wr,Q,zt),At===null?at=Wr:At.sibling=Wr,At=Wr,Et=Sn}if(kt.done)return d(re,Et),Kt&&ds(re,zt),at;if(Et===null){for(;!kt.done;zt++,kt=le.next())kt=bt(re,kt.value,Ze),kt!==null&&(Q=A(kt,Q,zt),At===null?at=kt:At.sibling=kt,At=kt);return Kt&&ds(re,zt),at}for(Et=v(re,Et);!kt.done;zt++,kt=le.next())kt=Yt(Et,re,zt,kt.value,Ze),kt!==null&&(a&&kt.alternate!==null&&Et.delete(kt.key===null?zt:kt.key),Q=A(kt,Q,zt),At===null?at=kt:At.sibling=kt,At=kt);return a&&Et.forEach(function(LS){return l(re,LS)}),Kt&&ds(re,zt),at}function Ai(re,Q,le,Ze){if(typeof le=="object"&&le!==null&&le.type===f&&le.key===null&&(le=le.props.children),typeof le=="object"&&le!==null){switch(le.$$typeof){case u:e:{for(var at=le.key,At=Q;At!==null;){if(At.key===at){if(at=le.type,at===f){if(At.tag===7){d(re,At.sibling),Q=S(At,le.props.children),Q.return=re,re=Q;break e}}else if(At.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===E&&ig(at)===At.type){d(re,At.sibling),Q=S(At,le.props),Q.ref=ua(re,At,le),Q.return=re,re=Q;break e}d(re,At);break}else l(re,At);At=At.sibling}le.type===f?(Q=ys(le.props.children,re.mode,Ze,le.key),Q.return=re,re=Q):(Ze=wc(le.type,le.key,le.props,null,re.mode,Ze),Ze.ref=ua(re,Q,le),Ze.return=re,re=Ze)}return B(re);case h:e:{for(At=le.key;Q!==null;){if(Q.key===At)if(Q.tag===4&&Q.stateNode.containerInfo===le.containerInfo&&Q.stateNode.implementation===le.implementation){d(re,Q.sibling),Q=S(Q,le.children||[]),Q.return=re,re=Q;break e}else{d(re,Q);break}else l(re,Q);Q=Q.sibling}Q=hd(le,re.mode,Ze),Q.return=re,re=Q}return B(re);case E:return At=le._init,Ai(re,Q,At(le._payload),Ze)}if(G(le))return lt(re,Q,le,Ze);if(C(le))return In(re,Q,le,Ze);Zl(re,le)}return typeof le=="string"&&le!==""||typeof le=="number"?(le=""+le,Q!==null&&Q.tag===6?(d(re,Q.sibling),Q=S(Q,le),Q.return=re,re=Q):(d(re,Q),Q=ud(le,re.mode,Ze),Q.return=re,re=Q),B(re)):d(re,Q)}return Ai}var lo=rg(!0),sg=rg(!1),ha={},bi=te(ha),fa=te(ha),co=te(ha);function Qi(a){if(a===ha)throw Error(o(174));return a}function Cf(a,l){Ae(co,l),Ae(fa,a),Ae(bi,ha),a=j(l),Ee(bi),Ae(bi,a)}function uo(){Ee(bi),Ee(fa),Ee(co)}function og(a){var l=Qi(co.current),d=Qi(bi.current);l=z(d,a.type,l),d!==l&&(Ae(fa,a),Ae(bi,l))}function Rf(a){fa.current===a&&(Ee(bi),Ee(fa))}var $t=te(0);function jl(a){for(var l=a;l!==null;){if(l.tag===13){var d=l.memoizedState;if(d!==null&&(d=d.dehydrated,d===null||ri(d)||cs(d)))return l}else if(l.tag===19&&l.memoizedProps.revealOrder!==void 0){if(l.flags&128)return l}else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===a)break;for(;l.sibling===null;){if(l.return===null||l.return===a)return null;l=l.return}l.sibling.return=l.return,l=l.sibling}return null}var Pf=[];function If(){for(var a=0;a<Pf.length;a++){var l=Pf[a];Ke?l._workInProgressVersionPrimary=null:l._workInProgressVersionSecondary=null}Pf.length=0}var Jl=c.ReactCurrentDispatcher,Ei=c.ReactCurrentBatchConfig,ho=0,rn=null,Cn=null,yn=null,Kl=!1,da=!1,pa=0,iS=0;function Rn(){throw Error(o(321))}function Lf(a,l){if(l===null)return!1;for(var d=0;d<l.length&&d<a.length;d++)if(!ji(a[d],l[d]))return!1;return!0}function Df(a,l,d,v,S,A){if(ho=A,rn=l,l.memoizedState=null,l.updateQueue=null,l.lanes=0,Jl.current=a===null||a.memoizedState===null?aS:lS,a=d(v,S),da){A=0;do{if(da=!1,pa=0,25<=A)throw Error(o(301));A+=1,yn=Cn=null,l.updateQueue=null,Jl.current=cS,a=d(v,S)}while(da)}if(Jl.current=nc,l=Cn!==null&&Cn.next!==null,ho=0,yn=Cn=rn=null,Kl=!1,l)throw Error(o(300));return a}function Nf(){var a=pa!==0;return pa=0,a}function Sr(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yn===null?rn.memoizedState=yn=a:yn=yn.next=a,yn}function $i(){if(Cn===null){var a=rn.alternate;a=a!==null?a.memoizedState:null}else a=Cn.next;var l=yn===null?rn.memoizedState:yn.next;if(l!==null)yn=l,Cn=a;else{if(a===null)throw Error(o(310));Cn=a,a={memoizedState:Cn.memoizedState,baseState:Cn.baseState,baseQueue:Cn.baseQueue,queue:Cn.queue,next:null},yn===null?rn.memoizedState=yn=a:yn=yn.next=a}return yn}function ps(a,l){return typeof l=="function"?l(a):l}function Ql(a){var l=$i(),d=l.queue;if(d===null)throw Error(o(311));d.lastRenderedReducer=a;var v=Cn,S=v.baseQueue,A=d.pending;if(A!==null){if(S!==null){var B=S.next;S.next=A.next,A.next=B}v.baseQueue=S=A,d.pending=null}if(S!==null){A=S.next,v=v.baseState;var q=B=null,he=null,Ne=A;do{var it=Ne.lane;if((ho&it)===it)he!==null&&(he=he.next={lane:0,action:Ne.action,hasEagerState:Ne.hasEagerState,eagerState:Ne.eagerState,next:null}),v=Ne.hasEagerState?Ne.eagerState:a(v,Ne.action);else{var bt={lane:it,action:Ne.action,hasEagerState:Ne.hasEagerState,eagerState:Ne.eagerState,next:null};he===null?(q=he=bt,B=v):he=he.next=bt,rn.lanes|=it,po|=it}Ne=Ne.next}while(Ne!==null&&Ne!==A);he===null?B=v:he.next=q,ji(v,l.memoizedState)||(li=!0),l.memoizedState=v,l.baseState=B,l.baseQueue=he,d.lastRenderedState=v}if(a=d.interleaved,a!==null){S=a;do A=S.lane,rn.lanes|=A,po|=A,S=S.next;while(S!==a)}else S===null&&(d.lanes=0);return[l.memoizedState,d.dispatch]}function $l(a){var l=$i(),d=l.queue;if(d===null)throw Error(o(311));d.lastRenderedReducer=a;var v=d.dispatch,S=d.pending,A=l.memoizedState;if(S!==null){d.pending=null;var B=S=S.next;do A=a(A,B.action),B=B.next;while(B!==S);ji(A,l.memoizedState)||(li=!0),l.memoizedState=A,l.baseQueue===null&&(l.baseState=A),d.lastRenderedState=A}return[A,v]}function ag(){}function lg(a,l){var d=rn,v=$i(),S=l(),A=!ji(v.memoizedState,S);if(A&&(v.memoizedState=S,li=!0),v=v.queue,ga(hg.bind(null,d,v,a),[a]),v.getSnapshot!==l||A||yn!==null&&yn.memoizedState.tag&1){if(d.flags|=2048,ma(9,ug.bind(null,d,v,S,l),void 0,null),un===null)throw Error(o(349));ho&30||cg(d,l,S)}return S}function cg(a,l,d){a.flags|=16384,a={getSnapshot:l,value:d},l=rn.updateQueue,l===null?(l={lastEffect:null,stores:null},rn.updateQueue=l,l.stores=[a]):(d=l.stores,d===null?l.stores=[a]:d.push(a))}function ug(a,l,d,v){l.value=d,l.getSnapshot=v,fg(l)&&wi(a,1,-1)}function hg(a,l,d){return d(function(){fg(l)&&wi(a,1,-1)})}function fg(a){var l=a.getSnapshot;a=a.value;try{var d=l();return!ji(a,d)}catch{return!0}}function Uf(a){var l=Sr();return typeof a=="function"&&(a=a()),l.memoizedState=l.baseState=a,a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ps,lastRenderedState:a},l.queue=a,a=a.dispatch=oS.bind(null,rn,a),[l.memoizedState,a]}function ma(a,l,d,v){return a={tag:a,create:l,destroy:d,deps:v,next:null},l=rn.updateQueue,l===null?(l={lastEffect:null,stores:null},rn.updateQueue=l,l.lastEffect=a.next=a):(d=l.lastEffect,d===null?l.lastEffect=a.next=a:(v=d.next,d.next=a,a.next=v,l.lastEffect=a)),a}function dg(){return $i().memoizedState}function ec(a,l,d,v){var S=Sr();rn.flags|=a,S.memoizedState=ma(1|l,d,void 0,v===void 0?null:v)}function tc(a,l,d,v){var S=$i();v=v===void 0?null:v;var A=void 0;if(Cn!==null){var B=Cn.memoizedState;if(A=B.destroy,v!==null&&Lf(v,B.deps)){S.memoizedState=ma(l,d,A,v);return}}rn.flags|=a,S.memoizedState=ma(1|l,d,A,v)}function Of(a,l){return ec(8390656,8,a,l)}function ga(a,l){return tc(2048,8,a,l)}function pg(a,l){return tc(4,2,a,l)}function mg(a,l){return tc(4,4,a,l)}function gg(a,l){if(typeof l=="function")return a=a(),l(a),function(){l(null)};if(l!=null)return a=a(),l.current=a,function(){l.current=null}}function vg(a,l,d){return d=d!=null?d.concat([a]):null,tc(4,4,gg.bind(null,l,a),d)}function Ff(){}function _g(a,l){var d=$i();l=l===void 0?null:l;var v=d.memoizedState;return v!==null&&l!==null&&Lf(l,v[1])?v[0]:(d.memoizedState=[a,l],a)}function xg(a,l){var d=$i();l=l===void 0?null:l;var v=d.memoizedState;return v!==null&&l!==null&&Lf(l,v[1])?v[0]:(a=a(),d.memoizedState=[a,l],a)}function rS(a,l){var d=Bt;Bt=d!==0&&4>d?d:4,a(!0);var v=Ei.transition;Ei.transition={};try{a(!1),l()}finally{Bt=d,Ei.transition=v}}function yg(){return $i().memoizedState}function sS(a,l,d){var v=Vr(a);d={lane:v,action:d,hasEagerState:!1,eagerState:null,next:null},Sg(a)?Mg(l,d):(bg(a,l,d),d=kn(),a=wi(a,v,d),a!==null&&Eg(a,l,v))}function oS(a,l,d){var v=Vr(a),S={lane:v,action:d,hasEagerState:!1,eagerState:null,next:null};if(Sg(a))Mg(l,S);else{bg(a,l,S);var A=a.alternate;if(a.lanes===0&&(A===null||A.lanes===0)&&(A=l.lastRenderedReducer,A!==null))try{var B=l.lastRenderedState,q=A(B,d);if(S.hasEagerState=!0,S.eagerState=q,ji(q,B))return}catch{}finally{}d=kn(),a=wi(a,v,d),a!==null&&Eg(a,l,v)}}function Sg(a){var l=a.alternate;return a===rn||l!==null&&l===rn}function Mg(a,l){da=Kl=!0;var d=a.pending;d===null?l.next=l:(l.next=d.next,d.next=l),a.pending=l}function bg(a,l,d){un!==null&&a.mode&1&&!(Ct&2)?(a=l.interleaved,a===null?(d.next=d,Ki===null?Ki=[l]:Ki.push(l)):(d.next=a.next,a.next=d),l.interleaved=d):(a=l.pending,a===null?d.next=d:(d.next=a.next,a.next=d),l.pending=d)}function Eg(a,l,d){if(d&4194240){var v=l.lanes;v&=a.pendingLanes,d|=v,l.lanes=d,hf(a,d)}}var nc={readContext:yi,useCallback:Rn,useContext:Rn,useEffect:Rn,useImperativeHandle:Rn,useInsertionEffect:Rn,useLayoutEffect:Rn,useMemo:Rn,useReducer:Rn,useRef:Rn,useState:Rn,useDebugValue:Rn,useDeferredValue:Rn,useTransition:Rn,useMutableSource:Rn,useSyncExternalStore:Rn,useId:Rn,unstable_isNewReconciler:!1},aS={readContext:yi,useCallback:function(a,l){return Sr().memoizedState=[a,l===void 0?null:l],a},useContext:yi,useEffect:Of,useImperativeHandle:function(a,l,d){return d=d!=null?d.concat([a]):null,ec(4194308,4,gg.bind(null,l,a),d)},useLayoutEffect:function(a,l){return ec(4194308,4,a,l)},useInsertionEffect:function(a,l){return ec(4,2,a,l)},useMemo:function(a,l){var d=Sr();return l=l===void 0?null:l,a=a(),d.memoizedState=[a,l],a},useReducer:function(a,l,d){var v=Sr();return l=d!==void 0?d(l):l,v.memoizedState=v.baseState=l,a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:l},v.queue=a,a=a.dispatch=sS.bind(null,rn,a),[v.memoizedState,a]},useRef:function(a){var l=Sr();return a={current:a},l.memoizedState=a},useState:Uf,useDebugValue:Ff,useDeferredValue:function(a){var l=Uf(a),d=l[0],v=l[1];return Of(function(){var S=Ei.transition;Ei.transition={};try{v(a)}finally{Ei.transition=S}},[a]),d},useTransition:function(){var a=Uf(!1),l=a[0];return a=rS.bind(null,a[1]),Sr().memoizedState=a,[l,a]},useMutableSource:function(){},useSyncExternalStore:function(a,l,d){var v=rn,S=Sr();if(Kt){if(d===void 0)throw Error(o(407));d=d()}else{if(d=l(),un===null)throw Error(o(349));ho&30||cg(v,l,d)}S.memoizedState=d;var A={value:d,getSnapshot:l};return S.queue=A,Of(hg.bind(null,v,A,a),[a]),v.flags|=2048,ma(9,ug.bind(null,v,A,d,l),void 0,null),d},useId:function(){var a=Sr(),l=un.identifierPrefix;if(Kt){var d=yr,v=xr;d=(v&~(1<<32-ke(v)-1)).toString(32)+d,l=":"+l+"R"+d,d=pa++,0<d&&(l+="H"+d.toString(32)),l+=":"}else d=iS++,l=":"+l+"r"+d.toString(32)+":";return a.memoizedState=l},unstable_isNewReconciler:!1},lS={readContext:yi,useCallback:_g,useContext:yi,useEffect:ga,useImperativeHandle:vg,useInsertionEffect:pg,useLayoutEffect:mg,useMemo:xg,useReducer:Ql,useRef:dg,useState:function(){return Ql(ps)},useDebugValue:Ff,useDeferredValue:function(a){var l=Ql(ps),d=l[0],v=l[1];return ga(function(){var S=Ei.transition;Ei.transition={};try{v(a)}finally{Ei.transition=S}},[a]),d},useTransition:function(){var a=Ql(ps)[0],l=$i().memoizedState;return[a,l]},useMutableSource:ag,useSyncExternalStore:lg,useId:yg,unstable_isNewReconciler:!1},cS={readContext:yi,useCallback:_g,useContext:yi,useEffect:ga,useImperativeHandle:vg,useInsertionEffect:pg,useLayoutEffect:mg,useMemo:xg,useReducer:$l,useRef:dg,useState:function(){return $l(ps)},useDebugValue:Ff,useDeferredValue:function(a){var l=$l(ps),d=l[0],v=l[1];return ga(function(){var S=Ei.transition;Ei.transition={};try{v(a)}finally{Ei.transition=S}},[a]),d},useTransition:function(){var a=$l(ps)[0],l=$i().memoizedState;return[a,l]},useMutableSource:ag,useSyncExternalStore:lg,useId:yg,unstable_isNewReconciler:!1};function Bf(a,l){try{var d="",v=l;do d+=nS(v),v=v.return;while(v);var S=d}catch(A){S=`
Error generating stack: `+A.message+`
`+A.stack}return{value:a,source:l,stack:S}}function zf(a,l){try{console.error(l.value)}catch(d){setTimeout(function(){throw d})}}var uS=typeof WeakMap=="function"?WeakMap:Map;function wg(a,l,d){d=_r(-1,d),d.tag=3,d.payload={element:null};var v=l.value;return d.callback=function(){_c||(_c=!0,id=v),zf(a,l)},d}function Tg(a,l,d){d=_r(-1,d),d.tag=3;var v=a.type.getDerivedStateFromError;if(typeof v=="function"){var S=l.value;d.payload=function(){return v(S)},d.callback=function(){zf(a,l)}}var A=a.stateNode;return A!==null&&typeof A.componentDidCatch=="function"&&(d.callback=function(){zf(a,l),typeof v!="function"&&(zr===null?zr=new Set([this]):zr.add(this));var B=l.stack;this.componentDidCatch(l.value,{componentStack:B!==null?B:""})}),d}function Ag(a,l,d){var v=a.pingCache;if(v===null){v=a.pingCache=new uS;var S=new Set;v.set(l,S)}else S=v.get(l),S===void 0&&(S=new Set,v.set(l,S));S.has(d)||(S.add(d),a=ES.bind(null,a,l,d),l.then(a,a))}function Cg(a){do{var l;if((l=a.tag===13)&&(l=a.memoizedState,l=l!==null?l.dehydrated!==null:!0),l)return a;a=a.return}while(a!==null);return null}function Rg(a,l,d,v,S){return a.mode&1?(a.flags|=65536,a.lanes=S,a):(a===l?a.flags|=65536:(a.flags|=128,d.flags|=131072,d.flags&=-52805,d.tag===1&&(d.alternate===null?d.tag=17:(l=_r(-1,1),l.tag=2,Br(d,l))),d.lanes|=1),a)}function er(a){a.flags|=4}function Pg(a,l){if(a!==null&&a.child===l.child)return!0;if(l.flags&16)return!1;for(a=l.child;a!==null;){if(a.flags&12854||a.subtreeFlags&12854)return!1;a=a.sibling}return!0}var va,_a,ic,rc;if(Pe)va=function(a,l){for(var d=l.child;d!==null;){if(d.tag===5||d.tag===6)pe(a,d.stateNode);else if(d.tag!==4&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===l)break;for(;d.sibling===null;){if(d.return===null||d.return===l)return;d=d.return}d.sibling.return=d.return,d=d.sibling}},_a=function(){},ic=function(a,l,d,v,S){if(a=a.memoizedProps,a!==v){var A=l.stateNode,B=Qi(bi.current);d=rt(A,d,a,v,S,B),(l.updateQueue=d)&&er(l)}},rc=function(a,l,d,v){d!==v&&er(l)};else if(gt){va=function(a,l,d,v){for(var S=l.child;S!==null;){if(S.tag===5){var A=S.stateNode;d&&v&&(A=nt(A,S.type,S.memoizedProps,S)),pe(a,A)}else if(S.tag===6)A=S.stateNode,d&&v&&(A=dt(A,S.memoizedProps,S)),pe(a,A);else if(S.tag!==4){if(S.tag===22&&S.memoizedState!==null)A=S.child,A!==null&&(A.return=S),va(a,S,!0,!0);else if(S.child!==null){S.child.return=S,S=S.child;continue}}if(S===l)break;for(;S.sibling===null;){if(S.return===null||S.return===l)return;S=S.return}S.sibling.return=S.return,S=S.sibling}};var Ig=function(a,l,d,v){for(var S=l.child;S!==null;){if(S.tag===5){var A=S.stateNode;d&&v&&(A=nt(A,S.type,S.memoizedProps,S)),Be(a,A)}else if(S.tag===6)A=S.stateNode,d&&v&&(A=dt(A,S.memoizedProps,S)),Be(a,A);else if(S.tag!==4){if(S.tag===22&&S.memoizedState!==null)A=S.child,A!==null&&(A.return=S),Ig(a,S,!0,!0);else if(S.child!==null){S.child.return=S,S=S.child;continue}}if(S===l)break;for(;S.sibling===null;){if(S.return===null||S.return===l)return;S=S.return}S.sibling.return=S.return,S=S.sibling}};_a=function(a,l){var d=l.stateNode;if(!Pg(a,l)){a=d.containerInfo;var v=fe(a);Ig(v,l,!1,!1),d.pendingChildren=v,er(l),Te(a,v)}},ic=function(a,l,d,v,S){var A=a.stateNode,B=a.memoizedProps;if((a=Pg(a,l))&&B===v)l.stateNode=A;else{var q=l.stateNode,he=Qi(bi.current),Ne=null;B!==v&&(Ne=rt(q,d,B,v,S,he)),a&&Ne===null?l.stateNode=A:(A=De(A,Ne,d,B,v,l,a,q),Ie(A,d,v,S,he)&&er(l),l.stateNode=A,a?er(l):va(A,l,!1,!1))}},rc=function(a,l,d,v){d!==v?(a=Qi(co.current),d=Qi(bi.current),l.stateNode=ae(v,a,d,l),er(l)):l.stateNode=a.stateNode}}else _a=function(){},ic=function(){},rc=function(){};function xa(a,l){if(!Kt)switch(a.tailMode){case"hidden":l=a.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?a.tail=null:d.sibling=null;break;case"collapsed":d=a.tail;for(var v=null;d!==null;)d.alternate!==null&&(v=d),d=d.sibling;v===null?l||a.tail===null?a.tail=null:a.tail.sibling=null:v.sibling=null}}function Pn(a){var l=a.alternate!==null&&a.alternate.child===a.child,d=0,v=0;if(l)for(var S=a.child;S!==null;)d|=S.lanes|S.childLanes,v|=S.subtreeFlags&14680064,v|=S.flags&14680064,S.return=a,S=S.sibling;else for(S=a.child;S!==null;)d|=S.lanes|S.childLanes,v|=S.subtreeFlags,v|=S.flags,S.return=a,S=S.sibling;return a.subtreeFlags|=v,a.childLanes=d,l}function hS(a,l,d){var v=l.pendingProps;switch(Ef(l),l.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pn(l),null;case 1:return je(l.type)&&Dt(),Pn(l),null;case 3:return v=l.stateNode,uo(),Ee(qe),Ee(We),If(),v.pendingContext&&(v.context=v.pendingContext,v.pendingContext=null),(a===null||a.child===null)&&(ca(l)?er(l):a===null||a.memoizedState.isDehydrated&&!(l.flags&256)||(l.flags|=1024,Ni!==null&&(od(Ni),Ni=null))),_a(a,l),Pn(l),null;case 5:Rf(l),d=Qi(co.current);var S=l.type;if(a!==null&&l.stateNode!=null)ic(a,l,S,v,d),a.ref!==l.ref&&(l.flags|=512,l.flags|=2097152);else{if(!v){if(l.stateNode===null)throw Error(o(166));return Pn(l),null}if(a=Qi(bi.current),ca(l)){if(!Ye)throw Error(o(175));a=Ll(l.stateNode,l.type,l.memoizedProps,d,a,l,!la),l.updateQueue=a,a!==null&&er(l)}else{var A=oe(S,v,d,a,l);va(A,l,!1,!1),l.stateNode=A,Ie(A,S,v,d,a)&&er(l)}l.ref!==null&&(l.flags|=512,l.flags|=2097152)}return Pn(l),null;case 6:if(a&&l.stateNode!=null)rc(a,l,a.memoizedProps,v);else{if(typeof v!="string"&&l.stateNode===null)throw Error(o(166));if(a=Qi(co.current),d=Qi(bi.current),ca(l)){if(!Ye)throw Error(o(176));if(a=l.stateNode,v=l.memoizedProps,(d=Dl(a,v,l,!la))&&(S=oi,S!==null))switch(A=(S.mode&1)!==0,S.tag){case 3:cf(S.stateNode.containerInfo,a,v,A);break;case 5:uf(S.type,S.memoizedProps,S.stateNode,a,v,A)}d&&er(l)}else l.stateNode=ae(v,a,d,l)}return Pn(l),null;case 13:if(Ee($t),v=l.memoizedState,Kt&&ai!==null&&l.mode&1&&!(l.flags&128)){for(a=ai;a;)a=Or(a);return ao(),l.flags|=98560,l}if(v!==null&&v.dehydrated!==null){if(v=ca(l),a===null){if(!v)throw Error(o(318));if(!Ye)throw Error(o(344));if(a=l.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(o(317));no(a,l)}else ao(),!(l.flags&128)&&(l.memoizedState=null),l.flags|=4;return Pn(l),null}return Ni!==null&&(od(Ni),Ni=null),l.flags&128?(l.lanes=d,l):(v=v!==null,d=!1,a===null?ca(l):d=a.memoizedState!==null,v&&!d&&(l.child.flags|=8192,l.mode&1&&(a===null||$t.current&1?pn===0&&(pn=3):ld())),l.updateQueue!==null&&(l.flags|=4),Pn(l),null);case 4:return uo(),_a(a,l),a===null&&be(l.stateNode.containerInfo),Pn(l),null;case 10:return _f(l.type._context),Pn(l),null;case 17:return je(l.type)&&Dt(),Pn(l),null;case 19:if(Ee($t),S=l.memoizedState,S===null)return Pn(l),null;if(v=(l.flags&128)!==0,A=S.rendering,A===null)if(v)xa(S,!1);else{if(pn!==0||a!==null&&a.flags&128)for(a=l.child;a!==null;){if(A=jl(a),A!==null){for(l.flags|=128,xa(S,!1),a=A.updateQueue,a!==null&&(l.updateQueue=a,l.flags|=4),l.subtreeFlags=0,a=d,v=l.child;v!==null;)d=v,S=a,d.flags&=14680066,A=d.alternate,A===null?(d.childLanes=0,d.lanes=S,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=A.childLanes,d.lanes=A.lanes,d.child=A.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=A.memoizedProps,d.memoizedState=A.memoizedState,d.updateQueue=A.updateQueue,d.type=A.type,S=A.dependencies,d.dependencies=S===null?null:{lanes:S.lanes,firstContext:S.firstContext}),v=v.sibling;return Ae($t,$t.current&1|2),l.child}a=a.sibling}S.tail!==null&&xn()>nd&&(l.flags|=128,v=!0,xa(S,!1),l.lanes=4194304)}else{if(!v)if(a=jl(A),a!==null){if(l.flags|=128,v=!0,a=a.updateQueue,a!==null&&(l.updateQueue=a,l.flags|=4),xa(S,!0),S.tail===null&&S.tailMode==="hidden"&&!A.alternate&&!Kt)return Pn(l),null}else 2*xn()-S.renderingStartTime>nd&&d!==1073741824&&(l.flags|=128,v=!0,xa(S,!1),l.lanes=4194304);S.isBackwards?(A.sibling=l.child,l.child=A):(a=S.last,a!==null?a.sibling=A:l.child=A,S.last=A)}return S.tail!==null?(l=S.tail,S.rendering=l,S.tail=l.sibling,S.renderingStartTime=xn(),l.sibling=null,a=$t.current,Ae($t,v?a&1|2:a&1),l):(Pn(l),null);case 22:case 23:return ad(),v=l.memoizedState!==null,a!==null&&a.memoizedState!==null!==v&&(l.flags|=8192),v&&l.mode&1?ci&1073741824&&(Pn(l),Pe&&l.subtreeFlags&6&&(l.flags|=8192)):Pn(l),null;case 24:return null;case 25:return null}throw Error(o(156,l.tag))}var fS=c.ReactCurrentOwner,li=!1;function zn(a,l,d,v){l.child=a===null?sg(l,null,d,v):lo(l,a.child,d,v)}function Lg(a,l,d,v,S){d=d.render;var A=l.ref;return ro(l,S),v=Df(a,l,d,v,A,S),d=Nf(),a!==null&&!li?(l.updateQueue=a.updateQueue,l.flags&=-2053,a.lanes&=~S,Mr(a,l,S)):(Kt&&d&&bf(l),l.flags|=1,zn(a,l,v,S),l.child)}function Dg(a,l,d,v,S){if(a===null){var A=d.type;return typeof A=="function"&&!cd(A)&&A.defaultProps===void 0&&d.compare===null&&d.defaultProps===void 0?(l.tag=15,l.type=A,Ng(a,l,A,v,S)):(a=wc(d.type,null,v,l,l.mode,S),a.ref=l.ref,a.return=l,l.child=a)}if(A=a.child,!(a.lanes&S)){var B=A.memoizedProps;if(d=d.compare,d=d!==null?d:kl,d(B,v)&&a.ref===l.ref)return Mr(a,l,S)}return l.flags|=1,a=Gr(A,v),a.ref=l.ref,a.return=l,l.child=a}function Ng(a,l,d,v,S){if(a!==null&&kl(a.memoizedProps,v)&&a.ref===l.ref)if(li=!1,(a.lanes&S)!==0)a.flags&131072&&(li=!0);else return l.lanes=a.lanes,Mr(a,l,S);return kf(a,l,d,v,S)}function Ug(a,l,d){var v=l.pendingProps,S=v.children,A=a!==null?a.memoizedState:null;if(v.mode==="hidden")if(!(l.mode&1))l.memoizedState={baseLanes:0,cachePool:null},Ae(fo,ci),ci|=d;else if(d&1073741824)l.memoizedState={baseLanes:0,cachePool:null},v=A!==null?A.baseLanes:d,Ae(fo,ci),ci|=v;else return a=A!==null?A.baseLanes|d:d,l.lanes=l.childLanes=1073741824,l.memoizedState={baseLanes:a,cachePool:null},l.updateQueue=null,Ae(fo,ci),ci|=a,null;else A!==null?(v=A.baseLanes|d,l.memoizedState=null):v=d,Ae(fo,ci),ci|=v;return zn(a,l,S,d),l.child}function Og(a,l){var d=l.ref;(a===null&&d!==null||a!==null&&a.ref!==d)&&(l.flags|=512,l.flags|=2097152)}function kf(a,l,d,v,S){var A=je(d)?mt:We.current;return A=xt(l,A),ro(l,S),d=Df(a,l,d,v,A,S),v=Nf(),a!==null&&!li?(l.updateQueue=a.updateQueue,l.flags&=-2053,a.lanes&=~S,Mr(a,l,S)):(Kt&&v&&bf(l),l.flags|=1,zn(a,l,d,S),l.child)}function Fg(a,l,d,v,S){if(je(d)){var A=!0;Ot(l)}else A=!1;if(ro(l,S),l.stateNode===null)a!==null&&(a.alternate=null,l.alternate=null,l.flags|=2),Km(l,d,v),Mf(l,d,v,S),v=!0;else if(a===null){var B=l.stateNode,q=l.memoizedProps;B.props=q;var he=B.context,Ne=d.contextType;typeof Ne=="object"&&Ne!==null?Ne=yi(Ne):(Ne=je(d)?mt:We.current,Ne=xt(l,Ne));var it=d.getDerivedStateFromProps,bt=typeof it=="function"||typeof B.getSnapshotBeforeUpdate=="function";bt||typeof B.UNSAFE_componentWillReceiveProps!="function"&&typeof B.componentWillReceiveProps!="function"||(q!==v||he!==Ne)&&Qm(l,B,v,Ne),Fr=!1;var ht=l.memoizedState;B.state=ht,Wl(l,v,B,S),he=l.memoizedState,q!==v||ht!==he||qe.current||Fr?(typeof it=="function"&&(Sf(l,d,it,v),he=l.memoizedState),(q=Fr||Jm(l,d,q,v,ht,he,Ne))?(bt||typeof B.UNSAFE_componentWillMount!="function"&&typeof B.componentWillMount!="function"||(typeof B.componentWillMount=="function"&&B.componentWillMount(),typeof B.UNSAFE_componentWillMount=="function"&&B.UNSAFE_componentWillMount()),typeof B.componentDidMount=="function"&&(l.flags|=4194308)):(typeof B.componentDidMount=="function"&&(l.flags|=4194308),l.memoizedProps=v,l.memoizedState=he),B.props=v,B.state=he,B.context=Ne,v=q):(typeof B.componentDidMount=="function"&&(l.flags|=4194308),v=!1)}else{B=l.stateNode,Ym(a,l),q=l.memoizedProps,Ne=l.type===l.elementType?q:Di(l.type,q),B.props=Ne,bt=l.pendingProps,ht=B.context,he=d.contextType,typeof he=="object"&&he!==null?he=yi(he):(he=je(d)?mt:We.current,he=xt(l,he));var Yt=d.getDerivedStateFromProps;(it=typeof Yt=="function"||typeof B.getSnapshotBeforeUpdate=="function")||typeof B.UNSAFE_componentWillReceiveProps!="function"&&typeof B.componentWillReceiveProps!="function"||(q!==bt||ht!==he)&&Qm(l,B,v,he),Fr=!1,ht=l.memoizedState,B.state=ht,Wl(l,v,B,S);var lt=l.memoizedState;q!==bt||ht!==lt||qe.current||Fr?(typeof Yt=="function"&&(Sf(l,d,Yt,v),lt=l.memoizedState),(Ne=Fr||Jm(l,d,Ne,v,ht,lt,he)||!1)?(it||typeof B.UNSAFE_componentWillUpdate!="function"&&typeof B.componentWillUpdate!="function"||(typeof B.componentWillUpdate=="function"&&B.componentWillUpdate(v,lt,he),typeof B.UNSAFE_componentWillUpdate=="function"&&B.UNSAFE_componentWillUpdate(v,lt,he)),typeof B.componentDidUpdate=="function"&&(l.flags|=4),typeof B.getSnapshotBeforeUpdate=="function"&&(l.flags|=1024)):(typeof B.componentDidUpdate!="function"||q===a.memoizedProps&&ht===a.memoizedState||(l.flags|=4),typeof B.getSnapshotBeforeUpdate!="function"||q===a.memoizedProps&&ht===a.memoizedState||(l.flags|=1024),l.memoizedProps=v,l.memoizedState=lt),B.props=v,B.state=lt,B.context=he,v=Ne):(typeof B.componentDidUpdate!="function"||q===a.memoizedProps&&ht===a.memoizedState||(l.flags|=4),typeof B.getSnapshotBeforeUpdate!="function"||q===a.memoizedProps&&ht===a.memoizedState||(l.flags|=1024),v=!1)}return Vf(a,l,d,v,A,S)}function Vf(a,l,d,v,S,A){Og(a,l);var B=(l.flags&128)!==0;if(!v&&!B)return S&&dn(l,d,!1),Mr(a,l,A);v=l.stateNode,fS.current=l;var q=B&&typeof d.getDerivedStateFromError!="function"?null:v.render();return l.flags|=1,a!==null&&B?(l.child=lo(l,a.child,null,A),l.child=lo(l,null,q,A)):zn(a,l,q,A),l.memoizedState=v.state,S&&dn(l,d,!0),l.child}function Bg(a){var l=a.stateNode;l.pendingContext?Jt(a,l.pendingContext,l.pendingContext!==l.context):l.context&&Jt(a,l.context,!1),Cf(a,l.containerInfo)}function zg(a,l,d,v,S){return ao(),Af(S),l.flags|=256,zn(a,l,d,v),l.child}var sc={dehydrated:null,treeContext:null,retryLane:0};function oc(a){return{baseLanes:a,cachePool:null}}function kg(a,l,d){var v=l.pendingProps,S=$t.current,A=!1,B=(l.flags&128)!==0,q;if((q=B)||(q=a!==null&&a.memoizedState===null?!1:(S&2)!==0),q?(A=!0,l.flags&=-129):(a===null||a.memoizedState!==null)&&(S|=1),Ae($t,S&1),a===null)return Tf(l),a=l.memoizedState,a!==null&&(a=a.dehydrated,a!==null)?(l.mode&1?cs(a)?l.lanes=8:l.lanes=1073741824:l.lanes=1,null):(S=v.children,a=v.fallback,A?(v=l.mode,A=l.child,S={mode:"hidden",children:S},!(v&1)&&A!==null?(A.childLanes=0,A.pendingProps=S):A=Tc(S,v,0,null),a=ys(a,v,d,null),A.return=l,a.return=l,A.sibling=a,l.child=A,l.child.memoizedState=oc(d),l.memoizedState=sc,a):Hf(l,S));if(S=a.memoizedState,S!==null){if(q=S.dehydrated,q!==null){if(B)return l.flags&256?(l.flags&=-257,ac(a,l,d,Error(o(422)))):l.memoizedState!==null?(l.child=a.child,l.flags|=128,null):(A=v.fallback,S=l.mode,v=Tc({mode:"visible",children:v.children},S,0,null),A=ys(A,S,d,null),A.flags|=2,v.return=l,A.return=l,v.sibling=A,l.child=v,l.mode&1&&lo(l,a.child,null,d),l.child.memoizedState=oc(d),l.memoizedState=sc,A);if(!(l.mode&1))l=ac(a,l,d,null);else if(cs(q))l=ac(a,l,d,Error(o(419)));else if(v=(d&a.childLanes)!==0,li||v){if(v=un,v!==null){switch(d&-d){case 4:A=2;break;case 16:A=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:A=32;break;case 536870912:A=268435456;break;default:A=0}v=A&(v.suspendedLanes|d)?0:A,v!==0&&v!==S.retryLane&&(S.retryLane=v,wi(a,v,-1))}ld(),l=ac(a,l,d,Error(o(421)))}else ri(q)?(l.flags|=128,l.child=a.child,l=wS.bind(null,a),of(q,l),l=null):(d=S.treeContext,Ye&&(ai=sa(q),oi=l,Kt=!0,Ni=null,la=!1,d!==null&&(Si[Mi++]=xr,Si[Mi++]=yr,Si[Mi++]=fs,xr=d.id,yr=d.overflow,fs=l)),l=Hf(l,l.pendingProps.children),l.flags|=4096);return l}return A?(v=Hg(a,l,v.children,v.fallback,d),A=l.child,S=a.child.memoizedState,A.memoizedState=S===null?oc(d):{baseLanes:S.baseLanes|d,cachePool:null},A.childLanes=a.childLanes&~d,l.memoizedState=sc,v):(d=Vg(a,l,v.children,d),l.memoizedState=null,d)}return A?(v=Hg(a,l,v.children,v.fallback,d),A=l.child,S=a.child.memoizedState,A.memoizedState=S===null?oc(d):{baseLanes:S.baseLanes|d,cachePool:null},A.childLanes=a.childLanes&~d,l.memoizedState=sc,v):(d=Vg(a,l,v.children,d),l.memoizedState=null,d)}function Hf(a,l){return l=Tc({mode:"visible",children:l},a.mode,0,null),l.return=a,a.child=l}function Vg(a,l,d,v){var S=a.child;return a=S.sibling,d=Gr(S,{mode:"visible",children:d}),!(l.mode&1)&&(d.lanes=v),d.return=l,d.sibling=null,a!==null&&(v=l.deletions,v===null?(l.deletions=[a],l.flags|=16):v.push(a)),l.child=d}function Hg(a,l,d,v,S){var A=l.mode;a=a.child;var B=a.sibling,q={mode:"hidden",children:d};return!(A&1)&&l.child!==a?(d=l.child,d.childLanes=0,d.pendingProps=q,l.deletions=null):(d=Gr(a,q),d.subtreeFlags=a.subtreeFlags&14680064),B!==null?v=Gr(B,v):(v=ys(v,A,S,null),v.flags|=2),v.return=l,d.return=l,d.sibling=v,l.child=d,v}function ac(a,l,d,v){return v!==null&&Af(v),lo(l,a.child,null,d),a=Hf(l,l.pendingProps.children),a.flags|=2,l.memoizedState=null,a}function Gg(a,l,d){a.lanes|=l;var v=a.alternate;v!==null&&(v.lanes|=l),xf(a.return,l,d)}function Gf(a,l,d,v,S){var A=a.memoizedState;A===null?a.memoizedState={isBackwards:l,rendering:null,renderingStartTime:0,last:v,tail:d,tailMode:S}:(A.isBackwards=l,A.rendering=null,A.renderingStartTime=0,A.last=v,A.tail=d,A.tailMode=S)}function Wg(a,l,d){var v=l.pendingProps,S=v.revealOrder,A=v.tail;if(zn(a,l,v.children,d),v=$t.current,v&2)v=v&1|2,l.flags|=128;else{if(a!==null&&a.flags&128)e:for(a=l.child;a!==null;){if(a.tag===13)a.memoizedState!==null&&Gg(a,d,l);else if(a.tag===19)Gg(a,d,l);else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===l)break e;for(;a.sibling===null;){if(a.return===null||a.return===l)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}v&=1}if(Ae($t,v),!(l.mode&1))l.memoizedState=null;else switch(S){case"forwards":for(d=l.child,S=null;d!==null;)a=d.alternate,a!==null&&jl(a)===null&&(S=d),d=d.sibling;d=S,d===null?(S=l.child,l.child=null):(S=d.sibling,d.sibling=null),Gf(l,!1,S,d,A);break;case"backwards":for(d=null,S=l.child,l.child=null;S!==null;){if(a=S.alternate,a!==null&&jl(a)===null){l.child=S;break}a=S.sibling,S.sibling=d,d=S,S=a}Gf(l,!0,d,null,A);break;case"together":Gf(l,!1,null,null,void 0);break;default:l.memoizedState=null}return l.child}function Mr(a,l,d){if(a!==null&&(l.dependencies=a.dependencies),po|=l.lanes,!(d&l.childLanes))return null;if(a!==null&&l.child!==a.child)throw Error(o(153));if(l.child!==null){for(a=l.child,d=Gr(a,a.pendingProps),l.child=d,d.return=l;a.sibling!==null;)a=a.sibling,d=d.sibling=Gr(a,a.pendingProps),d.return=l;d.sibling=null}return l.child}function dS(a,l,d){switch(l.tag){case 3:Bg(l),ao();break;case 5:og(l);break;case 1:je(l.type)&&Ot(l);break;case 4:Cf(l,l.stateNode.containerInfo);break;case 10:Xm(l,l.type._context,l.memoizedProps.value);break;case 13:var v=l.memoizedState;if(v!==null)return v.dehydrated!==null?(Ae($t,$t.current&1),l.flags|=128,null):d&l.child.childLanes?kg(a,l,d):(Ae($t,$t.current&1),a=Mr(a,l,d),a!==null?a.sibling:null);Ae($t,$t.current&1);break;case 19:if(v=(d&l.childLanes)!==0,a.flags&128){if(v)return Wg(a,l,d);l.flags|=128}var S=l.memoizedState;if(S!==null&&(S.rendering=null,S.tail=null,S.lastEffect=null),Ae($t,$t.current),v)break;return null;case 22:case 23:return l.lanes=0,Ug(a,l,d)}return Mr(a,l,d)}function pS(a,l){switch(Ef(l),l.tag){case 1:return je(l.type)&&Dt(),a=l.flags,a&65536?(l.flags=a&-65537|128,l):null;case 3:return uo(),Ee(qe),Ee(We),If(),a=l.flags,a&65536&&!(a&128)?(l.flags=a&-65537|128,l):null;case 5:return Rf(l),null;case 13:if(Ee($t),a=l.memoizedState,a!==null&&a.dehydrated!==null){if(l.alternate===null)throw Error(o(340));ao()}return a=l.flags,a&65536?(l.flags=a&-65537|128,l):null;case 19:return Ee($t),null;case 4:return uo(),null;case 10:return _f(l.type._context),null;case 22:case 23:return ad(),null;case 24:return null;default:return null}}var lc=!1,ms=!1,mS=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function cc(a,l){var d=a.ref;if(d!==null)if(typeof d=="function")try{d(null)}catch(v){Kn(a,l,v)}else d.current=null}function Wf(a,l,d){try{d()}catch(v){Kn(a,l,v)}}var Xg=!1;function gS(a,l){for(X(a.containerInfo),Xe=l;Xe!==null;)if(a=Xe,l=a.child,(a.subtreeFlags&1028)!==0&&l!==null)l.return=a,Xe=l;else for(;Xe!==null;){a=Xe;try{var d=a.alternate;if(a.flags&1024)switch(a.tag){case 0:case 11:case 15:break;case 1:if(d!==null){var v=d.memoizedProps,S=d.memoizedState,A=a.stateNode,B=A.getSnapshotBeforeUpdate(a.elementType===a.type?v:Di(a.type,v),S);A.__reactInternalSnapshotBeforeUpdate=B}break;case 3:Pe&&W(a.stateNode.containerInfo);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(q){Kn(a,a.return,q)}if(l=a.sibling,l!==null){l.return=a.return,Xe=l;break}Xe=a.return}return d=Xg,Xg=!1,d}function gs(a,l,d){var v=l.updateQueue;if(v=v!==null?v.lastEffect:null,v!==null){var S=v=v.next;do{if((S.tag&a)===a){var A=S.destroy;S.destroy=void 0,A!==void 0&&Wf(l,d,A)}S=S.next}while(S!==v)}}function ya(a,l){if(l=l.updateQueue,l=l!==null?l.lastEffect:null,l!==null){var d=l=l.next;do{if((d.tag&a)===a){var v=d.create;d.destroy=v()}d=d.next}while(d!==l)}}function Xf(a){var l=a.ref;if(l!==null){var d=a.stateNode;switch(a.tag){case 5:a=Z(d);break;default:a=d}typeof l=="function"?l(a):l.current=a}}function Yg(a,l,d){if(Zi&&typeof Zi.onCommitFiberUnmount=="function")try{Zi.onCommitFiberUnmount(Bl,l)}catch{}switch(l.tag){case 0:case 11:case 14:case 15:if(a=l.updateQueue,a!==null&&(a=a.lastEffect,a!==null)){var v=a=a.next;do{var S=v,A=S.destroy;S=S.tag,A!==void 0&&(S&2||S&4)&&Wf(l,d,A),v=v.next}while(v!==a)}break;case 1:if(cc(l,d),a=l.stateNode,typeof a.componentWillUnmount=="function")try{a.props=l.memoizedProps,a.state=l.memoizedState,a.componentWillUnmount()}catch(B){Kn(l,d,B)}break;case 5:cc(l,d);break;case 4:Pe?Qg(a,l,d):gt&&gt&&(l=l.stateNode.containerInfo,d=fe(l),_e(l,d))}}function qg(a,l,d){for(var v=l;;)if(Yg(a,v,d),v.child===null||Pe&&v.tag===4){if(v===l)break;for(;v.sibling===null;){if(v.return===null||v.return===l)return;v=v.return}v.sibling.return=v.return,v=v.sibling}else v.child.return=v,v=v.child}function Zg(a){var l=a.alternate;l!==null&&(a.alternate=null,Zg(l)),a.child=null,a.deletions=null,a.sibling=null,a.tag===5&&(l=a.stateNode,l!==null&&Oe(l)),a.stateNode=null,a.return=null,a.dependencies=null,a.memoizedProps=null,a.memoizedState=null,a.pendingProps=null,a.stateNode=null,a.updateQueue=null}function jg(a){return a.tag===5||a.tag===3||a.tag===4}function Jg(a){e:for(;;){for(;a.sibling===null;){if(a.return===null||jg(a.return))return null;a=a.return}for(a.sibling.return=a.return,a=a.sibling;a.tag!==5&&a.tag!==6&&a.tag!==18;){if(a.flags&2||a.child===null||a.tag===4)continue e;a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}function Kg(a){if(Pe){e:{for(var l=a.return;l!==null;){if(jg(l))break e;l=l.return}throw Error(o(160))}var d=l;switch(d.tag){case 5:l=d.stateNode,d.flags&32&&(ee(l),d.flags&=-33),d=Jg(a),qf(a,d,l);break;case 3:case 4:l=d.stateNode.containerInfo,d=Jg(a),Yf(a,d,l);break;default:throw Error(o(161))}}}function Yf(a,l,d){var v=a.tag;if(v===5||v===6)a=a.stateNode,l?ge(d,a,l):de(d,a);else if(v!==4&&(a=a.child,a!==null))for(Yf(a,l,d),a=a.sibling;a!==null;)Yf(a,l,d),a=a.sibling}function qf(a,l,d){var v=a.tag;if(v===5||v===6)a=a.stateNode,l?ce(d,a,l):$(d,a);else if(v!==4&&(a=a.child,a!==null))for(qf(a,l,d),a=a.sibling;a!==null;)qf(a,l,d),a=a.sibling}function Qg(a,l,d){for(var v=l,S=!1,A,B;;){if(!S){S=v.return;e:for(;;){if(S===null)throw Error(o(160));switch(A=S.stateNode,S.tag){case 5:B=!1;break e;case 3:A=A.containerInfo,B=!0;break e;case 4:A=A.containerInfo,B=!0;break e}S=S.return}S=!0}if(v.tag===5||v.tag===6)qg(a,v,d),B?V(A,v.stateNode):Ve(A,v.stateNode);else if(v.tag===18)B?af(A,v.stateNode):Ol(A,v.stateNode);else if(v.tag===4){if(v.child!==null){A=v.stateNode.containerInfo,B=!0,v.child.return=v,v=v.child;continue}}else if(Yg(a,v,d),v.child!==null){v.child.return=v,v=v.child;continue}if(v===l)break;for(;v.sibling===null;){if(v.return===null||v.return===l)return;v=v.return,v.tag===4&&(S=!1)}v.sibling.return=v.return,v=v.sibling}}function Zf(a,l){if(Pe){switch(l.tag){case 0:case 11:case 14:case 15:gs(3,l,l.return),ya(3,l),gs(5,l,l.return);return;case 1:return;case 5:var d=l.stateNode;if(d!=null){var v=l.memoizedProps;a=a!==null?a.memoizedProps:v;var S=l.type,A=l.updateQueue;l.updateQueue=null,A!==null&&Le(d,A,S,a,v,l)}return;case 6:if(l.stateNode===null)throw Error(o(162));d=l.memoizedProps,ye(l.stateNode,a!==null?a.memoizedProps:d,d);return;case 3:Ye&&a!==null&&a.memoizedState.isDehydrated&&us(l.stateNode.containerInfo);return;case 12:return;case 13:uc(l);return;case 19:uc(l);return;case 17:return}throw Error(o(163))}switch(l.tag){case 0:case 11:case 14:case 15:gs(3,l,l.return),ya(3,l),gs(5,l,l.return);return;case 12:return;case 13:uc(l);return;case 19:uc(l);return;case 3:Ye&&a!==null&&a.memoizedState.isDehydrated&&us(l.stateNode.containerInfo);break;case 22:case 23:return}e:if(gt){switch(l.tag){case 1:case 5:case 6:break e;case 3:case 4:l=l.stateNode,_e(l.containerInfo,l.pendingChildren);break e}throw Error(o(163))}}function uc(a){var l=a.updateQueue;if(l!==null){a.updateQueue=null;var d=a.stateNode;d===null&&(d=a.stateNode=new mS),l.forEach(function(v){var S=TS.bind(null,a,v);d.has(v)||(d.add(v),v.then(S,S))})}}function vS(a,l){for(Xe=l;Xe!==null;){l=Xe;var d=l.deletions;if(d!==null)for(var v=0;v<d.length;v++){var S=d[v];try{var A=a;Pe?Qg(A,S,l):qg(A,S,l);var B=S.alternate;B!==null&&(B.return=null),S.return=null}catch(at){Kn(S,l,at)}}if(d=l.child,l.subtreeFlags&12854&&d!==null)d.return=l,Xe=d;else for(;Xe!==null;){l=Xe;try{var q=l.flags;if(q&32&&Pe&&ee(l.stateNode),q&512){var he=l.alternate;if(he!==null){var Ne=he.ref;Ne!==null&&(typeof Ne=="function"?Ne(null):Ne.current=null)}}if(q&8192)switch(l.tag){case 13:if(l.memoizedState!==null){var it=l.alternate;(it===null||it.memoizedState===null)&&(td=xn())}break;case 22:var bt=l.memoizedState!==null,ht=l.alternate,Yt=ht!==null&&ht.memoizedState!==null;if(d=l,Pe){e:if(v=d,S=bt,A=null,Pe)for(var lt=v;;){if(lt.tag===5){if(A===null){A=lt;var In=lt.stateNode;S?ue(In):st(lt.stateNode,lt.memoizedProps)}}else if(lt.tag===6){if(A===null){var Ai=lt.stateNode;S?He(Ai):St(Ai,lt.memoizedProps)}}else if((lt.tag!==22&&lt.tag!==23||lt.memoizedState===null||lt===v)&&lt.child!==null){lt.child.return=lt,lt=lt.child;continue}if(lt===v)break;for(;lt.sibling===null;){if(lt.return===null||lt.return===v)break e;A===lt&&(A=null),lt=lt.return}A===lt&&(A=null),lt.sibling.return=lt.return,lt=lt.sibling}}if(bt&&!Yt&&d.mode&1){Xe=d;for(var re=d.child;re!==null;){for(d=Xe=re;Xe!==null;){v=Xe;var Q=v.child;switch(v.tag){case 0:case 11:case 14:case 15:gs(4,v,v.return);break;case 1:cc(v,v.return);var le=v.stateNode;if(typeof le.componentWillUnmount=="function"){var Ze=v.return;try{le.props=v.memoizedProps,le.state=v.memoizedState,le.componentWillUnmount()}catch(at){Kn(v,Ze,at)}}break;case 5:cc(v,v.return);break;case 22:if(v.memoizedState!==null){t0(d);continue}}Q!==null?(Q.return=v,Xe=Q):t0(d)}re=re.sibling}}}switch(q&4102){case 2:Kg(l),l.flags&=-3;break;case 6:Kg(l),l.flags&=-3,Zf(l.alternate,l);break;case 4096:l.flags&=-4097;break;case 4100:l.flags&=-4097,Zf(l.alternate,l);break;case 4:Zf(l.alternate,l)}}catch(at){Kn(l,l.return,at)}if(d=l.sibling,d!==null){d.return=l.return,Xe=d;break}Xe=l.return}}}function _S(a,l,d){Xe=a,$g(a)}function $g(a,l,d){for(var v=(a.mode&1)!==0;Xe!==null;){var S=Xe,A=S.child;if(S.tag===22&&v){var B=S.memoizedState!==null||lc;if(!B){var q=S.alternate,he=q!==null&&q.memoizedState!==null||ms;q=lc;var Ne=ms;if(lc=B,(ms=he)&&!Ne)for(Xe=S;Xe!==null;)B=Xe,he=B.child,B.tag===22&&B.memoizedState!==null?n0(S):he!==null?(he.return=B,Xe=he):n0(S);for(;A!==null;)Xe=A,$g(A),A=A.sibling;Xe=S,lc=q,ms=Ne}e0(a)}else S.subtreeFlags&8772&&A!==null?(A.return=S,Xe=A):e0(a)}}function e0(a){for(;Xe!==null;){var l=Xe;if(l.flags&8772){var d=l.alternate;try{if(l.flags&8772)switch(l.tag){case 0:case 11:case 15:ms||ya(5,l);break;case 1:var v=l.stateNode;if(l.flags&4&&!ms)if(d===null)v.componentDidMount();else{var S=l.elementType===l.type?d.memoizedProps:Di(l.type,d.memoizedProps);v.componentDidUpdate(S,d.memoizedState,v.__reactInternalSnapshotBeforeUpdate)}var A=l.updateQueue;A!==null&&Zm(l,A,v);break;case 3:var B=l.updateQueue;if(B!==null){if(d=null,l.child!==null)switch(l.child.tag){case 5:d=Z(l.child.stateNode);break;case 1:d=l.child.stateNode}Zm(l,B,d)}break;case 5:var q=l.stateNode;d===null&&l.flags&4&&Ce(q,l.type,l.memoizedProps,l);break;case 6:break;case 4:break;case 12:break;case 13:if(Ye&&l.memoizedState===null){var he=l.alternate;if(he!==null){var Ne=he.memoizedState;if(Ne!==null){var it=Ne.dehydrated;it!==null&&Ul(it)}}}break;case 19:case 17:case 21:case 22:case 23:break;default:throw Error(o(163))}ms||l.flags&512&&Xf(l)}catch(bt){Kn(l,l.return,bt)}}if(l===a){Xe=null;break}if(d=l.sibling,d!==null){d.return=l.return,Xe=d;break}Xe=l.return}}function t0(a){for(;Xe!==null;){var l=Xe;if(l===a){Xe=null;break}var d=l.sibling;if(d!==null){d.return=l.return,Xe=d;break}Xe=l.return}}function n0(a){for(;Xe!==null;){var l=Xe;try{switch(l.tag){case 0:case 11:case 15:var d=l.return;try{ya(4,l)}catch(he){Kn(l,d,he)}break;case 1:var v=l.stateNode;if(typeof v.componentDidMount=="function"){var S=l.return;try{v.componentDidMount()}catch(he){Kn(l,S,he)}}var A=l.return;try{Xf(l)}catch(he){Kn(l,A,he)}break;case 5:var B=l.return;try{Xf(l)}catch(he){Kn(l,B,he)}}}catch(he){Kn(l,l.return,he)}if(l===a){Xe=null;break}var q=l.sibling;if(q!==null){q.return=l.return,Xe=q;break}Xe=l.return}}var hc=0,fc=1,dc=2,pc=3,mc=4;if(typeof Symbol=="function"&&Symbol.for){var Sa=Symbol.for;hc=Sa("selector.component"),fc=Sa("selector.has_pseudo_class"),dc=Sa("selector.role"),pc=Sa("selector.test_id"),mc=Sa("selector.text")}function jf(a){var l=ve(a);if(l!=null){if(typeof l.memoizedProps["data-testname"]!="string")throw Error(o(364));return l}if(a=pt(a),a===null)throw Error(o(362));return a.stateNode.current}function Jf(a,l){switch(l.$$typeof){case hc:if(a.type===l.value)return!0;break;case fc:e:{l=l.value,a=[a,0];for(var d=0;d<a.length;){var v=a[d++],S=a[d++],A=l[S];if(v.tag!==5||!Me(v)){for(;A!=null&&Jf(v,A);)S++,A=l[S];if(S===l.length){l=!0;break e}else for(v=v.child;v!==null;)a.push(v,S),v=v.sibling}}l=!1}return l;case dc:if(a.tag===5&&Pt(a.stateNode,l.value))return!0;break;case mc:if((a.tag===5||a.tag===6)&&(a=ut(a),a!==null&&0<=a.indexOf(l.value)))return!0;break;case pc:if(a.tag===5&&(a=a.memoizedProps["data-testname"],typeof a=="string"&&a.toLowerCase()===l.value.toLowerCase()))return!0;break;default:throw Error(o(365))}return!1}function Kf(a){switch(a.$$typeof){case hc:return"<"+(O(a.value)||"Unknown")+">";case fc:return":has("+(Kf(a)||"")+")";case dc:return'[role="'+a.value+'"]';case mc:return'"'+a.value+'"';case pc:return'[data-testname="'+a.value+'"]';default:throw Error(o(365))}}function i0(a,l){var d=[];a=[a,0];for(var v=0;v<a.length;){var S=a[v++],A=a[v++],B=l[A];if(S.tag!==5||!Me(S)){for(;B!=null&&Jf(S,B);)A++,B=l[A];if(A===l.length)d.push(S);else for(S=S.child;S!==null;)a.push(S,A),S=S.sibling}}return d}function Qf(a,l){if(!k)throw Error(o(363));a=jf(a),a=i0(a,l),l=[],a=Array.from(a);for(var d=0;d<a.length;){var v=a[d++];if(v.tag===5)Me(v)||l.push(v.stateNode);else for(v=v.child;v!==null;)a.push(v),v=v.sibling}return l}var xS=Math.ceil,gc=c.ReactCurrentDispatcher,$f=c.ReactCurrentOwner,on=c.ReactCurrentBatchConfig,Ct=0,un=null,hn=null,bn=0,ci=0,fo=te(0),pn=0,Ma=null,po=0,vc=0,ed=0,ba=null,jn=null,td=0,nd=1/0;function mo(){nd=xn()+500}var _c=!1,id=null,zr=null,xc=!1,kr=null,yc=0,Ea=0,rd=null,Sc=-1,Mc=0;function kn(){return Ct&6?xn():Sc!==-1?Sc:Sc=xn()}function Vr(a){return a.mode&1?Ct&2&&bn!==0?bn&-bn:tS.transition!==null?(Mc===0&&(a=Bn,Bn<<=1,!(Bn&4194240)&&(Bn=64),Mc=a),Mc):(a=Bt,a!==0?a:xe()):1}function wi(a,l,d){if(50<Ea)throw Ea=0,rd=null,Error(o(185));var v=bc(a,l);return v===null?null:(xi(v,l,d),(!(Ct&2)||v!==un)&&(v===un&&(!(Ct&2)&&(vc|=l),pn===4&&Hr(v,bn)),Jn(v,d),l===1&&Ct===0&&!(a.mode&1)&&(mo(),zl&&Ji())),v)}function bc(a,l){a.lanes|=l;var d=a.alternate;for(d!==null&&(d.lanes|=l),d=a,a=a.return;a!==null;)a.childLanes|=l,d=a.alternate,d!==null&&(d.childLanes|=l),d=a,a=a.return;return d.tag===3?d.stateNode:null}function Jn(a,l){var d=a.callbackNode;qi(a,l);var v=Ft(a,a===un?bn:0);if(v===0)d!==null&&Gm(d),a.callbackNode=null,a.callbackPriority=0;else if(l=v&-v,a.callbackPriority!==l){if(d!=null&&Gm(d),l===1)a.tag===0?eS(s0.bind(null,a)):Wm(s0.bind(null,a)),Ue?ct(function(){Ct===0&&Ji()}):ff(df,Ji),d=null;else{switch(Hm(v)){case 1:d=df;break;case 4:d=Jy;break;case 16:d=pf;break;case 536870912:d=Ky;break;default:d=pf}d=p0(d,r0.bind(null,a))}a.callbackPriority=l,a.callbackNode=d}}function r0(a,l){if(Sc=-1,Mc=0,Ct&6)throw Error(o(327));var d=a.callbackNode;if(xs()&&a.callbackNode!==d)return null;var v=Ft(a,a===un?bn:0);if(v===0)return null;if(v&30||v&a.expiredLanes||l)l=Ec(a,v);else{l=v;var S=Ct;Ct|=2;var A=l0();(un!==a||bn!==l)&&(mo(),vs(a,l));do try{MS();break}catch(q){a0(a,q)}while(!0);vf(),gc.current=A,Ct=S,hn!==null?l=0:(un=null,bn=0,l=pn)}if(l!==0){if(l===2&&(S=Ht(a),S!==0&&(v=S,l=sd(a,S))),l===1)throw d=Ma,vs(a,0),Hr(a,v),Jn(a,xn()),d;if(l===6)Hr(a,v);else{if(S=a.current.alternate,!(v&30)&&!yS(S)&&(l=Ec(a,v),l===2&&(A=Ht(a),A!==0&&(v=A,l=sd(a,A))),l===1))throw d=Ma,vs(a,0),Hr(a,v),Jn(a,xn()),d;switch(a.finishedWork=S,a.finishedLanes=v,l){case 0:case 1:throw Error(o(345));case 2:_s(a,jn);break;case 3:if(Hr(a,v),(v&130023424)===v&&(l=td+500-xn(),10<l)){if(Ft(a,0)!==0)break;if(S=a.suspendedLanes,(S&v)!==v){kn(),a.pingedLanes|=a.suspendedLanes&S;break}a.timeoutHandle=Re(_s.bind(null,a,jn),l);break}_s(a,jn);break;case 4:if(Hr(a,v),(v&4194240)===v)break;for(l=a.eventTimes,S=-1;0<v;){var B=31-ke(v);A=1<<B,B=l[B],B>S&&(S=B),v&=~A}if(v=S,v=xn()-v,v=(120>v?120:480>v?480:1080>v?1080:1920>v?1920:3e3>v?3e3:4320>v?4320:1960*xS(v/1960))-v,10<v){a.timeoutHandle=Re(_s.bind(null,a,jn),v);break}_s(a,jn);break;case 5:_s(a,jn);break;default:throw Error(o(329))}}}return Jn(a,xn()),a.callbackNode===d?r0.bind(null,a):null}function sd(a,l){var d=ba;return a.current.memoizedState.isDehydrated&&(vs(a,l).flags|=256),a=Ec(a,l),a!==2&&(l=jn,jn=d,l!==null&&od(l)),a}function od(a){jn===null?jn=a:jn.push.apply(jn,a)}function yS(a){for(var l=a;;){if(l.flags&16384){var d=l.updateQueue;if(d!==null&&(d=d.stores,d!==null))for(var v=0;v<d.length;v++){var S=d[v],A=S.getSnapshot;S=S.value;try{if(!ji(A(),S))return!1}catch{return!1}}}if(d=l.child,l.subtreeFlags&16384&&d!==null)d.return=l,l=d;else{if(l===a)break;for(;l.sibling===null;){if(l.return===null||l.return===a)return!0;l=l.return}l.sibling.return=l.return,l=l.sibling}}return!0}function Hr(a,l){for(l&=~ed,l&=~vc,a.suspendedLanes|=l,a.pingedLanes&=~l,a=a.expirationTimes;0<l;){var d=31-ke(l),v=1<<d;a[d]=-1,l&=~v}}function s0(a){if(Ct&6)throw Error(o(327));xs();var l=Ft(a,0);if(!(l&1))return Jn(a,xn()),null;var d=Ec(a,l);if(a.tag!==0&&d===2){var v=Ht(a);v!==0&&(l=v,d=sd(a,v))}if(d===1)throw d=Ma,vs(a,0),Hr(a,l),Jn(a,xn()),d;if(d===6)throw Error(o(345));return a.finishedWork=a.current.alternate,a.finishedLanes=l,_s(a,jn),Jn(a,xn()),null}function o0(a){kr!==null&&kr.tag===0&&!(Ct&6)&&xs();var l=Ct;Ct|=1;var d=on.transition,v=Bt;try{if(on.transition=null,Bt=1,a)return a()}finally{Bt=v,on.transition=d,Ct=l,!(Ct&6)&&Ji()}}function ad(){ci=fo.current,Ee(fo)}function vs(a,l){a.finishedWork=null,a.finishedLanes=0;var d=a.timeoutHandle;if(d!==$e&&(a.timeoutHandle=$e,we(d)),hn!==null)for(d=hn.return;d!==null;){var v=d;switch(Ef(v),v.tag){case 1:v=v.type.childContextTypes,v!=null&&Dt();break;case 3:uo(),Ee(qe),Ee(We),If();break;case 5:Rf(v);break;case 4:uo();break;case 13:Ee($t);break;case 19:Ee($t);break;case 10:_f(v.type._context);break;case 22:case 23:ad()}d=d.return}if(un=a,hn=a=Gr(a.current,null),bn=ci=l,pn=0,Ma=null,ed=vc=po=0,jn=ba=null,Ki!==null){for(l=0;l<Ki.length;l++)if(d=Ki[l],v=d.interleaved,v!==null){d.interleaved=null;var S=v.next,A=d.pending;if(A!==null){var B=A.next;A.next=S,v.next=B}d.pending=v}Ki=null}return a}function a0(a,l){do{var d=hn;try{if(vf(),Jl.current=nc,Kl){for(var v=rn.memoizedState;v!==null;){var S=v.queue;S!==null&&(S.pending=null),v=v.next}Kl=!1}if(ho=0,yn=Cn=rn=null,da=!1,pa=0,$f.current=null,d===null||d.return===null){pn=1,Ma=l,hn=null;break}e:{var A=a,B=d.return,q=d,he=l;if(l=bn,q.flags|=32768,he!==null&&typeof he=="object"&&typeof he.then=="function"){var Ne=he,it=q,bt=it.tag;if(!(it.mode&1)&&(bt===0||bt===11||bt===15)){var ht=it.alternate;ht?(it.updateQueue=ht.updateQueue,it.memoizedState=ht.memoizedState,it.lanes=ht.lanes):(it.updateQueue=null,it.memoizedState=null)}var Yt=Cg(B);if(Yt!==null){Yt.flags&=-257,Rg(Yt,B,q,A,l),Yt.mode&1&&Ag(A,Ne,l),l=Yt,he=Ne;var lt=l.updateQueue;if(lt===null){var In=new Set;In.add(he),l.updateQueue=In}else lt.add(he);break e}else{if(!(l&1)){Ag(A,Ne,l),ld();break e}he=Error(o(426))}}else if(Kt&&q.mode&1){var Ai=Cg(B);if(Ai!==null){!(Ai.flags&65536)&&(Ai.flags|=256),Rg(Ai,B,q,A,l),Af(he);break e}}A=he,pn!==4&&(pn=2),ba===null?ba=[A]:ba.push(A),he=Bf(he,q),q=B;do{switch(q.tag){case 3:q.flags|=65536,l&=-l,q.lanes|=l;var re=wg(q,he,l);qm(q,re);break e;case 1:A=he;var Q=q.type,le=q.stateNode;if(!(q.flags&128)&&(typeof Q.getDerivedStateFromError=="function"||le!==null&&typeof le.componentDidCatch=="function"&&(zr===null||!zr.has(le)))){q.flags|=65536,l&=-l,q.lanes|=l;var Ze=Tg(q,A,l);qm(q,Ze);break e}}q=q.return}while(q!==null)}u0(d)}catch(at){l=at,hn===d&&d!==null&&(hn=d=d.return);continue}break}while(!0)}function l0(){var a=gc.current;return gc.current=nc,a===null?nc:a}function ld(){(pn===0||pn===3||pn===2)&&(pn=4),un===null||!(po&268435455)&&!(vc&268435455)||Hr(un,bn)}function Ec(a,l){var d=Ct;Ct|=2;var v=l0();un===a&&bn===l||vs(a,l);do try{SS();break}catch(S){a0(a,S)}while(!0);if(vf(),Ct=d,gc.current=v,hn!==null)throw Error(o(261));return un=null,bn=0,pn}function SS(){for(;hn!==null;)c0(hn)}function MS(){for(;hn!==null&&!Zy();)c0(hn)}function c0(a){var l=d0(a.alternate,a,ci);a.memoizedProps=a.pendingProps,l===null?u0(a):hn=l,$f.current=null}function u0(a){var l=a;do{var d=l.alternate;if(a=l.return,l.flags&32768){if(d=pS(d,l),d!==null){d.flags&=32767,hn=d;return}if(a!==null)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else{pn=6,hn=null;return}}else if(d=hS(d,l,ci),d!==null){hn=d;return}if(l=l.sibling,l!==null){hn=l;return}hn=l=a}while(l!==null);pn===0&&(pn=5)}function _s(a,l){var d=Bt,v=on.transition;try{on.transition=null,Bt=1,bS(a,l,d)}finally{on.transition=v,Bt=d}return null}function bS(a,l,d){do xs();while(kr!==null);if(Ct&6)throw Error(o(327));var v=a.finishedWork,S=a.finishedLanes;if(v===null)return null;if(a.finishedWork=null,a.finishedLanes=0,v===a.current)throw Error(o(177));a.callbackNode=null,a.callbackPriority=0;var A=v.lanes|v.childLanes;if(Fl(a,A),a===un&&(hn=un=null,bn=0),!(v.subtreeFlags&2064)&&!(v.flags&2064)||xc||(xc=!0,p0(pf,function(){return xs(),null})),A=(v.flags&15990)!==0,v.subtreeFlags&15990||A){A=on.transition,on.transition=null;var B=Bt;Bt=1;var q=Ct;Ct|=4,$f.current=null,gS(a,v),vS(a,v),Y(a.containerInfo),a.current=v,_S(v),jy(),Ct=q,Bt=B,on.transition=A}else a.current=v;if(xc&&(xc=!1,kr=a,yc=S),A=a.pendingLanes,A===0&&(zr=null),Qy(v.stateNode),Jn(a,xn()),l!==null)for(d=a.onRecoverableError,v=0;v<l.length;v++)d(l[v]);if(_c)throw _c=!1,a=id,id=null,a;return yc&1&&a.tag!==0&&xs(),A=a.pendingLanes,A&1?a===rd?Ea++:(Ea=0,rd=a):Ea=0,Ji(),null}function xs(){if(kr!==null){var a=Hm(yc),l=on.transition,d=Bt;try{if(on.transition=null,Bt=16>a?16:a,kr===null)var v=!1;else{if(a=kr,kr=null,yc=0,Ct&6)throw Error(o(331));var S=Ct;for(Ct|=4,Xe=a.current;Xe!==null;){var A=Xe,B=A.child;if(Xe.flags&16){var q=A.deletions;if(q!==null){for(var he=0;he<q.length;he++){var Ne=q[he];for(Xe=Ne;Xe!==null;){var it=Xe;switch(it.tag){case 0:case 11:case 15:gs(8,it,A)}var bt=it.child;if(bt!==null)bt.return=it,Xe=bt;else for(;Xe!==null;){it=Xe;var ht=it.sibling,Yt=it.return;if(Zg(it),it===Ne){Xe=null;break}if(ht!==null){ht.return=Yt,Xe=ht;break}Xe=Yt}}}var lt=A.alternate;if(lt!==null){var In=lt.child;if(In!==null){lt.child=null;do{var Ai=In.sibling;In.sibling=null,In=Ai}while(In!==null)}}Xe=A}}if(A.subtreeFlags&2064&&B!==null)B.return=A,Xe=B;else e:for(;Xe!==null;){if(A=Xe,A.flags&2048)switch(A.tag){case 0:case 11:case 15:gs(9,A,A.return)}var re=A.sibling;if(re!==null){re.return=A.return,Xe=re;break e}Xe=A.return}}var Q=a.current;for(Xe=Q;Xe!==null;){B=Xe;var le=B.child;if(B.subtreeFlags&2064&&le!==null)le.return=B,Xe=le;else e:for(B=Q;Xe!==null;){if(q=Xe,q.flags&2048)try{switch(q.tag){case 0:case 11:case 15:ya(9,q)}}catch(at){Kn(q,q.return,at)}if(q===B){Xe=null;break e}var Ze=q.sibling;if(Ze!==null){Ze.return=q.return,Xe=Ze;break e}Xe=q.return}}if(Ct=S,Ji(),Zi&&typeof Zi.onPostCommitFiberRoot=="function")try{Zi.onPostCommitFiberRoot(Bl,a)}catch{}v=!0}return v}finally{Bt=d,on.transition=l}}return!1}function h0(a,l,d){l=Bf(d,l),l=wg(a,l,1),Br(a,l),l=kn(),a=bc(a,1),a!==null&&(xi(a,1,l),Jn(a,l))}function Kn(a,l,d){if(a.tag===3)h0(a,a,d);else for(;l!==null;){if(l.tag===3){h0(l,a,d);break}else if(l.tag===1){var v=l.stateNode;if(typeof l.type.getDerivedStateFromError=="function"||typeof v.componentDidCatch=="function"&&(zr===null||!zr.has(v))){a=Bf(d,a),a=Tg(l,a,1),Br(l,a),a=kn(),l=bc(l,1),l!==null&&(xi(l,1,a),Jn(l,a));break}}l=l.return}}function ES(a,l,d){var v=a.pingCache;v!==null&&v.delete(l),l=kn(),a.pingedLanes|=a.suspendedLanes&d,un===a&&(bn&d)===d&&(pn===4||pn===3&&(bn&130023424)===bn&&500>xn()-td?vs(a,0):ed|=d),Jn(a,l)}function f0(a,l){l===0&&(a.mode&1?(l=si,si<<=1,!(si&130023424)&&(si=4194304)):l=1);var d=kn();a=bc(a,l),a!==null&&(xi(a,l,d),Jn(a,d))}function wS(a){var l=a.memoizedState,d=0;l!==null&&(d=l.retryLane),f0(a,d)}function TS(a,l){var d=0;switch(a.tag){case 13:var v=a.stateNode,S=a.memoizedState;S!==null&&(d=S.retryLane);break;case 19:v=a.stateNode;break;default:throw Error(o(314))}v!==null&&v.delete(l),f0(a,d)}var d0;d0=function(a,l,d){if(a!==null)if(a.memoizedProps!==l.pendingProps||qe.current)li=!0;else{if(!(a.lanes&d)&&!(l.flags&128))return li=!1,dS(a,l,d);li=!!(a.flags&131072)}else li=!1,Kt&&l.flags&1048576&&$m(l,ql,l.index);switch(l.lanes=0,l.tag){case 2:var v=l.type;a!==null&&(a.alternate=null,l.alternate=null,l.flags|=2),a=l.pendingProps;var S=xt(l,We.current);ro(l,d),S=Df(null,l,v,a,S,d);var A=Nf();return l.flags|=1,typeof S=="object"&&S!==null&&typeof S.render=="function"&&S.$$typeof===void 0?(l.tag=1,l.memoizedState=null,l.updateQueue=null,je(v)?(A=!0,Ot(l)):A=!1,l.memoizedState=S.state!==null&&S.state!==void 0?S.state:null,yf(l),S.updater=Xl,l.stateNode=S,S._reactInternals=l,Mf(l,v,a,d),l=Vf(null,l,v,!0,A,d)):(l.tag=0,Kt&&A&&bf(l),zn(null,l,S,d),l=l.child),l;case 16:v=l.elementType;e:{switch(a!==null&&(a.alternate=null,l.alternate=null,l.flags|=2),a=l.pendingProps,S=v._init,v=S(v._payload),l.type=v,S=l.tag=CS(v),a=Di(v,a),S){case 0:l=kf(null,l,v,a,d);break e;case 1:l=Fg(null,l,v,a,d);break e;case 11:l=Lg(null,l,v,a,d);break e;case 14:l=Dg(null,l,v,Di(v.type,a),d);break e}throw Error(o(306,v,""))}return l;case 0:return v=l.type,S=l.pendingProps,S=l.elementType===v?S:Di(v,S),kf(a,l,v,S,d);case 1:return v=l.type,S=l.pendingProps,S=l.elementType===v?S:Di(v,S),Fg(a,l,v,S,d);case 3:e:{if(Bg(l),a===null)throw Error(o(387));v=l.pendingProps,A=l.memoizedState,S=A.element,Ym(a,l),Wl(l,v,null,d);var B=l.memoizedState;if(v=B.element,Ye&&A.isDehydrated)if(A={element:v,isDehydrated:!1,cache:B.cache,transitions:B.transitions},l.updateQueue.baseState=A,l.memoizedState=A,l.flags&256){S=Error(o(423)),l=zg(a,l,v,d,S);break e}else if(v!==S){S=Error(o(424)),l=zg(a,l,v,d,S);break e}else for(Ye&&(ai=gr(l.stateNode.containerInfo),oi=l,Kt=!0,Ni=null,la=!1),d=sg(l,null,v,d),l.child=d;d;)d.flags=d.flags&-3|4096,d=d.sibling;else{if(ao(),v===S){l=Mr(a,l,d);break e}zn(a,l,v,d)}l=l.child}return l;case 5:return og(l),a===null&&Tf(l),v=l.type,S=l.pendingProps,A=a!==null?a.memoizedProps:null,B=S.children,Qe(v,S)?B=null:A!==null&&Qe(v,A)&&(l.flags|=32),Og(a,l),zn(a,l,B,d),l.child;case 6:return a===null&&Tf(l),null;case 13:return kg(a,l,d);case 4:return Cf(l,l.stateNode.containerInfo),v=l.pendingProps,a===null?l.child=lo(l,null,v,d):zn(a,l,v,d),l.child;case 11:return v=l.type,S=l.pendingProps,S=l.elementType===v?S:Di(v,S),Lg(a,l,v,S,d);case 7:return zn(a,l,l.pendingProps,d),l.child;case 8:return zn(a,l,l.pendingProps.children,d),l.child;case 12:return zn(a,l,l.pendingProps.children,d),l.child;case 10:e:{if(v=l.type._context,S=l.pendingProps,A=l.memoizedProps,B=S.value,Xm(l,v,B),A!==null)if(ji(A.value,B)){if(A.children===S.children&&!qe.current){l=Mr(a,l,d);break e}}else for(A=l.child,A!==null&&(A.return=l);A!==null;){var q=A.dependencies;if(q!==null){B=A.child;for(var he=q.firstContext;he!==null;){if(he.context===v){if(A.tag===1){he=_r(-1,d&-d),he.tag=2;var Ne=A.updateQueue;if(Ne!==null){Ne=Ne.shared;var it=Ne.pending;it===null?he.next=he:(he.next=it.next,it.next=he),Ne.pending=he}}A.lanes|=d,he=A.alternate,he!==null&&(he.lanes|=d),xf(A.return,d,l),q.lanes|=d;break}he=he.next}}else if(A.tag===10)B=A.type===l.type?null:A.child;else if(A.tag===18){if(B=A.return,B===null)throw Error(o(341));B.lanes|=d,q=B.alternate,q!==null&&(q.lanes|=d),xf(B,d,l),B=A.sibling}else B=A.child;if(B!==null)B.return=A;else for(B=A;B!==null;){if(B===l){B=null;break}if(A=B.sibling,A!==null){A.return=B.return,B=A;break}B=B.return}A=B}zn(a,l,S.children,d),l=l.child}return l;case 9:return S=l.type,v=l.pendingProps.children,ro(l,d),S=yi(S),v=v(S),l.flags|=1,zn(a,l,v,d),l.child;case 14:return v=l.type,S=Di(v,l.pendingProps),S=Di(v.type,S),Dg(a,l,v,S,d);case 15:return Ng(a,l,l.type,l.pendingProps,d);case 17:return v=l.type,S=l.pendingProps,S=l.elementType===v?S:Di(v,S),a!==null&&(a.alternate=null,l.alternate=null,l.flags|=2),l.tag=1,je(v)?(a=!0,Ot(l)):a=!1,ro(l,d),Km(l,v,S),Mf(l,v,S,d),Vf(null,l,v,!0,a,d);case 19:return Wg(a,l,d);case 22:return Ug(a,l,d)}throw Error(o(156,l.tag))};function p0(a,l){return ff(a,l)}function AS(a,l,d,v){this.tag=a,this.key=d,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=l,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=v,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ti(a,l,d,v){return new AS(a,l,d,v)}function cd(a){return a=a.prototype,!(!a||!a.isReactComponent)}function CS(a){if(typeof a=="function")return cd(a)?1:0;if(a!=null){if(a=a.$$typeof,a===b)return 11;if(a===M)return 14}return 2}function Gr(a,l){var d=a.alternate;return d===null?(d=Ti(a.tag,l,a.key,a.mode),d.elementType=a.elementType,d.type=a.type,d.stateNode=a.stateNode,d.alternate=a,a.alternate=d):(d.pendingProps=l,d.type=a.type,d.flags=0,d.subtreeFlags=0,d.deletions=null),d.flags=a.flags&14680064,d.childLanes=a.childLanes,d.lanes=a.lanes,d.child=a.child,d.memoizedProps=a.memoizedProps,d.memoizedState=a.memoizedState,d.updateQueue=a.updateQueue,l=a.dependencies,d.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext},d.sibling=a.sibling,d.index=a.index,d.ref=a.ref,d}function wc(a,l,d,v,S,A){var B=2;if(v=a,typeof a=="function")cd(a)&&(B=1);else if(typeof a=="string")B=5;else e:switch(a){case f:return ys(d.children,S,A,l);case p:B=8,S|=8;break;case m:return a=Ti(12,d,l,S|2),a.elementType=m,a.lanes=A,a;case y:return a=Ti(13,d,l,S),a.elementType=y,a.lanes=A,a;case _:return a=Ti(19,d,l,S),a.elementType=_,a.lanes=A,a;case w:return Tc(d,S,A,l);default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case g:B=10;break e;case x:B=9;break e;case b:B=11;break e;case M:B=14;break e;case E:B=16,v=null;break e}throw Error(o(130,a==null?a:typeof a,""))}return l=Ti(B,d,l,S),l.elementType=a,l.type=v,l.lanes=A,l}function ys(a,l,d,v){return a=Ti(7,a,v,l),a.lanes=d,a}function Tc(a,l,d,v){return a=Ti(22,a,v,l),a.elementType=w,a.lanes=d,a.stateNode={},a}function ud(a,l,d){return a=Ti(6,a,null,l),a.lanes=d,a}function hd(a,l,d){return l=Ti(4,a.children!==null?a.children:[],a.key,l),l.lanes=d,l.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation},l}function RS(a,l,d,v,S){this.tag=l,this.containerInfo=a,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=$e,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_i(0),this.expirationTimes=_i(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_i(0),this.identifierPrefix=v,this.onRecoverableError=S,Ye&&(this.mutableSourceEagerHydrationData=null)}function m0(a,l,d,v,S,A,B,q,he){return a=new RS(a,l,d,q,he),l===1?(l=1,A===!0&&(l|=8)):l=0,A=Ti(3,null,null,l),a.current=A,A.stateNode=a,A.memoizedState={element:v,isDehydrated:d,cache:null,transitions:null},yf(A),a}function g0(a){if(!a)return Fe;a=a._reactInternals;e:{if(P(a)!==a||a.tag!==1)throw Error(o(170));var l=a;do{switch(l.tag){case 3:l=l.stateNode.context;break e;case 1:if(je(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext;break e}}l=l.return}while(l!==null);throw Error(o(171))}if(a.tag===1){var d=a.type;if(je(d))return qt(a,d,l)}return l}function v0(a){var l=a._reactInternals;if(l===void 0)throw typeof a.render=="function"?Error(o(188)):(a=Object.keys(a).join(","),Error(o(268,a)));return a=H(l),a===null?null:a.stateNode}function _0(a,l){if(a=a.memoizedState,a!==null&&a.dehydrated!==null){var d=a.retryLane;a.retryLane=d!==0&&d<l?d:l}}function fd(a,l){_0(a,l),(a=a.alternate)&&_0(a,l)}function PS(a){return a=H(a),a===null?null:a.stateNode}function IS(){return null}return t.attemptContinuousHydration=function(a){if(a.tag===13){var l=kn();wi(a,134217728,l),fd(a,134217728)}},t.attemptHydrationAtCurrentPriority=function(a){if(a.tag===13){var l=kn(),d=Vr(a);wi(a,d,l),fd(a,d)}},t.attemptSynchronousHydration=function(a){switch(a.tag){case 3:var l=a.stateNode;if(l.current.memoizedState.isDehydrated){var d=vi(l.pendingLanes);d!==0&&(hf(l,d|1),Jn(l,xn()),!(Ct&6)&&(mo(),Ji()))}break;case 13:var v=kn();o0(function(){return wi(a,1,v)}),fd(a,1)}},t.batchedUpdates=function(a,l){var d=Ct;Ct|=1;try{return a(l)}finally{Ct=d,Ct===0&&(mo(),zl&&Ji())}},t.createComponentSelector=function(a){return{$$typeof:hc,value:a}},t.createContainer=function(a,l,d,v,S,A,B){return m0(a,l,!1,null,d,v,S,A,B)},t.createHasPseudoClassSelector=function(a){return{$$typeof:fc,value:a}},t.createHydrationContainer=function(a,l,d,v,S,A,B,q,he){return a=m0(d,v,!0,a,S,A,B,q,he),a.context=g0(null),d=a.current,v=kn(),S=Vr(d),A=_r(v,S),A.callback=l??null,Br(d,A),a.current.lanes=S,xi(a,S,v),Jn(a,v),a},t.createPortal=function(a,l,d){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:v==null?null:""+v,children:a,containerInfo:l,implementation:d}},t.createRoleSelector=function(a){return{$$typeof:dc,value:a}},t.createTestNameSelector=function(a){return{$$typeof:pc,value:a}},t.createTextSelector=function(a){return{$$typeof:mc,value:a}},t.deferredUpdates=function(a){var l=Bt,d=on.transition;try{return on.transition=null,Bt=16,a()}finally{Bt=l,on.transition=d}},t.discreteUpdates=function(a,l,d,v,S){var A=Bt,B=on.transition;try{return on.transition=null,Bt=1,a(l,d,v,S)}finally{Bt=A,on.transition=B,Ct===0&&mo()}},t.findAllNodes=Qf,t.findBoundingRects=function(a,l){if(!k)throw Error(o(363));l=Qf(a,l),a=[];for(var d=0;d<l.length;d++)a.push(tt(l[d]));for(l=a.length-1;0<l;l--){d=a[l];for(var v=d.x,S=v+d.width,A=d.y,B=A+d.height,q=l-1;0<=q;q--)if(l!==q){var he=a[q],Ne=he.x,it=Ne+he.width,bt=he.y,ht=bt+he.height;if(v>=Ne&&A>=bt&&S<=it&&B<=ht){a.splice(l,1);break}else if(v!==Ne||d.width!==he.width||ht<A||bt>B){if(!(A!==bt||d.height!==he.height||it<v||Ne>S)){Ne>v&&(he.width+=Ne-v,he.x=v),it<S&&(he.width=S-Ne),a.splice(l,1);break}}else{bt>A&&(he.height+=bt-A,he.y=A),ht<B&&(he.height=B-bt),a.splice(l,1);break}}}return a},t.findHostInstance=v0,t.findHostInstanceWithNoPortals=function(a){return a=D(a),a=a!==null?ie(a):null,a===null?null:a.stateNode},t.findHostInstanceWithWarning=function(a){return v0(a)},t.flushControlled=function(a){var l=Ct;Ct|=1;var d=on.transition,v=Bt;try{on.transition=null,Bt=1,a()}finally{Bt=v,on.transition=d,Ct=l,Ct===0&&(mo(),Ji())}},t.flushPassiveEffects=xs,t.flushSync=o0,t.focusWithin=function(a,l){if(!k)throw Error(o(363));for(a=jf(a),l=i0(a,l),l=Array.from(l),a=0;a<l.length;){var d=l[a++];if(!Me(d)){if(d.tag===5&&N(d.stateNode))return!0;for(d=d.child;d!==null;)l.push(d),d=d.sibling}}return!1},t.getCurrentUpdatePriority=function(){return Bt},t.getFindAllNodesFailureDescription=function(a,l){if(!k)throw Error(o(363));var d=0,v=[];a=[jf(a),0];for(var S=0;S<a.length;){var A=a[S++],B=a[S++],q=l[B];if((A.tag!==5||!Me(A))&&(Jf(A,q)&&(v.push(Kf(q)),B++,B>d&&(d=B)),B<l.length))for(A=A.child;A!==null;)a.push(A,B),A=A.sibling}if(d<l.length){for(a=[];d<l.length;d++)a.push(Kf(l[d]));return`findAllNodes was able to match part of the selector:
  `+(v.join(" > ")+`

No matching component was found for:
  `)+a.join(" > ")}return null},t.getPublicRootInstance=function(a){if(a=a.current,!a.child)return null;switch(a.child.tag){case 5:return Z(a.child.stateNode);default:return a.child.stateNode}},t.injectIntoDevTools=function(a){if(a={bundleType:a.bundleType,version:a.version,rendererPackageName:a.rendererPackageName,rendererConfig:a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:c.ReactCurrentDispatcher,findHostInstanceByFiber:PS,findFiberByHostInstance:a.findFiberByHostInstance||IS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.0.0-fc46dba67-20220329"},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")a=!1;else{var l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(l.isDisabled||!l.supportsFiber)a=!0;else{try{Bl=l.inject(a),Zi=l}catch{}a=!!l.checkDCE}}return a},t.isAlreadyRendering=function(){return!1},t.observeVisibleRects=function(a,l,d,v){if(!k)throw Error(o(363));a=Qf(a,l);var S=R(a,d,v).disconnect;return{disconnect:function(){S()}}},t.registerMutableSourceForHydration=function(a,l){var d=l._getVersion;d=d(l._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[l,d]:a.mutableSourceEagerHydrationData.push(l,d)},t.runWithPriority=function(a,l){var d=Bt;try{return Bt=a,l()}finally{Bt=d}},t.shouldError=function(){return null},t.shouldSuspend=function(){return!1},t.updateContainer=function(a,l,d,v){var S=l.current,A=kn(),B=Vr(S);return d=g0(d),l.context===null?l.context=d:l.pendingContext=d,l=_r(A,B),l.payload={element:a},v=v===void 0?null:v,v!==null&&(l.callback=v),Br(S,l),a=wi(S,B,A),a!==null&&Gl(a,S,B),B},t};by.exports=LR;var DR=by.exports;const NR=NS(DR);var Ey={exports:{}},wy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(r){function e(z,X){var Y=z.length;z.push(X);e:for(;0<Y;){var oe=Y-1>>>1,pe=z[oe];if(0<i(pe,X))z[oe]=X,z[Y]=pe,Y=oe;else break e}}function t(z){return z.length===0?null:z[0]}function n(z){if(z.length===0)return null;var X=z[0],Y=z.pop();if(Y!==X){z[0]=Y;e:for(var oe=0,pe=z.length,Ie=pe>>>1;oe<Ie;){var rt=2*(oe+1)-1,Qe=z[rt],ae=rt+1,Re=z[ae];if(0>i(Qe,Y))ae<pe&&0>i(Re,Qe)?(z[oe]=Re,z[ae]=Y,oe=ae):(z[oe]=Qe,z[rt]=Y,oe=rt);else if(ae<pe&&0>i(Re,Y))z[oe]=Re,z[ae]=Y,oe=ae;else break e}}return X}function i(z,X){var Y=z.sortIndex-X.sortIndex;return Y!==0?Y:z.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;r.unstable_now=function(){return s.now()}}else{var o=Date,c=o.now();r.unstable_now=function(){return o.now()-c}}var u=[],h=[],f=1,p=null,m=3,g=!1,x=!1,b=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(z){for(var X=t(h);X!==null;){if(X.callback===null)n(h);else if(X.startTime<=z)n(h),X.sortIndex=X.expirationTime,e(u,X);else break;X=t(h)}}function w(z){if(b=!1,E(z),!x)if(t(u)!==null)x=!0,Z(I);else{var X=t(h);X!==null&&j(w,X.startTime-z)}}function I(z,X){x=!1,b&&(b=!1,_(T),T=-1),g=!0;var Y=m;try{for(E(X),p=t(u);p!==null&&(!(p.expirationTime>X)||z&&!D());){var oe=p.callback;if(typeof oe=="function"){p.callback=null,m=p.priorityLevel;var pe=oe(p.expirationTime<=X);X=r.unstable_now(),typeof pe=="function"?p.callback=pe:p===t(u)&&n(u),E(X)}else n(u);p=t(u)}if(p!==null)var Ie=!0;else{var rt=t(h);rt!==null&&j(w,rt.startTime-X),Ie=!1}return Ie}finally{p=null,m=Y,g=!1}}var C=!1,O=null,T=-1,P=5,U=-1;function D(){return!(r.unstable_now()-U<P)}function H(){if(O!==null){var z=r.unstable_now();U=z;var X=!0;try{X=O(!0,z)}finally{X?K():(C=!1,O=null)}}else C=!1}var K;if(typeof M=="function")K=function(){M(H)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,G=ie.port2;ie.port1.onmessage=H,K=function(){G.postMessage(null)}}else K=function(){y(H,0)};function Z(z){O=z,C||(C=!0,K())}function j(z,X){T=y(function(){z(r.unstable_now())},X)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_continueExecution=function(){x||g||(x=!0,Z(I))},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return m},r.unstable_getFirstCallbackNode=function(){return t(u)},r.unstable_next=function(z){switch(m){case 1:case 2:case 3:var X=3;break;default:X=m}var Y=m;m=X;try{return z()}finally{m=Y}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(z,X){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Y=m;m=z;try{return X()}finally{m=Y}},r.unstable_scheduleCallback=function(z,X,Y){var oe=r.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?oe+Y:oe):Y=oe,z){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=Y+pe,z={id:f++,callback:X,priorityLevel:z,startTime:Y,expirationTime:pe,sortIndex:-1},Y>oe?(z.sortIndex=Y,e(h,z),t(u)===null&&z===t(h)&&(b?(_(T),T=-1):b=!0,j(w,Y-oe))):(z.sortIndex=pe,e(u,z),x||g||(x=!0,Z(I))),z},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(z){var X=m;return function(){var Y=m;m=X;try{return z.apply(this,arguments)}finally{m=Y}}}})(wy);Ey.exports=wy;var n_=Ey.exports;const Lm={},UR=r=>void Object.assign(Lm,r);function OR(r,e){function t(f,{args:p=[],attach:m,...g},x){let b=`${f[0].toUpperCase()}${f.slice(1)}`,y;if(f==="primitive"){if(g.object===void 0)throw new Error("R3F: Primitives without 'object' are invalid!");const _=g.object;y=zo(_,{type:f,root:x,attach:m,primitive:!0})}else{const _=Lm[b];if(!_)throw new Error(`R3F: ${b} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);if(!Array.isArray(p))throw new Error("R3F: The args prop must be an array!");y=zo(new _(...p),{type:f,root:x,attach:m,memoizedProps:{args:p}})}return y.__r3f.attach===void 0&&(y.isBufferGeometry?y.__r3f.attach="geometry":y.isMaterial&&(y.__r3f.attach="material")),b!=="inject"&&ap(y,g),y}function n(f,p){let m=!1;if(p){var g,x;(g=p.__r3f)!=null&&g.attach?op(f,p,p.__r3f.attach):p.isObject3D&&f.isObject3D&&(f.add(p),m=!0),m||(x=f.__r3f)==null||x.objects.push(p),p.__r3f||zo(p,{}),p.__r3f.parent=f,Fp(p),ko(p)}}function i(f,p,m){let g=!1;if(p){var x,b;if((x=p.__r3f)!=null&&x.attach)op(f,p,p.__r3f.attach);else if(p.isObject3D&&f.isObject3D){p.parent=f,p.dispatchEvent({type:"added"}),f.dispatchEvent({type:"childadded",child:p});const y=f.children.filter(M=>M!==p),_=y.indexOf(m);f.children=[...y.slice(0,_),p,...y.slice(_)],g=!0}g||(b=f.__r3f)==null||b.objects.push(p),p.__r3f||zo(p,{}),p.__r3f.parent=f,Fp(p),ko(p)}}function s(f,p,m=!1){f&&[...f].forEach(g=>o(p,g,m))}function o(f,p,m){if(p){var g,x,b;if(p.__r3f&&(p.__r3f.parent=null),(g=f.__r3f)!=null&&g.objects&&(f.__r3f.objects=f.__r3f.objects.filter(w=>w!==p)),(x=p.__r3f)!=null&&x.attach)a_(f,p,p.__r3f.attach);else if(p.isObject3D&&f.isObject3D){var y;f.remove(p),(y=p.__r3f)!=null&&y.root&&GR(Au(p),p)}const M=(b=p.__r3f)==null?void 0:b.primitive,E=!M&&(m===void 0?p.dispose!==null:m);if(!M){var _;s((_=p.__r3f)==null?void 0:_.objects,p,E),s(p.children,p,E)}if(delete p.__r3f,E&&p.dispose&&p.type!=="Scene"){const w=()=>{try{p.dispose()}catch{}};typeof IS_REACT_ACT_ENVIRONMENT>"u"?n_.unstable_scheduleCallback(n_.unstable_IdlePriority,w):w()}ko(f)}}function c(f,p,m,g){var x;const b=(x=f.__r3f)==null?void 0:x.parent;if(!b)return;const y=t(p,m,f.__r3f.root);if(f.children){for(const _ of f.children)_.__r3f&&n(y,_);f.children=f.children.filter(_=>!_.__r3f)}f.__r3f.objects.forEach(_=>n(y,_)),f.__r3f.objects=[],f.__r3f.autoRemovedBeforeAppend||o(b,f),y.parent&&(y.__r3f.autoRemovedBeforeAppend=!0),n(b,y),y.raycast&&y.__r3f.eventCount&&Au(y).getState().internal.interaction.push(y),[g,g.alternate].forEach(_=>{_!==null&&(_.stateNode=y,_.ref&&(typeof _.ref=="function"?_.ref(y):_.ref.current=y))})}const u=()=>{};return{reconciler:NR({createInstance:t,removeChild:o,appendChild:n,appendInitialChild:n,insertBefore:i,supportsMutation:!0,isPrimaryRenderer:!1,supportsPersistence:!1,supportsHydration:!1,noTimeout:-1,appendChildToContainer:(f,p)=>{if(!p)return;const m=f.getState().scene;m.__r3f&&(m.__r3f.root=f,n(m,p))},removeChildFromContainer:(f,p)=>{p&&o(f.getState().scene,p)},insertInContainerBefore:(f,p,m)=>{if(!p||!m)return;const g=f.getState().scene;g.__r3f&&i(g,p,m)},getRootHostContext:()=>null,getChildHostContext:f=>f,finalizeInitialChildren(f){var p;return!!((p=f==null?void 0:f.__r3f)!=null?p:{}).handlers},prepareUpdate(f,p,m,g){var x;if(((x=f==null?void 0:f.__r3f)!=null?x:{}).primitive&&g.object&&g.object!==f)return[!0];{const{args:y=[],children:_,...M}=g,{args:E=[],children:w,...I}=m;if(!Array.isArray(y))throw new Error("R3F: the args prop must be an array!");if(y.some((O,T)=>O!==E[T]))return[!0];const C=Ly(f,M,I,!0);return C.changes.length?[!1,C]:null}},commitUpdate(f,[p,m],g,x,b,y){p?c(f,g,b,y):ap(f,m)},commitMount(f,p,m,g){var x;const b=(x=f.__r3f)!=null?x:{};f.raycast&&b.handlers&&b.eventCount&&Au(f).getState().internal.interaction.push(f)},getPublicInstance:f=>f,prepareForCommit:()=>null,preparePortalMount:f=>zo(f.getState().scene),resetAfterCommit:()=>{},shouldSetTextContent:()=>!1,clearContainer:()=>!1,hideInstance(f){var p;const{attach:m,parent:g}=(p=f.__r3f)!=null?p:{};m&&g&&a_(g,f,m),f.isObject3D&&(f.visible=!1),ko(f)},unhideInstance(f,p){var m;const{attach:g,parent:x}=(m=f.__r3f)!=null?m:{};g&&x&&op(x,f,g),(f.isObject3D&&p.visible==null||p.visible)&&(f.visible=!0),ko(f)},createTextInstance:u,hideTextInstance:u,unhideTextInstance:u,getCurrentEventPriority:()=>e?e():Wo.DefaultEventPriority,beforeActiveInstanceBlur:()=>{},afterActiveInstanceBlur:()=>{},detachDeletedInstance:()=>{},now:typeof performance<"u"&&Zt.fun(performance.now)?performance.now:Zt.fun(Date.now)?Date.now:()=>0,scheduleTimeout:Zt.fun(setTimeout)?setTimeout:void 0,cancelTimeout:Zt.fun(clearTimeout)?clearTimeout:void 0}),applyProps:ap}}var i_,r_;const sp=r=>"colorSpace"in r||"outputColorSpace"in r,Ty=()=>{var r;return(r=Lm.ColorManagement)!=null?r:null},Ay=r=>r&&r.isOrthographicCamera,FR=r=>r&&r.hasOwnProperty("current"),Rl=typeof window<"u"&&((i_=window.document)!=null&&i_.createElement||((r_=window.navigator)==null?void 0:r_.product)==="ReactNative")?Se.useLayoutEffect:Se.useEffect;function Cy(r){const e=Se.useRef(r);return Rl(()=>void(e.current=r),[r]),e}function BR({set:r}){return Rl(()=>(r(new Promise(()=>null)),()=>r(!1)),[r]),null}class Ry extends Se.Component{constructor(...e){super(...e),this.state={error:!1}}componentDidCatch(e){this.props.set(e)}render(){return this.state.error?null:this.props.children}}Ry.getDerivedStateFromError=()=>({error:!0});const Py="__default",s_=new Map,zR=r=>r&&!!r.memoized&&!!r.changes;function Iy(r){var e;const t=typeof window<"u"?(e=window.devicePixelRatio)!=null?e:2:1;return Array.isArray(r)?Math.min(Math.max(r[0],t),r[1]):r}const za=r=>{var e;return(e=r.__r3f)==null?void 0:e.root.getState()};function Au(r){let e=r.__r3f.root;for(;e.getState().previousRoot;)e=e.getState().previousRoot;return e}const Zt={obj:r=>r===Object(r)&&!Zt.arr(r)&&typeof r!="function",fun:r=>typeof r=="function",str:r=>typeof r=="string",num:r=>typeof r=="number",boo:r=>typeof r=="boolean",und:r=>r===void 0,arr:r=>Array.isArray(r),equ(r,e,{arrays:t="shallow",objects:n="reference",strict:i=!0}={}){if(typeof r!=typeof e||!!r!=!!e)return!1;if(Zt.str(r)||Zt.num(r)||Zt.boo(r))return r===e;const s=Zt.obj(r);if(s&&n==="reference")return r===e;const o=Zt.arr(r);if(o&&t==="reference")return r===e;if((o||s)&&r===e)return!0;let c;for(c in r)if(!(c in e))return!1;if(s&&t==="shallow"&&n==="shallow"){for(c in i?e:r)if(!Zt.equ(r[c],e[c],{strict:i,objects:"reference"}))return!1}else for(c in i?e:r)if(r[c]!==e[c])return!1;if(Zt.und(c)){if(o&&r.length===0&&e.length===0||s&&Object.keys(r).length===0&&Object.keys(e).length===0)return!0;if(r!==e)return!1}return!0}};function kR(r){r.dispose&&r.type!=="Scene"&&r.dispose();for(const e in r)e.dispose==null||e.dispose(),delete r[e]}function zo(r,e){const t=r;return t.__r3f={type:"",root:null,previousAttach:null,memoizedProps:{},eventCount:0,handlers:{},objects:[],parent:null,...e},r}function Op(r,e){let t=r;if(e.includes("-")){const n=e.split("-"),i=n.pop();return t=n.reduce((s,o)=>s[o],r),{target:t,key:i}}else return{target:t,key:e}}const o_=/-\d+$/;function op(r,e,t){if(Zt.str(t)){if(o_.test(t)){const s=t.replace(o_,""),{target:o,key:c}=Op(r,s);Array.isArray(o[c])||(o[c]=[])}const{target:n,key:i}=Op(r,t);e.__r3f.previousAttach=n[i],n[i]=e}else e.__r3f.previousAttach=t(r,e)}function a_(r,e,t){var n,i;if(Zt.str(t)){const{target:s,key:o}=Op(r,t),c=e.__r3f.previousAttach;c===void 0?delete s[o]:s[o]=c}else(n=e.__r3f)==null||n.previousAttach==null||n.previousAttach(r,e);(i=e.__r3f)==null||delete i.previousAttach}function Ly(r,{children:e,key:t,ref:n,...i},{children:s,key:o,ref:c,...u}={},h=!1){const f=r.__r3f,p=Object.entries(i),m=[];if(h){const x=Object.keys(u);for(let b=0;b<x.length;b++)i.hasOwnProperty(x[b])||p.unshift([x[b],Py+"remove"])}p.forEach(([x,b])=>{var y;if((y=r.__r3f)!=null&&y.primitive&&x==="object"||Zt.equ(b,u[x]))return;if(/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/.test(x))return m.push([x,b,!0,[]]);let _=[];x.includes("-")&&(_=x.split("-")),m.push([x,b,!1,_]);for(const M in i){const E=i[M];M.startsWith(`${x}-`)&&m.push([M,E,!1,M.split("-")])}});const g={...i};return f!=null&&f.memoizedProps&&f!=null&&f.memoizedProps.args&&(g.args=f.memoizedProps.args),f!=null&&f.memoizedProps&&f!=null&&f.memoizedProps.attach&&(g.attach=f.memoizedProps.attach),{memoized:g,changes:m}}function ap(r,e){var t;const n=r.__r3f,i=n==null?void 0:n.root,s=i==null||i.getState==null?void 0:i.getState(),{memoized:o,changes:c}=zR(e)?e:Ly(r,e),u=n==null?void 0:n.eventCount;r.__r3f&&(r.__r3f.memoizedProps=o);for(let m=0;m<c.length;m++){let[g,x,b,y]=c[m];if(sp(r)){const w="srgb",I="srgb-linear";g==="encoding"?(g="colorSpace",x=x===3001?w:I):g==="outputEncoding"&&(g="outputColorSpace",x=x===3001?w:I)}let _=r,M=_[g];if(y.length&&(M=y.reduce((E,w)=>E[w],r),!(M&&M.set))){const[E,...w]=y.reverse();_=w.reverse().reduce((I,C)=>I[C],r),g=E}if(x===Py+"remove")if(_.constructor){let E=s_.get(_.constructor);E||(E=new _.constructor,s_.set(_.constructor,E)),x=E[g]}else x=0;if(b&&n)x?n.handlers[g]=x:delete n.handlers[g],n.eventCount=Object.keys(n.handlers).length;else if(M&&M.set&&(M.copy||M instanceof Gs)){if(Array.isArray(x))M.fromArray?M.fromArray(x):M.set(...x);else if(M.copy&&x&&x.constructor&&M.constructor===x.constructor)M.copy(x);else if(x!==void 0){var h;const E=(h=M)==null?void 0:h.isColor;!E&&M.setScalar?M.setScalar(x):M instanceof Gs&&x instanceof Gs?M.mask=x.mask:M.set(x),!Ty()&&s&&!s.linear&&E&&M.convertSRGBToLinear()}}else{var f;if(_[g]=x,(f=_[g])!=null&&f.isTexture&&_[g].format===Un&&_[g].type===Gn&&s){const E=_[g];sp(E)&&sp(s.gl)?E.colorSpace=s.gl.outputColorSpace:E.encoding=s.gl.outputEncoding}}ko(r)}if(n&&n.parent&&r.raycast&&u!==n.eventCount){const m=Au(r).getState().internal,g=m.interaction.indexOf(r);g>-1&&m.interaction.splice(g,1),n.eventCount&&m.interaction.push(r)}return!(c.length===1&&c[0][0]==="onUpdate")&&c.length&&(t=r.__r3f)!=null&&t.parent&&Fp(r),r}function ko(r){var e,t;const n=(e=r.__r3f)==null||(t=e.root)==null||t.getState==null?void 0:t.getState();n&&n.internal.frames===0&&n.invalidate()}function Fp(r){r.onUpdate==null||r.onUpdate(r)}function VR(r,e){r.manual||(Ay(r)?(r.left=e.width/-2,r.right=e.width/2,r.top=e.height/2,r.bottom=e.height/-2):r.aspect=e.width/e.height,r.updateProjectionMatrix(),r.updateMatrixWorld())}function _u(r){return(r.eventObject||r.object).uuid+"/"+r.index+r.instanceId}function HR(){var r;const e=typeof self<"u"&&self||typeof window<"u"&&window;if(!e)return Wo.DefaultEventPriority;switch((r=e.event)==null?void 0:r.type){case"click":case"contextmenu":case"dblclick":case"pointercancel":case"pointerdown":case"pointerup":return Wo.DiscreteEventPriority;case"pointermove":case"pointerout":case"pointerover":case"pointerenter":case"pointerleave":case"wheel":return Wo.ContinuousEventPriority;default:return Wo.DefaultEventPriority}}function Dy(r,e,t,n){const i=t.get(e);i&&(t.delete(e),t.size===0&&(r.delete(n),i.target.releasePointerCapture(n)))}function GR(r,e){const{internal:t}=r.getState();t.interaction=t.interaction.filter(n=>n!==e),t.initialHits=t.initialHits.filter(n=>n!==e),t.hovered.forEach((n,i)=>{(n.eventObject===e||n.object===e)&&t.hovered.delete(i)}),t.capturedMap.forEach((n,i)=>{Dy(t.capturedMap,e,n,i)})}function WR(r){function e(u){const{internal:h}=r.getState(),f=u.offsetX-h.initialClick[0],p=u.offsetY-h.initialClick[1];return Math.round(Math.sqrt(f*f+p*p))}function t(u){return u.filter(h=>["Move","Over","Enter","Out","Leave"].some(f=>{var p;return(p=h.__r3f)==null?void 0:p.handlers["onPointer"+f]}))}function n(u,h){const f=r.getState(),p=new Set,m=[],g=h?h(f.internal.interaction):f.internal.interaction;for(let _=0;_<g.length;_++){const M=za(g[_]);M&&(M.raycaster.camera=void 0)}f.previousRoot||f.events.compute==null||f.events.compute(u,f);function x(_){const M=za(_);if(!M||!M.events.enabled||M.raycaster.camera===null)return[];if(M.raycaster.camera===void 0){var E;M.events.compute==null||M.events.compute(u,M,(E=M.previousRoot)==null?void 0:E.getState()),M.raycaster.camera===void 0&&(M.raycaster.camera=null)}return M.raycaster.camera?M.raycaster.intersectObject(_,!0):[]}let b=g.flatMap(x).sort((_,M)=>{const E=za(_.object),w=za(M.object);return!E||!w?_.distance-M.distance:w.events.priority-E.events.priority||_.distance-M.distance}).filter(_=>{const M=_u(_);return p.has(M)?!1:(p.add(M),!0)});f.events.filter&&(b=f.events.filter(b,f));for(const _ of b){let M=_.object;for(;M;){var y;(y=M.__r3f)!=null&&y.eventCount&&m.push({..._,eventObject:M}),M=M.parent}}if("pointerId"in u&&f.internal.capturedMap.has(u.pointerId))for(let _ of f.internal.capturedMap.get(u.pointerId).values())p.has(_u(_.intersection))||m.push(_.intersection);return m}function i(u,h,f,p){const m=r.getState();if(u.length){const g={stopped:!1};for(const x of u){const b=za(x.object)||m,{raycaster:y,pointer:_,camera:M,internal:E}=b,w=new F(_.x,_.y,0).unproject(M),I=U=>{var D,H;return(D=(H=E.capturedMap.get(U))==null?void 0:H.has(x.eventObject))!=null?D:!1},C=U=>{const D={intersection:x,target:h.target};E.capturedMap.has(U)?E.capturedMap.get(U).set(x.eventObject,D):E.capturedMap.set(U,new Map([[x.eventObject,D]])),h.target.setPointerCapture(U)},O=U=>{const D=E.capturedMap.get(U);D&&Dy(E.capturedMap,x.eventObject,D,U)};let T={};for(let U in h){let D=h[U];typeof D!="function"&&(T[U]=D)}let P={...x,...T,pointer:_,intersections:u,stopped:g.stopped,delta:f,unprojectedPoint:w,ray:y.ray,camera:M,stopPropagation(){const U="pointerId"in h&&E.capturedMap.get(h.pointerId);if((!U||U.has(x.eventObject))&&(P.stopped=g.stopped=!0,E.hovered.size&&Array.from(E.hovered.values()).find(D=>D.eventObject===x.eventObject))){const D=u.slice(0,u.indexOf(x));s([...D,x])}},target:{hasPointerCapture:I,setPointerCapture:C,releasePointerCapture:O},currentTarget:{hasPointerCapture:I,setPointerCapture:C,releasePointerCapture:O},nativeEvent:h};if(p(P),g.stopped===!0)break}}return u}function s(u){const{internal:h}=r.getState();for(const f of h.hovered.values())if(!u.length||!u.find(p=>p.object===f.object&&p.index===f.index&&p.instanceId===f.instanceId)){const m=f.eventObject.__r3f,g=m==null?void 0:m.handlers;if(h.hovered.delete(_u(f)),m!=null&&m.eventCount){const x={...f,intersections:u};g.onPointerOut==null||g.onPointerOut(x),g.onPointerLeave==null||g.onPointerLeave(x)}}}function o(u,h){for(let f=0;f<h.length;f++){const p=h[f].__r3f;p==null||p.handlers.onPointerMissed==null||p.handlers.onPointerMissed(u)}}function c(u){switch(u){case"onPointerLeave":case"onPointerCancel":return()=>s([]);case"onLostPointerCapture":return h=>{const{internal:f}=r.getState();"pointerId"in h&&f.capturedMap.has(h.pointerId)&&requestAnimationFrame(()=>{f.capturedMap.has(h.pointerId)&&(f.capturedMap.delete(h.pointerId),s([]))})}}return function(f){const{onPointerMissed:p,internal:m}=r.getState();m.lastEvent.current=f;const g=u==="onPointerMove",x=u==="onClick"||u==="onContextMenu"||u==="onDoubleClick",y=n(f,g?t:void 0),_=x?e(f):0;u==="onPointerDown"&&(m.initialClick=[f.offsetX,f.offsetY],m.initialHits=y.map(E=>E.eventObject)),x&&!y.length&&_<=2&&(o(f,m.interaction),p&&p(f)),g&&s(y);function M(E){const w=E.eventObject,I=w.__r3f,C=I==null?void 0:I.handlers;if(I!=null&&I.eventCount)if(g){if(C.onPointerOver||C.onPointerEnter||C.onPointerOut||C.onPointerLeave){const O=_u(E),T=m.hovered.get(O);T?T.stopped&&E.stopPropagation():(m.hovered.set(O,E),C.onPointerOver==null||C.onPointerOver(E),C.onPointerEnter==null||C.onPointerEnter(E))}C.onPointerMove==null||C.onPointerMove(E)}else{const O=C[u];O?(!x||m.initialHits.includes(w))&&(o(f,m.interaction.filter(T=>!m.initialHits.includes(T))),O(E)):x&&m.initialHits.includes(w)&&o(f,m.interaction.filter(T=>!m.initialHits.includes(T)))}}i(y,f,_,M)}}return{handlePointer:c}}const Ny=r=>!!(r!=null&&r.render),Uy=Se.createContext(null),XR=(r,e)=>{const t=RR((c,u)=>{const h=new F,f=new F,p=new F;function m(_=u().camera,M=f,E=u().size){const{width:w,height:I,top:C,left:O}=E,T=w/I;M.isVector3?p.copy(M):p.set(...M);const P=_.getWorldPosition(h).distanceTo(p);if(Ay(_))return{width:w/_.zoom,height:I/_.zoom,top:C,left:O,factor:1,distance:P,aspect:T};{const U=_.fov*Math.PI/180,D=2*Math.tan(U/2)*P,H=D*(w/I);return{width:H,height:D,top:C,left:O,factor:w/H,distance:P,aspect:T}}}let g;const x=_=>c(M=>({performance:{...M.performance,current:_}})),b=new me;return{set:c,get:u,gl:null,camera:null,raycaster:null,events:{priority:1,enabled:!0,connected:!1},xr:null,scene:null,invalidate:(_=1)=>r(u(),_),advance:(_,M)=>e(_,M,u()),legacy:!1,linear:!1,flat:!1,controls:null,clock:new uy,pointer:b,mouse:b,frameloop:"always",onPointerMissed:void 0,performance:{current:1,min:.5,max:1,debounce:200,regress:()=>{const _=u();g&&clearTimeout(g),_.performance.current!==_.performance.min&&x(_.performance.min),g=setTimeout(()=>x(u().performance.max),_.performance.debounce)}},size:{width:0,height:0,top:0,left:0,updateStyle:!1},viewport:{initialDpr:0,dpr:0,width:0,height:0,top:0,left:0,aspect:0,distance:0,factor:0,getCurrentViewport:m},setEvents:_=>c(M=>({...M,events:{...M.events,..._}})),setSize:(_,M,E,w,I)=>{const C=u().camera,O={width:_,height:M,top:w||0,left:I||0,updateStyle:E};c(T=>({size:O,viewport:{...T.viewport,...m(C,f,O)}}))},setDpr:_=>c(M=>{const E=Iy(_);return{viewport:{...M.viewport,dpr:E,initialDpr:M.viewport.initialDpr||E}}}),setFrameloop:(_="always")=>{const M=u().clock;M.stop(),M.elapsedTime=0,_!=="never"&&(M.start(),M.elapsedTime=0),c(()=>({frameloop:_}))},previousRoot:void 0,internal:{active:!1,priority:0,frames:0,lastEvent:Se.createRef(),interaction:[],hovered:new Map,subscribers:[],initialClick:[0,0],initialHits:[],capturedMap:new Map,subscribe:(_,M,E)=>{const w=u().internal;return w.priority=w.priority+(M>0?1:0),w.subscribers.push({ref:_,priority:M,store:E}),w.subscribers=w.subscribers.sort((I,C)=>I.priority-C.priority),()=>{const I=u().internal;I!=null&&I.subscribers&&(I.priority=I.priority-(M>0?1:0),I.subscribers=I.subscribers.filter(C=>C.ref!==_))}}}}}),n=t.getState();let i=n.size,s=n.viewport.dpr,o=n.camera;return t.subscribe(()=>{const{camera:c,size:u,viewport:h,gl:f,set:p}=t.getState();if(u.width!==i.width||u.height!==i.height||h.dpr!==s){var m;i=u,s=h.dpr,VR(c,u),f.setPixelRatio(h.dpr);const g=(m=u.updateStyle)!=null?m:typeof HTMLCanvasElement<"u"&&f.domElement instanceof HTMLCanvasElement;f.setSize(u.width,u.height,g)}c!==o&&(o=c,p(g=>({viewport:{...g.viewport,...g.viewport.getCurrentViewport(c)}})))}),t.subscribe(c=>r(c)),t};let xu,YR=new Set,qR=new Set,ZR=new Set;function lp(r,e){if(r.size)for(const{callback:t}of r.values())t(e)}function ka(r,e){switch(r){case"before":return lp(YR,e);case"after":return lp(qR,e);case"tail":return lp(ZR,e)}}let cp,up;function hp(r,e,t){let n=e.clock.getDelta();for(e.frameloop==="never"&&typeof r=="number"&&(n=r-e.clock.elapsedTime,e.clock.oldTime=e.clock.elapsedTime,e.clock.elapsedTime=r),cp=e.internal.subscribers,xu=0;xu<cp.length;xu++)up=cp[xu],up.ref.current(up.store.getState(),n,t);return!e.internal.priority&&e.gl.render&&e.gl.render(e.scene,e.camera),e.internal.frames=Math.max(0,e.internal.frames-1),e.frameloop==="always"?1:e.internal.frames}function jR(r){let e=!1,t=!1,n,i,s;function o(h){i=requestAnimationFrame(o),e=!0,n=0,ka("before",h),t=!0;for(const p of r.values()){var f;s=p.store.getState(),s.internal.active&&(s.frameloop==="always"||s.internal.frames>0)&&!((f=s.gl.xr)!=null&&f.isPresenting)&&(n+=hp(h,s))}if(t=!1,ka("after",h),n===0)return ka("tail",h),e=!1,cancelAnimationFrame(i)}function c(h,f=1){var p;if(!h)return r.forEach(m=>c(m.store.getState(),f));(p=h.gl.xr)!=null&&p.isPresenting||!h.internal.active||h.frameloop==="never"||(f>1?h.internal.frames=Math.min(60,h.internal.frames+f):t?h.internal.frames=2:h.internal.frames=1,e||(e=!0,requestAnimationFrame(o)))}function u(h,f=!0,p,m){if(f&&ka("before",h),p)hp(h,p,m);else for(const g of r.values())hp(h,g.store.getState());f&&ka("after",h)}return{loop:o,invalidate:c,advance:u}}function Oy(){const r=Se.useContext(Uy);if(!r)throw new Error("R3F: Hooks can only be used within the Canvas component!");return r}function ar(r=t=>t,e){return Oy()(r,e)}function Fy(r,e=0){const t=Oy(),n=t.getState().internal.subscribe,i=Cy(r);return Rl(()=>n(i,e,t),[e,n,t]),null}const $o=new Map,{invalidate:l_,advance:c_}=jR($o),{reconciler:Sh,applyProps:Fo}=OR($o,HR),Bo={objects:"shallow",strict:!1},JR=(r,e)=>{const t=typeof r=="function"?r(e):r;return Ny(t)?t:new Sy({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...r})};function KR(r,e){const t=typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement;if(e){const{width:n,height:i,top:s,left:o,updateStyle:c=t}=e;return{width:n,height:i,top:s,left:o,updateStyle:c}}else if(typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement&&r.parentElement){const{width:n,height:i,top:s,left:o}=r.parentElement.getBoundingClientRect();return{width:n,height:i,top:s,left:o,updateStyle:t}}else if(typeof OffscreenCanvas<"u"&&r instanceof OffscreenCanvas)return{width:r.width,height:r.height,top:0,left:0,updateStyle:t};return{width:0,height:0,top:0,left:0}}function QR(r){const e=$o.get(r),t=e==null?void 0:e.fiber,n=e==null?void 0:e.store;e&&console.warn("R3F.createRoot should only be called once!");const i=typeof reportError=="function"?reportError:console.error,s=n||XR(l_,c_),o=t||Sh.createContainer(s,Wo.ConcurrentRoot,null,!1,null,"",i,null);e||$o.set(r,{fiber:o,store:s});let c,u=!1,h;return{configure(f={}){let{gl:p,size:m,scene:g,events:x,onCreated:b,shadows:y=!1,linear:_=!1,flat:M=!1,legacy:E=!1,orthographic:w=!1,frameloop:I="always",dpr:C=[1,2],performance:O,raycaster:T,camera:P,onPointerMissed:U}=f,D=s.getState(),H=D.gl;D.gl||D.set({gl:H=JR(p,r)});let K=D.raycaster;K||D.set({raycaster:K=new cy});const{params:ie,...G}=T||{};if(Zt.equ(G,K,Bo)||Fo(K,{...G}),Zt.equ(ie,K.params,Bo)||Fo(K,{params:{...K.params,...ie}}),!D.camera||D.camera===h&&!Zt.equ(h,P,Bo)){h=P;const Y=P instanceof Cl,oe=Y?P:w?new Gi(0,0,0,0,.1,1e3):new en(75,0,.1,1e3);Y||(oe.position.z=5,P&&(Fo(oe,P),("aspect"in P||"left"in P||"right"in P||"bottom"in P||"top"in P)&&(oe.manual=!0,oe.updateProjectionMatrix())),!D.camera&&!(P!=null&&P.rotation)&&oe.lookAt(0,0,0)),D.set({camera:oe}),K.camera=oe}if(!D.scene){let Y;g!=null&&g.isScene?Y=g:(Y=new tm,g&&Fo(Y,g)),D.set({scene:zo(Y)})}if(!D.xr){var Z;const Y=(Ie,rt)=>{const Qe=s.getState();Qe.frameloop!=="never"&&c_(Ie,!0,Qe,rt)},oe=()=>{const Ie=s.getState();Ie.gl.xr.enabled=Ie.gl.xr.isPresenting,Ie.gl.xr.setAnimationLoop(Ie.gl.xr.isPresenting?Y:null),Ie.gl.xr.isPresenting||l_(Ie)},pe={connect(){const Ie=s.getState().gl;Ie.xr.addEventListener("sessionstart",oe),Ie.xr.addEventListener("sessionend",oe)},disconnect(){const Ie=s.getState().gl;Ie.xr.removeEventListener("sessionstart",oe),Ie.xr.removeEventListener("sessionend",oe)}};typeof((Z=H.xr)==null?void 0:Z.addEventListener)=="function"&&pe.connect(),D.set({xr:pe})}if(H.shadowMap){const Y=H.shadowMap.enabled,oe=H.shadowMap.type;if(H.shadowMap.enabled=!!y,Zt.boo(y))H.shadowMap.type=Wa;else if(Zt.str(y)){var j;const pe={basic:P_,percentage:Xo,soft:Wa,variance:Fs};H.shadowMap.type=(j=pe[y])!=null?j:Wa}else Zt.obj(y)&&Object.assign(H.shadowMap,y);(Y!==H.shadowMap.enabled||oe!==H.shadowMap.type)&&(H.shadowMap.needsUpdate=!0)}const z=Ty();z&&("enabled"in z?z.enabled=!E:"legacyMode"in z&&(z.legacyMode=E)),u||Fo(H,{outputEncoding:_?3e3:3001,toneMapping:M?Ri:Eh}),D.legacy!==E&&D.set(()=>({legacy:E})),D.linear!==_&&D.set(()=>({linear:_})),D.flat!==M&&D.set(()=>({flat:M})),p&&!Zt.fun(p)&&!Ny(p)&&!Zt.equ(p,H,Bo)&&Fo(H,p),x&&!D.events.handlers&&D.set({events:x(s)});const X=KR(r,m);return Zt.equ(X,D.size,Bo)||D.setSize(X.width,X.height,X.updateStyle,X.top,X.left),C&&D.viewport.dpr!==Iy(C)&&D.setDpr(C),D.frameloop!==I&&D.setFrameloop(I),D.onPointerMissed||D.set({onPointerMissed:U}),O&&!Zt.equ(O,D.performance,Bo)&&D.set(Y=>({performance:{...Y.performance,...O}})),c=b,u=!0,this},render(f){return u||this.configure(),Sh.updateContainer(Bi.jsx($R,{store:s,children:f,onCreated:c,rootElement:r}),o,null,()=>{}),s},unmount(){By(r)}}}function $R({store:r,children:e,onCreated:t,rootElement:n}){return Rl(()=>{const i=r.getState();i.set(s=>({internal:{...s.internal,active:!0}})),t&&t(i),r.getState().events.connected||i.events.connect==null||i.events.connect(n)},[]),Bi.jsx(Uy.Provider,{value:r,children:e})}function By(r,e){const t=$o.get(r),n=t==null?void 0:t.fiber;if(n){const i=t==null?void 0:t.store.getState();i&&(i.internal.active=!1),Sh.updateContainer(null,n,null,()=>{i&&setTimeout(()=>{try{var s,o,c,u;i.events.disconnect==null||i.events.disconnect(),(s=i.gl)==null||(o=s.renderLists)==null||o.dispose==null||o.dispose(),(c=i.gl)==null||c.forceContextLoss==null||c.forceContextLoss(),(u=i.gl)!=null&&u.xr&&i.xr.disconnect(),kR(i),$o.delete(r)}catch{}},500)})}}Sh.injectIntoDevTools({bundleType:0,rendererPackageName:"@react-three/fiber",version:Se.version});const fp={onClick:["click",!1],onContextMenu:["contextmenu",!1],onDoubleClick:["dblclick",!1],onWheel:["wheel",!0],onPointerDown:["pointerdown",!0],onPointerUp:["pointerup",!0],onPointerLeave:["pointerleave",!0],onPointerMove:["pointermove",!0],onPointerCancel:["pointercancel",!0],onLostPointerCapture:["lostpointercapture",!0]};function eP(r){const{handlePointer:e}=WR(r);return{priority:1,enabled:!0,compute(t,n,i){n.pointer.set(t.offsetX/n.size.width*2-1,-(t.offsetY/n.size.height)*2+1),n.raycaster.setFromCamera(n.pointer,n.camera)},connected:void 0,handlers:Object.keys(fp).reduce((t,n)=>({...t,[n]:e(n)}),{}),update:()=>{var t;const{events:n,internal:i}=r.getState();(t=i.lastEvent)!=null&&t.current&&n.handlers&&n.handlers.onPointerMove(i.lastEvent.current)},connect:t=>{var n;const{set:i,events:s}=r.getState();s.disconnect==null||s.disconnect(),i(o=>({events:{...o.events,connected:t}})),Object.entries((n=s.handlers)!=null?n:[]).forEach(([o,c])=>{const[u,h]=fp[o];t.addEventListener(u,c,{passive:h})})},disconnect:()=>{const{set:t,events:n}=r.getState();if(n.connected){var i;Object.entries((i=n.handlers)!=null?i:[]).forEach(([s,o])=>{if(n&&n.connected instanceof HTMLElement){const[c]=fp[s];n.connected.removeEventListener(c,o)}}),t(s=>({events:{...s.events,connected:void 0}}))}}}}function u_(r,e){let t;return(...n)=>{window.clearTimeout(t),t=window.setTimeout(()=>r(...n),e)}}function tP({debounce:r,scroll:e,polyfill:t,offsetSize:n}={debounce:0,scroll:!1,offsetSize:!1}){const i=t||(typeof window>"u"?class{}:window.ResizeObserver);if(!i)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");const[s,o]=Se.useState({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),c=Se.useRef({element:null,scrollContainers:null,resizeObserver:null,lastBounds:s,orientationHandler:null}),u=r?typeof r=="number"?r:r.scroll:null,h=r?typeof r=="number"?r:r.resize:null,f=Se.useRef(!1);Se.useEffect(()=>(f.current=!0,()=>void(f.current=!1)));const[p,m,g]=Se.useMemo(()=>{const _=()=>{if(!c.current.element)return;const{left:M,top:E,width:w,height:I,bottom:C,right:O,x:T,y:P}=c.current.element.getBoundingClientRect(),U={left:M,top:E,width:w,height:I,bottom:C,right:O,x:T,y:P};c.current.element instanceof HTMLElement&&n&&(U.height=c.current.element.offsetHeight,U.width=c.current.element.offsetWidth),Object.freeze(U),f.current&&!sP(c.current.lastBounds,U)&&o(c.current.lastBounds=U)};return[_,h?u_(_,h):_,u?u_(_,u):_]},[o,n,u,h]);function x(){c.current.scrollContainers&&(c.current.scrollContainers.forEach(_=>_.removeEventListener("scroll",g,!0)),c.current.scrollContainers=null),c.current.resizeObserver&&(c.current.resizeObserver.disconnect(),c.current.resizeObserver=null),c.current.orientationHandler&&("orientation"in screen&&"removeEventListener"in screen.orientation?screen.orientation.removeEventListener("change",c.current.orientationHandler):"onorientationchange"in window&&window.removeEventListener("orientationchange",c.current.orientationHandler))}function b(){c.current.element&&(c.current.resizeObserver=new i(g),c.current.resizeObserver.observe(c.current.element),e&&c.current.scrollContainers&&c.current.scrollContainers.forEach(_=>_.addEventListener("scroll",g,{capture:!0,passive:!0})),c.current.orientationHandler=()=>{g()},"orientation"in screen&&"addEventListener"in screen.orientation?screen.orientation.addEventListener("change",c.current.orientationHandler):"onorientationchange"in window&&window.addEventListener("orientationchange",c.current.orientationHandler))}const y=_=>{!_||_===c.current.element||(x(),c.current.element=_,c.current.scrollContainers=zy(_),b())};return iP(g,!!e),nP(m),Se.useEffect(()=>{x(),b()},[e,g,m]),Se.useEffect(()=>x,[]),[y,s,p]}function nP(r){Se.useEffect(()=>{const e=r;return window.addEventListener("resize",e),()=>void window.removeEventListener("resize",e)},[r])}function iP(r,e){Se.useEffect(()=>{if(e){const t=r;return window.addEventListener("scroll",t,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",t,!0)}},[r,e])}function zy(r){const e=[];if(!r||r===document.body)return e;const{overflow:t,overflowX:n,overflowY:i}=window.getComputedStyle(r);return[t,n,i].some(s=>s==="auto"||s==="scroll")&&e.push(r),[...e,...zy(r.parentElement)]}const rP=["x","y","top","bottom","left","right","width","height"],sP=(r,e)=>rP.every(t=>r[t]===e[t]);var oP=Object.defineProperty,aP=Object.defineProperties,lP=Object.getOwnPropertyDescriptors,h_=Object.getOwnPropertySymbols,cP=Object.prototype.hasOwnProperty,uP=Object.prototype.propertyIsEnumerable,f_=(r,e,t)=>e in r?oP(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,d_=(r,e)=>{for(var t in e||(e={}))cP.call(e,t)&&f_(r,t,e[t]);if(h_)for(var t of h_(e))uP.call(e,t)&&f_(r,t,e[t]);return r},hP=(r,e)=>aP(r,lP(e)),p_,m_;typeof window<"u"&&((p_=window.document)!=null&&p_.createElement||((m_=window.navigator)==null?void 0:m_.product)==="ReactNative")?Se.useLayoutEffect:Se.useEffect;function ky(r,e,t){if(!r)return;if(t(r)===!0)return r;let n=r.child;for(;n;){const i=ky(n,e,t);if(i)return i;n=n.sibling}}function Vy(r){try{return Object.defineProperties(r,{_currentRenderer:{get(){return null},set(){}},_currentRenderer2:{get(){return null},set(){}}})}catch{return r}}const g_=console.error;console.error=function(){const r=[...arguments].join("");if(r!=null&&r.startsWith("Warning:")&&r.includes("useContext")){console.error=g_;return}return g_.apply(this,arguments)};const Dm=Vy(Se.createContext(null));class Hy extends Se.Component{render(){return Se.createElement(Dm.Provider,{value:this._reactInternals},this.props.children)}}function fP(){const r=Se.useContext(Dm);if(r===null)throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");const e=Se.useId();return Se.useMemo(()=>{for(const n of[r,r==null?void 0:r.alternate]){if(!n)continue;const i=ky(n,!1,s=>{let o=s.memoizedState;for(;o;){if(o.memoizedState===e)return!0;o=o.next}});if(i)return i}},[r,e])}function dP(){const r=fP(),[e]=Se.useState(()=>new Map);e.clear();let t=r;for(;t;){if(t.type&&typeof t.type=="object"){const i=t.type._context===void 0&&t.type.Provider===t.type?t.type:t.type._context;i&&i!==Dm&&!e.has(i)&&e.set(i,Se.useContext(Vy(i)))}t=t.return}return e}function pP(){const r=dP();return Se.useMemo(()=>Array.from(r.keys()).reduce((e,t)=>n=>Se.createElement(e,null,Se.createElement(t.Provider,hP(d_({},n),{value:r.get(t)}))),e=>Se.createElement(Hy,d_({},e))),[r])}const mP=Se.forwardRef(function({children:e,fallback:t,resize:n,style:i,gl:s,events:o=eP,eventSource:c,eventPrefix:u,shadows:h,linear:f,flat:p,legacy:m,orthographic:g,frameloop:x,dpr:b,performance:y,raycaster:_,camera:M,scene:E,onPointerMissed:w,onCreated:I,...C},O){Se.useMemo(()=>UR(TR),[]);const T=pP(),[P,U]=tP({scroll:!0,debounce:{scroll:50,resize:0},...n}),D=Se.useRef(null),H=Se.useRef(null);Se.useImperativeHandle(O,()=>D.current);const K=Cy(w),[ie,G]=Se.useState(!1),[Z,j]=Se.useState(!1);if(ie)throw ie;if(Z)throw Z;const z=Se.useRef(null);Rl(()=>{const Y=D.current;U.width>0&&U.height>0&&Y&&(z.current||(z.current=QR(Y)),z.current.configure({gl:s,events:o,shadows:h,linear:f,flat:p,legacy:m,orthographic:g,frameloop:x,dpr:b,performance:y,raycaster:_,camera:M,scene:E,size:U,onPointerMissed:(...oe)=>K.current==null?void 0:K.current(...oe),onCreated:oe=>{oe.events.connect==null||oe.events.connect(c?FR(c)?c.current:c:H.current),u&&oe.setEvents({compute:(pe,Ie)=>{const rt=pe[u+"X"],Qe=pe[u+"Y"];Ie.pointer.set(rt/Ie.size.width*2-1,-(Qe/Ie.size.height)*2+1),Ie.raycaster.setFromCamera(Ie.pointer,Ie.camera)}}),I==null||I(oe)}}),z.current.render(Bi.jsx(T,{children:Bi.jsx(Ry,{set:j,children:Bi.jsx(Se.Suspense,{fallback:Bi.jsx(BR,{set:G}),children:e??null})})})))}),Se.useEffect(()=>{const Y=D.current;if(Y)return()=>By(Y)},[]);const X=c?"none":"auto";return Bi.jsx("div",{ref:H,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",pointerEvents:X,...i},...C,children:Bi.jsx("div",{ref:P,style:{width:"100%",height:"100%"},children:Bi.jsx("canvas",{ref:D,style:{display:"block"},children:t})})})}),VP=Se.forwardRef(function(e,t){return Bi.jsx(Hy,{children:Bi.jsx(mP,{...e,ref:t})})});function Js(){return Js=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)({}).hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},Js.apply(null,arguments)}const Pl=new F,Nm=new F,gP=new F,v_=new me;function vP(r,e,t){const n=Pl.setFromMatrixPosition(r.matrixWorld);n.project(e);const i=t.width/2,s=t.height/2;return[n.x*i+i,-(n.y*s)+s]}function _P(r,e){const t=Pl.setFromMatrixPosition(r.matrixWorld),n=Nm.setFromMatrixPosition(e.matrixWorld),i=t.sub(n),s=e.getWorldDirection(gP);return i.angleTo(s)>Math.PI/2}function xP(r,e,t,n){const i=Pl.setFromMatrixPosition(r.matrixWorld),s=i.clone();s.project(e),v_.set(s.x,s.y),t.setFromCamera(v_,e);const o=t.intersectObjects(n,!0);if(o.length){const c=o[0].distance;return i.distanceTo(t.ray.origin)<c}return!0}function yP(r,e){if(e instanceof Gi)return e.zoom;if(e instanceof en){const t=Pl.setFromMatrixPosition(r.matrixWorld),n=Nm.setFromMatrixPosition(e.matrixWorld),i=e.fov*Math.PI/180,s=t.distanceTo(n);return 1/(2*Math.tan(i/2)*s)}else return 1}function SP(r,e,t){if(e instanceof en||e instanceof Gi){const n=Pl.setFromMatrixPosition(r.matrixWorld),i=Nm.setFromMatrixPosition(e.matrixWorld),s=n.distanceTo(i),o=(t[1]-t[0])/(e.far-e.near),c=t[1]-o*e.far;return Math.round(o*s+c)}}const Bp=r=>Math.abs(r)<1e-10?0:r;function Gy(r,e,t=""){let n="matrix3d(";for(let i=0;i!==16;i++)n+=Bp(e[i]*r.elements[i])+(i!==15?",":")");return t+n}const MP=(r=>e=>Gy(e,r))([1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1]),bP=(r=>(e,t)=>Gy(e,r(t),"translate(-50%,-50%)"))(r=>[1/r,1/r,1/r,1,-1/r,-1/r,-1/r,-1,1/r,1/r,1/r,1,1,1,1,1]);function EP(r){return r&&typeof r=="object"&&"current"in r}const HP=Se.forwardRef(({children:r,eps:e=.001,style:t,className:n,prepend:i,center:s,fullscreen:o,portal:c,distanceFactor:u,sprite:h=!1,transform:f=!1,occlude:p,onOcclude:m,castShadow:g,receiveShadow:x,material:b,geometry:y,zIndexRange:_=[16777271,0],calculatePosition:M=vP,as:E="div",wrapperClass:w,pointerEvents:I="auto",...C},O)=>{const{gl:T,camera:P,scene:U,size:D,raycaster:H,events:K,viewport:ie}=ar(),[G]=Se.useState(()=>document.createElement(E)),Z=Se.useRef(),j=Se.useRef(null),z=Se.useRef(0),X=Se.useRef([0,0]),Y=Se.useRef(null),oe=Se.useRef(null),pe=(c==null?void 0:c.current)||K.connected||T.domElement.parentNode,Ie=Se.useRef(null),rt=Se.useRef(!1),Qe=Se.useMemo(()=>p&&p!=="blending"||Array.isArray(p)&&p.length&&EP(p[0]),[p]);Se.useLayoutEffect(()=>{const Ke=T.domElement;p&&p==="blending"?(Ke.style.zIndex=`${Math.floor(_[0]/2)}`,Ke.style.position="absolute",Ke.style.pointerEvents="none"):(Ke.style.zIndex=null,Ke.style.position=null,Ke.style.pointerEvents=null)},[p]),Se.useLayoutEffect(()=>{if(j.current){const Ke=Z.current=A_(G);if(U.updateMatrixWorld(),f)G.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{const Pe=M(j.current,P,D);G.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${Pe[0]}px,${Pe[1]}px,0);transform-origin:0 0;`}return pe&&(i?pe.prepend(G):pe.appendChild(G)),()=>{pe&&pe.removeChild(G),Ke.unmount()}}},[pe,f]),Se.useLayoutEffect(()=>{w&&(G.className=w)},[w]);const ae=Se.useMemo(()=>f?{position:"absolute",top:0,left:0,width:D.width,height:D.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:s?"translate3d(-50%,-50%,0)":"none",...o&&{top:-D.height/2,left:-D.width/2,width:D.width,height:D.height},...t},[t,s,o,D,f]),Re=Se.useMemo(()=>({position:"absolute",pointerEvents:I}),[I]);Se.useLayoutEffect(()=>{if(rt.current=!1,f){var Ke;(Ke=Z.current)==null||Ke.render(Se.createElement("div",{ref:Y,style:ae},Se.createElement("div",{ref:oe,style:Re},Se.createElement("div",{ref:O,className:n,style:t,children:r}))))}else{var Pe;(Pe=Z.current)==null||Pe.render(Se.createElement("div",{ref:O,style:ae,className:n,children:r}))}});const we=Se.useRef(!0);Fy(Ke=>{if(j.current){P.updateMatrixWorld(),j.current.updateWorldMatrix(!0,!1);const Pe=f?X.current:M(j.current,P,D);if(f||Math.abs(z.current-P.zoom)>e||Math.abs(X.current[0]-Pe[0])>e||Math.abs(X.current[1]-Pe[1])>e){const gt=_P(j.current,P);let Ye=!1;Qe&&(Array.isArray(p)?Ye=p.map(Oe=>Oe.current):p!=="blending"&&(Ye=[U]));const ve=we.current;if(Ye){const Oe=xP(j.current,P,H,Ye);we.current=Oe&&!gt}else we.current=!gt;ve!==we.current&&(m?m(!we.current):G.style.display=we.current?"block":"none");const be=Math.floor(_[0]/2),xe=p?Qe?[_[0],be]:[be-1,0]:_;if(G.style.zIndex=`${SP(j.current,P,xe)}`,f){const[Oe,Ue]=[D.width/2,D.height/2],ct=P.projectionMatrix.elements[5]*Ue,{isOrthographicCamera:k,top:pt,left:tt,bottom:ut,right:Me}=P,Pt=MP(P.matrixWorldInverse),N=k?`scale(${ct})translate(${Bp(-(Me+tt)/2)}px,${Bp((pt+ut)/2)}px)`:`translateZ(${ct}px)`;let R=j.current.matrixWorld;h&&(R=P.matrixWorldInverse.clone().transpose().copyPosition(R).scale(j.current.scale),R.elements[3]=R.elements[7]=R.elements[11]=0,R.elements[15]=1),G.style.width=D.width+"px",G.style.height=D.height+"px",G.style.perspective=k?"":`${ct}px`,Y.current&&oe.current&&(Y.current.style.transform=`${N}${Pt}translate(${Oe}px,${Ue}px)`,oe.current.style.transform=bP(R,1/((u||10)/400)))}else{const Oe=u===void 0?1:yP(j.current,P)*u;G.style.transform=`translate3d(${Pe[0]}px,${Pe[1]}px,0) scale(${Oe})`}X.current=Pe,z.current=P.zoom}}if(!Qe&&Ie.current&&!rt.current)if(f){if(Y.current){const Pe=Y.current.children[0];if(Pe!=null&&Pe.clientWidth&&Pe!=null&&Pe.clientHeight){const{isOrthographicCamera:gt}=P;if(gt||y)C.scale&&(Array.isArray(C.scale)?C.scale instanceof F?Ie.current.scale.copy(C.scale.clone().divideScalar(1)):Ie.current.scale.set(1/C.scale[0],1/C.scale[1],1/C.scale[2]):Ie.current.scale.setScalar(1/C.scale));else{const Ye=(u||10)/400,ve=Pe.clientWidth*Ye,be=Pe.clientHeight*Ye;Ie.current.scale.set(ve,be,1)}rt.current=!0}}}else{const Pe=G.children[0];if(Pe!=null&&Pe.clientWidth&&Pe!=null&&Pe.clientHeight){const gt=1/ie.factor,Ye=Pe.clientWidth*gt,ve=Pe.clientHeight*gt;Ie.current.scale.set(Ye,ve,1),rt.current=!0}Ie.current.lookAt(Ke.camera.position)}});const $e=Se.useMemo(()=>({vertexShader:f?void 0:`
          /*
            This shader is from the THREE's SpriteMaterial.
            We need to turn the backing plane into a Sprite
            (make it always face the camera) if "transfrom"
            is false.
          */
          #include <common>

          void main() {
            vec2 center = vec2(0., 1.);
            float rotation = 0.0;

            // This is somewhat arbitrary, but it seems to work well
            // Need to figure out how to derive this dynamically if it even matters
            float size = 0.03;

            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;

            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;

            gl_Position = projectionMatrix * mvPosition;
          }
      `,fragmentShader:`
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `}),[f]);return Se.createElement("group",Js({},C,{ref:j}),p&&!Qe&&Se.createElement("mesh",{castShadow:g,receiveShadow:x,ref:Ie},y||Se.createElement("planeGeometry",null),b||Se.createElement("shaderMaterial",{side:ki,vertexShader:$e.vertexShader,fragmentShader:$e.fragmentShader})))}),Wy=parseInt(xl.replace(/\D+/g,"")),Xy=Wy>=125?"uv1":"uv2";var wP=Object.defineProperty,TP=(r,e,t)=>e in r?wP(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,AP=(r,e,t)=>(TP(r,e+"",t),t);class CP{constructor(){AP(this,"_listeners")}addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}var RP=Object.defineProperty,PP=(r,e,t)=>e in r?RP(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,ft=(r,e,t)=>(PP(r,typeof e!="symbol"?e+"":e,t),t);const yu=new Ks,__=new Rr,IP=Math.cos(70*(Math.PI/180)),x_=(r,e)=>(r%e+e)%e;let LP=class extends CP{constructor(e,t){super(),ft(this,"object"),ft(this,"domElement"),ft(this,"enabled",!0),ft(this,"target",new F),ft(this,"minDistance",0),ft(this,"maxDistance",1/0),ft(this,"minZoom",0),ft(this,"maxZoom",1/0),ft(this,"minPolarAngle",0),ft(this,"maxPolarAngle",Math.PI),ft(this,"minAzimuthAngle",-1/0),ft(this,"maxAzimuthAngle",1/0),ft(this,"enableDamping",!1),ft(this,"dampingFactor",.05),ft(this,"enableZoom",!0),ft(this,"zoomSpeed",1),ft(this,"enableRotate",!0),ft(this,"rotateSpeed",1),ft(this,"enablePan",!0),ft(this,"panSpeed",1),ft(this,"screenSpacePanning",!0),ft(this,"keyPanSpeed",7),ft(this,"zoomToCursor",!1),ft(this,"autoRotate",!1),ft(this,"autoRotateSpeed",2),ft(this,"reverseOrbit",!1),ft(this,"reverseHorizontalOrbit",!1),ft(this,"reverseVerticalOrbit",!1),ft(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),ft(this,"mouseButtons",{LEFT:Ds.ROTATE,MIDDLE:Ds.DOLLY,RIGHT:Ds.PAN}),ft(this,"touches",{ONE:Ns.ROTATE,TWO:Ns.DOLLY_PAN}),ft(this,"target0"),ft(this,"position0"),ft(this,"zoom0"),ft(this,"_domElementKeyEvents",null),ft(this,"getPolarAngle"),ft(this,"getAzimuthalAngle"),ft(this,"setPolarAngle"),ft(this,"setAzimuthalAngle"),ft(this,"getDistance"),ft(this,"getZoomScale"),ft(this,"listenToKeyEvents"),ft(this,"stopListenToKeyEvents"),ft(this,"saveState"),ft(this,"reset"),ft(this,"update"),ft(this,"connect"),ft(this,"dispose"),ft(this,"dollyIn"),ft(this,"dollyOut"),ft(this,"getScale"),ft(this,"setScale"),this.object=e,this.domElement=t,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>f.phi,this.getAzimuthalAngle=()=>f.theta,this.setPolarAngle=V=>{let ee=x_(V,2*Math.PI),ue=f.phi;ue<0&&(ue+=2*Math.PI),ee<0&&(ee+=2*Math.PI);let He=Math.abs(ee-ue);2*Math.PI-He<He&&(ee<ue?ee+=2*Math.PI:ue+=2*Math.PI),p.phi=ee-ue,n.update()},this.setAzimuthalAngle=V=>{let ee=x_(V,2*Math.PI),ue=f.theta;ue<0&&(ue+=2*Math.PI),ee<0&&(ee+=2*Math.PI);let He=Math.abs(ee-ue);2*Math.PI-He<He&&(ee<ue?ee+=2*Math.PI:ue+=2*Math.PI),p.theta=ee-ue,n.update()},this.getDistance=()=>n.object.position.distanceTo(n.target),this.listenToKeyEvents=V=>{V.addEventListener("keydown",$),this._domElementKeyEvents=V},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",$),this._domElementKeyEvents=null},this.saveState=()=>{n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=()=>{n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(i),n.update(),u=c.NONE},this.update=(()=>{const V=new F,ee=new F(0,1,0),ue=new An().setFromUnitVectors(e.up,ee),He=ue.clone().invert(),st=new F,St=new An,W=2*Math.PI;return function(){const fe=n.object.position;ue.setFromUnitVectors(e.up,ee),He.copy(ue).invert(),V.copy(fe).sub(n.target),V.applyQuaternion(ue),f.setFromVector3(V),n.autoRotate&&u===c.NONE&&ie(H()),n.enableDamping?(f.theta+=p.theta*n.dampingFactor,f.phi+=p.phi*n.dampingFactor):(f.theta+=p.theta,f.phi+=p.phi);let Be=n.minAzimuthAngle,Te=n.maxAzimuthAngle;isFinite(Be)&&isFinite(Te)&&(Be<-Math.PI?Be+=W:Be>Math.PI&&(Be-=W),Te<-Math.PI?Te+=W:Te>Math.PI&&(Te-=W),Be<=Te?f.theta=Math.max(Be,Math.min(Te,f.theta)):f.theta=f.theta>(Be+Te)/2?Math.max(Be,f.theta):Math.min(Te,f.theta)),f.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,f.phi)),f.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(g,n.dampingFactor):n.target.add(g),n.zoomToCursor&&P||n.object.isOrthographicCamera?f.radius=Ie(f.radius):f.radius=Ie(f.radius*m),V.setFromSpherical(f),V.applyQuaternion(He),fe.copy(n.target).add(V),n.object.matrixAutoUpdate||n.object.updateMatrix(),n.object.lookAt(n.target),n.enableDamping===!0?(p.theta*=1-n.dampingFactor,p.phi*=1-n.dampingFactor,g.multiplyScalar(1-n.dampingFactor)):(p.set(0,0,0),g.set(0,0,0));let _e=!1;if(n.zoomToCursor&&P){let nt=null;if(n.object instanceof en&&n.object.isPerspectiveCamera){const dt=V.length();nt=Ie(dt*m);const Wt=dt-nt;n.object.position.addScaledVector(O,Wt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const dt=new F(T.x,T.y,0);dt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/m)),n.object.updateProjectionMatrix(),_e=!0;const Wt=new F(T.x,T.y,0);Wt.unproject(n.object),n.object.position.sub(Wt).add(dt),n.object.updateMatrixWorld(),nt=V.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;nt!==null&&(n.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(nt).add(n.object.position):(yu.origin.copy(n.object.position),yu.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(yu.direction))<IP?e.lookAt(n.target):(__.setFromNormalAndCoplanarPoint(n.object.up,n.target),yu.intersectPlane(__,n.target))))}else n.object instanceof Gi&&n.object.isOrthographicCamera&&(_e=m!==1,_e&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/m)),n.object.updateProjectionMatrix()));return m=1,P=!1,_e||st.distanceToSquared(n.object.position)>h||8*(1-St.dot(n.object.quaternion))>h?(n.dispatchEvent(i),st.copy(n.object.position),St.copy(n.object.quaternion),_e=!1,!0):!1}})(),this.connect=V=>{n.domElement=V,n.domElement.style.touchAction="none",n.domElement.addEventListener("contextmenu",Ce),n.domElement.addEventListener("pointerdown",tt),n.domElement.addEventListener("pointercancel",Me),n.domElement.addEventListener("wheel",R)},this.dispose=()=>{var V,ee,ue,He,st,St;n.domElement&&(n.domElement.style.touchAction="auto"),(V=n.domElement)==null||V.removeEventListener("contextmenu",Ce),(ee=n.domElement)==null||ee.removeEventListener("pointerdown",tt),(ue=n.domElement)==null||ue.removeEventListener("pointercancel",Me),(He=n.domElement)==null||He.removeEventListener("wheel",R),(st=n.domElement)==null||st.ownerDocument.removeEventListener("pointermove",ut),(St=n.domElement)==null||St.ownerDocument.removeEventListener("pointerup",Me),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",$)};const n=this,i={type:"change"},s={type:"start"},o={type:"end"},c={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let u=c.NONE;const h=1e-6,f=new Pp,p=new Pp;let m=1;const g=new F,x=new me,b=new me,y=new me,_=new me,M=new me,E=new me,w=new me,I=new me,C=new me,O=new F,T=new me;let P=!1;const U=[],D={};function H(){return 2*Math.PI/60/60*n.autoRotateSpeed}function K(){return Math.pow(.95,n.zoomSpeed)}function ie(V){n.reverseOrbit||n.reverseHorizontalOrbit?p.theta+=V:p.theta-=V}function G(V){n.reverseOrbit||n.reverseVerticalOrbit?p.phi+=V:p.phi-=V}const Z=(()=>{const V=new F;return function(ue,He){V.setFromMatrixColumn(He,0),V.multiplyScalar(-ue),g.add(V)}})(),j=(()=>{const V=new F;return function(ue,He){n.screenSpacePanning===!0?V.setFromMatrixColumn(He,1):(V.setFromMatrixColumn(He,0),V.crossVectors(n.object.up,V)),V.multiplyScalar(ue),g.add(V)}})(),z=(()=>{const V=new F;return function(ue,He){const st=n.domElement;if(st&&n.object instanceof en&&n.object.isPerspectiveCamera){const St=n.object.position;V.copy(St).sub(n.target);let W=V.length();W*=Math.tan(n.object.fov/2*Math.PI/180),Z(2*ue*W/st.clientHeight,n.object.matrix),j(2*He*W/st.clientHeight,n.object.matrix)}else st&&n.object instanceof Gi&&n.object.isOrthographicCamera?(Z(ue*(n.object.right-n.object.left)/n.object.zoom/st.clientWidth,n.object.matrix),j(He*(n.object.top-n.object.bottom)/n.object.zoom/st.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function X(V){n.object instanceof en&&n.object.isPerspectiveCamera||n.object instanceof Gi&&n.object.isOrthographicCamera?m=V:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(V){X(m/V)}function oe(V){X(m*V)}function pe(V){if(!n.zoomToCursor||!n.domElement)return;P=!0;const ee=n.domElement.getBoundingClientRect(),ue=V.clientX-ee.left,He=V.clientY-ee.top,st=ee.width,St=ee.height;T.x=ue/st*2-1,T.y=-(He/St)*2+1,O.set(T.x,T.y,1).unproject(n.object).sub(n.object.position).normalize()}function Ie(V){return Math.max(n.minDistance,Math.min(n.maxDistance,V))}function rt(V){x.set(V.clientX,V.clientY)}function Qe(V){pe(V),w.set(V.clientX,V.clientY)}function ae(V){_.set(V.clientX,V.clientY)}function Re(V){b.set(V.clientX,V.clientY),y.subVectors(b,x).multiplyScalar(n.rotateSpeed);const ee=n.domElement;ee&&(ie(2*Math.PI*y.x/ee.clientHeight),G(2*Math.PI*y.y/ee.clientHeight)),x.copy(b),n.update()}function we(V){I.set(V.clientX,V.clientY),C.subVectors(I,w),C.y>0?Y(K()):C.y<0&&oe(K()),w.copy(I),n.update()}function $e(V){M.set(V.clientX,V.clientY),E.subVectors(M,_).multiplyScalar(n.panSpeed),z(E.x,E.y),_.copy(M),n.update()}function Ke(V){pe(V),V.deltaY<0?oe(K()):V.deltaY>0&&Y(K()),n.update()}function Pe(V){let ee=!1;switch(V.code){case n.keys.UP:z(0,n.keyPanSpeed),ee=!0;break;case n.keys.BOTTOM:z(0,-n.keyPanSpeed),ee=!0;break;case n.keys.LEFT:z(n.keyPanSpeed,0),ee=!0;break;case n.keys.RIGHT:z(-n.keyPanSpeed,0),ee=!0;break}ee&&(V.preventDefault(),n.update())}function gt(){if(U.length==1)x.set(U[0].pageX,U[0].pageY);else{const V=.5*(U[0].pageX+U[1].pageX),ee=.5*(U[0].pageY+U[1].pageY);x.set(V,ee)}}function Ye(){if(U.length==1)_.set(U[0].pageX,U[0].pageY);else{const V=.5*(U[0].pageX+U[1].pageX),ee=.5*(U[0].pageY+U[1].pageY);_.set(V,ee)}}function ve(){const V=U[0].pageX-U[1].pageX,ee=U[0].pageY-U[1].pageY,ue=Math.sqrt(V*V+ee*ee);w.set(0,ue)}function be(){n.enableZoom&&ve(),n.enablePan&&Ye()}function xe(){n.enableZoom&&ve(),n.enableRotate&&gt()}function Oe(V){if(U.length==1)b.set(V.pageX,V.pageY);else{const ue=Ve(V),He=.5*(V.pageX+ue.x),st=.5*(V.pageY+ue.y);b.set(He,st)}y.subVectors(b,x).multiplyScalar(n.rotateSpeed);const ee=n.domElement;ee&&(ie(2*Math.PI*y.x/ee.clientHeight),G(2*Math.PI*y.y/ee.clientHeight)),x.copy(b)}function Ue(V){if(U.length==1)M.set(V.pageX,V.pageY);else{const ee=Ve(V),ue=.5*(V.pageX+ee.x),He=.5*(V.pageY+ee.y);M.set(ue,He)}E.subVectors(M,_).multiplyScalar(n.panSpeed),z(E.x,E.y),_.copy(M)}function ct(V){const ee=Ve(V),ue=V.pageX-ee.x,He=V.pageY-ee.y,st=Math.sqrt(ue*ue+He*He);I.set(0,st),C.set(0,Math.pow(I.y/w.y,n.zoomSpeed)),Y(C.y),w.copy(I)}function k(V){n.enableZoom&&ct(V),n.enablePan&&Ue(V)}function pt(V){n.enableZoom&&ct(V),n.enableRotate&&Oe(V)}function tt(V){var ee,ue;n.enabled!==!1&&(U.length===0&&((ee=n.domElement)==null||ee.ownerDocument.addEventListener("pointermove",ut),(ue=n.domElement)==null||ue.ownerDocument.addEventListener("pointerup",Me)),Le(V),V.pointerType==="touch"?de(V):Pt(V))}function ut(V){n.enabled!==!1&&(V.pointerType==="touch"?ye(V):N(V))}function Me(V){var ee,ue,He;ce(V),U.length===0&&((ee=n.domElement)==null||ee.releasePointerCapture(V.pointerId),(ue=n.domElement)==null||ue.ownerDocument.removeEventListener("pointermove",ut),(He=n.domElement)==null||He.ownerDocument.removeEventListener("pointerup",Me)),n.dispatchEvent(o),u=c.NONE}function Pt(V){let ee;switch(V.button){case 0:ee=n.mouseButtons.LEFT;break;case 1:ee=n.mouseButtons.MIDDLE;break;case 2:ee=n.mouseButtons.RIGHT;break;default:ee=-1}switch(ee){case Ds.DOLLY:if(n.enableZoom===!1)return;Qe(V),u=c.DOLLY;break;case Ds.ROTATE:if(V.ctrlKey||V.metaKey||V.shiftKey){if(n.enablePan===!1)return;ae(V),u=c.PAN}else{if(n.enableRotate===!1)return;rt(V),u=c.ROTATE}break;case Ds.PAN:if(V.ctrlKey||V.metaKey||V.shiftKey){if(n.enableRotate===!1)return;rt(V),u=c.ROTATE}else{if(n.enablePan===!1)return;ae(V),u=c.PAN}break;default:u=c.NONE}u!==c.NONE&&n.dispatchEvent(s)}function N(V){if(n.enabled!==!1)switch(u){case c.ROTATE:if(n.enableRotate===!1)return;Re(V);break;case c.DOLLY:if(n.enableZoom===!1)return;we(V);break;case c.PAN:if(n.enablePan===!1)return;$e(V);break}}function R(V){n.enabled===!1||n.enableZoom===!1||u!==c.NONE&&u!==c.ROTATE||(V.preventDefault(),n.dispatchEvent(s),Ke(V),n.dispatchEvent(o))}function $(V){n.enabled===!1||n.enablePan===!1||Pe(V)}function de(V){switch(ge(V),U.length){case 1:switch(n.touches.ONE){case Ns.ROTATE:if(n.enableRotate===!1)return;gt(),u=c.TOUCH_ROTATE;break;case Ns.PAN:if(n.enablePan===!1)return;Ye(),u=c.TOUCH_PAN;break;default:u=c.NONE}break;case 2:switch(n.touches.TWO){case Ns.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;be(),u=c.TOUCH_DOLLY_PAN;break;case Ns.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;xe(),u=c.TOUCH_DOLLY_ROTATE;break;default:u=c.NONE}break;default:u=c.NONE}u!==c.NONE&&n.dispatchEvent(s)}function ye(V){switch(ge(V),u){case c.TOUCH_ROTATE:if(n.enableRotate===!1)return;Oe(V),n.update();break;case c.TOUCH_PAN:if(n.enablePan===!1)return;Ue(V),n.update();break;case c.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;k(V),n.update();break;case c.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;pt(V),n.update();break;default:u=c.NONE}}function Ce(V){n.enabled!==!1&&V.preventDefault()}function Le(V){U.push(V)}function ce(V){delete D[V.pointerId];for(let ee=0;ee<U.length;ee++)if(U[ee].pointerId==V.pointerId){U.splice(ee,1);return}}function ge(V){let ee=D[V.pointerId];ee===void 0&&(ee=new me,D[V.pointerId]=ee),ee.set(V.pageX,V.pageY)}function Ve(V){const ee=V.pointerId===U[0].pointerId?U[1]:U[0];return D[ee.pointerId]}this.dollyIn=(V=K())=>{oe(V),n.update()},this.dollyOut=(V=K())=>{Y(V),n.update()},this.getScale=()=>m,this.setScale=V=>{X(V),n.update()},this.getZoomScale=()=>K(),t!==void 0&&this.connect(t),this.update()}};const y_=new mn,Su=new F;class Um extends Tm{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new et(e,3)),this.setAttribute("uv",new et(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new yh(t,6,1);return this.setAttribute("instanceStart",new di(n,3,0)),this.setAttribute("instanceEnd",new di(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));const i=new yh(n,t*2,1);return this.setAttribute("instanceColorStart",new di(i,t,0)),this.setAttribute("instanceColorEnd",new di(i,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new mm(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),y_.setFromBufferAttribute(t),this.boundingBox.union(y_))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gn),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Su.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Su)),Su.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Su));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}class Yy extends Um{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setPositions(n),this}setColors(e,t=3){const n=e.length-t,i=new Float32Array(2*n);if(t===3)for(let s=0;s<n;s+=t)i[2*s]=e[s],i[2*s+1]=e[s+1],i[2*s+2]=e[s+2],i[2*s+3]=e[s+3],i[2*s+4]=e[s+4],i[2*s+5]=e[s+5];else for(let s=0;s<n;s+=t)i[2*s]=e[s],i[2*s+1]=e[s+1],i[2*s+2]=e[s+2],i[2*s+3]=e[s+3],i[2*s+4]=e[s+4],i[2*s+5]=e[s+5],i[2*s+6]=e[s+6],i[2*s+7]=e[s+7];return super.setColors(i,t),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class Om extends gi{constructor(e){super({type:"LineMaterial",uniforms:xh.clone(xh.merge([Ge.common,Ge.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new me(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${Wy>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(t){!!t!="USE_DASH"in this.defines&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(t){!!t!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}const dp=new Lt,S_=new F,M_=new F,En=new Lt,wn=new Lt,sr=new Lt,pp=new F,mp=new _t,Tn=new hy,b_=new F,Mu=new mn,bu=new gn,or=new Lt;let lr,Xs;function E_(r,e,t){return or.set(0,0,-e,1).applyMatrix4(r.projectionMatrix),or.multiplyScalar(1/or.w),or.x=Xs/t.width,or.y=Xs/t.height,or.applyMatrix4(r.projectionMatrixInverse),or.multiplyScalar(1/or.w),Math.abs(Math.max(or.x,or.y))}function DP(r,e){const t=r.matrixWorld,n=r.geometry,i=n.attributes.instanceStart,s=n.attributes.instanceEnd,o=Math.min(n.instanceCount,i.count);for(let c=0,u=o;c<u;c++){Tn.start.fromBufferAttribute(i,c),Tn.end.fromBufferAttribute(s,c),Tn.applyMatrix4(t);const h=new F,f=new F;lr.distanceSqToSegment(Tn.start,Tn.end,f,h),f.distanceTo(h)<Xs*.5&&e.push({point:f,pointOnLine:h,distance:lr.origin.distanceTo(f),object:r,face:null,faceIndex:c,uv:null,[Xy]:null})}}function NP(r,e,t){const n=e.projectionMatrix,s=r.material.resolution,o=r.matrixWorld,c=r.geometry,u=c.attributes.instanceStart,h=c.attributes.instanceEnd,f=Math.min(c.instanceCount,u.count),p=-e.near;lr.at(1,sr),sr.w=1,sr.applyMatrix4(e.matrixWorldInverse),sr.applyMatrix4(n),sr.multiplyScalar(1/sr.w),sr.x*=s.x/2,sr.y*=s.y/2,sr.z=0,pp.copy(sr),mp.multiplyMatrices(e.matrixWorldInverse,o);for(let m=0,g=f;m<g;m++){if(En.fromBufferAttribute(u,m),wn.fromBufferAttribute(h,m),En.w=1,wn.w=1,En.applyMatrix4(mp),wn.applyMatrix4(mp),En.z>p&&wn.z>p)continue;if(En.z>p){const E=En.z-wn.z,w=(En.z-p)/E;En.lerp(wn,w)}else if(wn.z>p){const E=wn.z-En.z,w=(wn.z-p)/E;wn.lerp(En,w)}En.applyMatrix4(n),wn.applyMatrix4(n),En.multiplyScalar(1/En.w),wn.multiplyScalar(1/wn.w),En.x*=s.x/2,En.y*=s.y/2,wn.x*=s.x/2,wn.y*=s.y/2,Tn.start.copy(En),Tn.start.z=0,Tn.end.copy(wn),Tn.end.z=0;const b=Tn.closestPointToPointParameter(pp,!0);Tn.at(b,b_);const y=fx.lerp(En.z,wn.z,b),_=y>=-1&&y<=1,M=pp.distanceTo(b_)<Xs*.5;if(_&&M){Tn.start.fromBufferAttribute(u,m),Tn.end.fromBufferAttribute(h,m),Tn.start.applyMatrix4(o),Tn.end.applyMatrix4(o);const E=new F,w=new F;lr.distanceSqToSegment(Tn.start,Tn.end,w,E),t.push({point:w,pointOnLine:E,distance:lr.origin.distanceTo(w),object:r,face:null,faceIndex:m,uv:null,[Xy]:null})}}}class qy extends cn{constructor(e=new Um,t=new Om({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,i=new Float32Array(2*t.count);for(let o=0,c=0,u=t.count;o<u;o++,c+=2)S_.fromBufferAttribute(t,o),M_.fromBufferAttribute(n,o),i[c]=c===0?0:i[c-1],i[c+1]=i[c]+S_.distanceTo(M_);const s=new yh(i,2,1);return e.setAttribute("instanceDistanceStart",new di(s,1,0)),e.setAttribute("instanceDistanceEnd",new di(s,1,1)),this}raycast(e,t){const n=this.material.worldUnits,i=e.camera;i===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;lr=e.ray;const o=this.matrixWorld,c=this.geometry,u=this.material;Xs=u.linewidth+s,c.boundingSphere===null&&c.computeBoundingSphere(),bu.copy(c.boundingSphere).applyMatrix4(o);let h;if(n)h=Xs*.5;else{const p=Math.max(i.near,bu.distanceToPoint(lr.origin));h=E_(i,p,u.resolution)}if(bu.radius+=h,lr.intersectsSphere(bu)===!1)return;c.boundingBox===null&&c.computeBoundingBox(),Mu.copy(c.boundingBox).applyMatrix4(o);let f;if(n)f=Xs*.5;else{const p=Math.max(i.near,Mu.distanceToPoint(lr.origin));f=E_(i,p,u.resolution)}Mu.expandByScalar(f),lr.intersectsBox(Mu)!==!1&&(n?DP(this,t):NP(this,i,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(dp),this.material.uniforms.resolution.value.set(dp.z,dp.w))}}class UP extends qy{constructor(e=new Yy,t=new Om({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}const OP=Se.forwardRef(function({points:e,color:t=16777215,vertexColors:n,linewidth:i,lineWidth:s,segments:o,dashed:c,...u},h){var f,p;const m=ar(_=>_.size),g=Se.useMemo(()=>o?new qy:new UP,[o]),[x]=Se.useState(()=>new Om),b=(n==null||(f=n[0])==null?void 0:f.length)===4?4:3,y=Se.useMemo(()=>{const _=o?new Um:new Yy,M=e.map(E=>{const w=Array.isArray(E);return E instanceof F||E instanceof Lt?[E.x,E.y,E.z]:E instanceof me?[E.x,E.y,0]:w&&E.length===3?[E[0],E[1],E[2]]:w&&E.length===2?[E[0],E[1],0]:E});if(_.setPositions(M.flat()),n){t=16777215;const E=n.map(w=>w instanceof Je?w.toArray():w);_.setColors(E.flat(),b)}return _},[e,o,n,b]);return Se.useLayoutEffect(()=>{g.computeLineDistances()},[e,g]),Se.useLayoutEffect(()=>{c?x.defines.USE_DASH="":delete x.defines.USE_DASH,x.needsUpdate=!0},[c,x]),Se.useEffect(()=>()=>{y.dispose(),x.dispose()},[y]),Se.createElement("primitive",Js({object:g,ref:h},u),Se.createElement("primitive",{object:y,attach:"geometry"}),Se.createElement("primitive",Js({object:x,attach:"material",color:t,vertexColors:!!n,resolution:[m.width,m.height],linewidth:(p=i??s)!==null&&p!==void 0?p:1,dashed:c,transparent:b===4},u)))}),WP=Se.forwardRef(({threshold:r=15,geometry:e,...t},n)=>{const i=Se.useRef(null);Se.useImperativeHandle(n,()=>i.current,[]);const s=Se.useMemo(()=>[0,0,0,1,0,0],[]),o=Se.useRef(),c=Se.useRef();return Se.useLayoutEffect(()=>{const u=i.current.parent,h=e??(u==null?void 0:u.geometry);if(!h||o.current===h&&c.current===r)return;o.current=h,c.current=r;const p=new lm(h,r).attributes.position.array;i.current.geometry.setPositions(p),i.current.geometry.attributes.instanceStart.needsUpdate=!0,i.current.geometry.attributes.instanceEnd.needsUpdate=!0,i.current.computeLineDistances()}),Se.createElement(OP,Js({segments:!0,points:s,ref:i,raycast:()=>null},t))}),XP=Se.forwardRef(({makeDefault:r,camera:e,regress:t,domElement:n,enableDamping:i=!0,keyEvents:s=!1,onChange:o,onStart:c,onEnd:u,...h},f)=>{const p=ar(C=>C.invalidate),m=ar(C=>C.camera),g=ar(C=>C.gl),x=ar(C=>C.events),b=ar(C=>C.setEvents),y=ar(C=>C.set),_=ar(C=>C.get),M=ar(C=>C.performance),E=e||m,w=n||x.connected||g.domElement,I=Se.useMemo(()=>new LP(E),[E]);return Fy(()=>{I.enabled&&I.update()},-1),Se.useEffect(()=>(s&&I.connect(s===!0?w:s),I.connect(w),()=>void I.dispose()),[s,w,t,I,p]),Se.useEffect(()=>{const C=P=>{p(),t&&M.regress(),o&&o(P)},O=P=>{c&&c(P)},T=P=>{u&&u(P)};return I.addEventListener("change",C),I.addEventListener("start",O),I.addEventListener("end",T),()=>{I.removeEventListener("start",O),I.removeEventListener("end",T),I.removeEventListener("change",C)}},[o,c,u,I,p,b]),Se.useEffect(()=>{if(r){const C=_().controls;return y({controls:I}),()=>y({controls:C})}},[r,I]),Se.createElement("primitive",Js({ref:f,object:I,enableDamping:i},h))});export{vp as A,Yn as B,VP as C,WP as E,HP as H,qn as L,Vs as N,XP as O,An as Q,F as V,BP as _,Fy as a,Je as b,Mt as c,Xt as d,x0 as e,Bi as j,ar as u};
