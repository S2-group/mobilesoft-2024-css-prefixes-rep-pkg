import{b as e,m as n,y as s,V as t,U as r,l as i,a as u,P as a,D as c,N as o,O as l,Y as d,c as v,J as f,p as g,_ as h}from"./index.module.js";var S=function(n){function s(e,S,I){var b=n.call(this,I)||this;return b.categorySlug=e.categorySlug,b.consent=i(e,S),b.id=e.templateId,b.isEssential=S.isEssential,b.isHidden=!!S.isHidden||e.isHidden,b.processorId="".concat(u(a())),b.subServices=[],b.subServicesLength=e.subConsents?e.subConsents.length:0,b.usesThirdCountry=e.usesThirdCountry,b.version=e.version,b.fetchSubServices=function(){return c(b,void 0,void 0,(function(){var n,i,u,a,c,I,b,p,m=this;return o(this,(function(o){switch(o.label){case 0:if(n=d.getInstance(),i=v.getInstance(),u=e.subConsents,!(a=f(u)).length)return[2,[]];I=null,o.label=1;case 1:return o.trys.push([1,4,,5]),[4,n.fetchAggregatedServices(a,!1)];case 2:return c=o.sent(),[4,n.fetchTranslations()];case 3:return I=o.sent(),[3,5];case 4:throw o.sent(),new Error(l.FETCH_DATA_PROCESSING_SERVICES);case 5:return c&&u?(b=i.getServicesBaseInfo(),p=b.filter((function(e){return e.id===m.id})),this.subServices=u.reduce((function(e,n){var i=null==c?void 0:c.find((function(e){return n.templateId===e.templateId&&n.version===e.version}));if(!i)return t([],r(e),!1);var u=new s(n,S,i);return t(t([],r(e),!1),[u],!1)}),[]),[2,this.subServices.reduce((function(e,n){var s=u.find((function(e){return n.id===e.templateId&&n.version===e.version}));if(!s)return t([],r(e),!1);var i=new g(s,I,c),a=1===p.length?{legalBasis:p[0].legalBasis}:{},o=h(h(h(h({},i),n),{subServices:[]}),a);return t(t([],r(e),!1),[o],!1)}),[])]):[2,[]]}}))}))},b}return e(s,n),s}(n),I=function(e,n,s){this.isEssential=e.isEssential,this.isHidden=e.isHidden,this.services=b(e,n,s),this.slug=e.categorySlug},b=function(e,n,s){return n.reduce((function(n,i){if(i.categorySlug===e.categorySlug){var u=null==s?void 0:s.find((function(e){return i.templateId===e.templateId&&i.version===e.version})),a=new S(i,e,u);return t(t([],r(n),!1),[a],!1)}return t([],r(n),!1)}),[])},p=function(e,n,i){this.categories=e.categories.reduce((function(n,u){var a=new I(u,e.consentTemplates,i);return s(a.services)?t(t([],r(n),!1),[a],!1):t([],r(n),!1)}),[]),this.controllerId=n};export{p as default};
