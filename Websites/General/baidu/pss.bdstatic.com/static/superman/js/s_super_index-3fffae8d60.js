(function () {
  var samNewBox =
    bds && bds.comm && bds.comm.samNewBox && bds.comm.samNewBox === 1;
  setTimeout(function () {
    try {
      var kw = document.getElementById("kw");
      kw.focus();
      if (samNewBox) {
        var btn = $("#su");
        btn.addClass("btnfocus");
        var form = $("#form");
        form.addClass("sam_form_shadow");
      }
      kw.parentNode.className = "bg s_ipt_wr new-pmd iptfocus quickdelete-wrap";
    } catch (e) {}
  }, 0);
  setTimeout(function () {
    var kw = document.getElementById("kw");
    var ua = navigator.userAgent.toLowerCase();
    if (
      /ipad/.test(ua) &&
      document.activeElement &&
      document.activeElement === kw
    ) {
      kw.blur();
    }
  }, 0);
})();
$(window).on("load", function () {
  var rand = Math.random();
  if (rand < 0.01) {
    try {
      var baseUrl =
        "//www.baidu.com/nocache/fesplg/s.gif?log_type=hm&type=uamonitor&";
      var queryString = "";
      queryString += "&c_ua=" + encodeURIComponent(navigator.userAgent);
      queryString += "&s_ua=" + encodeURIComponent(bds.comm.userAgent);
      var url = baseUrl + queryString;
      var img = new Image();
      var img_rand = "_LOG_" + new Date().getTime();
      img.onload = function () {
        delete window[img_rand];
      };
      window[img_rand] = img;
      img.src = url;
    } catch (e) {}
  }
});