(window.webpackJsonp=window.webpackJsonp||[]).push([[10,54,83],{276:function(t,e,r){"use strict";r.r(e);r(65);var n=r(426),c=r(434),l={name:"ArticleLinkModule",components:{ArticleLinkItem:n.default,SectionWrapper:c.default},props:{slice:{type:Object,required:!0,default:()=>({})}}},o=(r(582),r(1)),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("section-wrapper",{staticClass:"article-link-module",class:t.slice.primary.SectionColors},[t.slice.primary.SectionTitle?e("prismic-rich-text",{attrs:{field:t.slice.primary.SectionTitle}}):t._e(),t._v(" "),t.slice.primary.SectionDescription?e("prismic-rich-text",{staticClass:"section-description",attrs:{field:t.slice.primary.SectionDescription}}):t._e(),t._v(" "),e("div",{class:["cards-container",t.slice.variation.startsWith("3Column")&&"cards-container--3columns"]},t._l(t.slice.items,(function(r,i){return e("ArticleLinkItem",{key:"slice-item-".concat(i),attrs:{item:r,"three-column":t.slice.variation.startsWith("3Column")}})})),1)],1)}),[],!1,null,"19f8b552",null);e.default=component.exports;installComponents(component,{SectionWrapper:r(434).default})},426:function(t,e,r){"use strict";r.r(e);var n={name:"ArticleLinkItem",components:{EButtonTertiary:r(84).a},props:{item:{type:Object,required:!0},threeColumn:{type:Boolean,required:!0}}},c=(r(505),r(1)),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",{class:["card",t.threeColumn&&"card--3column"]},[t.item.Image.url?e("nuxt-img",{attrs:{provider:"prismic",src:t.item.Image.url,alt:t.item.Image.alt,loading:"lazy"}}):t._e(),t._v(" "),e("div",{staticClass:"card-content"},[e("div",[e("prismic-rich-text",{attrs:{field:t.item.Title}}),t._v(" "),e("prismic-rich-text",{class:{"card-content__description--no-padding":!t.item.Url},attrs:{field:t.item.Description}}),t._v(" "),t.item.Url?e("prismic-link",{attrs:{field:t.item.Url,"aria-label":t.item.UrlText}},[e("e-button-tertiary",{attrs:{variant:1,icon:"chevron_circle_right","icon-position":"right","aria-label":t.item.UrlText,"data-gtm-track":t.item.buttonDataGtmTrack||"button-".concat(t.item.UrlText,"-open ").concat(t.item.UrlText," page")}},[t._v("\n          "+t._s(t.item.UrlText)+"\n        ")])],1):t._e()],1)])],1)}),[],!1,null,"3e1106d7",null);e.default=component.exports},433:function(t,e,r){t.exports={}},434:function(t,e,r){"use strict";r.r(e);r(435);var n=r(1),component=Object(n.a)({},(function(){var t=this._self._c;return t("section",{staticClass:"section-wrapper"},[t("div",{staticClass:"section-wrapper__container"},[this._t("default")],2)])}),[],!1,null,"1da6b492",null);e.default=component.exports},435:function(t,e,r){"use strict";r(433)},479:function(t,e,r){t.exports={}},505:function(t,e,r){"use strict";r(479)},529:function(t,e,r){t.exports={}},582:function(t,e,r){"use strict";r(529)}}]);