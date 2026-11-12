(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nc="180",Gh=0,Ic=1,zh=2,yu=1,Hh=2,bn=3,On=0,Lt=1,yt=2,Un=0,Bi=1,Lc=2,Dc=3,Nc=4,Vh=5,Qn=100,kh=101,Wh=102,Xh=103,qh=104,Yh=200,Kh=201,Zh=202,$h=203,qa=204,Ya=205,Jh=206,jh=207,Qh=208,ef=209,tf=210,nf=211,rf=212,sf=213,af=214,Ka=0,Za=1,$a=2,Vi=3,Ja=4,ja=5,Qa=6,eo=7,Mu=0,of=1,cf=2,Fn=0,lf=1,uf=2,hf=3,ff=4,df=5,pf=6,mf=7,Eu=300,ki=301,Wi=302,to=303,no=304,Ks=306,io=1e3,ii=1001,ro=1002,rn=1003,gf=1004,Hr=1005,un=1006,ea=1007,ri=1008,dn=1009,bu=1010,Au=1011,yr=1012,ic=1013,oi=1014,Tn=1015,Nr=1016,rc=1017,sc=1018,Mr=1020,Tu=35902,Ru=35899,wu=1021,Cu=1022,tn=1023,Er=1026,br=1027,Pu=1028,ac=1029,Iu=1030,oc=1031,cc=1033,ys=33776,Ms=33777,Es=33778,bs=33779,so=35840,ao=35841,oo=35842,co=35843,lo=36196,uo=37492,ho=37496,fo=37808,po=37809,mo=37810,go=37811,vo=37812,_o=37813,So=37814,xo=37815,yo=37816,Mo=37817,Eo=37818,bo=37819,Ao=37820,To=37821,Ro=36492,wo=36494,Co=36495,Po=36283,Io=36284,Lo=36285,Do=36286,vf=3200,_f=3201,Lu=0,Sf=1,Nn="",Pt="srgb",Xi="srgb-linear",Ds="linear",nt="srgb",mi=7680,Uc=519,xf=512,yf=513,Mf=514,Du=515,Ef=516,bf=517,Af=518,Tf=519,Fc=35044,Oc="300 es",hn=2e3,Ns=2001;class $i{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bc=1234567;const gr=Math.PI/180,Ar=180/Math.PI;function fi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]).toLowerCase()}function Ye(n,e,t){return Math.max(e,Math.min(t,n))}function lc(n,e){return(n%e+e)%e}function Rf(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function wf(n,e,t){return n!==e?(t-n)/(e-n):0}function vr(n,e,t){return(1-t)*n+t*e}function Cf(n,e,t,i){return vr(n,e,1-Math.exp(-t*i))}function Pf(n,e=1){return e-Math.abs(lc(n,e*2)-e)}function If(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Lf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Df(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Nf(n,e){return n+Math.random()*(e-n)}function Uf(n){return n*(.5-Math.random())}function Ff(n){n!==void 0&&(Bc=n);let e=Bc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Of(n){return n*gr}function Bf(n){return n*Ar}function Gf(n){return(n&n-1)===0&&n!==0}function zf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Hf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Vf(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+i)/2),u=a((e+i)/2),h=s((e-i)/2),f=a((e-i)/2),p=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*u,c*h,c*f,o*l);break;case"YZY":n.set(c*f,o*u,c*h,o*l);break;case"ZXZ":n.set(c*h,c*f,o*u,o*l);break;case"XZX":n.set(o*u,c*g,c*p,o*l);break;case"YXY":n.set(c*p,o*u,c*g,o*l);break;case"ZYZ":n.set(c*g,c*p,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Li(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Tt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const gi={DEG2RAD:gr,RAD2DEG:Ar,generateUUID:fi,clamp:Ye,euclideanModulo:lc,mapLinear:Rf,inverseLerp:wf,lerp:vr,damp:Cf,pingpong:Pf,smoothstep:If,smootherstep:Lf,randInt:Df,randFloat:Nf,randFloatSpread:Uf,seededRandom:Ff,degToRad:Of,radToDeg:Bf,isPowerOfTwo:Gf,ceilPowerOfTwo:zf,floorPowerOfTwo:Hf,setQuaternionFromProperEuler:Vf,normalize:Tt,denormalize:Li};class pe{constructor(e=0,t=0){pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ur{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3];const f=s[a+0],p=s[a+1],g=s[a+2],v=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(h!==v||c!==f||l!==p||u!==g){let m=1-o;const d=c*f+l*p+u*g+h*v,E=d>=0?1:-1,S=1-d*d;if(S>Number.EPSILON){const x=Math.sqrt(S),A=Math.atan2(x,d*E);m=Math.sin(m*A)/x,o=Math.sin(o*A)/x}const _=o*E;if(c=c*m+f*_,l=l*m+p*_,u=u*m+g*_,h=h*m+v*_,m===1-o){const x=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=x,l*=x,u*=x,h*=x}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[a],f=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+u*h+c*p-l*f,e[t+1]=c*g+u*f+l*h-o*p,e[t+2]=l*g+u*p+o*f-c*h,e[t+3]=u*g-o*h-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),h=o(s/2),f=c(i/2),p=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"YZX":this._x=f*u*h+l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h-f*p*g;break;case"XZY":this._x=f*u*h-l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=i+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(u-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,i=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+c*l+a*h-o*u,this.y=i+c*u+o*l-s*h,this.z=r+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ta.copy(this).projectOnVector(e),this.sub(ta)}reflect(e){return this.sub(ta.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ta=new K,Gc=new Ur;class Xe{constructor(e,t,i,r,s,a,o,c,l){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],p=i[5],g=i[8],v=r[0],m=r[3],d=r[6],E=r[1],S=r[4],_=r[7],x=r[2],A=r[5],T=r[8];return s[0]=a*v+o*E+c*x,s[3]=a*m+o*S+c*A,s[6]=a*d+o*_+c*T,s[1]=l*v+u*E+h*x,s[4]=l*m+u*S+h*A,s[7]=l*d+u*_+h*T,s[2]=f*v+p*E+g*x,s[5]=f*m+p*S+g*A,s[8]=f*d+p*_+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,f=o*c-u*s,p=l*s-a*c,g=t*h+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(r*l-u*i)*v,e[2]=(o*i-r*a)*v,e[3]=f*v,e[4]=(u*t-r*c)*v,e[5]=(r*s-o*t)*v,e[6]=p*v,e[7]=(i*c-l*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(na.makeScale(e,t)),this}rotate(e){return this.premultiply(na.makeRotation(-e)),this}translate(e,t){return this.premultiply(na.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const na=new Xe;function Nu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Us(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function kf(){const n=Us("canvas");return n.style.display="block",n}const zc={};function Tr(n){n in zc||(zc[n]=!0,console.warn(n))}function Wf(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Hc=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vc=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xf(){const n={enabled:!0,workingColorSpace:Xi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===nt&&(r.r=Rn(r.r),r.g=Rn(r.g),r.b=Rn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(r.r=Gi(r.r),r.g=Gi(r.g),r.b=Gi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Nn?Ds:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Tr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Tr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Xi]:{primaries:e,whitePoint:i,transfer:Ds,toXYZ:Hc,fromXYZ:Vc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:e,whitePoint:i,transfer:nt,toXYZ:Hc,fromXYZ:Vc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}}),n}const et=Xf();function Rn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Gi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let vi;class qf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{vi===void 0&&(vi=Us("canvas")),vi.width=e.width,vi.height=e.height;const r=vi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=vi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Us("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Rn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Rn(t[i]/255)*255):t[i]=Rn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Yf=0;class uc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=fi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ia(r[a].image)):s.push(ia(r[a]))}else s=ia(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ia(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?qf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kf=0;const ra=new K;class Dt extends $i{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,i=ii,r=ii,s=un,a=ri,o=tn,c=dn,l=Dt.DEFAULT_ANISOTROPY,u=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=fi(),this.name="",this.source=new uc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ra).x}get height(){return this.source.getSize(ra).y}get depth(){return this.source.getSize(ra).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Eu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case io:e.x=e.x-Math.floor(e.x);break;case ii:e.x=e.x<0?0:1;break;case ro:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case io:e.y=e.y-Math.floor(e.y);break;case ii:e.y=e.y<0?0:1;break;case ro:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=Eu;Dt.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,i=0,r=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],p=c[5],g=c[9],v=c[2],m=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,_=(p+1)/2,x=(d+1)/2,A=(u+f)/4,T=(h+v)/4,L=(g+m)/4;return S>_&&S>x?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=A/i,s=T/i):_>x?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=A/r,s=L/r):x<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(x),i=T/s,r=L/s),this.set(i,r,s,t),this}let E=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(h-v)/E,this.z=(f-u)/E,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zf extends $i{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Dt(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new uc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends Zf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Uu extends Dt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $f extends Dt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fr{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Zt):Zt.fromBufferAttribute(s,a),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vr.copy(i.boundingBox)),Vr.applyMatrix4(e.matrixWorld),this.union(Vr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(er),kr.subVectors(this.max,er),_i.subVectors(e.a,er),Si.subVectors(e.b,er),xi.subVectors(e.c,er),wn.subVectors(Si,_i),Cn.subVectors(xi,Si),Hn.subVectors(_i,xi);let t=[0,-wn.z,wn.y,0,-Cn.z,Cn.y,0,-Hn.z,Hn.y,wn.z,0,-wn.x,Cn.z,0,-Cn.x,Hn.z,0,-Hn.x,-wn.y,wn.x,0,-Cn.y,Cn.x,0,-Hn.y,Hn.x,0];return!sa(t,_i,Si,xi,kr)||(t=[1,0,0,0,1,0,0,0,1],!sa(t,_i,Si,xi,kr))?!1:(Wr.crossVectors(wn,Cn),t=[Wr.x,Wr.y,Wr.z],sa(t,_i,Si,xi,kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const vn=[new K,new K,new K,new K,new K,new K,new K,new K],Zt=new K,Vr=new Fr,_i=new K,Si=new K,xi=new K,wn=new K,Cn=new K,Hn=new K,er=new K,kr=new K,Wr=new K,Vn=new K;function sa(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Vn.fromArray(n,s);const o=r.x*Math.abs(Vn.x)+r.y*Math.abs(Vn.y)+r.z*Math.abs(Vn.z),c=e.dot(Vn),l=t.dot(Vn),u=i.dot(Vn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Jf=new Fr,tr=new K,aa=new K;class Zs{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Jf.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;tr.subVectors(e,this.center);const t=tr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(tr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(aa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(tr.copy(e.center).add(aa)),this.expandByPoint(tr.copy(e.center).sub(aa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const _n=new K,oa=new K,Xr=new K,Pn=new K,ca=new K,qr=new K,la=new K;class hc{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_n.copy(this.origin).addScaledVector(this.direction,t),_n.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){oa.copy(e).add(t).multiplyScalar(.5),Xr.copy(t).sub(e).normalize(),Pn.copy(this.origin).sub(oa);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Xr),o=Pn.dot(this.direction),c=-Pn.dot(Xr),l=Pn.lengthSq(),u=Math.abs(1-a*a);let h,f,p,g;if(u>0)if(h=a*c-o,f=a*o-c,g=s*u,h>=0)if(f>=-g)if(f<=g){const v=1/u;h*=v,f*=v,p=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+l);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(oa).addScaledVector(Xr,f),p}intersectSphere(e,t){_n.subVectors(e.center,this.origin);const i=_n.dot(this.direction),r=_n.dot(_n)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,_n)!==null}intersectTriangle(e,t,i,r,s){ca.subVectors(t,e),qr.subVectors(i,e),la.crossVectors(ca,qr);let a=this.direction.dot(la),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pn.subVectors(this.origin,e);const c=o*this.direction.dot(qr.crossVectors(Pn,qr));if(c<0)return null;const l=o*this.direction.dot(ca.cross(Pn));if(l<0||c+l>a)return null;const u=-o*Pn.dot(la);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,i,r,s,a,o,c,l,u,h,f,p,g,v,m){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,u,h,f,p,g,v,m)}set(e,t,i,r,s,a,o,c,l,u,h,f,p,g,v,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/yi.setFromMatrixColumn(e,0).length(),s=1/yi.setFromMatrixColumn(e,1).length(),a=1/yi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,p=a*h,g=o*u,v=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+g*l,t[5]=f-v*l,t[9]=-o*c,t[2]=v-f*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*u,p=c*h,g=l*u,v=l*h;t[0]=f+v*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=v+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*u,p=c*h,g=l*u,v=l*h;t[0]=f-v*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=v-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*u,p=a*h,g=o*u,v=o*h;t[0]=c*u,t[4]=g*l-p,t[8]=f*l+v,t[1]=c*h,t[5]=v*l+f,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,p=a*l,g=o*c,v=o*l;t[0]=c*u,t[4]=v-f*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*h+g,t[10]=f-v*h}else if(e.order==="XZY"){const f=a*c,p=a*l,g=o*c,v=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+v,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jf,e,Qf)}lookAt(e,t,i){const r=this.elements;return Bt.subVectors(e,t),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),In.crossVectors(i,Bt),In.lengthSq()===0&&(Math.abs(i.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),In.crossVectors(i,Bt)),In.normalize(),Yr.crossVectors(Bt,In),r[0]=In.x,r[4]=Yr.x,r[8]=Bt.x,r[1]=In.y,r[5]=Yr.y,r[9]=Bt.y,r[2]=In.z,r[6]=Yr.z,r[10]=Bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],p=i[13],g=i[2],v=i[6],m=i[10],d=i[14],E=i[3],S=i[7],_=i[11],x=i[15],A=r[0],T=r[4],L=r[8],y=r[12],M=r[1],I=r[5],z=r[9],W=r[13],Z=r[2],U=r[6],q=r[10],te=r[14],O=r[3],fe=r[7],ge=r[11],Ee=r[15];return s[0]=a*A+o*M+c*Z+l*O,s[4]=a*T+o*I+c*U+l*fe,s[8]=a*L+o*z+c*q+l*ge,s[12]=a*y+o*W+c*te+l*Ee,s[1]=u*A+h*M+f*Z+p*O,s[5]=u*T+h*I+f*U+p*fe,s[9]=u*L+h*z+f*q+p*ge,s[13]=u*y+h*W+f*te+p*Ee,s[2]=g*A+v*M+m*Z+d*O,s[6]=g*T+v*I+m*U+d*fe,s[10]=g*L+v*z+m*q+d*ge,s[14]=g*y+v*W+m*te+d*Ee,s[3]=E*A+S*M+_*Z+x*O,s[7]=E*T+S*I+_*U+x*fe,s[11]=E*L+S*z+_*q+x*ge,s[15]=E*y+S*W+_*te+x*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],v=e[7],m=e[11],d=e[15];return g*(+s*c*h-r*l*h-s*o*f+i*l*f+r*o*p-i*c*p)+v*(+t*c*p-t*l*f+s*a*f-r*a*p+r*l*u-s*c*u)+m*(+t*l*h-t*o*p-s*a*h+i*a*p+s*o*u-i*l*u)+d*(-r*o*u-t*c*h+t*o*f+r*a*h-i*a*f+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],v=e[13],m=e[14],d=e[15],E=h*m*l-v*f*l+v*c*p-o*m*p-h*c*d+o*f*d,S=g*f*l-u*m*l-g*c*p+a*m*p+u*c*d-a*f*d,_=u*v*l-g*h*l+g*o*p-a*v*p-u*o*d+a*h*d,x=g*h*c-u*v*c-g*o*f+a*v*f+u*o*m-a*h*m,A=t*E+i*S+r*_+s*x;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=E*T,e[1]=(v*f*s-h*m*s-v*r*p+i*m*p+h*r*d-i*f*d)*T,e[2]=(o*m*s-v*c*s+v*r*l-i*m*l-o*r*d+i*c*d)*T,e[3]=(h*c*s-o*f*s-h*r*l+i*f*l+o*r*p-i*c*p)*T,e[4]=S*T,e[5]=(u*m*s-g*f*s+g*r*p-t*m*p-u*r*d+t*f*d)*T,e[6]=(g*c*s-a*m*s-g*r*l+t*m*l+a*r*d-t*c*d)*T,e[7]=(a*f*s-u*c*s+u*r*l-t*f*l-a*r*p+t*c*p)*T,e[8]=_*T,e[9]=(g*h*s-u*v*s-g*i*p+t*v*p+u*i*d-t*h*d)*T,e[10]=(a*v*s-g*o*s+g*i*l-t*v*l-a*i*d+t*o*d)*T,e[11]=(u*o*s-a*h*s-u*i*l+t*h*l+a*i*p-t*o*p)*T,e[12]=x*T,e[13]=(u*v*r-g*h*r+g*i*f-t*v*f-u*i*m+t*h*m)*T,e[14]=(g*o*r-a*v*r-g*i*c+t*v*c+a*i*m-t*o*m)*T,e[15]=(a*h*r-u*o*r+u*i*c-t*h*c-a*i*f+t*o*f)*T,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,f=s*l,p=s*u,g=s*h,v=a*u,m=a*h,d=o*h,E=c*l,S=c*u,_=c*h,x=i.x,A=i.y,T=i.z;return r[0]=(1-(v+d))*x,r[1]=(p+_)*x,r[2]=(g-S)*x,r[3]=0,r[4]=(p-_)*A,r[5]=(1-(f+d))*A,r[6]=(m+E)*A,r[7]=0,r[8]=(g+S)*T,r[9]=(m-E)*T,r[10]=(1-(f+v))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=yi.set(r[0],r[1],r[2]).length();const a=yi.set(r[4],r[5],r[6]).length(),o=yi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],$t.copy(this);const l=1/s,u=1/a,h=1/o;return $t.elements[0]*=l,$t.elements[1]*=l,$t.elements[2]*=l,$t.elements[4]*=u,$t.elements[5]*=u,$t.elements[6]*=u,$t.elements[8]*=h,$t.elements[9]*=h,$t.elements[10]*=h,t.setFromRotationMatrix($t),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=hn,c=!1){const l=this.elements,u=2*s/(t-e),h=2*s/(i-r),f=(t+e)/(t-e),p=(i+r)/(i-r);let g,v;if(c)g=s/(a-s),v=a*s/(a-s);else if(o===hn)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Ns)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=hn,c=!1){const l=this.elements,u=2/(t-e),h=2/(i-r),f=-(t+e)/(t-e),p=-(i+r)/(i-r);let g,v;if(c)g=1/(a-s),v=a/(a-s);else if(o===hn)g=-2/(a-s),v=-(a+s)/(a-s);else if(o===Ns)g=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const yi=new K,$t=new ct,jf=new K(0,0,0),Qf=new K(1,1,1),In=new K,Yr=new K,Bt=new K,kc=new ct,Wc=new Ur;class pn{constructor(e=0,t=0,i=0,r=pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return kc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wc.setFromEuler(this),this.setFromQuaternion(Wc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pn.DEFAULT_ORDER="XYZ";class fc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ed=0;const Xc=new K,Mi=new Ur,Sn=new ct,Kr=new K,nr=new K,td=new K,nd=new Ur,qc=new K(1,0,0),Yc=new K(0,1,0),Kc=new K(0,0,1),Zc={type:"added"},id={type:"removed"},Ei={type:"childadded",child:null},ua={type:"childremoved",child:null};class Mt extends $i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new K,t=new pn,i=new Ur,r=new K(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new Xe}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.multiply(Mi),this}rotateOnWorldAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.premultiply(Mi),this}rotateX(e){return this.rotateOnAxis(qc,e)}rotateY(e){return this.rotateOnAxis(Yc,e)}rotateZ(e){return this.rotateOnAxis(Kc,e)}translateOnAxis(e,t){return Xc.copy(e).applyQuaternion(this.quaternion),this.position.add(Xc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qc,e)}translateY(e){return this.translateOnAxis(Yc,e)}translateZ(e){return this.translateOnAxis(Kc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Kr.copy(e):Kr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(nr,Kr,this.up):Sn.lookAt(Kr,nr,this.up),this.quaternion.setFromRotationMatrix(Sn),r&&(Sn.extractRotation(r.matrixWorld),Mi.setFromRotationMatrix(Sn),this.quaternion.premultiply(Mi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zc),Ei.child=e,this.dispatchEvent(Ei),Ei.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(id),ua.child=e,this.dispatchEvent(ua),ua.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zc),Ei.child=e,this.dispatchEvent(Ei),Ei.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,e,td),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,nd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Mt.DEFAULT_UP=new K(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jt=new K,xn=new K,ha=new K,yn=new K,bi=new K,Ai=new K,$c=new K,fa=new K,da=new K,pa=new K,ma=new dt,ga=new dt,va=new dt;class en{constructor(e=new K,t=new K,i=new K){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Jt.subVectors(e,t),r.cross(Jt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Jt.subVectors(r,t),xn.subVectors(i,t),ha.subVectors(e,t);const a=Jt.dot(Jt),o=Jt.dot(xn),c=Jt.dot(ha),l=xn.dot(xn),u=xn.dot(ha),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(l*c-o*u)*f,g=(a*u-o*c)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,yn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,yn.x),c.addScaledVector(a,yn.y),c.addScaledVector(o,yn.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return ma.setScalar(0),ga.setScalar(0),va.setScalar(0),ma.fromBufferAttribute(e,t),ga.fromBufferAttribute(e,i),va.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ma,s.x),a.addScaledVector(ga,s.y),a.addScaledVector(va,s.z),a}static isFrontFacing(e,t,i,r){return Jt.subVectors(i,t),xn.subVectors(e,t),Jt.cross(xn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jt.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),Jt.cross(xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return en.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;bi.subVectors(r,i),Ai.subVectors(s,i),fa.subVectors(e,i);const c=bi.dot(fa),l=Ai.dot(fa);if(c<=0&&l<=0)return t.copy(i);da.subVectors(e,r);const u=bi.dot(da),h=Ai.dot(da);if(u>=0&&h<=u)return t.copy(r);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(bi,a);pa.subVectors(e,s);const p=bi.dot(pa),g=Ai.dot(pa);if(g>=0&&p<=g)return t.copy(s);const v=p*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(Ai,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return $c.subVectors(s,r),o=(h-u)/(h-u+(p-g)),t.copy(r).addScaledVector($c,o);const d=1/(m+v+f);return a=v*d,o=f*d,t.copy(i).addScaledVector(bi,a).addScaledVector(Ai,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Fu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},Zr={h:0,s:0,l:0};function _a(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=et.workingColorSpace){if(e=lc(e,1),t=Ye(t,0,1),i=Ye(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=_a(a,s,e+1/3),this.g=_a(a,s,e),this.b=_a(a,s,e-1/3)}return et.colorSpaceToWorking(this,r),this}setStyle(e,t=Pt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){const i=Fu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rn(e.r),this.g=Rn(e.g),this.b=Rn(e.b),this}copyLinearToSRGB(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return et.workingToColorSpace(bt.copy(this),e),Math.round(Ye(bt.r*255,0,255))*65536+Math.round(Ye(bt.g*255,0,255))*256+Math.round(Ye(bt.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(bt.copy(this),t);const i=bt.r,r=bt.g,s=bt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=Pt){et.workingToColorSpace(bt.copy(this),e);const t=bt.r,i=bt.g,r=bt.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ln),this.setHSL(Ln.h+e,Ln.s+t,Ln.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ln),e.getHSL(Zr);const i=vr(Ln.h,Zr.h,t),r=vr(Ln.s,Zr.s,t),s=vr(Ln.l,Zr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new Ze;Ze.NAMES=Fu;let rd=0;class Ji extends $i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=fi(),this.name="",this.type="Material",this.blending=Bi,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qa,this.blendDst=Ya,this.blendEquation=Qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mi,this.stencilZFail=mi,this.stencilZPass=mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Bi&&(i.blending=this.blending),this.side!==On&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qa&&(i.blendSrc=this.blendSrc),this.blendDst!==Ya&&(i.blendDst=this.blendDst),this.blendEquation!==Qn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Vi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==mi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==mi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ei extends Ji{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=Mu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new K,$r=new pe;let sd=0;class fn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Fc,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)$r.fromBufferAttribute(this,t),$r.applyMatrix3(e),this.setXY(t,$r.x,$r.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Li(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Tt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Li(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Li(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Li(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),r=Tt(r,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fc&&(e.usage=this.usage),e}}class Ou extends fn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Bu extends fn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class vt extends fn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ad=0;const Wt=new ct,Sa=new Mt,Ti=new K,Gt=new Fr,ir=new Fr,xt=new K;class Ut extends $i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nu(e)?Bu:Ou)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wt.makeRotationFromQuaternion(e),this.applyMatrix4(Wt),this}rotateX(e){return Wt.makeRotationX(e),this.applyMatrix4(Wt),this}rotateY(e){return Wt.makeRotationY(e),this.applyMatrix4(Wt),this}rotateZ(e){return Wt.makeRotationZ(e),this.applyMatrix4(Wt),this}translate(e,t,i){return Wt.makeTranslation(e,t,i),this.applyMatrix4(Wt),this}scale(e,t,i){return Wt.makeScale(e,t,i),this.applyMatrix4(Wt),this}lookAt(e){return Sa.lookAt(e),Sa.updateMatrix(),this.applyMatrix4(Sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new vt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Gt.setFromBufferAttribute(s),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const i=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ir.setFromBufferAttribute(o),this.morphTargetsRelative?(xt.addVectors(Gt.min,ir.min),Gt.expandByPoint(xt),xt.addVectors(Gt.max,ir.max),Gt.expandByPoint(xt)):(Gt.expandByPoint(ir.min),Gt.expandByPoint(ir.max))}Gt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)xt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(xt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)xt.fromBufferAttribute(o,l),c&&(Ti.fromBufferAttribute(e,l),xt.add(Ti)),r=Math.max(r,i.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let L=0;L<i.count;L++)o[L]=new K,c[L]=new K;const l=new K,u=new K,h=new K,f=new pe,p=new pe,g=new pe,v=new K,m=new K;function d(L,y,M){l.fromBufferAttribute(i,L),u.fromBufferAttribute(i,y),h.fromBufferAttribute(i,M),f.fromBufferAttribute(s,L),p.fromBufferAttribute(s,y),g.fromBufferAttribute(s,M),u.sub(l),h.sub(l),p.sub(f),g.sub(f);const I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(I),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(I),o[L].add(v),o[y].add(v),o[M].add(v),c[L].add(m),c[y].add(m),c[M].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let L=0,y=E.length;L<y;++L){const M=E[L],I=M.start,z=M.count;for(let W=I,Z=I+z;W<Z;W+=3)d(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const S=new K,_=new K,x=new K,A=new K;function T(L){x.fromBufferAttribute(r,L),A.copy(x);const y=o[L];S.copy(y),S.sub(x.multiplyScalar(x.dot(y))).normalize(),_.crossVectors(A,y);const I=_.dot(c[L])<0?-1:1;a.setXYZW(L,S.x,S.y,S.z,I)}for(let L=0,y=E.length;L<y;++L){const M=E[L],I=M.start,z=M.count;for(let W=I,Z=I+z;W<Z;W+=3)T(e.getX(W+0)),T(e.getX(W+1)),T(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new K,s=new K,a=new K,o=new K,c=new K,l=new K,u=new K,h=new K;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u);let p=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?p=c[v]*o.data.stride+o.offset:p=c[v]*u;for(let d=0;d<u;d++)f[g++]=l[p++]}return new fn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ut,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const f=l[u],p=e(f,i);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jc=new ct,kn=new hc,Jr=new Zs,jc=new K,jr=new K,Qr=new K,es=new K,xa=new K,ts=new K,Qc=new K,ns=new K;class It extends Mt{constructor(e=new Ut,t=new ei){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ts.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&(xa.fromBufferAttribute(h,e),a?ts.addScaledVector(xa,u):ts.addScaledVector(xa.sub(t),u))}t.add(ts)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Jr.copy(i.boundingSphere),Jr.applyMatrix4(s),kn.copy(e.ray).recast(e.near),!(Jr.containsPoint(kn.origin)===!1&&(kn.intersectSphere(Jr,jc)===null||kn.origin.distanceToSquared(jc)>(e.far-e.near)**2))&&(Jc.copy(s).invert(),kn.copy(e.ray).applyMatrix4(Jc),!(i.boundingBox!==null&&kn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,kn)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=a[m.materialIndex],E=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=E,x=S;_<x;_+=3){const A=o.getX(_),T=o.getX(_+1),L=o.getX(_+2);r=is(this,d,e,i,l,u,h,A,T,L),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const E=o.getX(m),S=o.getX(m+1),_=o.getX(m+2);r=is(this,a,e,i,l,u,h,E,S,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=a[m.materialIndex],E=Math.max(m.start,p.start),S=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let _=E,x=S;_<x;_+=3){const A=_,T=_+1,L=_+2;r=is(this,d,e,i,l,u,h,A,T,L),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const E=m,S=m+1,_=m+2;r=is(this,a,e,i,l,u,h,E,S,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function od(n,e,t,i,r,s,a,o){let c;if(e.side===Lt?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===On,o),c===null)return null;ns.copy(o),ns.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(ns);return l<t.near||l>t.far?null:{distance:l,point:ns.clone(),object:n}}function is(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,jr),n.getVertexPosition(c,Qr),n.getVertexPosition(l,es);const u=od(n,e,t,i,jr,Qr,es,Qc);if(u){const h=new K;en.getBarycoord(Qc,jr,Qr,es,h),r&&(u.uv=en.getInterpolatedAttribute(r,o,c,l,h,new pe)),s&&(u.uv1=en.getInterpolatedAttribute(s,o,c,l,h,new pe)),a&&(u.normal=en.getInterpolatedAttribute(a,o,c,l,h,new K),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new K,materialIndex:0};en.getNormal(jr,Qr,es,f.normal),u.face=f,u.barycoord=h}return u}class Or extends Ut{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new vt(l,3)),this.setAttribute("normal",new vt(u,3)),this.setAttribute("uv",new vt(h,2));function g(v,m,d,E,S,_,x,A,T,L,y){const M=_/T,I=x/L,z=_/2,W=x/2,Z=A/2,U=T+1,q=L+1;let te=0,O=0;const fe=new K;for(let ge=0;ge<q;ge++){const Ee=ge*I-W;for(let Ne=0;Ne<U;Ne++){const Fe=Ne*M-z;fe[v]=Fe*E,fe[m]=Ee*S,fe[d]=Z,l.push(fe.x,fe.y,fe.z),fe[v]=0,fe[m]=0,fe[d]=A>0?1:-1,u.push(fe.x,fe.y,fe.z),h.push(Ne/T),h.push(1-ge/L),te+=1}}for(let ge=0;ge<L;ge++)for(let Ee=0;Ee<T;Ee++){const Ne=f+Ee+U*ge,Fe=f+Ee+U*(ge+1),Y=f+(Ee+1)+U*(ge+1),G=f+(Ee+1)+U*ge;c.push(Ne,Fe,G),c.push(Fe,Y,G),O+=6}o.addGroup(p,O,y),p+=O,f+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Or(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Rt(n){const e={};for(let t=0;t<n.length;t++){const i=qi(n[t]);for(const r in i)e[r]=i[r]}return e}function cd(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Gu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const ld={clone:qi,merge:Rt};var ud=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bn extends Ji{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ud,this.fragmentShader=hd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qi(e.uniforms),this.uniformsGroups=cd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class zu extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Dn=new K,el=new pe,tl=new pe;class Qt extends zu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ar*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ar*2*Math.atan(Math.tan(gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Dn.x,Dn.y).multiplyScalar(-e/Dn.z),Dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Dn.x,Dn.y).multiplyScalar(-e/Dn.z)}getViewSize(e,t){return this.getViewBounds(e,el,tl),t.subVectors(tl,el)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(gr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ri=-90,wi=1;class fd extends Mt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Qt(Ri,wi,e,t);r.layers=this.layers,this.add(r);const s=new Qt(Ri,wi,e,t);s.layers=this.layers,this.add(s);const a=new Qt(Ri,wi,e,t);a.layers=this.layers,this.add(a);const o=new Qt(Ri,wi,e,t);o.layers=this.layers,this.add(o);const c=new Qt(Ri,wi,e,t);c.layers=this.layers,this.add(c);const l=new Qt(Ri,wi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===hn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ns)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Hu extends Dt{constructor(e=[],t=ki,i,r,s,a,o,c,l,u){super(e,t,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dd extends ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Hu(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Or(5,5,5),s=new Bn({name:"CubemapFromEquirect",uniforms:qi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Lt,blending:Un});s.uniforms.tEquirect.value=t;const a=new It(r,s),o=t.minFilter;return t.minFilter===ri&&(t.minFilter=un),new fd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class si extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pd={type:"move"};class ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),d=this._getHandJoint(l,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pd)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new si;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class md extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ma=new K,gd=new K,vd=new Xe;class Zn{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ma.subVectors(i,t).cross(gd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ma),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||vd.getNormalMatrix(e),r=this.coplanarPoint(Ma).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wn=new Zs,_d=new pe(.5,.5),rs=new K;class dc{constructor(e=new Zn,t=new Zn,i=new Zn,r=new Zn,s=new Zn,a=new Zn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=hn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],h=s[5],f=s[6],p=s[7],g=s[8],v=s[9],m=s[10],d=s[11],E=s[12],S=s[13],_=s[14],x=s[15];if(r[0].setComponents(l-a,p-u,d-g,x-E).normalize(),r[1].setComponents(l+a,p+u,d+g,x+E).normalize(),r[2].setComponents(l+o,p+h,d+v,x+S).normalize(),r[3].setComponents(l-o,p-h,d-v,x-S).normalize(),i)r[4].setComponents(c,f,m,_).normalize(),r[5].setComponents(l-c,p-f,d-m,x-_).normalize();else if(r[4].setComponents(l-c,p-f,d-m,x-_).normalize(),t===hn)r[5].setComponents(l+c,p+f,d+m,x+_).normalize();else if(t===Ns)r[5].setComponents(c,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wn)}intersectsSprite(e){Wn.center.set(0,0,0);const t=_d.distanceTo(e.center);return Wn.radius=.7071067811865476+t,Wn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(rs.x=r.normal.x>0?e.max.x:e.min.x,rs.y=r.normal.y>0?e.max.y:e.min.y,rs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(rs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Di extends Ji{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Fs=new K,Os=new K,nl=new ct,rr=new hc,ss=new Zs,Ea=new K,il=new K;class Vu extends Mt{constructor(e=new Ut,t=new Di){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Fs.fromBufferAttribute(t,r-1),Os.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Fs.distanceTo(Os);e.setAttribute("lineDistance",new vt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ss.copy(i.boundingSphere),ss.applyMatrix4(r),ss.radius+=s,e.ray.intersectsSphere(ss)===!1)return;nl.copy(r).invert(),rr.copy(e.ray).applyMatrix4(nl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=l){const d=u.getX(v),E=u.getX(v+1),S=as(this,e,rr,c,d,E,v);S&&t.push(S)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(p),d=as(this,e,rr,c,v,m,g-1);d&&t.push(d)}}else{const p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=l){const d=as(this,e,rr,c,v,v+1,v);d&&t.push(d)}if(this.isLineLoop){const v=as(this,e,rr,c,g-1,p,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function as(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(Fs.fromBufferAttribute(o,r),Os.fromBufferAttribute(o,s),t.distanceSqToSegment(Fs,Os,Ea,il)>i)return;Ea.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Ea);if(!(l<e.near||l>e.far))return{distance:l,point:il.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}class ku extends Dt{constructor(e,t,i=oi,r,s,a,o=rn,c=rn,l,u=Er,h=1){if(u!==Er&&u!==br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new uc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Wu extends Dt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Bs extends Ut{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],c=[],l=new K,u=new pe;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const p=i+h/t*r;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new vt(a,3)),this.setAttribute("normal",new vt(o,3)),this.setAttribute("uv",new vt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bs(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class gn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let a;t?a=t:a=e*i[s-1];let o=0,c=s-1,l;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),l=i[r]-a,l<0)o=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===a)return r/(s-1);const u=i[r],f=i[r+1]-u,p=(a-u)/f;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),c=t||(a.isVector2?new pe:new K);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new K,r=[],s=[],a=[],o=new K,c=new ct;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new K)}s[0]=new K,a[0]=new K;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),f<=l&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ye(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(o,g))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(Ye(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],p*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class pc extends gn{constructor(e=0,t=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new pe){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*u-p*h+this.aX,l=f*h+p*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Sd extends pc{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function mc(){let n=0,e=0,t=0,i=0;function r(s,a,o,c){n=s,e=o,t=-3*s+3*a-2*o-c,i=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){r(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,u,h){let f=(a-s)/l-(o-s)/(l+u)+(o-a)/u,p=(o-a)/u-(c-a)/(u+h)+(c-o)/h;f*=u,p*=u,r(a,o,f,p)},calc:function(s){const a=s*s,o=a*s;return n+e*s+t*a+i*o}}}const os=new K,ba=new mc,Aa=new mc,Ta=new mc;class xd extends gn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new K){const i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,u;this.closed||o>0?l=r[(o-1)%s]:(os.subVectors(r[0],r[1]).add(r[0]),l=os);const h=r[o%s],f=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(os.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=os),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),p),v=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),ba.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,g,v,m),Aa.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,g,v,m),Ta.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(ba.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),Aa.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),Ta.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return i.set(ba.calc(c),Aa.calc(c),Ta.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new K().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function rl(n,e,t,i,r){const s=(i-e)*.5,a=(r-t)*.5,o=n*n,c=n*o;return(2*t-2*i+s+a)*c+(-3*t+3*i-2*s-a)*o+s*n+t}function yd(n,e){const t=1-n;return t*t*e}function Md(n,e){return 2*(1-n)*n*e}function Ed(n,e){return n*n*e}function _r(n,e,t,i){return yd(n,e)+Md(n,t)+Ed(n,i)}function bd(n,e){const t=1-n;return t*t*t*e}function Ad(n,e){const t=1-n;return 3*t*t*n*e}function Td(n,e){return 3*(1-n)*n*n*e}function Rd(n,e){return n*n*n*e}function Sr(n,e,t,i,r){return bd(n,e)+Ad(n,t)+Td(n,i)+Rd(n,r)}class Xu extends gn{constructor(e=new pe,t=new pe,i=new pe,r=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new pe){const i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Sr(e,r.x,s.x,a.x,o.x),Sr(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class wd extends gn{constructor(e=new K,t=new K,i=new K,r=new K){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new K){const i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Sr(e,r.x,s.x,a.x,o.x),Sr(e,r.y,s.y,a.y,o.y),Sr(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class qu extends gn{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cd extends gn{constructor(e=new K,t=new K){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new K){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yu extends gn{constructor(e=new pe,t=new pe,i=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new pe){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(_r(e,r.x,s.x,a.x),_r(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pd extends gn{constructor(e=new K,t=new K,i=new K){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new K){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(_r(e,r.x,s.x,a.x),_r(e,r.y,s.y,a.y),_r(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ku extends gn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){const i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],u=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return i.set(rl(o,c.x,l.x,u.x,h.x),rl(o,c.y,l.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new pe().fromArray(r))}return this}}var No=Object.freeze({__proto__:null,ArcCurve:Sd,CatmullRomCurve3:xd,CubicBezierCurve:Xu,CubicBezierCurve3:wd,EllipseCurve:pc,LineCurve:qu,LineCurve3:Cd,QuadraticBezierCurve:Yu,QuadraticBezierCurve3:Pd,SplineCurve:Ku});class Id extends gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new No[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const a=r[s]-i,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new No[r.type]().fromJSON(r))}return this}}class zi extends Id{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new qu(this.currentPoint.clone(),new pe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new Yu(this.currentPoint.clone(),new pe(e,t),new pe(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,a){const o=new Xu(this.currentPoint.clone(),new pe(e,t),new pe(i,r),new pe(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Ku(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,i,r,s,a),this}absarc(e,t,i,r,s,a){return this.absellipse(e,t,i,i,r,s,a),this}ellipse(e,t,i,r,s,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,r,s,a,o,c),this}absellipse(e,t,i,r,s,a,o,c){const l=new pc(e,t,i,r,s,a,o,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Hi extends zi{constructor(e){super(e),this.uuid=fi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new zi().fromJSON(r))}return this}}function Ld(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=Zu(n,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,c,l;if(i&&(s=Od(n,e,s,t)),n.length>80*t){o=1/0,c=1/0;let u=-1/0,h=-1/0;for(let f=t;f<r;f+=t){const p=n[f],g=n[f+1];p<o&&(o=p),g<c&&(c=g),p>u&&(u=p),g>h&&(h=g)}l=Math.max(u-o,h-c),l=l!==0?32767/l:0}return Rr(s,a,t,o,c,l,0),a}function Zu(n,e,t,i,r){let s;if(r===Kd(n,e,t,i)>0)for(let a=e;a<t;a+=i)s=sl(a/i|0,n[a],n[a+1],s);else for(let a=t-i;a>=e;a-=i)s=sl(a/i|0,n[a],n[a+1],s);return s&&Yi(s,s.next)&&(Cr(s),s=s.next),s}function li(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Yi(t,t.next)||ht(t.prev,t,t.next)===0)){if(Cr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Rr(n,e,t,i,r,s,a){if(!n)return;!a&&s&&Vd(n,i,r,s);let o=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(s?Nd(n,i,r,s):Dd(n)){e.push(c.i,n.i,l.i),Cr(n),n=l.next,o=l.next;continue}if(n=l,n===o){a?a===1?(n=Ud(li(n),e),Rr(n,e,t,i,r,s,2)):a===2&&Fd(n,e,t,i,r,s):Rr(li(n),e,t,i,r,s,1);break}}}function Dd(n){const e=n.prev,t=n,i=n.next;if(ht(e,t,i)>=0)return!1;const r=e.x,s=t.x,a=i.x,o=e.y,c=t.y,l=i.y,u=Math.min(r,s,a),h=Math.min(o,c,l),f=Math.max(r,s,a),p=Math.max(o,c,l);let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=p&&lr(r,o,s,c,a,l,g.x,g.y)&&ht(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Nd(n,e,t,i){const r=n.prev,s=n,a=n.next;if(ht(r,s,a)>=0)return!1;const o=r.x,c=s.x,l=a.x,u=r.y,h=s.y,f=a.y,p=Math.min(o,c,l),g=Math.min(u,h,f),v=Math.max(o,c,l),m=Math.max(u,h,f),d=Uo(p,g,e,t,i),E=Uo(v,m,e,t,i);let S=n.prevZ,_=n.nextZ;for(;S&&S.z>=d&&_&&_.z<=E;){if(S.x>=p&&S.x<=v&&S.y>=g&&S.y<=m&&S!==r&&S!==a&&lr(o,u,c,h,l,f,S.x,S.y)&&ht(S.prev,S,S.next)>=0||(S=S.prevZ,_.x>=p&&_.x<=v&&_.y>=g&&_.y<=m&&_!==r&&_!==a&&lr(o,u,c,h,l,f,_.x,_.y)&&ht(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;S&&S.z>=d;){if(S.x>=p&&S.x<=v&&S.y>=g&&S.y<=m&&S!==r&&S!==a&&lr(o,u,c,h,l,f,S.x,S.y)&&ht(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;_&&_.z<=E;){if(_.x>=p&&_.x<=v&&_.y>=g&&_.y<=m&&_!==r&&_!==a&&lr(o,u,c,h,l,f,_.x,_.y)&&ht(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Ud(n,e){let t=n;do{const i=t.prev,r=t.next.next;!Yi(i,r)&&Ju(i,t,t.next,r)&&wr(i,r)&&wr(r,i)&&(e.push(i.i,t.i,r.i),Cr(t),Cr(t.next),t=n=r),t=t.next}while(t!==n);return li(t)}function Fd(n,e,t,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Xd(a,o)){let c=ju(a,o);a=li(a,a.next),c=li(c,c.next),Rr(a,e,t,i,r,s,0),Rr(c,e,t,i,r,s,0);return}o=o.next}a=a.next}while(a!==n)}function Od(n,e,t,i){const r=[];for(let s=0,a=e.length;s<a;s++){const o=e[s]*i,c=s<a-1?e[s+1]*i:n.length,l=Zu(n,o,c,i,!1);l===l.next&&(l.steiner=!0),r.push(Wd(l))}r.sort(Bd);for(let s=0;s<r.length;s++)t=Gd(r[s],t);return t}function Bd(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function Gd(n,e){const t=zd(n,e);if(!t)return e;const i=ju(t,n);return li(i,i.next),li(t,t.next)}function zd(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,a;if(Yi(n,t))return t;do{if(Yi(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const h=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>s&&(s=h,a=t.x<t.next.x?t:t.next,h===i))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,c=a.x,l=a.y;let u=1/0;t=a;do{if(i>=t.x&&t.x>=c&&i!==t.x&&$u(r<l?i:s,r,c,l,r<l?s:i,r,t.x,t.y)){const h=Math.abs(r-t.y)/(i-t.x);wr(t,n)&&(h<u||h===u&&(t.x>a.x||t.x===a.x&&Hd(a,t)))&&(a=t,u=h)}t=t.next}while(t!==o);return a}function Hd(n,e){return ht(n.prev,n,e.prev)<0&&ht(e.next,n,n.next)<0}function Vd(n,e,t,i){let r=n;do r.z===0&&(r.z=Uo(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,kd(r)}function kd(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let a=i,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||i.z<=a.z)?(r=i,i=i.nextZ,o--):(r=a,a=a.nextZ,c--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=a}s.nextZ=null,t*=2}while(e>1);return n}function Uo(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Wd(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function $u(n,e,t,i,r,s,a,o){return(r-a)*(e-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(i-o)}function lr(n,e,t,i,r,s,a,o){return!(n===a&&e===o)&&$u(n,e,t,i,r,s,a,o)}function Xd(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!qd(n,e)&&(wr(n,e)&&wr(e,n)&&Yd(n,e)&&(ht(n.prev,n,e.prev)||ht(n,e.prev,e))||Yi(n,e)&&ht(n.prev,n,n.next)>0&&ht(e.prev,e,e.next)>0)}function ht(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Yi(n,e){return n.x===e.x&&n.y===e.y}function Ju(n,e,t,i){const r=ls(ht(n,e,t)),s=ls(ht(n,e,i)),a=ls(ht(t,i,n)),o=ls(ht(t,i,e));return!!(r!==s&&a!==o||r===0&&cs(n,t,e)||s===0&&cs(n,i,e)||a===0&&cs(t,n,i)||o===0&&cs(t,e,i))}function cs(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function ls(n){return n>0?1:n<0?-1:0}function qd(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Ju(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function wr(n,e){return ht(n.prev,n,n.next)<0?ht(n,e,n.next)>=0&&ht(n,n.prev,e)>=0:ht(n,e,n.prev)<0||ht(n,n.next,e)<0}function Yd(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function ju(n,e){const t=Fo(n.i,n.x,n.y),i=Fo(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function sl(n,e,t,i){const r=Fo(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Cr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Fo(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Kd(n,e,t,i){let r=0;for(let s=e,a=t-i;s<t;s+=i)r+=(n[a]-n[s])*(n[s+1]+n[a+1]),a=s;return r}class Zd{static triangulate(e,t,i=2){return Ld(e,t,i)}}class nn{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return nn.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];al(e),ol(i,e);let a=e.length;t.forEach(al);for(let c=0;c<t.length;c++)r.push(a),a+=t[c].length,ol(i,t[c]);const o=Zd.triangulate(i,r);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}}function al(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function ol(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class gc extends Ut{constructor(e=new Hi([new pe(.5,.5),new pe(-.5,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let o=0,c=e.length;o<c;o++){const l=e[o];a(l)}this.setAttribute("position",new vt(r,3)),this.setAttribute("uv",new vt(s,2)),this.computeVertexNormals();function a(o){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const d=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:$d;let S,_=!1,x,A,T,L;d&&(S=d.getSpacedPoints(u),_=!0,f=!1,x=d.computeFrenetFrames(u,!1),A=new K,T=new K,L=new K),f||(m=0,p=0,g=0,v=0);const y=o.extractPoints(l);let M=y.shape;const I=y.holes;if(!nn.isClockWise(M)){M=M.reverse();for(let H=0,k=I.length;H<k;H++){const Q=I[H];nn.isClockWise(Q)&&(I[H]=Q.reverse())}}function W(H){const Q=10000000000000001e-36;let $=H[0];for(let F=1;F<=H.length;F++){const P=F%H.length,ae=H[P],Ae=ae.x-$.x,Oe=ae.y-$.y,N=Ae*Ae+Oe*Oe,b=Math.max(Math.abs(ae.x),Math.abs(ae.y),Math.abs($.x),Math.abs($.y)),J=Q*b*b;if(N<=J){H.splice(P,1),F--;continue}$=ae}}W(M),I.forEach(W);const Z=I.length,U=M;for(let H=0;H<Z;H++){const k=I[H];M=M.concat(k)}function q(H,k,Q){return k||console.error("THREE.ExtrudeGeometry: vec does not exist"),H.clone().addScaledVector(k,Q)}const te=M.length;function O(H,k,Q){let $,F,P;const ae=H.x-k.x,Ae=H.y-k.y,Oe=Q.x-H.x,N=Q.y-H.y,b=ae*ae+Ae*Ae,J=ae*N-Ae*Oe;if(Math.abs(J)>Number.EPSILON){const oe=Math.sqrt(b),me=Math.sqrt(Oe*Oe+N*N),B=k.x-Ae/oe,se=k.y+ae/oe,ie=Q.x-N/me,ve=Q.y+Oe/me,Se=((ie-B)*N-(ve-se)*Oe)/(ae*N-Ae*Oe);$=B+ae*Se-H.x,F=se+Ae*Se-H.y;const de=$*$+F*F;if(de<=2)return new pe($,F);P=Math.sqrt(de/2)}else{let oe=!1;ae>Number.EPSILON?Oe>Number.EPSILON&&(oe=!0):ae<-Number.EPSILON?Oe<-Number.EPSILON&&(oe=!0):Math.sign(Ae)===Math.sign(N)&&(oe=!0),oe?($=-Ae,F=ae,P=Math.sqrt(b)):($=ae,F=Ae,P=Math.sqrt(b/2))}return new pe($/P,F/P)}const fe=[];for(let H=0,k=U.length,Q=k-1,$=H+1;H<k;H++,Q++,$++)Q===k&&(Q=0),$===k&&($=0),fe[H]=O(U[H],U[Q],U[$]);const ge=[];let Ee,Ne=fe.concat();for(let H=0,k=Z;H<k;H++){const Q=I[H];Ee=[];for(let $=0,F=Q.length,P=F-1,ae=$+1;$<F;$++,P++,ae++)P===F&&(P=0),ae===F&&(ae=0),Ee[$]=O(Q[$],Q[P],Q[ae]);ge.push(Ee),Ne=Ne.concat(Ee)}let Fe;if(m===0)Fe=nn.triangulateShape(U,I);else{const H=[],k=[];for(let Q=0;Q<m;Q++){const $=Q/m,F=p*Math.cos($*Math.PI/2),P=g*Math.sin($*Math.PI/2)+v;for(let ae=0,Ae=U.length;ae<Ae;ae++){const Oe=q(U[ae],fe[ae],P);re(Oe.x,Oe.y,-F),$===0&&H.push(Oe)}for(let ae=0,Ae=Z;ae<Ae;ae++){const Oe=I[ae];Ee=ge[ae];const N=[];for(let b=0,J=Oe.length;b<J;b++){const oe=q(Oe[b],Ee[b],P);re(oe.x,oe.y,-F),$===0&&N.push(oe)}$===0&&k.push(N)}}Fe=nn.triangulateShape(H,k)}const Y=Fe.length,G=g+v;for(let H=0;H<te;H++){const k=f?q(M[H],Ne[H],G):M[H];_?(T.copy(x.normals[0]).multiplyScalar(k.x),A.copy(x.binormals[0]).multiplyScalar(k.y),L.copy(S[0]).add(T).add(A),re(L.x,L.y,L.z)):re(k.x,k.y,0)}for(let H=1;H<=u;H++)for(let k=0;k<te;k++){const Q=f?q(M[k],Ne[k],G):M[k];_?(T.copy(x.normals[H]).multiplyScalar(Q.x),A.copy(x.binormals[H]).multiplyScalar(Q.y),L.copy(S[H]).add(T).add(A),re(L.x,L.y,L.z)):re(Q.x,Q.y,h/u*H)}for(let H=m-1;H>=0;H--){const k=H/m,Q=p*Math.cos(k*Math.PI/2),$=g*Math.sin(k*Math.PI/2)+v;for(let F=0,P=U.length;F<P;F++){const ae=q(U[F],fe[F],$);re(ae.x,ae.y,h+Q)}for(let F=0,P=I.length;F<P;F++){const ae=I[F];Ee=ge[F];for(let Ae=0,Oe=ae.length;Ae<Oe;Ae++){const N=q(ae[Ae],Ee[Ae],$);_?re(N.x,N.y+S[u-1].y,S[u-1].x+Q):re(N.x,N.y,h+Q)}}}w(),R();function w(){const H=r.length/3;if(f){let k=0,Q=te*k;for(let $=0;$<Y;$++){const F=Fe[$];X(F[2]+Q,F[1]+Q,F[0]+Q)}k=u+m*2,Q=te*k;for(let $=0;$<Y;$++){const F=Fe[$];X(F[0]+Q,F[1]+Q,F[2]+Q)}}else{for(let k=0;k<Y;k++){const Q=Fe[k];X(Q[2],Q[1],Q[0])}for(let k=0;k<Y;k++){const Q=Fe[k];X(Q[0]+te*u,Q[1]+te*u,Q[2]+te*u)}}i.addGroup(H,r.length/3-H,0)}function R(){const H=r.length/3;let k=0;j(U,k),k+=U.length;for(let Q=0,$=I.length;Q<$;Q++){const F=I[Q];j(F,k),k+=F.length}i.addGroup(H,r.length/3-H,1)}function j(H,k){let Q=H.length;for(;--Q>=0;){const $=Q;let F=Q-1;F<0&&(F=H.length-1);for(let P=0,ae=u+m*2;P<ae;P++){const Ae=te*P,Oe=te*(P+1),N=k+$+Ae,b=k+F+Ae,J=k+F+Oe,oe=k+$+Oe;he(N,b,J,oe)}}}function re(H,k,Q){c.push(H),c.push(k),c.push(Q)}function X(H,k,Q){Me(H),Me(k),Me(Q);const $=r.length/3,F=E.generateTopUV(i,r,$-3,$-2,$-1);D(F[0]),D(F[1]),D(F[2])}function he(H,k,Q,$){Me(H),Me(k),Me($),Me(k),Me(Q),Me($);const F=r.length/3,P=E.generateSideWallUV(i,r,F-6,F-3,F-2,F-1);D(P[0]),D(P[1]),D(P[3]),D(P[1]),D(P[2]),D(P[3])}function Me(H){r.push(c[H*3+0]),r.push(c[H*3+1]),r.push(c[H*3+2])}function D(H){s.push(H.x),s.push(H.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Jd(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];i.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new No[r.type]().fromJSON(r)),new gc(i,e.options)}}const $d={generateTopUV:function(n,e,t,i,r){const s=e[t*3],a=e[t*3+1],o=e[i*3],c=e[i*3+1],l=e[r*3],u=e[r*3+1];return[new pe(s,a),new pe(o,c),new pe(l,u)]},generateSideWallUV:function(n,e,t,i,r,s){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],h=e[i*3+2],f=e[r*3],p=e[r*3+1],g=e[r*3+2],v=e[s*3],m=e[s*3+1],d=e[s*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new pe(a,1-c),new pe(l,1-h),new pe(f,1-g),new pe(v,1-d)]:[new pe(o,1-c),new pe(u,1-h),new pe(p,1-g),new pe(m,1-d)]}};function Jd(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Br extends Ut{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,h=e/o,f=t/c,p=[],g=[],v=[],m=[];for(let d=0;d<u;d++){const E=d*f-a;for(let S=0;S<l;S++){const _=S*h-s;g.push(_,-E,0),v.push(0,0,1),m.push(S/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let E=0;E<o;E++){const S=E+l*d,_=E+l*(d+1),x=E+1+l*(d+1),A=E+1+l*d;p.push(S,_,A),p.push(_,x,A)}this.setIndex(p),this.setAttribute("position",new vt(g,3)),this.setAttribute("normal",new vt(v,3)),this.setAttribute("uv",new vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Br(e.width,e.height,e.widthSegments,e.heightSegments)}}class vc extends Ut{constructor(e=new Hi([new pe(0,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],a=[];let o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(o,c,u),o+=c,c=0;this.setIndex(i),this.setAttribute("position",new vt(r,3)),this.setAttribute("normal",new vt(s,3)),this.setAttribute("uv",new vt(a,2));function l(u){const h=r.length/3,f=u.extractPoints(t);let p=f.shape;const g=f.holes;nn.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,d=g.length;m<d;m++){const E=g[m];nn.isClockWise(E)===!0&&(g[m]=E.reverse())}const v=nn.triangulateShape(p,g);for(let m=0,d=g.length;m<d;m++){const E=g[m];p=p.concat(E)}for(let m=0,d=p.length;m<d;m++){const E=p[m];r.push(E.x,E.y,0),s.push(0,0,1),a.push(E.x,E.y)}for(let m=0,d=v.length;m<d;m++){const E=v[m],S=E[0]+h,_=E[1]+h,x=E[2]+h;i.push(S,_,x),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return jd(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const a=t[e.shapes[r]];i.push(a)}return new vc(i,e.curveSegments)}}function jd(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class sr extends Ji{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lu,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qd extends Ji{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ep extends Ji{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cl={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class tp{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const p=l[h],g=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const np=new tp;class _c{constructor(e){this.manager=e!==void 0?e:np,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}_c.DEFAULT_MATERIAL_NAME="__DEFAULT";const Mn={};class ip extends Error{constructor(e,t){super(e),this.response=t}}class rp extends _c{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=cl.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Mn[e]!==void 0){Mn[e].push({onLoad:t,onProgress:i,onError:r});return}Mn[e]=[],Mn[e].push({onLoad:t,onProgress:i,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Mn[e],h=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0;let v=0;const m=new ReadableStream({start(d){E();function E(){h.read().then(({done:S,value:_})=>{if(S)d.close();else{v+=_.byteLength;const x=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let A=0,T=u.length;A<T;A++){const L=u[A];L.onProgress&&L.onProgress(x)}d.enqueue(_),E()}},S=>{d.error(S)})}}});return new Response(m)}else throw new ip(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{cl.add(`file:${e}`,l);const u=Mn[e];delete Mn[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onLoad&&p.onLoad(l)}}).catch(l=>{const u=Mn[e];if(u===void 0)throw this.manager.itemError(e),l;delete Mn[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Qu extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ra=new ct,ll=new K,ul=new K;class sp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dc,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ll.setFromMatrixPosition(e.matrixWorld),t.position.copy(ll),ul.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ul),t.updateMatrixWorld(),Ra.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ra,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ra)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Sc extends zu{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ap extends sp{constructor(){super(new Sc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class op extends Qu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new ap}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class cp extends Qu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class lp extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const hl=new ct;class up{constructor(e,t,i=0,r=1/0){this.ray=new hc(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new fc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return hl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hl),this}intersectObject(e,t=!0,i=[]){return Oo(e,this,i,t),i.sort(fl),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Oo(e[r],this,i,t);return i.sort(fl),i}}function fl(n,e){return n.distance-e.distance}function Oo(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)Oo(s[a],e,t,!0)}}const dl=new pe;class hp{constructor(e=new pe(1/0,1/0),t=new pe(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=dl.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dl).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class Xn{constructor(){this.type="ShapePath",this.color=new Ze,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new zi,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,s,a){return this.currentPath.bezierCurveTo(e,t,i,r,s,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(d){const E=[];for(let S=0,_=d.length;S<_;S++){const x=d[S],A=new Hi;A.curves=x.curves,E.push(A)}return E}function i(d,E){const S=E.length;let _=!1;for(let x=S-1,A=0;A<S;x=A++){let T=E[x],L=E[A],y=L.x-T.x,M=L.y-T.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(T=E[A],y=-y,L=E[x],M=-M),d.y<T.y||d.y>L.y)continue;if(d.y===T.y){if(d.x===T.x)return!0}else{const I=M*(d.x-T.x)-y*(d.y-T.y);if(I===0)return!0;if(I<0)continue;_=!_}}else{if(d.y!==T.y)continue;if(L.x<=d.x&&d.x<=T.x||T.x<=d.x&&d.x<=L.x)return!0}}return _}const r=nn.isClockWise,s=this.subPaths;if(s.length===0)return[];let a,o,c;const l=[];if(s.length===1)return o=s[0],c=new Hi,c.curves=o.curves,l.push(c),l;let u=!r(s[0].getPoints());u=e?!u:u;const h=[],f=[];let p=[],g=0,v;f[g]=void 0,p[g]=[];for(let d=0,E=s.length;d<E;d++)o=s[d],v=o.getPoints(),a=r(v),a=e?!a:a,a?(!u&&f[g]&&g++,f[g]={s:new Hi,p:v},f[g].s.curves=o.curves,u&&g++,p[g]=[]):p[g].push({h:o,p:v[0]});if(!f[0])return t(s);if(f.length>1){let d=!1,E=0;for(let S=0,_=f.length;S<_;S++)h[S]=[];for(let S=0,_=f.length;S<_;S++){const x=p[S];for(let A=0;A<x.length;A++){const T=x[A];let L=!0;for(let y=0;y<f.length;y++)i(T.p,f[y].p)&&(S!==y&&E++,L?(L=!1,h[y].push(T)):d=!0);L&&h[S].push(T)}}E>0&&d===!1&&(p=h)}let m;for(let d=0,E=f.length;d<E;d++){c=f[d].s,l.push(c),m=p[d];for(let S=0,_=m.length;S<_;S++)c.holes.push(m[S].h)}return l}}function pl(n,e,t,i){const r=fp(i);switch(t){case wu:return n*e;case Pu:return n*e/r.components*r.byteLength;case ac:return n*e/r.components*r.byteLength;case Iu:return n*e*2/r.components*r.byteLength;case oc:return n*e*2/r.components*r.byteLength;case Cu:return n*e*3/r.components*r.byteLength;case tn:return n*e*4/r.components*r.byteLength;case cc:return n*e*4/r.components*r.byteLength;case ys:case Ms:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Es:case bs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ao:case co:return Math.max(n,16)*Math.max(e,8)/4;case so:case oo:return Math.max(n,8)*Math.max(e,8)/2;case lo:case uo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ho:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case po:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case mo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case go:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case vo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case _o:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case So:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case xo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case yo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Eo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case bo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ao:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case To:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ro:case wo:case Co:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Po:case Io:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Lo:case Do:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fp(n){switch(n){case dn:case bu:return{byteLength:1,components:1};case yr:case Au:case Nr:return{byteLength:2,components:1};case rc:case sc:return{byteLength:2,components:4};case oi:case ic:case Tn:return{byteLength:4,components:1};case Tu:case Ru:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function eh(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function dp(n){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,o),h.length===0)n.bufferSubData(l,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],v=h[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,h[f]=v)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const v=h[p];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var pp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mp=`#ifdef USE_ALPHAHASH
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
#endif`,gp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_p=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xp=`#ifdef USE_AOMAP
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
#endif`,yp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mp=`#ifdef USE_BATCHING
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
#endif`,Ep=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ap=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rp=`#ifdef USE_IRIDESCENCE
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
#endif`,wp=`#ifdef USE_BUMPMAP
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
#endif`,Cp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Np=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Op=`#define PI 3.141592653589793
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
} // validated`,Bp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gp=`vec3 transformedNormal = objectNormal;
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
#endif`,zp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qp=`#ifdef USE_ENVMAP
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
#endif`,Yp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kp=`#ifdef USE_ENVMAP
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
#endif`,Zp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$p=`#ifdef USE_ENVMAP
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
#endif`,Jp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,em=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tm=`#ifdef USE_GRADIENTMAP
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
}`,nm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,im=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sm=`uniform bool receiveShadow;
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
#endif`,am=`#ifdef USE_ENVMAP
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
#endif`,om=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hm=`PhysicalMaterial material;
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
#endif`,fm=`struct PhysicalMaterial {
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
}`,dm=`
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
#endif`,pm=`#if defined( RE_IndirectDiffuse )
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
#endif`,mm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_m=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ym=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Em=`#if defined( USE_POINTS_UV )
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
#endif`,bm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Am=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cm=`#ifdef USE_MORPHTARGETS
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
#endif`,Pm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Im=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Um=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fm=`#ifdef USE_NORMALMAP
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
#endif`,Om=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,km=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ym=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Km=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$m=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jm=`float getShadowMask() {
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
}`,Qm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eg=`#ifdef USE_SKINNING
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
#endif`,tg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ng=`#ifdef USE_SKINNING
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
#endif`,ig=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ag=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,og=`#ifdef USE_TRANSMISSION
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
#endif`,cg=`#ifdef USE_TRANSMISSION
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
#endif`,lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pg=`uniform sampler2D t2D;
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
}`,mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_g=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sg=`#include <common>
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
}`,xg=`#if DEPTH_PACKING == 3200
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
}`,yg=`#define DISTANCE
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
}`,Mg=`#define DISTANCE
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
}`,Eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ag=`uniform float scale;
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
}`,Tg=`uniform vec3 diffuse;
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
}`,Rg=`#include <common>
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
}`,wg=`uniform vec3 diffuse;
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
}`,Cg=`#define LAMBERT
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
}`,Pg=`#define LAMBERT
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
}`,Ig=`#define MATCAP
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
}`,Lg=`#define MATCAP
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
}`,Dg=`#define NORMAL
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
}`,Ng=`#define NORMAL
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
}`,Ug=`#define PHONG
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
}`,Fg=`#define PHONG
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
}`,Og=`#define STANDARD
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
}`,Bg=`#define STANDARD
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
}`,Gg=`#define TOON
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
}`,zg=`#define TOON
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
}`,Hg=`uniform float size;
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
}`,Vg=`uniform vec3 diffuse;
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
}`,kg=`#include <common>
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
}`,Wg=`uniform vec3 color;
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
}`,Xg=`uniform float rotation;
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
}`,qg=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:pp,alphahash_pars_fragment:mp,alphamap_fragment:gp,alphamap_pars_fragment:vp,alphatest_fragment:_p,alphatest_pars_fragment:Sp,aomap_fragment:xp,aomap_pars_fragment:yp,batching_pars_vertex:Mp,batching_vertex:Ep,begin_vertex:bp,beginnormal_vertex:Ap,bsdfs:Tp,iridescence_fragment:Rp,bumpmap_pars_fragment:wp,clipping_planes_fragment:Cp,clipping_planes_pars_fragment:Pp,clipping_planes_pars_vertex:Ip,clipping_planes_vertex:Lp,color_fragment:Dp,color_pars_fragment:Np,color_pars_vertex:Up,color_vertex:Fp,common:Op,cube_uv_reflection_fragment:Bp,defaultnormal_vertex:Gp,displacementmap_pars_vertex:zp,displacementmap_vertex:Hp,emissivemap_fragment:Vp,emissivemap_pars_fragment:kp,colorspace_fragment:Wp,colorspace_pars_fragment:Xp,envmap_fragment:qp,envmap_common_pars_fragment:Yp,envmap_pars_fragment:Kp,envmap_pars_vertex:Zp,envmap_physical_pars_fragment:am,envmap_vertex:$p,fog_vertex:Jp,fog_pars_vertex:jp,fog_fragment:Qp,fog_pars_fragment:em,gradientmap_pars_fragment:tm,lightmap_pars_fragment:nm,lights_lambert_fragment:im,lights_lambert_pars_fragment:rm,lights_pars_begin:sm,lights_toon_fragment:om,lights_toon_pars_fragment:cm,lights_phong_fragment:lm,lights_phong_pars_fragment:um,lights_physical_fragment:hm,lights_physical_pars_fragment:fm,lights_fragment_begin:dm,lights_fragment_maps:pm,lights_fragment_end:mm,logdepthbuf_fragment:gm,logdepthbuf_pars_fragment:vm,logdepthbuf_pars_vertex:_m,logdepthbuf_vertex:Sm,map_fragment:xm,map_pars_fragment:ym,map_particle_fragment:Mm,map_particle_pars_fragment:Em,metalnessmap_fragment:bm,metalnessmap_pars_fragment:Am,morphinstance_vertex:Tm,morphcolor_vertex:Rm,morphnormal_vertex:wm,morphtarget_pars_vertex:Cm,morphtarget_vertex:Pm,normal_fragment_begin:Im,normal_fragment_maps:Lm,normal_pars_fragment:Dm,normal_pars_vertex:Nm,normal_vertex:Um,normalmap_pars_fragment:Fm,clearcoat_normal_fragment_begin:Om,clearcoat_normal_fragment_maps:Bm,clearcoat_pars_fragment:Gm,iridescence_pars_fragment:zm,opaque_fragment:Hm,packing:Vm,premultiplied_alpha_fragment:km,project_vertex:Wm,dithering_fragment:Xm,dithering_pars_fragment:qm,roughnessmap_fragment:Ym,roughnessmap_pars_fragment:Km,shadowmap_pars_fragment:Zm,shadowmap_pars_vertex:$m,shadowmap_vertex:Jm,shadowmask_pars_fragment:jm,skinbase_vertex:Qm,skinning_pars_vertex:eg,skinning_vertex:tg,skinnormal_vertex:ng,specularmap_fragment:ig,specularmap_pars_fragment:rg,tonemapping_fragment:sg,tonemapping_pars_fragment:ag,transmission_fragment:og,transmission_pars_fragment:cg,uv_pars_fragment:lg,uv_pars_vertex:ug,uv_vertex:hg,worldpos_vertex:fg,background_vert:dg,background_frag:pg,backgroundCube_vert:mg,backgroundCube_frag:gg,cube_vert:vg,cube_frag:_g,depth_vert:Sg,depth_frag:xg,distanceRGBA_vert:yg,distanceRGBA_frag:Mg,equirect_vert:Eg,equirect_frag:bg,linedashed_vert:Ag,linedashed_frag:Tg,meshbasic_vert:Rg,meshbasic_frag:wg,meshlambert_vert:Cg,meshlambert_frag:Pg,meshmatcap_vert:Ig,meshmatcap_frag:Lg,meshnormal_vert:Dg,meshnormal_frag:Ng,meshphong_vert:Ug,meshphong_frag:Fg,meshphysical_vert:Og,meshphysical_frag:Bg,meshtoon_vert:Gg,meshtoon_frag:zg,points_vert:Hg,points_frag:Vg,shadow_vert:kg,shadow_frag:Wg,sprite_vert:Xg,sprite_frag:qg},Ce={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},on={basic:{uniforms:Rt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Rt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Ze(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Rt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Rt([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Rt([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Ze(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Rt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Rt([Ce.points,Ce.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Rt([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Rt([Ce.common,Ce.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Rt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Rt([Ce.sprite,Ce.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Rt([Ce.common,Ce.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Rt([Ce.lights,Ce.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};on.physical={uniforms:Rt([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const us={r:0,b:0,g:0},qn=new pn,Yg=new ct;function Kg(n,e,t,i,r,s,a){const o=new Ze(0);let c=s===!0?0:1,l,u,h=null,f=0,p=null;function g(S){let _=S.isScene===!0?S.background:null;return _&&_.isTexture&&(_=(S.backgroundBlurriness>0?t:e).get(_)),_}function v(S){let _=!1;const x=g(S);x===null?d(o,c):x&&x.isColor&&(d(x,1),_=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,_){const x=g(_);x&&(x.isCubeTexture||x.mapping===Ks)?(u===void 0&&(u=new It(new Or(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:qi(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,T,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),qn.copy(_.backgroundRotation),qn.x*=-1,qn.y*=-1,qn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Yg.makeRotationFromEuler(qn)),u.material.toneMapped=et.getTransfer(x.colorSpace)!==nt,(h!==x||f!==x.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,p=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new It(new Br(2,2),new Bn({name:"BackgroundMaterial",uniforms:qi(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=et.getTransfer(x.colorSpace)!==nt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,h=x,f=x.version,p=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function d(S,_){S.getRGB(us,Gu(n)),i.buffers.color.setClear(us.r,us.g,us.b,_,a)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,_=1){o.set(S),c=_,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,d(o,c)},render:v,addToRenderList:m,dispose:E}}function Zg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(M,I,z,W,Z){let U=!1;const q=h(W,z,I);s!==q&&(s=q,l(s.object)),U=p(M,W,z,Z),U&&g(M,W,z,Z),Z!==null&&e.update(Z,n.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,_(M,I,z,W),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function c(){return n.createVertexArray()}function l(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function h(M,I,z){const W=z.wireframe===!0;let Z=i[M.id];Z===void 0&&(Z={},i[M.id]=Z);let U=Z[I.id];U===void 0&&(U={},Z[I.id]=U);let q=U[W];return q===void 0&&(q=f(c()),U[W]=q),q}function f(M){const I=[],z=[],W=[];for(let Z=0;Z<t;Z++)I[Z]=0,z[Z]=0,W[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:z,attributeDivisors:W,object:M,attributes:{},index:null}}function p(M,I,z,W){const Z=s.attributes,U=I.attributes;let q=0;const te=z.getAttributes();for(const O in te)if(te[O].location>=0){const ge=Z[O];let Ee=U[O];if(Ee===void 0&&(O==="instanceMatrix"&&M.instanceMatrix&&(Ee=M.instanceMatrix),O==="instanceColor"&&M.instanceColor&&(Ee=M.instanceColor)),ge===void 0||ge.attribute!==Ee||Ee&&ge.data!==Ee.data)return!0;q++}return s.attributesNum!==q||s.index!==W}function g(M,I,z,W){const Z={},U=I.attributes;let q=0;const te=z.getAttributes();for(const O in te)if(te[O].location>=0){let ge=U[O];ge===void 0&&(O==="instanceMatrix"&&M.instanceMatrix&&(ge=M.instanceMatrix),O==="instanceColor"&&M.instanceColor&&(ge=M.instanceColor));const Ee={};Ee.attribute=ge,ge&&ge.data&&(Ee.data=ge.data),Z[O]=Ee,q++}s.attributes=Z,s.attributesNum=q,s.index=W}function v(){const M=s.newAttributes;for(let I=0,z=M.length;I<z;I++)M[I]=0}function m(M){d(M,0)}function d(M,I){const z=s.newAttributes,W=s.enabledAttributes,Z=s.attributeDivisors;z[M]=1,W[M]===0&&(n.enableVertexAttribArray(M),W[M]=1),Z[M]!==I&&(n.vertexAttribDivisor(M,I),Z[M]=I)}function E(){const M=s.newAttributes,I=s.enabledAttributes;for(let z=0,W=I.length;z<W;z++)I[z]!==M[z]&&(n.disableVertexAttribArray(z),I[z]=0)}function S(M,I,z,W,Z,U,q){q===!0?n.vertexAttribIPointer(M,I,z,Z,U):n.vertexAttribPointer(M,I,z,W,Z,U)}function _(M,I,z,W){v();const Z=W.attributes,U=z.getAttributes(),q=I.defaultAttributeValues;for(const te in U){const O=U[te];if(O.location>=0){let fe=Z[te];if(fe===void 0&&(te==="instanceMatrix"&&M.instanceMatrix&&(fe=M.instanceMatrix),te==="instanceColor"&&M.instanceColor&&(fe=M.instanceColor)),fe!==void 0){const ge=fe.normalized,Ee=fe.itemSize,Ne=e.get(fe);if(Ne===void 0)continue;const Fe=Ne.buffer,Y=Ne.type,G=Ne.bytesPerElement,w=Y===n.INT||Y===n.UNSIGNED_INT||fe.gpuType===ic;if(fe.isInterleavedBufferAttribute){const R=fe.data,j=R.stride,re=fe.offset;if(R.isInstancedInterleavedBuffer){for(let X=0;X<O.locationSize;X++)d(O.location+X,R.meshPerAttribute);M.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let X=0;X<O.locationSize;X++)m(O.location+X);n.bindBuffer(n.ARRAY_BUFFER,Fe);for(let X=0;X<O.locationSize;X++)S(O.location+X,Ee/O.locationSize,Y,ge,j*G,(re+Ee/O.locationSize*X)*G,w)}else{if(fe.isInstancedBufferAttribute){for(let R=0;R<O.locationSize;R++)d(O.location+R,fe.meshPerAttribute);M.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let R=0;R<O.locationSize;R++)m(O.location+R);n.bindBuffer(n.ARRAY_BUFFER,Fe);for(let R=0;R<O.locationSize;R++)S(O.location+R,Ee/O.locationSize,Y,ge,Ee*G,Ee/O.locationSize*R*G,w)}}else if(q!==void 0){const ge=q[te];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv(O.location,ge);break;case 3:n.vertexAttrib3fv(O.location,ge);break;case 4:n.vertexAttrib4fv(O.location,ge);break;default:n.vertexAttrib1fv(O.location,ge)}}}}E()}function x(){L();for(const M in i){const I=i[M];for(const z in I){const W=I[z];for(const Z in W)u(W[Z].object),delete W[Z];delete I[z]}delete i[M]}}function A(M){if(i[M.id]===void 0)return;const I=i[M.id];for(const z in I){const W=I[z];for(const Z in W)u(W[Z].object),delete W[Z];delete I[z]}delete i[M.id]}function T(M){for(const I in i){const z=i[I];if(z[M.id]===void 0)continue;const W=z[M.id];for(const Z in W)u(W[Z].object),delete W[Z];delete z[M.id]}}function L(){y(),a=!0,s!==r&&(s=r,l(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:L,resetDefaultState:y,dispose:x,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:m,disableUnusedAttributes:E}}function $g(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function a(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),t.update(u,i,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,i,1)}function c(l,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*f[v];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Jg(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(T){return!(T!==tn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const L=T===Nr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==dn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Tn&&!L)}function c(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:_,vertexTextures:x,maxSamples:A}}function jg(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Zn,o=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const E=s?0:i,S=E*4;let _=d.clippingState||null;c.value=_,_=u(g,f,S,p);for(let x=0;x!==S;++x)_[x]=t[x];d.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const d=p+v*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let S=0,_=p;S!==v;++S,_+=4)a.copy(h[S]).applyMatrix4(E,o),a.normal.toArray(m,_),m[_+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Qg(n){let e=new WeakMap;function t(a,o){return o===to?a.mapping=ki:o===no&&(a.mapping=Wi),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===to||o===no)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new dd(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Ui=4,ml=[.125,.215,.35,.446,.526,.582],ti=20,wa=new Sc,gl=new Ze;let Ca=null,Pa=0,Ia=0,La=!1;const $n=(1+Math.sqrt(5))/2,Ci=1/$n,vl=[new K(-$n,Ci,0),new K($n,Ci,0),new K(-Ci,0,$n),new K(Ci,0,$n),new K(0,$n,-Ci),new K(0,$n,Ci),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)],e0=new K;class _l{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=e0}=s;Ca=this._renderer.getRenderTarget(),Pa=this._renderer.getActiveCubeFace(),Ia=this._renderer.getActiveMipmapLevel(),La=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ca,Pa,Ia),this._renderer.xr.enabled=La,e.scissorTest=!1,hs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ki||e.mapping===Wi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ca=this._renderer.getRenderTarget(),Pa=this._renderer.getActiveCubeFace(),Ia=this._renderer.getActiveMipmapLevel(),La=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:un,minFilter:un,generateMipmaps:!1,type:Nr,format:tn,colorSpace:Xi,depthBuffer:!1},r=Sl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sl(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=t0(s)),this._blurMaterial=n0(s,e,t)}return r}_compileMaterial(e){const t=new It(this._lodPlanes[0],e);this._renderer.compile(t,wa)}_sceneToCubeUV(e,t,i,r,s){const c=new Qt(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(gl),h.toneMapping=Fn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));const v=new ei({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1}),m=new It(new Or,v);let d=!1;const E=e.background;E?E.isColor&&(v.color.copy(E),e.background=null,d=!0):(v.color.copy(gl),d=!0);for(let S=0;S<6;S++){const _=S%3;_===0?(c.up.set(0,l[S],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[S],s.y,s.z)):_===1?(c.up.set(0,0,l[S]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[S],s.z)):(c.up.set(0,l[S],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[S]));const x=this._cubeSize;hs(r,_*x,S>2?x:0,x,x),h.setRenderTarget(r),d&&h.render(m,c),h.render(e,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=f,e.background=E}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ki||e.mapping===Wi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=yl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new It(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;hs(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,wa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=vl[(r-s-1)%vl.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new It(this._lodPlanes[r],l),f=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ti-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):ti;m>ti&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ti}`);const d=[];let E=0;for(let T=0;T<ti;++T){const L=T/v,y=Math.exp(-L*L/2);d.push(y),T===0?E+=y:T<m&&(E+=2*y)}for(let T=0;T<d.length;T++)d[T]=d[T]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-i;const _=this._sizeLods[r],x=3*_*(r>S-Ui?r-S+Ui:0),A=4*(this._cubeSize-_);hs(t,x,A,3*_,2*_),c.setRenderTarget(t),c.render(h,wa)}}function t0(n){const e=[],t=[],i=[];let r=n;const s=n-Ui+1+ml.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>n-Ui?c=ml[a-n+Ui-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,v=3,m=2,d=1,E=new Float32Array(v*g*p),S=new Float32Array(m*g*p),_=new Float32Array(d*g*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,L=A>2?0:-1,y=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];E.set(y,v*g*A),S.set(f,m*g*A);const M=[A,A,A,A,A,A];_.set(M,d*g*A)}const x=new Ut;x.setAttribute("position",new fn(E,v)),x.setAttribute("uv",new fn(S,m)),x.setAttribute("faceIndex",new fn(_,d)),e.push(x),r>Ui&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Sl(n,e,t){const i=new ci(n,e,t);return i.texture.mapping=Ks,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function n0(n,e,t){const i=new Float32Array(ti),r=new K(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:xc(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function xl(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xc(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function yl(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function xc(){return`

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
	`}function i0(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===to||c===no,u=c===ki||c===Wi;if(l||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new _l(n)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return l&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new _l(n)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function r0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Tr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function s0(n,e,t,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function l(h){const f=[],p=h.index,g=h.attributes.position;let v=0;if(p!==null){const E=p.array;v=p.version;for(let S=0,_=E.length;S<_;S+=3){const x=E[S+0],A=E[S+1],T=E[S+2];f.push(x,A,A,T,T,x)}}else if(g!==void 0){const E=g.array;v=g.version;for(let S=0,_=E.length/3-1;S<_;S+=3){const x=S+0,A=S+1,T=S+2;f.push(x,A,A,T,T,x)}}else return;const m=new(Nu(f)?Bu:Ou)(f,1);m.version=v;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function a0(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,p){n.drawElements(i,p,s,f*a),t.update(p,i,1)}function l(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,f*a,g),t.update(p,i,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,i,1)}function h(f,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/a,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,v,0,g);let d=0;for(let E=0;E<g;E++)d+=p[E]*v[E];t.update(d,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function o0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function c0(n,e,t){const i=new WeakMap,r=new dt;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let M=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var p=M;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let x=o.attributes.position.count*_,A=1;x>e.maxTextureSize&&(A=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const T=new Float32Array(x*A*4*h),L=new Uu(T,x,A,h);L.type=Tn,L.needsUpdate=!0;const y=_*4;for(let I=0;I<h;I++){const z=d[I],W=E[I],Z=S[I],U=x*A*4*I;for(let q=0;q<z.count;q++){const te=q*y;g===!0&&(r.fromBufferAttribute(z,q),T[U+te+0]=r.x,T[U+te+1]=r.y,T[U+te+2]=r.z,T[U+te+3]=0),v===!0&&(r.fromBufferAttribute(W,q),T[U+te+4]=r.x,T[U+te+5]=r.y,T[U+te+6]=r.z,T[U+te+7]=0),m===!0&&(r.fromBufferAttribute(Z,q),T[U+te+8]=r.x,T[U+te+9]=r.y,T[U+te+10]=r.z,T[U+te+11]=Z.itemSize===4?r.w:1)}}f={count:h,texture:L,size:new pe(x,A)},i.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function l0(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return h}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const th=new Dt,Ml=new ku(1,1),nh=new Uu,ih=new $f,rh=new Hu,El=[],bl=[],Al=new Float32Array(16),Tl=new Float32Array(9),Rl=new Float32Array(4);function ji(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=El[r];if(s===void 0&&(s=new Float32Array(r),El[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function _t(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function St(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function $s(n,e){let t=bl[e];t===void 0&&(t=new Int32Array(e),bl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function u0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function h0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2fv(this.addr,e),St(t,e)}}function f0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;n.uniform3fv(this.addr,e),St(t,e)}}function d0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4fv(this.addr,e),St(t,e)}}function p0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(_t(t,i))return;Rl.set(i),n.uniformMatrix2fv(this.addr,!1,Rl),St(t,i)}}function m0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(_t(t,i))return;Tl.set(i),n.uniformMatrix3fv(this.addr,!1,Tl),St(t,i)}}function g0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(_t(t,i))return;Al.set(i),n.uniformMatrix4fv(this.addr,!1,Al),St(t,i)}}function v0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function _0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2iv(this.addr,e),St(t,e)}}function S0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;n.uniform3iv(this.addr,e),St(t,e)}}function x0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4iv(this.addr,e),St(t,e)}}function y0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function M0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2uiv(this.addr,e),St(t,e)}}function E0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;n.uniform3uiv(this.addr,e),St(t,e)}}function b0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4uiv(this.addr,e),St(t,e)}}function A0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Ml.compareFunction=Du,s=Ml):s=th,t.setTexture2D(e||s,r)}function T0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ih,r)}function R0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||rh,r)}function w0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||nh,r)}function C0(n){switch(n){case 5126:return u0;case 35664:return h0;case 35665:return f0;case 35666:return d0;case 35674:return p0;case 35675:return m0;case 35676:return g0;case 5124:case 35670:return v0;case 35667:case 35671:return _0;case 35668:case 35672:return S0;case 35669:case 35673:return x0;case 5125:return y0;case 36294:return M0;case 36295:return E0;case 36296:return b0;case 35678:case 36198:case 36298:case 36306:case 35682:return A0;case 35679:case 36299:case 36307:return T0;case 35680:case 36300:case 36308:case 36293:return R0;case 36289:case 36303:case 36311:case 36292:return w0}}function P0(n,e){n.uniform1fv(this.addr,e)}function I0(n,e){const t=ji(e,this.size,2);n.uniform2fv(this.addr,t)}function L0(n,e){const t=ji(e,this.size,3);n.uniform3fv(this.addr,t)}function D0(n,e){const t=ji(e,this.size,4);n.uniform4fv(this.addr,t)}function N0(n,e){const t=ji(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function U0(n,e){const t=ji(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function F0(n,e){const t=ji(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function O0(n,e){n.uniform1iv(this.addr,e)}function B0(n,e){n.uniform2iv(this.addr,e)}function G0(n,e){n.uniform3iv(this.addr,e)}function z0(n,e){n.uniform4iv(this.addr,e)}function H0(n,e){n.uniform1uiv(this.addr,e)}function V0(n,e){n.uniform2uiv(this.addr,e)}function k0(n,e){n.uniform3uiv(this.addr,e)}function W0(n,e){n.uniform4uiv(this.addr,e)}function X0(n,e,t){const i=this.cache,r=e.length,s=$s(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||th,s[a])}function q0(n,e,t){const i=this.cache,r=e.length,s=$s(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||ih,s[a])}function Y0(n,e,t){const i=this.cache,r=e.length,s=$s(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||rh,s[a])}function K0(n,e,t){const i=this.cache,r=e.length,s=$s(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||nh,s[a])}function Z0(n){switch(n){case 5126:return P0;case 35664:return I0;case 35665:return L0;case 35666:return D0;case 35674:return N0;case 35675:return U0;case 35676:return F0;case 5124:case 35670:return O0;case 35667:case 35671:return B0;case 35668:case 35672:return G0;case 35669:case 35673:return z0;case 5125:return H0;case 36294:return V0;case 36295:return k0;case 36296:return W0;case 35678:case 36198:case 36298:case 36306:case 35682:return X0;case 35679:case 36299:case 36307:return q0;case 35680:case 36300:case 36308:case 36293:return Y0;case 36289:case 36303:case 36311:case 36292:return K0}}class $0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=C0(t.type)}}class J0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Z0(t.type)}}class j0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Da=/(\w+)(\])?(\[|\.)?/g;function wl(n,e){n.seq.push(e),n.map[e.id]=e}function Q0(n,e,t){const i=n.name,r=i.length;for(Da.lastIndex=0;;){const s=Da.exec(i),a=Da.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){wl(t,l===void 0?new $0(o,n,e):new J0(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new j0(o),wl(t,h)),t=h}}}class As{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Q0(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Cl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const ev=37297;let tv=0;function nv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Pl=new Xe;function iv(n){et._getMatrix(Pl,et.workingColorSpace,n);const e=`mat3( ${Pl.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(n)){case Ds:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Il(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+nv(n.getShaderSource(e),o)}else return s}function rv(n,e){const t=iv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function sv(n,e){let t;switch(e){case lf:t="Linear";break;case uf:t="Reinhard";break;case hf:t="Cineon";break;case ff:t="ACESFilmic";break;case pf:t="AgX";break;case mf:t="Neutral";break;case df:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fs=new K;function av(){et.getLuminanceCoefficients(fs);const n=fs.x.toFixed(4),e=fs.y.toFixed(4),t=fs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ov(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ur).join(`
`)}function cv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function lv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ur(n){return n!==""}function Ll(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bo(n){return n.replace(uv,fv)}const hv=new Map;function fv(n,e){let t=qe[e];if(t===void 0){const i=hv.get(e);if(i!==void 0)t=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Bo(t)}const dv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nl(n){return n.replace(dv,pv)}function pv(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ul(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===yu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Hh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===bn&&(e="SHADOWMAP_TYPE_VSM"),e}function gv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ki:case Wi:e="ENVMAP_TYPE_CUBE";break;case Ks:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vv(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Wi:e="ENVMAP_MODE_REFRACTION";break}return e}function _v(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Mu:e="ENVMAP_BLENDING_MULTIPLY";break;case of:e="ENVMAP_BLENDING_MIX";break;case cf:e="ENVMAP_BLENDING_ADD";break}return e}function Sv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function xv(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=mv(t),l=gv(t),u=vv(t),h=_v(t),f=Sv(t),p=ov(t),g=cv(s),v=r.createProgram();let m,d,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ur).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ur).join(`
`),d.length>0&&(d+=`
`)):(m=[Ul(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),d=[Ul(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fn?"#define TONE_MAPPING":"",t.toneMapping!==Fn?qe.tonemapping_pars_fragment:"",t.toneMapping!==Fn?sv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,rv("linearToOutputTexel",t.outputColorSpace),av(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ur).join(`
`)),a=Bo(a),a=Ll(a,t),a=Dl(a,t),o=Bo(o),o=Ll(o,t),o=Dl(o,t),a=Nl(a),o=Nl(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const S=E+m+a,_=E+d+o,x=Cl(r,r.VERTEX_SHADER,S),A=Cl(r,r.FRAGMENT_SHADER,_);r.attachShader(v,x),r.attachShader(v,A),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function T(I){if(n.debug.checkShaderErrors){const z=r.getProgramInfoLog(v)||"",W=r.getShaderInfoLog(x)||"",Z=r.getShaderInfoLog(A)||"",U=z.trim(),q=W.trim(),te=Z.trim();let O=!0,fe=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,x,A);else{const ge=Il(r,x,"vertex"),Ee=Il(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+U+`
`+ge+`
`+Ee)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(q===""||te==="")&&(fe=!1);fe&&(I.diagnostics={runnable:O,programLog:U,vertexShader:{log:q,prefix:m},fragmentShader:{log:te,prefix:d}})}r.deleteShader(x),r.deleteShader(A),L=new As(r,v),y=lv(r,v)}let L;this.getUniforms=function(){return L===void 0&&T(this),L};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(v,ev)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=x,this.fragmentShader=A,this}let yv=0;class Mv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Ev(e),t.set(e,i)),i}}class Ev{constructor(e){this.id=yv++,this.code=e,this.usedTimes=0}}function bv(n,e,t,i,r,s,a){const o=new fc,c=new Mv,l=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,M,I,z,W){const Z=z.fog,U=W.geometry,q=y.isMeshStandardMaterial?z.environment:null,te=(y.isMeshStandardMaterial?t:e).get(y.envMap||q),O=te&&te.mapping===Ks?te.image.height:null,fe=g[y.type];y.precision!==null&&(p=r.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const ge=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Ee=ge!==void 0?ge.length:0;let Ne=0;U.morphAttributes.position!==void 0&&(Ne=1),U.morphAttributes.normal!==void 0&&(Ne=2),U.morphAttributes.color!==void 0&&(Ne=3);let Fe,Y,G,w;if(fe){const Je=on[fe];Fe=Je.vertexShader,Y=Je.fragmentShader}else Fe=y.vertexShader,Y=y.fragmentShader,c.update(y),G=c.getVertexShaderID(y),w=c.getFragmentShaderID(y);const R=n.getRenderTarget(),j=n.state.buffers.depth.getReversed(),re=W.isInstancedMesh===!0,X=W.isBatchedMesh===!0,he=!!y.map,Me=!!y.matcap,D=!!te,H=!!y.aoMap,k=!!y.lightMap,Q=!!y.bumpMap,$=!!y.normalMap,F=!!y.displacementMap,P=!!y.emissiveMap,ae=!!y.metalnessMap,Ae=!!y.roughnessMap,Oe=y.anisotropy>0,N=y.clearcoat>0,b=y.dispersion>0,J=y.iridescence>0,oe=y.sheen>0,me=y.transmission>0,B=Oe&&!!y.anisotropyMap,se=N&&!!y.clearcoatMap,ie=N&&!!y.clearcoatNormalMap,ve=N&&!!y.clearcoatRoughnessMap,Se=J&&!!y.iridescenceMap,de=J&&!!y.iridescenceThicknessMap,ye=oe&&!!y.sheenColorMap,we=oe&&!!y.sheenRoughnessMap,Le=!!y.specularMap,Re=!!y.specularColorMap,ze=!!y.specularIntensityMap,V=me&&!!y.transmissionMap,xe=me&&!!y.thicknessMap,Te=!!y.gradientMap,Pe=!!y.alphaMap,_e=y.alphaTest>0,ue=!!y.alphaHash,De=!!y.extensions;let ke=Fn;y.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ke=n.toneMapping);const $e={shaderID:fe,shaderType:y.type,shaderName:y.name,vertexShader:Fe,fragmentShader:Y,defines:y.defines,customVertexShaderID:G,customFragmentShaderID:w,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:X,batchingColor:X&&W._colorsTexture!==null,instancing:re,instancingColor:re&&W.instanceColor!==null,instancingMorph:re&&W.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:R===null?n.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Xi,alphaToCoverage:!!y.alphaToCoverage,map:he,matcap:Me,envMap:D,envMapMode:D&&te.mapping,envMapCubeUVHeight:O,aoMap:H,lightMap:k,bumpMap:Q,normalMap:$,displacementMap:f&&F,emissiveMap:P,normalMapObjectSpace:$&&y.normalMapType===Sf,normalMapTangentSpace:$&&y.normalMapType===Lu,metalnessMap:ae,roughnessMap:Ae,anisotropy:Oe,anisotropyMap:B,clearcoat:N,clearcoatMap:se,clearcoatNormalMap:ie,clearcoatRoughnessMap:ve,dispersion:b,iridescence:J,iridescenceMap:Se,iridescenceThicknessMap:de,sheen:oe,sheenColorMap:ye,sheenRoughnessMap:we,specularMap:Le,specularColorMap:Re,specularIntensityMap:ze,transmission:me,transmissionMap:V,thicknessMap:xe,gradientMap:Te,opaque:y.transparent===!1&&y.blending===Bi&&y.alphaToCoverage===!1,alphaMap:Pe,alphaTest:_e,alphaHash:ue,combine:y.combine,mapUv:he&&v(y.map.channel),aoMapUv:H&&v(y.aoMap.channel),lightMapUv:k&&v(y.lightMap.channel),bumpMapUv:Q&&v(y.bumpMap.channel),normalMapUv:$&&v(y.normalMap.channel),displacementMapUv:F&&v(y.displacementMap.channel),emissiveMapUv:P&&v(y.emissiveMap.channel),metalnessMapUv:ae&&v(y.metalnessMap.channel),roughnessMapUv:Ae&&v(y.roughnessMap.channel),anisotropyMapUv:B&&v(y.anisotropyMap.channel),clearcoatMapUv:se&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:ie&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:de&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:we&&v(y.sheenRoughnessMap.channel),specularMapUv:Le&&v(y.specularMap.channel),specularColorMapUv:Re&&v(y.specularColorMap.channel),specularIntensityMapUv:ze&&v(y.specularIntensityMap.channel),transmissionMapUv:V&&v(y.transmissionMap.channel),thicknessMapUv:xe&&v(y.thicknessMap.channel),alphaMapUv:Pe&&v(y.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&($||Oe),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!U.attributes.uv&&(he||Pe),fog:!!Z,useFog:y.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:j,skinning:W.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Ne,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:ke,decodeVideoTexture:he&&y.map.isVideoTexture===!0&&et.getTransfer(y.map.colorSpace)===nt,decodeVideoTextureEmissive:P&&y.emissiveMap.isVideoTexture===!0&&et.getTransfer(y.emissiveMap.colorSpace)===nt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===yt,flipSided:y.side===Lt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:De&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&y.extensions.multiDraw===!0||X)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return $e.vertexUv1s=l.has(1),$e.vertexUv2s=l.has(2),$e.vertexUv3s=l.has(3),l.clear(),$e}function d(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const I in y.defines)M.push(I),M.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(E(M,y),S(M,y),M.push(n.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function E(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function S(y,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),y.push(o.mask)}function _(y){const M=g[y.type];let I;if(M){const z=on[M];I=ld.clone(z.uniforms)}else I=y.uniforms;return I}function x(y,M){let I;for(let z=0,W=u.length;z<W;z++){const Z=u[z];if(Z.cacheKey===M){I=Z,++I.usedTimes;break}}return I===void 0&&(I=new xv(n,M,y,s),u.push(I)),I}function A(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function T(y){c.remove(y)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:_,acquireProgram:x,releaseProgram:A,releaseShaderCache:T,programs:u,dispose:L}}function Av(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Tv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Fl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ol(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h,f,p,g,v,m){let d=n[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},n[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=v,d.group=m),e++,d}function o(h,f,p,g,v,m){const d=a(h,f,p,g,v,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function c(h,f,p,g,v,m){const d=a(h,f,p,g,v,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function l(h,f){t.length>1&&t.sort(h||Tv),i.length>1&&i.sort(f||Fl),r.length>1&&r.sort(f||Fl)}function u(){for(let h=e,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function Rv(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Ol,n.set(i,[a])):r>=s.length?(a=new Ol,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function wv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new Ze};break;case"SpotLight":t={position:new K,direction:new K,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new K,halfWidth:new K,halfHeight:new K};break}return n[e.id]=t,t}}}function Cv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Pv=0;function Iv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Lv(n){const e=new wv,t=Cv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new K);const r=new K,s=new ct,a=new ct;function o(l){let u=0,h=0,f=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let p=0,g=0,v=0,m=0,d=0,E=0,S=0,_=0,x=0,A=0,T=0;l.sort(Iv);for(let y=0,M=l.length;y<M;y++){const I=l[y],z=I.color,W=I.intensity,Z=I.distance,U=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=z.r*W,h+=z.g*W,f+=z.b*W;else if(I.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(I.sh.coefficients[q],W);T++}else if(I.isDirectionalLight){const q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const te=I.shadow,O=t.get(I);O.shadowIntensity=te.intensity,O.shadowBias=te.bias,O.shadowNormalBias=te.normalBias,O.shadowRadius=te.radius,O.shadowMapSize=te.mapSize,i.directionalShadow[p]=O,i.directionalShadowMap[p]=U,i.directionalShadowMatrix[p]=I.shadow.matrix,E++}i.directional[p]=q,p++}else if(I.isSpotLight){const q=e.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(z).multiplyScalar(W),q.distance=Z,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,i.spot[v]=q;const te=I.shadow;if(I.map&&(i.spotLightMap[x]=I.map,x++,te.updateMatrices(I),I.castShadow&&A++),i.spotLightMatrix[v]=te.matrix,I.castShadow){const O=t.get(I);O.shadowIntensity=te.intensity,O.shadowBias=te.bias,O.shadowNormalBias=te.normalBias,O.shadowRadius=te.radius,O.shadowMapSize=te.mapSize,i.spotShadow[v]=O,i.spotShadowMap[v]=U,_++}v++}else if(I.isRectAreaLight){const q=e.get(I);q.color.copy(z).multiplyScalar(W),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=q,m++}else if(I.isPointLight){const q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){const te=I.shadow,O=t.get(I);O.shadowIntensity=te.intensity,O.shadowBias=te.bias,O.shadowNormalBias=te.normalBias,O.shadowRadius=te.radius,O.shadowMapSize=te.mapSize,O.shadowCameraNear=te.camera.near,O.shadowCameraFar=te.camera.far,i.pointShadow[g]=O,i.pointShadowMap[g]=U,i.pointShadowMatrix[g]=I.shadow.matrix,S++}i.point[g]=q,g++}else if(I.isHemisphereLight){const q=e.get(I);q.skyColor.copy(I.color).multiplyScalar(W),q.groundColor.copy(I.groundColor).multiplyScalar(W),i.hemi[d]=q,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const L=i.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==m||L.hemiLength!==d||L.numDirectionalShadows!==E||L.numPointShadows!==S||L.numSpotShadows!==_||L.numSpotMaps!==x||L.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=_+x-A,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,L.directionalLength=p,L.pointLength=g,L.spotLength=v,L.rectAreaLength=m,L.hemiLength=d,L.numDirectionalShadows=E,L.numPointShadows=S,L.numSpotShadows=_,L.numSpotMaps=x,L.numLightProbes=T,i.version=Pv++)}function c(l,u){let h=0,f=0,p=0,g=0,v=0;const m=u.matrixWorldInverse;for(let d=0,E=l.length;d<E;d++){const S=l[d];if(S.isDirectionalLight){const _=i.directional[h];_.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),h++}else if(S.isSpotLight){const _=i.spot[p];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),a.identity(),s.copy(S.matrixWorld),s.premultiply(m),a.extractRotation(s),_.halfWidth.set(S.width*.5,0,0),_.halfHeight.set(0,S.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const _=i.point[f];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const _=i.hemi[v];_.direction.setFromMatrixPosition(S.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:i}}function Bl(n){const e=new Lv(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Dv(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Bl(n),e.set(r,[o])):s>=a.length?(o=new Bl(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Nv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Uv=`uniform sampler2D shadow_pass;
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
}`;function Fv(n,e,t){let i=new dc;const r=new pe,s=new pe,a=new dt,o=new Qd({depthPacking:_f}),c=new ep,l={},u=t.maxTextureSize,h={[On]:Lt,[Lt]:On,[yt]:yt},f=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:Nv,fragmentShader:Uv}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ut;g.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new It(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yu;let d=this.type;this.render=function(A,T,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const y=n.getRenderTarget(),M=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Un),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const W=d!==bn&&this.type===bn,Z=d===bn&&this.type!==bn;for(let U=0,q=A.length;U<q;U++){const te=A[U],O=te.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const fe=O.getFrameExtents();if(r.multiply(fe),s.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/fe.x),r.x=s.x*fe.x,O.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/fe.y),r.y=s.y*fe.y,O.mapSize.y=s.y)),O.map===null||W===!0||Z===!0){const Ee=this.type!==bn?{minFilter:rn,magFilter:rn}:{};O.map!==null&&O.map.dispose(),O.map=new ci(r.x,r.y,Ee),O.map.texture.name=te.name+".shadowMap",O.camera.updateProjectionMatrix()}n.setRenderTarget(O.map),n.clear();const ge=O.getViewportCount();for(let Ee=0;Ee<ge;Ee++){const Ne=O.getViewport(Ee);a.set(s.x*Ne.x,s.y*Ne.y,s.x*Ne.z,s.y*Ne.w),z.viewport(a),O.updateMatrices(te,Ee),i=O.getFrustum(),_(T,L,O.camera,te,this.type)}O.isPointLightShadow!==!0&&this.type===bn&&E(O,L),O.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(y,M,I)};function E(A,T){const L=e.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ci(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(T,null,L,f,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(T,null,L,p,v,null)}function S(A,T,L,y){let M=null;const I=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)M=I;else if(M=L.isPointLight===!0?c:o,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const z=M.uuid,W=T.uuid;let Z=l[z];Z===void 0&&(Z={},l[z]=Z);let U=Z[W];U===void 0&&(U=M.clone(),Z[W]=U,T.addEventListener("dispose",x)),M=U}if(M.visible=T.visible,M.wireframe=T.wireframe,y===bn?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:h[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=n.properties.get(M);z.light=L}return M}function _(A,T,L,y,M){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===bn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const W=e.update(A),Z=A.material;if(Array.isArray(Z)){const U=W.groups;for(let q=0,te=U.length;q<te;q++){const O=U[q],fe=Z[O.materialIndex];if(fe&&fe.visible){const ge=S(A,fe,y,M);A.onBeforeShadow(n,A,T,L,W,ge,O),n.renderBufferDirect(L,null,W,ge,A,O),A.onAfterShadow(n,A,T,L,W,ge,O)}}}else if(Z.visible){const U=S(A,Z,y,M);A.onBeforeShadow(n,A,T,L,W,U,null),n.renderBufferDirect(L,null,W,U,A,null),A.onAfterShadow(n,A,T,L,W,U,null)}}const z=A.children;for(let W=0,Z=z.length;W<Z;W++)_(z[W],T,L,y,M)}function x(A){A.target.removeEventListener("dispose",x);for(const L in l){const y=l[L],M=A.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const Ov={[Ka]:Za,[$a]:Qa,[Ja]:eo,[Vi]:ja,[Za]:Ka,[Qa]:$a,[eo]:Ja,[ja]:Vi};function Bv(n,e){function t(){let V=!1;const xe=new dt;let Te=null;const Pe=new dt(0,0,0,0);return{setMask:function(_e){Te!==_e&&!V&&(n.colorMask(_e,_e,_e,_e),Te=_e)},setLocked:function(_e){V=_e},setClear:function(_e,ue,De,ke,$e){$e===!0&&(_e*=ke,ue*=ke,De*=ke),xe.set(_e,ue,De,ke),Pe.equals(xe)===!1&&(n.clearColor(_e,ue,De,ke),Pe.copy(xe))},reset:function(){V=!1,Te=null,Pe.set(-1,0,0,0)}}}function i(){let V=!1,xe=!1,Te=null,Pe=null,_e=null;return{setReversed:function(ue){if(xe!==ue){const De=e.get("EXT_clip_control");ue?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),xe=ue;const ke=_e;_e=null,this.setClear(ke)}},getReversed:function(){return xe},setTest:function(ue){ue?R(n.DEPTH_TEST):j(n.DEPTH_TEST)},setMask:function(ue){Te!==ue&&!V&&(n.depthMask(ue),Te=ue)},setFunc:function(ue){if(xe&&(ue=Ov[ue]),Pe!==ue){switch(ue){case Ka:n.depthFunc(n.NEVER);break;case Za:n.depthFunc(n.ALWAYS);break;case $a:n.depthFunc(n.LESS);break;case Vi:n.depthFunc(n.LEQUAL);break;case Ja:n.depthFunc(n.EQUAL);break;case ja:n.depthFunc(n.GEQUAL);break;case Qa:n.depthFunc(n.GREATER);break;case eo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Pe=ue}},setLocked:function(ue){V=ue},setClear:function(ue){_e!==ue&&(xe&&(ue=1-ue),n.clearDepth(ue),_e=ue)},reset:function(){V=!1,Te=null,Pe=null,_e=null,xe=!1}}}function r(){let V=!1,xe=null,Te=null,Pe=null,_e=null,ue=null,De=null,ke=null,$e=null;return{setTest:function(Je){V||(Je?R(n.STENCIL_TEST):j(n.STENCIL_TEST))},setMask:function(Je){xe!==Je&&!V&&(n.stencilMask(Je),xe=Je)},setFunc:function(Je,Ht,sn){(Te!==Je||Pe!==Ht||_e!==sn)&&(n.stencilFunc(Je,Ht,sn),Te=Je,Pe=Ht,_e=sn)},setOp:function(Je,Ht,sn){(ue!==Je||De!==Ht||ke!==sn)&&(n.stencilOp(Je,Ht,sn),ue=Je,De=Ht,ke=sn)},setLocked:function(Je){V=Je},setClear:function(Je){$e!==Je&&(n.clearStencil(Je),$e=Je)},reset:function(){V=!1,xe=null,Te=null,Pe=null,_e=null,ue=null,De=null,ke=null,$e=null}}}const s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,E=null,S=null,_=null,x=null,A=null,T=new Ze(0,0,0),L=0,y=!1,M=null,I=null,z=null,W=null,Z=null;const U=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,te=0;const O=n.getParameter(n.VERSION);O.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(O)[1]),q=te>=1):O.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),q=te>=2);let fe=null,ge={};const Ee=n.getParameter(n.SCISSOR_BOX),Ne=n.getParameter(n.VIEWPORT),Fe=new dt().fromArray(Ee),Y=new dt().fromArray(Ne);function G(V,xe,Te,Pe){const _e=new Uint8Array(4),ue=n.createTexture();n.bindTexture(V,ue),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let De=0;De<Te;De++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(xe,0,n.RGBA,1,1,Pe,0,n.RGBA,n.UNSIGNED_BYTE,_e):n.texImage2D(xe+De,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_e);return ue}const w={};w[n.TEXTURE_2D]=G(n.TEXTURE_2D,n.TEXTURE_2D,1),w[n.TEXTURE_CUBE_MAP]=G(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),w[n.TEXTURE_2D_ARRAY]=G(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),w[n.TEXTURE_3D]=G(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),R(n.DEPTH_TEST),a.setFunc(Vi),Q(!1),$(Ic),R(n.CULL_FACE),H(Un);function R(V){u[V]!==!0&&(n.enable(V),u[V]=!0)}function j(V){u[V]!==!1&&(n.disable(V),u[V]=!1)}function re(V,xe){return h[V]!==xe?(n.bindFramebuffer(V,xe),h[V]=xe,V===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=xe),V===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=xe),!0):!1}function X(V,xe){let Te=p,Pe=!1;if(V){Te=f.get(xe),Te===void 0&&(Te=[],f.set(xe,Te));const _e=V.textures;if(Te.length!==_e.length||Te[0]!==n.COLOR_ATTACHMENT0){for(let ue=0,De=_e.length;ue<De;ue++)Te[ue]=n.COLOR_ATTACHMENT0+ue;Te.length=_e.length,Pe=!0}}else Te[0]!==n.BACK&&(Te[0]=n.BACK,Pe=!0);Pe&&n.drawBuffers(Te)}function he(V){return g!==V?(n.useProgram(V),g=V,!0):!1}const Me={[Qn]:n.FUNC_ADD,[kh]:n.FUNC_SUBTRACT,[Wh]:n.FUNC_REVERSE_SUBTRACT};Me[Xh]=n.MIN,Me[qh]=n.MAX;const D={[Yh]:n.ZERO,[Kh]:n.ONE,[Zh]:n.SRC_COLOR,[qa]:n.SRC_ALPHA,[tf]:n.SRC_ALPHA_SATURATE,[Qh]:n.DST_COLOR,[Jh]:n.DST_ALPHA,[$h]:n.ONE_MINUS_SRC_COLOR,[Ya]:n.ONE_MINUS_SRC_ALPHA,[ef]:n.ONE_MINUS_DST_COLOR,[jh]:n.ONE_MINUS_DST_ALPHA,[nf]:n.CONSTANT_COLOR,[rf]:n.ONE_MINUS_CONSTANT_COLOR,[sf]:n.CONSTANT_ALPHA,[af]:n.ONE_MINUS_CONSTANT_ALPHA};function H(V,xe,Te,Pe,_e,ue,De,ke,$e,Je){if(V===Un){v===!0&&(j(n.BLEND),v=!1);return}if(v===!1&&(R(n.BLEND),v=!0),V!==Vh){if(V!==m||Je!==y){if((d!==Qn||_!==Qn)&&(n.blendEquation(n.FUNC_ADD),d=Qn,_=Qn),Je)switch(V){case Bi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Lc:n.blendFunc(n.ONE,n.ONE);break;case Dc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Bi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Lc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Dc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}E=null,S=null,x=null,A=null,T.set(0,0,0),L=0,m=V,y=Je}return}_e=_e||xe,ue=ue||Te,De=De||Pe,(xe!==d||_e!==_)&&(n.blendEquationSeparate(Me[xe],Me[_e]),d=xe,_=_e),(Te!==E||Pe!==S||ue!==x||De!==A)&&(n.blendFuncSeparate(D[Te],D[Pe],D[ue],D[De]),E=Te,S=Pe,x=ue,A=De),(ke.equals(T)===!1||$e!==L)&&(n.blendColor(ke.r,ke.g,ke.b,$e),T.copy(ke),L=$e),m=V,y=!1}function k(V,xe){V.side===yt?j(n.CULL_FACE):R(n.CULL_FACE);let Te=V.side===Lt;xe&&(Te=!Te),Q(Te),V.blending===Bi&&V.transparent===!1?H(Un):H(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),s.setMask(V.colorWrite);const Pe=V.stencilWrite;o.setTest(Pe),Pe&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),P(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?R(n.SAMPLE_ALPHA_TO_COVERAGE):j(n.SAMPLE_ALPHA_TO_COVERAGE)}function Q(V){M!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),M=V)}function $(V){V!==Gh?(R(n.CULL_FACE),V!==I&&(V===Ic?n.cullFace(n.BACK):V===zh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):j(n.CULL_FACE),I=V}function F(V){V!==z&&(q&&n.lineWidth(V),z=V)}function P(V,xe,Te){V?(R(n.POLYGON_OFFSET_FILL),(W!==xe||Z!==Te)&&(n.polygonOffset(xe,Te),W=xe,Z=Te)):j(n.POLYGON_OFFSET_FILL)}function ae(V){V?R(n.SCISSOR_TEST):j(n.SCISSOR_TEST)}function Ae(V){V===void 0&&(V=n.TEXTURE0+U-1),fe!==V&&(n.activeTexture(V),fe=V)}function Oe(V,xe,Te){Te===void 0&&(fe===null?Te=n.TEXTURE0+U-1:Te=fe);let Pe=ge[Te];Pe===void 0&&(Pe={type:void 0,texture:void 0},ge[Te]=Pe),(Pe.type!==V||Pe.texture!==xe)&&(fe!==Te&&(n.activeTexture(Te),fe=Te),n.bindTexture(V,xe||w[V]),Pe.type=V,Pe.texture=xe)}function N(){const V=ge[fe];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function b(){try{n.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function J(){try{n.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function oe(){try{n.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function me(){try{n.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function B(){try{n.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function se(){try{n.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ie(){try{n.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ve(){try{n.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Se(){try{n.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function de(){try{n.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ye(V){Fe.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),Fe.copy(V))}function we(V){Y.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),Y.copy(V))}function Le(V,xe){let Te=l.get(xe);Te===void 0&&(Te=new WeakMap,l.set(xe,Te));let Pe=Te.get(V);Pe===void 0&&(Pe=n.getUniformBlockIndex(xe,V.name),Te.set(V,Pe))}function Re(V,xe){const Pe=l.get(xe).get(V);c.get(xe)!==Pe&&(n.uniformBlockBinding(xe,Pe,V.__bindingPointIndex),c.set(xe,Pe))}function ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},fe=null,ge={},h={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,E=null,S=null,_=null,x=null,A=null,T=new Ze(0,0,0),L=0,y=!1,M=null,I=null,z=null,W=null,Z=null,Fe.set(0,0,n.canvas.width,n.canvas.height),Y.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:R,disable:j,bindFramebuffer:re,drawBuffers:X,useProgram:he,setBlending:H,setMaterial:k,setFlipSided:Q,setCullFace:$,setLineWidth:F,setPolygonOffset:P,setScissorTest:ae,activeTexture:Ae,bindTexture:Oe,unbindTexture:N,compressedTexImage2D:b,compressedTexImage3D:J,texImage2D:Se,texImage3D:de,updateUBOMapping:Le,uniformBlockBinding:Re,texStorage2D:ie,texStorage3D:ve,texSubImage2D:oe,texSubImage3D:me,compressedTexSubImage2D:B,compressedTexSubImage3D:se,scissor:ye,viewport:we,reset:ze}}function Gv(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new pe,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(N,b){return p?new OffscreenCanvas(N,b):Us("canvas")}function v(N,b,J){let oe=1;const me=Oe(N);if((me.width>J||me.height>J)&&(oe=J/Math.max(me.width,me.height)),oe<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const B=Math.floor(oe*me.width),se=Math.floor(oe*me.height);h===void 0&&(h=g(B,se));const ie=b?g(B,se):h;return ie.width=B,ie.height=se,ie.getContext("2d").drawImage(N,0,0,B,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+B+"x"+se+")."),ie}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),N;return N}function m(N){return N.generateMipmaps}function d(N){n.generateMipmap(N)}function E(N){return N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?n.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(N,b,J,oe,me=!1){if(N!==null){if(n[N]!==void 0)return n[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let B=b;if(b===n.RED&&(J===n.FLOAT&&(B=n.R32F),J===n.HALF_FLOAT&&(B=n.R16F),J===n.UNSIGNED_BYTE&&(B=n.R8)),b===n.RED_INTEGER&&(J===n.UNSIGNED_BYTE&&(B=n.R8UI),J===n.UNSIGNED_SHORT&&(B=n.R16UI),J===n.UNSIGNED_INT&&(B=n.R32UI),J===n.BYTE&&(B=n.R8I),J===n.SHORT&&(B=n.R16I),J===n.INT&&(B=n.R32I)),b===n.RG&&(J===n.FLOAT&&(B=n.RG32F),J===n.HALF_FLOAT&&(B=n.RG16F),J===n.UNSIGNED_BYTE&&(B=n.RG8)),b===n.RG_INTEGER&&(J===n.UNSIGNED_BYTE&&(B=n.RG8UI),J===n.UNSIGNED_SHORT&&(B=n.RG16UI),J===n.UNSIGNED_INT&&(B=n.RG32UI),J===n.BYTE&&(B=n.RG8I),J===n.SHORT&&(B=n.RG16I),J===n.INT&&(B=n.RG32I)),b===n.RGB_INTEGER&&(J===n.UNSIGNED_BYTE&&(B=n.RGB8UI),J===n.UNSIGNED_SHORT&&(B=n.RGB16UI),J===n.UNSIGNED_INT&&(B=n.RGB32UI),J===n.BYTE&&(B=n.RGB8I),J===n.SHORT&&(B=n.RGB16I),J===n.INT&&(B=n.RGB32I)),b===n.RGBA_INTEGER&&(J===n.UNSIGNED_BYTE&&(B=n.RGBA8UI),J===n.UNSIGNED_SHORT&&(B=n.RGBA16UI),J===n.UNSIGNED_INT&&(B=n.RGBA32UI),J===n.BYTE&&(B=n.RGBA8I),J===n.SHORT&&(B=n.RGBA16I),J===n.INT&&(B=n.RGBA32I)),b===n.RGB&&(J===n.UNSIGNED_INT_5_9_9_9_REV&&(B=n.RGB9_E5),J===n.UNSIGNED_INT_10F_11F_11F_REV&&(B=n.R11F_G11F_B10F)),b===n.RGBA){const se=me?Ds:et.getTransfer(oe);J===n.FLOAT&&(B=n.RGBA32F),J===n.HALF_FLOAT&&(B=n.RGBA16F),J===n.UNSIGNED_BYTE&&(B=se===nt?n.SRGB8_ALPHA8:n.RGBA8),J===n.UNSIGNED_SHORT_4_4_4_4&&(B=n.RGBA4),J===n.UNSIGNED_SHORT_5_5_5_1&&(B=n.RGB5_A1)}return(B===n.R16F||B===n.R32F||B===n.RG16F||B===n.RG32F||B===n.RGBA16F||B===n.RGBA32F)&&e.get("EXT_color_buffer_float"),B}function _(N,b){let J;return N?b===null||b===oi||b===Mr?J=n.DEPTH24_STENCIL8:b===Tn?J=n.DEPTH32F_STENCIL8:b===yr&&(J=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===oi||b===Mr?J=n.DEPTH_COMPONENT24:b===Tn?J=n.DEPTH_COMPONENT32F:b===yr&&(J=n.DEPTH_COMPONENT16),J}function x(N,b){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==rn&&N.minFilter!==un?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function A(N){const b=N.target;b.removeEventListener("dispose",A),L(b),b.isVideoTexture&&u.delete(b)}function T(N){const b=N.target;b.removeEventListener("dispose",T),M(b)}function L(N){const b=i.get(N);if(b.__webglInit===void 0)return;const J=N.source,oe=f.get(J);if(oe){const me=oe[b.__cacheKey];me.usedTimes--,me.usedTimes===0&&y(N),Object.keys(oe).length===0&&f.delete(J)}i.remove(N)}function y(N){const b=i.get(N);n.deleteTexture(b.__webglTexture);const J=N.source,oe=f.get(J);delete oe[b.__cacheKey],a.memory.textures--}function M(N){const b=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(b.__webglFramebuffer[oe]))for(let me=0;me<b.__webglFramebuffer[oe].length;me++)n.deleteFramebuffer(b.__webglFramebuffer[oe][me]);else n.deleteFramebuffer(b.__webglFramebuffer[oe]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[oe])}else{if(Array.isArray(b.__webglFramebuffer))for(let oe=0;oe<b.__webglFramebuffer.length;oe++)n.deleteFramebuffer(b.__webglFramebuffer[oe]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let oe=0;oe<b.__webglColorRenderbuffer.length;oe++)b.__webglColorRenderbuffer[oe]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[oe]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const J=N.textures;for(let oe=0,me=J.length;oe<me;oe++){const B=i.get(J[oe]);B.__webglTexture&&(n.deleteTexture(B.__webglTexture),a.memory.textures--),i.remove(J[oe])}i.remove(N)}let I=0;function z(){I=0}function W(){const N=I;return N>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+r.maxTextures),I+=1,N}function Z(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function U(N,b){const J=i.get(N);if(N.isVideoTexture&&ae(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&J.__version!==N.version){const oe=N.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{w(J,N,b);return}}else N.isExternalTexture&&(J.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,J.__webglTexture,n.TEXTURE0+b)}function q(N,b){const J=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&J.__version!==N.version){w(J,N,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,J.__webglTexture,n.TEXTURE0+b)}function te(N,b){const J=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&J.__version!==N.version){w(J,N,b);return}t.bindTexture(n.TEXTURE_3D,J.__webglTexture,n.TEXTURE0+b)}function O(N,b){const J=i.get(N);if(N.version>0&&J.__version!==N.version){R(J,N,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture,n.TEXTURE0+b)}const fe={[io]:n.REPEAT,[ii]:n.CLAMP_TO_EDGE,[ro]:n.MIRRORED_REPEAT},ge={[rn]:n.NEAREST,[gf]:n.NEAREST_MIPMAP_NEAREST,[Hr]:n.NEAREST_MIPMAP_LINEAR,[un]:n.LINEAR,[ea]:n.LINEAR_MIPMAP_NEAREST,[ri]:n.LINEAR_MIPMAP_LINEAR},Ee={[xf]:n.NEVER,[Tf]:n.ALWAYS,[yf]:n.LESS,[Du]:n.LEQUAL,[Mf]:n.EQUAL,[Af]:n.GEQUAL,[Ef]:n.GREATER,[bf]:n.NOTEQUAL};function Ne(N,b){if(b.type===Tn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===un||b.magFilter===ea||b.magFilter===Hr||b.magFilter===ri||b.minFilter===un||b.minFilter===ea||b.minFilter===Hr||b.minFilter===ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(N,n.TEXTURE_WRAP_S,fe[b.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,fe[b.wrapT]),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,fe[b.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,ge[b.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,ge[b.minFilter]),b.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,Ee[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===rn||b.minFilter!==Hr&&b.minFilter!==ri||b.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");n.texParameterf(N,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Fe(N,b){let J=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",A));const oe=b.source;let me=f.get(oe);me===void 0&&(me={},f.set(oe,me));const B=Z(b);if(B!==N.__cacheKey){me[B]===void 0&&(me[B]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,J=!0),me[B].usedTimes++;const se=me[N.__cacheKey];se!==void 0&&(me[N.__cacheKey].usedTimes--,se.usedTimes===0&&y(b)),N.__cacheKey=B,N.__webglTexture=me[B].texture}return J}function Y(N,b,J){return Math.floor(Math.floor(N/J)/b)}function G(N,b,J,oe){const B=N.updateRanges;if(B.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,J,oe,b.data);else{B.sort((de,ye)=>de.start-ye.start);let se=0;for(let de=1;de<B.length;de++){const ye=B[se],we=B[de],Le=ye.start+ye.count,Re=Y(we.start,b.width,4),ze=Y(ye.start,b.width,4);we.start<=Le+1&&Re===ze&&Y(we.start+we.count-1,b.width,4)===Re?ye.count=Math.max(ye.count,we.start+we.count-ye.start):(++se,B[se]=we)}B.length=se+1;const ie=n.getParameter(n.UNPACK_ROW_LENGTH),ve=n.getParameter(n.UNPACK_SKIP_PIXELS),Se=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let de=0,ye=B.length;de<ye;de++){const we=B[de],Le=Math.floor(we.start/4),Re=Math.ceil(we.count/4),ze=Le%b.width,V=Math.floor(Le/b.width),xe=Re,Te=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ze),n.pixelStorei(n.UNPACK_SKIP_ROWS,V),t.texSubImage2D(n.TEXTURE_2D,0,ze,V,xe,Te,J,oe,b.data)}N.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ie),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ve),n.pixelStorei(n.UNPACK_SKIP_ROWS,Se)}}function w(N,b,J){let oe=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(oe=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(oe=n.TEXTURE_3D);const me=Fe(N,b),B=b.source;t.bindTexture(oe,N.__webglTexture,n.TEXTURE0+J);const se=i.get(B);if(B.version!==se.__version||me===!0){t.activeTexture(n.TEXTURE0+J);const ie=et.getPrimaries(et.workingColorSpace),ve=b.colorSpace===Nn?null:et.getPrimaries(b.colorSpace),Se=b.colorSpace===Nn||ie===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let de=v(b.image,!1,r.maxTextureSize);de=Ae(b,de);const ye=s.convert(b.format,b.colorSpace),we=s.convert(b.type);let Le=S(b.internalFormat,ye,we,b.colorSpace,b.isVideoTexture);Ne(oe,b);let Re;const ze=b.mipmaps,V=b.isVideoTexture!==!0,xe=se.__version===void 0||me===!0,Te=B.dataReady,Pe=x(b,de);if(b.isDepthTexture)Le=_(b.format===br,b.type),xe&&(V?t.texStorage2D(n.TEXTURE_2D,1,Le,de.width,de.height):t.texImage2D(n.TEXTURE_2D,0,Le,de.width,de.height,0,ye,we,null));else if(b.isDataTexture)if(ze.length>0){V&&xe&&t.texStorage2D(n.TEXTURE_2D,Pe,Le,ze[0].width,ze[0].height);for(let _e=0,ue=ze.length;_e<ue;_e++)Re=ze[_e],V?Te&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Re.width,Re.height,ye,we,Re.data):t.texImage2D(n.TEXTURE_2D,_e,Le,Re.width,Re.height,0,ye,we,Re.data);b.generateMipmaps=!1}else V?(xe&&t.texStorage2D(n.TEXTURE_2D,Pe,Le,de.width,de.height),Te&&G(b,de,ye,we)):t.texImage2D(n.TEXTURE_2D,0,Le,de.width,de.height,0,ye,we,de.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){V&&xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,Le,ze[0].width,ze[0].height,de.depth);for(let _e=0,ue=ze.length;_e<ue;_e++)if(Re=ze[_e],b.format!==tn)if(ye!==null)if(V){if(Te)if(b.layerUpdates.size>0){const De=pl(Re.width,Re.height,b.format,b.type);for(const ke of b.layerUpdates){const $e=Re.data.subarray(ke*De/Re.data.BYTES_PER_ELEMENT,(ke+1)*De/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,ke,Re.width,Re.height,1,ye,$e)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,Re.width,Re.height,de.depth,ye,Re.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,_e,Le,Re.width,Re.height,de.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?Te&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,Re.width,Re.height,de.depth,ye,we,Re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,_e,Le,Re.width,Re.height,de.depth,0,ye,we,Re.data)}else{V&&xe&&t.texStorage2D(n.TEXTURE_2D,Pe,Le,ze[0].width,ze[0].height);for(let _e=0,ue=ze.length;_e<ue;_e++)Re=ze[_e],b.format!==tn?ye!==null?V?Te&&t.compressedTexSubImage2D(n.TEXTURE_2D,_e,0,0,Re.width,Re.height,ye,Re.data):t.compressedTexImage2D(n.TEXTURE_2D,_e,Le,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?Te&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Re.width,Re.height,ye,we,Re.data):t.texImage2D(n.TEXTURE_2D,_e,Le,Re.width,Re.height,0,ye,we,Re.data)}else if(b.isDataArrayTexture)if(V){if(xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,Le,de.width,de.height,de.depth),Te)if(b.layerUpdates.size>0){const _e=pl(de.width,de.height,b.format,b.type);for(const ue of b.layerUpdates){const De=de.data.subarray(ue*_e/de.data.BYTES_PER_ELEMENT,(ue+1)*_e/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ue,de.width,de.height,1,ye,we,De)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,ye,we,de.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,de.width,de.height,de.depth,0,ye,we,de.data);else if(b.isData3DTexture)V?(xe&&t.texStorage3D(n.TEXTURE_3D,Pe,Le,de.width,de.height,de.depth),Te&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,ye,we,de.data)):t.texImage3D(n.TEXTURE_3D,0,Le,de.width,de.height,de.depth,0,ye,we,de.data);else if(b.isFramebufferTexture){if(xe)if(V)t.texStorage2D(n.TEXTURE_2D,Pe,Le,de.width,de.height);else{let _e=de.width,ue=de.height;for(let De=0;De<Pe;De++)t.texImage2D(n.TEXTURE_2D,De,Le,_e,ue,0,ye,we,null),_e>>=1,ue>>=1}}else if(ze.length>0){if(V&&xe){const _e=Oe(ze[0]);t.texStorage2D(n.TEXTURE_2D,Pe,Le,_e.width,_e.height)}for(let _e=0,ue=ze.length;_e<ue;_e++)Re=ze[_e],V?Te&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,ye,we,Re):t.texImage2D(n.TEXTURE_2D,_e,Le,ye,we,Re);b.generateMipmaps=!1}else if(V){if(xe){const _e=Oe(de);t.texStorage2D(n.TEXTURE_2D,Pe,Le,_e.width,_e.height)}Te&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,we,de)}else t.texImage2D(n.TEXTURE_2D,0,Le,ye,we,de);m(b)&&d(oe),se.__version=B.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function R(N,b,J){if(b.image.length!==6)return;const oe=Fe(N,b),me=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+J);const B=i.get(me);if(me.version!==B.__version||oe===!0){t.activeTexture(n.TEXTURE0+J);const se=et.getPrimaries(et.workingColorSpace),ie=b.colorSpace===Nn?null:et.getPrimaries(b.colorSpace),ve=b.colorSpace===Nn||se===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Se=b.isCompressedTexture||b.image[0].isCompressedTexture,de=b.image[0]&&b.image[0].isDataTexture,ye=[];for(let ue=0;ue<6;ue++)!Se&&!de?ye[ue]=v(b.image[ue],!0,r.maxCubemapSize):ye[ue]=de?b.image[ue].image:b.image[ue],ye[ue]=Ae(b,ye[ue]);const we=ye[0],Le=s.convert(b.format,b.colorSpace),Re=s.convert(b.type),ze=S(b.internalFormat,Le,Re,b.colorSpace),V=b.isVideoTexture!==!0,xe=B.__version===void 0||oe===!0,Te=me.dataReady;let Pe=x(b,we);Ne(n.TEXTURE_CUBE_MAP,b);let _e;if(Se){V&&xe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,ze,we.width,we.height);for(let ue=0;ue<6;ue++){_e=ye[ue].mipmaps;for(let De=0;De<_e.length;De++){const ke=_e[De];b.format!==tn?Le!==null?V?Te&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De,0,0,ke.width,ke.height,Le,ke.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De,ze,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De,0,0,ke.width,ke.height,Le,Re,ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De,ze,ke.width,ke.height,0,Le,Re,ke.data)}}}else{if(_e=b.mipmaps,V&&xe){_e.length>0&&Pe++;const ue=Oe(ye[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,ze,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(de){V?Te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,ye[ue].width,ye[ue].height,Le,Re,ye[ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,ze,ye[ue].width,ye[ue].height,0,Le,Re,ye[ue].data);for(let De=0;De<_e.length;De++){const $e=_e[De].image[ue].image;V?Te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De+1,0,0,$e.width,$e.height,Le,Re,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De+1,ze,$e.width,$e.height,0,Le,Re,$e.data)}}else{V?Te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Le,Re,ye[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,ze,Le,Re,ye[ue]);for(let De=0;De<_e.length;De++){const ke=_e[De];V?Te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De+1,0,0,Le,Re,ke.image[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De+1,ze,Le,Re,ke.image[ue])}}}m(b)&&d(n.TEXTURE_CUBE_MAP),B.__version=me.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function j(N,b,J,oe,me,B){const se=s.convert(J.format,J.colorSpace),ie=s.convert(J.type),ve=S(J.internalFormat,se,ie,J.colorSpace),Se=i.get(b),de=i.get(J);if(de.__renderTarget=b,!Se.__hasExternalTextures){const ye=Math.max(1,b.width>>B),we=Math.max(1,b.height>>B);me===n.TEXTURE_3D||me===n.TEXTURE_2D_ARRAY?t.texImage3D(me,B,ve,ye,we,b.depth,0,se,ie,null):t.texImage2D(me,B,ve,ye,we,0,se,ie,null)}t.bindFramebuffer(n.FRAMEBUFFER,N),P(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,me,de.__webglTexture,0,F(b)):(me===n.TEXTURE_2D||me>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,oe,me,de.__webglTexture,B),t.bindFramebuffer(n.FRAMEBUFFER,null)}function re(N,b,J){if(n.bindRenderbuffer(n.RENDERBUFFER,N),b.depthBuffer){const oe=b.depthTexture,me=oe&&oe.isDepthTexture?oe.type:null,B=_(b.stencilBuffer,me),se=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=F(b);P(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,B,b.width,b.height):J?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,B,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,B,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,N)}else{const oe=b.textures;for(let me=0;me<oe.length;me++){const B=oe[me],se=s.convert(B.format,B.colorSpace),ie=s.convert(B.type),ve=S(B.internalFormat,se,ie,B.colorSpace),Se=F(b);J&&P(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,ve,b.width,b.height):P(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Se,ve,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,ve,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function X(N,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const oe=i.get(b.depthTexture);oe.__renderTarget=b,(!oe.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),U(b.depthTexture,0);const me=oe.__webglTexture,B=F(b);if(b.depthTexture.format===Er)P(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,me,0,B):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,me,0);else if(b.depthTexture.format===br)P(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,me,0,B):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function he(N){const b=i.get(N),J=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const oe=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),oe){const me=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,oe.removeEventListener("dispose",me)};oe.addEventListener("dispose",me),b.__depthDisposeCallback=me}b.__boundDepthTexture=oe}if(N.depthTexture&&!b.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");const oe=N.texture.mipmaps;oe&&oe.length>0?X(b.__webglFramebuffer[0],N):X(b.__webglFramebuffer,N)}else if(J){b.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[oe]),b.__webglDepthbuffer[oe]===void 0)b.__webglDepthbuffer[oe]=n.createRenderbuffer(),re(b.__webglDepthbuffer[oe],N,!1);else{const me=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,B=b.__webglDepthbuffer[oe];n.bindRenderbuffer(n.RENDERBUFFER,B),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,B)}}else{const oe=N.texture.mipmaps;if(oe&&oe.length>0?t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),re(b.__webglDepthbuffer,N,!1);else{const me=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,B=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,B),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,B)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Me(N,b,J){const oe=i.get(N);b!==void 0&&j(oe.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),J!==void 0&&he(N)}function D(N){const b=N.texture,J=i.get(N),oe=i.get(b);N.addEventListener("dispose",T);const me=N.textures,B=N.isWebGLCubeRenderTarget===!0,se=me.length>1;if(se||(oe.__webglTexture===void 0&&(oe.__webglTexture=n.createTexture()),oe.__version=b.version,a.memory.textures++),B){J.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer[ie]=[];for(let ve=0;ve<b.mipmaps.length;ve++)J.__webglFramebuffer[ie][ve]=n.createFramebuffer()}else J.__webglFramebuffer[ie]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer=[];for(let ie=0;ie<b.mipmaps.length;ie++)J.__webglFramebuffer[ie]=n.createFramebuffer()}else J.__webglFramebuffer=n.createFramebuffer();if(se)for(let ie=0,ve=me.length;ie<ve;ie++){const Se=i.get(me[ie]);Se.__webglTexture===void 0&&(Se.__webglTexture=n.createTexture(),a.memory.textures++)}if(N.samples>0&&P(N)===!1){J.__webglMultisampledFramebuffer=n.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ie=0;ie<me.length;ie++){const ve=me[ie];J.__webglColorRenderbuffer[ie]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,J.__webglColorRenderbuffer[ie]);const Se=s.convert(ve.format,ve.colorSpace),de=s.convert(ve.type),ye=S(ve.internalFormat,Se,de,ve.colorSpace,N.isXRRenderTarget===!0),we=F(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,we,ye,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,J.__webglColorRenderbuffer[ie])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&(J.__webglDepthRenderbuffer=n.createRenderbuffer(),re(J.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(B){t.bindTexture(n.TEXTURE_CUBE_MAP,oe.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,b);for(let ie=0;ie<6;ie++)if(b.mipmaps&&b.mipmaps.length>0)for(let ve=0;ve<b.mipmaps.length;ve++)j(J.__webglFramebuffer[ie][ve],N,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ve);else j(J.__webglFramebuffer[ie],N,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);m(b)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let ie=0,ve=me.length;ie<ve;ie++){const Se=me[ie],de=i.get(Se);let ye=n.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ye=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ye,de.__webglTexture),Ne(ye,Se),j(J.__webglFramebuffer,N,Se,n.COLOR_ATTACHMENT0+ie,ye,0),m(Se)&&d(ye)}t.unbindTexture()}else{let ie=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ie=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ie,oe.__webglTexture),Ne(ie,b),b.mipmaps&&b.mipmaps.length>0)for(let ve=0;ve<b.mipmaps.length;ve++)j(J.__webglFramebuffer[ve],N,b,n.COLOR_ATTACHMENT0,ie,ve);else j(J.__webglFramebuffer,N,b,n.COLOR_ATTACHMENT0,ie,0);m(b)&&d(ie),t.unbindTexture()}N.depthBuffer&&he(N)}function H(N){const b=N.textures;for(let J=0,oe=b.length;J<oe;J++){const me=b[J];if(m(me)){const B=E(N),se=i.get(me).__webglTexture;t.bindTexture(B,se),d(B),t.unbindTexture()}}}const k=[],Q=[];function $(N){if(N.samples>0){if(P(N)===!1){const b=N.textures,J=N.width,oe=N.height;let me=n.COLOR_BUFFER_BIT;const B=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=i.get(N),ie=b.length>1;if(ie)for(let Se=0;Se<b.length;Se++)t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);const ve=N.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let Se=0;Se<b.length;Se++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(me|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(me|=n.STENCIL_BUFFER_BIT)),ie){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,se.__webglColorRenderbuffer[Se]);const de=i.get(b[Se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,de,0)}n.blitFramebuffer(0,0,J,oe,0,0,J,oe,me,n.NEAREST),c===!0&&(k.length=0,Q.length=0,k.push(n.COLOR_ATTACHMENT0+Se),N.depthBuffer&&N.resolveDepthBuffer===!1&&(k.push(B),Q.push(B),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Q)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,k))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ie)for(let Se=0;Se<b.length;Se++){t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,se.__webglColorRenderbuffer[Se]);const de=i.get(b[Se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,de,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&c){const b=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function F(N){return Math.min(r.maxSamples,N.samples)}function P(N){const b=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ae(N){const b=a.render.frame;u.get(N)!==b&&(u.set(N,b),N.update())}function Ae(N,b){const J=N.colorSpace,oe=N.format,me=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||J!==Xi&&J!==Nn&&(et.getTransfer(J)===nt?(oe!==tn||me!==dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),b}function Oe(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(l.width=N.naturalWidth||N.width,l.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(l.width=N.displayWidth,l.height=N.displayHeight):(l.width=N.width,l.height=N.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=z,this.setTexture2D=U,this.setTexture2DArray=q,this.setTexture3D=te,this.setTextureCube=O,this.rebindTextures=Me,this.setupRenderTarget=D,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=j,this.useMultisampledRTT=P}function zv(n,e){function t(i,r=Nn){let s;const a=et.getTransfer(r);if(i===dn)return n.UNSIGNED_BYTE;if(i===rc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===sc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Tu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ru)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===bu)return n.BYTE;if(i===Au)return n.SHORT;if(i===yr)return n.UNSIGNED_SHORT;if(i===ic)return n.INT;if(i===oi)return n.UNSIGNED_INT;if(i===Tn)return n.FLOAT;if(i===Nr)return n.HALF_FLOAT;if(i===wu)return n.ALPHA;if(i===Cu)return n.RGB;if(i===tn)return n.RGBA;if(i===Er)return n.DEPTH_COMPONENT;if(i===br)return n.DEPTH_STENCIL;if(i===Pu)return n.RED;if(i===ac)return n.RED_INTEGER;if(i===Iu)return n.RG;if(i===oc)return n.RG_INTEGER;if(i===cc)return n.RGBA_INTEGER;if(i===ys||i===Ms||i===Es||i===bs)if(a===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ys)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ms)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Es)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===bs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ys)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ms)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Es)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===bs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===so||i===ao||i===oo||i===co)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===so)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ao)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===oo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===co)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===lo||i===uo||i===ho)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===lo||i===uo)return a===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ho)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===fo||i===po||i===mo||i===go||i===vo||i===_o||i===So||i===xo||i===yo||i===Mo||i===Eo||i===bo||i===Ao||i===To)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===fo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===po)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===mo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===go)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===vo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_o)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===So)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===xo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===yo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Mo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Eo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ao)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===To)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ro||i===wo||i===Co)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ro)return a===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Co)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Po||i===Io||i===Lo||i===Do)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Po)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Io)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Lo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Do)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Mr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Hv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vv=`
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

}`;class kv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Wu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Bn({vertexShader:Hv,fragmentShader:Vv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new It(new Br(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wv extends $i{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,p=null,g=null;const v=typeof XRWebGLBinding<"u",m=new kv,d={},E=t.getContextAttributes();let S=null,_=null;const x=[],A=[],T=new pe;let L=null;const y=new Qt;y.viewport=new dt;const M=new Qt;M.viewport=new dt;const I=[y,M],z=new lp;let W=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(w){let R=x[w];return R===void 0&&(R=new ya,x[w]=R),R.getTargetRaySpace()},this.getControllerGrip=function(w){let R=x[w];return R===void 0&&(R=new ya,x[w]=R),R.getGripSpace()},this.getHand=function(w){let R=x[w];return R===void 0&&(R=new ya,x[w]=R),R.getHandSpace()};function U(w){const R=A.indexOf(w.inputSource);if(R===-1)return;const j=x[R];j!==void 0&&(j.update(w.inputSource,w.frame,l||a),j.dispatchEvent({type:w.type,data:w.inputSource}))}function q(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",te);for(let w=0;w<x.length;w++){const R=A[w];R!==null&&(A[w]=null,x[w].disconnect(R))}W=null,Z=null,m.reset();for(const w in d)delete d[w];e.setRenderTarget(S),p=null,f=null,h=null,r=null,_=null,G.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(w){s=w,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(w){o=w,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(w){l=w},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(w){if(r=w,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",q),r.addEventListener("inputsourceschange",te),E.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(T),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let j=null,re=null,X=null;E.depth&&(X=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=E.stencil?br:Er,re=E.stencil?Mr:oi);const he={colorFormat:t.RGBA8,depthFormat:X,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(he),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new ci(f.textureWidth,f.textureHeight,{format:tn,type:dn,depthTexture:new ku(f.textureWidth,f.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const j={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,j),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new ci(p.framebufferWidth,p.framebufferHeight,{format:tn,type:dn,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),G.setContext(r),G.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function te(w){for(let R=0;R<w.removed.length;R++){const j=w.removed[R],re=A.indexOf(j);re>=0&&(A[re]=null,x[re].disconnect(j))}for(let R=0;R<w.added.length;R++){const j=w.added[R];let re=A.indexOf(j);if(re===-1){for(let he=0;he<x.length;he++)if(he>=A.length){A.push(j),re=he;break}else if(A[he]===null){A[he]=j,re=he;break}if(re===-1)break}const X=x[re];X&&X.connect(j)}}const O=new K,fe=new K;function ge(w,R,j){O.setFromMatrixPosition(R.matrixWorld),fe.setFromMatrixPosition(j.matrixWorld);const re=O.distanceTo(fe),X=R.projectionMatrix.elements,he=j.projectionMatrix.elements,Me=X[14]/(X[10]-1),D=X[14]/(X[10]+1),H=(X[9]+1)/X[5],k=(X[9]-1)/X[5],Q=(X[8]-1)/X[0],$=(he[8]+1)/he[0],F=Me*Q,P=Me*$,ae=re/(-Q+$),Ae=ae*-Q;if(R.matrixWorld.decompose(w.position,w.quaternion,w.scale),w.translateX(Ae),w.translateZ(ae),w.matrixWorld.compose(w.position,w.quaternion,w.scale),w.matrixWorldInverse.copy(w.matrixWorld).invert(),X[10]===-1)w.projectionMatrix.copy(R.projectionMatrix),w.projectionMatrixInverse.copy(R.projectionMatrixInverse);else{const Oe=Me+ae,N=D+ae,b=F-Ae,J=P+(re-Ae),oe=H*D/N*Oe,me=k*D/N*Oe;w.projectionMatrix.makePerspective(b,J,oe,me,Oe,N),w.projectionMatrixInverse.copy(w.projectionMatrix).invert()}}function Ee(w,R){R===null?w.matrixWorld.copy(w.matrix):w.matrixWorld.multiplyMatrices(R.matrixWorld,w.matrix),w.matrixWorldInverse.copy(w.matrixWorld).invert()}this.updateCamera=function(w){if(r===null)return;let R=w.near,j=w.far;m.texture!==null&&(m.depthNear>0&&(R=m.depthNear),m.depthFar>0&&(j=m.depthFar)),z.near=M.near=y.near=R,z.far=M.far=y.far=j,(W!==z.near||Z!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),W=z.near,Z=z.far),z.layers.mask=w.layers.mask|6,y.layers.mask=z.layers.mask&3,M.layers.mask=z.layers.mask&5;const re=w.parent,X=z.cameras;Ee(z,re);for(let he=0;he<X.length;he++)Ee(X[he],re);X.length===2?ge(z,y,M):z.projectionMatrix.copy(y.projectionMatrix),Ne(w,z,re)};function Ne(w,R,j){j===null?w.matrix.copy(R.matrixWorld):(w.matrix.copy(j.matrixWorld),w.matrix.invert(),w.matrix.multiply(R.matrixWorld)),w.matrix.decompose(w.position,w.quaternion,w.scale),w.updateMatrixWorld(!0),w.projectionMatrix.copy(R.projectionMatrix),w.projectionMatrixInverse.copy(R.projectionMatrixInverse),w.isPerspectiveCamera&&(w.fov=Ar*2*Math.atan(1/w.projectionMatrix.elements[5]),w.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(w){c=w,f!==null&&(f.fixedFoveation=w),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=w)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(w){return d[w]};let Fe=null;function Y(w,R){if(u=R.getViewerPose(l||a),g=R,u!==null){const j=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let re=!1;j.length!==z.cameras.length&&(z.cameras.length=0,re=!0);for(let D=0;D<j.length;D++){const H=j[D];let k=null;if(p!==null)k=p.getViewport(H);else{const $=h.getViewSubImage(f,H);k=$.viewport,D===0&&(e.setRenderTargetTextures(_,$.colorTexture,$.depthStencilTexture),e.setRenderTarget(_))}let Q=I[D];Q===void 0&&(Q=new Qt,Q.layers.enable(D),Q.viewport=new dt,I[D]=Q),Q.matrix.fromArray(H.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(H.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(k.x,k.y,k.width,k.height),D===0&&(z.matrix.copy(Q.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),re===!0&&z.cameras.push(Q)}const X=r.enabledFeatures;if(X&&X.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){h=i.getBinding();const D=h.getDepthInformation(j[0]);D&&D.isValid&&D.texture&&m.init(D,r.renderState)}if(X&&X.includes("camera-access")&&v){e.state.unbindTexture(),h=i.getBinding();for(let D=0;D<j.length;D++){const H=j[D].camera;if(H){let k=d[H];k||(k=new Wu,d[H]=k);const Q=h.getCameraImage(H);k.sourceTexture=Q}}}}for(let j=0;j<x.length;j++){const re=A[j],X=x[j];re!==null&&X!==void 0&&X.update(re,R,l||a)}Fe&&Fe(w,R),R.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:R}),g=null}const G=new eh;G.setAnimationLoop(Y),this.setAnimationLoop=function(w){Fe=w},this.dispose=function(){}}}const Yn=new pn,Xv=new ct;function qv(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Gu(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,E,S,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,_)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),v(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,E,S):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Lt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Lt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const E=e.get(d),S=E.envMap,_=E.envMapRotation;S&&(m.envMap.value=S,Yn.copy(_),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),m.envMapRotation.value.setFromMatrix4(Xv.makeRotationFromEuler(Yn)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,E,S){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=S*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Lt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const E=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Yv(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,S){const _=S.program;i.uniformBlockBinding(E,_)}function l(E,S){let _=r[E.id];_===void 0&&(g(E),_=u(E),r[E.id]=_,E.addEventListener("dispose",m));const x=S.program;i.updateUBOMapping(E,x);const A=e.render.frame;s[E.id]!==A&&(f(E),s[E.id]=A)}function u(E){const S=h();E.__bindingPointIndex=S;const _=n.createBuffer(),x=E.__size,A=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,x,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,_),_}function h(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const S=r[E.id],_=E.uniforms,x=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let A=0,T=_.length;A<T;A++){const L=Array.isArray(_[A])?_[A]:[_[A]];for(let y=0,M=L.length;y<M;y++){const I=L[y];if(p(I,A,y,x)===!0){const z=I.__offset,W=Array.isArray(I.value)?I.value:[I.value];let Z=0;for(let U=0;U<W.length;U++){const q=W[U],te=v(q);typeof q=="number"||typeof q=="boolean"?(I.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,z+Z,I.__data)):q.isMatrix3?(I.__data[0]=q.elements[0],I.__data[1]=q.elements[1],I.__data[2]=q.elements[2],I.__data[3]=0,I.__data[4]=q.elements[3],I.__data[5]=q.elements[4],I.__data[6]=q.elements[5],I.__data[7]=0,I.__data[8]=q.elements[6],I.__data[9]=q.elements[7],I.__data[10]=q.elements[8],I.__data[11]=0):(q.toArray(I.__data,Z),Z+=te.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,S,_,x){const A=E.value,T=S+"_"+_;if(x[T]===void 0)return typeof A=="number"||typeof A=="boolean"?x[T]=A:x[T]=A.clone(),!0;{const L=x[T];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return x[T]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function g(E){const S=E.uniforms;let _=0;const x=16;for(let T=0,L=S.length;T<L;T++){const y=Array.isArray(S[T])?S[T]:[S[T]];for(let M=0,I=y.length;M<I;M++){const z=y[M],W=Array.isArray(z.value)?z.value:[z.value];for(let Z=0,U=W.length;Z<U;Z++){const q=W[Z],te=v(q),O=_%x,fe=O%te.boundary,ge=O+fe;_+=fe,ge!==0&&x-ge<te.storage&&(_+=x-ge),z.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=_,_+=te.storage}}}const A=_%x;return A>0&&(_+=x-A),E.__size=_,E.__cache={},this}function v(E){const S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function m(E){const S=E.target;S.removeEventListener("dispose",m);const _=a.indexOf(S.__bindingPointIndex);a.splice(_,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function d(){for(const E in r)n.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:c,update:l,dispose:d}}class Kv{constructor(e={}){const{canvas:t=kf(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,d=null;const E=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let x=!1;this._outputColorSpace=Pt;let A=0,T=0,L=null,y=-1,M=null;const I=new dt,z=new dt;let W=null;const Z=new Ze(0);let U=0,q=t.width,te=t.height,O=1,fe=null,ge=null;const Ee=new dt(0,0,q,te),Ne=new dt(0,0,q,te);let Fe=!1;const Y=new dc;let G=!1,w=!1;const R=new ct,j=new K,re=new dt,X={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function Me(){return L===null?O:1}let D=i;function H(C,ee){return t.getContext(C,ee)}try{const C={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nc}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",_e,!1),D===null){const ee="webgl2";if(D=H(ee,C),D===null)throw H(ee)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let k,Q,$,F,P,ae,Ae,Oe,N,b,J,oe,me,B,se,ie,ve,Se,de,ye,we,Le,Re,ze;function V(){k=new r0(D),k.init(),Le=new zv(D,k),Q=new Jg(D,k,e,Le),$=new Bv(D,k),Q.reversedDepthBuffer&&f&&$.buffers.depth.setReversed(!0),F=new o0(D),P=new Av,ae=new Gv(D,k,$,P,Q,Le,F),Ae=new Qg(_),Oe=new i0(_),N=new dp(D),Re=new Zg(D,N),b=new s0(D,N,F,Re),J=new l0(D,b,N,F),de=new c0(D,Q,ae),ie=new jg(P),oe=new bv(_,Ae,Oe,k,Q,Re,ie),me=new qv(_,P),B=new Rv,se=new Dv(k),Se=new Kg(_,Ae,Oe,$,J,p,c),ve=new Fv(_,J,Q),ze=new Yv(D,F,Q,$),ye=new $g(D,k,F),we=new a0(D,k,F),F.programs=oe.programs,_.capabilities=Q,_.extensions=k,_.properties=P,_.renderLists=B,_.shadowMap=ve,_.state=$,_.info=F}V();const xe=new Wv(_,D);this.xr=xe,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const C=k.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=k.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(C){C!==void 0&&(O=C,this.setSize(q,te,!1))},this.getSize=function(C){return C.set(q,te)},this.setSize=function(C,ee,ce=!0){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=C,te=ee,t.width=Math.floor(C*O),t.height=Math.floor(ee*O),ce===!0&&(t.style.width=C+"px",t.style.height=ee+"px"),this.setViewport(0,0,C,ee)},this.getDrawingBufferSize=function(C){return C.set(q*O,te*O).floor()},this.setDrawingBufferSize=function(C,ee,ce){q=C,te=ee,O=ce,t.width=Math.floor(C*ce),t.height=Math.floor(ee*ce),this.setViewport(0,0,C,ee)},this.getCurrentViewport=function(C){return C.copy(I)},this.getViewport=function(C){return C.copy(Ee)},this.setViewport=function(C,ee,ce,le){C.isVector4?Ee.set(C.x,C.y,C.z,C.w):Ee.set(C,ee,ce,le),$.viewport(I.copy(Ee).multiplyScalar(O).round())},this.getScissor=function(C){return C.copy(Ne)},this.setScissor=function(C,ee,ce,le){C.isVector4?Ne.set(C.x,C.y,C.z,C.w):Ne.set(C,ee,ce,le),$.scissor(z.copy(Ne).multiplyScalar(O).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(C){$.setScissorTest(Fe=C)},this.setOpaqueSort=function(C){fe=C},this.setTransparentSort=function(C){ge=C},this.getClearColor=function(C){return C.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(C=!0,ee=!0,ce=!0){let le=0;if(C){let ne=!1;if(L!==null){const be=L.texture.format;ne=be===cc||be===oc||be===ac}if(ne){const be=L.texture.type,Ie=be===dn||be===oi||be===yr||be===Mr||be===rc||be===sc,Be=Se.getClearColor(),Ue=Se.getClearAlpha(),Ve=Be.r,We=Be.g,Ge=Be.b;Ie?(g[0]=Ve,g[1]=We,g[2]=Ge,g[3]=Ue,D.clearBufferuiv(D.COLOR,0,g)):(v[0]=Ve,v[1]=We,v[2]=Ge,v[3]=Ue,D.clearBufferiv(D.COLOR,0,v))}else le|=D.COLOR_BUFFER_BIT}ee&&(le|=D.DEPTH_BUFFER_BIT),ce&&(le|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),Se.dispose(),B.dispose(),se.dispose(),P.dispose(),Ae.dispose(),Oe.dispose(),J.dispose(),Re.dispose(),ze.dispose(),oe.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",sn),xe.removeEventListener("sessionend",Ac),Gn.stop()};function Te(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const C=F.autoReset,ee=ve.enabled,ce=ve.autoUpdate,le=ve.needsUpdate,ne=ve.type;V(),F.autoReset=C,ve.enabled=ee,ve.autoUpdate=ce,ve.needsUpdate=le,ve.type=ne}function _e(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ue(C){const ee=C.target;ee.removeEventListener("dispose",ue),De(ee)}function De(C){ke(C),P.remove(C)}function ke(C){const ee=P.get(C).programs;ee!==void 0&&(ee.forEach(function(ce){oe.releaseProgram(ce)}),C.isShaderMaterial&&oe.releaseShaderCache(C))}this.renderBufferDirect=function(C,ee,ce,le,ne,be){ee===null&&(ee=X);const Ie=ne.isMesh&&ne.matrixWorld.determinant()<0,Be=Dh(C,ee,ce,le,ne);$.setMaterial(le,Ie);let Ue=ce.index,Ve=1;if(le.wireframe===!0){if(Ue=b.getWireframeAttribute(ce),Ue===void 0)return;Ve=2}const We=ce.drawRange,Ge=ce.attributes.position;let Ke=We.start*Ve,tt=(We.start+We.count)*Ve;be!==null&&(Ke=Math.max(Ke,be.start*Ve),tt=Math.min(tt,(be.start+be.count)*Ve)),Ue!==null?(Ke=Math.max(Ke,0),tt=Math.min(tt,Ue.count)):Ge!=null&&(Ke=Math.max(Ke,0),tt=Math.min(tt,Ge.count));const ft=tt-Ke;if(ft<0||ft===1/0)return;Re.setup(ne,le,Be,ce,Ue);let at,rt=ye;if(Ue!==null&&(at=N.get(Ue),rt=we,rt.setIndex(at)),ne.isMesh)le.wireframe===!0?($.setLineWidth(le.wireframeLinewidth*Me()),rt.setMode(D.LINES)):rt.setMode(D.TRIANGLES);else if(ne.isLine){let He=le.linewidth;He===void 0&&(He=1),$.setLineWidth(He*Me()),ne.isLineSegments?rt.setMode(D.LINES):ne.isLineLoop?rt.setMode(D.LINE_LOOP):rt.setMode(D.LINE_STRIP)}else ne.isPoints?rt.setMode(D.POINTS):ne.isSprite&&rt.setMode(D.TRIANGLES);if(ne.isBatchedMesh)if(ne._multiDrawInstances!==null)Tr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),rt.renderMultiDrawInstances(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount,ne._multiDrawInstances);else if(k.get("WEBGL_multi_draw"))rt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const He=ne._multiDrawStarts,lt=ne._multiDrawCounts,Qe=ne._multiDrawCount,Ft=Ue?N.get(Ue).bytesPerElement:1,pi=P.get(le).currentProgram.getUniforms();for(let Ot=0;Ot<Qe;Ot++)pi.setValue(D,"_gl_DrawID",Ot),rt.render(He[Ot]/Ft,lt[Ot])}else if(ne.isInstancedMesh)rt.renderInstances(Ke,ft,ne.count);else if(ce.isInstancedBufferGeometry){const He=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,lt=Math.min(ce.instanceCount,He);rt.renderInstances(Ke,ft,lt)}else rt.render(Ke,ft)};function $e(C,ee,ce){C.transparent===!0&&C.side===yt&&C.forceSinglePass===!1?(C.side=Lt,C.needsUpdate=!0,zr(C,ee,ce),C.side=On,C.needsUpdate=!0,zr(C,ee,ce),C.side=yt):zr(C,ee,ce)}this.compile=function(C,ee,ce=null){ce===null&&(ce=C),d=se.get(ce),d.init(ee),S.push(d),ce.traverseVisible(function(ne){ne.isLight&&ne.layers.test(ee.layers)&&(d.pushLight(ne),ne.castShadow&&d.pushShadow(ne))}),C!==ce&&C.traverseVisible(function(ne){ne.isLight&&ne.layers.test(ee.layers)&&(d.pushLight(ne),ne.castShadow&&d.pushShadow(ne))}),d.setupLights();const le=new Set;return C.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const be=ne.material;if(be)if(Array.isArray(be))for(let Ie=0;Ie<be.length;Ie++){const Be=be[Ie];$e(Be,ce,ne),le.add(Be)}else $e(be,ce,ne),le.add(be)}),d=S.pop(),le},this.compileAsync=function(C,ee,ce=null){const le=this.compile(C,ee,ce);return new Promise(ne=>{function be(){if(le.forEach(function(Ie){P.get(Ie).currentProgram.isReady()&&le.delete(Ie)}),le.size===0){ne(C);return}setTimeout(be,10)}k.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Je=null;function Ht(C){Je&&Je(C)}function sn(){Gn.stop()}function Ac(){Gn.start()}const Gn=new eh;Gn.setAnimationLoop(Ht),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(C){Je=C,xe.setAnimationLoop(C),C===null?Gn.stop():Gn.start()},xe.addEventListener("sessionstart",sn),xe.addEventListener("sessionend",Ac),this.render=function(C,ee){if(ee!==void 0&&ee.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),ee.parent===null&&ee.matrixWorldAutoUpdate===!0&&ee.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(ee),ee=xe.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,ee,L),d=se.get(C,S.length),d.init(ee),S.push(d),R.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),Y.setFromProjectionMatrix(R,hn,ee.reversedDepth),w=this.localClippingEnabled,G=ie.init(this.clippingPlanes,w),m=B.get(C,E.length),m.init(),E.push(m),xe.enabled===!0&&xe.isPresenting===!0){const be=_.xr.getDepthSensingMesh();be!==null&&js(be,ee,-1/0,_.sortObjects)}js(C,ee,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(fe,ge),he=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,he&&Se.addToRenderList(m,C),this.info.render.frame++,G===!0&&ie.beginShadows();const ce=d.state.shadowsArray;ve.render(ce,C,ee),G===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const le=m.opaque,ne=m.transmissive;if(d.setupLights(),ee.isArrayCamera){const be=ee.cameras;if(ne.length>0)for(let Ie=0,Be=be.length;Ie<Be;Ie++){const Ue=be[Ie];Rc(le,ne,C,Ue)}he&&Se.render(C);for(let Ie=0,Be=be.length;Ie<Be;Ie++){const Ue=be[Ie];Tc(m,C,Ue,Ue.viewport)}}else ne.length>0&&Rc(le,ne,C,ee),he&&Se.render(C),Tc(m,C,ee);L!==null&&T===0&&(ae.updateMultisampleRenderTarget(L),ae.updateRenderTargetMipmap(L)),C.isScene===!0&&C.onAfterRender(_,C,ee),Re.resetDefaultState(),y=-1,M=null,S.pop(),S.length>0?(d=S[S.length-1],G===!0&&ie.setGlobalState(_.clippingPlanes,d.state.camera)):d=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function js(C,ee,ce,le){if(C.visible===!1)return;if(C.layers.test(ee.layers)){if(C.isGroup)ce=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(ee);else if(C.isLight)d.pushLight(C),C.castShadow&&d.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Y.intersectsSprite(C)){le&&re.setFromMatrixPosition(C.matrixWorld).applyMatrix4(R);const Ie=J.update(C),Be=C.material;Be.visible&&m.push(C,Ie,Be,ce,re.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Y.intersectsObject(C))){const Ie=J.update(C),Be=C.material;if(le&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),re.copy(C.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),re.copy(Ie.boundingSphere.center)),re.applyMatrix4(C.matrixWorld).applyMatrix4(R)),Array.isArray(Be)){const Ue=Ie.groups;for(let Ve=0,We=Ue.length;Ve<We;Ve++){const Ge=Ue[Ve],Ke=Be[Ge.materialIndex];Ke&&Ke.visible&&m.push(C,Ie,Ke,ce,re.z,Ge)}}else Be.visible&&m.push(C,Ie,Be,ce,re.z,null)}}const be=C.children;for(let Ie=0,Be=be.length;Ie<Be;Ie++)js(be[Ie],ee,ce,le)}function Tc(C,ee,ce,le){const ne=C.opaque,be=C.transmissive,Ie=C.transparent;d.setupLightsView(ce),G===!0&&ie.setGlobalState(_.clippingPlanes,ce),le&&$.viewport(I.copy(le)),ne.length>0&&Gr(ne,ee,ce),be.length>0&&Gr(be,ee,ce),Ie.length>0&&Gr(Ie,ee,ce),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function Rc(C,ee,ce,le){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[le.id]===void 0&&(d.state.transmissionRenderTarget[le.id]=new ci(1,1,{generateMipmaps:!0,type:k.has("EXT_color_buffer_half_float")||k.has("EXT_color_buffer_float")?Nr:dn,minFilter:ri,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const be=d.state.transmissionRenderTarget[le.id],Ie=le.viewport||I;be.setSize(Ie.z*_.transmissionResolutionScale,Ie.w*_.transmissionResolutionScale);const Be=_.getRenderTarget(),Ue=_.getActiveCubeFace(),Ve=_.getActiveMipmapLevel();_.setRenderTarget(be),_.getClearColor(Z),U=_.getClearAlpha(),U<1&&_.setClearColor(16777215,.5),_.clear(),he&&Se.render(ce);const We=_.toneMapping;_.toneMapping=Fn;const Ge=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),d.setupLightsView(le),G===!0&&ie.setGlobalState(_.clippingPlanes,le),Gr(C,ce,le),ae.updateMultisampleRenderTarget(be),ae.updateRenderTargetMipmap(be),k.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let tt=0,ft=ee.length;tt<ft;tt++){const at=ee[tt],rt=at.object,He=at.geometry,lt=at.material,Qe=at.group;if(lt.side===yt&&rt.layers.test(le.layers)){const Ft=lt.side;lt.side=Lt,lt.needsUpdate=!0,wc(rt,ce,le,He,lt,Qe),lt.side=Ft,lt.needsUpdate=!0,Ke=!0}}Ke===!0&&(ae.updateMultisampleRenderTarget(be),ae.updateRenderTargetMipmap(be))}_.setRenderTarget(Be,Ue,Ve),_.setClearColor(Z,U),Ge!==void 0&&(le.viewport=Ge),_.toneMapping=We}function Gr(C,ee,ce){const le=ee.isScene===!0?ee.overrideMaterial:null;for(let ne=0,be=C.length;ne<be;ne++){const Ie=C[ne],Be=Ie.object,Ue=Ie.geometry,Ve=Ie.group;let We=Ie.material;We.allowOverride===!0&&le!==null&&(We=le),Be.layers.test(ce.layers)&&wc(Be,ee,ce,Ue,We,Ve)}}function wc(C,ee,ce,le,ne,be){C.onBeforeRender(_,ee,ce,le,ne,be),C.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ne.onBeforeRender(_,ee,ce,le,C,be),ne.transparent===!0&&ne.side===yt&&ne.forceSinglePass===!1?(ne.side=Lt,ne.needsUpdate=!0,_.renderBufferDirect(ce,ee,le,ne,C,be),ne.side=On,ne.needsUpdate=!0,_.renderBufferDirect(ce,ee,le,ne,C,be),ne.side=yt):_.renderBufferDirect(ce,ee,le,ne,C,be),C.onAfterRender(_,ee,ce,le,ne,be)}function zr(C,ee,ce){ee.isScene!==!0&&(ee=X);const le=P.get(C),ne=d.state.lights,be=d.state.shadowsArray,Ie=ne.state.version,Be=oe.getParameters(C,ne.state,be,ee,ce),Ue=oe.getProgramCacheKey(Be);let Ve=le.programs;le.environment=C.isMeshStandardMaterial?ee.environment:null,le.fog=ee.fog,le.envMap=(C.isMeshStandardMaterial?Oe:Ae).get(C.envMap||le.environment),le.envMapRotation=le.environment!==null&&C.envMap===null?ee.environmentRotation:C.envMapRotation,Ve===void 0&&(C.addEventListener("dispose",ue),Ve=new Map,le.programs=Ve);let We=Ve.get(Ue);if(We!==void 0){if(le.currentProgram===We&&le.lightsStateVersion===Ie)return Pc(C,Be),We}else Be.uniforms=oe.getUniforms(C),C.onBeforeCompile(Be,_),We=oe.acquireProgram(Be,Ue),Ve.set(Ue,We),le.uniforms=Be.uniforms;const Ge=le.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ge.clippingPlanes=ie.uniform),Pc(C,Be),le.needsLights=Uh(C),le.lightsStateVersion=Ie,le.needsLights&&(Ge.ambientLightColor.value=ne.state.ambient,Ge.lightProbe.value=ne.state.probe,Ge.directionalLights.value=ne.state.directional,Ge.directionalLightShadows.value=ne.state.directionalShadow,Ge.spotLights.value=ne.state.spot,Ge.spotLightShadows.value=ne.state.spotShadow,Ge.rectAreaLights.value=ne.state.rectArea,Ge.ltc_1.value=ne.state.rectAreaLTC1,Ge.ltc_2.value=ne.state.rectAreaLTC2,Ge.pointLights.value=ne.state.point,Ge.pointLightShadows.value=ne.state.pointShadow,Ge.hemisphereLights.value=ne.state.hemi,Ge.directionalShadowMap.value=ne.state.directionalShadowMap,Ge.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Ge.spotShadowMap.value=ne.state.spotShadowMap,Ge.spotLightMatrix.value=ne.state.spotLightMatrix,Ge.spotLightMap.value=ne.state.spotLightMap,Ge.pointShadowMap.value=ne.state.pointShadowMap,Ge.pointShadowMatrix.value=ne.state.pointShadowMatrix),le.currentProgram=We,le.uniformsList=null,We}function Cc(C){if(C.uniformsList===null){const ee=C.currentProgram.getUniforms();C.uniformsList=As.seqWithValue(ee.seq,C.uniforms)}return C.uniformsList}function Pc(C,ee){const ce=P.get(C);ce.outputColorSpace=ee.outputColorSpace,ce.batching=ee.batching,ce.batchingColor=ee.batchingColor,ce.instancing=ee.instancing,ce.instancingColor=ee.instancingColor,ce.instancingMorph=ee.instancingMorph,ce.skinning=ee.skinning,ce.morphTargets=ee.morphTargets,ce.morphNormals=ee.morphNormals,ce.morphColors=ee.morphColors,ce.morphTargetsCount=ee.morphTargetsCount,ce.numClippingPlanes=ee.numClippingPlanes,ce.numIntersection=ee.numClipIntersection,ce.vertexAlphas=ee.vertexAlphas,ce.vertexTangents=ee.vertexTangents,ce.toneMapping=ee.toneMapping}function Dh(C,ee,ce,le,ne){ee.isScene!==!0&&(ee=X),ae.resetTextureUnits();const be=ee.fog,Ie=le.isMeshStandardMaterial?ee.environment:null,Be=L===null?_.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Xi,Ue=(le.isMeshStandardMaterial?Oe:Ae).get(le.envMap||Ie),Ve=le.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,We=!!ce.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),Ge=!!ce.morphAttributes.position,Ke=!!ce.morphAttributes.normal,tt=!!ce.morphAttributes.color;let ft=Fn;le.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ft=_.toneMapping);const at=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,rt=at!==void 0?at.length:0,He=P.get(le),lt=d.state.lights;if(G===!0&&(w===!0||C!==M)){const At=C===M&&le.id===y;ie.setState(le,C,At)}let Qe=!1;le.version===He.__version?(He.needsLights&&He.lightsStateVersion!==lt.state.version||He.outputColorSpace!==Be||ne.isBatchedMesh&&He.batching===!1||!ne.isBatchedMesh&&He.batching===!0||ne.isBatchedMesh&&He.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&He.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&He.instancing===!1||!ne.isInstancedMesh&&He.instancing===!0||ne.isSkinnedMesh&&He.skinning===!1||!ne.isSkinnedMesh&&He.skinning===!0||ne.isInstancedMesh&&He.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&He.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&He.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&He.instancingMorph===!1&&ne.morphTexture!==null||He.envMap!==Ue||le.fog===!0&&He.fog!==be||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==ie.numPlanes||He.numIntersection!==ie.numIntersection)||He.vertexAlphas!==Ve||He.vertexTangents!==We||He.morphTargets!==Ge||He.morphNormals!==Ke||He.morphColors!==tt||He.toneMapping!==ft||He.morphTargetsCount!==rt)&&(Qe=!0):(Qe=!0,He.__version=le.version);let Ft=He.currentProgram;Qe===!0&&(Ft=zr(le,ee,ne));let pi=!1,Ot=!1,Qi=!1;const ut=Ft.getUniforms(),Vt=He.uniforms;if($.useProgram(Ft.program)&&(pi=!0,Ot=!0,Qi=!0),le.id!==y&&(y=le.id,Ot=!0),pi||M!==C){$.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),ut.setValue(D,"projectionMatrix",C.projectionMatrix),ut.setValue(D,"viewMatrix",C.matrixWorldInverse);const Ct=ut.map.cameraPosition;Ct!==void 0&&Ct.setValue(D,j.setFromMatrixPosition(C.matrixWorld)),Q.logarithmicDepthBuffer&&ut.setValue(D,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&ut.setValue(D,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,Ot=!0,Qi=!0)}if(ne.isSkinnedMesh){ut.setOptional(D,ne,"bindMatrix"),ut.setOptional(D,ne,"bindMatrixInverse");const At=ne.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),ut.setValue(D,"boneTexture",At.boneTexture,ae))}ne.isBatchedMesh&&(ut.setOptional(D,ne,"batchingTexture"),ut.setValue(D,"batchingTexture",ne._matricesTexture,ae),ut.setOptional(D,ne,"batchingIdTexture"),ut.setValue(D,"batchingIdTexture",ne._indirectTexture,ae),ut.setOptional(D,ne,"batchingColorTexture"),ne._colorsTexture!==null&&ut.setValue(D,"batchingColorTexture",ne._colorsTexture,ae));const kt=ce.morphAttributes;if((kt.position!==void 0||kt.normal!==void 0||kt.color!==void 0)&&de.update(ne,ce,Ft),(Ot||He.receiveShadow!==ne.receiveShadow)&&(He.receiveShadow=ne.receiveShadow,ut.setValue(D,"receiveShadow",ne.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(Vt.envMap.value=Ue,Vt.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),le.isMeshStandardMaterial&&le.envMap===null&&ee.environment!==null&&(Vt.envMapIntensity.value=ee.environmentIntensity),Ot&&(ut.setValue(D,"toneMappingExposure",_.toneMappingExposure),He.needsLights&&Nh(Vt,Qi),be&&le.fog===!0&&me.refreshFogUniforms(Vt,be),me.refreshMaterialUniforms(Vt,le,O,te,d.state.transmissionRenderTarget[C.id]),As.upload(D,Cc(He),Vt,ae)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(As.upload(D,Cc(He),Vt,ae),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&ut.setValue(D,"center",ne.center),ut.setValue(D,"modelViewMatrix",ne.modelViewMatrix),ut.setValue(D,"normalMatrix",ne.normalMatrix),ut.setValue(D,"modelMatrix",ne.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const At=le.uniformsGroups;for(let Ct=0,Qs=At.length;Ct<Qs;Ct++){const zn=At[Ct];ze.update(zn,Ft),ze.bind(zn,Ft)}}return Ft}function Nh(C,ee){C.ambientLightColor.needsUpdate=ee,C.lightProbe.needsUpdate=ee,C.directionalLights.needsUpdate=ee,C.directionalLightShadows.needsUpdate=ee,C.pointLights.needsUpdate=ee,C.pointLightShadows.needsUpdate=ee,C.spotLights.needsUpdate=ee,C.spotLightShadows.needsUpdate=ee,C.rectAreaLights.needsUpdate=ee,C.hemisphereLights.needsUpdate=ee}function Uh(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(C,ee,ce){const le=P.get(C);le.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),P.get(C.texture).__webglTexture=ee,P.get(C.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:ce,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,ee){const ce=P.get(C);ce.__webglFramebuffer=ee,ce.__useDefaultFramebuffer=ee===void 0};const Fh=D.createFramebuffer();this.setRenderTarget=function(C,ee=0,ce=0){L=C,A=ee,T=ce;let le=!0,ne=null,be=!1,Ie=!1;if(C){const Ue=P.get(C);if(Ue.__useDefaultFramebuffer!==void 0)$.bindFramebuffer(D.FRAMEBUFFER,null),le=!1;else if(Ue.__webglFramebuffer===void 0)ae.setupRenderTarget(C);else if(Ue.__hasExternalTextures)ae.rebindTextures(C,P.get(C.texture).__webglTexture,P.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ge=C.depthTexture;if(Ue.__boundDepthTexture!==Ge){if(Ge!==null&&P.has(Ge)&&(C.width!==Ge.image.width||C.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(C)}}const Ve=C.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ie=!0);const We=P.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(We[ee])?ne=We[ee][ce]:ne=We[ee],be=!0):C.samples>0&&ae.useMultisampledRTT(C)===!1?ne=P.get(C).__webglMultisampledFramebuffer:Array.isArray(We)?ne=We[ce]:ne=We,I.copy(C.viewport),z.copy(C.scissor),W=C.scissorTest}else I.copy(Ee).multiplyScalar(O).floor(),z.copy(Ne).multiplyScalar(O).floor(),W=Fe;if(ce!==0&&(ne=Fh),$.bindFramebuffer(D.FRAMEBUFFER,ne)&&le&&$.drawBuffers(C,ne),$.viewport(I),$.scissor(z),$.setScissorTest(W),be){const Ue=P.get(C.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ue.__webglTexture,ce)}else if(Ie){const Ue=ee;for(let Ve=0;Ve<C.textures.length;Ve++){const We=P.get(C.textures[Ve]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ve,We.__webglTexture,ce,Ue)}}else if(C!==null&&ce!==0){const Ue=P.get(C.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ue.__webglTexture,ce)}y=-1},this.readRenderTargetPixels=function(C,ee,ce,le,ne,be,Ie,Be=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=P.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ue=Ue[Ie]),Ue){$.bindFramebuffer(D.FRAMEBUFFER,Ue);try{const Ve=C.textures[Be],We=Ve.format,Ge=Ve.type;if(!Q.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ee>=0&&ee<=C.width-le&&ce>=0&&ce<=C.height-ne&&(C.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Be),D.readPixels(ee,ce,le,ne,Le.convert(We),Le.convert(Ge),be))}finally{const Ve=L!==null?P.get(L).__webglFramebuffer:null;$.bindFramebuffer(D.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(C,ee,ce,le,ne,be,Ie,Be=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=P.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ue=Ue[Ie]),Ue)if(ee>=0&&ee<=C.width-le&&ce>=0&&ce<=C.height-ne){$.bindFramebuffer(D.FRAMEBUFFER,Ue);const Ve=C.textures[Be],We=Ve.format,Ge=Ve.type;if(!Q.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ke),D.bufferData(D.PIXEL_PACK_BUFFER,be.byteLength,D.STREAM_READ),C.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Be),D.readPixels(ee,ce,le,ne,Le.convert(We),Le.convert(Ge),0);const tt=L!==null?P.get(L).__webglFramebuffer:null;$.bindFramebuffer(D.FRAMEBUFFER,tt);const ft=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Wf(D,ft,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ke),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,be),D.deleteBuffer(Ke),D.deleteSync(ft),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,ee=null,ce=0){const le=Math.pow(2,-ce),ne=Math.floor(C.image.width*le),be=Math.floor(C.image.height*le),Ie=ee!==null?ee.x:0,Be=ee!==null?ee.y:0;ae.setTexture2D(C,0),D.copyTexSubImage2D(D.TEXTURE_2D,ce,0,0,Ie,Be,ne,be),$.unbindTexture()};const Oh=D.createFramebuffer(),Bh=D.createFramebuffer();this.copyTextureToTexture=function(C,ee,ce=null,le=null,ne=0,be=null){be===null&&(ne!==0?(Tr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),be=ne,ne=0):be=0);let Ie,Be,Ue,Ve,We,Ge,Ke,tt,ft;const at=C.isCompressedTexture?C.mipmaps[be]:C.image;if(ce!==null)Ie=ce.max.x-ce.min.x,Be=ce.max.y-ce.min.y,Ue=ce.isBox3?ce.max.z-ce.min.z:1,Ve=ce.min.x,We=ce.min.y,Ge=ce.isBox3?ce.min.z:0;else{const kt=Math.pow(2,-ne);Ie=Math.floor(at.width*kt),Be=Math.floor(at.height*kt),C.isDataArrayTexture?Ue=at.depth:C.isData3DTexture?Ue=Math.floor(at.depth*kt):Ue=1,Ve=0,We=0,Ge=0}le!==null?(Ke=le.x,tt=le.y,ft=le.z):(Ke=0,tt=0,ft=0);const rt=Le.convert(ee.format),He=Le.convert(ee.type);let lt;ee.isData3DTexture?(ae.setTexture3D(ee,0),lt=D.TEXTURE_3D):ee.isDataArrayTexture||ee.isCompressedArrayTexture?(ae.setTexture2DArray(ee,0),lt=D.TEXTURE_2D_ARRAY):(ae.setTexture2D(ee,0),lt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,ee.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,ee.unpackAlignment);const Qe=D.getParameter(D.UNPACK_ROW_LENGTH),Ft=D.getParameter(D.UNPACK_IMAGE_HEIGHT),pi=D.getParameter(D.UNPACK_SKIP_PIXELS),Ot=D.getParameter(D.UNPACK_SKIP_ROWS),Qi=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,at.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,at.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ve),D.pixelStorei(D.UNPACK_SKIP_ROWS,We),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ge);const ut=C.isDataArrayTexture||C.isData3DTexture,Vt=ee.isDataArrayTexture||ee.isData3DTexture;if(C.isDepthTexture){const kt=P.get(C),At=P.get(ee),Ct=P.get(kt.__renderTarget),Qs=P.get(At.__renderTarget);$.bindFramebuffer(D.READ_FRAMEBUFFER,Ct.__webglFramebuffer),$.bindFramebuffer(D.DRAW_FRAMEBUFFER,Qs.__webglFramebuffer);for(let zn=0;zn<Ue;zn++)ut&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,P.get(C).__webglTexture,ne,Ge+zn),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,P.get(ee).__webglTexture,be,ft+zn)),D.blitFramebuffer(Ve,We,Ie,Be,Ke,tt,Ie,Be,D.DEPTH_BUFFER_BIT,D.NEAREST);$.bindFramebuffer(D.READ_FRAMEBUFFER,null),$.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(ne!==0||C.isRenderTargetTexture||P.has(C)){const kt=P.get(C),At=P.get(ee);$.bindFramebuffer(D.READ_FRAMEBUFFER,Oh),$.bindFramebuffer(D.DRAW_FRAMEBUFFER,Bh);for(let Ct=0;Ct<Ue;Ct++)ut?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,kt.__webglTexture,ne,Ge+Ct):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,kt.__webglTexture,ne),Vt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,At.__webglTexture,be,ft+Ct):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,At.__webglTexture,be),ne!==0?D.blitFramebuffer(Ve,We,Ie,Be,Ke,tt,Ie,Be,D.COLOR_BUFFER_BIT,D.NEAREST):Vt?D.copyTexSubImage3D(lt,be,Ke,tt,ft+Ct,Ve,We,Ie,Be):D.copyTexSubImage2D(lt,be,Ke,tt,Ve,We,Ie,Be);$.bindFramebuffer(D.READ_FRAMEBUFFER,null),$.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Vt?C.isDataTexture||C.isData3DTexture?D.texSubImage3D(lt,be,Ke,tt,ft,Ie,Be,Ue,rt,He,at.data):ee.isCompressedArrayTexture?D.compressedTexSubImage3D(lt,be,Ke,tt,ft,Ie,Be,Ue,rt,at.data):D.texSubImage3D(lt,be,Ke,tt,ft,Ie,Be,Ue,rt,He,at):C.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,be,Ke,tt,Ie,Be,rt,He,at.data):C.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,be,Ke,tt,at.width,at.height,rt,at.data):D.texSubImage2D(D.TEXTURE_2D,be,Ke,tt,Ie,Be,rt,He,at);D.pixelStorei(D.UNPACK_ROW_LENGTH,Qe),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ft),D.pixelStorei(D.UNPACK_SKIP_PIXELS,pi),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ot),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Qi),be===0&&ee.generateMipmaps&&D.generateMipmap(lt),$.unbindTexture()},this.initRenderTarget=function(C){P.get(C).__webglFramebuffer===void 0&&ae.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ae.setTextureCube(C,0):C.isData3DTexture?ae.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ae.setTexture2DArray(C,0):ae.setTexture2D(C,0),$.unbindTexture()},this.resetState=function(){A=0,T=0,L=null,$.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}const Zv=Pt;class Fi extends _c{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,t,i,r){const s=this,a=new rp(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(o))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},i,r)}parse(e){const t=this;function i(Y,G){if(Y.nodeType!==1)return;const w=_(Y);let R=!1,j=null;switch(Y.nodeName){case"svg":G=g(Y,G);break;case"style":s(Y);break;case"g":G=g(Y,G);break;case"path":G=g(Y,G),Y.hasAttribute("d")&&(j=r(Y));break;case"rect":G=g(Y,G),j=c(Y);break;case"polygon":G=g(Y,G),j=l(Y);break;case"polyline":G=g(Y,G),j=u(Y);break;case"circle":G=g(Y,G),j=h(Y);break;case"ellipse":G=g(Y,G),j=f(Y);break;case"line":G=g(Y,G),j=p(Y);break;case"defs":R=!0;break;case"use":G=g(Y,G);const he=(Y.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),Me=Y.viewportElement.getElementById(he);Me?i(Me,G):console.warn("SVGLoader: 'use node' references non-existent node id: "+he);break}j&&(G.fill!==void 0&&G.fill!=="none"&&j.color.setStyle(G.fill,Zv),A(j,Ee),z.push(j),j.userData={node:Y,style:G});const re=Y.childNodes;for(let X=0;X<re.length;X++){const he=re[X];R&&he.nodeName!=="style"&&he.nodeName!=="defs"||i(he,G)}w&&(Z.pop(),Z.length>0?Ee.copy(Z[Z.length-1]):Ee.identity())}function r(Y){const G=new Xn,w=new pe,R=new pe,j=new pe;let re=!0,X=!1;const he=Y.getAttribute("d");if(he===""||he==="none")return null;const Me=he.match(/[a-df-z][^a-df-z]*/ig);for(let D=0,H=Me.length;D<H;D++){const k=Me[D],Q=k.charAt(0),$=k.slice(1).trim();re===!0&&(X=!0,re=!1);let F;switch(Q){case"M":F=m($);for(let P=0,ae=F.length;P<ae;P+=2)w.x=F[P+0],w.y=F[P+1],R.x=w.x,R.y=w.y,P===0?G.moveTo(w.x,w.y):G.lineTo(w.x,w.y),P===0&&j.copy(w);break;case"H":F=m($);for(let P=0,ae=F.length;P<ae;P++)w.x=F[P],R.x=w.x,R.y=w.y,G.lineTo(w.x,w.y),P===0&&X===!0&&j.copy(w);break;case"V":F=m($);for(let P=0,ae=F.length;P<ae;P++)w.y=F[P],R.x=w.x,R.y=w.y,G.lineTo(w.x,w.y),P===0&&X===!0&&j.copy(w);break;case"L":F=m($);for(let P=0,ae=F.length;P<ae;P+=2)w.x=F[P+0],w.y=F[P+1],R.x=w.x,R.y=w.y,G.lineTo(w.x,w.y),P===0&&X===!0&&j.copy(w);break;case"C":F=m($);for(let P=0,ae=F.length;P<ae;P+=6)G.bezierCurveTo(F[P+0],F[P+1],F[P+2],F[P+3],F[P+4],F[P+5]),R.x=F[P+2],R.y=F[P+3],w.x=F[P+4],w.y=F[P+5],P===0&&X===!0&&j.copy(w);break;case"S":F=m($);for(let P=0,ae=F.length;P<ae;P+=4)G.bezierCurveTo(v(w.x,R.x),v(w.y,R.y),F[P+0],F[P+1],F[P+2],F[P+3]),R.x=F[P+0],R.y=F[P+1],w.x=F[P+2],w.y=F[P+3],P===0&&X===!0&&j.copy(w);break;case"Q":F=m($);for(let P=0,ae=F.length;P<ae;P+=4)G.quadraticCurveTo(F[P+0],F[P+1],F[P+2],F[P+3]),R.x=F[P+0],R.y=F[P+1],w.x=F[P+2],w.y=F[P+3],P===0&&X===!0&&j.copy(w);break;case"T":F=m($);for(let P=0,ae=F.length;P<ae;P+=2){const Ae=v(w.x,R.x),Oe=v(w.y,R.y);G.quadraticCurveTo(Ae,Oe,F[P+0],F[P+1]),R.x=Ae,R.y=Oe,w.x=F[P+0],w.y=F[P+1],P===0&&X===!0&&j.copy(w)}break;case"A":F=m($,[3,4],7);for(let P=0,ae=F.length;P<ae;P+=7){if(F[P+5]==w.x&&F[P+6]==w.y)continue;const Ae=w.clone();w.x=F[P+5],w.y=F[P+6],R.x=w.x,R.y=w.y,a(G,F[P],F[P+1],F[P+2],F[P+3],F[P+4],Ae,w),P===0&&X===!0&&j.copy(w)}break;case"m":F=m($);for(let P=0,ae=F.length;P<ae;P+=2)w.x+=F[P+0],w.y+=F[P+1],R.x=w.x,R.y=w.y,P===0?G.moveTo(w.x,w.y):G.lineTo(w.x,w.y),P===0&&j.copy(w);break;case"h":F=m($);for(let P=0,ae=F.length;P<ae;P++)w.x+=F[P],R.x=w.x,R.y=w.y,G.lineTo(w.x,w.y),P===0&&X===!0&&j.copy(w);break;case"v":F=m($);for(let P=0,ae=F.length;P<ae;P++)w.y+=F[P],R.x=w.x,R.y=w.y,G.lineTo(w.x,w.y),P===0&&X===!0&&j.copy(w);break;case"l":F=m($);for(let P=0,ae=F.length;P<ae;P+=2)w.x+=F[P+0],w.y+=F[P+1],R.x=w.x,R.y=w.y,G.lineTo(w.x,w.y),P===0&&X===!0&&j.copy(w);break;case"c":F=m($);for(let P=0,ae=F.length;P<ae;P+=6)G.bezierCurveTo(w.x+F[P+0],w.y+F[P+1],w.x+F[P+2],w.y+F[P+3],w.x+F[P+4],w.y+F[P+5]),R.x=w.x+F[P+2],R.y=w.y+F[P+3],w.x+=F[P+4],w.y+=F[P+5],P===0&&X===!0&&j.copy(w);break;case"s":F=m($);for(let P=0,ae=F.length;P<ae;P+=4)G.bezierCurveTo(v(w.x,R.x),v(w.y,R.y),w.x+F[P+0],w.y+F[P+1],w.x+F[P+2],w.y+F[P+3]),R.x=w.x+F[P+0],R.y=w.y+F[P+1],w.x+=F[P+2],w.y+=F[P+3],P===0&&X===!0&&j.copy(w);break;case"q":F=m($);for(let P=0,ae=F.length;P<ae;P+=4)G.quadraticCurveTo(w.x+F[P+0],w.y+F[P+1],w.x+F[P+2],w.y+F[P+3]),R.x=w.x+F[P+0],R.y=w.y+F[P+1],w.x+=F[P+2],w.y+=F[P+3],P===0&&X===!0&&j.copy(w);break;case"t":F=m($);for(let P=0,ae=F.length;P<ae;P+=2){const Ae=v(w.x,R.x),Oe=v(w.y,R.y);G.quadraticCurveTo(Ae,Oe,w.x+F[P+0],w.y+F[P+1]),R.x=Ae,R.y=Oe,w.x=w.x+F[P+0],w.y=w.y+F[P+1],P===0&&X===!0&&j.copy(w)}break;case"a":F=m($,[3,4],7);for(let P=0,ae=F.length;P<ae;P+=7){if(F[P+5]==0&&F[P+6]==0)continue;const Ae=w.clone();w.x+=F[P+5],w.y+=F[P+6],R.x=w.x,R.y=w.y,a(G,F[P],F[P+1],F[P+2],F[P+3],F[P+4],Ae,w),P===0&&X===!0&&j.copy(w)}break;case"Z":case"z":G.currentPath.autoClose=!0,G.currentPath.curves.length>0&&(w.copy(j),G.currentPath.currentPoint.copy(w),re=!0);break;default:console.warn(k)}X=!1}return G}function s(Y){if(!(!Y.sheet||!Y.sheet.cssRules||!Y.sheet.cssRules.length))for(let G=0;G<Y.sheet.cssRules.length;G++){const w=Y.sheet.cssRules[G];if(w.type!==1)continue;const R=w.selectorText.split(/,/gm).filter(Boolean).map(j=>j.trim());for(let j=0;j<R.length;j++){const re=Object.fromEntries(Object.entries(w.style).filter(([,X])=>X!==""));W[R[j]]=Object.assign(W[R[j]]||{},re)}}}function a(Y,G,w,R,j,re,X,he){if(G==0||w==0){Y.lineTo(he.x,he.y);return}R=R*Math.PI/180,G=Math.abs(G),w=Math.abs(w);const Me=(X.x-he.x)/2,D=(X.y-he.y)/2,H=Math.cos(R)*Me+Math.sin(R)*D,k=-Math.sin(R)*Me+Math.cos(R)*D;let Q=G*G,$=w*w;const F=H*H,P=k*k,ae=F/Q+P/$;if(ae>1){const ie=Math.sqrt(ae);G=ie*G,w=ie*w,Q=G*G,$=w*w}const Ae=Q*P+$*F,Oe=(Q*$-Ae)/Ae;let N=Math.sqrt(Math.max(0,Oe));j===re&&(N=-N);const b=N*G*k/w,J=-N*w*H/G,oe=Math.cos(R)*b-Math.sin(R)*J+(X.x+he.x)/2,me=Math.sin(R)*b+Math.cos(R)*J+(X.y+he.y)/2,B=o(1,0,(H-b)/G,(k-J)/w),se=o((H-b)/G,(k-J)/w,(-H-b)/G,(-k-J)/w)%(Math.PI*2);Y.currentPath.absellipse(oe,me,G,w,B,B+se,re===0,R)}function o(Y,G,w,R){const j=Y*w+G*R,re=Math.sqrt(Y*Y+G*G)*Math.sqrt(w*w+R*R);let X=Math.acos(Math.max(-1,Math.min(1,j/re)));return Y*R-G*w<0&&(X=-X),X}function c(Y){const G=S(Y.getAttribute("x")||0),w=S(Y.getAttribute("y")||0),R=S(Y.getAttribute("rx")||Y.getAttribute("ry")||0),j=S(Y.getAttribute("ry")||Y.getAttribute("rx")||0),re=S(Y.getAttribute("width")),X=S(Y.getAttribute("height")),he=1-.551915024494,Me=new Xn;return Me.moveTo(G+R,w),Me.lineTo(G+re-R,w),(R!==0||j!==0)&&Me.bezierCurveTo(G+re-R*he,w,G+re,w+j*he,G+re,w+j),Me.lineTo(G+re,w+X-j),(R!==0||j!==0)&&Me.bezierCurveTo(G+re,w+X-j*he,G+re-R*he,w+X,G+re-R,w+X),Me.lineTo(G+R,w+X),(R!==0||j!==0)&&Me.bezierCurveTo(G+R*he,w+X,G,w+X-j*he,G,w+X-j),Me.lineTo(G,w+j),(R!==0||j!==0)&&Me.bezierCurveTo(G,w+j*he,G+R*he,w,G+R,w),Me}function l(Y){function G(re,X,he){const Me=S(X),D=S(he);j===0?R.moveTo(Me,D):R.lineTo(Me,D),j++}const w=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,R=new Xn;let j=0;return Y.getAttribute("points").replace(w,G),R.currentPath.autoClose=!0,R}function u(Y){function G(re,X,he){const Me=S(X),D=S(he);j===0?R.moveTo(Me,D):R.lineTo(Me,D),j++}const w=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,R=new Xn;let j=0;return Y.getAttribute("points").replace(w,G),R.currentPath.autoClose=!1,R}function h(Y){const G=S(Y.getAttribute("cx")||0),w=S(Y.getAttribute("cy")||0),R=S(Y.getAttribute("r")||0),j=new zi;j.absarc(G,w,R,0,Math.PI*2);const re=new Xn;return re.subPaths.push(j),re}function f(Y){const G=S(Y.getAttribute("cx")||0),w=S(Y.getAttribute("cy")||0),R=S(Y.getAttribute("rx")||0),j=S(Y.getAttribute("ry")||0),re=new zi;re.absellipse(G,w,R,j,0,Math.PI*2);const X=new Xn;return X.subPaths.push(re),X}function p(Y){const G=S(Y.getAttribute("x1")||0),w=S(Y.getAttribute("y1")||0),R=S(Y.getAttribute("x2")||0),j=S(Y.getAttribute("y2")||0),re=new Xn;return re.moveTo(G,w),re.lineTo(R,j),re.currentPath.autoClose=!1,re}function g(Y,G){G=Object.assign({},G);let w={};if(Y.hasAttribute("class")){const X=Y.getAttribute("class").split(/\s/).filter(Boolean).map(he=>he.trim());for(let he=0;he<X.length;he++)w=Object.assign(w,W["."+X[he]])}Y.hasAttribute("id")&&(w=Object.assign(w,W["#"+Y.getAttribute("id")]));function R(X,he,Me){Me===void 0&&(Me=function(H){return H.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),H}),Y.hasAttribute(X)&&(G[he]=Me(Y.getAttribute(X))),w[X]&&(G[he]=Me(w[X])),Y.style&&Y.style[X]!==""&&(G[he]=Me(Y.style[X]))}function j(X){return Math.max(0,Math.min(1,S(X)))}function re(X){return Math.max(0,S(X))}return R("fill","fill"),R("fill-opacity","fillOpacity",j),R("fill-rule","fillRule"),R("opacity","opacity",j),R("stroke","stroke"),R("stroke-opacity","strokeOpacity",j),R("stroke-width","strokeWidth",re),R("stroke-linejoin","strokeLineJoin"),R("stroke-linecap","strokeLineCap"),R("stroke-miterlimit","strokeMiterLimit",re),R("visibility","visibility"),G}function v(Y,G){return Y-(G-Y)}function m(Y,G,w){if(typeof Y!="string")throw new TypeError("Invalid input: "+typeof Y);const R={WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},j=0,re=1,X=2,he=3;let Me=j,D=!0,H="",k="";const Q=[];function $(Ae,Oe,N){const b=new SyntaxError('Unexpected character "'+Ae+'" at index '+Oe+".");throw b.partial=N,b}function F(){H!==""&&(k===""?Q.push(Number(H)):Q.push(Number(H)*Math.pow(10,Number(k)))),H="",k=""}let P;const ae=Y.length;for(let Ae=0;Ae<ae;Ae++){if(P=Y[Ae],Array.isArray(G)&&G.includes(Q.length%w)&&R.FLAGS.test(P)){Me=re,H=P,F();continue}if(Me===j){if(R.WHITESPACE.test(P))continue;if(R.DIGIT.test(P)||R.SIGN.test(P)){Me=re,H=P;continue}if(R.POINT.test(P)){Me=X,H=P;continue}R.COMMA.test(P)&&(D&&$(P,Ae,Q),D=!0)}if(Me===re){if(R.DIGIT.test(P)){H+=P;continue}if(R.POINT.test(P)){H+=P,Me=X;continue}if(R.EXP.test(P)){Me=he;continue}R.SIGN.test(P)&&H.length===1&&R.SIGN.test(H[0])&&$(P,Ae,Q)}if(Me===X){if(R.DIGIT.test(P)){H+=P;continue}if(R.EXP.test(P)){Me=he;continue}R.POINT.test(P)&&H[H.length-1]==="."&&$(P,Ae,Q)}if(Me===he){if(R.DIGIT.test(P)){k+=P;continue}if(R.SIGN.test(P)){if(k===""){k+=P;continue}k.length===1&&R.SIGN.test(k)&&$(P,Ae,Q)}}R.WHITESPACE.test(P)?(F(),Me=j,D=!1):R.COMMA.test(P)?(F(),Me=j,D=!0):R.SIGN.test(P)?(F(),Me=re,H=P):R.POINT.test(P)?(F(),Me=X,H=P):$(P,Ae,Q)}return F(),Q}const d=["mm","cm","in","pt","pc","px"],E={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function S(Y){let G="px";if(typeof Y=="string"||Y instanceof String)for(let R=0,j=d.length;R<j;R++){const re=d[R];if(Y.endsWith(re)){G=re,Y=Y.substring(0,Y.length-re.length);break}}let w;return G==="px"&&t.defaultUnit!=="px"?w=E.in[t.defaultUnit]/t.defaultDPI:(w=E[G][t.defaultUnit],w<0&&(w=E[G].in*t.defaultDPI)),w*parseFloat(Y)}function _(Y){if(!(Y.hasAttribute("transform")||Y.nodeName==="use"&&(Y.hasAttribute("x")||Y.hasAttribute("y"))))return null;const G=x(Y);return Z.length>0&&G.premultiply(Z[Z.length-1]),Ee.copy(G),Z.push(G),G}function x(Y){const G=new Xe,w=U;if(Y.nodeName==="use"&&(Y.hasAttribute("x")||Y.hasAttribute("y"))){const R=S(Y.getAttribute("x")),j=S(Y.getAttribute("y"));G.translate(R,j)}if(Y.hasAttribute("transform")){const R=Y.getAttribute("transform").split(")");for(let j=R.length-1;j>=0;j--){const re=R[j].trim();if(re==="")continue;const X=re.indexOf("("),he=re.length;if(X>0&&X<he){const Me=re.slice(0,X),D=m(re.slice(X+1));switch(w.identity(),Me){case"translate":if(D.length>=1){const H=D[0];let k=0;D.length>=2&&(k=D[1]),w.translate(H,k)}break;case"rotate":if(D.length>=1){let H=0,k=0,Q=0;H=D[0]*Math.PI/180,D.length>=3&&(k=D[1],Q=D[2]),q.makeTranslation(-k,-Q),te.makeRotation(H),O.multiplyMatrices(te,q),q.makeTranslation(k,Q),w.multiplyMatrices(q,O)}break;case"scale":if(D.length>=1){const H=D[0];let k=H;D.length>=2&&(k=D[1]),w.scale(H,k)}break;case"skewX":D.length===1&&w.set(1,Math.tan(D[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":D.length===1&&w.set(1,0,0,Math.tan(D[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":D.length===6&&w.set(D[0],D[2],D[4],D[1],D[3],D[5],0,0,1);break}}G.premultiply(w)}}return G}function A(Y,G){function w(X){ge.set(X.x,X.y,1).applyMatrix3(G),X.set(ge.x,ge.y)}function R(X){const he=X.xRadius,Me=X.yRadius,D=Math.cos(X.aRotation),H=Math.sin(X.aRotation),k=new K(he*D,he*H,0),Q=new K(-Me*H,Me*D,0),$=k.applyMatrix3(G),F=Q.applyMatrix3(G),P=U.set($.x,F.x,0,$.y,F.y,0,0,0,1),ae=q.copy(P).invert(),N=te.copy(ae).transpose().multiply(ae).elements,b=I(N[0],N[1],N[4]),J=Math.sqrt(b.rt1),oe=Math.sqrt(b.rt2);if(X.xRadius=1/J,X.yRadius=1/oe,X.aRotation=Math.atan2(b.sn,b.cs),!((X.aEndAngle-X.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const B=q.set(J,0,0,0,oe,0,0,0,1),se=te.set(b.cs,b.sn,0,-b.sn,b.cs,0,0,0,1),ie=B.multiply(se).multiply(P),ve=Se=>{const{x:de,y:ye}=new K(Math.cos(Se),Math.sin(Se),0).applyMatrix3(ie);return Math.atan2(ye,de)};X.aStartAngle=ve(X.aStartAngle),X.aEndAngle=ve(X.aEndAngle),T(G)&&(X.aClockwise=!X.aClockwise)}}function j(X){const he=y(G),Me=M(G);X.xRadius*=he,X.yRadius*=Me;const D=he>Number.EPSILON?Math.atan2(G.elements[1],G.elements[0]):Math.atan2(-G.elements[3],G.elements[4]);X.aRotation+=D,T(G)&&(X.aStartAngle*=-1,X.aEndAngle*=-1,X.aClockwise=!X.aClockwise)}const re=Y.subPaths;for(let X=0,he=re.length;X<he;X++){const D=re[X].curves;for(let H=0;H<D.length;H++){const k=D[H];k.isLineCurve?(w(k.v1),w(k.v2)):k.isCubicBezierCurve?(w(k.v0),w(k.v1),w(k.v2),w(k.v3)):k.isQuadraticBezierCurve?(w(k.v0),w(k.v1),w(k.v2)):k.isEllipseCurve&&(fe.set(k.aX,k.aY),w(fe),k.aX=fe.x,k.aY=fe.y,L(G)?R(k):j(k))}}}function T(Y){const G=Y.elements;return G[0]*G[4]-G[1]*G[3]<0}function L(Y){const G=Y.elements,w=G[0]*G[3]+G[1]*G[4];if(w===0)return!1;const R=y(Y),j=M(Y);return Math.abs(w/(R*j))>Number.EPSILON}function y(Y){const G=Y.elements;return Math.sqrt(G[0]*G[0]+G[1]*G[1])}function M(Y){const G=Y.elements;return Math.sqrt(G[3]*G[3]+G[4]*G[4])}function I(Y,G,w){let R,j,re,X,he;const Me=Y+w,D=Y-w,H=Math.sqrt(D*D+4*G*G);return Me>0?(R=.5*(Me+H),he=1/R,j=Y*he*w-G*he*G):Me<0?j=.5*(Me-H):(R=.5*H,j=-.5*H),D>0?re=D+H:re=D-H,Math.abs(re)>2*Math.abs(G)?(he=-2*G/re,X=1/Math.sqrt(1+he*he),re=he*X):Math.abs(G)===0?(re=1,X=0):(he=-.5*re/G,re=1/Math.sqrt(1+he*he),X=he*re),D>0&&(he=re,re=-X,X=he),{rt1:R,rt2:j,cs:re,sn:X}}const z=[],W={},Z=[],U=new Xe,q=new Xe,te=new Xe,O=new Xe,fe=new pe,ge=new K,Ee=new Xe,Ne=new DOMParser().parseFromString(e,"image/svg+xml");return i(Ne.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:z,xml:Ne.documentElement}}static createShapes(e){const i={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},r={loc:i.ORIGIN,t:0};function s(v,m,d,E){const S=v.x,_=m.x,x=d.x,A=E.x,T=v.y,L=m.y,y=d.y,M=E.y,I=(A-x)*(T-y)-(M-y)*(S-x),z=(_-S)*(T-y)-(L-T)*(S-x),W=(M-y)*(_-S)-(A-x)*(L-T),Z=I/W,U=z/W;if(W===0&&I!==0||Z<=0||Z>=1||U<0||U>1)return null;if(I===0&&W===0){for(let q=0;q<2;q++)if(a(q===0?d:E,v,m),r.loc==i.ORIGIN){const te=q===0?d:E;return{x:te.x,y:te.y,t:r.t}}else if(r.loc==i.BETWEEN){const te=+(S+r.t*(_-S)).toPrecision(10),O=+(T+r.t*(L-T)).toPrecision(10);return{x:te,y:O,t:r.t}}return null}else{for(let O=0;O<2;O++)if(a(O===0?d:E,v,m),r.loc==i.ORIGIN){const fe=O===0?d:E;return{x:fe.x,y:fe.y,t:r.t}}const q=+(S+Z*(_-S)).toPrecision(10),te=+(T+Z*(L-T)).toPrecision(10);return{x:q,y:te,t:Z}}}function a(v,m,d){const E=d.x-m.x,S=d.y-m.y,_=v.x-m.x,x=v.y-m.y,A=E*x-_*S;if(v.x===m.x&&v.y===m.y){r.loc=i.ORIGIN,r.t=0;return}if(v.x===d.x&&v.y===d.y){r.loc=i.DESTINATION,r.t=1;return}if(A<-Number.EPSILON){r.loc=i.LEFT;return}if(A>Number.EPSILON){r.loc=i.RIGHT;return}if(E*_<0||S*x<0){r.loc=i.BEHIND;return}if(Math.sqrt(E*E+S*S)<Math.sqrt(_*_+x*x)){r.loc=i.BEYOND;return}let T;E!==0?T=_/E:T=x/S,r.loc=i.BETWEEN,r.t=T}function o(v,m){const d=[],E=[];for(let S=1;S<v.length;S++){const _=v[S-1],x=v[S];for(let A=1;A<m.length;A++){const T=m[A-1],L=m[A],y=s(_,x,T,L);y!==null&&d.find(M=>M.t<=y.t+Number.EPSILON&&M.t>=y.t-Number.EPSILON)===void 0&&(d.push(y),E.push(new pe(y.x,y.y)))}}return E}function c(v,m,d){const E=new pe;m.getCenter(E);const S=[];return d.forEach(_=>{_.boundingBox.containsPoint(E)&&o(v,_.points).forEach(A=>{S.push({identifier:_.identifier,isCW:_.isCW,point:A})})}),S.sort((_,x)=>_.point.x-x.point.x),S}function l(v,m,d,E,S){(S==null||S==="")&&(S="nonzero");const _=new pe;v.boundingBox.getCenter(_);const x=[new pe(d,_.y),new pe(E,_.y)],A=c(x,v.boundingBox,m);A.sort((z,W)=>z.point.x-W.point.x);const T=[],L=[];A.forEach(z=>{z.identifier===v.identifier?T.push(z):L.push(z)});const y=T[0].point.x,M=[];let I=0;for(;I<L.length&&L[I].point.x<y;)M.length>0&&M[M.length-1]===L[I].identifier?M.pop():M.push(L[I].identifier),I++;if(M.push(v.identifier),S==="evenodd"){const z=M.length%2===0,W=M[M.length-2];return{identifier:v.identifier,isHole:z,for:W}}else if(S==="nonzero"){let z=!0,W=null,Z=null;for(let U=0;U<M.length;U++){const q=M[U];z?(Z=m[q].isCW,z=!1,W=q):Z!==m[q].isCW&&(Z=m[q].isCW,z=!0)}return{identifier:v.identifier,isHole:z,for:W}}else console.warn('fill-rule: "'+S+'" is currently not implemented.')}let u=999999999,h=-999999999,f=e.subPaths.map(v=>{const m=v.getPoints();let d=-999999999,E=999999999,S=-999999999,_=999999999;for(let x=0;x<m.length;x++){const A=m[x];A.y>d&&(d=A.y),A.y<E&&(E=A.y),A.x>S&&(S=A.x),A.x<_&&(_=A.x)}return h<=S&&(h=S+1),u>=_&&(u=_-1),{curves:v.curves,points:m,isCW:nn.isClockWise(m),identifier:-1,boundingBox:new hp(new pe(_,E),new pe(S,d))}});f=f.filter(v=>v.points.length>1);for(let v=0;v<f.length;v++)f[v].identifier=v;const p=f.map(v=>l(v,f,u,h,e.userData?e.userData.style.fillRule:void 0)),g=[];return f.forEach(v=>{if(!p[v.identifier].isHole){const d=new Hi;d.curves=v.curves,p.filter(S=>S.isHole&&S.for===v.identifier).forEach(S=>{const _=f[S.identifier],x=new zi;x.curves=_.curves,d.holes.push(x)}),g.push(d)}}),g}static getStrokeStyle(e,t,i,r,s){return e=e!==void 0?e:1,t=t!==void 0?t:"#000",i=i!==void 0?i:"miter",r=r!==void 0?r:"butt",s=s!==void 0?s:4,{strokeColor:t,strokeWidth:e,strokeLineJoin:i,strokeLineCap:r,strokeMiterLimit:s}}static pointsToStroke(e,t,i,r){const s=[],a=[],o=[];if(Fi.pointsToStrokeWithBuffers(e,t,i,r,s,a,o)===0)return null;const c=new Ut;return c.setAttribute("position",new vt(s,3)),c.setAttribute("normal",new vt(a,3)),c.setAttribute("uv",new vt(o,2)),c}static pointsToStrokeWithBuffers(e,t,i,r,s,a,o,c){const l=new pe,u=new pe,h=new pe,f=new pe,p=new pe,g=new pe,v=new pe,m=new pe,d=new pe,E=new pe,S=new pe,_=new pe,x=new pe,A=new pe,T=new pe,L=new pe,y=new pe;i=i!==void 0?i:12,r=r!==void 0?r:.001,c=c!==void 0?c:0,e=D(e);const M=e.length;if(M<2)return 0;const I=e[0].equals(e[M-1]);let z,W=e[0],Z;const U=t.strokeWidth/2,q=1/(M-1);let te=0,O,fe,ge,Ee,Ne=!1,Fe=0,Y=c*3,G=c*2;w(e[0],e[1],l).multiplyScalar(U),m.copy(e[0]).sub(l),d.copy(e[0]).add(l),E.copy(m),S.copy(d);for(let H=1;H<M;H++){z=e[H],H===M-1?I?Z=e[1]:Z=void 0:Z=e[H+1];const k=l;if(w(W,z,k),h.copy(k).multiplyScalar(U),_.copy(z).sub(h),x.copy(z).add(h),O=te+q,fe=!1,Z!==void 0){w(z,Z,u),h.copy(u).multiplyScalar(U),A.copy(z).sub(h),T.copy(z).add(h),ge=!0,h.subVectors(Z,W),k.dot(h)<0&&(ge=!1),H===1&&(Ne=ge),h.subVectors(Z,z),h.normalize();const Q=Math.abs(k.dot(h));if(Q>Number.EPSILON){const $=U/Q;h.multiplyScalar(-$),f.subVectors(z,W),p.copy(f).setLength($).add(h),L.copy(p).negate();const F=p.length(),P=f.length();f.divideScalar(P),g.subVectors(Z,z);const ae=g.length();switch(g.divideScalar(ae),f.dot(L)<P&&g.dot(L)<ae&&(fe=!0),y.copy(p).add(z),L.add(z),Ee=!1,fe?ge?(T.copy(L),x.copy(L)):(A.copy(L),_.copy(L)):re(),t.strokeLineJoin){case"bevel":X(ge,fe,O);break;case"round":he(ge,fe),ge?j(z,_,A,O,0):j(z,T,x,O,1);break;case"miter":case"miter-clip":default:const Ae=U*t.strokeMiterLimit/F;if(Ae<1)if(t.strokeLineJoin!=="miter-clip"){X(ge,fe,O);break}else he(ge,fe),ge?(g.subVectors(y,_).multiplyScalar(Ae).add(_),v.subVectors(y,A).multiplyScalar(Ae).add(A),R(_,O,0),R(g,O,0),R(z,O,.5),R(z,O,.5),R(g,O,0),R(v,O,0),R(z,O,.5),R(v,O,0),R(A,O,0)):(g.subVectors(y,x).multiplyScalar(Ae).add(x),v.subVectors(y,T).multiplyScalar(Ae).add(T),R(x,O,1),R(g,O,1),R(z,O,.5),R(z,O,.5),R(g,O,1),R(v,O,1),R(z,O,.5),R(v,O,1),R(T,O,1));else fe?(ge?(R(d,te,1),R(m,te,0),R(y,O,0),R(d,te,1),R(y,O,0),R(L,O,1)):(R(d,te,1),R(m,te,0),R(y,O,1),R(m,te,0),R(L,O,0),R(y,O,1)),ge?A.copy(y):T.copy(y)):ge?(R(_,O,0),R(y,O,0),R(z,O,.5),R(z,O,.5),R(y,O,0),R(A,O,0)):(R(x,O,1),R(y,O,1),R(z,O,.5),R(z,O,.5),R(y,O,1),R(T,O,1)),Ee=!0;break}}else re()}else re();!I&&H===M-1&&Me(e[0],E,S,ge,!0,te),te=O,W=z,m.copy(A),d.copy(T)}if(!I)Me(z,_,x,ge,!1,O);else if(fe&&s){let H=y,k=L;Ne!==ge&&(H=L,k=y),ge?(Ee||Ne)&&(k.toArray(s,0),k.toArray(s,9),Ee&&H.toArray(s,3)):(Ee||!Ne)&&(k.toArray(s,3),k.toArray(s,9),Ee&&H.toArray(s,0))}return Fe;function w(H,k,Q){return Q.subVectors(k,H),Q.set(-Q.y,Q.x).normalize()}function R(H,k,Q){s&&(s[Y]=H.x,s[Y+1]=H.y,s[Y+2]=0,a&&(a[Y]=0,a[Y+1]=0,a[Y+2]=1),Y+=3,o&&(o[G]=k,o[G+1]=Q,G+=2)),Fe+=3}function j(H,k,Q,$,F){l.copy(k).sub(H).normalize(),u.copy(Q).sub(H).normalize();let P=Math.PI;const ae=l.dot(u);Math.abs(ae)<1&&(P=Math.abs(Math.acos(ae))),P/=i,h.copy(k);for(let Ae=0,Oe=i-1;Ae<Oe;Ae++)f.copy(h).rotateAround(H,P),R(h,$,F),R(f,$,F),R(H,$,.5),h.copy(f);R(f,$,F),R(Q,$,F),R(H,$,.5)}function re(){R(d,te,1),R(m,te,0),R(_,O,0),R(d,te,1),R(_,O,0),R(x,O,1)}function X(H,k,Q){k?H?(R(d,te,1),R(m,te,0),R(_,O,0),R(d,te,1),R(_,O,0),R(L,O,1),R(_,Q,0),R(A,Q,0),R(L,Q,.5)):(R(d,te,1),R(m,te,0),R(x,O,1),R(m,te,0),R(L,O,0),R(x,O,1),R(x,Q,1),R(L,Q,0),R(T,Q,1)):H?(R(_,Q,0),R(A,Q,0),R(z,Q,.5)):(R(x,Q,1),R(T,Q,0),R(z,Q,.5))}function he(H,k){k&&(H?(R(d,te,1),R(m,te,0),R(_,O,0),R(d,te,1),R(_,O,0),R(L,O,1),R(_,te,0),R(z,O,.5),R(L,O,1),R(z,O,.5),R(A,te,0),R(L,O,1)):(R(d,te,1),R(m,te,0),R(x,O,1),R(m,te,0),R(L,O,0),R(x,O,1),R(x,te,1),R(L,O,0),R(z,O,.5),R(z,O,.5),R(L,O,0),R(T,te,1)))}function Me(H,k,Q,$,F,P){switch(t.strokeLineCap){case"round":F?j(H,Q,k,P,.5):j(H,k,Q,P,.5);break;case"square":if(F)l.subVectors(k,H),u.set(l.y,-l.x),h.addVectors(l,u).add(H),f.subVectors(u,l).add(H),$?(h.toArray(s,3),f.toArray(s,0),f.toArray(s,9)):(h.toArray(s,3),o[7]===1?f.toArray(s,9):h.toArray(s,9),f.toArray(s,0));else{l.subVectors(Q,H),u.set(l.y,-l.x),h.addVectors(l,u).add(H),f.subVectors(u,l).add(H);const ae=s.length;$?(h.toArray(s,ae-3),f.toArray(s,ae-6),f.toArray(s,ae-12)):(f.toArray(s,ae-6),h.toArray(s,ae-3),f.toArray(s,ae-12))}break}}function D(H){let k=!1;for(let $=1,F=H.length-1;$<F;$++)if(H[$].distanceTo(H[$+1])<r){k=!0;break}if(!k)return H;const Q=[];Q.push(H[0]);for(let $=1,F=H.length-1;$<F;$++)H[$].distanceTo(H[$+1])>=r&&Q.push(H[$]);return Q.push(H[H.length-1]),Q}}}function Ts(n,e){return n==null||e==null?NaN:n<e?-1:n>e?1:n>=e?0:NaN}function $v(n,e){return n==null||e==null?NaN:e<n?-1:e>n?1:e>=n?0:NaN}function sh(n){let e,t,i;n.length!==2?(e=Ts,t=(o,c)=>Ts(n(o),c),i=(o,c)=>n(o)-c):(e=n===Ts||n===$v?n:Jv,t=n,i=n);function r(o,c,l=0,u=o.length){if(l<u){if(e(c,c)!==0)return u;do{const h=l+u>>>1;t(o[h],c)<0?l=h+1:u=h}while(l<u)}return l}function s(o,c,l=0,u=o.length){if(l<u){if(e(c,c)!==0)return u;do{const h=l+u>>>1;t(o[h],c)<=0?l=h+1:u=h}while(l<u)}return l}function a(o,c,l=0,u=o.length){const h=r(o,c,l,u-1);return h>l&&i(o[h-1],c)>-i(o[h],c)?h-1:h}return{left:r,center:a,right:s}}function Jv(){return 0}function jv(n){return n===null?NaN:+n}sh(Ts);sh(jv).center;class ui{constructor(){this._partials=new Float64Array(32),this._n=0}add(e){const t=this._partials;let i=0;for(let r=0;r<this._n&&r<32;r++){const s=t[r],a=e+s,o=Math.abs(e)<Math.abs(s)?e-(a-s):s-(a-e);o&&(t[i++]=o),e=a}return t[i]=e,this._n=i+1,this}valueOf(){const e=this._partials;let t=this._n,i,r,s,a=0;if(t>0){for(a=e[--t];t>0&&(i=a,r=e[--t],a=i+r,s=r-(a-i),!s););t>0&&(s<0&&e[t-1]<0||s>0&&e[t-1]>0)&&(r=s*2,i=a+r,r==i-a&&(a=i))}return a}}function*Qv(n){for(const e of n)yield*e}function ah(n){return Array.from(Qv(n))}var st=1e-6,je=Math.PI,qt=je/2,Gl=je/4,Kt=je*2,En=180/je,zt=je/180,ot=Math.abs,e_=Math.atan,Pr=Math.atan2,pt=Math.cos,mt=Math.sin,t_=Math.sign||function(n){return n>0?1:n<0?-1:0},di=Math.sqrt;function n_(n){return n>1?0:n<-1?je:Math.acos(n)}function Ir(n){return n>1?qt:n<-1?-qt:Math.asin(n)}function Yt(){}function Gs(n,e){n&&Hl.hasOwnProperty(n.type)&&Hl[n.type](n,e)}var zl={Feature:function(n,e){Gs(n.geometry,e)},FeatureCollection:function(n,e){for(var t=n.features,i=-1,r=t.length;++i<r;)Gs(t[i].geometry,e)}},Hl={Sphere:function(n,e){e.sphere()},Point:function(n,e){n=n.coordinates,e.point(n[0],n[1],n[2])},MultiPoint:function(n,e){for(var t=n.coordinates,i=-1,r=t.length;++i<r;)n=t[i],e.point(n[0],n[1],n[2])},LineString:function(n,e){Go(n.coordinates,e,0)},MultiLineString:function(n,e){for(var t=n.coordinates,i=-1,r=t.length;++i<r;)Go(t[i],e,0)},Polygon:function(n,e){Vl(n.coordinates,e)},MultiPolygon:function(n,e){for(var t=n.coordinates,i=-1,r=t.length;++i<r;)Vl(t[i],e)},GeometryCollection:function(n,e){for(var t=n.geometries,i=-1,r=t.length;++i<r;)Gs(t[i],e)}};function Go(n,e,t){var i=-1,r=n.length-t,s;for(e.lineStart();++i<r;)s=n[i],e.point(s[0],s[1],s[2]);e.lineEnd()}function Vl(n,e){var t=-1,i=n.length;for(e.polygonStart();++t<i;)Go(n[t],e,1);e.polygonEnd()}function Ni(n,e){n&&zl.hasOwnProperty(n.type)?zl[n.type](n,e):Gs(n,e)}function zo(n){return[Pr(n[1],n[0]),Ir(n[2])]}function Ki(n){var e=n[0],t=n[1],i=pt(t);return[i*pt(e),i*mt(e),mt(t)]}function ds(n,e){return n[0]*e[0]+n[1]*e[1]+n[2]*e[2]}function zs(n,e){return[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]]}function Na(n,e){n[0]+=e[0],n[1]+=e[1],n[2]+=e[2]}function ps(n,e){return[n[0]*e,n[1]*e,n[2]*e]}function Ho(n){var e=di(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=e,n[1]/=e,n[2]/=e}function Vo(n,e){function t(i,r){return i=n(i,r),e(i[0],i[1])}return n.invert&&e.invert&&(t.invert=function(i,r){return i=e.invert(i,r),i&&n.invert(i[0],i[1])}),t}function ko(n,e){return ot(n)>je&&(n-=Math.round(n/Kt)*Kt),[n,e]}ko.invert=ko;function i_(n,e,t){return(n%=Kt)?e||t?Vo(Wl(n),Xl(e,t)):Wl(n):e||t?Xl(e,t):ko}function kl(n){return function(e,t){return e+=n,ot(e)>je&&(e-=Math.round(e/Kt)*Kt),[e,t]}}function Wl(n){var e=kl(n);return e.invert=kl(-n),e}function Xl(n,e){var t=pt(n),i=mt(n),r=pt(e),s=mt(e);function a(o,c){var l=pt(c),u=pt(o)*l,h=mt(o)*l,f=mt(c),p=f*t+u*i;return[Pr(h*r-p*s,u*t-f*i),Ir(p*r+h*s)]}return a.invert=function(o,c){var l=pt(c),u=pt(o)*l,h=mt(o)*l,f=mt(c),p=f*r-h*s;return[Pr(h*r+f*s,u*t+p*i),Ir(p*t-u*i)]},a}function r_(n,e,t,i,r,s){if(t){var a=pt(e),o=mt(e),c=i*t;r==null?(r=e+i*Kt,s=e-c/2):(r=ql(a,r),s=ql(a,s),(i>0?r<s:r>s)&&(r+=i*Kt));for(var l,u=r;i>0?u>s:u<s;u-=c)l=zo([a,-o*pt(u),-o*mt(u)]),n.point(l[0],l[1])}}function ql(n,e){e=Ki(e),e[0]-=n,Ho(e);var t=n_(-e[1]);return((-e[2]<0?-t:t)+Kt-st)%Kt}function oh(){var n=[],e;return{point:function(t,i,r){e.push([t,i,r])},lineStart:function(){n.push(e=[])},lineEnd:Yt,rejoin:function(){n.length>1&&n.push(n.pop().concat(n.shift()))},result:function(){var t=n;return n=[],e=null,t}}}function Rs(n,e){return ot(n[0]-e[0])<st&&ot(n[1]-e[1])<st}function ms(n,e,t,i){this.x=n,this.z=e,this.o=t,this.e=i,this.v=!1,this.n=this.p=null}function ch(n,e,t,i,r){var s=[],a=[],o,c;if(n.forEach(function(g){if(!((v=g.length-1)<=0)){var v,m=g[0],d=g[v],E;if(Rs(m,d)){if(!m[2]&&!d[2]){for(r.lineStart(),o=0;o<v;++o)r.point((m=g[o])[0],m[1]);r.lineEnd();return}d[0]+=2*st}s.push(E=new ms(m,g,null,!0)),a.push(E.o=new ms(m,null,E,!1)),s.push(E=new ms(d,g,null,!1)),a.push(E.o=new ms(d,null,E,!0))}}),!!s.length){for(a.sort(e),Yl(s),Yl(a),o=0,c=a.length;o<c;++o)a[o].e=t=!t;for(var l=s[0],u,h;;){for(var f=l,p=!0;f.v;)if((f=f.n)===l)return;u=f.z,r.lineStart();do{if(f.v=f.o.v=!0,f.e){if(p)for(o=0,c=u.length;o<c;++o)r.point((h=u[o])[0],h[1]);else i(f.x,f.n.x,1,r);f=f.n}else{if(p)for(u=f.p.z,o=u.length-1;o>=0;--o)r.point((h=u[o])[0],h[1]);else i(f.x,f.p.x,-1,r);f=f.p}f=f.o,u=f.z,p=!p}while(!f.v);r.lineEnd()}}}function Yl(n){if(e=n.length){for(var e,t=0,i=n[0],r;++t<e;)i.n=r=n[t],r.p=i,i=r;i.n=r=n[0],r.p=i}}function Ua(n){return ot(n[0])<=je?n[0]:t_(n[0])*((ot(n[0])+je)%Kt-je)}function s_(n,e){var t=Ua(e),i=e[1],r=mt(i),s=[mt(t),-pt(t),0],a=0,o=0,c=new ui;r===1?i=qt+st:r===-1&&(i=-qt-st);for(var l=0,u=n.length;l<u;++l)if(f=(h=n[l]).length)for(var h,f,p=h[f-1],g=Ua(p),v=p[1]/2+Gl,m=mt(v),d=pt(v),E=0;E<f;++E,g=_,m=A,d=T,p=S){var S=h[E],_=Ua(S),x=S[1]/2+Gl,A=mt(x),T=pt(x),L=_-g,y=L>=0?1:-1,M=y*L,I=M>je,z=m*A;if(c.add(Pr(z*y*mt(M),d*T+z*pt(M))),a+=I?L+y*Kt:L,I^g>=t^_>=t){var W=zs(Ki(p),Ki(S));Ho(W);var Z=zs(s,W);Ho(Z);var U=(I^L>=0?-1:1)*Ir(Z[2]);(i>U||i===U&&(W[0]||W[1]))&&(o+=I^L>=0?1:-1)}}return(a<-st||a<st&&c<-1e-12)^o&1}function lh(n,e,t,i){return function(r){var s=e(r),a=oh(),o=e(a),c=!1,l,u,h,f={point:p,lineStart:v,lineEnd:m,polygonStart:function(){f.point=d,f.lineStart=E,f.lineEnd=S,u=[],l=[]},polygonEnd:function(){f.point=p,f.lineStart=v,f.lineEnd=m,u=ah(u);var _=s_(l,i);u.length?(c||(r.polygonStart(),c=!0),ch(u,o_,_,t,r)):_&&(c||(r.polygonStart(),c=!0),r.lineStart(),t(null,null,1,r),r.lineEnd()),c&&(r.polygonEnd(),c=!1),u=l=null},sphere:function(){r.polygonStart(),r.lineStart(),t(null,null,1,r),r.lineEnd(),r.polygonEnd()}};function p(_,x){n(_,x)&&r.point(_,x)}function g(_,x){s.point(_,x)}function v(){f.point=g,s.lineStart()}function m(){f.point=p,s.lineEnd()}function d(_,x){h.push([_,x]),o.point(_,x)}function E(){o.lineStart(),h=[]}function S(){d(h[0][0],h[0][1]),o.lineEnd();var _=o.clean(),x=a.result(),A,T=x.length,L,y,M;if(h.pop(),l.push(h),h=null,!!T){if(_&1){if(y=x[0],(L=y.length-1)>0){for(c||(r.polygonStart(),c=!0),r.lineStart(),A=0;A<L;++A)r.point((M=y[A])[0],M[1]);r.lineEnd()}return}T>1&&_&2&&x.push(x.pop().concat(x.shift())),u.push(x.filter(a_))}}return f}}function a_(n){return n.length>1}function o_(n,e){return((n=n.x)[0]<0?n[1]-qt-st:qt-n[1])-((e=e.x)[0]<0?e[1]-qt-st:qt-e[1])}var Kl=lh(function(){return!0},c_,u_,[-je,-qt]);function c_(n){var e=NaN,t=NaN,i=NaN,r;return{lineStart:function(){n.lineStart(),r=1},point:function(s,a){var o=s>0?je:-je,c=ot(s-e);ot(c-je)<st?(n.point(e,t=(t+a)/2>0?qt:-qt),n.point(i,t),n.lineEnd(),n.lineStart(),n.point(o,t),n.point(s,t),r=0):i!==o&&c>=je&&(ot(e-i)<st&&(e-=i*st),ot(s-o)<st&&(s-=o*st),t=l_(e,t,s,a),n.point(i,t),n.lineEnd(),n.lineStart(),n.point(o,t),r=0),n.point(e=s,t=a),i=o},lineEnd:function(){n.lineEnd(),e=t=NaN},clean:function(){return 2-r}}}function l_(n,e,t,i){var r,s,a=mt(n-t);return ot(a)>st?e_((mt(e)*(s=pt(i))*mt(t)-mt(i)*(r=pt(e))*mt(n))/(r*s*a)):(e+i)/2}function u_(n,e,t,i){var r;if(n==null)r=t*qt,i.point(-je,r),i.point(0,r),i.point(je,r),i.point(je,0),i.point(je,-r),i.point(0,-r),i.point(-je,-r),i.point(-je,0),i.point(-je,r);else if(ot(n[0]-e[0])>st){var s=n[0]<e[0]?je:-je;r=t*s/2,i.point(-s,r),i.point(0,r),i.point(s,r)}else i.point(e[0],e[1])}function h_(n){var e=pt(n),t=2*zt,i=e>0,r=ot(e)>st;function s(u,h,f,p){r_(p,n,t,f,u,h)}function a(u,h){return pt(u)*pt(h)>e}function o(u){var h,f,p,g,v;return{lineStart:function(){g=p=!1,v=1},point:function(m,d){var E=[m,d],S,_=a(m,d),x=i?_?0:l(m,d):_?l(m+(m<0?je:-je),d):0;if(!h&&(g=p=_)&&u.lineStart(),_!==p&&(S=c(h,E),(!S||Rs(h,S)||Rs(E,S))&&(E[2]=1)),_!==p)v=0,_?(u.lineStart(),S=c(E,h),u.point(S[0],S[1])):(S=c(h,E),u.point(S[0],S[1],2),u.lineEnd()),h=S;else if(r&&h&&i^_){var A;!(x&f)&&(A=c(E,h,!0))&&(v=0,i?(u.lineStart(),u.point(A[0][0],A[0][1]),u.point(A[1][0],A[1][1]),u.lineEnd()):(u.point(A[1][0],A[1][1]),u.lineEnd(),u.lineStart(),u.point(A[0][0],A[0][1],3)))}_&&(!h||!Rs(h,E))&&u.point(E[0],E[1]),h=E,p=_,f=x},lineEnd:function(){p&&u.lineEnd(),h=null},clean:function(){return v|(g&&p)<<1}}}function c(u,h,f){var p=Ki(u),g=Ki(h),v=[1,0,0],m=zs(p,g),d=ds(m,m),E=m[0],S=d-E*E;if(!S)return!f&&u;var _=e*d/S,x=-e*E/S,A=zs(v,m),T=ps(v,_),L=ps(m,x);Na(T,L);var y=A,M=ds(T,y),I=ds(y,y),z=M*M-I*(ds(T,T)-1);if(!(z<0)){var W=di(z),Z=ps(y,(-M-W)/I);if(Na(Z,T),Z=zo(Z),!f)return Z;var U=u[0],q=h[0],te=u[1],O=h[1],fe;q<U&&(fe=U,U=q,q=fe);var ge=q-U,Ee=ot(ge-je)<st,Ne=Ee||ge<st;if(!Ee&&O<te&&(fe=te,te=O,O=fe),Ne?Ee?te+O>0^Z[1]<(ot(Z[0]-U)<st?te:O):te<=Z[1]&&Z[1]<=O:ge>je^(U<=Z[0]&&Z[0]<=q)){var Fe=ps(y,(-M+W)/I);return Na(Fe,T),[Z,zo(Fe)]}}}function l(u,h){var f=i?n:je-n,p=0;return u<-f?p|=1:u>f&&(p|=2),h<-f?p|=4:h>f&&(p|=8),p}return lh(a,o,s,i?[0,-n]:[-je,n-je])}function f_(n,e,t,i,r,s){var a=n[0],o=n[1],c=e[0],l=e[1],u=0,h=1,f=c-a,p=l-o,g;if(g=t-a,!(!f&&g>0)){if(g/=f,f<0){if(g<u)return;g<h&&(h=g)}else if(f>0){if(g>h)return;g>u&&(u=g)}if(g=r-a,!(!f&&g<0)){if(g/=f,f<0){if(g>h)return;g>u&&(u=g)}else if(f>0){if(g<u)return;g<h&&(h=g)}if(g=i-o,!(!p&&g>0)){if(g/=p,p<0){if(g<u)return;g<h&&(h=g)}else if(p>0){if(g>h)return;g>u&&(u=g)}if(g=s-o,!(!p&&g<0)){if(g/=p,p<0){if(g>h)return;g>u&&(u=g)}else if(p>0){if(g<u)return;g<h&&(h=g)}return u>0&&(n[0]=a+u*f,n[1]=o+u*p),h<1&&(e[0]=a+h*f,e[1]=o+h*p),!0}}}}}var hr=1e9,gs=-hr;function d_(n,e,t,i){function r(l,u){return n<=l&&l<=t&&e<=u&&u<=i}function s(l,u,h,f){var p=0,g=0;if(l==null||(p=a(l,h))!==(g=a(u,h))||c(l,u)<0^h>0)do f.point(p===0||p===3?n:t,p>1?i:e);while((p=(p+h+4)%4)!==g);else f.point(u[0],u[1])}function a(l,u){return ot(l[0]-n)<st?u>0?0:3:ot(l[0]-t)<st?u>0?2:1:ot(l[1]-e)<st?u>0?1:0:u>0?3:2}function o(l,u){return c(l.x,u.x)}function c(l,u){var h=a(l,1),f=a(u,1);return h!==f?h-f:h===0?u[1]-l[1]:h===1?l[0]-u[0]:h===2?l[1]-u[1]:u[0]-l[0]}return function(l){var u=l,h=oh(),f,p,g,v,m,d,E,S,_,x,A,T={point:L,lineStart:z,lineEnd:W,polygonStart:M,polygonEnd:I};function L(U,q){r(U,q)&&u.point(U,q)}function y(){for(var U=0,q=0,te=p.length;q<te;++q)for(var O=p[q],fe=1,ge=O.length,Ee=O[0],Ne,Fe,Y=Ee[0],G=Ee[1];fe<ge;++fe)Ne=Y,Fe=G,Ee=O[fe],Y=Ee[0],G=Ee[1],Fe<=i?G>i&&(Y-Ne)*(i-Fe)>(G-Fe)*(n-Ne)&&++U:G<=i&&(Y-Ne)*(i-Fe)<(G-Fe)*(n-Ne)&&--U;return U}function M(){u=h,f=[],p=[],A=!0}function I(){var U=y(),q=A&&U,te=(f=ah(f)).length;(q||te)&&(l.polygonStart(),q&&(l.lineStart(),s(null,null,1,l),l.lineEnd()),te&&ch(f,o,U,s,l),l.polygonEnd()),u=l,f=p=g=null}function z(){T.point=Z,p&&p.push(g=[]),x=!0,_=!1,E=S=NaN}function W(){f&&(Z(v,m),d&&_&&h.rejoin(),f.push(h.result())),T.point=L,_&&u.lineEnd()}function Z(U,q){var te=r(U,q);if(p&&g.push([U,q]),x)v=U,m=q,d=te,x=!1,te&&(u.lineStart(),u.point(U,q));else if(te&&_)u.point(U,q);else{var O=[E=Math.max(gs,Math.min(hr,E)),S=Math.max(gs,Math.min(hr,S))],fe=[U=Math.max(gs,Math.min(hr,U)),q=Math.max(gs,Math.min(hr,q))];f_(O,fe,n,e,t,i)?(_||(u.lineStart(),u.point(O[0],O[1])),u.point(fe[0],fe[1]),te||u.lineEnd(),A=!1):te&&(u.lineStart(),u.point(U,q),A=!1)}E=U,S=q,_=te}return T}}var Wo=n=>n,Fa=new ui,Xo=new ui,uh,hh,qo,Yo,An={point:Yt,lineStart:Yt,lineEnd:Yt,polygonStart:function(){An.lineStart=p_,An.lineEnd=g_},polygonEnd:function(){An.lineStart=An.lineEnd=An.point=Yt,Fa.add(ot(Xo)),Xo=new ui},result:function(){var n=Fa/2;return Fa=new ui,n}};function p_(){An.point=m_}function m_(n,e){An.point=fh,uh=qo=n,hh=Yo=e}function fh(n,e){Xo.add(Yo*n-qo*e),qo=n,Yo=e}function g_(){fh(uh,hh)}var Zi=1/0,Hs=Zi,Lr=-Zi,Vs=Lr,ks={point:v_,lineStart:Yt,lineEnd:Yt,polygonStart:Yt,polygonEnd:Yt,result:function(){var n=[[Zi,Hs],[Lr,Vs]];return Lr=Vs=-(Hs=Zi=1/0),n}};function v_(n,e){n<Zi&&(Zi=n),n>Lr&&(Lr=n),e<Hs&&(Hs=e),e>Vs&&(Vs=e)}var Ko=0,Zo=0,fr=0,Ws=0,Xs=0,Oi=0,$o=0,Jo=0,dr=0,dh,ph,cn,ln,Xt={point:hi,lineStart:Zl,lineEnd:$l,polygonStart:function(){Xt.lineStart=x_,Xt.lineEnd=y_},polygonEnd:function(){Xt.point=hi,Xt.lineStart=Zl,Xt.lineEnd=$l},result:function(){var n=dr?[$o/dr,Jo/dr]:Oi?[Ws/Oi,Xs/Oi]:fr?[Ko/fr,Zo/fr]:[NaN,NaN];return Ko=Zo=fr=Ws=Xs=Oi=$o=Jo=dr=0,n}};function hi(n,e){Ko+=n,Zo+=e,++fr}function Zl(){Xt.point=__}function __(n,e){Xt.point=S_,hi(cn=n,ln=e)}function S_(n,e){var t=n-cn,i=e-ln,r=di(t*t+i*i);Ws+=r*(cn+n)/2,Xs+=r*(ln+e)/2,Oi+=r,hi(cn=n,ln=e)}function $l(){Xt.point=hi}function x_(){Xt.point=M_}function y_(){mh(dh,ph)}function M_(n,e){Xt.point=mh,hi(dh=cn=n,ph=ln=e)}function mh(n,e){var t=n-cn,i=e-ln,r=di(t*t+i*i);Ws+=r*(cn+n)/2,Xs+=r*(ln+e)/2,Oi+=r,r=ln*n-cn*e,$o+=r*(cn+n),Jo+=r*(ln+e),dr+=r*3,hi(cn=n,ln=e)}function gh(n){this._context=n}gh.prototype={_radius:4.5,pointRadius:function(n){return this._radius=n,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._context.closePath(),this._point=NaN},point:function(n,e){switch(this._point){case 0:{this._context.moveTo(n,e),this._point=1;break}case 1:{this._context.lineTo(n,e);break}default:{this._context.moveTo(n+this._radius,e),this._context.arc(n,e,this._radius,0,Kt);break}}},result:Yt};var jo=new ui,Oa,vh,_h,pr,mr,Dr={point:Yt,lineStart:function(){Dr.point=E_},lineEnd:function(){Oa&&Sh(vh,_h),Dr.point=Yt},polygonStart:function(){Oa=!0},polygonEnd:function(){Oa=null},result:function(){var n=+jo;return jo=new ui,n}};function E_(n,e){Dr.point=Sh,vh=pr=n,_h=mr=e}function Sh(n,e){pr-=n,mr-=e,jo.add(di(pr*pr+mr*mr)),pr=n,mr=e}let Jl,qs,jl,Ql;class eu{constructor(e){this._append=e==null?xh:b_(e),this._radius=4.5,this._=""}pointRadius(e){return this._radius=+e,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){this._line===0&&(this._+="Z"),this._point=NaN}point(e,t){switch(this._point){case 0:{this._append`M${e},${t}`,this._point=1;break}case 1:{this._append`L${e},${t}`;break}default:{if(this._append`M${e},${t}`,this._radius!==jl||this._append!==qs){const i=this._radius,r=this._;this._="",this._append`m0,${i}a${i},${i} 0 1,1 0,${-2*i}a${i},${i} 0 1,1 0,${2*i}z`,jl=i,qs=this._append,Ql=this._,this._=r}this._+=Ql;break}}}result(){const e=this._;return this._="",e.length?e:null}}function xh(n){let e=1;this._+=n[0];for(const t=n.length;e<t;++e)this._+=arguments[e]+n[e]}function b_(n){const e=Math.floor(n);if(!(e>=0))throw new RangeError(`invalid digits: ${n}`);if(e>15)return xh;if(e!==Jl){const t=10**e;Jl=e,qs=function(r){let s=1;this._+=r[0];for(const a=r.length;s<a;++s)this._+=Math.round(arguments[s]*t)/t+r[s]}}return qs}function A_(n,e){let t=3,i=4.5,r,s;function a(o){return o&&(typeof i=="function"&&s.pointRadius(+i.apply(this,arguments)),Ni(o,r(s))),s.result()}return a.area=function(o){return Ni(o,r(An)),An.result()},a.measure=function(o){return Ni(o,r(Dr)),Dr.result()},a.bounds=function(o){return Ni(o,r(ks)),ks.result()},a.centroid=function(o){return Ni(o,r(Xt)),Xt.result()},a.projection=function(o){return arguments.length?(r=o==null?(n=null,Wo):(n=o).stream,a):n},a.context=function(o){return arguments.length?(s=o==null?(e=null,new eu(t)):new gh(e=o),typeof i!="function"&&s.pointRadius(i),a):e},a.pointRadius=function(o){return arguments.length?(i=typeof o=="function"?o:(s.pointRadius(+o),+o),a):i},a.digits=function(o){if(!arguments.length)return t;if(o==null)t=null;else{const c=Math.floor(o);if(!(c>=0))throw new RangeError(`invalid digits: ${o}`);t=c}return e===null&&(s=new eu(t)),a},a.projection(n).digits(t).context(e)}function yc(n){return function(e){var t=new Qo;for(var i in n)t[i]=n[i];return t.stream=e,t}}function Qo(){}Qo.prototype={constructor:Qo,point:function(n,e){this.stream.point(n,e)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function Mc(n,e,t){var i=n.clipExtent&&n.clipExtent();return n.scale(150).translate([0,0]),i!=null&&n.clipExtent(null),Ni(t,n.stream(ks)),e(ks.result()),i!=null&&n.clipExtent(i),n}function yh(n,e,t){return Mc(n,function(i){var r=e[1][0]-e[0][0],s=e[1][1]-e[0][1],a=Math.min(r/(i[1][0]-i[0][0]),s/(i[1][1]-i[0][1])),o=+e[0][0]+(r-a*(i[1][0]+i[0][0]))/2,c=+e[0][1]+(s-a*(i[1][1]+i[0][1]))/2;n.scale(150*a).translate([o,c])},t)}function T_(n,e,t){return yh(n,[[0,0],e],t)}function R_(n,e,t){return Mc(n,function(i){var r=+e,s=r/(i[1][0]-i[0][0]),a=(r-s*(i[1][0]+i[0][0]))/2,o=-s*i[0][1];n.scale(150*s).translate([a,o])},t)}function w_(n,e,t){return Mc(n,function(i){var r=+e,s=r/(i[1][1]-i[0][1]),a=-s*i[0][0],o=(r-s*(i[1][1]+i[0][1]))/2;n.scale(150*s).translate([a,o])},t)}var tu=16,C_=pt(30*zt);function nu(n,e){return+e?I_(n,e):P_(n)}function P_(n){return yc({point:function(e,t){e=n(e,t),this.stream.point(e[0],e[1])}})}function I_(n,e){function t(i,r,s,a,o,c,l,u,h,f,p,g,v,m){var d=l-i,E=u-r,S=d*d+E*E;if(S>4*e&&v--){var _=a+f,x=o+p,A=c+g,T=di(_*_+x*x+A*A),L=Ir(A/=T),y=ot(ot(A)-1)<st||ot(s-h)<st?(s+h)/2:Pr(x,_),M=n(y,L),I=M[0],z=M[1],W=I-i,Z=z-r,U=E*W-d*Z;(U*U/S>e||ot((d*W+E*Z)/S-.5)>.3||a*f+o*p+c*g<C_)&&(t(i,r,s,a,o,c,I,z,y,_/=T,x/=T,A,v,m),m.point(I,z),t(I,z,y,_,x,A,l,u,h,f,p,g,v,m))}}return function(i){var r,s,a,o,c,l,u,h,f,p,g,v,m={point:d,lineStart:E,lineEnd:_,polygonStart:function(){i.polygonStart(),m.lineStart=x},polygonEnd:function(){i.polygonEnd(),m.lineStart=E}};function d(L,y){L=n(L,y),i.point(L[0],L[1])}function E(){h=NaN,m.point=S,i.lineStart()}function S(L,y){var M=Ki([L,y]),I=n(L,y);t(h,f,u,p,g,v,h=I[0],f=I[1],u=L,p=M[0],g=M[1],v=M[2],tu,i),i.point(h,f)}function _(){m.point=d,i.lineEnd()}function x(){E(),m.point=A,m.lineEnd=T}function A(L,y){S(r=L,y),s=h,a=f,o=p,c=g,l=v,m.point=S}function T(){t(h,f,u,p,g,v,s,a,r,o,c,l,tu,i),m.lineEnd=_,_()}return m}}var L_=yc({point:function(n,e){this.stream.point(n*zt,e*zt)}});function D_(n){return yc({point:function(e,t){var i=n(e,t);return this.stream.point(i[0],i[1])}})}function N_(n,e,t,i,r){function s(a,o){return a*=i,o*=r,[e+n*a,t-n*o]}return s.invert=function(a,o){return[(a-e)/n*i,(t-o)/n*r]},s}function iu(n,e,t,i,r,s){if(!s)return N_(n,e,t,i,r);var a=pt(s),o=mt(s),c=a*n,l=o*n,u=a/n,h=o/n,f=(o*t-a*e)/n,p=(o*e+a*t)/n;function g(v,m){return v*=i,m*=r,[c*v-l*m+e,t-l*v-c*m]}return g.invert=function(v,m){return[i*(u*v-h*m+f),r*(p-h*v-u*m)]},g}function U_(n){return F_(function(){return n})()}function F_(n){var e,t=150,i=480,r=250,s=0,a=0,o=0,c=0,l=0,u,h=0,f=1,p=1,g=null,v=Kl,m=null,d,E,S,_=Wo,x=.5,A,T,L,y,M;function I(U){return L(U[0]*zt,U[1]*zt)}function z(U){return U=L.invert(U[0],U[1]),U&&[U[0]*En,U[1]*En]}I.stream=function(U){return y&&M===U?y:y=L_(D_(u)(v(A(_(M=U)))))},I.preclip=function(U){return arguments.length?(v=U,g=void 0,Z()):v},I.postclip=function(U){return arguments.length?(_=U,m=d=E=S=null,Z()):_},I.clipAngle=function(U){return arguments.length?(v=+U?h_(g=U*zt):(g=null,Kl),Z()):g*En},I.clipExtent=function(U){return arguments.length?(_=U==null?(m=d=E=S=null,Wo):d_(m=+U[0][0],d=+U[0][1],E=+U[1][0],S=+U[1][1]),Z()):m==null?null:[[m,d],[E,S]]},I.scale=function(U){return arguments.length?(t=+U,W()):t},I.translate=function(U){return arguments.length?(i=+U[0],r=+U[1],W()):[i,r]},I.center=function(U){return arguments.length?(s=U[0]%360*zt,a=U[1]%360*zt,W()):[s*En,a*En]},I.rotate=function(U){return arguments.length?(o=U[0]%360*zt,c=U[1]%360*zt,l=U.length>2?U[2]%360*zt:0,W()):[o*En,c*En,l*En]},I.angle=function(U){return arguments.length?(h=U%360*zt,W()):h*En},I.reflectX=function(U){return arguments.length?(f=U?-1:1,W()):f<0},I.reflectY=function(U){return arguments.length?(p=U?-1:1,W()):p<0},I.precision=function(U){return arguments.length?(A=nu(T,x=U*U),Z()):di(x)},I.fitExtent=function(U,q){return yh(I,U,q)},I.fitSize=function(U,q){return T_(I,U,q)},I.fitWidth=function(U,q){return R_(I,U,q)},I.fitHeight=function(U,q){return w_(I,U,q)};function W(){var U=iu(t,0,0,f,p,h).apply(null,e(s,a)),q=iu(t,i-U[0],r-U[1],f,p,h);return u=i_(o,c,l),T=Vo(e,q),L=Vo(u,T),A=nu(T,x),Z()}function Z(){return y=M=null,I}return function(){return e=n.apply(this,arguments),I.invert=e.invert&&z,W()}}function ru(n,e){return[n,e]}ru.invert=ru;function Mh(n,e){var t=e*e,i=t*t;return[n*(.8707-.131979*t+i*(-.013791+i*(.003971*t-.001529*i))),e*(1.007226+t*(.015085+i*(-.044475+.028874*t-.005916*i)))]}Mh.invert=function(n,e){var t=e,i=25,r;do{var s=t*t,a=s*s;t-=r=(t*(1.007226+s*(.015085+a*(-.044475+.028874*s-.005916*a)))-e)/(1.007226+s*(.015085*3+a*(-.044475*7+.028874*9*s-.005916*11*a)))}while(ot(r)>st&&--i>0);return[n/(.8707+(s=t*t)*(-.131979+s*(-.013791+s*s*s*(.003971-.001529*s)))),t]};function O_(){return U_(Mh).scale(175.295)}function B_(n){return n}function Eh(n){if(n==null)return B_;var e,t,i=n.scale[0],r=n.scale[1],s=n.translate[0],a=n.translate[1];return function(o,c){c||(e=t=0);var l=2,u=o.length,h=new Array(u);for(h[0]=(e+=o[0])*i+s,h[1]=(t+=o[1])*r+a;l<u;)h[l]=o[l],++l;return h}}function G_(n,e){for(var t,i=n.length,r=i-e;r<--i;)t=n[r],n[r++]=n[i],n[i]=t}function z_(n,e){return typeof e=="string"&&(e=n.objects[e]),e.type==="GeometryCollection"?{type:"FeatureCollection",features:e.geometries.map(function(t){return su(n,t)})}:su(n,e)}function su(n,e){var t=e.id,i=e.bbox,r=e.properties==null?{}:e.properties,s=H_(n,e);return t==null&&i==null?{type:"Feature",properties:r,geometry:s}:i==null?{type:"Feature",id:t,properties:r,geometry:s}:{type:"Feature",id:t,bbox:i,properties:r,geometry:s}}function H_(n,e){var t=Eh(n.transform),i=n.arcs;function r(u,h){h.length&&h.pop();for(var f=i[u<0?~u:u],p=0,g=f.length;p<g;++p)h.push(t(f[p],p));u<0&&G_(h,g)}function s(u){return t(u)}function a(u){for(var h=[],f=0,p=u.length;f<p;++f)r(u[f],h);return h.length<2&&h.push(h[0]),h}function o(u){for(var h=a(u);h.length<4;)h.push(h[0]);return h}function c(u){return u.map(o)}function l(u){var h=u.type,f;switch(h){case"GeometryCollection":return{type:h,geometries:u.geometries.map(l)};case"Point":f=s(u.coordinates);break;case"MultiPoint":f=u.coordinates.map(s);break;case"LineString":f=a(u.arcs);break;case"MultiLineString":f=u.arcs.map(a);break;case"Polygon":f=c(u.arcs);break;case"MultiPolygon":f=u.arcs.map(c);break;default:return null}return{type:h,coordinates:f}}return l(e)}var Js=Object.prototype.hasOwnProperty;function V_(n){var e=1/0,t=1/0,i=-1/0,r=-1/0;function s(h){h!=null&&Js.call(a,h.type)&&a[h.type](h)}var a={GeometryCollection:function(h){h.geometries.forEach(s)},Point:function(h){o(h.coordinates)},MultiPoint:function(h){h.coordinates.forEach(o)},LineString:function(h){c(h.arcs)},MultiLineString:function(h){h.arcs.forEach(c)},Polygon:function(h){h.arcs.forEach(c)},MultiPolygon:function(h){h.arcs.forEach(l)}};function o(h){var f=h[0],p=h[1];f<e&&(e=f),f>i&&(i=f),p<t&&(t=p),p>r&&(r=p)}function c(h){h.forEach(o)}function l(h){h.forEach(c)}for(var u in n)s(n[u]);return i>=e&&r>=t?[e,t,i,r]:void 0}function k_(n,e,t,i,r){arguments.length===3&&(i=Array,r=null);for(var s=new i(n=1<<Math.max(4,Math.ceil(Math.log(n)/Math.LN2))),a=n-1,o=0;o<n;++o)s[o]=r;function c(h){for(var f=e(h)&a,p=s[f],g=0;p!=r;){if(t(p,h))return!0;if(++g>=n)throw new Error("full hashset");p=s[f=f+1&a]}return s[f]=h,!0}function l(h){for(var f=e(h)&a,p=s[f],g=0;p!=r;){if(t(p,h))return!0;if(++g>=n)break;p=s[f=f+1&a]}return!1}function u(){for(var h=[],f=0,p=s.length;f<p;++f){var g=s[f];g!=r&&h.push(g)}return h}return{add:c,has:l,values:u}}function Ec(n,e,t,i,r,s){arguments.length===3&&(i=s=Array,r=null);for(var a=new i(n=1<<Math.max(4,Math.ceil(Math.log(n)/Math.LN2))),o=new s(n),c=n-1,l=0;l<n;++l)a[l]=r;function u(g,v){for(var m=e(g)&c,d=a[m],E=0;d!=r;){if(t(d,g))return o[m]=v;if(++E>=n)throw new Error("full hashmap");d=a[m=m+1&c]}return a[m]=g,o[m]=v,v}function h(g,v){for(var m=e(g)&c,d=a[m],E=0;d!=r;){if(t(d,g))return o[m];if(++E>=n)throw new Error("full hashmap");d=a[m=m+1&c]}return a[m]=g,o[m]=v,v}function f(g,v){for(var m=e(g)&c,d=a[m],E=0;d!=r;){if(t(d,g))return o[m];if(++E>=n)break;d=a[m=m+1&c]}return v}function p(){for(var g=[],v=0,m=a.length;v<m;++v){var d=a[v];d!=r&&g.push(d)}return g}return{set:u,maybeSet:h,get:f,keys:p}}function ni(n,e){return n[0]===e[0]&&n[1]===e[1]}var bh=new ArrayBuffer(16),au=new Float64Array(bh),vs=new Uint32Array(bh);function ec(n){au[0]=n[0],au[1]=n[1];var e=vs[0]^vs[1];return e=e<<5^e>>7^vs[2]^vs[3],e&2147483647}function W_(n){var e=n.coordinates,t=n.lines,i=n.rings,r=A(),s=new Int32Array(e.length),a=new Int32Array(e.length),o=new Int32Array(e.length),c=new Int8Array(e.length),l=0,u,h,f,p,g;for(u=0,h=e.length;u<h;++u)s[u]=a[u]=o[u]=-1;for(u=0,h=t.length;u<h;++u){var v=t[u],m=v[0],d=v[1];for(p=r[m],g=r[++m],++l,c[p]=1;++m<=d;)x(u,f=p,p=g,g=r[m]);++l,c[g]=1}for(u=0,h=e.length;u<h;++u)s[u]=-1;for(u=0,h=i.length;u<h;++u){var E=i[u],S=E[0]+1,_=E[1];for(f=r[_-1],p=r[S-1],g=r[S],x(u,f,p,g);++S<=_;)x(u,f=p,p=g,g=r[S])}function x(I,z,W,Z){if(s[W]!==I){s[W]=I;var U=a[W];if(U>=0){var q=o[W];(U!==z||q!==Z)&&(U!==Z||q!==z)&&(++l,c[W]=1)}else a[W]=z,o[W]=Z}}function A(){for(var I=Ec(e.length*1.4,T,L,Int32Array,-1,Int32Array),z=new Int32Array(e.length),W=0,Z=e.length;W<Z;++W)z[W]=I.maybeSet(W,W);return z}function T(I){return ec(e[I])}function L(I,z){return ni(e[I],e[z])}s=a=o=null;var y=k_(l*1.4,ec,ni),M;for(u=0,h=e.length;u<h;++u)c[M=r[u]]&&y.add(e[M]);return y}function X_(n){var e=W_(n),t=n.coordinates,i=n.lines,r=n.rings,s,a,o;for(a=0,o=i.length;a<o;++a)for(var c=i[a],l=c[0],u=c[1];++l<u;)e.has(t[l])&&(s={0:l,1:c[1]},c[1]=l,c=c.next=s);for(a=0,o=r.length;a<o;++a)for(var h=r[a],f=h[0],p=f,g=h[1],v=e.has(t[f]);++p<g;)e.has(t[p])&&(v?(s={0:p,1:h[1]},h[1]=p,h=h.next=s):(q_(t,f,g,g-p),t[g]=t[f],v=!0,p=f));return n}function q_(n,e,t,i){Ba(n,e,t),Ba(n,e,e+i),Ba(n,e+i,t)}function Ba(n,e,t){for(var i=e+(t---e>>1),r;e<i;++e,--t)r=n[e],n[e]=n[t],n[t]=r}function Y_(n){var e=n.coordinates,t=n.lines,i,r=n.rings,s,a=t.length+r.length,o,c;for(delete n.lines,delete n.rings,o=0,c=t.length;o<c;++o)for(i=t[o];i=i.next;)++a;for(o=0,c=r.length;o<c;++o)for(s=r[o];s=s.next;)++a;var l=Ec(a*2*1.4,ec,ni),u=n.arcs=[];for(o=0,c=t.length;o<c;++o){i=t[o];do h(i);while(i=i.next)}for(o=0,c=r.length;o<c;++o)if(s=r[o],s.next)do h(s);while(s=s.next);else f(s);function h(E){var S,_,x,A,T,L,y,M;if(x=l.get(S=e[E[0]])){for(y=0,M=x.length;y<M;++y)if(A=x[y],p(A,E)){E[0]=A[0],E[1]=A[1];return}}if(T=l.get(_=e[E[1]])){for(y=0,M=T.length;y<M;++y)if(L=T[y],g(L,E)){E[1]=L[0],E[0]=L[1];return}}x?x.push(E):l.set(S,[E]),T?T.push(E):l.set(_,[E]),u.push(E)}function f(E){var S,_,x,A,T;if(_=l.get(S=e[E[0]]))for(A=0,T=_.length;A<T;++A){if(x=_[A],v(x,E)){E[0]=x[0],E[1]=x[1];return}if(m(x,E)){E[0]=x[1],E[1]=x[0];return}}if(_=l.get(S=e[E[0]+d(E)]))for(A=0,T=_.length;A<T;++A){if(x=_[A],v(x,E)){E[0]=x[0],E[1]=x[1];return}if(m(x,E)){E[0]=x[1],E[1]=x[0];return}}_?_.push(E):l.set(S,[E]),u.push(E)}function p(E,S){var _=E[0],x=S[0],A=E[1],T=S[1];if(_-A!==x-T)return!1;for(;_<=A;++_,++x)if(!ni(e[_],e[x]))return!1;return!0}function g(E,S){var _=E[0],x=S[0],A=E[1],T=S[1];if(_-A!==x-T)return!1;for(;_<=A;++_,--T)if(!ni(e[_],e[T]))return!1;return!0}function v(E,S){var _=E[0],x=S[0],A=E[1],T=S[1],L=A-_;if(L!==T-x)return!1;for(var y=d(E),M=d(S),I=0;I<L;++I)if(!ni(e[_+(I+y)%L],e[x+(I+M)%L]))return!1;return!0}function m(E,S){var _=E[0],x=S[0],A=E[1],T=S[1],L=A-_;if(L!==T-x)return!1;for(var y=d(E),M=L-d(S),I=0;I<L;++I)if(!ni(e[_+(I+y)%L],e[T-(I+M)%L]))return!1;return!0}function d(E){for(var S=E[0],_=E[1],x=S,A=x,T=e[x];++x<_;){var L=e[x];(L[0]<T[0]||L[0]===T[0]&&L[1]<T[1])&&(A=x,T=L)}return A-S}return n}function K_(n){for(var e=-1,t=n.length;++e<t;){for(var i=n[e],r=0,s=1,a=i.length,o=i[0],c=o[0],l=o[1],u,h;++r<a;)o=i[r],u=o[0],h=o[1],(u!==c||h!==l)&&(i[s++]=[u-c,h-l],c=u,l=h);s===1&&(i[s++]=[0,0]),i.length=s}return n}function Z_(n){var e=-1,t=[],i=[],r=[];function s(h){h&&Js.call(a,h.type)&&a[h.type](h)}var a={GeometryCollection:function(h){h.geometries.forEach(s)},LineString:function(h){h.arcs=o(h.arcs)},MultiLineString:function(h){h.arcs=h.arcs.map(o)},Polygon:function(h){h.arcs=h.arcs.map(c)},MultiPolygon:function(h){h.arcs=h.arcs.map(l)}};function o(h){for(var f=0,p=h.length;f<p;++f)r[++e]=h[f];var g={0:e-p+1,1:e};return t.push(g),g}function c(h){for(var f=0,p=h.length;f<p;++f)r[++e]=h[f];var g={0:e-p+1,1:e};return i.push(g),g}function l(h){return h.map(c)}for(var u in n)s(n[u]);return{type:"Topology",coordinates:r,lines:t,rings:i,objects:n}}function $_(n){var e={},t;for(t in n)e[t]=J_(n[t]);return e}function J_(n){return n==null?{type:null}:(n.type==="FeatureCollection"?j_:n.type==="Feature"?Ah:bc)(n)}function j_(n){var e={type:"GeometryCollection",geometries:n.features.map(Ah)};return n.bbox!=null&&(e.bbox=n.bbox),e}function Ah(n){var e=bc(n.geometry),t;n.id!=null&&(e.id=n.id),n.bbox!=null&&(e.bbox=n.bbox);for(t in n.properties){e.properties=n.properties;break}return e}function bc(n){if(n==null)return{type:null};var e=n.type==="GeometryCollection"?{type:"GeometryCollection",geometries:n.geometries.map(bc)}:n.type==="Point"||n.type==="MultiPoint"?{type:n.type,coordinates:n.coordinates}:{type:n.type,arcs:n.coordinates};return n.bbox!=null&&(e.bbox=n.bbox),e}function Q_(n,e,t){var i=e[0],r=e[1],s=e[2],a=e[3],o=s-i?(t-1)/(s-i):1,c=a-r?(t-1)/(a-r):1;function l(d){return[Math.round((d[0]-i)*o),Math.round((d[1]-r)*c)]}function u(d,E){for(var S=-1,_=0,x=d.length,A=new Array(x),T,L,y,M,I;++S<x;)T=d[S],M=Math.round((T[0]-i)*o),I=Math.round((T[1]-r)*c),(M!==L||I!==y)&&(A[_++]=[L=M,y=I]);for(A.length=_;_<E;)_=A.push([A[0][0],A[0][1]]);return A}function h(d){return u(d,2)}function f(d){return u(d,4)}function p(d){return d.map(f)}function g(d){d!=null&&Js.call(v,d.type)&&v[d.type](d)}var v={GeometryCollection:function(d){d.geometries.forEach(g)},Point:function(d){d.coordinates=l(d.coordinates)},MultiPoint:function(d){d.coordinates=d.coordinates.map(l)},LineString:function(d){d.arcs=h(d.arcs)},MultiLineString:function(d){d.arcs=d.arcs.map(h)},Polygon:function(d){d.arcs=p(d.arcs)},MultiPolygon:function(d){d.arcs=d.arcs.map(p)}};for(var m in n)g(n[m]);return{scale:[1/o,1/c],translate:[i,r]}}function eS(n,e){var t=V_(n=$_(n)),i=t&&Q_(n,t,e),r=Y_(X_(Z_(n))),s=r.coordinates,a=Ec(r.arcs.length*1.4,tS,nS);n=r.objects,r.bbox=t,r.arcs=r.arcs.map(function(f,p){return a.set(f,p),s.slice(f[0],f[1]+1)}),delete r.coordinates,s=null;function o(f){f&&Js.call(c,f.type)&&c[f.type](f)}var c={GeometryCollection:function(f){f.geometries.forEach(o)},LineString:function(f){f.arcs=l(f.arcs)},MultiLineString:function(f){f.arcs=f.arcs.map(l)},Polygon:function(f){f.arcs=f.arcs.map(l)},MultiPolygon:function(f){f.arcs=f.arcs.map(u)}};function l(f){var p=[];do{var g=a.get(f);p.push(f[0]<f[1]?g:~g)}while(f=f.next);return p}function u(f){return f.map(l)}for(var h in n)o(n[h]);return i&&(r.transform=i,r.arcs=K_(r.arcs)),r}function tS(n){var e=n[0],t=n[1],i;return t<e&&(i=e,e=t,t=i),e+31*t}function nS(n,e){var t=n[0],i=n[1],r=e[0],s=e[1],a;return i<t&&(a=t,t=i,i=a),s<r&&(a=r,r=s,s=a),t===r&&i===s}function iS(n){var e=n[0],t=n[1],i=n[2];return Math.abs((e[0]-i[0])*(t[1]-e[1])-(e[0]-t[0])*(i[1]-e[1]))/2}function _s(n,e){return n[1][2]-e[1][2]}function rS(){var n={},e=[],t=0;n.push=function(s){return i(e[s._=t]=s,t++),t},n.pop=function(){if(!(t<=0)){var s=e[0],a;return--t>0&&(a=e[t],r(e[a._=0]=a,0)),s}},n.remove=function(s){var a=s._,o;if(e[a]===s)return a!==--t&&(o=e[t],(_s(o,s)<0?i:r)(e[o._=a]=o,a)),a};function i(s,a){for(;a>0;){var o=(a+1>>1)-1,c=e[o];if(_s(s,c)>=0)break;e[c._=a]=c,e[s._=a=o]=s}}function r(s,a){for(;;){var o=a+1<<1,c=o-1,l=a,u=e[l];if(c<t&&_s(e[c],u)<0&&(u=e[l=c]),o<t&&_s(e[o],u)<0&&(u=e[l=o]),l===a)break;e[u._=a]=u,e[s._=a=l]=s}}return n}function sS(n){return[n[0],n[1],0]}function aS(n,e){var t=n.transform?Eh(n.transform):sS,i=rS();e==null&&(e=iS);var r=n.arcs.map(function(a){var o=[],c=0,l,u,h;for(a=a.map(t),u=1,h=a.length-1;u<h;++u)l=[a[u-1],a[u],a[u+1]],l[1][2]=e(l),o.push(l),i.push(l);for(a[0][2]=a[h][2]=1/0,u=0,h=o.length;u<h;++u)l=o[u],l.previous=o[u-1],l.next=o[u+1];for(;l=i.pop();){var f=l.previous,p=l.next;l[1][2]<c?l[1][2]=c:c=l[1][2],f&&(f.next=p,f[2]=l[2],s(f)),p&&(p.previous=f,p[0]=l[0],s(p))}return a});function s(a){i.remove(a),a[1][2]=e(a),i.push(a)}return{type:"Topology",bbox:n.bbox,objects:n.objects,arcs:r}}function oS(n,e){e=e==null?Number.MIN_VALUE:+e;var t=n.arcs.map(function(i){for(var r=-1,s=0,a=i.length,o=new Array(a),c;++r<a;)(c=i[r])[2]>=e&&(o[s++]=[c[0],c[1]]);return o.length=s,o});return{type:"Topology",transform:n.transform,bbox:n.bbox,objects:n.objects,arcs:t}}function cS(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Ga={};const lS=JSON.parse('[["AF","AFG","004","ISO 3166-2:AF"],["AL","ALB","008","ISO 3166-2:AL"],["DZ","DZA","012","ISO 3166-2:DZ"],["AS","ASM","016","ISO 3166-2:AS"],["AD","AND","020","ISO 3166-2:AD"],["AO","AGO","024","ISO 3166-2:AO"],["AI","AIA","660","ISO 3166-2:AI"],["AQ","ATA","010","ISO 3166-2:AQ"],["AG","ATG","028","ISO 3166-2:AG"],["AR","ARG","032","ISO 3166-2:AR"],["AM","ARM","051","ISO 3166-2:AM"],["AW","ABW","533","ISO 3166-2:AW"],["AU","AUS","036","ISO 3166-2:AU"],["AT","AUT","040","ISO 3166-2:AT"],["AZ","AZE","031","ISO 3166-2:AZ"],["BS","BHS","044","ISO 3166-2:BS"],["BH","BHR","048","ISO 3166-2:BH"],["BD","BGD","050","ISO 3166-2:BD"],["BB","BRB","052","ISO 3166-2:BB"],["BY","BLR","112","ISO 3166-2:BY"],["BE","BEL","056","ISO 3166-2:BE"],["BZ","BLZ","084","ISO 3166-2:BZ"],["BJ","BEN","204","ISO 3166-2:BJ"],["BM","BMU","060","ISO 3166-2:BM"],["BT","BTN","064","ISO 3166-2:BT"],["BO","BOL","068","ISO 3166-2:BO"],["BA","BIH","070","ISO 3166-2:BA"],["BW","BWA","072","ISO 3166-2:BW"],["BV","BVT","074","ISO 3166-2:BV"],["BR","BRA","076","ISO 3166-2:BR"],["IO","IOT","086","ISO 3166-2:IO"],["BN","BRN","096","ISO 3166-2:BN"],["BG","BGR","100","ISO 3166-2:BG"],["BF","BFA","854","ISO 3166-2:BF"],["BI","BDI","108","ISO 3166-2:BI"],["KH","KHM","116","ISO 3166-2:KH"],["CM","CMR","120","ISO 3166-2:CM"],["CA","CAN","124","ISO 3166-2:CA"],["CV","CPV","132","ISO 3166-2:CV"],["KY","CYM","136","ISO 3166-2:KY"],["CF","CAF","140","ISO 3166-2:CF"],["TD","TCD","148","ISO 3166-2:TD"],["CL","CHL","152","ISO 3166-2:CL"],["CN","CHN","156","ISO 3166-2:CN"],["CX","CXR","162","ISO 3166-2:CX"],["CC","CCK","166","ISO 3166-2:CC"],["CO","COL","170","ISO 3166-2:CO"],["KM","COM","174","ISO 3166-2:KM"],["CG","COG","178","ISO 3166-2:CG"],["CD","COD","180","ISO 3166-2:CD"],["CK","COK","184","ISO 3166-2:CK"],["CR","CRI","188","ISO 3166-2:CR"],["CI","CIV","384","ISO 3166-2:CI"],["HR","HRV","191","ISO 3166-2:HR"],["CU","CUB","192","ISO 3166-2:CU"],["CY","CYP","196","ISO 3166-2:CY"],["CZ","CZE","203","ISO 3166-2:CZ"],["DK","DNK","208","ISO 3166-2:DK"],["DJ","DJI","262","ISO 3166-2:DJ"],["DM","DMA","212","ISO 3166-2:DM"],["DO","DOM","214","ISO 3166-2:DO"],["EC","ECU","218","ISO 3166-2:EC"],["EG","EGY","818","ISO 3166-2:EG"],["SV","SLV","222","ISO 3166-2:SV"],["GQ","GNQ","226","ISO 3166-2:GQ"],["ER","ERI","232","ISO 3166-2:ER"],["EE","EST","233","ISO 3166-2:EE"],["ET","ETH","231","ISO 3166-2:ET"],["FK","FLK","238","ISO 3166-2:FK"],["FO","FRO","234","ISO 3166-2:FO"],["FJ","FJI","242","ISO 3166-2:FJ"],["FI","FIN","246","ISO 3166-2:FI"],["FR","FRA","250","ISO 3166-2:FR"],["GF","GUF","254","ISO 3166-2:GF"],["PF","PYF","258","ISO 3166-2:PF"],["TF","ATF","260","ISO 3166-2:TF"],["GA","GAB","266","ISO 3166-2:GA"],["GM","GMB","270","ISO 3166-2:GM"],["GE","GEO","268","ISO 3166-2:GE"],["DE","DEU","276","ISO 3166-2:DE"],["GH","GHA","288","ISO 3166-2:GH"],["GI","GIB","292","ISO 3166-2:GI"],["GR","GRC","300","ISO 3166-2:GR"],["GL","GRL","304","ISO 3166-2:GL"],["GD","GRD","308","ISO 3166-2:GD"],["GP","GLP","312","ISO 3166-2:GP"],["GU","GUM","316","ISO 3166-2:GU"],["GT","GTM","320","ISO 3166-2:GT"],["GN","GIN","324","ISO 3166-2:GN"],["GW","GNB","624","ISO 3166-2:GW"],["GY","GUY","328","ISO 3166-2:GY"],["HT","HTI","332","ISO 3166-2:HT"],["HM","HMD","334","ISO 3166-2:HM"],["VA","VAT","336","ISO 3166-2:VA"],["HN","HND","340","ISO 3166-2:HN"],["HK","HKG","344","ISO 3166-2:HK"],["HU","HUN","348","ISO 3166-2:HU"],["IS","ISL","352","ISO 3166-2:IS"],["IN","IND","356","ISO 3166-2:IN"],["ID","IDN","360","ISO 3166-2:ID"],["IR","IRN","364","ISO 3166-2:IR"],["IQ","IRQ","368","ISO 3166-2:IQ"],["IE","IRL","372","ISO 3166-2:IE"],["IL","ISR","376","ISO 3166-2:IL"],["IT","ITA","380","ISO 3166-2:IT"],["JM","JAM","388","ISO 3166-2:JM"],["JP","JPN","392","ISO 3166-2:JP"],["JO","JOR","400","ISO 3166-2:JO"],["KZ","KAZ","398","ISO 3166-2:KZ"],["KE","KEN","404","ISO 3166-2:KE"],["KI","KIR","296","ISO 3166-2:KI"],["KP","PRK","408","ISO 3166-2:KP"],["KR","KOR","410","ISO 3166-2:KR"],["KW","KWT","414","ISO 3166-2:KW"],["KG","KGZ","417","ISO 3166-2:KG"],["LA","LAO","418","ISO 3166-2:LA"],["LV","LVA","428","ISO 3166-2:LV"],["LB","LBN","422","ISO 3166-2:LB"],["LS","LSO","426","ISO 3166-2:LS"],["LR","LBR","430","ISO 3166-2:LR"],["LY","LBY","434","ISO 3166-2:LY"],["LI","LIE","438","ISO 3166-2:LI"],["LT","LTU","440","ISO 3166-2:LT"],["LU","LUX","442","ISO 3166-2:LU"],["MO","MAC","446","ISO 3166-2:MO"],["MG","MDG","450","ISO 3166-2:MG"],["MW","MWI","454","ISO 3166-2:MW"],["MY","MYS","458","ISO 3166-2:MY"],["MV","MDV","462","ISO 3166-2:MV"],["ML","MLI","466","ISO 3166-2:ML"],["MT","MLT","470","ISO 3166-2:MT"],["MH","MHL","584","ISO 3166-2:MH"],["MQ","MTQ","474","ISO 3166-2:MQ"],["MR","MRT","478","ISO 3166-2:MR"],["MU","MUS","480","ISO 3166-2:MU"],["YT","MYT","175","ISO 3166-2:YT"],["MX","MEX","484","ISO 3166-2:MX"],["FM","FSM","583","ISO 3166-2:FM"],["MD","MDA","498","ISO 3166-2:MD"],["MC","MCO","492","ISO 3166-2:MC"],["MN","MNG","496","ISO 3166-2:MN"],["MS","MSR","500","ISO 3166-2:MS"],["MA","MAR","504","ISO 3166-2:MA"],["MZ","MOZ","508","ISO 3166-2:MZ"],["MM","MMR","104","ISO 3166-2:MM"],["NA","NAM","516","ISO 3166-2:NA"],["NR","NRU","520","ISO 3166-2:NR"],["NP","NPL","524","ISO 3166-2:NP"],["NL","NLD","528","ISO 3166-2:NL"],["NC","NCL","540","ISO 3166-2:NC"],["NZ","NZL","554","ISO 3166-2:NZ"],["NI","NIC","558","ISO 3166-2:NI"],["NE","NER","562","ISO 3166-2:NE"],["NG","NGA","566","ISO 3166-2:NG"],["NU","NIU","570","ISO 3166-2:NU"],["NF","NFK","574","ISO 3166-2:NF"],["MP","MNP","580","ISO 3166-2:MP"],["MK","MKD","807","ISO 3166-2:MK"],["NO","NOR","578","ISO 3166-2:NO"],["OM","OMN","512","ISO 3166-2:OM"],["PK","PAK","586","ISO 3166-2:PK"],["PW","PLW","585","ISO 3166-2:PW"],["PS","PSE","275","ISO 3166-2:PS"],["PA","PAN","591","ISO 3166-2:PA"],["PG","PNG","598","ISO 3166-2:PG"],["PY","PRY","600","ISO 3166-2:PY"],["PE","PER","604","ISO 3166-2:PE"],["PH","PHL","608","ISO 3166-2:PH"],["PN","PCN","612","ISO 3166-2:PN"],["PL","POL","616","ISO 3166-2:PL"],["PT","PRT","620","ISO 3166-2:PT"],["PR","PRI","630","ISO 3166-2:PR"],["QA","QAT","634","ISO 3166-2:QA"],["RE","REU","638","ISO 3166-2:RE"],["RO","ROU","642","ISO 3166-2:RO"],["RU","RUS","643","ISO 3166-2:RU"],["RW","RWA","646","ISO 3166-2:RW"],["SH","SHN","654","ISO 3166-2:SH"],["KN","KNA","659","ISO 3166-2:KN"],["LC","LCA","662","ISO 3166-2:LC"],["PM","SPM","666","ISO 3166-2:PM"],["VC","VCT","670","ISO 3166-2:VC"],["WS","WSM","882","ISO 3166-2:WS"],["SM","SMR","674","ISO 3166-2:SM"],["ST","STP","678","ISO 3166-2:ST"],["SA","SAU","682","ISO 3166-2:SA"],["SN","SEN","686","ISO 3166-2:SN"],["SC","SYC","690","ISO 3166-2:SC"],["SL","SLE","694","ISO 3166-2:SL"],["SG","SGP","702","ISO 3166-2:SG"],["SK","SVK","703","ISO 3166-2:SK"],["SI","SVN","705","ISO 3166-2:SI"],["SB","SLB","090","ISO 3166-2:SB"],["SO","SOM","706","ISO 3166-2:SO"],["ZA","ZAF","710","ISO 3166-2:ZA"],["GS","SGS","239","ISO 3166-2:GS"],["ES","ESP","724","ISO 3166-2:ES"],["LK","LKA","144","ISO 3166-2:LK"],["SD","SDN","729","ISO 3166-2:SD"],["SR","SUR","740","ISO 3166-2:SR"],["SJ","SJM","744","ISO 3166-2:SJ"],["SZ","SWZ","748","ISO 3166-2:SZ"],["SE","SWE","752","ISO 3166-2:SE"],["CH","CHE","756","ISO 3166-2:CH"],["SY","SYR","760","ISO 3166-2:SY"],["TW","TWN","158","ISO 3166-2:TW"],["TJ","TJK","762","ISO 3166-2:TJ"],["TZ","TZA","834","ISO 3166-2:TZ"],["TH","THA","764","ISO 3166-2:TH"],["TL","TLS","626","ISO 3166-2:TL"],["TG","TGO","768","ISO 3166-2:TG"],["TK","TKL","772","ISO 3166-2:TK"],["TO","TON","776","ISO 3166-2:TO"],["TT","TTO","780","ISO 3166-2:TT"],["TN","TUN","788","ISO 3166-2:TN"],["TR","TUR","792","ISO 3166-2:TR"],["TM","TKM","795","ISO 3166-2:TM"],["TC","TCA","796","ISO 3166-2:TC"],["TV","TUV","798","ISO 3166-2:TV"],["UG","UGA","800","ISO 3166-2:UG"],["UA","UKR","804","ISO 3166-2:UA"],["AE","ARE","784","ISO 3166-2:AE"],["GB","GBR","826","ISO 3166-2:GB"],["US","USA","840","ISO 3166-2:US"],["UM","UMI","581","ISO 3166-2:UM"],["UY","URY","858","ISO 3166-2:UY"],["UZ","UZB","860","ISO 3166-2:UZ"],["VU","VUT","548","ISO 3166-2:VU"],["VE","VEN","862","ISO 3166-2:VE"],["VN","VNM","704","ISO 3166-2:VN"],["VG","VGB","092","ISO 3166-2:VG"],["VI","VIR","850","ISO 3166-2:VI"],["WF","WLF","876","ISO 3166-2:WF"],["EH","ESH","732","ISO 3166-2:EH"],["YE","YEM","887","ISO 3166-2:YE"],["ZM","ZMB","894","ISO 3166-2:ZM"],["ZW","ZWE","716","ISO 3166-2:ZW"],["AX","ALA","248","ISO 3166-2:AX"],["BQ","BES","535","ISO 3166-2:BQ"],["CW","CUW","531","ISO 3166-2:CW"],["GG","GGY","831","ISO 3166-2:GG"],["IM","IMN","833","ISO 3166-2:IM"],["JE","JEY","832","ISO 3166-2:JE"],["ME","MNE","499","ISO 3166-2:ME"],["BL","BLM","652","ISO 3166-2:BL"],["MF","MAF","663","ISO 3166-2:MF"],["RS","SRB","688","ISO 3166-2:RS"],["SX","SXM","534","ISO 3166-2:SX"],["SS","SSD","728","ISO 3166-2:SS"],["XK","XKK","983","ISO 3166-2:XK"]]'),uS=["br","cy","dv","sw","eu","af","am","ha","ku","ml","mt","no","ps","sd","so","sq","ta","tg","tt","ug","ur","vi","ar","az","be","bg","bn","bs","ca","cs","da","de","el","en","es","et","fa","fi","fr","ga","gl","he","hi","hr","hu","hy","id","is","it","ja","ka","kk","km","ko","ky","lt","lv","mk","mn","mr","ms","nb","nl","nn","pl","pt","ro","ru","sk","sl","sr","sv","th","tk","tr","uk","uz","zh"];var ar={},ou;function hS(){if(ou)return ar;ou=1,ar.remove=s;for(var n=[{base:" ",chars:" "},{base:"0",chars:"߀"},{base:"A",chars:"ⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",chars:"Ꜳ"},{base:"AE",chars:"ÆǼǢ"},{base:"AO",chars:"Ꜵ"},{base:"AU",chars:"Ꜷ"},{base:"AV",chars:"ꜸꜺ"},{base:"AY",chars:"Ꜽ"},{base:"B",chars:"ⒷＢḂḄḆɃƁ"},{base:"C",chars:"ⒸＣꜾḈĆCĈĊČÇƇȻ"},{base:"D",chars:"ⒹＤḊĎḌḐḒḎĐƊƉᴅꝹ"},{base:"Dh",chars:"Ð"},{base:"DZ",chars:"ǱǄ"},{base:"Dz",chars:"ǲǅ"},{base:"E",chars:"ɛⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎᴇ"},{base:"F",chars:"ꝼⒻＦḞƑꝻ"},{base:"G",chars:"ⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾɢ"},{base:"H",chars:"ⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",chars:"ⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",chars:"ⒿＪĴɈȷ"},{base:"K",chars:"ⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",chars:"ⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",chars:"Ǉ"},{base:"Lj",chars:"ǈ"},{base:"M",chars:"ⓂＭḾṀṂⱮƜϻ"},{base:"N",chars:"ꞤȠⓃＮǸŃÑṄŇṆŅṊṈƝꞐᴎ"},{base:"NJ",chars:"Ǌ"},{base:"Nj",chars:"ǋ"},{base:"O",chars:"ⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OE",chars:"Œ"},{base:"OI",chars:"Ƣ"},{base:"OO",chars:"Ꝏ"},{base:"OU",chars:"Ȣ"},{base:"P",chars:"ⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",chars:"ⓆＱꝖꝘɊ"},{base:"R",chars:"ⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",chars:"ⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",chars:"ⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"Th",chars:"Þ"},{base:"TZ",chars:"Ꜩ"},{base:"U",chars:"ⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",chars:"ⓋＶṼṾƲꝞɅ"},{base:"VY",chars:"Ꝡ"},{base:"W",chars:"ⓌＷẀẂŴẆẄẈⱲ"},{base:"X",chars:"ⓍＸẊẌ"},{base:"Y",chars:"ⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",chars:"ⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",chars:"ⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐɑ"},{base:"aa",chars:"ꜳ"},{base:"ae",chars:"æǽǣ"},{base:"ao",chars:"ꜵ"},{base:"au",chars:"ꜷ"},{base:"av",chars:"ꜹꜻ"},{base:"ay",chars:"ꜽ"},{base:"b",chars:"ⓑｂḃḅḇƀƃɓƂ"},{base:"c",chars:"ｃⓒćĉċčçḉƈȼꜿↄ"},{base:"d",chars:"ⓓｄḋďḍḑḓḏđƌɖɗƋᏧԁꞪ"},{base:"dh",chars:"ð"},{base:"dz",chars:"ǳǆ"},{base:"e",chars:"ⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇǝ"},{base:"f",chars:"ⓕｆḟƒ"},{base:"ff",chars:"ﬀ"},{base:"fi",chars:"ﬁ"},{base:"fl",chars:"ﬂ"},{base:"ffi",chars:"ﬃ"},{base:"ffl",chars:"ﬄ"},{base:"g",chars:"ⓖｇǵĝḡğġǧģǥɠꞡꝿᵹ"},{base:"h",chars:"ⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",chars:"ƕ"},{base:"i",chars:"ⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",chars:"ⓙｊĵǰɉ"},{base:"k",chars:"ⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",chars:"ⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇɭ"},{base:"lj",chars:"ǉ"},{base:"m",chars:"ⓜｍḿṁṃɱɯ"},{base:"n",chars:"ⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥлԉ"},{base:"nj",chars:"ǌ"},{base:"o",chars:"ⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿꝋꝍɵɔᴑ"},{base:"oe",chars:"œ"},{base:"oi",chars:"ƣ"},{base:"oo",chars:"ꝏ"},{base:"ou",chars:"ȣ"},{base:"p",chars:"ⓟｐṕṗƥᵽꝑꝓꝕρ"},{base:"q",chars:"ⓠｑɋꝗꝙ"},{base:"r",chars:"ⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",chars:"ⓢｓśṥŝṡšṧṣṩșşȿꞩꞅẛʂ"},{base:"ss",chars:"ß"},{base:"t",chars:"ⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"th",chars:"þ"},{base:"tz",chars:"ꜩ"},{base:"u",chars:"ⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",chars:"ⓥｖṽṿʋꝟʌ"},{base:"vy",chars:"ꝡ"},{base:"w",chars:"ⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",chars:"ⓧｘẋẍ"},{base:"y",chars:"ⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",chars:"ⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],e={},t=0;t<n.length;t+=1)for(var i=n[t].chars,r=0;r<i.length;r+=1)e[i[r]]=n[t].base;function s(a){return a.replace(/[^\u0000-\u007e]/g,function(o){return e[o]||o})}return ar.replacementList=n,ar.diacriticsMap=e,ar}var cu;function fS(){return cu||(cu=1,(function(n){const e=lS,t=uS,i=hS().remove,r={},s={},a={},o={},c={};e.forEach(function(x){const A=x;s[A[0]]=A[1],a[A[1]]=A[0],o[A[2]]=A[0],c[A[0]]=A[2]});function l(x){return("000"+(x||"")).slice(-3)}function u(x,A){return Object.prototype.hasOwnProperty.call(x,A)}function h(x,A){return Object.keys(x).reduce(function(T,L){const y=x[L];return T[L]=A(y,L),T},{})}function f(x,A){switch(x){case"official":return Array.isArray(A)?A[0]:A;case"all":return typeof A=="string"?[A]:A;case"alias":return Array.isArray(A)?A[1]||A[0]:A;default:throw new TypeError("LocaleNameType must be one of these: all, official, alias!")}}n.registerLocale=function(x){if(!x.locale)throw new TypeError("Missing localeData.locale");if(!x.countries)throw new TypeError("Missing localeData.countries");r[x.locale]=x.countries};function p(x){return a[x]}n.alpha3ToAlpha2=p;function g(x){return s[x]}n.alpha2ToAlpha3=g;function v(x){return c[p(x)]}n.alpha3ToNumeric=v;function m(x){return c[x]}n.alpha2ToNumeric=m;function d(x){const A=l(x);return g(o[A])}n.numericToAlpha3=d;function E(x){const A=l(x);return o[A]}n.numericToAlpha2=E;function S(x){if(typeof x=="string"){if(/^[0-9]*$/.test(x))return d(x);if(x.length===2)return g(x.toUpperCase());if(x.length===3)return x.toUpperCase()}if(typeof x=="number")return d(x)}n.toAlpha3=S;function _(x){if(typeof x=="string"){if(/^[0-9]*$/.test(x))return E(x);if(x.length===2)return x.toUpperCase();if(x.length===3)return p(x.toUpperCase())}if(typeof x=="number")return E(x)}n.toAlpha2=_,n.getName=function(x,A,T={}){"select"in T||(T.select="official");try{const y=r[A.toLowerCase()][_(x)];return f(T.select,y)}catch{return}},n.getNames=function(x,A={}){"select"in A||(A.select="official");const T=r[x.toLowerCase()];return T===void 0?{}:h(T,function(L){return f(A.select,L)})},n.getAlpha2Code=function(x,A){const T=y=>y.toLowerCase(),L=(y,M)=>T(y)===T(M);try{const y=r[A.toLowerCase()];for(const M in y)if(u(y,M)){if(typeof y[M]=="string"&&L(y[M],x))return M;if(Array.isArray(y[M])){for(const I of y[M])if(L(I,x))return M}}return}catch{return}},n.getSimpleAlpha2Code=function(x,A){const T=y=>i(y.toLowerCase()),L=(y,M)=>T(y)===T(M);try{const y=r[A.toLowerCase()];for(const M in y)if(u(y,M)){if(typeof y[M]=="string"&&L(y[M],x))return M;if(Array.isArray(y[M])){for(const I of y[M])if(L(I,x))return M}}return}catch{return}},n.getAlpha2Codes=function(){return s},n.getAlpha3Code=function(x,A){const T=n.getAlpha2Code(x,A);if(T)return n.toAlpha3(T)},n.getSimpleAlpha3Code=function(x,A){const T=n.getSimpleAlpha2Code(x,A);if(T)return n.toAlpha3(T)},n.getAlpha3Codes=function(){return a},n.getNumericCodes=function(){return o},n.langs=function(){return Object.keys(r)},n.getSupportedLanguages=function(){return t},n.isValid=function(x){if(!x)return!1;const A=x.toString().toUpperCase();return u(a,A)||u(s,A)||u(o,A)}})(Ga)),Ga}var dS=fS();const wt=cS(dS),pS="en",mS={AF:"Afghanistan",AL:"Albania",DZ:"Algeria",AS:"American Samoa",AD:"Andorra",AO:"Angola",AI:"Anguilla",AQ:"Antarctica",AG:"Antigua and Barbuda",AR:"Argentina",AM:"Armenia",AW:"Aruba",AU:"Australia",AT:"Austria",AZ:"Azerbaijan",BS:"Bahamas",BH:"Bahrain",BD:"Bangladesh",BB:"Barbados",BY:"Belarus",BE:"Belgium",BZ:"Belize",BJ:"Benin",BM:"Bermuda",BT:"Bhutan",BO:"Bolivia",BA:"Bosnia and Herzegovina",BW:"Botswana",BV:"Bouvet Island",BR:"Brazil",IO:"British Indian Ocean Territory",BN:"Brunei Darussalam",BG:"Bulgaria",BF:"Burkina Faso",BI:"Burundi",KH:"Cambodia",CM:"Cameroon",CA:"Canada",CV:"Cape Verde",KY:"Cayman Islands",CF:"Central African Republic",TD:"Chad",CL:"Chile",CN:["People's Republic of China","China"],CX:"Christmas Island",CC:"Cocos (Keeling) Islands",CO:"Colombia",KM:"Comoros",CG:["Republic of the Congo","Congo"],CD:["Democratic Republic of the Congo","Congo"],CK:"Cook Islands",CR:"Costa Rica",CI:["Cote d'Ivoire","Côte d'Ivoire","Ivory Coast"],HR:"Croatia",CU:"Cuba",CY:"Cyprus",CZ:["Czech Republic","Czechia"],DK:"Denmark",DJ:"Djibouti",DM:"Dominica",DO:"Dominican Republic",EC:"Ecuador",EG:"Egypt",SV:"El Salvador",GQ:"Equatorial Guinea",ER:"Eritrea",EE:"Estonia",ET:"Ethiopia",FK:"Falkland Islands (Malvinas)",FO:"Faroe Islands",FJ:"Fiji",FI:"Finland",FR:"France",GF:"French Guiana",PF:"French Polynesia",TF:"French Southern Territories",GA:"Gabon",GM:["Republic of The Gambia","The Gambia","Gambia"],GE:"Georgia",DE:"Germany",GH:"Ghana",GI:"Gibraltar",GR:"Greece",GL:"Greenland",GD:"Grenada",GP:"Guadeloupe",GU:"Guam",GT:"Guatemala",GN:"Guinea",GW:"Guinea-Bissau",GY:"Guyana",HT:"Haiti",HM:"Heard Island and McDonald Islands",VA:"Holy See (Vatican City State)",HN:"Honduras",HK:"Hong Kong",HU:"Hungary",IS:"Iceland",IN:"India",ID:"Indonesia",IR:["Islamic Republic of Iran","Iran"],IQ:"Iraq",IE:"Ireland",IL:"Israel",IT:"Italy",JM:"Jamaica",JP:"Japan",JO:"Jordan",KZ:"Kazakhstan",KE:"Kenya",KI:"Kiribati",KP:"North Korea",KR:["South Korea","Korea, Republic of","Republic of Korea"],KW:"Kuwait",KG:"Kyrgyzstan",LA:"Lao People's Democratic Republic",LV:"Latvia",LB:"Lebanon",LS:"Lesotho",LR:"Liberia",LY:"Libya",LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",MO:"Macao",MG:"Madagascar",MW:"Malawi",MY:"Malaysia",MV:"Maldives",ML:"Mali",MT:"Malta",MH:"Marshall Islands",MQ:"Martinique",MR:"Mauritania",MU:"Mauritius",YT:"Mayotte",MX:"Mexico",FM:"Micronesia, Federated States of",MD:"Moldova, Republic of",MC:"Monaco",MN:"Mongolia",MS:"Montserrat",MA:"Morocco",MZ:"Mozambique",MM:"Myanmar",NA:"Namibia",NR:"Nauru",NP:"Nepal",NL:["Netherlands","The Netherlands","Netherlands (Kingdom of the)"],NC:"New Caledonia",NZ:"New Zealand",NI:"Nicaragua",NE:"Niger",NG:"Nigeria",NU:"Niue",NF:"Norfolk Island",MK:["The Republic of North Macedonia","North Macedonia"],MP:"Northern Mariana Islands",NO:"Norway",OM:"Oman",PK:"Pakistan",PW:"Palau",PS:["State of Palestine","Palestine"],PA:"Panama",PG:"Papua New Guinea",PY:"Paraguay",PE:"Peru",PH:"Philippines",PN:["Pitcairn","Pitcairn Islands"],PL:"Poland",PT:"Portugal",PR:"Puerto Rico",QA:"Qatar",RE:"Reunion",RO:"Romania",RU:["Russian Federation","Russia"],RW:"Rwanda",SH:"Saint Helena",KN:"Saint Kitts and Nevis",LC:"Saint Lucia",PM:"Saint Pierre and Miquelon",VC:"Saint Vincent and the Grenadines",WS:"Samoa",SM:"San Marino",ST:"Sao Tome and Principe",SA:"Saudi Arabia",SN:"Senegal",SC:"Seychelles",SL:"Sierra Leone",SG:"Singapore",SK:"Slovakia",SI:"Slovenia",SB:"Solomon Islands",SO:"Somalia",ZA:"South Africa",GS:"South Georgia and the South Sandwich Islands",ES:"Spain",LK:"Sri Lanka",SD:"Sudan",SR:"Suriname",SJ:"Svalbard and Jan Mayen",SZ:"Eswatini",SE:"Sweden",CH:"Switzerland",SY:"Syrian Arab Republic",TW:["Taiwan, Province of China","Taiwan"],TJ:"Tajikistan",TZ:["United Republic of Tanzania","Tanzania"],TH:"Thailand",TL:"Timor-Leste",TG:"Togo",TK:"Tokelau",TO:"Tonga",TT:"Trinidad and Tobago",TN:"Tunisia",TR:["Türkiye","Turkey"],TM:"Turkmenistan",TC:"Turks and Caicos Islands",TV:"Tuvalu",UG:"Uganda",UA:"Ukraine",AE:["United Arab Emirates","UAE"],GB:["United Kingdom","UK","Great Britain"],US:["United States of America","United States","USA","U.S.A.","US","U.S."],UM:"United States Minor Outlying Islands",UY:"Uruguay",UZ:"Uzbekistan",VU:"Vanuatu",VE:"Venezuela",VN:"Vietnam",VG:"Virgin Islands, British",VI:"Virgin Islands, U.S.",WF:"Wallis and Futuna",EH:"Western Sahara",YE:"Yemen",ZM:"Zambia",ZW:"Zimbabwe",AX:["Åland Islands","Aland Islands"],BQ:"Bonaire, Sint Eustatius and Saba",CW:"Curaçao",GG:"Guernsey",IM:"Isle of Man",JE:"Jersey",ME:"Montenegro",BL:"Saint Barthélemy",MF:"Saint Martin (French part)",RS:"Serbia",SX:"Sint Maarten (Dutch part)",SS:"South Sudan",XK:"Kosovo"},gS={locale:pS,countries:mS},vS="es",_S={AF:"Afganistán",AL:"Albania",DZ:"Argelia",AS:"Samoa Americana",AD:"Andorra",AO:"Angola",AI:"Anguila",AQ:"Antártida",AG:"Antigua y Barbuda",AR:"Argentina",AM:"Armenia",AW:"Aruba",AU:"Australia",AT:"Austria",AZ:"Azerbaiyán",BS:"Bahamas",BH:"Bahrein",BD:"Bangladesh",BB:"Barbados",BY:"Bielorrusia",BE:"Bélgica",BZ:"Belice",BJ:"Benin",BM:"Bermudas",BT:"Bután",BO:"Bolivia",BA:"Bosnia y Herzegovina",BW:"Botswana",BV:"Isla Bouvet",BR:"Brasil",IO:"Territorio Británico del Océano Índico",BN:"Brunei Darussalam",BG:"Bulgaria",BF:"Burkina Faso",BI:"Burundi",KH:"Camboya",CM:"Camerún",CA:"Canadá",CV:"Cabo Verde",KY:"Islas Caimán",CF:"República Centroafricana",TD:"Chad",CL:"Chile",CN:"China",CX:"Isla de Navidad",CC:"Islas Cocos (Keeling)",CO:"Colombia",KM:"Comoras",CG:"Congo",CD:"Congo (República Democrática del)",CK:"Islas Cook",CR:"Costa Rica",CI:"Costa de Marfil",HR:"Croacia",CU:"Cuba",CY:"Chipre",CZ:"República Checa",DK:"Dinamarca",DJ:"Yibuti",DM:"Dominica",DO:"República Dominicana",EC:"Ecuador",EG:"Egipto",SV:"El Salvador",GQ:"Guinea Ecuatorial",ER:"Eritrea",EE:"Estonia",ET:"Etiopía",FK:"Islas Malvinas",FO:"Islas Feroe",FJ:"Fiji",FI:"Finlandia",FR:"Francia",GF:"Guayana Francesa",PF:"Polinesia Francesa",TF:"Tierras Australes Francesas",GA:"Gabón",GM:"Gambia",GE:"Georgia",DE:"Alemania",GH:"Ghana",GI:"Gibraltar",GR:"Grecia",GL:"Groenlandia",GD:"Granada",GP:"Guadalupe",GU:"Guam",GT:"Guatemala",GN:"Guinea",GW:"Guinea Bissau",GY:"Guyana",HT:"Haití",HM:"Heard e Islas McDonald",VA:"Santa Sede",HN:"Honduras",HK:"Hong Kong",HU:"Hungría",IS:"Islandia",IN:"India",ID:"Indonesia",IR:["Irán","República Islámica de Irán"],IQ:"Iraq",IE:"Irlanda",IL:"Israel",IT:"Italia",JM:"Jamaica",JP:"Japón",JO:"Jordania",KZ:"Kazajistán",KE:"Kenia",KI:"Kiribati",KP:"República Popular Democrática de Corea",KR:"República de Corea",KW:"Kuwait",KG:"Kirguistán",LA:"República Democrática Popular de Lao",LV:"Letonia",LB:"Líbano",LS:"Lesoto",LR:"Liberia",LY:"Libia",LI:"Liechtenstein",LT:"Lituania",LU:"Luxemburgo",MO:"Macao",MK:"Macedonia del Norte",MG:"Madagascar",MW:"Malaui",MY:"Malasia",MV:"Maldivas",ML:"Malí",MT:"Malta",MH:"Islas Marshall",MQ:"Martinica",MR:"Mauritania",MU:"Mauricio",YT:"Mayotte",MX:"México",FM:"Micronesia",MD:"Moldavia",MC:"Mónaco",MN:"Mongolia",MS:"Montserrat",MA:"Marruecos",MZ:"Mozambique",MM:"Myanmar",NA:"Namibia",NR:"Nauru",NP:"Nepal",NL:"Países Bajos",NC:"Nueva Caledonia",NZ:"Nueva Zelanda",NI:"Nicaragua",NE:"Níger",NG:"Nigeria",NU:"Niue",NF:"Isla Norfolk",MP:"Islas Marianas del Norte",NO:"Noruega",OM:"Omán",PK:"Pakistán",PW:"Palau",PS:"Palestina",PA:"Panamá",PG:"Papua Nueva Guinea",PY:"Paraguay",PE:"Perú",PH:"Filipinas",PN:"Pitcairn",PL:"Polonia",PT:"Portugal",PR:"Puerto Rico",QA:"Catar",RE:"Reunión",RO:"Rumanía",RU:"Rusia",RW:"Ruanda",SH:"Santa Helena, Ascensión y Tristán de Acuña",KN:"Saint Kitts y Nevis",LC:"Santa Lucía",PM:"San Pedro y Miquelón",VC:"San Vicente y las Granadinas",WS:"Samoa",SM:"San Marino",ST:"Santo Tomé y Príncipe",SA:"Arabia Saudita",SN:"Senegal",SC:"Seychelles",SL:"Sierra Leona",SG:"Singapur",SK:"Eslovaquia",SI:"Eslovenia",SB:"Islas Salomón",SO:"Somalia",ZA:"Sudáfrica",GS:"Georgia del Sur y las Islas Sandwich del Sur",ES:"España",LK:"Sri Lanka",SD:"Sudán",SR:"Suriname",SJ:"Svalbard y Jan Mayen",SZ:"Esuatini",SE:"Suecia",CH:"Suiza",SY:"República Árabe Siria",TW:"Taiwán",TJ:"Tayikistán",TZ:"Tanzania",TH:"Tailandia",TL:"Timor-Leste",TG:"Togo",TK:"Tokelau",TO:"Tonga",TT:"Trinidad y Tobago",TN:"Túnez",TR:"Turquía",TM:"Turkmenistán",TC:"Islas Turcas y Caicos",TV:"Tuvalu",UG:"Uganda",UA:"Ucrania",AE:"Emiratos Árabes Unidos",GB:"Reino Unido",US:"Estados Unidos",UM:"Islas Ultramarinas Menores de los Estados Unidos",UY:"Uruguay",UZ:"Uzbekistán",VU:"Vanuatu",VE:"Venezuela",VN:"Vietnam",VG:"Islas Vírgenes británicas",VI:"Islas Vírgenes de los Estados Unidos",WF:"Wallis y Futuna",EH:"Sahara Occidental",YE:"Yemen",ZM:"Zambia",ZW:"Zimbabue",AX:"Islas Åland",BQ:"Bonaire, San Eustaquio y Saba",CW:"Curaçao",GG:"Guernsey",IM:"Isla de Man",JE:"Jersey",ME:"Montenegro",BL:"Saint Barthélemy",MF:"Saint Martin (francesa)",RS:"Serbia",SX:"Sint Maarten (neerlandesa)",SS:"Sudán del Sur",XK:"Kosovo"},SS={locale:vS,countries:_S},xS={type:"MultiPolygon",coordinates:[[[[34.475744757447586,31.585473892707697],[34.52254522545226,31.542073806363078],[34.526145261452626,31.52644977527902],[34.349743497434986,31.363265450623274],[34.349743497434986,31.29208930901811],[34.24534245342454,31.208761143236444],[34.21294212942129,31.29208930901811],[34.198541985419865,31.323337371186227],[34.38574385743857,31.4830496889344],[34.475744757447586,31.585473892707697]]]]},yS=[{type:"Feature",id:"702",properties:{name:"Singapore"},geometry:{type:"Polygon",coordinates:[[[103.97083970839708,1.3321417036045489],[103.81963819638196,1.2661735723607421],[103.65043650436508,1.3251976897894053],[103.70443704437048,1.4241498866551296],[103.81963819638196,1.446717931554332],[103.90963909639095,1.4154698693862002],[103.96003960039599,1.3929018244870122],[103.99603996039963,1.3651257692264522],[103.97083970839708,1.3321417036045489]]]}},{type:"Feature",id:"492",properties:{name:"Monaco"},geometry:{type:"Polygon",coordinates:[[[7.439474394743968,43.74965009337595],[7.3782737827378355,43.73229005883812],[7.3818738187382,43.75312210028352],[7.3962739627396274,43.76527412446001],[7.414274142741448,43.77048213482138],[7.435874358743604,43.761802117552435],[7.439474394743968,43.74965009337595]]]}},{type:"Feature",id:"438",properties:{name:"Liechtenstein"},geometry:{type:"Polygon",coordinates:[[[9.581495814958146,47.056736672835484],[9.50229502295025,47.061944683196856],[9.487894878948794,47.061944683196856],[9.480694806948065,47.096664752272545],[9.48429484294843,47.17304890423907],[9.52749527495277,47.27026509765099],[9.538295382953834,47.25464106656693],[9.541895418954198,47.23380902512153],[9.55269552695529,47.2129769836761],[9.556295562955626,47.185200928415554],[9.570695706957082,47.15742487315501],[9.599495994959966,47.131384821348234],[9.61029610296103,47.10708077299526],[9.595895958959602,47.075832710827115],[9.581495814958146,47.056736672835484]]]}},{type:"Feature",id:"020",properties:{name:"Andorra"},geometry:{type:"Polygon",coordinates:[[[1.7046170461704548,42.50319961355865],[1.6794167941679348,42.496255599743506],[1.5858158581585826,42.45632752030647],[1.5354153541535425,42.442439492676186],[1.4850148501485023,42.43375947540727],[1.4490144901449185,42.43723148231484],[1.427414274142734,42.46153553066782],[1.431014310143098,42.497991603197306],[1.4202142021420343,42.530975668819195],[1.4166141661416702,42.548335703357054],[1.427414274142734,42.59520779660923],[1.4598145981459822,42.621247848416004],[1.5030150301502943,42.64207988986141],[1.5678156781567907,42.63513587604629],[1.708217082170819,42.603887813878146],[1.7406174061740671,42.5761117586176],[1.7406174061740671,42.55701572062597],[1.715417154171547,42.52576765845785],[1.7046170461704548,42.50319961355865]]]}}],lu={gaza:xS,smallCountries:yS};wt.registerLocale(gS);wt.registerLocale(SS);const Jn=1200,ws=620,jn=24,or=ws/(Jn/jn),uu=.1,hu=.72,za=new Map;async function MS(n,e){var J,oe,me;const t=await fetch("/maps/country-outlines.geojson");if(!t.ok)throw new Error(`No se pudieron leer los contornos detallados (${t.status}).`);const i=await t.json(),r=new Kv({antialias:!0,alpha:!0});r.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.setSize(n.clientWidth,n.clientHeight),r.setClearColor(0,0),r.outputColorSpace=Pt,n.replaceChildren(r.domElement),r.domElement.className="map-canvas",r.domElement.setAttribute("aria-label","Mapa mundial: selecciona un país para ver sus divisiones");const s=new md;s.add(new cp(16777215,1.15));const a=new op(16769725,2.1);a.position.set(-9,-8,18),s.add(a);const o=new Sc(-12,12,or/2,-or/2,.1,100),c=new K(0,-11,30);o.position.copy(c),o.lookAt(0,0,0);const l=new si;l.scale.set(jn/Jn,-jn/Jn,1),l.position.set(-jn/2,or/2,0),s.add(l);const u=new It(new Br(Jn,ws),new ei({color:1522254}));u.position.set(Jn/2,ws/2,-.08),l.add(u);const h=new si;h.name="physical-features",l.add(h);const f=AS(i),p=O_().fitSize([Jn,ws],f),g=A_(p).digits(1),v=new Fi,m=[],d=[],E=new Map,S=new Map,_=new Set,x=new Map,A=new Map;let T=null,L=null,y=null,M="orographic",I=!1,z=0,W=0,Z=null,U=null;const q=new sr({color:9165282,roughness:.55,metalness:.03,side:yt}),te=new sr({color:14022810,roughness:.48,side:yt}),O=new sr({color:11071488,roughness:.48,side:yt}),fe=new Di({color:1055524,transparent:!0,opacity:.95});new Di({color:1516588,transparent:!0,opacity:1});const ge=new up,Ee=new pe,Ne=o.position.clone(),Fe=new K(0,0,0);let Y=null;P();for(const B of f.features){const se=g(pu(B));if(!se)continue;const ie=xr(B);if(!ie.iso3)continue;x.set(ie.id,ie);const ve=v.parse(`<svg xmlns="http://www.w3.org/2000/svg"><path d="${se}"/></svg>`).paths;for(const Se of ve)for(const de of Fi.createShapes(Se)){const ye=new sr({color:RS(ie.iso3),roughness:.8,side:yt}),we=fu(de,ye,uu);we.userData.country=ie,we.userData.baseMaterial=ye,we.userData.baseZ=.02,we.position.z=.02,l.add(we),m.push(we);const Le=A.get(ie.iso3)??[];Le.push(we),A.set(ie.iso3,Le),Ha(l,de,fe,.13)}}(J=e.onCountriesReady)==null||J.call(e,[...x.values()].sort((B,se)=>B.name.localeCompare(se.name,"es")),B=>{var ve;const se=[...x.values()].find(Se=>Se.iso3===B),ie=(ve=A.get(B))==null?void 0:ve[0];se&&ie&&w(se)});for(const[B,se,ie]of[["AND",1.57,42.55],["MCO",7.42,43.74],["LIE",9.55,47.14],["SGP",103.82,1.35],["GBR",-5.35,36.13],["GBR",-58.6,-51.7]]){const ve=[...x.values()].find(Le=>Le.iso3===B);if(!ve||!A.has(B))continue;const Se=p([se,ie]);if(!Se)continue;const de=new Bs(7,20),ye=new ei({transparent:!0,opacity:0,colorWrite:!1,depthWrite:!1,side:yt}),we=new It(de,ye);we.position.set(Se[0],Se[1],.14),we.userData.country=ve,l.add(we),m.push(we)}const G=B=>{const se=r.domElement.getBoundingClientRect();Ee.set((B.clientX-se.left)/se.width*2-1,-((B.clientY-se.top)/se.height)*2+1),ge.setFromCamera(Ee,o)};r.domElement.addEventListener("pointermove",B=>{var ve;if(G(B),I&&M==="regional"){if(U){r.domElement.style.cursor="grab";return}const Se=(ve=ge.intersectObjects(d,!1)[0])==null?void 0:ve.object,de=(Se==null?void 0:Se.userData.adminRegionKey)??null;de!==y&&(y&&he(y),y=de,y&&he(y,!0)),r.domElement.style.cursor=Se?"pointer":"grab";return}if(I){L&&R(L,!1),L=null,r.domElement.style.cursor="grab";return}y&&(he(y),y=null);const se=ge.intersectObjects(m,!1).map(Se=>Se.object).find(Se=>Se.userData.country.iso3!==(T==null?void 0:T.iso3)),ie=se?se.userData.country.iso3:null;ie!==L&&(L&&R(L,!1),L=ie,L&&R(L,!0)),r.domElement.style.cursor=se?"pointer":"grab"}),r.domElement.addEventListener("click",B=>{var ie,ve;if(r.domElement.dataset.dragged==="true")return;if(G(B),I&&M==="regional"){U&&ae();const Se=(ie=ge.intersectObjects(d,!1)[0])==null?void 0:ie.object,de=Se==null?void 0:Se.userData.adminRegionKey;de&&Me(de);return}if(I)return;const se=(ve=ge.intersectObjects(m,!1)[0])==null?void 0:ve.object;if(!se){T&&re();return}w(se.userData.country)});function w(B,se){var ie;if(!I){if(L&&R(L,!1),L=null,(T==null?void 0:T.iso3)===B.iso3){re();return}X(),T&&j(T.iso3,!1),I=!1,_.clear(),T=B,j(B.iso3,!0),e.onSelect(B),M==="regional"&&k("orographic"),(ie=e.onViewModeChange)==null||ie.call(e,M,!1)}}function R(B,se){if(B!==(T==null?void 0:T.iso3))for(const ie of A.get(B)??[])ie.material=se?q:ie.userData.baseMaterial,ie.userData.targetLift=se?.72:0}function j(B,se){for(const ie of A.get(B)??[])ie.visible=!0,ie.material=ie.userData.baseMaterial,ie.userData.targetLift=se?.82:0}function re(){var B,se;X(),T&&j(T.iso3,!1),I=!1,_.clear(),T=null,L&&R(L,!1),L=null,M="orographic",$(),h.visible=!0,(B=e.onViewModeChange)==null||B.call(e,M,!1),(se=e.onDeselect)==null||se.call(e)}function X(){W+=1,U&&ae(),Z&&l.remove(Z),Z=null,d.length=0,E.clear(),S.clear(),y=null}function he(B,se=!1){for(const ie of E.get(B)??[])ie.material=_.has(B)?O:se?te:ie.userData.baseMaterial}function Me(B){var ie;const se=_.has(B);for(const ve of _)_.delete(ve),he(ve);if(se||_.add(B),he(B,y===B),T){const ve=[..._][0],Se=ve?S.get(ve):void 0;(ie=e.onRegionSelectionChange)==null||ie.call(e,T,_.size,z,Se)}}function D(){var B;T&&(I=!0,_.clear(),(B=e.onGameStarted)==null||B.call(e,T),k("regional"))}function H(){re()}function k(B){var se,ie;if(B==="regional"&&(!T||!I)){(se=e.onViewModeChange)==null||se.call(e,M,!1);return}M=B,B==="regional"&&T?(h.visible=!1,Q(T.iso3),F(T)):(X(),T&&j(T.iso3,!1),h.visible=B==="orographic",B==="global"?$():T&&I?Q(T.iso3):B==="orographic"&&$()),(ie=e.onViewModeChange)==null||ie.call(e,B,!!(T&&I))}function Q(B){const se=f.features.find(xe=>xr(xe).iso3===B);if(!se)return;const[[ie,ve],[Se,de]]=g.bounds(se),ye=jn/Jn,we=(ie+Se)*.5*ye-jn/2,Le=or/2-(ve+de)*.5*ye,Re=Math.max((Se-ie)*ye,.2),ze=Math.max((de-ve)*ye,.2),V=gi.clamp(Math.min((o.right-o.left)*.72/Re,(o.top-o.bottom)*.72/ze),1,18);Y={startedAt:performance.now(),fromPosition:o.position.clone(),toPosition:new K(we,Le,Ne.z),fromFocus:Fe.clone(),toFocus:new K(we,Le,0),fromZoom:o.zoom,toZoom:V}}function $(){Y=null,o.position.copy(Ne),Fe.set(0,0,0),o.lookAt(Fe),o.zoom=1,o.updateProjectionMatrix()}async function F(B){var ie,ve,Se,de;X();const se=W;h.visible=!1,(ie=e.onAdminStatus)==null||ie.call(e,B,"loading");try{const ye=await bS(B);if(se!==W||(T==null?void 0:T.iso3)!==B.iso3||M!=="regional")return;const we=new si,Le=[];Z=we,z=ye.features.length;for(const[V,xe]of ye.features.entries()){if(se!==W||(T==null?void 0:T.iso3)!==B.iso3||M!=="regional")return;const Te=g(pu(xe));if(!Te)continue;const Pe=v.parse(`<svg xmlns="http://www.w3.org/2000/svg"><path d="${Te}"/></svg>`).paths;for(const _e of Pe){const ue=xe.properties.shapeID||`${B.iso3}-${V}`;for(const De of Fi.createShapes(_e)){const ke=new sr({color:TS(xe),roughness:.72,side:yt,transparent:!0,opacity:0});Le.push(ke);const $e=fu(De,ke,uu);$e.userData.country=B,$e.userData.baseMaterial=ke,$e.userData.baseZ=.02,$e.userData.adminRegionKey=ue,$e.position.z=.02,we.add($e),d.push($e);const Je=E.get(ue)??[];Je.push($e),E.set(ue,Je),S.set(ue,Th(xe));const Ht=new Di({color:1516588,transparent:!0,opacity:0});Le.push(Ht),Ha(we,De,Ht,.13)}}V%4===3&&await new Promise(_e=>requestAnimationFrame(()=>_e()))}if(se!==W||(T==null?void 0:T.iso3)!==B.iso3||M!=="regional")return;for(const V of _)he(V);we.position.z=0,l.add(we);const Re=A.get(B.iso3)??[];for(const V of Re)V.userData.targetLift=0;U={startedAt:performance.now(),countryMeshes:Re,layer:we,materials:Le},(ve=e.onAdminStatus)==null||ve.call(e,B,"ready",ye.features.length);const ze=[..._][0];(Se=e.onRegionSelectionChange)==null||Se.call(e,B,_.size,ye.features.length,ze?S.get(ze):void 0)}catch(ye){const we=ye instanceof Error?ye.message:String(ye);console.error(`No se pudieron dibujar las divisiones de ${B.name}:`,ye),se===W&&(T==null?void 0:T.iso3)===B.iso3&&M==="regional"&&(h.visible=!1,j(B.iso3,!0),(de=e.onAdminStatus)==null||de.call(e,B,"error",void 0,we))}}async function P(){var B;try{const se=await fetch("/maps/physical/features.geojson");if(!se.ok)throw new Error(`No se pudo leer la capa física (${se.status}).`);const ie=await se.json(),ve=new Ze(5884390),Se=new Ze(9990991),de=new Di({color:ve,transparent:!0,opacity:.9}),ye=new ei({color:ve,transparent:!0,opacity:.82,depthWrite:!1,side:yt}),we=new ei({color:Se,transparent:!0,opacity:.2,depthWrite:!1,side:yt}),Le=new Di({color:Se,transparent:!0,opacity:.78}),Re=new ei({color:Se,side:yt});for(const ze of ie.features){const V=(B=ze.properties)==null?void 0:B.kind;if(V==="mountain"&&ze.geometry.type==="Point"){const Pe=p(ze.geometry.coordinates);if(!Pe)continue;const _e=new It(new Bs(2.4,12),Re);_e.position.set(Pe[0],Pe[1],.16),h.add(_e);continue}const xe=g(ze);if(!xe)continue;const Te=v.parse(`<svg xmlns="http://www.w3.org/2000/svg"><path d="${xe}"/></svg>`).paths;for(const Pe of Te){if(V==="river"){for(const _e of Pe.subPaths){const ue=_e.getPoints(2);if(ue.length<2)continue;const De=new Vu(new Ut().setFromPoints(ue),de);De.position.z=.15,h.add(De)}continue}for(const _e of Fi.createShapes(Pe)){const ue=new It(new vc(_e),V==="lake"?ye:we);ue.position.z=.14,h.add(ue),Ha(h,_e,V==="lake"?de:Le,.15)}}}}catch(se){console.error("No se pudo cargar la capa de ríos, lagos y relieve:",se)}}function ae(){if(U){for(const B of U.countryMeshes){const se=B.userData.baseMaterial;se.opacity=1,se.transparent=!1,B.visible=!1,B.userData.targetLift=0,B.position.z=B.userData.baseZ}for(const B of U.materials)B.opacity=1;U.layer.position.z=hu,U=null}}let Ae=null,Oe=!1;r.domElement.addEventListener("pointerdown",B=>{Y=null,Ae={x:B.clientX,y:B.clientY,cameraX:o.position.x,cameraY:o.position.y,focusX:Fe.x,focusY:Fe.y},Oe=!1,r.domElement.dataset.dragged="false",r.domElement.setPointerCapture(B.pointerId)}),r.domElement.addEventListener("pointermove",B=>{if(!Ae)return;const se=B.clientX-Ae.x,ie=B.clientY-Ae.y;if(Math.hypot(se,ie)>4&&(Oe=!0),Oe){r.domElement.dataset.dragged="true";const ve=(o.top-o.bottom)/(r.domElement.clientHeight*o.zoom);o.position.x=Ae.cameraX-se*ve,o.position.y=Ae.cameraY+ie*ve,Fe.x=Ae.focusX-se*ve,Fe.y=Ae.focusY+ie*ve,o.lookAt(Fe)}}),r.domElement.addEventListener("pointerup",()=>{Ae=null,window.setTimeout(()=>{r.domElement.dataset.dragged="false"},0)}),r.domElement.addEventListener("wheel",B=>{B.preventDefault(),Y=null;const se=B.deltaY>0?1.08:.92;o.zoom=gi.clamp(o.zoom/se,.8,18),o.updateProjectionMatrix()},{passive:!1}),window.addEventListener("atlas:reset-view",()=>{$()}),new ResizeObserver(()=>{const B=n.clientWidth,se=n.clientHeight;if(!B||!se)return;r.setSize(B,se);const ie=B/se,ve=Math.max(or/2,jn/(ie*2)),Se=ve*ie;o.left=-Se,o.right=Se,o.top=ve,o.bottom=-ve,o.updateProjectionMatrix()}).observe(n),(oe=e.onMapReady)==null||oe.call(e,{startCountry:D,startNewGame:H,setView:k}),(me=e.onViewModeChange)==null||me.call(e,M,!1);const b=B=>{if(Y){const se=gi.clamp((B-Y.startedAt)/1050,0,1),ie=se*se*(3-2*se);o.position.lerpVectors(Y.fromPosition,Y.toPosition,ie),Fe.lerpVectors(Y.fromFocus,Y.toFocus,ie),o.lookAt(Fe),o.zoom=gi.lerp(Y.fromZoom,Y.toZoom,ie),o.updateProjectionMatrix(),se>=1&&(Y=null)}if(U){const se=gi.clamp((B-U.startedAt)/560,0,1);U.layer.position.z=hu*se;for(const ie of U.materials)ie.opacity=se;for(const ie of U.countryMeshes){const ve=ie.userData.baseMaterial;ve.transparent=!0,ve.opacity=1-se}se>=1&&ae()}for(const se of[...m,...d]){const ie=se.userData.targetLift??0,ve=se.userData.baseZ,Se=gi.lerp(se.userData.lift??0,ie,.18);se.userData.lift=Se,se.position.z=ve+Se}r.render(s,o),requestAnimationFrame(b)};requestAnimationFrame(b)}function ES(n){const e=new URL(n);return e.hostname==="github.com"&&e.pathname.startsWith("/wmgeolab/geoBoundaries/raw/")?(e.hostname="media.githubusercontent.com",e.pathname=`/media/wmgeolab/geoBoundaries/${e.pathname.slice(28)}`,e.toString()):n}async function bS(n){const e=`${n.iso3}:ADM1`;let t=za.get(e);return t||(t=(async()=>{const i=await fetch(`/maps/admin1/${n.iso3}.geojson`);if(i.ok)return await i.json();if(i.status!==404)throw new Error(`No se pudieron leer las divisiones locales (${i.status}).`);const r=await fetch(`https://www.geoboundaries.org/api/current/gbOpen/${n.iso3}/ADM1/`);if(!r.ok)throw new Error("No se encontraron divisiones ADM1 para este país.");const s=await r.json(),a=s.simplifiedGeometryGeoJSON??s.gjDownloadURL;if(!a)throw new Error("La fuente no proporcionó el mapa de divisiones.");const o=await fetch(ES(a));if(!o.ok)throw new Error(`No se pudo descargar el mapa de divisiones (${o.status}).`);const c=await o.json();if(!Array.isArray(c.features))throw new Error("El archivo no contiene divisiones administrativas.");const l=eS({regions:c},1e6),u=oS(aS(l),.002);return z_(u,u.objects.regions)})(),za.set(e,t),t.catch(()=>{za.delete(e)})),t}function xr(n){var o,c,l,u,h,f;const e=String(n.id??((o=n.properties)==null?void 0:o.ISO_A3)??((c=n.properties)==null?void 0:c.name)??""),t=((l=n.properties)==null?void 0:l.name)??((u=n.properties)==null?void 0:u.NAME)??((h=n.properties)==null?void 0:h.name_long)??`País ${e}`,i=((f=n.properties)==null?void 0:f.ISO_A3)??wt.numericToAlpha3(e)??wt.getAlpha3Code(t,"en")??"",r=i==="XKK"||i==="XKX"?"KOS":i,s=wt.numericToAlpha2(e)??wt.getAlpha2Code(t,"en"),a=s&&wt.getName(s,"es")||t;return{id:e,name:a,iso3:r}}function AS(n){const e=n.features,t=new Set(e.map(a=>xr(a).iso3)),i=lu.smallCountries.filter(a=>!t.has(xr(a).iso3)),r=[...e,...i],s={type:"Feature",id:"GZA",properties:{name:"Gaza",ISO_A3:"GZA"},geometry:lu.gaza};return{...n,features:[...r.filter(a=>xr(a).iso3!=="FLK"),s]}}function fu(n,e,t){const i=new gc(n,{depth:t,bevelEnabled:!1,curveSegments:4});return new It(i,e)}function Ha(n,e,t,i){const r=e.getPoints(2);r.length>=3&&n.add(du(r,t,i));for(const s of e.holes){const a=s.getPoints(2);a.length>=3&&n.add(du(a,t,i))}}function du(n,e,t){const i=new Vu(new Ut().setFromPoints([...n,n[0]]),e);return i.position.z=t,i}function pu(n){const e=i=>i.map((r,s)=>{const a=r.slice(0,-1);let o=0;for(let h=0;h<a.length;h+=1){const f=a[h],p=a[(h+1)%a.length];o+=f[0]*p[1]-p[0]*f[1]}const c=s===0,l=o<0;if(c===l)return r;const u=[...a].reverse();return[...u,u[0]]}),t=n.geometry;return t.type==="Polygon"?{...n,geometry:{...t,coordinates:e(t.coordinates)}}:t.type==="MultiPolygon"?{...n,geometry:{...t,coordinates:t.coordinates.map(e)}}:n}function Th(n){var e,t,i;return((e=n.properties)==null?void 0:e.shapeName)??((t=n.properties)==null?void 0:t.NAME_1)??((i=n.properties)==null?void 0:i.name)??"División administrativa"}function TS(n){var r,s;const e=((r=n.properties)==null?void 0:r.shapeISO)??((s=n.properties)==null?void 0:s.shapeID)??Th(n);let t=0;for(const a of e)t=t*31+a.charCodeAt(0)>>>0;const i=[11955513,12876605,13667401,14721103,11034422,13072194,14193996,15246428];return i[t%i.length]}function RS(n){let e=2166136261;for(const o of n)e=Math.imul(e^o.charCodeAt(0),16777619)>>>0;const t=.045+(.44-.17)+(1-.63),i=e/4294967295*t,r=i<.045?i:i<.315?.17+i-.045:.63+i-.315,s=.4+(e>>>8&255)/255*.22,a=.38+(e>>>16&255)/255*.15;return new Ze().setHSL(r,s,a).getHex()}const wS=JSON.parse('[{"country":"Afghanistan","government":"Emirato islámico"},{"country":"Albania","government":"República"},{"country":"Algeria","government":"República"},{"country":"American Samoa","government":"Territorio de Estados Unidos"},{"country":"Andorra","government":"Coprincipado parlamentario"},{"country":"Angola","government":"República"},{"country":"Anguilla","government":"Territorio británico de ultramar"},{"country":"Antarctica","government":"Administración compartida internacionalmente"},{"country":"Antigua and Barbuda","government":"Monarquía constitucional"},{"country":"Argentina","government":"República federal"},{"country":"Armenia","government":"República"},{"country":"Aruba","government":"Territorio neerlandés de ultramar"},{"country":"Australia","government":"Monarquía constitucional federal"},{"country":"Austria","government":"República federal"},{"country":"Azerbaijan","government":"República federal"},{"country":"Bahamas","government":"Monarquía constitucional"},{"country":"Bahrain","government":"Monarquía (emirato)"},{"country":"Bangladesh","government":"República"},{"country":"Barbados","government":"República"},{"country":"Belarus","government":"República"},{"country":"Belgium","government":"Monarquía constitucional federal"},{"country":"Belize","government":"Monarquía constitucional"},{"country":"Benin","government":"República"},{"country":"Bermuda","government":"Territorio británico de ultramar"},{"country":"Bhutan","government":"Monarquía"},{"country":"Bolivia","government":"República"},{"country":"Bosnia and Herzegovina","government":"República federal"},{"country":"Botswana","government":"República"},{"country":"Bouvet Island","government":"Dependent Territory of Norway"},{"country":"Brazil","government":"República federal"},{"country":"British Indian Ocean Territory","government":"Territorio británico de ultramar"},{"country":"Brunei","government":"Monarquía (sultanato)"},{"country":"Bulgaria","government":"República"},{"country":"Burkina Faso","government":"República"},{"country":"Burundi","government":"República"},{"country":"Cambodia","government":"Monarquía constitucional"},{"country":"Cameroon","government":"República"},{"country":"Canada","government":"Constitutional Monarchy, Federation"},{"country":"Cape Verde","government":"República"},{"country":"Cayman Islands","government":"Territorio británico de ultramar"},{"country":"Central African Republic","government":"República"},{"country":"Chad","government":"República"},{"country":"Chile","government":"República"},{"country":"China","government":"República popular"},{"country":"Christmas Island","government":"Territorio de Australia"},{"country":"Cocos (Keeling) Islands","government":"Territorio de Australia"},{"country":"Colombia","government":"República"},{"country":"Comoros","government":"República"},{"country":"Congo","government":"República"},{"country":"Cook Islands","government":"Territorio neozelandés de ultramar"},{"country":"Costa Rica","government":"República"},{"country":"Croatia","government":"República"},{"country":"Cuba","government":"República socialista"},{"country":"Cyprus","government":"República"},{"country":"Czech Republic","government":"República"},{"country":"Denmark","government":"Monarquía constitucional"},{"country":"Djibouti","government":"República"},{"country":"Dominica","government":"República"},{"country":"Dominican Republic","government":"República"},{"country":"East Timor","government":"Administrado por Naciones Unidas"},{"country":"Ecuador","government":"República"},{"country":"Egypt","government":"República"},{"country":"El Salvador","government":"República"},{"country":"England","government":null},{"country":"Equatorial Guinea","government":"República"},{"country":"Eritrea","government":"República"},{"country":"Estonia","government":"República"},{"country":"Eswatini","government":"Monarquía"},{"country":"Ethiopia","government":"República"},{"country":"Falkland Islands","government":"Territorio británico de ultramar"},{"country":"Faroe Islands","government":"Parte del Reino de Dinamarca"},{"country":"Fiji Islands","government":"República"},{"country":"Finland","government":"República"},{"country":"France","government":"República"},{"country":"French Guiana","government":"Departamento de ultramar de Francia"},{"country":"French Polynesia","government":"Territorio francés de ultramar"},{"country":"French Southern territories","government":"Territorio francés de ultramar"},{"country":"Gabon","government":"República"},{"country":"Gambia","government":"República"},{"country":"Georgia","government":"República"},{"country":"Germany","government":"República federal"},{"country":"Ghana","government":"República"},{"country":"Gibraltar","government":"Territorio británico de ultramar"},{"country":"Greece","government":"República"},{"country":"Greenland","government":"Parte del Reino de Dinamarca"},{"country":"Grenada","government":"Monarquía constitucional"},{"country":"Guadeloupe","government":"Departamento de ultramar de Francia"},{"country":"Guam","government":"Territorio de Estados Unidos"},{"country":"Guatemala","government":"República"},{"country":"Guinea","government":"República"},{"country":"Guinea-Bissau","government":"República"},{"country":"Guyana","government":"República"},{"country":"Haiti","government":"República"},{"country":"Heard Island and McDonald Islands","government":"Territorio de Australia"},{"country":"Holy See (Vatican City State)","government":"Estado eclesiástico independiente"},{"country":"Honduras","government":"República"},{"country":"Hong Kong","government":"Región Administrativa Especial de China"},{"country":"Hungary","government":"República"},{"country":"Iceland","government":"República"},{"country":"India","government":"República federal"},{"country":"Indonesia","government":"República"},{"country":"Iran","government":"República islámica"},{"country":"Iraq","government":"República"},{"country":"Ireland","government":"República"},{"country":"Israel","government":"República"},{"country":"Italy","government":"República"},{"country":"Ivory Coast","government":"República"},{"country":"Jamaica","government":"Monarquía constitucional"},{"country":"Japan","government":"Monarquía constitucional"},{"country":"Jordan","government":"Monarquía constitucional"},{"country":"Kazakhstan","government":"República"},{"country":"Kenya","government":"República"},{"country":"Kiribati","government":"República"},{"country":"Kuwait","government":"Constitutional Monarchy (Emirate)"},{"country":"Kyrgyzstan","government":"República"},{"country":"Laos","government":"República"},{"country":"Latvia","government":"República"},{"country":"Lebanon","government":"República"},{"country":"Lesotho","government":"Monarquía constitucional"},{"country":"Liberia","government":"República"},{"country":"Libya","government":"Estado socialista"},{"country":"Liechtenstein","government":"Monarquía constitucional"},{"country":"Lithuania","government":"República"},{"country":"Luxembourg","government":"Monarquía constitucional"},{"country":"Macao","government":"Región Administrativa Especial de China"},{"country":"North Macedonia","government":"República"},{"country":"Madagascar","government":"República federal"},{"country":"Malawi","government":"República"},{"country":"Malaysia","government":"Monarquía constitucional"},{"country":"Maldives","government":"República"},{"country":"Mali","government":"República"},{"country":"Malta","government":"República"},{"country":"Marshall Islands","government":"República"},{"country":"Martinique","government":"Departamento de ultramar de Francia"},{"country":"Mauritania","government":"República"},{"country":"Mauritius","government":"República"},{"country":"Mayotte","government":"Colectividad territorial de Francia"},{"country":"Mexico","government":"República federal"},{"country":"Micronesia, Federated States of","government":"República federal"},{"country":"Moldova","government":"República"},{"country":"Monaco","government":"Monarquía constitucional"},{"country":"Mongolia","government":"República"},{"country":"Montserrat","government":"Territorio británico de ultramar"},{"country":"Morocco","government":"Monarquía constitucional"},{"country":"Mozambique","government":"República"},{"country":"Myanmar","government":"República"},{"country":"Namibia","government":"República"},{"country":"Nauru","government":"República"},{"country":"Nepal","government":"República federal parlamentaria"},{"country":"Netherlands","government":"Monarquía constitucional"},{"country":"Netherlands Antilles","government":"Territorio neerlandés de ultramar"},{"country":"New Caledonia","government":"Territorio francés de ultramar"},{"country":"New Zealand","government":"Monarquía constitucional"},{"country":"Nicaragua","government":"República"},{"country":"Niger","government":"República"},{"country":"Nigeria","government":"República federal"},{"country":"Niue","government":"Territorio neozelandés de ultramar"},{"country":"Norfolk Island","government":"Territorio de Australia"},{"country":"North Korea","government":"República socialista"},{"country":"Northern Ireland","government":null},{"country":"Northern Mariana Islands","government":"Estado libre asociado de Estados Unidos"},{"country":"Norway","government":"Monarquía constitucional"},{"country":"Oman","government":"Monarquía (sultanato)"},{"country":"Pakistan","government":"República"},{"country":"Palau","government":"República"},{"country":"Palestine","government":"Área autónoma"},{"country":"Panama","government":"República"},{"country":"Papua New Guinea","government":"Monarquía constitucional"},{"country":"Paraguay","government":"República"},{"country":"Peru","government":"República"},{"country":"Philippines","government":"República"},{"country":"Pitcairn","government":"Territorio británico de ultramar"},{"country":"Poland","government":"República"},{"country":"Portugal","government":"República"},{"country":"Puerto Rico","government":"Estado libre asociado de Estados Unidos"},{"country":"Qatar","government":"Monarquía"},{"country":"Reunion","government":"Departamento de ultramar de Francia"},{"country":"Romania","government":"República"},{"country":"Russia","government":"República federal"},{"country":"Rwanda","government":"República"},{"country":"Saint Helena","government":"Territorio británico de ultramar"},{"country":"Saint Kitts and Nevis","government":"Monarquía constitucional"},{"country":"Saint Lucia","government":"Monarquía constitucional"},{"country":"Saint Pierre and Miquelon","government":"Colectividad territorial de Francia"},{"country":"Saint Vincent and the Grenadines","government":"Monarquía constitucional"},{"country":"Samoa","government":"República parlamentaria"},{"country":"San Marino","government":"República"},{"country":"Sao Tome and Principe","government":"República"},{"country":"Saudi Arabia","government":"Monarquía"},{"country":"Scotland","government":null},{"country":"Senegal","government":"República"},{"country":"Serbia","government":"República"},{"country":"Seychelles","government":"República"},{"country":"Sierra Leone","government":"República"},{"country":"Singapore","government":"República"},{"country":"Slovakia","government":"República"},{"country":"Slovenia","government":"República"},{"country":"Solomon Islands","government":"Monarquía constitucional"},{"country":"Somalia","government":"República"},{"country":"South Africa","government":"República"},{"country":"South Georgia and the South Sandwich Islands","government":"Territorio británico de ultramar"},{"country":"South Korea","government":"República"},{"country":"South Sudan","government":null},{"country":"Spain","government":"Monarquía constitucional"},{"country":"Sri Lanka","government":"Unitary Semi-Presidential Republic"},{"country":"Sudan","government":"República islámica"},{"country":"Suriname","government":"República"},{"country":"Svalbard and Jan Mayen","government":"Dependent Territory of Norway"},{"country":"Sweden","government":"Monarquía constitucional"},{"country":"Switzerland","government":"Federation"},{"country":"Syria","government":"República"},{"country":"Tajikistan","government":"República"},{"country":"Tanzania","government":"República"},{"country":"Thailand","government":"Monarquía constitucional"},{"country":"The Democratic Republic of Congo","government":"República"},{"country":"Togo","government":"República"},{"country":"Tokelau","government":"Territorio neozelandés de ultramar"},{"country":"Tonga","government":"Monarquía"},{"country":"Trinidad and Tobago","government":"República"},{"country":"Tunisia","government":"República"},{"country":"Turkey","government":"República"},{"country":"Turkmenistan","government":"República"},{"country":"Turks and Caicos Islands","government":"Territorio británico de ultramar"},{"country":"Tuvalu","government":"Monarquía constitucional"},{"country":"Uganda","government":"República"},{"country":"Ukraine","government":"República"},{"country":"United Arab Emirates","government":"Federación de emiratos"},{"country":"United Kingdom","government":"Monarquía constitucional"},{"country":"United States","government":"República federal"},{"country":"United States Minor Outlying Islands","government":"Dependent Territory of the US"},{"country":"Uruguay","government":"República"},{"country":"Uzbekistan","government":"República"},{"country":"Vanuatu","government":"República"},{"country":"Venezuela","government":"República federal"},{"country":"Vietnam","government":"República socialista"},{"country":"Virgin Islands, British","government":null},{"country":"Virgin Islands, U.S.","government":null},{"country":"Wales","government":null},{"country":"Wallis and Futuna","government":"Territorio francés de ultramar"},{"country":"Western Sahara","government":"Territorio ocupado (según la fuente)"},{"country":"Yemen","government":"República"},{"country":"Zambia","government":"República"},{"country":"Zimbabwe","government":"República"}]'),CS={countries:wS},tc=document.querySelector("#map-root"),an=document.querySelector("#country-panel"),it=document.querySelector("#country-picker"),Nt=document.querySelector("#country-options"),ai=document.querySelector("#map-view");if(!tc||!an)throw new Error("No se encontró el contenedor del mapa.");let cr="",Cs,Ps,Is,Ls,Kn=!1,Rh=[];const Va=new Map;let mu,ka,gu,Ss,vu=0;const wh=31536e3;let xs="",Pi={status:"loading"};const _u=new Map(CS.countries.map(({country:n,government:e})=>[mn(n),e])),PS={BOL:"Bolivia",CPV:"Cape Verde",CIV:"Ivory Coast",COD:"The Democratic Republic of Congo",COG:"Congo",CZE:"Czech Republic",TLS:"East Timor",FSM:"Micronesia, Federated States of",KOR:"South Korea",PRK:"North Korea",LAO:"Laos",RUS:"Russia",TUR:"Turkey",VEN:"Venezuela",VNM:"Vietnam",PSE:"Palestine",GZA:"Palestine",FLK:"Falkland Islands",ATA:"Antarctica",USA:"United States",TZA:"Tanzania",SYR:"Syria",CUW:"Curacao",MDA:"Moldova",MKD:"North Macedonia",IRN:"Iran",GMB:"Gambia",FJI:"Fiji Islands",CHN:"China",BRN:"Brunei"},Su={TWN:"República semipresidencial",MNE:"República parlamentaria",KOS:"República parlamentaria",JEY:"Dependencia de la Corona británica",GGY:"Dependencia de la Corona británica",IMN:"Dependencia de la Corona británica",MAF:"Colectividad francesa de ultramar",BLM:"Colectividad francesa de ultramar",ATF:"Territorio francés de ultramar",ALA:"Región autónoma de Finlandia",SXM:"País constituyente del Reino de los Países Bajos"},Ch={USA:"United States",COD:"DR Congo",COG:"Republic of the Congo",CIV:"Ivory Coast",CZE:"Czechia",CPV:"Cape Verde",TLS:"Timor-Leste",KOR:"South Korea",PRK:"North Korea",LAO:"Laos",RUS:"Russia",TUR:"Turkey",PSE:"Palestine",GZA:"Palestine",KOS:"Kosovo",FLK:"Falkland Islands",ATA:"Antarctica",ATF:"French Southern and Antarctic Lands",TZA:"Tanzania",GMB:"Gambia",FJI:"Fiji"},IS={CHN:"china"};MS(tc,{onCountriesReady(n,e){Cs=e,Rh=n},onMapReady(n){Ps=n.startCountry,Is=n.startNewGame,Ls=n.setView},onGameStarted(){Kn=!0,it&&(it.disabled=!0),an.innerHTML=Xa(cr,void 0,"Cargando las divisiones del país…",!0)},onViewModeChange(n,e){if(ai){ai.value=n;const t=ai.querySelector('option[value="regional"]');t&&(t.disabled=!e)}},onSelect(n){var e;cr=n.name,Kn=!1,it&&(it.value=n.name),Ys(),xs=n.iso3,Pi={status:"loading"},an.innerHTML=Wa(n.name,n.iso3,"Elige este país para iniciar la partida y después podrás seleccionar sus provincias.",!0,void 0,!1,Pi),(e=an.querySelector(".panel-body"))==null||e.scrollTo(0,0),LS(n.iso3).then(t=>{xs!==n.iso3||Kn||(Pi={status:"ready",stats:t},an.innerHTML=Wa(n.name,n.iso3,"Elige este país para iniciar la partida y después podrás seleccionar sus provincias.",!0,void 0,!1,Pi))}).catch(()=>{xs!==n.iso3||Kn||(Pi={status:"error"},an.innerHTML=Wa(n.name,n.iso3,"Elige este país para iniciar la partida y después podrás seleccionar sus provincias.",!0,void 0,!1,Pi))})},onAdminStatus(n,e,t,i){if(n.name!==cr)return;const r=e==="loading"?'<span class="loading-inline">Cargando divisiones del país…</span>':e==="error"?`<span class="admin-error">No se pudieron cargar las divisiones. Detalle: ${jt(i??"error desconocido")}</span>`:`Mapa regional listo. Haz clic en las provincias para seleccionarlas. 0 de ${t} seleccionadas.`;an.innerHTML=Xa(n.name,void 0,r,Kn)},onRegionSelectionChange(n,e,t,i){if(n.name!==cr)return;const r=e===0?`Haz clic en las provincias para seleccionarlas. 0 de ${t} seleccionadas.`:`${i??"Provincia"} seleccionada.`;an.innerHTML=Xa(n.name,i,r,Kn)},onDeselect(){cr="",xs="",Kn=!1,it&&(it.value=""),it&&(it.disabled=!1),Ys(),an.innerHTML=`
      <div class="empty-state"><div class="globe-icon">◎</div><p class="eyebrow">ELIGE TU PRIMER TERRITORIO</p><h2>¿A dónde<br/>vamos primero?</h2><p class="empty-copy">Haz clic en cualquier país del mapa para ver sus divisiones internas.</p></div>`}}).catch(n=>{console.error("No se pudo iniciar el mapa:",n),tc.innerHTML='<div class="loading">No se pudo preparar el mapa. Intenta recargar la página.</div>'});an.addEventListener("click",n=>{const e=n.target.closest("#start-country, #new-game");(e==null?void 0:e.id)==="start-country"&&(Ps==null||Ps()),(e==null?void 0:e.id)==="new-game"&&(Is==null||Is())});ai==null||ai.addEventListener("change",()=>{Ls==null||Ls(ai.value)});it==null||it.addEventListener("focus",()=>Ph(it.value));it==null||it.addEventListener("input",()=>Ph(it.value));it==null||it.addEventListener("keydown",n=>{var e;n.key==="Escape"&&Ys(),n.key==="ArrowDown"&&Nt&&!Nt.hidden&&(n.preventDefault(),(e=Nt.querySelector(".country-option"))==null||e.focus())});Nt==null||Nt.addEventListener("click",n=>{const e=n.target.closest("[data-iso3]");e&&(Cs==null||Cs(e.dataset.iso3??""))});document.addEventListener("pointerdown",n=>{(!(n.target instanceof Node)||!(it!=null&&it.contains(n.target))&&!(Nt!=null&&Nt.contains(n.target)))&&Ys()});var xu;(xu=document.querySelector("#reset-view"))==null||xu.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("atlas:reset-view"))});function Ph(n){if(!Nt||!it)return;const e=mn(n),t=Rh.filter(i=>mn(i.name).includes(e)).slice(0,100);Nt.replaceChildren(...t.map(i=>{const r=document.createElement("button");r.type="button",r.className="country-option",r.setAttribute("role","option"),r.dataset.iso3=i.iso3;const s=document.createElement("img");s.className="country-flag",s.src=Ih(i.iso3),s.alt="";const a=document.createElement("span");return a.textContent=i.name,r.append(s,a),r.addEventListener("keydown",o=>{var c;o.key==="ArrowDown"?(o.preventDefault(),(c=r.nextElementSibling)==null||c.focus()):o.key==="ArrowUp"&&(o.preventDefault(),r.previousElementSibling?r.previousElementSibling.focus():it.focus())}),r})),Nt.hidden=!1,it.setAttribute("aria-expanded","true")}function Ys(){Nt&&(Nt.hidden=!0),it==null||it.setAttribute("aria-expanded","false")}function mn(n){return n.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLocaleLowerCase("es")}function Ih(n){var t;if(n==="ATA")return"/flags/aq.svg";if(n==="GZA")return"/flags/ps.svg";const e=n==="KOS"?"xk":(t=wt.alpha3ToAlpha2(n))==null?void 0:t.toLowerCase();return`/flags/${e&&/^[a-z]{2}$/.test(e)?e:"xx"}.svg`}async function LS(n){let e=Va.get(n);return e||(e=(async()=>{var X,he,Me;const t=n==="KOS"?"XKX":n==="GZA"?"PSE":n,i=(D,H)=>XS(D,H);mu??(mu=i("USA","MS.MIL.XPND.CD"));const r=n==="KOS"?"XK":n==="GZA"?"PS":wt.alpha3ToAlpha2(n),[s,a,o,c,l,u,h,f,p,g,v,m,d]=await Promise.all([i(t,"SP.POP.TOTL"),i(t,"NY.GDP.MKTP.CD"),i(t,"FP.CPI.TOTL.ZG"),i(t,"NY.GDP.DEFL.KD.ZG"),i(t,"GC.XPN.TOTL.GD.ZS"),i(t,"GC.REV.XGRT.GD.ZS"),i(t,"GC.NLD.TOTL.GD.ZS"),i(t,"MS.MIL.XPND.CD"),mu,qS(n),r?HS(r):Promise.resolve(void 0),n==="KOR"?VS():Promise.resolve(void 0),kS(n)]),E=g==null?void 0:g.dataUpdatedAt,S=D=>{const H=typeof D=="string"?Number(D):D;return typeof H=="number"&&Number.isFinite(H)?{value:H,refreshedAt:E}:void 0},_=S(g==null?void 0:g.population),x=S(g==null?void 0:g.gdp);x&&(x.value*=1e9);const A=S(g==null?void 0:g.publicDebt),T=S(g==null?void 0:g.inflation),L=S(g==null?void 0:g.area)??NS(g==null?void 0:g.geography)??(n==="CHN"?{value:9706961,refreshedAt:E}:void 0),y=T??o??c,M=(X=S(g==null?void 0:g.gdpGrowth))==null?void 0:X.value,I=GS(M,y==null?void 0:y.value),z=y&&y.value>-100?(Math.pow(1+y.value/100,1/52)-1)*100:void 0,W=KS(g==null?void 0:g.military),Z=W&&x?{value:x.value*W/100,refreshedAt:E}:void 0,U=YS(g==null?void 0:g.government),q=US(g==null?void 0:g.economy),te=await OS(n,g==null?void 0:g.economy,m==null?void 0:m.exchangeRate),O=m!=null&&m.exchangeRate&&m.exchangeRate>0?m.exchangeRate:void 0,fe=m&&O?m.values.nationalDebt/O:void 0,ge=(m==null?void 0:m.values.governmentRevenue)!==void 0&&O?m.values.governmentRevenue/O:void 0,Ee=(m==null?void 0:m.values.governmentSpending)!==void 0&&O?m.values.governmentSpending/O:void 0,Ne=ge??Ii(q==null?void 0:q.revenue,I)??(x&&u?Ii(x.value*u.value/100,I,u.year):void 0),Fe=Ee??Ii(q==null?void 0:q.spending,I)??(x&&l?Ii(x.value*l.value/100,I,l.year):void 0),Y=(m==null?void 0:m.values.derived.fiscalBalance)!==void 0&&O?m.values.derived.fiscalBalance/O:h&&x?Ii(x.value*h.value/100,I,h.year):Ne!==void 0&&Fe!==void 0?Ne-Fe:void 0,G=((he=v==null?void 0:v.fiscal)==null?void 0:he.netInterestUsd)!==void 0&&v.fiscal.netInterestUsd!==null?Ii(v.fiscal.netInterestUsd,I,String(v.fiscal.year)):void 0,w=(m==null?void 0:m.values.interestRate)!==void 0?m.values.interestRate*100:void 0,R=DS(Ne,Fe,Y,G,w,((Me=v==null?void 0:v.fiscal)==null?void 0:Me.netInterestPctOfGdp)??void 0),j=zS(v),re={population:_??s,gdp:x??a,debt:fe!==void 0?{value:fe}:j!==void 0?{value:j}:void 0,debtRatio:(m==null?void 0:m.values.derived.debtToGdpRatio)!==void 0?{value:m.values.derived.debtToGdpRatio*100}:(v==null?void 0:v.gdpPct)!==void 0?{value:v.gdpPct,year:v.baseDate}:A,inflation:y,weeklyInflation:z,area:L,democracyIndex:d,budget:R,currency:te,militarySpend:f??Z,militaryBaseline:p??(n==="USA"?Z:void 0),governmentType:U};if(![re.population,re.gdp,re.debt,re.debtRatio,re.inflation,re.area,re.democracyIndex,re.militarySpend,re.governmentType,re.budget].some(Boolean))throw new Error("No hay indicadores disponibles para este territorio.");return re})(),Va.set(n,e),e.catch(()=>Va.delete(n))),e}function DS(n,e,t,i,r,s){if(n===void 0&&e===void 0&&t===void 0&&i===void 0)return;const a=n!==void 0?n/52:void 0,o=e!==void 0?e/52:void 0;return{annualRevenue:n,annualSpending:e,perTurnRevenue:a,perTurnSpending:o,perTurnBalance:t!==void 0?t/52:a!==void 0&&o!==void 0?a-o:void 0,perTurnInterest:i!==void 0?i/52:void 0,policyRatePct:r,netInterestPctOfGdp:s??void 0}}function NS(n){var a;const e=n==null?void 0:n.Area;if(!e||typeof e!="object")return;const t=e,i=t.total??t["total "],r=i&&typeof i=="object"&&"text"in i?String(i.text??""):"",s=Number((a=r.replace(/,/g,"").match(/[\d.]+/))==null?void 0:a[0]);return Number.isFinite(s)&&s>0?{value:s}:void 0}function US(n){const e=n==null?void 0:n.Budget;if(!e||typeof e!="object")return;const t=e,i=a=>{var p;const o=typeof a=="string"?a:a&&typeof a=="object"&&"text"in a?String(a.text??""):"",c=o.match(/\$?\s*([\d,.]+)\s*(trillion|billion|million|thousand)?/i);if(!c)return;const l=Number(c[1].replace(/,/g,""));if(!Number.isFinite(l))return;const u=(c[2]??"").toLowerCase(),h=u==="trillion"?1e12:u==="billion"?1e9:u==="million"?1e6:u==="thousand"?1e3:1,f=(p=o.match(/\b(19|20)\d{2}\b/))==null?void 0:p[0];return{value:l*h,year:f}},r=i(t.revenues),s=i(t.expenditures);return r||s?{revenue:r,spending:s}:void 0}function FS(n,e){const t=e==null?void 0:e["Exchange rates"];if(!t||typeof t!="object")return;const i=t.Currency,r=i&&typeof i=="object"&&"text"in i?String(i.text??""):typeof i=="string"?i:"",s=r.match(/\(([A-Z]{3})\)/);if(!s)return;const o={RMB:"CNY"}[s[1]]??s[1];let l=r.split("(")[0].replace(/\s+per US dollar.*$/i,"").trim()||o;try{l=new Intl.DisplayNames(["es"],{type:"currency"}).of(o)??l}catch{}return{code:o,name:l}}async function OS(n,e,t){const i=FS(n,e);if(!i)return;if(i.code==="USD")return{...i,usdRate:1,rateDate:new Date().toISOString().slice(0,10)};const r=await BS(),s=r==null?void 0:r.get(i.code);return s?{...i,usdRate:s.rate,rateDate:s.date}:n==="KOR"&&t?{...i,usdRate:t,rateDate:new Date().toISOString().slice(0,10)}:i}async function BS(){if(!Ss||Date.now()-vu>3600*1e3){const n=(async()=>{const e=await fetch("https://api.frankfurter.dev/v2/rates?base=USD",{signal:AbortSignal.timeout(1e4)});if(!e.ok)throw new Error(`Frankfurter respondió ${e.status}`);const t=await e.json();return new Map(t.filter(i=>/^[A-Z]{3}$/.test(i.quote)&&Number.isFinite(i.rate)).map(i=>[i.quote,{rate:i.rate,date:i.date}]))})();vu=Date.now(),Ss=n.catch(e=>{throw Ss=void 0,e})}try{return await Ss}catch(n){console.warn("No se pudieron cargar las cotizaciones de divisas:",n);return}}function GS(n,e){const t=n!==void 0&&n>-100?n/100:void 0,i=e!==void 0&&e>-100?e/100:void 0;if(!(t===void 0&&i===void 0))return t===void 0?i:i===void 0?t:(1+t)*(1+i)-1}function Lh(n,e,t,i=Date.now()){if(!Number.isFinite(n)||!Number.isFinite(e)||e<=-1||!Number.isFinite(t))return;const r=(i-t)/(wh*1e3);return r<0?n:n*Math.pow(1+e,r)}function Ii(n,e,t){if(n===void 0)return;const i=typeof n=="number"?n:n.value,r=Number(t??(typeof n=="number"?void 0:n.year));if(e===void 0||!Number.isInteger(r)||r<1900)return i;const s=Date.UTC(r,11,31);return Lh(i,e,s)??i}function zS(n){if(!n)return;const e=n.baseDebt,t=n.rate,i=n.baseDate?Date.parse(`${n.baseDate}T00:00:00Z`):NaN;if(e!==void 0&&e>0&&t!==void 0&&Number.isFinite(i)){const r=t*wh/e,s=Lh(e,r,i);if(s!==void 0)return s}return n.debt}async function HS(n){try{const e=await fetch(`https://www.global-debt-clock.com/api/debt?c=${encodeURIComponent(n.toLowerCase())}`,{signal:AbortSignal.timeout(8e3)});return e.ok?await e.json():void 0}catch(e){console.warn("Global Debt Clock no respondió para este territorio:",e);return}}async function VS(){try{const n=await fetch("https://worldrealdebt.com/api/live.json",{signal:AbortSignal.timeout(8e3)});return n.ok?await n.json():void 0}catch(n){console.warn("WorldRealDebt no respondió para Corea del Sur:",n);return}}async function kS(n){try{gu??(gu=(async()=>{const s=await fetch("https://ourworldindata.org/grapher/liberal-democracy-index.csv?time=2025&csvType=full&useColumnShortNames=false",{signal:AbortSignal.timeout(12e3)});if(!s.ok)throw new Error(`V-Dem data responded ${s.status}`);const o=(await s.text()).split(/\r?\n/).filter(Boolean).slice(1),c=new Map;for(const l of o){const u=WS(l);if(u.length<4)continue;const[h,f,p,g]=u,v=Number(g);if(!Number.isFinite(v))continue;const m={value:v*100,year:p};f&&c.set(f.toUpperCase(),m),c.set(`name:${mn(h)}`,m)}return c})());const e=await gu,t=e.get(n);if(t)return t;const i=wt.alpha3ToAlpha2(n),r=Ch[n]??(i?wt.getName(i,"en"):void 0);return r?e.get(`name:${mn(r)}`):void 0}catch(e){console.warn("No se pudieron cargar los datos V-Dem:",e);return}}function WS(n){const e=[];let t="",i=!1;for(let r=0;r<n.length;r+=1){const s=n[r];s==='"'&&n[r+1]==='"'&&i?(t+='"',r+=1):s==='"'?i=!i:s===","&&!i?(e.push(t),t=""):t+=s}return e.push(t),e}async function XS(n,e){var i;const t=`https://api.worldbank.org/v2/country/${n}/indicator/${e}?format=json&mrnev=1&per_page=5`;for(let r=0;r<3;r+=1)try{const s=await fetch(t,{signal:AbortSignal.timeout(8e3)});if(!s.ok){if(s.status>=500&&r<2){await new Promise(c=>window.setTimeout(c,450*(r+1)));continue}return}const o=(i=(await s.json())[1])==null?void 0:i.find(c=>c.value!==null&&c.value!==void 0);return o?{value:Number(o.value),year:o.date??""}:void 0}catch{if(r===2)return;await new Promise(s=>window.setTimeout(s,450*(r+1)))}}async function qS(n){var e;try{let t=IS[n];if(!t){ka??(ka=(async()=>{const o=await fetch("https://worldfactbook.io/api/v1/countries/",{signal:AbortSignal.timeout(8e3)});if(!o.ok)throw new Error(`WorldFactbook.io responded ${o.status}`);return await o.json()})().catch(o=>{throw ka=void 0,o}));const r=await ka,s=wt.alpha3ToAlpha2(n),a=Ch[n]??(s?wt.getName(s,"en"):void 0);if(!a)return;t=(e=r.find(o=>mn(o.name)===mn(a)))==null?void 0:e.slug}if(!t)return;const i=await fetch(`https://worldfactbook.io/api/v1/countries/${encodeURIComponent(t)}/`,{signal:AbortSignal.timeout(8e3)});return i.ok?await i.json():void 0}catch(t){console.warn("WorldFactbook.io no pudo complementar la ficha del país:",t);return}}function YS(n){var t,i;return((i=(t=n==null?void 0:n["Government type"])==null?void 0:t.text)==null?void 0:i.trim())||void 0}function KS(n){const e=n==null?void 0:n["Military expenditures"];if(!e||typeof e!="object")return;const t=Object.entries(e).sort(([i],[r])=>r.localeCompare(i));for(const[,i]of t){const r=typeof i=="object"&&i&&"text"in i?i.text:void 0,s=r==null?void 0:r.match(/([\d.]+)\s*%\s*of GDP/i);if(s)return Number(s[1])}}function Wa(n,e,t,i=!1,r,s=!1,a={status:"loading"}){var E,S,_;const o=n,c=a.stats,l=(x,A)=>x?A(x.value):"Sin dato",u=x=>new Intl.NumberFormat("es-BO",{notation:"compact",maximumFractionDigits:1}).format(x),h=((E=c==null?void 0:c.militarySpend)==null?void 0:E.value)!==void 0&&((S=c.militaryBaseline)!=null&&S.value)?e==="USA"?100:e==="CRI"?1:Math.max(1,Math.min(100,Math.round(1+99*Math.sqrt(c.militarySpend.value/c.militaryBaseline.value)))):void 0,f=$S(c==null?void 0:c.governmentType)??ZS(e),p=c!=null&&c.currency?`<div class="stat-item"><span>MONEDA LOCAL</span><b>${jt(c.currency.name)} · ${jt(c.currency.code)}</b>${c.currency.usdRate!==void 0?`<small>1 USD = ${new Intl.NumberFormat("es-BO",{maximumSignificantDigits:6}).format(c.currency.usdRate)} ${jt(c.currency.code)} · referencia ${jt(c.currency.rateDate??"")}</small>`:"<small>Cotización no disponible</small>"}</div>`:"",g=a.status==="loading"?'<p class="stats-state">Cargando indicadores económicos y demográficos…</p>':a.status==="error"?'<p class="stats-state">Los indicadores numéricos no están disponibles ahora. Vuelve a seleccionar el país para reintentar.</p>':`
          <div class="stat-item"><span>POBLACIÓN</span><b>${l(c==null?void 0:c.population,u)}</b></div>
          <div class="stat-item"><span>PIB · USD</span><b>${l(c==null?void 0:c.gdp,u)}</b></div>
          <div class="stat-item"><span>PIB POR PERSONA</span><b>${c!=null&&c.gdp&&((_=c==null?void 0:c.population)!=null&&_.value)?`${u(c.gdp.value/c.population.value)} USD`:"Sin dato"}</b></div>
          <div class="stat-item"><span>DEUDA PÚBLICA · USD</span><b>${l(c==null?void 0:c.debt,u)}</b></div>
          <div class="stat-item"><span>DEUDA PÚBLICA · % PIB</span><b>${l(c==null?void 0:c.debtRatio,x=>`${x.toFixed(1)}%`)}</b></div>
          <div class="stat-item"><span>INFLACIÓN · ANUAL</span><b>${l(c==null?void 0:c.inflation,x=>`${x.toFixed(1)}%`)}</b></div>
          <div class="stat-item"><span>INFLACIÓN · TURNO SEMANAL</span><b>${(c==null?void 0:c.weeklyInflation)!==void 0?`${c.weeklyInflation.toFixed(3)}%`:"Sin dato"}</b></div>
          <div class="stat-item"><span>SUPERFICIE</span><b>${l(c==null?void 0:c.area,x=>`${u(x)} km²`)}</b></div>
          ${p}
          <div class="stat-item"><span>ÍNDICE DE DEMOCRACIA</span><b>${l(c==null?void 0:c.democracyIndex,x=>`${x.toFixed(0)} / 100`)}</b></div>
          <div class="stat-item"><span>ÍNDICE MILITAR · 1–100</span><b>${h??"Sin dato"}</b></div>
        `,v=x=>x===void 0?"Sin dato":`${x<0?"−":""}${u(Math.abs(x))} USD`,m=c!=null&&c.budget?`<section class="budget-section" aria-label="Presupuesto estimado por turno">
      <h3 class="budget-heading">PRESUPUESTO · TURNO DE 1 SEMANA</h3>
      <div class="budget-grid">
        <div class="stat-item"><span>INGRESOS ESTIMADOS / TURNO</span><b>${v(c.budget.perTurnRevenue)}</b></div>
        <div class="stat-item"><span>GASTOS ESTIMADOS / TURNO</span><b>${v(c.budget.perTurnSpending)}</b></div>
        <div class="stat-item"><span>BALANCE / TURNO</span><b>${v(c.budget.perTurnBalance)}</b></div>
        <div class="stat-item"><span>INTERESES DE DEUDA / TURNO</span><b>${v(c.budget.perTurnInterest)}</b></div>
        ${c.budget.policyRatePct!==void 0?`<div class="stat-item"><span>TASA DE POLÍTICA MONETARIA</span><b>${c.budget.policyRatePct.toFixed(2)}%</b></div>`:""}
        ${c.budget.netInterestPctOfGdp!==void 0?`<div class="stat-item"><span>INTERESES NETOS · % PIB</span><b>${c.budget.netInterestPctOfGdp.toFixed(2)}%</b></div>`:""}
      </div>
      <p class="budget-method">Proyección compuesta desde la última base anual disponible; g nominal aproximado y 52 turnos por año.</p>
    </section>`:"",d=`<div class="country-stats">
      <div class="stat-item"><span>TIPO DE GOBIERNO</span><b>${jt(f??"Sin clasificación")}</b></div>
      ${g}
    </div>${m}`;return`
    <div class="country-card">
      <span class="eyebrow">TERRITORIO SELECCIONADO</span>
      <div class="country-symbol" role="img" aria-label="Bandera de ${jt(n)}"><img src="${Ih(e)}" alt="" /></div>
      <h2>${jt(o)}</h2>
      <div class="country-rule"></div>
      <div class="country-detail"><span>RESUMEN DEL PAÍS</span><b>${jt(n)}</b></div>
      ${d}
      <p class="country-note">${t}</p>
      ${i?'<button id="start-country" class="select-country-button" type="button">Seleccionar país</button>':""}
      ${s?'<button id="new-game" class="new-game-button" type="button">Iniciar otra partida</button>':""}
    </div>`}function Xa(n,e,t,i){return`<div class="country-card region-card">
    <span class="eyebrow">${e?"DIVISIÓN SELECCIONADA":"MAPA REGIONAL"}</span>
    <div class="region-symbol" aria-hidden="true">▦</div>
    <h2>${jt(e??"Selecciona una región")}</h2>
    <div class="country-rule"></div>
    <div class="country-detail"><span>PAÍS</span><b>${jt(n)}</b></div>
    <p class="country-note">${t}</p>
    ${i?'<button id="new-game" class="new-game-button" type="button">Iniciar otra partida</button>':""}
  </div>`}function ZS(n){if(Su[n])return Su[n];const e=PS[n];if(e)return _u.get(mn(e))??null;const t=wt.alpha3ToAlpha2(n),i=t?wt.getName(t,"en"):void 0;return i?_u.get(mn(i))??null:null}function $S(n){if(!n)return;const e=mn(n);return{"federal parliamentary republic":"República parlamentaria federal","parliamentary republic":"República parlamentaria","presidential republic":"República presidencialista","semi-presidential republic":"República semipresidencial","federal republic":"República federal","constitutional monarchy":"Monarquía constitucional","parliamentary constitutional monarchy":"Monarquía parlamentaria constitucional","absolute monarchy":"Monarquía absoluta","islamic republic":"República islámica","one-party state":"Estado de partido único","communist state":"Estado comunista","military junta":"Junta militar",theocracy:"Teocracia",republic:"República"}[e]??n}function jt(n){return n.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]??e)}
