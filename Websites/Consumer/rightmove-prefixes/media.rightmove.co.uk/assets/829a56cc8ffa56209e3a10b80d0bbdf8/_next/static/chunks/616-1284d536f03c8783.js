(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{73158:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)},a=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&a(t,e,n);return o(t,e),t},u=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=l(n(67294)),s=i(n(97241)),f=n(85268);t.default=function(e){var t=e.onInputChange,n=e.onInputBlur,a=e.onInputFocus,o=e.onSubmit,l=e.onResultSelect,i=e.suggestedInputs,d=e.placeholder,h=e.title,p=e.inputValue,m=e.className,v=e.extraRow,b=u(e,["onInputChange","onInputBlur","onInputFocus","onSubmit","onResultSelect","suggestedInputs","placeholder","title","inputValue","className","extraRow"]),_=c.useState(null!==p&&void 0!==p?p:""),y=_[0],S=_[1],g=c.useState(""),E=g[0],O=g[1],C=c.useState(!1),P=C[0],R=C[1],A=c.useState(-1),L=A[0],I=A[1],N=c.useState(!1),T=N[0],w=N[1],j=c.useState(!1),M=j[0],k=j[1],D=c.useState(!1),B=D[0],x=D[1];c.useEffect((function(){L<0||i.length>0&&P&&S(i[L])}),[i,L,P,S]),c.useEffect((function(){"string"===typeof p&&p!==y&&S(p)}),[p]);var U=function(e){var t=void 0!==e?i[e]:i[L];S(null!==t&&void 0!==t?t:y),I(-1),w(!1),k(!0),"function"===typeof l&&l(null!==t&&void 0!==t?t:y)},F=function(e){return"Backspace"===e.key&&I(-1),("ArrowUp"===e.key||"Up"===e.key)&&(e.preventDefault(),i.length>0)?(k(!1),R(!0),L<=0?void I(i.length-1):void I((function(e){return e-1}))):("ArrowDown"===e.key||"Down"===e.key)&&(e.preventDefault(),i.length>0)?(k(!1),R(!0),L===i.length-1?void I(0):void I((function(e){return e+1}))):void("Enter"===e.key&&(M&&y.length>0?"function"===typeof o&&o():U()))};return c.default.createElement("div",{className:s.default("ksc_typeAheadInputFieldContainer",m)},c.default.createElement(f.Input,r({className:s.default("ksc_typeAheadInputField",{ksc_suggestedResultsActive:T}),name:"typeAheadInputField",type:"text",placeholder:d,title:h,autoComplete:"off",value:y,onKeyDown:F,onBlur:function(e){I(-1),x(!1),w(!1),"function"===typeof n&&n(e)},onChange:function(e){k(!0),S(e.target.value),v?(w(!0),x(""===e.target.value)):w(""!==e.target.value),O(e.target.value),"function"===typeof t&&t(e)},onFocus:function(e){w(!1),""===y&&v&&(x(!0),w(!0)),"function"===typeof a&&a(e)}},b)),T&&!B&&(0===i.length?c.default.createElement("ul",{className:"ksc_resultsList"},c.default.createElement("li",{className:"ksc_result"},c.default.createElement("span",{className:"ksc_resultNoMatch"},"No matches found"))):c.default.createElement("ul",{className:"ksc_resultsList"},i.map((function(e,t){return c.default.createElement("li",{key:t,className:s.default("ksc_result",{ksc_highlighted:t===L})},c.default.createElement("button",{tabIndex:-1,onMouseDown:function(e){return e.preventDefault()},onKeyDown:F,onMouseEnter:function(){return function(e){k(!1),I(e),R(!1)}(t)},onClick:function(){return U(t)}},function(e){var t="",n=e,r=e.replace(/,/g,"").toLowerCase(),a=E.replace(/,/g,"").toLowerCase();if(0===r.indexOf(a)){var o=e.substring(0,E.length).split(",").length-1;t=e.substring(0,E.length+o),n=e.substring(E.length+o,e.length)}return c.default.createElement(c.default.Fragment,null,c.default.createElement("span",{className:"ksc_highlight_letter"},t),c.default.createElement("span",null,n))}(e)))})))),B&&v&&c.default.createElement("ul",{className:"ksc_resultsList"},c.default.createElement("li",{className:"ksc_result"},v)))}},43187:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(73158);Object.defineProperty(t,"TypeAheadInputField",{enumerable:!0,get:function(){return r.default}})},66477:function(e,t){"use strict";t.Headers=self.Headers,t.Request=self.Request,t.Response=self.Response,t.fetch=self.fetch},9008:function(e,t,n){e.exports=n(5443)},66938:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)},a=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&a(t,e,n);return o(t,e),t},u=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function l(e){try{i(r.next(e))}catch(t){o(t)}}function u(e){try{i(r.throw(e))}catch(t){o(t)}}function i(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,u)}i((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,r=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(a=(a=l.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){l=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){l.label=o[1];break}if(6===o[0]&&l.label<a[1]){l.label=a[1],a=o;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(o);break}a[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(e,l)}catch(u){o=[6,u],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},c=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SearchPanelChannels=void 0;var f,d=l(n(67294)),h=s(n(94184)),p=s(n(68609)),m=s(n(9883)),v=n(39118),b=n(43187),_=n(56496),y=n(44558),S=s(n(84889)),g=n(88636);!function(e){e.HOME_PAGE="HOME_PAGE",e.RESIDENTIAL_BUY="RESIDENTIAL_BUY",e.RESIDENTIAL_LET="RESIDENTIAL_LET",e.COM_FOR_SALE="COM_FOR_SALE",e.COM_FOR_LET="COM_FOR_LET",e.STUDENT_LET="STUDENT_LET",e.OVERSEAS="OVERSEAS",e.SOLD_PRICES="SOLD_PRICES"}(f=t.SearchPanelChannels||(t.SearchPanelChannels={}));var E={HOME_PAGE:{buttons:[{channel:f.RESIDENTIAL_BUY,label:"For Sale"},{channel:f.RESIDENTIAL_LET,label:"To Rent"}],invertTitleColour:!0},RESIDENTIAL_BUY:{buttons:[{channel:f.RESIDENTIAL_BUY,label:"For Sale"}]},RESIDENTIAL_LET:{buttons:[{channel:f.RESIDENTIAL_LET,label:"To Rent"}]},COM_FOR_SALE:{buttons:[{channel:f.COM_FOR_SALE,label:"For Sale"}]},COM_FOR_LET:{buttons:[{channel:f.COM_FOR_LET,label:"To Rent"}]},STUDENT_LET:{buttons:[{channel:f.STUDENT_LET,label:"Find Accommodation"}]},OVERSEAS:{buttons:[{channel:f.OVERSEAS,label:"For Sale"}],invertTitleColour:!0,noAreaMessage:"Please enter a country or region name."},SOLD_PRICES:{buttons:[{channel:f.SOLD_PRICES,label:"Search"}]}};t.default=function(e){var t,n=e.className,a=e.title,o=e.subTitle,l=e.placeholder,s=e.channel,O=e.typeaheadBaseUrl,C=e.hasAdditionalControls,P=e.additionalControlProps,R=e.onSelectResult,A=e.onControlClick,L=e.extraRowElement,I=c(e,["className","title","subTitle","placeholder","channel","typeaheadBaseUrl","hasAdditionalControls","additionalControlProps","onSelectResult","onControlClick","extraRowElement"]),N=d.useState([]),T=N[0],w=N[1],j=d.useState([]),M=j[0],k=j[1],D=d.useState(""),B=D[0],x=D[1],U=d.useState("false"),F=U[0],z=U[1],Y=d.useState(""),Z=Y[0],V=Y[1],G=d.useState(!1),H=G[0],W=G[1],$=d.useState(""),q=$[0],K=$[1],J=d.useState([]),Q=J[0],X=J[1],ee=d.useRef(null),te=E[s].noAreaMessage||"Please enter an area, postcode or train station.",ne=function(e){s!==f.OVERSEAS?w(function(e){var t=[];return e.typeAheadLocations.forEach((function(e){t.push(e.displayName)})),e.isComplete&&(W(!0),K(e.term),X(t)),k(e.typeAheadLocations),t}(e)):w(function(e){var t=[],n=g.parseOverseasTypeAheadResults(e);return n.typeAheadLocations.forEach((function(e){t.push(e.displayName)})),k(n.typeAheadLocations),t}(e))},re=function(e,t){var n=v.getURLBasedOnChannel(e,B,F,Z,M,t);A&&A(e,B,n),n&&window.location.assign(n)},ae=function(e){var t;if(void 0===e&&(e=s),B&&0!==B.length)if(ee.current&&(null===(t=ee.current)||void 0===t?void 0:t.handleSubmit)){var n=ee.current.handleSubmit();re(n.channel,n.data)}else re(e);else alert(te)},oe=function(e){ae(e)},le=function(e){var t=e.channel,n=e.data;B&&0!==B.length?re(t,n):alert(te)},ue=C&&function(){switch(s){case f.STUDENT_LET:return d.default.createElement("div",{className:"additionalSearchControls"},d.default.createElement(_.AdditionalStudentLetControls,{controls:E[s].buttons[0],onButtonClick:oe}));case f.RESIDENTIAL_BUY:return d.default.createElement("div",{className:"additionalSearchControls"},d.default.createElement(y.AdditionalResidentialBuyControls,r({buttonLabel:E[s].buttons[0].label,onButtonClick:le},P||{},{ref:ee})));default:return null}}();return d.default.createElement("div",r({className:h.default("ta_searchPanelContainer",n)},I),a&&d.default.createElement("h1",{className:h.default("title",{invertColour:E[s].invertTitleColour})},a),o&&d.default.createElement("h2",{className:h.default("subTitle",{invertColour:E[s].invertTitleColour})},o),d.default.createElement("div",{className:h.default("ta_searchPanel__form",(t={},t["ta_searchPanel__form--"+s.toLowerCase()+"-has-additional"]=Boolean(ue),t)),role:"form"},d.default.createElement("div",{className:"inlineSearchControls"},d.default.createElement(b.TypeAheadInputField,{className:"ta_typeAheadInputFieldContainer",onInputChange:function(e){return u(void 0,void 0,void 0,(function(){var t,n,r;return i(this,(function(a){switch(a.label){case 0:return t=e.target.value.toUpperCase(),x(encodeURIComponent(e.target.value.toUpperCase())),z("false"),V(""),H&&q.length>0&&t.includes(q)?(n=Q.filter((function(e){var n=/[,()]/g,r=/&/g,a=(e=(e=e.replace(n,"")).replace(r,"AND")).substring(0,t.length);if(t=(t=t.replace(n,"")).replace(r,"AND"),a.toUpperCase().match(t.toUpperCase()))return e})),w(n),[2]):(r=p.default(s,e.target.value))&&r.length>0?[4,m.default(O,r,s).then((function(e){e&&ne(e)})).catch((function(e){w([])}))]:[3,2];case 1:a.sent(),a.label=2;case 2:return[2]}}))}))},onResultSelect:function(e){e&&0!==e.length||alert(te),R&&R(e);for(var t=0;t<M.length;t++)e===M[t].displayName&&(x(encodeURIComponent(M[t].displayName)),z("true"),s===f.SOLD_PRICES?V(M[t].locationIdentifier):V(encodeURIComponent(M[t].locationIdentifier)))},onSubmit:function(){ae()},suggestedInputs:T,placeholder:l,extraRow:L}),function(){if(s===f.STUDENT_LET)return d.default.createElement(_.StudentLetControls,null);var e=E[s].buttons;return d.default.createElement(S.default,{onButtonClick:oe,controls:e})}()),ue))}},3685:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(66938);Object.defineProperty(t,"SearchPanel",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"SearchPanelChannels",{enumerable:!0,get:function(){return r.SearchPanelChannels}})},8167:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(67294)),o=n(36364),l=n(56578);t.default=function(e){var t=e.title,n=e.name,r=e.value,u=e.onChange,i=l.range.reduce((function(e,t){return e.push({text:"\xa3"+t.toLocaleString("en"),value:String(t)}),e}),[{text:t,value:"0"}]);return a.default.createElement("div",{className:"Dropdown"},a.default.createElement(o.Select,{"aria-label":t,name:n,options:i,onChange:u,value:r}),a.default.createElement("svg",{width:"17",height:"8",fill:"none","aria-hidden":"true"},a.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.002.5L8.707 7.207a1 1 0 01-1.414 0L0 .5h16.002z",fill:"#00DEB6"})))}},35667:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)},a=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&a(t,e,n);return o(t,e),t},u=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=l(n(67294)),s=i(n(94184)),f=n(3685),d=n(50338),h=i(n(8167)),p=n(56578),m=c.forwardRef((function(e,t){var n=e.className,a=e.buttonLabel,o=e.onButtonClick,l=e.defaultMinPrice,i=e.defaultMaxPrice,m=e.handleMinPriceUpdate,v=e.handleMaxPriceUpdate,b=u(e,["className","buttonLabel","onButtonClick","defaultMinPrice","defaultMaxPrice","handleMinPriceUpdate","handleMaxPriceUpdate"]),_=c.useState(0),y=_[0],S=_[1],g=c.useState(0),E=g[0],O=g[1],C=function(){return{channel:f.SearchPanelChannels.RESIDENTIAL_BUY,data:{minPrice:y,maxPrice:E}}};return c.useImperativeHandle(t,(function(){return{handleSubmit:C}})),c.useEffect((function(){S(l?p.closestWithinRange(l):0),O(i?p.closestWithinRange(i):0)}),[l,i]),c.default.createElement("div",{className:"AdditionalResidentialBuyControls"},c.default.createElement("div",{className:"AdditionalResidentialBuyControls__dropdown-wrapper"},c.default.createElement(h.default,{name:"min",title:"Min price",onChange:function(e){m&&m(e);var t=Number(e.target.value),n=Number(E);if(n&&t>n)return O(t),void S(E);S(t)},value:y}),c.default.createElement("span",null,"to"),c.default.createElement(h.default,{name:"max",title:"Max price",onChange:function(e){v&&v(e);var t=Number(e.target.value),n=Number(y);if(n&&t<n)return O(y),void S(t);O(t)},value:E})),c.default.createElement(d.Button,r({className:s.default("AdditionalResidentialBuyControls__button",n),sizing:d.ButtonSizes.LARGE,color:d.ButtonColours.PRIMARY,onClick:function(){o(C())}},b),a))}));t.default=m},56578:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.closestWithinRange=t.range=void 0,t.range=[5e4,6e4,7e4,8e4,9e4,1e5,11e4,12e4,13e4,14e4,15e4,16e4,17e4,18e4,19e4,2e5,21e4,22e4,23e4,24e4,25e4,26e4,27e4,28e4,29e4,3e5,325e3,35e4,375e3,4e5,425e3,45e4,475e3,5e5,55e4,6e5,65e4,7e5,125e4,15e5,175e4,2e6,25e5,3e6,4e6,5e6,75e5,1e7,15e6,2e7],t.closestWithinRange=function(e){return t.range.reduce((function(t,n){return Math.abs(n-Number(e))<Math.abs(t-Number(e))?n:t}))}},44558:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(35667);Object.defineProperty(t,"AdditionalResidentialBuyControls",{enumerable:!0,get:function(){return r.default}})},84889:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)},a=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=o(n(67294)),u=n(50338);t.default=function(e){var t=e.controls,n=e.className,o=e.onButtonClick,i=a(e,["controls","className","onButtonClick"]);return l.default.createElement(l.default.Fragment,null,t.map((function(e,t){return l.default.createElement(u.Button,r({key:t,className:"searchPanelControls "+(n||""),sizing:u.ButtonSizes.LARGE,color:u.ButtonColours.PRIMARY,onClick:function(){o(e.channel)}},i),e.label)})))}},35330:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)},a=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.AdditionalStudentLetControls=t.StudentLetControls=void 0;var l=o(n(67294)),u=n(50338);t.StudentLetControls=function(){return l.default.createElement("select",null)},t.AdditionalStudentLetControls=function(e){var t=e.controls,n=e.className,o=e.onButtonClick,i=a(e,["controls","className","onButtonClick"]);return l.default.createElement(l.default.Fragment,null,l.default.createElement("input",null),l.default.createElement(u.Button,r({className:"studentLetButton "+(n||""),sizing:u.ButtonSizes.LARGE,color:u.ButtonColours.PRIMARY,onClick:function(){o(t.channel)}},i),t.label))}},56496:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(35330);Object.defineProperty(t,"StudentLetControls",{enumerable:!0,get:function(){return r.StudentLetControls}});var a=n(35330);Object.defineProperty(t,"AdditionalStudentLetControls",{enumerable:!0,get:function(){return a.AdditionalStudentLetControls}})},9883:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function l(e){try{i(r.next(e))}catch(t){o(t)}}function u(e){try{i(r.throw(e))}catch(t){o(t)}}function i(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,u)}i((r=r.apply(e,t||[])).next())}))},a=this&&this.__generator||function(e,t){var n,r,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,r=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(a=(a=l.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){l=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){l.label=o[1];break}if(6===o[0]&&l.label<a[1]){l.label=a[1],a=o;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(o);break}a[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(e,l)}catch(u){o=[6,u],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};Object.defineProperty(t,"__esModule",{value:!0}),n(66477);var o=n(66938),l=function(e){return r(void 0,void 0,void 0,(function(){return a(this,(function(t){return[2,fetch(e,{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():null})).catch((function(e){return null}))]}))}))};t.default=function(e,t,n){return r(void 0,void 0,void 0,(function(){return a(this,(function(r){switch(n){case o.SearchPanelChannels.OVERSEAS:return[2,l(e+"/typeahead/overseas?searchTerm="+t+"&size=10")];case o.SearchPanelChannels.SOLD_PRICES:return[2,l(e+"/typeAhead/ukstreet"+t)];default:return[2,l(e+"/typeAhead/uknostreet"+t)]}return[2]}))}))}},68609:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(66938);t.default=function(e,t){return e===r.SearchPanelChannels.OVERSEAS?function(e){return 0===e.trim().length?null:e.trim()}(t):function(e){if(0===e.trim().length)return null;for(var t="",n=[],r=function(e){return(e=(e=e.toUpperCase()).replace(/&/g,"AND")).replace(/&/g,"AND").replace(/ ST /g," SAINT ").replace(/ ST\./g," SAINT ").replace(/^ST\./g,"SAINT ").replace(/^ST /g,"SAINT ")}(e),a=function(e){return(e=(e=e.replace(/'/g,"")).replace(/[^A-Z0-9&]/g," ")).replace(/\s+/g," ")}(r),o=Math.floor(a.length/2),l=a.substring(0,2*o),u=0;u<l.length;u++)u%2===0&&(n.push(l[u]),n.push(l[u+1]),u+2<a.length&&n.push("/"));return l.length>=2&&(t=n.join("")),t+=a.substring(2*o,2*o+1),"/"+encodeURI(t)}(t)}},39118:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getURLBasedOnChannel=void 0;var r=n(3685),a=n(41301);t.getURLBasedOnChannel=function(e,t,n,o,l,u){var i="",c=new URLSearchParams;switch(c.set("searchLocation",t),c.set("useLocationIdentifier",n),c.set("locationIdentifier",o),e){case r.SearchPanelChannels.HOME_PAGE:case r.SearchPanelChannels.RESIDENTIAL_BUY:i=function(e,t){return e.set("buy","For+sale"),t&&(t.minPrice&&e.set("minPrice",String(t.minPrice)),t.maxPrice&&e.set("maxPrice",String(t.maxPrice))),"/property-for-sale/search.html"}(c,u);break;case r.SearchPanelChannels.RESIDENTIAL_LET:i=function(e){return e.append("rent","To+rent"),"/property-to-rent/search.html"}(c);break;case r.SearchPanelChannels.COM_FOR_LET:i=function(e){return e.append("rent.x","RENT"),e.append("search","To+Rent"),"/commercial-property-to-let/search.html"}(c);break;case r.SearchPanelChannels.COM_FOR_SALE:i=function(e){return e.append("rent.x","Sale"),e.append("search","For+Sale"),"/commercial-property-for-sale/search.html"}(c);break;case r.SearchPanelChannels.OVERSEAS:if(!o){if(0===l.length)return"";c.set("searchLocation",encodeURIComponent(l[0].displayName)),c.set("useLocationIdentifier","true"),c.set("locationIdentifier",encodeURIComponent(l[0].locationIdentifier))}i=function(e){return e.append("channel","OVERSEAS"),"/overseas-property-for-sale/find.html"}(c);break;case r.SearchPanelChannels.SOLD_PRICES:i=function(e){var t=e.get("searchLocation"),n=e.get("locationIdentifier");if(n){e.delete("searchLocation"),e.delete("locationIdentifier"),e.delete("useLocationIdentifier");var r=n.split("^");return"/house-prices/"+r[0]+"/"+r[1]}return a.isSoldPricesPostcodeSearch(t)?"/house-prices/"+t.toLowerCase().replace(" ","")+".html":"/house-prices/search.html"}(c);break;case r.SearchPanelChannels.STUDENT_LET:return""}return decodeURIComponent(i+"?"+c.toString())}},41301:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSoldPricesPostcodeSearch=void 0,t.isSoldPricesPostcodeSearch=function(e){var t,n=e.replace(" ",""),r=n.match(/^[a-zA-Z]{1,2}[0-9][a-zA-Z0-9]?(\\s)*[0-9][a-zA-Z][a-zA-Z]$/)||n.match(/^[a-zA-Z]{1,2}[0-9][a-zA-Z0-9]?$/)||n.match(/^[a-zA-Z]{1,2}([0-9](\\s)+|[0-9][a-zA-Z0-9]{1,2}(\\s)*)[0-9]$/)||n.match(/^[a-zA-Z]{1,2}[0-9][a-zA-Z0-9]?(\\s)*[0-9][a-zA-Z]$/);return null!==(t=r&&r.length>0)&&void 0!==t&&t}},88636:function(e,t){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},n.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.parseOverseasTypeAheadResults=void 0,t.parseOverseasTypeAheadResults=function(e){return n(n({},e),{typeAheadLocations:e.typeAheadLocations.map((function(e){return"COUNTRY"!==e.regionType.trim().toUpperCase()&&"SECTOR"!==e.regionType.trim().toUpperCase()?n(n({},e),{displayName:e.displayName+", "+e.displayCountryName}):e}))})}}}]);