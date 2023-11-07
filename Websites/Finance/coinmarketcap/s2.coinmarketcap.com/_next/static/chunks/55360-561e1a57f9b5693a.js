"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[55360],{18638:function(n,e,r){var t=r(52322),i=(r(2784),r(60428)),o=r(37881),u=r(48596),a=r(38167);e.Z=function(n){var e=n.price,r=n.useSymbol,c=void 0===r||r,l=n.withoutWrapper,d=(0,u.$T)(e,{usePriceAbbreviation:!0}),s=(0,u.$T)(e,{useSymbol:c,withSmallPrice:!0}),v=(0,u.$T)(e,{useSymbol:!1,comma:!1,withSmallPrice:!0}),f=Number(v)<=1e-9&&0!==Number(v)||s.length>10;return(0,t.jsx)(t.Fragment,{children:f?(0,t.jsx)(i.default,{content:(0,t.jsx)(o.ZP,{fontWeight:700,style:{padding:"10px"},children:s}),theme:"cmc",interactive:!0,appendTo:function(){return document.body},children:(0,t.jsx)("span",{className:"abbreviation-price",style:{cursor:"pointer"},children:(0,t.jsx)(a.ch,{price:s,children:d})})}):l?s:(0,t.jsx)("span",{children:s})})}},42224:function(n,e,r){var t=r(75190),i=r(52322),o=(r(2784),r(37881)),u=r(36860),a=r(31535),c=r(82740),l=r(54251),d=r(73111),s=r(48723);function v(){var n=(0,t.Z)(["\n  @media screen and (min-width: ","px) {\n    display: none;\n  }\n"]);return v=function(){return n},n}function f(){var n=(0,t.Z)(["\n  @media screen and (max-width: ","px) {\n    display: none;\n  }\n"]);return f=function(){return n},n}var p=c.ZP.span.withConfig({componentId:"sc-f8982b1f-0"})(v(),s.AV.SMALL_MIN),m=c.ZP.span.withConfig({componentId:"sc-f8982b1f-1"})(f(),s.AV.SMALL_MIN);e.Z=function(n){var e,r=n.data,t=n.params,c=void 0===t?{}:t,s=n.isUnverified,v=n.inViewPort,f=!!c.fullyDilluttedMarketCap;if(r&&!r.quote&&!(null===(e=r.quotes)||void 0===e?void 0:e[0]))return a.HY;var h,y=(0,d.R)(r,"marketCapByTotalSupply");h=f?(0,d.R)(r,"fullyDilluttedMarketCap"):(0,d.R)(r,"marketCap");var b=(0,d.R)(r,"selfReportedMarketCap"),g=c.byTotalSupply?y:h||b;if(!g)return a.HY;var x=!h&&b,S=(0,l.l)({id:r.id,key:f?"fdmc_not_implemented":"mc",initData:{mc:g,t:new Date(r.quote.USD.lastUpdated).getTime()},inViewPort:v}).value||g,C=(0,u.useCurrencyFormatter)(S,{abbreviate:!0,decimal:2}),w=(0,u.useCurrencyFormatter)(S,{abbreviate:!1,decimal:0});return(0,i.jsxs)(o.ZP,{color:x?"neutral4":void 0,style:{whiteSpace:"nowrap",cursor:s&&"pointer"},children:[(0,i.jsx)(p,{children:C}),(0,i.jsx)(m,{"data-nosnippet":!0,children:w})]})}},38167:function(n,e,r){r.d(e,{Ks:function(){return T},Zz:function(){return M},bv:function(){return A},ch:function(){return D}});var t=r(62230),i=r(85244),o=r(98240),u=r(75190),a=r(52322),c=r(2784),l=r(6853),d=r(36860),s=r(83216),v=r(51156),f=r(58382),p=r(31535),m=r(18638),h=r(54251),y=r(82740),b=r(48723),g=r(81751),x=r(58629);function S(){var n=(0,u.Z)(["\n 0% {\n      //   color: yellow;\n      color: var(--changedColor);\n      // background-color: yellow;\n    }\n    40% {\n      color: var(--changedColor);\n    }\n    100% {\n      color: var(--text-color);\n      // background-color: transparent;\n    }\n"]);return S=function(){return n},n}function C(){var n=(0,u.Z)(["\n  color: var(--text-color);\n  &.rise {\n    --changedColor: #16c784;\n  }\n  &.fall {\n    --changedColor: #ea3943;\n  }\n  &.rise,\n  &.fall {\n    animation: "," 3s linear forwards;\n  }\n\n  a.cmc-link {\n    color: inherit;\n  }\n  /* @media (max-width: ","px) {\n    font-size: 24px;\n  } */\n"]);return C=function(){return n},n}var w=/[\d.,]/g,Z=/[^\d.-]/g,q=function(n){return parseFloat(String(n).replace(Z,""))},j=function(n){return String(n).replace(w,"")},P=(0,y.F4)(S()),k=y.ZP.div.withConfig({componentId:"sc-bc83b59-0"})(C(),P,b.AV.XSMALL),_=function(n,e){var r,t=n.quote?n.quote.USD:null===(r=n.quotes)||void 0===r?void 0:r[0],i=null===t||void 0===t?void 0:t.price;return n.market_pair_base&&e.baseCryptocurrencyId&&n.market_pair_base.currency_id!==e.baseCryptocurrencyId&&(i=null===t||void 0===t?void 0:t.price_quote),i},D=function(n){var e=n.price,r=n.children,u=n.disabled,l=(0,o.Z)(n,["price","children","disabled"]),d=function(n){var e=(0,c.useRef)(q(n)),r=(0,c.useRef)(j(n)),t=(0,c.useState)(""),i=t[0],o=t[1],u=(0,f.Z)();return(0,c.useEffect)((function(){var t=j(n),i=q(n);if(t!==r.current)return r.current=t,void(e.current=i);i>e.current?o("rise"):i<e.current&&o("fall");var a=setTimeout((function(){u()&&o("")}),3e3);return e.current=i,function(){clearTimeout(a)}}),[n]),i}(e);return(0,a.jsx)(k,(0,i.Z)((0,t.Z)({className:u?void 0:d},l),{children:r}))},A=function(n){var e,r,t,i,o,u=n.data,c=n.inViewPort,l=n.isATL;if(n.data&&!(null===(e=n.data)||void 0===e?void 0:e.quote)&&!(null===(r=n.data)||void 0===r||null===(t=r.quotes)||void 0===t?void 0:t[0]))return p.HY;var s=_(u,{}),f=(0,h.l)({id:u.id,key:"p",initData:{p:s,t:new Date(u.quote.USD.lastUpdated).getTime()},inViewPort:c}).value,y=(l?null===(i=n.data)||void 0===i?void 0:i.atl:null===(o=n.data)||void 0===o?void 0:o.ath)||0,b=l?f-y:y-f,g=(0,d.useCurrencyFormatter)(b,{displayingCurrency:(0,v.Y3)((function(){return u.symbol.toLowerCase()}),"")});return(0,a.jsxs)(D,{disabled:!0,price:g,style:{lineHeight:1.4},children:[f<y?"-":"+",(0,a.jsx)(m.Z,{price:b}),(0,a.jsx)("br",{}),(0,a.jsx)(x.Z,{value:0===y?999999999:(f-y)/y*100,isShowPrefix:!1,style:{fontSize:12},formatter:function(n){return"".concat(n>0?"+":"").concat((0,v.q1)(n,0),"%")}})]})},M=function(n){var e=n.price,r=void 0===e?0:e;return(0,a.jsx)(a.Fragment,{children:(0,d.useCurrencyFormatter)(r)})},T=function(n){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];try{var r=(0,s.p)(n,e);return n<g.Sp?g.V8:(0,v.q1)(n,r)}catch(t){return 0}};e.ZP=function(n){var e,r,t,i,o,u=n.data,s=n.params,f=void 0===s?{}:s,y=n.inViewPort,b=n.price,g=n.transform,x=void 0===g?function(n){return n}:g,S=n.useSymbol,C=void 0===S||S,w=n.disabledAnimation,Z=void 0!==w&&w;if(!b&&n.data&&!(null===(e=n.data)||void 0===e?void 0:e.quote)&&!(null===(r=n.data)||void 0===r||null===(t=r.quotes)||void 0===t?void 0:t[0]))return p.HY;var q=null!==b&&void 0!==b?b:_(u,f),j=(0,h.l)({id:u.id,key:"p",initData:{p:q,t:new Date(null===u||void 0===u||null===(i=u.quote)||void 0===i||null===(o=i.USD)||void 0===o?void 0:o.lastUpdated).getTime()},inViewPort:y}).value,P=(0,d.useCurrencyFormatter)(x(j),{displayingCurrency:(0,v.Y3)((function(){return u.symbol.toLowerCase()}),"")}),k=(0,c.useMemo)((function(){return function(n,e){var r="";return n.outlier_detected?r="*** ":e.showExclusions&&Array.isArray(n.exclusions)&&n.exclusions.includes("price")&&(r="* "),r}(u,f)}),[u,f]),A=u.slug?(0,a.jsxs)(l.Z,{href:"/currencies/".concat(u.slug,"/markets/"),forceRefresh:!0,children:[k,(0,a.jsx)(m.Z,{price:j,useSymbol:C})]}):(0,a.jsxs)(c.Fragment,{children:[k,(0,a.jsx)(m.Z,{price:j,useSymbol:C})]});return(0,a.jsx)(D,{disabled:Z,price:P,children:A})}},58382:function(n,e,r){var t=r(2784);e.Z=function(n){var e=(0,t.useRef)(!1);return(0,t.useEffect)((function(){var r;return e.current=!0,n&&(r=n()),function(){e.current=!1,r&&"function"===typeof r&&r()}}),[]),function(){return e.current}}},48596:function(n,e,r){r.d(e,{$T:function(){return h},nB:function(){return m}});var t=r(22386),i=r(49948),o=r(47726),u=r(15798),a=r.n(u),c=r(51156),l=r(77705),d=r(81751),s=r(64626),v=function(n,e){var r=Math.abs(n);if(0===r)return 0;if(r<1){if(r<1e-18)return 4+(0,l.l)(r);var t=Math.min(4+(0,l.l)(r),18),i=r.toFixed(t).match(/0+$/);return t-(i?i[0].length:0)}return r<10&&e?4:2},f=function(n,e,r,t,i){return i?e+n+" "+(t?r.toUpperCase():""):e+(t?r:"")+n};function p(n){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2781,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(!(0,c.pG)(n))return"-";var u=o.abbreviate,l=o.useSymbol,s=void 0===l||l,p=o.decimal,m=o.comma,h=void 0===m||m,y=o.usePriceAbbreviation,b=void 0!==y&&y,g=o.converted,x=o.usePrefix,S=o.displayingCurrency,C=o.currency,w=o.decimal,Z=a().currencies.map[i],q=a().currencies.isCrypto(C||i),j=C||(null===(e=a().currencies.map[Z.id])||void 0===e?void 0:e.token),P=(null===Z||void 0===Z?void 0:Z.symbol)===S?1:g?n:n/r,k=x?n>=0?"+ ":"- ":"";if(b&&Math.abs(P)<d.Y$&&0!==P){var _=Math.sign(P),D={1:"","-1":"-"};return P=q?"<".concat(D[_],"0.0\u202600001 ").concat(j):"<".concat(D[_]).concat(s?j:"","0.0\u202600001"),f(P,"","",!1,!1)}if(w="number"===typeof p?p:"function"===typeof p?p(P,q):v(P,q),u)P=(0,c.DH)(P,w);else{var A=P.toFixed(w);if(P=1===Number(A)&&P<1?String(P).slice(0,6):A,h){var M=(0,t.Z)(P.split("."),2),T=M[0],F=M[1],N=void 0===F?"":F;P=T.replace(/\B(?=(\d{3})+(?!\d))/g,",")+(N?".".concat(N):"")}}var U=x?String(P).replace("-",""):P;return b&&(U=0===Number(U)?"< 0.0\u202600001":U.slice(0,3)+"..."+U.slice(-5)),f(U,k,j,s,q)}function m(){var n,e=(0,i.useSelector)(o.PN),r=(null===e||void 0===e?void 0:e.id)||2781,t=null===(n=s.C.get(r))||void 0===n?void 0:n.p;return function(n,e){return p(n,t,r,e)}}function h(n){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=(0,i.useSelector)(o.PN),u=r.currencyId,a=u||(null===t||void 0===t?void 0:t.id)||2781,c=null===(e=s.C.get(a))||void 0===e?void 0:e.p;return p(n,c,a,r)}},73111:function(n,e,r){r.d(e,{H:function(){return o},R:function(){return i}});var t=r(51156),i=function(n,e){var r,i,o=e.includes("_")?(0,t._A)(e,"_"):(0,t.rs)(e,"_");return n.quote&&n.quote.USD?null!==(r=n.quote.USD[e])&&void 0!==r?r:n.quote.USD[o]:n.quotes&&n.quotes[0]?null!==(i=n.quotes[0][e])&&void 0!==i?i:n.quotes[0][o]:0},o=function(n,e){var r={};return n.forEach((function(n){var t="function"===typeof e?e(n):e;r[t]=n})),r}}}]);