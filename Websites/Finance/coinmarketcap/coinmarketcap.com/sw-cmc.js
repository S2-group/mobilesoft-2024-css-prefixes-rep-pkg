try{self["workbox:core:6.5.3"]&&_()}catch(t){}const t=(t,...e)=>{let s=t;return e.length>0&&(s+=` :: ${JSON.stringify(e)}`),s};class e extends Error{constructor(e,s){super(t(e,s)),this.name=e,this.details=s}}try{self["workbox:routing:6.5.3"]&&_()}catch(t){}const s=t=>t&&"object"==typeof t?t:{handle:t};class n{constructor(t,e,n="GET"){this.handler=s(e),this.match=t,this.method=n}setCatchHandler(t){this.catchHandler=s(t)}}class i extends n{constructor(t,e,s){super((({url:e})=>{const s=t.exec(e.href);if(s&&(e.origin===location.origin||0===s.index))return s.slice(1)}),e,s)}}class r{constructor(){this.t=new Map,this.i=new Map}get routes(){return this.t}addFetchListener(){self.addEventListener("fetch",(t=>{const{request:e}=t,s=this.handleRequest({request:e,event:t});s&&t.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(t=>{if(t.data&&"CACHE_URLS"===t.data.type){const{payload:e}=t.data,s=Promise.all(e.urlsToCache.map((e=>{"string"==typeof e&&(e=[e]);const s=new Request(...e);return this.handleRequest({request:s,event:t})})));t.waitUntil(s),t.ports&&t.ports[0]&&s.then((()=>t.ports[0].postMessage(!0)))}}))}handleRequest({request:t,event:e}){const s=new URL(t.url,location.href);if(!s.protocol.startsWith("http"))return;const n=s.origin===location.origin,{params:i,route:r}=this.findMatchingRoute({event:e,request:t,sameOrigin:n,url:s});let c=r&&r.handler;const a=t.method;if(!c&&this.i.has(a)&&(c=this.i.get(a)),!c)return;let o;try{o=c.handle({url:s,request:t,event:e,params:i})}catch(t){o=Promise.reject(t)}const h=r&&r.catchHandler;return o instanceof Promise&&(this.o||h)&&(o=o.catch((async n=>{if(h)try{return await h.handle({url:s,request:t,event:e,params:i})}catch(t){t instanceof Error&&(n=t)}if(this.o)return this.o.handle({url:s,request:t,event:e});throw n}))),o}findMatchingRoute({url:t,sameOrigin:e,request:s,event:n}){const i=this.t.get(s.method)||[];for(const r of i){let i;const c=r.match({url:t,sameOrigin:e,request:s,event:n});if(c)return i=c,(Array.isArray(i)&&0===i.length||c.constructor===Object&&0===Object.keys(c).length||"boolean"==typeof c)&&(i=void 0),{route:r,params:i}}return{}}setDefaultHandler(t,e="GET"){this.i.set(e,s(t))}setCatchHandler(t){this.o=s(t)}registerRoute(t){this.t.has(t.method)||this.t.set(t.method,[]),this.t.get(t.method).push(t)}unregisterRoute(t){if(!this.t.has(t.method))throw new e("unregister-route-but-not-found-with-method",{method:t.method});const s=this.t.get(t.method).indexOf(t);if(!(s>-1))throw new e("unregister-route-route-not-registered");this.t.get(t.method).splice(s,1)}}let c;const a=()=>(c||(c=new r,c.addFetchListener(),c.addCacheListener()),c);function o(t,s,r){let c;if("string"==typeof t){const e=new URL(t,location.href);c=new n((({url:t})=>t.href===e.href),s,r)}else if(t instanceof RegExp)c=new i(t,s,r);else if("function"==typeof t)c=new n(t,s,r);else{if(!(t instanceof n))throw new e("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});c=t}return a().registerRoute(c),c}const h={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},u=t=>[h.prefix,t,h.suffix].filter((t=>t&&t.length>0)).join("-"),l={updateDetails:t=>{(t=>{for(const e of Object.keys(h))t(e)})((e=>{"string"==typeof t[e]&&(h[e]=t[e])}))},getGoogleAnalyticsName:t=>t||u(h.googleAnalytics),getPrecacheName:t=>t||u(h.precache),getPrefix:()=>h.prefix,getRuntimeName:t=>t||u(h.runtime),getSuffix:()=>h.suffix};function f(t){t.then((()=>{}))}const p=new Set;function d(){return d=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t},d.apply(this,arguments)}const w=(t,e)=>e.some((e=>t instanceof e));let m,y;const g=new WeakMap,v=new WeakMap,b=new WeakMap,R=new WeakMap,k=new WeakMap;let x={get(t,e,s){if(t instanceof IDBTransaction){if("done"===e)return v.get(t);if("objectStoreNames"===e)return t.objectStoreNames||b.get(t);if("store"===e)return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return U(t[e])},set:(t,e,s)=>(t[e]=s,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function D(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(y||(y=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(j(this),e),U(g.get(this))}:function(...e){return U(t.apply(j(this),e))}:function(e,...s){const n=t.call(j(this),e,...s);return b.set(n,e.sort?e.sort():[e]),U(n)}}function q(t){return"function"==typeof t?D(t):(t instanceof IDBTransaction&&function(t){if(v.has(t))return;const e=new Promise(((e,s)=>{const n=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",r),t.removeEventListener("abort",r)},i=()=>{e(),n()},r=()=>{s(t.error||new DOMException("AbortError","AbortError")),n()};t.addEventListener("complete",i),t.addEventListener("error",r),t.addEventListener("abort",r)}));v.set(t,e)}(t),w(t,m||(m=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(t,x):t)}function U(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,s)=>{const n=()=>{t.removeEventListener("success",i),t.removeEventListener("error",r)},i=()=>{e(U(t.result)),n()},r=()=>{s(t.error),n()};t.addEventListener("success",i),t.addEventListener("error",r)}));return e.then((e=>{e instanceof IDBCursor&&g.set(e,t)})).catch((()=>{})),k.set(e,t),e}(t);if(R.has(t))return R.get(t);const e=q(t);return e!==t&&(R.set(t,e),k.set(e,t)),e}const j=t=>k.get(t);const L=["get","getKey","getAll","getAllKeys","count"],E=["put","add","delete","clear"],N=new Map;function I(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(N.get(e))return N.get(e);const s=e.replace(/FromIndex$/,""),n=e!==s,i=E.includes(s);if(!(s in(n?IDBIndex:IDBObjectStore).prototype)||!i&&!L.includes(s))return;const r=async function(t,...e){const r=this.transaction(t,i?"readwrite":"readonly");let c=r.store;return n&&(c=c.index(e.shift())),(await Promise.all([c[s](...e),i&&r.done]))[0]};return N.set(e,r),r}x=(t=>d({},t,{get:(e,s,n)=>I(e,s)||t.get(e,s,n),has:(e,s)=>!!I(e,s)||t.has(e,s)}))(x);try{self["workbox:expiration:6.5.3"]&&_()}catch(t){}const C="cache-entries",O=t=>{const e=new URL(t,location.href);return e.hash="",e.href};class B{constructor(t){this.h=null,this.u=t}l(t){const e=t.createObjectStore(C,{keyPath:"id"});e.createIndex("cacheName","cacheName",{unique:!1}),e.createIndex("timestamp","timestamp",{unique:!1})}p(t){this.l(t),this.u&&function(t,{blocked:e}={}){const s=indexedDB.deleteDatabase(t);e&&s.addEventListener("blocked",(t=>e(t.oldVersion,t))),U(s).then((()=>{}))}(this.u)}async setTimestamp(t,e){const s={url:t=O(t),timestamp:e,cacheName:this.u,id:this.m(t)},n=(await this.getDb()).transaction(C,"readwrite",{durability:"relaxed"});await n.store.put(s),await n.done}async getTimestamp(t){const e=await this.getDb(),s=await e.get(C,this.m(t));return null==s?void 0:s.timestamp}async expireEntries(t,e){const s=await this.getDb();let n=await s.transaction(C).store.index("timestamp").openCursor(null,"prev");const i=[];let r=0;for(;n;){const s=n.value;s.cacheName===this.u&&(t&&s.timestamp<t||e&&r>=e?i.push(n.value):r++),n=await n.continue()}const c=[];for(const t of i)await s.delete(C,t.id),c.push(t.url);return c}m(t){return this.u+"|"+O(t)}async getDb(){return this.h||(this.h=await function(t,e,{blocked:s,upgrade:n,blocking:i,terminated:r}={}){const c=indexedDB.open(t,e),a=U(c);return n&&c.addEventListener("upgradeneeded",(t=>{n(U(c.result),t.oldVersion,t.newVersion,U(c.transaction),t)})),s&&c.addEventListener("blocked",(t=>s(t.oldVersion,t.newVersion,t))),a.then((t=>{r&&t.addEventListener("close",(()=>r())),i&&t.addEventListener("versionchange",(t=>i(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}("workbox-expiration",1,{upgrade:this.p.bind(this)})),this.h}}class M{constructor(t,e={}){this.g=!1,this.v=!1,this.R=e.maxEntries,this.k=e.maxAgeSeconds,this._=e.matchOptions,this.u=t,this.D=new B(t)}async expireEntries(){if(this.g)return void(this.v=!0);this.g=!0;const t=this.k?Date.now()-1e3*this.k:0,e=await this.D.expireEntries(t,this.R),s=await self.caches.open(this.u);for(const t of e)await s.delete(t,this._);this.g=!1,this.v&&(this.v=!1,f(this.expireEntries()))}async updateTimestamp(t){await this.D.setTimestamp(t,Date.now())}async isURLExpired(t){if(this.k){const e=await this.D.getTimestamp(t),s=Date.now()-1e3*this.k;return void 0===e||e<s}return!1}async delete(){this.v=!1,await this.D.expireEntries(1/0)}}try{self["workbox:strategies:6.5.3"]&&_()}catch(t){}const T={cacheWillUpdate:async({response:t})=>200===t.status||0===t.status?t:null};function P(t,e){const s=new URL(t);for(const t of e)s.searchParams.delete(t);return s.href}class W{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}function S(t){return"string"==typeof t?new Request(t):t}class A{constructor(t,e){this.q={},Object.assign(this,e),this.event=e.event,this.U=t,this.j=new W,this.L=[],this.N=[...t.plugins],this.I=new Map;for(const t of this.N)this.I.set(t,{});this.event.waitUntil(this.j.promise)}async fetch(t){const{event:s}=this;let n=S(t);if("navigate"===n.mode&&s instanceof FetchEvent&&s.preloadResponse){const t=await s.preloadResponse;if(t)return t}const i=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const t of this.iterateCallbacks("requestWillFetch"))n=await t({request:n.clone(),event:s})}catch(t){if(t instanceof Error)throw new e("plugin-error-request-will-fetch",{thrownErrorMessage:t.message})}const r=n.clone();try{let t;t=await fetch(n,"navigate"===n.mode?void 0:this.U.fetchOptions);for(const e of this.iterateCallbacks("fetchDidSucceed"))t=await e({event:s,request:r,response:t});return t}catch(t){throw i&&await this.runCallbacks("fetchDidFail",{error:t,event:s,originalRequest:i.clone(),request:r.clone()}),t}}async fetchAndCachePut(t){const e=await this.fetch(t),s=e.clone();return this.waitUntil(this.cachePut(t,s)),e}async cacheMatch(t){const e=S(t);let s;const{cacheName:n,matchOptions:i}=this.U,r=await this.getCacheKey(e,"read"),c=Object.assign(Object.assign({},i),{cacheName:n});s=await caches.match(r,c);for(const t of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await t({cacheName:n,matchOptions:i,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(t,s){const n=S(t);var i;await(i=0,new Promise((t=>setTimeout(t,i))));const r=await this.getCacheKey(n,"write");if(!s)throw new e("cache-put-with-no-response",{url:(c=r.url,new URL(String(c),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var c;const a=await this.C(s);if(!a)return!1;const{cacheName:o,matchOptions:h}=this.U,u=await self.caches.open(o),l=this.hasCallback("cacheDidUpdate"),f=l?await async function(t,e,s,n){const i=P(e.url,s);if(e.url===i)return t.match(e,n);const r=Object.assign(Object.assign({},n),{ignoreSearch:!0}),c=await t.keys(e,r);for(const e of c)if(i===P(e.url,s))return t.match(e,n)}(u,r.clone(),["__WB_REVISION__"],h):null;try{await u.put(r,l?a.clone():a)}catch(t){if(t instanceof Error)throw"QuotaExceededError"===t.name&&await async function(){for(const t of p)await t()}(),t}for(const t of this.iterateCallbacks("cacheDidUpdate"))await t({cacheName:o,oldResponse:f,newResponse:a.clone(),request:r,event:this.event});return!0}async getCacheKey(t,e){const s=`${t.url} | ${e}`;if(!this.q[s]){let n=t;for(const t of this.iterateCallbacks("cacheKeyWillBeUsed"))n=S(await t({mode:e,request:n,event:this.event,params:this.params}));this.q[s]=n}return this.q[s]}hasCallback(t){for(const e of this.U.plugins)if(t in e)return!0;return!1}async runCallbacks(t,e){for(const s of this.iterateCallbacks(t))await s(e)}*iterateCallbacks(t){for(const e of this.U.plugins)if("function"==typeof e[t]){const s=this.I.get(e),n=n=>{const i=Object.assign(Object.assign({},n),{state:s});return e[t](i)};yield n}}waitUntil(t){return this.L.push(t),t}async doneWaiting(){let t;for(;t=this.L.shift();)await t}destroy(){this.j.resolve(null)}async C(t){let e=t,s=!1;for(const t of this.iterateCallbacks("cacheWillUpdate"))if(e=await t({request:this.request,response:e,event:this.event})||void 0,s=!0,!e)break;return s||e&&200!==e.status&&(e=void 0),e}}class K{constructor(t={}){this.cacheName=l.getRuntimeName(t.cacheName),this.plugins=t.plugins||[],this.fetchOptions=t.fetchOptions,this.matchOptions=t.matchOptions}handle(t){const[e]=this.handleAll(t);return e}handleAll(t){t instanceof FetchEvent&&(t={event:t,request:t.request});const e=t.event,s="string"==typeof t.request?new Request(t.request):t.request,n="params"in t?t.params:void 0,i=new A(this,{event:e,request:s,params:n}),r=this.O(i,s,e);return[r,this.B(r,i,s,e)]}async O(t,s,n){let i;await t.runCallbacks("handlerWillStart",{event:n,request:s});try{if(i=await this.M(s,t),!i||"error"===i.type)throw new e("no-response",{url:s.url})}catch(e){if(e instanceof Error)for(const r of t.iterateCallbacks("handlerDidError"))if(i=await r({error:e,event:n,request:s}),i)break;if(!i)throw e}for(const e of t.iterateCallbacks("handlerWillRespond"))i=await e({event:n,request:s,response:i});return i}async B(t,e,s,n){let i,r;try{i=await t}catch(r){}try{await e.runCallbacks("handlerDidRespond",{event:n,request:s,response:i}),await e.doneWaiting()}catch(t){t instanceof Error&&(r=t)}if(await e.runCallbacks("handlerDidComplete",{event:n,request:s,response:i,error:r}),e.destroy(),r)throw r}}function F(t,e){const s=e();return t.waitUntil(s),s}try{self["workbox:precaching:6.5.3"]&&_()}catch(t){}const $="__WB_REVISION__";function H(t){if(!t)throw new e("add-to-cache-list-unexpected-type",{entry:t});if("string"==typeof t){const e=new URL(t,location.href);return{cacheKey:e.href,url:e.href}}const{revision:s,url:n}=t;if(!n)throw new e("add-to-cache-list-unexpected-type",{entry:t});if(!s){const t=new URL(n,location.href);return{cacheKey:t.href,url:t.href}}const i=new URL(n,location.href),r=new URL(n,location.href);return i.searchParams.set($,s),{cacheKey:i.href,url:r.href}}class G{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:t,state:e})=>{e&&(e.originalRequest=t)},this.cachedResponseWillBeUsed=async({event:t,state:e,cachedResponse:s})=>{if("install"===t.type&&e&&e.originalRequest&&e.originalRequest instanceof Request){const t=e.originalRequest.url;s?this.notUpdatedURLs.push(t):this.updatedURLs.push(t)}return s}}}class V{constructor({precacheController:t}){this.cacheKeyWillBeUsed=async({request:t,params:e})=>{const s=(null==e?void 0:e.cacheKey)||this.T.getCacheKeyForURL(t.url);return s?new Request(s,{headers:t.headers}):t},this.T=t}}let J,Q;async function z(t,s){let n=null;if(t.url){n=new URL(t.url).origin}if(n!==self.location.origin)throw new e("cross-origin-copy-response",{origin:n});const i=t.clone(),r={headers:new Headers(i.headers),status:i.status,statusText:i.statusText},c=s?s(r):r,a=function(){if(void 0===J){const t=new Response("");if("body"in t)try{new Response(t.body),J=!0}catch(t){J=!1}J=!1}return J}()?i.body:await i.blob();return new Response(a,c)}class X extends K{constructor(t={}){t.cacheName=l.getPrecacheName(t.cacheName),super(t),this.P=!1!==t.fallbackToNetwork,this.plugins.push(X.copyRedirectedCacheableResponsesPlugin)}async M(t,e){const s=await e.cacheMatch(t);return s||(e.event&&"install"===e.event.type?await this.W(t,e):await this.S(t,e))}async S(t,s){let n;const i=s.params||{};if(!this.P)throw new e("missing-precache-entry",{cacheName:this.cacheName,url:t.url});{const e=i.integrity,r=t.integrity,c=!r||r===e;n=await s.fetch(new Request(t,{integrity:"no-cors"!==t.mode?r||e:void 0})),e&&c&&"no-cors"!==t.mode&&(this.A(),await s.cachePut(t,n.clone()))}return n}async W(t,s){this.A();const n=await s.fetch(t);if(!await s.cachePut(t,n.clone()))throw new e("bad-precaching-response",{url:t.url,status:n.status});return n}A(){let t=null,e=0;for(const[s,n]of this.plugins.entries())n!==X.copyRedirectedCacheableResponsesPlugin&&(n===X.defaultPrecacheCacheabilityPlugin&&(t=s),n.cacheWillUpdate&&e++);0===e?this.plugins.push(X.defaultPrecacheCacheabilityPlugin):e>1&&null!==t&&this.plugins.splice(t,1)}}X.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:t})=>!t||t.status>=400?null:t},X.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:t})=>t.redirected?await z(t):t};class Y{constructor({cacheName:t,plugins:e=[],fallbackToNetwork:s=!0}={}){this.K=new Map,this.F=new Map,this.$=new Map,this.U=new X({cacheName:l.getPrecacheName(t),plugins:[...e,new V({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this.U}precache(t){this.addToCacheList(t),this.H||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this.H=!0)}addToCacheList(t){const s=[];for(const n of t){"string"==typeof n?s.push(n):n&&void 0===n.revision&&s.push(n.url);const{cacheKey:t,url:i}=H(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this.K.has(i)&&this.K.get(i)!==t)throw new e("add-to-cache-list-conflicting-entries",{firstEntry:this.K.get(i),secondEntry:t});if("string"!=typeof n&&n.integrity){if(this.$.has(t)&&this.$.get(t)!==n.integrity)throw new e("add-to-cache-list-conflicting-integrities",{url:i});this.$.set(t,n.integrity)}if(this.K.set(i,t),this.F.set(i,r),s.length>0){const t=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(t)}}}install(t){return F(t,(async()=>{const e=new G;this.strategy.plugins.push(e);for(const[e,s]of this.K){const n=this.$.get(s),i=this.F.get(e),r=new Request(e,{integrity:n,cache:i,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:r,event:t}))}const{updatedURLs:s,notUpdatedURLs:n}=e;return{updatedURLs:s,notUpdatedURLs:n}}))}activate(t){return F(t,(async()=>{const t=await self.caches.open(this.strategy.cacheName),e=await t.keys(),s=new Set(this.K.values()),n=[];for(const i of e)s.has(i.url)||(await t.delete(i),n.push(i.url));return{deletedURLs:n}}))}getURLsToCacheKeys(){return this.K}getCachedURLs(){return[...this.K.keys()]}getCacheKeyForURL(t){const e=new URL(t,location.href);return this.K.get(e.href)}getIntegrityForCacheKey(t){return this.$.get(t)}async matchPrecache(t){const e=t instanceof Request?t.url:t,s=this.getCacheKeyForURL(e);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(t){const s=this.getCacheKeyForURL(t);if(!s)throw new e("non-precached-url",{url:t});return e=>(e.request=new Request(t),e.params=Object.assign({cacheKey:s},e.params),this.strategy.handle(e))}}const Z=()=>(Q||(Q=new Y),Q);class tt extends n{constructor(t,e){super((({request:s})=>{const n=t.getURLsToCacheKeys();for(const i of function*(t,{ignoreURLParametersMatching:e=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:n=!0,urlManipulation:i}={}){const r=new URL(t,location.href);r.hash="",yield r.href;const c=function(t,e=[]){for(const s of[...t.searchParams.keys()])e.some((t=>t.test(s)))&&t.searchParams.delete(s);return t}(r,e);if(yield c.href,s&&c.pathname.endsWith("/")){const t=new URL(c.href);t.pathname+=s,yield t.href}if(n){const t=new URL(c.href);t.pathname+=".html",yield t.href}if(i){const t=i({url:r});for(const e of t)yield e.href}}(s.url,e)){const e=n.get(i);if(e){return{cacheKey:e,integrity:t.getIntegrityForCacheKey(e)}}}}),t.strategy)}}const et=async(t,e="-precache-")=>{const s=(await self.caches.keys()).filter((s=>s.includes(e)&&s.includes(self.registration.scope)&&s!==t));return await Promise.all(s.map((t=>self.caches.delete(t)))),s};var st;importScripts(),self.skipWaiting(),self.addEventListener("activate",(()=>self.clients.claim())),st={ignoreURLParametersMatching:[]},function(t){Z().precache(t)}([{url:"https://s2.coinmarketcap.com/_next/static/chunks/precache.account-modal.c18370a3580c63cb.js",revision:"c18370a3580c63cb"},{url:"https://s2.coinmarketcap.com/_next/static/chunks/precache.crypto-chart.f01947343fc63798.js",revision:"f01947343fc63798"},{url:"https://s2.coinmarketcap.com/_next/static/chunks/precache.dynamic-logo.5504235426006e65.js",revision:"5504235426006e65"},{url:"https://s2.coinmarketcap.com/_next/static/chunks/precache.gravity-widget.ec744f277ed1aa15.js",revision:"ec744f277ed1aa15"},{url:"https://s2.coinmarketcap.com/_next/static/chunks/precache.homepage-gravity-editor.f5c9e1336f34ce2a.js",revision:"f5c9e1336f34ce2a"},{url:"https://s2.coinmarketcap.com/_next/static/chunks/precache.login.339ef8497dac64f0.js",revision:"339ef8497dac64f0"},{url:"https://s2.coinmarketcap.com/_next/static/chunks/precache.mobile-filter.26744f5b19c95a99.js",revision:"26744f5b19c95a99"},{url:"https://s2.coinmarketcap.com/_next/static/chunks/precache.search.8d74cd05a97fd872.js",revision:"8d74cd05a97fd872"},{url:"https://s2.coinmarketcap.com/_next/static/chunks/precache.setting-profile.fc2d10d3683c8aee.js",revision:"fc2d10d3683c8aee"},{url:"https://s2.coinmarketcap.com/_next/static/chunks/precache.side-notification.ffacf73f1d8591c8.js",revision:"ffacf73f1d8591c8"},{url:"https://s2.coinmarketcap.com/_next/static/chunks/precache.signup.aa502b1b16027507.js",revision:"aa502b1b16027507"},{url:"https://s2.coinmarketcap.com/_next/static/chunks/precache.sitepreferences.411621ae73e18b73.js",revision:"411621ae73e18b73"},{url:"https://s2.coinmarketcap.com/_next/static/chunks/precache.takeover.1ac154fe08dbfa90.js",revision:"1ac154fe08dbfa90"},{url:"https://s2.coinmarketcap.com/_next/static/chunks/precache.tippyjs-264be7f31f40a797.js",revision:"264be7f31f40a797"},{url:"https://s2.coinmarketcap.com/_next/static/chunks/precache.user-guide.5210e64ceedfa619.js",revision:"5210e64ceedfa619"},{url:"https://s2.coinmarketcap.com/_next/static/chunks/precache.user-section.6e5f71a84c81c437.js",revision:"6e5f71a84c81c437"},{url:"https://s2.coinmarketcap.com/_next/static/chunks/precache.voteResultModal.12c19b85c873eaab.js",revision:"12c19b85c873eaab"},{url:"https://s2.coinmarketcap.com/_next/static/chunks/precache.wallet-login.7d69f549d94936fa.js",revision:"7d69f549d94936fa"}]),function(t){const e=Z();o(new tt(e,t))}(st),self.addEventListener("activate",(t=>{const e=l.getPrecacheName();t.waitUntil(et(e).then((t=>{})))})),o((({url:t})=>/(lite-list)\.(?:json)$/i.test(t.href)),new class extends K{constructor(t={}){super(t),this.plugins.some((t=>"cacheWillUpdate"in t))||this.plugins.unshift(T)}async M(t,s){const n=s.fetchAndCachePut(t).catch((()=>{}));s.waitUntil(n);let i,r=await s.cacheMatch(t);if(r);else try{r=await n}catch(t){t instanceof Error&&(i=t)}if(!r)throw new e("no-response",{url:t.url,error:i});return r}}({cacheName:"static-json-assets",plugins:[new class{constructor(t={}){this.cachedResponseWillBeUsed=async({event:t,request:e,cacheName:s,cachedResponse:n})=>{if(!n)return null;const i=this.G(n),r=this.V(s);f(r.expireEntries());const c=r.updateTimestamp(e.url);if(t)try{t.waitUntil(c)}catch(t){}return i?n:null},this.cacheDidUpdate=async({cacheName:t,request:e})=>{const s=this.V(t);await s.updateTimestamp(e.url),await s.expireEntries()},this.J=t,this.k=t.maxAgeSeconds,this.X=new Map,t.purgeOnQuotaError&&function(t){p.add(t)}((()=>this.deleteCacheAndMetadata()))}V(t){if(t===l.getRuntimeName())throw new e("expire-custom-caches-only");let s=this.X.get(t);return s||(s=new M(t,this.J),this.X.set(t,s)),s}G(t){if(!this.k)return!0;const e=this.Y(t);if(null===e)return!0;return e>=Date.now()-1e3*this.k}Y(t){if(!t.headers.has("date"))return null;const e=t.headers.get("date"),s=new Date(e).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[t,e]of this.X)await self.caches.delete(t),await e.delete();this.X=new Map}}({maxEntries:10,maxAgeSeconds:300})]}),"GET");
//# sourceMappingURL=sw-cmc.js.map
