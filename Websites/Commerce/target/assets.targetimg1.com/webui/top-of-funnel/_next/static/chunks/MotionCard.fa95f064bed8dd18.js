"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4705],{71616:function(e,t,n){n.r(t);var l=n(41609),s=n.n(l),u=n(23279),a=n.n(u),r=n(85893),i=n(67294),o=n(94184),c=n.n(o),d=n(17619),f=n(2519),p=n(16782);let h=({children:e,className:t,onPlayReset:n,onSetIsReplayButtonVisible:l,shouldPlayVideo:u,videoSourcesMd:o,videoSourcesSm:h})=>{let{0:E,1:k}=(0,i.useState)(!1),{screenMd:v}=(0,d.l)(),{0:y,1:m}=(0,i.useState)(!1),{0:C,1:b}=(0,i.useState)(!1),w=(0,i.useRef)(null),g=(0,i.useCallback)(()=>{y&&C&&z()},[y,C]),x=(0,i.useCallback)(()=>{let{current:e}=w;e&&(e.setAttribute("muted",""),"function"==typeof(null==e?void 0:e.load)&&e.load())},[]);(0,i.useEffect)(()=>{x(),b(!0),g()},[x,C,g]),(0,i.useEffect)(()=>{v||s()(h)||x()},[x,v,h]);let N=()=>{y||(m(!0),g())};(0,i.useEffect)(()=>{u&&(z(),n&&n())},[n,u]),(0,i.useEffect)(()=>{let e=a()(S,f.xE);return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}});let S=()=>{!v&&h&&h.length>0&&(m(!1),k(!1))},_=(0,i.useCallback)(()=>{k(!1),l&&l(!0)},[l]),j=(0,i.useCallback)(()=>{k(!0),l&&l(!1)},[l]),z=()=>{let{current:e}=w;e&&(e.currentTime=0,e.play())},L=v||s()(h)?o:h;return s()(L)?null:(0,r.jsxs)("div",{className:c()({"video-playing":E},t),children:[e,(0,r.jsx)(p.nk,{"aria-hidden":"true",crossOrigin:"anonymous","data-test":"superhero--video",muted:!0,onCanPlayThrough:N,onEnded:_,onPlay:j,playsInline:!0,ref:w,children:null==L?void 0:L.map(({path:e,type:t})=>(0,r.jsx)("source",{src:e,type:t},t))},(!v).toString())]})};t.default=h,h.displayName="MotionCard"}}]);