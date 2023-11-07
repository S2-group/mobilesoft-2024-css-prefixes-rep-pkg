"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[55158],{63191:function(n,i,t){t.r(i),t.d(i,{default:function(){return H}});var e=t(62230),o=t(85244),l=t(75190),r=t(52322),a=t(2784),s=t(43560),c=t(82740),d=t(3070),u=t(84838),p=t(87681),x=t(81730),f=t(6853),v=t(87712),g=t(82066),h=t(28070),m=t(8354),w=t(87962),b=t(50285),y=t(37067),C=t(25084),Z=t(87612),j=t(15925),L=t(3154),z=t(73264),_=t(28316),k=t(9850),F=t(98789),P=t(66582),N=t(17237);function I(){var n=(0,l.Z)(["\n  position: fixed;\n  bottom: -300%;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 711px;\n  height: 118px;\n  background: var(--bg-color);\n  box-shadow: 0px 1px 2px rgba(128, 138, 157, 0.12), 0px 8px 32px rgba(128, 138, 157, 0.24);\n  backdrop-filter: blur(7.5px);\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 24px;\n  z-index: 9999;\n  transition: bottom 0.5s cubic-bezier(0, 0.81, 0.58, 1);\n  visibility: hidden;\n  ","\n  &.visible {\n    visibility: visible;\n    bottom: 24px;\n    ","\n  }\n  .left-box {\n    line-height: 1;\n    display: flex;\n    ","\n    > img {\n      margin-inline-end: 6px;\n    }\n    .content-box {\n      display: flex;\n      flex-direction: column;\n      line-height: 1.5;\n      justify-content: space-between;\n    }\n    .title {\n      font-size: 16px;\n    }\n    .sub-title {\n      font-size: 14px;\n      color: var(--color-light-neutral-5);\n    }\n  }\n  .ellipsis {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .close-icon-box {\n    width: 20px;\n    height: 20px;\n    display: none;\n    align-items: center;\n    justify-content: center;\n    position: absolute;\n    cursor: pointer;\n    color: var(--color-light-neutral-4);\n    top: 4px;\n    right: 6px;\n    display: flex;\n  }\n  .main-box {\n    ",";\n  }\n"]);return I=function(){return n},n}function M(){var n=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  ",";\n  & + & {\n    ",";\n    ",";\n  }\n  .avatar-item-bg {\n    width: 32px;\n    height: 32px;\n    .avatar-item-img {\n      width: 32px;\n      height: 32px;\n      margin-inline-end: unset;\n    }\n  }\n  .content {\n    flex: 1;\n    overflow: hidden;\n  }\n  .name {\n    line-height: 18px;\n    display: flex;\n    align-items: center;\n    color: var(--text-color);\n    font-size: 14px;\n    font-weight: 600;\n    > span {\n      display: inline-block;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      white-space: nowrap;\n      max-width: 140px;\n      ","\n    }\n    > img {\n      margin-left: 5px;\n      margin-right: 5px;\n      width: 14px;\n      height: 14px;\n    }\n  }\n  .follow-status {\n    font-size: 11px;\n    color: var(--color-light-neutral-5);\n    font-weight: 500;\n  }\n  & > button {\n    flex: 0;\n    min-width: 90px;\n    margin-left: 20px;\n    span:first-child {\n      margin-right: 4px;\n    }\n  }\n"]);return M=function(){return n},n}var A=c.ZP.section.withConfig({componentId:"sc-16ef0163-0"})(I(),(0,p.CC)("\n    width: calc(100% - 16px);\n    left: 8px;\n    transform: translateX(0);\n    height: auto;\n    border-radius: 16px;\n    padding: 12px;\n    flex-wrap: wrap;\n    margin: 0 auto;\n  "),(0,p.CC)("\n      bottom: 14px;\n    "),(0,p.CC)("\n      align-items: center;\n    "),(0,p.CC)("\n      display: flex;\n      justify-content: space-between;\n    ")),D=c.ZP.section.withConfig({componentId:"sc-16ef0163-1"})(M(),(0,p.CC)("\n    margin-top: 12px;\n  "),(0,p.gG)("\n      margin-top: 12px;\n    "),(0,p.CC)("\n      margin-left: 20px;\n    "),(0,p.CC)("\n        max-width: 100px;\n      ")),G=function(n){var i=n.data,t=(0,w.$G)().t,e=i.avatarId,o=i.nickname,l=i.authType,a=i.handle,s=i.guid,c=i.hasFollowed,d=i.avatar,u=i.followers,p=u&&(0,r.jsx)("div",{className:"follow-status",children:(0,r.jsxs)("span",{children:[(0,F.Z)(Number(u))," ",t("Followers")]})});return(0,r.jsxs)(D,{children:[(0,r.jsx)(z.Z,{size:"mobile",id:e,style:{marginRight:"8px"},avatarUrl:null===d||void 0===d?void 0:d.url}),(0,r.jsxs)("div",{className:"content",children:[(0,r.jsxs)("div",{className:"name",children:[(0,r.jsx)("span",{children:o}),(0,r.jsx)(N.Z,{authType:l})]}),p]}),!P.tq&&(0,r.jsx)(v.Z,{size:"sm",data:{guid:s,handle:a},invokeLoginGtmInfo:{category:"Gravity",action:"follow recommended account"},hasFollowed:c,eventData:{enter_from:"watchlist_toast_follow"},variant:"default",style:{padding:0}})]})},T=function(n){var i=n.coinData,t=n.title,e=n.subTitle,o=n.recommendList,l=n.canDisplay,s=n.toggleFollowFn,c=function(n){var i=n.canDisplay,t=(0,a.useState)(!0),e=t[0],o=t[1],l=(0,a.useRef)({isHover:!1});return(0,a.useEffect)((function(){var n=0;if(i){var t=setInterval((function(){l.current.isHover?n=0:n>=5?o(!1):n+=1}),1e3);return function(){clearInterval(t)}}}),[i]),{visible:e,setVisible:o,onMouseEnter:function(){l.current.isHover=!0},onMouseLeave:function(){l.current.isHover=!1}}}({canDisplay:l}),d=c.visible,u=c.setVisible,p=c.onMouseEnter,f=c.onMouseLeave,v=(0,w.$G)().t,g=null===o||void 0===o?void 0:o.slice(0,2);return(0,_.createPortal)((0,r.jsxs)(A,{className:d&&l?"visible":"",onMouseEnter:p,onMouseLeave:f,children:[(0,r.jsxs)("section",{className:"left-box",children:[(0,r.jsx)(k._,{id:i.id,dimension:P.tq?42:52,symbol:i.name}),(0,r.jsxs)("main",{className:"content-box",children:[(0,r.jsx)("span",{className:"title",children:t}),(0,r.jsx)("span",{className:"sub-title",children:e})]})]}),(0,r.jsx)("main",{className:"main-box",children:null===g||void 0===g?void 0:g.map((function(n,i){return(0,r.jsx)(G,{data:n},n.guid+i)}))}),P.tq&&(0,r.jsx)("span",{className:"close-icon-box",onClick:function(){u(!1)},children:(0,r.jsx)(b.Z,{})}),P.tq&&(0,r.jsx)(x.ZP,{variant:"default",fullWidth:!0,size:"sm",style:{marginTop:12},onClick:function(){s({guidList:null===g||void 0===g?void 0:g.filter((function(n){return!n.hasFollowed})).map((function(n){return n.guid})),following:!0}),C.ZP.sendEvent({category:"Gravity",action:"Community_ClickFollow",json_data:{enter_from:"watchlist_toast_follow_all"}}),u(!1)},children:v("Follow All")})]}),document.body)},E=t(63082),O=t(46153);function R(){var n=(0,l.Z)(["\n  display: flex;\n  ","\n  border-radius: 8px;\n  margin-top: 16px;\n\n  .content {\n    flex: 1;\n    overflow: hidden;\n  }\n  .name {\n    line-height: 18px;\n    display: flex;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    & > div {\n      text-overflow: ellipsis;\n      overflow: hidden;\n      white-space: nowrap;\n    }\n    .nickName {\n      display: flex;\n      align-items: center;\n      color: var(--text-color);\n      font-size: 14px;\n      font-weight: 600;\n      > span {\n        text-overflow: ellipsis;\n        overflow: hidden;\n        white-space: nowrap;\n      }\n      > img {\n        margin-left: 5px;\n        margin-right: 5px;\n        width: 14px;\n        height: 14px;\n      }\n    }\n    .userName {\n      font-weight: 500;\n      font-size: 11px;\n      color: var(--color-light-neutral-5);\n    }\n  }\n  .follow-status {\n    font-size: 11px;\n    color: var(--color-light-neutral-5);\n    font-weight: 500;\n  }\n  & > button {\n    flex: 0;\n    min-width: 90px;\n    margin-top: 4px;\n    margin-left: 4px;\n    span:first-child {\n      margin-right: 4px;\n    }\n  }\n  .coin-list-box {\n    margin-top: 8px;\n    .coin-list a {\n    }\n  }\n"]);return R=function(){return n},n}function V(){var n=(0,l.Z)(["\n  ","\n  position: relative;\n  h2 {\n    font-size: 24px;\n    line-height: 34px;\n    margin: 0 auto;\n    text-align: center;\n    ","\n  }\n  > p.sub {\n    font-size: 14px;\n    line-height: 20px;\n    margin: 8px 0;\n    color: var(--color-light-neutral-6);\n    text-align: center;\n    ","\n  }\n  .userInfoPopup {\n    max-width: 100%;\n    background: var(--color-light-neutral-1);\n    border-radius: 16px;\n    padding: 16px;\n    margin-top: 20px;\n    margin-bottom: 32px;\n    ","\n  }\n  .close-button {\n    color: #a6b0c3;\n    font-size: 12px;\n    z-index: 1;\n    cursor: pointer;\n    // float: right;\n    position: absolute;\n    right: -20px;\n    top: -14px;\n    z-index: 1;\n    ","\n  }\n  p.text {\n    max-height: 80px;\n  }\n"]);return V=function(){return n},n}c.ZP.section.withConfig({componentId:"sc-b15d6f36-0"})(R(),(0,p.CC)("padding: 8px 10px;"));var W=c.ZP.div.withConfig({componentId:"sc-b15d6f36-1"})(V(),(0,p.CC)("padding: 12px;border-radius: 12px;width:100%;background: var(--bg-color);"),(0,p.CC)("font-size: 18px;line-height: 28px;max-width: 260px"),(0,p.CC)("font-size: 12px;line-height: 18px;"),(0,p.CC)("padding: 12px;"),(0,p.CC)("right: 12px;top: 18px;")),q=function(n){var i=n.children,t=n.open,e=n.onClose;return(0,r.jsx)(s.ZP,{open:t,onClose:e,onOK:e,hideFooter:!0,contentStyle:(0,d.ZP)()?{padding:"26px",display:"flex",alignItems:"center"}:{padding:"32px"},style:(0,d.ZP)()?{background:"transparent"}:{width:496},closable:!1,children:(0,r.jsxs)(W,{children:[i,(0,r.jsx)(b.Z,{onClick:e,className:"close-button"})]})})};var H=function(n){var i,t,l,s=n.open,c=n.onClose,d=n.onFollowCb,p=void 0===d?function(){}:d,b=n.coinData,z=void 0===b?{}:b,_=n.accountInfo,k=n.type,F=void 0===k?O.y.FollowModal:k,P=(0,w.$G)().t,N=(0,a.useContext)(Z.gX).userInfo,I=(0,a.useContext)(E.fL).getLiveChatTracking,M=(0,L.OF)().communityLangPrefix,A=(0,g.useQuery)(h.Te.cryptoTweetAccount(null===z||void 0===z?void 0:z.id),(function(){return(0,h.OC)(null===z||void 0===z?void 0:z.id)}),{enabled:Boolean(!_&&(null===z||void 0===z?void 0:z.id)&&s),onSuccess:function(n){}}),D=A.data,G=A.isLoading,R=_||D,V=(0,g.useQuery)(h.Te.recommendedAccountsByCrypto(),(function(){return(0,h.jR)(null===z||void 0===z?void 0:z.id)}),{enabled:Boolean(!G&&(0,m.Z)(null===R||void 0===R?void 0:R.gravityAccount)&&N&&s)}),W=V.data,H=(V.isLoading,(0,m.Z)(null===R||void 0===R?void 0:R.gravityAccount)),S=!G&&H&&!(0,m.Z)(W),B=!H,X=(0,y.O)({enabled:!1}).toggleFollowFn,$=P("{{name}} is now on your Watchlist!",{name:null===z||void 0===z?void 0:z.name}),Q=S?P("You might want to follow these coins,too \ud83d\udc49\ud83c\udffb"):P("You are now following @{{name}}",{name:null===z||void 0===z?void 0:z.name});if(F===O.y.RecommendToast&&S)return(0,r.jsx)(T,{coinData:z,title:$,subTitle:Q,recommendList:W,canDisplay:s,toggleFollowFn:X});var Y,K,U,J,nn,tn={open:s,onClose:c};if(F===O.y.Follow)return(0,r.jsxs)(q,(0,o.Z)((0,e.Z)({},tn),{children:[(0,r.jsx)("h2",{children:P("Follow Community account")}),(0,r.jsx)(u.rn,{data:(0,o.Z)((0,e.Z)({},null===R||void 0===R?void 0:R.gravityAccount),{originalContent:null===(Y=null===R||void 0===R?void 0:R.tweets[0])||void 0===Y?void 0:Y.originalContent,textContent:null===(K=null===R||void 0===R?void 0:R.tweets[0])||void 0===K?void 0:K.textContent}),type:u.r8.Follow}),(0,r.jsx)(v.Z,{fullWidth:!0,size:"xl",data:{guid:null===R||void 0===R||null===(U=R.gravityAccount)||void 0===U?void 0:U.guid,handle:null===R||void 0===R||null===(J=R.gravityAccount)||void 0===J?void 0:J.handle},invokeLoginGtmInfo:{category:"Gravity",action:"follow recommended account"},style:{fontSize:14},cb:p,eventData:{enter_form:"watchlist_popup_follow"}}),(0,r.jsx)("section",{style:{marginTop:20,textAlign:"center"},children:(0,r.jsx)(f.Z,{href:"".concat(M,"/profile/").concat(null===R||void 0===R||null===(nn=R.gravityAccount)||void 0===nn?void 0:nn.handle),isDisableLanguagePrefix:!0,onClick:function(){C.ZP.sendEvent({category:"Gravity",action:"Community_FollowPopup_ViewOnCommunity",json_data:(0,e.Z)({crypto_id:z.id,guid:null===N||void 0===N?void 0:N.guid},I())})},children:"View on Community"})})]}));if(H)return null;var en=B&&(0,r.jsxs)(r.Fragment,{children:[G?(0,r.jsx)(j.Z,{size:"sm",isLoading:G}):(0,r.jsx)(u.rn,{data:(0,o.Z)((0,e.Z)({},null===R||void 0===R?void 0:R.gravityAccount),{originalContent:null===(i=null===R||void 0===R?void 0:R.tweets[0])||void 0===i?void 0:i.originalContent,textContent:null===(t=null===R||void 0===R?void 0:R.tweets[0])||void 0===t?void 0:t.textContent}),type:u.r8.Follow}),(0,r.jsx)(f.Z,{href:"".concat(M,"/profile/").concat(null===R||void 0===R||null===(l=R.gravityAccount)||void 0===l?void 0:l.handle),isDisableLanguagePrefix:!0,onClick:function(){C.ZP.sendEvent({category:"Gravity",action:"Community_WatchlistPopup_ViewOnCommunity",json_data:{crypto_id:z.id,guid:null===N||void 0===N?void 0:N.guid}})},children:(0,r.jsx)(x.ZP,{variant:"primary",fullWidth:!0,size:"xl",children:P("View on Community")})})]});return(0,r.jsxs)(q,(0,o.Z)((0,e.Z)({},tn),{children:[(0,r.jsx)("h2",{children:$}),(0,r.jsx)("p",{className:"sub",children:Q}),en]}))}},9850:function(n,i,t){t.d(i,{_:function(){return u},l:function(){return p}});var e=t(62230),o=t(98240),l=t(75190),r=t(52322),a=(t(2784),t(31504)),s=t(82740),c=t(78320);function d(){var n=(0,l.Z)(["\n  margin-left: 8px;\n  padding: 4px 8px 4px 6px;\n  display: inline-flex;\n  align-items: center;\n  background-color: var(--color-light-neutral-2);\n  border-radius: 16px;\n  line-height: 1;\n\n  img {\n    width: 16px;\n  }\n"]);return d=function(){return n},n}var u=function(n){var i=n.id,t=n.symbol,l=n.dimension,s=void 0===l?32:l,c=(0,o.Z)(n,["id","symbol","dimension"]);return(0,r.jsx)("img",(0,e.Z)({src:(0,a.pt)("/static/img/coins/64x64/".concat(i,".png")),height:"".concat(s),width:"".concat(s),alt:t},c))},p=(0,s.ZP)(c.Z).withConfig({componentId:"sc-2491111c-0"})(d())},51516:function(n,i,t){t.d(i,{l:function(){return e}});var e=function(n){if(isNaN(Number(n)))return 0;var i=Math.abs(Number(n));if(i>=1||0===i)return 0;for(var t=0,e=i%=1;e>=i;)t++,e=i%(1/Math.pow(10,t));return Math.max(t-1,0)}},66053:function(n,i,t){var e=t(62230),o=t(85244),l=t(98240),r=t(52322),a=t(2784),s=t(92324),c=function(n){var i=n.sx,t=void 0===i?{}:i,a=(0,l.Z)(n,["sx"]);return(0,r.jsx)(s.Z,(0,o.Z)((0,e.Z)({sx:t},a),{iconName:"verified",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.85 21.77C11.22 21.92 11.61 22 12 22C12.39 22 12.7801 21.92 13.1501 21.77L18.1 19.72C18.84 19.42 19.41 18.84 19.72 18.1L21.7701 13.15C22.0801 12.41 22.0801 11.59 21.7701 10.85L19.72 5.9C19.42 5.16 18.84 4.59 18.1 4.28L13.1501 2.23C12.4101 1.92 11.59 1.92 10.85 2.23L5.90004 4.28C5.16004 4.58 4.59005 5.16 4.28005 5.9L2.23006 10.85C1.92006 11.59 1.92006 12.41 2.23006 13.15L4.28005 18.1C4.58005 18.84 5.16004 19.41 5.90004 19.72L10.85 21.77ZM8.88002 15.01C9.27002 15.39 9.78 15.59 10.29 15.59C10.8 15.59 11.31 15.4 11.7 15.01L16.4 10.31C16.79 9.91998 16.79 9.28998 16.4 8.89998C16.01 8.50998 15.38 8.50998 14.99 8.89998L10.29 13.6L8.40004 11.71C8.01004 11.32 7.38001 11.32 6.99001 11.71C6.60001 12.1 6.60001 12.73 6.99001 13.12L8.88002 15.01Z",fill:"currentColor"})}))};i.Z=a.memo(c)},41744:function(n,i,t){var e=t(62230),o=t(85244),l=t(98240),r=t(75190),a=t(52322),s=(t(2784),t(82740)),c=t(78320),d=t(37881),u=t(38485),p=t(11399);function x(){var n=(0,r.Z)(["\n  font-weight: 600;\n  font-size: 14px;\n  white-space: nowrap;\n"]);return x=function(){return n},n}function f(){var n=(0,r.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n\n  svg {\n    margin-right: 2px;\n  }\n"]);return f=function(){return n},n}var v=(0,s.ZP)(c.Z).withConfig({componentId:"sc-5219c53f-0"})(x()),g=(0,s.ZP)(d.ZP).withConfig({componentId:"sc-5219c53f-1"})(f());i.Z=function(n){var i=n.change,t=void 0===i?0:i,r=(0,l.Z)(n,["change"]);return(0,a.jsx)(v,(0,o.Z)((0,e.Z)({"data-sensors-click":!0},r),{children:(0,a.jsxs)(g,{color:t>=0?"green":"red",style:r.style,"data-change":t>=0?"up":"down",children:[t>=0?(0,a.jsx)(u.Z,{size:"14px"}):(0,a.jsx)(p.Z,{size:"14px"}),Math.abs(t).toFixed(2)+"%",r.children]})}))}}}]);