(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3223],{72779:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var a=i.apply(null,n);a&&e.push(a)}}else if("object"===o){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var u in n)r.call(n,u)&&n[u]&&e.push(u)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},85978:function(e,t,n){var r;!function(){"use strict";var i=!("undefined"===typeof window||!window.document||!window.document.createElement),o={canUseDOM:i,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:i&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:i&&!!window.screen};void 0===(r=function(){return o}.call(t,n,t,e))||(e.exports=r)}()},93321:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(25237)),o=r(n(59850)),a=()=>null;t.default=function(e,t={on:[],loading:a}){return(0,o.default)({on:t.on,onBefore:e,compatibleMode:t.compatibleMode,wrapperProps:Object.assign({},t.wrapperProps)})((0,i.default)(e,{loading:t.loading||a,ssr:!0}))}},59850:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t},a=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(t){o(t)}}function u(e){try{c(r.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}c((r=r.apply(e,t||[])).next())}))},u=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=n(52322),d=o(n(2784)),l=c(n(28316)),f="undefined"!==typeof window,p={once:!0,capture:!0,passive:!0},v=({disableFallback:e=!1,isInputPendingFallbackValue:t=!0,on:n=[],onBefore:r,whenInputPending:i=!1,wrapperProps:o,compatibleMode:c})=>f=>{const v=v=>{var{forceHydration:m=!1}=v,h=u(v,["forceHydration"]);const w=(0,d.useRef)(null),b=(0,d.useRef)([]),[y,g]=(0,d.useState)((()=>{const e=i&&!(()=>{var e,n;const r=null===(n=null===(e=null===navigator||void 0===navigator?void 0:navigator.scheduling)||void 0===e?void 0:e.isInputPending)||void 0===n?void 0:n.call(e);return null!==r&&void 0!==r?r:t})();return(e||m)&&!r})()),x=()=>{b.current.forEach((e=>e())),b.current=[]},O=()=>a(void 0,void 0,void 0,(function*(){if(x(),y)return;let e=null;r&&(e=(yield r()).default),g(!0);const t=w.current;if(c||!e);else if(t){const n=t.hasChildNodes()?"hydrate":"render";l.default[n](d.default.createElement(e,h),t)}})),_=(e=2e3)=>{if(e<=0)return;const t=setTimeout(O,e);b.current.push((()=>clearTimeout(t)))},j=(e,t)=>{switch(e){case"delay":_(t);break;case"visible":((e=Function.prototype)=>{if(!("IntersectionObserver"in window))return void O();if(!w.current)return void O();const t=e(),n=new IntersectionObserver((([e])=>{e.isIntersecting&&e.intersectionRatio>0&&O()}),t);b.current.push((()=>{n&&n.disconnect()})),n.observe(w.current)})(t);break;case"idle":(()=>{if(!("requestIdleCallback"in window))return void _();const e=requestIdleCallback((()=>requestAnimationFrame((()=>O()))),{timeout:500});"cancelIdleCallback"in window&&b.current.push((()=>{cancelIdleCallback(e)}))})();break;default:((e,t=(()=>w.current))=>{const n=t();null===n||void 0===n||n.addEventListener(e,O,p),b.current.push((()=>{n&&n.removeEventListener(e,O,p)}))})(e,t)}};return(0,d.useLayoutEffect)((()=>{var t;if(y)return;if(m)return void O();!!!(null===(t=w.current)||void 0===t?void 0:t.getAttribute("data-hydration-on-demand"))&&!e&&O()}),[m]),(0,d.useEffect)((()=>{if(!y)return n.forEach((e=>Array.isArray(e)?j(...e):j(e))),x}),[]),y&&y&&c?(0,s.jsx)("section",Object.assign({},o,{children:(0,s.jsx)(f,Object.assign({},h))})):(0,s.jsx)("section",Object.assign({ref:w,dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0},o))};return v.displayName=`withHydrationOnDemand(${(e=>e.displayName||e.name||"Component")(f)})`,v};t.default=(e={})=>f?v(e):(({wrapperProps:e})=>t=>n=>{var r=u(n,[]);return(0,s.jsx)("section",Object.assign({"data-hydration-on-demand":!0},e,{children:(0,s.jsx)(t,Object.assign({},r))}))})(e)},2883:function(e,t,n){"use strict";var r=n(34590),i=n(71600);t.Z=void 0;var o=i(n(73408)),a=i(n(82841)),u=i(n(91461)),c=i(n(43681)),s=i(n(77028)),d=i(n(24923)),l=r(n(2784)),f=i(n(85978)).default.canUseDOM,p={once:!0,capture:!0,passive:!0},v=function(e){return function(t){var n=t.wrapperProps,r=(0,d.default)(t,["wrapperProps"]);return l.default.createElement("section",(0,s.default)({"data-hydration-on-demand":!0},n),l.default.createElement(e,r))}},m=function(e){var t=e.disableFallback,n=void 0!==t&&t,r=e.isInputPendingFallbackValue,i=void 0===r||r,f=e.on,v=void 0===f?[]:f,m=e.onBefore,h=e.whenInputPending,w=void 0!==h&&h;return function(e){var t=function(t){var r=t.forceHydration,f=void 0!==r&&r,h=t.wrapperProps,b=(0,d.default)(t,["forceHydration","wrapperProps"]),y=(0,l.useRef)(null),g=(0,l.useRef)([]),x=(0,l.useState)(function(){var e=w&&!function(){var e,t,n,r=null===(e=navigator)||void 0===e||null===(t=e.scheduling)||void 0===t||null===(n=t.isInputPending)||void 0===n?void 0:n.call(t);return null!==r&&void 0!==r?r:i}();return(e||f)&&!m}()),O=(0,c.default)(x,2),_=O[0],j=O[1],k=function(){g.current.forEach((function(e){return e()})),g.current=[]},P=function(){var e=(0,u.default)(a.default.mark((function e(){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(k(),!_){e.next=3;break}return e.abrupt("return");case 3:if(!m){e.next=6;break}return e.next=6,m();case 6:j(!0);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2e3;if(!(e<=0)){var t=setTimeout(P,e);g.current.push((function(){return clearTimeout(t)}))}},I=function(e,t){switch(e){case"delay":E(t);break;case"visible":!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Function.prototype;if("IntersectionObserver"in window){var t=e(),n=new IntersectionObserver((function(e){var t=(0,c.default)(e,1)[0];t.isIntersecting&&t.intersectionRatio>0&&P()}),t);g.current.push((function(){n&&n.disconnect()})),n.observe(y.current)}else P()}(t);break;case"idle":!function(){if("requestIdleCallback"in window){var e=requestIdleCallback((function(){return requestAnimationFrame((function(){return P()}))}),{timeout:500});"cancelIdleCallback"in window&&g.current.push((function(){cancelIdleCallback(e)}))}else E()}();break;default:!function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return y.current})();t.addEventListener(e,P,p),g.current.push((function(){t&&t.removeEventListener(e,P,p)}))}(e,t)}};return(0,l.useLayoutEffect)((function(){_||(f||!!!y.current.getAttribute("data-hydration-on-demand")&&!n)&&P()}),[f]),(0,l.useEffect)((function(){if(!_)return v.forEach((function(e){return Array.isArray(e)?I.apply(void 0,(0,o.default)(e)):I(e)})),k}),[]),_?l.default.createElement("section",h,l.default.createElement(e,b)):l.default.createElement("section",(0,s.default)({ref:y,dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0},h))};return t.displayName="withHydrationOnDemand(".concat(function(e){return e.displayName||e.name||"Component"}(e),")"),t}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return f?m(e):v};t.Z=h},34590:function(e,t,n){var r=n(67425).default;function i(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(i=function(e){return e?n:t})(e)}e.exports=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var n=i(t);if(n&&n.has(e))return n.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var c=a?Object.getOwnPropertyDescriptor(e,u):null;c&&(c.get||c.set)?Object.defineProperty(o,u,c):o[u]=e[u]}return o.default=e,n&&n.set(e,o),o},e.exports.__esModule=!0,e.exports.default=e.exports},16091:function(e,t,n){"use strict";var r=n(43867),i=n(79200),o=n(33286),a=n(25186);t.Z=function(e,t,n){e=(0,a.Z)(e),t=(0,i.Z)(t);var u=e.length,c=n=void 0===n?u:(0,r.Z)((0,o.Z)(n),0,u);return(n-=t.length)>=0&&e.slice(n,c)==t}},96664:function(e){"use strict";e.exports=JSON.parse('{"mq-sm":{"up":"@media (min-width: 360px)","down":"@media (max-width: 359.98px)"},"mq-md":{"up":"@media (min-width: 768px)","down":"@media (max-width: 767.98px)"},"mq-lg":{"up":"@media (min-width: 992px)","down":"@media (max-width: 991.98px)"},"mq-xl":{"up":"@media (min-width: 1200px)","down":"@media (max-width: 1199.98px)"},"mq-2xl":{"up":"@media (min-width: 1400px)","down":"@media (max-width: 1399.98px)"},"mq-3xl":{"up":"@media (min-width: 1920px)","down":"@media (max-width: 1919.98px)"},"mq-4xl":{"up":"@media (min-width: 2560px)","down":"@media (max-width: 2559.98px)"}}')}}]);