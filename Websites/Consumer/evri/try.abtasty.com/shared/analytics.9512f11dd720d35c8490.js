"use strict";(self.webpackChunktag=self.webpackChunktag||[]).push([[142],{9183:(e,t,n)=>{n.r(t),n.d(t,{HitType:()=>o.Re,aggregateActionTracking:()=>Ee,dispatchBatch:()=>C,dispatchHit:()=>Se,getCurrentScrollPercent:()=>qe,listenToEvents:()=>Re,notifyHit:()=>Oe,setGlobals:()=>Ae});var o=n(6125),r=n(2109),i=n(1042),a=n(4564),s=n(3190),c=n(7515);const l="https://ariane.abtasty.com",p={"chrome mobile":78,chrome:77,firefox:70,edge:77,opera:64,safari:12,"uc browser":12};let u,d,y=[];async function g(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l;if((new c.yN).haveConsent([c.RX.collect])||function(e){const t=e.h;return!!Array.isArray(t)&&t.some((e=>e.t===o.Re.consent&&"no"===e.co))}(e))if(t){const[o,r]=await(0,a.K)(!0,["browser.name","browser.version"]);!function(e,t){return!!e&&!!t&&!!p[e.toLowerCase()]&&parseInt(t,10)<=p[e.toLowerCase()]}(o,r)?function(e,t){navigator.sendBeacon(e,JSON.stringify(t))}(n,e):m(e,!t,n)}else if(window.fetch){let t={};if(!d)try{d=new AbortController,t={signal:d.signal}}catch(e){i.vU("[Hit] Error creating AbortController",e)}u={args:e,endpoint:n},await fetch(n,{...t,mode:"no-cors",method:"POST",headers:{"Content-type":"text/plain"},cache:"no-store",body:JSON.stringify(e)}),u=null}else u={args:e,endpoint:n},m(e,!t,n);else{if(0===y.length){const e=()=>{y.forEach((e=>{g(e.args,e.sync,e.endpoint)})),y=[]};window.addEventListener(`abtasty_${r.A.Name.consentValid}`,(t=>{const{detail:n}=t;n&&n.consentFor.includes(c.RX.collect)&&e()}))}y.push({args:e,sync:t,endpoint:n})}}function m(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2?arguments[2]:void 0;try{const o=new XMLHttpRequest;o.open("POST",n,t),o.setRequestHeader("Content-type","text/plain"),o.send(JSON.stringify(e)),o.onload=function(){u=null},d||(d=o)}catch(e){console.error(`${e} - Raw UserAgent: ${navigator.userAgent} - Parsed UserAgent: ${JSON.stringify((0,a.r)())}`)}}function f(e,t,n){i.Kp(`AB Tasty warning: '${e}' hit cannot be sent, format is not correct.`,...t,n)}var h=n(3827),b=n(5528),w=n(4284),v=n(2247),O=n(6541),S=n(4874),T=n(2244);function D(e){const t=function(e){const t=(0,w.wy)().toleranceParams;if(!t||!t.length||!e)return e;try{const n=e,o=e.split("?")[0],r=(0,h.UO)(e);return 0===Object.keys(r).length?n:(t.forEach((e=>{delete r[e]})),`${o}?${Object.keys(r).map((e=>void 0===r[e]?"":`${e}=${r[e]}`)).join("&")}`)}catch(t){return i.Kp(`[ABTasty]: Sensitive data restriction can't be applied: ${t}`),e}}(e);return function(e){const t=(0,w.wy)().toleranceRegex,n=e;if(!t)return n;try{const e=new RegExp(t).exec(n);if(e)return e.shift(),e.join("")}catch(e){i.Kp(`[ABTasty] The sensitive data regexp "${t}" can't be applied: ${e}`)}return n}(t)}function E(e){const{campaignHistory:t,visitorId:n,currentSessionTimestamp:r,numberOfSessions:i}=e,a=new b.w;let s=a.getReferrer();!s&&a.isItNewSession()&&(s=document.referrer);const c={c:t?.()||{},cid:(0,w.Nn)(),vid:n,dr:encodeURIComponent(D(s)),pt:encodeURIComponent(document.title),de:encodeURIComponent(document.characterSet),dl:encodeURIComponent(D(document.location.href)),cst:r,sn:i,lv:(0,v.aO)()};return(0,O.GD)()&&(c.qa=!0),c.vp=`${window.innerWidth}x${window.innerHeight}`,c.sr=`${screen.width}x${screen.height}`,c.sd=encodeURIComponent(`${screen.colorDepth}-bits`),c.ul=navigator.language||navigator.userLanguage,c.je=navigator.javaEnabled(),c.qa=(0,O.GD)(),function(e,t){const n={0:`viewport, ${t.vp}`,1:`screenRes, ${t.sr}`};if(n[0].includes("-")||n[1].includes("-")){const t=JSON.parse(S.Jo.getItem(S.vR,T.oZ)||"{}");t.negativeResolution||(t.negativeResolution=!0,Se(e)(o.Re.troubleshooting,{cv:n}),S.Jo.setItem(S.vR,T.oZ,JSON.stringify(t)))}}(e,c),c}let q,R=[];const A=e=>t=>{R.push(t),function(e){q&&"number"==typeof q&&clearTimeout(q);q=setTimeout((()=>{C(e)()}),500)}(e),JSON.stringify(R).length>=40960&&C(e)()};const C=e=>function(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!R||!R.length)return void(t&&d&&(d.abort(),(0,s.k)(u)||g(u.args,!0,u.endpoint)));R.map((e=>{e.qt=Date.now()-e.qt}));g({...E(e),tv:"latest",tch:`${"06c5a6e8".substring(0,5)}`,h:R,t:o.Re.batch},t),R=[]};var I=n(8390);const k={t:{label:"Hit Type",required:!0,types:[{type:o.OD.String}],allowedValues:Object.values(o.Re)},ib:{label:"Is a bot",required:!1,types:[{type:o.OD.Boolean}]}};function $(e,t){const{type:n,condition:r,model:i,allowEmpty:a=!0}=t,c=typeof e;switch(n){case o.OD.Boolean:return c===n||["number","string"].some((e=>e===c))&&[0,1,"true","false","0","1"].includes(e);case o.OD.IntegerArray:return Array.isArray(e)&&(!a&&e.length>0||a)&&e.every((e=>$(e,{type:o.OD.Integer,condition:r})));case o.OD.Integer:return"boolean"!==c&&!isNaN(e)&&Number(e)%1==0&&(!r||r&&r(Number(e)));case o.OD.FloatArray:return Array.isArray(e)&&(!a&&e.length>0||a)&&e.every((e=>$(e,{type:o.OD.Float,condition:r})));case o.OD.Float:return"boolean"!==c&&!isNaN(e)&&(!r||r&&r(Number(e)));case o.OD.ArrayArray:return Array.isArray(e)&&(!a&&e.length>0||a)&&e.every((e=>$(e,{type:o.OD.Array,condition:r})));case o.OD.Array:return Array.isArray(e)&&(!a&&e.length>0||a);case o.OD.ObjectArray:return Array.isArray(e)&&(!a&&e.length>0||a)&&e.every((e=>$(e,{type:o.OD.Object,model:i,condition:r,allowEmpty:a})));case o.OD.Object:return c===n&&!Array.isArray(e)&&(!(!a&&Object.keys(e).length<=0)&&(!i||Object.entries(e).every((e=>{let[t,n]=e;return $(t,i.key)&&$(n,i.value)}))));case o.OD.StringArray:return Array.isArray(e)&&(!a&&e.length>0||a)&&e.every((e=>$(e,{type:o.OD.String,condition:r})));case o.OD.String:return(c===n||["number","boolean"].some((e=>e===c))&&!isNaN(e))&&!(0,s.k)(e)&&(!a&&(""+e).length>0||a)&&(!r||r&&r(""+e));default:return c===n}}function N(e,t){const n={...k,...t};return Object.keys(n).reduce(((t,o)=>{const r=n[o];if(r){const{label:n,required:i,types:a,maxLength:c,allowedValues:l}=r,p=e[o];if(i&&((0,s.k)(p)||(0,I.x)(p)))t.push(`Argument '${o}' (${n}) is missing`);else if(void 0!==p&&a&&a.length>0){const r=a.map((t=>{const r=e[o],i=typeof r;if(!$(r,t))return`Argument '${o}' (${n}) is of wrong type ${i} (expected ${JSON.stringify(t)})`;switch(t.type.toLowerCase()){case"boolean":e[o]=!["0","false",0,!1].includes(r)&&!!r;break;case"integer":case"float":e[o]=Number(r);break;case"string":!["number","boolean"].some((e=>e===i))||isNaN(r)||void 0===r||(0,s.k)(r)||(e[o]=""+r)}}));r.every((e=>e&&e.length>0))&&r.forEach((e=>t.push(e)))}if(null!=p&&l&&-1===l.indexOf(p)){const e=l.map((e=>`"${e}"`)).join(", ");t.push(`Argument '${o}' (${n}) value is not allowed (expected one of ${e}, received ${p})`)}null!=p&&c&&p.length>c&&t.push(`Argument '${o}' (${n}) is too long (length of ${p.length}, expected ${c})`)}return t}),[])}var j=n(4692);const P=e=>t=>{const n={};(0,j.FU)()&&!(0,s.k)((0,j.QX)().previousLogicalView)&&(n.pea="INVALIDATE",n.pev=(0,j.QX)().previousLogicalView);const r={...t,...n,t:o.Re.pageview},i=function(e){return N(e,{pea:{label:"PostEdit Action",required:!1,types:[{type:o.OD.String,allowEmpty:!1}]},pev:{label:"PostEdit LogicalView",required:!1,types:[{type:o.OD.String,allowEmpty:!1}]}})}(r);i.length?f(o.Re.pageview,i,r):A(e)(r)};const L=e=>t=>{const n=window.ABTasty.results,r=t.caid&&n&&n[t.caid]&&Object.keys(n[t.caid].targetings.qaParameters).length>0||(0,O.GD)(),i={...t,t:o.Re.campaign};r&&(i.qa=!0),i.qa=r;const a=function(e){return N(e,{caid:{label:"Campaign ID",required:!0,types:[{type:o.OD.String,allowEmpty:!1}]},vaid:{label:"Variation ID",required:!0,types:[{type:o.OD.String,allowEmpty:!1}]}})}(i);a.length?f(o.Re.campaign,a,i):A(e)(i)};var x=n(763),H=n(7787);const _=(e,t)=>e.map((e=>{for(const n in e){if("qt"===n)continue;const o=e[n];(0,s.k)(t[n])||t[n]!=o||delete e[n]}return e})).filter((e=>{const t=Object.keys(e);return!(1===t.length&&"qt"===t[0])}));const B=e=>t=>{const n={...t,t:o.Re.segment},r=function(e){return N(e,{s:{label:"Segments",required:!0,types:[{type:o.OD.Object,model:{key:{type:o.OD.String},value:{type:o.OD.String}}}]},pa:{label:"Provider",required:!1,types:[{type:o.OD.String,required:!1}]}})}(n);r.length?f(o.Re.segment,r,n):(Array.isArray(n.s)?n.s.forEach((n=>{const r={...t,t:o.Re.segment};r.s=n,A(e)(r)})):A(e)(n),function(e){if(!e.s&&"object"!=typeof e.s)return;if(e.pa&&"string"!=typeof e.pa)return;const t=new x.T;let n=t.getSegments()||[];const o=e.pa?{...e.s,pa:e.pa}:e.s;n=_(n,o),t.setSegments([...n,{...o,qt:e.qt}])}(t),(e=>{if(!e.s&&"object"!=typeof e.s)return;if(e.pa&&"string"!=typeof e.pa)return;let t=JSON.parse(S.Jo.getItem(S.vR,H.I.CUSTOM_SEGMENTS))||[];const n=e.pa?{...e.s,pa:e.pa}:e.s;t=_(t,n),S.Jo.setItem(S.vR,H.I.CUSTOM_SEGMENTS,JSON.stringify([...t,{...n,qt:e.qt}]))})(t))};n(1155);const M=e=>t=>{const n={...t,t:o.Re.event},r=function(e){return N(e,{ec:{label:"Event Category",required:!0,types:[{type:o.OD.String,allowEmpty:!1}]},ea:{label:"Event Action",required:!0,types:[{type:o.OD.String,allowEmpty:!1}]},el:{label:"Event Label",required:!1,types:[{type:o.OD.String,allowEmpty:!0}]},ev:{label:"Event Value",required:!1,types:[{type:o.OD.Integer,condition:e=>e>=0}]}})}(n);r.length?f(o.Re.event,r,n):A(e)(n)};const V=e=>t=>{const n={...t,t:o.Re.transaction},r=function(e){return N(e,{tid:{label:"Transaction ID",required:!0,types:[{type:o.OD.String,allowEmpty:!1}]},ta:{label:"Transaction Affiliation",required:!0,types:[{type:o.OD.String,allowEmpty:!1}]},tr:{label:"Transaction Revenue",required:!1,types:[{type:o.OD.Float,condition:e=>e>=0}]},ts:{label:"Transaction Shipping",required:!1,types:[{type:o.OD.Float,condition:e=>e>=0}]},tt:{label:"Transaction Tax",required:!1,types:[{type:o.OD.Float,condition:e=>e>=0}]},tc:{label:"Transaction Currency",required:!1,types:[{type:o.OD.String,allowEmpty:!0}],maxLength:10},tcc:{label:"Transaction Coupon Code",required:!1,types:[{type:o.OD.String,allowEmpty:!0}]},pm:{label:"Transaction Payment Method",required:!1,types:[{type:o.OD.String,allowEmpty:!0}]},sm:{label:"Transaction Shipping Method",required:!1,types:[{type:o.OD.String,allowEmpty:!0}]},icn:{label:"Transaction Number of Items",required:!1,types:[{type:o.OD.Integer,condition:e=>e>=0}]}})}(n);r.length?f(o.Re.transaction,r,n):(A(e)(n),function(e){const t={id:e.tid||e.id,value:e.tr,shipping:e.sm,payment:e.pm,coupon:e.tcc,tax:e.tt,shipping_cost:e.ts,currency:e.tc,name:e.name,quantity:e.quantity,affiliation:e.ta,time:e.time||(new Date).getTime()};(new x.T).addTransaction(t)}(t))};const U=e=>t=>{const n={...t,t:o.Re.item},r=function(e){return N(e,{tid:{label:"Transaction ID",required:!0,types:[{type:o.OD.String,allowEmpty:!1}]},in:{label:"Item Name",required:!0,types:[{type:o.OD.String,allowEmpty:!1}]},ip:{label:"Item Price",required:!1,types:[{type:"float"}]},iq:{label:"Item Quantity",required:!1,types:[{type:"integer"}]},ic:{label:"Item Code",required:!1,types:[{type:o.OD.String,allowEmpty:!0}],maxLength:500},iv:{label:"Item Category",required:!1,types:[{type:o.OD.String,allowEmpty:!0}],maxLength:500}})}(n);r.length?f(o.Re.item,r,n):(A(e)(n),function(e){const t={transactionId:e.tid,name:e.in,quantity:e.iq,revenue:e.iq&&e.ip?e.iq*e.ip:0,local_revenue:e.iq&&e.ip?e.iq*e.ip:0,sku:e.ic,category:e.iv,time:(new Date).getTime()};(new x.T).addItem(t)}(t))};const J={click:"click",over:"over",scroll:"scroll"};var X=n(7947),F=n(7649),Y=n(1943);const K={[Y.xz]:"==",[Y.DC]:"=@",[Y.o1]:"=~"};const G=e=>t=>{let{qt:n,...r}=t;const{waitForConsent:i}=(0,w.wy)(),a=(e=>{let{mode:t,data:n}=e;switch(t){case X.n8.customJs:return"custom";case X.n8.didomi:return"string"==typeof n&&n?n:F.Y;case X.n8.specificCookie:if("object"==typeof n){const{name:e,value:t,condition:o}=n;return`${e}${o&&K[o]?K[o]:K[Y.xz]}${t}`}default:return""}})(i),s=(e=>{let{campaignRestrictions:t}=e;return Object.keys(t).length>0&&0===Object.values(t).filter((e=>e)).length?o.YX.strict:o.YX.permissive})(i),c=(e=>{let{mode:t}=e;return Object.keys(o.aB).includes(t)?o.aB[t]:void 0})(i),l=(e=>{let{campaignRestrictions:t}=e;return Object.keys(t).filter((e=>t[e])).reduce(((e,t)=>e+X.s_[t]),0)})(i),p=Date.now(),u={...r,qt:p-n,me:a,om:s,sco:`${l}`,t:o.Re.consent,ts:p};c&&(u.op=c);const d=function(e){return N(e,{co:{label:"Consent",required:!0,types:[{type:o.OD.Boolean,allowEmpty:!1}]}})}(u),y={...E(e),tv:"latest",tch:`${"06c5a6e8".substring(0,5)}`,h:[u],t:o.Re.batch};d.length?f(o.Re.consent,d,u):g(y)},Q={ps:{label:"Product SKU",required:!0,types:[{type:o.OD.String,allowEmpty:!1}]},pn:{label:"Product name",required:!1,types:[{type:o.OD.String,allowEmpty:!1}]},pq:{label:"Product quantity",required:!0,types:[{type:o.OD.Integer,allowEmpty:!1}]},pp:{label:"Product price",required:!0,types:[{type:o.OD.Float,allowEmpty:!1}]},pcid:{label:"Product cart Id",required:!0,types:[{type:o.OD.String,allowEmpty:!1}]}},W={pq:{label:"Product quantity",required:!0,types:[{type:o.OD.Integer,allowEmpty:!1}]},pp:{label:"Product price",required:!0,types:[{type:o.OD.Float,allowEmpty:!1}]},pcid:{label:"Product cart Id",required:!0,types:[{type:o.OD.String,allowEmpty:!1}]}},z={pp:{label:"Product price",required:!1,types:[{type:o.OD.Float,allowEmpty:!1}]},ps:{label:"Product SKU",required:!0,types:[{type:o.OD.String,allowEmpty:!1}]},pn:{label:"Product name",required:!1,types:[{type:o.OD.String,allowEmpty:!1}]}},Z=[o.s_.CART_ITEM,o.s_.CART_TOTAL,o.s_.VIEW];const ee=e=>t=>{const n={...t,t:o.Re.product},r=function(e){return N(e,{pit:{label:"Product interaction type",required:!0,types:[{type:"string",allowEmpty:!1,value:Z,condition:e=>Z.some((t=>t===e))}]},...e.pit===o.s_.CART_ITEM?Q:{},...e.pit===o.s_.CART_TOTAL?W:{},...e.pit===o.s_.VIEW?z:{}})}(n);r.length>0?f(o.Re.product,r,n):A(e)(n)};function te(e){if(!(e instanceof Element))return null;const t=[];let n=e;for(;n&&n.nodeType===Node.ELEMENT_NODE;){let e=n.nodeName.toLowerCase();if(n.id){e+="#"+n.id,t.unshift(e);break}{let t=n,o=1;for(;t=t.previousElementSibling;)t.nodeName.toLowerCase()===e&&o++;o>1&&(e+=":nth-of-type("+o+")")}t.unshift(e),n=n.parentNode}return t.join(" > ")}const ne=Object.keys(J);function oe(e,t){const n={};if(e&&e!==document){const o=t.elementsMap.get(e);n.tecp=encodeURIComponent(te(e)),e.id&&(n.teid=e.id),o&&o.enterTime&&(n.otbe=Date.now()-o.enterTime),n.tc=e.getAttribute("class")||"";const{left:r,top:i,width:a,height:s}=function(e){const t=e.getBoundingClientRect(),n=document.body,o=document.documentElement,r=window.pageYOffset||o.scrollTop||n.scrollTop,i=window.pageXOffset||o.scrollLeft||n.scrollLeft,a=o.clientTop||n.clientTop||0,s=o.clientLeft||n.clientLeft||0,c=t.top+r-a,l=t.left+i-s;return{top:Math.round(c),left:Math.round(l),width:Math.round(t.width),height:Math.round(t.height)}}(e);n.tes=`${a}x${s}`,n.tep=`${r}x${i}`,n.tcec=e.childElementCount||0,n.tet=e.tagName}return n}const re=e=>(t,n,r)=>{const{pageX:i,pageY:a}=n.mouse,s=void 0!==r.pageX?`${r.pageX}x${r.pageY}`:`${i}x${a}`,c={...oe(r.target,n),esp:qe(),cp:s,...t,t:o.Re.visitorevent},l=function(e){return N(e,{et:{label:"Event Type",required:!0,types:[{type:o.OD.String}],allowedValues:ne}})}(c);l.length?f(o.Re.visitorevent,l,c):A(e)(c)};const ie=e=>t=>{const n={...t,t:o.Re.nps},r=function(e){return N(e,{ns:{label:"The NPS score ranging from -100 to 100",required:!0,types:[{type:o.OD.Integer}]},nf:{label:"The NPS feedbacks from visitors",required:!1,types:[{type:o.OD.String,allowEmpty:!0}]},caid:{label:"Campaign ID",required:!1,types:[{type:o.OD.String,allowEmpty:!0}]},vaid:{label:"Variation ID",required:!1,types:[{type:o.OD.String,allowEmpty:!0}]}})}(n);r.length?f(o.Re.nps,r,n):A(e)(n)};const ae=e=>t=>{const n={...E(e),...t,t:o.Re.datalayer},r=function(e){return N(e,{dlr:{label:"Datalayer content",required:!0,types:[{type:o.OD.Object},{type:o.OD.Array}]}})}(n);r.length?f(o.Re.datalayer,r,n):g(n,null,"https://ariane.abtasty.com/datalayer")},se=e=>t=>{if(window.Cypress)return Promise.resolve();const n={...E(e),...t,t:o.Re.usage},r=N(n,{cv:{label:"Custom values",required:!0,types:[{type:o.OD.Object}]}});return r.length?(f(o.Re.usage,r,n),Promise.resolve()):g(n,!1,"https://ariane.abtasty.com/analytics")};var ce=n(9572),le=n(3492);const pe=e=>t=>{(0,le.kG)(e)({deprecate:"window._abtasty.push()",el:`push-${t}`,type:"function"})};const ue=e=>function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:window._abtasty).forEach((t=>{if(Array.isArray(t)&&Object.keys(t).length)switch(t[0].toString().toLowerCase()){case"transaction":(e=>t=>{const n=t[1].toString(),r={tid:t[2],tr:(0,s.k)(t[3])?0:parseFloat(t[3].toString().replace(",",".")),icn:Number(t[4])||0,ta:n};Se(e)(o.Re.transaction,r)})(e)(t),pe(e)("transaction");break;case"cv":(e=>t=>{const n=t[1]||"",r=t[2]||"";if("string"!=typeof n||""===n||("string"!=typeof r||""===r)&&"number"!=typeof r)return void i.Kp("CV informations are not valid, please, check that your second and third argument are not empty strings");const a={category:ce.d.CV,action:n,value:"string"==typeof r?r.substring(0,65):r,time:Date.now()};(new x.T).addCustomVariable(a);const s={[n]:"string"==typeof r?r.substring(0,65):r};Se(e)(o.Re.segment,{s})})(e)(t),pe(e)("cv");break;case"eco":(e=>t=>{const n=t[1]||"",r=t[2]||"";if("string"!=typeof n||""===n||("string"!=typeof r||""===r)&&"number"!=typeof r)return void i.Kp("ECO informations are not valid, please, check that your second and third argument are not empty strings");const a={action:n,category:ce.d.ECO,value:"string"==typeof r?r.substring(0,65):r,time:Date.now()};(new x.T).addCustomVariable(a);const s={ec:"eco",ea:n,el:r};Se(e)(o.Re.event,s)})(e)(t),pe(e)("eco");break;default:const n="Wrong format to push (nothing was sent)";i.vU(n,t)}else{const e="Please give at least one parameter for the/these arrays !";i.vU(e,t)}})),window._abtasty=[],function(e){window._abtasty.push=function(){return ue(e)([arguments[0]]),Array.prototype.push.apply(this,arguments)}}(e)};var de=n(1438),ye=n(7352),ge=n(7196),me=n(2622);const fe=e=>t=>{if(window.Cypress)return Promise.resolve();const n={cv:t.cv,t:o.Re.troubleshooting,cid:(0,w.Nn)(),vid:e.visitorId},r=N(n,{cv:{label:"Custom values",required:!0,types:[{type:o.OD.Object}]}});return r.length?(f(o.Re.troubleshooting,r,n),Promise.resolve()):g(n,!1,"https://ariane.abtasty.com/troubleshooting")},he="Action Tracking",be={elementsMap:new Map,mouse:{pageX:0,pageY:0}};let we=[];const ve=e=>t=>{!function(e){e.pageX&&(be.mouse={pageX:e.pageX,pageY:e.pageY})}(t),Se(e)(o.Re.visitorevent,{et:J.click},t)},Oe=(e,t,o,r,i)=>{if(Promise.resolve().then(n.bind(n,5717)).then((n=>{let{recheckTargetingByHit:o}=n;o(e,t)})),window.frames.ABTastyQaAssistant){const n={...t,qt:o,event:r,path:i,name:"ABTasty_event",type:e.toUpperCase()};window.postMessage(n,document.location.origin),window.frames.ABTastyQaAssistant.postMessage(n,"*")}ge.d.getInstance().emit(e.toUpperCase(),t,o)},Se=e=>function(t,n){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0;const a=n.qt||Date.now();Oe(t,n,a,r,i),(e=>({[o.Re.consent]:G(e),[o.Re.campaign]:L(e),[o.Re.event]:M(e),[o.Re.item]:U(e),[o.Re.pageview]:P(e),[o.Re.segment]:B(e),[o.Re.transaction]:V(e),[o.Re.visitorevent]:re(e),[o.Re.nps]:ie(e),[o.Re.datalayer]:ae(e),[o.Re.product]:ee(e),[o.Re.usage]:se(e),[o.Re.troubleshooting]:fe(e)}))(e)[t.toUpperCase()]({...n,qt:a},{...be},r)};function Te(e){let[t,n]=e;document.removeEventListener(t,n)}function De(e){let[t,n]=e;document.addEventListener(t,n,!0)}const Ee=e=>(t,n,r,i,a)=>{if(t&&void 0!==r?0===Object.keys(e.getCampaigns()).length:e.hasSeenCampaign(r))return;const s={name:t,value:0,time:a||Date.now()};(new x.T).addActionTracking(s);const c=te(i),l=e.getCampaign(r),p=l?l.variationID:null,u={campaignHistory:()=>e.getCampaignHistory(),visitorId:e.getVisitorId(),currentSessionTimestamp:e.getCurrentSessionTimestamp(),numberOfSessions:e.getNumberOfSessions()};null!=r&&null!=l&&null!=p?Se(u)(o.Re.event,{ec:he,ea:t,caid:r.toString(),vaid:p.toString(),qt:a},void 0,c):Se(u)(o.Re.event,{ec:he,ea:t,qt:a},void 0,c)};function qe(){const e=100*(document.body.scrollTop||document.documentElement.scrollTop)/(Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)-window.innerHeight);return Math.round(e)}function Re(e){we.forEach(Te),we=[["click",ve(e)]],we.forEach(De)}const Ae=e=>{const t={campaignHistory:()=>e.getCampaignHistory(),visitorId:e.getVisitorId(),currentSessionTimestamp:e.getCurrentSessionTimestamp(),numberOfSessions:e.getNumberOfSessions()};(e=>{if(window.abtasty){const t=window.abtasty.send;window.abtasty.send=(n,o)=>{const r={campaignHistory:()=>e.getCampaignHistory(),visitorId:e.getVisitorId(),currentSessionTimestamp:e.getCurrentSessionTimestamp(),numberOfSessions:e.getNumberOfSessions()};Se(r)(n,o),t&&t(n,o)}}else window.abtasty={send:()=>{const t={campaignHistory:()=>e.getCampaignHistory(),visitorId:e.getVisitorId(),currentSessionTimestamp:e.getCurrentSessionTimestamp(),numberOfSessions:e.getNumberOfSessions()};Se(t)}};if("function"==typeof window.ABTastyClickTracking){const t=window.ABTastyClickTracking;window.ABTastyClickTracking=(n,o,r)=>{Ee(e)(n,o,r,null),t(n,o,r)}}else window.ABTastyClickTracking=Ee(e);if("function"==typeof window.ABTastyEvent){const t=window.ABTastyEvent;window.ABTastyEvent=(n,o,r)=>{Ee(e)(n,o,r,null),t(n,o,r)}}else window.ABTastyEvent=Ee(e)})(e),function(e){window._abtasty=window._abtasty||[],ue(e)(window._abtasty)}(t),function(e){const t=(0,de.s)()?"pagehide":"beforeunload";window.addEventListener(t,(()=>(C(e)(!0),null)))}(t),me.j.getCollectHit().forEach((e=>{Se(t)(e.type,{qt:e.time,...e.args},void 0,void 0)})),me.j.getEventTracking().forEach((t=>{Ee(e)(t.name,t.data,t.campaignId,void 0,t.time)})),(new ye.C).dispatchCustomEvent(r.A.Name.analyticsLoaded)}}}]);