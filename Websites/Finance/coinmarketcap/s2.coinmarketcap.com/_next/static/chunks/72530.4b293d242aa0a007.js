"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[72530],{8904:function(n,e,t){t.d(e,{n:function(){return Z},t:function(){return b}});var i=t(52322),o=t(62230),a=t(85244),r=t(98240),c=t(2784),l=t(69591),s=function(n){var e=n.fill,t=void 0===e?"#3861FB":e,c=(0,r.Z)(n,["fill"]);return(0,i.jsx)(l.Z,(0,a.Z)((0,o.Z)({size:"40",viewBox:"0 0 40 40"},c),{children:(0,i.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("circle",{cx:"16",cy:"16",r:"16",fill:t}),(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6667 9.33325C12.2065 9.33325 11.8334 9.70635 11.8334 10.1666V10.9999H11C10.0796 10.9999 9.33337 11.7461 9.33337 12.6666V20.9999C9.33337 21.9204 10.0796 22.6666 11 22.6666H21C21.9205 22.6666 22.6667 21.9204 22.6667 20.9999V12.6666C22.6667 11.7461 21.9205 10.9999 21 10.9999H20.1667V10.1666C20.1667 9.70635 19.7936 9.33325 19.3334 9.33325C18.8731 9.33325 18.5 9.70635 18.5 10.1666V10.9999H13.5V10.1666C13.5 9.70635 13.1269 9.33325 12.6667 9.33325ZM12.6667 13.4999C12.2065 13.4999 11.8334 13.873 11.8334 14.3333C11.8334 14.7935 12.2065 15.1666 12.6667 15.1666H19.3334C19.7936 15.1666 20.1667 14.7935 20.1667 14.3333C20.1667 13.873 19.7936 13.4999 19.3334 13.4999H12.6667Z",fill:"white"})]})}))},u=t(75190),m=t(82740),d=t(31504);function g(){var n=(0,u.Z)(["\n  width: ","px;\n  height: ","px;\n"]);return g=function(){return n},n}var p=["MenuCryptoApiIcon","MenuHistoricalSnapshotsIcon","MenuMethodologyIcon","MenuNewsletterIcon","MenuWidgetsIcon"],h=m.ZP.img.withConfig({componentId:"sc-f521ccbb-0"})(g(),(function(n){return n.size}),(function(n){return n.size})),x=function(n){var e=n.name,t=n.size,o=void 0===t?32:t,a=(0,m.Fg)().isDay,r=p.includes(e),c="".concat(e).concat(r?a?".light":".dark":"",".svg");return(0,i.jsx)(h,{size:o,src:(0,d.NE)("/cloud/img/menu/".concat(c)),loading:"lazy"})},f=t(22386),v=t(83081);function C(){var n=(0,u.Z)(["\n  position: relative;\n  display: inline;\n"]);return C=function(){return n},n}function k(){var n=(0,u.Z)(["\n  display: inline-block;\n  width: 6px;\n  height: 6px;\n  border-radius: 6px;\n  background: #ea3943;\n  position: relative;\n  top: -4px;\n  left: 1px;\n"]);return k=function(){return n},n}function y(){var n=(0,u.Z)(["\n  padding: 16px;\n  background: var(--theme-color);\n  box-shadow: 0px 1px 4px rgb(11 30 65 / 8%), 0px 4px 24px rgb(11 30 65 / 4%);\n  border-radius: 16px;\n  position: absolute;\n  min-width: 265px;\n  top: 55px;\n  left: 50%;\n  transform: translateX(-50%);\n  color: #fff;\n  z-index: 10000;\n  &::before {\n    content: '';\n    display: block;\n    width: 0px;\n    height: 0px;\n    /* background:  */\n    position: absolute;\n    left: 50%;\n    top: -12px;\n    border-width: 6px;\n    border-color: transparent;\n    border-style: solid;\n    border-bottom-color: var(--theme-color);\n  }\n  > svg:first-child {\n    position: absolute;\n    fill: #fff;\n    right: 16px;\n    cursor: pointer;\n    width: 18px;\n    position: absolute;\n  }\n"]);return y=function(){return n},n}var w=m.ZP.span.withConfig({componentId:"sc-cda1c8a5-0"})(C()),M=m.ZP.div.withConfig({componentId:"sc-cda1c8a5-1"})(k());function j(n){var e=n.children,t=n.localStorageKey,a=(n.expires,n.mouseEnter),l=void 0!==a&&a,s=n.disableClick,u=void 0!==s&&s,m=(0,r.Z)(n,["children","localStorageKey","expires","mouseEnter","disableClick"]);if(!t)throw new Error("IndicatorV2Wrapper missing attribute `localStorageKey`");if(!t.match(/([a-zA-Z]+)(\d+)/))throw new Error("localStorageKey must be the following pattern: '[a-zA-Z]+\\d+'! example: ab11, a0, z99, a3...");var d=t.match(/([a-zA-Z]+)(\d+)/),g=parseInt(d[2],10),p=d[1];if(g>128)throw new Error("number part must less than '128'!");var h=(0,f.Z)(c.useState(!1),2),x=h[0],C=h[1],k="navbarHide-".concat(p);(0,c.useEffect)((function(){return(localStorage.getItem(k)||"")[g]||C(!0),v.ZP.on(v.Vy.menuOutRedDot,y),function(){v.ZP.remove(v.Vy.menuOutRedDot)}}),[]);var y=function(n){n===k&&C(!1)},j=(0,c.useCallback)((function(n){for(var e=localStorage.getItem(k)||"",t="",i=0;i<=Math.max(e.length-1,n);i++)t+=i===n?"1":e[i]||"0";localStorage.setItem(k,t),C(!1),v.ZP.emit(v.Vy.menuOutRedDot,k)}),[]);return(0,i.jsxs)(w,{onClick:function(){return u?null:j(g)},onMouseEnter:function(){l&&j(g)},children:[e,x&&(0,i.jsx)(M,(0,o.Z)({},m))]})}m.ZP.div.withConfig({componentId:"sc-cda1c8a5-2"})(y());var I=t(57472),P=t(3154),b=function(n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return[{className:"four-square",title:(0,i.jsx)(j,{disableClick:!0,localStorageKey:"e2",top:6,right:-8,animate:!0,children:n("Cryptocurrencies")}),link:"/",name:"Cryptocurrencies",multiSubMenu:[{title:n("CRYPTOCURRENCIES"),name:"CRYPTOCURRENCIES",primary:[{title:n("Ranking"),name:"Ranking",icon:(0,i.jsx)(x,{name:"MenuCmcIcon"}),link:"/"},{title:n("Recently Added"),name:"Recently Added",icon:(0,i.jsx)(x,{name:"MenuRecentlyAddedIcon"}),link:"/new/"},{title:n("Categories"),name:"Categories",icon:(0,i.jsx)(x,{name:"MenuCategoriesIcon"}),link:"/cryptocurrency-category/"},{title:n("Spotlight"),name:"Spotlight",icon:(0,i.jsx)(x,{name:"MenuSpotlightIcon"}),link:"/best-cryptos/",isNew:!1},{title:n("Gainers & Losers"),name:"Gainers & Losers",icon:(0,i.jsx)(x,{name:"MenuGainersLosersIcon"}),link:"/gainers-losers/"},!(0,I.yx)(e)&&{title:n("Global Charts"),name:"Global Charts",icon:(0,i.jsx)(x,{name:"MenuGlobalChartsIcon"}),link:"/charts/"},!(0,I.yx)(e)&&{title:n("Historical Snapshots"),name:"Historical Snapshots",icon:(0,i.jsx)(x,{name:"MenuHistoryIcon"}),link:"/historical/"}].filter(Boolean),secondary:!(0,I.yx)(e)&&[{title:n("Price Estimates"),name:"Price Estimates",icon:(0,i.jsx)(x,{name:"MenuPriceEstimateIcon"}),link:"/price-estimates/"},{title:n("Polkadot Parachains"),name:"Polkadot Parachains",icon:(0,i.jsx)(x,{name:"MenuPolkadotIcon"}),link:"/polkadot-parachains/polkadot/"},{title:n("Legal Tender Countries"),name:"Legal Tender Countries",icon:(0,i.jsx)(x,{name:"MenuLegalIcon"}),link:"/legal-tender-countries/"},{title:n("Fiats / Companies Rankings"),name:"Fiats / Companies Rankings",icon:(0,i.jsx)(x,{name:"MenuFiatsIcon"}),link:"/fiat-currencies/"}]},{title:n("NFT"),name:"NFT",primary:[{title:n("Overall NFT Stats"),name:"Overall NFT Stats",icon:(0,i.jsx)(x,{name:"MenuNFTOverview"}),link:"/nft/"},{title:n("Top Collections"),name:"Top Collections",icon:(0,i.jsx)(x,{name:"MenuNFTCollections"}),link:"/nft/collections/"},{title:n("Upcoming Sales"),name:"Upcoming Sales",icon:(0,i.jsx)(s,{fill:"#16C784"}),link:"/nft/upcoming/"}]},!(0,I.yx)(e)&&{title:n("On Chain Data"),name:"On Chain Data",primary:[{title:(0,i.jsx)(j,{mouseEnter:!0,localStorageKey:"e2",top:6,right:-8,animate:!0,children:n("Dex Pairs")}),name:"Dex Pairs",isDisableLanguagePrefix:!0,icon:(0,i.jsx)(x,{name:"MenuDexscan"}),link:(0,P.HJ)("/dexscan/trending/all",e),isNew:!0},{title:n("Chain Ranking"),name:"Chain Ranking",icon:(0,i.jsx)(x,{name:"MenuChainRanking"}),link:"/chain-ranking/"}]}].filter(Boolean)},{title:n("Exchanges"),name:"Exchanges",link:"/rankings/exchanges/",primary:[{title:n("Spot"),name:"Spot",icon:(0,i.jsx)(x,{name:"MenuSpotIcon"}),link:"/rankings/exchanges/"},{title:n("Derivatives"),name:"Derivatives",icon:(0,i.jsx)(x,{name:"MenuDerivativesIcon"}),link:"/rankings/exchanges/derivatives/"},{title:n("DEX"),name:"DEX",icon:(0,i.jsx)(x,{name:"MenuDexIcon"}),link:"/rankings/exchanges/dex/"}]},!(0,I.yx)(e)&&{title:n("Community"),name:"Community",link:(0,P.lC)("/community/",e),isDisableLanguagePrefix:!0,gtmParams:{category:"Gravity",action:"Menu_CommunityHover_ClickCommunity"},primary:[{title:n("Feeds"),name:"Feeds",icon:(0,i.jsx)(x,{name:"feed"}),link:(0,P.lC)("/community/",e),isDisableLanguagePrefix:!0,gtmParams:{category:"Gravity",action:"Menu_CommunityHover_ClickFeeds"}},{title:n("Articles"),name:"Articles",icon:(0,i.jsx)(x,{name:"articles"}),link:(0,P.lC)("/community/articles/",e),isDisableLanguagePrefix:!0,gtmParams:{category:"Gravity",action:"Menu_CommunityHover_ClickArticles"}}]},!(0,I.yx)(e)&&{title:n("Products"),name:"Products",multiSubMenu:[{title:n("PRODUCTS"),name:"PRODUCTS",primary:[{title:n("Converter"),name:"Converter",icon:(0,i.jsx)(x,{name:"MenuConverterIcon"}),link:"/converter/"},{title:n("Blockchain Explorer"),name:"Blockchain Explorer",icon:(0,i.jsx)(x,{name:"MenuExplorerIcon"}),link:"https://blockchain.coinmarketcap.com",toNewPage:!0},{title:n("Telegram Bot"),name:"Telegram Bot",icon:(0,i.jsx)(x,{name:"MenuTelegramBotIcon"}),link:"https://coinmarketcap.com/chatbot/",toNewPage:!0}],secondary:[{title:n("Crypto API"),name:"Crypto API",icon:(0,i.jsx)(x,{name:"MenuCryptoApiIcon"}),link:"https://coinmarketcap.com/api/",toNewPage:!0},{title:n("Site Widgets"),name:"Site Widgets",icon:(0,i.jsx)(x,{name:"MenuWidgetsIcon"}),link:"/widget/ticker/"}]},{title:n("CAMPAIGNS"),name:"CAMPAIGNS",primary:[{title:n("Free Airdrops"),name:"Free Airdrops",icon:(0,i.jsx)(x,{name:"MenuAirdropsIcon"}),link:"/airdrop/"},{title:n("Diamond Rewards"),name:"Diamond Rewards",icon:(0,i.jsx)(x,{name:"MenuRewardsIcon"}),link:"/account/rewards/"},{title:n("Learn & Earn"),name:"Learn & Earn",icon:(0,i.jsx)(x,{name:"MenuEarnCryptoIcon"}),link:"https://coinmarketcap.com/earn/",toNewPage:!0}]},{title:n("CALENDARS"),name:"CALENDARS",primary:[{title:n("ICO Calendar"),name:"ICO Calendar",icon:(0,i.jsx)(x,{name:"MenuICOIcon"}),link:"/ico-calendar/"},{title:n("Events Calendar"),name:"Events Calendar",icon:(0,i.jsx)(x,{name:"MenuEvents2Icon"}),link:"/events/"}]}]},!(0,I.yx)(e)&&{title:n("Learn"),name:"Learn",primary:[{title:n("News"),name:"News",icon:(0,i.jsx)(x,{name:"MenuNewsIcon"}),link:"/headlines/news/",toNewPage:!1},{title:n("Alexandria"),name:"Alexandria",icon:(0,i.jsx)(x,{name:"MenuAlexandriaIcon"}),link:"https://coinmarketcap.com/alexandria/",toNewPage:!0},{title:n("Research"),name:"Research",icon:(0,i.jsx)(x,{name:"MenuCMCResearch"}),link:"https://coinmarketcap.com/alexandria/categories/cmc-research",toNewPage:!0},{title:n("Videos"),name:"Videos",icon:(0,i.jsx)(x,{name:"MenuVideosIcon"}),link:"https://www.youtube.com/channel/UCnhdZlwVd6ocXGhdSyV9Axg?sub_confirmation=1",toNewPage:!0},{title:n("Glossary"),name:"Glossary",icon:(0,i.jsx)(x,{name:"MenuGlossaryIcon"}),link:"https://coinmarketcap.com/alexandria/glossary",toNewPage:!0}]}].filter(Boolean)},Z=function(n){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:b((function(n){return n}),!1),t=0;t<e.length;t++){var i=e[t],o=JSON.stringify(i,(function(n,e){return(null===e||void 0===e?void 0:e.type)?void 0:e}));if(o.includes(n))return i.name}}},3154:function(n,e,t){t.d(e,{HJ:function(){return m},OF:function(){return d},lC:function(){return u},rW:function(){return s}});var i=t(5632),o=t(2784),a=t(87612),r=t(68050),c=t(29101),l=function(n){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=n.replace(/\/\/+/,"/");return e?"/"!==t.charAt(t.length-1)?t+"/":t:t.replace(/\/$/,"")},s=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en";return e&&"en"!==e?l("/".concat(e,"/").concat(n)):n},u=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",e=arguments.length>1?arguments[1]:void 0,t=function(n){return n.includes("community")?e&&"en"!==e?"/community/".concat(e,"/").concat(n.replace("/community","")):"/".concat(n):e&&"en"!==e?"/community/".concat(e,"/").concat(n):"/community/".concat(n)};return l(t(n))},m=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",e=arguments.length>1?arguments[1]:void 0,t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=function(n){return n.includes("dexscan")?e&&"en"!==e?"/dexscan/".concat(e,"/").concat(n.replace("/dexscan","")):"/".concat(n):e&&"en"!==e?"/dexscan/".concat(e,"/").concat(n):"/dexscan/".concat(n)};return l(i(n),t)},d=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",e=function(){l?t.push(g):location.href=g},t=(0,i.useRouter)(),a=(0,o.useContext)(c.Zy),r=a.language,l=a.isGravityApp,s=t.query.lang,m=s||r,d=(0,o.useState)(u(n,m)),g=d[0],p=d[1];return(0,o.useEffect)((function(){p(u(n,m))}),[n,m]),{href:g,onClick:e,communityLangPrefix:u("/",m).replace(/\/$/,"")}};e.ZP=function(n){var e=n.url,t=void 0===e?"/":e,l=n.needsLogin,u=void 0!==l&&l,m=n.beforeCallback,d=void 0===m?r.Z:m,g=n.formatUrl,p=(0,i.useRouter)(),h=(0,o.useContext)(a.gX),x=h.userInfo,f=h.invokeLogin,v=(0,o.useContext)(c.Zy).language,C=p.query.lang||v,k=s(t,C);g&&(k=g(t,C));var y=function(){"function"===typeof d&&d(t),location.href=k};return{onClick:u&&!(null===x||void 0===x?void 0:x.id)?function(n){n.preventDefault(),f(y)}:function(){return"function"===typeof d&&d()},href:k}}},61360:function(n,e,t){var i=t(62230),o=t(85244),a=t(98240),r=t(52322),c=(t(2784),t(82740)),l=t(78320);e.Z=(0,c.Zz)((function(n){var e=n.renderPath,t=n.size,c=void 0===t?"24px":t,s=n.viewBox,u=void 0===s?"0 0 24 24":s,m=n.theme,d=(0,a.Z)(n,["renderPath","size","viewBox","theme"]),g=Object.values(m.icons);return(0,r.jsx)(l.Z,(0,o.Z)((0,i.Z)({as:"svg",xmlns:"http://www.w3.org/2000/svg",height:c,width:c,viewBox:u},d),{children:e(g,m)}))}))},84611:function(n,e,t){var i=t(62230),o=t(52322),a=(t(2784),t(61360));e.Z=function(n){return(0,o.jsx)(a.Z,(0,i.Z)({renderPath:function(n,e){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M8.0002 7.99969L13.3335 2.6665M13.3335 2.6665H9.4547M13.3335 2.6665L13.3335 6.54518M6.54566 4.60614H3.85205C3.19749 4.60614 2.66687 5.13675 2.66687 5.79129V12.148C2.66687 12.8026 3.19749 13.3332 3.85205 13.3332H10.209C10.8635 13.3332 11.3941 12.8026 11.3941 12.148V9.45449",stroke:e.colors.neutral4,strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"})})})},fill:"none"},n))}},37881:function(n,e,t){t.d(e,{Xl:function(){return g}});var i=t(62230),o=t(85244),a=t(75190),r=t(52322),c=t(2784),l=t(82740),s=t(58358),u=t(53563);function m(){var n=(0,a.Z)(["\n  line-height: 1.5;\n  margin: 0;\n  ","\n  ","\n  ","\n"]);return m=function(){return n},n}var d=l.ZP.p.attrs({"data-sensors-click":!0}).withConfig({componentId:"sc-4984dd93-0"})(m(),u.Z,s.color,s.typography),g=(0,c.forwardRef)((function(n,e){return(0,r.jsx)(d,(0,o.Z)((0,i.Z)({},n),{as:"span",ref:e}))}));d.defaultProps={color:"text",fontSize:1},e.ZP=d}}]);