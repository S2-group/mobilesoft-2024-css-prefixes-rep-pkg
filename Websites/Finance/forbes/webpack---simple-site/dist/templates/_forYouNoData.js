function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;export function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (align, firstName) {
      pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["for-you__no-data",{'for-you__no-data--left': align === 'left', 'for-you__fade-in': align !== 'left'}], [false,true]), false, false)) + "\u003E\u003Cdiv class=\"for-you__label\"\u003E" + (pug_escape(null == (pug_interp = firstName ? `${firstName}'s PICKS` : 'FOR YOU') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv" + (pug_attr("class", pug_classes([{'for-you__no-data--animate': align === 'left'}], [true]), false, false)) + "\u003E\u003Cdiv class=\"for-you__header for-you__header--check-back\"\u003ECheck back soon.\u003C\u002Fdiv\u003E\u003Cdiv" + (pug_attr("class", pug_classes(["for-you__subheader","for-you__subheader--ran-out",{'for-you__subheader--ran-out-left': align === 'left'}], [false,false,true]), false, false)) + "\u003EIt looks like we ran out of personalized content for you. Check back later for more.\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }.call(this, "align" in locals_for_with ?
        locals_for_with.align :
        typeof align !== 'undefined' ? align : undefined, "firstName" in locals_for_with ?
        locals_for_with.firstName :
        typeof firstName !== 'undefined' ? firstName : undefined));
    ;;return pug_html;}