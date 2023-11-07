function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+""}export function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_mixins["horizontalLine"] = pug_interp = function(width, height){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv" + (" class=\"loding-line\""+pug_attr("style", pug_style(`width: ${width}px; height: ${height}px`), true, false)) + "\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["authorLoadingBlock"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"authorLoadingBlock\"\u003E\u003Cdiv class=\"image-circle\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"lines-block\"\u003E";
pug_mixins["horizontalLine"](100, 14);
pug_mixins["horizontalLine"](175, 12);
pug_mixins["horizontalLine"](125, 12);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_html = pug_html + "\u003Cdiv class=\"following-overlay\"\u003E\u003Cdiv class=\"lodingState\"\u003E";
pug_mixins["horizontalLine"](126, 18);
pug_html = pug_html + "\u003Chr\u002F\u003E";
pug_mixins["authorLoadingBlock"]();
pug_mixins["horizontalLine"](177, 18);
pug_html = pug_html + "\u003Chr\u002F\u003E";
pug_mixins["authorLoadingBlock"]();
pug_mixins["authorLoadingBlock"]();
pug_mixins["authorLoadingBlock"]();
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;}