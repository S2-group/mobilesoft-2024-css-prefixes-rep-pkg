define("superman/components/login_guide", [
  "require",
  "exports",
  "superman/lib/event",
], function (require, _exports, _event) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: true });
  _exports.init = init;
  function _createForOfIteratorHelper(o) {
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) {
        var i = 0;
        var F = function F() {};
        return {
          s: F,
          n: function n() {
            if (i >= o.length) return { done: true };
            return { done: false, value: o[i++] };
          },
          e: function e(_e) {
            throw _e;
          },
          f: F,
        };
      }
      throw new TypeError(
        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }
    var it,
      normalCompletion = true,
      didErr = false,
      err;
    return {
      s: function s() {
        it = o[Symbol.iterator]();
      },
      n: function n() {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function e(_e2) {
        didErr = true;
        err = _e2;
      },
      f: function f() {
        try {
          if (!normalCompletion && it["return"] != null) it["return"]();
        } finally {
          if (didErr) throw err;
        }
      },
    };
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  F.addLog("superman:login_guide", [
    "loginPicShow",
    "loginPicClick",
    "unLoginPicShow",
    "unLoginPicClick",
    "loginWordShow",
    "loginWordClick",
    "unLoginWordShow",
    "unLoginWordClick",
  ]);
  F.addLog("superman:login_guide", { categoryClick: "2022040700" });
  var popup = null;
  function loginPopShow() {
    var loginurl =
      location.protocol +
      "//passport.baidu.com/passApi/js/uni_login_wrapper.js?cdnversion=" +
      new Date().getTime();
    if (popup) {
      popup.show();
    } else {
      $.getScript(loginurl, function () {
        var config = {
          loginVersion: "v5",
          composeTemplate: 1,
          apiOpt: {
            staticPage:
              window.location.protocol +
              "//" +
              window.location.host +
              "/home/xman/show/worldcupv3jump",
            loginType: 1,
            product: "mn",
            u: window.document.location.href,
            safeFlag: 0,
            memberPass: true,
            sms: 5,
          },
          cache: true,
          forgetLink:
            "https://passport.baidu.com/?getpass_index&tpl=mn&u=" +
            encodeURIComponent(window.location.href),
          registerLink:
            "https://passport.baidu.com/v2/?reg&regType=1&tpl=mn&u=" +
            encodeURIComponent(window.location.href),
          authsite: ["tsina", "weixin", "qzone"],
          tangram: true,
        };
        popup = passport.pop.init(config);
        popup.show();
      });
    }
  }
  function setLs(option) {
    if (option.ls) {
      try {
        var date = new Date();
        var dataStr = JSON.stringify(
          date.getFullYear() + "" + date.getMonth() + "" + date.getDate()
        );
        window.localStorage.setItem(option.ls, dataStr);
      } catch (e) {}
    }
  }
  function close(option) {
    setLs(option);
    var element = $(option.target)[0];
    var parentElement =
      element === null || element === void 0 ? void 0 : element.parentNode;
    if (parentElement) {
      parentElement.removeChild(element);
    }
  }
  function created(option) {
    var loginBubble = option.guideBubble;
    var hasTitle = !!loginBubble.title;
    var firstLine = hasTitle ? loginBubble.title : loginBubble.text[0];
    var secondLine = hasTitle ? loginBubble.text[0] : loginBubble.text[1];
    var pos = loginBubble.pos;
    var isLogin = s_session && s_session.isLogin;
    var classForPos = ""
      .concat(isLogin ? "is-login" : "", " guide-info-pos-")
      .concat(pos);
    var addHtml = '\n        <div class="guide-info-new guide-info-login '
      .concat(classForPos, '" style="background:')
      .concat(
        loginBubble.background,
        ';">\n            <div class="login-guide-main">\n                <div class="guide-left-main">\n                    <div class="'
      )
      .concat(
        hasTitle ? "guide-first-title" : "guide-first-content",
        '">\n                        '
      )
      .concat(
        firstLine,
        '\n                    </div>\n                    <div class="guide-left-content">\n                        '
      )
      .concat(
        secondLine,
        '\n                    </div>\n                    <div class="guide-left-button" style="background:'
      )
      .concat(loginBubble.buttonColor, ';">\n                        ')
      .concat(
        loginBubble.button,
        '\n                    </div>\n                </div>\n                <img class="guide-right-main" src="'
      )
      .concat(
        loginBubble.image,
        '"/>\n            </div>\n            <i class="c-icon guide-close">&#xe610;</i>\n            <div class="guide-arrow-bottom" style="border-bottom-color:'
      )
      .concat(
        loginBubble.background || "#f3f6ff",
        ';">\n            </div>\n        </div>  \n    '
      );
    $("#u1").append(addHtml);
    $(".guide-left-button").on("mouseover", function () {
      $(".guide-left-button").css(
        "background-color",
        "".concat(loginBubble.buttonHover)
      );
    });
    $(".guide-left-button").on("mouseout", function () {
      $(".guide-left-button").css(
        "background-color",
        "".concat(loginBubble.buttonColor)
      );
    });
    if (isLogin) {
      var avaWidth = $("#u1 .s-top-username").width();
      var diff = pos === "1" ? 107 - avaWidth : 57 - avaWidth;
      var classPos = "#u1 .guide-info-new.guide-info-pos-".concat(pos);
      var offsetRight = parseInt($(classPos).css("right"), 10) - diff;
      $(classPos).css("right", "".concat(offsetRight, "px"));
    }
    var timer = setTimeout(function () {
      close({ ls: option.ls, target: ".guide-info-new" });
    }, 5e3);
    $(".guide-info-new").on("mouseenter", function () {
      clearTimeout(timer);
    });
    $(".guide-info-new").on("mouseleave", function () {
      timer = setTimeout(function () {
        close({ ls: option.ls, target: ".guide-info-new" });
      }, 5e3);
    });
    var fireShowType = isLogin ? "loginPicShow" : "unLoginPicShow";
    var fireClickType = isLogin ? "loginPicClick" : "unLoginPicClick";
    (0, _event.fire)("superman:login_guide", fireShowType, {
      popid: loginBubble.textId,
    });
    $("body").on("click", ".guide-info-new", function (e) {
      var isClobtn = e.target.className.indexOf("guide-close") !== -1;
      var clicktype = isClobtn ? "close_cl" : "cont_cl";
      if (!loginBubble.jumpUrl || isClobtn) {
        clearTimeout(timer);
        close({ ls: option.ls, target: ".guide-info-new" });
      }
      (0,
      _event.fire)("superman:login_guide", fireClickType, { clicktype: clicktype, popid: loginBubble.textId });
      if (!isClobtn) {
        loginBubble.jumpUrl ? window.open(loginBubble.jumpUrl) : loginPopShow();
      }
    });
  }
  function createdTips(option) {
    var guideBubble = option.guideBubble;
    var pos = guideBubble.pos;
    var isLogin = s_session && s_session.isLogin;
    var classForPos = ""
      .concat(isLogin ? "is-login" : "", " guide-info-pos-")
      .concat(pos);
    var type = guideBubble.wordType === "tip" ? "tip" : "operate";
    var opTxt =
      type === "operate"
        ? '<a class="operate-jump" src="'
            .concat(guideBubble.jumpUrl, '">')
            .concat(guideBubble.operateText, "></a>")
        : "";
    var addHtml = '\n        <div class="guide-word-tips '
      .concat(classForPos, " ")
      .concat(type, '" >\n            <span>')
      .concat(guideBubble.title, "</span>\n            ")
      .concat(
        opTxt,
        '\n            <i class="c-icon word-guide-close">&#xe610;</i>\n            <div class="word-arrow-bottom-black">\n            </div>\n            <div class="word-arrow-bottom-white">\n            </div>\n        </div>\n    '
      );
    $("#u1").append(addHtml);
    if (isLogin) {
      var avaWidth = $("#u1 .s-top-username").width();
      var diff = 101 - avaWidth;
      var classPos = "#u1 .guide-word-tips.guide-info-pos-".concat(pos);
      var offsetRight = parseInt($(classPos).css("right"), 10) - diff;
      $(classPos).css("right", "".concat(offsetRight, "px"));
    }
    var timer = setTimeout(function () {
      close({ ls: option.ls, target: ".guide-word-tips" });
    }, 5e3);
    $(".guide-info-new").on("mouseenter", function () {
      clearTimeout(timer);
    });
    $(".guide-info-new").on("mouseleave", function () {
      timer = setTimeout(function () {
        close({ ls: option.ls, target: ".guide-word-tips" });
      }, 5e3);
    });
    if (type === "operate") {
      var fireShowType = isLogin ? "loginWordShow" : "unLoginWordShow";
      var fireClickType = isLogin ? "loginWordClick" : "unLoginWordClick";
      (0, _event.fire)("superman:login_guide", fireShowType, {
        popid: guideBubble.textId,
      });
      $("body").on("click", ".word-guide-close", function () {
        close({ ls: option.ls, target: ".guide-word-tips" });
        (0,
        _event.fire)("superman:login_guide", fireClickType, { clicktype: "close_cl", popid: guideBubble.textId });
      });
      $("body").on("click", ".operate-jump", function () {
        (0,
        _event.fire)("superman:login_guide", fireClickType, { clicktype: "jumpurl_cl", popid: guideBubble.textId });
      });
    }
  }
  function initFun() {
    var hideGuide = "0";
    var guideBubble = $("#promote_login_box").html();
    var logObj = [];
    try {
      logObj = JSON.parse(guideBubble) || [];
    } catch (e) {}
    var date = new Date();
    var dataStr = JSON.stringify(
      date.getFullYear() + "" + date.getMonth() + "" + date.getDate()
    );
    var isShow = function isShow(key) {
      try {
        hideGuide = window.localStorage.getItem(key) || "0";
      } catch (e) {}
      return !hideGuide || hideGuide !== dataStr;
    };
    var isLogin = s_session && s_session.isLogin;
    var renderGuide = function renderGuide(obj, guideType) {
      guideType.indexOf("Pic") !== -1
        ? created({ ls: obj.type, guideBubble: obj })
        : createdTips({ ls: obj.type, guideBubble: obj });
    };
    var _iterator = _createForOfIteratorHelper(logObj),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var obj = _step.value;
        if (isShow(obj.type)) {
          if (obj.type === "loginPic" && isLogin) {
            renderGuide(obj, obj.type);
          }
          if (obj.type === "unLoginPic" && !isLogin) {
            renderGuide(obj, obj.type);
          }
          if (obj.type === "loginWord" && isLogin) {
            renderGuide(obj, obj.type);
          }
          if (obj.type === "unLoginWord" && !isLogin) {
            renderGuide(obj, obj.type);
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  function init() {
    initFun();
  }
});
