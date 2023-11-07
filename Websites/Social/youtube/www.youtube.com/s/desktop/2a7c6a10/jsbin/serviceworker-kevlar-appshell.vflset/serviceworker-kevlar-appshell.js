/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var q,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ba(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ca=ba(this);function da(a,b){if(b)a:{var c=ca;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&aa(c,a,{configurable:!0,writable:!0,value:b})}}
function ea(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(h){h.done?d(h.value):Promise.resolve(h.value).then(b,c).then(f,e)}
f(a.next())})}
function r(a){return ea(a())}
function fa(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
da("Array.prototype.values",function(a){return a?a:function(){return fa(this,function(b,c){return c})}});
da("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&c.push(b[d]);return c}});
da("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
da("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&c.push([d,b[d]]);return c}});
da("String.prototype.matchAll",function(a){return a?a:function(b){if(b instanceof RegExp&&!b.global)throw new TypeError("RegExp passed into String.prototype.matchAll() must have global tag.");var c=new RegExp(b,b instanceof RegExp?void 0:"g"),d=this,e=!1,f={next:function(){if(e)return{value:void 0,done:!0};var h=c.exec(d);if(!h)return e=!0,{value:void 0,done:!0};""===h[0]&&(c.lastIndex+=1);return{value:h,done:!1}}};
f[Symbol.iterator]=function(){return f};
return f}});
da("Promise.prototype.finally",function(a){return a?a:function(b){return this.then(function(c){return Promise.resolve(b()).then(function(){return c})},function(c){return Promise.resolve(b()).then(function(){throw c;
})})}});
var t=this||self;function v(a,b){a=a.split(".");b=b||t;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function ha(a){var b=typeof a;b="object"!=b?b:a?Array.isArray(a)?"array":b:"null";return"array"==b||"object"==b&&"number"==typeof a.length}
function ia(a,b,c){return a.call.apply(a.bind,arguments)}
function ja(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function ka(a,b,c){ka=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ia:ja;return ka.apply(null,arguments)}
function w(a,b){a=a.split(".");var c=t;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function la(a,b){function c(){}
c.prototype=b.prototype;a.Ta=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Tb=function(d,e,f){for(var h=Array(arguments.length-2),g=2;g<arguments.length;g++)h[g-2]=arguments[g];return b.prototype[e].apply(d,h)}}
;function ma(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,ma);else{const c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
la(ma,Error);ma.prototype.name="CustomError";function na(){}
;function oa(a,b){Array.prototype.forEach.call(a,b,void 0)}
function pa(a,b){return Array.prototype.map.call(a,b,void 0)}
function qa(a,b){b=Array.prototype.indexOf.call(a,b,void 0);0<=b&&Array.prototype.splice.call(a,b,1)}
function ra(a,b){for(let c=1;c<arguments.length;c++){const d=arguments[c];if(ha(d)){const e=a.length||0,f=d.length||0;a.length=e+f;for(let h=0;h<f;h++)a[e+h]=d[h]}else a.push(d)}}
;function sa(a){for(const b in a)return!1;return!0}
function ta(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());const b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length);for(const c in a)b[c]=ta(a[c]);return b}
const ua="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function va(a,b){let c,d;for(let e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(let f=0;f<ua.length;f++)c=ua[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function wa(){}
function xa(a){return new wa(ya,a)}
var ya={};xa("");var za=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};var Ba,Ca=v("CLOSURE_FLAGS"),Da=Ca&&Ca[610401301];Ba=null!=Da?Da:!1;function Ea(){var a=t.navigator;return a&&(a=a.userAgent)?a:""}
var Fa;const Ga=t.navigator;Fa=Ga?Ga.userAgentData||null:null;function Ha(a){return Ba?Fa?Fa.brands.some(({brand:b})=>b&&-1!=b.indexOf(a)):!1:!1}
function y(a){return-1!=Ea().indexOf(a)}
;function Ia(){return Ba?!!Fa&&0<Fa.brands.length:!1}
function Ja(){return Ia()?Ha("Chromium"):(y("Chrome")||y("CriOS"))&&!(Ia()?0:y("Edge"))||y("Silk")}
;var Ka=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function La(a){return a?decodeURI(a):a}
function Ma(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Ma(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Na(a){var b=[],c;for(c in a)Ma(c,a[c],b);return b.join("&")}
;function Oa(){this.j=this.j;this.l=this.l}
Oa.prototype.j=!1;Oa.prototype.dispose=function(){this.j||(this.j=!0,this.O())};
Oa.prototype.O=function(){if(this.l)for(;this.l.length;)this.l.shift()()};function Pa(a){var b=v("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(h){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||t.$googDebugFname||b}catch(h){e="Not available",c=!0}b=Qa(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Ra[c])c=Ra[c];else{c=String(c);if(!Ra[c]){var f=/function\s+([^\(]+)/m.exec(c);Ra[c]=f?f[1]:"[Anonymous]"}c=Ra[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Qa(a,b){b||(b={});b[Sa(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Sa(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Qa(a,b));return c}
function Sa(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Ra={};var Ta=Ia()?!1:y("Trident")||y("MSIE");function Va(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
class Wa{constructor(a,b){this.j=a;this.l=b;this.i=0;this.h=null}get(){let a;0<this.i?(this.i--,a=this.h,this.h=a.next,a.next=null):a=this.j();return a}};function Xa(a){t.setTimeout(()=>{throw a;},0)}
;class Ya{constructor(){this.i=this.h=null}add(a,b){const c=Za.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c}remove(){let a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a}}var Za=new Wa(()=>new $a,a=>a.reset());
class $a{constructor(){this.next=this.scope=this.h=null}set(a,b){this.h=a;this.scope=b;this.next=null}reset(){this.next=this.scope=this.h=null}};let ab,bb=!1,cb=new Ya,eb=(a,b)=>{ab||db();bb||(ab(),bb=!0);cb.add(a,b)},db=()=>{const a=t.Promise.resolve(void 0);
ab=()=>{a.then(fb)}};
var fb=()=>{let a;for(;a=cb.remove();){try{a.h.call(a.scope)}catch(b){Xa(b)}Va(Za,a)}bb=!1};function z(a){this.h=0;this.A=void 0;this.l=this.i=this.j=null;this.m=this.s=!1;if(a!=na)try{var b=this;a.call(void 0,function(c){gb(b,2,c)},function(c){gb(b,3,c)})}catch(c){gb(this,3,c)}}
function hb(){this.next=this.context=this.i=this.j=this.h=null;this.l=!1}
hb.prototype.reset=function(){this.context=this.i=this.j=this.h=null;this.l=!1};
var ib=new Wa(function(){return new hb},function(a){a.reset()});
function jb(a,b,c){var d=ib.get();d.j=a;d.i=b;d.context=c;return d}
function kb(a){if(a instanceof z)return a;var b=new z(na);gb(b,2,a);return b}
z.prototype.then=function(a,b,c){return lb(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
z.prototype.$goog_Thenable=!0;q=z.prototype;q.Wa=function(a,b){return lb(this,null,a,b)};
q.catch=z.prototype.Wa;q.cancel=function(a){if(0==this.h){var b=new mb(a);eb(function(){nb(this,b)},this)}};
function nb(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,h=c.i;h&&(h.l||(d++,h.h==a&&(e=h),!(e&&1<d)));h=h.next)e||(f=h);e&&(0==c.h&&1==d?nb(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):ob(c),pb(c,e,3,b)))}a.j=null}else gb(a,3,b)}
function qb(a,b){a.i||2!=a.h&&3!=a.h||rb(a);a.l?a.l.next=b:a.i=b;a.l=b}
function lb(a,b,c,d){var e=jb(null,null,null);e.h=new z(function(f,h){e.j=b?function(g){try{var k=b.call(d,g);f(k)}catch(l){h(l)}}:f;
e.i=c?function(g){try{var k=c.call(d,g);void 0===k&&g instanceof mb?h(g):f(k)}catch(l){h(l)}}:h});
e.h.j=a;qb(a,e);return e.h}
q.Xa=function(a){this.h=0;gb(this,2,a)};
q.Ya=function(a){this.h=0;gb(this,3,a)};
function gb(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.Xa,f=a.Ya;if(d instanceof z){qb(d,jb(e||na,f||null,a));var h=!0}else{if(d)try{var g=!!d.$goog_Thenable}catch(l){g=!1}else g=!1;if(g)d.then(e,f,a),h=!0;else{g=typeof d;if("object"==g&&null!=d||"function"==g)try{var k=d.then;if("function"===typeof k){sb(d,k,e,f,a);h=!0;break a}}catch(l){f.call(a,l);h=!0;break a}h=!1}}}h||(a.A=c,a.h=b,a.j=null,rb(a),3!=b||c instanceof mb||tb(a,c))}}
function sb(a,b,c,d,e){function f(k){g||(g=!0,d.call(e,k))}
function h(k){g||(g=!0,c.call(e,k))}
var g=!1;try{b.call(a,h,f)}catch(k){f(k)}}
function rb(a){a.s||(a.s=!0,eb(a.Ha,a))}
function ob(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
q.Ha=function(){for(var a;a=ob(this);)pb(this,a,this.h,this.A);this.s=!1};
function pb(a,b,c,d){if(3==c&&b.i&&!b.l)for(;a&&a.m;a=a.j)a.m=!1;if(b.h)b.h.j=null,ub(b,c,d);else try{b.l?b.j.call(b.context):ub(b,c,d)}catch(e){vb.call(null,e)}Va(ib,b)}
function ub(a,b,c){2==b?a.j.call(a.context,c):a.i&&a.i.call(a.context,c)}
function tb(a,b){a.m=!0;eb(function(){a.m&&vb.call(null,b)})}
var vb=Xa;function mb(a){ma.call(this,a)}
la(mb,ma);mb.prototype.name="cancel";function wb(){throw Error("Invalid UTF8");}
function xb(a,b){b=String.fromCharCode.apply(null,b);return null==a?b:a+b}
let yb=void 0,zb;const Ab="undefined"!==typeof TextDecoder;!y("Android")||Ja();Ja();var Bb=y("Safari")&&!(Ja()||(Ia()?0:y("Coast"))||(Ia()?0:y("Opera"))||(Ia()?0:y("Edge"))||(Ia()?Ha("Microsoft Edge"):y("Edg/"))||(Ia()?Ha("Opera"):y("OPR"))||y("Firefox")||y("FxiOS")||y("Silk")||y("Android"))&&!(y("iPhone")&&!y("iPod")&&!y("iPad")||y("iPad")||y("iPod"));var Cb={},Db=null;function Eb(a,b){void 0===b&&(b=0);Fb();b=Cb[b];const c=Array(Math.floor(a.length/3)),d=b[64]||"";let e=0,f=0;for(;e<a.length-2;e+=3){var h=a[e],g=a[e+1],k=a[e+2],l=b[h>>2];h=b[(h&3)<<4|g>>4];g=b[(g&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+h+g+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function Gb(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;Hb(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function Hb(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),m=Db[l];if(null!=m)return m;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
Fb();for(var d=0;;){var e=c(-1),f=c(0),h=c(64),g=c(64);if(64===g&&-1===e)break;b(e<<2|f>>4);64!=h&&(b(f<<4&240|h>>2),64!=g&&b(h<<6&192|g))}}
function Fb(){if(!Db){Db={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));Cb[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===Db[f]&&(Db[f]=e)}}}}
;var Ib="undefined"!==typeof Uint8Array,Jb=!Ta&&"function"===typeof btoa;function Kb(a){if(!Jb)return Eb(a);let b="",c=0;const d=a.length-10240;for(;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
const Lb=/[-_.]/g,Mb={"-":"+",_:"/",".":"="};function Nb(a){return Mb[a]||""}
function Ob(a){if(!Jb)return Gb(a);Lb.test(a)&&(a=a.replace(Lb,Nb));a=atob(a);const b=new Uint8Array(a.length);for(let c=0;c<a.length;c++)b[c]=a.charCodeAt(c);return b}
function Pb(a){return Ib&&null!=a&&a instanceof Uint8Array}
let Qb;var Rb={};let Sb;function Tb(a){if(a!==Rb)throw Error("illegal external caller");}
function Ub(){return Sb||(Sb=new Vb(null,Rb))}
function Wb(a){Tb(Rb);var b=a.S;b=null==b||Pb(b)?b:"string"===typeof b?Ob(b):null;return null==b?b:a.S=b}
var Vb=class{constructor(a,b){Tb(b);this.S=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}qa(){return null==this.S}sizeBytes(){const a=Wb(this);return a?a.length:0}};function Yb(a,b){return Error(`Invalid wire type: ${a} (at position ${b})`)}
function Zb(){return Error("Failed to read varint, encoding is invalid.")}
function $b(a,b){return Error(`Tried to read past the end of the data ${b} > ${a}`)}
;function ac(a){if("string"===typeof a)return{buffer:Ob(a),I:!1};if(Array.isArray(a))return{buffer:new Uint8Array(a),I:!1};if(a.constructor===Uint8Array)return{buffer:a,I:!1};if(a.constructor===ArrayBuffer)return{buffer:new Uint8Array(a),I:!1};if(a.constructor===Vb)return{buffer:Wb(a)||Qb||(Qb=new Uint8Array(0)),I:!0};if(a instanceof Uint8Array)return{buffer:new Uint8Array(a.buffer,a.byteOffset,a.byteLength),I:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers");
}
;const bc="function"===typeof Uint8Array.prototype.slice;function cc(a,b){a.h=b;if(b>a.i)throw $b(a.i,b);}
function dc(a){const b=a.j;let c=a.h,d=b[c++],e=d&127;if(d&128&&(d=b[c++],e|=(d&127)<<7,d&128&&(d=b[c++],e|=(d&127)<<14,d&128&&(d=b[c++],e|=(d&127)<<21,d&128&&(d=b[c++],e|=d<<28,d&128&&b[c++]&128&&b[c++]&128&&b[c++]&128&&b[c++]&128&&b[c++]&128)))))throw Zb();cc(a,c);return e}
function ec(a,b){if(0>b)throw Error(`Tried to read a negative byte length: ${b}`);const c=a.h,d=c+b;if(d>a.i)throw $b(b,a.i-c);a.h=d;return c}
var fc=class{constructor(a,b){this.j=null;this.m=!1;this.h=this.i=this.l=0;this.init(a,void 0,void 0,b)}init(a,b,c,{Y:d=!1}={}){this.Y=d;a&&(a=ac(a),this.j=a.buffer,this.m=a.I,this.l=b||0,this.i=void 0!==c?this.l+c:this.j.length,this.h=this.l)}clear(){this.j=null;this.m=!1;this.h=this.i=this.l=0;this.Y=!1}reset(){this.h=this.l}advance(a){cc(this,this.h+a)}},gc=[];function hc(a,{na:b=!1}={}){a.na=b}
function ic(a){var b=a.h;if(b.h==b.i)return!1;a.j=a.h.h;var c=dc(a.h)>>>0;b=c>>>3;c&=7;if(!(0<=c&&5>=c))throw Yb(c,a.j);if(1>b)throw Error(`Invalid field number: ${b} (at position ${a.j})`);a.l=b;a.i=c;return!0}
function jc(a){switch(a.i){case 0:if(0!=a.i)jc(a);else a:{a=a.h;var b=a.h;const c=b+10,d=a.j;for(;b<c;)if(0===(d[b++]&128)){cc(a,b);break a}throw Zb();}break;case 1:a.h.advance(8);break;case 2:2!=a.i?jc(a):(b=dc(a.h)>>>0,a.h.advance(b));break;case 5:a.h.advance(4);break;case 3:b=a.l;do{if(!ic(a))throw Error("Unmatched start-group tag: stream EOF");if(4==a.i){if(a.l!=b)throw Error("Unmatched end-group tag");break}jc(a)}while(1);break;default:throw Yb(a.i,a.j);}}
var kc=class{constructor(a,b){if(gc.length){const c=gc.pop();c.init(a,void 0,void 0,b);a=c}else a=new fc(a,b);this.h=a;this.j=this.h.h;this.i=this.l=-1;hc(this,b)}reset(){this.h.reset();this.j=this.h.h;this.i=this.l=-1}advance(a){this.h.advance(a)}},lc=[];class mc{constructor(a){this.h=a}};function nc(a){return Array.prototype.slice.call(a)}
;const A="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;[...Object.values({Gb:1,Fb:2,Eb:4,Lb:8,Kb:16,Jb:32,cb:64,Pb:128,ib:256,hb:512,jb:1024})];var oc=A?(a,b)=>{a[A]|=b}:(a,b)=>{void 0!==a.C?a.C|=b:Object.defineProperties(a,{C:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function pc(a){const b=B(a);1!==(b&1)&&(Object.isFrozen(a)&&(a=nc(a)),E(a,b|1))}
var qc=A?(a,b)=>{a[A]&=~b}:(a,b)=>{void 0!==a.C&&(a.C&=~b)},B=A?a=>a[A]|0:a=>a.C|0,F=A?a=>a[A]:a=>a.C,E=A?(a,b)=>{a[A]=b}:(a,b)=>{void 0!==a.C?a.C=b:Object.defineProperties(a,{C:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function rc(a){oc(a,1);return a}
function sc(a,b){E(b,(a|0)&-99)}
function tc(a,b){E(b,(a|34)&-73)}
function uc(a){a=a>>11&1023;return 0===a?536870912:a}
;var vc={};function wc(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
let xc;function yc(a,b,c){if(!Array.isArray(a)||a.length)return!1;const d=B(a);if(d&1)return!0;if(!b||!b.includes(c))return!1;E(a,d|1);return!0}
var zc;const Ac=[];E(Ac,39);zc=Object.freeze(Ac);function Bc(a){if(a&2)throw Error();}
let Cc;function Dc(a){return a.displayName||a.name||"unknown type name"}
function Ec(a){if(null!=a&&"string"!==typeof a)throw Error();return a}
function Fc(a,b){if(!(a instanceof b))throw Error(`Expected instanceof ${Dc(b)} but got ${a&&Dc(a.constructor)}`);return a}
function Gc(a,b,c){var d=!1;if(null!=a&&"object"===typeof a&&!(d=Array.isArray(a))&&a.ca===vc)return a;if(d){var e=d=B(a);0===e&&(e|=c&32);e|=c&2;e!==d&&E(a,e);return new b(a)}}
;let Hc;function Ic(a,b){Hc=b;a=new a(b);Hc=void 0;return a}
function Jc(a,b,c){const d=1023+b,e=a.length;for(let f=d;f<e;f++){const h=a[f];null!=h&&h!==c&&(c[f-b]=h)}a.length=d+1;a[d]=c}
;function Kc(a,b){return Lc(b)}
function Lc(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a&&!Array.isArray(a)){if(Pb(a))return Kb(a);if(a instanceof Vb){const b=a.S;return null==b?"":"string"===typeof b?b:a.S=Kb(b)}}}return a}
;function Mc(a,b,c){const d=nc(a);var e=d.length;const f=b&256?d[e-1]:void 0;e+=f?-1:0;for(b=b&512?1:0;b<e;b++)d[b]=c(d[b]);if(f){b=d[b]={};for(const h in f)b[h]=c(f[h])}(a=Cc?a[Cc]:void 0)&&(d[Cc]=nc(a));return d}
function Nc(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&B(a)&1?void 0:f&&B(a)&2?a:Oc(a,b,c,void 0!==d,e,f);else if(wc(a)){const h={};for(let g in a)h[g]=Nc(a[g],b,c,d,e,f);a=h}else a=b(a,d);return a}}
function Oc(a,b,c,d,e,f){const h=d||c?B(a):0;d=d?!!(h&32):void 0;a=nc(a);for(let g=0;g<a.length;g++)a[g]=Nc(a[g],b,c,d,e,f);c&&c(h,a);return a}
function Pc(a){return a.ca===vc?a.toJSON():Lc(a)}
;function Qc(a,b,c=tc){if(null!=a){if(Ib&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){const d=B(a);if(d&2)return a;if(b&&!(d&64)&&(d&32||0===d))return E(a,d|34),a;a=Oc(a,Qc,d&4?tc:c,!0,!1,!0);b=B(a);b&4&&b&2&&Object.freeze(a);return a}a.ca===vc&&(b=a.o,c=F(b),a=c&2?a:Rc(a,b,c,!0));return a}}
function Rc(a,b,c,d){const e=d||c&2?tc:sc,f=!!(c&32);b=Mc(b,c,h=>Qc(h,f,e));
oc(b,32|(d?2:0));return Ic(a.constructor,b)}
function Sc(a){const b=a.o,c=F(b);return c&2?Rc(a,b,c,!1):a}
;function Tc(a,b){a=a.o;return Uc(a,F(a),b)}
function Uc(a,b,c,d){if(-1===c)return null;if(c>=uc(b)){if(b&256)return a[a.length-1][c]}else{var e=a.length;if(d&&b&256&&(d=a[e-1][c],null!=d))return d;b=c+((b>>9&1)-1);if(b<e)return a[b]}}
function G(a,b,c,d){const e=a.o,f=F(e);Bc(f);Vc(e,f,b,c,d);return a}
function Vc(a,b,c,d,e){var f=uc(b);if(c>=f||e){e=b;if(b&256)f=a[a.length-1];else{if(null==d)return;f=a[f+((b>>9&1)-1)]={};e|=256}f[c]=d;e&=-1025;e!==b&&E(a,e)}else a[c+((b>>9&1)-1)]=d,b&256&&(d=a[a.length-1],c in d&&delete d[c]),b&1024&&E(a,b&-1025)}
function Wc(a,b,c,d,e){var f=b&2;let h=Uc(a,b,c,e);Array.isArray(h)||(h=zc);const g=B(h);g&1||rc(h);if(f)g&2||oc(h,34),d&1||Object.freeze(h);else{f=!(d&2);const k=g&2;d&1||!k?f&&g&32&&!k&&qc(h,32):(h=rc(nc(h)),Vc(a,b,c,h,e))}return h}
function Xc(a,b,c,d){const e=a.o,f=F(e);Bc(f);(c=Yc(e,f,c))&&c!==b&&null!=d&&Vc(e,f,c);Vc(e,f,b,d);return a}
function Zc(a,b,c){a=a.o;return Yc(a,F(a),b)===c?c:-1}
function Yc(a,b,c){let d=0;for(let e=0;e<c.length;e++){const f=c[e];null!=Uc(a,b,f)&&(0!==d&&Vc(a,b,d),d=f)}return d}
function $c(a,b,c){var d=a.o,e=F(d),f=Uc(d,e,c,!1);b=Gc(f,b,e);b!==f&&null!=b&&Vc(d,e,c,b,!1);d=b;if(null==d)return d;a=a.o;e=F(a);e&2||(f=Sc(d),f!==d&&(d=f,Vc(a,e,c,d,!1)));return d}
function ad(a,b,c,d,e){var f=!!(b&2),h=Wc(a,b,d,1);if(h===zc||!(B(h)&4)){var g=h;h=!!(b&2);var k=!!(B(g)&2);f=g;!h&&k&&(g=nc(g));var l=b|(k?2:0);k=k||void 0;let m=0,n=0;for(;m<g.length;m++){const u=Gc(g[m],c,l);void 0!==u&&(k=k||F(u.o)&2,g[n++]=u)}n<m&&(g.length=n);c=g;g=B(c);l=g|5;k=k?l&-9:l|8;g!=k&&(Object.isFrozen(c)&&(c=nc(c)),E(c,k));g=c;f!==g&&Vc(a,b,d,g);(h&&2!==e||1===e)&&Object.freeze(g);return g}if(3===e)return h;f?2===e&&(e=B(h),h=nc(h),E(h,e),Vc(a,b,d,h)):(f=Object.isFrozen(h),1===e?f||
Object.freeze(h):(e=B(h),c=e&-35,f&&(h=nc(h),e=0,Vc(a,b,d,h)),e!==c&&E(h,c)));return h}
function bd(a){a=a.o;var b=F(a),c=!!(b&2);a=ad(a,b,cd,1,c?1:2);if(!(c||B(a)&8)){for(c=0;c<a.length;c++){b=a[c];const d=Sc(b);b!==d&&(a[c]=d)}oc(a,8)}return a}
function H(a,b,c,d){null!=d?Fc(d,b):d=void 0;return G(a,c,d)}
function dd(a,b,c,d,e){null!=e?Fc(e,b):e=void 0;Xc(a,c,d,e)}
function ed(a,b,c,d){a=a.o;const e=F(a);Bc(e);b=ad(a,e,c,b,2);c=null!=d?Fc(d,c):new c;b.push(c);c.I()&&qc(b,8);e&1024&&E(a,e&-1025);return c}
function fd(a){a:if(a=Tc(a,4),null!=a){switch(typeof a){case "string":a=+a;break a;case "number":break a}a=void 0}return a}
function gd(a,b){a=Tc(a,b);return null==a||"string"===typeof a?a:void 0}
function I(a,b,c){return G(a,b,Ec(c))}
function J(a,b){a=gd(a,b);return null!=a?a:""}
;var K=class{constructor(a,b,c){a:{null==a&&(a=Hc);Hc=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-2095105|(b&1023)<<11)}else{if(!Array.isArray(a))throw Error();d=B(a);if(d&64)break a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error();b:{c=a;var e=c.length;if(e){const h=e-1;var f=c[h];if(wc(f)){d|=256;b=(d>>9&1)-1;e=h-b;1024<=e&&(Jc(c,b,f),e=1023);d=d&-2095105|(e&1023)<<11;break b}}b&&(f=(d>>9&1)-1,b=Math.max(b,e-f),1024<b&&(Jc(c,f,{}),d|=256,b=1023),d=d&-2095105|(b&1023)<<11)}}E(a,d)}this.o=
a}toJSON(){if(xc)var a=hd(this,this.o,!1);else a=Oc(this.o,Pc,void 0,void 0,!1,!1),a=hd(this,a,!0);return a}clone(){const a=this.o;return Rc(this,a,F(a),!1)}I(){return!!(B(this.o)&2)}};K.prototype.ca=vc;
function hd(a,b,c){const d=a.constructor.v;var e=F(c?a.o:b),f=uc(e),h=!1;if(d){if(!c){b=nc(b);var g;if(b.length&&wc(g=b[b.length-1]))for(h=0;h<d.length;h++)if(d[h]>=f){Object.assign(b[b.length-1]={},g);break}h=!0}f=b;c=!c;g=F(a.o);a=uc(g);g=(g>>9&1)-1;var k;for(let Aa=0;Aa<d.length;Aa++){var l=d[Aa];if(l<a){l+=g;var m=f[l];null==m?f[l]=c?zc:rc([]):c&&m!==zc&&pc(m)}else{if(!k){var n=void 0;f.length&&wc(n=f[f.length-1])?k=n:f.push(k={})}m=k[l];null==k[l]?k[l]=c?zc:rc([]):c&&m!==zc&&pc(m)}}}k=b.length;
if(!k)return b;let u,p;if(wc(n=b[k-1])){a:{var x=n;f={};c=!1;for(var C in x)a=x[C],Array.isArray(a)&&(g=a,yc(a,d,+C)&&(a=null),a!=g&&(c=!0)),null!=a?f[C]=a:c=!0;if(c){for(let Aa in f){x=f;break a}x=null}}x!=n&&(u=!0);k--}for(e=(e>>9&1)-1;0<k;k--){C=k-1;n=b[C];if(null!=n&&!yc(n,d,C-e))break;p=!0}if(!u&&!p)return b;var D;h?D=b:D=Array.prototype.slice.call(b,0,k);b=D;h&&(b.length=k);x&&b.push(x);return b}
;const id=Symbol();function jd(a){let b=a[id];if(!b){const c=kd(a),d=c.i;b=d?(e,f)=>d(e,f,c):(e,f)=>{for(;ic(f)&&4!=f.i;){var h=f.l,g=c[h];
if(!g){var k=c.extensions;k&&(k=k[h])&&(g=c[h]=ld(k))}if(!g||!g(f,e,h)){h=e.o;k=f;g=k.j;jc(k);if(k.na)g=void 0;else{var l=k.h.h-g;k.h.h=g;b:{k=k.h;g=l;if(0==g){g=Ub();break b}const m=ec(k,g);k.Y&&k.m?g=k.j.subarray(m,m+g):(k=k.j,l=m,g=m+g,g=l===g?Qb||(Qb=new Uint8Array(0)):bc?k.slice(l,g):new Uint8Array(k.subarray(l,g)));g=0==g.length?Ub():new Vb(g,Rb)}}g&&(Cc||(Cc=Symbol()),(k=h[Cc])?k.push(g):h[Cc]=[g])}}return e};
a[id]=b}return b}
function md(a){if(a=a.Da)return jd(a)}
function ld(a){const b=md(a),c=a.hc.h;if(b){const d=kd(a.Da).h;return(e,f,h)=>c(e,f,h,d,b)}return(d,e,f)=>c(d,e,f)}
function nd(a,b){let c=a[b];"function"==typeof c&&0===c.length&&(c=c(),a[b]=c);return Array.isArray(c)&&(od in c||pd in c||0<c.length&&"function"==typeof c[0])?c:void 0}
const pd=Symbol(),od=Symbol();function qd(a,b){const c=a.h;return b?(d,e,f)=>c(d,e,f,b):c}
function rd(a,b,c){const d=a.h,e=jd(b),f=kd(b).h;return(h,g,k)=>d(h,g,k,f,e,c)}
function kd(a){var b=a[od];if(b)return b;a:{b=a[od]={};var c=qd,d=rd;b.h=a[0];let g=1;if(a.length>g&&"number"!==typeof a[g]){var e=a[g++];if(Array.isArray(e)){b.i=e[0];b.extensions=e[1];break a}b.extensions=e}for(;g<a.length;){e=a[g++];for(var f=g+1;f<a.length&&"number"!==typeof a[f];)f++;const k=a[g++];f-=g;switch(f){case 0:b[e]=c(k);break;case 1:(f=nd(a,g))?(g++,b[e]=d(k,f)):b[e]=c(k,a[g++]);break;case 2:f=b;var h=g++;h=nd(a,h);f[e]=d(k,h,a[g++]);break;default:throw Error("unexpected number of binary field arguments: "+
f);}}}od in a&&pd in a&&(a.length=0);return b}
var sd;
sd=new mc(function(a,b,c){if(2!==a.i)return!1;var d=dc(a.h)>>>0;a=a.h;var e=ec(a,d);a=a.j;if(Ab){var f=a,h;(h=zb)||(h=zb=new TextDecoder("utf-8",{fatal:!0}));a=e+d;f=0===e&&a===f.length?f:f.subarray(e,a);try{var g=h.decode(f)}catch(l){if(void 0===yb){try{h.decode(new Uint8Array([128]))}catch(m){}try{h.decode(new Uint8Array([97])),yb=!0}catch(m){yb=!1}}!yb&&(zb=void 0);throw l;}}else{g=e;d=g+d;e=[];let l=null;let m;for(;g<d;){var k=a[g++];128>k?e.push(k):224>k?g>=d?wb():(m=a[g++],194>k||128!==(m&192)?
(g--,wb()):e.push((k&31)<<6|m&63)):240>k?g>=d-1?wb():(m=a[g++],128!==(m&192)||224===k&&160>m||237===k&&160<=m||128!==((f=a[g++])&192)?(g--,wb()):e.push((k&15)<<12|(m&63)<<6|f&63)):244>=k?g>=d-2?wb():(m=a[g++],128!==(m&192)||0!==(k<<28)+(m-144)>>30||128!==((f=a[g++])&192)||128!==((h=a[g++])&192)?(g--,wb()):(k=(k&7)<<18|(m&63)<<12|(f&63)<<6|h&63,k-=65536,e.push((k>>10&1023)+55296,(k&1023)+56320))):wb();8192<=e.length&&(l=xb(l,e),e.length=0)}g=xb(l,e)}b=b.o;Vc(b,F(b),c,g);return!0});
var td;td=new mc(function(a,b,c,d,e){if(2!==a.i)return!1;b=ed(b,c,d);c=a.h.i;d=dc(a.h)>>>0;const f=a.h.h+d;let h=f-c;0>=h&&(a.h.i=f,e(b,a,void 0,void 0,void 0),h=f-a.h.h);if(h)throw Error("Message parsing ended unexpectedly. Expected to read "+`${d} bytes, instead read ${d-h} bytes, either the `+"data ended unexpectedly or the message misreported its own length");a.h.h=f;a.h.i=c;return!0});xa("csi.gstatic.com");xa("googleads.g.doubleclick.net");xa("partner.googleadservices.com");xa("pubads.g.doubleclick.net");xa("securepubads.g.doubleclick.net");xa("tpc.googlesyndication.com");function ud(a,b=`unexpected value ${a}!`){throw Error(b);}
;function vd(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.startsWith("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function wd(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var u=h,p=0;64>p;p+=4)u[p/4]=n[p]<<24|n[p+1]<<16|n[p+2]<<8|n[p+3];for(p=16;80>p;p++)n=u[p-3]^u[p-8]^u[p-14]^u[p-16],u[p]=(n<<1|n>>>31)&4294967295;n=e[0];var x=e[1],C=e[2],D=e[3],Aa=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var Ua=D^x&(C^D);var Xb=1518500249}else Ua=x^C^D,Xb=1859775393;else 60>p?(Ua=x&C|D&(x|C),Xb=2400959708):(Ua=x^C^D,Xb=3395469782);Ua=((n<<5|n>>>27)&4294967295)+Ua+Aa+Xb+u[p]&4294967295;Aa=D;D=C;C=(x<<30|x>>>2)&4294967295;x=n;n=Ua}e[0]=e[0]+n&4294967295;e[1]=e[1]+
x&4294967295;e[2]=e[2]+C&4294967295;e[3]=e[3]+D&4294967295;e[4]=e[4]+Aa&4294967295}
function c(n,u){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var p=[],x=0,C=n.length;x<C;++x)p.push(n.charCodeAt(x));n=p}u||(u=n.length);p=0;if(0==l)for(;p+64<u;)b(n.slice(p,p+64)),p+=64,m+=64;for(;p<u;)if(f[l++]=n[p++],m++,64==l)for(l=0,b(f);p+64<u;)b(n.slice(p,p+64)),p+=64,m+=64}
function d(){var n=[],u=8*m;56>l?c(g,56-l):c(g,64-(l-56));for(var p=63;56<=p;p--)f[p]=u&255,u>>>=8;b(f);for(p=u=0;5>p;p++)for(var x=24;0<=x;x-=8)n[u++]=e[p]>>x&255;return n}
for(var e=[],f=[],h=[],g=[128],k=1;64>k;++k)g[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Ga:function(){for(var n=d(),u="",p=0;p<n.length;p++)u+="0123456789ABCDEF".charAt(Math.floor(n[p]/16))+"0123456789ABCDEF".charAt(n[p]%16);return u}}}
;function xd(a,b,c){var d=String(t.location.href);return d&&a&&b?[b,yd(vd(d),a,c||null)].join(" "):null}
function yd(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],oa(d,function(g){e.push(g)}),zd(e.join(" "));
var f=[],h=[];oa(c,function(g){h.push(g.key);f.push(g.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];oa(d,function(g){e.push(g)});
a=zd(e.join(" "));a=[c,a];0==h.length||a.push(h.join(""));return a.join("_")}
function zd(a){var b=wd();b.update(a);return b.Ga().toLowerCase()}
;const Ad={};function Bd(){this.h=document||{cookie:""}}
q=Bd.prototype;q.isEnabled=function(){if(!t.navigator.cookieEnabled)return!1;if(!this.qa())return!0;this.set("TESTCOOKIESENABLED","1",{ra:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
q.set=function(a,b,c){let d,e,f,h=!1,g;"object"===typeof c&&(g=c.lc,h=c.mc||!1,f=c.domain||void 0,e=c.path||void 0,d=c.ra);if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===d&&(d=-1);this.h.cookie=a+"="+b+(f?";domain="+f:"")+(e?";path="+e:"")+(0>d?"":0==d?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*d)).toUTCString())+(h?";secure":"")+(null!=g?";samesite="+g:"")};
q.get=function(a,b){const c=a+"=",d=(this.h.cookie||"").split(";");for(let e=0,f;e<d.length;e++){f=za(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
q.remove=function(a,b,c){const d=void 0!==this.get(a);this.set(a,"",{ra:0,path:b,domain:c});return d};
q.qa=function(){return!this.h.cookie};
q.clear=function(){var a=(this.h.cookie||"").split(";");const b=[],c=[];let d,e;for(let f=0;f<a.length;f++)e=za(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};function Cd(){return!!Ad.FPA_SAMESITE_PHASE2_MOD||!1}
function Dd(a,b,c,d){(a=t[a])||"undefined"===typeof document||(a=(new Bd).get(b));return a?xd(a,c,d):null}
;"undefined"!==typeof TextDecoder&&new TextDecoder;"undefined"!==typeof TextEncoder&&new TextEncoder;const Ed=self;class Fd{constructor(){this.promise=new Promise(a=>{this.resolve=a})}}
;function L(a){Oa.call(this);this.A=1;this.m=[];this.s=0;this.h=[];this.i={};this.G=!!a}
la(L,Oa);q=L.prototype;q.za=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.A;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.A=e+3;d.push(e);return e};
q.fa=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.s?(this.m.push(a),this.h[a+1]=()=>{}):(c&&qa(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
q.da=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.G)for(e=0;e<c.length;e++){var h=c[e];Gd(this.h[h+1],this.h[h+2],d)}else{this.s++;try{for(e=0,f=c.length;e<f&&!this.j;e++)h=c[e],this.h[h+1].apply(this.h[h+2],d)}finally{if(this.s--,0<this.m.length&&0==this.s)for(;c=this.m.pop();)this.fa(c)}}return 0!=e}return!1};
function Gd(a,b,c){eb(function(){a.apply(b,c)})}
q.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.fa,this),delete this.i[a])}else this.h.length=0,this.i={}};
q.O=function(){L.Ta.O.call(this);this.clear();this.m.length=0};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
let M={};var Hd="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;M.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
M.pc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var Id={Ca:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Ia:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},Jd={Ca:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Ia:function(a){return[].concat.apply([],a)}};
M.Sa=function(){Hd?(M.xa=Uint8Array,M.va=Uint16Array,M.wa=Int32Array,M.assign(M,Id)):(M.xa=Array,M.va=Array,M.wa=Array,M.assign(M,Jd))};
M.Sa();try{new Uint8Array(1)}catch(a){};function Kd(a){for(var b=a.length;0<=--b;)a[b]=0}
Kd(Array(576));Kd(Array(60));Kd(Array(512));Kd(Array(256));Kd(Array(29));Kd(Array(30));/*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
var Ld="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");var Md=class{constructor(a){this.name=a}};var Nd=new Md("rawColdConfigGroup");var Od=new Md("rawHotConfigGroup");function Pd(a,b){return G(a,1,b)}
var Qd=class extends K{constructor(a){super(a)}};var Rd=class extends K{constructor(a){super(a)}};Rd.v=[1];var Sd=class extends K{constructor(a){super(a)}};var Td=class extends K{constructor(a){super(a)}};var Ud=class extends K{constructor(a){super(a)}};Ud.v=[2];var Vd=class extends K{constructor(a){super(a)}getPlayerType(){var a=Tc(this,36);a=null==a?a:a;return null!=a?a:0}setHomeGroupInfo(a){return H(this,Ud,81,a)}clearLocationPlayabilityToken(){return G(this,89,void 0,!1)}};Vd.v=[9,66,32,86,100,101];var Xd=class extends K{constructor(a){super(a)}getKey(){return J(this,1)}K(){return J(this,Zc(this,Wd,2))}},Wd=[2,3,4,5,6];var Yd=class extends K{constructor(a){super(a)}};Yd.v=[15,26,28];var Zd=class extends K{constructor(a){super(a)}};Zd.v=[5];var $d=class extends K{constructor(a){super(a)}};var ae=class extends K{constructor(a){super(a)}setSafetyMode(a){return G(this,5,a)}};ae.v=[12];var be=class extends K{constructor(a){super(a)}j(a){return H(this,Vd,1,a)}};be.v=[12];var ce=class extends K{constructor(a){super(a)}getKey(){return J(this,1)}K(){return J(this,2)}};var de=class extends K{constructor(a){super(a)}};de.v=[4,5];var ee=class extends K{constructor(a){super(a)}};var fe=class extends K{constructor(a){super(a)}},ge=[2,3,4,5];var he=class extends K{constructor(a){super(a)}getMessage(){return J(this,1)}};var ie=class extends K{constructor(a){super(a)}};var je=class extends K{constructor(a){super(a)}};var ke=class extends K{constructor(a){super(a)}};ke.v=[10,17];var le=class extends K{constructor(a){super(a)}};var N=class extends K{constructor(a){super(a)}};var me=class extends K{constructor(a){super(a)}};var ne=class extends K{constructor(a){super(a)}};var oe=class extends K{constructor(a){super(a)}getVideoData(){return $c(this,ne,15)}};oe.v=[4];function pe(a,b){H(a,N,1,b)}
var qe=class extends K{constructor(a){super(a)}};function re(a,b){return H(a,N,1,b)}
var se=class extends K{constructor(a){super(a)}h(a){return I(this,2,a)}};function te(a,b){return H(a,N,2,b)}
var ue=class extends K{constructor(a){super(a)}h(a){return I(this,1,a)}};ue.v=[3];var ve=class extends K{constructor(a){super(a)}h(a){return I(this,1,a)}};var we=class extends K{constructor(a){super(a)}h(a){return I(this,1,a)}};var xe=class extends K{constructor(a){super(a)}h(a){return I(this,1,a)}};var ye=class extends K{constructor(a){super(a)}h(a){return I(this,1,a)}};var ze=class extends K{constructor(a){super(a)}};var Ae=class extends K{constructor(a){super(a)}};var O=class extends K{constructor(a){super(a,481)}},Be=[2,3,5,6,7,11,13,20,21,22,23,24,28,32,37,45,59,72,73,74,76,78,79,80,85,91,97,100,102,105,111,117,119,126,127,136,146,148,151,156,157,158,159,163,164,168,176,177,178,179,184,188,189,190,191,193,194,195,196,197,198,199,200,201,202,203,204,205,206,208,209,215,219,222,225,226,227,229,232,233,234,240,241,244,247,248,249,251,254,255,256,257,258,259,260,261,266,270,272,278,288,291,293,300,304,308,309,310,311,313,314,319,320,321,323,324,327,328,330,331,
332,334,337,338,340,344,348,350,351,352,353,354,355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,383,388,389,402,403,410,411,412,413,414,415,416,417,418,423,424,425,426,427,429,430,431,439,441,444,448,458,469,471,473,474,480];var Ce={Db:0,kb:1,qb:2,rb:4,xb:8,sb:16,tb:32,Cb:64,Bb:128,mb:256,ob:512,vb:1024,nb:2048,pb:4096,lb:8192,ub:16384,yb:32768,wb:65536,zb:131072,Ab:262144};var De=class extends K{constructor(a){super(a)}};var Fe=class extends K{constructor(a){super(a)}setVideoId(a){return Xc(this,1,Ee,Ec(a))}getPlaylistId(){return gd(this,Zc(this,Ee,2))}},Ee=[1,2];var Ge=class extends K{constructor(){super()}};Ge.v=[3];var He=new Md("recordNotificationInteractionsEndpoint");var Ie=["notification/convert_endpoint_to_url"],Je=["notification/record_interactions"],Ke=["notification_registration/set_registration"];var Le=a=>self.btoa(String.fromCharCode.apply(null,Array.from(new Uint8Array(a)))).replace(/\+/g,"-").replace(/\//g,"_");var Me=["notifications_register","notifications_check_registration"];var Ne=class extends Error{constructor(a,...b){super(a);this.args=[...b]}};let Oe=null;function P(a,b){const c={};c.key=a;c.value=b;return Pe().then(d=>new Promise((e,f)=>{try{const h=d.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(c);h.onsuccess=()=>{e()};
h.onerror=()=>{f()}}catch(h){f(h)}}))}
function Qe(){return P("IndexedDBCheck","testing IndexedDB").then(()=>Re("IndexedDBCheck")).then(a=>"testing IndexedDB"===a?Promise.resolve():Promise.reject()).then(()=>!0).catch(()=>!1)}
function Re(a){const b=new Ne("Error accessing DB");return Pe().then(c=>new Promise((d,e)=>{try{const f=c.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);f.onsuccess=()=>{const h=f.result;d(h?h.value:null)};
f.onerror=()=>{b.params={key:a,source:"onerror"};e(b)}}catch(f){b.params={key:a,
thrownError:String(f)},e(b)}}),()=>null)}
function Pe(){return Oe?Promise.resolve(Oe):new Promise((a,b)=>{const c=self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=()=>{const d=c.result;if(d.objectStoreNames.contains("swpushnotificationsstore"))Oe=d,a(Oe);else return self.indexedDB.deleteDatabase("swpushnotificationsdb"),Pe()};
c.onupgradeneeded=Se})}
function Se(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})}
;const Te={WEB_UNPLUGGED:"^unplugged/",WEB_UNPLUGGED_ONBOARDING:"^unplugged/",WEB_UNPLUGGED_OPS:"^unplugged/",WEB_UNPLUGGED_PUBLIC:"^unplugged/",WEB_CREATOR:"^creator/",WEB_KIDS:"^kids/",WEB_EXPERIMENTS:"^experiments/",WEB_MUSIC:"^music/",WEB_REMIX:"^music/",WEB_MUSIC_EMBEDDED_PLAYER:"^music/",WEB_MUSIC_EMBEDDED_PLAYER:"^main_app/|^sfv/"};
function Ue(a){if(1===a.length)return a[0];var b=Te.UNKNOWN_INTERFACE;if(b){b=new RegExp(b);for(var c of a)if(b.exec(c))return c}const d=[];Object.entries(Te).forEach(([e,f])=>{"UNKNOWN_INTERFACE"!==e&&d.push(f)});
c=new RegExp(d.join("|"));a.sort((e,f)=>e.length-f.length);
for(const e of a)if(!c.exec(e))return e;return a[0]}
function Ve(a){return`/youtubei/v1/${Ue(a)}`}
;var We=class extends K{constructor(a){super(a)}};var Xe=class extends K{constructor(a){super(a,0,"yt.sw.adr")}};const Ye=t.window;let Ze,$e;const af=(null==Ye?void 0:null==(Ze=Ye.yt)?void 0:Ze.config_)||(null==Ye?void 0:null==($e=Ye.ytcfg)?void 0:$e.data_)||{};w("yt.config_",af);function Q(...a){a=arguments;1<a.length?af[a[0]]=a[1]:1===a.length&&Object.assign(af,a[0])}
function R(a,b){return a in af?af[a]:b}
function bf(){return R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")}
function cf(){const a=af.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;const df=[];function ef(a){df.forEach(b=>b(a))}
function S(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){ff(b)}}:a}
function ff(a){var b=v("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Q("ERRORS",b));ef(a)}
function gf(a){var b=v("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0,void 0,void 0]),Q("ERRORS",b))}
;const hf=/^[\w.]*$/,jf={q:!0,search_query:!0};function kf(a,b){b=a.split(b);const c={};for(let f=0,h=b.length;f<h;f++){const g=b[f].split("=");if(1==g.length&&g[0]||2==g.length)try{const k=lf(g[0]||""),l=lf(g[1]||"");k in c?Array.isArray(c[k])?ra(c[k],l):c[k]=[c[k],l]:c[k]=l}catch(k){var d=k,e=g[0];const l=String(kf);d.args=[{key:e,value:g[1],query:a,method:mf==l?"unchanged":l}];jf.hasOwnProperty(e)||gf(d)}}return c}
const mf=String(kf);function nf(a){"?"==a.charAt(0)&&(a=a.substr(1));return kf(a,"&")}
function of(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=nf(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=Na(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.slice(0,f),e,b.slice(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function pf(a){if(!b)var b=window.location.href;const c=a.match(Ka)[1]||null,d=La(a.match(Ka)[3]||null);c&&d?(a=a.match(Ka),b=b.match(Ka),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?La(b.match(Ka)[3]||null)==d&&(Number(b.match(Ka)[4]||null)||null)==(Number(a.match(Ka)[4]||null)||null):!0;return a}
function lf(a){return a&&a.match(hf)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function T(a){a=qf(a);return"string"===typeof a&&"false"===a?!1:!!a}
function rf(a,b){a=qf(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function sf(){return R("EXPERIMENTS_TOKEN","")}
function qf(a){const b=R("EXPERIMENTS_FORCED_FLAGS",{})||{};return void 0!==b[a]?b[a]:R("EXPERIMENT_FLAGS",{})[a]}
function tf(){const a=[],b=R("EXPERIMENTS_FORCED_FLAGS",{});for(var c of Object.keys(b))a.push({key:c,value:String(b[c])});c=R("EXPERIMENT_FLAGS",{});for(const d of Object.keys(c))d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;function uf(a,b){"function"===typeof a&&(a=S(a));return window.setTimeout(a,b)}
;var vf="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" "),wf=[...vf,"client_dev_set_cookie"];[...vf];let xf=!1;function yf(a,b){const c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=zf(a,b);const d=Af(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");const e=b.context||t;let f=!1,h;fetch(a,c).then(g=>{if(!f){f=!0;h&&window.clearTimeout(h);var k=g.ok,l=m=>{m=m||{};k?b.onSuccess&&b.onSuccess.call(e,m,g):b.onError&&b.onError.call(e,m,g);b.onFinish&&b.onFinish.call(e,m,g)};
"JSON"==(b.format||"JSON")&&(k||400<=g.status&&500>g.status)?g.json().then(l,function(){l(null)}):l(null)}}).catch(()=>{b.onError&&b.onError.call(e,{},{})});
a=b.timeout||0;b.onFetchTimeout&&0<a&&(h=uf(()=>{f||(f=!0,window.clearTimeout(h),b.onFetchTimeout.call(b.context||t))},a))}
function zf(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);const c=R("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=of(a,b||{},!0);return a}
function Af(a,b){const c=R("XSRF_FIELD_NAME"),d=R("XSRF_TOKEN");var e=b.postBody||"",f=b.postParams;const h=R("XSRF_FIELD_NAME");let g;b.headers&&(g=b.headers["Content-Type"]);b.excludeXsrf||La(a.match(Ka)[3]||null)&&!b.withCredentials&&La(a.match(Ka)[3]||null)!=document.location.hostname||"POST"!=b.method||g&&"application/x-www-form-urlencoded"!=g||b.postParams&&b.postParams[h]||(f||(f={}),f[c]=d);(T("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&
(e=nf(e),va(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):Na(e));f=e||f&&!sa(f);!xf&&f&&"POST"!=b.method&&(xf=!0,ff(Error("AJAX request with postData should use POST")));return e}
;const Bf=[{ba:a=>`Cannot read property '${a.key}'`,
V:{Error:[{u:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{u:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{u:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{u:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{u:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{u:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{u:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{ba:a=>`Cannot call '${a.key}'`,
V:{TypeError:[{u:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{u:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{u:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{u:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{u:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,groups:["key"]},{u:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
groups:["key"]}]}},{ba:a=>`${a.key} is not defined`,
V:{ReferenceError:[{u:/(.*) is not defined/,groups:["key"]},{u:/Can't find variable: (.*)/,groups:["key"]}]}}];var Df={F:[],D:[{callback:Cf,weight:500}]};function Cf(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Ef(){if(!Ff){var a=Ff=new Gf;a.F.length=0;a.D.length=0;Hf(a,Df)}return Ff}
function Hf(a,b){b.F&&a.F.push.apply(a.F,b.F);b.D&&a.D.push.apply(a.D,b.D)}
var Gf=class{constructor(){this.D=[];this.F=[]}},Ff;const If=new L;function Jf(a){const b=a.length;let c=0;const d=()=>a.charCodeAt(c++);
do{var e=Kf(d);if(Infinity===e)break;const f=e>>3;switch(e&7){case 0:e=Kf(d);if(2===f)return e;break;case 1:if(2===f)return;c+=8;break;case 2:e=Kf(d);if(2===f)return a.substr(c,e);c+=e;break;case 5:if(2===f)return;c+=4;break;default:return}}while(c<b)}
function Kf(a){let b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Lf(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Mf(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var h=b;var g=c;h="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=Jf(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?Mf(`${e}.ve`,f,h,g):0;d+=h;d+=Mf(e,a[e],b,c);if(500<d)break}}else c[b]=Nf(a),d+=c[b].length;else c[b]=Nf(a),d+=c[b].length;return d}
function Mf(a,b,c,d){c+=`.${a}`;a=Nf(b);d[c]=a;return c.length+a.length}
function Nf(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return`unable to serialize ${typeof a} (${b.message})`}}
;function Of(){Pf.h||(Pf.h=new Pf);return Pf.h}
function Qf(a,b){a={};var c=[],d=vd(String(t.location.href));var e=[];var f=t.__SAPISID||t.__APISID||t.__3PSAPISID||t.__OVERRIDE_SID;Cd()&&(f=f||t.__1PSAPISID);if(f)f=!0;else{if("undefined"!==typeof document){const h=new Bd;f=h.get("SAPISID")||h.get("APISID")||h.get("__Secure-3PAPISID")||h.get("SID")||h.get("OSID");Cd()&&(f=f||h.get("__Secure-1PAPISID"))}f=!!f}f&&(f=(d=0==d.indexOf("https:")||0==d.indexOf("chrome-extension:")||0==d.indexOf("moz-extension:"))?t.__SAPISID:t.__APISID,f||"undefined"===
typeof document||(f=new Bd,f=f.get(d?"SAPISID":"APISID")||f.get("__Secure-3PAPISID")),(f=f?xd(f,d?"SAPISIDHASH":"APISIDHASH",c):null)&&e.push(f),d&&Cd()&&((d=Dd("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",c))&&e.push(d),(c=Dd("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",c))&&e.push(c)));if(e=0==e.length?null:e.join(" "))a.Authorization=e,e=b=null==b?void 0:b.sessionIndex,void 0===e&&(e=Number(R("SESSION_INDEX",0)),e=isNaN(e)?0:e),T("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=
e.toString()),"INNERTUBE_HOST_OVERRIDE"in af||(a["X-Origin"]=window.location.origin),void 0===b&&"DELEGATED_SESSION_ID"in af&&(a["X-Goog-PageId"]=R("DELEGATED_SESSION_ID"));return a}
var Pf=class{constructor(){this.Ua=!0}};var Rf={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};w("ytglobal.prefsUserPrefsPrefs_",v("ytglobal.prefsUserPrefsPrefs_")||{});function Sf(){if(void 0!==R("DATASYNC_ID"))return R("DATASYNC_ID");throw new Ne("Datasync ID not set","unknown");}
;function Tf(a,b){return Uf(a,0,b)}
function Vf(a){const b=v("yt.scheduler.instance.addImmediateJob");b?b(a):a()}
var Wf=class{h(a){Uf(a,1)}};function Xf(){Yf.h||(Yf.h=new Yf);return Yf.h}
function Uf(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);const d=v("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):uf(a,c||0)}
var Yf=class extends Wf{T(a){if(void 0===a||!Number.isNaN(Number(a))){var b=v("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}}start(){const a=v("yt.scheduler.instance.start");a&&a()}},Zf=Xf();const $f=[];let ag,bg=!1;function cg(a){bg||(ag?ag.handleError(a):($f.push({type:"ERROR",payload:a}),10<$f.length&&$f.shift()))}
function dg(a,b){bg||(ag?ag.U(a,b):($f.push({type:"EVENT",eventType:a,payload:b}),10<$f.length&&$f.shift()))}
;function eg(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function fg(a){return a.substr(0,a.indexOf(":"))||a}
;const gg={AUTH_INVALID:"No user identifier specified.",EXPLICIT_ABORT:"Transaction was explicitly aborted.",IDB_NOT_SUPPORTED:"IndexedDB is not supported.",MISSING_INDEX:"Index not created.",MISSING_OBJECT_STORES:"Object stores not created.",DB_DELETED_BY_MISSING_OBJECT_STORES:"Database is deleted because expected object stores were not created.",DB_REOPENED_BY_MISSING_OBJECT_STORES:"Database is reopened because expected object stores were not created.",UNKNOWN_ABORT:"Transaction was aborted for unknown reasons.",
QUOTA_EXCEEDED:"The current transaction exceeded its quota limitations.",QUOTA_MAYBE_EXCEEDED:"The current transaction may have failed because of exceeding quota limitations.",EXECUTE_TRANSACTION_ON_CLOSED_DB:"Can't start a transaction on a closed database",INCOMPATIBLE_DB_VERSION:"The binary is incompatible with the database version"},hg={AUTH_INVALID:"ERROR",EXECUTE_TRANSACTION_ON_CLOSED_DB:"WARNING",EXPLICIT_ABORT:"IGNORED",IDB_NOT_SUPPORTED:"ERROR",MISSING_INDEX:"WARNING",MISSING_OBJECT_STORES:"ERROR",
DB_DELETED_BY_MISSING_OBJECT_STORES:"WARNING",DB_REOPENED_BY_MISSING_OBJECT_STORES:"WARNING",QUOTA_EXCEEDED:"WARNING",QUOTA_MAYBE_EXCEEDED:"WARNING",UNKNOWN_ABORT:"WARNING",INCOMPATIBLE_DB_VERSION:"WARNING"},ig={AUTH_INVALID:!1,EXECUTE_TRANSACTION_ON_CLOSED_DB:!1,EXPLICIT_ABORT:!1,IDB_NOT_SUPPORTED:!1,MISSING_INDEX:!1,MISSING_OBJECT_STORES:!1,DB_DELETED_BY_MISSING_OBJECT_STORES:!1,DB_REOPENED_BY_MISSING_OBJECT_STORES:!1,QUOTA_EXCEEDED:!1,QUOTA_MAYBE_EXCEEDED:!0,UNKNOWN_ABORT:!0,INCOMPATIBLE_DB_VERSION:!1};
var U=class extends Ne{constructor(a,b={},c=gg[a],d=hg[a],e=ig[a]){super(c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,U.prototype)}},jg=class extends U{constructor(a,b){super("MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},gg.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,jg.prototype)}},kg=class extends Error{constructor(a,b){super();this.index=
a;this.objectStore=b;Object.setPrototypeOf(this,kg.prototype)}};const lg=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function mg(a,b,c,d){b=fg(b);let e;e=a instanceof Error?a:Error(`Unexpected error: ${a}`);if(e instanceof U)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new U("QUOTA_EXCEEDED",a);if(Bb&&"UnknownError"===e.name)return new U("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof kg)return new U("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&lg.some(f=>e.message.includes(f)))return new U("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new U("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",cc:e.name})];e.level="WARNING";return e}
function ng(a,b,c){return new U("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:void 0}})}
;function og(a){if(!a)throw Error();throw a;}
function pg(a){return a}
var qg=class{constructor(a){this.h=a}};function rg(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");const f=c(a.state.value);f instanceof sg?tg(a,b,f,d,e):d(f)}catch(f){e(f)}}
function ug(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");const f=c(a.state.reason);f instanceof sg?tg(a,b,f,d,e):d(f)}catch(f){e(f)}}
function tg(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(f=>{f instanceof sg?tg(a,b,f,d,e):d(f)},f=>{e(f)})}
var sg=class{constructor(a){this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;const b=d=>{if("PENDING"===this.state.status){this.state={status:"FULFILLED",value:d};for(const e of this.h)e()}},c=d=>{if("PENDING"===this.state.status){this.state={status:"REJECTED",
reason:d};for(const e of this.i)e()}};
try{a(b,c)}catch(d){c(d)}}static all(a){return new sg(new qg((b,c)=>{const d=[];let e=a.length;0===e&&b(d);for(let f=0;f<a.length;++f)sg.resolve(a[f]).then(h=>{d[f]=h;e--;0===e&&b(d)}).catch(h=>{c(h)})}))}static resolve(a){return new sg(new qg((b,c)=>{a instanceof sg?a.then(b,c):b(a)}))}then(a,b){const c=null!=a?a:pg,d=null!=b?b:og;
return new sg(new qg((e,f)=>{"PENDING"===this.state.status?(this.h.push(()=>{rg(this,this,c,e,f)}),this.i.push(()=>{ug(this,this,d,e,f)})):"FULFILLED"===this.state.status?rg(this,this,c,e,f):"REJECTED"===this.state.status&&ug(this,this,d,e,f)}))}catch(a){return this.then(void 0,a)}};function vg(a,b,c){const d=()=>{try{a.removeEventListener("success",e),a.removeEventListener("error",f)}catch(h){}},e=()=>{b(a.result);
d()},f=()=>{c(a.error);
d()};
a.addEventListener("success",e);a.addEventListener("error",f)}
function wg(a){return new Promise((b,c)=>{vg(a,b,c)})}
function V(a){return new sg(new qg((b,c)=>{vg(a,b,c)}))}
;function xg(a,b){return new sg(new qg((c,d)=>{const e=()=>{const f=a?b(a):null;f?f.then(h=>{a=h;e()},d):c()};
e()}))}
;const yg=window;var W=yg.ytcsi&&yg.ytcsi.now?yg.ytcsi.now:yg.performance&&yg.performance.timing&&yg.performance.now&&yg.performance.timing.navigationStart?()=>yg.performance.timing.navigationStart+yg.performance.now():()=>(new Date).getTime();function X(a,b,c,d){return r(function*(){const e={mode:"readonly",B:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?e.mode=c:Object.assign(e,c);a.transactionCount++;const f=e.B?3:1;let h=0,g;for(;!g;){h++;const l=Math.round(W());try{const m=a.h.transaction(b,e.mode);var k=d;const n=new zg(m),u=yield Ag(n,k),p=Math.round(W());Bg(a,l,p,h,void 0,b.join(),e);return u}catch(m){k=Math.round(W());const n=mg(m,a.h.name,b.join(),a.h.version);if(n instanceof U&&!n.h||h>=f)Bg(a,l,k,h,n,b.join(),e),
g=n}}return Promise.reject(g)})}
function Cg(a,b,c){a=a.h.createObjectStore(b,c);return new Dg(a)}
function Eg(a,b,c,d){return X(a,[b],{mode:"readwrite",B:!0},e=>{e=e.objectStore(b);return V(e.h.put(c,d))})}
function Bg(a,b,c,d,e,f,h){b=c-b;e?(e instanceof U&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&dg("QUOTA_EXCEEDED",{dbName:fg(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:h.mode}),e instanceof U&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),dg("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),Fg(a,!1,d,f,b,h.tag),cg(e)):Fg(a,!0,d,f,b,h.tag)}
function Fg(a,b,c,d,e,f="IDB_TRANSACTION_TAG_UNKNOWN"){dg("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:f})}
var Gg=class{constructor(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(W());this.i=!1}add(a,b,c){return X(this,[a],{mode:"readwrite",B:!0},d=>d.objectStore(a).add(b,c))}clear(a){return X(this,[a],{mode:"readwrite",
B:!0},b=>b.objectStore(a).clear())}close(){this.h.close();
let a;(null==(a=this.options)?0:a.closed)&&this.options.closed()}count(a,b){return X(this,[a],{mode:"readonly",B:!0},c=>c.objectStore(a).count(b))}delete(a,b){return X(this,[a],{mode:"readwrite",
B:!0},c=>c.objectStore(a).delete(b))}get(a,b){return X(this,[a],{mode:"readonly",
B:!0},c=>c.objectStore(a).get(b))}getAll(a,b,c){return X(this,[a],{mode:"readonly",
B:!0},d=>d.objectStore(a).getAll(b,c))}objectStoreNames(){return Array.from(this.h.objectStoreNames)}getName(){return this.h.name}};
function Hg(a,b,c){a=a.h.openCursor(b.query,b.direction);return Ig(a).then(d=>xg(d,c))}
function Jg(a,b){return Hg(a,{query:b},c=>c.delete().then(()=>c.continue())).then(()=>{})}
function Kg(a,b,c){const d=[];return Hg(a,{query:b},e=>{if(!(void 0!==c&&d.length>=c))return d.push(e.K()),e.continue()}).then(()=>d)}
var Dg=class{constructor(a){this.h=a}add(a,b){return V(this.h.add(a,b))}autoIncrement(){return this.h.autoIncrement}clear(){return V(this.h.clear()).then(()=>{})}count(a){return V(this.h.count(a))}delete(a){return a instanceof IDBKeyRange?Jg(this,a):V(this.h.delete(a))}get(a){return V(this.h.get(a))}getAll(a,b){return"getAll"in IDBObjectStore.prototype?V(this.h.getAll(a,b)):Kg(this,a,b)}index(a){try{return new Lg(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new kg(a,
this.h.name);
throw b;}}getName(){return this.h.name}keyPath(){return this.h.keyPath}};function Ag(a,b){const c=new Promise((d,e)=>{try{b(a).then(f=>{d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(([d])=>d)}
var zg=class{constructor(a){this.h=a;this.j=new Map;this.i=!1;this.done=new Promise((b,c)=>{this.h.addEventListener("complete",()=>{b()});
this.h.addEventListener("error",d=>{d.currentTarget===d.target&&c(this.h.error)});
this.h.addEventListener("abort",()=>{var d=this.h.error;if(d)c(d);else if(!this.i){d=U;var e=this.h.objectStoreNames;const f=[];for(let h=0;h<e.length;h++){const g=e.item(h);if(null===g)throw Error("Invariant: item in DOMStringList is null");f.push(g)}d=new d("UNKNOWN_ABORT",{objectStoreNames:f.join(),dbName:this.h.db.name,mode:this.h.mode});c(d)}})})}abort(){this.h.abort();
this.i=!0;throw new U("EXPLICIT_ABORT");}objectStore(a){a=this.h.objectStore(a);let b=this.j.get(a);b||(b=new Dg(a),this.j.set(a,b));return b}};function Mg(a,b,c){const {query:d=null,direction:e="next"}=b;a=a.h.openCursor(d,e);return Ig(a).then(f=>xg(f,c))}
function Ng(a,b,c){const d=[];return Mg(a,{query:b},e=>{if(!(void 0!==c&&d.length>=c))return d.push(e.K()),e.continue()}).then(()=>d)}
var Lg=class{constructor(a){this.h=a}count(a){return V(this.h.count(a))}delete(a){return Mg(this,{query:a},b=>b.delete().then(()=>b.continue()))}get(a){return V(this.h.get(a))}getAll(a,b){return"getAll"in IDBIndex.prototype?V(this.h.getAll(a,b)):Ng(this,a,b)}getKey(a){return V(this.h.getKey(a))}keyPath(){return this.h.keyPath}unique(){return this.h.unique}};
function Ig(a){return V(a).then(b=>b?new Og(a,b):null)}
var Og=class{constructor(a,b){this.request=a;this.cursor=b}advance(a){this.cursor.advance(a);return Ig(this.request)}continue(a){this.cursor.continue(a);return Ig(this.request)}delete(){return V(this.cursor.delete()).then(()=>{})}getKey(){return this.cursor.key}K(){return this.cursor.value}update(a){return V(this.cursor.update(a))}};function Pg(a,b,c){return new Promise((d,e)=>{let f;f=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);const h=c.Ea,g=c.blocking,k=c.Va,l=c.upgrade,m=c.closed;let n;const u=()=>{n||(n=new Gg(f.result,{closed:m}));return n};
f.addEventListener("upgradeneeded",p=>{try{if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");p.dataLoss&&"none"!==p.dataLoss&&dg("IDB_DATA_CORRUPTED",{reason:p.dataLossMessage||"unknown reason",dbName:fg(a)});const x=u(),C=new zg(f.transaction);l&&l(x,D=>p.oldVersion<D&&p.newVersion>=D,C);
C.done.catch(D=>{e(D)})}catch(x){e(x)}});
f.addEventListener("success",()=>{const p=f.result;g&&p.addEventListener("versionchange",()=>{g(u())});
p.addEventListener("close",()=>{dg("IDB_UNEXPECTEDLY_CLOSED",{dbName:fg(a),dbVersion:p.version});k&&k()});
d(u())});
f.addEventListener("error",()=>{e(f.error)});
h&&f.addEventListener("blocked",()=>{h()})})}
function Qg(a,b,c={}){return Pg(a,b,c)}
function Rg(a,b={}){return r(function*(){try{const c=self.indexedDB.deleteDatabase(a),d=b.Ea;d&&c.addEventListener("blocked",()=>{d()});
yield wg(c)}catch(c){throw mg(c,a,"",-1);}})}
;function Sg(a,b){return new U("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Tg(a,b){if(!b)throw ng("openWithToken",fg(a.name));return a.open()}
var Ug=class{constructor(a,b){this.name=a;this.options=b;this.j=!0;this.m=this.l=0}i(a,b,c={}){return Qg(a,b,c)}delete(a={}){return Rg(this.name,a)}open(){if(!this.j)throw Sg(this);if(this.h)return this.h;let a;const b=()=>{this.h===a&&(this.h=void 0)},c={blocking:e=>{e.close()},
closed:b,Va:b,upgrade:this.options.upgrade},d=()=>{const e=this;return r(function*(){var f,h=null!=(f=Error().stack)?f:"";try{const k=yield e.i(e.name,e.options.version,c);var g=e.options;f=[];for(const l of Object.keys(g.M)){const {L:m,ic:n=Number.MAX_VALUE}=g.M[l];!(k.h.version>=m)||k.h.version>=n||k.h.objectStoreNames.contains(l)||f.push(l)}if(0!==f.length){const l=Object.keys(e.options.M),m=k.objectStoreNames();if(e.m<rf("ytidb_reopen_db_retries",0))return e.m++,k.close(),cg(new U("DB_REOPENED_BY_MISSING_OBJECT_STORES",
{dbName:e.name,expectedObjectStores:l,foundObjectStores:m})),d();if(e.l<rf("ytidb_remake_db_retries",1))return e.l++,yield e.delete(),cg(new U("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:e.name,expectedObjectStores:l,foundObjectStores:m})),d();throw new jg(m,l);}return k}catch(k){if(k instanceof DOMException?"VersionError"===k.name:"DOMError"in self&&k instanceof DOMError?"VersionError"===k.name:k instanceof Object&&"message"in k&&"An attempt was made to open a database using a lower version than the existing version."===
k.message){h=yield e.i(e.name,void 0,Object.assign({},c,{upgrade:void 0}));g=h.h.version;if(void 0!==e.options.version&&g>e.options.version+1)throw h.close(),e.j=!1,Sg(e,g);return h}b();k instanceof Error&&!T("ytidb_async_stack_killswitch")&&(k.stack=`${k.stack}\n${h.substring(h.indexOf("\n")+1)}`);let l;throw mg(k,e.name,"",null!=(l=e.options.version)?l:-1);}})};
return this.h=a=d()}};const Vg=new Ug("YtIdbMeta",{M:{databases:{L:1}},upgrade(a,b){b(1)&&Cg(a,"databases",{keyPath:"actualName"})}});function Wg(a,b){return r(function*(){return X(yield Tg(Vg,b),["databases"],{B:!0,mode:"readwrite"},c=>{const d=c.objectStore("databases");return d.get(a.actualName).then(e=>{if(e?a.actualName!==e.actualName||a.publicName!==e.publicName||a.userIdentifier!==e.userIdentifier:1)return V(d.h.put(a,void 0)).then(()=>{})})})})}
function Xg(a,b){return r(function*(){if(a)return(yield Tg(Vg,b)).delete("databases",a)})}
;let Yg;const Zg=new class{constructor(){}}(new class{constructor(){}});function $g(){return r(function*(){return!0})}
function ah(){if(void 0!==Yg)return Yg;bg=!0;return Yg=$g().then(a=>{bg=!1;return a})}
function bh(){return v("ytglobal.idbToken_")||void 0}
function ch(){const a=bh();return a?Promise.resolve(a):ah().then(b=>{(b=b?Zg:void 0)&&w("ytglobal.idbToken_",b);return b})}
;new Fd;function dh(a){try{Sf();var b=!0}catch(c){b=!1}if(!b)throw a=new U("AUTH_INVALID",{dbName:a}),cg(a),a;b=Sf();return{actualName:`${a}:${b}`,publicName:a,userIdentifier:b}}
function eh(a,b,c,d){return r(function*(){var e,f=null!=(e=Error().stack)?e:"";e=yield ch();if(!e)throw e=ng("openDbImpl",a,b),T("ytidb_async_stack_killswitch")||(e.stack=`${e.stack}\n${f.substring(f.indexOf("\n")+1)}`),cg(e),e;eg(a);f=c?{actualName:a,publicName:a,userIdentifier:void 0}:dh(a);try{return yield Wg(f,e),yield Qg(f.actualName,b,d)}catch(h){try{yield Xg(f.actualName,e)}catch(g){}throw h;}})}
function fh(a,b,c={}){return eh(a,b,!1,c)}
function gh(a,b,c={}){return eh(a,b,!0,c)}
function hh(a,b={}){return r(function*(){const c=yield ch();if(c){eg(a);var d=dh(a);yield Rg(d.actualName,b);yield Xg(d.actualName,c)}})}
function ih(a,b={}){return r(function*(){const c=yield ch();c&&(eg(a),yield Rg(a,b),yield Xg(a,c))})}
;function jh(a,b){let c;return()=>{c||(c=new kh(a,b));return c}}
var kh=class extends Ug{constructor(a,b){super(a,b);this.options=b;eg(a)}i(a,b,c={}){return(this.options.X?gh:fh)(a,b,Object.assign({},c))}delete(a={}){return(this.options.X?ih:hh)(this.name,a)}};function lh(a,b){return jh(a,b)}
;var mh=lh("ytGcfConfig",{M:{coldConfigStore:{L:1},hotConfigStore:{L:1}},X:!1,upgrade(a,b){b(1)&&(Cg(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}).h.createIndex("hotTimestampIndex","timestamp",{unique:!1}),Cg(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}).h.createIndex("coldTimestampIndex","timestamp",{unique:!1}))},version:1});function nh(a){return Tg(mh(),a)}
function oh(a,b,c){return r(function*(){const d={config:a,hashData:b,timestamp:W()},e=yield nh(c);yield e.clear("hotConfigStore");return yield Eg(e,"hotConfigStore",d)})}
function ph(a,b,c,d){return r(function*(){const e={config:a,hashData:b,configData:c,timestamp:W()},f=yield nh(d);yield f.clear("coldConfigStore");return yield Eg(f,"coldConfigStore",e)})}
function qh(a){return r(function*(){let b=void 0;yield X(yield nh(a),["coldConfigStore"],{mode:"readwrite",B:!0},c=>Mg(c.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},d=>{b=d.K()}));
return b})}
function rh(a){return r(function*(){let b=void 0;yield X(yield nh(a),["hotConfigStore"],{mode:"readwrite",B:!0},c=>Mg(c.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},d=>{b=d.K()}));
return b})}
;var sh=class extends Oa{constructor(){super(...arguments);this.h=[]}O(){this.h.length=0;super.O()}};function th(a,b,c){return r(function*(){if(T("update_log_event_config")){c&&(a.j=c,w("yt.gcf.config.hotConfigGroup",a.j||null));a.hotHashData=b;w("yt.gcf.config.hotHashData",a.hotHashData||null);var d=bh();if(d){if(!c){var e;c=null==(e=yield rh(d))?void 0:e.config}yield oh(c,b,d)}if(c){d=a.i;e=c;for(const f of d.h)f(e)}}})}
function uh(a,b,c){return r(function*(){if(T("update_log_event_config")){a.coldHashData=b;w("yt.gcf.config.coldHashData",a.coldHashData||null);const d=bh();if(d){if(!c){let e;c=null==(e=yield qh(d))?void 0:e.config}c&&(yield ph(c,b,c.configData,d))}}})}
var vh=class{constructor(){this.h=0;this.i=new sh}};function wh(){return"INNERTUBE_API_KEY"in af&&"INNERTUBE_API_VERSION"in af}
function xh(){return{innertubeApiKey:R("INNERTUBE_API_KEY"),innertubeApiVersion:R("INNERTUBE_API_VERSION"),Z:R("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Ja:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Ka:R("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:R("INNERTUBE_CONTEXT_CLIENT_VERSION"),pa:R("INNERTUBE_CONTEXT_HL"),oa:R("INNERTUBE_CONTEXT_GL"),La:R("INNERTUBE_HOST_OVERRIDE")||"",Na:!!R("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Ma:!!R("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:R("SERIALIZED_CLIENT_CONFIG_DATA")}}
function yh(a){const b={client:{hl:a.pa,gl:a.oa,clientName:a.Ja,clientVersion:a.innertubeContextClientVersion,configInfo:a.Z}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=t.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=sf();""!==c&&(b.client.experimentsToken=c);c=tf();0<c.length&&(b.request={internalExperimentFlags:c});zh(void 0,b);Ah(a,void 0,b);T("start_sending_config_hash")&&Bh(void 0,b);R("DELEGATED_SESSION_ID")&&!T("pageid_as_header_web")&&
(b.user={onBehalfOfUser:R("DELEGATED_SESSION_ID")});!T("fill_delegate_context_in_gel_killswitch")&&(a=R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;c=a.assign;var d=b.client,e=R("DEVICE","");const f={};for(const [h,g]of Object.entries(nf(e))){e=h;const k=g;"cbrand"===e?f.deviceMake=k:"cmodel"===e?f.deviceModel=k:"cbr"===e?f.browserName=k:"cbrver"===e?f.browserVersion=k:"cos"===e?f.osName=k:"cosver"===e?f.osVersion=
k:"cplatform"===e&&(f.platform=k)}b.client=c.call(a,d,f);return b}
function Ch(a){const b=new be,c=new Vd;I(c,1,a.pa);I(c,2,a.oa);G(c,16,a.Ka);I(c,17,a.innertubeContextClientVersion);if(a.Z){var d=a.Z,e=new Td;d.coldConfigData&&I(e,1,d.coldConfigData);d.appInstallData&&I(e,6,d.appInstallData);d.coldHashData&&I(e,3,d.coldHashData);d.hotHashData&&I(e,5,d.hotHashData);H(c,Td,62,e)}if((d=t.devicePixelRatio)&&1!=d){if(null!=d&&"number"!==typeof d)throw Error(`Value of float/double field must be a number|null|undefined, found ${typeof d}: ${d}`);G(c,65,d)}d=sf();""!==
d&&I(c,54,d);d=tf();if(0<d.length){e=new Yd;for(let f=0;f<d.length;f++){const h=new Xd;I(h,1,d[f].key);Xc(h,2,Wd,Ec(d[f].value));ed(e,15,Xd,h)}H(b,Yd,5,e)}zh(b);Ah(a,c);T("start_sending_config_hash")&&Bh(c);R("DELEGATED_SESSION_ID")&&!T("pageid_as_header_web")&&(a=new ae,I(a,3,R("DELEGATED_SESSION_ID")));!T("fill_delegate_context_in_gel_killswitch")&&(a=R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(d=$c(b,ae,3)||new ae,a=I(d,18,a),H(b,ae,3,a));a=R("DEVICE","");for(const [f,h]of Object.entries(nf(a)))a=
f,d=h,"cbrand"===a?I(c,12,d):"cmodel"===a?I(c,13,d):"cbr"===a?I(c,87,d):"cbrver"===a?I(c,88,d):"cos"===a?I(c,18,d):"cosver"===a?I(c,19,d):"cplatform"===a&&G(c,42,d);b.j(c);return b}
function zh(a,b){const c=v("yt.embedded_player.embed_url");c&&(a?(b=$c(a,Zd,7)||new Zd,I(b,4,c),H(a,Zd,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function Ah(a,b,c){if(a.appInstallData)if(b){let d;c=null!=(d=$c(b,Td,62))?d:new Td;I(c,6,a.appInstallData);H(b,Td,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Dh(a,b,c={}){let d={};R("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":R("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||R("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.Sb||R("AUTHORIZATION");b||(a?b=`Bearer ${v("gapi.auth.getToken")().Rb}`:(a=Qf(Of()),T("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
function Bh(a,b){if(!vh.h){var c=new vh;vh.h=c}c=vh.h;var d=W()-c.h;if(0!==c.h&&d<rf("send_config_hash_timer"))c=void 0;else{d=v("yt.gcf.config.coldConfigData");var e=v("yt.gcf.config.hotHashData"),f=v("yt.gcf.config.coldHashData");d&&e&&f&&(c.h=W());c={coldConfigData:d,hotHashData:e,coldHashData:f}}if(e=c)if(c=e.coldConfigData,d=e.coldHashData,e=e.hotHashData,c&&d&&e)if(a){let h;b=null!=(h=$c(a,Td,62))?h:new Td;I(b,1,c);I(b,3,d);I(b,5,e);H(a,Td,62,b)}else b&&(b.client.configInfo=b.client.configInfo||
{},b.client.configInfo.coldConfigData=c,b.client.configInfo.coldHashData=d,b.client.configInfo.hotHashData=e)}
;function Eh(a){this.version=1;this.args=a}
;function Fh(){var a=Gh;this.topic="screen-created";this.h=a}
Fh.prototype.toString=function(){return this.topic};const Hh=v("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.za;L.prototype.unsubscribeByKey=L.prototype.fa;L.prototype.publish=L.prototype.da;L.prototype.clear=L.prototype.clear;w("ytPubsub2Pubsub2Instance",Hh);const Ih=v("ytPubsub2Pubsub2SubscribedKeys")||{};w("ytPubsub2Pubsub2SubscribedKeys",Ih);const Jh=v("ytPubsub2Pubsub2TopicToKeys")||{};w("ytPubsub2Pubsub2TopicToKeys",Jh);const Kh=v("ytPubsub2Pubsub2IsAsync")||{};w("ytPubsub2Pubsub2IsAsync",Kh);
w("ytPubsub2Pubsub2SkipSubKey",null);function Lh(a,b){const c=Mh();c&&c.publish.call(c,a.toString(),a,b)}
function Nh(a){var b=Oh;const c=Mh();if(!c)return 0;const d=c.subscribe(b.toString(),(e,f)=>{var h=v("ytPubsub2Pubsub2SkipSubKey");h&&h==d||(h=()=>{if(Ih[d])try{if(f&&b instanceof Fh&&b!=e)try{var g=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!g.ta){const p=new g;g.ta=p.version}var l=g.ta}catch(p){}if(!l||k.version!=l)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{l=Reflect;var m=l.construct;
{var n=k.args;const p=n.length;if(0<p){const x=Array(p);for(k=0;k<p;k++)x[k]=n[k];var u=x}else u=[]}f=m.call(l,g,u)}catch(p){throw p.message="yt.pubsub2.Data.deserialize(): "+p.message,p;}}catch(p){throw p.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+p.message,p;}a.call(window,f)}catch(p){ff(p)}},Kh[b.toString()]?v("yt.scheduler.instance")?Zf.h(h):uf(h,0):h())});
Ih[d]=!0;Jh[b.toString()]||(Jh[b.toString()]=[]);Jh[b.toString()].push(d);return d}
function Ph(){var a=Qh;const b=Nh(function(c){a.apply(void 0,arguments);Rh(b)});
return b}
function Rh(a){const b=Mh();b&&("number"===typeof a&&(a=[a]),oa(a,c=>{b.unsubscribeByKey(c);delete Ih[c]}))}
function Mh(){return v("ytPubsub2Pubsub2Instance")}
;var Sh={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,mbsPlaybackInitiated:139,
mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,
kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,transactionFlowPaymentSubmitted:460,
transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,ypcPauseFlowSucceeded:190,
ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,ypcFamilyCreateFlowCancelled:259,
ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,accountRegistryChange:226,
userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,musicSideloadedPlaylistServiceCalled:246,
embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,tvhtml5ApiTest:270,yongleUsbSetup:271,touStrikeInterstitialEvent:272,
liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,
delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,
voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,
sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,
clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,
startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,
playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,
homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,
dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,
producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480};const Th=["client.name","client.version"];function Uh(a){if(!a.errorMetadata||!a.errorMetadata.kvPairs)return a;a.errorMetadata.kvPairs=a.errorMetadata.kvPairs.filter(b=>b.key?Th.includes(b.key):!1);
return a}
;var Vh=lh("ServiceWorkerLogsDatabase",{M:{SWHealthLog:{L:1}},X:!0,upgrade:(a,b)=>{b(1)&&Cg(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function Wh(a,b){return r(function*(){var c=yield Tg(Vh(),b),d=R("INNERTUBE_CONTEXT_CLIENT_NAME",0);const e=Object.assign({},a);e.clientError&&(e.clientError=Uh(e.clientError));e.interface=d;return Eg(c,"SWHealthLog",e)})}
;w("ytNetworklessLoggingInitializationOptions",t.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1});function Xh(a,b,c){!R("VISITOR_DATA")&&.01>Math.random()&&gf(new Ne("Missing VISITOR_DATA when sending innertube request.","log_event",b,c));if(!a.isReady())throw a=new Ne("innertube xhrclient not ready","log_event",b,c),ff(a),a;b={headers:c.headers||{},method:"POST",postParams:b,postBody:c.postBody,postBodyFormat:c.postBodyFormat||"JSON",onTimeout:()=>{c.onTimeout()},
onFetchTimeout:c.onTimeout,onSuccess:(k,l)=>{if(c.onSuccess)c.onSuccess(l)},
onFetchSuccess:k=>{if(c.onSuccess)c.onSuccess(k)},
onError:(k,l)=>{if(c.onError)c.onError(l)},
onFetchError:k=>{if(c.onError)c.onError(k)},
timeout:c.timeout,withCredentials:!0,compress:c.compress};b.headers["Content-Type"]||(b.headers["Content-Type"]="application/json");let d="";var e=a.config_.La;e&&(d=e);var f=a.config_.Na||!1;e=Dh(f,d,c);Object.assign(b.headers,e);(e=b.headers.Authorization)&&!d&&f&&(b.headers["x-origin"]=window.location.origin);f=`/${"youtubei"}/${a.config_.innertubeApiVersion}/${"log_event"}`;let h={alt:"json"},g=a.config_.Ma&&e;g=g&&e.startsWith("Bearer");g||(h.key=a.config_.innertubeApiKey);a=of(`${d}${f}`,h||
{},!0);try{yf(a,b)}catch(k){if("InvalidAccessError"==k.name)gf(Error("An extension is blocking network request."));else throw k;}}
class Yh{constructor(a){this.config_=null;a?this.config_=a:wh()&&(this.config_=xh())}isReady(){!this.config_&&wh()&&(this.config_=xh());return!!this.config_}};let Zh=0;w("ytDomDomGetNextId",v("ytDomDomGetNextId")||(()=>++Zh));w("ytEventsEventsListeners",t.ytEventsEventsListeners||{});w("ytEventsEventsCounter",t.ytEventsEventsCounter||{count:0});function $h(){const a=v("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;t.ytPubsubPubsubInstance||new L;var ai=Symbol("injectionDeps"),bi=class{constructor(){this.name="INNERTUBE_TRANSPORT_TOKEN"}toString(){return`InjectionToken(${this.name})`}},ci=class{constructor(){this.key=vh}};function di(a){var b={Qa:ei,sa:fi.h};a.i.set(b.Qa,b)}
function gi(a,b,c,d=!1){if(-1<c.indexOf(b))throw Error(`Deps cycle for: ${b}`);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error(`No provider for: ${b}`);}d=a.i.get(b);c.push(b);if(void 0!==d.sa)var e=d.sa;else if(d.ab)e=d[ai]?hi(a,d[ai],c):[],e=d.ab(...e);else if(d.Za){e=d.Za;const f=e[ai]?hi(a,e[ai],c):[];e=new e(...f)}else throw Error(`Could not resolve providers for: ${b}`);c.pop();d.qc||a.h.set(b,e);return e}
function hi(a,b,c){return b?b.map(d=>d instanceof ci?gi(a,d.key,c,!0):gi(a,d,c)):[]}
var ii=class{constructor(){this.i=new Map;this.h=new Map}resolve(a){return a instanceof ci?gi(this,a.key,[],!0):gi(this,a,[])}};let ji;function ki(){ji||(ji=new ii);return ji}
;let li=window;function mi(){let a,b;return"h5vcc"in li&&(null==(a=li.h5vcc.traceEvent)?0:a.traceBegin)&&(null==(b=li.h5vcc.traceEvent)?0:b.traceEnd)?1:"performance"in li&&li.performance.mark&&li.performance.measure?2:0}
function ni(a){const b=mi();switch(b){case 1:li.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:li.performance.mark(`${a}-start`);break;case 0:break;default:ud(b,"unknown trace type")}}
function oi(a){var b=mi();switch(b){case 1:li.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=`${a}-start`;const c=`${a}-end`;li.performance.mark(c);li.performance.measure(a,b,c);break;case 0:break;default:ud(b,"unknown trace type")}}
;var pi=T("web_enable_lifecycle_monitoring")&&0!==mi();function qi(a){let b;return null!=(b=a.priority)?b:0}
function ri(a){var b=Array.from(a.h.keys()).sort((c,d)=>qi(a.h[d])-qi(a.h[c]));
for(const c of b)b=a.h[c],void 0===b.jobId||b.W||(a.scheduler.T(b.jobId),Uf(b.aa,10))}
var si=class{constructor(a){this.scheduler=Xf();this.i=new Fd;this.h=a;for(let b=0;b<this.h.length;b++){const c=this.h[b];a=()=>{c.aa();this.h[b].W=!0;this.h.every(e=>!0===e.W)&&this.i.resolve()};
const d=Uf(a,qi(c));this.h[b]=Object.assign({},c,{aa:a,jobId:d})}}cancel(){for(const a of this.h)void 0===a.jobId||a.W||this.scheduler.T(a.jobId),a.W=!0;this.i.resolve()}};function ti(a,b,c){pi&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed(`[${a.constructor.name}] '${a.state}' to '${b}'`),console.log("with message: ",c),console.groupEnd())}
function ui(a,b){const c=b.filter(e=>10===vi(a,e)),d=b.filter(e=>10!==vi(a,e));
return a.l.oc?(...e)=>r(function*(){yield wi(c,...e);xi(a,d,...e)}):(...e)=>{yi(c,...e);
xi(a,d,...e)}}
function vi(a,b){let c,d;return null!=(d=null!=(c=a.j)?c:b.priority)?d:0}
function wi(a,...b){return r(function*(){Xf();for(const c of a){let d;Vf(()=>{zi(c.name);const e=c.callback(...b);"function"===typeof(null==e?void 0:e.then)?d=e.then(()=>{Ai(c.name)}):Ai(c.name)});
d&&(yield d)}})}
function xi(a,b,...c){b=b.map(d=>({aa:()=>{zi(d.name);d.callback(...c);Ai(d.name)},
priority:vi(a,d)}));
b.length&&(a.i=new si(b))}
function yi(a,...b){Xf();for(const c of a)Vf(()=>{zi(c.name);c.callback(...b);Ai(c.name)})}
function zi(a){pi&&a&&ni(a)}
function Ai(a){pi&&a&&oi(a)}
var Bi=class{constructor(){this.state="none";this.plugins=[];this.j=void 0;this.l={};pi&&ni(this.state)}get currentState(){return this.state}install(a){this.plugins.push(a);return this}uninstall(...a){a.forEach(b=>{b=this.plugins.indexOf(b);-1<b&&this.plugins.splice(b,1)})}transition(a,b){pi&&oi(this.state);
var c=this.transitions.find(d=>Array.isArray(d.from)?d.from.find(e=>e===this.state&&d.R===a):d.from===this.state&&d.R===a);
if(c){this.i&&(ri(this.i),this.i=void 0);ti(this,a,b);this.state=a;pi&&ni(this.state);c=c.action.bind(this);const d=this.plugins.filter(e=>e[a]).map(e=>e[a]);
c(ui(this,d),b)}else throw Error(`no transition specified from ${this.state} to ${a}`);}};function Ci(){Di||(Di=new Ei);return Di}
var Ei=class extends Bi{constructor(){super();this.h=null;this.j=10;this.transitions=[{from:"none",R:"application_navigating",action:this.m},{from:"application_navigating",R:"none",action:this.s},{from:"application_navigating",R:"application_navigating",action:()=>{}},
{from:"none",R:"none",action:()=>{}}]}m(a,b){this.h=Tf(()=>{"application_navigating"===this.currentState&&this.transition("none")},5E3);
a(null==b?void 0:b.event)}s(a,b){this.h&&(Zf.T(this.h),this.h=null);a(null==b?void 0:b.event)}},Di;function Fi(a,b){const c=Gi(b);if(a.h[c])return a.h[c];const d=Object.keys(a.store)||[];if(1>=d.length&&Gi(b)===d[0])return d;const e=[];for(let h=0;h<d.length;h++){const g=d[h].split("/");if(Hi(b.auth,g[0])){var f=b.isJspb;Hi(void 0===f?"undefined":f?"true":"false",g[1])&&Hi(b.cttAuthInfo,g[2])&&(f=b.tier,f=void 0===f?"undefined":JSON.stringify(f),Hi(f,g[3])&&e.push(d[h]))}}return a.h[c]=e}
function Hi(a,b){return void 0===a||"undefined"===a?!0:a===b}
var Ii=class{constructor(){this.store={};this.h={}}storePayload(a,b){a=Gi(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a}smartExtractMatchingEntries(a){if(!a.keys.length)return[];const b=Fi(this,a.keys.splice(0,1)[0]),c=[];for(let d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push(...this.store[b[d]]),delete this.store[b[d]]):c.push(...this.store[b[d]].splice(0,a.sizeLimit)));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:
a.sizeLimit)&&(a.sizeLimit-=c.length,c.push(...this.smartExtractMatchingEntries(a)));return c}extractMatchingEntries(a){a=Fi(this,a);const b=[];for(let c=0;c<a.length;c++)this.store[a[c]]&&(b.push(...this.store[a[c]]),delete this.store[a[c]]);return b}getSequenceCount(a){a=Fi(this,a);let b=0;for(let c=0;c<a.length;c++){let d;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b}};Ii.prototype.getSequenceCount=Ii.prototype.getSequenceCount;Ii.prototype.extractMatchingEntries=Ii.prototype.extractMatchingEntries;
Ii.prototype.smartExtractMatchingEntries=Ii.prototype.smartExtractMatchingEntries;Ii.prototype.storePayload=Ii.prototype.storePayload;function Gi(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;function Ji(a,b){if(a)return a[b.name]}
;const Ki=rf("initial_gel_batch_timeout",2E3),Li=rf("gel_queue_timeout_max_ms",6E4),Mi=Math.pow(2,16)-1;let Ni=void 0;class Oi{constructor(){this.j=this.h=this.i=0}}const Pi=new Oi,Qi=new Oi,Ri=new Oi,Si=new Oi;let Ti,Ui=!0;const Vi=t.ytLoggingTransportTokensToCttTargetIds_||{},Wi=t.ytLoggingTransportTokensToJspbCttTargetIds_||{};let Xi={};function Yi(){let a=v("yt.logging.ims");a||(a=new Ii,w("yt.logging.ims",a));return a}
function Zi(a,b){if("log_event"===a.endpoint){var c=$i(a);a:{var d=Object.keys(a.payload);for(const e of d)if(Sh[e]){d=e;break a}d=void 0}d=aj(d||"");400===d?bj(a,b):(Xi[c]=!0,d={cttAuthInfo:c,isJspb:!1,tier:d},Yi().storePayload(d,a.payload),cj(b,c,!1,d))}}
function dj(a,b,c){if("log_event"===b.endpoint){var d=$i(b,!0),e=aj(a);400===e?ej(a,b,c):(Xi[d]=!0,a={cttAuthInfo:d,isJspb:!0,tier:e},Yi().storePayload(a,b.payload.toJSON()),cj(c,d,!0,a))}}
function cj(a,b,c=!1,d){a&&(Ni=new a);a=rf("tvhtml5_logging_max_batch_ads_fork")||rf("web_logging_max_batch")||100;const e=W(),f=fj(c,d.tier),h=f.j;let g=0;d&&(g=Yi().getSequenceCount(d));const k=()=>{gj({writeThenSend:!0},T("flush_only_full_queue")?b:void 0,c,d.tier)};
1E3<=g?k():g>=a?Ti||(Ti=hj(()=>{k();Ti=void 0},0)):10<=e-h&&(ij(c,d.tier),f.j=e)}
function bj(a,b){if("log_event"===a.endpoint){var c=$i(a),d=new Map;d.set(c,[a.payload]);b&&(Ni=new b);return new z((e,f)=>{Ni&&Ni.isReady()?jj(d,Ni,e,f,{bypassNetworkless:!0},!0):e()})}}
function ej(a,b,c){if("log_event"===b.endpoint){a=$i(b,!0);var d=new Map;d.set(a,[b.payload.toJSON()]);c&&(Ni=new c);return new z(e=>{Ni&&Ni.isReady()?kj(d,Ni,e,{bypassNetworkless:!0},!0):e()})}}
function $i(a,b=!1){var c="";if(a.dangerousLogToVisitorSession)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;const d=new Fe;c.videoId?d.setVideoId(c.videoId):c.playlistId&&Xc(d,2,Ee,Ec(c.playlistId));Wi[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Vi[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function gj(a={},b,c=!1,d){new z((e,f)=>{const h=fj(c,d);lj(h.i);lj(h.h);h.h=0;Ni&&Ni.isReady()?void 0===d&&T("enable_web_tiered_gel")?mj(e,f,a,b,c,300):mj(e,f,a,b,c,d):(ij(c,d),e())})}
function mj(a,b,c={},d,e=!1,f=200){var h=Ni,g=new Map;const k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f},m={isJspb:e,cttAuthInfo:d};if(void 0!==d)e?(b=T("enable_web_tiered_gel")?Yi().smartExtractMatchingEntries({keys:[l,m],sizeLimit:1E3}):Yi().extractMatchingEntries(m),g.set(d,b),kj(g,h,a,c)):(g=T("enable_web_tiered_gel")?Yi().smartExtractMatchingEntries({keys:[l,m],sizeLimit:1E3}):Yi().extractMatchingEntries(m),k.set(d,g),jj(k,h,a,b,c));else if(e){for(const n of Object.keys(Xi))b=T("enable_web_tiered_gel")?
Yi().smartExtractMatchingEntries({keys:[l,m],sizeLimit:1E3}):Yi().extractMatchingEntries({isJspb:!0,cttAuthInfo:n}),0<b.length&&g.set(n,b),(T("web_fp_via_jspb_and_json")&&c.writeThenSend||!T("web_fp_via_jspb_and_json"))&&delete Xi[n];kj(g,h,a,c)}else{for(const n of Object.keys(Xi))d=T("enable_web_tiered_gel")?Yi().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:n,tier:f},{isJspb:!1,cttAuthInfo:n}],sizeLimit:1E3}):Yi().extractMatchingEntries({isJspb:!1,cttAuthInfo:n}),0<d.length&&k.set(n,
d),(T("web_fp_via_jspb_and_json")&&c.writeThenSend||!T("web_fp_via_jspb_and_json"))&&delete Xi[n];jj(k,h,a,b,c)}}
function ij(a=!1,b=200){const c=fj(a,b);var d=c===Si||c===Ri?5E3:Li;T("web_gel_timeout_cap")&&!c.h&&(d=hj(()=>{gj({writeThenSend:!0},void 0,a,b)},d),c.h=d);
lj(c.i);d=R("LOGGING_BATCH_TIMEOUT",rf("web_gel_debounce_ms",1E4));T("shorten_initial_gel_batch_timeout")&&Ui&&(d=Ki);d=hj(()=>{gj({writeThenSend:!0},void 0,a,b)},d);
c.i=d}
function jj(a,b,c,d,e={},f){const h=Math.round(W());let g=a.size;for(const [l,m]of a){a=l;var k=m;const n=ta({context:yh(b.config_||xh())});if(!ha(k)&&!T("throw_err_when_logevent_malformed_killswitch")){d();break}n.events=k;(k=Vi[a])&&nj(n,a,k);delete Vi[a];const u="visitorOnlyApprovedKey"===a;oj(n,h,u);pj(e);const p=D=>{T("update_log_event_config")&&Zf.h(()=>r(function*(){yield qj(D)}));
g--;g||c()};
let x=0;const C=()=>{x++;if(e.bypassNetworkless&&1===x)try{Xh(b,n,rj({writeThenSend:!0},u,p,C,f)),Ui=!1}catch(D){ff(D),d()}g--;g||c()};
try{Xh(b,n,rj(e,u,p,C,f)),Ui=!1}catch(D){ff(D),d()}}}
function kj(a,b,c,d={},e){const f=Math.round(W());let h=a.size;var g=new Map([...a]);for(const [n]of g){var k=n,l=a.get(k);g=new Ge;const u=Ch(b.config_||xh());H(g,be,1,u);l=l?sj(l):[];for(const p of l)ed(g,3,O,p);(l=Wi[k])&&tj(g,k,l);delete Wi[k];k="visitorOnlyApprovedKey"===k;uj(g,f,k);pj(d);l={startTime:W(),ticks:{},infos:{}};a:{xc=!0;try{var m=JSON.stringify(g.toJSON(),Kc);break a}finally{xc=!1}m=void 0}g=m;l.ticks.geljspc=W();T("log_jspb_serialize_latency")&&.001>Math.random()&&Lh("meta_logging_csi_event",
{timerName:"gel_jspb_serialize",sc:l});k=rj(d,k,p=>{T("update_log_event_config")&&Zf.h(()=>r(function*(){yield qj(p)}));
h--;h||c()},()=>{h--;
h||c()},e);
k.headers["Content-Type"]="application/json+protobuf";k.postBodyFormat="JSPB";k.postBody=g;Xh(b,"",k);Ui=!1}}
function pj(a){T("always_send_and_write")&&(a.writeThenSend=!1)}
function rj(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,bc:a,dangerousLogToVisitorSession:b,Ub:!!e,headers:{},postBodyFormat:"",postBody:"",compress:T("compress_gel")||T("compress_gel_lr")};vj()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(W())));return a}
function oj(a,b,c){vj()||(a.requestTimeMs=String(b));T("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=R("EVENT_ID"))&&(c=wj(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function uj(a,b,c){vj()||G(a,2,b);if(!c&&(b=R("EVENT_ID"))){c=wj();const d=new De;I(d,1,b);G(d,2,c);H(a,De,5,d)}}
function wj(){let a=R("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*Mi/2));a++;a>Mi&&(a=1);Q("BATCH_CLIENT_COUNTER",a);return a}
function nj(a,b,c){let d;if(c.videoId)d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function tj(a,b,c){let d;if(gd(c,Zc(c,Ee,1)))d=1;else if(c.getPlaylistId())d=2;else return;H(a,Fe,4,c);a=$c(a,be,1)||new be;c=$c(a,ae,3)||new ae;const e=new $d;I(e,2,b);G(e,1,d);ed(c,12,$d,e);H(a,ae,3,c)}
function sj(a){const b=[];for(let c=0;c<a.length;c++)try{b.push(new O(a[c]))}catch(d){ff(new Ne("Transport failed to deserialize "+String(a[c])))}return b}
function vj(){return T("use_request_time_ms_header")||T("lr_use_request_time_ms_header")}
function hj(a,b){return T("transport_use_scheduler")?T("logging_avoid_blocking_during_navigation")||T("lr_logging_avoid_blocking_during_navigation")?Tf(()=>{"none"===Ci().currentState?a():Ci().install({none:{callback:a}})},b):Tf(a,b):uf(a,b)}
function lj(a){T("transport_use_scheduler")?Zf.T(a):window.clearTimeout(a)}
function qj(a){return r(function*(){var b,c=null==a?void 0:null==(b=a.responseContext)?void 0:b.globalConfigGroup;b=Ji(c,Od);const d=null==c?void 0:c.hotHashData,e=Ji(c,Nd);c=null==c?void 0:c.coldHashData;const f=ki().resolve(new ci);f&&(d&&(b?yield th(f,d,b):yield th(f,d)),c&&(e?yield uh(f,c,e):yield uh(f,c)))})}
function fj(a,b=200){return a?300===b?Si:Qi:300===b?Ri:Pi}
function aj(a){if(T("enable_web_tiered_gel")){a=Sh[a||""];var b,c;if(null==ki().resolve(new ci))var d=void 0;else{var e=null!=(d=v("yt.gcf.config.hotConfigGroup"))?d:null;d=null==e?void 0:null==(b=e.loggingHotConfig)?void 0:null==(c=b.eventLoggingConfig)?void 0:c.payloadPolicies}if(b=d)for(c=0;c<b.length;c++)if(b[c].payloadNumber===a)return xj(b[c].tier);return 200}}
function xj(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;const yj=t.ytLoggingGelSequenceIdObj_||{};
function zj(a,b,c,d={}){const e={},f=Math.round(d.timestamp||W());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=$h();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!T("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,b={index:Aj(b),groupKey:b},a.sequence=b,d.endOfSequence&&delete yj[d.sequenceGroup]);(d.sendIsolatedPayload?bj:Zi)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},c)}
function Bj(a=!1){gj(void 0,void 0,a)}
function Aj(a){yj[a]=a in yj?yj[a]+1:0;return yj[a]}
;let Cj=Yh,Dj=[];function Y(a,b,c={}){let d=Cj;R("ytLoggingEventsDefaultDisabled",!1)&&Cj===Yh&&(d=null);T("web_all_payloads_via_jspb")&&!c.timestamp&&(c.lact=$h(),c.timestamp=W());zj(a,b,d,c)}
;const Ej=t.ytLoggingGelSequenceIdObj_||{};
function Fj(a,b,c,d={}){var e=Math.round(d.timestamp||W());G(b,1,e<Number.MAX_SAFE_INTEGER?e:0);e=new Ae;if(d.lact)G(e,1,isFinite(d.lact)?d.lact:-1);else if(d.timestamp)G(e,1,-1);else{var f=$h();G(e,1,isFinite(f)?f:-1)}if(d.sequenceGroup&&!T("web_gel_sequence_info_killswitch")){f=d.sequenceGroup;const h=Aj(f),g=new ze;G(g,2,h);I(g,1,f);H(e,ze,3,g);d.endOfSequence&&delete Ej[d.sequenceGroup]}H(b,Ae,33,e);(d.sendIsolatedPayload?ej:dj)(a,{endpoint:"log_event",payload:b,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function Gj(a,b,c={}){let d=!1;R("ytLoggingEventsDefaultDisabled",!1)&&(d=!0);Fj(a,b,d?null:Yh,c)}
;function Hj(a,b,c){const d=T("jspb_sparse_encoded_pivot")?new O([{}]):new O;dd(d,xe,72,Be,a);c?Fj("visualElementShown",d,c,b):Gj("visualElementShown",d,b)}
function Ij(a,b,c){const d=T("jspb_sparse_encoded_pivot")?new O([{}]):new O;dd(d,we,73,Be,a);c?Fj("visualElementHidden",d,c,b):Gj("visualElementHidden",d,b)}
function Jj(a,b,c){const d=T("jspb_sparse_encoded_pivot")?new O([{}]):new O;dd(d,ve,78,Be,a);c?Fj("visualElementGestured",d,c,b):Gj("visualElementGestured",d,b)}
function Kj(a,b,c){const d=T("jspb_sparse_encoded_pivot")?new O([{}]):new O;dd(d,ye,208,Be,a);c?Fj("visualElementStateChanged",d,c,b):Gj("visualElementStateChanged",d,b)}
function Lj(a,b,c){const d=T("jspb_sparse_encoded_pivot")?new O([{}]):new O;dd(d,se,156,Be,a);c?Fj("screenCreated",d,c,b):Gj("screenCreated",d,b)}
function Mj(a,b,c){const d=T("jspb_sparse_encoded_pivot")?new O([{}]):new O;dd(d,ue,215,Be,a);c?Fj("visualElementAttached",d,c,b):Gj("visualElementAttached",d,b)}
;var Nj=new Set,Oj=0,Pj=0,Qj=0,Rj=[];const Sj=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Tj(a){Uj(a)}
function Vj(a){Uj(a,"WARNING")}
function Uj(a,b="ERROR"){var c={};c.name=R("INNERTUBE_CONTEXT_CLIENT_NAME",1);c.version=R("INNERTUBE_CONTEXT_CLIENT_VERSION");Wj(a,c,b)}
function Wj(a,b,c="ERROR"){if(a){a.hasOwnProperty("level")&&a.level&&(c=a.level);if(T("console_log_js_exceptions")){var d=[];d.push(`Name: ${a.name}`);d.push(`Message: ${a.message}`);a.hasOwnProperty("params")&&d.push(`Error Params: ${JSON.stringify(a.params)}`);a.hasOwnProperty("args")&&d.push(`Error args: ${JSON.stringify(a.args)}`);d.push(`File name: ${a.fileName}`);d.push(`Stacktrace: ${a.stack}`);window.console.log(d.join("\n"),a)}if(!(5<=Oj)){d=Rj;var e=Pa(a);const n=e.message||"Unknown Error",
u=e.name||"UnknownError";var f=e.stack||a.i||"Not available";if(f.startsWith(`${u}: ${n}`)){var h=f.split("\n");h.shift();f=h.join("\n")}h=e.lineNumber||"Not available";e=e.fileName||"Not available";let p=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var g=0;g<a.args.length&&!(p=Lf(a.args[g],`params.${g}`,b,p),500<=p);g++);else if(a.hasOwnProperty("params")&&a.params){const x=a.params;if("object"===typeof a.params)for(g in x){if(!x[g])continue;const C=`params.${g}`,D=Nf(x[g]);b[C]=D;p+=
C.length+D.length;if(500<p)break}else b.params=Nf(x)}if(d.length)for(g=0;g<d.length&&!(p=Lf(d[g],`params.context.${g}`,b,p),500<=p);g++);navigator.vendor&&!b.hasOwnProperty("vendor")&&(b["device.vendor"]=navigator.vendor);b={message:n,name:u,lineNumber:h,fileName:e,stack:f,params:b,sampleWeight:1};d=Number(a.columnNumber);isNaN(d)||(b.lineNumber=`${b.lineNumber}:${d}`);if("IGNORED"===a.level)var k=0;else a:{a=Ef();for(k of a.F)if(b.message&&b.message.match(k.Oa)){k=k.weight;break a}for(var l of a.D)if(l.callback(b)){k=
l.weight;break a}k=1}b.sampleWeight=k;k=b;for(var m of Bf)if(m.V[k.name]){l=m.V[k.name];for(const x of l)if(l=k.message.match(x.u)){k.params["params.error.original"]=l[0];a=x.groups;b={};for(d=0;d<a.length;d++)b[a[d]]=l[d+1],k.params[`params.error.${a[d]}`]=l[d+1];k.message=m.ba(b);break}}k.params||(k.params={});m=Ef();k.params["params.errorServiceSignature"]=`msg=${m.F.length}&cb=${m.D.length}`;k.params["params.serviceWorker"]="true";t.document&&t.document.querySelectorAll&&(k.params["params.fscripts"]=
String(document.querySelectorAll("script:not([nonce])").length));xa("sample").constructor!==wa&&(k.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(k);0===k.sampleWeight||Nj.has(k.message)||Xj(k,c)}}}
function Xj(a,b="ERROR"){if("ERROR"===b){If.da("handleError",a);if(T("record_app_crashed_web")&&0===Qj&&1===a.sampleWeight)if(Qj++,T("errors_via_jspb")){var c=new le;c=G(c,1,1);if(!T("report_client_error_with_app_crash_ks")){var d=new ke;var e=new je;var f=new ie;var h=new he;h=I(h,1,a.message);f=H(f,he,3,h);e=H(e,ie,5,f);d=H(d,je,9,e);H(c,ke,4,d)}d=T("jspb_sparse_encoded_pivot")?new O([{}]):new O;dd(d,le,20,Be,c);Gj("appCrashed",d)}else c={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},T("report_client_error_with_app_crash_ks")||
(c.systemHealth={crashData:{clientError:{logMessage:{message:a.message}}}}),Y("appCrashed",c);Pj++}else"WARNING"===b&&If.da("handleWarning",a);a:{if(T("errors_via_jspb")){if(Yj())var g=void 0;else{c=new ee;I(c,1,a.stack);a.fileName&&I(c,4,a.fileName);var k=a.lineNumber&&a.lineNumber.split?a.lineNumber.split(":"):[];0!==k.length&&(1!==k.length||isNaN(Number(k[0]))?2!==k.length||isNaN(Number(k[0]))||isNaN(Number(k[1]))||(G(c,2,Number(k[0])),G(c,3,Number(k[1]))):G(c,2,Number(k[0])));k=new he;I(k,1,a.message);
I(k,3,a.name);G(k,6,a.sampleWeight);"ERROR"===b?G(k,2,2):"WARNING"===b?G(k,2,1):G(k,2,0);var l=new fe;G(l,1,!0);dd(l,ee,3,ge,c);c=new de;I(c,3,window.location.href);d=R("FEXP_EXPERIMENTS",[]);for(f=0;f<d.length;f++){e=d[f];h=c.o;const n=F(h);Bc(n);Wc(h,n,5,2,!1).push(e);n&1024&&E(h,n&-1025)}d=bf();if(!cf()&&d)for(var m of Object.keys(d))e=new ce,I(e,1,m),I(e,2,String(d[m])),ed(c,4,ce,e);if(m=a.params)for(g of Object.keys(m))d=new ce,I(d,1,`client.${g}`),I(d,2,String(m[g])),ed(c,4,ce,d);m=R("SERVER_NAME");
g=R("SERVER_VERSION");m&&g&&(d=new ce,I(d,1,"server.name"),I(d,2,m),ed(c,4,ce,d),m=new ce,I(m,1,"server.version"),I(m,2,g),ed(c,4,ce,m));g=new ie;H(g,de,1,c);H(g,fe,2,l);H(g,he,3,k)}if(!g)break a;m=T("jspb_sparse_encoded_pivot")?new O([{}]):new O;dd(m,ie,163,Be,g);Gj("clientError",m)}else{g={};if(Yj())g=void 0;else{c={stackTrace:a.stack};a.fileName&&(c.filename=a.fileName);m=a.lineNumber&&a.lineNumber.split?a.lineNumber.split(":"):[];0!==m.length&&(1!==m.length||isNaN(Number(m[0]))?2!==m.length||
isNaN(Number(m[0]))||isNaN(Number(m[1]))||(c.lineNumber=Number(m[0]),c.columnNumber=Number(m[1])):c.lineNumber=Number(m[0]));m={level:"ERROR_LEVEL_UNKNOWN",message:a.message,errorClassName:a.name,sampleWeight:a.sampleWeight};"ERROR"===b?m.level="ERROR_LEVEL_ERROR":"WARNING"===b&&(m.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};g.pageUrl=window.location.href;g.kvPairs=[];R("FEXP_EXPERIMENTS")&&(g.experimentIds=R("FEXP_EXPERIMENTS"));d=bf();if(!cf()&&d)for(l of Object.keys(d))g.kvPairs.push({key:l,
value:String(d[l])});if(l=a.params)for(k of Object.keys(l))g.kvPairs.push({key:`client.${k}`,value:String(l[k])});k=R("SERVER_NAME");l=R("SERVER_VERSION");k&&l&&(g.kvPairs.push({key:"server.name",value:k}),g.kvPairs.push({key:"server.version",value:l}));g={errorMetadata:g,stackTrace:c,logMessage:m}}if(!g)break a;Y("clientError",g)}if("ERROR"===b||T("errors_flush_gel_always_killswitch"))b:{if(T("web_fp_via_jspb")){b=Dj;Dj=[];if(b)for(const n of b)zj(n.N,n.payload,Cj,n.options);Bj(!0);if(!T("web_fp_via_jspb_and_json"))break b}Bj()}}try{Nj.add(a.message)}catch(n){}Oj++}
function Yj(){for(const a of Sj){const b=Ea();if(b&&0<=b.toLowerCase().indexOf(a.toLowerCase()))return!0}return!1}
function Zj(a,...b){a.args||(a.args=[]);a.args.push(...b)}
;function ak(a){return r(function*(){var b=yield t.fetch(a.i);if(200!==b.status)return Promise.reject("Server error when retrieving AmbientData");b=yield b.text();if(!b.startsWith(")]}'\n"))return Promise.reject("Incorrect JSPB formatting");a:{b=JSON.parse(b.substring(5));for(let c=0;c<b.length;c++)if("yt.sw.adr"===b[c][0]){b=new Xe(b[c]);break a}b=null}return b?b:Promise.reject("AmbientData missing from response")})}
function bk(a=!1){const b=ck.h;return r(function*(){if(a||!b.h)b.h=ak(b).then(b.j).catch(c=>{delete b.h;Uj(c)});
return b.h})}
var ck=class{constructor(){this.i=dk("/sw.js_data")}j(a){const b=$c(a,We,2);if(b){var c=J(b,5);c&&(t.__SAPISID=c);null!=gd(b,10)?Q("EOM_VISITOR_DATA",J(b,10)):null!=gd(b,7)&&Q("VISITOR_DATA",J(b,7));null!=fd(b)&&(c=fd(b),Q("SESSION_INDEX",String(null!=c?c:0)));null!=gd(b,8)&&Q("DELEGATED_SESSION_ID",J(b,8));null!=gd(b,11)&&Q("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT",J(b,11))}return a}};function ek(a,b){b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds&&setTimeout(()=>{delete a.h[b.encryptedTokenJarContents]},1E3*Number(b.expirationSeconds)))}
var fk=class{constructor(){this.h={}}handleResponse(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");let c,d;b=(null==(c=b.H.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];let e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){for(const f of b)delete this.h[f.encryptedTokenJarContents];ek(this,a)}}};let gk=Date.now().toString();function hk(){const a=Array(16);for(var b=0;16>b;b++){var c=Date.now();for(let d=0;d<c%23;d++)a[b]=Math.random();a[b]=Math.floor(256*Math.random())}if(gk)for(b=1,c=0;c<gk.length;c++)a[b%16]=a[b%16]^a[(b-1)%16]/4^gk.charCodeAt(c),b++;return a}
function ik(){if(window.crypto&&window.crypto.getRandomValues)try{const a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(let c=0;c<a.length;c++)a[c]=b[c];return a}catch(a){}return hk()}
;let jk=t.ytLoggingDocDocumentNonce_;if(!jk){const a=ik(),b=[];for(let c=0;c<a.length;c++)b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c]&63));jk=b.join("")}var kk=jk;var lk={fb:0,bb:1,eb:2,Hb:3,gb:4,Qb:5,Ib:6,Ob:7,Mb:8,Nb:9,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS",9:"RICH_GRID_WATCH"};let mk=1;function nk(a){return new ok({trackingParams:a})}
function pk(a){const b=mk++;return new ok({veType:a,veCounter:b,elementIndex:void 0,dataElement:void 0,youtubeData:void 0,jspbYoutubeData:void 0,loggingDirectives:void 0})}
var ok=class{constructor(a){this.h=a}getAsJson(){const a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a}getAsJspb(){const a=new N;
if(void 0!==this.h.trackingParams){var b=this.h.trackingParams;if(null!=b)if("string"===typeof b)b=b?new Vb(b,Rb):Ub();else if(b.constructor!==Vb)if(Pb(b))b=b.length?new Vb(new Uint8Array(b),Rb):Ub();else throw Error();G(a,1,b)}else void 0!==this.h.veType&&G(a,2,this.h.veType),void 0!==this.h.veCounter&&G(a,6,this.h.veCounter),void 0!==this.h.elementIndex&&G(a,3,this.h.elementIndex),this.h.isCounterfactual&&G(a,5,!0);void 0!==this.h.dataElement&&(b=this.h.dataElement.getAsJspb(),H(a,N,7,b));void 0!==
this.h.youtubeData&&H(a,Sd,8,this.h.jspbYoutubeData);return a}toString(){return JSON.stringify(this.getAsJson())}isClientVe(){return!this.h.trackingParams&&!!this.h.veType}getLoggingDirectives(){return this.h.loggingDirectives}};function qk(a=0){return 0===a?"client-screen-nonce":`${"client-screen-nonce"}.${a}`}
function rk(a=0){return T("new_csn_storage_design")?R("client-screen-nonce-store",{})[a]:R(qk(a))}
function sk(a,b=0){if(T("new_csn_storage_design")){let c=R("client-screen-nonce-store");c||(c={},Q("client-screen-nonce-store",c));c[b]=a}Q(qk(b),a)}
function tk(a=0){return 0===a?"ROOT_VE_TYPE":`${"ROOT_VE_TYPE"}.${a}`}
function uk(a=0){return R(tk(a))}
function vk(a=0){return(a=uk(a))?new ok({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null}
function wk(){let a=R("csn-to-ctt-auth-info");a||(a={},Q("csn-to-ctt-auth-info",a));return a}
function xk(){return Object.values(R("client-screen-nonce-store",{})).filter(a=>void 0!==a)}
function yk(a=0){a=rk(a);if(!a&&!R("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
function zk(a){for(const b of Object.values(lk))if(yk(b)===a)return!0;return!1}
function Ak(a,b,c){const d=wk();(c=yk(c))&&delete d[c];b&&(d[a]=b)}
function Bk(a){return wk()[a]}
function Ck(a,b,c=0,d){if(a!==rk(c)||b!==R(tk(c)))if(Ak(a,d,c),sk(a,c),Q(tk(c),b),b=()=>{setTimeout(()=>{if(a)if(T("web_time_via_jspb")){const e=new me;I(e,1,kk);I(e,2,a);const f=T("jspb_sparse_encoded_pivot")?new O([{}]):new O;dd(f,me,111,Be,e);Gj("foregroundHeartbeatScreenAssociated",f)}else Y("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:kk,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()}
;function Dk(){var a=R("INNERTUBE_CONTEXT");if(!a)return Uj(Error("Error: No InnerTubeContext shell provided in ytconfig.")),{};a=ta(a);T("web_no_tracking_params_in_shell_killswitch")||delete a.clickTracking;a.client||(a.client={});var b=a.client;b.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var c=sf();c?b.experimentsToken=c:delete b.experimentsToken;fk.h||(fk.h=new fk);b=fk.h.h;c=[];let d=0;for(var e in b)c[d++]=b[e];a.request=Object.assign({},a.request,{consistencyTokenJars:c});
a.user=Object.assign({},a.user);if(e=R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))a.user.serializedDelegationContext=e;return a}
;function Ek(a){var b=a;if(a=R("INNERTUBE_HOST_OVERRIDE")){a=String(a);var c=String,d=b.match(Ka);b=d[5];var e=d[6];d=d[7];var f="";b&&(f+=b);e&&(f+="?"+e);d&&(f+="#"+d);b=a+c(f)}return b}
;var Fk=class{};const Gk={GET_DATASYNC_IDS:function(a){return()=>new a}(class extends Fk{})};function Hk(a=!0){a=a?ik():hk();const b=[];for(let c=0;c<a.length;c++)b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c]&63));return b.join("")}
;w("ytLoggingLatencyUsageStats_",t.ytLoggingLatencyUsageStats_||{});const Ik=window;class Jk{constructor(){this.timing={};this.clearResourceTimings=()=>{};
this.webkitClearResourceTimings=()=>{};
this.mozClearResourceTimings=()=>{};
this.msClearResourceTimings=()=>{};
this.oClearResourceTimings=()=>{}}}
var Kk=Ik.performance||Ik.mozPerformance||Ik.msPerformance||Ik.webkitPerformance||new Jk;ka(Kk.clearResourceTimings||Kk.webkitClearResourceTimings||Kk.mozClearResourceTimings||Kk.msClearResourceTimings||Kk.oClearResourceTimings||na,Kk);const Lk=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse"];function Mk(a){var b={Wb:{}},c=Of();if(void 0!==fi.h){const d=fi.h;a=[b!==d.m,a!==d.l,c!==d.j,!1,!1,!1,void 0!==d.i];if(a.some(e=>e))throw new Ne("InnerTubeTransportService is already initialized",a);
}else fi.h=new fi(b,a,c)}
function Nk(a,b){return r(function*(){var c,d={sessionIndex:null==a?void 0:null==(c=a.ka)?void 0:c.sessionIndex};c=yield kb(Qf(0,d));return Promise.resolve(Object.assign({},Ok(b),c))})}
function Pk(a,b,c){return r(function*(){var d;if(null==b?0:null==(d=b.H)?0:d.context){d=b.H.context;for(var e of[])yield e.fc(d)}var f;if(null==(f=a.i)?0:f.nc(b.input,b.H))return yield a.i.ac(b.input,b.H);var h;if((f=null==(h=b.config)?void 0:h.jc)&&a.h.has(f)&&T("web_memoize_inflight_requests"))var g=a.h.get(f);else{h=JSON.stringify(b.H);let n;e=null!=(n=null==(g=b.P)?void 0:g.headers)?n:{};b.P=Object.assign({},b.P,{headers:Object.assign({},e,c)});g=Object.assign({},b.P);"POST"===b.P.method&&(g=
Object.assign({},g,{body:h}));g=a.l.fetch(b.input,g,b.config);f&&a.h.set(f,g)}g=yield g;var k;let l;if(g&&"error"in g&&(null==(k=g)?0:null==(l=k.error)?0:l.details)){k=g.error.details;for(const n of k)(k=n["@type"])&&-1<Lk.indexOf(k)&&(delete n["@type"],g=n)}f&&a.h.has(f)&&a.h.delete(f);let m;!g&&(null==(m=a.i)?0:m.Vb(b.input,b.H))&&(g=yield a.i.Zb(b.input,b.H));return g||void 0})}
function Qk(a,b,c){var d={ka:{identity:Rf}};b.context||(b.context=Dk());return new z(e=>r(function*(){var f=Ek(c);f=pf(f)?"same-origin":"cors";if(a.j.Ua){var h,g=null==d?void 0:null==(h=d.ka)?void 0:h.sessionIndex;h=Qf(0,{sessionIndex:g});f=Object.assign({},Ok(f),h)}else f=yield Nk(d,f);h=Ek(c);g={};R("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT")&&(null==f?0:f.Authorization)||(g.key=R("INNERTUBE_API_KEY"));T("json_condensed_response")&&(g.prettyPrint="false");h=of(h,g||{},!1);g={method:"POST",
mode:pf(h)?"same-origin":"cors",credentials:pf(h)?"same-origin":"include"};var k={};const l={};for(const m of Object.keys(k))k[m]&&(l[m]=k[m]);0<Object.keys(l).length&&(g.headers=l);e(Pk(a,{input:h,P:g,H:b,config:d},f))}))}
function Ok(a){const b={"Content-Type":"application/json"};R("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=R("EOM_VISITOR_DATA"):R("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=R("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=R("LOGGED_IN",!1);"cors"!==a&&((a=R("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=R("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=R("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a),(a=R("DOMAIN_ADMIN_STATE"))&&
(b["X-Youtube-Domain-Admin-State"]=a));return b}
var fi=class{constructor(a,b,c){this.m=a;this.l=b;this.j=c;this.i=void 0;this.h=new Map;a.ea||(a.ea={});a.ea=Object.assign({},Gk,a.ea)}};var ei=new bi;let Rk;function Sk(){if(!Rk){const a=ki();Mk({fetch:(b,c)=>kb(fetch(new Request(b,c)))});
di(a);Rk=a.resolve(ei)}return Rk}
;function Tk(a){return r(function*(){yield Uk();Vj(a)})}
function Vk(a){return r(function*(){yield Uk();Uj(a)})}
function Wk(a){r(function*(){var b=yield ch();b?yield Wh(a,b):(yield bk(),b={timestamp:a.timestamp},b=a.appShellAssetLoadReport?{N:"appShellAssetLoadReport",payload:a.appShellAssetLoadReport,options:b}:a.clientError?{N:"clientError",payload:a.clientError,options:b}:void 0,b&&Y(b.N,b.payload))})}
function Uk(){return r(function*(){try{yield bk()}catch(a){}})}
;class Gh extends Eh{constructor(a){super(arguments);this.csn=a}}const Oh=new Fh,Xk=[];let Zk=Yk,$k=0;const al=new Map,bl=new Map,cl=new Map;function dl(a,b,c,d,e,f,h,g){const k=Zk(),l=new ok({veType:b,youtubeData:f,jspbYoutubeData:void 0});f=el({},k);e&&(f.cttAuthInfo=e);var m=()=>{Vj(new Ne("newScreen() parent element does not have a VE - rootVe",b))};
if(T("il_via_jspb")){e=re((new se).h(k),l.getAsJspb());c&&c.visualElement?(m=new qe,c.clientScreenNonce&&I(m,2,c.clientScreenNonce),pe(m,c.visualElement.getAsJspb()),h&&G(m,4,Ce[h]),H(e,qe,5,m)):c&&m();d&&I(e,3,d);if(T("expectation_logging")&&g&&g.screenCreatedLoggingExpectations){c=new Rd;g=g.screenCreatedLoggingExpectations.expectedParentScreens||[];for(var n of g)n.screenVeType&&(g=Pd(new Qd,n.screenVeType),ed(c,1,Qd,g));H(e,Rd,7,c)}Lj(e,f,a)}else n={csn:k,pageVe:l.getAsJson()},T("expectation_logging")&&
g&&g.screenCreatedLoggingExpectations&&(n.screenCreatedLoggingExpectations=g.screenCreatedLoggingExpectations),c&&c.visualElement?(n.implicitGesture={parentCsn:c.clientScreenNonce,gesturedVe:c.visualElement.getAsJson()},h&&(n.implicitGesture.gestureType=h)):c&&m(),d&&(n.cloneCsn=d),a?zj("screenCreated",n,a,f):Y("screenCreated",n,f);Lh(Oh,new Gh(k));al.clear();bl.clear();cl.clear();return k}
function fl(a,b,c,d,e=!1){gl(a,b,c,[d],e)}
function gl(a,b,c,d,e=!1){const f=el({cttAuthInfo:Bk(b)||void 0},b);for(const g of d){var h=g.getAsJson();(sa(h)||!h.trackingParams&&!h.veType)&&Vj(Error("Child VE logged with no data"));if(T("no_client_ve_attach_unless_shown")){const k=hl(g,b);if(h.veType&&!bl.has(k)&&!cl.has(k)&&!e){al.set(k,[a,b,c,g]);return}h=hl(c,b);al.has(h)?il(c,b):cl.set(h,!0)}}d=d.filter(g=>{g.csn!==b?(g.csn=b,g=!0):g=!1;return g});
if(T("il_via_jspb")){const g=te((new ue).h(b),c.getAsJspb());pa(d,k=>{k=k.getAsJspb();ed(g,3,N,k)});
"UNDEFINED_CSN"===b?Z("visualElementAttached",f,void 0,g):Mj(g,f,a)}else c={csn:b,parentVe:c.getAsJson(),childVes:pa(d,g=>g.getAsJson())},"UNDEFINED_CSN"===b?Z("visualElementAttached",f,c):a?zj("visualElementAttached",c,a,f):Y("visualElementAttached",c,f)}
function jl(a,b,c,d,e,f){kl(a,b,c,e,f)}
function kl(a,b,c,d,e){ll(c,b);const f=el({cttAuthInfo:Bk(b)||void 0},b);T("il_via_jspb")?(d=(new xe).h(b),c=c.getAsJspb(),c=H(d,N,2,c),c=G(c,4,1),e&&H(c,oe,3,e),"UNDEFINED_CSN"===b?Z("visualElementShown",f,void 0,c):Hj(c,f,a)):(e={csn:b,ve:c.getAsJson(),eventType:1},d&&(e.clientData=d),"UNDEFINED_CSN"===b?Z("visualElementShown",f,e):a?zj("visualElementShown",e,a,f):Y("visualElementShown",e,f))}
function ml(a,b,c,d=!1){var e=d?16:8;const f=el({cttAuthInfo:Bk(b)||void 0,endOfSequence:d},b);T("il_via_jspb")?(e=(new we).h(b),c=c.getAsJspb(),c=H(e,N,2,c),G(c,4,d?16:8),"UNDEFINED_CSN"===b?Z("visualElementHidden",f,void 0,c):Ij(c,f,a)):(d={csn:b,ve:c.getAsJson(),eventType:e},"UNDEFINED_CSN"===b?Z("visualElementHidden",f,d):a?zj("visualElementHidden",d,a,f):Y("visualElementHidden",d,f))}
function nl(a,b,c,d){var e=void 0;ll(c,b);e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";const f=el({cttAuthInfo:Bk(b)||void 0},b);T("il_via_jspb")?(d=(new ve).h(b),c=c.getAsJspb(),c=H(d,N,2,c),G(c,4,Ce[e]),"UNDEFINED_CSN"===b?Z("visualElementGestured",f,void 0,c):Jj(c,f,a)):(e={csn:b,ve:c.getAsJson(),gestureType:e},d&&(e.clientData=d),"UNDEFINED_CSN"===b?Z("visualElementGestured",f,e):a?zj("visualElementGestured",e,a,f):Y("visualElementGestured",e,f))}
function Yk(){if(T("enable_web_96_bit_csn"))var a=Hk();else if(T("enable_web_96_bit_csn_no_crypto"))a=Hk(!1);else{a=Math.random()+"";for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=Eb(b,3)}return a}
function Z(a,b,c,d){Xk.push({N:a,payload:c,J:d,options:b});$k||($k=Ph())}
function Qh(a){if(Xk){for(const b of Xk)if(T("il_via_jspb")&&b.J)switch(b.J.h(a.csn),b.N){case "screenCreated":Lj(b.J,b.options);break;case "visualElementAttached":Mj(b.J,b.options);break;case "visualElementShown":Hj(b.J,b.options);break;case "visualElementHidden":Ij(b.J,b.options);break;case "visualElementGestured":Jj(b.J,b.options);break;case "visualElementStateChanged":Kj(b.J,b.options);break;default:Vj(new Ne("flushQueue unable to map payloadName to JSPB setter"))}else b.payload&&(b.payload.csn=
a.csn,Y(b.N,b.payload,b.options));Xk.length=0}$k=0}
function hl(a,b){return`${a.getAsJson().veType}${a.getAsJson().veCounter}${b}`}
function ll(a,b){if(T("no_client_ve_attach_unless_shown")){var c=hl(a,b);bl.set(c,!0);il(a,b)}}
function il(a,b){a=hl(a,b);al.has(a)&&(b=al.get(a)||[],fl(b[0],b[1],b[2],b[3],!0),al.delete(a))}
function el(a,b){T("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function ol(){pl.h||(pl.h=new pl);return pl.h}
function ql(a,b,c){const d=yk(c);return null===a.csn||d===a.csn||c?d:(a=new Ne("VisibilityLogger called before newScreen",{caller:b.tagName,previous_csn:a.csn,current_csn:d}),Vj(a),null)}
function rl(a){return Math.floor(Number(a.data&&a.data.loggingDirectives&&a.data.loggingDirectives.visibility&&a.data.loggingDirectives.visibility.types||""))||1}
var pl=class{constructor(){this.m=new Set;this.l=new Set;this.h=new Map;this.client=void 0;this.csn=null}j(a){this.client=a}s(){this.clear();this.csn=yk()}clear(){this.m.clear();this.l.clear();this.h.clear();this.csn=null}G(a,b,c){b=this.i(a);var d=a.visualElement?a.visualElement:b,e=this.m.has(d),f=this.h.get(d);this.m.add(d);this.h.set(d,!0);a.impressionLog&&!e&&a.impressionLog();if(b||a.visualElement)if(c=ql(this,a,c)){var h=!(!a.data||!a.data.loggingDirectives);if(rl(a)||h){d=a.visualElement?
a.visualElement:nk(b);var g=a.interactionLoggingClientData;b=a.interactionLoggingClientDataJspbType;h||e?rl(a)&4?f||(a=this.client,ll(d,c),e=el({cttAuthInfo:Bk(c)||void 0},c),T("il_via_jspb")?(f=(new xe).h(c),d=d.getAsJspb(),f=H(f,N,2,d),f=G(f,4,4),b&&H(f,oe,3,b),"UNDEFINED_CSN"===c?Z("visualElementShown",e,void 0,f):Hj(f,e,a)):(b={csn:c,ve:d.getAsJson(),eventType:4},g&&(b.clientData=g),"UNDEFINED_CSN"===c?Z("visualElementShown",e,b):a?zj("visualElementShown",b,a,e):Y("visualElementShown",b,e))):
rl(a)&1&&!e&&kl(this.client,c,d,g,b):kl(this.client,c,d,g,b)}}}A(a,b,c){var d=this.i(a),e=a.visualElement?a.visualElement:d;b=this.l.has(e);const f=this.h.get(e);this.l.add(e);this.h.set(e,!1);if(!1===f)return!0;if(!d&&!a.visualElement)return!1;c=ql(this,a,c);if(!c||!rl(a)&&a.data&&a.data.loggingDirectives)return!1;d=a.visualElement?a.visualElement:nk(d);rl(a)&8?ml(this.client,c,d):rl(a)&2&&!b&&(a=this.client,b=el({cttAuthInfo:Bk(c)||void 0},c),T("il_via_jspb")?(e=(new we).h(c),d=d.getAsJspb(),d=
H(e,N,2,d),d=G(d,4,2),"UNDEFINED_CSN"===c?Z("visualElementHidden",b,void 0,d):Ij(d,b,a)):(d={csn:c,ve:d.getAsJson(),eventType:2},"UNDEFINED_CSN"===c?Z("visualElementHidden",b,d):a?zj("visualElementHidden",d,a,b):Y("visualElementHidden",d,b)));return!0}i(a){let b,c,d;return T("il_use_view_model_logging_context")&&(null==(b=a.data)?0:null==(c=b.context)?0:null==(d=c.loggingContext)?0:d.loggingDirectives)?a.data.context.loggingContext.loggingDirectives.trackingParams||"":a.data&&a.data.loggingDirectives?
a.data.loggingDirectives.trackingParams||"":a.veContainer&&a.veContainer.trackingParams?a.veContainer.trackingParams:a.data&&a.data.trackingParams||""}};function sl(){tl.h||(tl.h=new tl)}
function ul(a){sl();S(ol().G).bind(ol())(a,void 0,8)}
function vl(a){sl();S(ol().A).bind(ol())(a,void 0,8)}
var tl=class{j(a){S(ol().j).bind(ol())(a)}clear(){S(ol().clear).bind(ol())()}};function wl(){xl.h||(xl.h=new xl);return xl.h}
function yl(a,b,c={}){a.i.add(c.layer||0);a.m=()=>{zl(a,b,c);const d=vk(c.layer);if(d){for(const e of a.G)Al(a,e[0],e[1]||d,c.layer);for(const e of a.ga)Bl(a,e[0],e[1])}};
yk(c.layer)||a.m();if(c.ma)for(const d of c.ma)Cl(a,d,c.layer);else Uj(Error("Delayed screen needs a data promise."))}
function zl(a,b,c={}){var d=void 0;c.layer||(c.layer=0);d=void 0!==c.Pa?c.Pa:c.layer;const e=yk(d);d=vk(d);let f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));let h;const g=R("EVENT_ID");"UNDEFINED_CSN"===e&&g&&(h={servletData:{serializedServletEventId:g}});T("combine_ve_grafts")&&e&&Dl(a,e);let k;try{k=dl(a.client,b,f,c.la,c.cttAuthInfo,h,c.Yb,c.loggingExpectations)}catch(n){Zj(n,{kc:b,rootVe:d,ec:void 0,
Xb:e,dc:f,la:c.la});Uj(n);return}Ck(k,b,c.layer,c.cttAuthInfo);e&&"UNDEFINED_CSN"!==e&&d&&!zk(e)&&ml(a.client,e,d,!0);a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=k||"");sl();S(ol().s).bind(ol())();const l=vk(c.layer);e&&"UNDEFINED_CSN"!==e&&l&&(T("web_mark_root_visible")||T("music_web_mark_root_visible"))&&S(jl)(void 0,k,l,void 0,void 0,void 0);a.i.delete(c.layer||0);a.m=void 0;let m;null==(m=a.ya.get(c.layer))||m.forEach((n,u)=>{n?Al(a,u,n,c.layer):l&&Al(a,u,l,c.layer)});
El(a)}
function Fl(a){var b=28631,c={layer:8};S(()=>{[28631].includes(b)||(Vj(new Ne("createClientScreen() called with a non-page VE",b)),b=83769);c.isHistoryNavigation||a.h.push({rootVe:b,key:c.key||""});a.G=[];a.ga=[];c.ma?yl(a,b,c):zl(a,b,c)})()}
function Cl(a,b,c=0){S(()=>{b.then(d=>{a.i.has(c)&&a.m&&a.m();const e=yk(c),f=vk(c);if(e&&f){var h;(null==d?0:null==(h=d.response)?0:h.trackingParams)&&fl(a.client,e,f,nk(d.response.trackingParams));var g;(null==d?0:null==(g=d.playerResponse)?0:g.trackingParams)&&fl(a.client,e,f,nk(d.playerResponse.trackingParams))}})})()}
function Al(a,b,c,d=0){S(()=>{if(a.i.has(d))return a.G.push([b,c]),!0;const e=yk(d),f=c||vk(d);if(e&&f){if(T("combine_ve_grafts")){const h=a.l.get(f.toString());h?h.push(b):(a.A.set(f.toString(),f),a.l.set(f.toString(),[b]));a.ia||(a.ia=Tf(()=>{Dl(a,e)},1200))}else fl(a.client,e,f,b);
return!0}return!1})()}
function Gl(a,b){return S(()=>{const c=nk(b);Al(a,c,void 0,8);return c})()}
function Dl(a,b){if(void 0===b){const c=xk();for(let d=0;d<c.length;d++)void 0!==c[d]&&Dl(a,c[d])}else a.l.forEach((c,d)=>{(d=a.A.get(d))&&gl(a.client,b,d,c)}),a.l.clear(),a.A.clear(),a.ia=void 0}
function Hl(a,b,c=0){(c=yk(c))&&nl(a.client,c,b)}
function Il(a,b,c,d=0){if(!b)return!1;d=yk(d);if(!d)return!1;nl(a.client,d,nk(b),c);return!0}
function Jl(a,b){const c=b.getScreenLayer&&b.getScreenLayer();b.visualElement?Hl(a,b.visualElement,c):(sl(),b=S(ol().i).bind(ol())(b),Il(a,b,void 0,c))}
function Bl(a,b,c,d=0){const e=yk(d);d=b||vk(d);e&&d&&(a=a.client,b=el({cttAuthInfo:Bk(e)||void 0},e),T("il_via_jspb")?(c=new ye,c.h(e),d=d.getAsJspb(),H(c,N,2,d),"UNDEFINED_CSN"===e?Z("visualElementStateChanged",b,void 0,c):Kj(c,b,a)):(c={csn:e,ve:d.getAsJson(),clientData:c},"UNDEFINED_CSN"===e?Z("visualElementStateChanged",b,c):a?zj("visualElementStateChanged",c,a,b):Y("visualElementStateChanged",c,b)))}
function El(a){for(var b=0;b<a.s.length;b++){var c=a.s[b];try{c()}catch(d){Uj(d)}}a.s.length=0;for(b=0;b<a.ha.length;b++){c=a.ha[b];try{c()}catch(d){Uj(d)}}}
var xl=class{constructor(){this.G=[];this.ga=[];this.h=[];this.s=[];this.ha=[];this.l=new Map;this.A=new Map;this.i=new Set;this.ya=new Map}j(a){this.client=a}clickCommand(a,b,c=0){return Il(this,a.clickTrackingParams,b,c)}visualElementStateChanged(a,b,c=0){0===c&&this.i.has(c)?this.ga.push([a,b]):Bl(this,a,b,c)}};const Kl={granted:"GRANTED",denied:"DENIED",unknown:"UNKNOWN"},Ll=RegExp("^(?:[a-z]+:)?//","i");function Ml(a){var b=a.data;a=b.type;b=b.data;"notifications_register"===a?(P("IDToken",b),Nl()):"notifications_check_registration"===a&&Ol(b)}
function Pl(){return self.clients.matchAll({type:"window",includeUncontrolled:!0}).then(a=>{if(a)for(const b of a)b.postMessage({type:"update_unseen_notifications_count_signal"})})}
function Ql(a){const b=[];a.forEach(c=>{b.push({key:c.key,value:c.value})});
return b}
function Rl(a){return r(function*(){const b=Ql(a.payload.chrome.extraUrlParams),c={recipientId:a.recipientId,endpoint:a.payload.chrome.endpoint,extraUrlParams:b},d=Ve(Ie);return Sl().then(e=>Qk(e,c,d).then(f=>{f.json().then(h=>h&&h.endpointUrl?Tl(a,h.endpointUrl):Promise.resolve()).catch(h=>{Vk(h);
Promise.reject(h)})}))})}
function Ul(a,b){var c=yk(8);if(null==c||!b)return a;a=Ll.test(a)?new URL(a):new URL(a,self.registration.scope);a.searchParams.set("parentCsn",c);a.searchParams.set("parentTrackingParams",b);return a.toString()}
function Tl(a,b){a.deviceId&&P("DeviceId",a.deviceId);a.timestampSec&&P("TimestampLowerBound",a.timestampSec);const c=a.payload.chrome,d=wl();Fl(d);var e;const f=null==(e=c.postedEndpoint)?void 0:e.clickTrackingParams;e=c.title;const h={body:c.body,icon:c.iconUrl,data:{nav:Ul(b,f),id:c.notificationId,attributionTag:c.attributionTag,clickEndpoint:c.clickEndpoint,postedEndpoint:c.postedEndpoint,clickTrackingParams:f,isDismissed:!0},tag:c.notificationTag||c.title+c.body+c.iconUrl,requireInteraction:!0};
return self.registration.showNotification(e,h).then(()=>{var g;(null==(g=h.data)?0:g.postedEndpoint)&&Vl(h.data.postedEndpoint);let k;if(null==(k=h.data)?0:k.clickTrackingParams)g={screenLayer:8,visualElement:Gl(d,h.data.clickTrackingParams)},ul(g);Wl(a.displayCap)}).catch(()=>{})}
function Vl(a){if(!Ji(a,He))return Promise.reject();const b={serializedRecordNotificationInteractionsRequest:Ji(a,He).serializedInteractionsRequest},c=Ve(Je);return Sl().then(d=>Qk(d,b,c)).then(d=>d)}
function Wl(a){-1!==a&&self.registration.getNotifications().then(b=>{for(let d=0;d<b.length-a;d++){b[d].data.isDismissed=!1;b[d].close();let e;if(null==(e=b[d].data)?0:e.clickTrackingParams){let f;var c=nk(null==(f=b[d].data)?void 0:f.clickTrackingParams);const h={screenLayer:8,visualElement:c},g=pk(82046),k=wl();Al(k,g,c,8);c={screenLayer:8,visualElement:g};ul(c);Jl(k,c);vl(h)}}})}
function Ol(a){const b=[Xl(a),Re("RegistrationTimestamp").then(Yl),Zl(),$l(),am()];Promise.all(b).catch(()=>{P("IDToken",a);Nl();return Promise.resolve()})}
function Yl(a){return 9E7>=Date.now()-(a||0)?Promise.resolve():Promise.reject()}
function Xl(a){return Re("IDToken").then(b=>a===b?Promise.resolve():Promise.reject())}
function Zl(){return Re("Permission").then(a=>Notification.permission===a?Promise.resolve():Promise.reject())}
function $l(){return Re("Endpoint").then(a=>bm().then(b=>a===b?Promise.resolve():Promise.reject()))}
function am(){return Re("application_server_key").then(a=>cm().then(b=>a===b?Promise.resolve():Promise.reject()))}
function dm(){var a=Notification.permission;if(Kl[a])return Kl[a]}
function Nl(){P("RegistrationTimestamp",0);Promise.all([bm(),em(),fm(),cm()]).then(([a,b,c,d])=>{b=b?Le(b):null;c=c?Le(c):null;d=d?Eb(new Uint8Array(d),4):null;gm(a,b,c,d)}).catch(()=>{gm()})}
function gm(a=null,b=null,c=null,d=null){Qe().then(e=>{e&&(P("Endpoint",a),P("P256dhKey",b),P("AuthKey",c),P("application_server_key",d),P("Permission",Notification.permission),Promise.all([Re("DeviceId"),Re("NotificationsDisabled")]).then(([f,h])=>{if(null!=f)var g=f;else{f=[];var k;g=g||Ld.length;for(k=0;256>k;k++)f[k]=Ld[0|Math.random()*g];g=f.join("")}hm(g,null!=a?a:void 0,null!=b?b:void 0,null!=c?c:void 0,null!=d?d:void 0,null!=h?h:void 0)}))})}
function hm(a,b,c,d,e,f){r(function*(){const h={notificationRegistration:{chromeRegistration:{deviceId:a,pushParams:{applicationServerKey:e,authKey:d,p256dhKey:c,browserEndpoint:b},notificationsDisabledInApp:f,permission:dm()}}},g=Ve(Ke);return Sl().then(k=>Qk(k,h,g).then(()=>{P("DeviceId",a);P("RegistrationTimestamp",Date.now());P("TimestampLowerBound",Date.now())},l=>{Tk(l)}))})}
function bm(){return self.registration.pushManager.getSubscription().then(a=>a?Promise.resolve(a.endpoint):Promise.resolve(null))}
function em(){return self.registration.pushManager.getSubscription().then(a=>a&&a.getKey?Promise.resolve(a.getKey("p256dh")):Promise.resolve(null))}
function fm(){return self.registration.pushManager.getSubscription().then(a=>a&&a.getKey?Promise.resolve(a.getKey("auth")):Promise.resolve(null))}
function cm(){return self.registration.pushManager.getSubscription().then(a=>a?Promise.resolve(a.options.applicationServerKey):Promise.resolve(null))}
function Sl(){return r(function*(){try{return yield bk(!0),Sk()}catch(a){return yield Tk(a),Promise.reject(a)}})}
;let im=self.location.origin+"/";function dk(a){let b="undefined"!==typeof ServiceWorkerGlobalScope&&self instanceof ServiceWorkerGlobalScope?Ed.registration.scope:im;b.endsWith("/")&&(b=b.slice(0,-1));return b+a}
;let jm=void 0;function km(a){return r(function*(){jm||(jm=yield a.open("yt-appshell-assets"));return jm})}
function lm(a,b){return r(function*(){const c=yield km(a),d=b.map(e=>mm(c,e));
return Promise.all(d)})}
function nm(a,b){return r(function*(){let c;try{c=yield a.match(b,{cacheName:"yt-appshell-assets"})}catch(d){}return c})}
function om(a,b){return r(function*(){const c=yield km(a),d=(yield c.keys()).filter(e=>!b.includes(e.url)).map(e=>c.delete(e));
return Promise.all(d)})}
function pm(a,b,c){return r(function*(){yield(yield km(a)).put(b,c)})}
function qm(a,b){r(function*(){yield(yield km(a)).delete(b)})}
function mm(a,b){return r(function*(){return(yield a.match(b))?Promise.resolve():a.add(b)})}
;var rm=lh("yt-serviceworker-metadata",{M:{auth:{L:1},["resource-manifest-assets"]:{L:2}},X:!0,upgrade(a,b){b(1)&&Cg(a,"resource-manifest-assets");b(2)&&Cg(a,"auth")},version:2});let sm=null;function tm(a){return Tg(rm(),a)}
function um(){return r(function*(){const a=yield ch();if(a)return vm.h||(vm.h=new vm(a)),vm.h})}
function wm(a,b){return r(function*(){yield X(yield tm(a.token),["resource-manifest-assets"],"readwrite",c=>{const d=c.objectStore("resource-manifest-assets"),e=Date.now();return V(d.h.put(b,e)).then(()=>{sm=e;let f=!0;return Hg(d,{query:IDBKeyRange.bound(0,Date.now()),direction:"prev"},h=>f?(f=!1,h.advance(5)):d.delete(h.getKey()).then(()=>h.continue()))})})})}
function xm(a,b){return r(function*(){let c=!1,d=0;yield X(yield tm(a.token),["resource-manifest-assets"],"readonly",e=>Hg(e.objectStore("resource-manifest-assets"),{query:IDBKeyRange.bound(0,Date.now()),direction:"prev"},f=>{if(f.K().includes(b))c=!0;else return d+=1,f.continue()}));
return c?d:-1})}
function ym(a){return r(function*(){sm||(yield X(yield tm(a.token),["resource-manifest-assets"],"readonly",b=>Hg(b.objectStore("resource-manifest-assets"),{query:IDBKeyRange.bound(0,Date.now()),direction:"prev"},c=>{sm=c.getKey()})));
return sm})}
var vm=class{constructor(a){this.token=a}};function zm(){return r(function*(){const a=yield ch();if(a)return Am.h||(Am.h=new Am(a)),Am.h})}
function Bm(a,b){return r(function*(){yield Eg(yield tm(a.token),"auth",b,"shell_identifier_key")})}
function Cm(a){return r(function*(){return(yield(yield tm(a.token)).get("auth","shell_identifier_key"))||""})}
function Dm(a){return r(function*(){yield(yield tm(a.token)).clear("auth")})}
var Am=class{constructor(a){this.token=a}};function Em(){r(function*(){const a=yield zm();a&&(yield Dm(a))})}
;var cd=class extends K{constructor(a){super(a)}},Fm=[cd,1,sd];var Gm=class extends K{constructor(a){super(a)}};Gm.v=[1];var Hm=function(a){return(b,c)=>{a:{if(lc.length){const e=lc.pop();hc(e,c);e.h.init(b,void 0,void 0,c);b=e}else b=new kc(b,c);try{const e=kd(a).h;var d=jd(a)(new e,b);break a}finally{b.h.clear(),b.l=-1,b.i=-1,100>lc.length&&lc.push(b)}d=void 0}return d}}([Gm,
1,td,Fm]);function Im(a){return r(function*(){const b=a.headers.get("X-Resource-Manifest");return b?Promise.resolve(Jm(b)):Promise.reject(Error("No resource manifest header"))})}
function Jm(a){return bd(Hm(decodeURIComponent(a))).reduce((b,c)=>{(c=J(c,1))&&b.push(c);return b},[])}
;function Km(a){return r(function*(){const b=yield bk();if(b&&null!=gd(b,3)){var c=yield zm();c&&(c=yield Cm(c),gd(b,3)!==c&&(qm(a.caches,a.h),Em()))}})}
function Lm(a){return r(function*(){let b,c;try{c=yield Mm(a.i),b=yield Im(c),yield lm(a.caches,b)}catch(d){return Promise.reject(d)}try{yield Nm(),yield pm(a.caches,a.h,c)}catch(d){return Promise.reject(d)}if(b)try{yield Om(a,b,a.h)}catch(d){}return Promise.resolve()})}
function Pm(a){return r(function*(){yield Km(a);return Lm(a)})}
function Mm(a){return r(function*(){try{return yield t.fetch(new Request(a))}catch(b){return Promise.reject(b)}})}
function Nm(){return r(function*(){var a=yield bk();let b;a&&null!=gd(a,3)&&(b=J(a,3));return b?(a=yield zm())?Promise.resolve(Bm(a,b)):Promise.reject(Error("Could not get AuthMonitor instance")):Promise.reject(Error("Could not get datasync ID"))})}
function Om(a,b,c){return r(function*(){const d=yield um();if(d)try{yield wm(d,b)}catch(e){yield Tk(e)}b.push(c);try{yield om(a.caches,b)}catch(e){yield Tk(e)}return Promise.resolve()})}
function Qm(a,b){return r(function*(){return nm(a.caches,b)})}
function Rm(a){return r(function*(){return nm(a.caches,a.h)})}
var Sm=class{constructor(){var a=self.caches;let b=dk("/app_shell");T("service_worker_forward_exp_params")&&(b+=self.location.search);var c=dk("/app_shell_home");this.caches=a;this.i=b;this.h=c}};var Tm=class{constructor(){const a=this;this.stream=new ReadableStream({start(b){a.close=()=>void b.close();
a.h=c=>{const d=c.getReader();return d.read().then(function g({done:f,value:h}){if(f)return Promise.resolve();b.enqueue(h);return d.read().then(g)})};
a.i=()=>{const c=(new TextEncoder).encode("<script>if (window.fetchInitialData) { window.fetchInitialData(); } else { window.getInitialData = undefined; }\x3c/script>");b.enqueue(c)}}})}};function Um(a,b){return r(function*(){const c=b.request,d=yield Qm(a.h,c.url);if(d)return Wk({appShellAssetLoadReport:{assetPath:c.url,cacheHit:!0},timestamp:W()}),d;Vm(c);return Wm(b)})}
function Xm(a,b){return r(function*(){const c=yield Ym(b);if(c.response&&(c.response.ok||"opaqueredirect"===c.response.type||429===c.response.status||303===c.response.status||300<=c.response.status&&400>c.response.status))return c.response;const d=yield Rm(a.h);if(d)return Zm(a),$m(d,b);an(a);return c.response?c.response:Promise.reject(c.error)})}
function bn(a,b){b=new URL(b);if(!a.config.ja.includes(b.pathname))return!1;if(!b.search)return!0;b=new URLSearchParams(b.search);for(const c of a.config.Ba)if(a=b.get(c.key),void 0===c.value||a===c.value)if(b.delete(c.key),!b.toString())return!0;return!1}
function cn(a,b){return r(function*(){const c=yield Rm(a.h);if(!c)return an(a),Wm(b);Zm(a);var d;a:{if(c.headers&&(d=c.headers.get("date"))&&(d=Date.parse(d),!isNaN(d))){d=Math.round(W()-d);break a}d=-1}if(!(-1<d&&7<=d/864E5))return $m(c,b);d=yield Ym(b);return d.response&&d.response.ok?d.response:$m(c,b)})}
function Wm(a){return Promise.resolve(a.preloadResponse).then(b=>b&&!dn(b)?b:t.fetch(a.request))}
function Vm(a){const b={assetPath:a.url,cacheHit:!1};um().then(c=>{if(c){var d=ym(c).then(e=>{e&&(b.currentAppBundleTimestampSec=String(Math.floor(e/1E3)))});
c=xm(c,a.url).then(e=>{b.appBundleVersionDiffCount=e});
Promise.all([d,c]).catch(e=>{Tk(e)}).finally(()=>{Wk({appShellAssetLoadReport:b,
timestamp:W()})})}else Wk({appShellAssetLoadReport:b,
timestamp:W()})})}
function Zm(a){Wk({appShellAssetLoadReport:{assetPath:a.h.h,cacheHit:!0},timestamp:W()})}
function an(a){Wk({appShellAssetLoadReport:{assetPath:a.h.h,cacheHit:!1},timestamp:W()})}
function $m(a,b){if(!T("sw_nav_preload_pbj"))return a;const c=new Tm,d=c.h(a.body);Promise.resolve(b.preloadResponse).then(e=>{if(!e||!dn(e))throw Error("no pbj preload response available");d.then(()=>c.h(e.body)).then(()=>void c.close())}).catch(()=>{d.then(()=>{c.i();
c.close()})});
return new Response(c.stream,{status:a.status,statusText:a.statusText,headers:a.headers})}
function Ym(a){return r(function*(){try{return{response:yield Wm(a)}}catch(b){return{error:b}}})}
function dn(a){return"pbj"===a.headers.get("x-navigation-preload-response-type")}
var nn=class{constructor(){var a=en;var b={Fa:fn,Ra:gn([hn,/\/signin/,/\/logout/]),ja:["/","/feed/downloads"],Ba:jn([{key:"feature",value:"ytca"}]),Aa:kn(T("kevlar_sw_app_wide_fallback")?ln:mn)};this.h=a;this.config=b}};const on=/^\/$/,mn=[on,/^\/feed\/downloads$/],ln=[on,/^\/feed\/\w*/,/^\/results$/,/^\/playlist$/,/^\/watch$/,/^\/channel\/\w*/];function kn(a){return new RegExp(a.map(b=>b.source).join("|"))}
const pn=/^https:\/\/([\w-]*\.)*youtube\.com.*/;function gn(a){a=kn(a);return new RegExp(`${pn.source}(${a.source})`)}
const qn=kn([/\.css$/,/\.js$/,/\.ico$/,/\/ytmweb\/_\/js\//,/\/ytmweb\/_\/ss\//,/\/kabuki\/_\/js\//,/\/kabuki\/_\/ss\//,/\/ytmainappweb\/_\/ss\//]),fn=new RegExp(`${pn.source}(${qn.source})`),hn=/purge_shell=1/;function jn(a=[]){const b=[];for(const c of wf)b.push({key:c});for(const c of a)b.push(c);return b}
gn([hn]);jn();var sn=class{constructor(){var a=en,b=rn;this.h=self;this.i=a;this.m=b;this.G=Me}init(){this.h.oninstall=this.s.bind(this);this.h.onactivate=this.j.bind(this);this.h.onfetch=this.l.bind(this);this.h.onmessage=this.A.bind(this)}s(a){this.h.skipWaiting();const b=Pm(this.i).catch(c=>{Tk(c);return Promise.resolve()});
a.waitUntil(b)}j(a){const b=[this.h.clients.claim()],c=this.h.registration;c.navigationPreload&&(b.push(c.navigationPreload.enable()),T("sw_nav_preload_pbj")&&b.push(c.navigationPreload.setHeaderValue("pbj")));a.waitUntil(Promise.all(b))}l(a){const b=this;return r(function*(){var c=b.m,d=!!b.h.registration.navigationPreload;const e=a.request;if(c.config.Ra.test(e.url))ck.h&&(delete ck.h.h,t.__SAPISID=void 0,Q("VISITOR_DATA",void 0),Q("SESSION_INDEX",void 0),Q("DELEGATED_SESSION_ID",void 0),Q("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT",
void 0)),d=a.respondWith,c=c.h,qm(c.caches,c.h),Em(),c=Wm(a),d.call(a,c);else if(c.config.Fa.test(e.url))a.respondWith(Um(c,a));else if("navigate"===e.mode){const f=new URL(e.url),h=c.config.ja;(!T("sw_nav_request_network_first")&&h.includes(f.pathname)?0:c.config.Aa.test(f.pathname))?a.respondWith(Xm(c,a)):bn(c,e.url)?a.respondWith(cn(c,a)):d&&a.respondWith(Wm(a))}})}A(a){const b=a.data;
this.G.includes(b.type)?Ml(a):"refresh_shell"===b.type&&Lm(this.i).catch(c=>{Tk(c)})}};function tn(){let a=v("ytglobal.storage_");a||(a=new un,w("ytglobal.storage_",a));return a}
var un=class{estimate(){return r(function*(){const a=navigator;let b;if(null==(b=a.storage)?0:b.estimate)return a.storage.estimate();let c;if(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)return vn()})}};
function vn(){const a=navigator;return new Promise((b,c)=>{let d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota((e,f)=>{b({usage:e,quota:f})},e=>{c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
w("ytglobal.storageClass_",un);function wn(a,b){tn().estimate().then(c=>{c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:xn(null==c?void 0:c.usage),deviceStorageQuotaMbytes:xn(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
class yn{constructor(){var a=zn;this.handleError=An;this.h=a;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",()=>{this.i=!0});
this.j=Math.random()<=rf("ytidb_transaction_ended_event_rate_limit_session",.2)}U(a,b){switch(a){case "IDB_DATA_CORRUPTED":T("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":T("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":wn(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=rf("ytidb_transaction_ended_event_rate_limit_transaction",
.1)&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}}}function xn(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;Hf(Ef(),{F:[{Oa:/Failed to fetch/,weight:500}],D:[]});var {handleError:An=Tj,U:zn=Y}={handleError:Vk,U:function(a,b){return r(function*(){yield Uk();Y(a,b)})}};
for(ag=new yn;0<$f.length;){const a=$f.shift();switch(a.type){case "ERROR":ag.handleError(a.payload);break;case "EVENT":ag.U(a.eventType,a.payload)}}ck.h=new ck;self.onnotificationclick=function(a){a.notification.close();const b=a.notification.data;b.isDismissed=!1;const c=self.clients.matchAll({type:"window",includeUncontrolled:!0});c.then(d=>{a:{var e=b.nav;for(const f of d)if(f.url===e){f.focus();break a}self.clients.openWindow(e)}});
a.waitUntil(c);a.waitUntil(Vl(b.clickEndpoint))};
self.onnotificationclose=function(a){var b=a.notification.data;if(null==b?0:b.clickTrackingParams){var c=nk(b.clickTrackingParams);a={screenLayer:8,visualElement:c};if(b.isDismissed){const d=pk(74726);b=wl();Al(b,d,c,8);c={screenLayer:8,visualElement:d};ul(c);Jl(b,c)}vl(a)}};
self.onpush=function(a){a.waitUntil(Re("NotificationsDisabled").then(b=>{if(b)return Promise.resolve();if(a.data&&a.data.text().length)try{return Rl(a.data.json())}catch(c){return Promise.resolve(c.message)}return Promise.resolve()}));
a.waitUntil(Pl())};
self.onpushsubscriptionchange=function(){Nl()};
const en=new Sm,rn=new nn;(new sn).init();
