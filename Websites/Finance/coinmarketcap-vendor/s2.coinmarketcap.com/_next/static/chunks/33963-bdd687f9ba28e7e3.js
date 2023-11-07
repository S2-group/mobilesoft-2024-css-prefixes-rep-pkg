"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[33963],{45635:function(e,r,t){t.d(r,{Be:function(){return N},CW:function(){return w},Cd:function(){return K},Dj:function(){return _},EM:function(){return L},I7:function(){return Z},Ji:function(){return B},KL:function(){return O},KX:function(){return $},Kd:function(){return T},LO:function(){return W},LX:function(){return D},Mg:function(){return b},Os:function(){return M},RI:function(){return q},RU:function(){return C},Uf:function(){return V},Us:function(){return E},co:function(){return G},d4:function(){return F},eB:function(){return A},f1:function(){return k},hr:function(){return P},it:function(){return I},x$:function(){return z}});var a=t(62230),n=t(85244),i=t(98240),o=t(75190),s=t(52322),c=t(37881),l=t(87962),h=t(4977),u=t(82740),d=t(29101),p=t(36860),f=t(96399);function m(){var e=(0,o.Z)(["\n  margin-top: 6px;\n  display: inline-flex;\n  width: ",";\n  height: 20px;\n  border-radius: 4px;\n  background-color: ",";\n"]);return m=function(){return e},e}var y=function(e){var r=e.children,t=(0,i.Z)(e,["children"]);return(0,s.jsx)(c.ZP,(0,n.Z)((0,a.Z)({color:"neutral6"},t),{children:r}))},v=function(e){var r=e.children,t=(0,i.Z)(e,["children"]);return(0,s.jsx)(y,(0,n.Z)((0,a.Z)({style:{display:"inline"}},t),{children:r}))},x=function(e){var r=e.children,t=(0,i.Z)(e,["children"]);return(0,s.jsx)(y,(0,n.Z)((0,a.Z)({as:"span",fontWeight:"semibold"},t),{children:r}))},j=u.ZP.div.withConfig({componentId:"sc-c54090d9-0"})(m(),(function(e){return e.width}),(function(e){return e.theme.isDay?"#EFF2F5":"#2C2C38"})),g=function(e){var r=e.value;return(0,s.jsx)(f.Z,{change:r,style:{fontWeight:600}})};function k(){var e=(0,d.xf)(),r=e.marketCap,t=e.marketCapChange,a=(0,p.useCurrencyFormatter)(r,{abbreviate:!0});return(0,s.jsxs)(v,{children:[(0,s.jsx)(l.cC,{i18nKey:"The global crypto market cap is <bold>{{marketCapDisplay}}</bold>",values:{marketCapDisplay:a},components:{bold:(0,s.jsx)(x,{})}}),", ",R(t)?(0,s.jsxs)(l.cC,{i18nKey:"a <1></1> increase over the last day.",children:["a ",(0,s.jsx)(g,{value:t})," increase over the last day."]}):(0,s.jsxs)(l.cC,{i18nKey:"a <1></1> decrease over the last day.",children:["a ",(0,s.jsx)(g,{value:t})," decrease over the last day."]})]})}function b(e){var r=e.value,t=e.valueChange,a=(0,l.$G)().t,n=(0,p.useCurrencyFormatter)(r,{abbreviate:!0});return(0,s.jsxs)(v,{children:[a("This page lists cryptocurrencies and tokens related to digital storage listed in order by market cap.")," ",(0,s.jsx)(l.cC,{i18nKey:"The total market capitalization today is <bold>{{valueDisplay}}</bold>",values:{valueDisplay:n},components:{bold:(0,s.jsx)(x,{})}}),", ",R(t)?(0,s.jsxs)(l.cC,{i18nKey:"a <1></1> increase over the last day.",children:["a ",(0,s.jsx)(g,{value:t})," increase over the last day."]}):(0,s.jsxs)(l.cC,{i18nKey:"a <1></1> decrease over the last day.",children:["a ",(0,s.jsx)(g,{value:t})," decrease over the last day."]})]})}function w(e){var r=e.value,t=e.valueChange,a=e.tagName,n=(0,l.$G)().t,i=(0,p.useCurrencyFormatter)(r,{abbreviate:!0});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(y,{children:[n("This page lists the top yield farming tokens by market capitalization.")," ",(0,s.jsx)(l.cC,{i18nKey:"The total value of all yield farming tokens today is <bold>{{valueDisplay}}</bold>",values:{valueDisplay:i},components:{bold:(0,s.jsx)(x,{})}}),", ",R(t)?(0,s.jsxs)(l.cC,{i18nKey:"which is an increase of value <1></1> in the last 24 hours.",children:["which is an increase of value ",(0,s.jsx)(g,{value:t})," in the last 24 hours."]}):(0,s.jsxs)(l.cC,{i18nKey:"which is a decrease of value <1></1> in the last 24 hours.",children:["which is a decrease of value ",(0,s.jsx)(g,{value:t})," ","in the last 24 hours."]})]}),(0,s.jsx)(y,{children:n("Listed below are the top crypto coins and tokens used for {{tagName}}. They are listed in size by market capitalization. To reorder the list, simply click on one of the options - such as 24h or 7d - to see the sector from a different perspective.",{tagName:a})})]})}function C(){var e=(0,d.xf)(),r=e.derivativeChange,t=e.derivativesVol,a=(0,p.useCurrencyFormatter)(t,{abbreviate:!0});return(0,s.jsxs)(v,{children:[(0,s.jsxs)(l.cC,{i18nKey:"The perpetual swaps 24h volume is <1><0>{{marketVolDisplay}}</0></1>,",children:["The perpetual swaps 24h volume is ",(0,s.jsx)(x,{children:{marketVolDisplay:a}}),","]})," ",R(r)?(0,s.jsxs)(l.cC,{i18nKey:"a <1></1> increase over the last day.",children:["a ",(0,s.jsx)(g,{value:r})," increase over the last day."]}):(0,s.jsxs)(l.cC,{i18nKey:"a <1></1> decrease over the last day.",children:["a ",(0,s.jsx)(g,{value:r})," decrease over the last day."]})]})}function D(){var e=(0,d.xf)(),r=e.defiChange,t=e.defiMarketCap,a=(0,p.useCurrencyFormatter)(t,{abbreviate:!0});return(0,s.jsxs)(v,{children:[(0,s.jsxs)(l.cC,{i18nKey:"The DeFi crypto market cap is <1><0>{{marketCapDisplay}}</0></1>,",children:["The DeFi crypto market cap is ",(0,s.jsx)(x,{children:{marketCapDisplay:a}}),","]})," ",R(r)?(0,s.jsxs)(l.cC,{i18nKey:"a <1></1> increase over the last day.",children:["a ",(0,s.jsx)(g,{value:r})," increase over the last day."]}):(0,s.jsxs)(l.cC,{i18nKey:"a <1></1> decrease over the last day.",children:["a ",(0,s.jsx)(g,{value:r})," decrease over the last day."]})]})}function T(){var e=(0,l.$G)().t;return(0,s.jsx)(v,{children:e("We have created an index for each cryptocurrency category. Categories are ranked by 24h price change. Click on a crypto category name to see the constituent parts of the index and their recent price performance.")})}function F(){var e=(0,l.$G)().t;return(0,s.jsx)(v,{children:e("What is more valuable? Bitcoin vs gold? Bitcoin vs Apple? Bitcoin vs Google? Below the largest companies, assets and cryptocurrencies in the world are listed by market capitalization for comparison.")})}function K(){var e=(0,l.$G)().t;return(0,s.jsx)(v,{children:e("How do the largest cryptocurrencies, such as Bitcoin and Ethereum, compare to the largest fiat currencies in the world? We list them by market cap for you.")})}function V(){var e=(0,l.$G)().t;return(0,s.jsx)(v,{children:e("Visualize the market with our crypto heatmap, showing price rises and falls and relative asset size.")})}function Z(e){var r=e.isPolkadot;return(0,s.jsx)(v,{children:r?(0,s.jsxs)(l.cC,{children:["This page lists auctions and associated crowdloans on all Polkadot parachain lease offerings. Auction mechanisms are complicated and we suggest that you read this ",(0,s.jsx)("a",{target:"_blank",href:"https://coinmarketcap.com/alexandria/article/parachain-slot-auctions-explained",rel:"noreferrer",children:"article"})," for an indepth description."]}):(0,s.jsxs)(l.cC,{children:["This page lists auctions and associated crowdloans on all Kusama parachain lease offerings. Auction mechanisms are complicated and we suggest that you read this ",(0,s.jsx)("a",{target:"_blank",href:"https://coinmarketcap.com/alexandria/article/parachain-slot-auctions-explained",rel:"noreferrer",children:"article"})," for an indepth description."]})})}function P(e){var r=e.isPolkadot;return(0,s.jsx)(v,{children:r?(0,s.jsxs)(l.cC,{children:["This page shows the current and completed Polkadot parachain lease offerings. It is estimated that there can be up to 100 support parachains and they will be auctioned again when their lease period ends. Auction mechanisms are complicated and we suggest that you read this ",(0,s.jsx)("a",{target:"_blank",href:"https://coinmarketcap.com/alexandria/article/parachain-slot-auctions-explained",rel:"noreferrer",children:"article"})," for an indepth description."]}):(0,s.jsxs)(l.cC,{children:["This page shows the current and completed Kusama parachain lease offerings. It is estimated that there can be up to 100 support parachains and they will be auctioned again when their lease period ends. Auction mechanisms are complicated and we suggest that you read this ",(0,s.jsx)("a",{target:"_blank",href:"https://coinmarketcap.com/alexandria/article/parachain-slot-auctions-explained",rel:"noreferrer",children:"article"})," for an indepth description."]})})}function $(e){var r=e.isPolkadot;return(0,s.jsx)(v,{children:r?(0,s.jsxs)(l.cC,{children:["This page shows the current and completed crowdloans for Polkadot auctions. Crowdloans enable projects to raise capital from around the world to bid in the auctions. Lenders are usually required to stake their DOT, which will be locked in a smart contract and then will receive native tokens from the project they are lending to if it wins an auction. Auction mechanisms are complicated and we suggest that you read this ",(0,s.jsx)("a",{target:"_blank",href:"https://coinmarketcap.com/alexandria/article/parachain-slot-auctions-explained",rel:"noreferrer",children:"article"})," for an indepth description."]}):(0,s.jsxs)(l.cC,{children:["This page shows the current and completed crowdloans for Kusama auctions. Crowdloans enable projects to raise capital from around the world to bid in the auctions. Lenders are usually required to stake their KSM, which will be locked in a smart contract and then will receive native tokens from the project they are lending to if it wins an auction. Auction mechanisms are complicated and we suggest that you read this ",(0,s.jsx)("a",{target:"_blank",href:"https://coinmarketcap.com/alexandria/article/parachain-slot-auctions-explained",rel:"noreferrer",children:"article"})," for an indepth description."]})})}function G(){var e=(0,l.$G)().t;return(0,s.jsx)(v,{children:e("Which crypto coins and tokens with volume (24h) > US$50,000 have gained or lost the most in the last 24 hours?")})}function N(){var e=(0,l.$G)().t;return(0,s.jsx)(v,{children:e("New cryptocurrencies added to CoinMarketCap in the last 30 days")})}function B(){var e=(0,l.$G)().t;return(0,s.jsx)(v,{children:e("Our cryptocurrencies to watch lists are based on the latest price and user behavior data.")})}function E(){var e=(0,l.$G)().t;return(0,s.jsx)(v,{children:e("Below is a list of the trending cryptocurrencies that people are searching for on CoinMarketCap.")})}function z(){var e=(0,l.$G)().t;return(0,s.jsx)(v,{children:e("See which cryptocurrencies CoinMarketCap visitors are viewing most recently.")})}function _(e){var r=e.btcPrice,t={abbreviate:!0},a=(0,d.xf)(),n=a.totalVol,i=a.totalVolChange,o=a.defiVol,c=a.stablecoinVol,h=a.btcDominance,u=a.btcDominanceChange,f=(0,p.useCurrencyFormatter)(n,t),m=(0,p.useCurrencyFormatter)(o,t),v=o/n*100,j=(0,p.usePercentFormatter)(v),k=(0,p.useCurrencyFormatter)(c,t),b=c/n*100,w=(0,p.usePercentFormatter)(b),C=((0,p.useCurrencyFormatter)(r),(0,p.usePercentFormatter)(h));(0,p.usePercentFormatter)(u);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(y,{mb:1,children:[R(i)?(0,s.jsxs)(l.cC,{i18nKey:"The total crypto market volume over the last 24 hours is <1><0>{{totalVolDisplay}}</0></1>, which makes a <3></3> increase.",children:["The total crypto market volume over the last 24 hours is ",(0,s.jsx)(x,{children:{totalVolDisplay:f}}),", which makes a ",(0,s.jsx)(g,{value:i})," increase."]}):(0,s.jsxs)(l.cC,{i18nKey:"The total crypto market volume over the last 24 hours is <1><0>{{totalVolDisplay}}</0></1>, which makes a <3></3> decrease.",children:["The total crypto market volume over the last 24 hours is ",(0,s.jsx)(x,{children:{totalVolDisplay:f}}),", which makes a ",(0,s.jsx)(g,{value:i})," decrease."]})," ",(0,s.jsxs)(l.cC,{i18nKey:"The total volume in DeFi is currently <1><0>{{defiVolDisplay}}</0></1>, <3><0>{{defiVolRatioDisplay}}</0></3> of the total crypto market 24-hour volume.",children:["The total volume in DeFi is currently ",(0,s.jsx)(x,{children:{defiVolDisplay:m}}),", ",(0,s.jsx)(x,{children:{defiVolRatioDisplay:j}})," of the total crypto market 24-hour volume."]})," ",(0,s.jsxs)(l.cC,{i18nKey:"The volume of all stable coins is now <1><0>{{stablecoinVolDisplay}}</0></1>, which is <3><0>{{stablecoinVolRatioDisplay}}</0></3> of the total crypto market 24-hour volume.",children:["The volume of all stable coins is now ",(0,s.jsx)(x,{children:{stablecoinVolDisplay:k}}),", which is ",(0,s.jsx)(x,{children:{stablecoinVolRatioDisplay:w}})," of the total crypto market 24-hour volume."]})]}),(0,s.jsx)(y,{children:R(u)?(0,s.jsxs)(l.cC,{i18nKey:"Bitcoin\u2019s dominance is currently <1><0>{{btcDominanceDisplay}}</0></1>, an increase of <3></3> over the day.",children:["Bitcoin\u2019s dominance is currently ",(0,s.jsx)(x,{children:{btcDominanceDisplay:C}}),", an increase of ",(0,s.jsx)(g,{value:u})," over the day."]}):(0,s.jsxs)(l.cC,{i18nKey:"Bitcoin\u2019s dominance is currently <1><0>{{btcDominanceDisplay}}</0></1>, a decrease of <3></3> over the day.",children:["Bitcoin\u2019s dominance is currently ",(0,s.jsx)(x,{children:{btcDominanceDisplay:C}}),", a decrease of ",(0,s.jsx)(g,{value:u})," over the day."]})})]})}function R(e){return e>=0}function W(e){var r=(0,h.Z)(e.liquidity)?e.liquidity:0,t=(0,p.useCurrencyFormatter)(r,{abbreviate:!1});return e.loading?(0,s.jsx)(j,{width:"40%"}):0===r?null:(0,s.jsx)(v,{children:(0,s.jsxs)(l.cC,{i18nKey:"The total locked value of liquidity pools in yield farming projects is <1><0>{{marketVolDisplay}}</0></1>",children:["The total locked value of liquidity pools in yield farming projects is ",(0,s.jsx)(x,{children:{marketVolDisplay:t}})]})})}function q(e){return(0,s.jsx)(v,{children:e.children})}function A(e){var r=e.exchangesNum,t=e.volume24h,a=(0,p.useCurrencyFormatter)(t,{abbreviate:!0});return(0,s.jsx)(v,{children:(0,s.jsxs)(l.cC,{i18nKey:"We now track <1><0>{{exchangesNum}}</0></1> spot exchanges with a total 24h volume of <3><0>{{volume}}</0></3>. For more info on exchange ranking, click <5>here</5>.",children:["We now track ",(0,s.jsx)(x,{children:{exchangesNum:r}})," spot exchanges with a total 24h volume of ",(0,s.jsx)(x,{children:{volume:a}}),". For more info on exchange ranking, click ",(0,s.jsx)("a",{href:" https://support.coinmarketcap.com/hc/en-us/articles/360052030111-Exchange-Ranking",target:"_blank",children:" here "}),"."]})})}function M(){var e=(0,l.$G)().t;return(0,s.jsx)(v,{children:e("This page lists the top 100 cryptocurrency coins by market cap.")})}function I(){var e=(0,l.$G)().t;return(0,s.jsx)(v,{children:e("These crypto coins have their own blockchains which use proof of work mining or proof of stake in some form. They are listed with the largest coin by market capitalization first and then in descending order. To reorder the list, just click on one of the column headers, for example, 7d, and the list will be reordered to show the highest or lowest coins first.")})}function L(){var e=(0,l.$G)().t;return(0,s.jsx)(v,{children:e("This page lists the top 100 cryptocurrency tokens by market cap.")})}function O(e){var r=e.ethPrice,t=(0,l.$G)().t,a=(0,d.xf)(),n=a.stablecoinVol,i=a.defiVol,o={abbreviate:!0},c=(0,p.useCurrencyFormatter)(n,o),h=(0,p.useCurrencyFormatter)(i,o),u=(0,p.useCurrencyFormatter)(r);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(y,{mb:3,children:(0,s.jsxs)(l.cC,{i18nKey:"These crypto tokens exist on other blockchains which either use proof of work mining or proof of stake in some form. The majority of tokens are located on Ethereum. The list includes stablecoins, DeFi projects and the tokens of decentralized exchanges. The total volume of stablecoins is currently <1><0>{{stablecoinVolDisplay}}</0></1>. The total volume in DeFi is currently <3><0>{{defiVolDisplay}}</0></3>. Ethereum\u2019s price is currently <5><0>{{ethPriceDisplay}}</0></5>.",children:["These crypto tokens exist on other blockchains which either use proof of work mining or proof of stake in some form. The majority of tokens are located on Ethereum. The list includes stablecoins, DeFi projects and the tokens of decentralized exchanges. The total volume of stablecoins is currently ",(0,s.jsx)(x,{children:{stablecoinVolDisplay:c}}),". The total volume in DeFi is currently ",(0,s.jsx)(x,{children:{defiVolDisplay:h}}),". Ethereum\u2019s price is currently ",(0,s.jsx)(x,{children:{ethPriceDisplay:u}}),"."]})}),(0,s.jsx)(y,{children:t("They are listed with the largest token by market capitalization first and then in descending order. To reorder the list, just click on one of the column headers, for example, 7d, and the list will be reordered to show the highest or lowest coins first.")})]})}},96399:function(e,r,t){var a=t(62230),n=t(75190),i=t(52322),o=t(2784),s=t(82740),c=t(64626);function l(){var e=(0,n.Z)(["\n  white-space: nowrap;\n  span[class^='icon'] {\n    margin-right: 4px;\n  }\n"]);return l=function(){return e},e}var h=s.ZP.span.withConfig({componentId:"sc-f1e838b2-0"})(l());r.Z=function(e){var r,t=e.change,n=e.id,s=e.inViewPort,l=e.invert,u=e.style,d=e.hide,p=e.data,f=e.className;if(!t&&p&&!(null===p||void 0===p?void 0:p.quote)&&!(null===p||void 0===p||null===(r=p.quotes)||void 0===r?void 0:r[0]))return(0,i.jsx)(i.Fragment,{children:"--"});var m=(0,o.useState)(Number(t)||0),y=m[0],v=m[1];(0,o.useEffect)((function(){t&&v(Number(t))}),[t]);var x=(0,o.useRef)((function(e){try{n===e.id&&v(e.p24h)}catch(r){}}));(0,o.useEffect)((function(){s?c.C.subscribe({id:n},x.current):c.C.unsubscribe({id:n},x.current)}),[s,n]);var j=y>=0,g="var(--".concat(j?"up":"down","-color)"),k=(0,a.Z)({backgroundColor:l?g:void 0,color:l?"#fff":g,padding:l?"3px 10px":0,borderRadius:8},u||{});return(0,i.jsx)(h,{style:k,className:f,children:d||(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{className:"icon-Caret-".concat(j?"up":"down")}),null===y||void 0===y?void 0:y.toFixed(2).slice(j?0:1),"%"]})})}},80499:function(e,r){r.Z=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(e){return r.reduce((function(e,r){return r(e)}),e)}}}}]);