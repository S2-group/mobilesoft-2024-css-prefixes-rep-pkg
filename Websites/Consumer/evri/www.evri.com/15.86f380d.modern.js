(window.webpackJsonp=window.webpackJsonp||[]).push([[15,54],{280:function(t,e,n){"use strict";n.r(e);n(7),n(11),n(8);var r={name:"FeatureLinkCards",components:{ELinkCard:()=>Promise.resolve().then(n.bind(null,101)),SectionWrapper:n(434).default},props:{slice:{type:Object,required:!0,default:()=>({})}}},l=(n(589),n(1)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("section-wrapper",{staticClass:"feature-link-cards",class:{"feature-link-cards--pt":t.slice.primary.showPaddingTop}},[t.slice.primary.sectionTitle?e("h2",[t._v("\n    "+t._s(t.slice.primary.sectionTitle)+"\n  ")]):t._e(),t._v(" "),t.slice.primary.sectionDescription?e("p",{staticClass:"feature-link-cards__text"},[t._v("\n    "+t._s(t.slice.primary.sectionDescription)+"\n  ")]):t._e(),t._v(" "),e("div",{staticClass:"feature-link-cards__cards"},t._l(t.slice.items,(function(n){return e("ELinkCard",{key:n.index,staticClass:"feature-link-cards__card",attrs:{href:n.link.url,isSmallOnDesktop:!0,title:n.title,"right-icon":n.link.url?"chevron_circle_right":null,"label-text":n.pillEnabled?"New":null,"non-clickable":!n.link.url,"data-gtm-track":n.dataGtmTrack||null},scopedSlots:t._u([{key:"description",fn:function(){return[t._v("\n        "+t._s(n.content)+"\n      ")]},proxy:!0}],null,!0)})})),1)])}),[],!1,null,"f45e0dd8",null);e.default=component.exports;installComponents(component,{SectionWrapper:n(434).default})},433:function(t,e,n){t.exports={}},434:function(t,e,n){"use strict";n.r(e);n(435);var r=n(1),component=Object(r.a)({},(function(){var t=this._self._c;return t("section",{staticClass:"section-wrapper"},[t("div",{staticClass:"section-wrapper__container"},[this._t("default")],2)])}),[],!1,null,"1da6b492",null);e.default=component.exports},435:function(t,e,n){"use strict";n(433)},536:function(t,e,n){t.exports={}},589:function(t,e,n){"use strict";n(536)}}]);