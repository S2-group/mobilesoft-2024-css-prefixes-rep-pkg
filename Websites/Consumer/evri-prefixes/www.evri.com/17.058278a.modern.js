(window.webpackJsonp=window.webpackJsonp||[]).push([[17,54],{288:function(t,o,l){"use strict";l.r(o);l(271);var c=l(150),r=l(83),e=l(434),v={name:"IntegrationsBlock",components:{ECard:c.a,SectionWrapper:e.default,EButton:r.a},props:{slice:{type:Object,required:!0,default:()=>({})}},computed:{fullListVariation(){return"fullList"===this.slice.variation}},methods:{clickHandler(){window.location.href=this.slice.primary.buttonUrl.url}}},n=(l(596),l(1)),component=Object(n.a)(v,(function(){var t=this,o=t._self._c;return o("SectionWrapper",{staticClass:"integrations-block",class:{"integrations-block--pb-0":t.slice.primary.hidePaddingBottom,"integrations-block__full-list":t.fullListVariation}},[o(t.fullListVariation?"div":"e-card",{tag:"component",staticClass:"integrations-block__card"},[o("div",{staticClass:"integrations-block__text-wrapper"},[o("h2",{staticClass:"integrations-block__title",class:{"u-font-style-h3":!t.fullListVariation}},[t._v("\n        "+t._s(t.slice.primary.title)+"\n      ")]),t._v(" "),o("p",{staticClass:"integrations-block__desc"},[t._v(t._s(t.slice.primary.description))])]),t._v(" "),t.fullListVariation?t._e():[t.slice.primary.buttonUrl&&t.slice.primary.buttonUrl.url?o("EButton",{staticClass:"integrations-block__button",attrs:{href:t.slice.primary.buttonUrl.url,type:"secondary","aria-label":t.slice.primary.buttonAriaLabel,"data-gtm-track":t.slice.primary.buttonDataGtmTrack||null}},[t._v("\n        "+t._s(t.slice.primary.buttonText)+"\n      ")]):t._e()]],2),t._v(" "),t.fullListVariation?[o("div",{staticClass:"integrations-block__cards-wrapper"},t._l(t.slice.items,(function(l,c){return o("ECard",{key:c,staticClass:"integration-card",attrs:{"thinner-padding":!0}},[l.integrationLogo.url?o("nuxt-img",{staticClass:"integration-card__logo",attrs:{provider:"prismic",src:l.integrationLogo.url,alt:l.integrationLogo.alt,loading:"lazy"}}):t._e(),t._v(" "),l.integrationDescription?o("div",{staticClass:"integration-card__description"},[o("span",[t._v(" "+t._s(l.integrationDescription))])]):t._e()],1)})),1),t._v(" "),o("div",{staticClass:"integrations-block__button-wrapper"},[t.slice.primary.buttonUrl&&t.slice.primary.buttonUrl.url?o("EButton",{staticClass:"integrations-block__button",attrs:{href:t.slice.primary.buttonUrl.url,type:"secondary",variant:2,"aria-label":t.slice.primary.buttonAriaLabel}},[t._v("\n        "+t._s(t.slice.primary.buttonText)+"\n      ")]):t._e()],1)]:o("div",{staticClass:"integrations-block__svg-wrapper"},[o("svg",{attrs:{viewBox:"0 0 114 45",fill:"none",xmlns:"http://www.w3.org/2000/svg",title:"ebay logo"}},[o("path",{attrs:{d:"M15.027 9.81C7.057 9.81.425 13.177.425 23.313c0 8.035 4.46 13.087 14.81 13.087 12.191 0 12.964-7.978 12.964-7.978h-5.924s-1.271 4.285-7.427 4.285c-5.025 0-8.625-3.368-8.625-8.096h22.572v-2.954c.028-4.669-2.945-11.842-13.768-11.842v-.007Zm-.22 3.782c4.758 0 8.028 2.895 8.028 7.268H6.402c0-4.639 4.253-7.268 8.415-7.268h-.01Z",fill:"#E53238"}}),t._v(" "),o("path",{attrs:{d:"M28.823 0v31.32c0 1.772-.119 4.285-.119 4.285h5.621s.208-1.802.208-3.427c0 0 2.796 4.313 10.349 4.313 7.97 0 13.38-5.495 13.38-13.355 0-7.329-4.965-13.208-13.35-13.208-7.85 0-10.278 4.228-10.278 4.228V.029h-5.81V0Zm14.602 13.77c5.412 0 8.861 3.987 8.861 9.335 0 5.733-3.973 9.485-8.802 9.485-5.769 0-8.892-4.491-8.892-9.454 0-4.61 2.797-9.366 8.833-9.366Z",fill:"#0064D2"}}),t._v(" "),o("path",{attrs:{d:"M72.24 9.81c-11.984 0-12.757 6.53-12.757 7.563h5.977s.327-3.812 6.4-3.812c3.955 0 6.988 1.803 6.988 5.23v1.242h-6.994c-9.27 0-14.216 2.688-14.216 8.184 0 5.408 4.551 8.333 10.676 8.333 8.358 0 11.063-4.58 11.063-4.58 0 1.833.148 3.635.148 3.635h5.297s-.207-2.217-.207-3.664V19.618c-.029-8.114-6.573-9.809-12.37-9.809h-.005Zm6.601 13.916v1.625c0 2.127-1.337 7.456-9.128 7.456-4.284 0-6.096-2.13-6.096-4.581 0-4.491 6.155-4.491 15.229-4.491l-.005-.01Z",fill:"#F5AF02"}}),t._v(" "),o("path",{attrs:{d:"M81.368 10.844h6.72l9.637 19.176 9.604-19.176h6.096L95.91 45h-6.4l5.056-9.513-13.198-24.643Z",fill:"#86B817"}})]),t._v(" "),o("svg",{staticClass:"amazon",attrs:{viewBox:"0 0 118 35",fill:"none",xmlns:"http://www.w3.org/2000/svg",title:"amazon logo"}},[o("path",{attrs:{d:"M72.945 27.363C66.15 32.327 56.28 35 47.822 35c-11.883 0-22.594-4.359-30.701-11.646-.64-.572-.064-1.337.706-.89 8.747 5.058 19.547 8.082 30.73 8.082 8.05-.04 16.011-1.659 23.428-4.764 1.12-.477 2.114.764.96 1.588",fill:"#F90"}}),t._v(" "),o("path",{attrs:{d:"M75.801 24.15c-.864-1.114-5.736-.508-7.945-.254-.674.095-.77-.51-.163-.923 3.885-2.705 10.256-1.94 10.994-1.02.738.922-.194 7.261-3.846 10.279-.546.476-1.09.227-.834-.413.802-2.006 2.66-6.555 1.794-7.669Z",fill:"#F90"}}),t._v(" "),o("path",{attrs:{d:"M68.011 3.819V1.178a.65.65 0 0 1 .412-.623.662.662 0 0 1 .26-.047h11.883a.663.663 0 0 1 .625.411.65.65 0 0 1 .047.259v2.268c0 .382-.32.858-.896 1.654l-6.14 8.74c2.285-.063 4.712.288 6.793 1.432a1.165 1.165 0 0 1 .642 1.019v2.797c0 .381-.418.828-.866.606a13.756 13.756 0 0 0-12.568.032c-.416.227-.834-.227-.834-.606v-2.67c0-.454 0-1.178.457-1.816l7.146-10.182h-6.225a.624.624 0 0 1-.687-.364.61.61 0 0 1-.049-.272M24.588 20.3h-3.63a.688.688 0 0 1-.64-.604V1.241a.675.675 0 0 1 .435-.634.69.69 0 0 1 .268-.047h3.366a.64.64 0 0 1 .64.606v2.419h.064c.866-2.323 2.532-3.403 4.776-3.403 2.244 0 3.684 1.082 4.71 3.403.866-2.323 2.852-3.403 5-3.403a5.287 5.287 0 0 1 2.335.515 5.249 5.249 0 0 1 1.863 1.49c1.154 1.559.898 3.819.898 5.79v11.656a.676.676 0 0 1-.44.622.69.69 0 0 1-.266.045h-3.613a.688.688 0 0 1-.451-.21.678.678 0 0 1-.189-.457v-9.77c0-.762.064-2.705-.096-3.467-.256-1.241-1.09-1.588-2.116-1.588a2.436 2.436 0 0 0-1.32.44 2.41 2.41 0 0 0-.858 1.087c-.386.92-.322 2.482-.322 3.53v9.768a.677.677 0 0 1-.439.622.69.69 0 0 1-.265.045h-3.622a.687.687 0 0 1-.64-.667v-9.77c0-2.067.352-5.09-2.244-5.09S25.3 7.744 25.3 9.864v9.77a.697.697 0 0 1-.217.474.706.706 0 0 1-.487.193M91.5.19c5.384 0 8.268 4.584 8.268 10.406 0 5.631-3.2 10.085-8.268 10.085-5.288 0-8.14-4.58-8.14-10.276 0-5.76 2.916-10.21 8.14-10.21V.191Zm.032 3.76c-2.66 0-2.82 3.596-2.82 5.854s-.032 7.065 2.82 7.065 2.948-3.882 2.948-6.237c0-1.559-.064-3.403-.544-4.9-.457-1.274-1.25-1.782-2.404-1.782ZM106.754 20.3h-3.588a.687.687 0 0 1-.642-.667V1.178a.68.68 0 0 1 .706-.606h3.364a.658.658 0 0 1 .642.51v2.832h.064C108.324 1.4 109.733.19 112.233.19c1.634 0 3.2.574 4.23 2.164.962 1.464.962 3.946.962 5.727v11.614a.676.676 0 0 1-.243.42.69.69 0 0 1-.463.152h-3.683a.686.686 0 0 1-.643-.572V9.672c0-2.003.229-4.962-2.273-4.962a2.346 2.346 0 0 0-1.262.424c-.37.26-.656.621-.822 1.04-.512 1.111-.576 2.257-.576 3.498v9.929a.708.708 0 0 1-.706.699ZM64.965 16.896c-.672-.923-1.371-1.656-1.371-3.342v-5.6c0-2.386.162-4.548-1.6-6.173C60.624.445 58.311 0 56.546 0c-3.427 0-7.312 1.273-8.107 5.504a.643.643 0 0 0 .3.677c.075.045.159.075.246.088l3.492.381c.32 0 .578-.318.642-.68.288-1.464 1.538-2.163 2.916-2.163.735 0 1.6.286 2.017.924.514.73.457 1.749.457 2.607v.478c-2.084.227-4.84.382-6.793 1.241-2.285.985-3.846 2.95-3.846 5.886 0 3.723 2.372 5.6 5.416 5.6 2.563 0 3.973-.604 5.96-2.61.641.956.865 1.4 2.083 2.387a.79.79 0 0 0 .864-.095c.738-.635 2.057-1.781 2.788-2.387.274-.21.21-.624-.016-.942Zm-7.114-1.624c-.576 1.019-1.506 1.624-2.5 1.624-1.37 0-2.21-1.05-2.21-2.609 0-3.056 2.757-3.63 5.384-3.63v.765c0 1.465.032 2.609-.674 3.85ZM17.507 16.896c-.686-.923-1.371-1.656-1.371-3.342v-5.6c0-2.386.16-4.548-1.6-6.173C13.165.445 10.852 0 9.088 0 5.661 0 1.815 1.273.981 5.504a.644.644 0 0 0 .3.676.656.656 0 0 0 .246.089l3.523.381c.323 0 .579-.318.643-.68.288-1.464 1.537-2.163 2.915-2.163.739 0 1.6.286 2.018.924.514.73.457 1.749.457 2.607v.478C9 8.043 6.243 8.198 4.29 9.057c-2.298.996-3.864 2.97-3.864 5.897 0 3.724 2.372 5.6 5.416 5.6 2.564 0 3.974-.604 5.96-2.61.685.956.866 1.4 2.084 2.388a.793.793 0 0 0 .866-.096c.736-.635 2.057-1.78 2.788-2.387.256-.222.192-.635-.032-.953Zm-7.116-1.624c-.576 1.019-1.474 1.624-2.5 1.624-1.371 0-2.21-1.05-2.21-2.609 0-3.056 2.756-3.63 5.384-3.63v.765c0 1.465.032 2.609-.674 3.85Z",fill:"#221F1F"}})]),t._v(" "),o("svg",{attrs:{viewBox:"0 0 144 41",fill:"none",xmlns:"http://www.w3.org/2000/svg",title:"Shopify logo"}},[o("path",{attrs:{d:"M16.617 1.297c.286 0 .43.144.716.288-1.72.719-3.439 2.59-4.298 6.617l-3.153.863c1.003-2.877 3.01-7.768 6.735-7.768Zm1.576 1.439c.286.863.573 1.87.573 3.452v.288l-4.155 1.15c.86-3.02 2.292-4.315 3.582-4.89Zm3.725 2.589-1.862.575V5.47c0-1.295-.144-2.302-.43-3.165 1.003.288 1.862 1.582 2.292 3.02Zm9.314 2.301c0-.143-.143-.287-.287-.287-.286 0-3.295-.288-3.295-.288S25.5 4.893 25.214 4.75c-.287-.287-.717-.143-.86-.143 0 0-.43.143-1.146.431-.717-2.014-2.006-3.884-4.155-3.884h-.144A2.531 2.531 0 0 0 16.76.003C11.602-.142 9.166 6.331 8.306 9.64c-1.146.288-2.293.72-3.582 1.151-1.146.288-1.146.432-1.29 1.439-.143.719-3.009 23.447-3.009 23.447l22.783 4.316L35.53 37.26s-4.3-29.346-4.3-29.634Z",fill:"#8DB849"}}),t._v(" "),o("path",{attrs:{d:"M30.802 7.339c-.143 0-3.152-.288-3.152-.288S25.5 4.893 25.214 4.75c-.143-.143-.143-.143-.287-.143l-1.72 35.387 12.324-2.733s-4.3-29.346-4.3-29.634c0-.143-.286-.287-.429-.287Z",fill:"#5A863E"}}),t._v(" "),o("path",{attrs:{d:"m19.052 14.244-1.576 4.603s-1.29-.72-3.009-.72c-2.436 0-2.579 1.44-2.579 1.87 0 2.015 5.445 2.878 5.445 7.769 0 3.884-2.436 6.33-5.731 6.33-3.87 0-5.875-2.446-5.875-2.446l1.003-3.453s2.006 1.726 3.725 1.726c1.147 0 1.576-.863 1.576-1.582 0-2.733-4.441-2.877-4.441-7.336 0-3.74 2.722-7.337 8.024-7.337 2.435-.144 3.438.576 3.438.576Z",fill:"#FFFFFE"}}),t._v(" "),o("path",{attrs:{d:"M50.002 22.73c-1.29-.718-1.862-1.294-1.862-2.013 0-1.007.86-1.582 2.292-1.582 1.576 0 3.01.719 3.01.719l1.146-3.453s-1.003-.863-4.012-.863c-4.299 0-7.165 2.446-7.165 5.898 0 2.014 1.433 3.453 3.153 4.46 1.432.863 2.006 1.438 2.006 2.301 0 .863-.717 1.726-2.15 1.726-2.006 0-4.012-1.006-4.012-1.006l-1.146 3.452s1.72 1.15 4.728 1.15c4.299 0 7.451-2.157 7.451-6.041 0-2.158-1.576-3.74-3.439-4.747Zm17.338-7.335c-2.15 0-3.869 1.006-5.158 2.589l1.862-9.782h-4.871l-4.729 24.886h4.872l1.576-8.487c.573-3.165 2.293-5.179 3.869-5.179 1.146 0 1.576.72 1.576 1.87 0 .72 0 1.439-.143 2.158l-1.863 9.782h4.872l1.863-10.07c.143-1.006.286-2.301.286-3.164 0-2.877-1.433-4.604-4.012-4.604Zm12.466 14.24c-1.72 0-2.293-1.438-2.293-3.164 0-2.733 1.433-7.336 4.012-7.336 1.72 0 2.293 1.438 2.293 2.877 0 3.164-1.433 7.624-4.012 7.624Zm2.436-14.24c-5.875 0-9.744 5.322-9.744 11.22 0 3.74 2.293 6.76 6.735 6.76 5.731 0 9.6-5.178 9.6-11.22 0-3.452-2.006-6.76-6.591-6.76ZM96.57 29.78c-1.29 0-2.006-.72-2.006-.72l.86-4.603c.572-3.02 2.149-5.035 3.868-5.035 1.433 0 2.006 1.439 2.006 2.733-.143 3.165-2.006 7.625-4.728 7.625Zm4.728-14.386c-3.296 0-5.158 2.877-5.158 2.877l.286-2.589H92.13c-.144 1.726-.574 4.46-1.003 6.473l-3.44 17.838h4.873l1.29-7.193h.142s1.003.576 2.866.576c5.732 0 9.457-5.898 9.457-11.796 0-3.165-1.433-6.185-5.015-6.185Zm11.893-6.904c-1.576 0-2.723 1.294-2.723 2.877 0 1.438.86 2.445 2.293 2.445 1.576 0 2.866-1.007 2.866-2.877 0-1.438-1.003-2.445-2.436-2.445Zm-6.735 24.598h4.872l3.296-17.262h-4.872l-3.296 17.262Zm20.49-17.262h-3.439l.144-.863c.286-1.726 1.289-3.165 2.865-3.165.86 0 1.577.288 1.577.288l1.003-3.884s-.86-.432-2.58-.432c-1.719 0-3.438.432-4.728 1.583-1.719 1.438-2.436 3.452-2.866 5.466l-.143.863h-2.293l-.716 3.74h2.293l-2.58 13.666h4.872l2.579-13.666h3.296l.716-3.596Zm11.607 0s-3.009 7.624-4.442 11.796c-.144-1.295-1.147-11.796-1.147-11.796h-5.158l2.866 15.824c0 .287 0 .575-.144.863-.573 1.15-1.576 2.157-2.579 2.877-.859.72-2.006 1.15-2.722 1.438L126.517 41c1.003-.144 3.009-1.007 4.729-2.59 2.149-2.013 4.299-5.322 6.305-9.637l5.874-12.803-4.871-.144Z",fill:"#1A1919"}})]),t._v(" "),o("svg",{staticClass:"only-on-desktop",attrs:{viewBox:"0 0 99 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",title:"Not on the high street logo"}},[o("path",{attrs:{d:"m93.486 25.819-.42 3.514-2.571-.418s-5.049-.912-6.744-1.102c-1.715-.19-7.754-.835-10.364-1.291-2.61-.456-4.82-.608-6.192-1.064-1.371-.456.877-1.691.877-1.691l8.477-.456c.02-.02 7.564 1.026 16.937 2.508Z",fill:"url(#a)"}}),t._v(" "),o("path",{attrs:{d:"M97.778 14.914s-17.146 3.894-20.214 4.654c-3.067.76-5.83 1.691-7.258 1.92-1.41.227-2.858.265-2.858.265l.343 2.926s2.648.342 9.107-1.273c6.4-1.596 11.583-2.983 14.117-3.439 2.514-.456 7.41-1.406 7.41-1.406l-.647-3.647Z",fill:"url(#b)"}}),t._v(" "),o("path",{attrs:{d:"M38.965 14.99c.267-.095.496-.228.686-.418.19-.19.362-.418.476-.684a2.6 2.6 0 0 0 0-1.862 1.927 1.927 0 0 0-.476-.684c-.19-.19-.419-.342-.686-.418a2.593 2.593 0 0 0-1.695 0 1.96 1.96 0 0 0-.686.418c-.19.19-.343.418-.457.684a2.613 2.613 0 0 0 0 1.862c.114.266.266.494.457.684.19.17.42.342.667.418.571.19 1.162.17 1.714 0Z",fill:"url(#c)"}}),t._v(" "),o("path",{attrs:{d:"M28.525 29.637c-.057-.114-.114-.247-.21-.342a.995.995 0 0 0-.323-.228.939.939 0 0 0-.381-.095h-1.314v2.166h1.314a.87.87 0 0 0 .381-.095.875.875 0 0 0 .514-.57c.058-.133.077-.304.077-.437s-.02-.266-.058-.399Z",fill:"url(#d)"}}),t._v(" "),o("path",{attrs:{d:"M24.067 11.361c-.19-.19-.419-.342-.685-.418-.267-.114-.553-.133-.839-.133-.285 0-.571.057-.838.133-.533.19-.933.589-1.143 1.102a2.613 2.613 0 0 0 0 1.862c.114.247.267.494.457.665.19.17.42.342.686.418.553.19 1.143.19 1.696 0 .266-.095.495-.228.686-.418.19-.19.343-.418.457-.684a2.6 2.6 0 0 0 0-1.862 2.813 2.813 0 0 0-.477-.665Z",fill:"url(#e)"}}),t._v(" "),o("path",{attrs:{d:"M64.722 33.361V10.734L53.73 0H.425v44l53.61-.133 10.687-10.506ZM43.176 9.499l4.534 4.218-.077-4.047h1.182v6.783l-4.458-4.2v4.01h-1.2l.019-6.764Zm-16.346.19h4.686v1.083h-1.714v5.357h-1.258v-5.357H26.83V9.689ZM11.36 20.043H9.646v5.339H8.389v-5.339H6.674V18.96h4.686v1.083ZM11.951 9.5l4.439 4.218-.076-4.047h1.162v6.783l-4.382-4.2v4.01h-1.181l.038-6.764Zm.838 9.328h1.258v2.508h2.838v-2.508h1.258v6.44h-1.258v-2.792h-2.838v2.793h-1.258v-6.44Zm5.106 14.819c-.19.304-.476.55-.8.684-.343.17-1.01.266-1.448.266-.381 0-.8-.076-1.143-.228a2.06 2.06 0 0 1-.82-.627c-.095-.114-.152-.228-.228-.361l1.01-.646c.057.209.171.38.343.532.228.19.514.285.8.285.343 0 .838-.095 1.029-.247a.697.697 0 0 0 .285-.608.607.607 0 0 0-.342-.57 7.509 7.509 0 0 0-1.048-.494 6.757 6.757 0 0 1-1.01-.437 1.938 1.938 0 0 1-.667-.57c-.19-.266-.305-.57-.286-.893 0-.342.115-.646.305-.912.21-.285.496-.513.82-.646a2.85 2.85 0 0 1 1.123-.247c.382 0 .763.076 1.105.21.324.132.591.341.82.607.038.038.076.095.114.133l.038.057-.953.59-.019-.039a.819.819 0 0 0-.285-.285 1.377 1.377 0 0 0-.762-.228 1.151 1.151 0 0 0-.743.228.623.623 0 0 0-.286.513c0 .228.114.437.305.57.324.19.647.342 1.01.475.342.114.685.266 1.028.437.286.133.514.342.686.59.19.284.305.607.286.968.019.285-.095.608-.267.893Zm5.906-4.503h-1.734v5.358H20.81v-5.339h-1.715v-1.101h4.687l.019 1.082Zm.495-3.818h-4.172v-6.422h4.115v1.083h-2.858v1.482h2.706v1.083H21.38v1.653h2.915v1.12Zm-.38-9.29a4.284 4.284 0 0 1-1.392.247 3.72 3.72 0 0 1-1.295-.229 3 3 0 0 1-1.086-.645 3.214 3.214 0 0 1-.743-1.026 3.568 3.568 0 0 1-.286-1.406c0-.494.095-.97.286-1.406.172-.399.438-.76.762-1.045a3.17 3.17 0 0 1 1.086-.646 3.904 3.904 0 0 1 2.629 0 3.091 3.091 0 0 1 1.829 1.69 3.569 3.569 0 0 1 .019 2.756 3.2 3.2 0 0 1-1.81 1.71Zm6 18.295H28.85l-1.41-2.166h-1.123v2.166H25.21v-6.44h2.4c.305 0 .572.056.857.17.248.114.457.266.648.456.172.19.324.418.4.665.095.266.133.551.133.817 0 .418-.114.836-.343 1.216a1.83 1.83 0 0 1-.8.722l1.41 2.128v.266Zm1.067-9.062h-1.257v-6.44h1.257v2.507h2.839v-2.508h1.257v6.44h-1.257v-2.792h-2.839v2.793Zm4.686 9.138h-4.172v-6.44h4.115v1.082h-2.857v1.482h2.705v1.083h-2.705v1.653h2.914v1.14Zm.039-18.998a3.092 3.092 0 0 1-.743-1.045 3.777 3.777 0 0 1 0-2.812c.171-.399.438-.76.762-1.045a3.17 3.17 0 0 1 1.086-.646 3.904 3.904 0 0 1 2.629 0 3.06 3.06 0 0 1 1.828 1.71c.191.437.286.93.286 1.406 0 .456-.076.93-.247 1.349-.343.798-.991 1.444-1.791 1.729a4.283 4.283 0 0 1-1.39.247 3.72 3.72 0 0 1-1.296-.228c-.439-.152-.8-.38-1.124-.665Zm1.314 3.42h1.238v6.459h-1.238v-6.46Zm4.61 15.578H37.46v-6.44h4.115v1.082h-2.857v1.482h2.705v1.083h-2.705v1.653h2.914v1.14Zm-.457-9.746a3.217 3.217 0 0 1-.743-1.026 3.478 3.478 0 0 1-.285-1.387c0-.475.095-.95.285-1.387.172-.38.438-.74.743-1.026a3.169 3.169 0 0 1 1.086-.646c.42-.152.857-.228 1.296-.228.343 0 .647.038.971.114.324.076.59.19.877.342.285.152.514.38.704.627.038.038.058.095.096.114l-.858.855c-.133-.323-.38-.57-.705-.74-.342-.153-.723-.248-1.085-.229-.305 0-.591.057-.877.171a2.307 2.307 0 0 0-.666.456 1.71 1.71 0 0 0-.42.684c-.095.285-.133.57-.133.836 0 .304.057.589.152.893.096.266.229.494.42.684.19.19.419.342.666.456.286.114.572.17.877.152.266 0 .514-.02.762-.095.21-.057.419-.133.59-.266.172-.114.324-.304.438-.475.115-.19.172-.4.21-.627h-2.038v-1.045h3.257v.095c.02.304 0 .589-.038.893a3.84 3.84 0 0 1-.21.836c-.114.304-.285.57-.495.798a2.58 2.58 0 0 1-.705.57 3.536 3.536 0 0 1-.838.342 4.078 4.078 0 0 1-.952.114c-.439 0-.877-.076-1.296-.228a2.51 2.51 0 0 1-1.086-.627Zm6.287 4.483h-1.715v5.339H44.49v-5.339h-1.715v-1.082h4.687v1.082Zm6.592-3.875h-1.258v-2.793h-2.838v2.793H48.7v-6.44h1.258v2.507h2.838v-2.508h1.258v6.44Zm8.001-3.192c0 1.045-.838 1.9-1.886 1.9a1.896 1.896 0 0 1-1.905-1.9c0-1.045.838-1.9 1.905-1.9a1.904 1.904 0 0 1 1.886 1.9Z",fill:"url(#f)"}}),t._v(" "),o("path",{attrs:{d:"M64.705 19.207s2.058 1.197 3.01 2.755c0 0 .553 1.5.4 2.166-.133.645-.59 1.12-.99 1.31l-.381.19-2.02-1.557c-.019.019 2.172-2.014-.019-4.864Z",fill:"url(#g)"}}),t._v(" "),o("path",{attrs:{d:"M64.72 24.09c.057-.057.114-.114.152-.17.8-.95.933-1.9.8-2.66-.019-.115-.057-.248-.076-.362v-.019a4.466 4.466 0 0 0-.857-1.596l.057.038-.057-.076v1.387c.114.02.21.057.304.095.134.133.248.304.324.494.19.494.267 1.368-.514 2.736-.038 0-.095.057-.133.133v1.786c.114-.21.724-.513 1.733-.228 1.543.19 6.592.893 8.04 1.026-.286-.038-.515-.095-.781-.114a42.105 42.105 0 0 1-4.192-.893 33.499 33.499 0 0 0 1.524-.19 17.943 17.943 0 0 0 5.925-2.09c-1.6.4-5.677 1.387-8.687 1.273.02-.171.038-.36.038-.57 0-.114 0-.247-.019-.36-.076-.609-.343-1.217-.59-1.768.228.57.342 1.16.38 1.767.02.323 0 .551-.114.817l-.038.076-.019.019c-.019.019.02-.038 0-.019-.095.133-.228.342-.343.456-.095.095-.19.152-.286.247-.171.114-.4-.057-.628-.114l-1.944-1.12Z",fill:"#082E6B"}}),t._v(" "),o("path",{attrs:{d:"m60.511 20.252.229 3.591s1.029.266 1.467.304c.438.038 2.324.019 2.324.019l.21-.076s.78-.893.819-2.28c.057-1.387-1.239-1.368-1.239-1.368s-1.562-.399-3.81-.19Z",fill:"url(#h)"}}),t._v(" "),o("path",{attrs:{d:"m60.763 23.843 3.981 2.033v-1.805c-.019.02-1.962.285-3.981-.228Z",fill:"#082E6B"}}),t._v(" "),o("defs",[o("linearGradient",{attrs:{id:"a",x1:"-2.601",y1:"3.171",x2:"109.828",y2:"10.885",gradientUnits:"userSpaceOnUse"}},[o("stop",{attrs:{offset:".136","stop-color":"#49A3DE"}}),t._v(" "),o("stop",{attrs:{offset:".3","stop-color":"#7FCCF3"}}),t._v(" "),o("stop",{attrs:{offset:".316","stop-color":"#84D0F5"}}),t._v(" "),o("stop",{attrs:{offset:".377","stop-color":"#7AC1EC"}}),t._v(" "),o("stop",{attrs:{offset:".566","stop-color":"#5D96D3"}}),t._v(" "),o("stop",{attrs:{offset:".834","stop-color":"#52AAE2"}}),t._v(" "),o("stop",{attrs:{offset:".927","stop-color":"#79C8F1"}}),t._v(" "),o("stop",{attrs:{offset:".981","stop-color":"#84D0F5"}})],1),t._v(" "),o("linearGradient",{attrs:{id:"b",x1:".477",y1:"37.921",x2:"100.715",y2:"22.976",gradientUnits:"userSpaceOnUse"}},[o("stop",{attrs:{offset:".23","stop-color":"#53B3E2"}}),t._v(" "),o("stop",{attrs:{offset:".27","stop-color":"#60BCE7"}}),t._v(" "),o("stop",{attrs:{offset:".35","stop-color":"#74CBEF"}}),t._v(" "),o("stop",{attrs:{offset:".431","stop-color":"#80D4F3"}}),t._v(" "),o("stop",{attrs:{offset:".511","stop-color":"#84D7F5"}}),t._v(" "),o("stop",{attrs:{offset:".56","stop-color":"#7ACEF1"}}),t._v(" "),o("stop",{attrs:{offset:".818","stop-color":"#49A3DE"}}),t._v(" "),o("stop",{attrs:{offset:".858","stop-color":"#61BBE7"}}),t._v(" "),o("stop",{attrs:{offset:".903","stop-color":"#75CFEF"}}),t._v(" "),o("stop",{attrs:{offset:".948","stop-color":"#80DAF4"}}),t._v(" "),o("stop",{attrs:{offset:".995","stop-color":"#84DEF5"}})],1),t._v(" "),o("linearGradient",{attrs:{id:"c",x1:"-875.798",y1:"-595.19",x2:"-521.031",y2:"585.243",gradientUnits:"userSpaceOnUse"}},[o("stop",{attrs:{"stop-color":"#fff"}}),t._v(" "),o("stop",{attrs:{offset:".816","stop-color":"#CA9E67"}}),t._v(" "),o("stop",{attrs:{offset:"1","stop-color":"#83683C"}})],1),t._v(" "),o("linearGradient",{attrs:{id:"d",x1:"-1913.56",y1:"-1352.84",x2:"-1169.59",y2:"992.371",gradientUnits:"userSpaceOnUse"}},[o("stop",{attrs:{"stop-color":"#fff"}}),t._v(" "),o("stop",{attrs:{offset:".816","stop-color":"#CA9E67"}}),t._v(" "),o("stop",{attrs:{offset:"1","stop-color":"#83683C"}})],1),t._v(" "),o("linearGradient",{attrs:{id:"e",x1:"-770.616",y1:"-525.163",x2:"-413.921",y2:"661.024",gradientUnits:"userSpaceOnUse"}},[o("stop",{attrs:{"stop-color":"#fff"}}),t._v(" "),o("stop",{attrs:{offset:".816","stop-color":"#CA9E67"}}),t._v(" "),o("stop",{attrs:{offset:"1","stop-color":"#83683C"}})],1),t._v(" "),o("linearGradient",{attrs:{id:"f",x1:"-20.646",y1:"-40.934",x2:"26.131",y2:"65.578",gradientUnits:"userSpaceOnUse"}},[o("stop",{attrs:{"stop-color":"#fff"}}),t._v(" "),o("stop",{attrs:{offset:".816","stop-color":"#CA9E67"}}),t._v(" "),o("stop",{attrs:{offset:"1","stop-color":"#83683C"}})],1),t._v(" "),o("linearGradient",{attrs:{id:"g",x1:"52.088",y1:"-6.229",x2:"51.684",y2:"56.146",gradientUnits:"userSpaceOnUse"}},[o("stop",{attrs:{offset:".189","stop-color":"#84D7F5"}}),t._v(" "),o("stop",{attrs:{offset:".238","stop-color":"#7ACEF1"}}),t._v(" "),o("stop",{attrs:{offset:".495","stop-color":"#49A3DE"}}),t._v(" "),o("stop",{attrs:{offset:".593","stop-color":"#388DD0"}}),t._v(" "),o("stop",{attrs:{offset:".709","stop-color":"#2979C4"}}),t._v(" "),o("stop",{attrs:{offset:".828","stop-color":"#206EBC"}}),t._v(" "),o("stop",{attrs:{offset:".951","stop-color":"#1D6ABA"}})],1),t._v(" "),o("linearGradient",{attrs:{id:"h",x1:"-10.641",y1:"21.367",x2:"108.898",y2:"25.49",gradientUnits:"userSpaceOnUse"}},[o("stop",{attrs:{"stop-color":"#84DEF5"}}),t._v(" "),o("stop",{attrs:{offset:".096","stop-color":"#7CD7F2"}}),t._v(" "),o("stop",{attrs:{offset:".242","stop-color":"#67C5EA"}}),t._v(" "),o("stop",{attrs:{offset:".353","stop-color":"#53B3E2"}}),t._v(" "),o("stop",{attrs:{offset:".551","stop-color":"#4CA7DF"}}),t._v(" "),o("stop",{attrs:{offset:".75","stop-color":"#49A3DE"}}),t._v(" "),o("stop",{attrs:{offset:".77","stop-color":"#469AD2"}}),t._v(" "),o("stop",{attrs:{offset:".823","stop-color":"#3E86B7"}}),t._v(" "),o("stop",{attrs:{offset:".876","stop-color":"#3877A3"}}),t._v(" "),o("stop",{attrs:{offset:".931","stop-color":"#356F98"}}),t._v(" "),o("stop",{attrs:{offset:".988","stop-color":"#346C94"}})],1)],1)]),t._v(" "),o("svg",{staticClass:"only-on-desktop",attrs:{viewBox:"0 0 171 34",fill:"none",xmlns:"http://www.w3.org/2000/svg",title:"Woocommerce logo"}},[o("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M.883 3.232A5.363 5.363 0 0 1 2.827.911a5.427 5.427 0 0 1 2.9-.91h46.855a5.395 5.395 0 0 1 3.899 1.555c.51.507.913 1.11 1.182 1.775.27.665.4 1.377.386 2.093v17.814c-.029 2.67-2.38 5.086-5.07 5.142-5.695.029-11.389 0-17.083 0 .765 1.883 1.53 3.737 2.295 5.62-3.4-1.855-6.742-3.765-10.17-5.591-7.478-.057-14.985 0-22.492-.029-2.691-.084-5.042-2.472-5.07-5.142-.03-5.816 0-11.632-.03-17.42a6.235 6.235 0 0 1 .454-2.586Z",fill:"#9B5C8F"}}),t._v(" "),o("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M23.772 3.654c.85-.9 2.493-.618 3.145.421A1.905 1.905 0 0 1 27 5.902c-1.19 2.36-1.7 4.973-2.152 7.53-.539 3.344-.992 6.744-.822 10.144.057.87-.368 1.91-1.303 2.135-.878.197-1.7-.393-2.266-1.011-2.55-2.726-3.994-6.238-5.043-9.75A631.015 631.015 0 0 0 12.3 21.13c-.708 1.405-1.473 2.838-2.606 3.962-.481.477-1.303.899-1.926.421-.935-.814-1.162-2.107-1.558-3.203C4.707 17.17 3.858 11.86 2.979 6.576c-.198-.87.17-1.939 1.049-2.276.708-.253 1.643-.309 2.237.225.425.365.539.955.624 1.49.623 4.102 1.331 8.176 2.35 12.194 1.7-3.203 3.4-6.407 5.1-9.638a3.13 3.13 0 0 1 1.02-1.236 1.68 1.68 0 0 1 2.068.196c.425.45.595 1.096.708 1.686a43.518 43.518 0 0 0 2.181 7.784c.425-3.794.963-7.643 2.351-11.212.312-.758.595-1.517 1.105-2.135Zm9.603 2.051c1.842-.225 3.825.393 5.07 1.77a7.768 7.768 0 0 1 1.785 4.13 12.66 12.66 0 0 1-1.416 7.531c-.708 1.293-1.614 2.557-2.918 3.316-1.898 1.152-4.447 1.011-6.288-.197-1.473-1.012-2.295-2.697-2.635-4.383-.68-3.85.482-8.12 3.4-10.79a5.57 5.57 0 0 1 3.002-1.377Zm.368 3.934c-.878.28-1.444 1.096-1.926 1.826-1.19 1.91-1.53 4.412-.566 6.463.255.534.651 1.124 1.303 1.236.651.112 1.303-.28 1.784-.702 1.077-.927 1.615-2.304 1.898-3.681.284-1.546.142-3.26-.764-4.608a1.604 1.604 0 0 0-1.728-.534Zm14.334-3.934c1.785-.225 3.74.337 4.986 1.658a7.59 7.59 0 0 1 1.898 4.44c.27 2.499-.212 5.022-1.388 7.249-.708 1.32-1.643 2.613-3.003 3.4-1.813 1.095-4.249.983-6.062-.085-1.218-.73-2.04-1.966-2.521-3.287-1.275-4.018-.198-8.739 2.748-11.773a6.295 6.295 0 0 1 3.342-1.602Zm.397 3.934c-.963.337-1.53 1.264-2.04 2.08-1.076 1.882-1.36 4.326-.368 6.321.255.562.737 1.096 1.388 1.124.708.028 1.331-.421 1.841-.899 1.105-1.068 1.587-2.585 1.757-4.074a5.843 5.843 0 0 0-.878-4.046 1.57 1.57 0 0 0-1.7-.506Z",fill:"#fff"}}),t._v(" "),o("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M67.737 6.239a10.881 10.881 0 0 1 4.759.056v3.793c-1.275-.309-2.72-.59-3.938 0-1.473.731-2.294 2.389-2.294 3.962-.085 1.574.453 3.344 1.87 4.243 1.302.843 2.974.675 4.39.281v3.793a9.531 9.531 0 0 1-5.807-.196 7.8 7.8 0 0 1-2.902-1.955 7.718 7.718 0 0 1-1.744-3.019 10.439 10.439 0 0 1-.17-5.282 7.76 7.76 0 0 1 2.113-3.652 7.857 7.857 0 0 1 3.723-2.024Zm11.501-.197c1.926-.225 4.022.085 5.58 1.293 1.502 1.152 2.238 3.034 2.522 4.833.255 1.995.198 4.074-.425 5.985-.538 1.63-1.643 3.147-3.23 3.905-1.586.759-3.512.815-5.24.422a5.904 5.904 0 0 1-2.2-1.022 5.85 5.85 0 0 1-1.596-1.816c-1.105-1.91-1.303-4.187-1.218-6.35.085-1.855.566-3.794 1.813-5.227a6.31 6.31 0 0 1 3.994-2.023Zm.595 3.625c-.822.197-1.303 1.011-1.501 1.77-.397 1.517-.34 3.09-.227 4.636.113.843.198 1.742.793 2.417.793.899 2.408.787 3.116-.14.482-.59.623-1.35.708-2.08.184-1.295.184-2.61 0-3.906-.141-.786-.368-1.601-.934-2.191a2.078 2.078 0 0 0-1.955-.506Zm75.55-3.372a11.19 11.19 0 0 1 5.014-.028c.029 1.264 0 2.529.029 3.821-1.247-.309-2.635-.59-3.853-.056-1.416.646-2.266 2.136-2.38 3.625-.17 1.686.284 3.596 1.785 4.58 1.303.9 3.003.73 4.448.309-.029 1.264.028 2.557-.029 3.821a9.706 9.706 0 0 1-6.119-.365 7.774 7.774 0 0 1-2.732-2.019 7.717 7.717 0 0 1-1.602-2.982 10.425 10.425 0 0 1-.085-5.199c.623-2.64 2.861-4.804 5.524-5.507Zm-65.522.113h5.467a304.78 304.78 0 0 1 1.841 8.822c.51-2.978 1.219-5.9 1.927-8.822h5.609c.736 5.31 1.454 10.611 2.153 15.903h-4.278c-.396-3.625-.736-7.277-1.161-10.902-.878 3.625-1.785 7.277-2.663 10.902h-2.918c-.935-3.625-1.841-7.277-2.804-10.93-.369 3.625-.737 7.277-1.105 10.93H87.82c.68-5.282 1.36-10.584 2.04-15.903Zm19.603 0h5.467a301.128 301.128 0 0 1 1.841 8.822c.539-2.95 1.218-5.9 1.927-8.822h5.58c.737 5.31 1.454 10.611 2.153 15.903h-4.277c-.397-3.625-.765-7.277-1.162-10.902-.878 3.625-1.756 7.277-2.663 10.902h-2.917c-.935-3.653-1.87-7.277-2.805-10.93-.368 3.653-.736 7.277-1.105 10.93h-4.107c.708-5.282 1.397-10.584 2.068-15.903Zm18.215.056c2.917-.056 5.863 0 8.781-.028v3.4c-1.473.028-2.946 0-4.419 0v2.922h3.824v3.287h-3.824v2.922h4.448v3.4h-8.782c-.028-5.31.028-10.593-.028-15.903Zm10.028-.056c1.841 0 3.654-.029 5.495 0 1.728.056 3.57.477 4.844 1.685a4.298 4.298 0 0 1 1.105 4.327 4.523 4.523 0 0 1-2.408 2.726c1.133 2.389 2.295 4.777 3.456 7.165h-4.561c-1.189-2.444-2.351-4.889-3.569-7.305-.028 2.444 0 4.889 0 7.305h-4.334c-.028-5.282-.028-10.593-.028-15.903Zm4.334 3.062v3.793c.793-.056 1.643-.084 2.294-.561.765-.562.68-1.714.199-2.445-.595-.702-1.643-.702-2.493-.787Zm19.603-3.034h8.753v3.4h-4.448v2.922h3.825v3.287h-3.825v2.922h4.476v3.4h-8.781c-.029-5.338 0-10.649 0-15.931Z",fill:"#000"}})]),t._v(" "),o("svg",{staticClass:"only-on-desktop",attrs:{viewBox:"0 0 83 39",fill:"none",xmlns:"http://www.w3.org/2000/svg",title:"Etsy logo"}},[o("path",{attrs:{d:"M9.203 14.03V3.046c0-.402.045-.65.742-.65h9.326c1.617 0 2.517 1.39 3.17 3.994l.538 2.063h1.601c.292-5.896.538-8.452.538-8.452s-4.004.449-6.36.449H6.822L.425.243v1.705l2.158.402c1.505.292 1.865.606 2 1.996 0 0 .112 4.058.112 10.76S4.583 25.82 4.583 25.82c0 1.211-.495 1.659-2 1.95l-2.158.403v1.705l6.407-.203h10.674c2.402 0 7.977.203 7.977.203.112-1.457.944-8.094 1.056-8.81h-1.506l-1.601 3.608c-1.26 2.847-3.1 3.05-5.125 3.05h-6.07c-2.042 0-3.003-.811-3.003-2.556v-9.258s4.449 0 5.979.111c1.145.09 1.841.405 2.202 1.996l.493 2.107h1.762l-.112-5.312.246-5.359h-1.761l-.561 2.354c-.36 1.548-.607 1.839-2.202 1.995-1.799.202-6.024.16-6.024.16l-.045.069-.008-.004ZM33.361 4.189c-.562 2.51-1.146 4.46-3.147 5.761a7.141 7.141 0 0 1-2.92 1.149v1.548h3.617v12.462c0 3.497 2.316 5.2 5.416 5.2 2.403 0 4.877-1.008 5.753-3.138l-.853-1.1c-.405.696-1.71 1.706-3.35 1.706-1.796 0-2.764-1.211-2.764-4.304V12.465l6.024.449.32-2.758-6.36.246V4.23l-1.736-.04ZM46.238 23.378l-1.55.045c.09.896.112 2.039.112 3.093.01.869-.027 1.737-.112 2.601 0 0 3.1 1.142 6.223 1.142 4.225 0 7.619-2.04 7.619-6.007 0-6.815-10.27-5.806-10.27-10.402 0-1.904 1.708-2.644 3.572-2.644 1.462 0 2.697.537 2.923 1.299l1.01 3.05 1.506-.09c.112-1.615.202-3.497.45-4.999-1.303-.56-4.023-.898-5.73-.898-4.004 0-7.207 1.758-7.207 5.65 0 6.793 10.022 5.403 10.022 10.402 0 1.792-1.101 3.048-3.573 3.048-2.27 0-3.416-1.188-3.866-2.353l-1.129-2.937ZM70.777 28.063c-2.359 6.567-5.235 8.272-7.848 8.272-1.101 0-1.617-.493-1.798-1.255l-.605-3.162-1.71.09c-.32 1.86-.651 3.945-1.1 5.626 1.011.762 2.723 1.166 4.067 1.166 2.809 0 7.079-.357 10.967-9.616l6.54-15.401c.538-1.256.741-1.39 2.269-1.996l.853-.32v-1.411l-3.864.2-4.13-.194v1.412l1.055.32c1.057.337 1.55.74 1.55 1.457 0 .36-.112.74-.336 1.3-.607 1.547-4.382 10.716-5.417 12.644l1.013-.36c-1.799-4.415-4.517-11.79-4.922-13.046a1.797 1.797 0 0 1-.112-.65c0-.65.45-1.165 1.416-1.368l1.348-.29v-1.413l-5.573.202-4.427-.202v1.413l.742.246c1.01.32 1.258.605 1.864 2.018 3.371 7.711 4.965 11.926 7.101 17.44l1.057-3.122Z",fill:"#F27224"}})]),t._v(" "),o("svg",{staticClass:"csv",attrs:{viewBox:"0 0 53 47",fill:"none",xmlns:"http://www.w3.org/2000/svg",title:"CSV logo"}},[o("path",{attrs:{d:"M3.711 7.216a2 2 0 0 1 2-2h41.903a2 2 0 0 1 2 2V39.73a2 2 0 0 1-2 2H5.711a2 2 0 0 1-2-2V7.216Z",fill:"#fff"}}),t._v(" "),o("path",{attrs:{d:"M29.793 15.127c0-.864.7-1.565 1.565-1.565H44.92a1.565 1.565 0 1 1 0 3.13H31.357c-.864 0-1.564-.7-1.564-1.565ZM29.793 23.473c0-.864.7-1.565 1.565-1.565H44.92a1.565 1.565 0 1 1 0 3.13H31.357c-.864 0-1.564-.7-1.564-1.565ZM29.793 31.819c0-.864.7-1.565 1.565-1.565H44.92a1.565 1.565 0 1 1 0 3.13H31.357c-.864 0-1.564-.7-1.564-1.565Z",fill:"#DFE1E6"}}),t._v(" "),o("path",{attrs:{d:"M49.51 3.924H32.975c-.064 0-.126.005-.19.009V0L.412 3.702v39.446l32.373 3.798v-4.05c.064 0 .126.01.19.01H49.51a3.095 3.095 0 0 0 2.166-.885 2.994 2.994 0 0 0 .899-2.13V6.937a2.994 2.994 0 0 0-.9-2.13 3.094 3.094 0 0 0-2.165-.884ZM9.625 25.763a4.602 4.602 0 0 0 1.614-.266l.294 1.596c-.358.178-1.162.357-2.199.33-2.874-.075-4.317-1.982-4.317-4.457 0-2.964 1.98-4.665 4.507-4.727 1-.026 1.765.168 2.113.347l-.399 1.625a3.987 3.987 0 0 0-1.629-.306c-1.508.024-2.664.995-2.664 2.95.003 1.755.984 2.88 2.68 2.908Zm5.384 1.81c-1.024-.028-2.023-.32-2.518-.619l.407-1.689a5.09 5.09 0 0 0 2.234.603c.941.016 1.443-.375 1.443-.979 0-.578-.433-.91-1.523-1.313-1.485-.534-2.444-1.37-2.444-2.689 0-1.548 1.259-2.766 3.381-2.82 1.033-.028 1.801.174 2.354.41l-.47 1.715a4.315 4.315 0 0 0-1.924-.41c-.886.014-1.313.429-1.313.905 0 .586.506.84 1.678 1.282 1.63.603 2.405 1.464 2.405 2.788-.001 1.576-1.205 2.88-3.71 2.816Zm10.042.119-2.614-.067-3.076-9.488 2.37-.06 1.186 4.027c.335 1.14.642 2.244.877 3.445h.045c.249-1.156.56-2.3.9-3.406l1.285-4.172 2.466-.061-3.44 9.782Zm25.773 12.196c0 .343-.14.671-.386.913-.246.243-.58.379-.928.38H32.975a1.247 1.247 0 0 1-.19-.02V5.665c.063-.012.126-.018.19-.02H49.51c.348 0 .682.137.928.38.247.242.385.57.386.913v32.949Z",fill:"#09882D"}})])])],2)}),[],!1,null,"64c3d3e5",null);o.default=component.exports;installComponents(component,{SectionWrapper:l(434).default})},433:function(t,o,l){t.exports={}},434:function(t,o,l){"use strict";l.r(o);l(435);var c=l(1),component=Object(c.a)({},(function(){var t=this._self._c;return t("section",{staticClass:"section-wrapper"},[t("div",{staticClass:"section-wrapper__container"},[this._t("default")],2)])}),[],!1,null,"1da6b492",null);o.default=component.exports},435:function(t,o,l){"use strict";l(433)},543:function(t,o,l){t.exports={}},596:function(t,o,l){"use strict";l(543)}}]);