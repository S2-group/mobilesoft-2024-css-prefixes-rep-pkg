import{bo as e,br as s,aw as t,av as i,aI as a,bq as r,bW as l,aB as o,az as c,bs as n,bm as d,as as S,bu as g,au as u,aF as b,aJ as y,aK as T,cs as v,bh as I,aM as m,bk as f,bt as h,bC as E}from"./index.module.js";import{M as L,e as C,f as R,h as p,v as V,k as z,i as P,q as O,p as w,r as A,s as D,t as k,w as x,x as _,y as B,F as $,z as F,A as N}from"./VirtualServiceItem-fecd9a5b.js";const G=e((({controllerIdLabel:e="",hideDataProcessingServices:S=!1,isVisible:g,showServicesToggles:u=!0,stickyRef:b},y)=>{const T=L(s()),v=S?1:0,I=T.length+1+v,{getItemSize:m,setItemSize:f}=C(I,50),{clearCategoryPurposeScrollToId:h,scrollToIdTabViewCategoryPurpose:E,previousView:O}=t(),{ui:w}=i(),A=a();if(r((()=>{g&&h()}),[g]),!w||l(w))return null;const D=O!==o.FIRST_LAYER&&E;return c(P,n({"data-testid":"uc-virtual-list",ref:y,estimatedItemSize:50,marginBottom:A.spacing.base.lg,isVisible:g,itemCount:I,itemSize:m,stickyRef:b},D&&{scrollToIndex:(()=>{if(E&&"string"==typeof E){const e=T.findIndex((e=>e.category.slug===E));if(e>=0)return e+1}return-1})()},{renderItem:({index:s,style:t})=>c(R,{key:s,style:p(t)},v&&s===I-1?c(V,{titleAriaLevel:1,getItemSize:m,itemCount:I,setItemSize:f,title:e}):c(z,n({titleAriaLevel:1,"data-testid":`uc-virtual-list-item-${s}`,categories:T,getItemSize:m,hasTopSpace:!0,hideDataProcessingServices:S,index:s,id:s},D&&{scrollToId:E},{setItemSize:f,showToggles:!d(w)||!w.secondLayer.hideToggles,showServicesToggles:u}))),width:"100%"}))}));var U=S(G);var j=S(e((({controllerIdLabel:e,filterByThirdCountry:i,isVisible:l,showServicesToggles:o=!0,title:d,stickyRef:S},u)=>{const{categories:b,onServiceToggle:y,services:T}=O(s()),v=i?T.filter((e=>e.usesThirdCountry)):T,I=v.length+1+1,m=null==d?I:I+1,{getItemSize:f,setItemSize:h}=C(m,50),{clearServiceVendorScrollToId:E,scrollToIdTabViewServiceVendors:L}=t(),{onCloseSubServiceDetail:z,onOpenSubServiceDetail:x}=w(),_=a();r((()=>{l&&(z(),E())}),[l]);return c(D,null,c(A,null,c(P,n({"data-testid":"uc-virtual-list",ref:u,estimatedItemSize:50,isVisible:l,itemCount:m,itemSize:f,marginBottom:_.spacing.base.lg,stickyRef:S},L&&{scrollToIndex:(()=>{if(L&&"string"==typeof L){const e=v.findIndex((e=>e.id===L));if(e>=0)return e+1}return-1})()},{renderItem:({index:s,style:t})=>c(R,{"data-testid":`uc-virtual-list-item-${s}`,key:s,style:p(t)},(s=>s===m-1?c(V,{titleAriaLevel:1,getItemSize:f,itemCount:m,setItemSize:h,title:e}):g(v)?c(k,n({titleAriaLevel:1,categories:b,hideToggle:!o,hasTopSpace:!0,index:s,id:s,onOpenSubServiceDetail:x,onToggleService:y,getItemSize:f,setItemSize:h,services:v,title:d},L&&{scrollToId:L})):null)(s)),width:"100%"}))))})));const q=S((({scrollerRef:e})=>{const{services:a}=O(s()),{labels:n,ui:S}=i(),{selected:g,select:L}=x(),[C,R]=u(!1),p=b.CATEGORIES_PURPOSES,V=h(),{view:z}=t(),P=z===o.SECOND_LAYER,{rules:w}=y(T.TAB_CONTENT);r((()=>{g||L(p)}),[]);const A=()=>!E(S)||!S.secondLayer.hideTogglesForServices;if(n&&S&&v(n)&&!I(n)&&!d(S)&&!l(S)){const{hideDataProcessingServices:s}=S.secondLayer;return s?c(_,{style:P?m({},w):{},"data-testid":"uc-tab-content-container"},c(U,{controllerIdLabel:n.general.controllerId,hideDataProcessingServices:s,ref:e,stickyRef:V,isVisible:g===b.CATEGORIES_PURPOSES,showServicesToggles:A()})):c(f,null,c(F,{ariaLabel:"SettingsTabs",ref:V},c(N,{ariaControls:"uc-panel-categories",testid:"uc-tab-categories",forPanel:b.CATEGORIES_PURPOSES,id:`${n.secondLayer.categoryTab}-id`,ariaLabel:`${n.secondLayer.categoryTab}`},n.secondLayer.categoryTab),c(N,{ariaControls:"uc-panel-services",testid:"uc-tab-services",forPanel:b.SERVICES_VENDORS,ariaLabel:`${n.secondLayer.serviceTab}`,id:`${n.secondLayer.serviceTab}-id`},n.secondLayer.serviceTab)),c(_,{style:P?m({},w):{},"data-testid":"uc-tab-content-container"},c(B,{id:b.CATEGORIES_PURPOSES,testid:"uc-panel-categories",ariaLabelledBy:`${n.secondLayer.categoryTab}-id`},c(U,{ref:e,stickyRef:V,isVisible:g===b.CATEGORIES_PURPOSES,showServicesToggles:A()})),c(B,{id:b.SERVICES_VENDORS,testid:"uc-panel-services",ariaLabelledBy:`${n.secondLayer.serviceTab}-id`},n.secondLayer.dataTransferFilter&&a.some((e=>e.usesThirdCountry))&&c($,{ariaControls:"uc-panel-services",labels:n.secondLayer.dataTransferFilter,filterByThirdCountry:C,setFilterByThirdCountry:R}),c(j,{ref:e,stickyRef:V,controllerIdLabel:n.general.controllerId,filterByThirdCountry:C,isVisible:g===b.SERVICES_VENDORS,showServicesToggles:A()}))))}return null}));export{q as D};