(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{289:function(n,t,e){"use strict";e.r(t);var r={name:"LandingFeatureBanner",components:{EButton:e(83).a},props:{slice:{type:Object,required:!0,default:()=>({})}}},l=(e(597),e(1)),component=Object(l.a)(r,(function(){var n=this,t=n._self._c;return t("section",{staticClass:"landing-banner",class:{"landing-banner--cta":n.slice.primary.buttonText,"landing-banner--full-width":n.slice.primary.fullWidth,"landing-banner--white":n.slice.primary.whiteBanner,"landing-banner--blue":n.slice.primary.blueBanner,"landing-banner--right-image":n.slice.primary.rightImage,"landing-banner--pb-0":n.slice.primary.hidePaddingBottom,"landing-banner--pt-0":n.slice.primary.hidePaddingTop}},[t("div",{staticClass:"landing-banner__container"},[t("div",{staticClass:"landing-banner__image"},[n.slice.primary.image.url?t("nuxt-img",{attrs:{provider:"prismic",src:n.slice.primary.image.url,alt:n.slice.primary.image.alt,loading:"lazy"}}):n._e()],1),n._v(" "),t("div",{staticClass:"landing-banner__content"},[n.slice.primary.titleH3?t("h2",{staticClass:"landing-banner__title landing-banner__title--brand u-font-style-h3"},[n._v("\n        "+n._s(n.slice.primary.titleH3)+"\n      ")]):n._e(),n._v(" "),n.slice.primary.titleH2?t("h2",{staticClass:"landing-banner__title landing-banner__title--white"},[n._v("\n        "+n._s(n.slice.primary.titleH2)+"\n      ")]):n._e(),n._v(" "),t("prismic-rich-text",{staticClass:"landing-banner__text",attrs:{field:n.slice.primary.bodyText}}),n._v(" "),n.slice.primary.showAppDownloadLogo?t("div",{staticClass:"landing-banner__app"},n._l(n.slice.items,(function(e,i){return t("prismic-link",{key:"slice-item-".concat(i),staticClass:"landing-banner__app-button",attrs:{"v-if":e.appDownloadLogoLink,field:e.appDownloadLogoLink,target:"_blank"}},[t("e-button",{attrs:{"aria-label":e.appDownloadLogoAriaLabel}},[e.appDownloadLogoImage.url?t("nuxt-img",{attrs:{provider:"prismic",src:e.appDownloadLogoImage.url,alt:e.appDownloadLogoImage.alt,loading:"lazy"}}):n._e()],1)],1)})),1):n._e(),n._v(" "),n.slice.primary.buttonText?t("div",{staticClass:"landing-banner__button-wrapper"},[t("prismic-link",{staticClass:"landing-banner__button",attrs:{"v-if":n.slice.primary.buttonLink,field:n.slice.primary.buttonLink}},[t("e-button",{attrs:{"aria-label":n.slice.primary.buttonAriaLabel,type:"secondary",variant:n.slice.primary.whiteBanner?1:3,"data-gtm-track":n.slice.primary.buttonDataGtmTrack||null}},[n._v("\n            "+n._s(n.slice.primary.buttonText)+"\n          ")])],1)],1):n._e()],1)])])}),[],!1,null,"00fc44c7",null);t.default=component.exports},544:function(n,t,e){n.exports={}},597:function(n,t,e){"use strict";e(544)}}]);