"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[482],{27345:function(e,i,t){t.d(i,{K:function(){return r}});var n=t(59499),l=t(85893);function a(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function r(e,i="div",t,r){return(0,l.jsx)(i,function(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?a(Object(t),!0).forEach(function(i){(0,n.Z)(e,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})}return e}({className:t,dangerouslySetInnerHTML:{__html:e}},r))}},31746:function(e,i,t){t.d(i,{l:function(){return m}});var n=t(85893),l=t(67294),a=t(27345),r=t(50308),o=t.n(r),s=t(19521),d=t(36679),c=t(99811);let p=(0,s.ZP)(d.F).withConfig({displayName:"PictureNavigationItem__StyledLink",componentId:"sc-1ev30w-0"})(["width:stretch;"]),m=({isCircle:e,isCircleWithoutBorder:i,item:t,imageParams:r="",lazyLoad:s=!0,NavItemTitleComponent:d=c.XQ,noAnimation:m=!1,onClick:u=o(),onLoad:h=o()})=>{var g;let x=(0,l.useCallback)(e=>u(e,t),[t,u]);return(0,n.jsx)(p,{className:"h-display-block",color:"onLightSecondary","data-lnk":null!==(g=null==t?void 0:t.link_tag)&&void 0!==g?g:null,href:null==t?void 0:t.link_url,onClick:x,underline:"invert",children:(null==t?void 0:t.image_path)&&(0,n.jsxs)(c.dp,{children:[(0,n.jsx)(c.YN,{alt:"",aspectRatio:"1x1",height:"100%",isCircle:e,isCircleWithoutBorder:i,lazyLoad:s,noAnimation:m,onLoad:h,src:`${null==t?void 0:t.image_path}?${r}`,width:"100%"}),(0,n.jsx)(d,{"data-test":"navItemTitleComponent",children:(0,a.K)(null==t?void 0:t.link_name,"span")})]})})};m.displayName="PictureNavigationItem"},28884:function(e,i,t){t.d(i,{o:function(){return d}});var n=t(85893),l=t(67294),a=t(50308),r=t.n(a),o=t(27345),s=t(99811);let d=({isCircle:e,item:i,onClick:t=r()})=>{var a;let d=(0,l.useCallback)(e=>{t(e,i)},[i,t]),c=e?s.Jr:s.Fg;return(0,n.jsx)(c,{"data-lnk":null!==(a=null==i?void 0:i.link_tag)&&void 0!==a?a:null,href:null==i?void 0:i.link_url,onClick:d,underline:"invert",children:(0,o.K)(null==i?void 0:i.link_name,"div","h-text-bold")})};d.displayName="TextNavigationItem"},63998:function(e,i,t){t.d(i,{K8:function(){return s}});var n=t(85893),l=t(99811),a=t(31746),r=t(28884);let o=e=>({__html:e}),s=({className:e,"data-test":i="pictureNavigation",headingSize:t=1,headline:s,imageParams:d="wid=225&hei=225&qlt=80&fmt=pjpeg",isCircle:c,isCircleWithoutBorder:p,isTextOnly:m,lazyLoad:u=!0,list:h,noAnimation:g=!1,onClick:x,picNavHeaderRef:v,subhead:f})=>c&&(m||!h[0].image_path)?(0,n.jsxs)(l.rb,{className:e,"data-test":i,children:[s&&(0,n.jsxs)(l.tP,{children:[(0,n.jsx)(l.wh,{elementRef:v,innerHTML:s,size:1}),f&&(0,n.jsx)(l.Eo,{dangerouslySetInnerHTML:o(f)})]}),(0,n.jsx)(l.N0,{center:"xs",tagName:"ul",children:h.map(e=>(0,n.jsx)(l.EF,{children:(0,n.jsx)(r.o,{isCircle:c,item:e,onClick:x})},e.link_name))})]}):(0,n.jsxs)(l.rb,{className:e,"data-test":i,children:[s&&(0,n.jsxs)(l.tP,{children:[(0,n.jsx)(l.wh,{elementRef:v,innerHTML:s,size:t}),f&&(0,n.jsx)(l.Eo,{dangerouslySetInnerHTML:o(f)})]}),(0,n.jsx)(l.N0,{center:"xs","data-test":"pictureNavigationFeatured",lgBlock:"6",mdBlock:"5",smBlock:"4",tagName:"ul",xsBlock:"3",children:h.map(e=>(0,n.jsx)(l.EF,{children:m||!e.image_path?(0,n.jsx)(r.o,{item:e,onClick:x}):(0,n.jsx)(a.l,{childNodes:e.children,imageParams:d,isCircle:c,isCircleWithoutBorder:p,item:e,lazyLoad:u,noAnimation:g,onClick:x})},e.link_name))})]});s.displayName="PictureNavigation"},99811:function(e,i,t){t.d(i,{EF:function(){return x},Eo:function(){return f},Fg:function(){return y},Jr:function(){return _},N0:function(){return v},XQ:function(){return m},YN:function(){return u},dp:function(){return p},rb:function(){return h},tP:function(){return c},wh:function(){return g}});var n=t(19521),l=t(56947),a=t(58310),r=t(55446),o=t(9196),s=t(17314),d=t(36679);let c=n.ZP.div.withConfig({displayName:"styles__HeadingWrapper",componentId:"sc-15suhkx-0"})(["margin-bottom:",";text-align:center;"],l.space.generic.x1),p=n.ZP.div.withConfig({displayName:"styles__ItemPictureContainer",componentId:"sc-15suhkx-1"})(["margin:5% 5% ",";"],l.space.generic.x1),m=n.ZP.div.withConfig({displayName:"styles__ItemTitle",componentId:"sc-15suhkx-2"})(["text-align:center;position:relative;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;"]),u=(0,n.ZP)(s.t).withConfig({displayName:"styles__PictureElement",componentId:"sc-15suhkx-3"})([""," ",";max-height:300px;max-width:300px;padding:",";"],({isCircle:e,isCircleWithoutBorder:i})=>(e||i)&&`img {
    border-radius: ${l.border.radius.circle};
  }`,({isCircle:e})=>e&&`img { border: 1px solid ${l.colors.palette.gray.light}; }`,l.space.generic.x1),h=n.ZP.div.withConfig({displayName:"styles__RootWrapper",componentId:"sc-15suhkx-4"})([""," padding-left:",";padding-right:",";"],(0,a.Bs)(),l.space.generic.x3,l.space.generic.x3),g=(0,n.ZP)(r.w).withConfig({displayName:"styles__StyledHeading",componentId:"sc-15suhkx-5"})(["margin-bottom:",";"],l.space.generic.x1),x=n.ZP.li.withConfig({displayName:"styles__StyledLi",componentId:"sc-15suhkx-6"})(["margin-bottom:",";"],l.space.generic.x1),v=(0,n.ZP)(o.X).withConfig({displayName:"styles__StyledRow",componentId:"sc-15suhkx-7"})(["list-style:none;margin-bottom:0;padding:0;"]),f=n.ZP.p.withConfig({displayName:"styles__SubheadWrapper",componentId:"sc-15suhkx-8"})(["color:",";font-size:",";a{text-decoration:underline;}"],l.colors.palette.gray.dark,l.font.size.text.medium),y=(0,n.ZP)(d.F).withConfig({displayName:"styles__StyledLink",componentId:"sc-15suhkx-9"})(["display:flex;align-items:center;justify-content:center;border:1px solid ",";border-radius:4px;padding:",";margin:7.5px;height:75px;@media (width >= 668px){height:110px;}"],l.colors.palette.gray.light,l.space.generic.x2),_=(0,n.ZP)(d.F).withConfig({displayName:"styles__StyledCircleLink",componentId:"sc-15suhkx-10"})(["width:150px;height:150px;border-radius:",";display:flex;justify-content:center;flex-direction:column;border:2px solid ",";margin:7.5px;overflow:hidden;"],l.border.radius.circle,l.colors.palette.gray.darkest)},29697:function(e,i,t){t.r(i),t.d(i,{BROWSE_TEST_ID:function(){return L},Browse:function(){return T}});var n=t(41609),l=t.n(n),a=t(85893),r=t(67294),o=t(10833),s=t(63998),d=t(12185),c=t(93279),p=t(55446),m=t(39206),u=t(23680),h=t(47269),g=t(19521),x=t(36679),v=t(17314),f=t(56947);let y={"--filmstrip-button-width":f.space.generic.x9},_={max:163,lg:143,md:123,sm:93},w=g.ZP.div.withConfig({displayName:"styles__ItemTitle",componentId:"sc-1y2pbia-0"})(["text-align:center;position:relative;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;font-size:",";"],f.font.size.text.medium),b=(0,g.ZP)(x.F).withConfig({displayName:"styles__PictureNavigationFilmstripItem",componentId:"sc-1y2pbia-1"})(["display:block;margin:0 ",";outline-offset:2px;text-decoration:none;width:","px;&:focus,&:hover{text-decoration:underline;}&:hover{outline:0;}img{width:","px;height:","px;}@media (max-width:","){width:","px;margin:0;img{width:","px;height:","px;}}@media (max-width:","){width:","px;margin:0;img{width:","px;height:","px;}}@media (max-width:","){width:","px;margin:0;img{width:","px;height:","px;}}&.text-only{height:","px;border-radius:50%;display:flex;justify-content:center;flex-direction:column;border:2px solid ",";margin:7.5px;overflow:hidden;@media (max-width:","){width:","px;height:","px;}@media (max-width:","){width:","px;height:","px;}@media (max-width:","){width:","px;height:","px;}}"],f.space.generic.x1,_.max,_.max,_.max,f.breakpoints.lg,_.lg,_.lg,_.lg,f.breakpoints.md,_.md,_.md,_.md,f.breakpoints.sm,_.sm,_.sm,_.sm,_.max,f.colors.palette.gray.darkest,f.breakpoints.lg,_.lg,_.lg,f.breakpoints.md,_.md,_.md,f.breakpoints.sm,_.sm,_.sm),k=g.ZP.div.withConfig({displayName:"styles__PictureNavigationFilmstripItemWrapper",componentId:"sc-1y2pbia-2"})(["height:100%;margin-top:",";margin-bottom:",";padding-right:",";"],f.space.generic.x1,f.space.generic.x1,f.space.generic.x2),N=(0,g.ZP)(v.t).withConfig({displayName:"styles__StyledCdnImage",componentId:"sc-1y2pbia-3"})(["display:block !important;width:auto !important;"]),j=/(<([^>]+)>)/gi,C=({headline:e,list:i})=>(0,a.jsxs)("div",{className:"h-padding-h-tight",children:[e&&(0,a.jsx)("div",{className:"h-text-center h-margin-b-tiny",children:(0,a.jsx)(p.w,{className:"h-margin-b-tiny",innerHTML:e,size:1})}),(0,a.jsx)("div",{className:"h-margin-t-x6",children:(0,a.jsx)(m.T,{alignItems:"center","data-test":"filmstrip",style:y,children:i.map(e=>{var i,t;let n=e.image_path?void 0:"text-only",l=(0,u.Jx)(null===(i=e.link_name)||void 0===i?void 0:i.replace(j,""));return(0,a.jsx)(k,{children:(0,a.jsxs)(b,{className:n,"data-lnk":e.link_tag,href:e.link_url,children:[e.image_path?(0,a.jsx)(N,{alt:l,className:"h-margin-b-tiny",src:new h.Z(e.image_path).href,width:_.sm}):null,(0,a.jsx)(w,{dangerouslySetInnerHTML:{__html:null!==(t=e.link_name)&&void 0!==t?t:""}})]})},e.link_url)})})})]});C.displayName="PictureNavigationFilmstrip";let P=g.ZP.div.withConfig({displayName:"styles__PictureNavigationWrapper",componentId:"sc-7wjlys-0"})(["text-align:center;margin:"," auto;max-width:1250px;li{font-size:",";}a{color:",";}"],f.space.generic.x4,f.font.size.text.medium,f.colors.palette.gray.darkest),I=(e="")=>{let i=e.split("/");if(i.length<3)return null;let t=i[2],n=t.split("_");if(n.length<4)return null;let l=n[3];return l},S=(e,i,t)=>"0030"===e?"Shop by category":"0015"!==e||i?i:t,O=(e,i=[],t,n=[])=>{let l=i;return"root"!==t&&"0015"===e&&(l=[...n,...l]),l.length||(l=[...n]),l};var Z=t(60376);let L="@web/SlingshotComponents/Browse",T=({content:e={},presentation:i})=>{var t,n,p;let m=(0,r.useContext)(o.I.Context),u=(0,d.r)();if(l()(e))return null;let{headline:h,presentation_type:g,scene7_params:x,shape:v,subhead:f,taxonomy_nodes:y=[],text_only:_}=e,w=u(c.rU);if(l()(y)&&l()(w))return null;let b=null!==(t=I(i))&&void 0!==t?t:void 0,k=u(c.dn),N=S(b,h,k),j=u(c.yw),T=O(b,y,j,w),B=(0,Z.R)(T);if("carousel"===g)return(0,a.jsx)("div",{"data-test":L,children:(0,a.jsx)(C,{headline:N,list:B})});let E=x;m.hasWebpSupport&&(E=null==x?void 0:x.replace("fmt=pjpeg","fmt=webp"));let F="circle"===v&&(_||l()(null==B?void 0:null===(n=B[0])||void 0===n?void 0:n.image_path)),z="circle"===v&&!_&&!l()(null==B?void 0:null===(p=B[0])||void 0===p?void 0:p.image_path);return(0,a.jsx)(P,{"data-test":L,children:(0,a.jsx)(s.K8,{headline:N,imageParams:E,isCircle:F,isCircleWithoutBorder:z,isTextOnly:_,list:B,subhead:f})})};T.displayName="Browse"},60376:function(e,i,t){t.d(i,{R:function(){return a}});let n=e=>{var i;return null==e?void 0:null===(i=e.name)||void 0===i?void 0:i.replace(/\s/g,"")},l=(e,i,t)=>t?`c_bubcat_${e}`:`C_Browse_${i.toString().padStart(2,"0")}_${e}_`,a=(e=[],i=!1)=>e.map((e,t)=>{var a,r,o,s,d,c,p,m,u,h,g,x;return{link_url:null!==(a=null!==(r=e.link_url)&&void 0!==r?r:null==e?void 0:null===(o=e.seo_data)||void 0===o?void 0:o.canonical_url)&&void 0!==a?a:e.canonical_url,link_name:null!==(s=null!==(d=null!==(c=e.link_name)&&void 0!==c?c:e.name)&&void 0!==d?d:e.seo_h1)&&void 0!==s?s:null==e?void 0:null===(p=e.seo_data)||void 0===p?void 0:p.seo_h1,image_path:null!==(m=e.image_path)&&void 0!==m?m:null==e?void 0:null===(u=e.seo_data)||void 0===u?void 0:u.image_path,link_tag:null!==(h=e.link_tag)&&void 0!==h?h:l(null!==(g=null!==(x=e.seo_h1)&&void 0!==x?x:n(e))&&void 0!==g?g:"",t+1,i)}})}}]);