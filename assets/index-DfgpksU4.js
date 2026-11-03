(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Pc="180",oi={ROTATE:0,DOLLY:1,PAN:2},os={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Yd=0,Al=1,jd=2,xh=1,Kd=2,zn=3,qn=0,zt=1,En=2,ai=0,cs=1,wi=2,wl=3,Rl=4,Zd=5,yi=100,$d=101,Jd=102,Qd=103,ef=104,tf=200,nf=201,sf=202,rf=203,Ra=204,Ca=205,of=206,af=207,cf=208,lf=209,uf=210,hf=211,df=212,ff=213,pf=214,Pa=0,La=1,Da=2,fs=3,Ia=4,Na=5,Ua=6,Oa=7,yh=0,mf=1,gf=2,ci=0,_f=1,xf=2,yf=3,vf=4,Mf=5,Sf=6,Ef=7,Cl="attached",Tf="detached",vh=300,ps=301,ms=302,Fa=303,Ba=304,_o=306,gs=1e3,ii=1001,oo=1002,Ht=1003,Mh=1004,Gs=1005,$t=1006,Qr=1007,Hn=1008,An=1009,Sh=1010,Eh=1011,Qs=1012,Lc=1013,Ri=1014,fn=1015,ar=1016,Dc=1017,Ic=1018,er=1020,Th=35902,bh=35899,Ah=1021,wh=1022,rn=1023,tr=1026,nr=1027,Nc=1028,Uc=1029,Rh=1030,Oc=1031,Fc=1033,eo=33776,to=33777,no=33778,io=33779,za=35840,Ha=35841,ka=35842,Va=35843,Ga=36196,Wa=37492,Xa=37496,qa=37808,Ya=37809,ja=37810,Ka=37811,Za=37812,$a=37813,Ja=37814,Qa=37815,ec=37816,tc=37817,nc=37818,ic=37819,sc=37820,rc=37821,oc=36492,ac=36494,cc=36495,lc=36283,uc=36284,hc=36285,dc=36286,ir=2300,sr=2301,Lo=2302,Pl=2400,Ll=2401,Dl=2402,bf=2500,Af=0,Ch=1,fc=2,wf=3200,Rf=3201,Ph=0,Cf=1,ni="",gt="srgb",Vt="srgb-linear",ao="linear",Je="srgb",Oi=7680,Il=519,Pf=512,Lf=513,Df=514,Lh=515,If=516,Nf=517,Uf=518,Of=519,pc=35044,Nl="300 es",bn=2e3,co=2001;class Di{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ul=1234567;const Xs=Math.PI/180,_s=180/Math.PI;function gn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function Le(i,e,t){return Math.max(e,Math.min(t,i))}function Bc(i,e){return(i%e+e)%e}function Ff(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Bf(i,e,t){return i!==e?(t-i)/(e-i):0}function qs(i,e,t){return(1-t)*i+t*e}function zf(i,e,t,n){return qs(i,e,1-Math.exp(-t*n))}function Hf(i,e=1){return e-Math.abs(Bc(i,e*2)-e)}function kf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Vf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Gf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Wf(i,e){return i+Math.random()*(e-i)}function Xf(i){return i*(.5-Math.random())}function qf(i){i!==void 0&&(Ul=i);let e=Ul+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Yf(i){return i*Xs}function jf(i){return i*_s}function Kf(i){return(i&i-1)===0&&i!==0}function Zf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function $f(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Jf(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,c*h,c*d,a*l);break;case"YZY":i.set(c*d,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*d,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function dn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ke(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ci={DEG2RAD:Xs,RAD2DEG:_s,generateUUID:gn,clamp:Le,euclideanModulo:Bc,mapLinear:Ff,inverseLerp:Bf,lerp:qs,damp:zf,pingpong:Hf,smoothstep:kf,smootherstep:Vf,randInt:Gf,randFloat:Wf,randFloatSpread:Xf,seededRandom:qf,degToRad:Yf,radToDeg:jf,isPowerOfTwo:Kf,ceilPowerOfTwo:Zf,floorPowerOfTwo:$f,setQuaternionFromProperEuler:Jf,normalize:Ke,denormalize:dn};class xe{constructor(e=0,t=0){xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Le(this.x,e.x,t.x),this.y=Le(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Le(this.x,e,t),this.y=Le(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Le(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Le(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class wn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==d||l!==f||u!==g){let m=1-a;const p=c*d+l*f+u*g+h*_,A=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){const R=Math.sqrt(T),C=Math.atan2(R,p*A);m=Math.sin(m*C)/R,a=Math.sin(a*C)/R}const v=a*A;if(c=c*m+d*v,l=l*m+f*v,u=u*m+g*v,h=h*m+_*v,m===1-a){const R=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=R,l*=R,u*=R,h*=R}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-a*f,e[t+2]=l*g+u*f+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Le(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(e=0,t=0,n=0){E.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ol.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ol.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Le(this.x,e.x,t.x),this.y=Le(this.y,e.y,t.y),this.z=Le(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Le(this.x,e,t),this.y=Le(this.y,e,t),this.z=Le(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Le(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Do.copy(this).projectOnVector(e),this.sub(Do)}reflect(e){return this.sub(Do.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Le(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Do=new E,Ol=new wn;class Fe{constructor(e,t,n,s,r,o,a,c,l){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],A=s[1],T=s[4],v=s[7],R=s[2],C=s[5],P=s[8];return r[0]=o*_+a*A+c*R,r[3]=o*m+a*T+c*C,r[6]=o*p+a*v+c*P,r[1]=l*_+u*A+h*R,r[4]=l*m+u*T+h*C,r[7]=l*p+u*v+h*P,r[2]=d*_+f*A+g*R,r[5]=d*m+f*T+g*C,r[8]=d*p+f*v+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,g=t*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*l-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Io.makeScale(e,t)),this}rotate(e){return this.premultiply(Io.makeRotation(-e)),this}translate(e,t){return this.premultiply(Io.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Io=new Fe;function Dh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function rr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Qf(){const i=rr("canvas");return i.style.display="block",i}const Fl={};function or(i){i in Fl||(Fl[i]=!0,console.warn(i))}function ep(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Bl=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zl=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tp(){const i={enabled:!0,workingColorSpace:Vt,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Je&&(s.r=Xn(s.r),s.g=Xn(s.g),s.b=Xn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Je&&(s.r=ls(s.r),s.g=ls(s.g),s.b=ls(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ni?ao:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return or("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return or("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Vt]:{primaries:e,whitePoint:n,transfer:ao,toXYZ:Bl,fromXYZ:zl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:gt},outputColorSpaceConfig:{drawingBufferColorSpace:gt}},[gt]:{primaries:e,whitePoint:n,transfer:Je,toXYZ:Bl,fromXYZ:zl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:gt}}}),i}const Xe=tp();function Xn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ls(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Fi;class np{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Fi===void 0&&(Fi=rr("canvas")),Fi.width=e.width,Fi.height=e.height;const s=Fi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Fi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=rr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Xn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xn(t[n]/255)*255):t[n]=Xn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ip=0;class zc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=gn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(No(s[o].image)):r.push(No(s[o]))}else r=No(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function No(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?np.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sp=0;const Uo=new E;class Mt extends Di{constructor(e=Mt.DEFAULT_IMAGE,t=Mt.DEFAULT_MAPPING,n=ii,s=ii,r=$t,o=Hn,a=rn,c=An,l=Mt.DEFAULT_ANISOTROPY,u=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=gn(),this.name="",this.source=new zc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Uo).x}get height(){return this.source.getSize(Uo).y}get depth(){return this.source.getSize(Uo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gs:e.x=e.x-Math.floor(e.x);break;case ii:e.x=e.x<0?0:1;break;case oo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gs:e.y=e.y-Math.floor(e.y);break;case ii:e.y=e.y<0?0:1;break;case oo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mt.DEFAULT_IMAGE=null;Mt.DEFAULT_MAPPING=vh;Mt.DEFAULT_ANISOTROPY=1;class Ge{constructor(e=0,t=0,n=0,s=1){Ge.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,v=(f+1)/2,R=(p+1)/2,C=(u+d)/4,P=(h+_)/4,U=(g+m)/4;return T>v&&T>R?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=C/n,r=P/n):v>R?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=C/s,r=U/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=P/r,s=U/r),this.set(n,s,r,t),this}let A=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(h-_)/A,this.z=(d-u)/A,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Le(this.x,e.x,t.x),this.y=Le(this.y,e.y,t.y),this.z=Le(this.z,e.z,t.z),this.w=Le(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Le(this.x,e,t),this.y=Le(this.y,e,t),this.z=Le(this.z,e,t),this.w=Le(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Le(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rp extends Di{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ge(0,0,e,t),this.scissorTest=!1,this.viewport=new Ge(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Mt(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:$t,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new zc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pi extends rp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ih extends Mt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class op extends Mt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gt{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,cn):cn.fromBufferAttribute(r,o),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gr.copy(n.boundingBox)),gr.applyMatrix4(e.matrixWorld),this.union(gr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ps),_r.subVectors(this.max,Ps),Bi.subVectors(e.a,Ps),zi.subVectors(e.b,Ps),Hi.subVectors(e.c,Ps),jn.subVectors(zi,Bi),Kn.subVectors(Hi,zi),hi.subVectors(Bi,Hi);let t=[0,-jn.z,jn.y,0,-Kn.z,Kn.y,0,-hi.z,hi.y,jn.z,0,-jn.x,Kn.z,0,-Kn.x,hi.z,0,-hi.x,-jn.y,jn.x,0,-Kn.y,Kn.x,0,-hi.y,hi.x,0];return!Oo(t,Bi,zi,Hi,_r)||(t=[1,0,0,0,1,0,0,0,1],!Oo(t,Bi,zi,Hi,_r))?!1:(xr.crossVectors(jn,Kn),t=[xr.x,xr.y,xr.z],Oo(t,Bi,zi,Hi,_r))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const In=[new E,new E,new E,new E,new E,new E,new E,new E],cn=new E,gr=new Gt,Bi=new E,zi=new E,Hi=new E,jn=new E,Kn=new E,hi=new E,Ps=new E,_r=new E,xr=new E,di=new E;function Oo(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){di.fromArray(i,r);const a=s.x*Math.abs(di.x)+s.y*Math.abs(di.y)+s.z*Math.abs(di.z),c=e.dot(di),l=t.dot(di),u=n.dot(di);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const ap=new Gt,Ls=new E,Fo=new E;class an{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ap.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ls.subVectors(e,this.center);const t=Ls.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ls,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ls.copy(e.center).add(Fo)),this.expandByPoint(Ls.copy(e.center).sub(Fo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Nn=new E,Bo=new E,yr=new E,Zn=new E,zo=new E,vr=new E,Ho=new E;class Ss{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.origin).addScaledVector(this.direction,t),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Bo.copy(e).add(t).multiplyScalar(.5),yr.copy(t).sub(e).normalize(),Zn.copy(this.origin).sub(Bo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(yr),a=Zn.dot(this.direction),c=-Zn.dot(yr),l=Zn.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Bo).addScaledVector(yr,d),f}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);const n=Nn.dot(this.direction),s=Nn.dot(Nn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,n,s,r){zo.subVectors(t,e),vr.subVectors(n,e),Ho.crossVectors(zo,vr);let o=this.direction.dot(Ho),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zn.subVectors(this.origin,e);const c=a*this.direction.dot(vr.crossVectors(Zn,vr));if(c<0)return null;const l=a*this.direction.dot(zo.cross(Zn));if(l<0||c+l>o)return null;const u=-a*Zn.dot(Ho);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ie{constructor(e,t,n,s,r,o,a,c,l,u,h,d,f,g,_,m){Ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,u,h,d,f,g,_,m)}set(e,t,n,s,r,o,a,c,l,u,h,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ie().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ki.setFromMatrixColumn(e,0).length(),r=1/ki.setFromMatrixColumn(e,1).length(),o=1/ki.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cp,e,lp)}lookAt(e,t,n){const s=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),$n.crossVectors(n,Kt),$n.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),$n.crossVectors(n,Kt)),$n.normalize(),Mr.crossVectors(Kt,$n),s[0]=$n.x,s[4]=Mr.x,s[8]=Kt.x,s[1]=$n.y,s[5]=Mr.y,s[9]=Kt.y,s[2]=$n.z,s[6]=Mr.z,s[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],A=n[3],T=n[7],v=n[11],R=n[15],C=s[0],P=s[4],U=s[8],S=s[12],M=s[1],D=s[5],z=s[9],V=s[13],j=s[2],W=s[6],q=s[10],Z=s[14],H=s[3],re=s[7],le=s[11],Te=s[15];return r[0]=o*C+a*M+c*j+l*H,r[4]=o*P+a*D+c*W+l*re,r[8]=o*U+a*z+c*q+l*le,r[12]=o*S+a*V+c*Z+l*Te,r[1]=u*C+h*M+d*j+f*H,r[5]=u*P+h*D+d*W+f*re,r[9]=u*U+h*z+d*q+f*le,r[13]=u*S+h*V+d*Z+f*Te,r[2]=g*C+_*M+m*j+p*H,r[6]=g*P+_*D+m*W+p*re,r[10]=g*U+_*z+m*q+p*le,r[14]=g*S+_*V+m*Z+p*Te,r[3]=A*C+T*M+v*j+R*H,r[7]=A*P+T*D+v*W+R*re,r[11]=A*U+T*z+v*q+R*le,r[15]=A*S+T*V+v*Z+R*Te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*h-s*l*h-r*a*d+n*l*d+s*a*f-n*c*f)+_*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*u-r*c*u)+m*(+t*l*h-t*a*f-r*o*h+n*o*f+r*a*u-n*l*u)+p*(-s*a*u-t*c*h+t*a*d+s*o*h-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],A=h*m*l-_*d*l+_*c*f-a*m*f-h*c*p+a*d*p,T=g*d*l-u*m*l-g*c*f+o*m*f+u*c*p-o*d*p,v=u*_*l-g*h*l+g*a*f-o*_*f-u*a*p+o*h*p,R=g*h*c-u*_*c-g*a*d+o*_*d+u*a*m-o*h*m,C=t*A+n*T+s*v+r*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=A*P,e[1]=(_*d*r-h*m*r-_*s*f+n*m*f+h*s*p-n*d*p)*P,e[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*p+n*c*p)*P,e[3]=(h*c*r-a*d*r-h*s*l+n*d*l+a*s*f-n*c*f)*P,e[4]=T*P,e[5]=(u*m*r-g*d*r+g*s*f-t*m*f-u*s*p+t*d*p)*P,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*P,e[7]=(o*d*r-u*c*r+u*s*l-t*d*l-o*s*f+t*c*f)*P,e[8]=v*P,e[9]=(g*h*r-u*_*r-g*n*f+t*_*f+u*n*p-t*h*p)*P,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*p+t*a*p)*P,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*f-t*a*f)*P,e[12]=R*P,e[13]=(u*_*s-g*h*s+g*n*d-t*_*d-u*n*m+t*h*m)*P,e[14]=(g*a*s-o*_*s-g*n*c+t*_*c+o*n*m-t*a*m)*P,e[15]=(o*h*s-u*a*s+u*n*c-t*h*c-o*n*d+t*a*d)*P,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,g=r*h,_=o*u,m=o*h,p=a*h,A=c*l,T=c*u,v=c*h,R=n.x,C=n.y,P=n.z;return s[0]=(1-(_+p))*R,s[1]=(f+v)*R,s[2]=(g-T)*R,s[3]=0,s[4]=(f-v)*C,s[5]=(1-(d+p))*C,s[6]=(m+A)*C,s[7]=0,s[8]=(g+T)*P,s[9]=(m-A)*P,s[10]=(1-(d+_))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=ki.set(s[0],s[1],s[2]).length();const o=ki.set(s[4],s[5],s[6]).length(),a=ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ln.copy(this);const l=1/r,u=1/o,h=1/a;return ln.elements[0]*=l,ln.elements[1]*=l,ln.elements[2]*=l,ln.elements[4]*=u,ln.elements[5]*=u,ln.elements[6]*=u,ln.elements[8]*=h,ln.elements[9]*=h,ln.elements[10]*=h,t.setFromRotationMatrix(ln),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=bn,c=!1){const l=this.elements,u=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s);let g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===bn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===co)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=bn,c=!1){const l=this.elements,u=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s);let g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===bn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===co)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ki=new E,ln=new Ie,cp=new E(0,0,0),lp=new E(1,1,1),$n=new E,Mr=new E,Kt=new E,Hl=new Ie,kl=new wn;class Rn{constructor(e=0,t=0,n=0,s=Rn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Le(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Le(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Le(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Le(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Hl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kl.setFromEuler(this),this.setFromQuaternion(kl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rn.DEFAULT_ORDER="XYZ";class Hc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let up=0;const Vl=new E,Vi=new wn,Un=new Ie,Sr=new E,Ds=new E,hp=new E,dp=new wn,Gl=new E(1,0,0),Wl=new E(0,1,0),Xl=new E(0,0,1),ql={type:"added"},fp={type:"removed"},Gi={type:"childadded",child:null},ko={type:"childremoved",child:null};class rt extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rt.DEFAULT_UP.clone();const e=new E,t=new Rn,n=new wn,s=new E(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ie},normalMatrix:{value:new Fe}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.premultiply(Vi),this}rotateX(e){return this.rotateOnAxis(Gl,e)}rotateY(e){return this.rotateOnAxis(Wl,e)}rotateZ(e){return this.rotateOnAxis(Xl,e)}translateOnAxis(e,t){return Vl.copy(e).applyQuaternion(this.quaternion),this.position.add(Vl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gl,e)}translateY(e){return this.translateOnAxis(Wl,e)}translateZ(e){return this.translateOnAxis(Xl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Sr.copy(e):Sr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(Ds,Sr,this.up):Un.lookAt(Sr,Ds,this.up),this.quaternion.setFromRotationMatrix(Un),s&&(Un.extractRotation(s.matrixWorld),Vi.setFromRotationMatrix(Un),this.quaternion.premultiply(Vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ql),Gi.child=e,this.dispatchEvent(Gi),Gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fp),ko.child=e,this.dispatchEvent(ko),ko.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Un.multiply(e.parent.matrixWorld)),e.applyMatrix4(Un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ql),Gi.child=e,this.dispatchEvent(Gi),Gi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,e,hp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,dp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}rt.DEFAULT_UP=new E(0,1,0);rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new E,On=new E,Vo=new E,Fn=new E,Wi=new E,Xi=new E,Yl=new E,Go=new E,Wo=new E,Xo=new E,qo=new Ge,Yo=new Ge,jo=new Ge;class sn{constructor(e=new E,t=new E,n=new E){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),un.subVectors(e,t),s.cross(un);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){un.subVectors(s,t),On.subVectors(n,t),Vo.subVectors(e,t);const o=un.dot(un),a=un.dot(On),c=un.dot(Vo),l=On.dot(On),u=On.dot(Vo),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Fn.x),c.addScaledVector(o,Fn.y),c.addScaledVector(a,Fn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return qo.setScalar(0),Yo.setScalar(0),jo.setScalar(0),qo.fromBufferAttribute(e,t),Yo.fromBufferAttribute(e,n),jo.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(qo,r.x),o.addScaledVector(Yo,r.y),o.addScaledVector(jo,r.z),o}static isFrontFacing(e,t,n,s){return un.subVectors(n,t),On.subVectors(e,t),un.cross(On).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),On.subVectors(this.a,this.b),un.cross(On).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return sn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Wi.subVectors(s,n),Xi.subVectors(r,n),Go.subVectors(e,n);const c=Wi.dot(Go),l=Xi.dot(Go);if(c<=0&&l<=0)return t.copy(n);Wo.subVectors(e,s);const u=Wi.dot(Wo),h=Xi.dot(Wo);if(u>=0&&h<=u)return t.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Wi,o);Xo.subVectors(e,r);const f=Wi.dot(Xo),g=Xi.dot(Xo);if(g>=0&&f<=g)return t.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Xi,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Yl.subVectors(r,s),a=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(Yl,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(Wi,o).addScaledVector(Xi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Nh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},Er={h:0,s:0,l:0};function Ko(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Me{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Xe.workingColorSpace){if(e=Bc(e,1),t=Le(t,0,1),n=Le(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ko(o,r,e+1/3),this.g=Ko(o,r,e),this.b=Ko(o,r,e-1/3)}return Xe.colorSpaceToWorking(this,s),this}setStyle(e,t=gt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gt){const n=Nh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xn(e.r),this.g=Xn(e.g),this.b=Xn(e.b),this}copyLinearToSRGB(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gt){return Xe.workingToColorSpace(Dt.copy(this),e),Math.round(Le(Dt.r*255,0,255))*65536+Math.round(Le(Dt.g*255,0,255))*256+Math.round(Le(Dt.b*255,0,255))}getHexString(e=gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(Dt.copy(this),t);const n=Dt.r,s=Dt.g,r=Dt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=gt){Xe.workingToColorSpace(Dt.copy(this),e);const t=Dt.r,n=Dt.g,s=Dt.b;return e!==gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Jn),this.setHSL(Jn.h+e,Jn.s+t,Jn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Jn),e.getHSL(Er);const n=qs(Jn.h,Er.h,t),s=qs(Jn.s,Er.s,t),r=qs(Jn.l,Er.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new Me;Me.NAMES=Nh;let pp=0;class _n extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=gn(),this.name="",this.type="Material",this.blending=cs,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ra,this.blendDst=Ca,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Il,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(n.blending=this.blending),this.side!==qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ra&&(n.blendSrc=this.blendSrc),this.blendDst!==Ca&&(n.blendDst=this.blendDst),this.blendEquation!==yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Il&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class si extends _n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=yh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new E,Tr=new xe;let mp=0;class kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=pc,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Tr.fromBufferAttribute(this,t),Tr.applyMatrix3(e),this.setXY(t,Tr.x,Tr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ke(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=dn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=dn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=dn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=dn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),s=Ke(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),s=Ke(s,this.array),r=Ke(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pc&&(e.usage=this.usage),e}}class Uh extends kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Oh extends kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class At extends kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let gp=0;const en=new Ie,Zo=new rt,qi=new E,Zt=new Gt,Is=new Gt,bt=new E;class _t extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dh(e)?Oh:Uh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Fe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,n){return en.makeTranslation(e,t,n),this.applyMatrix4(en),this}scale(e,t,n){return en.makeScale(e,t,n),this.applyMatrix4(en),this}lookAt(e){return Zo.lookAt(e),Zo.updateMatrix(),this.applyMatrix4(Zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new At(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Zt.setFromBufferAttribute(r),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new an);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(e){const n=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Is.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors(Zt.min,Is.min),Zt.expandByPoint(bt),bt.addVectors(Zt.max,Is.max),Zt.expandByPoint(bt)):(Zt.expandByPoint(Is.min),Zt.expandByPoint(Is.max))}Zt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)bt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(bt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)bt.fromBufferAttribute(a,l),c&&(qi.fromBufferAttribute(e,l),bt.add(qi)),s=Math.max(s,n.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let U=0;U<n.count;U++)a[U]=new E,c[U]=new E;const l=new E,u=new E,h=new E,d=new xe,f=new xe,g=new xe,_=new E,m=new E;function p(U,S,M){l.fromBufferAttribute(n,U),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,M),d.fromBufferAttribute(r,U),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(D),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(D),a[U].add(_),a[S].add(_),a[M].add(_),c[U].add(m),c[S].add(m),c[M].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let U=0,S=A.length;U<S;++U){const M=A[U],D=M.start,z=M.count;for(let V=D,j=D+z;V<j;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const T=new E,v=new E,R=new E,C=new E;function P(U){R.fromBufferAttribute(s,U),C.copy(R);const S=a[U];T.copy(S),T.sub(R.multiplyScalar(R.dot(S))).normalize(),v.crossVectors(C,S);const D=v.dot(c[U])<0?-1:1;o.setXYZW(U,T.x,T.y,T.z,D)}for(let U=0,S=A.length;U<S;++U){const M=A[U],D=M.start,z=M.count;for(let V=D,j=D+z;V<j;V+=3)P(e.getX(V+0)),P(e.getX(V+1)),P(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new E,r=new E,o=new E,a=new E,c=new E,l=new E,u=new E,h=new E;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new kt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _t,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jl=new Ie,fi=new Ss,br=new an,Kl=new E,Ar=new E,wr=new E,Rr=new E,$o=new E,Cr=new E,Zl=new E,Pr=new E;class It extends rt{constructor(e=new _t,t=new si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Cr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&($o.fromBufferAttribute(h,e),o?Cr.addScaledVector($o,u):Cr.addScaledVector($o.sub(t),u))}t.add(Cr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(r),fi.copy(e.ray).recast(e.near),!(br.containsPoint(fi.origin)===!1&&(fi.intersectSphere(br,Kl)===null||fi.origin.distanceToSquared(Kl)>(e.far-e.near)**2))&&(jl.copy(r).invert(),fi.copy(e.ray).applyMatrix4(jl),!(n.boundingBox!==null&&fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,fi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],A=Math.max(m.start,f.start),T=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=A,R=T;v<R;v+=3){const C=a.getX(v),P=a.getX(v+1),U=a.getX(v+2);s=Lr(this,p,e,n,l,u,h,C,P,U),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const A=a.getX(m),T=a.getX(m+1),v=a.getX(m+2);s=Lr(this,o,e,n,l,u,h,A,T,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],A=Math.max(m.start,f.start),T=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=A,R=T;v<R;v+=3){const C=v,P=v+1,U=v+2;s=Lr(this,p,e,n,l,u,h,C,P,U),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const A=m,T=m+1,v=m+2;s=Lr(this,o,e,n,l,u,h,A,T,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function _p(i,e,t,n,s,r,o,a){let c;if(e.side===zt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===qn,a),c===null)return null;Pr.copy(a),Pr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Pr);return l<t.near||l>t.far?null:{distance:l,point:Pr.clone(),object:i}}function Lr(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Ar),i.getVertexPosition(c,wr),i.getVertexPosition(l,Rr);const u=_p(i,e,t,n,Ar,wr,Rr,Zl);if(u){const h=new E;sn.getBarycoord(Zl,Ar,wr,Rr,h),s&&(u.uv=sn.getInterpolatedAttribute(s,a,c,l,h,new xe)),r&&(u.uv1=sn.getInterpolatedAttribute(r,a,c,l,h,new xe)),o&&(u.normal=sn.getInterpolatedAttribute(o,a,c,l,h,new E),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new E,materialIndex:0};sn.getNormal(Ar,wr,Rr,d.normal),u.face=d,u.barycoord=h}return u}class cr extends _t{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new At(l,3)),this.setAttribute("normal",new At(u,3)),this.setAttribute("uv",new At(h,2));function g(_,m,p,A,T,v,R,C,P,U,S){const M=v/P,D=R/U,z=v/2,V=R/2,j=C/2,W=P+1,q=U+1;let Z=0,H=0;const re=new E;for(let le=0;le<q;le++){const Te=le*D-V;for(let He=0;He<W;He++){const nt=He*M-z;re[_]=nt*A,re[m]=Te*T,re[p]=j,l.push(re.x,re.y,re.z),re[_]=0,re[m]=0,re[p]=C>0?1:-1,u.push(re.x,re.y,re.z),h.push(He/P),h.push(1-le/U),Z+=1}}for(let le=0;le<U;le++)for(let Te=0;Te<P;Te++){const He=d+Te+W*le,nt=d+Te+W*(le+1),ot=d+(Te+1)+W*(le+1),Ye=d+(Te+1)+W*le;c.push(He,nt,Ye),c.push(nt,ot,Ye),H+=6}a.addGroup(f,H,S),f+=H,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ft(i){const e={};for(let t=0;t<i.length;t++){const n=xs(i[t]);for(const s in n)e[s]=n[s]}return e}function xp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Fh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const kc={clone:xs,merge:Ft};var yp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends _n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yp,this.fragmentShader=vp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xs(e.uniforms),this.uniformsGroups=xp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Bh extends rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new E,$l=new xe,Jl=new xe;class Bt extends Bh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_s*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _s*2*Math.atan(Math.tan(Xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z)}getViewSize(e,t){return this.getViewBounds(e,$l,Jl),t.subVectors(Jl,$l)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Yi=-90,ji=1;class Mp extends rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Bt(Yi,ji,e,t);s.layers=this.layers,this.add(s);const r=new Bt(Yi,ji,e,t);r.layers=this.layers,this.add(r);const o=new Bt(Yi,ji,e,t);o.layers=this.layers,this.add(o);const a=new Bt(Yi,ji,e,t);a.layers=this.layers,this.add(a);const c=new Bt(Yi,ji,e,t);c.layers=this.layers,this.add(c);const l=new Bt(Yi,ji,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===co)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class zh extends Mt{constructor(e=[],t=ps,n,s,r,o,a,c,l,u){super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sp extends Pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new zh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new cr(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zt,blending:ai});r.uniforms.tEquirect.value=t;const o=new It(s,r),a=t.minFilter;return t.minFilter===Hn&&(t.minFilter=$t),new Mp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class ri extends rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ep={type:"move"};class Jo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ep)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ri;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Vc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Me(e),this.density=t}clone(){return new Vc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Tp extends rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Gc{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=pc,this.updateRanges=[],this.version=0,this.uuid=gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ot=new E;class pn{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ke(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=dn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=dn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=dn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=dn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),s=Ke(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),s=Ke(s,this.array),r=Ke(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new pn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class mc extends _n{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ki;const Ns=new E,Zi=new E,$i=new E,Ji=new xe,Us=new xe,Hh=new Ie,Dr=new E,Os=new E,Ir=new E,Ql=new xe,Qo=new xe,eu=new xe;class tu extends rt{constructor(e=new mc){if(super(),this.isSprite=!0,this.type="Sprite",Ki===void 0){Ki=new _t;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Gc(t,5);Ki.setIndex([0,1,2,0,2,3]),Ki.setAttribute("position",new pn(n,3,0,!1)),Ki.setAttribute("uv",new pn(n,2,3,!1))}this.geometry=Ki,this.material=e,this.center=new xe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zi.setFromMatrixScale(this.matrixWorld),Hh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),$i.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zi.multiplyScalar(-$i.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Nr(Dr.set(-.5,-.5,0),$i,o,Zi,s,r),Nr(Os.set(.5,-.5,0),$i,o,Zi,s,r),Nr(Ir.set(.5,.5,0),$i,o,Zi,s,r),Ql.set(0,0),Qo.set(1,0),eu.set(1,1);let a=e.ray.intersectTriangle(Dr,Os,Ir,!1,Ns);if(a===null&&(Nr(Os.set(-.5,.5,0),$i,o,Zi,s,r),Qo.set(0,1),a=e.ray.intersectTriangle(Dr,Ir,Os,!1,Ns),a===null))return;const c=e.ray.origin.distanceTo(Ns);c<e.near||c>e.far||t.push({distance:c,point:Ns.clone(),uv:sn.getInterpolation(Ns,Dr,Os,Ir,Ql,Qo,eu,new xe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Nr(i,e,t,n,s,r){Ji.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Us.x=r*Ji.x-s*Ji.y,Us.y=s*Ji.x+r*Ji.y):Us.copy(Ji),i.copy(e),i.x+=Us.x,i.y+=Us.y,i.applyMatrix4(Hh)}const nu=new E,iu=new Ge,su=new Ge,bp=new E,ru=new Ie,Ur=new E,ea=new an,ou=new Ie,ta=new Ss;class Ap extends It{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Cl,this.bindMatrix=new Ie,this.bindMatrixInverse=new Ie,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Gt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ur),this.boundingBox.expandByPoint(Ur)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new an),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ur),this.boundingSphere.expandByPoint(Ur)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ea.copy(this.boundingSphere),ea.applyMatrix4(s),e.ray.intersectsSphere(ea)!==!1&&(ou.copy(s).invert(),ta.copy(e.ray).applyMatrix4(ou),!(this.boundingBox!==null&&ta.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ta)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ge,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Cl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Tf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;iu.fromBufferAttribute(s.attributes.skinIndex,e),su.fromBufferAttribute(s.attributes.skinWeight,e),nu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=su.getComponent(r);if(o!==0){const a=iu.getComponent(r);ru.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(bp.copy(nu).applyMatrix4(ru),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class kh extends rt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Vh extends Mt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Ht,u=Ht,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const au=new Ie,wp=new Ie;class Wc{constructor(e=[],t=[]){this.uuid=gn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ie)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ie;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:wp;au.multiplyMatrices(a,t[r]),au.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Wc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Vh(t,e,e,rn,fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new kh),this.bones.push(o),this.boneInverses.push(new Ie().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class gc extends kt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Qi=new Ie,cu=new Ie,Or=[],lu=new Gt,Rp=new Ie,Fs=new It,Bs=new an;class Cp extends It{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new gc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Rp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Gt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qi),lu.copy(e.boundingBox).applyMatrix4(Qi),this.boundingBox.union(lu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new an),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qi),Bs.copy(e.boundingSphere).applyMatrix4(Qi),this.boundingSphere.union(Bs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Fs.geometry=this.geometry,Fs.material=this.material,Fs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bs.copy(this.boundingSphere),Bs.applyMatrix4(n),e.ray.intersectsSphere(Bs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Qi),cu.multiplyMatrices(n,Qi),Fs.matrixWorld=cu,Fs.raycast(e,Or);for(let o=0,a=Or.length;o<a;o++){const c=Or[o];c.instanceId=r,c.object=this,t.push(c)}Or.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new gc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Vh(new Float32Array(s*this.count),s,this.count,Nc,fn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const na=new E,Pp=new E,Lp=new Fe;class ti{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=na.subVectors(n,t).cross(Pp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(na),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Lp.getNormalMatrix(e),s=this.coplanarPoint(na).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pi=new an,Dp=new xe(.5,.5),Fr=new E;class Xc{constructor(e=new ti,t=new ti,n=new ti,s=new ti,r=new ti,o=new ti){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=bn,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],h=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],A=r[12],T=r[13],v=r[14],R=r[15];if(s[0].setComponents(l-o,f-u,p-g,R-A).normalize(),s[1].setComponents(l+o,f+u,p+g,R+A).normalize(),s[2].setComponents(l+a,f+h,p+_,R+T).normalize(),s[3].setComponents(l-a,f-h,p-_,R-T).normalize(),n)s[4].setComponents(c,d,m,v).normalize(),s[5].setComponents(l-c,f-d,p-m,R-v).normalize();else if(s[4].setComponents(l-c,f-d,p-m,R-v).normalize(),t===bn)s[5].setComponents(l+c,f+d,p+m,R+v).normalize();else if(t===co)s[5].setComponents(c,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(e){pi.center.set(0,0,0);const t=Dp.distanceTo(e.center);return pi.radius=.7071067811865476+t,pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Fr.x=s.normal.x>0?e.max.x:e.min.x,Fr.y=s.normal.y>0?e.max.y:e.min.y,Fr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xo extends _n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const lo=new E,uo=new E,uu=new Ie,zs=new Ss,Br=new an,ia=new E,hu=new E;class yo extends rt{constructor(e=new _t,t=new xo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)lo.fromBufferAttribute(t,s-1),uo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=lo.distanceTo(uo);e.setAttribute("lineDistance",new At(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(s),Br.radius+=r,e.ray.intersectsSphere(Br)===!1)return;uu.copy(s).invert(),zs.copy(e.ray).applyMatrix4(uu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=u.getX(_),A=u.getX(_+1),T=zr(this,e,zs,c,p,A,_);T&&t.push(T)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=zr(this,e,zs,c,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=zr(this,e,zs,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=zr(this,e,zs,c,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function zr(i,e,t,n,s,r,o){const a=i.geometry.attributes.position;if(lo.fromBufferAttribute(a,s),uo.fromBufferAttribute(a,r),t.distanceSqToSegment(lo,uo,ia,hu)>n)return;ia.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ia);if(!(l<e.near||l>e.far))return{distance:l,point:hu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const du=new E,fu=new E;class Ip extends yo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)du.fromBufferAttribute(t,s),fu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+du.distanceTo(fu);e.setAttribute("lineDistance",new At(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qc extends yo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class lr extends _n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const pu=new Ie,_c=new Ss,Hr=new an,kr=new E;class Ii extends rt{constructor(e=new _t,t=new lr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(s),Hr.radius+=r,e.ray.intersectsSphere(Hr)===!1)return;pu.copy(s).invert(),_c.copy(e.ray).applyMatrix4(pu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);kr.fromBufferAttribute(h,m),mu(kr,m,c,s,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,_=f;g<_;g++)kr.fromBufferAttribute(h,g),mu(kr,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function mu(i,e,t,n,s,r,o){const a=_c.distanceSqToPoint(i);if(a<t){const c=new E;_c.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class xc extends Mt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gh extends Mt{constructor(e,t,n=Ri,s,r,o,a=Ht,c=Ht,l,u=tr,h=1){if(u!==tr&&u!==nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Wh extends Mt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Xh{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new xe:new E);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new E,s=[],r=[],o=[],a=new E,c=new Ie;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new E)}r[0]=new E,o[0]=new E;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Le(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Le(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class qh extends Xh{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new xe){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}function Np(i,e){const t=1-i;return t*t*e}function Up(i,e){return 2*(1-i)*i*e}function Op(i,e){return i*i*e}function sa(i,e,t,n){return Np(i,e)+Up(i,t)+Op(i,n)}class Fp extends Xh{constructor(e=new E,t=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new E){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(sa(e,s.x,r.x,o.x),sa(e,s.y,r.y,o.y),sa(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vo extends _t{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=e/a,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const A=p*d-o;for(let T=0;T<l;T++){const v=T*h-r;g.push(v,-A,0),_.push(0,0,1),m.push(T/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let A=0;A<a;A++){const T=A+l*p,v=A+l*(p+1),R=A+1+l*(p+1),C=A+1+l*p;f.push(T,v,C),f.push(v,R,C)}this.setIndex(f),this.setAttribute("position",new At(g,3)),this.setAttribute("normal",new At(_,3)),this.setAttribute("uv",new At(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vo(e.width,e.height,e.widthSegments,e.heightSegments)}}class ho extends _t{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new E,d=new E,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const A=[],T=p/n;let v=0;p===0&&o===0?v=.5/t:p===n&&c===Math.PI&&(v=-.5/t);for(let R=0;R<=t;R++){const C=R/t;h.x=-e*Math.cos(s+C*r)*Math.sin(o+T*a),h.y=e*Math.cos(o+T*a),h.z=e*Math.sin(s+C*r)*Math.sin(o+T*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(C+v,1-T),A.push(l++)}u.push(A)}for(let p=0;p<n;p++)for(let A=0;A<t;A++){const T=u[p][A+1],v=u[p][A],R=u[p+1][A],C=u[p+1][A+1];(p!==0||o>0)&&f.push(T,v,C),(p!==n-1||c<Math.PI)&&f.push(v,R,C)}this.setIndex(f),this.setAttribute("position",new At(g,3)),this.setAttribute("normal",new At(_,3)),this.setAttribute("uv",new At(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ho(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Bp extends _t{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,s=new E,r=new E;if(e.index!==null){const o=e.attributes.position,a=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){const h=c[l],d=h.start,f=h.count;for(let g=d,_=d+f;g<_;g+=3)for(let m=0;m<3;m++){const p=a.getX(g+m),A=a.getX(g+(m+1)%3);s.fromBufferAttribute(o,p),r.fromBufferAttribute(o,A),gu(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{const o=e.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){const u=3*a+l,h=3*a+(l+1)%3;s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,h),gu(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new At(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function gu(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(s)===!0?!1:(t.add(n),t.add(s),!0)}class ur extends _n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ph,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ln extends ur{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Le(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class zp extends _n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hp extends _n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Vr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function kp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Vp(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function _u(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function Yh(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class hr{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Gp extends hr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pl,endingEnd:Pl}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ll:r=e,a=2*t-n;break;case Dl:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ll:o=e,c=2*n-t;break;case Dl:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,A=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,T=(-1-f)*m+(1.5+f)*_+.5*g,v=f*m-f*_;for(let R=0;R!==a;++R)r[R]=p*o[u+R]+A*o[l+R]+T*o[c+R]+v*o[h+R];return r}}class Wp extends hr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}}class Xp extends hr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class xn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Vr(t,this.TimeBufferType),this.values=Vr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Vr(e.times,Array),values:Vr(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Gp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ir:t=this.InterpolantFactoryMethodDiscrete;break;case sr:t=this.InterpolantFactoryMethodLinear;break;case Lo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ir;case this.InterpolantFactoryMethodLinear:return sr;case this.InterpolantFactoryMethodSmooth:return Lo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&kp(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Lo,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(s)c=!0;else{const h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}xn.prototype.ValueTypeName="";xn.prototype.TimeBufferType=Float32Array;xn.prototype.ValueBufferType=Float32Array;xn.prototype.DefaultInterpolation=sr;class Es extends xn{constructor(e,t,n){super(e,t,n)}}Es.prototype.ValueTypeName="bool";Es.prototype.ValueBufferType=Array;Es.prototype.DefaultInterpolation=ir;Es.prototype.InterpolantFactoryMethodLinear=void 0;Es.prototype.InterpolantFactoryMethodSmooth=void 0;class jh extends xn{constructor(e,t,n,s){super(e,t,n,s)}}jh.prototype.ValueTypeName="color";class ys extends xn{constructor(e,t,n,s){super(e,t,n,s)}}ys.prototype.ValueTypeName="number";class qp extends hr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t);let l=e*a;for(let u=l+a;l!==u;l+=4)wn.slerpFlat(r,0,o,l-a,o,l,c);return r}}class vs extends xn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new qp(this.times,this.values,this.getValueSize(),e)}}vs.prototype.ValueTypeName="quaternion";vs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ts extends xn{constructor(e,t,n){super(e,t,n)}}Ts.prototype.ValueTypeName="string";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=ir;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;class Ms extends xn{constructor(e,t,n,s){super(e,t,n,s)}}Ms.prototype.ValueTypeName="vector";class Yp{constructor(e="",t=-1,n=[],s=bf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=gn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Kp(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(xn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=Vp(c);c=_u(c,1,u),l=_u(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new ys(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,_){if(f.length!==0){const m=[],p=[];Yh(f,m,p,g),m.length!==0&&_.push(new h(d,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let A=0;A!==d[g].morphTargets.length;++A){const T=d[g];m.push(T.time),p.push(T.morphTarget===_?1:0)}s.push(new ys(".morphTargetInfluence["+_+"]",m,p))}c=f.length*o}else{const f=".bones["+t[h].name+"]";n(Ms,f+".position",d,"pos",s),n(vs,f+".quaternion",d,"rot",s),n(Ms,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function jp(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ys;case"vector":case"vector2":case"vector3":case"vector4":return Ms;case"color":return jh;case"quaternion":return vs;case"bool":case"boolean":return Es;case"string":return Ts}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Kp(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=jp(i.type);if(i.times===void 0){const t=[],n=[];Yh(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const kn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Zp{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Yc=new Zp;class bs{constructor(e){this.manager=e!==void 0?e:Yc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}bs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Bn={};class $p extends Error{constructor(e,t){super(e),this.response=t}}class Kh extends bs{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=kn.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Bn[e]!==void 0){Bn[e].push({onLoad:t,onProgress:n,onError:s});return}Bn[e]=[],Bn[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Bn[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){A();function A(){h.read().then(({done:T,value:v})=>{if(T)p.close();else{_+=v.byteLength;const R=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let C=0,P=u.length;C<P;C++){const U=u[C];U.onProgress&&U.onProgress(R)}p.enqueue(v),A()}},T=>{p.error(T)})}}});return new Response(m)}else throw new $p(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{kn.add(`file:${e}`,l);const u=Bn[e];delete Bn[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=Bn[e];if(u===void 0)throw this.manager.itemError(e),l;delete Bn[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const es=new WeakMap;class Jp extends bs{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=kn.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=es.get(o);h===void 0&&(h=[],es.set(o,h)),h.push({onLoad:t,onError:s})}return o}const a=rr("img");function c(){u(),t&&t(this);const h=es.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}es.delete(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),kn.remove(`image:${e}`);const d=es.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(h)}es.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),kn.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class Zh extends bs{constructor(e){super(e)}load(e,t,n,s){const r=new Mt,o=new Jp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Mo extends rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Qp extends Mo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ra=new Ie,xu=new E,yu=new E;class jc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.mapType=An,this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xc,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new Ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;xu.setFromMatrixPosition(e.matrixWorld),t.position.copy(xu),yu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yu),t.updateMatrixWorld(),ra.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ra,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ra)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class e1 extends jc{constructor(){super(new Bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=_s*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class t1 extends Mo{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.target=new rt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new e1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const vu=new Ie,Hs=new E,oa=new E;class n1 extends jc{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xe(4,2),this._viewportCount=6,this._viewports=[new Ge(2,1,1,1),new Ge(0,1,1,1),new Ge(3,1,1,1),new Ge(1,1,1,1),new Ge(3,0,1,1),new Ge(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Hs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Hs),oa.copy(n.position),oa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(oa),n.updateMatrixWorld(),s.makeTranslation(-Hs.x,-Hs.y,-Hs.z),vu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vu,n.coordinateSystem,n.reversedDepth)}}class i1 extends Mo{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new n1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Kc extends Bh{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class s1 extends jc{constructor(){super(new Kc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zc extends Mo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.target=new rt,this.shadow=new s1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ys{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class r1 extends _t{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const aa=new WeakMap;class o1 extends bs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=kn.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{if(aa.has(o)===!0)s&&s(aa.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return kn.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),aa.set(c,l),kn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});kn.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class a1 extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const $c="\\[\\]\\.:\\/",c1=new RegExp("["+$c+"]","g"),Jc="[^"+$c+"]",l1="[^"+$c.replace("\\.","")+"]",u1=/((?:WC+[\/:])*)/.source.replace("WC",Jc),h1=/(WCOD+)?/.source.replace("WCOD",l1),d1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jc),f1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jc),p1=new RegExp("^"+u1+h1+d1+f1+"$"),m1=["material","materials","bones","map"];class g1{constructor(e,t,n){const s=n||Ze.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ze{constructor(e,t,n){this.path=t,this.parsedPath=n||Ze.parseTrackName(t),this.node=Ze.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ze.Composite(e,t,n):new Ze(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(c1,"")}static parseTrackName(e){const t=p1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);m1.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=Ze.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[s];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ze.Composite=g1;Ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ze.prototype.GetterByBindingType=[Ze.prototype._getValue_direct,Ze.prototype._getValue_array,Ze.prototype._getValue_arrayElement,Ze.prototype._getValue_toArray];Ze.prototype.SetterByBindingTypeAndVersioning=[[Ze.prototype._setValue_direct,Ze.prototype._setValue_direct_setNeedsUpdate,Ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_array,Ze.prototype._setValue_array_setNeedsUpdate,Ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_arrayElement,Ze.prototype._setValue_arrayElement_setNeedsUpdate,Ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_fromArray,Ze.prototype._setValue_fromArray_setNeedsUpdate,Ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class yc extends Gc{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const Mu=new Ie;class $h{constructor(e,t,n=0,s=1/0){this.ray=new Ss(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Hc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Mu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Mu),this}intersectObject(e,t=!0,n=[]){return vc(e,this,n,t),n.sort(Su),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)vc(e[s],this,n,t);return n.sort(Su),n}}function Su(i,e){return i.distance-e.distance}function vc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)vc(r[o],e,t,!0)}}class Eu{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Le(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Le(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Tu=new E,Gr=new E,ts=new E,ns=new E,ca=new E,_1=new E,x1=new E;class y1{constructor(e=new E,t=new E){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Tu.subVectors(e,this.start),Gr.subVectors(this.end,this.start);const n=Gr.dot(Gr);let r=Gr.dot(Tu)/n;return t&&(r=Le(r,0,1)),r}closestPointToPoint(e,t,n){const s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=_1,n=x1){const s=10000000000000001e-32;let r,o;const a=this.start,c=e.start,l=this.end,u=e.end;ts.subVectors(l,a),ns.subVectors(u,c),ca.subVectors(a,c);const h=ts.dot(ts),d=ns.dot(ns),f=ns.dot(ca);if(h<=s&&d<=s)return t.copy(a),n.copy(c),t.sub(n),t.dot(t);if(h<=s)r=0,o=f/d,o=Le(o,0,1);else{const g=ts.dot(ca);if(d<=s)o=0,r=Le(-g/h,0,1);else{const _=ts.dot(ns),m=h*d-_*_;m!==0?r=Le((_*f-g*d)/m,0,1):r=0,o=(_*r+f)/d,o<0?(o=0,r=Le(-g/h,0,1)):o>1&&(o=1,r=Le((_-g)/h,0,1))}}return t.copy(a).add(ts.multiplyScalar(r)),n.copy(c).add(ns.multiplyScalar(o)),t.sub(n),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class v1 extends Di{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function bu(i,e,t,n){const s=M1(n);switch(t){case Ah:return i*e;case Nc:return i*e/s.components*s.byteLength;case Uc:return i*e/s.components*s.byteLength;case Rh:return i*e*2/s.components*s.byteLength;case Oc:return i*e*2/s.components*s.byteLength;case wh:return i*e*3/s.components*s.byteLength;case rn:return i*e*4/s.components*s.byteLength;case Fc:return i*e*4/s.components*s.byteLength;case eo:case to:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case no:case io:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ha:case Va:return Math.max(i,16)*Math.max(e,8)/4;case za:case ka:return Math.max(i,8)*Math.max(e,8)/2;case Ga:case Wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ya:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ja:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ka:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Za:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case $a:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Qa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ec:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case tc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case nc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ic:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case sc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case rc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case oc:case ac:case cc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case lc:case uc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case hc:case dc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function M1(i){switch(i){case An:case Sh:return{byteLength:1,components:1};case Qs:case Eh:case ar:return{byteLength:2,components:1};case Dc:case Ic:return{byteLength:2,components:4};case Ri:case Lc:case fn:return{byteLength:4,components:1};case Th:case bh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pc);function Jh(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function S1(i){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var E1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,T1=`#ifdef USE_ALPHAHASH
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
#endif`,b1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,A1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,R1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,C1=`#ifdef USE_AOMAP
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
#endif`,P1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,L1=`#ifdef USE_BATCHING
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
#endif`,D1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,I1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,N1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,U1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,O1=`#ifdef USE_IRIDESCENCE
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
#endif`,F1=`#ifdef USE_BUMPMAP
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
#endif`,B1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,z1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,H1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,k1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,V1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,G1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,W1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,X1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,q1=`#define PI 3.141592653589793
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
} // validated`,Y1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,j1=`vec3 transformedNormal = objectNormal;
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
#endif`,K1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Z1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,J1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Q1="gl_FragColor = linearToOutputTexel( gl_FragColor );",e2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,t2=`#ifdef USE_ENVMAP
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
#endif`,n2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,i2=`#ifdef USE_ENVMAP
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
#endif`,s2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,r2=`#ifdef USE_ENVMAP
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
#endif`,o2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,a2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,c2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,l2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,u2=`#ifdef USE_GRADIENTMAP
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
}`,h2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,d2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,f2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,p2=`uniform bool receiveShadow;
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
#endif`,m2=`#ifdef USE_ENVMAP
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
#endif`,g2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,x2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,y2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,v2=`PhysicalMaterial material;
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
#endif`,M2=`struct PhysicalMaterial {
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
}`,S2=`
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
#endif`,E2=`#if defined( RE_IndirectDiffuse )
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
#endif`,T2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,b2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,A2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,C2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,P2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,L2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,D2=`#if defined( USE_POINTS_UV )
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
#endif`,I2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,N2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,U2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,O2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,F2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,B2=`#ifdef USE_MORPHTARGETS
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
#endif`,z2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,k2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,V2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,X2=`#ifdef USE_NORMALMAP
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
#endif`,q2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Y2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,j2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,K2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Z2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,J2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Q2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,em=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,im=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,om=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,am=`float getShadowMask() {
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
}`,cm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lm=`#ifdef USE_SKINNING
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
#endif`,um=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hm=`#ifdef USE_SKINNING
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
#endif`,dm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gm=`#ifdef USE_TRANSMISSION
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
#endif`,_m=`#ifdef USE_TRANSMISSION
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
#endif`,xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Em=`uniform sampler2D t2D;
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
}`,Tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rm=`#include <common>
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
}`,Cm=`#if DEPTH_PACKING == 3200
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
}`,Pm=`#define DISTANCE
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
}`,Lm=`#define DISTANCE
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
}`,Dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Im=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nm=`uniform float scale;
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
}`,Um=`uniform vec3 diffuse;
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
}`,Om=`#include <common>
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
}`,Fm=`uniform vec3 diffuse;
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
}`,Bm=`#define LAMBERT
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
}`,zm=`#define LAMBERT
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
}`,Hm=`#define MATCAP
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
}`,km=`#define MATCAP
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
}`,Vm=`#define NORMAL
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
}`,Gm=`#define NORMAL
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
}`,Wm=`#define PHONG
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
}`,Xm=`#define PHONG
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
}`,qm=`#define STANDARD
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
}`,Ym=`#define STANDARD
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
}`,jm=`#define TOON
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
}`,Km=`#define TOON
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
}`,Zm=`uniform float size;
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
}`,$m=`uniform vec3 diffuse;
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
}`,Jm=`#include <common>
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
}`,Qm=`uniform vec3 color;
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
}`,e0=`uniform float rotation;
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
}`,t0=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:E1,alphahash_pars_fragment:T1,alphamap_fragment:b1,alphamap_pars_fragment:A1,alphatest_fragment:w1,alphatest_pars_fragment:R1,aomap_fragment:C1,aomap_pars_fragment:P1,batching_pars_vertex:L1,batching_vertex:D1,begin_vertex:I1,beginnormal_vertex:N1,bsdfs:U1,iridescence_fragment:O1,bumpmap_pars_fragment:F1,clipping_planes_fragment:B1,clipping_planes_pars_fragment:z1,clipping_planes_pars_vertex:H1,clipping_planes_vertex:k1,color_fragment:V1,color_pars_fragment:G1,color_pars_vertex:W1,color_vertex:X1,common:q1,cube_uv_reflection_fragment:Y1,defaultnormal_vertex:j1,displacementmap_pars_vertex:K1,displacementmap_vertex:Z1,emissivemap_fragment:$1,emissivemap_pars_fragment:J1,colorspace_fragment:Q1,colorspace_pars_fragment:e2,envmap_fragment:t2,envmap_common_pars_fragment:n2,envmap_pars_fragment:i2,envmap_pars_vertex:s2,envmap_physical_pars_fragment:m2,envmap_vertex:r2,fog_vertex:o2,fog_pars_vertex:a2,fog_fragment:c2,fog_pars_fragment:l2,gradientmap_pars_fragment:u2,lightmap_pars_fragment:h2,lights_lambert_fragment:d2,lights_lambert_pars_fragment:f2,lights_pars_begin:p2,lights_toon_fragment:g2,lights_toon_pars_fragment:_2,lights_phong_fragment:x2,lights_phong_pars_fragment:y2,lights_physical_fragment:v2,lights_physical_pars_fragment:M2,lights_fragment_begin:S2,lights_fragment_maps:E2,lights_fragment_end:T2,logdepthbuf_fragment:b2,logdepthbuf_pars_fragment:A2,logdepthbuf_pars_vertex:w2,logdepthbuf_vertex:R2,map_fragment:C2,map_pars_fragment:P2,map_particle_fragment:L2,map_particle_pars_fragment:D2,metalnessmap_fragment:I2,metalnessmap_pars_fragment:N2,morphinstance_vertex:U2,morphcolor_vertex:O2,morphnormal_vertex:F2,morphtarget_pars_vertex:B2,morphtarget_vertex:z2,normal_fragment_begin:H2,normal_fragment_maps:k2,normal_pars_fragment:V2,normal_pars_vertex:G2,normal_vertex:W2,normalmap_pars_fragment:X2,clearcoat_normal_fragment_begin:q2,clearcoat_normal_fragment_maps:Y2,clearcoat_pars_fragment:j2,iridescence_pars_fragment:K2,opaque_fragment:Z2,packing:$2,premultiplied_alpha_fragment:J2,project_vertex:Q2,dithering_fragment:em,dithering_pars_fragment:tm,roughnessmap_fragment:nm,roughnessmap_pars_fragment:im,shadowmap_pars_fragment:sm,shadowmap_pars_vertex:rm,shadowmap_vertex:om,shadowmask_pars_fragment:am,skinbase_vertex:cm,skinning_pars_vertex:lm,skinning_vertex:um,skinnormal_vertex:hm,specularmap_fragment:dm,specularmap_pars_fragment:fm,tonemapping_fragment:pm,tonemapping_pars_fragment:mm,transmission_fragment:gm,transmission_pars_fragment:_m,uv_pars_fragment:xm,uv_pars_vertex:ym,uv_vertex:vm,worldpos_vertex:Mm,background_vert:Sm,background_frag:Em,backgroundCube_vert:Tm,backgroundCube_frag:bm,cube_vert:Am,cube_frag:wm,depth_vert:Rm,depth_frag:Cm,distanceRGBA_vert:Pm,distanceRGBA_frag:Lm,equirect_vert:Dm,equirect_frag:Im,linedashed_vert:Nm,linedashed_frag:Um,meshbasic_vert:Om,meshbasic_frag:Fm,meshlambert_vert:Bm,meshlambert_frag:zm,meshmatcap_vert:Hm,meshmatcap_frag:km,meshnormal_vert:Vm,meshnormal_frag:Gm,meshphong_vert:Wm,meshphong_frag:Xm,meshphysical_vert:qm,meshphysical_frag:Ym,meshtoon_vert:jm,meshtoon_frag:Km,points_vert:Zm,points_frag:$m,shadow_vert:Jm,shadow_frag:Qm,sprite_vert:e0,sprite_frag:t0},se={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},qt={basic:{uniforms:Ft([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Ft([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Me(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Ft([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Ft([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Ft([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Me(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Ft([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Ft([se.points,se.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Ft([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Ft([se.common,se.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Ft([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Ft([se.sprite,se.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Ft([se.common,se.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Ft([se.lights,se.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};qt.physical={uniforms:Ft([qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Wr={r:0,b:0,g:0},mi=new Rn,n0=new Ie;function i0(i,e,t,n,s,r,o){const a=new Me(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function g(T){let v=T.isScene===!0?T.background:null;return v&&v.isTexture&&(v=(T.backgroundBlurriness>0?t:e).get(v)),v}function _(T){let v=!1;const R=g(T);R===null?p(a,c):R&&R.isColor&&(p(R,1),v=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,v){const R=g(v);R&&(R.isCubeTexture||R.mapping===_o)?(u===void 0&&(u=new It(new cr(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:xs(qt.backgroundCube.uniforms),vertexShader:qt.backgroundCube.vertexShader,fragmentShader:qt.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,P,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),mi.copy(v.backgroundRotation),mi.x*=-1,mi.y*=-1,mi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(n0.makeRotationFromEuler(mi)),u.material.toneMapped=Xe.getTransfer(R.colorSpace)!==Je,(h!==R||d!==R.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=R,d=R.version,f=i.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new It(new vo(2,2),new Cn({name:"BackgroundMaterial",uniforms:xs(qt.background.uniforms),vertexShader:qt.background.vertexShader,fragmentShader:qt.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Xe.getTransfer(R.colorSpace)!==Je,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(h!==R||d!==R.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=R,d=R.version,f=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function p(T,v){T.getRGB(Wr,Fh(i)),n.buffers.color.setClear(Wr.r,Wr.g,Wr.b,v,o)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,v=1){a.set(T),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,p(a,c)},render:_,addToRenderList:m,dispose:A}}function s0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(M,D,z,V,j){let W=!1;const q=h(V,z,D);r!==q&&(r=q,l(r.object)),W=f(M,V,z,j),W&&g(M,V,z,j),j!==null&&e.update(j,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,v(M,D,z,V),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,D,z){const V=z.wireframe===!0;let j=n[M.id];j===void 0&&(j={},n[M.id]=j);let W=j[D.id];W===void 0&&(W={},j[D.id]=W);let q=W[V];return q===void 0&&(q=d(c()),W[V]=q),q}function d(M){const D=[],z=[],V=[];for(let j=0;j<t;j++)D[j]=0,z[j]=0,V[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:V,object:M,attributes:{},index:null}}function f(M,D,z,V){const j=r.attributes,W=D.attributes;let q=0;const Z=z.getAttributes();for(const H in Z)if(Z[H].location>=0){const le=j[H];let Te=W[H];if(Te===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(Te=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(Te=M.instanceColor)),le===void 0||le.attribute!==Te||Te&&le.data!==Te.data)return!0;q++}return r.attributesNum!==q||r.index!==V}function g(M,D,z,V){const j={},W=D.attributes;let q=0;const Z=z.getAttributes();for(const H in Z)if(Z[H].location>=0){let le=W[H];le===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(le=M.instanceColor));const Te={};Te.attribute=le,le&&le.data&&(Te.data=le.data),j[H]=Te,q++}r.attributes=j,r.attributesNum=q,r.index=V}function _(){const M=r.newAttributes;for(let D=0,z=M.length;D<z;D++)M[D]=0}function m(M){p(M,0)}function p(M,D){const z=r.newAttributes,V=r.enabledAttributes,j=r.attributeDivisors;z[M]=1,V[M]===0&&(i.enableVertexAttribArray(M),V[M]=1),j[M]!==D&&(i.vertexAttribDivisor(M,D),j[M]=D)}function A(){const M=r.newAttributes,D=r.enabledAttributes;for(let z=0,V=D.length;z<V;z++)D[z]!==M[z]&&(i.disableVertexAttribArray(z),D[z]=0)}function T(M,D,z,V,j,W,q){q===!0?i.vertexAttribIPointer(M,D,z,j,W):i.vertexAttribPointer(M,D,z,V,j,W)}function v(M,D,z,V){_();const j=V.attributes,W=z.getAttributes(),q=D.defaultAttributeValues;for(const Z in W){const H=W[Z];if(H.location>=0){let re=j[Z];if(re===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(re=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(re=M.instanceColor)),re!==void 0){const le=re.normalized,Te=re.itemSize,He=e.get(re);if(He===void 0)continue;const nt=He.buffer,ot=He.type,Ye=He.bytesPerElement,X=ot===i.INT||ot===i.UNSIGNED_INT||re.gpuType===Lc;if(re.isInterleavedBufferAttribute){const $=re.data,de=$.stride,De=re.offset;if($.isInstancedInterleavedBuffer){for(let Ee=0;Ee<H.locationSize;Ee++)p(H.location+Ee,$.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Ee=0;Ee<H.locationSize;Ee++)m(H.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let Ee=0;Ee<H.locationSize;Ee++)T(H.location+Ee,Te/H.locationSize,ot,le,de*Ye,(De+Te/H.locationSize*Ee)*Ye,X)}else{if(re.isInstancedBufferAttribute){for(let $=0;$<H.locationSize;$++)p(H.location+$,re.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let $=0;$<H.locationSize;$++)m(H.location+$);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let $=0;$<H.locationSize;$++)T(H.location+$,Te/H.locationSize,ot,le,Te*Ye,Te/H.locationSize*$*Ye,X)}}else if(q!==void 0){const le=q[Z];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(H.location,le);break;case 3:i.vertexAttrib3fv(H.location,le);break;case 4:i.vertexAttrib4fv(H.location,le);break;default:i.vertexAttrib1fv(H.location,le)}}}}A()}function R(){U();for(const M in n){const D=n[M];for(const z in D){const V=D[z];for(const j in V)u(V[j].object),delete V[j];delete D[z]}delete n[M]}}function C(M){if(n[M.id]===void 0)return;const D=n[M.id];for(const z in D){const V=D[z];for(const j in V)u(V[j].object),delete V[j];delete D[z]}delete n[M.id]}function P(M){for(const D in n){const z=n[D];if(z[M.id]===void 0)continue;const V=z[M.id];for(const j in V)u(V[j].object),delete V[j];delete z[M.id]}}function U(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:A}}function r0(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function o0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==rn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const U=P===ar&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==An&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==fn&&!U)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:v,vertexTextures:R,maxSamples:C}}function a0(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new ti,a=new Fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const A=r?0:n,T=A*4;let v=p.clippingState||null;c.value=v,v=u(g,d,T,f);for(let R=0;R!==T;++R)v[R]=t[R];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,A=d.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,v=f;T!==_;++T,v+=4)o.copy(h[T]).applyMatrix4(A,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function c0(i){let e=new WeakMap;function t(o,a){return a===Fa?o.mapping=ps:a===Ba&&(o.mapping=ms),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Fa||a===Ba)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Sp(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const as=4,Au=[.125,.215,.35,.446,.526,.582],vi=20,la=new Kc,wu=new Me;let ua=null,ha=0,da=0,fa=!1;const xi=(1+Math.sqrt(5))/2,is=1/xi,Ru=[new E(-xi,is,0),new E(xi,is,0),new E(-is,0,xi),new E(is,0,xi),new E(0,xi,-is),new E(0,xi,is),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)],l0=new E;class Cu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=l0}=r;ua=this._renderer.getRenderTarget(),ha=this._renderer.getActiveCubeFace(),da=this._renderer.getActiveMipmapLevel(),fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ua,ha,da),this._renderer.xr.enabled=fa,e.scissorTest=!1,Xr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ps||e.mapping===ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ua=this._renderer.getRenderTarget(),ha=this._renderer.getActiveCubeFace(),da=this._renderer.getActiveMipmapLevel(),fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:ar,format:rn,colorSpace:Vt,depthBuffer:!1},s=Pu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pu(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=u0(r)),this._blurMaterial=h0(r,e,t)}return s}_compileMaterial(e){const t=new It(this._lodPlanes[0],e);this._renderer.compile(t,la)}_sceneToCubeUV(e,t,n,s,r){const c=new Bt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(wu),h.toneMapping=ci,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));const _=new si({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),m=new It(new cr,_);let p=!1;const A=e.background;A?A.isColor&&(_.color.copy(A),e.background=null,p=!0):(_.color.copy(wu),p=!0);for(let T=0;T<6;T++){const v=T%3;v===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[T],r.y,r.z)):v===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[T]));const R=this._cubeSize;Xr(s,v*R,T>2?R:0,R,R),h.setRenderTarget(s),p&&h.render(m,c),h.render(e,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=A}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ps||e.mapping===ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Du()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new It(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Xr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,la)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ru[(s-r-1)%Ru.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new It(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*vi-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):vi;m>vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vi}`);const p=[];let A=0;for(let P=0;P<vi;++P){const U=P/_,S=Math.exp(-U*U/2);p.push(S),P===0?A+=S:P<m&&(A+=2*S)}for(let P=0;P<p.length;P++)p[P]=p[P]/A;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:T}=this;d.dTheta.value=g,d.mipInt.value=T-n;const v=this._sizeLods[s],R=3*v*(s>T-as?s-T+as:0),C=4*(this._cubeSize-v);Xr(t,R,C,3*v,2*v),c.setRenderTarget(t),c.render(h,la)}}function u0(i){const e=[],t=[],n=[];let s=i;const r=i-as+1+Au.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-as?c=Au[o-i+as-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,A=new Float32Array(_*g*f),T=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let C=0;C<f;C++){const P=C%3*2/3-1,U=C>2?0:-1,S=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];A.set(S,_*g*C),T.set(d,m*g*C);const M=[C,C,C,C,C,C];v.set(M,p*g*C)}const R=new _t;R.setAttribute("position",new kt(A,_)),R.setAttribute("uv",new kt(T,m)),R.setAttribute("faceIndex",new kt(v,p)),e.push(R),s>as&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Pu(i,e,t){const n=new Pi(i,e,t);return n.texture.mapping=_o,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function h0(i,e,t){const n=new Float32Array(vi),s=new E(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Qc(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Lu(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qc(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Du(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Qc(){return`

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
	`}function d0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Fa||c===Ba,u=c===ps||c===ms;if(l||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Cu(i)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Cu(i)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function f0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&or("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function p0(i,e,t,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function l(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const A=f.array;_=f.version;for(let T=0,v=A.length;T<v;T+=3){const R=A[T+0],C=A[T+1],P=A[T+2];d.push(R,C,C,P,P,R)}}else if(g!==void 0){const A=g.array;_=g.version;for(let T=0,v=A.length/3-1;T<v;T+=3){const R=T+0,C=T+1,P=T+2;d.push(R,C,C,P,P,R)}}else return;const m=new(Dh(d)?Oh:Uh)(d,1);m.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function m0(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let A=0;A<g;A++)p+=f[A]*_[A];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function g0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function _0(i,e,t){const n=new WeakMap,s=new Ge;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let M=function(){U.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let R=a.attributes.position.count*v,C=1;R>e.maxTextureSize&&(C=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const P=new Float32Array(R*C*4*h),U=new Ih(P,R,C,h);U.type=fn,U.needsUpdate=!0;const S=v*4;for(let D=0;D<h;D++){const z=p[D],V=A[D],j=T[D],W=R*C*4*D;for(let q=0;q<z.count;q++){const Z=q*S;g===!0&&(s.fromBufferAttribute(z,q),P[W+Z+0]=s.x,P[W+Z+1]=s.y,P[W+Z+2]=s.z,P[W+Z+3]=0),_===!0&&(s.fromBufferAttribute(V,q),P[W+Z+4]=s.x,P[W+Z+5]=s.y,P[W+Z+6]=s.z,P[W+Z+7]=0),m===!0&&(s.fromBufferAttribute(j,q),P[W+Z+8]=s.x,P[W+Z+9]=s.y,P[W+Z+10]=s.z,P[W+Z+11]=j.itemSize===4?s.w:1)}}d={count:h,texture:U,size:new xe(R,C)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function x0(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const Qh=new Mt,Iu=new Gh(1,1),ed=new Ih,td=new op,nd=new zh,Nu=[],Uu=[],Ou=new Float32Array(16),Fu=new Float32Array(9),Bu=new Float32Array(4);function As(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Nu[s];if(r===void 0&&(r=new Float32Array(s),Nu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function St(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Et(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function So(i,e){let t=Uu[e];t===void 0&&(t=new Int32Array(e),Uu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function y0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function v0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2fv(this.addr,e),Et(t,e)}}function M0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;i.uniform3fv(this.addr,e),Et(t,e)}}function S0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4fv(this.addr,e),Et(t,e)}}function E0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(St(t,n))return;Bu.set(n),i.uniformMatrix2fv(this.addr,!1,Bu),Et(t,n)}}function T0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(St(t,n))return;Fu.set(n),i.uniformMatrix3fv(this.addr,!1,Fu),Et(t,n)}}function b0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(St(t,n))return;Ou.set(n),i.uniformMatrix4fv(this.addr,!1,Ou),Et(t,n)}}function A0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function w0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2iv(this.addr,e),Et(t,e)}}function R0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;i.uniform3iv(this.addr,e),Et(t,e)}}function C0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4iv(this.addr,e),Et(t,e)}}function P0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function L0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2uiv(this.addr,e),Et(t,e)}}function D0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;i.uniform3uiv(this.addr,e),Et(t,e)}}function I0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4uiv(this.addr,e),Et(t,e)}}function N0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Iu.compareFunction=Lh,r=Iu):r=Qh,t.setTexture2D(e||r,s)}function U0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||td,s)}function O0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||nd,s)}function F0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ed,s)}function B0(i){switch(i){case 5126:return y0;case 35664:return v0;case 35665:return M0;case 35666:return S0;case 35674:return E0;case 35675:return T0;case 35676:return b0;case 5124:case 35670:return A0;case 35667:case 35671:return w0;case 35668:case 35672:return R0;case 35669:case 35673:return C0;case 5125:return P0;case 36294:return L0;case 36295:return D0;case 36296:return I0;case 35678:case 36198:case 36298:case 36306:case 35682:return N0;case 35679:case 36299:case 36307:return U0;case 35680:case 36300:case 36308:case 36293:return O0;case 36289:case 36303:case 36311:case 36292:return F0}}function z0(i,e){i.uniform1fv(this.addr,e)}function H0(i,e){const t=As(e,this.size,2);i.uniform2fv(this.addr,t)}function k0(i,e){const t=As(e,this.size,3);i.uniform3fv(this.addr,t)}function V0(i,e){const t=As(e,this.size,4);i.uniform4fv(this.addr,t)}function G0(i,e){const t=As(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function W0(i,e){const t=As(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function X0(i,e){const t=As(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function q0(i,e){i.uniform1iv(this.addr,e)}function Y0(i,e){i.uniform2iv(this.addr,e)}function j0(i,e){i.uniform3iv(this.addr,e)}function K0(i,e){i.uniform4iv(this.addr,e)}function Z0(i,e){i.uniform1uiv(this.addr,e)}function $0(i,e){i.uniform2uiv(this.addr,e)}function J0(i,e){i.uniform3uiv(this.addr,e)}function Q0(i,e){i.uniform4uiv(this.addr,e)}function e3(i,e,t){const n=this.cache,s=e.length,r=So(t,s);St(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Qh,r[o])}function t3(i,e,t){const n=this.cache,s=e.length,r=So(t,s);St(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||td,r[o])}function n3(i,e,t){const n=this.cache,s=e.length,r=So(t,s);St(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||nd,r[o])}function i3(i,e,t){const n=this.cache,s=e.length,r=So(t,s);St(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||ed,r[o])}function s3(i){switch(i){case 5126:return z0;case 35664:return H0;case 35665:return k0;case 35666:return V0;case 35674:return G0;case 35675:return W0;case 35676:return X0;case 5124:case 35670:return q0;case 35667:case 35671:return Y0;case 35668:case 35672:return j0;case 35669:case 35673:return K0;case 5125:return Z0;case 36294:return $0;case 36295:return J0;case 36296:return Q0;case 35678:case 36198:case 36298:case 36306:case 35682:return e3;case 35679:case 36299:case 36307:return t3;case 35680:case 36300:case 36308:case 36293:return n3;case 36289:case 36303:case 36311:case 36292:return i3}}class r3{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=B0(t.type)}}class o3{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=s3(t.type)}}class a3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const pa=/(\w+)(\])?(\[|\.)?/g;function zu(i,e){i.seq.push(e),i.map[e.id]=e}function c3(i,e,t){const n=i.name,s=n.length;for(pa.lastIndex=0;;){const r=pa.exec(n),o=pa.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){zu(t,l===void 0?new r3(a,i,e):new o3(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new a3(a),zu(t,h)),t=h}}}class so{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);c3(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Hu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const l3=37297;let u3=0;function h3(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const ku=new Fe;function d3(i){Xe._getMatrix(ku,Xe.workingColorSpace,i);const e=`mat3( ${ku.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(i)){case ao:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Vu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+h3(i.getShaderSource(e),a)}else return r}function f3(i,e){const t=d3(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function p3(i,e){let t;switch(e){case _f:t="Linear";break;case xf:t="Reinhard";break;case yf:t="Cineon";break;case vf:t="ACESFilmic";break;case Sf:t="AgX";break;case Ef:t="Neutral";break;case Mf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const qr=new E;function m3(){Xe.getLuminanceCoefficients(qr);const i=qr.x.toFixed(4),e=qr.y.toFixed(4),t=qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function g3(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ws).join(`
`)}function _3(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function x3(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ws(i){return i!==""}function Gu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const y3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mc(i){return i.replace(y3,M3)}const v3=new Map;function M3(i,e){let t=ze[e];if(t===void 0){const n=v3.get(e);if(n!==void 0)t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Mc(t)}const S3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xu(i){return i.replace(S3,E3)}function E3(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function T3(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===xh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Kd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===zn&&(e="SHADOWMAP_TYPE_VSM"),e}function b3(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ps:case ms:e="ENVMAP_TYPE_CUBE";break;case _o:e="ENVMAP_TYPE_CUBE_UV";break}return e}function A3(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ms&&(e="ENVMAP_MODE_REFRACTION"),e}function w3(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case yh:e="ENVMAP_BLENDING_MULTIPLY";break;case mf:e="ENVMAP_BLENDING_MIX";break;case gf:e="ENVMAP_BLENDING_ADD";break}return e}function R3(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function C3(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=T3(t),l=b3(t),u=A3(t),h=w3(t),d=R3(t),f=g3(t),g=_3(r),_=s.createProgram();let m,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ws).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ws).join(`
`),p.length>0&&(p+=`
`)):(m=[qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ws).join(`
`),p=[qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ci?"#define TONE_MAPPING":"",t.toneMapping!==ci?ze.tonemapping_pars_fragment:"",t.toneMapping!==ci?p3("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,f3("linearToOutputTexel",t.outputColorSpace),m3(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ws).join(`
`)),o=Mc(o),o=Gu(o,t),o=Wu(o,t),a=Mc(a),a=Gu(a,t),a=Wu(a,t),o=Xu(o),a=Xu(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=A+m+o,v=A+p+a,R=Hu(s,s.VERTEX_SHADER,T),C=Hu(s,s.FRAGMENT_SHADER,v);s.attachShader(_,R),s.attachShader(_,C),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(D){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(_)||"",V=s.getShaderInfoLog(R)||"",j=s.getShaderInfoLog(C)||"",W=z.trim(),q=V.trim(),Z=j.trim();let H=!0,re=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,R,C);else{const le=Vu(s,R,"vertex"),Te=Vu(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+W+`
`+le+`
`+Te)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(q===""||Z==="")&&(re=!1);re&&(D.diagnostics={runnable:H,programLog:W,vertexShader:{log:q,prefix:m},fragmentShader:{log:Z,prefix:p}})}s.deleteShader(R),s.deleteShader(C),U=new so(s,_),S=x3(s,_)}let U;this.getUniforms=function(){return U===void 0&&P(this),U};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,l3)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=u3++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=C,this}let P3=0;class L3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new D3(e),t.set(e,n)),n}}class D3{constructor(e){this.id=P3++,this.code=e,this.usedTimes=0}}function I3(i,e,t,n,s,r,o){const a=new Hc,c=new L3,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,M,D,z,V){const j=z.fog,W=V.geometry,q=S.isMeshStandardMaterial?z.environment:null,Z=(S.isMeshStandardMaterial?t:e).get(S.envMap||q),H=Z&&Z.mapping===_o?Z.image.height:null,re=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const le=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Te=le!==void 0?le.length:0;let He=0;W.morphAttributes.position!==void 0&&(He=1),W.morphAttributes.normal!==void 0&&(He=2),W.morphAttributes.color!==void 0&&(He=3);let nt,ot,Ye,X;if(re){const je=qt[re];nt=je.vertexShader,ot=je.fragmentShader}else nt=S.vertexShader,ot=S.fragmentShader,c.update(S),Ye=c.getVertexShaderID(S),X=c.getFragmentShaderID(S);const $=i.getRenderTarget(),de=i.state.buffers.depth.getReversed(),De=V.isInstancedMesh===!0,Ee=V.isBatchedMesh===!0,We=!!S.map,Pt=!!S.matcap,w=!!Z,at=!!S.aoMap,Ue=!!S.lightMap,Ce=!!S.bumpMap,me=!!S.normalMap,ct=!!S.displacementMap,ge=!!S.emissiveMap,Be=!!S.metalnessMap,Tt=!!S.roughnessMap,pt=S.anisotropy>0,b=S.clearcoat>0,x=S.dispersion>0,O=S.iridescence>0,G=S.sheen>0,K=S.transmission>0,k=pt&&!!S.anisotropyMap,Se=b&&!!S.clearcoatMap,ne=b&&!!S.clearcoatNormalMap,_e=b&&!!S.clearcoatRoughnessMap,ye=O&&!!S.iridescenceMap,ee=O&&!!S.iridescenceThicknessMap,ce=G&&!!S.sheenColorMap,Re=G&&!!S.sheenRoughnessMap,ve=!!S.specularMap,oe=!!S.specularColorMap,Oe=!!S.specularIntensityMap,L=K&&!!S.transmissionMap,te=K&&!!S.thicknessMap,ie=!!S.gradientMap,he=!!S.alphaMap,J=S.alphaTest>0,Y=!!S.alphaHash,pe=!!S.extensions;let Ne=ci;S.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ne=i.toneMapping);const it={shaderID:re,shaderType:S.type,shaderName:S.name,vertexShader:nt,fragmentShader:ot,defines:S.defines,customVertexShaderID:Ye,customFragmentShaderID:X,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Ee,batchingColor:Ee&&V._colorsTexture!==null,instancing:De,instancingColor:De&&V.instanceColor!==null,instancingMorph:De&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Vt,alphaToCoverage:!!S.alphaToCoverage,map:We,matcap:Pt,envMap:w,envMapMode:w&&Z.mapping,envMapCubeUVHeight:H,aoMap:at,lightMap:Ue,bumpMap:Ce,normalMap:me,displacementMap:d&&ct,emissiveMap:ge,normalMapObjectSpace:me&&S.normalMapType===Cf,normalMapTangentSpace:me&&S.normalMapType===Ph,metalnessMap:Be,roughnessMap:Tt,anisotropy:pt,anisotropyMap:k,clearcoat:b,clearcoatMap:Se,clearcoatNormalMap:ne,clearcoatRoughnessMap:_e,dispersion:x,iridescence:O,iridescenceMap:ye,iridescenceThicknessMap:ee,sheen:G,sheenColorMap:ce,sheenRoughnessMap:Re,specularMap:ve,specularColorMap:oe,specularIntensityMap:Oe,transmission:K,transmissionMap:L,thicknessMap:te,gradientMap:ie,opaque:S.transparent===!1&&S.blending===cs&&S.alphaToCoverage===!1,alphaMap:he,alphaTest:J,alphaHash:Y,combine:S.combine,mapUv:We&&_(S.map.channel),aoMapUv:at&&_(S.aoMap.channel),lightMapUv:Ue&&_(S.lightMap.channel),bumpMapUv:Ce&&_(S.bumpMap.channel),normalMapUv:me&&_(S.normalMap.channel),displacementMapUv:ct&&_(S.displacementMap.channel),emissiveMapUv:ge&&_(S.emissiveMap.channel),metalnessMapUv:Be&&_(S.metalnessMap.channel),roughnessMapUv:Tt&&_(S.roughnessMap.channel),anisotropyMapUv:k&&_(S.anisotropyMap.channel),clearcoatMapUv:Se&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ne&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Re&&_(S.sheenRoughnessMap.channel),specularMapUv:ve&&_(S.specularMap.channel),specularColorMapUv:oe&&_(S.specularColorMap.channel),specularIntensityMapUv:Oe&&_(S.specularIntensityMap.channel),transmissionMapUv:L&&_(S.transmissionMap.channel),thicknessMapUv:te&&_(S.thicknessMap.channel),alphaMapUv:he&&_(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(me||pt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!W.attributes.uv&&(We||he),fog:!!j,useFog:S.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:de,skinning:V.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:He,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ne,decodeVideoTexture:We&&S.map.isVideoTexture===!0&&Xe.getTransfer(S.map.colorSpace)===Je,decodeVideoTextureEmissive:ge&&S.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(S.emissiveMap.colorSpace)===Je,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===En,flipSided:S.side===zt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:pe&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&S.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return it.vertexUv1s=l.has(1),it.vertexUv2s=l.has(2),it.vertexUv3s=l.has(3),l.clear(),it}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)M.push(D),M.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(A(M,S),T(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function A(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function T(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const M=g[S.type];let D;if(M){const z=qt[M];D=kc.clone(z.uniforms)}else D=S.uniforms;return D}function R(S,M){let D;for(let z=0,V=u.length;z<V;z++){const j=u[z];if(j.cacheKey===M){D=j,++D.usedTimes;break}}return D===void 0&&(D=new C3(i,M,S,r),u.push(D)),D}function C(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function P(S){c.remove(S)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:R,releaseProgram:C,releaseShaderCache:P,programs:u,dispose:U}}function N3(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function U3(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Yu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ju(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,f,g,_,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||U3),n.length>1&&n.sort(d||Yu),s.length>1&&s.sort(d||Yu)}function u(){for(let h=e,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function O3(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new ju,i.set(n,[o])):s>=r.length?(o=new ju,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function F3(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new Me};break;case"SpotLight":t={position:new E,direction:new E,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new Me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":t={color:new Me,position:new E,halfWidth:new E,halfHeight:new E};break}return i[e.id]=t,t}}}function B3(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let z3=0;function H3(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function k3(i){const e=new F3,t=B3(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new E);const s=new E,r=new Ie,o=new Ie;function a(l){let u=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,A=0,T=0,v=0,R=0,C=0,P=0;l.sort(H3);for(let S=0,M=l.length;S<M;S++){const D=l[S],z=D.color,V=D.intensity,j=D.distance,W=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=z.r*V,h+=z.g*V,d+=z.b*V;else if(D.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(D.sh.coefficients[q],V);P++}else if(D.isDirectionalLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Z=D.shadow,H=t.get(D);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=W,n.directionalShadowMatrix[f]=D.shadow.matrix,A++}n.directional[f]=q,f++}else if(D.isSpotLight){const q=e.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(z).multiplyScalar(V),q.distance=j,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,n.spot[_]=q;const Z=D.shadow;if(D.map&&(n.spotLightMap[R]=D.map,R++,Z.updateMatrices(D),D.castShadow&&C++),n.spotLightMatrix[_]=Z.matrix,D.castShadow){const H=t.get(D);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=W,v++}_++}else if(D.isRectAreaLight){const q=e.get(D);q.color.copy(z).multiplyScalar(V),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=q,m++}else if(D.isPointLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),q.distance=D.distance,q.decay=D.decay,D.castShadow){const Z=D.shadow,H=t.get(D);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,H.shadowCameraNear=Z.camera.near,H.shadowCameraFar=Z.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=D.shadow.matrix,T++}n.point[g]=q,g++}else if(D.isHemisphereLight){const q=e.get(D);q.skyColor.copy(D.color).multiplyScalar(V),q.groundColor.copy(D.groundColor).multiplyScalar(V),n.hemi[p]=q,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=se.LTC_FLOAT_1,n.rectAreaLTC2=se.LTC_FLOAT_2):(n.rectAreaLTC1=se.LTC_HALF_1,n.rectAreaLTC2=se.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const U=n.hash;(U.directionalLength!==f||U.pointLength!==g||U.spotLength!==_||U.rectAreaLength!==m||U.hemiLength!==p||U.numDirectionalShadows!==A||U.numPointShadows!==T||U.numSpotShadows!==v||U.numSpotMaps!==R||U.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=v+R-C,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=P,U.directionalLength=f,U.pointLength=g,U.spotLength=_,U.rectAreaLength=m,U.hemiLength=p,U.numDirectionalShadows=A,U.numPointShadows=T,U.numSpotShadows=v,U.numSpotMaps=R,U.numLightProbes=P,n.version=z3++)}function c(l,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,A=l.length;p<A;p++){const T=l[p];if(T.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(T.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(T.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(T.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(T.width*.5,0,0),v.halfHeight.set(0,T.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(T.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Ku(i){const e=new k3(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function V3(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Ku(i),e.set(s,[a])):r>=o.length?(a=new Ku(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const G3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W3=`uniform sampler2D shadow_pass;
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
}`;function X3(i,e,t){let n=new Xc;const s=new xe,r=new xe,o=new Ge,a=new zp({depthPacking:Rf}),c=new Hp,l={},u=t.maxTextureSize,h={[qn]:zt,[zt]:qn,[En]:En},d=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:G3,fragmentShader:W3}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new _t;g.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new It(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xh;let p=this.type;this.render=function(C,P,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),z=i.state;z.setBlending(ai),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const V=p!==zn&&this.type===zn,j=p===zn&&this.type!==zn;for(let W=0,q=C.length;W<q;W++){const Z=C[W],H=Z.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const re=H.getFrameExtents();if(s.multiply(re),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/re.x),s.x=r.x*re.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/re.y),s.y=r.y*re.y,H.mapSize.y=r.y)),H.map===null||V===!0||j===!0){const Te=this.type!==zn?{minFilter:Ht,magFilter:Ht}:{};H.map!==null&&H.map.dispose(),H.map=new Pi(s.x,s.y,Te),H.map.texture.name=Z.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const le=H.getViewportCount();for(let Te=0;Te<le;Te++){const He=H.getViewport(Te);o.set(r.x*He.x,r.y*He.y,r.x*He.z,r.y*He.w),z.viewport(o),H.updateMatrices(Z,Te),n=H.getFrustum(),v(P,U,H.camera,Z,this.type)}H.isPointLightShadow!==!0&&this.type===zn&&A(H,U),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,D)};function A(C,P){const U=e.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Pi(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(P,null,U,d,_,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(P,null,U,f,_,null)}function T(C,P,U,S){let M=null;const D=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)M=D;else if(M=U.isPointLight===!0?c:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const z=M.uuid,V=P.uuid;let j=l[z];j===void 0&&(j={},l[z]=j);let W=j[V];W===void 0&&(W=M.clone(),j[V]=W,P.addEventListener("dispose",R)),M=W}if(M.visible=P.visible,M.wireframe=P.wireframe,S===zn?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:h[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=i.properties.get(M);z.light=U}return M}function v(C,P,U,S,M){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===zn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);const V=e.update(C),j=C.material;if(Array.isArray(j)){const W=V.groups;for(let q=0,Z=W.length;q<Z;q++){const H=W[q],re=j[H.materialIndex];if(re&&re.visible){const le=T(C,re,S,M);C.onBeforeShadow(i,C,P,U,V,le,H),i.renderBufferDirect(U,null,V,le,C,H),C.onAfterShadow(i,C,P,U,V,le,H)}}}else if(j.visible){const W=T(C,j,S,M);C.onBeforeShadow(i,C,P,U,V,W,null),i.renderBufferDirect(U,null,V,W,C,null),C.onAfterShadow(i,C,P,U,V,W,null)}}const z=C.children;for(let V=0,j=z.length;V<j;V++)v(z[V],P,U,S,M)}function R(C){C.target.removeEventListener("dispose",R);for(const U in l){const S=l[U],M=C.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const q3={[Pa]:La,[Da]:Ua,[Ia]:Oa,[fs]:Na,[La]:Pa,[Ua]:Da,[Oa]:Ia,[Na]:fs};function Y3(i,e){function t(){let L=!1;const te=new Ge;let ie=null;const he=new Ge(0,0,0,0);return{setMask:function(J){ie!==J&&!L&&(i.colorMask(J,J,J,J),ie=J)},setLocked:function(J){L=J},setClear:function(J,Y,pe,Ne,it){it===!0&&(J*=Ne,Y*=Ne,pe*=Ne),te.set(J,Y,pe,Ne),he.equals(te)===!1&&(i.clearColor(J,Y,pe,Ne),he.copy(te))},reset:function(){L=!1,ie=null,he.set(-1,0,0,0)}}}function n(){let L=!1,te=!1,ie=null,he=null,J=null;return{setReversed:function(Y){if(te!==Y){const pe=e.get("EXT_clip_control");Y?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT),te=Y;const Ne=J;J=null,this.setClear(Ne)}},getReversed:function(){return te},setTest:function(Y){Y?$(i.DEPTH_TEST):de(i.DEPTH_TEST)},setMask:function(Y){ie!==Y&&!L&&(i.depthMask(Y),ie=Y)},setFunc:function(Y){if(te&&(Y=q3[Y]),he!==Y){switch(Y){case Pa:i.depthFunc(i.NEVER);break;case La:i.depthFunc(i.ALWAYS);break;case Da:i.depthFunc(i.LESS);break;case fs:i.depthFunc(i.LEQUAL);break;case Ia:i.depthFunc(i.EQUAL);break;case Na:i.depthFunc(i.GEQUAL);break;case Ua:i.depthFunc(i.GREATER);break;case Oa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=Y}},setLocked:function(Y){L=Y},setClear:function(Y){J!==Y&&(te&&(Y=1-Y),i.clearDepth(Y),J=Y)},reset:function(){L=!1,ie=null,he=null,J=null,te=!1}}}function s(){let L=!1,te=null,ie=null,he=null,J=null,Y=null,pe=null,Ne=null,it=null;return{setTest:function(je){L||(je?$(i.STENCIL_TEST):de(i.STENCIL_TEST))},setMask:function(je){te!==je&&!L&&(i.stencilMask(je),te=je)},setFunc:function(je,Dn,yn){(ie!==je||he!==Dn||J!==yn)&&(i.stencilFunc(je,Dn,yn),ie=je,he=Dn,J=yn)},setOp:function(je,Dn,yn){(Y!==je||pe!==Dn||Ne!==yn)&&(i.stencilOp(je,Dn,yn),Y=je,pe=Dn,Ne=yn)},setLocked:function(je){L=je},setClear:function(je){it!==je&&(i.clearStencil(je),it=je)},reset:function(){L=!1,te=null,ie=null,he=null,J=null,Y=null,pe=null,Ne=null,it=null}}}const r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,A=null,T=null,v=null,R=null,C=null,P=new Me(0,0,0),U=0,S=!1,M=null,D=null,z=null,V=null,j=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Z=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(H)[1]),q=Z>=1):H.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),q=Z>=2);let re=null,le={};const Te=i.getParameter(i.SCISSOR_BOX),He=i.getParameter(i.VIEWPORT),nt=new Ge().fromArray(Te),ot=new Ge().fromArray(He);function Ye(L,te,ie,he){const J=new Uint8Array(4),Y=i.createTexture();i.bindTexture(L,Y),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let pe=0;pe<ie;pe++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(te,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,J):i.texImage2D(te+pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,J);return Y}const X={};X[i.TEXTURE_2D]=Ye(i.TEXTURE_2D,i.TEXTURE_2D,1),X[i.TEXTURE_CUBE_MAP]=Ye(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[i.TEXTURE_2D_ARRAY]=Ye(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),X[i.TEXTURE_3D]=Ye(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),$(i.DEPTH_TEST),o.setFunc(fs),Ce(!1),me(Al),$(i.CULL_FACE),at(ai);function $(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function de(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function De(L,te){return h[L]!==te?(i.bindFramebuffer(L,te),h[L]=te,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=te),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=te),!0):!1}function Ee(L,te){let ie=f,he=!1;if(L){ie=d.get(te),ie===void 0&&(ie=[],d.set(te,ie));const J=L.textures;if(ie.length!==J.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let Y=0,pe=J.length;Y<pe;Y++)ie[Y]=i.COLOR_ATTACHMENT0+Y;ie.length=J.length,he=!0}}else ie[0]!==i.BACK&&(ie[0]=i.BACK,he=!0);he&&i.drawBuffers(ie)}function We(L){return g!==L?(i.useProgram(L),g=L,!0):!1}const Pt={[yi]:i.FUNC_ADD,[$d]:i.FUNC_SUBTRACT,[Jd]:i.FUNC_REVERSE_SUBTRACT};Pt[Qd]=i.MIN,Pt[ef]=i.MAX;const w={[tf]:i.ZERO,[nf]:i.ONE,[sf]:i.SRC_COLOR,[Ra]:i.SRC_ALPHA,[uf]:i.SRC_ALPHA_SATURATE,[cf]:i.DST_COLOR,[of]:i.DST_ALPHA,[rf]:i.ONE_MINUS_SRC_COLOR,[Ca]:i.ONE_MINUS_SRC_ALPHA,[lf]:i.ONE_MINUS_DST_COLOR,[af]:i.ONE_MINUS_DST_ALPHA,[hf]:i.CONSTANT_COLOR,[df]:i.ONE_MINUS_CONSTANT_COLOR,[ff]:i.CONSTANT_ALPHA,[pf]:i.ONE_MINUS_CONSTANT_ALPHA};function at(L,te,ie,he,J,Y,pe,Ne,it,je){if(L===ai){_===!0&&(de(i.BLEND),_=!1);return}if(_===!1&&($(i.BLEND),_=!0),L!==Zd){if(L!==m||je!==S){if((p!==yi||v!==yi)&&(i.blendEquation(i.FUNC_ADD),p=yi,v=yi),je)switch(L){case cs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wi:i.blendFunc(i.ONE,i.ONE);break;case wl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case cs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case wl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}A=null,T=null,R=null,C=null,P.set(0,0,0),U=0,m=L,S=je}return}J=J||te,Y=Y||ie,pe=pe||he,(te!==p||J!==v)&&(i.blendEquationSeparate(Pt[te],Pt[J]),p=te,v=J),(ie!==A||he!==T||Y!==R||pe!==C)&&(i.blendFuncSeparate(w[ie],w[he],w[Y],w[pe]),A=ie,T=he,R=Y,C=pe),(Ne.equals(P)===!1||it!==U)&&(i.blendColor(Ne.r,Ne.g,Ne.b,it),P.copy(Ne),U=it),m=L,S=!1}function Ue(L,te){L.side===En?de(i.CULL_FACE):$(i.CULL_FACE);let ie=L.side===zt;te&&(ie=!ie),Ce(ie),L.blending===cs&&L.transparent===!1?at(ai):at(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);const he=L.stencilWrite;a.setTest(he),he&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ge(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):de(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(L){M!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),M=L)}function me(L){L!==Yd?($(i.CULL_FACE),L!==D&&(L===Al?i.cullFace(i.BACK):L===jd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):de(i.CULL_FACE),D=L}function ct(L){L!==z&&(q&&i.lineWidth(L),z=L)}function ge(L,te,ie){L?($(i.POLYGON_OFFSET_FILL),(V!==te||j!==ie)&&(i.polygonOffset(te,ie),V=te,j=ie)):de(i.POLYGON_OFFSET_FILL)}function Be(L){L?$(i.SCISSOR_TEST):de(i.SCISSOR_TEST)}function Tt(L){L===void 0&&(L=i.TEXTURE0+W-1),re!==L&&(i.activeTexture(L),re=L)}function pt(L,te,ie){ie===void 0&&(re===null?ie=i.TEXTURE0+W-1:ie=re);let he=le[ie];he===void 0&&(he={type:void 0,texture:void 0},le[ie]=he),(he.type!==L||he.texture!==te)&&(re!==ie&&(i.activeTexture(ie),re=ie),i.bindTexture(L,te||X[L]),he.type=L,he.texture=te)}function b(){const L=le[re];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function G(){try{i.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{i.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{i.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{i.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{i.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{i.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{i.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(L){nt.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),nt.copy(L))}function Re(L){ot.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),ot.copy(L))}function ve(L,te){let ie=l.get(te);ie===void 0&&(ie=new WeakMap,l.set(te,ie));let he=ie.get(L);he===void 0&&(he=i.getUniformBlockIndex(te,L.name),ie.set(L,he))}function oe(L,te){const he=l.get(te).get(L);c.get(te)!==he&&(i.uniformBlockBinding(te,he,L.__bindingPointIndex),c.set(te,he))}function Oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},re=null,le={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,A=null,T=null,v=null,R=null,C=null,P=new Me(0,0,0),U=0,S=!1,M=null,D=null,z=null,V=null,j=null,nt.set(0,0,i.canvas.width,i.canvas.height),ot.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:$,disable:de,bindFramebuffer:De,drawBuffers:Ee,useProgram:We,setBlending:at,setMaterial:Ue,setFlipSided:Ce,setCullFace:me,setLineWidth:ct,setPolygonOffset:ge,setScissorTest:Be,activeTexture:Tt,bindTexture:pt,unbindTexture:b,compressedTexImage2D:x,compressedTexImage3D:O,texImage2D:ye,texImage3D:ee,updateUBOMapping:ve,uniformBlockBinding:oe,texStorage2D:ne,texStorage3D:_e,texSubImage2D:G,texSubImage3D:K,compressedTexSubImage2D:k,compressedTexSubImage3D:Se,scissor:ce,viewport:Re,reset:Oe}}function j3(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new xe,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,x){return f?new OffscreenCanvas(b,x):rr("canvas")}function _(b,x,O){let G=1;const K=pt(b);if((K.width>O||K.height>O)&&(G=O/Math.max(K.width,K.height)),G<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const k=Math.floor(G*K.width),Se=Math.floor(G*K.height);h===void 0&&(h=g(k,Se));const ne=x?g(k,Se):h;return ne.width=k,ne.height=Se,ne.getContext("2d").drawImage(b,0,0,k,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+k+"x"+Se+")."),ne}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){i.generateMipmap(b)}function A(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(b,x,O,G,K=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let k=x;if(x===i.RED&&(O===i.FLOAT&&(k=i.R32F),O===i.HALF_FLOAT&&(k=i.R16F),O===i.UNSIGNED_BYTE&&(k=i.R8)),x===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(k=i.R8UI),O===i.UNSIGNED_SHORT&&(k=i.R16UI),O===i.UNSIGNED_INT&&(k=i.R32UI),O===i.BYTE&&(k=i.R8I),O===i.SHORT&&(k=i.R16I),O===i.INT&&(k=i.R32I)),x===i.RG&&(O===i.FLOAT&&(k=i.RG32F),O===i.HALF_FLOAT&&(k=i.RG16F),O===i.UNSIGNED_BYTE&&(k=i.RG8)),x===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(k=i.RG8UI),O===i.UNSIGNED_SHORT&&(k=i.RG16UI),O===i.UNSIGNED_INT&&(k=i.RG32UI),O===i.BYTE&&(k=i.RG8I),O===i.SHORT&&(k=i.RG16I),O===i.INT&&(k=i.RG32I)),x===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(k=i.RGB8UI),O===i.UNSIGNED_SHORT&&(k=i.RGB16UI),O===i.UNSIGNED_INT&&(k=i.RGB32UI),O===i.BYTE&&(k=i.RGB8I),O===i.SHORT&&(k=i.RGB16I),O===i.INT&&(k=i.RGB32I)),x===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(k=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(k=i.RGBA16UI),O===i.UNSIGNED_INT&&(k=i.RGBA32UI),O===i.BYTE&&(k=i.RGBA8I),O===i.SHORT&&(k=i.RGBA16I),O===i.INT&&(k=i.RGBA32I)),x===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&(k=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(k=i.R11F_G11F_B10F)),x===i.RGBA){const Se=K?ao:Xe.getTransfer(G);O===i.FLOAT&&(k=i.RGBA32F),O===i.HALF_FLOAT&&(k=i.RGBA16F),O===i.UNSIGNED_BYTE&&(k=Se===Je?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(k=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(k=i.RGB5_A1)}return(k===i.R16F||k===i.R32F||k===i.RG16F||k===i.RG32F||k===i.RGBA16F||k===i.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function v(b,x){let O;return b?x===null||x===Ri||x===er?O=i.DEPTH24_STENCIL8:x===fn?O=i.DEPTH32F_STENCIL8:x===Qs&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ri||x===er?O=i.DEPTH_COMPONENT24:x===fn?O=i.DEPTH_COMPONENT32F:x===Qs&&(O=i.DEPTH_COMPONENT16),O}function R(b,x){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Ht&&b.minFilter!==$t?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function C(b){const x=b.target;x.removeEventListener("dispose",C),U(x),x.isVideoTexture&&u.delete(x)}function P(b){const x=b.target;x.removeEventListener("dispose",P),M(x)}function U(b){const x=n.get(b);if(x.__webglInit===void 0)return;const O=b.source,G=d.get(O);if(G){const K=G[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&S(b),Object.keys(G).length===0&&d.delete(O)}n.remove(b)}function S(b){const x=n.get(b);i.deleteTexture(x.__webglTexture);const O=b.source,G=d.get(O);delete G[x.__cacheKey],o.memory.textures--}function M(b){const x=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(x.__webglFramebuffer[G]))for(let K=0;K<x.__webglFramebuffer[G].length;K++)i.deleteFramebuffer(x.__webglFramebuffer[G][K]);else i.deleteFramebuffer(x.__webglFramebuffer[G]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[G])}else{if(Array.isArray(x.__webglFramebuffer))for(let G=0;G<x.__webglFramebuffer.length;G++)i.deleteFramebuffer(x.__webglFramebuffer[G]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let G=0;G<x.__webglColorRenderbuffer.length;G++)x.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[G]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=b.textures;for(let G=0,K=O.length;G<K;G++){const k=n.get(O[G]);k.__webglTexture&&(i.deleteTexture(k.__webglTexture),o.memory.textures--),n.remove(O[G])}n.remove(b)}let D=0;function z(){D=0}function V(){const b=D;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),D+=1,b}function j(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function W(b,x){const O=n.get(b);if(b.isVideoTexture&&Be(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&O.__version!==b.version){const G=b.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(O,b,x);return}}else b.isExternalTexture&&(O.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+x)}function q(b,x){const O=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){X(O,b,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+x)}function Z(b,x){const O=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){X(O,b,x);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+x)}function H(b,x){const O=n.get(b);if(b.version>0&&O.__version!==b.version){$(O,b,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+x)}const re={[gs]:i.REPEAT,[ii]:i.CLAMP_TO_EDGE,[oo]:i.MIRRORED_REPEAT},le={[Ht]:i.NEAREST,[Mh]:i.NEAREST_MIPMAP_NEAREST,[Gs]:i.NEAREST_MIPMAP_LINEAR,[$t]:i.LINEAR,[Qr]:i.LINEAR_MIPMAP_NEAREST,[Hn]:i.LINEAR_MIPMAP_LINEAR},Te={[Pf]:i.NEVER,[Of]:i.ALWAYS,[Lf]:i.LESS,[Lh]:i.LEQUAL,[Df]:i.EQUAL,[Uf]:i.GEQUAL,[If]:i.GREATER,[Nf]:i.NOTEQUAL};function He(b,x){if(x.type===fn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===$t||x.magFilter===Qr||x.magFilter===Gs||x.magFilter===Hn||x.minFilter===$t||x.minFilter===Qr||x.minFilter===Gs||x.minFilter===Hn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,re[x.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,re[x.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,re[x.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,le[x.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,le[x.minFilter]),x.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,Te[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ht||x.minFilter!==Gs&&x.minFilter!==Hn||x.type===fn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function nt(b,x){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",C));const G=x.source;let K=d.get(G);K===void 0&&(K={},d.set(G,K));const k=j(x);if(k!==b.__cacheKey){K[k]===void 0&&(K[k]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),K[k].usedTimes++;const Se=K[b.__cacheKey];Se!==void 0&&(K[b.__cacheKey].usedTimes--,Se.usedTimes===0&&S(x)),b.__cacheKey=k,b.__webglTexture=K[k].texture}return O}function ot(b,x,O){return Math.floor(Math.floor(b/O)/x)}function Ye(b,x,O,G){const k=b.updateRanges;if(k.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,O,G,x.data);else{k.sort((ee,ce)=>ee.start-ce.start);let Se=0;for(let ee=1;ee<k.length;ee++){const ce=k[Se],Re=k[ee],ve=ce.start+ce.count,oe=ot(Re.start,x.width,4),Oe=ot(ce.start,x.width,4);Re.start<=ve+1&&oe===Oe&&ot(Re.start+Re.count-1,x.width,4)===oe?ce.count=Math.max(ce.count,Re.start+Re.count-ce.start):(++Se,k[Se]=Re)}k.length=Se+1;const ne=i.getParameter(i.UNPACK_ROW_LENGTH),_e=i.getParameter(i.UNPACK_SKIP_PIXELS),ye=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let ee=0,ce=k.length;ee<ce;ee++){const Re=k[ee],ve=Math.floor(Re.start/4),oe=Math.ceil(Re.count/4),Oe=ve%x.width,L=Math.floor(ve/x.width),te=oe,ie=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Oe),i.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,Oe,L,te,ie,O,G,x.data)}b.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ne),i.pixelStorei(i.UNPACK_SKIP_PIXELS,_e),i.pixelStorei(i.UNPACK_SKIP_ROWS,ye)}}function X(b,x,O){let G=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(G=i.TEXTURE_3D);const K=nt(b,x),k=x.source;t.bindTexture(G,b.__webglTexture,i.TEXTURE0+O);const Se=n.get(k);if(k.version!==Se.__version||K===!0){t.activeTexture(i.TEXTURE0+O);const ne=Xe.getPrimaries(Xe.workingColorSpace),_e=x.colorSpace===ni?null:Xe.getPrimaries(x.colorSpace),ye=x.colorSpace===ni||ne===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let ee=_(x.image,!1,s.maxTextureSize);ee=Tt(x,ee);const ce=r.convert(x.format,x.colorSpace),Re=r.convert(x.type);let ve=T(x.internalFormat,ce,Re,x.colorSpace,x.isVideoTexture);He(G,x);let oe;const Oe=x.mipmaps,L=x.isVideoTexture!==!0,te=Se.__version===void 0||K===!0,ie=k.dataReady,he=R(x,ee);if(x.isDepthTexture)ve=v(x.format===nr,x.type),te&&(L?t.texStorage2D(i.TEXTURE_2D,1,ve,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,ve,ee.width,ee.height,0,ce,Re,null));else if(x.isDataTexture)if(Oe.length>0){L&&te&&t.texStorage2D(i.TEXTURE_2D,he,ve,Oe[0].width,Oe[0].height);for(let J=0,Y=Oe.length;J<Y;J++)oe=Oe[J],L?ie&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,oe.width,oe.height,ce,Re,oe.data):t.texImage2D(i.TEXTURE_2D,J,ve,oe.width,oe.height,0,ce,Re,oe.data);x.generateMipmaps=!1}else L?(te&&t.texStorage2D(i.TEXTURE_2D,he,ve,ee.width,ee.height),ie&&Ye(x,ee,ce,Re)):t.texImage2D(i.TEXTURE_2D,0,ve,ee.width,ee.height,0,ce,Re,ee.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){L&&te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,ve,Oe[0].width,Oe[0].height,ee.depth);for(let J=0,Y=Oe.length;J<Y;J++)if(oe=Oe[J],x.format!==rn)if(ce!==null)if(L){if(ie)if(x.layerUpdates.size>0){const pe=bu(oe.width,oe.height,x.format,x.type);for(const Ne of x.layerUpdates){const it=oe.data.subarray(Ne*pe/oe.data.BYTES_PER_ELEMENT,(Ne+1)*pe/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,Ne,oe.width,oe.height,1,ce,it)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,oe.width,oe.height,ee.depth,ce,oe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,ve,oe.width,oe.height,ee.depth,0,oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ie&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,oe.width,oe.height,ee.depth,ce,Re,oe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,ve,oe.width,oe.height,ee.depth,0,ce,Re,oe.data)}else{L&&te&&t.texStorage2D(i.TEXTURE_2D,he,ve,Oe[0].width,Oe[0].height);for(let J=0,Y=Oe.length;J<Y;J++)oe=Oe[J],x.format!==rn?ce!==null?L?ie&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,oe.width,oe.height,ce,oe.data):t.compressedTexImage2D(i.TEXTURE_2D,J,ve,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ie&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,oe.width,oe.height,ce,Re,oe.data):t.texImage2D(i.TEXTURE_2D,J,ve,oe.width,oe.height,0,ce,Re,oe.data)}else if(x.isDataArrayTexture)if(L){if(te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,ve,ee.width,ee.height,ee.depth),ie)if(x.layerUpdates.size>0){const J=bu(ee.width,ee.height,x.format,x.type);for(const Y of x.layerUpdates){const pe=ee.data.subarray(Y*J/ee.data.BYTES_PER_ELEMENT,(Y+1)*J/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Y,ee.width,ee.height,1,ce,Re,pe)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ce,Re,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ve,ee.width,ee.height,ee.depth,0,ce,Re,ee.data);else if(x.isData3DTexture)L?(te&&t.texStorage3D(i.TEXTURE_3D,he,ve,ee.width,ee.height,ee.depth),ie&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ce,Re,ee.data)):t.texImage3D(i.TEXTURE_3D,0,ve,ee.width,ee.height,ee.depth,0,ce,Re,ee.data);else if(x.isFramebufferTexture){if(te)if(L)t.texStorage2D(i.TEXTURE_2D,he,ve,ee.width,ee.height);else{let J=ee.width,Y=ee.height;for(let pe=0;pe<he;pe++)t.texImage2D(i.TEXTURE_2D,pe,ve,J,Y,0,ce,Re,null),J>>=1,Y>>=1}}else if(Oe.length>0){if(L&&te){const J=pt(Oe[0]);t.texStorage2D(i.TEXTURE_2D,he,ve,J.width,J.height)}for(let J=0,Y=Oe.length;J<Y;J++)oe=Oe[J],L?ie&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,ce,Re,oe):t.texImage2D(i.TEXTURE_2D,J,ve,ce,Re,oe);x.generateMipmaps=!1}else if(L){if(te){const J=pt(ee);t.texStorage2D(i.TEXTURE_2D,he,ve,J.width,J.height)}ie&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce,Re,ee)}else t.texImage2D(i.TEXTURE_2D,0,ve,ce,Re,ee);m(x)&&p(G),Se.__version=k.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function $(b,x,O){if(x.image.length!==6)return;const G=nt(b,x),K=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+O);const k=n.get(K);if(K.version!==k.__version||G===!0){t.activeTexture(i.TEXTURE0+O);const Se=Xe.getPrimaries(Xe.workingColorSpace),ne=x.colorSpace===ni?null:Xe.getPrimaries(x.colorSpace),_e=x.colorSpace===ni||Se===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const ye=x.isCompressedTexture||x.image[0].isCompressedTexture,ee=x.image[0]&&x.image[0].isDataTexture,ce=[];for(let Y=0;Y<6;Y++)!ye&&!ee?ce[Y]=_(x.image[Y],!0,s.maxCubemapSize):ce[Y]=ee?x.image[Y].image:x.image[Y],ce[Y]=Tt(x,ce[Y]);const Re=ce[0],ve=r.convert(x.format,x.colorSpace),oe=r.convert(x.type),Oe=T(x.internalFormat,ve,oe,x.colorSpace),L=x.isVideoTexture!==!0,te=k.__version===void 0||G===!0,ie=K.dataReady;let he=R(x,Re);He(i.TEXTURE_CUBE_MAP,x);let J;if(ye){L&&te&&t.texStorage2D(i.TEXTURE_CUBE_MAP,he,Oe,Re.width,Re.height);for(let Y=0;Y<6;Y++){J=ce[Y].mipmaps;for(let pe=0;pe<J.length;pe++){const Ne=J[pe];x.format!==rn?ve!==null?L?ie&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe,0,0,Ne.width,Ne.height,ve,Ne.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe,Oe,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe,0,0,Ne.width,Ne.height,ve,oe,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe,Oe,Ne.width,Ne.height,0,ve,oe,Ne.data)}}}else{if(J=x.mipmaps,L&&te){J.length>0&&he++;const Y=pt(ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,he,Oe,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(ee){L?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ce[Y].width,ce[Y].height,ve,oe,ce[Y].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Oe,ce[Y].width,ce[Y].height,0,ve,oe,ce[Y].data);for(let pe=0;pe<J.length;pe++){const it=J[pe].image[Y].image;L?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe+1,0,0,it.width,it.height,ve,oe,it.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe+1,Oe,it.width,it.height,0,ve,oe,it.data)}}else{L?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ve,oe,ce[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Oe,ve,oe,ce[Y]);for(let pe=0;pe<J.length;pe++){const Ne=J[pe];L?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe+1,0,0,ve,oe,Ne.image[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe+1,Oe,ve,oe,Ne.image[Y])}}}m(x)&&p(i.TEXTURE_CUBE_MAP),k.__version=K.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function de(b,x,O,G,K,k){const Se=r.convert(O.format,O.colorSpace),ne=r.convert(O.type),_e=T(O.internalFormat,Se,ne,O.colorSpace),ye=n.get(x),ee=n.get(O);if(ee.__renderTarget=x,!ye.__hasExternalTextures){const ce=Math.max(1,x.width>>k),Re=Math.max(1,x.height>>k);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,k,_e,ce,Re,x.depth,0,Se,ne,null):t.texImage2D(K,k,_e,ce,Re,0,Se,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),ge(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,K,ee.__webglTexture,0,ct(x)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,K,ee.__webglTexture,k),t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(b,x,O){if(i.bindRenderbuffer(i.RENDERBUFFER,b),x.depthBuffer){const G=x.depthTexture,K=G&&G.isDepthTexture?G.type:null,k=v(x.stencilBuffer,K),Se=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=ct(x);ge(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,k,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,k,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,k,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,b)}else{const G=x.textures;for(let K=0;K<G.length;K++){const k=G[K],Se=r.convert(k.format,k.colorSpace),ne=r.convert(k.type),_e=T(k.internalFormat,Se,ne,k.colorSpace),ye=ct(x);O&&ge(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,_e,x.width,x.height):ge(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,_e,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,_e,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ee(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=n.get(x.depthTexture);G.__renderTarget=x,(!G.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W(x.depthTexture,0);const K=G.__webglTexture,k=ct(x);if(x.depthTexture.format===tr)ge(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(x.depthTexture.format===nr)ge(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function We(b){const x=n.get(b),O=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){const G=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),G){const K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,G.removeEventListener("dispose",K)};G.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=G}if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const G=b.texture.mipmaps;G&&G.length>0?Ee(x.__webglFramebuffer[0],b):Ee(x.__webglFramebuffer,b)}else if(O){x.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[G]),x.__webglDepthbuffer[G]===void 0)x.__webglDepthbuffer[G]=i.createRenderbuffer(),De(x.__webglDepthbuffer[G],b,!1);else{const K=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=x.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,k)}}else{const G=b.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),De(x.__webglDepthbuffer,b,!1);else{const K=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,k)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(b,x,O){const G=n.get(b);x!==void 0&&de(G.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&We(b)}function w(b){const x=b.texture,O=n.get(b),G=n.get(x);b.addEventListener("dispose",P);const K=b.textures,k=b.isWebGLCubeRenderTarget===!0,Se=K.length>1;if(Se||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=x.version,o.memory.textures++),k){O.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[ne]=[];for(let _e=0;_e<x.mipmaps.length;_e++)O.__webglFramebuffer[ne][_e]=i.createFramebuffer()}else O.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let ne=0;ne<x.mipmaps.length;ne++)O.__webglFramebuffer[ne]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Se)for(let ne=0,_e=K.length;ne<_e;ne++){const ye=n.get(K[ne]);ye.__webglTexture===void 0&&(ye.__webglTexture=i.createTexture(),o.memory.textures++)}if(b.samples>0&&ge(b)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ne=0;ne<K.length;ne++){const _e=K[ne];O.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ne]);const ye=r.convert(_e.format,_e.colorSpace),ee=r.convert(_e.type),ce=T(_e.internalFormat,ye,ee,_e.colorSpace,b.isXRRenderTarget===!0),Re=ct(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,ce,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,O.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),De(O.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(k){t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),He(i.TEXTURE_CUBE_MAP,x);for(let ne=0;ne<6;ne++)if(x.mipmaps&&x.mipmaps.length>0)for(let _e=0;_e<x.mipmaps.length;_e++)de(O.__webglFramebuffer[ne][_e],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e);else de(O.__webglFramebuffer[ne],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);m(x)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let ne=0,_e=K.length;ne<_e;ne++){const ye=K[ne],ee=n.get(ye);let ce=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ce=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,ee.__webglTexture),He(ce,ye),de(O.__webglFramebuffer,b,ye,i.COLOR_ATTACHMENT0+ne,ce,0),m(ye)&&p(ce)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ne=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,G.__webglTexture),He(ne,x),x.mipmaps&&x.mipmaps.length>0)for(let _e=0;_e<x.mipmaps.length;_e++)de(O.__webglFramebuffer[_e],b,x,i.COLOR_ATTACHMENT0,ne,_e);else de(O.__webglFramebuffer,b,x,i.COLOR_ATTACHMENT0,ne,0);m(x)&&p(ne),t.unbindTexture()}b.depthBuffer&&We(b)}function at(b){const x=b.textures;for(let O=0,G=x.length;O<G;O++){const K=x[O];if(m(K)){const k=A(b),Se=n.get(K).__webglTexture;t.bindTexture(k,Se),p(k),t.unbindTexture()}}}const Ue=[],Ce=[];function me(b){if(b.samples>0){if(ge(b)===!1){const x=b.textures,O=b.width,G=b.height;let K=i.COLOR_BUFFER_BIT;const k=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(b),ne=x.length>1;if(ne)for(let ye=0;ye<x.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const _e=b.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let ye=0;ye<x.length;ye++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[ye]);const ee=n.get(x[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,O,G,0,0,O,G,K,i.NEAREST),c===!0&&(Ue.length=0,Ce.length=0,Ue.push(i.COLOR_ATTACHMENT0+ye),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Ue.push(k),Ce.push(k),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ce)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ue))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let ye=0;ye<x.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,Se.__webglColorRenderbuffer[ye]);const ee=n.get(x[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const x=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ct(b){return Math.min(s.maxSamples,b.samples)}function ge(b){const x=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Be(b){const x=o.render.frame;u.get(b)!==x&&(u.set(b,x),b.update())}function Tt(b,x){const O=b.colorSpace,G=b.format,K=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==Vt&&O!==ni&&(Xe.getTransfer(O)===Je?(G!==rn||K!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}function pt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=z,this.setTexture2D=W,this.setTexture2DArray=q,this.setTexture3D=Z,this.setTextureCube=H,this.rebindTextures=Pt,this.setupRenderTarget=w,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=de,this.useMultisampledRTT=ge}function K3(i,e){function t(n,s=ni){let r;const o=Xe.getTransfer(s);if(n===An)return i.UNSIGNED_BYTE;if(n===Dc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ic)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Th)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===bh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Sh)return i.BYTE;if(n===Eh)return i.SHORT;if(n===Qs)return i.UNSIGNED_SHORT;if(n===Lc)return i.INT;if(n===Ri)return i.UNSIGNED_INT;if(n===fn)return i.FLOAT;if(n===ar)return i.HALF_FLOAT;if(n===Ah)return i.ALPHA;if(n===wh)return i.RGB;if(n===rn)return i.RGBA;if(n===tr)return i.DEPTH_COMPONENT;if(n===nr)return i.DEPTH_STENCIL;if(n===Nc)return i.RED;if(n===Uc)return i.RED_INTEGER;if(n===Rh)return i.RG;if(n===Oc)return i.RG_INTEGER;if(n===Fc)return i.RGBA_INTEGER;if(n===eo||n===to||n===no||n===io)if(o===Je)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===eo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===eo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===io)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===za||n===Ha||n===ka||n===Va)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===za)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ha)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ka)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Va)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ga||n===Wa||n===Xa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ga||n===Wa)return o===Je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Xa)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===qa||n===Ya||n===ja||n===Ka||n===Za||n===$a||n===Ja||n===Qa||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===qa)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ya)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ja)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ka)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Za)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$a)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ja)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qa)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ec)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tc)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===nc)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ic)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sc)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===rc)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oc||n===ac||n===cc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===oc)return o===Je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ac)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===cc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lc||n===uc||n===hc||n===dc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===lc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===uc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===hc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===dc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===er?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Z3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$3=`
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

}`;class J3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Wh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Cn({vertexShader:Z3,fragmentShader:$3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new It(new vo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Q3 extends Di{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new J3,p={},A=t.getContextAttributes();let T=null,v=null;const R=[],C=[],P=new xe;let U=null;const S=new Bt;S.viewport=new Ge;const M=new Bt;M.viewport=new Ge;const D=[S,M],z=new a1;let V=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let $=R[X];return $===void 0&&($=new Jo,R[X]=$),$.getTargetRaySpace()},this.getControllerGrip=function(X){let $=R[X];return $===void 0&&($=new Jo,R[X]=$),$.getGripSpace()},this.getHand=function(X){let $=R[X];return $===void 0&&($=new Jo,R[X]=$),$.getHandSpace()};function W(X){const $=C.indexOf(X.inputSource);if($===-1)return;const de=R[$];de!==void 0&&(de.update(X.inputSource,X.frame,l||o),de.dispatchEvent({type:X.type,data:X.inputSource}))}function q(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",Z);for(let X=0;X<R.length;X++){const $=C[X];$!==null&&(C[X]=null,R[X].disconnect($))}V=null,j=null,m.reset();for(const X in p)delete p[X];e.setRenderTarget(T),f=null,d=null,h=null,s=null,v=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",q),s.addEventListener("inputsourceschange",Z),A.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,De=null,Ee=null;A.depth&&(Ee=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=A.stencil?nr:tr,De=A.stencil?er:Ri);const We={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(We),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Pi(d.textureWidth,d.textureHeight,{format:rn,type:An,depthTexture:new Gh(d.textureWidth,d.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const de={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Pi(f.framebufferWidth,f.framebufferHeight,{format:rn,type:An,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ye.setContext(s),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z(X){for(let $=0;$<X.removed.length;$++){const de=X.removed[$],De=C.indexOf(de);De>=0&&(C[De]=null,R[De].disconnect(de))}for(let $=0;$<X.added.length;$++){const de=X.added[$];let De=C.indexOf(de);if(De===-1){for(let We=0;We<R.length;We++)if(We>=C.length){C.push(de),De=We;break}else if(C[We]===null){C[We]=de,De=We;break}if(De===-1)break}const Ee=R[De];Ee&&Ee.connect(de)}}const H=new E,re=new E;function le(X,$,de){H.setFromMatrixPosition($.matrixWorld),re.setFromMatrixPosition(de.matrixWorld);const De=H.distanceTo(re),Ee=$.projectionMatrix.elements,We=de.projectionMatrix.elements,Pt=Ee[14]/(Ee[10]-1),w=Ee[14]/(Ee[10]+1),at=(Ee[9]+1)/Ee[5],Ue=(Ee[9]-1)/Ee[5],Ce=(Ee[8]-1)/Ee[0],me=(We[8]+1)/We[0],ct=Pt*Ce,ge=Pt*me,Be=De/(-Ce+me),Tt=Be*-Ce;if($.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Tt),X.translateZ(Be),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ee[10]===-1)X.projectionMatrix.copy($.projectionMatrix),X.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const pt=Pt+Be,b=w+Be,x=ct-Tt,O=ge+(De-Tt),G=at*w/b*pt,K=Ue*w/b*pt;X.projectionMatrix.makePerspective(x,O,G,K,pt,b),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Te(X,$){$===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices($.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let $=X.near,de=X.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(de=m.depthFar)),z.near=M.near=S.near=$,z.far=M.far=S.far=de,(V!==z.near||j!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),V=z.near,j=z.far),z.layers.mask=X.layers.mask|6,S.layers.mask=z.layers.mask&3,M.layers.mask=z.layers.mask&5;const De=X.parent,Ee=z.cameras;Te(z,De);for(let We=0;We<Ee.length;We++)Te(Ee[We],De);Ee.length===2?le(z,S,M):z.projectionMatrix.copy(S.projectionMatrix),He(X,z,De)};function He(X,$,de){de===null?X.matrix.copy($.matrixWorld):(X.matrix.copy(de.matrixWorld),X.matrix.invert(),X.matrix.multiply($.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy($.projectionMatrix),X.projectionMatrixInverse.copy($.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=_s*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(X){return p[X]};let nt=null;function ot(X,$){if(u=$.getViewerPose(l||o),g=$,u!==null){const de=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let De=!1;de.length!==z.cameras.length&&(z.cameras.length=0,De=!0);for(let w=0;w<de.length;w++){const at=de[w];let Ue=null;if(f!==null)Ue=f.getViewport(at);else{const me=h.getViewSubImage(d,at);Ue=me.viewport,w===0&&(e.setRenderTargetTextures(v,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(v))}let Ce=D[w];Ce===void 0&&(Ce=new Bt,Ce.layers.enable(w),Ce.viewport=new Ge,D[w]=Ce),Ce.matrix.fromArray(at.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(at.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),w===0&&(z.matrix.copy(Ce.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),De===!0&&z.cameras.push(Ce)}const Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const w=h.getDepthInformation(de[0]);w&&w.isValid&&w.texture&&m.init(w,s.renderState)}if(Ee&&Ee.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let w=0;w<de.length;w++){const at=de[w].camera;if(at){let Ue=p[at];Ue||(Ue=new Wh,p[at]=Ue);const Ce=h.getCameraImage(at);Ue.sourceTexture=Ce}}}}for(let de=0;de<R.length;de++){const De=C[de],Ee=R[de];De!==null&&Ee!==void 0&&Ee.update(De,$,l||o)}nt&&nt(X,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}const Ye=new Jh;Ye.setAnimationLoop(ot),this.setAnimationLoop=function(X){nt=X},this.dispose=function(){}}}const gi=new Rn,eg=new Ie;function tg(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Fh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,A,T,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,A,T):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===zt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===zt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=e.get(p),T=A.envMap,v=A.envMapRotation;T&&(m.envMap.value=T,gi.copy(v),gi.x*=-1,gi.y*=-1,gi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),m.envMapRotation.value.setFromMatrix4(eg.makeRotationFromEuler(gi)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,A,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ng(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,T){const v=T.program;n.uniformBlockBinding(A,v)}function l(A,T){let v=s[A.id];v===void 0&&(g(A),v=u(A),s[A.id]=v,A.addEventListener("dispose",m));const R=T.program;n.updateUBOMapping(A,R);const C=e.render.frame;r[A.id]!==C&&(d(A),r[A.id]=C)}function u(A){const T=h();A.__bindingPointIndex=T;const v=i.createBuffer(),R=A.__size,C=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,R,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,v),v}function h(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const T=s[A.id],v=A.uniforms,R=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let C=0,P=v.length;C<P;C++){const U=Array.isArray(v[C])?v[C]:[v[C]];for(let S=0,M=U.length;S<M;S++){const D=U[S];if(f(D,C,S,R)===!0){const z=D.__offset,V=Array.isArray(D.value)?D.value:[D.value];let j=0;for(let W=0;W<V.length;W++){const q=V[W],Z=_(q);typeof q=="number"||typeof q=="boolean"?(D.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,z+j,D.__data)):q.isMatrix3?(D.__data[0]=q.elements[0],D.__data[1]=q.elements[1],D.__data[2]=q.elements[2],D.__data[3]=0,D.__data[4]=q.elements[3],D.__data[5]=q.elements[4],D.__data[6]=q.elements[5],D.__data[7]=0,D.__data[8]=q.elements[6],D.__data[9]=q.elements[7],D.__data[10]=q.elements[8],D.__data[11]=0):(q.toArray(D.__data,j),j+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(A,T,v,R){const C=A.value,P=T+"_"+v;if(R[P]===void 0)return typeof C=="number"||typeof C=="boolean"?R[P]=C:R[P]=C.clone(),!0;{const U=R[P];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return R[P]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function g(A){const T=A.uniforms;let v=0;const R=16;for(let P=0,U=T.length;P<U;P++){const S=Array.isArray(T[P])?T[P]:[T[P]];for(let M=0,D=S.length;M<D;M++){const z=S[M],V=Array.isArray(z.value)?z.value:[z.value];for(let j=0,W=V.length;j<W;j++){const q=V[j],Z=_(q),H=v%R,re=H%Z.boundary,le=H+re;v+=re,le!==0&&R-le<Z.storage&&(v+=R-le),z.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=Z.storage}}}const C=v%R;return C>0&&(v+=R-C),A.__size=v,A.__cache={},this}function _(A){const T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function m(A){const T=A.target;T.removeEventListener("dispose",m);const v=o.indexOf(T.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function p(){for(const A in s)i.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class ig{constructor(e={}){const{canvas:t=Qf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const A=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let R=!1;this._outputColorSpace=gt;let C=0,P=0,U=null,S=-1,M=null;const D=new Ge,z=new Ge;let V=null;const j=new Me(0);let W=0,q=t.width,Z=t.height,H=1,re=null,le=null;const Te=new Ge(0,0,q,Z),He=new Ge(0,0,q,Z);let nt=!1;const ot=new Xc;let Ye=!1,X=!1;const $=new Ie,de=new E,De=new Ge,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function Pt(){return U===null?H:1}let w=n;function at(y,I){return t.getContext(y,I)}try{const y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Pc}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",J,!1),w===null){const I="webgl2";if(w=at(I,y),w===null)throw at(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ue,Ce,me,ct,ge,Be,Tt,pt,b,x,O,G,K,k,Se,ne,_e,ye,ee,ce,Re,ve,oe,Oe;function L(){Ue=new f0(w),Ue.init(),ve=new K3(w,Ue),Ce=new o0(w,Ue,e,ve),me=new Y3(w,Ue),Ce.reversedDepthBuffer&&d&&me.buffers.depth.setReversed(!0),ct=new g0(w),ge=new N3,Be=new j3(w,Ue,me,ge,Ce,ve,ct),Tt=new c0(v),pt=new d0(v),b=new S1(w),oe=new s0(w,b),x=new p0(w,b,ct,oe),O=new x0(w,x,b,ct),ee=new _0(w,Ce,Be),ne=new a0(ge),G=new I3(v,Tt,pt,Ue,Ce,oe,ne),K=new tg(v,ge),k=new O3,Se=new V3(Ue),ye=new i0(v,Tt,pt,me,O,f,c),_e=new X3(v,O,Ce),Oe=new ng(w,ct,Ce,me),ce=new r0(w,Ue,ct),Re=new m0(w,Ue,ct),ct.programs=G.programs,v.capabilities=Ce,v.extensions=Ue,v.properties=ge,v.renderLists=k,v.shadowMap=_e,v.state=me,v.info=ct}L();const te=new Q3(v,w);this.xr=te,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const y=Ue.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ue.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(y){y!==void 0&&(H=y,this.setSize(q,Z,!1))},this.getSize=function(y){return y.set(q,Z)},this.setSize=function(y,I,F=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=y,Z=I,t.width=Math.floor(y*H),t.height=Math.floor(I*H),F===!0&&(t.style.width=y+"px",t.style.height=I+"px"),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(q*H,Z*H).floor()},this.setDrawingBufferSize=function(y,I,F){q=y,Z=I,H=F,t.width=Math.floor(y*F),t.height=Math.floor(I*F),this.setViewport(0,0,y,I)},this.getCurrentViewport=function(y){return y.copy(D)},this.getViewport=function(y){return y.copy(Te)},this.setViewport=function(y,I,F,B){y.isVector4?Te.set(y.x,y.y,y.z,y.w):Te.set(y,I,F,B),me.viewport(D.copy(Te).multiplyScalar(H).round())},this.getScissor=function(y){return y.copy(He)},this.setScissor=function(y,I,F,B){y.isVector4?He.set(y.x,y.y,y.z,y.w):He.set(y,I,F,B),me.scissor(z.copy(He).multiplyScalar(H).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(y){me.setScissorTest(nt=y)},this.setOpaqueSort=function(y){re=y},this.setTransparentSort=function(y){le=y},this.getClearColor=function(y){return y.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(y=!0,I=!0,F=!0){let B=0;if(y){let N=!1;if(U!==null){const Q=U.texture.format;N=Q===Fc||Q===Oc||Q===Uc}if(N){const Q=U.texture.type,ae=Q===An||Q===Ri||Q===Qs||Q===er||Q===Dc||Q===Ic,fe=ye.getClearColor(),ue=ye.getClearAlpha(),we=fe.r,Pe=fe.g,be=fe.b;ae?(g[0]=we,g[1]=Pe,g[2]=be,g[3]=ue,w.clearBufferuiv(w.COLOR,0,g)):(_[0]=we,_[1]=Pe,_[2]=be,_[3]=ue,w.clearBufferiv(w.COLOR,0,_))}else B|=w.COLOR_BUFFER_BIT}I&&(B|=w.DEPTH_BUFFER_BIT),F&&(B|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",J,!1),ye.dispose(),k.dispose(),Se.dispose(),ge.dispose(),Tt.dispose(),pt.dispose(),O.dispose(),oe.dispose(),Oe.dispose(),G.dispose(),te.dispose(),te.removeEventListener("sessionstart",yn),te.removeEventListener("sessionend",vl),li.stop()};function ie(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const y=ct.autoReset,I=_e.enabled,F=_e.autoUpdate,B=_e.needsUpdate,N=_e.type;L(),ct.autoReset=y,_e.enabled=I,_e.autoUpdate=F,_e.needsUpdate=B,_e.type=N}function J(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Y(y){const I=y.target;I.removeEventListener("dispose",Y),pe(I)}function pe(y){Ne(y),ge.remove(y)}function Ne(y){const I=ge.get(y).programs;I!==void 0&&(I.forEach(function(F){G.releaseProgram(F)}),y.isShaderMaterial&&G.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,F,B,N,Q){I===null&&(I=Ee);const ae=N.isMesh&&N.matrixWorld.determinant()<0,fe=kd(y,I,F,B,N);me.setMaterial(B,ae);let ue=F.index,we=1;if(B.wireframe===!0){if(ue=x.getWireframeAttribute(F),ue===void 0)return;we=2}const Pe=F.drawRange,be=F.attributes.position;let Ve=Pe.start*we,$e=(Pe.start+Pe.count)*we;Q!==null&&(Ve=Math.max(Ve,Q.start*we),$e=Math.min($e,(Q.start+Q.count)*we)),ue!==null?(Ve=Math.max(Ve,0),$e=Math.min($e,ue.count)):be!=null&&(Ve=Math.max(Ve,0),$e=Math.min($e,be.count));const ht=$e-Ve;if(ht<0||ht===1/0)return;oe.setup(N,B,fe,F,ue);let st,tt=ce;if(ue!==null&&(st=b.get(ue),tt=Re,tt.setIndex(st)),N.isMesh)B.wireframe===!0?(me.setLineWidth(B.wireframeLinewidth*Pt()),tt.setMode(w.LINES)):tt.setMode(w.TRIANGLES);else if(N.isLine){let Ae=B.linewidth;Ae===void 0&&(Ae=1),me.setLineWidth(Ae*Pt()),N.isLineSegments?tt.setMode(w.LINES):N.isLineLoop?tt.setMode(w.LINE_LOOP):tt.setMode(w.LINE_STRIP)}else N.isPoints?tt.setMode(w.POINTS):N.isSprite&&tt.setMode(w.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)or("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),tt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))tt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ae=N._multiDrawStarts,lt=N._multiDrawCounts,qe=N._multiDrawCount,Yt=ue?b.get(ue).bytesPerElement:1,Ui=ge.get(B).currentProgram.getUniforms();for(let jt=0;jt<qe;jt++)Ui.setValue(w,"_gl_DrawID",jt),tt.render(Ae[jt]/Yt,lt[jt])}else if(N.isInstancedMesh)tt.renderInstances(Ve,ht,N.count);else if(F.isInstancedBufferGeometry){const Ae=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,lt=Math.min(F.instanceCount,Ae);tt.renderInstances(Ve,ht,lt)}else tt.render(Ve,ht)};function it(y,I,F){y.transparent===!0&&y.side===En&&y.forceSinglePass===!1?(y.side=zt,y.needsUpdate=!0,mr(y,I,F),y.side=qn,y.needsUpdate=!0,mr(y,I,F),y.side=En):mr(y,I,F)}this.compile=function(y,I,F=null){F===null&&(F=y),p=Se.get(F),p.init(I),T.push(p),F.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),y!==F&&y.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const B=new Set;return y.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const Q=N.material;if(Q)if(Array.isArray(Q))for(let ae=0;ae<Q.length;ae++){const fe=Q[ae];it(fe,F,N),B.add(fe)}else it(Q,F,N),B.add(Q)}),p=T.pop(),B},this.compileAsync=function(y,I,F=null){const B=this.compile(y,I,F);return new Promise(N=>{function Q(){if(B.forEach(function(ae){ge.get(ae).currentProgram.isReady()&&B.delete(ae)}),B.size===0){N(y);return}setTimeout(Q,10)}Ue.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let je=null;function Dn(y){je&&je(y)}function yn(){li.stop()}function vl(){li.start()}const li=new Jh;li.setAnimationLoop(Dn),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(y){je=y,te.setAnimationLoop(y),y===null?li.stop():li.start()},te.addEventListener("sessionstart",yn),te.addEventListener("sessionend",vl),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(I),I=te.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,I,U),p=Se.get(y,T.length),p.init(I),T.push(p),$.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),ot.setFromProjectionMatrix($,bn,I.reversedDepth),X=this.localClippingEnabled,Ye=ne.init(this.clippingPlanes,X),m=k.get(y,A.length),m.init(),A.push(m),te.enabled===!0&&te.isPresenting===!0){const Q=v.xr.getDepthSensingMesh();Q!==null&&Co(Q,I,-1/0,v.sortObjects)}Co(y,I,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(re,le),We=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,We&&ye.addToRenderList(m,y),this.info.render.frame++,Ye===!0&&ne.beginShadows();const F=p.state.shadowsArray;_e.render(F,y,I),Ye===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,N=m.transmissive;if(p.setupLights(),I.isArrayCamera){const Q=I.cameras;if(N.length>0)for(let ae=0,fe=Q.length;ae<fe;ae++){const ue=Q[ae];Sl(B,N,y,ue)}We&&ye.render(y);for(let ae=0,fe=Q.length;ae<fe;ae++){const ue=Q[ae];Ml(m,y,ue,ue.viewport)}}else N.length>0&&Sl(B,N,y,I),We&&ye.render(y),Ml(m,y,I);U!==null&&P===0&&(Be.updateMultisampleRenderTarget(U),Be.updateRenderTargetMipmap(U)),y.isScene===!0&&y.onAfterRender(v,y,I),oe.resetDefaultState(),S=-1,M=null,T.pop(),T.length>0?(p=T[T.length-1],Ye===!0&&ne.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function Co(y,I,F,B){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)F=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||ot.intersectsSprite(y)){B&&De.setFromMatrixPosition(y.matrixWorld).applyMatrix4($);const ae=O.update(y),fe=y.material;fe.visible&&m.push(y,ae,fe,F,De.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||ot.intersectsObject(y))){const ae=O.update(y),fe=y.material;if(B&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),De.copy(y.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),De.copy(ae.boundingSphere.center)),De.applyMatrix4(y.matrixWorld).applyMatrix4($)),Array.isArray(fe)){const ue=ae.groups;for(let we=0,Pe=ue.length;we<Pe;we++){const be=ue[we],Ve=fe[be.materialIndex];Ve&&Ve.visible&&m.push(y,ae,Ve,F,De.z,be)}}else fe.visible&&m.push(y,ae,fe,F,De.z,null)}}const Q=y.children;for(let ae=0,fe=Q.length;ae<fe;ae++)Co(Q[ae],I,F,B)}function Ml(y,I,F,B){const N=y.opaque,Q=y.transmissive,ae=y.transparent;p.setupLightsView(F),Ye===!0&&ne.setGlobalState(v.clippingPlanes,F),B&&me.viewport(D.copy(B)),N.length>0&&pr(N,I,F),Q.length>0&&pr(Q,I,F),ae.length>0&&pr(ae,I,F),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Sl(y,I,F,B){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[B.id]===void 0&&(p.state.transmissionRenderTarget[B.id]=new Pi(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?ar:An,minFilter:Hn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));const Q=p.state.transmissionRenderTarget[B.id],ae=B.viewport||D;Q.setSize(ae.z*v.transmissionResolutionScale,ae.w*v.transmissionResolutionScale);const fe=v.getRenderTarget(),ue=v.getActiveCubeFace(),we=v.getActiveMipmapLevel();v.setRenderTarget(Q),v.getClearColor(j),W=v.getClearAlpha(),W<1&&v.setClearColor(16777215,.5),v.clear(),We&&ye.render(F);const Pe=v.toneMapping;v.toneMapping=ci;const be=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),p.setupLightsView(B),Ye===!0&&ne.setGlobalState(v.clippingPlanes,B),pr(y,F,B),Be.updateMultisampleRenderTarget(Q),Be.updateRenderTargetMipmap(Q),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let $e=0,ht=I.length;$e<ht;$e++){const st=I[$e],tt=st.object,Ae=st.geometry,lt=st.material,qe=st.group;if(lt.side===En&&tt.layers.test(B.layers)){const Yt=lt.side;lt.side=zt,lt.needsUpdate=!0,El(tt,F,B,Ae,lt,qe),lt.side=Yt,lt.needsUpdate=!0,Ve=!0}}Ve===!0&&(Be.updateMultisampleRenderTarget(Q),Be.updateRenderTargetMipmap(Q))}v.setRenderTarget(fe,ue,we),v.setClearColor(j,W),be!==void 0&&(B.viewport=be),v.toneMapping=Pe}function pr(y,I,F){const B=I.isScene===!0?I.overrideMaterial:null;for(let N=0,Q=y.length;N<Q;N++){const ae=y[N],fe=ae.object,ue=ae.geometry,we=ae.group;let Pe=ae.material;Pe.allowOverride===!0&&B!==null&&(Pe=B),fe.layers.test(F.layers)&&El(fe,I,F,ue,Pe,we)}}function El(y,I,F,B,N,Q){y.onBeforeRender(v,I,F,B,N,Q),y.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),N.onBeforeRender(v,I,F,B,y,Q),N.transparent===!0&&N.side===En&&N.forceSinglePass===!1?(N.side=zt,N.needsUpdate=!0,v.renderBufferDirect(F,I,B,N,y,Q),N.side=qn,N.needsUpdate=!0,v.renderBufferDirect(F,I,B,N,y,Q),N.side=En):v.renderBufferDirect(F,I,B,N,y,Q),y.onAfterRender(v,I,F,B,N,Q)}function mr(y,I,F){I.isScene!==!0&&(I=Ee);const B=ge.get(y),N=p.state.lights,Q=p.state.shadowsArray,ae=N.state.version,fe=G.getParameters(y,N.state,Q,I,F),ue=G.getProgramCacheKey(fe);let we=B.programs;B.environment=y.isMeshStandardMaterial?I.environment:null,B.fog=I.fog,B.envMap=(y.isMeshStandardMaterial?pt:Tt).get(y.envMap||B.environment),B.envMapRotation=B.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,we===void 0&&(y.addEventListener("dispose",Y),we=new Map,B.programs=we);let Pe=we.get(ue);if(Pe!==void 0){if(B.currentProgram===Pe&&B.lightsStateVersion===ae)return bl(y,fe),Pe}else fe.uniforms=G.getUniforms(y),y.onBeforeCompile(fe,v),Pe=G.acquireProgram(fe,ue),we.set(ue,Pe),B.uniforms=fe.uniforms;const be=B.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(be.clippingPlanes=ne.uniform),bl(y,fe),B.needsLights=Gd(y),B.lightsStateVersion=ae,B.needsLights&&(be.ambientLightColor.value=N.state.ambient,be.lightProbe.value=N.state.probe,be.directionalLights.value=N.state.directional,be.directionalLightShadows.value=N.state.directionalShadow,be.spotLights.value=N.state.spot,be.spotLightShadows.value=N.state.spotShadow,be.rectAreaLights.value=N.state.rectArea,be.ltc_1.value=N.state.rectAreaLTC1,be.ltc_2.value=N.state.rectAreaLTC2,be.pointLights.value=N.state.point,be.pointLightShadows.value=N.state.pointShadow,be.hemisphereLights.value=N.state.hemi,be.directionalShadowMap.value=N.state.directionalShadowMap,be.directionalShadowMatrix.value=N.state.directionalShadowMatrix,be.spotShadowMap.value=N.state.spotShadowMap,be.spotLightMatrix.value=N.state.spotLightMatrix,be.spotLightMap.value=N.state.spotLightMap,be.pointShadowMap.value=N.state.pointShadowMap,be.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=Pe,B.uniformsList=null,Pe}function Tl(y){if(y.uniformsList===null){const I=y.currentProgram.getUniforms();y.uniformsList=so.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function bl(y,I){const F=ge.get(y);F.outputColorSpace=I.outputColorSpace,F.batching=I.batching,F.batchingColor=I.batchingColor,F.instancing=I.instancing,F.instancingColor=I.instancingColor,F.instancingMorph=I.instancingMorph,F.skinning=I.skinning,F.morphTargets=I.morphTargets,F.morphNormals=I.morphNormals,F.morphColors=I.morphColors,F.morphTargetsCount=I.morphTargetsCount,F.numClippingPlanes=I.numClippingPlanes,F.numIntersection=I.numClipIntersection,F.vertexAlphas=I.vertexAlphas,F.vertexTangents=I.vertexTangents,F.toneMapping=I.toneMapping}function kd(y,I,F,B,N){I.isScene!==!0&&(I=Ee),Be.resetTextureUnits();const Q=I.fog,ae=B.isMeshStandardMaterial?I.environment:null,fe=U===null?v.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Vt,ue=(B.isMeshStandardMaterial?pt:Tt).get(B.envMap||ae),we=B.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Pe=!!F.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),be=!!F.morphAttributes.position,Ve=!!F.morphAttributes.normal,$e=!!F.morphAttributes.color;let ht=ci;B.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ht=v.toneMapping);const st=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,tt=st!==void 0?st.length:0,Ae=ge.get(B),lt=p.state.lights;if(Ye===!0&&(X===!0||y!==M)){const Ut=y===M&&B.id===S;ne.setState(B,y,Ut)}let qe=!1;B.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==lt.state.version||Ae.outputColorSpace!==fe||N.isBatchedMesh&&Ae.batching===!1||!N.isBatchedMesh&&Ae.batching===!0||N.isBatchedMesh&&Ae.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ae.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ae.instancing===!1||!N.isInstancedMesh&&Ae.instancing===!0||N.isSkinnedMesh&&Ae.skinning===!1||!N.isSkinnedMesh&&Ae.skinning===!0||N.isInstancedMesh&&Ae.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ae.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ae.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ae.instancingMorph===!1&&N.morphTexture!==null||Ae.envMap!==ue||B.fog===!0&&Ae.fog!==Q||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ne.numPlanes||Ae.numIntersection!==ne.numIntersection)||Ae.vertexAlphas!==we||Ae.vertexTangents!==Pe||Ae.morphTargets!==be||Ae.morphNormals!==Ve||Ae.morphColors!==$e||Ae.toneMapping!==ht||Ae.morphTargetsCount!==tt)&&(qe=!0):(qe=!0,Ae.__version=B.version);let Yt=Ae.currentProgram;qe===!0&&(Yt=mr(B,I,N));let Ui=!1,jt=!1,Cs=!1;const ut=Yt.getUniforms(),Jt=Ae.uniforms;if(me.useProgram(Yt.program)&&(Ui=!0,jt=!0,Cs=!0),B.id!==S&&(S=B.id,jt=!0),Ui||M!==y){me.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ut.setValue(w,"projectionMatrix",y.projectionMatrix),ut.setValue(w,"viewMatrix",y.matrixWorldInverse);const Wt=ut.map.cameraPosition;Wt!==void 0&&Wt.setValue(w,de.setFromMatrixPosition(y.matrixWorld)),Ce.logarithmicDepthBuffer&&ut.setValue(w,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ut.setValue(w,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,jt=!0,Cs=!0)}if(N.isSkinnedMesh){ut.setOptional(w,N,"bindMatrix"),ut.setOptional(w,N,"bindMatrixInverse");const Ut=N.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),ut.setValue(w,"boneTexture",Ut.boneTexture,Be))}N.isBatchedMesh&&(ut.setOptional(w,N,"batchingTexture"),ut.setValue(w,"batchingTexture",N._matricesTexture,Be),ut.setOptional(w,N,"batchingIdTexture"),ut.setValue(w,"batchingIdTexture",N._indirectTexture,Be),ut.setOptional(w,N,"batchingColorTexture"),N._colorsTexture!==null&&ut.setValue(w,"batchingColorTexture",N._colorsTexture,Be));const Qt=F.morphAttributes;if((Qt.position!==void 0||Qt.normal!==void 0||Qt.color!==void 0)&&ee.update(N,F,Yt),(jt||Ae.receiveShadow!==N.receiveShadow)&&(Ae.receiveShadow=N.receiveShadow,ut.setValue(w,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Jt.envMap.value=ue,Jt.flipEnvMap.value=ue.isCubeTexture&&ue.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&I.environment!==null&&(Jt.envMapIntensity.value=I.environmentIntensity),jt&&(ut.setValue(w,"toneMappingExposure",v.toneMappingExposure),Ae.needsLights&&Vd(Jt,Cs),Q&&B.fog===!0&&K.refreshFogUniforms(Jt,Q),K.refreshMaterialUniforms(Jt,B,H,Z,p.state.transmissionRenderTarget[y.id]),so.upload(w,Tl(Ae),Jt,Be)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(so.upload(w,Tl(Ae),Jt,Be),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ut.setValue(w,"center",N.center),ut.setValue(w,"modelViewMatrix",N.modelViewMatrix),ut.setValue(w,"normalMatrix",N.normalMatrix),ut.setValue(w,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Ut=B.uniformsGroups;for(let Wt=0,Po=Ut.length;Wt<Po;Wt++){const ui=Ut[Wt];Oe.update(ui,Yt),Oe.bind(ui,Yt)}}return Yt}function Vd(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function Gd(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(y,I,F){const B=ge.get(y);B.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),ge.get(y.texture).__webglTexture=I,ge.get(y.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:F,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,I){const F=ge.get(y);F.__webglFramebuffer=I,F.__useDefaultFramebuffer=I===void 0};const Wd=w.createFramebuffer();this.setRenderTarget=function(y,I=0,F=0){U=y,C=I,P=F;let B=!0,N=null,Q=!1,ae=!1;if(y){const ue=ge.get(y);if(ue.__useDefaultFramebuffer!==void 0)me.bindFramebuffer(w.FRAMEBUFFER,null),B=!1;else if(ue.__webglFramebuffer===void 0)Be.setupRenderTarget(y);else if(ue.__hasExternalTextures)Be.rebindTextures(y,ge.get(y.texture).__webglTexture,ge.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const be=y.depthTexture;if(ue.__boundDepthTexture!==be){if(be!==null&&ge.has(be)&&(y.width!==be.image.width||y.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Be.setupDepthRenderbuffer(y)}}const we=y.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(ae=!0);const Pe=ge.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Pe[I])?N=Pe[I][F]:N=Pe[I],Q=!0):y.samples>0&&Be.useMultisampledRTT(y)===!1?N=ge.get(y).__webglMultisampledFramebuffer:Array.isArray(Pe)?N=Pe[F]:N=Pe,D.copy(y.viewport),z.copy(y.scissor),V=y.scissorTest}else D.copy(Te).multiplyScalar(H).floor(),z.copy(He).multiplyScalar(H).floor(),V=nt;if(F!==0&&(N=Wd),me.bindFramebuffer(w.FRAMEBUFFER,N)&&B&&me.drawBuffers(y,N),me.viewport(D),me.scissor(z),me.setScissorTest(V),Q){const ue=ge.get(y.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+I,ue.__webglTexture,F)}else if(ae){const ue=I;for(let we=0;we<y.textures.length;we++){const Pe=ge.get(y.textures[we]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+we,Pe.__webglTexture,F,ue)}}else if(y!==null&&F!==0){const ue=ge.get(y.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,ue.__webglTexture,F)}S=-1},this.readRenderTargetPixels=function(y,I,F,B,N,Q,ae,fe=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=ge.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ae!==void 0&&(ue=ue[ae]),ue){me.bindFramebuffer(w.FRAMEBUFFER,ue);try{const we=y.textures[fe],Pe=we.format,be=we.type;if(!Ce.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ce.textureTypeReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-B&&F>=0&&F<=y.height-N&&(y.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+fe),w.readPixels(I,F,B,N,ve.convert(Pe),ve.convert(be),Q))}finally{const we=U!==null?ge.get(U).__webglFramebuffer:null;me.bindFramebuffer(w.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(y,I,F,B,N,Q,ae,fe=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=ge.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ae!==void 0&&(ue=ue[ae]),ue)if(I>=0&&I<=y.width-B&&F>=0&&F<=y.height-N){me.bindFramebuffer(w.FRAMEBUFFER,ue);const we=y.textures[fe],Pe=we.format,be=we.type;if(!Ce.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ce.textureTypeReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Ve),w.bufferData(w.PIXEL_PACK_BUFFER,Q.byteLength,w.STREAM_READ),y.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+fe),w.readPixels(I,F,B,N,ve.convert(Pe),ve.convert(be),0);const $e=U!==null?ge.get(U).__webglFramebuffer:null;me.bindFramebuffer(w.FRAMEBUFFER,$e);const ht=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await ep(w,ht,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Ve),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,Q),w.deleteBuffer(Ve),w.deleteSync(ht),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,I=null,F=0){const B=Math.pow(2,-F),N=Math.floor(y.image.width*B),Q=Math.floor(y.image.height*B),ae=I!==null?I.x:0,fe=I!==null?I.y:0;Be.setTexture2D(y,0),w.copyTexSubImage2D(w.TEXTURE_2D,F,0,0,ae,fe,N,Q),me.unbindTexture()};const Xd=w.createFramebuffer(),qd=w.createFramebuffer();this.copyTextureToTexture=function(y,I,F=null,B=null,N=0,Q=null){Q===null&&(N!==0?(or("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=N,N=0):Q=0);let ae,fe,ue,we,Pe,be,Ve,$e,ht;const st=y.isCompressedTexture?y.mipmaps[Q]:y.image;if(F!==null)ae=F.max.x-F.min.x,fe=F.max.y-F.min.y,ue=F.isBox3?F.max.z-F.min.z:1,we=F.min.x,Pe=F.min.y,be=F.isBox3?F.min.z:0;else{const Qt=Math.pow(2,-N);ae=Math.floor(st.width*Qt),fe=Math.floor(st.height*Qt),y.isDataArrayTexture?ue=st.depth:y.isData3DTexture?ue=Math.floor(st.depth*Qt):ue=1,we=0,Pe=0,be=0}B!==null?(Ve=B.x,$e=B.y,ht=B.z):(Ve=0,$e=0,ht=0);const tt=ve.convert(I.format),Ae=ve.convert(I.type);let lt;I.isData3DTexture?(Be.setTexture3D(I,0),lt=w.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Be.setTexture2DArray(I,0),lt=w.TEXTURE_2D_ARRAY):(Be.setTexture2D(I,0),lt=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,I.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,I.unpackAlignment);const qe=w.getParameter(w.UNPACK_ROW_LENGTH),Yt=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Ui=w.getParameter(w.UNPACK_SKIP_PIXELS),jt=w.getParameter(w.UNPACK_SKIP_ROWS),Cs=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,st.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,st.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,we),w.pixelStorei(w.UNPACK_SKIP_ROWS,Pe),w.pixelStorei(w.UNPACK_SKIP_IMAGES,be);const ut=y.isDataArrayTexture||y.isData3DTexture,Jt=I.isDataArrayTexture||I.isData3DTexture;if(y.isDepthTexture){const Qt=ge.get(y),Ut=ge.get(I),Wt=ge.get(Qt.__renderTarget),Po=ge.get(Ut.__renderTarget);me.bindFramebuffer(w.READ_FRAMEBUFFER,Wt.__webglFramebuffer),me.bindFramebuffer(w.DRAW_FRAMEBUFFER,Po.__webglFramebuffer);for(let ui=0;ui<ue;ui++)ut&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,ge.get(y).__webglTexture,N,be+ui),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,ge.get(I).__webglTexture,Q,ht+ui)),w.blitFramebuffer(we,Pe,ae,fe,Ve,$e,ae,fe,w.DEPTH_BUFFER_BIT,w.NEAREST);me.bindFramebuffer(w.READ_FRAMEBUFFER,null),me.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(N!==0||y.isRenderTargetTexture||ge.has(y)){const Qt=ge.get(y),Ut=ge.get(I);me.bindFramebuffer(w.READ_FRAMEBUFFER,Xd),me.bindFramebuffer(w.DRAW_FRAMEBUFFER,qd);for(let Wt=0;Wt<ue;Wt++)ut?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Qt.__webglTexture,N,be+Wt):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Qt.__webglTexture,N),Jt?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Ut.__webglTexture,Q,ht+Wt):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Ut.__webglTexture,Q),N!==0?w.blitFramebuffer(we,Pe,ae,fe,Ve,$e,ae,fe,w.COLOR_BUFFER_BIT,w.NEAREST):Jt?w.copyTexSubImage3D(lt,Q,Ve,$e,ht+Wt,we,Pe,ae,fe):w.copyTexSubImage2D(lt,Q,Ve,$e,we,Pe,ae,fe);me.bindFramebuffer(w.READ_FRAMEBUFFER,null),me.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Jt?y.isDataTexture||y.isData3DTexture?w.texSubImage3D(lt,Q,Ve,$e,ht,ae,fe,ue,tt,Ae,st.data):I.isCompressedArrayTexture?w.compressedTexSubImage3D(lt,Q,Ve,$e,ht,ae,fe,ue,tt,st.data):w.texSubImage3D(lt,Q,Ve,$e,ht,ae,fe,ue,tt,Ae,st):y.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,Q,Ve,$e,ae,fe,tt,Ae,st.data):y.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,Q,Ve,$e,st.width,st.height,tt,st.data):w.texSubImage2D(w.TEXTURE_2D,Q,Ve,$e,ae,fe,tt,Ae,st);w.pixelStorei(w.UNPACK_ROW_LENGTH,qe),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Yt),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ui),w.pixelStorei(w.UNPACK_SKIP_ROWS,jt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Cs),Q===0&&I.generateMipmaps&&w.generateMipmap(lt),me.unbindTexture()},this.initRenderTarget=function(y){ge.get(y).__webglFramebuffer===void 0&&Be.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Be.setTextureCube(y,0):y.isData3DTexture?Be.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Be.setTexture2DArray(y,0):Be.setTexture2D(y,0),me.unbindTexture()},this.resetState=function(){C=0,P=0,U=null,me.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}const Zu={type:"change"},el={type:"start"},id={type:"end"},Yr=new Ss,$u=new ti,sg=Math.cos(70*Ci.DEG2RAD),xt=new E,Xt=2*Math.PI,Qe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ma=1e-6;class rg extends v1{constructor(e,t=null){super(e,t),this.state=Qe.NONE,this.target=new E,this.cursor=new E,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:oi.ROTATE,MIDDLE:oi.DOLLY,RIGHT:oi.PAN},this.touches={ONE:os.ROTATE,TWO:os.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new E,this._lastQuaternion=new wn,this._lastTargetPosition=new E,this._quat=new wn().setFromUnitVectors(e.up,new E(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Eu,this._sphericalDelta=new Eu,this._scale=1,this._panOffset=new E,this._rotateStart=new xe,this._rotateEnd=new xe,this._rotateDelta=new xe,this._panStart=new xe,this._panEnd=new xe,this._panDelta=new xe,this._dollyStart=new xe,this._dollyEnd=new xe,this._dollyDelta=new xe,this._dollyDirection=new E,this._mouse=new xe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ag.bind(this),this._onPointerDown=og.bind(this),this._onPointerUp=cg.bind(this),this._onContextMenu=mg.bind(this),this._onMouseWheel=hg.bind(this),this._onKeyDown=dg.bind(this),this._onTouchStart=fg.bind(this),this._onTouchMove=pg.bind(this),this._onMouseDown=lg.bind(this),this._onMouseMove=ug.bind(this),this._interceptControlDown=gg.bind(this),this._interceptControlUp=_g.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Zu),this.update(),this.state=Qe.NONE}update(e=null){const t=this.object.position;xt.copy(t).sub(this.target),xt.applyQuaternion(this._quat),this._spherical.setFromVector3(xt),this.autoRotate&&this.state===Qe.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Xt:n>Math.PI&&(n-=Xt),s<-Math.PI?s+=Xt:s>Math.PI&&(s-=Xt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(xt.setFromSpherical(this._spherical),xt.applyQuaternion(this._quatInverse),t.copy(this.target).add(xt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=xt.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new E(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new E(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=xt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Yr.origin.copy(this.object.position),Yr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Yr.direction))<sg?this.object.lookAt(this.target):($u.setFromNormalAndCoplanarPoint(this.object.up,this.target),Yr.intersectPlane($u,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ma||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ma||this._lastTargetPosition.distanceToSquared(this.target)>ma?(this.dispatchEvent(Zu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Xt/60*this.autoRotateSpeed*e:Xt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){xt.setFromMatrixColumn(t,0),xt.multiplyScalar(-e),this._panOffset.add(xt)}_panUp(e,t){this.screenSpacePanning===!0?xt.setFromMatrixColumn(t,1):(xt.setFromMatrixColumn(t,0),xt.crossVectors(this.object.up,xt)),xt.multiplyScalar(e),this._panOffset.add(xt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;xt.copy(s).sub(this.target);let r=xt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Xt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Xt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new xe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function og(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function ag(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function cg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(id),this.state=Qe.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function lg(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case oi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Qe.DOLLY;break;case oi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Qe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Qe.ROTATE}break;case oi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Qe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Qe.PAN}break;default:this.state=Qe.NONE}this.state!==Qe.NONE&&this.dispatchEvent(el)}function ug(i){switch(this.state){case Qe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Qe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Qe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function hg(i){this.enabled===!1||this.enableZoom===!1||this.state!==Qe.NONE||(i.preventDefault(),this.dispatchEvent(el),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(id))}function dg(i){this.enabled!==!1&&this._handleKeyDown(i)}function fg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case os.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Qe.TOUCH_ROTATE;break;case os.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Qe.TOUCH_PAN;break;default:this.state=Qe.NONE}break;case 2:switch(this.touches.TWO){case os.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Qe.TOUCH_DOLLY_PAN;break;case os.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Qe.TOUCH_DOLLY_ROTATE;break;default:this.state=Qe.NONE}break;default:this.state=Qe.NONE}this.state!==Qe.NONE&&this.dispatchEvent(el)}function pg(i){switch(this._trackPointer(i),this.state){case Qe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Qe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Qe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Qe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Qe.NONE}}function mg(i){this.enabled!==!1&&i.preventDefault()}function gg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function _g(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Ju=new Gt,jr=new E;class sd extends r1{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new At(e,3)),this.setAttribute("uv",new At(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new yc(t,6,1);return this.setAttribute("instanceStart",new pn(n,3,0)),this.setAttribute("instanceEnd",new pn(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new yc(t,6,1);return this.setAttribute("instanceColorStart",new pn(n,3,0)),this.setAttribute("instanceColorEnd",new pn(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Bp(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gt);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Ju.setFromBufferAttribute(t),this.boundingBox.union(Ju))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new an),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)jr.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(jr)),jr.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(jr));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}se.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new xe(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};qt.line={uniforms:kc.merge([se.common,se.fog,se.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

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

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

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

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

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
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

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

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

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

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class tl extends Cn{constructor(e){super({type:"LineMaterial",uniforms:kc.clone(qt.line.uniforms),vertexShader:qt.line.vertexShader,fragmentShader:qt.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const ga=new Ge,Qu=new E,eh=new E,wt=new Ge,Rt=new Ge,vn=new Ge,_a=new E,xa=new Ie,Ct=new y1,th=new E,Kr=new Gt,Zr=new an,Mn=new Ge;let Tn,Si;function nh(i,e,t){return Mn.set(0,0,-e,1).applyMatrix4(i.projectionMatrix),Mn.multiplyScalar(1/Mn.w),Mn.x=Si/t.width,Mn.y=Si/t.height,Mn.applyMatrix4(i.projectionMatrixInverse),Mn.multiplyScalar(1/Mn.w),Math.abs(Math.max(Mn.x,Mn.y))}function xg(i,e){const t=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,o=Math.min(n.instanceCount,s.count);for(let a=0,c=o;a<c;a++){Ct.start.fromBufferAttribute(s,a),Ct.end.fromBufferAttribute(r,a),Ct.applyMatrix4(t);const l=new E,u=new E;Tn.distanceSqToSegment(Ct.start,Ct.end,u,l),u.distanceTo(l)<Si*.5&&e.push({point:u,pointOnLine:l,distance:Tn.origin.distanceTo(u),object:i,face:null,faceIndex:a,uv:null,uv1:null})}}function yg(i,e,t){const n=e.projectionMatrix,r=i.material.resolution,o=i.matrixWorld,a=i.geometry,c=a.attributes.instanceStart,l=a.attributes.instanceEnd,u=Math.min(a.instanceCount,c.count),h=-e.near;Tn.at(1,vn),vn.w=1,vn.applyMatrix4(e.matrixWorldInverse),vn.applyMatrix4(n),vn.multiplyScalar(1/vn.w),vn.x*=r.x/2,vn.y*=r.y/2,vn.z=0,_a.copy(vn),xa.multiplyMatrices(e.matrixWorldInverse,o);for(let d=0,f=u;d<f;d++){if(wt.fromBufferAttribute(c,d),Rt.fromBufferAttribute(l,d),wt.w=1,Rt.w=1,wt.applyMatrix4(xa),Rt.applyMatrix4(xa),wt.z>h&&Rt.z>h)continue;if(wt.z>h){const T=wt.z-Rt.z,v=(wt.z-h)/T;wt.lerp(Rt,v)}else if(Rt.z>h){const T=Rt.z-wt.z,v=(Rt.z-h)/T;Rt.lerp(wt,v)}wt.applyMatrix4(n),Rt.applyMatrix4(n),wt.multiplyScalar(1/wt.w),Rt.multiplyScalar(1/Rt.w),wt.x*=r.x/2,wt.y*=r.y/2,Rt.x*=r.x/2,Rt.y*=r.y/2,Ct.start.copy(wt),Ct.start.z=0,Ct.end.copy(Rt),Ct.end.z=0;const _=Ct.closestPointToPointParameter(_a,!0);Ct.at(_,th);const m=Ci.lerp(wt.z,Rt.z,_),p=m>=-1&&m<=1,A=_a.distanceTo(th)<Si*.5;if(p&&A){Ct.start.fromBufferAttribute(c,d),Ct.end.fromBufferAttribute(l,d),Ct.start.applyMatrix4(o),Ct.end.applyMatrix4(o);const T=new E,v=new E;Tn.distanceSqToSegment(Ct.start,Ct.end,v,T),t.push({point:v,pointOnLine:T,distance:Tn.origin.distanceTo(v),object:i,face:null,faceIndex:d,uv:null,uv1:null})}}}class vg extends It{constructor(e=new sd,t=new tl({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let o=0,a=0,c=t.count;o<c;o++,a+=2)Qu.fromBufferAttribute(t,o),eh.fromBufferAttribute(n,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+Qu.distanceTo(eh);const r=new yc(s,2,1);return e.setAttribute("instanceDistanceStart",new pn(r,1,0)),e.setAttribute("instanceDistanceEnd",new pn(r,1,1)),this}raycast(e,t){const n=this.material.worldUnits,s=e.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Tn=e.ray;const o=this.matrixWorld,a=this.geometry,c=this.material;Si=c.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),Zr.copy(a.boundingSphere).applyMatrix4(o);let l;if(n)l=Si*.5;else{const h=Math.max(s.near,Zr.distanceToPoint(Tn.origin));l=nh(s,h,c.resolution)}if(Zr.radius+=l,Tn.intersectsSphere(Zr)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Kr.copy(a.boundingBox).applyMatrix4(o);let u;if(n)u=Si*.5;else{const h=Math.max(s.near,Kr.distanceToPoint(Tn.origin));u=nh(s,h,c.resolution)}Kr.expandByScalar(u),Tn.intersectsBox(Kr)!==!1&&(n?xg(this,t):yg(this,s,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(ga),this.material.uniforms.resolution.value.set(ga.z,ga.w))}}class rd extends sd{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,n=new Float32Array(2*t);for(let s=0;s<t;s+=3)n[2*s]=e[s],n[2*s+1]=e[s+1],n[2*s+2]=e[s+2],n[2*s+3]=e[s+3],n[2*s+4]=e[s+4],n[2*s+5]=e[s+5];return super.setPositions(n),this}setColors(e){const t=e.length-3,n=new Float32Array(2*t);for(let s=0;s<t;s+=3)n[2*s]=e[s],n[2*s+1]=e[s+1],n[2*s+2]=e[s+2],n[2*s+3]=e[s+3],n[2*s+4]=e[s+4],n[2*s+5]=e[s+5];return super.setColors(n),this}setFromPoints(e){const t=e.length-1,n=new Float32Array(6*t);for(let s=0;s<t;s++)n[6*s]=e[s].x,n[6*s+1]=e[s].y,n[6*s+2]=e[s].z||0,n[6*s+3]=e[s+1].x,n[6*s+4]=e[s+1].y,n[6*s+5]=e[s+1].z||0;return super.setPositions(n),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class Mg extends vg{constructor(e=new rd,t=new tl({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}function ih(i,e){if(e===Af)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===fc||e===Ch){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===fc)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class nl extends bs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ag(t)}),this.register(function(t){return new wg(t)}),this.register(function(t){return new Og(t)}),this.register(function(t){return new Fg(t)}),this.register(function(t){return new Bg(t)}),this.register(function(t){return new Cg(t)}),this.register(function(t){return new Pg(t)}),this.register(function(t){return new Lg(t)}),this.register(function(t){return new Dg(t)}),this.register(function(t){return new bg(t)}),this.register(function(t){return new Ig(t)}),this.register(function(t){return new Rg(t)}),this.register(function(t){return new Ug(t)}),this.register(function(t){return new Ng(t)}),this.register(function(t){return new Eg(t)}),this.register(function(t){return new zg(t)}),this.register(function(t){return new Hg(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Ys.extractUrlBase(e);o=Ys.resolveURL(l,this.path)}else o=Ys.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Kh(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===od){try{o[ke.KHR_BINARY_GLTF]=new kg(e)}catch(h){s&&s(h);return}r=JSON.parse(o[ke.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new e4(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case ke.KHR_MATERIALS_UNLIT:o[h]=new Tg;break;case ke.KHR_DRACO_MESH_COMPRESSION:o[h]=new Vg(r,this.dracoLoader);break;case ke.KHR_TEXTURE_TRANSFORM:o[h]=new Gg;break;case ke.KHR_MESH_QUANTIZATION:o[h]=new Wg;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function Sg(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Eg{constructor(e){this.parser=e,this.name=ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new Me(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Vt);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Zc(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new i1(u),l.distance=h;break;case"spot":l=new t1(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Sn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class Tg{constructor(){this.name=ke.KHR_MATERIALS_UNLIT}getMaterialType(){return si}extendParams(e,t,n){const s=[];e.color=new Me(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Vt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,gt))}return Promise.all(s)}}class bg{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Ag{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new xe(a,a)}return Promise.all(r)}}class wg{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Rg{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class Cg{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Me(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Vt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,gt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class Pg{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class Lg{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Me().setRGB(a[0],a[1],a[2],Vt),Promise.all(r)}}class Dg{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Ig{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Me().setRGB(a[0],a[1],a[2],Vt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,gt)),Promise.all(r)}}class Ng{constructor(e){this.parser=e,this.name=ke.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class Ug{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class Og{constructor(e){this.parser=e,this.name=ke.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class Fg{constructor(e){this.parser=e,this.name=ke.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class Bg{constructor(e){this.parser=e,this.name=ke.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class zg{constructor(e){this.name=ke.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}}class Hg{constructor(e){this.name=ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==tn.TRIANGLES&&l.mode!==tn.TRIANGLE_STRIP&&l.mode!==tn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(const g of h){const _=new Ie,m=new E,p=new wn,A=new E(1,1,1),T=new Cp(g.geometry,g.material,d);for(let v=0;v<d;v++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,v),c.SCALE&&A.fromBufferAttribute(c.SCALE,v),T.setMatrixAt(v,_.compose(m,p,A));for(const v in c)if(v==="_COLOR_0"){const R=c[v];T.instanceColor=new gc(R.array,R.itemSize,R.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,c[v]);rt.prototype.copy.call(T,g),this.parser.assignFinalMaterial(T),f.push(T)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const od="glTF",ks=12,sh={JSON:1313821514,BIN:5130562};class kg{constructor(e){this.name=ke.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ks),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==od)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-ks,r=new DataView(e,ks);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===sh.JSON){const l=new Uint8Array(e,ks+o,a);this.content=n.decode(l)}else if(c===sh.BIN){const l=ks+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Vg{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=Sc[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Sc[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],f=us[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(const g in f.attributes){const _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}h(f)},a,l,Vt,d)})})}}class Gg{constructor(){this.name=ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Wg{constructor(){this.name=ke.KHR_MESH_QUANTIZATION}}class ad extends hr{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,g=e*l,_=g-l,m=-2*f+3*d,p=f-d,A=1-m,T=p-d+h;for(let v=0;v!==a;v++){const R=o[_+v+a],C=o[_+v+c]*u,P=o[g+v+a],U=o[g+v]*u;r[v]=A*R+T*C+m*P+p*U}return r}}const Xg=new wn;class qg extends ad{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return Xg.fromArray(r).normalize().toArray(r),r}}const tn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},us={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},rh={9728:Ht,9729:$t,9984:Mh,9985:Qr,9986:Gs,9987:Hn},oh={33071:ii,33648:oo,10497:gs},ya={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Sc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ei={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Yg={CUBICSPLINE:void 0,LINEAR:sr,STEP:ir},va={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function jg(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ur({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:qn})),i.DefaultMaterial}function _i(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Sn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Kg(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(s){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Zg(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function $g(i){let e;const t=i.extensions&&i.extensions[ke.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ma(t.attributes):e=i.indices+":"+Ma(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Ma(i.targets[n]);return e}function Ma(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Ec(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Jg(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Qg=new Ie;class e4{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Sg,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Zh(this.options.manager):this.textureLoader=new o1(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Kh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return _i(r,a,s),Sn(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())r(u,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ke.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(Ys.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=ya[s.type],a=us[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new kt(l,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=ya[s.type],l=us[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(f&&f!==h){const p=Math.floor(d/f),A="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let T=t.cache.get(A);T||(_=new l(a,p*f,s.count*f/u),T=new Gc(_,f/u),t.cache.add(A,T)),m=new pn(T,c,d%f/u,g)}else a===null?_=new l(s.count*c):_=new l(a,d,s.count*c),m=new kt(_,c,g);if(s.sparse!==void 0){const p=ya.SCALAR,A=us[s.sparse.indices.componentType],T=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,R=new A(o[1],T,s.sparse.count*p),C=new l(o[2],v,s.sparse.count*c);a!==null&&(m=new kt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let P=0,U=R.length;P<U;P++){const S=R[P];if(m.setX(S,C[P*c]),c>=2&&m.setY(S,C[P*c+1]),c>=3&&m.setZ(S,C[P*c+2]),c>=4&&m.setW(S,C[P*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=rh[d.magFilter]||$t,u.minFilter=rh[d.minFilter]||Hn,u.wrapS=oh[d.wrapS]||gs,u.wrapT=oh[d.wrapT]||gs,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Ht&&u.minFilter!==$t,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Mt(_);m.needsUpdate=!0,d(m)}),t.load(Ys.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),Sn(h,o),h.userData.mimeType=o.mimeType||Jg(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ke.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ke.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[ke.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new lr,_n.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new xo,_n.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ur}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[ke.KHR_MATERIALS_UNLIT]){const h=s[ke.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Me(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Vt),a.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,gt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=En);const u=r.alphaMode||va.OPAQUE;if(u===va.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===va.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==si&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new xe(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==si&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==si){const h=r.emissiveFactor;a.emissive=new Me().setRGB(h[0],h[1],h[2],Vt)}return r.emissiveTexture!==void 0&&o!==si&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,gt)),Promise.all(l).then(function(){const h=new o(a);return r.name&&(h.name=r.name),Sn(h,r),t.associations.set(h,{materials:e}),r.extensions&&_i(s,h,r),h})}createUniqueName(e){const t=Ze.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return ah(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=$g(l),h=s[u];if(h)o.push(h.promise);else{let d;l.extensions&&l.extensions[ke.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=ah(new _t,l,t),s[u]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?jg(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const _=u[f],m=o[f];let p;const A=l[f];if(m.mode===tn.TRIANGLES||m.mode===tn.TRIANGLE_STRIP||m.mode===tn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Ap(_,A):new It(_,A),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===tn.TRIANGLE_STRIP?p.geometry=ih(p.geometry,Ch):m.mode===tn.TRIANGLE_FAN&&(p.geometry=ih(p.geometry,fc));else if(m.mode===tn.LINES)p=new Ip(_,A);else if(m.mode===tn.LINE_STRIP)p=new yo(_,A);else if(m.mode===tn.LINE_LOOP)p=new qc(_,A);else if(m.mode===tn.POINTS)p=new Ii(_,A);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Zg(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Sn(p,r),m.extensions&&_i(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&_i(s,h[0],r),h[0];const d=new ri;r.extensions&&_i(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Bt(Ci.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Kc(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Sn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const d=new Ie;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Wc(a,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){const f=s.channels[h],g=s.samplers[f.sampler],_=f.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,A=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",A)),l.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let T=0,v=d.length;T<v;T++){const R=d[T],C=f[T],P=g[T],U=_[T],S=m[T];if(R===void 0)continue;R.updateMatrix&&R.updateMatrix();const M=n._createAnimationTracks(R,C,P,U,S);if(M)for(let D=0;D<M.length;D++)p.push(M[D])}const A=new Yp(r,void 0,p);return Sn(A,s),A})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Qg)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new kh:l.length>1?u=new ri:l.length===1?u=l[0]:u=new rt,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Sn(u,r),r.extensions&&_i(n,u,r),r.matrix!==void 0){const h=new Ie;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new ri;n.name&&(r.name=s.createUniqueName(n.name)),Sn(r,n),n.extensions&&_i(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[d,f]of s.associations)(d instanceof _n||d instanceof Mt)&&h.set(d,f);return u.traverse(d=>{const f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,c=[];ei[r.path]===ei.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(ei[r.path]){case ei.weights:l=ys;break;case ei.rotation:l=vs;break;case ei.translation:case ei.scale:l=Ms;break;default:n.itemSize===1?l=ys:l=Ms;break}const u=s.interpolation!==void 0?Yg[s.interpolation]:sr,h=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+ei[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ec(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof vs?qg:ad;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function t4(i,e,t){const n=e.attributes,s=new Gt;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new E(c[0],c[1],c[2]),new E(l[0],l[1],l[2])),a.normalized){const u=Ec(us[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new E,c=new E;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=Ec(us[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new an;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function ah(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(const o in n){const a=Sc[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Xe.workingColorSpace!==Vt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Xe.workingColorSpace}" not supported.`),Sn(i,e),t4(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Kg(i,e.targets,t):i})}function n4(i){return i}function i4(i){if(i==null)return n4;var e,t,n=i.scale[0],s=i.scale[1],r=i.translate[0],o=i.translate[1];return function(a,c){c||(e=t=0);var l=2,u=a.length,h=new Array(u);for(h[0]=(e+=a[0])*n+r,h[1]=(t+=a[1])*s+o;l<u;)h[l]=a[l],++l;return h}}function s4(i,e){for(var t,n=i.length,s=n-e;s<--n;)t=i[s],i[s++]=i[n],i[n]=t}function r4(i,e){return typeof e=="string"&&(e=i.objects[e]),e.type==="GeometryCollection"?{type:"FeatureCollection",features:e.geometries.map(function(t){return ch(i,t)})}:ch(i,e)}function ch(i,e){var t=e.id,n=e.bbox,s=e.properties==null?{}:e.properties,r=o4(i,e);return t==null&&n==null?{type:"Feature",properties:s,geometry:r}:n==null?{type:"Feature",id:t,properties:s,geometry:r}:{type:"Feature",id:t,bbox:n,properties:s,geometry:r}}function o4(i,e){var t=i4(i.transform),n=i.arcs;function s(u,h){h.length&&h.pop();for(var d=n[u<0?~u:u],f=0,g=d.length;f<g;++f)h.push(t(d[f],f));u<0&&s4(h,g)}function r(u){return t(u)}function o(u){for(var h=[],d=0,f=u.length;d<f;++d)s(u[d],h);return h.length<2&&h.push(h[0]),h}function a(u){for(var h=o(u);h.length<4;)h.push(h[0]);return h}function c(u){return u.map(a)}function l(u){var h=u.type,d;switch(h){case"GeometryCollection":return{type:h,geometries:u.geometries.map(l)};case"Point":d=r(u.coordinates);break;case"MultiPoint":d=u.coordinates.map(r);break;case"LineString":d=o(u.arcs);break;case"MultiLineString":d=u.arcs.map(o);break;case"Polygon":d=c(u.arcs);break;case"MultiPolygon":d=u.arcs.map(c);break;default:return null}return{type:h,coordinates:d}}return l(e)}const a4=JSON.parse(`{"countries":{"type":"GeometryCollection","geometries":[{"type":"MultiPolygon","arcs":[[[0]],[[1]]],"id":"242","properties":{"name":"Fiji"}},{"type":"Polygon","arcs":[[2,3,4,5,6,7,8,9,10]],"id":"834","properties":{"name":"Tanzania"}},{"type":"Polygon","arcs":[[11,12,13,14]],"id":"732","properties":{"name":"W. Sahara"}},{"type":"MultiPolygon","arcs":[[[15,16,17,18]],[[19]],[[20]],[[21]],[[22]],[[23]],[[24]],[[25]],[[26]],[[27]],[[28]],[[29]],[[30]],[[31]],[[32]],[[33]],[[34]],[[35]],[[36]],[[37]],[[38]],[[39]],[[40]],[[41]],[[42]],[[43]],[[44]],[[45]],[[46]],[[47]]],"id":"124","properties":{"name":"Canada"}},{"type":"MultiPolygon","arcs":[[[-19,48,49,50]],[[51]],[[52]],[[53]],[[54]],[[55]],[[56]],[[57]],[[-17,58]],[[59]]],"id":"840","properties":{"name":"United States of America"}},{"type":"Polygon","arcs":[[60,61,62,63,64,65]],"id":"398","properties":{"name":"Kazakhstan"}},{"type":"Polygon","arcs":[[-63,66,67,68,69]],"id":"860","properties":{"name":"Uzbekistan"}},{"type":"MultiPolygon","arcs":[[[70,71]],[[72]],[[73]],[[74]]],"id":"598","properties":{"name":"Papua New Guinea"}},{"type":"MultiPolygon","arcs":[[[-72,75]],[[76,77]],[[78]],[[79,80]],[[81]],[[82]],[[83]],[[84]],[[85]],[[86]],[[87]],[[88]],[[89]]],"id":"360","properties":{"name":"Indonesia"}},{"type":"MultiPolygon","arcs":[[[90,91]],[[92,93,94,95,96,97]]],"id":"032","properties":{"name":"Argentina"}},{"type":"MultiPolygon","arcs":[[[-92,98]],[[99,-95,100,101]]],"id":"152","properties":{"name":"Chile"}},{"type":"Polygon","arcs":[[-8,102,103,104,105,106,107,108,109,110,111]],"id":"180","properties":{"name":"Dem. Rep. Congo"}},{"type":"Polygon","arcs":[[112,113,114,115]],"id":"706","properties":{"name":"Somalia"}},{"type":"Polygon","arcs":[[-3,116,117,118,-113,119]],"id":"404","properties":{"name":"Kenya"}},{"type":"Polygon","arcs":[[120,121,122,123,124,125,126,127]],"id":"729","properties":{"name":"Sudan"}},{"type":"Polygon","arcs":[[-122,128,129,130,131]],"id":"148","properties":{"name":"Chad"}},{"type":"Polygon","arcs":[[132,133]],"id":"332","properties":{"name":"Haiti"}},{"type":"Polygon","arcs":[[-133,134]],"id":"214","properties":{"name":"Dominican Rep."}},{"type":"MultiPolygon","arcs":[[[135]],[[136]],[[137]],[[138]],[[139]],[[140]],[[141,142,143]],[[144]],[[145]],[[146,147,148,149,-66,150,151,152,153,154,155,156,157,158,159,160,161]],[[162]],[[163,164]]],"id":"643","properties":{"name":"Russia"}},{"type":"MultiPolygon","arcs":[[[165]],[[166]],[[167]]],"id":"044","properties":{"name":"Bahamas"}},{"type":"Polygon","arcs":[[168]],"id":"238","properties":{"name":"Falkland Is."}},{"type":"MultiPolygon","arcs":[[[169]],[[-161,170,171,172]],[[173]],[[174]]],"id":"578","properties":{"name":"Norway"}},{"type":"Polygon","arcs":[[175]],"id":"304","properties":{"name":"Greenland"}},{"type":"Polygon","arcs":[[176]],"id":"260","properties":{"name":"Fr. S. Antarctic Lands"}},{"type":"Polygon","arcs":[[177,-77]],"id":"626","properties":{"name":"Timor-Leste"}},{"type":"Polygon","arcs":[[178,179,180,181,182,183,184],[185]],"id":"710","properties":{"name":"South Africa"}},{"type":"Polygon","arcs":[[-186]],"id":"426","properties":{"name":"Lesotho"}},{"type":"Polygon","arcs":[[-50,186,187,188,189]],"id":"484","properties":{"name":"Mexico"}},{"type":"Polygon","arcs":[[190,191,-93]],"id":"858","properties":{"name":"Uruguay"}},{"type":"Polygon","arcs":[[-191,-98,192,193,194,195,196,197,198,199,200]],"id":"076","properties":{"name":"Brazil"}},{"type":"Polygon","arcs":[[-194,201,-96,-100,202]],"id":"068","properties":{"name":"Bolivia"}},{"type":"Polygon","arcs":[[-195,-203,-102,203,204,205]],"id":"604","properties":{"name":"Peru"}},{"type":"Polygon","arcs":[[-196,-206,206,207,208,209,210]],"id":"170","properties":{"name":"Colombia"}},{"type":"Polygon","arcs":[[-209,211,212,213]],"id":"591","properties":{"name":"Panama"}},{"type":"Polygon","arcs":[[-213,214,215,216]],"id":"188","properties":{"name":"Costa Rica"}},{"type":"Polygon","arcs":[[-216,217,218,219]],"id":"558","properties":{"name":"Nicaragua"}},{"type":"Polygon","arcs":[[-219,220,221,222,223]],"id":"340","properties":{"name":"Honduras"}},{"type":"Polygon","arcs":[[-222,224,225]],"id":"222","properties":{"name":"El Salvador"}},{"type":"Polygon","arcs":[[-189,226,227,-223,-226,228]],"id":"320","properties":{"name":"Guatemala"}},{"type":"Polygon","arcs":[[-188,229,-227]],"id":"084","properties":{"name":"Belize"}},{"type":"Polygon","arcs":[[-197,-211,230,231]],"id":"862","properties":{"name":"Venezuela"}},{"type":"Polygon","arcs":[[-198,-232,232,233]],"id":"328","properties":{"name":"Guyana"}},{"type":"Polygon","arcs":[[-199,-234,234,235]],"id":"740","properties":{"name":"Suriname"}},{"type":"MultiPolygon","arcs":[[[-200,-236,236]],[[237,238,239,240,241,242,243,244]],[[245]]],"id":"250","properties":{"name":"France"}},{"type":"Polygon","arcs":[[-205,246,-207]],"id":"218","properties":{"name":"Ecuador"}},{"type":"Polygon","arcs":[[247]],"id":"630","properties":{"name":"Puerto Rico"}},{"type":"Polygon","arcs":[[248]],"id":"388","properties":{"name":"Jamaica"}},{"type":"Polygon","arcs":[[249]],"id":"192","properties":{"name":"Cuba"}},{"type":"Polygon","arcs":[[-181,250,251,252]],"id":"716","properties":{"name":"Zimbabwe"}},{"type":"Polygon","arcs":[[-180,253,254,-251]],"id":"072","properties":{"name":"Botswana"}},{"type":"Polygon","arcs":[[-179,255,256,257,-254]],"id":"516","properties":{"name":"Namibia"}},{"type":"Polygon","arcs":[[258,259,260,261,262,263,264]],"id":"686","properties":{"name":"Senegal"}},{"type":"Polygon","arcs":[[-261,265,266,267,268,269,270]],"id":"466","properties":{"name":"Mali"}},{"type":"Polygon","arcs":[[-13,271,-266,-260,272]],"id":"478","properties":{"name":"Mauritania"}},{"type":"Polygon","arcs":[[273,274,275,276,277]],"id":"204","properties":{"name":"Benin"}},{"type":"Polygon","arcs":[[-131,278,279,-277,280,-268,281,282]],"id":"562","properties":{"name":"Niger"}},{"type":"Polygon","arcs":[[-278,-280,283,284]],"id":"566","properties":{"name":"Nigeria"}},{"type":"Polygon","arcs":[[-130,285,286,287,288,289,-284,-279]],"id":"120","properties":{"name":"Cameroon"}},{"type":"Polygon","arcs":[[-275,290,291,292]],"id":"768","properties":{"name":"Togo"}},{"type":"Polygon","arcs":[[-292,293,294,295]],"id":"288","properties":{"name":"Ghana"}},{"type":"Polygon","arcs":[[-270,296,-295,297,298,299]],"id":"384","properties":{"name":"Côte d'Ivoire"}},{"type":"Polygon","arcs":[[-262,-271,-300,300,301,302,303]],"id":"324","properties":{"name":"Guinea"}},{"type":"Polygon","arcs":[[-263,-304,304]],"id":"624","properties":{"name":"Guinea-Bissau"}},{"type":"Polygon","arcs":[[-299,305,306,-301]],"id":"430","properties":{"name":"Liberia"}},{"type":"Polygon","arcs":[[-302,-307,307]],"id":"694","properties":{"name":"Sierra Leone"}},{"type":"Polygon","arcs":[[-269,-281,-276,-293,-296,-297]],"id":"854","properties":{"name":"Burkina Faso"}},{"type":"Polygon","arcs":[[-108,308,-286,-129,-121,309]],"id":"140","properties":{"name":"Central African Rep."}},{"type":"Polygon","arcs":[[-107,310,311,312,-287,-309]],"id":"178","properties":{"name":"Congo"}},{"type":"Polygon","arcs":[[-288,-313,313,314]],"id":"266","properties":{"name":"Gabon"}},{"type":"Polygon","arcs":[[-289,-315,315]],"id":"226","properties":{"name":"Eq. Guinea"}},{"type":"Polygon","arcs":[[-7,316,317,-252,-255,-258,318,-103]],"id":"894","properties":{"name":"Zambia"}},{"type":"Polygon","arcs":[[-6,319,-317]],"id":"454","properties":{"name":"Malawi"}},{"type":"Polygon","arcs":[[-5,320,-184,321,-182,-253,-318,-320]],"id":"508","properties":{"name":"Mozambique"}},{"type":"Polygon","arcs":[[-183,-322]],"id":"748","properties":{"name":"eSwatini"}},{"type":"MultiPolygon","arcs":[[[-106,322,-311]],[[-104,-319,-257,323]]],"id":"024","properties":{"name":"Angola"}},{"type":"Polygon","arcs":[[-9,-112,324]],"id":"108","properties":{"name":"Burundi"}},{"type":"Polygon","arcs":[[325,326,327,328,329,330,331]],"id":"376","properties":{"name":"Israel"}},{"type":"Polygon","arcs":[[-331,332,333]],"id":"422","properties":{"name":"Lebanon"}},{"type":"Polygon","arcs":[[334]],"id":"450","properties":{"name":"Madagascar"}},{"type":"Polygon","arcs":[[-327,335]],"id":"275","properties":{"name":"Palestine"}},{"type":"Polygon","arcs":[[-265,336]],"id":"270","properties":{"name":"Gambia"}},{"type":"Polygon","arcs":[[337,338,339]],"id":"788","properties":{"name":"Tunisia"}},{"type":"Polygon","arcs":[[-12,340,341,-338,342,-282,-267,-272]],"id":"012","properties":{"name":"Algeria"}},{"type":"Polygon","arcs":[[-326,343,344,345,346,-328,-336]],"id":"400","properties":{"name":"Jordan"}},{"type":"Polygon","arcs":[[347,348,349,350,351]],"id":"784","properties":{"name":"United Arab Emirates"}},{"type":"Polygon","arcs":[[352,353]],"id":"634","properties":{"name":"Qatar"}},{"type":"Polygon","arcs":[[354,355,356]],"id":"414","properties":{"name":"Kuwait"}},{"type":"Polygon","arcs":[[-345,357,358,359,360,-357,361]],"id":"368","properties":{"name":"Iraq"}},{"type":"MultiPolygon","arcs":[[[-351,362,363,364]],[[-349,365]]],"id":"512","properties":{"name":"Oman"}},{"type":"MultiPolygon","arcs":[[[366]],[[367]]],"id":"548","properties":{"name":"Vanuatu"}},{"type":"Polygon","arcs":[[368,369,370,371]],"id":"116","properties":{"name":"Cambodia"}},{"type":"Polygon","arcs":[[-369,372,373,374,375,376]],"id":"764","properties":{"name":"Thailand"}},{"type":"Polygon","arcs":[[-370,-377,377,378,379]],"id":"418","properties":{"name":"Laos"}},{"type":"Polygon","arcs":[[-376,380,381,382,383,-378]],"id":"104","properties":{"name":"Myanmar"}},{"type":"Polygon","arcs":[[-371,-380,384,385]],"id":"704","properties":{"name":"Vietnam"}},{"type":"MultiPolygon","arcs":[[[386,386,386]],[[-147,387,388,389,390]]],"id":"408","properties":{"name":"North Korea"}},{"type":"Polygon","arcs":[[-389,391]],"id":"410","properties":{"name":"South Korea"}},{"type":"Polygon","arcs":[[-149,392]],"id":"496","properties":{"name":"Mongolia"}},{"type":"Polygon","arcs":[[-383,393,394,395,396,397,398,399,400]],"id":"356","properties":{"name":"India"}},{"type":"Polygon","arcs":[[-382,401,-394]],"id":"050","properties":{"name":"Bangladesh"}},{"type":"Polygon","arcs":[[-400,402]],"id":"064","properties":{"name":"Bhutan"}},{"type":"Polygon","arcs":[[-398,403]],"id":"524","properties":{"name":"Nepal"}},{"type":"Polygon","arcs":[[-396,404,405,406,407]],"id":"586","properties":{"name":"Pakistan"}},{"type":"Polygon","arcs":[[-69,408,409,-407,410,411]],"id":"004","properties":{"name":"Afghanistan"}},{"type":"Polygon","arcs":[[-68,412,413,-409]],"id":"762","properties":{"name":"Tajikistan"}},{"type":"Polygon","arcs":[[-62,414,-413,-67]],"id":"417","properties":{"name":"Kyrgyzstan"}},{"type":"Polygon","arcs":[[-64,-70,-412,415,416]],"id":"795","properties":{"name":"Turkmenistan"}},{"type":"Polygon","arcs":[[-360,417,418,419,420,421,-416,-411,-406,422]],"id":"364","properties":{"name":"Iran"}},{"type":"Polygon","arcs":[[-332,-334,423,424,-358,-344]],"id":"760","properties":{"name":"Syria"}},{"type":"Polygon","arcs":[[-420,425,426,427,428]],"id":"051","properties":{"name":"Armenia"}},{"type":"Polygon","arcs":[[-172,429,430]],"id":"752","properties":{"name":"Sweden"}},{"type":"Polygon","arcs":[[-156,431,432,433,434]],"id":"112","properties":{"name":"Belarus"}},{"type":"Polygon","arcs":[[-155,435,-164,436,437,438,439,440,441,442,-432]],"id":"804","properties":{"name":"Ukraine"}},{"type":"Polygon","arcs":[[-433,-443,443,444,445,446,-142,447]],"id":"616","properties":{"name":"Poland"}},{"type":"Polygon","arcs":[[448,449,450,451,452,453,454]],"id":"040","properties":{"name":"Austria"}},{"type":"Polygon","arcs":[[-441,455,456,457,458,-449,459]],"id":"348","properties":{"name":"Hungary"}},{"type":"Polygon","arcs":[[-439,460]],"id":"498","properties":{"name":"Moldova"}},{"type":"Polygon","arcs":[[-438,461,462,463,-456,-440,-461]],"id":"642","properties":{"name":"Romania"}},{"type":"Polygon","arcs":[[-434,-448,-144,464,465]],"id":"440","properties":{"name":"Lithuania"}},{"type":"Polygon","arcs":[[-157,-435,-466,466,467]],"id":"428","properties":{"name":"Latvia"}},{"type":"Polygon","arcs":[[-158,-468,468]],"id":"233","properties":{"name":"Estonia"}},{"type":"Polygon","arcs":[[-446,469,-453,470,-238,471,472,473,474,475,476]],"id":"276","properties":{"name":"Germany"}},{"type":"Polygon","arcs":[[-463,477,478,479,480,481]],"id":"100","properties":{"name":"Bulgaria"}},{"type":"MultiPolygon","arcs":[[[482]],[[-480,483,484,485,486]]],"id":"300","properties":{"name":"Greece"}},{"type":"MultiPolygon","arcs":[[[-359,-425,487,488,-427,-418]],[[-479,489,-484]]],"id":"792","properties":{"name":"Turkey"}},{"type":"Polygon","arcs":[[-486,490,491,492,493]],"id":"008","properties":{"name":"Albania"}},{"type":"Polygon","arcs":[[-458,494,495,496,497,498]],"id":"191","properties":{"name":"Croatia"}},{"type":"Polygon","arcs":[[-452,499,-239,-471]],"id":"756","properties":{"name":"Switzerland"}},{"type":"Polygon","arcs":[[-472,-245,500]],"id":"442","properties":{"name":"Luxembourg"}},{"type":"Polygon","arcs":[[-473,-501,-244,501,502]],"id":"056","properties":{"name":"Belgium"}},{"type":"Polygon","arcs":[[-474,-503,503]],"id":"528","properties":{"name":"Netherlands"}},{"type":"Polygon","arcs":[[504,505]],"id":"620","properties":{"name":"Portugal"}},{"type":"Polygon","arcs":[[-505,506,-242,507]],"id":"724","properties":{"name":"Spain"}},{"type":"Polygon","arcs":[[508,509]],"id":"372","properties":{"name":"Ireland"}},{"type":"Polygon","arcs":[[510]],"id":"540","properties":{"name":"New Caledonia"}},{"type":"MultiPolygon","arcs":[[[511]],[[512]],[[513]],[[514]],[[515]]],"id":"090","properties":{"name":"Solomon Is."}},{"type":"MultiPolygon","arcs":[[[516]],[[517]]],"id":"554","properties":{"name":"New Zealand"}},{"type":"MultiPolygon","arcs":[[[518]],[[519]]],"id":"036","properties":{"name":"Australia"}},{"type":"Polygon","arcs":[[520]],"id":"144","properties":{"name":"Sri Lanka"}},{"type":"MultiPolygon","arcs":[[[521]],[[-61,-150,-393,-148,-391,522,-385,-379,-384,-401,-403,-399,-404,-397,-408,-410,-414,-415]]],"id":"156","properties":{"name":"China"}},{"type":"Polygon","arcs":[[523]],"id":"158","properties":{"name":"Taiwan"}},{"type":"MultiPolygon","arcs":[[[-451,524,525,-240,-500]],[[526]],[[527]]],"id":"380","properties":{"name":"Italy"}},{"type":"MultiPolygon","arcs":[[[-476,528]],[[529]]],"id":"208","properties":{"name":"Denmark"}},{"type":"MultiPolygon","arcs":[[[-510,530]],[[531]]],"id":"826","properties":{"name":"United Kingdom"}},{"type":"Polygon","arcs":[[532]],"id":"352","properties":{"name":"Iceland"}},{"type":"MultiPolygon","arcs":[[[-152,533,-421,-429,534]],[[-419,-426]]],"id":"031","properties":{"name":"Azerbaijan"}},{"type":"Polygon","arcs":[[-153,-535,-428,-489,535]],"id":"268","properties":{"name":"Georgia"}},{"type":"MultiPolygon","arcs":[[[536]],[[537]],[[538]],[[539]],[[540]],[[541]],[[542]]],"id":"608","properties":{"name":"Philippines"}},{"type":"MultiPolygon","arcs":[[[-374,543]],[[-81,544,545,546]]],"id":"458","properties":{"name":"Malaysia"}},{"type":"Polygon","arcs":[[-546,547]],"id":"096","properties":{"name":"Brunei"}},{"type":"Polygon","arcs":[[-450,-459,-499,548,-525]],"id":"705","properties":{"name":"Slovenia"}},{"type":"Polygon","arcs":[[-160,549,-430,-171]],"id":"246","properties":{"name":"Finland"}},{"type":"Polygon","arcs":[[-442,-460,-455,550,-444]],"id":"703","properties":{"name":"Slovakia"}},{"type":"Polygon","arcs":[[-445,-551,-454,-470]],"id":"203","properties":{"name":"Czechia"}},{"type":"Polygon","arcs":[[-126,551,552,553]],"id":"232","properties":{"name":"Eritrea"}},{"type":"MultiPolygon","arcs":[[[554]],[[555]],[[556]]],"id":"392","properties":{"name":"Japan"}},{"type":"Polygon","arcs":[[-193,-97,-202]],"id":"600","properties":{"name":"Paraguay"}},{"type":"Polygon","arcs":[[-364,557,558]],"id":"887","properties":{"name":"Yemen"}},{"type":"Polygon","arcs":[[-346,-362,-356,559,-354,560,-352,-365,-559,561]],"id":"682","properties":{"name":"Saudi Arabia"}},{"type":"MultiPolygon","arcs":[[[562]],[[563]],[[564]],[[565]],[[566]],[[567]],[[568]],[[569]]],"id":"010","properties":{"name":"Antarctica"}},{"type":"Polygon","arcs":[[570,571]],"properties":{"name":"N. Cyprus"}},{"type":"Polygon","arcs":[[-572,572]],"id":"196","properties":{"name":"Cyprus"}},{"type":"Polygon","arcs":[[-341,-15,573]],"id":"504","properties":{"name":"Morocco"}},{"type":"Polygon","arcs":[[-124,574,575,-329,576]],"id":"818","properties":{"name":"Egypt"}},{"type":"Polygon","arcs":[[-123,-132,-283,-343,-340,577,-575]],"id":"434","properties":{"name":"Libya"}},{"type":"Polygon","arcs":[[-114,-119,578,-127,-554,579,580]],"id":"231","properties":{"name":"Ethiopia"}},{"type":"Polygon","arcs":[[-553,581,582,-580]],"id":"262","properties":{"name":"Djibouti"}},{"type":"Polygon","arcs":[[-115,-581,-583,583]],"properties":{"name":"Somaliland"}},{"type":"Polygon","arcs":[[-11,584,-110,585,-117]],"id":"800","properties":{"name":"Uganda"}},{"type":"Polygon","arcs":[[-10,-325,-111,-585]],"id":"646","properties":{"name":"Rwanda"}},{"type":"Polygon","arcs":[[-496,586,587]],"id":"070","properties":{"name":"Bosnia and Herz."}},{"type":"Polygon","arcs":[[-481,-487,-494,588,589]],"id":"807","properties":{"name":"Macedonia"}},{"type":"Polygon","arcs":[[-457,-464,-482,-590,590,591,-587,-495]],"id":"688","properties":{"name":"Serbia"}},{"type":"Polygon","arcs":[[-492,592,-497,-588,-592,593]],"id":"499","properties":{"name":"Montenegro"}},{"type":"Polygon","arcs":[[-493,-594,-591,-589]],"properties":{"name":"Kosovo"}},{"type":"Polygon","arcs":[[594]],"id":"780","properties":{"name":"Trinidad and Tobago"}},{"type":"Polygon","arcs":[[-109,-310,-128,-579,-118,-586]],"id":"728","properties":{"name":"S. Sudan"}}]},"land":{"type":"GeometryCollection","geometries":[{"type":"MultiPolygon","arcs":[[[0]],[[1]],[[3,320,184,255,323,104,322,311,313,315,289,284,273,290,293,297,305,307,302,304,263,336,258,272,13,573,341,338,577,575,329,332,423,487,535,153,435,164,436,461,477,489,484,490,592,497,548,525,240,507,505,506,242,501,503,474,528,476,446,142,464,466,468,158,549,430,172,161,387,391,389,522,385,371,372,543,374,380,401,394,404,422,360,354,559,352,560,347,365,349,362,557,561,346,576,124,551,581,583,115,119],[421,416,64,150,533]],[[17,48,186,229,227,223,219,216,213,209,230,232,234,236,200,191,93,100,203,246,207,211,214,217,220,224,228,189,50,15,58]],[[19]],[[20]],[[21]],[[22]],[[23]],[[24]],[[25]],[[26]],[[27]],[[28]],[[29]],[[30]],[[31]],[[32]],[[33]],[[34]],[[35]],[[36]],[[37]],[[38]],[[39]],[[40]],[[41]],[[42]],[[43]],[[44]],[[45]],[[46]],[[47]],[[51]],[[52]],[[53]],[[54]],[[55]],[[56]],[[57]],[[59]],[[70,75]],[[72]],[[73]],[[74]],[[77,177]],[[78]],[[546,79,544,547]],[[81]],[[82]],[[83]],[[84]],[[85]],[[86]],[[87]],[[88]],[[89]],[[90,98]],[[133,134]],[[135]],[[136]],[[137]],[[138]],[[139]],[[140]],[[144]],[[145]],[[162]],[[165]],[[166]],[[167]],[[168]],[[169]],[[173]],[[174]],[[175]],[[176]],[[245]],[[247]],[[248]],[[249]],[[334]],[[366]],[[367]],[[482]],[[508,530]],[[510]],[[511]],[[512]],[[513]],[[514]],[[515]],[[516]],[[517]],[[518]],[[519]],[[520]],[[521]],[[523]],[[526]],[[527]],[[529]],[[531]],[[532]],[[536]],[[537]],[[538]],[[539]],[[540]],[[541]],[[542]],[[554]],[[555]],[[556]],[[562]],[[563]],[[564]],[[565]],[[566]],[[567]],[[568]],[[569]],[[570,572]],[[594]]]}]}}`),c4=JSON.parse("[[[99478,40237],[69,98],[96,-171],[-46,-308],[-172,-81],[-153,73],[-27,260],[107,203],[126,-74]],[[0,41087],[57,27],[-34,-284],[-23,-32],[99822,-145],[-177,-124],[-36,220],[139,121],[88,33],[163,184],[-99999,0]],[[59417,50018],[47,-65],[1007,-1203],[19,-343],[399,-590]],[[60889,47817],[-128,-728],[16,-335],[178,-216],[8,-153],[-76,-357],[16,-180],[-18,-282],[97,-370],[115,-583],[101,-129]],[[61198,44484],[-221,-342],[-303,-230],[-167,10],[-99,-177],[-193,-16],[-73,-74],[-334,166],[-209,-48]],[[59599,43773],[-77,804],[-95,275],[-55,164],[-273,110]],[[59099,45126],[-157,177],[-177,100],[-111,99],[-116,150]],[[58538,45652],[-150,745],[-161,330],[-55,343],[27,307],[-50,544]],[[58149,47921],[115,28],[101,214],[108,308],[69,124],[-3,192],[-60,134],[-16,233]],[[58463,49154],[80,74],[16,348],[-110,333]],[[58449,49909],[98,71],[304,-7],[566,45]],[[47592,66920],[1,-40],[-6,-114]],[[47587,66766],[-1,-895],[-911,31],[9,-1512],[-261,-53],[-68,-304],[53,-853],[-1088,4],[-60,-197]],[[45260,62987],[12,249]],[[45272,63236],[5,-1],[625,48],[33,213],[114,265],[92,816],[386,637],[131,745],[86,44],[91,460],[234,63],[100,-76],[126,0],[90,134],[172,19],[-7,317],[42,0]],[[15878,79530],[-38,1],[-537,581],[-199,255],[-503,244],[-155,523],[40,363],[-356,252],[-48,476],[-336,429],[-6,304]],[[13740,82958],[154,285],[-7,373],[-473,376],[-284,674],[-173,424],[-255,266],[-187,242],[-147,306],[-279,-192],[-270,-330],[-247,388],[-194,259],[-271,164],[-273,17],[1,3364],[2,2193]],[[10837,91767],[518,-142],[438,-285],[289,-54],[244,247],[336,184],[413,-72],[416,259],[455,148],[191,-245],[207,138],[62,278],[192,-63],[470,-530],[369,401],[38,-449],[341,97],[105,173],[337,-34],[424,-248],[650,-217],[383,-100],[272,38],[374,-300],[-390,-293],[502,-127],[750,70],[236,103],[296,-354],[302,299],[-283,251],[179,202],[338,27],[223,59],[224,-141],[279,-321],[310,47],[491,-266],[431,94],[405,-14],[-32,367],[247,103],[431,-200],[-2,-559],[177,471],[223,-16],[126,594],[-298,364],[-324,239],[22,653],[329,429],[366,-95],[281,-261],[378,-666],[-247,-290],[517,-120],[-1,-604],[371,463],[332,-380],[-83,-438],[269,-399],[290,427],[202,510],[16,649],[394,-46],[411,-87],[373,-293],[17,-293],[-207,-315],[196,-316],[-36,-288],[-544,-413],[-386,-91],[-287,178],[-83,-297],[-268,-498],[-81,-259],[-322,-399],[-397,-39],[-220,-250],[-18,-384],[-323,-74],[-340,-479],[-301,-665],[-108,-466],[-16,-686],[409,-99],[125,-553],[130,-448],[388,117],[517,-256],[277,-225],[199,-279],[348,-163],[294,-248],[459,-34],[302,-58],[-45,-511],[86,-594],[201,-661],[414,-561],[214,192],[150,607],[-145,934],[-196,311],[445,276],[314,415],[154,411],[-23,395],[-188,502],[-338,445],[328,619],[-121,535],[-93,922],[194,137],[476,-161],[286,-57],[230,155],[258,-200],[342,-343],[85,-229],[495,-45],[-8,-496],[92,-747],[254,-92],[201,-348],[402,328],[266,652],[184,274],[216,-527],[362,-754],[307,-709],[-112,-371],[370,-333],[250,-338],[442,-152],[179,-189],[110,-500],[216,-78],[112,-223],[20,-664],[-202,-222],[-199,-207],[-458,-210],[-349,-486],[-470,-96],[-594,125],[-417,4],[-287,-41],[-233,-424],[-354,-262],[-401,-782],[-320,-545],[236,97],[446,776],[583,493],[415,58],[246,-289],[-262,-397],[88,-637],[91,-446],[361,-295],[459,86],[278,664],[19,-429],[180,-214],[-344,-387],[-615,-351],[-276,-239],[-310,-426],[-211,44],[-11,500],[483,488],[-445,-19],[-309,-72]],[[31350,77248],[-181,334],[0,805],[-123,171],[-187,-100],[-92,155],[-212,-446],[-84,-460],[-99,-269],[-118,-91],[-89,-30],[-28,-146],[-512,0],[-422,-4],[-125,-109],[-294,-425],[-34,-46],[-89,-231],[-255,1],[-273,-3],[-125,-93],[44,-116],[25,-181],[-5,-60],[-363,-293],[-286,-93],[-323,-316],[-70,0],[-94,93],[-31,85],[6,61],[61,207],[131,325],[81,349],[-56,514],[-59,536],[-290,277],[35,105],[-41,73],[-76,0],[-56,93],[-14,140],[-54,-61],[-75,18],[17,59],[-65,58],[-27,155],[-216,189],[-224,197],[-272,229],[-261,214],[-248,-167],[-91,-6],[-342,154],[-225,-77],[-269,183],[-284,94],[-194,36],[-86,100],[-49,325],[-94,-3],[-1,-227],[-575,0],[-951,0],[-944,0],[-833,0],[-834,0],[-819,0],[-847,0],[-273,0],[-824,0],[-789,0]],[[26668,87478],[207,273],[381,-6],[-6,-114],[-325,-326],[-196,13],[-61,160]],[[27840,93593],[-306,313],[12,213],[133,39],[636,-63],[479,-325],[25,-163],[-296,17],[-299,13],[-304,-80],[-80,36]],[[27690,87261],[107,177],[114,-13],[70,-121],[-108,-310],[-123,50],[-73,176],[13,41]],[[23996,94879],[-151,-229],[-403,44],[-337,155],[148,266],[399,159],[243,-208],[101,-187]],[[23933,96380],[-126,-17],[-521,38],[-74,165],[559,-9],[195,-109],[-33,-68]],[[23124,97116],[332,-205],[-76,-214],[-411,-122],[-226,138],[-119,221],[-22,245],[360,-24],[162,-39]],[[25514,94532],[-449,73],[-738,190],[-96,325],[-34,293],[-279,258],[-574,72],[-322,183],[104,242],[573,-37],[308,-190],[547,1],[240,-194],[-64,-222],[319,-134],[177,-140],[374,-26],[406,-50],[441,128],[566,51],[451,-42],[298,-223],[62,-244],[-174,-157],[-414,-127],[-355,72],[-797,-91],[-570,-11]],[[19093,96754],[392,-92],[-93,-177],[-518,-170],[-411,191],[224,188],[406,60]],[[19177,97139],[361,-120],[-339,-115],[-461,1],[5,84],[285,177],[149,-27]],[[34555,80899],[-148,-372],[-184,-517],[181,199],[187,-126],[-98,-206],[247,-162],[128,144],[277,-182],[-86,-433],[194,101],[36,-313],[86,-367],[-117,-520],[-125,-22],[-183,111],[60,484],[-77,75],[-322,-513],[-166,21],[196,277],[-267,144],[-298,-35],[-539,18],[-43,175],[173,208],[-121,160],[234,356],[287,941],[172,336],[241,204],[129,-26],[-54,-160]],[[26699,89048],[304,-203],[318,-184],[25,-281],[204,46],[199,-196],[-247,-186],[-432,142],[-156,266],[-275,-314],[-396,-306],[-95,346],[-377,-57],[242,292],[35,465],[95,542],[201,-49],[51,-259],[143,91],[161,-155]],[[28119,93327],[263,235],[616,-299],[383,-282],[36,-258],[515,134],[290,-376],[670,-234],[242,-238],[263,-553],[-510,-275],[654,-386],[441,-130],[400,-543],[437,-39],[-87,-414],[-487,-687],[-342,253],[-437,568],[-359,-74],[-35,-338],[292,-344],[377,-272],[114,-157],[181,-584],[-96,-425],[-350,160],[-697,473],[393,-509],[289,-357],[45,-206],[-753,236],[-596,343],[-337,287],[97,167],[-414,304],[-405,286],[5,-171],[-803,-94],[-235,203],[183,435],[522,10],[571,76],[-92,211],[96,294],[360,576],[-77,261],[-107,203],[-425,286],[-563,201],[178,150],[-294,367],[-245,34],[-219,201],[-149,-175],[-503,-76],[-1011,132],[-588,174],[-450,89],[-231,207],[290,270],[-394,2],[-88,599],[213,528],[286,241],[717,158],[-204,-382],[219,-369],[256,477],[704,242],[477,-611],[-42,-387],[550,172]],[[23749,94380],[579,-20],[530,-144],[-415,-526],[-331,-115],[-298,-442],[-317,22],[-173,519],[4,294],[145,251],[276,161]],[[15873,95551],[472,442],[570,383],[426,-9],[381,87],[-38,-454],[-214,-205],[-259,-29],[-517,-252],[-444,-91],[-377,128]],[[13136,82508],[267,47],[-84,-671],[242,-475],[-111,1],[-167,270],[-103,272],[-140,184],[-51,260],[16,188],[131,-76]],[[20696,97433],[546,-81],[751,-215],[212,-281],[108,-247],[-453,66],[-457,192],[-619,21],[268,176],[-335,142],[-21,227]],[[15692,79240],[-140,-82],[-456,269],[-84,209],[-248,207],[-50,168],[-286,107],[-107,321],[24,137],[291,-129],[171,-89],[261,-63],[94,-204],[138,-280],[277,-244],[115,-327]],[[16239,94566],[397,-123],[709,-33],[270,-171],[298,-249],[-349,-149],[-681,-415],[-344,-414],[0,-257],[-731,-285],[-147,259],[-641,312],[119,250],[192,432],[241,388],[-272,362],[939,93]],[[20050,95391],[247,99],[291,-26],[49,-289],[-169,-281],[-940,-91],[-701,-256],[-423,-14],[-35,193],[577,261],[-1255,-70],[-389,106],[379,577],[262,165],[782,-199],[493,-350],[485,-45],[-397,565],[255,215],[286,-68],[94,-282],[109,-210]],[[20410,93755],[311,-239],[175,-575],[86,-417],[466,-293],[502,-279],[-31,-260],[-456,-48],[178,-227],[-94,-217],[-503,93],[-478,160],[-322,-36],[-522,-201],[-704,-88],[-494,-56],[-151,279],[-379,161],[-246,-66],[-343,468],[185,62],[429,101],[392,-26],[362,103],[-537,138],[-594,-47],[-394,12],[-146,217],[644,237],[-428,-9],[-485,156],[233,443],[193,235],[744,359],[284,-114],[-139,-277],[618,179],[386,-298],[314,302],[254,-194],[227,-580],[140,244],[-197,606],[244,86],[276,-94]],[[22100,93536],[-306,386],[329,286],[331,-124],[496,75],[72,-172],[-259,-283],[420,-254],[-50,-532],[-455,-229],[-268,50],[-192,225],[-690,456],[5,189],[567,-73]],[[20389,94064],[372,24],[211,-130],[-244,-390],[-434,413],[95,83]],[[22639,95907],[212,-273],[9,-303],[-127,-440],[-458,-60],[-298,94],[5,345],[-455,-46],[-18,457],[299,-18],[419,201],[390,-34],[22,77]],[[23329,98201],[192,180],[285,42],[-122,135],[646,30],[355,-315],[468,-127],[455,-112],[220,-390],[334,-190],[-381,-176],[-513,-445],[-492,-42],[-575,76],[-299,240],[4,215],[220,157],[-508,-4],[-306,196],[-176,268],[193,262]],[[24559,98965],[413,112],[324,19],[545,96],[409,220],[344,-30],[300,-166],[211,319],[367,95],[498,65],[849,24],[148,-63],[802,100],[601,-38],[602,-37],[742,-47],[597,-75],[508,-161],[-12,-157],[-678,-257],[-672,-119],[-251,-133],[605,3],[-656,-358],[-452,-167],[-476,-483],[-573,-98],[-177,-120],[-841,-64],[383,-74],[-192,-105],[230,-292],[-264,-202],[-429,-167],[-132,-232],[-388,-176],[39,-134],[475,23],[6,-144],[-742,-355],[-726,163],[-816,-91],[-414,71],[-525,31],[-35,284],[514,133],[-137,427],[170,41],[742,-255],[-379,379],[-450,113],[225,229],[492,141],[79,206],[-392,231],[-118,304],[759,-26],[220,-64],[433,216],[-625,68],[-972,-38],[-491,201],[-232,239],[-324,173],[-61,202]],[[29106,90427],[-180,-174],[-312,-30],[-69,289],[118,331],[255,82],[217,-163],[3,-253],[-32,-82]],[[23262,91636],[169,-226],[-173,-207],[-374,179],[-226,-65],[-380,266],[245,183],[194,256],[295,-168],[166,-106],[84,-112]],[[32078,80046],[96,49],[365,-148],[284,-247],[8,-108],[-135,-11],[-360,186],[-258,279]],[[32218,78370],[97,-288],[202,-79],[257,16],[-137,-242],[-102,-38],[-353,250],[-69,198],[105,183]],[[31350,77248],[48,-194],[-296,-286],[-286,-204],[-293,-175],[-147,-351],[-47,-133],[-3,-313],[92,-313],[115,-15],[-29,216],[83,-131],[-22,-169],[-188,-96],[-133,11],[-205,-103],[-121,-29],[-162,-29],[-231,-171],[408,111],[82,-112],[-389,-177],[-177,-1],[8,72],[-84,-164],[82,-27],[-60,-424],[-203,-455],[-20,152],[-61,30],[-91,148],[57,-318],[69,-105],[5,-223],[-89,-230],[-157,-472],[-25,24],[86,402],[-142,225],[-33,491],[-53,-255],[59,-375],[-183,93],[191,-191],[12,-562],[79,-41],[29,-204],[39,-591],[-176,-439],[-288,-175],[-182,-346],[-139,-38],[-141,-217],[-39,-199],[-305,-383],[-157,-281],[-131,-351],[-43,-419],[50,-411],[92,-505],[124,-418],[1,-256],[132,-685],[-9,-398],[-12,-230],[-69,-361],[-83,-75],[-137,72],[-44,259],[-105,136],[-148,508],[-129,452],[-42,231],[57,393],[-77,325],[-217,494],[-108,90],[-281,-268],[-49,30],[-135,275],[-174,147],[-314,-75],[-247,66],[-212,-41],[-114,-92],[50,-157],[-5,-240],[59,-117],[-53,-77],[-103,87],[-104,-112],[-202,18],[-207,312],[-242,-73],[-202,137],[-173,-42],[-234,-138],[-253,-438],[-276,-255],[-152,-282],[-63,-266],[-3,-407],[14,-284],[52,-201]],[[23016,65864],[-108,-18],[-197,130],[-217,184],[-78,277],[-61,414],[-164,337],[-96,346],[-139,404],[-196,236],[-227,-11],[-175,-467],[-230,177],[-144,178],[-69,325],[-92,309],[-165,260],[-142,186],[-102,210],[-481,0],[0,-244],[-221,0],[-552,-4],[-634,416],[-419,287],[26,116],[-353,-64],[-316,-46]],[[17464,69802],[-46,302],[-180,340],[-130,71],[-30,169],[-156,30],[-100,159],[-258,59],[-71,95],[-33,324],[-270,594],[-231,821],[10,137],[-123,195],[-215,495],[-38,482],[-148,323],[61,489],[-10,507],[-89,453],[109,557],[34,536],[33,536],[-50,792],[-88,506],[-80,274],[33,115],[402,-200],[148,-558],[69,156],[-45,484],[-94,485]],[[6833,62443],[49,-51],[45,-79],[71,-207],[-7,-33],[-108,-126],[-89,-92],[-41,-99],[-69,84],[8,165],[-46,216],[14,65],[48,97],[-19,116],[16,55],[21,-11],[107,-100]],[[6668,62848],[-23,-71],[-94,-43],[-47,125],[-32,48],[-3,37],[27,50],[99,-56],[73,-90]],[[6456,63091],[-9,-63],[-149,17],[21,72],[137,-26]],[[6104,63411],[23,-38],[80,-196],[-15,-34],[-19,8],[-97,21],[-35,133],[-11,24],[74,82]],[[5732,63705],[5,-138],[-33,-58],[-93,107],[14,43],[43,58],[64,-12]],[[3759,86256],[220,-54],[27,-226],[-171,-92],[-182,110],[-168,161],[274,101]],[[7436,84829],[185,-40],[117,-183],[-240,-281],[-277,-225],[-142,152],[-43,277],[252,210],[148,90]],[[13740,82958],[-153,223],[-245,188],[-78,515],[-358,478],[-150,558],[-267,38],[-441,15],[-326,170],[-574,613],[-266,112],[-486,211],[-385,-51],[-546,272],[-330,252],[-309,-125],[58,-411],[-154,-38],[-321,-123],[-245,-199],[-308,-126],[-39,348],[125,580],[295,182],[-76,148],[-354,-329],[-190,-394],[-400,-420],[203,-287],[-262,-424],[-299,-248],[-278,-180],[-69,-261],[-434,-305],[-87,-278],[-325,-252],[-191,45],[-259,-165],[-282,-201],[-231,-197],[-477,-169],[-43,99],[304,276],[271,182],[296,324],[345,66],[137,243],[385,353],[62,119],[205,208],[48,448],[141,349],[-320,-179],[-90,102],[-150,-215],[-181,300],[-75,-212],[-104,294],[-278,-236],[-170,0],[-24,352],[50,216],[-179,211],[-361,-113],[-235,277],[-190,142],[-1,334],[-214,252],[108,340],[226,330],[99,303],[225,43],[191,-94],[224,285],[201,-51],[212,183],[-52,270],[-155,106],[205,228],[-170,-7],[-295,-128],[-85,-131],[-219,131],[-392,-67],[-407,142],[-117,238],[-351,343],[390,247],[620,289],[228,0],[-38,-296],[586,23],[-225,366],[-342,225],[-197,296],[-267,252],[-381,187],[155,309],[493,19],[350,270],[66,287],[284,281],[271,68],[526,262],[256,-40],[427,315],[421,-124],[201,-266],[123,114],[469,-35],[-16,-136],[425,-101],[283,59],[585,-186],[534,-56],[214,-77],[370,96],[421,-177],[302,-83]],[[2297,88264],[171,-113],[173,61],[225,-156],[276,-79],[-23,-64],[-211,-125],[-211,128],[-106,107],[-245,-34],[-66,52],[17,223]],[[74266,79657],[-212,-393],[-230,-56],[-13,-592],[-155,-267],[-551,194],[-200,-1058],[-143,-131],[-550,-236],[250,-1026],[-190,-154],[22,-337]],[[72294,75601],[-171,87],[-140,212],[-412,62],[-461,16],[-100,-65],[-396,248],[-158,-122],[-43,-349],[-457,204],[-183,-84],[-62,-259]],[[69711,75551],[-159,-109],[-367,-412],[-121,-422],[-104,-4],[-76,280],[-353,19],[-57,484],[-135,4],[21,593],[-333,431],[-476,-46],[-326,-86],[-265,533],[-227,223],[-431,423],[-52,51],[-715,-349],[11,-2178]],[[65546,74986],[-142,-29],[-195,463],[-188,166],[-315,-123],[-123,-197]],[[64583,75266],[-15,144],[68,246],[-53,206],[-322,202],[-125,530],[-154,150],[-9,192],[270,-56],[11,432],[236,96],[243,-88],[50,576],[-50,365],[-278,-28],[-236,144],[-321,-260],[-259,-124]],[[63639,77993],[-142,96],[29,304],[-177,395],[-207,-17],[-235,401],[160,448],[-81,120],[222,649],[285,-342],[35,431],[573,643],[434,15],[612,-409],[329,-239],[295,249],[440,12],[356,-306],[80,175],[391,-25],[69,280],[-450,406],[267,288],[-52,161],[266,153],[-200,405],[127,202],[1039,205],[136,146],[695,218],[250,245],[499,-127],[88,-612],[290,144],[356,-202],[-23,-322],[267,33],[696,558],[-102,-185],[355,-457],[620,-1500],[148,309],[383,-340],[399,151],[154,-106],[133,-341],[194,-115],[119,-251],[358,79],[147,-361]],[[69711,75551],[83,-58],[-234,-382],[205,-223],[198,147],[329,-311],[-355,-425],[-212,58]],[[69725,74357],[-114,-15],[-40,164],[58,274],[-371,-137],[-89,-380],[-132,-326],[-232,28],[-72,-261],[204,-140],[60,-440],[-156,-598]],[[68841,72526],[-210,124],[-154,4]],[[68477,72654],[7,362],[-369,253],[-291,289],[-181,278],[-317,408],[-137,609],[-93,108],[-301,-27],[-106,121],[-30,471],[-374,312],[-234,-343],[-237,-204],[45,-297],[-313,-8]],[[89166,49043],[482,-407],[513,-338],[192,-302],[154,-297],[43,-349],[462,-365],[68,-313],[-256,-64],[62,-393],[248,-388],[180,-627],[159,20],[-11,-262],[215,-100],[-84,-111],[295,-249],[-30,-171],[-184,-41],[-69,153],[-238,66],[-281,89],[-216,377],[-158,325],[-144,517],[-362,259],[-235,-169],[-170,-195],[35,-436],[-218,-203],[-155,99],[-288,25]],[[89175,45193],[-4,1925],[-5,1925]],[[92399,48417],[106,-189],[33,-307],[-87,-157],[-52,348],[-65,229],[-126,193],[-158,252],[-200,174],[77,143],[150,-166],[94,-130],[117,-142],[111,-248]],[[92027,47129],[-152,-144],[-142,-138],[-148,1],[-228,171],[-158,165],[23,183],[249,-86],[152,46],[42,283],[40,15],[27,-314],[158,45],[78,202],[155,211],[-30,348],[166,11],[56,-97],[-5,-327],[-93,-361],[-146,-48],[-44,-166]],[[92988,47425],[84,-134],[135,-375],[131,-200],[-39,-166],[-78,-59],[-120,227],[-122,375],[-59,450],[38,57],[30,-175]],[[89175,45193],[-247,485],[-282,118],[-69,-168],[-352,-18],[118,481],[175,164],[-72,642],[-134,496],[-538,500],[-229,50],[-417,546],[-82,-287],[-107,-52],[-63,216],[-1,257],[-212,290],[299,213],[198,-11],[-23,156],[-407,1],[-110,352],[-248,109],[-117,293],[374,143],[142,192],[446,-242],[44,-220],[78,-955],[287,-354],[232,627],[319,356],[247,1],[238,-206],[206,-212],[298,-113]],[[84713,45326],[28,-117],[5,-179]],[[84746,45030],[-181,-441],[-238,-130],[-33,71],[25,201],[119,360],[275,235]],[[87280,46506],[-27,445],[49,212],[58,200],[63,-173],[0,-282],[-143,-402]],[[82744,53024],[-158,-533],[204,-560],[-48,-272],[312,-546],[-329,-70],[-93,-403],[12,-535],[-267,-404],[-7,-589],[-107,-903],[-41,210],[-316,-266],[-110,361],[-198,34],[-139,189],[-330,-212],[-101,285],[-182,-32],[-229,68],[-43,793],[-138,164],[-134,505],[-38,517],[32,548],[165,392]],[[80461,51765],[47,-395],[190,-334],[179,121],[177,-43],[162,299],[133,52],[263,-166],[226,126],[143,822],[107,205],[96,672],[319,0],[241,-100]],[[85936,48924],[305,-172],[101,-452],[-234,244],[-232,49],[-157,-39],[-192,21],[65,325],[344,24]],[[85242,48340],[-192,108],[-54,254],[281,29],[69,-195],[-104,-196]],[[85536,51864],[20,-322],[164,-52],[26,-241],[-15,-517],[-143,58],[-42,-359],[114,-312],[-78,-71],[-112,374],[-82,755],[56,472],[92,215]],[[84146,51097],[319,25],[275,429],[48,-132],[-223,-587],[-209,-113],[-267,115],[-463,-29],[-243,-85],[-39,-447],[248,-526],[150,268],[518,201],[-22,-272],[-121,86],[-121,-347],[-245,-229],[263,-757],[-50,-203],[249,-682],[-2,-388],[-148,-173],[-109,207],[134,484],[-273,-229],[-69,164],[36,228],[-200,346],[21,576],[-186,-179],[24,-689],[11,-846],[-176,-85],[-119,173],[79,544],[-43,570],[-117,4],[-86,405],[115,387],[40,469],[139,891],[58,243],[237,439],[217,-174],[350,-82]],[[83414,44519],[-368,414],[259,116],[146,-180],[97,-180],[-17,-159],[-117,-11]],[[83705,45536],[185,45],[249,216],[-41,-328],[-417,-168],[-370,73],[0,216],[220,123],[174,-177]],[[82849,45639],[172,48],[69,-251],[-321,-119],[-193,-79],[-149,5],[95,340],[153,5],[74,209],[100,-158]],[[80134,46785],[38,-210],[533,-59],[61,244],[515,-284],[101,-383],[417,-108],[341,-351],[-317,-225],[-306,238],[-251,-16],[-288,44],[-260,106],[-322,225],[-204,59],[-116,-74],[-506,243],[-48,254],[-255,44],[191,564],[337,-35],[224,-231],[115,-45]],[[78991,49939],[47,-412],[97,-330],[204,-52],[135,-374],[-70,-735],[-11,-914],[-308,-12],[-234,494],[-356,482],[-119,358],[-210,481],[-138,443],[-212,827],[-244,493],[-81,508],[-103,461],[-250,372],[-145,506],[-209,330],[-290,652],[-24,300],[178,-24],[430,-114],[246,-577],[215,-401],[153,-246],[263,-635],[283,-9],[233,-405],[161,-495],[211,-270],[-111,-482],[159,-205],[100,-15]],[[30935,19481],[106,-274],[139,-443],[361,-355],[389,-147],[-125,-296],[-264,-29],[-141,208]],[[31400,18145],[-168,16],[-297,1],[0,1319]],[[33993,32727],[-70,-473],[-74,-607],[3,-588],[-61,-132],[-21,-382]],[[33770,30545],[-19,-308],[353,-506],[-38,-408],[173,-257],[-14,-289],[-267,-757],[-412,-317],[-557,-123],[-305,59],[59,-352],[-57,-442],[51,-298],[-167,-208],[-284,-82],[-267,216],[-108,-155],[39,-587],[188,-178],[152,186],[82,-307],[-255,-183],[-223,-367],[-41,-595],[-66,-316],[-262,-2],[-218,-302],[-80,-443],[273,-433],[266,-119],[-96,-531],[-328,-333],[-180,-692],[-254,-234],[-113,-276],[89,-614],[185,-342],[-117,30]],[[30952,19680],[-257,93],[-672,79],[-115,344],[6,443],[-185,-38],[-98,214],[-24,626],[213,260],[88,375],[-33,299],[148,504],[101,782],[-30,347],[122,112],[-30,223],[-129,118],[92,248],[-126,224],[-65,682],[112,120],[-47,720],[65,605],[75,527],[166,215],[-84,576],[-1,543],[210,386],[-7,494],[159,576],[1,544],[-72,108],[-128,1020],[171,607],[-27,572],[100,537],[182,555],[196,367],[-83,232],[58,190],[-9,985],[302,291],[96,614],[-34,148]],[[31359,37147],[231,534],[364,-144],[163,-427],[109,475],[316,-24],[45,-127]],[[32587,37434],[511,-964],[227,-89],[339,-437],[286,-231],[40,-261],[-273,-898],[280,-160],[312,-91],[220,95],[252,453],[45,521]],[[34826,35372],[138,114],[139,-341],[-6,-472],[-234,-326],[-186,-241],[-314,-573],[-370,-806]],[[31400,18145],[-92,-239],[-238,-183],[-137,19],[-164,48],[-202,177],[-291,86],[-350,330],[-283,317],[-383,662],[229,-124],[390,-395],[369,-212],[143,271],[90,405],[256,244],[198,-70]],[[30669,40193],[136,-402],[37,-426],[146,-250],[-88,-572],[150,-663],[109,-814],[200,81]],[[30952,19680],[-247,4],[-134,-145],[-250,-213],[-45,-552],[-118,-14],[-313,192],[-318,412],[-346,338],[-87,374],[79,346],[-140,393],[-36,1007],[119,568],[293,457],[-422,172],[265,522],[94,982],[309,-208],[145,1224],[-186,157],[-87,-738],[-175,83],[87,845],[95,1095],[127,404],[-80,576],[-22,666],[117,19],[170,954],[192,945],[118,881],[-64,885],[83,487],[-34,730],[163,721],[50,1143],[89,1227],[87,1321],[-20,967],[-58,832]],[[30452,39739],[143,151],[74,303]],[[58538,45652],[-109,60],[-373,-99],[-75,-71],[-79,-377],[62,-261],[-49,-699],[-34,-593],[75,-105],[194,-230],[76,107],[23,-637],[-212,5],[-114,325],[-103,252],[-213,82],[-62,310],[-170,-187],[-222,83],[-93,268],[-176,55],[-131,-15],[-15,184],[-96,15]],[[56642,44124],[-127,35],[-172,-89],[-121,15],[-68,-54],[15,703],[-93,219],[-21,363],[41,356],[-56,228],[-5,372],[-337,-5],[24,213],[-142,-2],[-15,-103],[-172,-23],[-69,-344],[-42,-148],[-154,83],[-91,-83],[-184,-47],[-106,309],[-64,191],[-80,354],[-68,440],[-820,8],[-98,-71],[-80,11],[-115,-79]],[[53422,46976],[-39,183]],[[53383,47159],[71,62],[9,258],[45,152],[101,124]],[[53609,47755],[73,-60],[95,226],[152,-6],[17,-167],[104,-105],[164,370],[161,289],[71,189],[-10,486],[121,574],[127,304],[183,285],[32,189],[7,216],[45,205],[-14,335],[34,524],[55,368],[83,316],[16,357]],[[55125,52650],[25,412],[108,300],[149,190],[229,-200],[177,-218],[203,-59],[207,-115],[83,357],[38,46],[127,-60],[309,295],[110,-125],[90,18],[41,143],[104,51],[209,-62],[178,-14],[91,63]],[[57603,53672],[169,-488],[124,-71],[75,99],[128,-39],[155,125],[66,-252],[244,-393]],[[58564,52653],[-16,-691],[111,-80],[-89,-210],[-107,-157],[-106,-308],[-59,-274],[-15,-475],[-65,-225],[-2,-446]],[[58216,49787],[-80,-165],[-10,-351],[-38,-46],[-26,-323]],[[58062,48902],[70,-268],[17,-713]],[[61551,49585],[-165,488],[-3,2152],[243,670]],[[61626,52895],[76,186],[178,11],[247,417],[362,26],[785,1773]],[[63274,55308],[194,493],[125,363],[0,308],[0,596],[1,244],[2,9]],[[63596,57321],[89,12],[128,88],[147,59],[132,202],[105,2],[6,-163],[-25,-344],[1,-310],[-59,-214],[-78,-639],[-134,-659],[-172,-755],[-238,-866],[-237,-661],[-327,-806],[-278,-479],[-415,-586],[-259,-450],[-304,-715],[-64,-312],[-63,-140]],[[59417,50018],[-3,627],[80,239],[137,391],[101,431],[-123,678],[-32,296],[-132,411]],[[59445,53091],[171,352],[188,390]],[[59804,53833],[145,-99],[0,-332],[95,-194],[193,0],[352,-502],[87,-6],[65,16],[62,-68],[185,-47],[82,247],[254,247],[112,-200],[190,0]],[[61551,49585],[-195,-236],[-68,-246],[-104,-44],[-40,-416],[-89,-238],[-54,-393],[-112,-195]],[[56824,55442],[-212,258],[-96,170],[-18,184],[45,246],[-1,241],[-160,369],[-31,253]],[[56351,57163],[3,143],[-102,174],[-3,343],[-58,228],[-98,-34],[28,217],[72,246],[-32,245],[92,181],[-58,138],[73,365],[127,435],[240,-41],[-14,2345]],[[56621,62148],[3,248],[320,2],[0,1180]],[[56944,63578],[1117,0],[1077,0],[1102,0]],[[60240,63578],[90,-580],[-61,-107],[40,-608],[102,-706],[106,-145],[152,-219]],[[60669,61213],[-141,-337],[-204,-97],[-88,-181],[-27,-393],[-120,-868],[30,-236]],[[60119,59101],[-45,-508],[-112,-582],[-168,-293],[-119,-451],[-28,-241],[-132,-166],[-82,-618],[4,-531]],[[59437,55711],[-3,460],[-39,12],[5,294],[-33,203],[-143,233],[-34,426],[34,436],[-129,41],[-19,-132],[-167,-30],[67,-173],[23,-355],[-152,-324],[-138,-426],[-144,-61],[-233,345],[-105,-122],[-29,-172],[-143,-112],[-9,-122],[-277,0],[-38,122],[-200,20],[-100,-101],[-77,51],[-143,344],[-48,163],[-200,-81],[-76,-274],[-72,-528],[-95,-111],[-85,-65],[189,-230]],[[56351,57163],[-176,-101],[-141,-239],[-201,-645],[-261,-273],[-269,36],[-78,-54],[28,-208],[-145,-207],[-118,-230],[-350,-226],[-69,134],[-46,11],[-52,-152],[-229,-44]],[[54244,54965],[43,160],[-87,407],[-39,245],[-121,100],[-164,345],[60,279],[127,-60],[78,42],[155,-6],[-151,537],[10,393],[-18,392],[-111,378]],[[54026,58177],[28,279],[-178,13],[0,380],[-115,219],[120,778],[354,557],[15,769],[107,1199],[60,254],[-116,203],[-4,188],[-104,153],[-68,919]],[[54125,64088],[280,323],[1108,-1132],[1108,-1131]],[[30080,62227],[24,-321],[-21,-228],[-68,-99],[71,-177],[-5,-161]],[[30081,61241],[-185,100],[-131,-41],[-169,43],[-130,-110],[-149,184],[24,190],[256,-82],[210,-47],[100,131],[-127,256],[2,226],[-175,92],[62,163],[170,-26],[241,-93]],[[30080,62227],[34,101],[217,-3],[165,-152],[73,15],[50,-209],[152,11],[-9,-176],[124,-21],[136,-217],[-103,-240],[-132,128],[-127,-25],[-92,28],[-50,-107],[-106,-37],[-43,144],[-92,-85],[-111,-405],[-71,94],[-14,170]],[[76049,98451],[600,133],[540,-297],[640,-572],[-69,-531],[-606,-73],[-773,170],[-462,226],[-213,423],[-379,117],[722,404]],[[78565,97421],[704,-336],[-82,-240],[-1566,-228],[507,776],[229,66],[208,-38]],[[88563,95563],[734,-26],[1004,-313],[-219,-439],[-1023,16],[-461,-139],[-550,384],[149,406],[366,111]],[[91172,95096],[697,-155],[-321,-234],[-444,53],[-516,233],[66,192],[518,-89]],[[88850,93928],[263,234],[348,54],[394,-226],[34,-155],[-421,-4],[-569,66],[-49,31]],[[62457,98194],[542,107],[422,8],[57,-160],[159,142],[262,97],[412,-129],[-107,-90],[-373,-78],[-250,-45],[-39,-97],[-324,-98],[-301,140],[158,185],[-618,18]],[[56314,82678],[-511,-9],[-342,67]],[[55461,82736],[63,260],[383,191]],[[55907,83187],[291,-103],[123,-94],[-30,-162],[23,-150]],[[64863,94153],[665,518],[-75,268],[621,312],[917,380],[925,110],[475,220],[541,76],[193,-233],[-187,-184],[-984,-293],[-848,-282],[-863,-562],[-414,-577],[-435,-568],[56,-491],[531,-484],[-164,-52],[-907,77],[-74,262],[-503,158],[-40,320],[284,126],[-10,323],[551,503],[-255,73]],[[89698,82309],[96,-569],[-7,-581],[114,-597],[280,-1046],[-411,195],[-171,-854],[271,-605],[-8,-413],[-211,356],[-182,-457],[-51,496],[31,575],[-32,638],[64,446],[13,790],[-163,581],[24,808],[257,271],[-110,274],[123,83],[73,-391]],[[86327,75524],[-39,104]],[[86288,75628],[-2,300],[142,16],[40,698],[-73,506],[238,208],[338,-104],[186,575],[96,647],[107,216],[146,532],[-459,-175],[-240,-233],[-423,1],[-112,555],[-329,420],[-483,189],[-103,579],[-97,363],[-104,254],[-172,596],[-244,217],[-415,176],[-369,-16],[-345,-106],[-229,-294],[152,-141],[4,-326],[-155,-189],[-251,-627],[3,-260],[-392,-373],[-333,223]],[[82410,80055],[-331,-49],[-146,198],[-166,63],[-407,-416],[-366,-98],[-255,-146],[-350,96],[-258,-6],[-168,302],[-272,284],[-279,78],[-351,-78],[-263,-109],[-394,248],[-53,443],[-327,152],[-252,69],[-311,244],[-288,-612],[113,-348],[-270,-411],[-402,148],[-277,22],[-186,276],[-289,8],[-242,182],[-423,-278],[-530,-509],[-292,-102]],[[74375,79706],[-109,-49]],[[63639,77993],[-127,-350],[-269,-97],[-276,-610],[252,-561],[-27,-398],[303,-696]],[[63495,75281],[-166,-238],[-48,-150],[-122,40],[-191,359],[-78,20]],[[62890,75312],[-175,137],[-85,242],[-259,124],[-169,-93],[-48,110],[-378,283],[-409,96],[-235,101],[-34,-70]],[[61098,76242],[-354,499],[-317,223],[-240,347],[202,95],[231,494],[-156,234],[410,241],[-8,129],[-249,-95]],[[60617,78409],[9,262],[143,165],[269,43],[44,197],[-62,326],[113,310],[-3,173],[-410,192],[-162,-6],[-172,277],[-213,-94],[-352,208],[6,116],[-99,256],[-222,29],[-23,183],[70,120],[-178,334],[-288,-57],[-84,30],[-70,-134],[-104,23]],[[58829,81362],[-68,379],[-66,196],[54,55],[224,-20],[108,129],[-80,157],[-187,104],[16,107],[-113,108],[-174,387],[60,159],[-27,277],[-272,141],[-146,-70],[-39,146],[-293,149]],[[57826,83766],[-89,348],[-24,287],[-134,136]],[[57579,84537],[120,187],[-83,551],[198,341],[-42,103]],[[57772,85719],[316,327],[-291,280]],[[57797,86326],[594,755],[258,341],[105,301],[-411,405],[113,385],[-250,440],[187,506],[-323,673],[256,445],[-425,394],[41,414]],[[57942,91385],[224,54],[473,237]],[[58639,91676],[286,206],[456,-358],[761,-140],[1050,-668],[213,-281],[18,-393],[-308,-311],[-454,-157],[-1240,449],[-204,-75],[453,-433],[18,-274],[18,-604],[358,-180],[217,-153],[36,286],[-168,254],[177,224],[672,-368],[233,144],[-186,433],[647,578],[256,-34],[260,-206],[161,406],[-231,352],[136,353],[-204,367],[777,-190],[158,-331],[-351,-73],[1,-328],[219,-203],[429,128],[68,377],[580,282],[970,507],[209,-29],[-273,-359],[344,-61],[199,202],[521,16],[412,245],[317,-356],[315,391],[-291,343],[145,195],[820,-179],[385,-185],[1006,-675],[186,309],[-282,313],[-8,125],[-335,58],[92,280],[-149,461],[-8,189],[512,535],[183,537],[206,116],[736,-156],[57,-328],[-263,-479],[173,-189],[89,-413],[-63,-809],[307,-362],[-120,-395],[-544,-839],[318,-87],[110,213],[306,151],[74,293],[240,281],[-162,336],[130,390],[-304,49],[-67,328],[222,593],[-361,482],[497,398],[-64,421],[139,13],[145,-328],[-109,-570],[297,-108],[-127,426],[465,233],[577,31],[513,-337],[-247,492],[-28,630],[483,119],[669,-26],[602,77],[-226,309],[321,388],[319,16],[540,293],[734,79],[93,162],[729,55],[227,-133],[624,314],[510,-10],[77,255],[265,252],[656,242],[476,-191],[-378,-146],[629,-90],[75,-292],[254,143],[812,-7],[626,-289],[223,-221],[-69,-307],[-307,-175],[-730,-328],[-209,-175],[345,-83],[410,-149],[251,112],[141,-379],[122,153],[444,93],[892,-97],[67,-276],[1162,-88],[15,451],[590,-104],[443,4],[449,-312],[128,-378],[-165,-247],[349,-465],[437,-240],[268,620],[446,-266],[473,159],[538,-182],[204,166],[455,-83],[-201,549],[367,256],[2509,-384],[236,-351],[727,-451],[1122,112],[553,-98],[231,-244],[-33,-432],[342,-168],[372,121],[492,15],[525,-116],[526,66],[484,-526],[344,189],[-224,378],[123,262],[886,-165],[578,36],[799,-282],[-99610,-258],[681,-451],[728,-588],[-24,-367],[187,-147],[-64,429],[754,-88],[544,-553],[-276,-257],[-455,-61],[-7,-578],[-111,-122],[-260,17],[-212,206],[-369,172],[-62,257],[-283,96],[-315,-76],[-151,207],[60,219],[-333,-140],[126,-278],[-158,-251],[99997,-3],[-357,-260],[-360,44],[250,-315],[166,-487],[128,-159],[32,-244],[-71,-157],[-518,129],[-777,-445],[-247,-69],[-425,-415],[-403,-362],[-102,-269],[-397,409],[-724,-464],[-126,219],[-268,-253],[-371,81],[-90,-388],[-333,-572],[10,-239],[316,-132],[-37,-860],[-258,-22],[-119,-494],[116,-255],[-486,-302],[-96,-674],[-415,-144],[-83,-600],[-400,-551],[-103,407],[-119,862],[-155,1313],[134,819],[234,353],[14,276],[432,132],[496,744],[479,608],[499,471],[223,833],[-337,-50],[-167,-487],[-705,-649],[-227,727],[-717,-201],[-696,-990],[230,-362],[-620,-154],[-430,-61],[20,427],[-431,90],[-344,-291],[-850,102],[-914,-175],[-899,-1153],[-1065,-1394],[438,-74],[136,-370],[270,-132],[178,295],[305,-38],[401,-650],[9,-503],[-217,-590],[-23,-705],[-126,-945],[-418,-855],[-94,-409],[-377,-688],[-374,-682],[-179,-349],[-370,-346],[-175,-8],[-175,287],[-373,-432],[-43,-197]],[[0,92833],[36,24],[235,-1],[402,-169],[-24,-81],[-286,-141],[-363,-36],[99694,-30],[-49,187],[-99645,247]],[[59287,77741],[73,146],[198,-127],[89,-23],[36,-117],[42,-18]],[[59725,77602],[2,-51],[136,-142],[284,35],[-55,-210],[-304,-103],[-377,-342],[-154,121],[61,277],[-304,173],[50,113],[265,197],[-42,71]],[[28061,66408],[130,47],[184,-18],[8,-153],[-303,-95],[-19,219]],[[28391,66555],[220,-265],[-48,-420],[-51,75],[4,309],[-124,234],[-1,67]],[[28280,65474],[84,-23],[97,-491],[1,-343],[-68,-29],[-70,340],[-104,171],[60,375]],[[33000,19946],[333,354],[236,-148],[167,237],[222,-266],[-83,-207],[-375,-177],[-125,207],[-236,-266],[-139,266]],[[54206,97653],[105,202],[408,20],[350,-206],[915,-440],[-699,-233],[-155,-435],[-243,-111],[-132,-490],[-335,-23],[-598,361],[252,210],[-416,170],[-541,499],[-216,463],[757,212],[152,-207],[396,8]],[[57942,91385],[117,414],[-356,235],[-431,-200],[-137,-433],[-265,-262],[-298,143],[-362,-29],[-309,312],[-167,-156]],[[55734,91409],[-172,-24],[-41,-389],[-523,95],[-74,-329],[-267,2],[-183,-421],[-278,-655],[-431,-831],[101,-202],[-97,-234],[-275,10],[-180,-554],[17,-784],[177,-300],[-92,-694],[-231,-405],[-122,-341]],[[53063,85353],[-187,363],[-548,-684],[-371,-138],[-384,301],[-99,635],[-88,1363],[256,381],[733,496],[549,609],[508,824],[668,1141],[465,444],[763,741],[610,259],[457,-31],[423,489],[506,-26],[499,118],[869,-433],[-358,-158],[305,-371]],[[57613,97879],[-412,-318],[-806,-70],[-819,98],[-50,163],[-398,11],[-304,271],[858,165],[403,-142],[281,177],[702,-148],[545,-207]],[[56867,96577],[-620,-241],[-490,137],[191,152],[-167,189],[575,119],[110,-222],[401,-134]],[[37010,99398],[932,353],[975,-27],[354,218],[982,57],[2219,-74],[1737,-469],[-513,-227],[-1062,-26],[-1496,-58],[140,-105],[984,65],[836,-204],[540,181],[231,-212],[-305,-344],[707,220],[1348,229],[833,-114],[156,-253],[-1132,-420],[-157,-136],[-888,-102],[643,-28],[-324,-431],[-224,-383],[9,-658],[333,-386],[-434,-24],[-457,-187],[513,-313],[65,-502],[-297,-55],[360,-508],[-617,-42],[322,-241],[-91,-208],[-391,-91],[-388,-2],[348,-400],[4,-263],[-549,244],[-143,-158],[375,-148],[364,-361],[105,-476],[-495,-114],[-214,228],[-344,340],[95,-401],[-322,-311],[732,-25],[383,-32],[-745,-515],[-755,-466],[-813,-204],[-306,-2],[-288,-228],[-386,-624],[-597,-414],[-192,-24],[-370,-145],[-399,-138],[-238,-365],[-4,-415],[-141,-388],[-453,-472],[112,-462],[-125,-488],[-142,-577],[-391,-36],[-410,482],[-556,3],[-269,324],[-186,577],[-481,735],[-141,385],[-38,530],[-384,546],[100,435],[-186,208],[275,691],[418,220],[110,247],[58,461],[-318,-209],[-151,-88],[-249,-84],[-341,193],[-19,401],[109,314],[258,9],[567,-157],[-478,375],[-249,202],[-276,-83],[-232,147],[310,550],[-169,220],[-220,409],[-335,626],[-353,230],[3,247],[-745,346],[-590,43],[-743,-24],[-677,-44],[-323,188],[-482,372],[729,186],[559,31],[-1188,154],[-627,241],[39,229],[1051,285],[1018,284],[107,214],[-750,213],[243,235],[961,413],[404,63],[-115,265],[658,156],[854,93],[853,5],[303,-184],[737,325],[663,-221],[390,-46],[577,-192],[-660,318],[38,253]],[[69148,21851],[179,-186],[263,-74],[9,-112],[-77,-269],[-427,-38],[-7,314],[41,244],[19,121]],[[84713,45326],[32,139],[239,133],[194,20],[87,74],[105,-74],[-102,-160],[-289,-258],[-233,-170]],[[54540,33696],[133,292],[109,-162],[47,-252],[125,-43],[175,-112],[149,43],[248,302],[0,2182]],[[55526,35946],[75,-88],[165,-562],[-26,-360],[62,-207],[199,60],[139,264],[132,177],[68,283],[135,137],[117,-71],[133,-166],[226,-29],[178,138],[28,184],[48,283],[152,47],[83,222],[93,393],[249,442],[393,435]],[[58175,37528],[113,-7],[134,-100],[94,71],[148,-59]],[[58664,37433],[133,-832],[72,-419],[-49,-659],[23,-212]],[[58843,35311],[-140,108],[-80,-42],[-26,-172],[-76,-222],[2,-204],[166,-320],[163,63],[56,263]],[[58908,34785],[211,-5]],[[59119,34780],[-70,-430],[-32,-491],[-72,-267],[-190,-298],[-54,-86],[-118,-300],[-77,-303],[-158,-424],[-314,-609],[-196,-355],[-210,-269],[-290,-229],[-141,-31],[-36,-164],[-169,88],[-138,-113],[-301,114],[-168,-72],[-115,31],[-286,-233],[-238,-94],[-171,-223],[-127,-14],[-117,210],[-94,11],[-120,264],[-13,-82],[-37,159],[2,346],[-90,396],[89,108],[-7,453],[-182,553],[-139,501],[-1,1],[-199,768]],[[58049,33472],[-121,182],[-130,-120],[-151,-232],[-148,-374],[209,-454],[99,59],[51,188],[155,93],[47,192],[85,288],[-96,178]],[[23016,65864],[-107,-518],[-49,-426],[-20,-791],[-27,-289],[48,-322],[86,-288],[56,-458],[184,-440],[65,-337],[109,-291],[295,-157],[114,-247],[244,165],[212,60],[208,106],[175,101],[176,241],[67,345],[22,496],[48,173],[188,155],[294,137],[246,-21],[169,50],[66,-125],[-9,-285],[-149,-351],[-66,-360],[51,-103],[-42,-255],[-69,-461],[-71,152],[-58,-10]],[[25472,61510],[-53,-8],[-99,-357],[-51,70],[-33,-27],[2,-87]],[[25238,61101],[-257,7],[-259,-1],[-1,-333],[-125,-1],[103,-198],[103,-136],[31,-128],[45,-36],[-7,-201],[-357,-2],[-133,-481],[39,-111],[-32,-138],[-7,-172]],[[24381,59170],[-314,636],[-144,191],[-226,155],[-156,-43],[-223,-223],[-140,-58],[-196,156],[-208,112],[-260,271],[-208,83],[-314,275],[-233,282],[-70,158],[-155,35],[-284,187],[-116,270],[-299,335],[-139,373],[-66,288],[93,57],[-29,169],[64,153],[1,204],[-93,266],[-25,235],[-94,298],[-244,587],[-280,462],[-135,368],[-238,241],[-51,145],[42,365],[-142,138],[-164,287],[-69,412],[-149,48],[-162,311],[-130,288],[-12,184],[-149,446],[-99,452],[5,227],[-201,234],[-93,-25],[-159,163],[-44,-240],[46,-284],[27,-444],[95,-243],[206,-407],[46,-139],[42,-42],[37,-203],[49,8],[56,-381],[85,-150],[59,-210],[174,-300],[92,-550],[83,-259],[77,-277],[15,-311],[134,-20],[112,-268],[100,-264],[-6,-106],[-117,-217],[-49,3],[-74,359],[-181,337],[-201,286],[-142,150],[9,432],[-42,320],[-132,183],[-191,264],[-37,-76],[-70,154],[-171,143],[-164,343],[20,44],[115,-33],[103,221],[10,266],[-214,422],[-163,163],[-102,369],[-103,388],[-129,472],[-113,531]],[[33993,32727],[180,63],[279,-457],[103,18],[286,-379],[218,-327],[160,-402],[-122,-280],[77,-334]],[[35174,30629],[-121,-372],[-313,-328],[-205,118],[-151,-63],[-256,253],[-189,-19],[-169,327]],[[34826,35372],[54,341],[38,350],[0,325],[-100,107],[-104,-96],[-103,26],[-33,228],[-26,541],[-52,177],[-187,160],[-114,-116],[-293,113],[18,802],[-82,329]],[[33842,38659],[87,122],[-27,337],[77,259],[49,465],[-66,367],[-151,166],[-30,233],[41,342],[-533,24],[-107,688],[81,10],[-3,255],[-55,172],[-12,342],[-161,175],[-175,-6],[-115,172],[-188,117],[-109,220],[-311,98],[-302,529],[23,396],[-34,227],[29,443],[-363,-100],[-147,-222],[-243,-239],[-62,-179],[-143,-13],[-206,50]],[[30686,44109],[-157,-102],[-126,68],[18,898],[-228,-348],[-245,15],[-105,315],[-184,34],[59,254],[-155,359],[-115,532],[73,108],[0,250],[168,171],[-28,319],[71,206],[20,275],[318,402],[227,114],[37,89],[251,-28]],[[30585,48040],[125,1620],[6,256],[-43,339],[-123,215],[1,430],[156,97],[56,-61],[9,226],[-162,61],[-4,370],[541,-13],[92,203],[77,-187],[55,-349],[52,73]],[[31423,51320],[153,-312],[216,38],[54,181],[206,138],[115,97],[32,250],[198,168],[-15,124],[-235,51],[-39,372],[12,396],[-125,153],[52,55],[206,-76],[221,-148],[80,140],[200,92],[310,221],[102,225],[-37,167]],[[33129,53652],[145,26],[64,-136],[-36,-259],[96,-90],[63,-274],[-77,-209],[-44,-502],[71,-299],[20,-274],[171,-277],[137,-29],[30,116],[88,25],[126,104],[90,157],[154,-50],[67,21]],[[34294,51702],[151,-48],[25,120],[-46,118],[28,171],[112,-53],[131,61],[159,-125]],[[34854,51946],[121,-122],[86,160],[62,-25],[38,-166],[133,42],[107,224],[85,436],[164,540]],[[35650,53035],[95,28],[69,-327],[155,-1033],[149,-97],[7,-408],[-208,-487],[86,-178],[491,-92],[10,-593],[211,388],[349,-212],[462,-361],[135,-346],[-45,-327],[323,182],[540,-313],[415,23],[411,-489],[355,-662],[214,-170],[237,-24],[101,-186],[94,-752],[46,-358],[-110,-977],[-142,-385],[-391,-822],[-177,-668],[-206,-513],[-69,-11],[-78,-435],[20,-1107],[-77,-910],[-30,-390],[-88,-233],[-49,-790],[-282,-771],[-47,-610],[-225,-256],[-65,-355],[-302,2],[-437,-227],[-195,-263],[-311,-173],[-327,-470],[-235,-586],[-41,-441],[46,-326],[-51,-597],[-63,-289],[-195,-325],[-308,-1040],[-244,-468],[-189,-277],[-127,-562],[-183,-337]],[[33842,38659],[-4,182],[-259,302],[-258,9],[-484,-172],[-133,-520],[-7,-318],[-110,-708]],[[30669,40193],[175,638],[-119,496],[63,199],[-49,219],[108,295],[6,503],[13,415],[60,200],[-240,951]],[[30452,39739],[-279,340],[-24,242],[-551,593],[-498,646],[-214,365],[-115,488],[46,170],[-236,775],[-274,1090],[-262,1177],[-114,269],[-87,435],[-216,386],[-198,239],[90,264],[-134,563],[86,414],[221,373]],[[27693,48568],[33,-246],[-79,-141],[8,-216],[114,47],[113,-64],[116,-298],[157,243],[53,398],[170,514],[334,233],[303,619],[86,384],[-38,449]],[[29063,50490],[74,56],[184,-280],[89,-279],[129,-152],[163,-620],[207,-74],[153,157],[101,-103],[166,51],[213,-276],[-179,-602],[83,-14],[139,-314]],[[29063,50490],[-119,140],[-137,195],[-79,-94],[-235,82],[-68,255],[-52,-10],[-278,338]],[[28095,51396],[-37,183],[103,44],[-12,296],[65,214],[138,40],[117,371],[106,310],[-102,141],[52,343],[-62,540],[59,155],[-44,500],[-112,315]],[[28366,54848],[36,287],[89,-43],[52,176],[-64,348],[34,86]],[[28513,55702],[143,-18],[209,412],[114,63],[3,195],[51,500],[159,274],[175,11],[22,123],[218,-49],[218,298],[109,132],[134,285],[98,-36],[73,-156],[-54,-199]],[[30185,57537],[-178,-99],[-71,-295],[-107,-169],[-81,-220],[-34,-422],[-77,-345],[144,-40],[35,-271],[62,-130],[21,-238],[-33,-219],[10,-123],[69,-49],[66,-207],[357,57],[161,-75],[196,-508],[112,63],[200,-32],[158,68],[99,-102],[-50,-318],[-62,-199],[-22,-423],[56,-393],[79,-175],[9,-133],[-140,-294],[100,-130],[74,-207],[85,-589]],[[28366,54848],[-93,170],[-59,319],[68,158],[-70,40],[-52,196],[-138,164],[-122,-38],[-56,-205],[-112,-149],[-61,-20],[-27,-123],[132,-321],[-75,-76],[-40,-87],[-130,-30],[-48,353],[-36,-101],[-92,35],[-56,238],[-114,39],[-72,69],[-119,-1],[-8,-128],[-32,89]],[[26954,55439],[14,117],[23,120],[-10,107],[41,70],[-58,88],[-1,238],[107,53]],[[27070,56232],[100,-212],[-6,-126],[111,-26],[26,48],[77,-145],[136,42],[119,150],[168,119],[95,176],[153,-34],[-10,-58],[155,-21],[124,-102],[90,-177],[105,-164]],[[26954,55439],[-151,131],[-56,124],[32,103],[-11,130],[-77,142],[-109,116],[-95,76],[-19,173],[-73,105],[18,-172],[-55,-141],[-64,164],[-89,58],[-38,120],[2,179],[36,187],[-78,83],[64,114]],[[26191,57131],[42,76],[183,-156],[63,77],[89,-50],[46,-121],[82,-40],[66,126]],[[26762,57043],[70,-321],[108,-238],[130,-252]],[[26191,57131],[-96,186],[-130,238],[-61,200],[-117,185],[-140,267],[31,91],[46,-88],[21,41]],[[25745,58251],[86,25],[35,135],[41,5],[-6,290],[65,14],[58,-4],[60,158],[82,-120],[29,74],[51,70],[97,163],[4,121],[27,-5],[36,141],[29,17],[47,-90],[56,-27],[61,76],[70,0],[97,77],[38,81],[95,-12]],[[26903,59440],[-24,-57],[-14,-132],[29,-216],[-64,-202],[-30,-237],[-9,-261],[15,-152],[7,-266],[-43,-58],[-26,-253],[19,-156],[-56,-151],[12,-159],[43,-97]],[[25745,58251],[-48,185],[-84,51]],[[25613,58487],[19,237],[-38,64],[-57,42],[-122,-70],[-10,79],[-84,95],[-60,118],[-82,50]],[[25179,59102],[58,150],[-22,116],[20,113],[131,166],[127,225]],[[25493,59872],[29,-23],[61,104],[79,8],[26,-48],[43,29],[129,-53],[128,15],[90,66],[32,66],[89,-31],[66,-40],[73,14],[55,51],[127,-82],[44,-13],[85,-110],[80,-132],[101,-91],[73,-162]],[[25613,58487],[-31,-139],[-161,9],[-100,57],[-115,117],[-154,37],[-79,127]],[[24973,58695],[9,86],[95,149],[52,66],[-15,69],[65,37]],[[25238,61101],[-2,-468],[-22,-667],[83,0]],[[25297,59966],[90,-107],[24,88],[82,-75]],[[24973,58695],[-142,103],[-174,11],[-127,117],[-149,244]],[[25472,61510],[1,-87],[53,-3],[-5,-160],[-45,-256],[24,-91],[-29,-212],[18,-56],[-32,-299],[-55,-156],[-50,-19],[-55,-205]],[[30185,57537],[-8,-139],[-163,-69],[91,-268],[-3,-309],[-123,-344],[105,-468],[120,38],[62,427],[-86,208],[-14,447],[346,241],[-38,278],[97,186],[100,-415],[195,-9],[180,-330],[11,-195],[249,-6],[297,61],[159,-264],[213,-74],[155,185],[4,149],[344,35],[333,9],[-236,-175],[95,-279],[222,-44],[210,-291],[45,-473],[144,13],[109,-139]],[[33400,55523],[-220,-347],[-24,-215],[95,-220],[-69,-110],[-171,-95],[5,-273],[-75,-163],[188,-448]],[[33400,55523],[183,-217],[171,-385],[8,-304],[105,-14],[149,-289],[109,-205]],[[34125,54109],[-44,-532],[-169,-154],[15,-139],[-51,-305],[123,-429],[89,-1],[37,-333],[169,-514]],[[34125,54109],[333,-119],[30,107],[225,43],[298,-159]],[[35011,53981],[-144,-508],[22,-404],[109,-351],[-49,-254],[-24,-270],[-71,-248]],[[35011,53981],[95,-65],[204,-140],[294,-499],[46,-242]],[[51718,79804],[131,-155],[400,-109],[-140,-404],[-35,-421]],[[52074,78715],[-77,-101],[-126,54],[9,-150],[-203,-332],[-5,-267],[133,92],[95,-259]],[[51900,77752],[-11,-167],[82,-222],[-97,-180],[72,-457],[151,-75],[-32,-256]],[[52065,76395],[-252,-334],[-548,160],[-404,-192],[-32,-355]],[[50829,75674],[-322,-77],[-313,267],[-101,-127],[-511,268],[-111,230]],[[49471,76235],[144,354],[53,1177],[-287,620],[-205,299],[-424,227],[-28,431],[360,129],[466,-152],[-88,669],[263,-254],[646,461],[84,484],[243,119]],[[50698,80799],[40,-207],[129,-10],[129,-237],[194,-279],[143,46],[243,-269]],[[51576,79843],[62,-52],[80,13]],[[52429,75765],[179,226],[47,-507],[-92,-456],[-126,120],[-64,398],[56,219]],[[27693,48568],[148,442],[-60,258],[-106,-275],[-166,259],[56,167],[-47,536],[97,89],[52,368],[105,381],[-20,241],[153,126],[190,236]],[[31588,61519],[142,-52],[50,-118],[-71,-149],[-209,4],[-163,-21],[-16,253],[40,86],[227,-3]],[[28453,61504],[187,-53],[147,-142],[46,-161],[-195,-11],[-84,-99],[-156,95],[-159,215],[34,135],[116,41],[64,-20]],[[27147,64280],[240,-42],[219,-7],[261,-201],[110,-216],[260,66],[98,-138],[235,-366],[173,-267],[92,8],[165,-120],[-20,-167],[205,-24],[210,-242],[-33,-138],[-185,-75],[-187,-29],[-191,46],[-398,-57],[186,329],[-113,154],[-179,39],[-96,171],[-66,336],[-157,-23],[-259,159],[-83,124],[-362,91],[-97,115],[104,148],[-273,30],[-199,-307],[-115,-8],[-40,-144],[-138,-65],[-118,56],[146,183],[60,213],[126,131],[142,116],[210,56],[67,65]],[[58175,37528],[-177,267],[-215,90],[-82,375],[0,208],[-119,64],[-315,649],[-87,342],[-56,105],[-107,473]],[[57017,40101],[311,-65],[90,-68],[94,13],[154,383],[241,486],[100,46],[33,205],[159,235],[210,81]],[[58409,41417],[18,-220],[232,12],[128,-125],[60,-146],[132,-43],[145,-190],[0,-748],[-54,-409],[-12,-442],[45,-175],[-31,-348],[-42,-53],[-74,-426],[-292,-671]],[[55526,35946],[0,1725],[274,20],[8,2105],[207,19],[428,207],[106,-243],[177,231],[85,2],[156,133]],[[56967,40145],[50,-44]],[[54540,33696],[-207,446],[-108,432],[-62,575],[-68,428],[-93,910],[-7,707],[-35,322],[-108,243],[-144,489],[-146,708],[-60,371],[-226,577],[-17,453]],[[53259,40357],[134,113],[166,100],[180,-17],[166,-267],[42,41],[1126,26],[192,-284],[673,-83],[510,241]],[[56448,40227],[228,134],[180,-34],[109,-133],[2,-49]],[[45357,58612],[-115,460],[-138,210],[122,112],[134,415],[66,304]],[[45426,60113],[96,189],[138,-51],[135,129],[155,6],[133,-173],[184,-157],[168,-435],[184,-405]],[[46619,59216],[13,-368],[54,-338],[104,-166],[24,-229],[-13,-184]],[[46801,57931],[-40,-33],[-151,47],[-21,-66],[-61,-13],[-200,144],[-134,6]],[[46194,58016],[-513,25],[-75,-67],[-92,19],[-147,-96]],[[45367,57897],[-46,453]],[[45321,58350],[253,-13],[67,83],[50,5],[103,136],[119,-124],[121,-11],[120,133],[-56,170],[-92,-99],[-86,3],[-110,145],[-88,-9],[-63,-140],[-302,-17]],[[46619,59216],[93,107],[47,348],[88,14],[194,-165],[157,117],[107,-39],[42,131],[1114,9],[62,414],[-48,73],[-134,2550],[-134,2550],[425,10]],[[48632,65335],[937,-1289],[937,-1289],[66,-277],[173,-169],[129,-96],[3,-376],[308,58]],[[51185,61897],[1,-1361],[-152,-394],[-24,-364],[-247,-94],[-379,-51],[-102,-210],[-178,-23]],[[50104,59400],[-178,-3],[-70,114],[-153,-84],[-259,-246],[-53,-184],[-216,-265],[-38,-152],[-116,-120],[-134,79],[-76,-144],[-41,-405],[-221,-490],[7,-200],[-76,-250],[18,-343]],[[48498,56707],[-114,-88],[-65,-74],[-43,253],[-80,-67],[-48,11],[-51,-172],[-215,5],[-77,89],[-36,-54]],[[47769,56610],[-85,170],[15,176],[-35,69],[-59,-58],[11,192],[57,152],[-114,248],[-33,163],[-62,130],[-55,15],[-67,-83],[-90,-79],[-76,-128],[-119,48],[-77,150],[-46,19],[-73,-78],[-44,-1],[-16,216]],[[47587,66766],[1045,-1431]],[[45426,60113],[-24,318],[78,291],[34,557],[-30,583],[-34,294],[28,295],[-72,281],[-146,255]],[[50747,54278],[-229,-69]],[[50518,54209],[-69,407],[13,1357],[-56,122],[-11,290],[-96,207],[-85,174],[35,311]],[[50249,57077],[96,67],[56,258],[136,56],[61,176]],[[50598,57634],[93,173],[100,2],[212,-340]],[[51003,57469],[-11,-197],[62,-350],[-54,-238],[29,-159],[-135,-366],[-86,-181],[-52,-372],[7,-376],[-16,-952]],[[54026,58177],[-78,-34],[-9,-188]],[[53939,57955],[-52,-13],[-188,647],[-65,24],[-217,-331],[-215,173],[-150,34],[-80,-83],[-163,18],[-164,-252],[-141,-14],[-337,305],[-131,-145],[-142,10],[-104,223],[-279,221],[-298,-70],[-72,-128],[-39,-340],[-80,-238],[-19,-527]],[[50598,57634],[6,405],[-320,134],[-9,286],[-156,386],[-37,269],[22,286]],[[51185,61897],[392,263],[804,1161],[952,1126]],[[53333,64447],[439,-255],[156,-324],[197,220]],[[53939,57955],[110,-235],[-31,-107],[-14,-196],[-234,-457],[-74,-377],[-39,-307],[-59,-132],[-56,-414],[-148,-243],[-43,-299],[-63,-238],[-26,-246],[-191,-199],[-156,243],[-105,-10],[-165,-345],[-81,-6],[-132,-570],[-71,-418]],[[52361,53399],[-289,-213],[-105,31],[-107,-132],[-222,13],[-149,370],[-91,427],[-197,389],[-209,-7],[-245,1]],[[54244,54965],[-140,-599],[-67,-107],[-21,-458],[28,-249],[-23,-176],[132,-309],[23,-212],[103,-305],[127,-190],[12,-269],[29,-172]],[[54447,51919],[-20,-319],[-220,140],[-225,156],[-350,23]],[[53632,51919],[-35,32],[-164,-76],[-169,79],[-132,-38]],[[53132,51916],[-452,13]],[[52680,51929],[40,466],[-108,391],[-127,100],[-56,265],[-72,85],[4,163]],[[50518,54209],[-224,-126]],[[50294,54083],[-62,207],[-74,375],[-22,294],[61,532],[-69,215],[-27,466],[1,429],[-116,305],[20,184]],[[50006,57090],[243,-13]],[[50294,54083],[-436,-346],[-154,-203],[-250,-171],[-248,168]],[[49206,53531],[13,233],[-121,509],[73,667],[117,496],[-74,841]],[[49214,56277],[-38,444],[7,336],[482,27],[123,-43],[90,96],[128,-47]],[[48498,56707],[125,-129],[49,-195],[125,-125],[97,149],[130,22],[190,-152]],[[49206,53531],[-126,-7],[-194,116],[-178,-7],[-329,-103],[-193,-170],[-275,-217],[-54,15]],[[47857,53158],[22,487],[26,74],[-8,233],[-118,247],[-88,40],[-81,162],[60,262],[-28,286],[13,172]],[[47655,55121],[44,0],[17,258],[-22,114],[27,82],[103,71],[-69,473],[-64,245],[23,200],[55,46]],[[47655,55121],[-78,15],[-57,-238],[-78,3],[-55,126],[19,237],[-116,362],[-73,-67],[-59,-13]],[[47158,55546],[-77,-34],[3,217],[-44,155],[9,171],[-60,249],[-78,211],[-222,1],[-65,-112],[-76,-13],[-48,-128],[-32,-163],[-148,-260]],[[46320,55840],[-122,349],[-108,232],[-71,76],[-69,118],[-32,261],[-41,130],[-80,97]],[[45797,57103],[123,288],[84,-11],[73,99],[61,1],[44,78],[-24,196],[31,62],[5,200]],[[45797,57103],[-149,247],[-117,39],[-63,166],[1,90],[-84,125],[-18,127]],[[47857,53158],[-73,-5],[-286,282],[-252,449],[-237,324],[-187,381]],[[46822,54589],[66,189],[15,172],[126,320],[129,276]],[[46822,54589],[-75,44],[-200,238],[-144,316],[-49,216],[-34,437]],[[55125,52650],[-178,33],[-188,99],[-166,-313],[-146,-550]],[[56824,55442],[152,-239],[2,-192],[187,-308],[116,-255],[70,-355],[208,-234],[44,-187]],[[53609,47755],[-104,203],[-84,-100],[-112,-255]],[[53309,47603],[-228,626]],[[53081,48229],[212,326],[-105,391],[95,148],[187,73],[23,261],[148,-283],[245,-25],[85,279],[36,393],[-31,461],[-131,350],[120,684],[-69,117],[-207,-48],[-78,305],[21,258]],[[53081,48229],[-285,596],[-184,488],[-169,610],[9,196],[61,189],[67,430],[56,438]],[[52636,51176],[94,35],[404,-6],[-2,711]],[[52636,51176],[-52,90],[96,663]],[[59099,45126],[131,-264],[71,-501],[-47,-160],[-56,-479],[53,-490],[-87,-205],[-85,-549],[147,-153]],[[59226,42325],[-843,-487],[26,-421]],[[56448,40227],[-181,369],[-188,483],[13,1880],[579,-7],[-24,203],[41,222],[-49,277],[32,286],[-29,184]],[[59599,43773],[-77,-449],[77,-768],[97,9],[100,-191],[116,-427],[24,-760],[-120,-124],[-85,-410],[-181,365],[-21,417],[59,274],[-16,237],[-110,149],[-77,-54],[-159,284]],[[61198,44484],[45,-265],[-11,-588],[34,-519],[11,-923],[49,-290],[-83,-422],[-108,-410],[-177,-366],[-254,-225],[-313,-287],[-313,-634],[-107,-108],[-194,-420],[-115,-136],[-23,-421],[132,-448],[54,-346],[4,-177],[49,29],[-8,-579],[-45,-275],[65,-101],[-41,-245],[-116,-211],[-229,-199],[-334,-320],[-122,-219],[24,-248],[71,-40],[-24,-311]],[[58908,34785],[-24,261],[-41,265]],[[53383,47159],[-74,444]],[[53259,40357],[-26,372],[38,519],[96,541],[15,254],[90,532],[66,243],[159,386],[90,263],[29,438],[-15,335],[-83,211],[-74,358],[-68,355],[15,122],[85,235],[-84,570],[-57,396],[-139,374],[26,115]],[[58062,48902],[169,-46],[85,336],[147,-38]],[[59922,69905],[-49,-186]],[[59873,69719],[-100,82],[-58,-394],[69,-66],[-71,-81],[-12,-156],[131,80]],[[59832,69184],[7,-230],[-139,-944]],[[59700,68010],[-27,153],[-155,862]],[[59518,69025],[80,194],[-19,34],[74,276],[56,446],[40,149],[8,6]],[[59757,70130],[93,-1],[25,104],[75,8]],[[59950,70241],[4,-242],[-38,-90],[6,-4]],[[59757,70130],[99,482],[138,416],[5,21]],[[59999,71049],[125,-31],[45,-231],[-151,-223],[-68,-323]],[[63761,43212],[74,-251],[69,-390],[45,-711],[72,-276],[-28,-284],[-49,-174],[-94,347],[-53,-175],[53,-438],[-24,-250],[-77,-137],[-18,-500],[-109,-689],[-137,-814],[-172,-1120],[-106,-821],[-125,-685],[-226,-140],[-243,-250],[-160,151],[-220,211],[-77,312],[-18,524],[-98,471],[-26,425],[50,426],[128,102],[1,197],[133,447],[25,377],[-65,280],[-52,372],[-23,544],[97,331],[38,375],[138,22],[155,121],[103,107],[122,7],[158,337],[229,364],[83,297],[-38,253],[118,-71],[153,410],[6,356],[92,264],[96,-254]],[[59873,69719],[0,-362],[-41,-173]],[[45321,58350],[36,262]],[[52633,68486],[-118,1061],[-171,238],[-3,143],[-227,352],[-24,445],[171,330],[65,487],[-44,563],[57,303]],[[52339,72408],[302,239],[195,-71],[-9,-299],[236,217],[20,-113],[-139,-290],[-2,-273],[96,-147],[-36,-511],[-183,-297],[53,-322],[143,-10],[70,-281],[106,-92]],[[53191,70158],[-16,-454],[-135,-170],[-86,-189],[-191,-228],[30,-244],[-24,-250],[-136,-137]],[[47592,66920],[-2,700],[449,436],[277,90],[227,159],[107,295],[324,234],[12,438],[161,51],[126,219],[363,99],[51,230],[-73,125],[-96,624],[-17,359],[-104,379]],[[49397,71358],[267,323],[300,102],[175,244],[268,180],[471,105],[459,48],[140,-87],[262,232],[297,5],[113,-137],[190,35]],[[52633,68486],[90,-522],[15,-274],[-49,-482],[21,-270],[-36,-323],[24,-371],[-110,-247],[164,-431],[11,-253],[99,-330],[130,109],[219,-275],[122,-370]],[[59922,69905],[309,-234],[544,630]],[[60775,70301],[112,-720]],[[60887,69581],[-53,-89],[-556,-296],[277,-591],[-92,-101],[-46,-197],[-212,-82],[-66,-213],[-120,-182],[-310,94]],[[59709,67924],[-9,86]],[[64327,64904],[49,29],[11,-162],[217,93],[230,-15],[168,-18],[190,400],[207,379],[176,364]],[[65575,65974],[52,-202]],[[65627,65772],[38,-466]],[[65665,65306],[-142,-3],[-23,-384],[50,-82],[-126,-117],[-1,-241],[-81,-245],[-7,-238]],[[65335,63996],[-56,-125],[-835,298],[-106,599],[-11,136]],[[64113,65205],[-18,430],[75,310],[76,64],[84,-185],[5,-346],[-61,-348]],[[64274,65130],[-77,-42],[-84,117]],[[63326,68290],[58,-261],[-25,-135],[89,-445]],[[63448,67449],[-196,-16],[-69,282],[-248,57]],[[62935,67772],[204,567],[187,-49]],[[60775,70301],[615,614],[105,715],[-26,431],[152,146],[142,369]],[[61763,72576],[119,92],[324,-77],[97,-150],[133,100]],[[62436,72541],[180,-705],[182,-177],[21,-345],[-139,-204],[-65,-461],[193,-562],[340,-324],[143,-449],[-46,-428],[89,0],[3,-314],[153,-311]],[[63490,68261],[-164,29]],[[62935,67772],[-516,47],[-784,1188],[-413,414],[-335,160]],[[65665,65306],[125,-404],[155,-214],[203,-78],[165,-107],[125,-339],[75,-196],[100,-75],[-1,-132],[-101,-352],[-44,-166],[-117,-189],[-104,-404],[-126,31],[-58,-141],[-44,-300],[34,-395],[-26,-72],[-128,2],[-174,-221],[-27,-288],[-63,-125],[-173,5],[-109,-149],[1,-238],[-134,-165],[-153,56],[-186,-199],[-128,-34]],[[64752,60417],[-91,413],[-217,975]],[[64444,61805],[833,591],[185,1182],[-127,418]],[[65575,65974],[80,201],[35,-51],[-26,-244],[-37,-108]],[[96448,41190],[175,-339],[-92,-78],[-93,259],[10,158]],[[96330,41322],[-39,163],[-6,453],[133,-182],[45,-476],[-75,74],[-58,-32]],[[78495,57780],[-66,713],[178,492],[359,112],[261,-84]],[[79227,59013],[229,-232],[126,407],[246,-217]],[[79828,58971],[64,-394],[-34,-708],[-467,-455],[122,-358],[-292,-43],[-240,-238]],[[78981,56775],[-233,87],[-112,307],[-141,611]],[[78495,57780],[-249,271],[-238,-11],[41,464],[-245,-3],[-22,-650],[-150,-863],[-90,-522],[19,-428],[181,-18],[113,-539],[50,-512],[155,-338],[168,-69],[144,-306]],[[78372,54256],[-91,-243],[-183,-71],[-22,304],[-227,258],[-48,-105]],[[77801,54399],[-110,227],[-47,292],[-148,334],[-135,280],[-45,-347],[-53,328],[30,369],[82,566]],[[77375,56448],[135,607],[152,551],[-108,539],[4,274],[-32,330],[-185,470],[-66,296],[96,109],[101,514],[-113,390],[-177,431],[-134,519],[117,107],[127,639],[196,26],[162,256],[159,137]],[[77809,62643],[120,-182],[16,-355],[188,-27],[-68,-623],[6,-530],[293,353],[83,-104],[163,17],[56,205],[210,-40],[211,-480],[18,-583],[224,-515],[-12,-500],[-90,-266]],[[77809,62643],[59,218],[237,384]],[[78105,63245],[25,-139],[148,-16],[-42,676],[144,86]],[[78380,63852],[162,-466],[125,-537],[342,-5],[108,-515],[-178,-155],[-80,-212],[333,-353],[231,-699],[175,-520],[210,-411],[70,-418],[-50,-590]],[[77375,56448],[-27,439],[86,452],[-94,350],[23,644],[-113,306],[-90,707],[-50,746],[-121,490],[-183,-297],[-315,-421],[-156,53],[-172,138],[96,732],[-58,554],[-218,681],[34,213],[-163,76],[-197,481]],[[75657,62792],[-18,476],[97,-90],[6,424]],[[75742,63602],[137,140],[-30,251],[63,201],[11,612],[217,-135],[124,487],[14,288],[153,496],[-8,338],[359,408],[199,-107],[-23,364],[97,108],[-20,224]],[[77035,67277],[162,44],[93,-348],[121,-141],[8,-452],[-11,-487],[-263,-493],[-33,-701],[293,98],[66,-544],[176,-115],[-81,-490],[206,-222],[121,-109],[203,172],[9,-244]],[[78380,63852],[149,145],[221,-3],[271,68],[236,315],[134,-222],[254,-108],[-44,-340],[132,-240],[280,-154]],[[80013,63313],[-371,-505],[-231,-558],[-61,-410],[212,-623],[260,-772],[252,-365],[169,-475],[127,-1093],[-37,-1039],[-232,-389],[-318,-381],[-227,-492],[-346,-550],[-101,378],[78,401],[-206,335]],[[86327,75524],[0,0]],[[86327,75524],[-106,36],[-120,-200],[-83,-202],[10,-424],[-143,-130],[-50,-105],[-104,-174],[-185,-97],[-121,-159],[-9,-256],[-32,-65],[111,-96],[157,-259]],[[85652,73393],[-40,-143],[-118,-39],[-197,-29],[-108,-266],[-124,21],[-17,-54]],[[85048,72883],[-135,112],[-34,-111],[-81,-49],[-10,112],[-72,54],[-75,94],[76,260],[66,69],[-25,108],[71,319],[-18,96],[-163,65],[-131,158]],[[84517,74170],[227,379],[306,318],[191,419],[131,-185],[241,-22],[-44,312],[429,254],[111,331],[179,-348]],[[85652,73393],[240,-697],[68,-383],[3,-681],[-105,-325],[-252,-113],[-222,-245],[-250,-51],[-31,322],[51,443],[-122,615],[206,99],[-190,506]],[[82410,80055],[-135,-446],[-197,-590],[72,-241],[157,74],[274,-92],[214,219],[223,-189],[251,-413],[-30,-210],[-219,66],[-404,-78],[-195,-168],[-204,-391],[-423,-229],[-277,-313],[-286,120],[-156,53],[-146,-381],[89,-227],[45,-195],[-194,-199],[-200,-316],[-324,-208],[-417,-22],[-448,-205],[-324,-318],[-123,184],[-336,-1],[-411,359],[-274,88],[-369,-82],[-574,133],[-306,-14],[-163,351],[-127,544],[-171,66],[-336,368],[-374,83],[-330,101],[-100,256],[107,690],[-192,476],[-396,222],[-233,313],[-73,413]],[[75742,63602],[-147,937],[-76,-2],[-46,-377],[-152,306],[86,336],[124,34],[128,500],[-160,101],[-257,-8],[-265,81],[-24,410],[-133,30],[-220,255],[-98,-401],[200,-313],[-173,-220],[-62,-215],[171,-159],[-47,-356],[96,-444],[43,-486]],[[74730,63611],[-39,-216],[-189,7],[-343,-122],[16,-445],[-148,-349],[-400,-398],[-311,-695],[-209,-373],[-276,-387],[-1,-271],[-138,-146],[-251,-212],[-129,-31],[-84,-450],[58,-769],[15,-490],[-118,-561],[-1,-1004],[-144,-29],[-126,-450],[84,-195],[-253,-168],[-93,-401],[-112,-170],[-263,552],[-128,827],[-107,596],[-97,279],[-148,568],[-69,739],[-48,369],[-253,811],[-115,1145],[-83,756],[1,716],[-54,553],[-404,-353],[-196,70],[-362,716],[133,214],[-82,232],[-326,501]],[[68937,64577],[185,395],[612,-2],[-56,507],[-156,300],[-31,455],[-182,265],[306,619],[323,-45],[290,620],[174,599],[270,593],[-4,421],[236,342],[-224,292],[-96,400],[-99,517],[137,255],[421,-144],[310,88],[268,496]],[[71621,71550],[298,-692],[-28,-482],[111,-303],[-9,-301],[-200,79],[78,-651],[273,-374],[386,-413]],[[72530,68413],[-176,-268],[-108,-553],[269,-224],[262,-289],[362,-332],[381,-76],[160,-301],[215,-56],[334,-138],[231,10],[32,234],[-36,375],[21,255]],[[74477,67050],[170,124],[23,-465]],[[74670,66709],[6,-119],[252,-224],[175,92],[234,-39],[227,17],[20,363],[-113,189]],[[75471,66988],[224,74],[252,439],[321,376],[233,-145],[198,249],[130,-367],[-94,-248],[300,-89]],[[75657,62792],[-79,308],[-16,301],[-53,285],[-116,344],[-256,23],[25,-243],[-87,-329],[-118,120],[-41,-108],[-78,65],[-108,53]],[[74670,66709],[184,439],[150,150],[198,-137],[147,-14],[122,-159]],[[72530,68413],[115,141],[223,-182],[280,-385],[157,-84],[93,-284],[216,-117],[225,-259],[314,-136],[324,-57]],[[68937,64577],[-203,150],[-83,424],[-215,450],[-512,-111],[-451,-11],[-391,-83]],[[67082,65396],[105,687],[400,305],[-23,272],[-133,96],[-7,520],[-266,260],[-112,357],[-137,310]],[[66909,68203],[465,-301],[278,88],[166,-75],[56,129],[194,-52],[361,246],[10,503],[154,334],[207,-1],[31,166],[212,77],[103,-55],[108,166],[-15,355],[118,356],[177,150],[-110,390],[265,-18],[76,213],[-12,227],[139,248],[-32,294],[-66,250],[163,258],[298,124],[319,68],[141,109],[162,67]],[[70877,72519],[205,-276],[82,-454],[457,-239]],[[68841,72526],[85,-72],[201,189],[93,-114],[90,271],[166,-12],[43,86],[29,239],[120,205],[150,-134],[-30,-181],[84,-28],[-26,-496],[110,-194],[97,125],[123,58],[173,265],[192,-44],[286,-1]],[[70827,72688],[50,-169]],[[66909,68203],[252,536],[-23,380],[-210,100],[-22,375],[-91,472],[119,323],[-121,87],[76,430],[113,736]],[[67002,71642],[284,-224],[209,79],[58,268],[219,89],[157,180],[55,472],[234,114],[44,211],[131,-158],[84,-19]],[[69725,74357],[-101,-182],[-303,98],[-26,-340],[301,46],[343,-192],[526,89]],[[70465,73876],[70,-546],[91,59],[169,-134],[-10,-230],[42,-337]],[[72294,75601],[-39,-134],[-438,-320],[-99,-234],[-356,-70],[-105,-378],[-294,80],[-192,-116],[-266,-279],[39,-138],[-79,-136]],[[67002,71642],[-24,498],[-207,21],[-318,523],[-221,65],[-308,299],[-197,55],[-122,-110],[-186,17],[-197,-338],[-244,-114]],[[64978,72558],[-52,417],[40,618],[-216,200],[71,405],[-184,34],[61,498],[262,-145],[244,189],[-202,355],[-80,338],[-224,-151],[-28,-433],[-87,383]],[[62436,72541],[-152,473],[55,183],[-87,678],[190,168]],[[62442,74043],[44,-223],[141,-273],[190,-78]],[[62817,73469],[101,17]],[[62918,73486],[327,436],[104,44],[82,-174],[-95,-292],[173,-309],[69,29]],[[63578,73220],[88,-436],[263,-123],[193,-296],[395,-102],[434,156],[27,139]],[[67082,65396],[-523,179],[-303,136],[-313,76],[-118,725],[-133,105],[-214,-106],[-280,-286],[-339,196],[-281,454],[-267,168],[-186,561],[-205,788],[-149,-96],[-177,196],[-104,-231]],[[59999,71049],[-26,452],[68,243]],[[60041,71744],[74,129],[75,130],[15,329],[91,-115],[306,165],[147,-112],[229,2],[320,222],[149,-10],[316,92]],[[62817,73469],[-113,342],[1,91],[-123,-2],[-82,159],[-58,-16]],[[62442,74043],[-109,172],[-207,147],[27,288],[-47,208]],[[62106,74858],[386,92]],[[62492,74950],[57,-155],[106,-103],[-56,-148],[148,-202],[-78,-189],[118,-160],[124,-97],[7,-410]],[[55734,91409],[371,-289],[433,-402],[8,-910],[93,-230]],[[56639,89578],[-478,-167],[-269,-413],[43,-361],[-441,-475],[-537,-509],[-202,-832],[198,-416],[265,-328],[-255,-666],[-289,-138],[-106,-992],[-157,-554],[-337,57],[-158,-468],[-321,-27],[-89,558],[-232,671],[-211,835]],[[58829,81362],[-239,-35],[-85,-129],[-18,-298],[-111,57],[-250,-28],[-73,138],[-104,-103],[-105,86],[-218,12],[-310,141],[-281,47],[-215,-14],[-152,-160],[-133,-23]],[[56535,81053],[-6,263],[-85,274],[166,121],[2,235],[-77,225],[-12,261]],[[56523,82432],[268,-4],[302,223],[64,333],[228,190],[-26,264]],[[57359,83438],[169,100],[298,228]],[[60617,78409],[-222,-48],[-185,-191],[-260,-31],[-239,-220],[14,-317]],[[59287,77741],[-38,64],[-432,149],[-19,221],[-257,-73],[-103,-325],[-215,-437]],[[58223,77340],[-126,101],[-131,-95],[-124,109]],[[57842,77455],[70,64],[49,203],[76,188],[-20,106],[58,47],[27,-81],[164,-18],[74,44],[-52,60],[19,88],[-97,150],[-40,247],[-101,97],[20,200],[-125,159],[-115,22],[-204,184],[-185,-58],[-66,-87]],[[57394,79070],[-118,0],[-69,-139],[-205,-56],[-95,-91],[-129,144],[-178,3],[-172,65],[-120,-127]],[[56308,78869],[-19,159],[-155,161]],[[56134,79189],[55,238],[77,154]],[[56266,79581],[60,-35],[-71,266],[252,491],[138,69],[29,166],[-139,515]],[[56266,79581],[-264,227],[-200,-84],[-131,61],[-165,-127],[-140,210],[-114,-81],[-16,36]],[[55236,79823],[-127,291],[-207,36],[-26,185],[-191,66],[-41,-153],[-151,122],[17,163],[-207,51],[-132,191]],[[54171,80775],[-114,377],[22,204],[-69,316],[-101,210],[77,158],[-64,300]],[[53922,82340],[189,174],[434,273],[350,200],[277,-100],[21,-144],[268,-7]],[[56314,82678],[142,-64],[67,-182]],[[54716,79012],[-21,-241],[-156,-2],[53,-128],[-92,-380]],[[54500,78261],[-53,-100],[-243,-14],[-140,-134],[-229,45]],[[53835,78058],[-398,153],[-62,205],[-274,-102],[-32,-113],[-169,84]],[[52900,78285],[-142,16],[-125,108],[42,145],[-10,104]],[[52665,78658],[83,33],[141,-164],[39,156],[245,-25],[199,106],[133,-18],[87,-121],[26,100],[-40,385],[100,75],[98,272]],[[53776,79457],[206,-190],[157,242],[98,44],[215,-180],[131,30],[128,-111]],[[54711,79292],[-23,-75],[28,-205]],[[56308,78869],[-170,-123],[-131,-401],[-168,-401],[-223,-111]],[[55616,77833],[-173,26],[-213,-155]],[[55230,77704],[-104,-89],[-229,114],[-208,253],[-88,73]],[[54601,78055],[-54,200],[-47,6]],[[54716,79012],[141,-151],[103,-65],[233,73],[22,118],[111,18],[135,92],[30,-38],[130,74],[66,139],[91,36],[297,-180],[59,61]],[[57842,77455],[-50,270],[30,252],[-9,259],[-160,352],[-89,249],[-86,175],[-84,58]],[[58223,77340],[6,-152],[-135,-128],[-84,56],[-78,-713]],[[57932,76403],[-163,62],[-202,215],[-327,-138],[-138,-150],[-408,31],[-213,92],[-108,-43],[-80,243]],[[56293,76715],[-51,103],[65,99],[-69,74],[-87,-133],[-162,172],[-22,244],[-169,139],[-31,188],[-151,232]],[[55907,83187],[-59,497]],[[55848,83684],[318,181],[466,-38],[273,59],[39,-123],[148,-38],[267,-287]],[[55848,83684],[10,445],[136,371],[262,202],[221,-442],[223,12],[53,453]],[[56753,84725],[237,105],[121,-73],[239,-219],[229,-1]],[[56753,84725],[32,349],[-102,-75],[-176,210],[-24,340],[351,164],[350,86],[301,-97],[287,17]],[[54171,80775],[-124,-62],[-73,68],[-70,-113],[-200,-114],[-103,-147],[-202,-129],[49,-176],[30,-249],[141,-142],[157,-254]],[[52665,78658],[-298,181],[-57,-128],[-236,4]],[[51718,79804],[16,259],[-56,133]],[[51678,80196],[32,400]],[[51710,80596],[-47,619],[167,0],[70,222],[69,541],[-51,200]],[[51918,82178],[54,125],[232,32],[52,-130],[188,291],[-63,222],[-13,335]],[[52368,83053],[210,-78],[178,90]],[[52756,83065],[4,-228],[281,-138],[-3,-210],[283,111],[156,162],[313,-233],[132,-189]],[[57932,76403],[-144,-245],[-101,-422],[89,-337]],[[57776,75399],[-239,79],[-283,-186]],[[57254,75292],[-3,-294],[-252,-56],[-196,206],[-222,-162],[-206,17]],[[56375,75003],[-20,391],[-139,189]],[[56216,75583],[46,84],[-30,70],[47,188],[105,185],[-135,255],[-24,216],[68,134]],[[57302,71436],[-35,-175],[-400,-50],[3,98],[-339,115],[52,251],[152,-199],[216,34],[207,-42],[-7,-103],[151,71]],[[57254,75292],[135,-157],[-86,-369],[-66,-67]],[[57237,74699],[-169,17],[-145,56],[-336,-154],[192,-332],[-141,-96],[-154,-1],[-147,305],[-52,-130],[62,-353],[139,-277],[-105,-129],[155,-273],[137,-171],[4,-334],[-257,157],[82,-302],[-176,-62],[105,-521],[-184,-8],[-228,257],[-104,473],[-49,393],[-108,272],[-143,337],[-18,168]],[[55597,73991],[129,287],[16,192],[91,85],[5,155]],[[55838,74710],[182,53],[106,129],[150,-12],[46,103],[53,20]],[[60041,71744],[-102,268],[105,222],[-169,-51],[-233,136],[-191,-340],[-421,-66],[-225,317],[-300,20],[-64,-245],[-192,-70],[-268,314],[-303,-11],[-165,588],[-203,328],[135,459],[-176,283],[308,565],[428,23],[117,449],[529,-78],[334,383],[324,167],[459,13],[485,-417],[399,-228],[323,91],[239,-53],[328,309]],[[61542,75120],[296,28],[268,-290]],[[57776,75399],[33,-228],[243,-190],[-51,-145],[-330,-33],[-118,-182],[-232,-319],[-87,276],[3,121]],[[55597,73991],[-48,41],[-5,130],[-154,199],[-24,281],[23,403],[38,184],[-47,93]],[[55380,75322],[-18,188],[120,291],[18,-111],[75,52]],[[55575,75742],[59,-159],[66,-60],[19,-214]],[[55719,75309],[-35,-201],[39,-254],[115,-144]],[[55230,77704],[67,-229],[89,-169],[-107,-222]],[[55279,77084],[-126,131],[-192,-8],[-239,98],[-130,-13],[-60,-123],[-99,136],[-59,-245],[136,-277],[61,-183],[127,-221],[106,-130],[105,-247],[246,-224]],[[55155,75778],[-31,-100]],[[55124,75678],[-261,218],[-161,213],[-254,176],[-233,434],[56,45],[-127,248],[-5,200],[-179,93],[-85,-255],[-82,198],[6,205],[10,9]],[[53809,77462],[194,-20],[51,100],[94,-97],[109,-11],[-1,165],[97,60],[27,239],[221,157]],[[52900,78285],[-22,-242],[-122,-100],[-206,75],[-60,-239],[-132,-19],[-48,94],[-156,-200],[-134,-28],[-120,126]],[[51576,79843],[30,331],[72,22]],[[50698,80799],[222,117]],[[50920,80916],[204,-47],[257,123],[176,-258],[153,-138]],[[50920,80916],[143,162],[244,869],[380,248],[231,-17]],[[47490,75324],[101,150],[113,86],[70,-289],[164,0],[47,75],[162,-21],[78,-296],[-129,-160],[-3,-461],[-45,-86],[-11,-280],[-120,-48],[111,-355],[-77,-388],[96,-175],[-38,-161],[-103,-222],[23,-195]],[[47929,72498],[-112,-153],[-146,83],[-143,-65],[42,462],[-26,363],[-124,55],[-67,224],[22,386],[111,215],[20,239],[58,355],[-6,250],[-56,212],[-12,200]],[[47490,75324],[14,420],[-114,257],[393,426],[340,-106],[373,3],[296,-101],[230,31],[449,-19]],[[50829,75674],[15,-344],[-263,-393],[-356,-125],[-25,-199],[-171,-327],[-107,-481],[108,-338],[-160,-263],[-60,-384],[-210,-118],[-197,-454],[-352,-9],[-265,11],[-174,-209],[-106,-223],[-136,49],[-103,199],[-79,340],[-259,92]],[[48278,82406],[46,-422],[-210,-528],[-493,-349],[-393,89],[225,617],[-145,601],[378,463],[210,276]],[[47896,83153],[57,-317],[-57,-317],[172,9],[210,-122]],[[96049,38125],[228,-366],[144,-272],[-105,-142],[-153,160],[-199,266],[-179,313],[-184,416],[-38,201],[119,-9],[156,-201],[122,-200],[89,-166]],[[95032,44386],[78,-203],[-194,4],[-106,363],[166,-142],[56,-22]],[[94910,44908],[-42,-109],[-206,512],[-57,353],[94,0],[100,-473],[111,-283]],[[94680,44747],[-108,-14],[-170,60],[-58,91],[17,235],[183,-93],[91,-124],[45,-155]],[[94344,45841],[65,-187],[12,-119],[-218,251],[-152,212],[-104,197],[41,60],[128,-142],[228,-272]],[[93649,46431],[111,-193],[-56,-33],[-121,134],[-114,243],[14,99],[166,-250]],[[99134,26908],[-105,-319],[-138,-404],[-214,-236],[-48,155],[-116,85],[160,486],[-91,326],[-299,236],[8,214],[201,206],[47,455],[-13,382],[-113,396],[8,104],[-133,244],[-218,523],[-117,418],[104,46],[151,-328],[216,-153],[78,-526],[202,-622],[5,403],[126,-161],[41,-447],[224,-192],[188,-48],[158,226],[141,-69],[-67,-524],[-85,-345],[-212,12],[-74,-179],[26,-254],[-41,-110]],[[97129,24846],[238,310],[167,306],[123,441],[106,149],[41,330],[195,273],[61,-251],[63,-244],[198,239],[80,-249],[0,-249],[-103,-274],[-182,-435],[-142,-238],[103,-284],[-214,-7],[-238,-223],[-75,-387],[-157,-597],[-219,-264],[-138,-169],[-256,13],[-180,194],[-302,42],[-46,217],[149,438],[349,583],[179,111],[200,225]],[[91024,26469],[166,-39],[20,-702],[-95,-203],[-29,-476],[-97,162],[-193,-412],[-57,32],[-171,19],[-171,505],[-38,390],[-160,515],[7,271],[181,-52],[269,-204],[151,81],[217,113]],[[85040,31546],[-294,-303],[-241,-137],[-53,-309],[-103,-240],[-236,-15],[-174,-52],[-246,107],[-199,-64],[-191,-27],[-165,-315],[-81,26],[-140,-167],[-133,-187],[-203,23],[-186,0],[-295,377],[-149,113],[6,338],[138,81],[47,134],[-10,212],[34,411],[-31,350],[-147,598],[-45,337],[12,336],[-111,385],[-7,174],[-123,235],[-35,463],[-158,467],[-39,252],[122,-255],[-93,548],[137,-171],[83,-229],[-5,303],[-138,465],[-26,186],[-65,177],[31,341],[56,146],[38,295],[-29,346],[114,425],[21,-450],[118,406],[225,198],[136,252],[212,217],[126,46],[77,-73],[219,220],[168,66],[42,129],[74,54],[153,-14],[292,173],[151,262],[71,316],[163,300],[13,236],[7,321],[194,502],[117,-510],[119,118],[-99,279],[87,287],[122,-128],[34,449],[152,291],[67,233],[140,101],[4,165],[122,-69],[5,148],[122,85],[134,80],[205,-271],[155,-350],[173,-4],[177,-56],[-59,325],[133,473],[126,155],[-44,147],[121,338],[168,208],[142,-70],[234,111],[-5,302],[-204,195],[148,86],[184,-147],[148,-242],[234,-151],[79,60],[172,-182],[162,169],[105,-51],[65,113],[127,-292],[-74,-316],[-105,-239],[-96,-20],[32,-236],[-81,-295],[-99,-291],[20,-166],[221,-327],[214,-189],[143,-204],[201,-350],[78,1],[145,-151],[43,-183],[265,-200],[183,202],[55,317],[56,262],[34,324],[85,470],[-39,286],[20,171],[-32,339],[37,445],[53,120],[-43,197],[67,313],[52,325],[7,168],[104,222],[78,-289],[19,-371],[70,-71],[11,-249],[101,-300],[21,-335],[-10,-214],[100,-464],[179,223],[92,-250],[133,-231],[-29,-262],[60,-506],[42,-295],[70,-72],[75,-505],[-27,-307],[90,-400],[301,-309],[197,-281],[186,-257],[-37,-143],[159,-371],[108,-639],[111,130],[113,-256],[68,91],[48,-626],[197,-363],[129,-226],[217,-478],[78,-475],[7,-337],[-19,-365],[132,-502],[-16,-523],[-48,-274],[-75,-527],[6,-339],[-55,-423],[-123,-538],[-205,-290],[-102,-458],[-93,-292],[-82,-510],[-107,-294],[-70,-442],[-36,-407],[14,-187],[-159,-205],[-311,-22],[-257,-242],[-127,-229],[-168,-254],[-230,262],[-170,104],[43,308],[-152,-112],[-243,-428],[-240,160],[-158,94],[-159,42],[-269,171],[-179,364],[-52,449],[-64,298],[-137,240],[-267,71],[91,287],[-67,438],[-136,-408],[-247,-109],[146,327],[42,341],[107,289],[-22,438],[-226,-504],[-174,-202],[-106,-470],[-217,243],[9,313],[-174,429],[-147,221],[52,137],[-356,358],[-195,17],[-267,287],[-498,-56],[-359,-211],[-317,-197],[-265,39]],[[72718,55024],[-42,-615],[-116,-168],[-242,-135],[-132,470],[-49,849],[126,959],[192,-328],[129,-416],[134,-616]],[[80409,61331],[-228,183],[-8,509],[137,267],[304,166],[159,-14],[62,-226],[-122,-260],[-64,-341],[-240,-284]],[[84517,74170],[-388,-171],[-204,-277],[-300,-161],[148,274],[-58,230],[220,397],[-147,310],[-242,-209],[-314,-411],[-171,-381],[-272,-29],[-142,-275],[147,-400],[227,-97],[9,-265],[220,-173],[311,422],[247,-230],[179,-15],[45,-310],[-393,-165],[-130,-319],[-270,-296],[-142,-414],[299,-325],[109,-581],[169,-541],[189,-454],[-5,-439],[-174,-161],[66,-315],[164,-184],[-43,-481],[-71,-468],[-155,-53],[-203,-640],[-225,-775],[-258,-705],[-382,-545],[-386,-498],[-313,-68],[-170,-262],[-96,192],[-157,-294],[-388,-296],[-294,-90],[-95,-624],[-154,-35],[-73,429],[66,228],[-373,189],[-131,-96]],[[83826,64992],[-167,-947],[-119,-485],[-146,499],[-32,438],[163,581],[223,447],[127,-176],[-49,-357]],[[53835,78058],[-31,-291],[67,-251]],[[53871,77516],[-221,86],[-226,-210],[15,-293],[-34,-168],[91,-301],[261,-298],[140,-488],[309,-476],[217,3],[68,-130],[-78,-118],[249,-214],[204,-178],[238,-308],[29,-111],[-52,-211],[-154,276],[-242,97],[-116,-382],[200,-219],[-33,-309],[-116,-35],[-148,-506],[-116,-46],[1,181],[57,317],[60,126],[-108,342],[-85,298],[-115,74],[-82,255],[-179,107],[-120,238],[-206,38],[-217,267],[-254,384],[-189,340],[-86,585],[-138,68],[-226,195],[-128,-80],[-161,-274],[-115,-43]],[[54100,73116],[211,51],[-100,-465],[41,-183],[-58,-303],[-213,222],[-141,64],[-387,300],[38,304],[325,-54],[284,64]],[[52419,74744],[139,183],[166,-419],[-39,-782],[-126,38],[-113,-197],[-105,156],[-11,713],[-64,338],[153,-30]],[[52368,83053],[-113,328],[-8,604],[46,159],[80,177],[244,37],[98,163],[223,167],[-9,-304],[-82,-192],[33,-166],[151,-89],[-68,-223],[-83,64],[-200,-425],[76,-288]],[[53436,83731],[88,-296],[-166,-478],[-291,333],[-39,246],[408,195]],[[47896,83153],[233,24],[298,-365],[-149,-406]],[[49140,82132],[1,0],[40,343],[-186,364],[-4,8],[-337,104],[-66,160],[101,264],[-92,163],[-149,-279],[-17,569],[-140,301],[101,611],[216,480],[222,-47],[335,49],[-297,-639],[283,81],[304,-3],[-72,-481],[-250,-530],[287,-38],[22,-62],[248,-697],[190,-95],[171,-673],[79,-233],[337,-113],[-34,-378],[-142,-173],[111,-305],[-250,-310],[-371,6],[-473,-163],[-130,116],[-183,-276],[-257,67],[-195,-226],[-148,118],[407,621],[249,127],[-2,1],[-434,98],[-79,235],[291,183],[-152,319],[52,387],[413,-54]],[[45969,89843],[-64,-382],[314,-403],[-361,-451],[-801,-405],[-240,-107],[-365,87],[-775,187],[273,261],[-605,289],[492,114],[-12,174],[-583,137],[188,385],[421,87],[433,-400],[422,321],[349,-167],[453,315],[461,-42]],[[63495,75281],[146,-311],[141,-419],[130,-28],[85,-159],[-228,-47],[-49,-459],[-48,-207],[-101,-138],[7,-293]],[[62492,74950],[68,96],[207,-169],[149,-36],[38,70],[-136,319],[72,82]],[[61542,75120],[42,252],[-70,403],[-160,218],[-154,68],[-102,181]],[[83564,58086],[-142,450],[238,-22],[97,-213],[-74,-510],[-119,295]],[[84051,56477],[70,165],[30,367],[153,35],[-44,-398],[205,570],[-26,-563],[-100,-195],[-87,-373],[-87,-175],[-171,409],[57,158]],[[85104,55551],[28,-392],[16,-332],[-94,-540],[-102,602],[-130,-300],[89,-435],[-79,-277],[-327,343],[-78,428],[84,280],[-176,280],[-87,-245],[-131,23],[-205,-330],[-46,173],[109,498],[175,166],[151,223],[98,-268],[212,162],[45,264],[196,15],[-16,457],[225,-280],[23,-297],[20,-218]],[[82917,56084],[-369,-561],[136,414],[200,364],[167,409],[146,587],[49,-482],[-183,-325],[-146,-406]],[[83982,61347],[-46,-245],[95,-423],[-73,-491],[-164,-196],[-43,-476],[62,-471],[147,-65],[123,70],[347,-328],[-27,-321],[91,-142],[-29,-272],[-216,290],[-103,310],[-71,-217],[-177,354],[-253,-87],[-138,130],[14,244],[87,151],[-83,136],[-36,-213],[-137,340],[-41,257],[-11,566],[112,-195],[29,925],[90,535],[169,-1],[171,-168],[85,153],[26,-150]],[[83899,57324],[-43,282],[166,-183],[177,1],[-5,-247],[-129,-251],[-176,-178],[-10,275],[20,301]],[[84861,57766],[78,-660],[-214,157],[5,-199],[68,-364],[-132,-133],[-11,416],[-84,31],[-43,357],[163,-47],[-4,224],[-169,451],[266,-13],[77,-220]],[[78372,54256],[64,-56],[164,-356],[116,-396],[16,-398],[-29,-269],[27,-203],[20,-349],[98,-163],[109,-523],[-5,-199],[-197,-40],[-263,438],[-329,469],[-32,301],[-161,395],[-38,489],[-100,322],[30,431],[-61,250]],[[80461,51765],[204,-202],[214,110],[56,500],[119,112],[333,128],[199,467],[137,374]],[[81723,53254],[126,-307],[58,202],[133,-19],[16,377],[13,291]],[[82069,53798],[214,411],[140,462],[112,2],[143,-299],[13,-257],[183,-165],[231,-177],[-20,-232],[-186,-29],[50,-289],[-205,-201]],[[81723,53254],[110,221],[236,323]],[[53809,77462],[62,54]],[[57797,86326],[-504,-47],[-489,-216],[-452,-125],[-161,323],[-269,193],[62,582],[-135,533],[133,345],[252,371],[635,640],[185,124],[-28,250],[-387,279]],[[54711,79292],[39,130],[123,-10],[95,61],[7,55],[54,28],[18,134],[64,26],[43,106],[82,1]],[[60669,61213],[161,-684],[77,-542],[152,-288],[379,-558],[154,-336],[151,-341],[87,-203],[136,-178]],[[61966,58083],[-83,-144],[-119,51]],[[61764,57990],[-95,191],[-114,346],[-124,190],[-71,204],[-242,237],[-191,7],[-67,124],[-163,-139],[-168,268],[-87,-441],[-323,124]],[[89411,73729],[-256,-595],[4,-610],[-104,-472],[48,-296],[-145,-416],[-355,-278],[-488,-36],[-396,-675],[-186,227],[-12,442],[-483,-130],[-329,-279],[-325,-11],[282,-435],[-186,-1004],[-179,-248],[-135,229],[69,533],[-176,172],[-113,405],[263,182],[145,371],[280,306],[203,403],[553,177],[297,-121],[291,1050],[185,-282],[408,591],[158,229],[174,723],[-47,664],[117,374],[295,108],[152,-819],[-9,-479]],[[90169,76553],[197,250],[62,-663],[-412,-162],[-244,-587],[-436,404],[-152,-646],[-308,-9],[-39,587],[138,455],[296,33],[81,817],[83,460],[326,-615],[213,-198],[195,-126]],[[86769,70351],[154,352],[158,-68],[114,248],[204,-127],[35,-203],[-156,-357],[-114,189],[-143,-137],[-73,-346],[-181,168],[2,281]],[[64752,60417],[-201,-158],[-54,-263],[-6,-201],[-277,-249],[-444,-276],[-249,-417],[-122,-33],[-83,35],[-163,-245],[-177,-114],[-233,-30],[-70,-34],[-61,-156],[-73,-43],[-43,-150],[-137,13],[-89,-80],[-192,30],[-72,345],[8,323],[-46,174],[-54,437],[-80,243],[56,29],[-29,270],[34,114],[-12,257]],[[61883,60238],[121,189],[-28,249],[74,290],[114,-153],[75,53],[321,14],[50,-59],[269,-60],[106,30],[70,-197],[130,99],[199,620],[259,266],[801,226]],[[63448,67449],[109,-510],[137,-135],[47,-207],[190,-249],[16,-243],[-27,-197],[35,-199],[80,-165],[37,-194],[41,-145]],[[64274,65130],[53,-226]],[[61883,60238],[-37,252],[-83,178],[-22,236],[-143,212],[-148,495],[-79,482],[-192,406],[-124,97],[-184,563],[-32,411],[12,350],[-159,655],[-130,231],[-150,122],[-92,339],[15,133],[-77,306],[-81,132],[-108,440],[-170,476],[-141,406],[-139,-3],[44,325],[12,206],[34,236]],[[36483,4468],[141,0],[414,127],[419,-127],[342,-255],[120,-359],[33,-254],[11,-301],[-430,-186],[-452,-150],[-522,-139],[-582,-116],[-658,35],[-365,197],[49,243],[593,162],[239,197],[174,254],[126,220],[168,209],[180,243]],[[31586,3163],[625,-23],[599,-58],[207,243],[147,208],[288,-243],[-82,-301],[-81,-266],[-582,81],[-621,-35],[-348,197],[0,23],[-152,174]],[[29468,8472],[190,70],[321,-23],[82,301],[16,219],[-6,475],[158,278],[256,93],[147,-220],[65,-220],[120,-267],[92,-254],[76,-267],[33,-266],[-49,-231],[-76,-220],[-326,-81],[-311,-116],[-364,11],[136,232],[-327,-81],[-310,-81],[-212,174],[-16,243],[305,231]],[[21575,8103],[174,104],[353,-81],[403,-46],[305,-81],[304,69],[163,-335],[-217,46],[-337,-23],[-343,23],[-376,-35],[-283,116],[-146,243]],[[15938,7061],[60,197],[332,-104],[359,-93],[332,104],[-158,-208],[-261,-151],[-386,47],[-278,208]],[[14643,7177],[202,127],[277,-139],[425,-231],[-164,23],[-359,58],[-381,162]],[[4524,4144],[169,220],[517,-93],[277,-185],[212,-209],[76,-266],[-533,-81],[-364,208],[-163,209],[-11,35],[-180,162]],[[0,529],[16,-5],[245,344],[501,-185],[32,21],[294,188],[38,-7],[32,-4],[402,-246],[352,246],[63,34],[816,104],[265,-138],[130,-71],[419,-196],[789,-151],[625,-185],[1072,-139],[800,162],[1181,-116],[669,-185],[734,174],[773,162],[60,278],[-1094,23],[-898,139],[-234,231],[-745,128],[49,266],[103,243],[104,220],[-55,243],[-462,162],[-212,209],[-430,185],[675,-35],[642,93],[402,-197],[495,173],[457,220],[223,197],[-98,243],[-359,162],[-408,174],[-571,35],[-500,81],[-539,58],[-180,220],[-359,185],[-217,208],[-87,672],[136,-58],[250,-185],[457,58],[441,81],[228,-255],[441,58],[370,127],[348,162],[315,197],[419,58],[-11,220],[-97,220],[81,208],[359,104],[163,-196],[425,115],[321,151],[397,12],[375,57],[376,139],[299,128],[337,127],[218,-35],[190,-46],[414,81],[370,-104],[381,11],[364,81],[375,-57],[414,-58],[386,23],[403,-12],[413,-11],[381,23],[283,174],[337,92],[349,-127],[331,104],[300,208],[179,-185],[98,-208],[180,-197],[288,174],[332,-220],[375,-70],[321,-162],[392,35],[354,104],[418,-23],[376,-81],[381,-104],[147,254],[-180,197],[-136,209],[-359,46],[-158,220],[-60,220],[-98,440],[213,-81],[364,-35],[359,35],[327,-93],[283,-174],[119,-208],[376,-35],[359,81],[381,116],[342,70],[283,-139],[370,46],[239,451],[224,-266],[321,-104],[348,58],[228,-232],[365,-23],[337,-69],[332,-128],[218,220],[108,209],[278,-232],[381,58],[283,-127],[190,-197],[370,58],[288,127],[283,151],[337,81],[392,69],[354,81],[272,127],[163,186],[65,254],[-32,244],[-87,231],[-98,232],[-87,231],[-71,209],[-16,231],[27,232],[130,220],[109,243],[44,231],[-55,255],[-32,232],[136,266],[152,173],[180,220],[190,186],[223,173],[109,255],[152,162],[174,151],[267,34],[174,186],[196,115],[228,70],[202,150],[157,186],[218,69],[163,-151],[-103,-196],[-283,-174],[-120,-127],[-206,92],[-229,-58],[-190,-139],[-202,-150],[-136,-174],[-38,-231],[17,-220],[130,-197],[-190,-139],[-261,-46],[-153,-197],[-163,-185],[-174,-255],[-44,-220],[98,-243],[147,-185],[229,-139],[212,-185],[114,-232],[60,-220],[82,-232],[130,-196],[82,-220],[38,-544],[81,-220],[22,-232],[87,-231],[-38,-313],[-152,-243],[-163,-197],[-370,-81],[-125,-208],[-169,-197],[-419,-220],[-370,-93],[-348,-127],[-376,-128],[-223,-243],[-446,-23],[-489,23],[-441,-46],[-468,0],[87,-232],[424,-104],[311,-162],[174,-208],[-310,-185],[-479,58],[-397,-151],[-17,-243],[-11,-232],[327,-196],[60,-220],[353,-220],[588,-93],[500,-162],[398,-185],[506,-186],[690,-92],[681,-162],[473,-174],[517,-197],[272,-278],[136,-220],[337,209],[457,173],[484,186],[577,150],[495,162],[691,12],[680,-81],[560,-139],[180,255],[386,173],[702,12],[550,127],[522,128],[577,81],[614,104],[430,150],[-196,209],[-119,208],[0,220],[-539,-23],[-571,-93],[-544,0],[-77,220],[39,440],[125,128],[397,138],[468,139],[337,174],[337,174],[251,231],[380,104],[376,81],[190,47],[430,23],[408,81],[343,116],[337,139],[305,139],[386,185],[245,197],[261,173],[82,232],[-294,139],[98,243],[185,185],[288,116],[305,139],[283,185],[217,232],[136,277],[202,163],[331,-35],[136,-197],[332,-23],[11,220],[142,231],[299,-58],[71,-220],[331,-34],[360,104],[348,69],[315,-34],[120,-243],[305,196],[283,105],[315,81],[310,81],[283,139],[310,92],[240,128],[168,208],[207,-151],[288,81],[202,-277],[157,-209],[316,116],[125,232],[283,162],[365,-35],[108,-220],[229,220],[299,69],[326,23],[294,-11],[310,-70],[300,-34],[130,-197],[180,-174],[304,104],[327,24],[315,0],[310,11],[278,81],[294,70],[245,162],[261,104],[283,58],[212,162],[152,324],[158,197],[288,-93],[109,-208],[239,-139],[289,46],[196,-208],[206,-151],[283,139],[98,255],[250,104],[289,197],[272,81],[326,116],[218,127],[228,139],[218,127],[261,-69],[250,208],[180,162],[261,-11],[229,139],[54,208],[234,162],[228,116],[278,93],[256,46],[244,-35],[262,-58],[223,-162],[27,-254],[245,-197],[168,-162],[332,-70],[185,-162],[229,-162],[266,-35],[223,116],[240,243],[261,-127],[272,-70],[261,-69],[272,-46],[277,0],[229,-614],[-11,-150],[-33,-267],[-266,-150],[-218,-220],[38,-232],[310,12],[-38,-232],[-141,-220],[-131,-243],[212,-185],[321,-58],[321,104],[153,232],[92,220],[153,185],[174,174],[70,208],[147,289],[174,58],[316,24],[277,69],[283,93],[136,231],[82,220],[190,220],[272,151],[234,115],[153,197],[157,104],[202,93],[277,-58],[250,58],[272,69],[305,-34],[201,162],[142,393],[103,-162],[131,-278],[234,-115],[266,-47],[267,70],[283,-46],[261,-12],[174,58],[234,-35],[212,-127],[250,81],[300,0],[255,81],[289,-81],[185,197],[141,196],[191,163],[348,439],[179,-81],[212,-162],[185,-208],[354,-359],[272,-12],[256,0],[299,70],[299,81],[229,162],[190,174],[310,23],[207,127],[218,-116],[141,-185],[196,-185],[305,23],[190,-150],[332,-151],[348,-58],[288,47],[218,185],[185,185],[250,46],[251,-81],[288,-58],[261,93],[250,0],[245,-58],[256,-58],[250,104],[299,93],[283,23],[316,0],[255,58],[251,46],[76,290],[11,243],[174,-162],[49,-266],[92,-244],[115,-196],[234,-105],[315,35],[365,12],[250,35],[364,0],[262,11],[364,-23],[310,-46],[196,-186],[-54,-220],[179,-173],[299,-139],[310,-151],[360,-104],[375,-92],[283,-93],[315,-12],[180,197],[245,-162],[212,-185],[245,-139],[337,-58],[321,-69],[136,-232],[316,-139],[212,-208],[310,-93],[321,12],[299,-35],[332,12],[332,-47],[310,-81],[288,-139],[289,-116],[195,-173],[-32,-232],[-147,-208],[-125,-266],[-98,-209],[-131,-243],[-364,-93],[-163,-208],[-360,-127],[-125,-232],[-190,-220],[-201,-185],[-115,-243],[-70,-220],[-28,-266],[6,-220],[158,-232],[60,-220],[130,-208],[517,-81],[109,-255],[-501,-93],[-424,-127],[-528,-23],[-234,-336],[-49,-278],[-119,-220],[-147,-220],[370,-196],[141,-244],[239,-219],[338,-197],[386,-186],[419,-185],[636,-185],[142,-289],[800,-128],[53,-45],[208,-175],[767,151],[636,-186],[479,-142],[-99999,0]],[[59092,71341],[19,3],[40,143],[200,-8],[253,176],[-188,-251],[21,-111]],[[59437,71293],[-30,21],[-53,-45],[-42,12],[-14,-22],[-5,59],[-20,37],[-54,6],[-75,-51],[-52,31]],[[59437,71293],[8,-48],[-285,-240],[-136,77],[-64,237],[132,22]],[[45272,63236],[13,274],[106,161],[91,308],[-18,200],[96,417],[155,376],[93,95],[74,344],[6,315],[100,365],[185,216],[177,603],[5,8],[139,227],[259,65],[218,404],[140,158],[232,493],[-70,735],[106,508],[37,312],[179,399],[278,270],[206,244],[186,612],[87,362],[205,-2],[167,-251],[264,41],[288,-131],[121,-6]],[[56944,63578],[0,2175],[0,2101],[-83,476],[71,365],[-43,253],[101,283]],[[56990,69231],[369,10],[268,-156],[275,-175],[129,-92],[214,188],[114,169],[245,49],[198,-75],[75,-293],[65,193],[222,-140],[217,-33],[137,149]],[[59700,68010],[-78,-238],[-60,-446],[-75,-308],[-65,-103],[-93,191],[-125,263],[-198,847],[-29,-53],[115,-624],[171,-594],[210,-920],[102,-321],[90,-334],[249,-654],[-55,-103],[9,-384],[323,-530],[49,-121]],[[53191,70158],[326,-204],[117,51],[232,-98],[368,-264],[130,-526],[250,-114],[391,-248],[296,-293],[136,153],[133,272],[-65,452],[87,288],[200,277],[192,80],[375,-121],[95,-264],[104,-2],[88,-101],[276,-70],[68,-195]],[[59804,53833],[-164,643],[-127,137],[-48,236],[-141,288],[-171,42],[95,337],[147,14],[42,181]],[[61764,57990],[-98,-261],[-94,-277],[22,-163],[4,-180],[155,-10],[67,42],[62,-106]],[[61882,57035],[-61,-209],[103,-325],[102,-285],[106,-210],[909,-702],[233,4]],[[61966,58083],[66,-183],[-9,-245],[-158,-142],[119,-161]],[[61984,57352],[-102,-317]],[[61984,57352],[91,-109],[54,-245],[125,-247],[138,-2],[262,151],[302,70],[245,184],[138,39],[99,108],[158,20]],[[58449,49909],[-166,-182],[-67,60]],[[58564,52653],[115,161],[176,-132],[224,138],[195,-1],[171,272]],[[55279,77084],[100,2],[-69,-260],[134,-227],[-41,-278],[-65,-27]],[[55338,76294],[-52,-53],[-90,-138],[-41,-325]],[[55719,75309],[35,-5],[13,121],[164,91],[62,23]],[[55993,75539],[95,35],[128,9]],[[55993,75539],[-9,44],[33,71],[31,144],[-39,-4],[-54,110],[-46,28],[-36,94],[-52,36],[-40,84],[-50,-33],[-38,-196],[-66,-43]],[[55627,75874],[22,51],[-106,123],[-91,63],[-40,82],[-74,101]],[[55380,75322],[-58,46],[-78,192],[-120,118]],[[55627,75874],[-52,-132]],[[32866,56937],[160,77],[58,-21],[-11,-440],[-232,-65],[-50,53],[81,163],[-6,233]]]"),l4={scale:[.0036000360003600037,.0016925586033320105],translate:[-180,-85.60903777459771]},lh={objects:a4,arcs:c4,transform:l4};for(const i of document.querySelectorAll("[data-video-preview]")){const e=i.querySelector("button"),t=i.querySelector("video"),n=i.querySelector(".video-status"),s=r=>{n.textContent=r,n.hidden=!r};e.addEventListener("click",()=>{e.hidden=!0,t.hidden=!1,t.hasAttribute("src")||(t.src=t.dataset.src),s("Loading video…"),t.focus(),t.play().catch(()=>{t.error||s("Press play to start the video.")})}),t.addEventListener("playing",()=>s("")),t.addEventListener("canplay",()=>s("")),t.addEventListener("waiting",()=>s("Loading video…")),t.addEventListener("error",()=>{t.hidden=!0,e.hidden=!1,s("Video could not load. Click to retry."),t.removeAttribute("src"),t.load()})}function il(){document.querySelectorAll("[data-video-preview] video").forEach(i=>i.pause())}const Ei=document.querySelector(".mars-archive"),Ti=document.querySelector(".mars-lightbox"),sl=document.querySelector("#mars-video"),cd=sl.querySelector("button");let ld,uh=!1;cd.addEventListener("click",()=>{const i=document.createElement("iframe");i.title="Making Humans a Multiplanetary Species — SpaceX, 2016",i.src="https://www.youtube-nocookie.com/embed/H7Uyfqi_TE8?rel=0&autoplay=1",i.allow="autoplay; encrypted-media; fullscreen; picture-in-picture",i.allowFullscreen=!0,i.referrerPolicy="strict-origin-when-cross-origin",sl.replaceChildren(i)});function rl(){return Ti.hidden?!1:(Ti.hidden=!0,ld?.focus(),!0)}Ei.querySelector(".mars-image-button").addEventListener("click",i=>{ld=i.currentTarget,Ti.querySelector("img").src=Ei.querySelector(".mars-image-button img").src,Ti.hidden=!1,Ti.querySelector("button").focus()});Ti.addEventListener("click",i=>{(i.target===Ti||i.target.closest("button"))&&rl()});Ei.querySelector(".mars-image-button img").addEventListener("error",i=>{i.target.hidden=!0,Ei.querySelector(".mars-image-button").disabled=!0;const e=document.createElement("p");e.className="mars-media-note",e.textContent="Image unavailable. Please use the NASA/JPL source link below.",i.target.parentElement.after(e)},{once:!0});function ol(i){if(Ei.hidden=!i,i&&!uh){Ei.scrollTop=0;const e=Ei.querySelector("img[data-src]");e&&(e.src=e.dataset.src,e.removeAttribute("data-src"))}i||(rl(),sl.replaceChildren(cd)),uh=i}const hh=document.querySelector(".entry-flow"),al=document.querySelector(".entry-continue"),dh=document.querySelector(".entry-cover"),ud=document.querySelector(".entry-status");let hd=!1;Yc.onError=()=>{hd=!0};Yc.onLoad=()=>{al.disabled=!1,ud.textContent=hd?"Some details are unavailable. You can still enter.":"Scene ready"};window.setTimeout(()=>{al.disabled&&(ud.textContent="Still loading the scene… slower connections may take a little longer.")},12e3);const u4=()=>{document.documentElement.classList.add("archive-entered"),hh.dataset.entryState="archive",dh.setAttribute("aria-hidden","true"),dh.setAttribute("inert",""),document.documentElement.classList.remove("entry-locked"),window.setTimeout(()=>R4(),420),window.setTimeout(()=>hh.remove(),850)};al?.addEventListener("click",u4);const js=document.querySelector(".list-toggle"),cl=document.querySelector("#archive-list");function dd(i){cl.hidden=!i,js.setAttribute("aria-expanded",String(i)),js.setAttribute("aria-label",i?"Close archive list":"Open archive list"),js.querySelector("span").textContent=i?"−":"+"}js.addEventListener("click",()=>dd(cl.hidden));const vt=document.querySelector("#space"),fd=document.querySelector("#markers"),hn=document.querySelector(".event-panel"),Ks=document.querySelector(".columbus-archive"),bi=document.querySelector(".columbus-lightbox"),Tc=document.querySelector(".columbus-lightbox-content"),Zs=document.querySelector(".westward-archive"),Ai=document.querySelector(".westward-lightbox"),bc=document.querySelector(".westward-lightbox-content"),Vn=document.querySelector(".space-race-archive"),Gn=document.querySelector(".space-race-lightbox"),Ac=document.querySelector(".space-race-lightbox-content"),hs=document.querySelector(".space-race-signal-toggle"),Pn=new ig({canvas:vt,antialias:!0,alpha:!1});Pn.setPixelRatio(Math.min(window.devicePixelRatio,2));Pn.setSize(window.innerWidth,window.innerHeight);Pn.setClearColor(526344,1);Pn.outputColorSpace=gt;const Nt=new Tp;Nt.fog=new Vc(526344,.0085);const ft=new Bt(39,window.innerWidth/window.innerHeight,.1,1200),pd=()=>window.innerWidth<=720?{position:new E(7,10,58),target:new E(13,0,-5)}:{position:new E(1.2,13.7,55.5),target:new E(11.75,3,1.25)},fo=pd();new E(0,1.4,17),new E(0,0,0);ft.position.copy(fo.position);const et=new rg(ft,vt);et.enableDamping=!0;et.dampingFactor=.045;et.enablePan=!0;et.panSpeed=.65;et.screenSpacePanning=!0;et.mouseButtons.MIDDLE=oi.PAN;et.mouseButtons.RIGHT=oi.PAN;et.addEventListener("start",()=>{yt=null});et.minDistance=13;et.maxDistance=165;et.rotateSpeed=.34;et.zoomSpeed=.6;et.target.copy(fo.target);Nt.add(new Qp(14211282,1445132,.48));const md=new Zc(16777215,3.25);md.position.set(-10,8,16);Nt.add(md);const gd=new Zc(7151386,2.3);gd.position.set(24,-4,-22);Nt.add(gd);function Eo(i){let e=i;return()=>(e=e*1664525+1013904223>>>0)/4294967296}function h4(i,e=1024){const t=document.createElement("canvas");t.width=e,t.height=e/2;const n=t.getContext("2d");n.fillStyle=i==="earth"?"#070808":i==="mars"?"#411b18":"#8f908d",n.fillRect(0,0,t.width,t.height);const s=Eo(i==="earth"?1492:i==="moon"?1957:2030);if(i==="earth"){const o=r4(lh,lh.objects.countries).features.flatMap(u=>u.geometry.type==="Polygon"?u.geometry.coordinates:u.geometry.coordinates.flat()),a=([u,h])=>[(u+180)/360*t.width,(90-h)/180*t.height],c=()=>{n.beginPath(),o.forEach(u=>{u.forEach((h,d)=>{const[f,g]=a(h);d?n.lineTo(f,g):n.moveTo(f,g)}),n.closePath()})},l=(u,h)=>{n.strokeStyle=`rgba(214,215,211,${h})`,n.lineWidth=.55,n.beginPath();for(let d=0;d<=t.height/u;d++){const f=d*u,g=d%2?u/2:0;for(let _=-u;_<t.width+u;_+=u){const m=_+g;n.moveTo(m,f),n.lineTo(m+u,f),n.moveTo(m,f),n.lineTo(m-u/2,f+u),n.moveTo(m,f),n.lineTo(m+u/2,f+u)}}n.stroke()};l(22,.075),c(),n.fillStyle="#141514",n.fill(),n.save(),c(),n.clip(),l(22,.29),n.fillStyle="rgba(240,241,236,.37)";for(let u=7;u<t.height;u+=17)for(let h=7;h<t.width;h+=17)s()>.47&&(n.beginPath(),n.arc(h+(s()-.5)*7,u+(s()-.5)*7,.45,0,Math.PI*2),n.fill());n.restore(),c(),n.strokeStyle="rgba(245,245,240,.86)",n.lineWidth=1.35,n.stroke(),n.strokeStyle="rgba(248,248,244,.15)",n.lineWidth=3.8,n.stroke()}else{const o=i==="moon"?420:230;for(let a=0;a<o;a++){const c=s()*t.width,l=s()*t.height,u=1.2+Math.pow(s(),2.25)*(i==="moon"?24:38),h=.035+s()*.12;n.fillStyle=i==="mars"?`rgba(22,6,5,${h*.72})`:`rgba(36,37,35,${h})`,n.beginPath(),n.arc(c,l,u,0,Math.PI*2),n.fill(),n.strokeStyle=i==="mars"?`rgba(170,83,69,${h})`:`rgba(236,236,229,${h*.7})`,n.lineWidth=Math.max(.7,u*.08),n.beginPath(),n.arc(c-u*.08,l-u*.1,u*.9,0,Math.PI*2),n.stroke()}i==="mars"&&(n.strokeStyle="rgba(126,48,40,.28)",n.lineWidth=18,n.beginPath(),n.moveTo(0,t.height*.55),n.bezierCurveTo(t.width*.25,t.height*.42,t.width*.65,t.height*.72,t.width,t.height*.48),n.stroke())}const r=new xc(t);return r.colorSpace=gt,r.anisotropy=Pn.capabilities.getMaxAnisotropy(),r}function ll(i,e,t,n,s=.92){const r=new ur({map:h4(n),roughness:s,metalness:n==="moon"?.08:.02}),o=new It(new ho(e,96,64),r);o.name=i,o.position.copy(t),Nt.add(o);const a=new It(new ho(e*1.012,64,48),new si({color:n==="mars"?8137508:14277076,transparent:!0,opacity:.08,side:zt}));return o.add(a),o}const on=ll("Earth",7.1,new E(0,0,0),"earth");on.rotation.z=-.18;function d4(){new nl().load("./earth-model/earth.glb",i=>{const e=i.scene,t=new Gt().setFromObject(e),n=t.getCenter(new E),s=t.getSize(new E),r=Math.max(s.x,s.y,s.z)*.5||1;e.traverse(o=>{if(!o.isMesh)return;o.geometry.translate(-n.x,-n.y,-n.z),o.geometry.scale(7.1/r,7.1/r,7.1/r),o.geometry.computeVertexNormals();const a=o.material.map,c=o.material.normalMap,l=new Zh().load("./earth-model/roughness.webp");l.flipY=!1,[a,c,l].filter(Boolean).forEach(u=>{u.anisotropy=Pn.capabilities.getMaxAnisotropy()}),on.geometry.dispose(),on.material.dispose(),on.geometry=o.geometry,on.material=new ur({map:a,normalMap:c,roughnessMap:l,roughness:.78,metalness:.04})})},void 0,i=>console.warn("Earth model unavailable; keeping generated Earth.",i))}d4();const mn=ll("Moon",1.94,new E(18,5.55,-3),"moon");function f4(){const i=e=>{const t=new Gt().setFromObject(e),n=t.getCenter(new E),s=t.getSize(new E),r=Math.max(s.x,s.y,s.z)*.5||1;e.traverse(o=>{o.isMesh&&(o.geometry.translate(-n.x,-n.y,-n.z),o.geometry.scale(1.94/r,1.94/r,1.94/r),o.geometry.computeVertexNormals(),mn.geometry.dispose(),mn.geometry=o.geometry,mn.material.dispose(),mn.material=o.material)})};new nl().load("./moon-model/moon.glb",e=>i(e.scene),void 0,e=>{console.warn("GLB Moon model unavailable; keeping generated Moon.",e)})}f4();const Wn=ll("Mars",3.65,new E(35,7.7,-18),"mars");function p4(){new nl().load("./mars-model/mars.glb",i=>{const e=i.scene,t=new Gt().setFromObject(e),n=t.getCenter(new E),s=t.getSize(new E),r=Math.max(s.x,s.y,s.z)*.5||1;e.traverse(o=>{o.isMesh&&(o.geometry.translate(-n.x,-n.y,-n.z),o.geometry.scale(3.65/r,3.65/r,3.65/r),o.geometry.computeVertexNormals(),Wn.geometry.dispose(),Wn.geometry=o.geometry,Wn.material.dispose(),Wn.material=o.material)})},void 0,i=>console.warn("GLB Mars model unavailable; keeping generated Mars.",i))}p4();const fh=[{mesh:on,radius:7.1},{mesh:mn,radius:1.94},{mesh:Wn,radius:3.65}];function nn(i,e,t=7.18){const n=Ci.degToRad(i),s=Ci.degToRad(e);return new E(t*Math.cos(n)*Math.sin(s),t*Math.sin(n),t*Math.cos(n)*Math.cos(s))}function m4(i,e,t=.42,n=72){const s=i.clone().normalize(),r=e.clone().normalize();return Array.from({length:n+1},(o,a)=>{const c=a/n;return s.clone().lerp(r,c).normalize().multiplyScalar(7.18+Math.sin(Math.PI*c)*t)})}function ul(i,e,t,n=90){const s=i.clone().lerp(e,.5).add(t);return new Fp(i,s,e).getPoints(n)}const _d=nn(25,-45),xd=nn(39,-100);function To(i,e=Nt){const t=new rd;t.setPositions(i.flatMap(r=>[r.x,r.y,r.z]));const n=new tl({color:14145232,linewidth:1.4,dashed:!0,dashSize:.2,gapSize:.075,transparent:!0,opacity:.4,depthWrite:!1,depthTest:!1,fog:!1});n.resolution.set(window.innerWidth,window.innerHeight);const s=new Mg(t,n);return s.renderOrder=2,s.computeLineDistances(),e.add(s),s.userData.targetOpacity=.4,s.userData.targetColor=new Me(14145232),s}const hl=To(m4(_d,xd,.12,128),on),bo=To(ul(new E(5.6,2.5,3.3),mn.position.clone().add(new E(-1.5,-.3,1)),new E(0,2.4,.8),128)),dr=To(ul(new E(-3,5,3),mn.position.clone(),new E(0,7,0),128)),ws=To(ul(mn.position.clone().add(new E(1.5,.2,-.5)),Wn.position.clone().add(new E(-3,1,1)),new E(0,3.8,1.5),128)),po=[hl,bo,dr,ws];hl.userData.endpoints=["columbus","westward"];bo.userData.endpoints=["columbus","space-race"];dr.userData.endpoints=["westward","space-race"];ws.userData.endpoints=["space-race","starship"];const yd=new xe,wc=new $h;wc.params.Line2={threshold:9};let dl=!1;vt.addEventListener("pointermove",i=>{const e=vt.getBoundingClientRect();yd.set((i.clientX-e.left)/e.width*2-1,-(i.clientY-e.top)/e.height*2+1),dl=!0});vt.addEventListener("pointerleave",()=>{dl=!1});const g4=window.matchMedia("(prefers-reduced-motion: reduce)"),Yn=document.querySelector("#field-trace"),vd=[...document.querySelectorAll(".trace-node")],_4={earth:[hl],moon:[bo,dr],mars:[ws]};let Md="all",fl=null;function Ni(i="all"){Md=i;const e=fl||i;Yn?.setAttribute("data-kind",e),vd.forEach(t=>t.classList.toggle("is-active",t.classList.contains(`trace-${e}`))),po.forEach(t=>{const n=e!=="all",s=_4[e]?.includes(t);t.userData.targetOpacity=n?s?.7:.08:.4,t.userData.targetColor.set(n&&s&&t===ws?13073e3:14145232)})}Ni();let Li=!1;vd.forEach(i=>{const e=t=>{t.preventDefault(),t.stopPropagation(),Li=!0,Ni(i.classList.contains("trace-earth")?"earth":i.classList.contains("trace-moon")?"moon":"mars")};i.addEventListener("pointerdown",e),i.addEventListener("pointerup",()=>{Li=!1}),i.addEventListener("click",e)});const Sd=i=>{const e=Yn.getBoundingClientRect(),t=Math.max(0,Math.min(1,(i.clientX-e.left)/e.width));Ni(t<.34?"earth":t<.68?"moon":"mars")};Yn?.addEventListener("pointerdown",i=>{Li=!0,Yn.setPointerCapture?.(i.pointerId),Sd(i)});Yn?.addEventListener("pointermove",i=>{Li&&Sd(i)});Yn?.addEventListener("pointerup",i=>{Li=!1,Yn.releasePointerCapture?.(i.pointerId)});Yn?.addEventListener("pointercancel",()=>{Li=!1});document.addEventListener("pointerdown",i=>{Yn?.contains(i.target)||Ni("all")},!0);const pl=new qc(new _t().setFromPoints(new qh(0,0,12,12,0,Math.PI*2).getPoints(160).map(i=>new E(i.x,0,i.y))),new xo({color:6184537,transparent:!0,opacity:.26}));pl.rotation.x=.28;pl.rotation.z=.2;Nt.add(pl);const ml=new _t,Ed=[],Sa=Eo(42);for(let i=0;i<820;i++){const e=38+Math.pow(Sa(),2.15)*174,t=Sa()*Math.PI*2,n=(Sa()-.5)*130;Ed.push(Math.cos(t)*e,n,Math.sin(t)*e)}ml.setAttribute("position",new At(Ed,3));const x4=new lr({color:14079695,size:.11,transparent:!0,opacity:.3,sizeAttenuation:!0,depthWrite:!1,depthTest:!1,fog:!1,blending:wi}),Td=new Ii(ml,x4);Td.renderOrder=8;Nt.add(Td);const gl=(i,e,t)=>new Cn({uniforms:{color:{value:new Me(i)},size:{value:e},opacity:{value:t}},vertexShader:"uniform float size; void main(){ vec4 p=modelViewMatrix*vec4(position,1.0); gl_PointSize=size*(260.0/max(1.0,-p.z)); gl_Position=projectionMatrix*p; }",fragmentShader:"uniform vec3 color; uniform float opacity; void main(){ float d=distance(gl_PointCoord,vec2(.5)); float a=smoothstep(.5,.02,d); gl_FragColor=vec4(color,a*a*opacity); }",transparent:!0,depthWrite:!1,depthTest:!1,blending:wi}),bd=new Ii(ml,gl(15198175,2.2,.18));bd.renderOrder=7;Nt.add(bd);const _l=new _t,Ad=[],Ea=Eo(2049);for(let i=0;i<65;i++){const e=52+Math.pow(Ea(),1.8)*145,t=Ea()*Math.PI*2,n=(Ea()-.5)*120;Ad.push(Math.cos(t)*e,n,Math.sin(t)*e)}_l.setAttribute("position",new At(Ad,3));const y4=new lr({color:15000797,size:.15,transparent:!0,opacity:.36,sizeAttenuation:!0,depthWrite:!1,depthTest:!1,fog:!1,blending:wi}),wd=new Ii(_l,y4);wd.renderOrder=9;Nt.add(wd);const Rd=new Ii(_l,gl(15790313,3.1,.22));Rd.renderOrder=8;Nt.add(Rd);const xl=new _t,Cd=[],Ta=Eo(781);for(let i=0;i<280;i++){const e=-18+Ta()*86,t=-22+Ta()*48,n=-34+Ta()*42,s=new E(e,t,n);s.length()<18||s.distanceTo(new E(18,4.5,-3))<7||s.distanceTo(new E(35,2,-18))<9||Cd.push(e,t,n)}xl.setAttribute("position",new At(Cd,3));const v4=new lr({color:14211281,size:.13,transparent:!0,opacity:.27,sizeAttenuation:!0,depthWrite:!1,depthTest:!1,fog:!1,blending:wi}),Pd=new Ii(xl,v4);Pd.renderOrder=10;Nt.add(Pd);const Ld=new Ii(xl,gl(15132383,2.7,.14));Ld.renderOrder=9;Nt.add(Ld);const Rs=[{id:"columbus",title:"COLUMBUS",date:"1492",location:"ATLANTIC",index:"01",order:1492,localPoint:_d,parent:on,target:"earth",material:{base:5054496,emissive:2492681,roughness:.8},icon:"columbus.webp",iconColor:15263970},{id:"westward",title:"WESTWARD EXPANSION",date:"1803–1890",location:"NORTH AMERICA",index:"02",order:1803,localPoint:xd,parent:on,target:"earth",material:{base:5857374,emissive:1448473,roughness:.72},icon:"westward.webp",iconColor:13224901},{id:"space-race",title:"SPACE RACE",date:"1957–1975",location:"MOON",index:"03",order:1957,localPoint:nn(18,-35,2.02),parent:mn,target:"moon",material:{base:12961215,emissive:3487026,roughness:.62},icon:"space-race.webp",iconColor:15790313},{id:"starship",title:"STARSHIP",date:"MARS",location:"EARTH–MARS",index:"04",order:2030,localPoint:nn(12,-25,3.76),parent:Wn,target:"mars",material:{base:8071460,emissive:2885638,roughness:.7},icon:"starship.webp",iconColor:11888476}],Dd=[{date:"334鈥?23 BCE",name:"ALEXANDER鈥橲 EASTERN CAMPAIGN",order:-334,localPoint:nn(32,45)},{date:"138 BCE",name:"ZHANG QIAN鈥橲 WESTERN MISSION",order:-138,localPoint:nn(40,75)},{date:"130 BCE鈥?453",name:"SILK ROAD",order:-130,localPoint:nn(38,65)},{date:"1250鈥?300",name:"M膧ORI ARRIVAL IN AOTEAROA",order:1250,localPoint:nn(-40,175)},{date:"1405鈥?433",name:"ZHENG HE鈥橲 TREASURE VOYAGES",order:1405,localPoint:nn(20,115)},{date:"1497鈥?499",name:"DA GAMA鈥橲 INDIA ROUTE",order:1497,localPoint:nn(15,73)},{date:"1519鈥?522",name:"MAGELLAN鈥橲 CIRCUMNAVIGATION",order:1519,localPoint:nn(-35,-70)},{date:"15TH鈥?0TH C.",name:"EUROPEAN COLONIAL EXPANSION",order:1450,localPoint:nn(45,10)}],M4={earth:{base:new Me(16777215),emissive:new Me(0),roughness:.92},moon:{base:new Me(16777215),emissive:new Me(0),roughness:.92},mars:{base:new Me(16777215),emissive:new Me(0),roughness:.92}},Id={earth:on,moon:mn,mars:Wn},Rc=new Map;let mo=null;const S4={columbus:["EARTH","EUROPE","AMERICA"],westward:["EARTH","EAST","WEST"],"space-race":["MOON","EARTH","ORBIT"],starship:["MARS","EARTH","MARS"]};function Nd(i){const e=i?S4[i.id]:["—","—","—"];document.querySelector("#field-event").textContent=i?.title||"SELECT AN EVENT",["field-position","field-origin","field-destination"].forEach((t,n)=>{const s=document.querySelector(`#${t}`);s&&(s.textContent=e[n])}),document.querySelector("#field-trace")?.setAttribute("data-kind",i?.id||"idle")}function Ud(i){Object.entries(Id).forEach(([e,t])=>{const n=i&&i.target===e?i.material:M4[e];Rc.set(e,{from:{base:t.material.color.clone(),emissive:t.material.emissive.clone(),roughness:t.material.roughness},to:{base:new Me(n.base),emissive:new Me(n.emissive),roughness:n.roughness},start:performance.now(),duration:720})})}function E4(i){mo=i,fl=i.target,Ni(Md),Rs.forEach(e=>{e.element?.classList.toggle("is-selected",e===i),e.listElement?.classList.toggle("is-active",e===i)}),Ud(i),Nd(i)}function Od(){mo=null,fl=null,Ni("all"),Rs.forEach(i=>{i.element?.classList.remove("is-selected"),i.listElement?.classList.remove("is-active")}),Ud(null),Nd(null)}function T4(i,e){const t=document.createElement("canvas");t.width=i.naturalWidth,t.height=i.naturalHeight;const n=t.getContext("2d",{willReadFrequently:!0});n.drawImage(i,0,0);const s=n.getImageData(0,0,t.width,t.height);let r=t.width,o=t.height,a=0,c=0;for(let p=0;p<t.height;p++)for(let A=0;A<t.width;A++){const T=(p*t.width+A)*4;Math.min(s.data[T],s.data[T+1],s.data[T+2])<210&&(r=Math.min(r,A),a=Math.max(a,A),o=Math.min(o,p),c=Math.max(c,p))}const l=document.createElement("canvas");if(l.width=l.height=384,a<=r||c<=o)return new xc(l);const u=l.getContext("2d",{willReadFrequently:!0}),h=Math.max(a-r,c-o)*1.12,d=(r+a-h)/2,f=(o+c-h)/2;u.drawImage(t,d,f,h,h,0,0,384,384);const g=u.getImageData(0,0,384,384),_=new Me(e).convertLinearToSRGB();for(let p=0;p<g.data.length;p+=4){const A=(g.data[p]+g.data[p+1]+g.data[p+2])/3;g.data[p]=Math.round(_.r*255),g.data[p+1]=Math.round(_.g*255),g.data[p+2]=Math.round(_.b*255),g.data[p+3]=Math.round(Math.max(0,Math.min(1,(248-A)/72))*g.data[p+3])}u.putImageData(g,0,0);const m=new xc(l);return m.colorSpace=gt,m}function b4(i){const e=new ri,t=i.localPoint.clone().normalize();e.position.copy(i.localPoint),e.quaternion.setFromUnitVectors(new E(0,1,0),t),e.scale.setScalar(i.target==="earth"?.8:i.target==="moon"?.45:.62);const n=new xo({color:i.iconColor,transparent:!0,opacity:.42,depthWrite:!1}),s=new qc(new _t().setFromPoints(new qh(0,0,.33,.33,0,Math.PI*2).getPoints(40).map(a=>new E(a.x,.03,a.y))),n),r=new yo(new _t().setFromPoints([new E(0,.03,0),new E(0,.68,0)]),n);e.add(s,r),i.parent.add(e),i.symbolObject=e;const o=new Image;o.onload=()=>{const a=T4(o,i.iconColor),c=new tu(new mc({map:a,transparent:!0,opacity:.12,depthWrite:!1,depthTest:!1,blending:wi}));c.position.set(0,.98,0),c.scale.set(1.52,1.52,1);const l=new tu(new mc({map:a,transparent:!0,opacity:.82,depthWrite:!1,depthTest:!1}));l.position.set(0,.98,0),l.scale.set(1.18,1.18,1),e.add(c,l),i.iconGlow=c,i.iconSprite=l},o.onerror=()=>console.warn(`Event icon unavailable: ${i.icon}`),o.src=`./event-icons/${i.icon}`}const go=document.querySelector("#event-list");function Fd(i){return i.parent?i.parent.localToWorld(i.localPoint.clone()):i.point.clone()}const Vs=new E,$r=new E,ba=new E,Aa=new E,ss=new E,rs=new E,Jr=new E,ph=new Map(Rs.map(i=>[i.id,i])),A4=[bo,dr,ws];function w4(){Nt.updateMatrixWorld(!0),A4.forEach(i=>{const e=ph.get(i.userData.endpoints[0]),t=ph.get(i.userData.endpoints[1]);Vs.copy(e.localPoint).applyMatrix4(e.parent.matrixWorld),$r.copy(t.localPoint).applyMatrix4(t.parent.matrixWorld);const n=Math.min(6,Vs.distanceTo($r)*.28);Jr.copy(e.localPoint).normalize().transformDirection(e.parent.matrixWorld),ba.copy(Vs).addScaledVector(Jr,n),Jr.copy(t.localPoint).normalize().transformDirection(t.parent.matrixWorld),Aa.copy($r).addScaledVector(Jr,n);const s=i===dr?5.2:i===ws?3.2:.7;ba.y+=s,Aa.y+=s;const r=i.geometry.attributes.instanceStart,o=i.geometry.attributes.instanceEnd,a=i.geometry.attributes.instanceDistanceStart,c=i.geometry.attributes.instanceDistanceEnd;rs.copy(Vs);let l=0;for(let u=0;u<r.count;u++){const h=(u+1)/r.count,d=1-h;ss.copy(Vs).multiplyScalar(d*d*d).addScaledVector(ba,3*d*d*h).addScaledVector(Aa,3*d*h*h).addScaledVector($r,h*h*h),r.setXYZ(u,rs.x,rs.y,rs.z),o.setXYZ(u,ss.x,ss.y,ss.z),a.setX(u,l),l+=rs.distanceTo(ss),c.setX(u,l),rs.copy(ss)}r.data.needsUpdate=!0,a.data.needsUpdate=!0,i.geometry.computeBoundingBox(),i.geometry.computeBoundingSphere(),i.material.dashOffset=-l})}Rs.forEach(i=>{const e=document.createElement("button");e.type="button",e.className="event-marker",e.dataset.event=i.id,e.innerHTML=`<strong>${i.title}</strong><em>${i.date}</em>`,e.addEventListener("click",()=>mh(i)),e.addEventListener("pointerenter",()=>{i.iconHover=!0}),e.addEventListener("pointerleave",()=>{i.iconHover=!1}),fd.appendChild(e),i.element=e;const t=document.createElement("button");t.type="button",t.className="timeline-item",t.dataset.event=i.id,t.dataset.order=String(i.order),t.innerHTML=`<span class="timeline-number">${i.index}</span><span class="timeline-copy"><span class="timeline-time">${i.date}</span><span class="timeline-location">${i.location}</span><span class="timeline-name">${i.title}</span></span>`,t.addEventListener("click",()=>mh(i)),go.appendChild(t),i.listElement=t,b4(i)});Dd.forEach((i,e)=>{const t=document.createElement("div");t.className="timeline-static",t.dataset.order=String(i.order),t.innerHTML=`<span class="timeline-node" aria-hidden="true"></span><span class="timeline-copy"><span class="timeline-time">${i.date}</span><span class="timeline-name">${i.name}</span></span>`,go.appendChild(t);const n=document.createElement("div");n.className="historical-marker",n.innerHTML=`<span class="historical-dot" aria-hidden="true"></span><span>${i.name}</span>`,fd.appendChild(n),i.element=n});[...go.children].sort((i,e)=>Number(i.dataset.order??9999)-Number(e.dataset.order??9999)).forEach(i=>go.appendChild(i));let yt=null,ds=null,Ao=null,$s=null,yl=null;function R4(){ft.position.copy(fo.position),et.target.copy(fo.target),et.update()}function fr(i,e,t=2200,n){yt={start:performance.now(),duration:t,fromPosition:ft.position.clone(),fromTarget:et.target.clone(),position:i,target:e,done:n},et.enabled=!1}function mh(i){ds||(ds={position:ft.position.clone(),target:et.target.clone()}),Ao=i,E4(i),document.querySelector("#panel-title").textContent=i.title,document.querySelector("#panel-date").textContent=i.date,document.querySelector("#panel-number").textContent=i.index;const e=i.id==="columbus",t=i.id==="westward",n=i.id==="space-race",s=i.id==="starship";hn.classList.toggle("is-starship",s),il(),ol(s),hn.classList.toggle("is-columbus",e),hn.classList.toggle("is-westward",t),hn.classList.toggle("is-space-race",n),Ks&&(Ks.hidden=!e),Zs&&(Zs.hidden=!t),Vn&&(Vn.hidden=!n,n&&(Vn.scrollTop=0)),(e?Ks:t?Zs:n?Vn:null)?.querySelectorAll("object[data-src]").forEach(l=>{l.data=l.dataset.src,l.removeAttribute("data-src")}),n||wo(),hn.classList.add("is-open"),hn.setAttribute("aria-hidden","false");const o=Fd(i),a=ft.position.clone().sub(o).normalize(),c=i.id==="starship"?25:i.id==="space-race"?18:15;fr(o.clone().add(a.multiplyScalar(c)),o,2600)}function Bd(){if(hn.classList.remove("is-starship"),il(),ol(!1),hn.classList.remove("is-open","is-columbus","is-westward","is-space-race"),Ks&&(Ks.hidden=!0),Zs&&(Zs.hidden=!0),Vn&&(Vn.hidden=!0),wo(),Ro(),bi?.classList.remove("is-open"),bi?.setAttribute("aria-hidden","true"),Ai?.classList.remove("is-open"),Ai?.setAttribute("aria-hidden","true"),Ao=null,Od(),ds){const i=ds;ds=null,fr(i.position,i.target,2200)}}function C4(i){$s||($s={position:ft.position.clone(),target:et.target.clone(),minDistance:et.minDistance}),yl=i;const e=i.mesh.getWorldPosition(new E),t=ft.position.clone().sub(e).normalize(),n=i.radius*3.55;et.minDistance=i.radius*1.35,fr(e.clone().add(t.multiplyScalar(n)),e,1800)}function P4(){if(!$s)return;const i=$s;$s=null,yl=null,et.minDistance=i.minDistance,fr(i.position,i.target,1800)}const gh=new $h,wa=new xe,dt={planet:null,x:0,y:0,lastX:0,lastY:0,moved:!1};function zd(i){const e=vt.getBoundingClientRect();wa.x=(i.clientX-e.left)/e.width*2-1,wa.y=-((i.clientY-e.top)/e.height)*2+1,gh.setFromCamera(wa,ft);const t=gh.intersectObjects(fh.map(n=>n.mesh),!0)[0];return t&&fh.find(n=>{let s=t.object;for(;s;){if(s===n.mesh)return!0;s=s.parent}return!1})||null}vt.addEventListener("pointerdown",i=>{i.button===0&&(dt.planet=zd(i),dt.x=dt.lastX=i.clientX,dt.y=dt.lastY=i.clientY,dt.moved=!1,dt.planet&&(et.enabled=!1,vt.setPointerCapture(i.pointerId),vt.style.cursor="grabbing"))});vt.addEventListener("pointermove",i=>{if(!dt.planet){vt.style.cursor=zd(i)?"grab":"default";return}const e=i.clientX-dt.lastX,t=i.clientY-dt.lastY;Math.hypot(i.clientX-dt.x,i.clientY-dt.y)>5&&(dt.moved=!0),dt.planet.mesh.rotation.y+=e*.009,dt.planet.mesh.rotation.x+=t*.007,dt.lastX=i.clientX,dt.lastY=i.clientY});vt.addEventListener("pointerup",i=>{if(i.button!==0)return;const e=dt.planet,t=dt.moved;dt.planet=null,et.enabled=!0,vt.style.cursor="default",vt.hasPointerCapture(i.pointerId)&&vt.releasePointerCapture(i.pointerId),t||(e?C4(e):yl?P4():Li||Ni("all"))});vt.addEventListener("pointercancel",i=>{dt.planet=null,et.enabled=!0,vt.style.cursor="default",vt.hasPointerCapture(i.pointerId)&&vt.releasePointerCapture(i.pointerId)});document.querySelectorAll(".columbus-media-button").forEach(i=>{i.addEventListener("click",()=>{const e=i.querySelector("img, object");!e||!Tc||!bi||(Tc.replaceChildren(e.cloneNode(!0)),bi.classList.add("is-open"),bi.setAttribute("aria-hidden","false"))})});document.querySelector(".columbus-lightbox-close")?.addEventListener("click",()=>{bi?.classList.remove("is-open"),bi?.setAttribute("aria-hidden","true"),Tc?.replaceChildren()});document.querySelectorAll(".westward-media-button").forEach(i=>{i.addEventListener("click",()=>{const e=i.querySelector("img, object");!e||!bc||!Ai||(bc.replaceChildren(e.cloneNode(!0)),Ai.classList.add("is-open"),Ai.setAttribute("aria-hidden","false"))})});document.querySelector(".westward-lightbox-close")?.addEventListener("click",()=>{Ai?.classList.remove("is-open"),Ai?.setAttribute("aria-hidden","true"),bc?.replaceChildren()});let Mi,Js,Cc;function wo(){Js&&window.clearInterval(Js),Js=null,hs?.setAttribute("aria-pressed","false"),hs&&(hs.firstChild.textContent="PLAY SIGNAL ")}function _h(){if(!Mi)return;const i=Mi.currentTime,e=Mi.createOscillator(),t=Mi.createGain();e.type="sine",e.frequency.setValueAtTime(1e3,i),t.gain.setValueAtTime(1e-4,i),t.gain.exponentialRampToValueAtTime(.045,i+.012),t.gain.exponentialRampToValueAtTime(1e-4,i+.16),e.connect(t).connect(Mi.destination),e.start(i),e.stop(i+.17)}hs?.addEventListener("click",async()=>{if(Js){wo();return}const i=window.AudioContext||window.webkitAudioContext;i&&(Mi||=new i,await Mi.resume(),_h(),Js=window.setInterval(_h,850),hs.setAttribute("aria-pressed","true"),hs.firstChild.textContent="PAUSE SIGNAL ")});function Ro(){Gn?.classList.remove("is-open"),Gn?.setAttribute("aria-hidden","true"),Ac?.replaceChildren(),Cc?.focus(),Cc=null}document.querySelectorAll(".space-race-media").forEach(i=>{i.addEventListener("click",()=>{const e=i.querySelector("img, object");!e||!Ac||!Gn||(Cc=i,Ac.replaceChildren(e.cloneNode(!0)),Gn.classList.add("is-open"),Gn.setAttribute("aria-hidden","false"),Gn.querySelector(".space-race-lightbox-close")?.focus())})});Gn?.addEventListener("click",i=>{(i.target===Gn||i.target.closest(".space-race-lightbox-close"))&&Ro()});if("IntersectionObserver"in window&&Vn){const i=Vn.querySelectorAll("[data-space-entry]");i.forEach(t=>t.classList.add("is-pending"));const e=new IntersectionObserver(t=>{t.forEach(n=>{n.isIntersecting&&(n.target.classList.add("is-visible"),e.unobserve(n.target))})},{root:Vn,threshold:.08});i.forEach(t=>e.observe(t))}document.querySelector(".close-panel").addEventListener("click",Bd);document.querySelector(".fullscreen-hint").addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen?.():document.documentElement.requestFullscreen?.().catch(()=>{})});document.querySelector(".wordmark").addEventListener("click",i=>{wo(),Ro(),il(),ol(!1),hn.classList.remove("is-starship"),i.preventDefault(),ds=null,hn.classList.remove("is-open"),hn.setAttribute("aria-hidden","true"),Ao=null,Od();const e=pd();fr(e.position,e.target,2200)});window.addEventListener("keydown",i=>{if(i.key==="Escape"&&rl()){i.stopImmediatePropagation();return}if(i.key==="Escape"&&!cl.hidden&&(dd(!1),js.focus()),i.key==="Escape"&&Gn?.classList.contains("is-open")){i.stopImmediatePropagation(),Ro();return}i.key.toLowerCase()==="f"&&!["INPUT","TEXTAREA","SELECT"].includes(document.activeElement?.tagName)&&(i.preventDefault(),document.fullscreenElement?document.exitFullscreen?.():document.documentElement.requestFullscreen?.().catch(()=>{})),i.key==="Escape"&&Ao&&Bd()});document.addEventListener("fullscreenchange",()=>{requestAnimationFrame(()=>{ft.aspect=window.innerWidth/window.innerHeight,ft.updateProjectionMatrix(),Pn.setSize(window.innerWidth,window.innerHeight),Hd()})});function Hd(){const i=window.innerWidth,e=window.innerHeight,t=new E;ft.getWorldDirection(t),Rs.forEach(n=>{const s=Fd(n),r=s.clone().project(ft);n.element.style.left=`${(r.x*.5+.5)*i}px`,n.element.style.top=`${(-r.y*.5+.5)*e}px`;const a=s.clone().sub(ft.position).normalize().dot(t)<.25||r.z>1||r.x<-1.2||r.x>1.2||r.y<-1.2||r.y>1.2;n.element.classList.toggle("behind",a)}),Dd.forEach(n=>{const s=on.localToWorld(n.localPoint.clone()),r=s.clone().project(ft);n.element.style.left=`${(r.x*.5+.5)*i}px`,n.element.style.top=`${(-r.y*.5+.5)*e}px`;const a=s.clone().sub(ft.position).normalize().dot(t)<.25||r.z>1||r.x<-1.2||r.x>1.2||r.y<-1.2||r.y>1.2;n.element.classList.toggle("behind",a)})}function ro(i){if(requestAnimationFrame(ro),document.hidden||!document.documentElement.classList.contains("archive-entered"))return;if(yt){const r=Math.min(1,(i-yt.start)/yt.duration),o=r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2;if(yt.intro){const a=Math.sin(Math.PI*o)*.82,c=yt.fromPosition.clone().sub(yt.fromTarget);c.applyAxisAngle(new E(0,1,0),a);const l=yt.position.clone().sub(yt.target);c.lerp(l,o),ft.position.copy(yt.fromTarget).lerp(yt.target,o).add(c)}else ft.position.lerpVectors(yt.fromPosition,yt.position,o);if(et.target.lerpVectors(yt.fromTarget,yt.target,o),r===1){const a=yt.done;yt=null,et.enabled=!0,a?.()}}et.update();const e=1-Math.exp(-Math.min((i-(ro.lastRouteTime??i-16.67))/1e3,.1)*8);ro.lastRouteTime=i;let t=null;if(dl&&!dt.planet&&!yt){Nt.updateMatrixWorld(!0),wc.setFromCamera(yd,ft);const r=wc.intersectObjects(po,!1)[0];r&&(t=r.object)}const n=new Set(t?.userData.endpoints||[]),s=g4.matches?.8:.5+.5*Math.sin(i*Math.PI*2/3600);po.forEach(r=>{const o=r===t;o&&(r.material.opacity=.75),r.material.linewidth=o?2.2:1.4,r.material.opacity=Ci.lerp(r.material.opacity,o?.75:r.userData.targetOpacity,e),r.material.color.lerp(r.userData.targetColor,e)}),Rc.forEach((r,o)=>{const a=Math.min(1,(i-r.start)/r.duration),c=a*a*(3-2*a),l=Id[o].material;l.color.lerpColors(r.from.base,r.to.base,c),l.emissive.lerpColors(r.from.emissive,r.to.emissive,c),l.roughness=Ci.lerp(r.from.roughness,r.to.roughness,c),a===1&&Rc.delete(o)}),on.rotation.y+=18e-5,mn.rotation.y+=12e-5,Wn.rotation.y+=1e-4,w4(),Rs.forEach((r,o)=>{const a=n.has(r.id);if(r.element?.classList.toggle("is-route-endpoint",a),r.symbolObject){const c=r.localPoint.clone().normalize();r.symbolObject.position.copy(r.localPoint).addScaledVector(c,Math.sin(i*7e-4+o)*.025),r.iconSprite&&(r.iconSprite.material.opacity=a?.78+.18*s:mo===r||r.iconHover?1:.82),r.iconGlow&&(r.iconGlow.material.opacity=a?.1+.08*s:mo===r||r.iconHover?.23:.12)}}),Hd(),Pn.render(Nt,ft)}requestAnimationFrame(ro);window.addEventListener("resize",()=>{po.forEach(i=>i.material.resolution.set(window.innerWidth,window.innerHeight)),ft.aspect=window.innerWidth/window.innerHeight,ft.updateProjectionMatrix(),Pn.setSize(window.innerWidth,window.innerHeight),Pn.setPixelRatio(Math.min(window.devicePixelRatio,2))});document.documentElement.classList.add("app-ready");(()=>{const i=[[/334[^A-Za-z0-9]*23 BCE/g,"334–323 BCE"],[/ALEXANDER.*? EASTERN CAMPAIGN/g,"ALEXANDER'S EASTERN CAMPAIGN"],[/ZHANG QIAN.*? WESTERN MISSION/g,"ZHANG QIAN'S WESTERN MISSION"],[/130[^A-Za-z0-9]*453/g,"130 BCE–1453"],[/1250[^A-Za-z0-9]*300/g,"1250–1300"],[/M[^A-Za-z0-9]*ORI ARRIVAL IN AOTEAROA/g,"MĀORI ARRIVAL IN AOTEAROA"],[/1405[^A-Za-z0-9]*433/g,"1405–1433"],[/ZHENG HE.*? TREASURE VOYAGES/g,"ZHENG HE'S TREASURE VOYAGES"],[/15TH[^A-Za-z0-9]*20TH C\./g,"15TH–20TH C."],[/1497[^A-Za-z0-9]*499/g,"1497–1499"],[/1519[^A-Za-z0-9]*522/g,"1519–1522"],[/1803[^A-Za-z0-9]*890/g,"1803–1890"],[/1957[^A-Za-z0-9]*975/g,"1957–1975"],[/EARTH[^A-Za-z0-9]*MARS/g,"EARTH–MARS"]],e=n=>{const s=document.createTreeWalker(n,NodeFilter.SHOW_TEXT),r=[];for(;s.nextNode();)r.push(s.currentNode);r.forEach(o=>{let a=o.nodeValue;i.forEach(([c,l])=>{a=a.replace(c,l)}),a!==o.nodeValue&&(o.nodeValue=a)})},t=()=>{if(!document.body)return;document.querySelectorAll("*").forEach(r=>{const o=r.textContent.replace(/\s+/g," ").trim();r!==document.body&&o==="ATLAS OF DEPARTURE"&&r.children.length<=2&&(r.textContent="TERRANE",r.classList.add("terrane-wordmark")),r!==document.body&&r.children.length===0&&r.textContent.trim()==="TERRANE"&&(r.classList.add("terrane-wordmark"),r.style.fontSize="clamp(34px, 2.6vw, 52px)",r.style.lineHeight="0.98",r.style.letterSpacing="0.015em",r.style.display="block")}),e(document.body);const n=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT),s=[];for(;n.nextNode();)s.push(n.currentNode);s.forEach(r=>{const o=r.nodeValue.trim();let a=null;/^130\b/.test(o)&&/453/.test(o)?a="130 BCE–1453":/^15TH\b/.test(o)&&/20TH/.test(o)?a="15TH–20TH C.":/^1497\b/.test(o)&&/499/.test(o)?a="1497–1499":/^1519\b/.test(o)&&/522/.test(o)?a="1519–1522":/^1957\b/.test(o)&&/975/.test(o)?a="1957–1975":/^EARTH/.test(o)&&/MARS/.test(o)?a="EARTH–MARS":/^15TH.*C\.$/.test(o)?a="15TH–20TH C.":/DA GAMA/.test(o)&&/INDIA ROUTE/.test(o)?a="DA GAMA'S INDIA ROUTE":/MAGELLAN/.test(o)&&/CIRCUMNAVIGATION/.test(o)?a="MAGELLAN'S CIRCUMNAVIGATION":/^EARTH.*ARS$/.test(o)&&(a="EARTH–MARS"),a&&o!==a&&(r.nodeValue=a)})};t(),new MutationObserver(t).observe(document.documentElement,{childList:!0,subtree:!0})})();
