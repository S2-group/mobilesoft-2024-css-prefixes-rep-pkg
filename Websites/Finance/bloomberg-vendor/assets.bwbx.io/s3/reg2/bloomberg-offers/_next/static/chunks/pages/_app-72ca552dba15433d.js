(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6384:function(e,t,n){"use strict";function r(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var o,i=r(n(6808));t.Bp=void 0,(o=t.Bp||(t.Bp={})).DEVELOPMENT="development",o.TEST="test",o.BLUE="blue",o.GREEN="green",o.ORANGE="orange",o.PURPLE="purple",o.RED="red",o.YELLOW="yellow",o.SANDCASTLE="sandcastle",o.STAGING="staging",o.PRODUCTION="production";var a=[t.Bp.TEST,t.Bp.BLUE,t.Bp.GREEN,t.Bp.ORANGE,t.Bp.PURPLE,t.Bp.RED,t.Bp.YELLOW,t.Bp.SANDCASTLE,t.Bp.STAGING],c=t.Bp.PRODUCTION;var u=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(t){i(t)}}function c(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}u((r=r.apply(e,t||[])).next())}))},s=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(c){i=[6,c],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};function l(){var e=c;if(e===t.Bp.PRODUCTION)return"https://www.bloomberg.com/markets2/api";if(e===t.Bp.DEVELOPMENT||a.includes(e))return"https://origin.staging.bloomberg.com/markets2/api";throw{message:"Invalid environment from getEnvironment: "+e}}var f={getLocalCurrencyDetails:function(e){var t;return u(this,void 0,void 0,(function(){var n,r,o;return s(this,(function(i){switch(i.label){case 0:return[4,fetch(l()+"/local-currency?country="+e)];case 1:return 200===(n=i.sent()).status?[3,3]:(o={},r="Failure on local-currency call to shi-chang...",[4,n.json()]);case 2:throw o.message=r+(null===(t=i.sent())||void 0===t?void 0:t.message),o;case 3:return[2,n.json()]}}))}))}};var p={getObject:function(e,t){try{var n=localStorage.getItem(e);if(!n)return t;var r=JSON.parse(n);return!r.expiresAt||"number"!==typeof r.expiresAt||Date.now()>r.expiresAt?(localStorage.removeItem(e),t):r.value}catch(o){return t}},setObject:function(e,t,n){localStorage.setItem(e,JSON.stringify({value:t,expiresAt:n?Date.now()+60*n*1e3:864e13}))},removeObject:function(e){localStorage.removeItem(e)}},d=function(){return d=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},d.apply(this,arguments)},m=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(t){i(t)}}function c(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}u((r=r.apply(e,t||[])).next())}))},v=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(c){i=[6,c],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},h="_localCurrencyDetails",y={SGD:{prefix:"S$ ",fractionDigits:2},MYR:{prefix:"RM",fractionDigits:2}};function g(e,t){var n,r=new Promise((function(e,r){n=setTimeout((function(){return r({message:"Fetch took longer than "+t/1e3+" seconds"})}),t)}));return Promise.race([f.getLocalCurrencyDetails(e),r]).then((function(e){return clearTimeout(n),e}))}function b(e){if("number"===typeof e)return 0===e?"$0":0===function(e){return Math.floor(Number(e))===e?0:e.toString().split(".")[1].length}(e)?"$"+Math.floor(e):"$"+e.toFixed(2)}function w(e){var t=p.getObject(h);if(t){if(t.showUSD)return"USD "+b(e);var n="$"===t.symbol||"\u20ac"===t.symbol?"en-US":window.navigator.language,r=y[t.name];return r?""+r.prefix+Intl.NumberFormat(n,{style:"decimal",minimumFractionDigits:r.fractionDigits,maximumFractionDigits:r.fractionDigits}).format(e*t.ratio):Intl.NumberFormat(n,{style:"currency",currency:t.name}).format(e*t.ratio)}return b(e)}function O(){var e=p.getObject(h);return e?e.name:"USD"}t.xo=w,t.qE=function(e){if(!e)return"";var t=/\$\d+(\.\d{2})?/;return e.split(" ").map((function(e){if(e.indexOf("{{")>=0){var n=e.indexOf("{{"),r=e.indexOf("}}"),o=e.substring(n+3,r);return e.substring(0,n)+w(Number(o))+e.substring(r+2)}var i=e.match(t);if((null===i||void 0===i?void 0:i.index)||0===(null===i||void 0===i?void 0:i.index)){n=i.index;var a=i[0].length;return e.substring(0,n)+w(Number(e.substring(n+1,n+a)))+e.substring(n+a)}return e})).reduce((function(e,t){return e+" "+t}))},t.AE=function(e){c=e},t.TH=function(e,t){var n;return void 0===t&&(t=!1),m(this,void 0,void 0,(function(){var r,o,a;return v(this,(function(c){switch(c.label){case 0:try{r=JSON.parse(null===(n=i.default.get("geo_info"))||void 0===n?void 0:n.split("|")[0]).country}catch(u){r="US"}if(e&&t&&"US"!==r)return p.setObject(h,{showUSD:t},360),[2,!0];if(!r||"US"===r||!e)return p.removeObject(h),[2,!1];if((o=p.getObject(h))&&o.countryCode===r)return[3,5];c.label=1;case 1:return c.trys.push([1,3,,4]),[4,g(r,1e3)];case 2:return o=c.sent(),[3,4];case 3:return a=c.sent(),p.removeObject(h),console.error("Fetching local currency details failed.",null===a||void 0===a?void 0:a.message),[2,!1];case 4:p.setObject(h,d(d({},o),{countryCode:r}),360),c.label=5;case 5:return[2,!0]}}))}))},t.uB=b},6808:function(e,t,n){var r,o;!function(i){if(void 0===(o="function"===typeof(r=i)?r.call(t,n,t,e):r)||(e.exports=o),!0,e.exports=i(),!!0){var a=window.Cookies,c=window.Cookies=i();c.noConflict=function(){return window.Cookies=a,c}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(r){function o(){}function i(t,n,i){if("undefined"!==typeof document){"number"===typeof(i=e({path:"/"},o.defaults,i)).expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var a=JSON.stringify(n);/^[\{\[]/.test(a)&&(n=a)}catch(s){}n=r.write?r.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var c="";for(var u in i)i[u]&&(c+="; "+u,!0!==i[u]&&(c+="="+i[u].split(";")[0]));return document.cookie=t+"="+n+c}}function a(e,n){if("undefined"!==typeof document){for(var o={},i=document.cookie?document.cookie.split("; "):[],a=0;a<i.length;a++){var c=i[a].split("="),u=c.slice(1).join("=");n||'"'!==u.charAt(0)||(u=u.slice(1,-1));try{var s=t(c[0]);if(u=(r.read||r)(u,s)||t(u),n)try{u=JSON.parse(u)}catch(l){}if(o[s]=u,e===s)break}catch(l){}}return e?o[e]:o}}return o.set=i,o.get=function(e){return a(e,!1)},o.getJSON=function(e){return a(e,!0)},o.remove=function(t,n){i(t,"",e(n,{expires:-1}))},o.defaults={},o.withConverter=n,o}((function(){}))}))},8e3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var r=(0,n(2648).Z)(n(7294)).default.createContext({});t.AmpStateContext=r},9470:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery,a=void 0!==i&&i;return n||o&&a}},2717:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=l,t.default=void 0;var r=n(6495).Z,o=n(2648).Z,i=(0,n(1598).Z)(n(7294)),a=o(n(1585)),c=n(8e3),u=n(5850),s=n(9470);n(9475);function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function d(e,t){var n=t.inAmpMode;return e.reduce(f,[]).reverse().concat(l(n).reverse()).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0,a=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){a=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?i=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var u=0,s=p.length;u<s;u++){var l=p[u];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?i=!1:n.add(l);else{var f=o.props[l],d=r[l]||new Set;"name"===l&&a||!d.has(f)?(d.add(f),r[l]=d):i=!1}}}return i}}()).reverse().map((function(e,t){var o=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var a=r({},e.props||{});return a["data-href"]=a.href,a.href=void 0,a["data-optimized-fonts"]=!0,i.default.cloneElement(e,a)}return i.default.cloneElement(e,{key:o})}))}var m=function(e){var t=e.children,n=i.useContext(c.AmpStateContext),r=i.useContext(u.HeadManagerContext);return i.default.createElement(a.default,{reduceComponentsToState:d,headManager:r,inAmpMode:s.isInAmpMode(n)},t)};t.default=m,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1585:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.headManager,n=e.reduceComponentsToState;function c(){if(t&&t.mountedInstances){var o=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(o,e))}}if(o){var u;null==t||null==(u=t.mountedInstances)||u.add(e.children),c()}return i((function(){var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),function(){var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}})),i((function(){return t&&(t._pendingUpdate=c),function(){t&&(t._pendingUpdate=c)}})),a((function(){return t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),function(){t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)}})),null};var r=(0,n(1598).Z)(n(7294));var o=!1,i=o?function(){}:r.useLayoutEffect,a=o?function(){}:r.useEffect},1996:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(9499),o=n(7294),i=n(9008),a=n.n(i);n(6007);var c=n(6384),u=n(5893);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=["BWHaasGroteskWeb","BWHaasGrotesk-55Roman-Web","BWHaasGrotesk-75Bold-Web","BWHaasGrotesk-95Black-Web","BWHaasGrotesk-65Medium-Web"],p=["BWHaasGroteskWeb:*"],d=function(e){var t=e.loadOptimizely,n=void 0!==t&&t;return(0,u.jsxs)(a(),{children:[(0,u.jsx)("link",{href:"".concat("https://www.bloomberg.com","/subscriptions"),rel:"canonical"}),(0,u.jsx)("link",{rel:"icon",type:"image/png",href:"".concat("https://www.bloomberg.com","/favicon-black.png")}),(0,u.jsx)("link",{href:"".concat("https://assets.bwbx.io","/font-service/css/Bloomberg%20Logotypes-Medium/font-face.css"),rel:"stylesheet"}),(0,u.jsx)("link",{href:"".concat("https://assets.bwbx.io","/font-service/css/").concat(encodeURIComponent(f.join(",")),"/font-face.css"),rel:"stylesheet"}),(0,u.jsx)("link",{href:"".concat("https://assets.bwbx.io","/font-service/css/").concat(p.join("%7C"),"/styled-font-face.css"),rel:"stylesheet"}),(0,u.jsx)("script",{dangerouslySetInnerHTML:{__html:"(function(w,d,s,l,i) {\n                    w[l]=w[l]||[];\n                    w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n                    var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n                    j.async=true;\n                    j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;\n                    f.parentNode.insertBefore(j,f);\n                    })(window, document, 'script', 'dataLayer', 'GTM-MNTH5N');"}}),n&&(0,u.jsx)("script",{src:"https://cdn.optimizely.com/js/4368606971.js"})]})},m=function(e){var t=e.Component,n=e.pageProps,r=e.router;(0,o.useEffect)((function(){try{var e=document.getElementsByTagName("body")[0];n.theme!==e.getAttribute("data-theme")&&e.setAttribute("data-theme",n.theme)}catch(t){}}),[n]);var i,a=!((i=r.pathname).startsWith("/preview/lineup/modules/id/")||i.startsWith("/preview/lineup/page/graphics-paywall")||i.startsWith("/subscription-offer"));return(0,c.AE)("production"),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(d,{loadOptimizely:a}),(0,u.jsx)(t,l({pageData:n},n))]})}},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(1996)}])},6007:function(){},9008:function(e,t,n){e.exports=n(2717)},9499:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6840),t(9898)}));var n=e.O();_N_E=n}]);