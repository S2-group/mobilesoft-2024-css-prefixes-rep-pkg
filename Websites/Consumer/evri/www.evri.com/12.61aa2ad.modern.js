(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{282:function(t,e,o){"use strict";o.r(e);var n={name:"FrequentlyAskedQuestions",components:{EAccordionRow:o(440).a},props:{slice:{type:Object,required:!0,default:()=>({})}}},c=(o(591),o(1)),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"faqs"},[e("div",{staticClass:"faqs-content"},[e("h4",{staticClass:"faqs-title"},[t._v(t._s(t.slice.primary.title))]),t._v(" "),t._l(t.slice.items,(function(t){return e("e-accordion-row",{key:t.index,attrs:{headerText:t.questionTitle,"data-gtm-track":"div-".concat(t.questionTitle,"-open answer")}},[e("prismic-rich-text",{attrs:{field:t.questionBody}})],1)}))],2)])}),[],!1,null,"832b5930",null);e.default=component.exports},436:function(t,e,o){t.exports={}},438:function(t,e,o){"use strict";o(436)},440:function(t,e,o){"use strict";var n={name:"e-accordion-row",components:{EIcon:o(13).a},props:{headerText:{type:String,required:!0},openByDefault:{type:Boolean,default:!1},isMobileFooter:{type:Boolean,default:!1},icon:{type:String,default:null},dataGtmTrack:{type:String,default:null}},data(){return{isOpen:this.openByDefault}},methods:{toggleAccordion(){this.isOpen=!this.isOpen,this.$emit("toggleAccordion",{isOpen:this.isOpen})}}},c=(o(438),o(1)),r=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",{class:["e-accordion-row",{"e-accordion-row--open":t.isOpen,"e-accordion-row--mobile-footer":t.isMobileFooter}],attrs:{"data-test-id":"accordion-row"}},[e("div",{class:["e-accordion-row__header"],attrs:{"data-gtm-track":t.dataGtmTrack},on:{click:t.toggleAccordion}},[t.icon?e("e-icon",{staticClass:"e-accordion-row__icon",attrs:{icon:t.icon}}):t._e(),t._v(" "),e("div",{class:["e-accordion-row__header-text"],attrs:{"data-test-id":"accordion-row-header-text"}},[t._v("\n      "+t._s(t.headerText)+"\n    ")]),t._v(" "),t.isMobileFooter?e("e-icon",{staticClass:"e-accordion-row__chevron",attrs:{icon:"chevron_circle_down",color:"brand-02",height:16,width:16}}):e("e-icon",{staticClass:"e-accordion-row__chevron",attrs:{icon:"chevron_down",height:24,width:24}})],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],class:["e-accordion-row__content"]},[e("div",{class:["e-accordion-row__body"],attrs:{"data-test-id":"accordion-row-body-text"}},[t._t("default")],2)])])}),[],!1,null,"9b92541c",null).exports;e.a=r},538:function(t,e,o){t.exports={}},591:function(t,e,o){"use strict";o(538)}}]);