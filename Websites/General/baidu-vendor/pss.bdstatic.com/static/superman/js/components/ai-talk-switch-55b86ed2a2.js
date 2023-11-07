define("superman/components/ai-talk-switch", ["require", "exports"], function (
  require,
  _exports
) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: true });
  _exports.AiTalkSwitch = void 0;
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source)
        );
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key)
          );
        });
      }
    }
    return target;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true,
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var AiTalkSwitch = (function () {
    function AiTalkSwitch(require) {
      var _this = this;
      _classCallCheck(this, AiTalkSwitch);
      _defineProperty(this, "body", void 0);
      _defineProperty(this, "passportStaticPage", void 0);
      _defineProperty(this, "logSend", void 0);
      _defineProperty(this, "rightTopEntry", void 0);
      _defineProperty(this, "tipEntry", void 0);
      _defineProperty(this, "hasRightTopEntry", void 0);
      _defineProperty(this, "hasTipEntry", void 0);
      _defineProperty(this, "isIE", void 0);
      _defineProperty(this, "isIpad", void 0);
      _defineProperty(this, "entryType", void 0);
      _defineProperty(this, "aiEntryOpenFunction", void 0);
      _defineProperty(this, "aiEntryCloseFunction", void 0);
      _defineProperty(this, "aiContainer", void 0);
      _defineProperty(this, "require", void 0);
      var shouldInit = bds.comm.showTipEntry || bds.comm.showRightEntry;
      this.require = require;
      this.logSend = window && window.c;
      this.body = $("body");
      if (!shouldInit) {
        return;
      }
      var _navigator = navigator,
        ua = _navigator.userAgent,
        platform = _navigator.platform,
        maxTouchPoints = _navigator.maxTouchPoints;
      this.isIE = /(mise|trident)/i.test(ua);
      this.isIpad =
        /ipad/i.test(ua) || (platform === "MacIntel" && maxTouchPoints > 1);
      this.passportStaticPage = "//www.baidu.com/cache/user/html/v3Jump.html";
      this.rightTopEntry = $(".ai-entry-right");
      this.hasRightTopEntry =
        (this.rightTopEntry && this.rightTopEntry.length > 0) || false;
      this.tipEntry = $(".undertips-ai-entry");
      this.hasTipEntry = (this.tipEntry && this.tipEntry.length > 0) || false;
      this.entryType = "";
      this.aiContainer = {};
      this.require(["ai-search-box-entry"], function (aiBox) {
        var aiContainer = new aiBox.AiSearchBoxEntry();
        _this.aiContainer = aiContainer;
        _this.aiEntryOpenFunction = _this.aiEntryOpen.bind(_this);
        _this.aiEntryCloseFunction = _this.aiEntryClose.bind(_this);
        _this.init();
      });
    }
    _createClass(AiTalkSwitch, [
      {
        key: "creatEvent",
        value: function creatEvent(eventId, type, detail) {
          var isIE = this.isIE;
          if (isIE) {
            var evt = document.createEvent(type);
            type === "Event"
              ? evt.initEvent(eventId, true, false)
              : evt.initCustomEvent(eventId, true, false, detail);
            return evt;
          } else {
            return type === "Event"
              ? new Event(eventId)
              : new CustomEvent(eventId, { detail: detail });
          }
        },
      },
      {
        key: "setStorage",
        value: function setStorage(name, value) {
          try {
            localStorage.setItem(name, value);
          } catch (e) {
            console.error(e);
          }
        },
      },
      {
        key: "buildStyle",
        value: function buildStyle() {
          var styleText =
            "\n            #ai-talk-container {\n                position: absolute;\n                transform: translateY(-100vh);\n                z-index: -500;\n                visibility: hidden;\n                transition-property: transform, visibility;\n                transition-duration: .48s;\n                transition-timing-function: ease-in-out;\n                width: 100%;\n                height: 100vh;\n                background-image: linear-gradient(96deg,\n                    rgba(224, 244, 255, .7) 0%,\n                    rgba(227, 240, 255, .7) 63%, \n                    rgba(235, 229, 255, .7) 100%);\n            }\n            .ai-switch-on #wrapper {\n                transform: translateY(100vh);\n                visibility: hidden;\n                transition-property: transform, visibility;\n                transition-duration: .48s;\n                transition-timing-function: ease-in-out;\n            }\n            .ai-switch-on #ai-talk-container {\n                visibility: visible;\n                z-index: 500;\n                transform: translateY(0);\n                transition-property: transform, visibility;\n                transition-duration: .48s;\n                transition-timing-function: ease-in-out;\n            }\n            .ai-switch-off #wrapper {\n                visibility: visible;\n                transform: translateY(0);\n                transition-property: transform, visibility;\n                transition-duration: .48s;\n                transition-timing-function: ease-in-out;\n            }\n            .ai-switch-off #ai-talk-container {\n                position: absolute;\n                transform: translateY(-100vh);\n                z-index: -500;\n                visibility: hidden;\n                transition-property: transform, visibility;\n                transition-duration: .48s;\n                transition-timing-function: ease-in-out;\n            }\n        ";
          var styleDom = $(
            '<style type="text/css" data-for="result" class="ai-container-style"></style'
          );
          styleDom.text(styleText);
          $("head").append(styleDom);
        },
      },
      {
        key: "buildAiWrapper",
        value: function buildAiWrapper() {
          var body = this.body;
          var aiWrapper = $('<div id="ai-talk-container"></div>');
          body.prepend(aiWrapper);
        },
      },
      {
        key: "bindEvent",
        value: function bindEvent() {
          this.aiEntryOpenFunction &&
            window.addEventListener("ai-entry.open", this.aiEntryOpenFunction);
          this.aiEntryCloseFunction &&
            window.addEventListener(
              "ai-entry.close",
              this.aiEntryCloseFunction
            );
        },
      },
      {
        key: "aiEntryOpen",
        value: function aiEntryOpen() {
          var body = this.body;
          var aiContainer = this.aiContainer;
          var aiDom = document.getElementById("ai-talk-container");
          aiContainer.loadAISearch(aiDom, {
            pcasync: "pc",
            from: "pc_index",
            source: this.entryType,
            asyncRenderUrl: "",
            passportStaticPage: encodeURIComponent(
              window.location.protocol + this.passportStaticPage
            ),
          });
          body.addClass("ai-switch-on").removeClass("ai-switch-off");
          var commonStyle = { height: "100vh", overflow: "hidden" };
          var fixedStyle = this.isIpad
            ? _objectSpread({}, commonStyle, { position: "fixed" })
            : commonStyle;
          body.css(fixedStyle);
          this.setStorage("ai-talk-switch", "open");
        },
      },
      {
        key: "aiEntryClose",
        value: function aiEntryClose() {
          var body = this.body;
          body.removeClass("ai-switch-on").addClass("ai-switch-off");
          var commonStyle = { height: "", overflow: "" };
          var rmFixedStyle = this.isIpad
            ? _objectSpread({}, commonStyle, { position: "" })
            : commonStyle;
          body.css(rmFixedStyle);
          this.setStorage("ai-talk-switch", "close");
          setTimeout(function () {
            body.removeClass("ai-switch-off");
          }, 470);
        },
      },
      {
        key: "generateAnimate",
        value: function generateAnimate(bubbleEntry, rightTopEntry, wait) {
          bubbleEntry.css("display", "inline-block");
          rightTopEntry.addClass("ai-icon-show-animation");
          var step1 = new Promise(function (resolve) {
            setTimeout(function () {
              var icon = $(".ai-entry-icon");
              var bubble = $(".ai-entry-bubble");
              var text = $(".ai-entry-bubble-text");
              icon.css("transform", "scale(1)");
              bubble.css("transform", "none");
              text.css("opacity", 1);
              rightTopEntry.removeClass("ai-icon-show-animation");
              resolve();
            }, 1060);
          });
          var step2 = new Promise(function (resolve) {
            setTimeout(function () {
              rightTopEntry && rightTopEntry.addClass("ai-icon-hide-animation");
              resolve();
            }, wait);
          });
          Promise.all([step1, step2]).then(function () {
            setTimeout(function () {
              var rightTopMask = $(".ai-entry-mask");
              rightTopMask.length > 0 && rightTopMask.css("display", "none");
            }, 840);
          });
        },
      },
      {
        key: "initRightTopEntry",
        value: function initRightTopEntry() {
          var _this2 = this;
          var rightTopEntry = this.rightTopEntry;
          var hasRightTopEntry = this.hasRightTopEntry;
          var hasShowRightTopEntry = localStorage.getItem("ai-entry-showed");
          var lsBubbleText = localStorage.getItem("ai-bubble-text");
          var bubbleEntry = $(".ai-entry-bubble");
          var bubbleTextDom = $(".ai-entry-bubble-text");
          var bubbleText =
            (bubbleTextDom.length > 0 && bubbleTextDom.text()) || "";
          var hasBubbleTextChange = lsBubbleText !== bubbleText;
          this.logSend({
            rsv_ct: 175,
            rsv_cst: 2,
            rsv_clk_extra: JSON.stringify({ text: bubbleText }),
          });
          if (!hasShowRightTopEntry || hasBubbleTextChange) {
            if (
              bubbleEntry &&
              bubbleEntry.length > 0 &&
              rightTopEntry &&
              rightTopEntry.length > 0
            ) {
              this.logSend({
                rsv_ct: 175,
                rsv_cst: 4,
                rsv_clk_extra: JSON.stringify({ text: bubbleText }),
              });
              var root = document.documentElement;
              var bubbleWidth = bubbleEntry.outerWidth(true) || 164;
              root.style.setProperty("--bubble-width", bubbleWidth - 24 + "px");
              this.generateAnimate(bubbleEntry, rightTopEntry, 7e3);
              this.setStorage("ai-entry-showed", "showed");
              this.setStorage("ai-bubble-text", bubbleText);
            }
          } else {
            var rightTopMask = $(".ai-entry-mask");
            rightTopMask.length > 0 && rightTopMask.css("display", "none");
          }
          if (hasRightTopEntry) {
            rightTopEntry &&
              rightTopEntry.on("click", function () {
                _this2.entryType = "home_ic";
                _this2.logSend({
                  rsv_ct: 175,
                  rsv_cst: 1,
                  rsv_clk_extra: JSON.stringify({ text: bubbleText }),
                });
                var ev = _this2.creatEvent("ai-entry.open", "Event");
                window.dispatchEvent(ev);
                _this2.closeOtherAll();
              });
            bubbleEntry &&
              bubbleEntry.on("click", function (e) {
                e.stopPropagation();
                _this2.entryType = "home_bub";
                _this2.logSend({
                  rsv_ct: 175,
                  rsv_cst: 3,
                  rsv_clk_extra: JSON.stringify({ text: bubbleText }),
                });
                var ev = _this2.creatEvent("ai-entry.open", "Event");
                window.dispatchEvent(ev);
                _this2.closeOtherAll();
              });
          }
        },
      },
      {
        key: "initTipEntry",
        value: function initTipEntry() {
          var _this3 = this;
          var dynamicText = "";
          var staticText = "";
          var tipEntry = this.tipEntry;
          var hasTipEntry = this.hasTipEntry;
          var dynamicTextDom = $(".undertips-ai-dynamic-text");
          var staticTextDom = $(".undertips-ai-static-text");
          if (hasTipEntry && dynamicTextDom && dynamicTextDom.length > 0) {
            dynamicText = dynamicTextDom.text();
            staticText = staticTextDom.text();
            this.logSend({
              rsv_ct: 175,
              rsv_cst: 6,
              rsv_clk_extra: JSON.stringify({ text: staticText + dynamicText }),
            });
            var width =
              dynamicTextDom[0].getBoundingClientRect().width.toFixed(2) || 252;
            var compatibleWidth = Number(width) + 0.1;
            dynamicTextDom.width(compatibleWidth);
            dynamicTextDom.text("");
            dynamicTextDom.css("visibility", "visible");
          }
          var showText = "";
          var commaIndex = dynamicText.indexOf("，");
          for (var i = 0; i < dynamicText.length; i++) {
            (function (i) {
              var timer = i > commaIndex ? 100 * i + 240 : 100 * i;
              setTimeout(function () {
                showText += dynamicText[i];
                dynamicTextDom.text(showText);
              }, timer);
            })(i);
          }
          hasTipEntry &&
            tipEntry &&
            tipEntry.on("click", function () {
              _this3.entryType = "home_banner";
              _this3.logSend({
                rsv_ct: 175,
                rsv_cst: 5,
                rsv_clk_extra: JSON.stringify({
                  text: staticText + dynamicText,
                }),
              });
              var ev = _this3.creatEvent("ai-entry.open", "Event");
              window.dispatchEvent(ev);
              _this3.closeOtherAll();
            });
        },
      },
      {
        key: "closeOtherAll",
        value: function closeOtherAll() {
          $(window).trigger("aging-tools.close");
          $(window).trigger("tts.close");
        },
      },
      {
        key: "init",
        value: function init() {
          this.buildAiWrapper();
          this.buildStyle();
          this.bindEvent();
          bds.comm.showTipEntry && this.initTipEntry();
          bds.comm.showRightEntry && this.initRightTopEntry();
        },
      },
      {
        key: "destroy",
        value: function destroy() {
          this.aiEntryOpenFunction &&
            window.removeEventListener(
              "ai-entry.open",
              this.aiEntryOpenFunction
            );
          this.aiEntryCloseFunction &&
            window.removeEventListener(
              "ai-entry.close",
              this.aiEntryCloseFunction
            );
        },
      },
    ]);
    return AiTalkSwitch;
  })();
  _exports.AiTalkSwitch = AiTalkSwitch;
});
