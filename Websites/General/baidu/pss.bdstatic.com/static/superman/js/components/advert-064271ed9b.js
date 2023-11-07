F.module("superman:components/advert", function (require, exports, ctx) {
  var $davertWrap = $("#s_popup_advert");
  var data = bds.comm && bds.comm.popUpAdvert;
  var timer = null;
  var fadeTime = 600;
  var showStyle = {
    transition: "all 0.5s",
    "-webkit-transition": "all 0.5s",
    "-moz-transition": "all 0.5s",
    "-o-transition": "all 0.5s",
    transform: "scale(1)",
    "-ms-transform": "scale(1)",
    "-moz-transform": "scale(1)",
    "-webkit-transform": "scale(1)",
    "-o-transform": "scale(1)",
    opacity: 1,
  };
  var hideStyle = {
    transition: "all 0.5s",
    "-webkit-transition": "all 0.5s",
    "-moz-transition": "all 0.5s",
    "-o-transition": "all 0.5s",
    transform: "scale(0)",
    "-ms-transform": "scale(0)",
    "-moz-transform": "scale(0)",
    "-webkit-transform": "scale(0)",
    "-o-transform": "scale(0)",
    opacity: 0,
  };
  var TAG = data.tag;
  var KEY_PREFIX = "advert_";
  var KEY_SHOWTIMES = KEY_PREFIX + TAG;
  var KEY_CLOSEADVERT = KEY_SHOWTIMES + "_close";
  function initDom() {
    var countDownBg = data.countDownBg || "rgba(251,251,251,0.8)";
    var replayBg = data.replayBg || "rgba(216,216,216,0.15)";
    var shrinkClass = "advert-shrink advert-shrink2";
    $davertWrap.html(
      '<div class="popup-advert">' +
        '<a class="advert-link" target="_blank" href="' +
        data.jumpUrl +
        '">' +
        '<img class="advert" src="' +
        data.imgUrl +
        '">' +
        "</a>" +
        '<div class="right-wrap" style="background:' +
        countDownBg +
        '">' +
        '<span class="popup-count-down">倒计时' +
        data.showTime +
        "秒</span>" +
        '<span class="close-wrap">' +
        '<i class="c-icon close-icon">&#xe610;</i>' +
        '<span class="close-text">关闭</span>' +
        "</span>" +
        "</div>" +
        "</div>" +
        '<div class="' +
        shrinkClass +
        '">' +
        '<i class="close-shrink c-icon">&#xe610;</i>' +
        '<a class="shrink-link" target="_blank" href="' +
        data.jumpUrl +
        '">' +
        '<img class="shrink" src="' +
        data.iconUrl +
        '">' +
        "</a>" +
        '<span class="replay"  style="background:' +
        replayBg +
        '">重播</span>' +
        "</div>"
    );
    var maxNumer = parseInt(data.showNumber);
    var showNumber = 0;
    try {
      showNumber = parseInt(window.localStorage.getItem(KEY_SHOWTIMES), 10);
    } catch (error) {}
    showNumber = isNaN(showNumber) ? 0 : showNumber;
    if (showNumber < maxNumer) {
      $davertWrap.find(".advert").load(function () {
        ctx.fire("advertAutoPlay");
        $davertWrap
          .find(".popup-count-down")
          .text("倒计时" + data.showTime + "秒");
        $davertWrap.find(".popup-advert").fadeIn(fadeTime);
        countDown();
        showNumber++;
        try {
          window.localStorage.setItem(KEY_SHOWTIMES, showNumber);
        } catch (error) {}
      });
    } else {
      $davertWrap.find(".shrink").load(function () {
        ctx.fire("shrinkAutoPlay");
        $davertWrap.find(".advert-shrink").css(showStyle);
      });
    }
  }
  function bindEvent() {
    $davertWrap.find(".advert-link").on("click", function () {
      ctx.fire("advertClick");
    });
    $davertWrap.find(".close-wrap").on("click", function () {
      ctx.fire("advertClose");
      clearInterval(timer);
      $davertWrap.find(".popup-advert").fadeOut(fadeTime);
      $davertWrap.find(".advert-shrink").css(showStyle);
    });
    $davertWrap.find(".shrink-link").on("click", function () {
      ctx.fire("shrinkClick");
    });
    $davertWrap.find(".close-shrink").on("click", function () {
      ctx.fire("shrinkClose");
      clearInterval(timer);
      $davertWrap.find(".advert-shrink").css(hideStyle);
      $davertWrap.find(".popup-advert").fadeOut(fadeTime, function () {
        $davertWrap.find(".popup-advert").remove();
      });
      try {
        window.localStorage.setItem(KEY_CLOSEADVERT, "true");
      } catch (error) {}
    });
    $davertWrap.find(".replay").on("click", function () {
      $davertWrap
        .find(".popup-count-down")
        .text("倒计时" + data.showTime + "秒");
      $davertWrap.find(".popup-advert").fadeIn(fadeTime);
      countDown();
      $davertWrap.find(".advert-shrink").css(hideStyle);
      ctx.fire("advertReplay");
    });
  }
  function countDown() {
    var maxTime = parseInt(data.showTime);
    timer = setInterval(function () {
      if (maxTime > 1) {
        maxTime--;
        $davertWrap.find(".popup-count-down").text("倒计时" + maxTime + "秒");
      } else {
        clearInterval(timer);
        $davertWrap.find(".popup-advert").fadeOut(fadeTime);
        $davertWrap.find(".advert-shrink").css(showStyle);
      }
    }, 1e3);
  }
  function removeOldKey() {
    try {
      for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (
          key.indexOf(KEY_PREFIX) === 0 &&
          key !== KEY_SHOWTIMES &&
          key !== KEY_CLOSEADVERT
        ) {
          window.localStorage.removeItem(key);
        }
      }
    } catch (error) {}
  }
  exports.init = function () {
    removeOldKey();
    var closeAdvert = false;
    try {
      closeAdvert = window.localStorage.getItem(KEY_CLOSEADVERT);
    } catch (error) {}
    if (closeAdvert === "true" || !data) {
      $davertWrap.remove();
      return;
    }
    initDom();
    bindEvent();
  };
});
F.addLog("superman:components/advert", [
  "advertAutoPlay",
  "advertReplay",
  "advertClick",
  "advertClose",
  "shrinkAutoPlay",
  "shrinkClick",
  "shrinkClose",
]);
