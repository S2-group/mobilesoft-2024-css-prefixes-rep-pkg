define("superman/components/invoke", ["require", "exports"], function (
  require,
  _exports
) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: true });
  _exports.init = init;
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
  var InvokeService = (function () {
    function InvokeService(require) {
      _classCallCheck(this, InvokeService);
      _defineProperty(this, "invokeInfo", void 0);
      _defineProperty(this, "mcp", void 0);
      _defineProperty(this, "require", void 0);
      this.require = require;
      this.invokeInfo = null;
      this.mcp = null;
    }
    _createClass(InvokeService, [
      {
        key: "initInfo",
        value: function initInfo() {
          var _this = this;
          if (!this.mcp) {
            this.getMCP().then(function (mcp) {
              _this.mcp = mcp;
              _this.mcp.setCommonParams({
                app: "wise",
                scene: "ipad",
                from: "",
              });
              _this.getInvokeInfo();
            });
          }
        },
      },
      {
        key: "isIPad",
        value: function isIPad() {
          var ua = navigator.userAgent;
          return (
            (/macintosh|mac os x/i.test(ua) &&
              window.screen.height > window.screen.width &&
              !ua.match(/(iPhone\sOS)\s([\d_]+)/)) ||
            ua.match(/(iPad).*OS\s([\d_]+)/)
          );
        },
      },
      {
        key: "hitMcp",
        value: function hitMcp(pos) {
          if (!this.isIPad()) {
            return false;
          }
          if (!this.mcp) {
            return false;
          }
          if (!this.invokeInfo) {
            return false;
          }
          var key = this.getKey(pos);
          var invokeInfo = this.invokeInfo;
          var actionRule = invokeInfo.action_rule;
          if (actionRule && actionRule["".concat(key)]) {
            return this.mcp.hitMcp(actionRule["".concat(key)]);
          }
          return false;
        },
      },
      {
        key: "canInvoke",
        value: function canInvoke(pos) {
          if (!this.mcp) {
            return false;
          }
          var key = this.getKey(pos);
          var _this$mcp$getExitInfo = this.mcp.getExitInfo(key),
            isExit = _this$mcp$getExitInfo.isExit;
          return !isExit;
        },
      },
      {
        key: "execInvoke",
        value: function execInvoke(pos) {
          var replacedParams =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : {};
          var index =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : 0;
          pos = 5;
          if (!this.isIPad()) {
            return;
          }
          if (!this.mcp) {
            return;
          }
          var key = this.getKey(pos);
          var originalInfo = this.invokeInfo;
          var logId = originalInfo.log_id;
          var replacedInvokeInfo = this.mcp.replaceStubs(
            originalInfo,
            replacedParams
          );
          var inovkeData =
            replacedInvokeInfo.action_rule["".concat(key)][index];
          try {
            this.mcp.execInvoke(key, inovkeData, logId);
          } catch (error) {}
        },
      },
      {
        key: "getInvokeInfo",
        value: function getInvokeInfo() {
          var _this2 = this;
          if (!this.mcp) {
            return;
          }
          this.mcp
            .getInvokeInfo({ invoke_info: { pos_4: [{}], pos_5: [{}] } })
            .then(function (invokeInfo) {
              _this2.invokeInfo = invokeInfo;
            });
        },
      },
      {
        key: "getMCP",
        value: function getMCP() {
          var _this3 = this;
          return new Promise(function (reslove) {
            _this3.require(["@baidu/mcp-sdk/dist/apm/index"], function (mod) {
              reslove(mod);
            });
          });
        },
      },
      {
        key: "getKey",
        value: function getKey(pos) {
          return "pos_".concat(pos);
        },
      },
    ]);
    return InvokeService;
  })();
  function init(require) {
    var hitSample =
      bds &&
      bds.comm &&
      bds.comm.sampleval &&
      bds.comm.sampleval.indexOf("pc_recommend_invoke") > -1;
    var invokeService = new InvokeService(require);
    if (hitSample && invokeService.isIPad()) {
      invokeService.initInfo();
      if (bds && bds.util) {
        bds.util.increaseService = invokeService;
      }
    }
  }
});
