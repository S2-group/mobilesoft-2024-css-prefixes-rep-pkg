function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
  }
  return _typeof(obj);
}
define("superman/components/aging-tools", [
  "require",
  "exports",
  "@baidu/aging-tools-pc",
  "superman/lib/event",
], function (require, _exports, AgingTool, _event) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: true });
  _exports.Tools = void 0;
  AgingTool = _interopRequireWildcard(AgingTool);
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (
      obj === null ||
      (_typeof(obj) !== "object" && typeof obj !== "function")
    ) {
      return { default: obj };
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor =
      Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor
          ? Object.getOwnPropertyDescriptor(obj, key)
          : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj["default"] = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
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
  var reMakeEvent = {
    on: function on(eventId, cb) {
      (0, _event.on)("aging-tools", eventId, cb);
    },
    fire: function fire(eventId, data) {
      (0, _event.fire)("aging-tools", eventId, { data: data });
    },
    off: function off(eventId, cb) {
      (0, _event.un)("aging-tools", eventId, cb);
    },
  };
  var addEventListener = function addEventListener(dom, eventName, fn) {
    dom.addEventListener
      ? dom.addEventListener(eventName, fn)
      : dom.attachEvent("on" + eventName, fn);
  };
  var removeEventListener = function removeEventListener(dom, eventName, fn) {
    dom.removeEventListener
      ? dom.removeEventListener(eventName, fn)
      : dom.detachEvent("on" + eventName, fn);
  };
  var errLog = function errLog(e) {
    var message = e.message,
      colno = e.colno,
      lineno = e.lineno,
      filename = e.filename;
    if (/\.baidu\.com\/wza\//g.test(filename)) {
      (0, _event.fire)("superman:aging-tools", "new_aria_script_error", {
        filename: filename,
        lineno: lineno,
        colno: colno,
        message: message,
      });
    }
  };
  var loadAriaScript = function loadAriaScript(callBack) {
    if (document.querySelector("#new_aria_service")) {
      callBack && callBack();
      return;
    }
    var now = new Date().getTime();
    var url =
      "https://www.baidu.com/wza/aria.js?appid=c890648bf4dd00d05eb9751dd0548c30";
    var script = document.createElement("script");
    script.src = url;
    script.id = "new_aria_service";
    script.setAttribute("charset", "utf-8");
    var seccuss = function seccuss() {
      (0, _event.fire)("superman:aging-tools", "new_aria_script_load", {
        isLoad: 1,
        cost: new Date().getTime() - now,
      });
      callBack && callBack();
    };
    var fail = function fail() {
      (0, _event.fire)("superman:aging-tools", "new_aria_script_load", {
        isLoad: 0,
        cost: new Date().getTime() - now,
      });
    };
    addEventListener(script, "load", seccuss);
    addEventListener(script, "error", fail);
    addEventListener(window, "error", errLog);
    document.body.appendChild(script);
    var page = document.querySelector("#aging-total-page");
    if (page) {
      document.body.removeChild(page);
    }
  };
  var openAgingTools = function openAgingTools() {
    loadAriaScript(function () {
      var aria = window.aria;
      var status = (aria && aria.status()) || false;
      if (status && aria) {
        aria.end();
        (0, _event.fire)("superman:aging-tools", "new_aria_service", {
          show: 0,
        });
      } else if (aria) {
        reMakeEvent.fire("aging-tools.close", "new_aria_not_close");
        aria.start();
        (0, _event.fire)("superman:aging-tools", "new_aria_service", {
          show: 1,
        });
      }
      reMakeEvent.fire("tts.close", "new_aria_not_close");
    });
  };
  var Tools = (function () {
    function Tools() {
      _classCallCheck(this, Tools);
      _defineProperty(this, "tool", void 0);
    }
    _createClass(Tools, [
      {
        key: "init",
        value: function init() {
          if (!s_session.agingVoice) {
            if (/new_aria=1/g.test(document.cookie)) {
              var ariaData = {};
              try {
                var ariaLSStr = localStorage.getItem("aria");
                if (ariaLSStr) {
                  ariaData = JSON.parse(ariaLSStr);
                }
              } catch (e) {}
              if (ariaData && ariaData.status) {
                loadAriaScript();
              }
              $(".aging-entry").on("click", openAgingTools);
              var aiTalkSwitch = localStorage.getItem("ai-talk-switch");
              var hasShowAiTalk = aiTalkSwitch === "open";
              addEventListener(window, "keyup", function (e) {
                if (
                  e.code &&
                  e.code.toLocaleLowerCase() === "backquote" &&
                  e.altKey &&
                  e.ctrlKey &&
                  !hasShowAiTalk
                ) {
                  openAgingTools();
                }
              });
              reMakeEvent.on("aging-tools.close", function (e) {
                (!e || e.data !== "new_aria_not_close") &&
                  window.aria &&
                  window.aria.end();
              });
              reMakeEvent.on("tts.close", function (e) {
                (!e || e.data !== "new_aria_not_close") &&
                  window.aria &&
                  window.aria.end();
              });
              return;
            }
          }
          var bigTextDom = null;
          var sWrap = $("#s_wrap");
          if (sWrap.height()) {
            bigTextDom = $("#s_wrap");
          } else {
            bigTextDom = $("#wrapper");
          }
          $(window).on("aging-tools.close", function () {
            reMakeEvent.fire("aging-tools.close", undefined);
          });
          reMakeEvent.on("tts.close", function () {
            $(window).trigger("tts.close", undefined);
          });
          var data = {
            rootDom: "#wrapper",
            entry: $(".aging-entry"),
            scaleDom: ["#wrapper"],
            from: "index",
            bigTextDom: bigTextDom,
            disableVoice:
              s_session.agingVoice === "1" ? s_session.agingVoice : "",
            newType: "1",
            logService: function logService(clickType) {
              (0, _event.fire)("superman:aging-tools", "toolClick", {
                clickType: clickType,
              });
            },
            event: reMakeEvent,
          };
          this.createMeet(data);
        },
      },
      {
        key: "createMeet",
        value: function createMeet(data) {
          var Tool = AgingTool["default"];
          this.tool = new Tool({ data: data });
          this.tool.attach($("body")[0]);
        },
      },
      {
        key: "destroy",
        value: function destroy() {
          var aria = window.aria;
          if (aria) {
            aria.end();
            delete window["aria"];
          }
          removeEventListener(window, "error", errLog);
          var ariaScript = document.querySelector("#new_aria_service");
          ariaScript && document.body.removeChild(ariaScript);
          this.tool && this.tool.detached && this.tool.detached();
        },
      },
    ]);
    return Tools;
  })();
  _exports.Tools = Tools;
});
