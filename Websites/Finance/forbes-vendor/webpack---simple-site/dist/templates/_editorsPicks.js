function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+""}export function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (picksData) {
      pug_mixins["icon"] = pug_interp = function(iconName){
var block = (this && this.block), attributes = (this && this.attributes) || {};
switch (iconName){
case 'amazon-books':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--amazon-books\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 20 20\"\u003E\u003Cpath d=\"M1 6.1s3.8-4.5 8.5 0v10.1s-4-2.8-8.5 0V6.1zM10.5 6.1s3.9-4.5 8.5 0v10.1s-4-2.8-8.5 0V6.1z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'arrowLeft':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--arrow-left\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 24 24\"\u003E\u003Cpath d=\"M10 5l-7 7 7 7 1.4-1.4L6.8 13H21v-2H6.8l4.6-4.6z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'arrowRight':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--arrow-right\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 24 24\"\u003E\u003Cpath d=\"M12.6 6.4l4.6 4.6H3v2h14.2l-4.6 4.6L14 19l7-7-7-7z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'arrowUp':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--arrow-up\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 60 60\"\u003E\u003Cpath fill=\"#020202\" d=\"M30 0L5 30h15v30h20V30h15L30 0z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'arrowDown':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--arrow-down\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 60 60\"\u003E\u003Cpath fill=\"#020202\" d=\"M30 60l25-30H40V0H20v30H5l25 30z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'avatar':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--avatar\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 20 20\"\u003E\u003Ccircle fill-rule=\"evenodd\" clip-rule=\"evenodd\" cx=\"10\" cy=\"10\" r=\"8\"\u002F\u003E\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#FFF\" d=\"M10.4 15h-.3c-1.8 0-3.7-.1-3.7-1.1 0-2 1.6-3.6 3.6-3.6s3.6 1.6 3.6 3.6c0 .9-1.5 1-3.2 1.1zM10 5c1.3 0 2.3 1 2.3 2.3s-1 2.3-2.3 2.3-2.3-1-2.3-2.3S8.7 5 10 5z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'award':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--award\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 20 20\"\u003E\u003Cpath d=\"M15.2 4H4.8c-.9 0-1.6.7-1.6 1.5v.8c0 1.9 1.4 3.5 3.3 3.7.5 1.1 1.5 2 2.7 2.2v2.3h-3V16h7.5v-1.5h-3v-2.3c1.2-.2 2.2-1.1 2.7-2.2 1.9-.2 3.3-1.8 3.3-3.7v-.8c.1-.8-.6-1.5-1.5-1.5zM4.8 6.2v-.7h1.5v2.9c-.9-.3-1.5-1.2-1.5-2.2zm10.4 0c0 1-.6 1.8-1.5 2.1V5.5h1.5v.7z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'checkMark':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--check-mark\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 20 20\"\u003E\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M10 2.9c-3.9 0-7.1 3.2-7.1 7.1s3.2 7.1 7.1 7.1 7.1-3.2 7.1-7.1-3.2-7.1-7.1-7.1zm-.7 10.3l-3-2.1.7-1 2 1.4 3.4-4.9 1 .7-4.1 5.9z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'chevronDown':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--chevron-down\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 24 24\"\u003E\u003Cpath d=\"M12 13L7.2 8.2 5.8 9.7 12 16l6.2-6.3-1.4-1.5z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'chevronLeft':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--chevron-left\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 24 24\"\u003E\u003Cpath d=\"M14.3 5.8L8 12l6.3 6.2 1.5-1.4L11 12l4.8-4.8z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'chevronRight':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--chevron-right\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 24 24\"\u003E\u003Cpath d=\"M8.2 7.2L13 12l-4.8 4.8 1.5 1.4L16 12 9.7 5.8z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'chevronUp':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--chevron-up\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 24 24\"\u003E\u003Cpath d=\"M5.8 14.5L7.2 16l4.8-4.8 4.8 4.8 1.4-1.5L12 8.2z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'clock':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--clock\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"-5 -5 30 30\"\u003E\u003Cpath d=\"M12.5 7H11v6l5.2 3.1.8-1.2-4.5-2.7V7zM12 20c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm0-18C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'close':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--close\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 20 20\"\u003E\u003Cpath transform=\"rotate(45.001 10 10)\" d=\"M2 9h16v2H2z\"\u002F\u003E\u003Cpath transform=\"rotate(134.999 10 10)\" d=\"M2 9h16v2H2z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'download':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--download\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 24 24\"\u003E\u003Cpath d=\"M5 19h13.9v2H5v-2zm13.9-9l-7 7L5 10h4V4h6v6h3.9z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'edit':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--edit\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 20 20\"\u003E\u003Cpath fill=\"#030303\" d=\"M16.2 1C17.7 1 19 2.3 19 3.8c0 .6-.2 1.2-.6 1.7l-1.1 1.1-3.9-3.9 1.1-1.1c.5-.4 1.1-.6 1.7-.6zM2.1 13.9L1 19l5.1-1.1L16.5 7.5l-3.9-3.9L2.1 13.9zm11.5-6.5l-7.9 7.9-1-1 7.9-7.9 1 1z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'edu':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--edu\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 20 20\"\u003E\u003Cpath d=\"M5.3 10.8v2.7L10 16l4.7-2.5v-2.7L10 13.3l-4.7-2.5zM10 4L2.7 8l7.3 4 6-3.3v4.6h1.3V8L10 4z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'email':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--email\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 20 20\"\u003E\u003Cpath class=\"fs-icon fs-icon--_xF106_\" d=\"M17 15.2H3.2l5.2-4.3.6.4c.3.3.7.4 1.1.4s.8-.1 1.1-.4l.6-.5 5.2 4.4zm.6-9.2v8l-4.8-4 4.8-4zm-15 8V6l4.8 4-4.8 4zm7.8-3.6c-.2.2-.4.2-.6 0L3.6 5.2h13l-6.2 5.2z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'facebook':
pug_html = pug_html + "\u003Csvg style=\"transform:scale(.9)\" class=\"fs-icon fs-icon--Facebook\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 24 24\"\u003E\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'forbesF':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--forbes-f\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 20 20\"\u003E\u003Cpath d=\"M16.5 7l-.8.2C15 4.9 13.8 3.7 12 3.7H9.5C9.4 5 9.4 7 9.4 9.9h1.7c.9 0 1.6-.7 1.9-2.1h.6V13H13c-.3-1.4-.9-2.1-1.9-2.2H9.4c0 1.6.1 3.1.2 4.4.1.7.2 1.2.4 1.5.2.3.6.5 1.1.6l.8.1v.6H3.6v-.6l.7-.1c.9-.1 1.4-.8 1.5-2.1.3-3.3.3-6.5 0-9.6-.1-1.3-.6-2-1.5-2.1l-.7-.2v-.6h12.8l.1 4.3z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'forbesLogo':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--forbes-logo\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 200 54\"\u003E\u003Cpath d=\"M113.3 18.2c0-5.8.1-11.2.4-16.2L98.4 4.9v1.4l1.5.2c1.1.1 1.8.5 2.2 1.1.4.7.7 1.7.9 3.2.2 2.9.4 9.5.3 19.9 0 10.3-.1 16.8-.3 19.3 5.5 1.2 9.8 1.7 13 1.7 6 0 10.7-1.7 14.1-5.2 3.4-3.4 5.2-8.2 5.2-14.1 0-4.7-1.3-8.6-3.9-11.7-2.6-3.1-5.9-4.6-9.8-4.6-2.6 0-5.3.7-8.3 2.1zm.3 30.8c-.2-3.2-.4-12.8-.4-28.5.9-.3 2.1-.5 3.6-.5 2.4 0 4.3 1.2 5.7 3.7 1.4 2.5 2.1 5.5 2.1 9.3 0 4.7-.8 8.5-2.4 11.7-1.6 3.1-3.6 4.7-6.1 4.7-.8-.2-1.6-.3-2.5-.4zM41 3H1v2l2.1.2c1.6.3 2.7.9 3.4 1.8.7 1 1.1 2.6 1.2 4.8.8 10.8.8 20.9 0 30.2-.2 2.2-.6 3.8-1.2 4.8-.7 1-1.8 1.6-3.4 1.8l-2.1.3v2h25.8v-2l-2.7-.2c-1.6-.2-2.7-.9-3.4-1.8-.7-1-1.1-2.6-1.2-4.8-.3-4-.5-8.6-.5-13.7l5.4.1c2.9.1 4.9 2.3 5.9 6.7h2V18.9h-2c-1 4.3-2.9 6.5-5.9 6.6l-5.4.1c0-9 .2-15.4.5-19.3h7.9c5.6 0 9.4 3.6 11.6 10.8l2.4-.7L41 3zm-4.7 30.8c0 5.2 1.5 9.5 4.4 12.9 2.9 3.4 7.2 5 12.6 5s9.8-1.7 13-5.2c3.2-3.4 4.7-7.7 4.7-12.9s-1.5-9.5-4.4-12.9c-2.9-3.4-7.2-5-12.6-5s-9.8 1.7-13 5.2c-3.2 3.4-4.7 7.7-4.7 12.9zm22.3-11.4c1.2 2.9 1.7 6.7 1.7 11.3 0 10.6-2.2 15.8-6.5 15.8-2.2 0-3.9-1.5-5.1-4.5-1.2-3-1.7-6.8-1.7-11.3C47 23.2 49.2 18 53.5 18c2.2-.1 3.9 1.4 5.1 4.4zm84.5 24.3c3.3 3.3 7.5 5 12.5 5 3.1 0 5.8-.6 8.2-1.9 2.4-1.2 4.3-2.7 5.6-4.5l-1-1.2c-2.2 1.7-4.7 2.5-7.6 2.5-4 0-7.1-1.3-9.2-4-2.2-2.7-3.2-6.1-3-10.5H170c0-4.8-1.2-8.7-3.7-11.8-2.5-3-6-4.5-10.5-4.5-5.6 0-9.9 1.8-13 5.3-3.1 3.5-4.6 7.8-4.6 12.9 0 5.2 1.6 9.4 4.9 12.7zm7.4-25.1c1.1-2.4 2.5-3.6 4.4-3.6 3 0 4.5 3.8 4.5 11.5l-10.6.2c.1-3 .6-5.7 1.7-8.1zm46.4-4c-2.7-1.2-6.1-1.9-10.2-1.9-4.2 0-7.5 1.1-10 3.2s-3.8 4.7-3.8 7.8c0 2.7.8 4.8 2.3 6.3 1.5 1.5 3.9 2.8 7 3.9 2.8 1 4.8 2 5.8 2.9 1 1 1.6 2.1 1.6 3.6 0 1.4-.5 2.7-1.6 3.7-1 1.1-2.4 1.6-4.2 1.6-4.4 0-7.7-3.2-10-9.6l-1.7.5.4 10c3.6 1.4 7.6 2.1 12 2.1 4.6 0 8.1-1 10.7-3.1 2.6-2 3.9-4.9 3.9-8.5 0-2.4-.6-4.4-1.9-5.9-1.3-1.5-3.4-2.8-6.4-4-3.3-1.2-5.6-2.3-6.8-3.3-1.2-1-1.8-2.2-1.8-3.7s.4-2.7 1.3-3.7 2-1.4 3.4-1.4c4 0 6.9 2.9 8.7 8.6l1.7-.5-.4-8.6zm-96.2-.9c-1.4-.7-2.9-1-4.6-1-1.7 0-3.4.7-5.3 2.1-1.9 1.4-3.3 3.3-4.4 5.9l.1-8-15.2 3v1.4l1.5.1c1.9.2 3 1.7 3.2 4.4.6 6.2.6 12.8 0 19.8-.2 2.7-1.3 4.1-3.2 4.4l-1.5.2v1.9h21.2V49l-2.7-.2c-1.9-.2-3-1.7-3.2-4.4-.6-5.8-.7-12-.2-18.4.6-1 1.9-1.6 3.9-1.8 2-.2 4.3.4 6.7 1.8l3.7-9.3z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'gallery':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--gallery\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 24 24\"\u003E\u003Cpath d=\"M2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2zm9.5 5.7l1.7 2.3 2.5-3.1L19 15H9l2.5-3.3zM20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 2v12H8V4h12\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'galleryCircle':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--gallery-circle\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 20 20\"\u003E\u003Cpath d=\"M13.579 13.555H7.293V7.269h6.286v6.286zm-4.926-1.359h3.567V8.628H8.653v3.568z\"\u002F\u003E\u003Cpath d=\"M6.546 11.89H5.459V5.434h6.456v1.088H6.546z\"\u002F\u003E\u003Cpath d=\"M9.944 18.839c-4.918 0-8.919-4.001-8.919-8.919S5.026 1 9.944 1s8.919 4.001 8.919 8.919-4.001 8.92-8.919 8.92zm0-16.751c-4.318 0-7.832 3.513-7.832 7.832s3.513 7.832 7.832 7.832 7.832-3.513 7.832-7.832-3.514-7.832-7.832-7.832z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'georgia-uaquo':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--georgia-uaquo\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 20 20\"\u003E\u003Cpath fill=\"#010101\" d=\"M9.9 9.8c.4 0 .8.1 1 .3l.5.5 6.8 7.3-.8 1-7.6-5.3L2.3 19l-.8-1 6.8-7.2.6-.6c.3-.2.6-.4 1-.4zm0-7.8c.4 0 .8.1 1 .3l.5.5 6.8 7.3-.8 1-7.5-5.3-7.5 5.3-.8-1 6.8-7.2c.1-.2.4-.3.7-.6.1-.2.5-.3.8-.3z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'global':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--global\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 20 20\"\u003E\u003Cpath d=\"M10 1c4.971 0 9 4.029 9 9s-4.029 9-9 9-9-4.029-9-9 4.029-9 9-9zm-4.048 9.818l-3.271.001a7.37 7.37 0 0 0 5.458 6.308 13.367 13.367 0 0 1-2.187-6.309zm11.367.001H14.05a13.35 13.35 0 0 1-2.188 6.307 7.369 7.369 0 0 0 5.457-6.307zm-4.909 0H7.593A11.705 11.705 0 0 0 10 16.914a11.703 11.703 0 0 0 2.41-6.095zM8.139 2.874l-.053.014a7.37 7.37 0 0 0-5.405 6.293H5.95c.184-2.26.94-4.43 2.189-6.307zM10 3.087a11.696 11.696 0 0 0-2.41 6.094h4.817A11.697 11.697 0 0 0 10 3.087zm1.86-.214l.082.124a13.365 13.365 0 0 1 2.106 6.185l3.271-.001a7.37 7.37 0 0 0-5.459-6.308z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'grid':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--grid\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 20 20\"\u003E\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.75 14.25v4.25H1.5v-4.25h4.25zm6.38 0v4.25H7.88v-4.25h4.25zm6.37 0v4.25h-4.25v-4.25h4.25zM5.75 7.88v4.25H1.5V7.88h4.25zm6.38 0v4.25H7.88V7.88h4.25zm6.37 0v4.25h-4.25V7.88h4.25zM5.75 1.5v4.25H1.5V1.5h4.25zm6.38 0v4.25H7.88V1.5h4.25zm6.37 0v4.25h-4.25V1.5h4.25z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'hamburger':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--hamburger\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 24 24\"\u003E\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20 6v2H4V6h16zm0 5v2H4v-2h16zm0 5v2H4v-2h16z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'info':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--info\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 60 60\"\u003E\u003Cpath fill=\"#010101\" d=\"M28.3 38.4h3.3v-10h-3.3v10zM30 13.3c-9.2 0-16.7 7.5-16.7 16.7S20.8 46.7 30 46.7 46.7 39.2 46.7 30 39.2 13.3 30 13.3zm0 30.1c-7.4 0-13.4-6-13.4-13.4s6-13.4 13.4-13.4 13.4 6 13.4 13.4-6 13.4-13.4 13.4zM28.3 25h3.3v-3.3h-3.3V25z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'instagram':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--instagram\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 60 60\"\u003E\u003Cpath fill=\"none\" stroke=\"#000\" stroke-width=\"3\" stroke-miterlimit=\"10\" d=\"M38.6 46.3H21.4c-4.3 0-7.7-3.5-7.7-7.7V21.4c0-4.3 3.5-7.7 7.7-7.7h17.1c4.3 0 7.7 3.5 7.7 7.7v17.1c.1 4.3-3.4 7.8-7.6 7.8z\"\u002F\u003E\u003Ccircle fill=\"none\" stroke=\"#000\" stroke-width=\"3\" stroke-miterlimit=\"10\" cx=\"30\" cy=\"30\" r=\"7.4\"\u002F\u003E\u003Ccircle cx=\"38.7\" cy=\"19.3\" r=\"1.8\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'linkedin':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--linkedin\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 60 60\"\u003E\u003Cpath d=\"M44.9 33.2v11h-6.4V34c0-2.6-.9-4.3-3.2-4.3-1.8 0-2.8 1.2-3.3 2.3-.2.4-.2 1-.2 1.6v10.7h-6.4s.1-17.4 0-19.2h6.4V27.9v-.1c.8-1.3 2.4-3.2 5.8-3.2 4.1 0 7.3 2.7 7.3 8.6zM18.7 15.8c-2.2 0-3.6 1.4-3.6 3.3 0 1.8 1.4 3.3 3.5 3.3 2.2 0 3.6-1.5 3.6-3.3 0-1.9-1.3-3.3-3.5-3.3zm-3.2 28.4h6.4V25h-6.4v19.2z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'list':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--list\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 20 20\"\u003E\u003Cpath d=\"M15.2 3.2H4.8c-.8 0-1.5.7-1.5 1.5v10.5c0 .8.7 1.5 1.5 1.5h10.5c.8 0 1.5-.7 1.5-1.5V4.8c0-.9-.7-1.6-1.6-1.6zm-3.7 10.6H6.2v-1.5h5.2v1.5zm2.3-3H6.2V9.2h7.5v1.6zm0-3H6.2V6.2h7.5v1.6z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'lock':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--lock\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 20 20\"\u003E\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14.8 9.198V7.602a4.8 4.8 0 1 0-9.6 0v1.596h-.8v8h11.2v-8h-.8zm-4.08 4.207v1.633H9.28v-1.633a1.44 1.44 0 1 1 1.44 0zm2.16-4.207H7.12V7.602A2.883 2.883 0 0 1 10 4.722a2.883 2.883 0 0 1 2.88 2.88v1.596z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'media':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--media\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 60 60\"\u003E\u003Cpath d=\"M49.3 3.9H10.4c-4.8 0-8.7 3.9-8.7 8.7v26.1c0 4.8 3.9 8.7 8.7 8.7h4.4v7.9c0 1.2 1.3 1.9 2.3 1.2l12.8-9.1h19.4c4.8 0 8.7-3.9 8.7-8.7V12.6c0-4.8-3.9-8.7-8.7-8.7m-37.9 8.4H48c.8 0 1.4.6 1.4 1.4 0 .8-.6 1.4-1.4 1.4H11.4c-.8 0-1.4-.6-1.4-1.4 0-.7.6-1.4 1.4-1.4m0 12H48c.8 0 1.4.6 1.4 1.4 0 .8-.6 1.4-1.4 1.4H11.4c-.8 0-1.4-.6-1.4-1.4 0-.7.6-1.4 1.4-1.4M48 39H11.4c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4H48c.8 0 1.4.6 1.4 1.4S48.8 39 48 39m0-5.8H11.4c-.8 0-1.4-.6-1.4-1.4 0-.8.6-1.4 1.4-1.4H48c.8 0 1.4.6 1.4 1.4 0 .8-.6 1.4-1.4 1.4m.1-12H11.5c-.8 0-1.4-.6-1.4-1.4 0-.8.6-1.4 1.4-1.4h36.6c.8 0 1.4.6 1.4 1.4 0 .8-.7 1.4-1.4 1.4\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'phone':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--phone\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 24 24\"\u003E\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20 15.4c-1.2 0-2.4-.2-3.5-.6-.4-.1-.7 0-1 .2l-1.6 2c-2.8-1.4-5.5-3.9-6.9-6.8l2-1.7c.3-.3.4-.7.2-1-.4-1.1-.6-2.3-.6-3.5 0-.5-.5-1-1-1H4.2C3.7 3 3 3.2 3 4c0 9.3 7.7 17 17 17 .7 0 1-.6 1-1.2v-3.4c0-.6-.5-1-1-1z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'play':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--play\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 20 20\"\u003E\u003Cpath d=\"M7 2v16.9l11.1-8.5z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'play-circle':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--play-circle\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 60 60\"\u003E\u003Cpath class=\"fs-icon fs-icon--play\" fill=\"#010101\" d=\"M24.252 41.721V18.037l15.789 11.842z\"\u002F\u003E\u003Cpath class=\"fs-icon fs-icon--circle\" fill=\"#010101\" d=\"M30 59.879c-16.542 0-30-13.457-30-30 0-16.542 13.458-30 30-30 16.543 0 30 13.458 30 30 0 16.543-13.457 30-30 30zm0-57.5c-15.164 0-27.5 12.336-27.5 27.5s12.336 27.5 27.5 27.5 27.5-12.336 27.5-27.5-12.336-27.5-27.5-27.5z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'preview-eye':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--preview-eye\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 20 20\"\u003E\u003Cpath d=\"M10 4.1C5.9 4.1 2.3 6.5.5 10c1.8 3.6 5.4 6 9.5 6s7.7-2.4 9.5-5.9c-1.8-3.6-5.4-6-9.5-6zm4.7 3.2c1.1.7 2.1 1.7 2.8 2.8-.7 1.1-1.7 2.1-2.8 2.8-1.4.9-3 1.4-4.7 1.4-1.7 0-3.3-.5-4.7-1.4-1.1-.7-2.1-1.7-2.8-2.8.8-1.2 1.7-2.1 2.8-2.8.1 0 .1-.1.2-.1-.1.4-.3 1-.3 1.6 0 2.6 2.1 4.8 4.8 4.8s4.8-2.1 4.8-4.8c0-.6-.1-1.1-.3-1.6 0 0 .1 0 .2.1zm-5.1 1c0 .8-.6 1.4-1.4 1.4s-1.4-.6-1.4-1.4.6-1.4 1.4-1.4 1.4.6 1.4 1.4z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'profile-bug':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--profile-bug\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 20 20\"\u003E\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.8 1.8v16.3h16.3V1.8H1.8zm11.8 6.5C13.2 6.7 12.4 6 11.2 6H9.7c-.1.8-.1 2.2-.1 4.1h1.1c.6 0 1-.5 1.2-1.4h.4v3.5h-.4c-.2-.9-.6-1.4-1.2-1.4H9.6c0 1.1 0 2.1.1 2.9 0 .5.1.8.3 1 .1.2.4.3.7.4l.6.1v.4H5.9V15h.5c.3-.1.5-.2.7-.4s.2-.5.3-1c.2-2 .2-4.1 0-6.4 0-.5-.1-.8-.3-1s-.4-.4-.7-.5h-.5v-.5H14l.1 2.9-.5.2z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'pin':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--pin\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 24 24\"\u003E\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'reddit':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--reddit\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 60 60\"\u003E\u003Ccircle cx=\"30\" cy=\"30\" r=\"30\"\u002F\u003E\u003Cpath fill=\"#FFF\" d=\"M50 30c0-2.4-2-4.4-4.4-4.4-1.2 0-2.2.5-3 1.2-3-2.2-7.1-3.6-11.7-3.7l2-9.4 6.5 1.4c.1 1.7 1.4 3 3.1 3 1.7 0 3.1-1.4 3.1-3.1s-1.4-3.1-3.1-3.1c-1.2 0-2.3.7-2.8 1.7l-7.3-1.5c-.2 0-.4 0-.6.1-.2.1-.3.3-.3.5l-2.2 10.5c-4.7.1-8.8 1.5-11.9 3.7-.8-.8-1.9-1.2-3-1.2-2.4 0-4.4 2-4.4 4.4 0 1.8 1.1 3.3 2.6 4-.1.4-.1.9-.1 1.3 0 6.7 7.8 12.2 17.5 12.2s17.5-5.5 17.5-12.2c0-.4 0-.9-.1-1.3 1.5-.8 2.6-2.3 2.6-4.1zm-30 3.1c0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7.1-3.1-1.3-3.1-3.1zm17.4 8.3c-2.1 2.1-6.2 2.3-7.4 2.3-1.2 0-5.3-.2-7.4-2.3-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0 1.3 1.3 4.2 1.8 6.3 1.8s4.9-.5 6.3-1.8c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1zm-.5-5.1c-1.7 0-3.1-1.4-3.1-3.1 0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'replay':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--replay\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 24 24\"\u003E\u003Cpath d=\"M12 6.6V3L7.6 7.5 12 12V8.4c2.9 0 5.2 2.4 5.2 5.4s-2.4 5.4-5.2 5.4-5.2-2.4-5.2-5.4H5c0 4 3.1 7.2 7 7.2s7-3.2 7-7.2-3.1-7.2-7-7.2z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'rss':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--rss\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 20 20\"\u003E\u003Cpath d=\"M4.2 13.6c-.6 0-1.1.2-1.5.6-.5.5-.7 1-.7 1.6 0 .6.2 1.1.6 1.5.5.5 1 .7 1.6.7.6 0 1.1-.2 1.5-.6.4-.4.6-.9.6-1.5s-.2-1.1-.6-1.5c-.4-.6-.9-.8-1.5-.8zm0 0M9.2 10.8c-.9-.9-1.8-1.6-2.9-2.1-1.1-.5-2.3-.8-3.5-.9h-.1c-.2 0-.3.1-.5.2-.1.1-.2.3-.2.5V10c0 .2.1.4.2.5.1.1.3.2.5.2 1.7.2 3.2.9 4.4 2.1C8.3 14 9 15.5 9.2 17.2c0 .2.1.3.2.5.2.2.3.3.5.3h1.5c.2 0 .4-.1.5-.2.1-.2.2-.3.2-.5-.1-1.2-.4-2.4-.9-3.5-.4-1.2-1.1-2.1-2-3zm0 0\"\u002F\u003E\u003Cpath d=\"M16.6 11.5c-.8-1.8-1.9-3.4-3.3-4.8s-3-2.5-4.8-3.3C6.6 2.6 4.7 2.1 2.8 2c-.3 0-.4.1-.6.2-.1.1-.2.3-.2.5v1.6c0 .2.1.4.2.5.1.2.3.3.5.3 1.6.1 3.2.5 4.6 1.2 1.5.7 2.7 1.6 3.8 2.6 1.1 1.1 2 2.4 2.6 3.8.7 1.5 1.1 3 1.1 4.6 0 .2.1.3.2.5.1.1.3.2.5.2h1.6c.2 0 .4-.1.5-.2.2-.2.2-.3.2-.5.1-2-.4-3.9-1.2-5.8zm0 0\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'search':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--search\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 24 24\"\u003E\u003Cpath d=\"M9.5 14C7 14 5 12 5 9.5S7 5 9.5 5 14 7 14 9.5 12 14 9.5 14zm6 0h-.8l-.3-.3c1-1.1 1.6-2.6 1.6-4.2C16 5.9 13.1 3 9.5 3S3 5.9 3 9.5 5.9 16 9.5 16c1.6 0 3.1-.6 4.2-1.6l.3.3v.8l5 5 1.5-1.5-5-5z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'sharrow':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--share\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 24 24\"\u003E\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18 16.1c-.8 0-1.4.3-2 .8l-7.1-4.2c.1-.2.1-.5.1-.7s0-.5-.1-.7L16 7.2c.5.5 1.2.8 2 .8 1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3c0 .2 0 .5.1.7L8 9.8C7.5 9.3 6.8 9 6 9c-1.7 0-3 1.3-3 3s1.3 3 3 3c.8 0 1.5-.3 2-.8l7.1 4.2c-.1.2-.1.4-.1.6 0 1.6 1.3 2.9 2.9 2.9s2.9-1.3 2.9-2.9-1.2-2.9-2.8-2.9z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'snapchat':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--snapchat\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 60 60\"\u003E\u003Cpath d=\"M47.7 38.3c-.2-.2-.4-.4-.7-.4-2.3-.4-3.9-1.7-5-3s-1.7-2.5-1.7-2.6v-.1c-.1-.2-.3-.5-.3-.7v-.4c.2-.6.3-.8 1.3-1.1 0 0 .1 0 .3-.1.1 0 .2-.1.3-.1.7-.3 1.4-.6 1.9-1.1.2-.2.5-.6.5-1-.1-.4-.2-.8-.6-1.1-.6-.4-1.6-.2-2.2 0-.4.1-1.2.5-1.5.1v-.5c.1-1.9.3-3.8 0-5.6-.1-.6-.2-1.1-.5-1.6-.9-2.1-2.3-3.6-3.9-4.5-1.4-.8-3-1.2-4.6-1.3-1.6-.1-3.3.1-4.9.6-.5.2-1 .4-1.4.7-1.7.9-3 2.4-3.9 4.5-.2.5-.4 1.1-.5 1.6-.3 1.9-.1 3.8 0 5.6v.5c-.3.3-1.2 0-1.5-.1-.7-.2-1.6-.4-2.2 0-.4.3-.5.6-.6 1.1-.1.3.2.7.5 1 .5.5 1.2.8 1.9 1.1.1 0 .2.1.3.1.2.1.2.1.3.1 1 .3 1.1.6 1.3 1.1 0 .1.1.2 0 .4 0 .2-.2.4-.3.7 0 .1-.6 1.3-1.7 2.6s-2.8 2.7-5 3c-.3 0-.5.2-.7.4-.2.2-.3.5-.2.8v.2c0 .1 0 .1.1.2.2.5.8.9 1.6 1.3.8.3 1.8.6 3.1.8 0 .1.1.4.1.6 0 .1.1.3.1.4 0 .1.1.3.1.4.1.2.2.5.4.7.2.1.4.2.8.2h.4c.1 0 .3 0 .4-.1.2 0 .5-.1.8-.1.3 0 .6-.1 1-.1h.6c.2 0 .4 0 .6.1.8.1 1.5.6 2.4 1.2 1.9 1.3 3.5 2 5.2 2 1.7 0 3.4-.7 5.2-2 .8-.6 1.6-1.1 2.4-1.2.2 0 .4-.1.6-.1h.6c.4 0 .7 0 1 .1.3 0 .6.1.8.1.2 0 .3.1.4.1h.4c.3 0 .6-.1.8-.2.3-.2.4-.4.4-.7 0-.2.1-.3.1-.4 0-.1.1-.3.1-.4 0-.2.1-.4.1-.6 1.3-.2 2.3-.5 3.1-.8.9-.4 1.4-.8 1.6-1.3 0-.1.1-.2.1-.2V39c.2-.2.1-.5-.1-.7z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'star':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--star\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"18\" height=\"18\" viewBox=\"0 0 18 18\"\u003E\u003Cpath d=\"M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z\"\u003E\u003C\u002Fpath\u003E\u003Cpath fill=\"none\" d=\"M0 0h18v18H0z\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E";
  break;
case 'thumbsUp':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--thumbs-up\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 24 24\"\u003E\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M19.6 13c.3-.5.4-1 .4-1.6 0-1.4-1.2-2.7-2.7-2.7h-1.1c.2-.4.3-.9.3-1.5 0-2.3-1.2-3.3-3-3.3-1.9 0-1.8 3-2.2 3.4-.8.8-1.6 2.2-2.2 2.7H6c-.6 0-1 .4-1 1v7.5c0 .6.4 1 1 1h2c.5 0 .9-.3 1-.7 1.4 0 2.3 1.2 5.6 1.2h.7c2.4 0 3.5-1.2 3.5-3 .4-.6.6-1.3.5-2.1.3-.5.4-1.2.3-1.9zm-2 1.6c.4.7 0 1.5-.4 1.8.2 1.5-.6 2.1-1.7 2.1h-1.2c-2.2 0-3.7-1.2-5.4-1.2v-5.8h.3c.9 0 2.1-2.2 3-3 .9-.9.6-2.4 1.2-3 1.5 0 1.5 1 1.5 1.8 0 1.2-.9 1.8-.9 3h3.2c.7 0 1.2.6 1.2 1.2s-.4 1.2-.7 1.2c.5.3.6 1.3-.1 1.9z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'thumbsDown':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--thumbs-down\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 24 24\"\u003E\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M19.6 12c.1-.7 0-1.4-.3-2 .1-.7-.1-1.5-.5-2.1 0-1.7-1.1-3-3.5-3h-.7C11.3 5 10.3 6.2 9 6.2h-.3C8.5 6.1 8.3 6 8 6H6c-.6 0-1 .4-1 1v7.5c0 .6.4 1 1 1h2c.4 0 .7-.2.9-.5h.2c.6.5 1.4 1.9 2.1 2.6.4.4.3 3.4 2.2 3.4 1.8 0 3-1 3-3.3 0-.6-.1-1.1-.3-1.5h1.1c1.5 0 2.7-1.3 2.7-2.7.1-.5-.1-1-.3-1.5zm-2.3 2.8h-3.2c0 1.2.9 1.7.9 3 0 .7 0 1.8-1.5 1.8-.6-.6-.3-2.1-1.2-3-.8-.8-2.1-3-3-3H9V7.7c1.7 0 3.1-1.2 5.4-1.2h1.2c1.1 0 1.9.5 1.7 2.1.5.3.8 1.1.4 1.8.7.6.6 1.6.2 2.1.3 0 .7.6.7 1.2-.1.5-.6 1.1-1.3 1.1z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'twitter':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--twitter\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 60 60\"\u003E\u003Cpath d=\"M22.2 38.9c-3.4-.3-6.1-1.7-7.5-5.1h3.6c-3.9-1.4-5.6-4.3-5.9-8.4 1.2.6 2.3.7 3.5.7-2.1-1.6-3.6-3.4-3.7-6.1-.1-1.5.5-2.8 1.3-4 4.4 5 9.7 8.3 16.5 8.9v-2.7c.1-1.9.6-3.6 1.9-5.1 2.5-2.8 6.9-3.1 9.8-.7.2.2.5.4.7.6.2.2.4.2.7.2 1.1-.3 2-.9 3-1.4.5-.3 1.1-.6 1.7-1-.4 1.1-.9 2-1.5 2.8-.6.8-1.3 1.6-2.2 2.2 1.6-.2 3.2-.6 4.8-1.1-.3.4-.6.8-.9 1.1l-2.7 2.4c-.1.1-.2.3-.2.4.1 3.3-.6 6.5-1.9 9.6-1.9 4.2-4.7 7.5-8.6 9.9-2.5 1.5-5.2 2.4-8.1 2.9-5.5.8-10.5-.5-15.1-3.3-.1 0-.1-.1-.2-.1h.2c1.1.5 2.2.4 3.3.3 2.3-.2 4.5-.9 6.6-2.1l.9-.6v-.3z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'u30badge':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--u30badge\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 72 72\"\u003E\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0 0h72v72H0z\"\u002F\u003E\u003Cpath transform=\"translate(6.19 17.106)\" fill=\"#FFF\" d=\"M2.3 27.3l7.8.1c.2 1.9 1.5 3.2 5.1 3.3 3 0 4.5-.9 4.5-2.6 0-1.6-1.4-2.4-4.4-2.4h-2.7l.1-4.9h2.6c2.9 0 4.3-.8 4.4-2.3 0-1.4-1.3-2.3-4-2.3s-4.2 1.1-4.7 2.9L3.3 19c.4-5 4.8-8.2 12.7-8.1 7.3.1 11.8 2.6 11.8 6.8 0 2.7-1.9 4.5-5.1 5.3 3.7.6 5.8 2.6 5.8 5.5-.1 4.7-4.7 7.8-13 7.7-9-.2-12.9-3.6-13.2-8.9zM29 24.4v-1.6c.1-7.5 5.8-11.7 14.9-11.6 9.2.1 14.7 4.5 14.7 11.7v1.6c-.1 7.4-5.3 12-15 11.9-9.8-.2-14.7-4.9-14.6-12zm20.9.2v-1.7c0-4-1.9-6.1-6-6.1s-6.1 2-6.1 6v1.6c0 4 1.9 6.1 6.1 6.1 4.2.1 5.9-2 6-5.9z\"\u002F\u003E\u003Cpath transform=\"translate(0 30.215)\" fill=\"red\" d=\"M5.8 7.6v4c0 .7-.4 1.1-1 1.1s-1-.3-1-1.1v-4h.7v4c0 .3.1.5.3.5s.3-.1.3-.5v-4h.7zm.7 0h.8l.5 2.4.1.5V7.6h.6v5h-.7l-.6-2.9-.1-.5v3.3h-.6V7.6zm3.6 0c.7 0 1.2.2 1.2 1.2v2.6c0 .9-.5 1.2-1.2 1.2h-.9v-5h.9zm-.2.5V12h.1c.3 0 .4-.1.4-.6V8.8c0-.5-.1-.6-.4-.6h-.1v-.1zm2-.5h1.6v.6h-.9v1.4h.7v.6h-.7V12h.9v.6h-1.6v-5zm2.3 0h1c.8 0 1 .3 1 1v.8c0 .5-.1.7-.4.8l.5 2.4h-.8l-.4-2.3h-.2v2.3h-.7v-5zm.9 2.2c.3 0 .3-.1.3-.4v-.9c0-.3-.1-.4-.3-.4h-.2v1.6h.2z\"\u002F\u003E\u003Cpath fill=\"#FFF\" d=\"M38 16.5c0-.9 0-1.7.1-2.4l-2.2.4v.2h.2c.2 0 .3.1.3.2.1.1.1.3.1.5 0 .4.1 1.4 0 2.9v2.8c.8.2 1.4.3 1.9.3.9 0 1.6-.3 2.1-.8s.8-1.2.8-2.1c0-.7-.2-1.3-.6-1.7-.4-.5-.9-.7-1.4-.7-.5 0-.9.1-1.3.4zm0 4.5c0-.5-.1-1.9-.1-4.2.1 0 .3-.1.5-.1.4 0 .6.2.8.5.2.4.3.8.3 1.4 0 .7-.1 1.3-.3 1.7-.2.5-.5.7-.9.7H38zm-10.7-6.8h-5.9v.3h.3c.2 0 .4.1.5.3.1.1.2.4.2.7.1 1.6.1 3.1 0 4.5 0 .3-.1.6-.2.7-.1.1-.3.2-.5.3h-.3v.3h3.8V21h-.4c-.2 0-.4-.1-.5-.3-.1-.1-.2-.4-.2-.7 0-.6-.1-1.3-.1-2h.8c.4 0 .7.3.9 1h.3v-2.4h-.3c-.1.6-.4 1-.9 1H24c0-1.3 0-2.3.1-2.9h1.2c.8 0 1.4.5 1.7 1.6l.3-.1v-2zm-.7 4.6c0 .8.2 1.4.7 1.9.4.5 1.1.7 1.9.7.8 0 1.4-.3 1.9-.8s.7-1.1.7-1.9c0-.8-.2-1.4-.7-1.9-.4-.5-1.1-.7-1.9-.7-.8 0-1.4.3-1.9.8s-.7 1.1-.7 1.9zm3.3-1.7c.2.4.3 1 .3 1.7 0 1.6-.3 2.3-1 2.3-.3 0-.6-.2-.8-.7-.2-.4-.3-1-.3-1.7 0-1.5.3-2.3 1-2.3.4 0 .6.2.8.7zm12.5 3.6c.5.5 1.1.7 1.9.7.5 0 .9-.1 1.2-.3.4-.2.6-.4.8-.7l-.1-.2c-.3.2-.7.4-1.1.4-.6 0-1-.2-1.4-.6-.3-.4-.5-.9-.4-1.5h3.1c0-.7-.2-1.3-.5-1.7-.4-.4-.9-.7-1.6-.7-.8 0-1.5.3-1.9.8-.5.5-.7 1.2-.7 1.9-.1.8.2 1.4.7 1.9zm1.1-3.7c.2-.4.4-.5.6-.5.4 0 .7.6.7 1.7h-1.6c0-.5.1-.9.3-1.2zm6.8-.6c-.4-.2-.9-.3-1.5-.3s-1.1.2-1.5.5c-.4.3-.6.7-.6 1.2 0 .4.1.7.3.9.2.2.6.4 1 .6.4.1.7.3.9.4.2.1.2.3.2.5s-.1.4-.2.6c-.2.2-.4.2-.6.2-.7 0-1.1-.5-1.5-1.4l-.3.1.1 1.5c.5.2 1.1.3 1.8.3s1.2-.2 1.6-.5c.4-.3.6-.7.6-1.3 0-.4-.1-.6-.3-.9-.2-.2-.5-.4-.9-.6-.5-.2-.8-.3-1-.5-.2-.1-.3-.3-.3-.5s.1-.4.2-.5c.1-.1.3-.2.5-.2.6 0 1 .4 1.3 1.3l.3-.1-.1-1.3zm-14.2-.2c-.2-.1-.4-.1-.7-.1-.2 0-.5.1-.8.3-.3.2-.5.5-.7.9v-1.2l-2.2.4v.2h.2c.3 0 .4.3.5.6.1.9.1 1.9 0 2.9 0 .4-.2.6-.5.6h-.2v.3h3.1V21h-.4c-.3 0-.4-.3-.5-.6-.1-.9-.1-1.8 0-2.7.1-.1.3-.2.6-.3.3 0 .6.1 1 .3l.6-1.5z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'website':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--website\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 20 20\"\u003E\u003Cpath class=\"fs-icon fs-icon--_xF10E_\" d=\"M14.7 7.4l2.8 2.6v.4h-1.9V17h-3.7v-4.2H8.1V17H4.4v-6.6H2.5V10L10 3l2.8 2.6v-.9h1.9z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'youtube':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--youtube\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 20 20\"\u003E\u003Cpath d=\"M8.2 12.5V7.7l4.6 2.4-4.6 2.4zm9.5-7.3c-.7-.7-1.4-.7-1.7-.7-2.4-.2-6-.2-6-.2s-3.6 0-6 .2c-.3 0-1.1 0-1.7.7-.5.5-.6 1.7-.6 1.7s-.2 1.4-.2 2.8V11c0 1.4.2 2.8.2 2.8s.2 1.2.7 1.7c.6.6 1.4.5 1.8.6 1.4.1 5.8.2 5.8.2s3.6 0 6-.2c.3 0 1.1 0 1.7-.7.5-.5.7-1.7.7-1.7s.2-1.4.2-2.8V9.7c0-1.4-.2-2.8-.2-2.8s-.2-1.2-.7-1.7z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'vetted':
pug_html = pug_html + "\u003Csvg width=\"120px\" height=\"16px\" viewBox=\"0 0 120 16\" version=\"1.1\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n    \u003Ctitle\u003EVetted\u003C\u002Ftitle\u003E\n    \u003Cdefs\u003E\n        \u003Cpolygon id=\"path-1\" points=\"0 0 19.5357996 0 19.5357996 16 0 16\"\u003E\u003C\u002Fpolygon\u003E\n    \u003C\u002Fdefs\u003E\n    \u003Cg id=\"Vetted-Home\" stroke=\"none\" stroke-width=\"1\" fill-rule=\"evenodd\"\u003E\n        \u003Cg id=\"Forbes-Vetted-Home-1440-XL\" transform=\"translate(-32.000000, -75.000000)\"\u003E\n            \u003Cg id=\"Sub-Nav\" transform=\"translate(0.000000, 55.000000)\"\u003E\n                \u003Cg id=\"Vetted\" transform=\"translate(32.000000, 20.000000)\"\u003E\n                    \u003Cpolygon id=\"Fill-1\" points=\"15.3058946 0.000376862525 10.7413357 10.9874269 6.17677679 0.000376862525 0 0.000376862525 7.13852995 15.9996985 13.6499607 15.9996985 20.6769393 0.000376862525\"\u003E\u003C\u002Fpolygon\u003E\n                    \u003Cpolygon id=\"Fill-2\" points=\"23.1388314 0.000376862525 23.1388314 15.9996985 39.2738236 15.9996985 39.2738236 12.3071995 28.8234258 12.3071995 28.8234258 9.71137041 37.394787 9.71137041 37.394787 6.13117642 28.8234258 6.13117642 28.8234258 3.69287589 38.8042529 3.69287589 38.8042529 0.000376862525\"\u003E\u003C\u002Fpolygon\u003E\n                    \u003Cpolygon id=\"Fill-3\" points=\"41.4448532 0.000376862525 41.4448532 3.80367347 47.0390006 3.80367347 47.0390006 15.9996985 52.7906764 15.9996985 52.7906764 3.80367347 58.4292935 3.80367347 58.4292935 0.000376862525\"\u003E\u003C\u002Fpolygon\u003E\n                    \u003Cpolygon id=\"Fill-4\" points=\"60.7344862 0.000376862525 60.7344862 3.80367347 66.3293873 3.80367347 66.3293873 15.9996985 72.0803094 15.9996985 72.0803094 3.80367347 77.7196802 3.80367347 77.7196802 0.000376862525\"\u003E\u003C\u002Fpolygon\u003E\n                    \u003Cpolygon id=\"Fill-5\" points=\"80.5396671 0.000376862525 80.5396671 15.9996985 96.6739056 15.9996985 96.6739056 12.3071995 86.2235077 12.3071995 86.2235077 9.71137041 94.794869 9.71137041 94.794869 6.13117642 86.2235077 6.13117642 86.2235077 3.69287589 96.2035811 3.69287589 96.2035811 0.000376862525\"\u003E\u003C\u002Fpolygon\u003E\n                    \u003Cg id=\"Group-8\" transform=\"translate(100.031600, 0.000000)\"\u003E\n                        \u003Cmask id=\"mask-2\" fill=\"white\"\u003E\n                            \u003Cuse xlink:href=\"#path-1\"\u003E\u003C\u002Fuse\u003E\n                        \u003C\u002Fmask\u003E\n                        \u003Cg id=\"Clip-7\"\u003E\u003C\u002Fg\u003E\n                        \u003Cpath d=\"M8.27891595,12.2186368 C11.9940267,12.2186368 13.5821254,10.9199685 13.5821254,8.05656707 L13.5821254,7.8771805 C13.5821254,4.901474 11.9940267,3.75958055 8.25705793,3.75958055 L5.72831038,3.75958055 L5.72831038,12.2186368 L8.27891595,12.2186368 Z M0,0 L8.50277229,0 C15.8206888,0 19.5357996,2.77446191 19.5357996,7.80934525 L19.5357996,7.96612006 C19.5357996,13.0236151 15.7754653,16.0000754 8.50277229,16.0000754 L0,16.0000754 L0,0 Z\" id=\"Fill-6\" mask=\"url(#mask-2)\"\u003E\u003C\u002Fpath\u003E\n                    \u003C\u002Fg\u003E\n                \u003C\u002Fg\u003E\n            \u003C\u002Fg\u003E\n        \u003C\u002Fg\u003E\n    \u003C\u002Fg\u003E\n\u003C\u002Fsvg\u003E\n";
  break;
case 'comment':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--comment\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 24 24\"\u003E\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M22 4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4zm-2 0v13.2L18.8 16H4V4h16zM6 12h12v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'lettermark':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--lettermark\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 24 24\"\u003E\u003Cpath d=\"M0 0h24v24H0z\"\u002F\u003E\u003Cpath fill=\"#FFF\" d=\"M6 5v.6l.6.1c.5.1.8.2 1 .5.2.3.4.7.4 1.4.2 3.2.2 6.1 0 8.8 0 .7-.2 1.1-.4 1.4-.2.3-.5.5-1 .5l-.6.1v.6h7.7v-.6l-.8-.1c-.5-.1-.8-.2-1-.5s-.3-.7-.4-1.4c-.1-1.2-.1-2.5-.1-4H13c.9 0 1.4.7 1.7 2h.6V9.7h-.6c-.3 1.3-.9 1.9-1.7 1.9h-1.6c0-2.6 0-4.5.1-5.7h2.3c1.7 0 2.8 1.1 3.5 3.2l.7-.2-.1-3.9H6z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'lettermarkAlt':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--lettermarkAlt\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 24 24\"\u003E\u003Cpath d=\"M6 5v.6l.6.1c.5.1.8.2 1 .5.2.3.4.7.4 1.4.2 3.2.2 6.1 0 8.8 0 .7-.2 1.1-.4 1.4-.2.3-.5.5-1 .5l-.6.1v.6h7.7v-.6l-.8-.1c-.5-.1-.8-.2-1-.5s-.3-.7-.4-1.4c-.1-1.2-.1-2.5-.1-4H13c.9 0 1.4.7 1.7 2h.6V9.7h-.6c-.3 1.3-.9 1.9-1.7 1.9h-1.6c0-2.6 0-4.5.1-5.7h2.3c1.7 0 2.8 1.1 3.5 3.2l.7-.2-.1-3.9H6z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'lettermarkOutline':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--lettermarkOutline\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 24 24\"\u003E\u003Cpath d=\"M0 0v24h24V0H0zm22 22H2V2h20v20z\"\u002F\u003E\u003Cpath d=\"M6 5v.6l.6.1c.5.1.8.2 1 .5.2.3.4.7.4 1.4.2 3.2.2 6.1 0 8.8 0 .7-.2 1.1-.4 1.4-.2.3-.5.5-1 .5l-.6.1v.6h7.7v-.6l-.8-.1c-.5-.1-.8-.2-1-.5s-.3-.7-.4-1.4c-.1-1.2-.1-2.5-.1-4H13c.9 0 1.4.7 1.7 2h.6V9.7h-.6c-.3 1.3-.9 1.9-1.7 1.9h-1.6c0-2.6 0-4.5.1-5.7h2.3c1.7 0 2.8 1.1 3.5 3.2l.7-.2-.1-3.9H6z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'warning':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--warning\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 24 24\"\u003E\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#333\" d=\"M12 3l10 17H2L12 3zm0 3.6L5.2 18.2h13.7L12 6.6zm.9 8.9v1.8h-1.8v-1.8h1.8zm0-5.3v4.5h-1.8v-4.5h1.8z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'trendUp':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--trendUp\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 24 24\"\u003E\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4 17h16L12 7z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'trendDown':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--trendDown\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 24 24\"\u003E\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20 7H4l8 10z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
case 'link':
pug_html = pug_html + "\u003Csvg class=\"fs-icon fs-icon--link\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 20 20\"\u003E\u003Cpath class=\"fs-icon fs-icon--link-lower\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.843 13.648L7.51 14.981a.88.88 0 0 1-1.245 0L5.02 13.736a.88.88 0 0 1 0-1.245l3.736-3.736a.882.882 0 0 1 1.245 0L11.245 10l1.245-1.245-1.245-1.245a2.643 2.643 0 0 0-3.736 0l-3.736 3.736a2.641 2.641 0 0 0 0 3.736l1.245 1.245a2.641 2.641 0 0 0 3.736 0l2.105-2.105a3.528 3.528 0 0 1-2.016-.474z\"\u002F\u003E\u003Cpath class=\"fs-icon fs-icon--link-upper\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16.226 8.755L12.49 12.49a2.641 2.641 0 0 1-3.736 0L7.51 11.245 8.755 10 10 11.245a.88.88 0 0 0 1.245 0l3.736-3.736a.883.883 0 0 0 0-1.246l-1.245-1.245a.882.882 0 0 0-1.245 0l-1.334 1.334A3.51 3.51 0 0 0 9.14 5.88l2.105-2.106a2.643 2.643 0 0 1 3.736 0l1.245 1.245a2.641 2.641 0 0 1 0 3.736z\"\u002F\u003E\u003C\u002Fsvg\u003E";
  break;
}
};
pug_mixins["bylineAuthor"] = pug_interp = function(author, rowTitle, rowLetterId, trackingIndex, isCoAuthor){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if (((author || {}).name)) {
pug_html = pug_html + "\u003Cdiv class=\"byline__author\"\u003E";
if ((isCoAuthor)) {
pug_html = pug_html + "\u003Cspan class=\"byline__by-space\"\u003E&nbsp;\u003C\u002Fspan\u003E\u003Cspan class=\"byline__by\"\u003Eand\u003C\u002Fspan\u003E";
}
else {
pug_html = pug_html + "\u003Cspan class=\"byline__by\"\u003EBy\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003Ca" + (" class=\"byline__author-name\""+pug_attr("href", author.url, true, false)+pug_attr("data-ga-track", (rowTitle === 'editors picks' ? `Cover Story - Position 0 - ${author.name}` :`Channel - ${rowLetterId ? `Block ${rowLetterId} - `: ''}${rowTitle ? `${rowTitle} - ` : ''}${trackingIndex ? `Position ${trackingIndex} - `: ''}${author.name}`), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = author.name) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
if ((author.displayType)) {
pug_html = pug_html + "\u003Cspan class=\"byline__author-type\"\u003E" + (pug_escape(null == (pug_interp = author.displayType) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
};
pug_mixins["byline"] = pug_interp = function(item, rowTitle, rowLetterId){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if ((item.type !== 'video')) {
pug_html = pug_html + "\u003Cspan class=\"byline\"\u003E\u003Cdiv class=\"byline__author-group\"\u003E";
pug_mixins["bylineAuthor"](item.author, rowTitle, rowLetterId, item.trackingIndex || 0, false);
// iterate (item.coAuthors || [])
;(function(){
  var $$obj = (item.coAuthors || []);
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var coAuthor = $$obj[pug_index0];
pug_mixins["bylineAuthor"](coAuthor, rowTitle, rowLetterId, item.trackingIndex  || 0, true);
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var coAuthor = $$obj[pug_index0];
pug_mixins["bylineAuthor"](coAuthor, rowTitle, rowLetterId, item.trackingIndex  || 0, true);
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fspan\u003E";
}
};












pug_mixins["paidContentLabel"] = pug_interp = function(pickPaidLabel){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cspan class=\"data-viz__paid-content-name\"\u003E" + (pug_escape(null == (pug_interp = pickPaidLabel.brandName) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan" + (" class=\"data-viz__paid-content-label\""+pug_attr("style", pug_style({'color': pickPaidLabel.primaryColor}), true, false)) + "\u003E" + (pug_escape(null == (pug_interp = ` ${pickPaidLabel.label} `) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan class=\"data-viz__promoted\"\u003E" + (pug_escape(null == (pug_interp = pickPaidLabel.ftcLabel) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
};
pug_mixins["pickItem"] = pug_interp = function(pick){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"editors-pick\"\u003E\u003Cdiv class=\"data-viz__timestamp\"\u003E" + (pug_escape(null == (pug_interp = pick.timestamp) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
if (((pick.paidLabel || {}).brandName)) {
pug_html = pug_html + "\u003Cdiv class=\"data-viz__paid-content-container\"\u003E";
pug_mixins["paidContentLabel"](pick.paidLabel);
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003Ca" + (" class=\"data-viz__title\""+pug_attr("href", pick.uri, true, false)+pug_attr("title", pick.title, true, false)+pug_attr("data-ga-track", pick.gaTrack, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = pick.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
pug_mixins["byline"](pick);
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
if ((picksData)) {
pug_html = pug_html + "\u003Cdiv class=\"editors-picks\"\u003E";
// iterate picksData
;(function(){
  var $$obj = picksData;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var pick = $$obj[pug_index1];
pug_mixins["pickItem"](pick);
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var pick = $$obj[pug_index1];
pug_mixins["pickItem"](pick);
    }
  }
}).call(this);

pug_html = pug_html + "\u003Ca class=\"editors-picks__see-all\" href=\"https:\u002F\u002Fwww.forbes.com\u002Feditors-picks\u002F\" data-ga-track=\"Editors' Picks See All\"\u003E\u003Cspan\u003ESee All\u003C\u002Fspan\u003E";
pug_mixins["icon"]('arrowRight');
pug_html = pug_html + "\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
}
    }.call(this, "picksData" in locals_for_with ?
        locals_for_with.picksData :
        typeof picksData !== 'undefined' ? picksData : undefined));
    ;;return pug_html;}