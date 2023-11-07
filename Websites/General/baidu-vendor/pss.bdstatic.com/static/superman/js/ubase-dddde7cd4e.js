jQuery.extend(F, {
  unique: (function () {
    var uniq = +new Date();
    return function (prefix) {
      return (prefix || "") + ++uniq;
    };
  })(),
  mix: jQuery.extend,
  inherit: function () {
    var args = Array.prototype.slice.call(arguments),
      subclass = args[0],
      subpro = subclass.prototype,
      oinitialize = subpro.initialize,
      initializes = [],
      index = 1,
      superclass,
      superpro;
    while ((superclass = args[index++])) {
      superpro = F.isFunction(superclass)
        ? superclass.prototype
        : F.isPlainObject(superclass)
        ? superclass
        : null;
      if (superpro) {
        F.isFunction(superpro.initialize) &&
          initializes.push(superpro.initialize);
        for (var key in superpro) {
          if (superpro.hasOwnProperty(key) && key !== "initialize") {
            subpro[key] = superpro[key];
          }
        }
      }
    }
    if (initializes.length) {
      oinitialize && initializes.push(oinitialize);
      subpro.initialize = function () {
        var args = arguments,
          idx = 0,
          len = initializes.length;
        for (; idx < len; idx++) {
          initializes[idx].apply(this, args);
        }
      };
    }
    return subclass;
  },
});
jQuery.each(
  "isFunction,isPlainObject,isArray".split(","),
  function (_, method) {
    F[method] = jQuery[method];
  }
);
F.module("superman:superuijs/util/tool", function (require, exports) {
  exports.unparam = function (param) {
    if (typeof param !== "string" || !param) {
      return {};
    }
    var obj = {},
      pm = param.split("&");
    if (pm.length) {
      F.each(pm, function (item) {
        item = item.split("=");
        if (item.length == 2) {
          obj[item[0]] = item[1];
        }
      });
    }
    return obj;
  };
  exports.substitute = function (str, obj) {
    return str.replace(/\{([^{}]+)\}/g, function (match, key) {
      var value = obj[key];
      return value !== undefined ? "" + value : "";
    });
  };
  exports.throttle = function (fn, delay) {
    var timer = null;
    return function () {
      var context = this,
        args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    };
  };
  exports.addStyle = function (csstext) {
    $("<style>" + csstext + "</style>").appendTo("head");
  };
  exports.cssval = function (item, key) {
    var css = (item.css(key) || "").replace(/[^0-9\-]/g, "") || "0";
    return parseInt(css, 10) || 0;
  };
});
F.module("superman:superuijs/util/emitter", function (require, exports) {
  var EMITER_ID = "Emitter:" + F.unique(),
    Emitter = function () {
      this.initialize();
    };
  Emitter.prototype = {
    initialize: function () {
      this.__emitter = {};
    },
    addListener: function (event, handler, data, once) {
      this.__emitter[(event = event.toLowerCase())] ||
        (this.__emitter[event] = []);
      if (typeof handler == "function") {
        this.__emitter[event].push({
          handler: handler,
          guid: handler[EMITER_ID] || (handler[EMITER_ID] = F.unique()),
          data: data || {},
          once: once,
        });
      }
      return this;
    },
    on: function (event, handler, data, once) {
      return this.addListener(event, handler, data, once);
    },
    once: function (event, handler, data) {
      return this.addListener(event, handler, data, true);
    },
    removeListener: function (event, handler) {
      if (typeof event != "undefined") {
        event = event.toLowerCase();
        if (typeof handler !== "function") {
          delete this.__emitter[event];
        } else {
          var emitter = this.__emitter[event],
            uniq = handler[EMITER_ID];
          for (var i = 0, l = emitter.length; i < l; i++) {
            if (uniq === emitter[i][EMITER_ID]) {
              emitter.splice(i, 1);
            }
          }
        }
      } else {
        for (var p in this.__emitter) {
          if (this.__emitter.hasOwnProperty(p)) {
            this.removeListener(this.__emitter[p]);
          }
        }
      }
      return this;
    },
    off: function (event, handler) {
      return this.removeListener(event, handler);
    },
    emit: function (event, data) {
      var emitter,
        emit,
        index = -1,
        rtv;
      if ((emitter = this.__emitter[(event = event.toLowerCase())])) {
        while ((emit = emitter[++index])) {
          if (data || emit.data) {
            data = F.mix(data || {}, emit.data);
          }
          emit.once && emitter.splice(index, 1);
          if (false === (rtv = emit.handler(data))) {
            break;
          }
        }
      }
      if (event !== "__onemit__") {
        this.emit("__onEmit__", { event: event });
      }
      return rtv;
    },
    fire: function (event, data) {
      return this.emit(event, data);
    },
  };
  return Emitter;
});
F.module("superman:superuijs/util/dot", function (require, exports) {
  var doT = {
      version: "1.0.1",
      templateSettings: {
        evaluate: /\{\{([\s\S]+?(\}?)+)\}\}/g,
        interpolate: /\{\{=([\s\S]+?)\}\}/g,
        encode: /\{\{!([\s\S]+?)\}\}/g,
        use: /\{\{#([\s\S]+?)\}\}/g,
        useParams:
          /(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,
        define: /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,
        defineParams: /^\s*([\w$]+):([\s\S]+)/,
        conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
        iterate:
          /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
        varname: "it",
        strip: true,
        append: true,
        selfcontained: false,
      },
      template: undefined,
      compile: undefined,
    },
    global;
  function encodeHTMLSource() {
    var encodeHTMLRules = {
        "&": "&#38;",
        "<": "&#60;",
        ">": "&#62;",
        '"': "&#34;",
        "'": "&#39;",
        "/": "&#47;",
      },
      matchHTML = /&(?!#?\w+;)|<|>|"|'|\//g;
    return function () {
      return this
        ? this.replace(matchHTML, function (m) {
            return encodeHTMLRules[m] || m;
          })
        : this;
    };
  }
  String.prototype.encodeHTML = encodeHTMLSource();
  var startend = {
      append: {
        start: "'+(",
        end: ")+'",
        endencode: "||'').toString().encodeHTML()+'",
      },
      split: {
        start: "';out+=(",
        end: ");out+='",
        endencode: "||'').toString().encodeHTML();out+='",
      },
    },
    skip = /$^/;
  function resolveDefs(c, block, def) {
    return (typeof block === "string" ? block : block.toString())
      .replace(c.define || skip, function (m, code, assign, value) {
        if (code.indexOf("def.") === 0) {
          code = code.substring(4);
        }
        if (!(code in def)) {
          if (assign === ":") {
            if (c.defineParams)
              value.replace(c.defineParams, function (m, param, v) {
                def[code] = {
                  arg: param,
                  text: v,
                };
              });
            if (!(code in def)) def[code] = value;
          } else {
            new Function("def", "def['" + code + "']=" + value)(def);
          }
        }
        return "";
      })
      .replace(c.use || skip, function (m, code) {
        if (c.useParams)
          code = code.replace(c.useParams, function (m, s, d, param) {
            if (def[d] && def[d].arg && param) {
              var rw = (d + ":" + param).replace(/'|\\/g, "_");
              def.__exp = def.__exp || {};
              def.__exp[rw] = def[d].text.replace(
                new RegExp("(^|[^\\w$])" + def[d].arg + "([^\\w$])", "g"),
                "$1" + param + "$2"
              );
              return s + "def.__exp['" + rw + "']";
            }
          });
        var v = new Function("def", "return " + code)(def);
        return v ? resolveDefs(c, v, def) : v;
      });
  }
  function unescape(code) {
    return code.replace(/\\('|\\)/g, "$1").replace(/[\r\t\n]/g, " ");
  }
  doT.template = function (tmpl, c, def) {
    c = c || doT.templateSettings;
    var cse = c.append ? startend.append : startend.split,
      needhtmlencode,
      sid = 0,
      indv,
      str = c.use || c.define ? resolveDefs(c, tmpl, def || {}) : tmpl;
    str = (
      "var out='" +
      (c.strip
        ? str
            .replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g, " ")
            .replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g, "")
        : str
      )
        .replace(/'|\\/g, "\\$&")
        .replace(c.interpolate || skip, function (m, code) {
          return cse.start + unescape(code) + cse.end;
        })
        .replace(c.encode || skip, function (m, code) {
          needhtmlencode = true;
          return cse.start + unescape(code) + cse.endencode;
        })
        .replace(c.conditional || skip, function (m, elsecase, code) {
          return elsecase
            ? code
              ? "';}else if(" + unescape(code) + "){out+='"
              : "';}else{out+='"
            : code
            ? "';if(" + unescape(code) + "){out+='"
            : "';}out+='";
        })
        .replace(c.iterate || skip, function (m, iterate, vname, iname) {
          if (!iterate) return "';} } out+='";
          sid += 1;
          indv = iname || "i" + sid;
          iterate = unescape(iterate);
          return (
            "';var arr" +
            sid +
            "=" +
            iterate +
            ";if(arr" +
            sid +
            "){var " +
            vname +
            "," +
            indv +
            "=-1,l" +
            sid +
            "=arr" +
            sid +
            ".length-1;while(" +
            indv +
            "<l" +
            sid +
            "){" +
            vname +
            "=arr" +
            sid +
            "[" +
            indv +
            "+=1];out+='"
          );
        })
        .replace(c.evaluate || skip, function (m, code) {
          return "';" + unescape(code) + "out+='";
        }) +
      "';return out;"
    )
      .replace(/\n/g, "\\n")
      .replace(/\t/g, "\\t")
      .replace(/\r/g, "\\r")
      .replace(/(\s|;|\}|^|\{)out\+='';/g, "$1")
      .replace(/\+''/g, "")
      .replace(/(\s|;|\}|^|\{)out\+=''\+/g, "$1out+=");
    if (needhtmlencode && c.selfcontained) {
      str =
        "String.prototype.encodeHTML=(" +
        encodeHTMLSource.toString() +
        "());" +
        str;
    }
    try {
      return new Function(c.varname, str);
    } catch (e) {
      if (typeof console !== "undefined")
        console.log("Could not create a template function: " + str);
      throw e;
    }
  };
  doT.compile = function (tmpl, def) {
    return doT.template(tmpl, null, def);
  };
  exports.template = doT.template;
  exports.compile = doT.compile;
});
F.module("superman:superuijs/util/smDot", function (require, exports) {
  var doT = {
      version: "1.0.1",
      templateSettings: {
        evaluate: /\{\{([\s\S]+?(\}?)+)\}\}/g,
        encode: /\{\{!([\s\S]+?)\}\}/g,
        use: /\{\{#([\s\S]+?)\}\}/g,
        useParams:
          /(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,
        define: /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,
        defineParams: /^\s*([\w$]+):([\s\S]+)/,
        smConditional: /\<\&(\/|(else))?\s*(if|else)([\s\S]*?)\&\>/g,
        smInterpolate: /\<\&\$([\s\S]+?)(\|sp_[^\&]+)?\&\>/g,
        smIterate:
          /\<\&(\/)?foreach\s*(?:\$([\s\S]+?)\s+as\s+(?:\$([^\=\>]+))?(?:\=\>)?\$([\s\S]*?)?)?\&\>/g,
        smLoop:
          /\<\&(\/)?for\s*(?:\$([\s\S]+)\=\s*([\s\S]+?)\s*to\s*([\s\S]+?)\s*)?\&\>/g,
        smComments: /\<\&\*[\s\S]*?\*\&\>/g,
        varname: "it",
        strip: true,
        append: true,
        selfcontained: false,
      },
      template: undefined,
      compile: undefined,
    },
    global;
  function encodeHTMLSource() {
    var encodeHTMLRules = {
        "&": "&#38;",
        "<": "&#60;",
        ">": "&#62;",
        '"': "&#34;",
        "'": "&#39;",
        "/": "&#47;",
      },
      matchHTML = /&(?!#?\w+;)|<|>|"|'|\//g;
    return function () {
      return this
        ? this.replace(matchHTML, function (m) {
            return encodeHTMLRules[m] || m;
          })
        : this;
    };
  }
  String.prototype.encodeHTML = encodeHTMLSource();
  var startend = {
      append: {
        start: "'+(",
        end: ")+'",
        endencode: "||'').toString().encodeHTML()+'",
      },
      split: {
        start: "';out+=(",
        end: ");out+='",
        endencode: "||'').toString().encodeHTML();out+='",
      },
    },
    skip = /$^/;
  function resolveDefs(c, block, def) {
    return (typeof block === "string" ? block : block.toString())
      .replace(c.define || skip, function (m, code, assign, value) {
        if (code.indexOf("def.") === 0) {
          code = code.substring(4);
        }
        if (!(code in def)) {
          if (assign === ":") {
            if (c.defineParams)
              value.replace(c.defineParams, function (m, param, v) {
                def[code] = { arg: param, text: v };
              });
            if (!(code in def)) def[code] = value;
          } else {
            new Function("def", "def['" + code + "']=" + value)(def);
          }
        }
        return "";
      })
      .replace(c.use || skip, function (m, code) {
        if (c.useParams)
          code = code.replace(c.useParams, function (m, s, d, param) {
            if (def[d] && def[d].arg && param) {
              var rw = (d + ":" + param).replace(/'|\\/g, "_");
              def.__exp = def.__exp || {};
              def.__exp[rw] = def[d].text.replace(
                new RegExp("(^|[^\\w$])" + def[d].arg + "([^\\w$])", "g"),
                "$1" + param + "$2"
              );
              return s + "def.__exp['" + rw + "']";
            }
          });
        var v = new Function("def", "return " + code)(def);
        return v ? resolveDefs(c, v, def) : v;
      });
  }
  function unescape(code) {
    return code.replace(/\\('|\\)/g, "$1").replace(/[\r\t\n]/g, " ");
  }
  function merge(obj1, obj2) {
    for (var i in obj2) {
      obj1[i] = obj2[i];
    }
    return obj1;
  }
  doT.template = function (tmpl, c, def) {
    c = merge(doT.templateSettings, c);
    var cse = c.append ? startend.append : startend.split,
      needhtmlencode,
      sid = 0,
      indv,
      str = c.use || c.define ? resolveDefs(c, tmpl, def || {}) : tmpl;
    str = (
      "var out='" +
      (c.strip
        ? str
            .replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g, " ")
            .replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g, "")
        : str
      )
        .replace(/'|\\/g, "\\$&")
        .replace(c.encode || skip, function (m, code) {
          needhtmlencode = true;
          return cse.start + unescape(code) + cse.endencode;
        })
        .replace(c.smComments || skip, function () {
          return "";
        })
        .replace(c.smInterpolate || skip, function (m, code, escaper) {
          return cse.start + unescape(code) + cse.endencode;
        })
        .replace(
          c.smConditional || skip,
          function (m, elseifcase, ifcase, elsecase, code) {
            code = code.replace(/\$/g, "");
            return elseifcase
              ? ifcase
                ? code
                  ? "';}else if(" + unescape(code) + "){out+='"
                  : "';}out+='"
                : code
                ? "';}else{out+='"
                : "';}out+='"
              : code
              ? "';if(" + unescape(code) + "){out+='"
              : "';}else{out+='";
          }
        )
        .replace(c.smIterate || skip, function (m, endtag, from, key, value) {
          if (endtag) return "';} } out+='";
          sid += 1;
          indv = value || "i" + sid;
          from = unescape(from);
          return (
            "';var arr" +
            sid +
            "=" +
            from +
            ";if(arr" +
            sid +
            "){var " +
            indv +
            "," +
            (key || "key") +
            "=-1;" +
            "for(" +
            (key || "key") +
            " in arr" +
            sid +
            "){" +
            value +
            "=arr" +
            sid +
            "[" +
            (key || "key") +
            "];out+='"
          );
        })
        .replace(c.smLoop || skip, function (m, endtag, key, from, to) {
          var str = endtag
            ? "';} out+='"
            : "';for(var " +
              key +
              "=" +
              from.replace("$", "") +
              ";" +
              key +
              "<=" +
              to.replace("$", "") +
              ";" +
              key +
              "++){out+='";
          return str;
        })
        .replace(c.evaluate || skip, function (m, code) {
          return "';" + unescape(code) + "out+='";
        }) +
      "';return out;"
    )
      .replace(/\n/g, "\\n")
      .replace(/\t/g, "\\t")
      .replace(/\r/g, "\\r")
      .replace(/(\s|;|\}|^|\{)out\+='';/g, "$1")
      .replace(/\+''/g, "")
      .replace(/(\s|;|\}|^|\{)out\+=''\+/g, "$1out+=");
    if (needhtmlencode && c.selfcontained) {
      str =
        "String.prototype.encodeHTML=(" +
        encodeHTMLSource.toString() +
        "());" +
        str;
    }
    try {
      return new Function(c.varname, str);
    } catch (e) {
      if (typeof console !== "undefined")
        console.log("Could not create a template function: " + str);
      throw e;
    }
  };
  doT.compile = function (tmpl, def) {
    return doT.template(tmpl, null, def);
  };
  exports.template = doT.template;
  exports.compile = doT.compile;
});
F.addLog("superman:superuijs/component", ["componentLog"]);
F.module("superman:superuijs/component", function (require, exports, ctx) {
  var Emitter = require("superman:superuijs/util/emitter"),
    Tool = require("superman:superuijs/util/tool"),
    Component = function () {};
  var pathname = location.pathname,
    match,
    LPREX = "index";
  if (pathname && pathname.length > 2) {
    if ((match = pathname.match(/\/home\/xman\/show\/(.+)/i))) {
      LPREX = match[1];
    }
  }
  Component.prototype = {
    constructor: Component,
    initialize: function () {
      this.disabled = false;
      this.__options = {};
      var head = $("#head").length ? $("#head") : $(document.body),
        wrap = $(".sui-wraper");
      this.componentWrap = wrap.length
        ? wrap
        : $('<div class="s-isindex-wrap sui-wraper"></div>').appendTo(head);
    },
    disable: function () {
      if (!this.disable) {
        this.disabled = true;
        this.fire("disable");
      }
    },
    enable: function () {
      if (this.disabled) {
        this.disabled = false;
        this.fire("enable");
      }
    },
    refresh: function () {
      this.fire("refresh");
    },
    options: function (options, value) {
      if (typeof options == "undefined") {
        return this.__options;
      } else {
        if (typeof options == "string") {
          return typeof value !== "undefined"
            ? (this.__options[options] = value)
            : this.__options[options];
        }
        if (F.isPlainObject(options)) {
          if (!options.identity) {
            throw new Error(
              "组件" +
                (options.component || "") +
                "初始化缺少identity参数，该参数用于自动日志处理，必须填写该参数！"
            );
          }
          if (options.identity == "test" && !window.SUPERUI_DEMO) {
            throw new Error(
              "组件" +
                (options.component || "") +
                "初始化identity参数非法（test只共测试demo使用，demo环境请忽略该异常）！"
            );
          }
          options.showlogactid = "40103" + options.logactid + "0";
          options.clicklogactid = "40103" + options.logactid + "1";
          return (this.__options = options);
        }
      }
    },
    acting: function (wrap) {
      var self = this;
      wrap.on("click", function (e) {
        var target = $(e.target),
          acting = target.attr("data-acting"),
          param = target.attr("data-param"),
          data = { target: target };
        if (acting) {
          self.log(acting, param);
          if (
            self.emit("acting-" + acting, F.mix(data, Tool.unparam(param))) !==
            false
          ) {
            F.isFunction(self.hide) && self.hide();
            return false;
          }
        }
      });
      self.on("__onEmit__", function (data) {
        if (data.event == "onshow") {
          self.log("show");
        }
      });
    },
    log: function (method, param) {
      var options = this.options(),
        log = [LPREX, options.identity, options.component, method]
          .join("")
          .replace(/-/gi, ""),
        isshow = method == "show",
        params = {
          logactid: isshow ? options.showlogactid : options.clicklogactid,
          suicomponent: options.component,
        };
      if (isshow) {
        params.showType = log;
      } else {
        params.clickType = log;
      }
      if (param) {
        if (F.isPlainObject(param)) {
          params = F.mix(params, param);
        } else if (typeof param == "string") {
          params.param = param.replace(/[^0-9a-z\u4e00-\u9fa5]/gi, "");
        }
      }
      ctx.fire("componentLog", params);
    },
    destroy: function () {
      this.fire("destroy");
    },
  };
  return F.inherit(Component, Emitter);
});
F.module("superman:superuijs/component/draggable", function (require, exports) {
  var Component = require("superman:superuijs/component"),
    Tool = require("superman:superuijs/util/tool"),
    $document = $(document),
    $window = $(window),
    body = document.body,
    $body = $(body);
  require("superui/superui.css");
  function Draggable(options) {
    this.initialize(options);
  }
  Draggable.prototype = {
    constructor: Draggable,
    initialize: function (option) {
      var self = this,
        options = self.options(
          F.mix(
            {
              component: "draggable",
              logactid: "2000",
              element: null,
              handle: null,
              cancel: null,
              proxy: null,
              autoRemoveproxy: true,
              autoHidden: true,
              containment: $body,
              axis: 0,
              silence: true,
              delay: 0,
              distance: 0,
              scroll: 10,
              mask: true,
              cursor: "move",
              preventDefault: true,
            },
            option
          )
        );
      this.element = $(options.element);
      this.handle =
        options.handle && options.handle.length
          ? $(options.handle)
          : this.element;
      this.containment = options.containment && $(options.containment);
      this.cache = {};
      if (options.mask) {
        if (!(this.mask = $(".sui-draggable-mask")).length) {
          this.mask = $(
            '<div class="sui-draggable-mask sui-prevent-wheel" onselectstart="return false"></div>'
          )
            .css({ height: $body.height(), cursor: options.cursor })
            .hide()
            .appendTo(this.componentWrap);
        }
      }
      this.bind();
    },
    bind: function () {
      var self = this,
        cache = this.cache;
      this.handle.on(
        "mousedown",
        (this.__handlestart = $.proxy(this.startDrag, this))
      );
      this.on("destroy", function () {
        if (self.__handlestart) {
          self.handle.off("mousedown", self.__handlestart);
          self.__handlestart = null;
        }
      });
      this.on("refresh", function () {
        self.refreshContainment();
        cache.offsetParent = self.offsetParent.offset();
      });
    },
    refreshContainment: function () {
      var cache = this.cache;
      if (this.containment) {
        cache.containmentLimit = F.mix(
          {
            width: this.containment.outerWidth(),
            height: this.containment.outerHeight(),
            left: 0,
            top: 0,
            borderLeft: Tool.cssval(this.containment, "borderLeftWidth"),
            borderTop: Tool.cssval(this.containment, "borderTopWidth"),
          },
          this.containment.offset()
        );
        cache.proxyWidth = this.proxy.width();
        cache.proxyHeight = this.proxy.height();
      }
    },
    computingContainment: function () {
      var cache = this.cache,
        spacing = cache.spacing,
        limit = cache.containmentLimit,
        left = limit.left,
        top = limit.top;
      if (limit) {
        cache.pageX = Math.min(
          left + limit.width - cache.proxyWidth,
          Math.max(left, cache.pageX)
        );
        cache.pageY = Math.min(
          top + limit.height - cache.proxyHeight,
          Math.max(top, cache.pageY)
        );
      }
    },
    delay: function (timeStamp, pageX, pageY) {
      var options = this.options(),
        cache = this.cache,
        dragging = true;
      if (options.delay) {
        if (timeStamp - this.starttime < options.delay) {
          dragging = false;
        }
      }
      if (options.distance) {
        if (
          Math.sqrt(
            Math.abs(Math.pow(cache.startX - pageX, 2)) +
              Math.abs(Math.pow(cache.startY - pageY, 2))
          ) < options.distance
        ) {
          dragging = false;
        }
      }
      return dragging;
    },
    createProxy: function () {
      var options = this.options(),
        cache = this.cache;
      this.proxy = options.proxy
        ? F.isFunction(options.proxy)
          ? $(options.proxy(this.element))
          : this.element.clone(false)
        : this.element;
      if (this.proxy.css("position") != "absolute") {
        this.proxy.css(
          F.mix({ position: "absolute" }, this.element.position())
        );
      }
    },
    spacingCalculated: function () {
      var parent = this.offsetParent,
        cache = this.cache,
        proxy = this.proxy,
        marginLeft = Tool.cssval(proxy, "marginLeft"),
        marginTop = Tool.cssval(proxy, "marginTop");
      cache.spacing = {
        offsetLeft: Tool.cssval(parent, "borderLeftWidth"),
        offsetTop: Tool.cssval(parent, "borderTopWidth"),
        marginX: marginLeft,
        marginY: marginTop,
      };
    },
    scroll: function (options, cache) {
      if (options.scroll) {
        var scrollTop = $window.scrollTop(),
          scrollTopHeight = cache.windowHeight + scrollTop - options.scroll,
          proxyHeight = cache.pageY + cache.proxyHeight;
        if (proxyHeight > scrollTopHeight) {
          $window.scrollTop(scrollTop + proxyHeight - scrollTopHeight);
        } else {
          if (cache.pageY < scrollTop + options.scroll) {
            $window.scrollTop(
              scrollTop - (scrollTop + options.scroll - Math.abs(cache.pageY))
            );
          }
        }
      }
    },
    startDrag: function (event) {
      var options = this.options(),
        self = this,
        cache = self.cache,
        target = $(event.target);
      if (event.which == 1) {
        if (options.cancel) {
          if (target.filter(options.cancel).length) {
            return true;
          }
        }
        if (!this.disabled && !options.element.attr("CANCELDRAG")) {
          this.cache.startX = event.pageX;
          this.cache.startY = event.pageY;
          this.cache.targetHandle = target;
          this.dragging = false;
          this.starttime = event.timeStamp;
          this.fire("onBeforeDrag", {
            event: event,
            pageX: event.pageX,
            pageY: event.pageY,
          });
          if (!this.__handledrag) {
            this.__handledrag = function (event) {
              window.captureEvents
                ? window.captureEvents(Event.mousemove)
                : body.setCapture && body.setCapture();
              self.drag(event);
            };
            this.__handlestop = function (event) {
              window.releaseEvents
                ? window.releaseEvents(Event.mousemove)
                : body.releaseCapture && body.releaseCapture();
              self.afterDrag(event);
            };
          }
          $document
            .on("mousemove", this.__handledrag)
            .on("mouseup", this.__handlestop);
        }
      }
      if (options.preventDefault) {
        event.preventDefault();
      }
    },
    drag: function (event) {
      var pageX = event.pageX,
        pageY = event.pageY,
        timeStamp = event.timeStamp,
        options = this.options(),
        cache = this.cache,
        dragging = true;
      if (!this.dragging) {
        if ((dragging = this.delay(timeStamp, pageX, pageY))) {
          if (options.silence) {
            this.createProxy();
            if (options.proxy) {
              this.proxy.appendTo(this.element.parent());
            }
            this.cache.offsetProxy = this.proxy.offset();
            this.offsetParent = this.proxy.offsetParent();
            this.cache.offsetParent = this.offsetParent.offset();
            if (options.scroll) {
              this.cache.windowHeight = $window.height();
              this.cache.proxyHeight = this.proxy.height();
            }
            this.spacingCalculated();
            this.refreshContainment();
          }
          this.mask && this.mask.show();
          this.proxy.addClass("sui-draggable");
          this.proxyWraper = this.proxy
            .offsetParent()
            .addClass("sui-draggable-wraper");
          if (options.proxy && options.autoHidden) {
            this.element.addClass("sui-draggable-proxy");
          }
          this.fire("onStartDrag", {
            event: event,
            pageX: event.pageX,
            pageY: event.pageY,
          });
        }
        return (this.dragging = dragging);
      }
      var spacing = cache.spacing;
      cache.pageX =
        cache.offsetProxy.left +
        (options.axis !== "y"
          ? (cache.offsetX = pageX - cache.startX)
          : (cache.offsetX = 0));
      cache.pageY =
        cache.offsetProxy.top +
        (options.axis !== "x"
          ? (cache.offsetY = pageY - cache.startY)
          : (cache.offsetY = 0));
      if (options.silence) {
        this.computingContainment();
        this.scroll(options, cache);
        cache.left =
          cache.pageX -
          cache.offsetParent.left -
          spacing.marginX -
          spacing.offsetLeft;
        cache.top =
          cache.pageY -
          cache.offsetParent.top -
          spacing.marginY -
          spacing.offsetTop;
        this.proxy.css({
          left: options.axis !== "y" ? cache.left : undefined,
          top: options.axis !== "x" ? cache.top : undefined,
        });
      }
      this.fire("onDragging", {
        left: cache.left,
        top: cache.top,
        pageX: event.pageX,
        pageY: event.pageY,
        event: event,
        offsetX: cache.offsetX,
        offsetY: cache.offsetY,
      });
    },
    afterDrag: function (event) {
      var self = this,
        options = self.options(),
        cache = self.cache;
      if (this.mask) {
        this.mask.hide();
      }
      if (this.dragging) {
        if (this.proxy) {
          this.proxy.removeClass("sui-draggable");
          this.proxyWraper.removeClass("sui-draggable-wraper");
          if (options.proxy) {
            if (options.autoHidden) {
              this.element.removeClass("sui-draggable-proxy");
            }
            if (this.element.css("position") !== "absolute") {
              this.element.css("position", "absolute");
            }
            this.element.css({ left: cache.left, top: cache.top });
            if (options.autoRemoveproxy) {
              this.proxy.remove();
            }
          }
        }
        this.dragging = false;
        this.fire("onAfterDrag", {
          left: cache.left,
          top: cache.top,
          pageX: event.pageX,
          pageY: event.pageY,
          event: event,
          offsetX: cache.offsetX,
          offsetY: cache.offsetY,
        });
      }
      $document
        .off("mousemove", this.__handledrag)
        .off("mouseup", this.__handlestop);
    },
  };
  return F.inherit(Draggable, Component);
});
F.module("superman:superuijs/component/scrollbar", function (require, exports) {
  var Component = require("superman:superuijs/component"),
    Tool = require("superman:superuijs/util/tool"),
    Draggable = require("superman:superuijs/component/draggable");
  function Scrollbar(options) {
    this.initialize(options);
  }
  Scrollbar.prototype = {
    initialize: function (option) {
      var self = this,
        options = self.options(
          F.mix(
            {
              component: "scrollbar",
              logactid: "3000",
              container: null,
              content: null,
              bar: null,
              slider: null,
              y: 0,
              speed: 100,
              easing: "swing",
              hasWheel: true,
              hasBar: true,
              hasHighlight: true,
              offsetHeight: null,
              containerClassName: "sui-scrollbar-container",
              contentClassName: "sui-scrollbar-content",
              barClassName: "sui-scrollbar-bar",
              sliderClassName: "sui-scrollbar-slider",
              highlightClassName: "sui-scrollbar-highlight",
              existscrollbarClassName: "sui-scrollbar-existbar",
            },
            option
          )
        );
      if (options.container) {
        this.cache = {};
        this.container = $(options.container).addClass(
          options.containerClassName
        );
        this.content = options.content
          ? $(options.content)
          : this.container.find("." + options.contentClassName);
        if (options.hasBar) {
          this.bar = options.bar
            ? $(options.bar)
            : this.container.find("." + options.barClassName);
          if (!this.bar.length) {
            this.bar = $(
              '<div class="' +
                options.barClassName +
                '"><em class="' +
                options.sliderClassName +
                '"></em></div>'
            ).appendTo(this.container);
          }
          this.bar.css(
            "height",
            this.container.innerHeight() -
              parseInt(this.bar.css("borderTopWidth"), 10) -
              parseInt(this.bar.css("borderBottomWidth"), 10)
          );
          this.slider = options.slider
            ? $(options.slider)
            : this.container.find("." + options.sliderClassName);
        }
        this.bind();
        this.refreshBar(options.y, false);
      }
    },
    bind: function () {
      var self = this,
        cache = self.cache,
        sendLog,
        options = self.options();
      if (self.bar) {
        self.bar
          .on("mouseenter mouseleave", function (e) {
            if (!self.disabled) {
              if (!cache.scrolling && options.hasHighlight) {
                self.container[
                  e.type == "mouseenter" ? "addClass" : "removeClass"
                ](options.highlightClassName);
              }
              cache.hasinbar = e.type == "mouseenter";
            }
          })
          .on("click", function (e) {
            if (
              !self.disabled &&
              !$(e.target).hasClass(options.sliderClassName)
            ) {
              cache.y =
                Math.max(
                  0,
                  Math.min(
                    cache.containerHeight - cache.sliderHeight,
                    e.pageY - cache.barOffset.top
                  )
                ) / cache.scale;
              self.log("scroll");
              self.refreshContent(true);
            }
          });
      }
      if (self.slider) {
        self.draggable = new Draggable({
          element: self.slider,
          identity: options.identity,
          containment: self.bar,
          axis: "y",
          cursor: "pointer",
        });
        self.draggable
          .on("onDragging", function (data) {
            cache.y = data.top / cache.scale;
            self.refreshContent(false);
            self.fire("onScrolling", cache);
          })
          .on("onBeforeDrag", function () {
            cache.scrolling = true;
            self.fire("onBeforeScroll", cache);
          })
          .on("onAfterDrag", function () {
            cache.scrolling = false;
            self.fire("onAfterScroll", cache);
            self.log("scroll");
            setTimeout(function () {
              if (cache.highlighted || !cache.hasinbar) {
                self.container.removeClass(options.highlightClassName);
              }
            }, 100);
          });
      }
      if (options.hasWheel) {
        sendLog = Tool.throttle(function () {
          self.log("scroll");
        }, 100);
        self.container.on("mousewheel", function (e) {
          if (!self.disabled) {
            self.scrollTo(cache.y - e.deltaY * 40, false);
            self.fire("onScrolling", cache);
            sendLog("scroll");
            return false;
          }
        });
      }
      self.on("refresh", function () {
        self.refreshBar();
      });
      self.container.on("mouseenter", function () {
        self.refreshBar();
      });
    },
    refreshContent: function (effect) {
      var self = this,
        cache = self.cache,
        options = self.options();
      self.refreshLocationSize();
      if (effect !== false) {
        self.fire("onBeforeScroll", cache);
        if (options.hasHighlight) {
          if (cache.highlighted) {
            self.container.addClass(options.highlightClassName);
          }
        }
        self.content.stop().animate(
          { top: -cache.y },
          {
            easing: options.easing,
            speed: options.speed,
            complete: function () {
              self.fire("onAfterScroll", cache);
              if (cache.highlighted && options.hasHighlight) {
                self.container.removeClass(options.highlightClassName);
              }
            },
            step: function (x) {
              cache.sliderY =
                -(x / (cache.contentHeight - cache.containerHeight)) *
                  (cache.containerHeight - cache.sliderHeight) -
                cache.sliderBorderTop;
              self.slider.css("top", cache.sliderY);
              self.fire("onScrolling", cache);
            },
          }
        );
      } else {
        this.content.css("top", -cache.y);
        if (this.bar) {
          this.slider.css("top", cache.sliderY);
        }
      }
    },
    refreshLocationSize: function () {
      var self = this,
        cache = self.cache;
      cache.y = Math.max(0, cache.y);
      if (Math.abs(cache.y) + cache.containerHeight >= cache.contentHeight) {
        cache.y = Math.max(0, cache.contentHeight - cache.containerHeight);
      }
      if (self.bar) {
        cache.sliderY =
          (cache.y / (cache.contentHeight - cache.containerHeight)) *
            (cache.containerHeight - cache.sliderHeight) -
          cache.sliderBorderTop;
      }
    },
    refreshBar: function (y) {
      var self = this,
        cache = self.cache,
        object,
        options = self.options();
      cache.y = Math.abs(y || cache.y || options.y);
      cache.contentHeight = this.content.outerHeight();
      cache.containerHeight = this.container.outerHeight();
      if (options.offsetHeight) {
        if (F.isFunction(options.offsetHeight)) {
          if (F.isPlainObject((object = options.offsetHeight()))) {
            if (!object.containerHeight) {
              object.containerHeight = this.container.outerHeight();
            }
            cache = F.mix(cache, {
              containerHeight: object.containerHeight || cache.containerHeight,
              contentHeight: object.contentHeight || cache.contentHeight,
            });
          }
        } else {
          cache.contentHeight = cache.contentHeight + options.offsetHeight;
        }
      }
      if (self.bar) {
        self.slider.css(
          "height",
          (cache.containerHeight / cache.contentHeight) * cache.containerHeight
        );
        cache.sliderHeight = self.slider.outerHeight();
        cache.barOffset = self.bar.offset();
        cache.scale =
          (cache.containerHeight - cache.sliderHeight) /
          (cache.contentHeight - cache.containerHeight);
        cache.sliderBorderTop = parseInt(
          self.slider.css("border-top-width"),
          10
        );
        if (cache.contentHeight < cache.containerHeight) {
          self.bar.hide();
        } else {
          self.bar.show();
        }
      }
      self.refreshContent(false);
    },
    highlight: function (enforce) {
      var self = this,
        options = self.options(),
        cache = self.cache;
      if (options.hasHighlight) {
        (cache.highlighted = !cache.highlighted)
          ? self.fire("onHighlight", cache)
          : self.fire("onCancelHighlight", cache);
        if (enforce) {
          self.container[cache.highlighted ? "addClass" : "removeClass"](
            options.highlightClassName
          );
        }
      }
    },
    scrollTo: function (y, effect) {
      if (y !== this.cache.y) {
        this.refreshLocationSize((this.cache.y = y));
        this.refreshContent(effect);
      }
    },
    scrollOffset: function (offset, effect) {
      this.scrollTo((this.cache.y += offset), effect);
    },
    scrollToElement: function (element, effect) {
      if ((element = $(element)).length) {
        this.scrollTo(element.position().top, effect);
      }
    },
    scrollTop: function (effect) {
      this.scrollTo(0, effect);
    },
    scrollBottom: function (effect) {
      this.scrollTo(
        this.cache.contentHeight - this.cache.containerHeight,
        effect
      );
    },
  };
  return F.inherit(Scrollbar, Component);
});
F.module(
  "superman:superuijs/component/dialog",
  function (require, exports, ctx) {
    var Component = require("superman:superuijs/component"),
      Dot = require("superman:superuijs/util/dot"),
      Tool = require("superman:superuijs/util/tool"),
      DotDialogCompile = Dot.compile(
        [
          '<div class="sui-prevent-wheel s-isindex-wrap sui-dialog {{? it.theme}}sui-dialog-{{=it.theme}}{{?}} {{?it.dialogClassName}} {{=it.dialogClassName}} {{?}}  {{? it.hasMask }} sui-dialog-hasmask {{?}} {{? it.title }} sui-dialog-hastitle {{?}}">',
          "{{? it.hasClose }}",
          '<a href="##" hidefocus class="sui-dialog-close" data-acting="close">关闭</a>',
          "{{?}}",
          "{{? it.title }}",
          '<div class="sui-dialog-title">{{=it.title}}</div>',
          "{{?}}",
          '<div class="sui-dialog-body">{{=it.content}}</div>',
          "{{? it.footer }}",
          '<div class="sui-dialog-footer">{{=it.footer}}</div>',
          "{{?}}",
          "</div>",
        ].join("")
      ),
      DotButtonsCompile = Dot.compile(
        [
          "{{~it.buttons :value:index}}",
          '<a href="javascript:;" hidefocus class="sui-dialog-button sui-dialog-button',
          "{{? value.style }}",
          '{{=value.style}}"',
          "{{??}}",
          "{{=value.type}}",
          "{{?}}",
          '" data-acting="{{=value.type}}" >{{=value.title}}</a>',
          "{{~}}",
        ].join("")
      ),
      TIPS_TEMPLATE =
        '<div class="sui-dialog-tips sui-dialog-tipsicon{type}"><div class="sui-dialog-tipstext"><em class="sui-dialog-tipsicon"></em>{content}</div></div>',
      MASK_TEMPLATE =
        '<div class="sui-dialog-mask s-isindex-wrap sui-prevent-wheel sui-dialog-mask-{theme}" id="sui-dialog-mask"></div>';
    require("superui/dialog.css");
    function Dialog(options) {
      this.initialize(options);
    }
    Dialog.prototype = {
      constructor: Dialog,
      initialize: function (options) {
        this.options(
          F.mix(
            {
              component: "dialog",
              logactid: "1000",
              title: null,
              content: null,
              buttons: null,
              width: 300,
              height: 0,
              hasMask: true,
              hasClose: true,
              autoDestroy: false,
              autoShow: true,
              position: null,
              theme: "",
              hideEffect: false,
            },
            options
          )
        );
        this.render();
        this.bind();
        if (options.autoShow !== false) {
          this.show();
        }
      },
      renderButton: function (buttons) {
        var btns = F.isArray(buttons) ? buttons : [buttons],
          buttons = [];
        F.each(btns, function (item, index) {
          if (!F.isPlainObject(item)) {
            var title,
              listener = null;
            if (typeof item == "string") {
              title = item;
            } else {
              listener = item;
              title = index ? "取消" : "确认";
            }
            buttons.push({
              type: index ? "cancel" : "ok",
              title: title,
              listener: listener,
            });
          } else {
            buttons.push(item);
          }
        });
        this.options("buttons", buttons);
        return DotButtonsCompile({ buttons: buttons });
      },
      render: function () {
        var options = this.options(),
          offsetparent;
        this.wrap = options.componentWrap || this.componentWrap;
        if (options.buttons) {
          options.footer = this.renderButton(options.buttons);
        }
        this.window = $(DotDialogCompile(options)).appendTo(this.wrap);
        this.title = this.window.find(".sui-dialog-title");
        this.body = this.window.find(".sui-dialog-body");
        this.footer = this.window.find(".sui-dialog-footer");
        if (options.hasMask) {
          if (!(this.mask = this.wrap.find(".sui-dialog-mask")).length) {
            offsetparent = this.window.offsetParent();
            this.mask = $(
              Tool.substitute(MASK_TEMPLATE, { theme: options.theme || "" })
            )
              .appendTo(this.wrap)
              .hide();
            if (!!window.ActiveXObject && !window.XMLHttpRequest) {
              this.mask.css({ height: "100%" });
            }
          }
        }
        this.window.hide();
      },
      getPositionTop: (function () {
        var spform = $("#s_fm"),
          $doc = $(document),
          $win = $(window),
          top = null;
        if (spform.length) {
          top = spform.offset().top + spform.height() + 10;
        }
        return function () {
          var offsetparent = this.window.offsetParent();
          if (offsetparent.find("input[name=wd]").length && top) {
            return top;
          } else {
            var whei = $win.height(),
              ohei = offsetparent.outerHeight(),
              height = this.window.height();
            if (whei < ohei) {
              return $doc.scrollTop() + (whei / 2 - height / 2);
            } else {
              return ohei / 2 - height / 2;
            }
          }
        };
      })(),
      resetPosition: function () {
        var self = this,
          options = self.options(),
          height = 0,
          css = {
            width: options.width || 400,
            height: options.height || "auto",
          };
        if (css.height !== "auto") {
          if (self.title) {
            height += self.title.height();
          }
          if (self.footer) {
            height += self.footer.height();
          }
          self.body.css("height", css.height - height);
        }
        if (F.isFunction(options.position)) {
          css = F.mix(css, options.position());
        } else {
          css.left = "50%";
          css.marginLeft = -css.width / 2;
          css.top = options.top || self.getPositionTop();
        }
        this.window.css(css);
      },
      show: function () {
        if (!this.hasshow) {
          if (this.mask) {
            this.mask.show();
          }
          this.refresh();
          this.window.show();
          this.emit("onShow");
          this.hasshow = true;
        }
      },
      hide: function () {
        if (this.hasshow) {
          if (!this.options("hideEffect")) {
            this.window.hide();
            if (this.mask) {
              this.mask.hide();
            }
          } else {
            this.window.fadeOut(400);
            if (this.mask) {
              this.mask.fadeOut(400);
            }
          }
          this.emit("onHide");
          this.hasshow = false;
          ctx.fire("dialogHide", { obj: this });
        }
      },
      close: function () {
        this.hide();
        this.window.remove();
        this.mask.remove();
        this.emit("onClose");
      },
      bind: function () {
        var self = this,
          options = self.options();
        self
          .on("refresh", function () {
            self.resetPosition();
          })
          .on("destroy", function () {
            self.close();
          });
        self.acting(self.window);
        if (options.buttons) {
          F.each(options.buttons, function (item) {
            if (F.isFunction(item.listener)) {
              self.on("acting-" + item.type, item.listener);
            }
          });
        }
      },
    };
    Dialog.alert = function (options) {
      if (options.icons) {
        options.type = options.icons;
      }
      return new Dialog(
        F.mix(options, {
          title: options.title,
          content:
            Tool.substitute(TIPS_TEMPLATE, {
              content: options.content,
              type: options.type || "success",
            }) + (options.subcontent || ""),
          buttons: options.buttons,
          width: options.width || 300,
        })
      );
    };
    Dialog.confirm = function () {};
    return F.inherit(Dialog, Component);
  }
);
F.module("superman:superuijs/component/tips", function (require, exports) {
  var Component = require("superman:superuijs/component"),
    Dot = require("superman:superuijs/util/dot"),
    DotTipsCompile = Dot.compile(
      [
        '<div class="sui-tips s-isindex-wrap {{?it.theme}}sui-tips-{{=it.theme}}{{?}}">',
        "{{? it.hasArrow}}",
        '<div class="sui-tips-arrow"><em></em></div>',
        "{{?}}",
        "{{? it.hasClose }}",
        '<a href="##" hidefocus class="sui-tips-close" data-acting="close">关闭</a>',
        "{{?}}",
        '<div class="sui-tips-body{{? it.icons}} sui-tips-hasicons{{?}}{{? it.hasClose }} sui-tips-hasarrow{{?}}">',
        "{{? it.icons}}",
        '<div class="sui-tips-icons sui-tips-icon{{=it.icons}}"></div>',
        "{{?}}",
        "{{=it.content}}",
        "</div>",
        "</div>",
      ].join("")
    );
  require("superui/tips.css");
  function Tips(options) {
    this.initialize(options);
  }
  Tips.prototype = {
    initialize: function (options) {
      var option = this.options(
        F.mix(
          {
            component: "tips",
            logactid: "1100",
            componentWrap: null,
            target: null,
            content: "",
            width: "auto",
            hasArrow: true,
            hasClose: false,
            align: "left",
            icons: "",
            arrowUp: true,
            arrowLeft: 15,
            autoShow: true,
            autoHide: true,
            autoDestroy: false,
            autoReset: true,
            autoRefresh: false,
            theme: "",
          },
          options
        )
      );
      this.render(option);
      this.bind();
      option.autoShow && this.show();
    },
    resetPosition: function () {
      var self = this,
        options = self.options(),
        height = self.tips.outerHeight(),
        target = self.target,
        css = {},
        arrowheight = self.arrow.outerHeight(),
        offsetparent = self.tips.offsetParent(),
        offsetp = offsetparent.offset();
      if (options.hasArrow) {
        var offset = target.offset(),
          left = 0,
          targetWidth = target.outerWidth(),
          top = offset.top + target.height() + arrowheight + 2,
          wid = 44;
        if (options.align == "left" || options.align == "right") {
          if (options.align == "left") {
            left = offset.left;
            if (targetWidth < wid) {
              left -= (wid - targetWidth) / 2 + 2;
            }
          } else {
            left = offset.left + targetWidth - self.tips.outerWidth();
            if (targetWidth < wid) {
              left += (wid - targetWidth) / 2 - 2;
            }
          }
        } else {
          left = offset.left + target.width() / 2 - options.arrowLeft - 8;
        }
        if (!options.arrowUp) {
          top = offset.top - arrowheight - height + 2;
        }
        css.left = left - offsetp.left;
        css.top = top - offsetp.top;
      } else {
        var ohei = offsetparent.outerHeight(),
          whei = $(window).height(),
          owid = offsetparent.width();
        css.left = owid / 2 - self.tips.width() / 2;
        if (offsetparent.find("input.wd").length) {
          css.top = 245;
        } else {
          if (whei < ohei) {
            css.top = $(document).scrollTop() + (whei / 2 - height / 2);
          } else {
            css.top = ohei / 2 - height / 2;
          }
        }
      }
      this.tips.css(css);
    },
    render: function (options) {
      this.target = options.target;
      this.wrap = options.componentWrap || this.componentWrap;
      this.tips = $(DotTipsCompile(options)).hide().appendTo(this.wrap);
      this.arrow = this.tips.find(".sui-tips-arrow");
      this.body = this.tips.find(".sui-tips-body");
      this.offsetparent = this.tips
        .offsetParent()
        .addClass("sui-componentWrap");
      this.tips.css("width", options.width);
      if (options.arrowLeft) {
        if (typeof options.arrowLeft == "string") {
          var width = this.tips.outerWidth();
          switch (options.arrowLeft) {
            case "center":
              options.arrowLeft = width / 2 - 7;
              break;
            case "right":
              options.arrowLeft = width - 15 - 14;
              break;
            default:
              options.arrowLeft = 15;
              break;
          }
        }
        this.arrow.css("left", this.options("arrowLeft", options.arrowLeft));
      }
      if (options.arrowUp === false) {
        this.arrow.addClass("sui-tips-arrowup");
      }
      this.emit("onRender");
    },
    bind: function () {
      var self = this,
        options = self.options();
      self
        .on("destroy", function () {
          self.close();
        })
        .on("refresh", function () {
          self.resetPosition();
        });
      self.acting(self.tips);
      if (options.autoHide) {
        self.tips.on("mousedown", function () {
          return false;
        });
        $(document).on("mousedown", function () {
          self.hide();
        });
      }
      if (options.autoRefresh) {
        $(window).on("resize", function () {
          self.refresh();
        });
      }
    },
    close: function () {
      this.hide();
      this.tips.remove();
      this.emit("onClose");
    },
    show: function () {
      var self = this,
        options = self.options();
      if (!self.hasshow) {
        self.tips.show();
        self.resetPosition();
        self.emit("onShow");
        self.hasshow = true;
      }
      if (options.timing) {
        setTimeout(function () {
          self.hide();
        }, options.timing);
      }
    },
    hide: function () {
      var self = this,
        options = self.options();
      if (self.hasshow) {
        self.tips.hide();
        self.emit("onHide");
        self.hasshow = false;
        if (options.autoDestroy) {
          self.tips.remove();
        }
      }
    },
  };
  Tips = F.inherit(Tips, Component);
  F.each("success,error,warning".split(","), function (method) {
    Tips[method] = function (options) {
      return new Tips(
        F.mix(
          { timing: 2e3, hasArrow: false, icons: method, autoDestroy: true },
          options
        )
      );
    };
  });
  return Tips;
});
F.module("superman:superuijs/component/share", function (require, exports) {
  var Tips = require("superman:superuijs/component/tips"),
    Component = require("superman:superuijs/component"),
    Dot = require("superman:superuijs/util/dot"),
    DotShareCompile = Dot.compile(
      [
        '<div class="sui-share">',
        "{{~it.share :value:index}}",
        '<a href="###" data-acting="share" target="_blank" data-param="type={{=value.key}}" class="sui-share-icons-{{=value.key}}">{{=value.name}}</a>',
        "{{~}}",
        "</div>",
      ].join("")
    ),
    SHARE_DATA = [
      { key: "tsina", name: "新浪微博" },
      { key: "tqq", name: "腾讯微博" },
      { key: "qzone", name: "QQ空间" },
      { key: "sqq", name: "QQ好友" },
      { key: "tieba", name: "百度贴吧" },
    ];
  require("superui/share.css");
  function Share(options) {
    this.initialize(options);
  }
  Share.prototype = {
    initialize: function (options) {
      var option = this.options(
        F.mix(
          {
            component: "share",
            logactid: "1101",
            target: null,
            trigger: "click",
            autoHide: true,
            width: 168,
            text: null,
            pic: null,
            url: null,
          },
          options
        )
      );
      this.render(option);
      this.bind();
    },
    render: function (option) {
      this.tips = new Tips(
        F.mix(
          {
            target: option.target,
            autoShow: false,
            arrowLeft: 20,
            width: 190,
            content: DotShareCompile({ share: SHARE_DATA }),
          },
          option
        )
      );
      this.target = option.target;
    },
    bind: function () {
      var self = this,
        timer,
        timer2,
        options = self.options();
      self.tips
        .on("onClose", function () {
          self.emit("onClose");
        })
        .on("onHide", function () {
          self.emit("onHide");
        })
        .on("onShow", function () {
          self.emit("onShow");
        });
      self.target.on(options.trigger, function () {
        self.show();
        timer2 && clearTimeout(timer2);
      });
      if (options.trigger == "mouseenter") {
        if (options.autoHide) {
          self.target.on("mouseleave", function () {
            timer = setTimeout(function () {
              self.hide();
            }, 200);
          });
          self.tips.tips.on("mouseenter mouseleave", function (event) {
            if (event.type == "mouseenter") {
              clearTimeout(timer);
            } else {
              timer2 = setTimeout(function () {
                self.hide();
              }, 200);
            }
          });
        }
      }
      self.bindShare();
    },
    getShareURI: function (data) {
      var options = this.options(),
        params;
      var url =
        options.url +
        (options.url.indexOf("?") > -1 ? "&" : "?") +
        "super_frm=" +
        options.identity +
        "_share_" +
        data.type;
      params = $.param({
        url: decodeURIComponent(url || ""),
        to: data.type,
        pic: options.pic || "",
        title: decodeURIComponent(options.text || ""),
        desc: decodeURIComponent(options.text || ""),
        type: "text",
      });
      return "http://s.share.baidu.com/?" + params;
    },
    bindShare: function () {
      var self = this,
        tips = self.tips;
      tips.on("acting-share", function (data) {
        var target = data.target,
          href = self.getShareURI(data);
        target.attr("href", href);
        return false;
      });
    },
    close: function () {
      this.tips.close();
      this.emit("onClose");
    },
    show: function () {
      if (!this.hasshow) {
        this.tips.show();
        this.emit("onShow");
        this.hasshow = true;
      }
    },
    hide: function () {
      if (this.hasshow) {
        this.tips.hide();
        this.hasshow = false;
        this.emit("onHide");
      }
    },
  };
  return F.inherit(Share, Component);
});
F.module(
  "superman:superuijs/component/share2",
  function (require, exports, ctx) {
    var body = $("body");
    function Share(settings) {
      var s = settings || {};
      this.url = s.url || "";
      this.title = s.title || "";
      this.pics = s.pics || "";
      this.useDefaultUI = s.useDefaultUI || false;
      this.log = s.log;
    }
    Share.prototype = {
      init: function () {
        this.initView();
        this.addEvent();
      },
      initView: function () {
        if (this.useDefaultUI) {
        }
      },
      addEvent: function () {
        var that = this;
        body
          .off("click.share")
          .on(
            "click.share",
            '.share-wrapper .sns-item:not(".disabled")',
            function () {
              var elem = $(this),
                to = elem.attr("data-share"),
                link,
                backUrl,
                obj;
              obj = that.getShareMap(to);
              link = obj.link;
              backUrl = obj.backUrl;
              if (to == "weixin") {
                backUrl = elem.attr("data-url");
                that.createQrCode(backUrl);
              } else {
                window.open(link);
              }
              if (that.log && that.log.evt) {
                that.sendLog(that.log.evt, "lotteryshare" + to, that.log, link);
              }
            }
          );
      },
      getShareMap: function (to) {
        var link = "http://s.share.baidu.com?",
          myLink = this.url || window.location.href,
          frmRegx = /(&|\?)super_frm=(\w*)(&|$)/gi,
          hasOther = false,
          title = this.title,
          pics = this.pics;
        myLink = myLink.replace(frmRegx, function () {
          if (arguments[1] && arguments[1] == "?") {
            hasOther = true;
            return (
              "?super_frm=activitygoddess_pub_ss_share_" + to + arguments[3]
            );
          }
          return "";
        });
        var suffix = myLink.indexOf("?") == -1 ? "?" : "&",
          backUrl =
            myLink +
            (hasOther == false
              ? suffix + "super_frm=activitygoddess_pub_ss_share_" + to
              : "");
        myLink = encodeURIComponent(backUrl);
        title = encodeURIComponent(title);
        var sharePic = pics;
        var paramStr = [
          "url=",
          myLink,
          "&to=",
          to,
          "&title=",
          title,
          "&pic=",
          sharePic,
        ];
        link += paramStr.join("");
        return { link: link, backUrl: backUrl };
      },
      createQrCode: function (link) {
        var win = $(window),
          height = win.height(),
          scrollTop = win.scrollTop(),
          elem,
          mask;
        if (!$(".s-qrcode-outer").length) {
          body.append(
            '<div class="s-qrcode-mask" style="position: fixed; _position: absolute; width: 100%; height: 100%; left: 0; top: 0; z-index: 999998; opacity: 0.5; filter:alpha(opacity=50); background: #000"></div>'
          );
          body.append(
            '<div class="s-qrcode-outer" style="display: none"><span class="close"></span><div id="qrcode"></div></div>'
          );
        }
        elem = $(".s-qrcode-outer");
        mask = $(".s-qrcode-mask");
        elem.show();
        mask.show();
        if ($.isIE == 6 || $.isIE == 7) {
          elem.css({ top: height / 2 + scrollTop + "px" });
        }
        if ($("#qrcode").html() != "") {
          return;
        }
        $.getScript(
          s_domain.staticUrl + "static/activity/js/lib/qrcode.js?v=md5",
          function () {
            new QRCode($("#qrcode")[0], link);
          }
        );
        $(".s-qrcode-outer").on("click", ".close", function (e) {
          $(".s-qrcode-outer,.s-qrcode-mask").hide();
          e.stopPropagation();
        });
      },
      sendLog: function (evt, type, pLogs, url) {
        var baseLog = { clickType: type, url: url };
        if (evt) {
          ctx.fire(evt, $.extend(baseLog, pLogs));
        }
      },
    };
    return Share;
  }
);
F.module(
  "superman:superuijs/component/notify",
  function (require, exports, ctx) {
    var Component = require("superman:superuijs/component");
    function Notify(option) {
      this.initialize(option);
    }
    Notify.prototype = {
      initialize: function (option) {
        this.setttings = this.options(
          F.mix(
            {
              component: "notify",
              logactid: "9000",
              dir: "auto",
              lang: "",
              tag: "",
              title: "",
              body: "",
              icon: "",
              delay: 5e3,
            },
            option
          )
        );
      },
      permission: function () {
        var ret = false,
          permissionMap = { 0: "granted", 1: "default", 2: "denied" };
        if ("webkitNotifications" in window) {
          var p = window.webkitNotifications.checkPermission();
          ret = permissionMap[p];
        }
        if ("Notification" in window && !window.webkitNotifications) {
          ret = Notification.permission;
        }
        return ret;
      },
      show: function () {
        var s = this.setttings || {},
          element;
        if (
          "webkitNotifications" in window &&
          window.webkitNotifications.createNotification
        ) {
          if (webkitNotifications.checkPermission() == 0) {
            element = this.element =
              window.webkitNotifications.createNotification(
                s.icon,
                s.title,
                s.body
              );
            element.tag = s.tag;
            element.show();
          } else {
            webkitNotifications.requestPermission();
            return;
          }
        }
        if ("Notification" in window && !window.webkitNotifications) {
          var Notify = window.Notification;
          if (Notify.permission === "default") {
            Notify.requestPermission();
            return;
          } else if (Notify.permission === "granted") {
            element = this.element = new Notification(s.title, {
              dir: s.dir,
              lang: s.lang,
              body: s.body,
              tag: s.tag,
              icon: s.icon,
            });
          }
        }
        element.onclick = function () {
          if (!!s.click) {
            s.click();
          }
          if (this.log) {
            this.log("click");
          }
        };
        element.onshow = function () {
          if (!!s.show) {
            s.show();
          }
          if (this.log) {
            this.log("show");
          }
        };
        element.onclose = function () {
          if (!!s.close) {
            s.close();
          }
          if (this.log) {
            this.log("close");
          }
          this.element = null;
        };
        setTimeout(function () {
          if (element.close) {
            element.close();
          }
        }, s.delay);
      },
      close: function () {
        if (this.element) {
          this.element.close();
        }
      },
    };
    Notify.permission = Notify.prototype.permission;
    return F.inherit(Notify, Component);
  }
);
F.module(
  "superman:superuijs/component/suggestion",
  function (require, exports) {
    var Component = require("superman:superuijs/component"),
      Dot = require("superman:superuijs/util/dot"),
      Tool = require("superman:superuijs/util/tool"),
      DotListCompile = Dot.compile(
        [
          '<div class="sui-suggestion{{? it.theme}}sui-suggestion-{{=it.theme}}{{?}}">',
          "<ul>",
          "{{=it.content}}",
          "</ul>",
          "</div>",
        ].join("")
      ),
      ITEM_NO_DATA = '<li class="sui-suggestion-nodata">{noRecord}</li>',
      ITEM_CLASS = "sui-suggestion-item",
      ITEM_CLASS_QUERY = "." + ITEM_CLASS,
      ITEM_HOVER_CLASS = "sui-suggestion-hover",
      ITEM_HOVER_CLASS_QUERY = "." + ITEM_HOVER_CLASS,
      DotItemCompile = Dot.compile(
        '<li data-index="{{=it.index}}" class="sui-suggestion-item">{{=it.content}}</li>'
      );
    require("superui/suggestion.css");
    var KEY = {
      UP: 38,
      DOWN: 40,
      ESC: 27,
      RETURN: 13,
      BACKSPACE: 8,
      SPACE: 32,
    };
    function Suggestion(options) {
      this.initialize(options);
    }
    Suggestion.prototype = {
      constructor: Suggestion,
      initialize: function (options) {
        var option = this.options(
          F.mix(
            {
              component: "suggestion",
              logactid: "1100",
              input: null,
              url: "",
              template: "<span>{{=it.name}}</span>--{{=it.author}}",
              autoFill: "name",
              autoEmpty: true,
              width: "auto",
              max: 10,
              dataType: "jsonp",
              charset: "gbk",
              jsonp: "cb",
              delay: 100,
              focusShow: true,
              ajaxoptions: null,
              posRefer: null,
              noRecord: "没有找到符合条件的结果",
              theme: "",
              result: function (json) {
                var data = [],
                  match;
                try {
                  if (json.s) {
                    F.each(json.s, function (item) {
                      match = item.split(/\{#S\+_\}/i);
                      if (match && match.length == 2) {
                        data.push($.parseJSON(match[1]));
                      }
                    });
                  } else {
                    F.each(json.g, function (item) {
                      if (item.type === "sug") {
                        match = item.q.split(/\{#S\+_\}/i);
                        if (match && match.length === 2) {
                          data.push($.parseJSON(match[1]));
                        }
                      }
                    });
                  }
                } catch (e) {
                  throw new Error(
                    "result结果错误，请之定义result函数或则更换接口"
                  );
                }
                return data;
              },
              value: function (url, value) {
                return url.replace(/#?\{(wd|word)\}/i, value);
              },
              highlight: function (data, value) {
                return data.replace(
                  new RegExp(
                    "(?![^&;]+;)(?!<[^<>]*)(" +
                      value.replace(
                        /([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi,
                        "\\$1"
                      ) +
                      ")(?![^<>]*>)(?![^&;]+;)",
                    "i"
                  ),
                  '<span class="sui-suggestion-highlight">$1</span>'
                );
              },
            },
            options
          )
        );
        this.input = option.input;
        this.noRecord = Tool.substitute(ITEM_NO_DATA, option);
        if (this.input && this.input.length) {
          if (typeof option.template == "string") {
            this.DotCompile = Dot.compile(option.template);
          }
          this.render(option);
          this.bind(option);
        }
      },
      render: function () {
        var self = this,
          options = self.options();
        self.wrap = options.componentWrap
          ? options.componentWrap
          : self.input.offsetParent().addClass("sui-componentWrap");
        self.list = $(DotListCompile(options)).hide().appendTo(this.wrap);
        self.listul = self.list.find("ul");
        self.resetPosition();
      },
      resetPosition: function () {
        var self = this,
          offset = self.wrap.offset(),
          options = self.options(),
          input = options.posRefer || self.input,
          ioffset = input.offset(),
          width;
        width =
          typeof options.width == "number"
            ? options.width
            : self.input.outerWidth();
        self.list.css({
          left: ioffset.left - offset.left,
          top: ioffset.top - offset.top + self.input.outerHeight(),
          width:
            width -
            parseInt(self.list.css("borderLeftWidth"), 10) -
            parseInt(self.list.css("borderRightWidth"), 10),
        });
      },
      range: function () {
        var input = this.input[0],
          value = this.input.val();
        if (typeof document.selection !== "undefined") {
          var rt = input.createTextRange(),
            r = document.selection.createRange();
          rt.collapse();
          rt.select();
          r.collapse(false);
          r.moveStart("character", value.length);
          r.moveEnd("character", value.length);
          r.select();
        } else {
          input.setSelectionRange(value.length, value.length);
        }
      },
      bind: function (options) {
        var self = this,
          timeout;
        self.input
          .on("keydown", function (event) {
            switch (event.keyCode) {
              case KEY.UP:
                event.preventDefault();
                self.up();
                self.range();
                break;
              case KEY.DOWN:
                self.down();
                break;
              case KEY.RETURN:
                event.preventDefault();
                self.select();
              case KEY.ESC:
                self.hide();
                break;
              case KEY.BACKSPACE:
                self.cache = "";
              default:
                clearTimeout(timeout);
                self.clearResult(false);
                timeout = setTimeout(function () {
                  self.change();
                }, options.delay);
                break;
            }
          })
          .mouseenter(function () {
            self.resetPosition();
          })
          .focus(function () {
            if (
              self.resdata &&
              self.resdata.length &&
              self.options("focusShow")
            ) {
              self.show();
            }
          });
        self.list
          .on("mouseenter click", ITEM_CLASS_QUERY, function (event, target) {
            self.index = parseInt(
              (target = $(event.target).closest(ITEM_CLASS_QUERY)).attr(
                "data-index"
              ),
              10
            );
            if (event.type == "click") {
              self.select();
            } else {
              self.hover(target);
            }
          })
          .mouseleave(function () {
            self.hover();
          });
        $(document).mousedown(function (e) {
          if (!$(e.target).parents(".sui-suggestion").length) {
            self.hide();
          }
        });
        self.on("refresh", function () {
          self.resetPosition();
        });
      },
      hover: function (target, index) {
        this.list.find(ITEM_HOVER_CLASS_QUERY).removeClass(ITEM_HOVER_CLASS);
        if (target) {
          target.addClass(ITEM_HOVER_CLASS);
        }
        if (typeof index == "number") {
          this.list.find(ITEM_CLASS_QUERY).eq(index).addClass(ITEM_HOVER_CLASS);
        }
      },
      change: function () {
        var self = this,
          options = self.options(),
          ajaxoptions = {},
          value = self.input.val();
        if (value && self.cache !== value) {
          ajaxoptions = {
            url: options.url,
            dataType: options.dataType,
            scriptCharset: options.charset,
            success: function (result) {
              self.result(result);
            },
          };
          if (options.dataType == "jsonp") {
            ajaxoptions.url = options.value(options.url, value);
            ajaxoptions.jsonp = options.jsonp;
          } else {
            if (options.ajaxoptions) {
              ajaxoptions = F.mix(ajaxoptions, options.ajaxoptions);
            }
            ajaxoptions.data = options.value(options.url, value);
          }
          self.cache = value;
          return $.ajax(ajaxoptions);
        }
        self.hide();
      },
      result: function (result) {
        var options = this.options(),
          self = this,
          data = [],
          html = [];
        if ((data = options.result(result)).length) {
          data = data.slice(0, options.max);
          F.each(data, function (item, idx) {
            html.push(
              DotItemCompile({
                index: idx,
                content: options.highlight(self.DotCompile(item), self.cache),
              })
            );
          });
        } else {
          html.push(self.noRecord);
        }
        self.index = -1;
        self.resdata = data;
        self.total = data.length;
        self.listul.html(html.join(""));
        self.show();
      },
      clearResult: function (recache) {
        this.resdata = [];
        this.index = -1;
        if (recache !== false) {
          this.cache = "";
        }
      },
      getResult: function () {
        return this.resdata || [];
      },
      getValue: function (autofill) {
        var data = this.getResult(),
          item = data[Math.max(0, this.index)];
        this.cache = "";
        if (item) {
          if (autofill != false) {
            this.fill(item);
          }
          return item;
        }
        return null;
      },
      fill: function (data) {
        var options = this.options(),
          fill = options.autoFill;
        if (fill) {
          if (typeof fill == "string") {
            this.input.val(data[fill]);
          } else if (typeof fill == "function") {
            this.input.val(fill(data));
          }
        } else {
          if (options.autoEmpty) {
            this.input.val("").focus();
          }
        }
      },
      up: function () {
        if (--this.index < 0) {
          this.index = this.total - 1;
        }
        this.hover(null, this.index);
      },
      down: function () {
        if (++this.index >= this.total) {
          this.index = 0;
        }
        this.hover(null, this.index);
      },
      select: function () {
        var index = Math.max(0, this.index),
          data = this.resdata,
          item;
        if ((item = data[index])) {
          this.fill(item);
          this.emit("onSelect", item);
          this.log("select");
        }
        this.hide();
      },
      hide: function () {
        this.list.hide();
      },
      show: function () {
        this.list.show();
      },
    };
    return F.inherit(Suggestion, Component);
  }
);
F.module(
  "superman:superuijs/component/placeholder",
  function (require, exports) {
    var Component = require("superman:superuijs/component"),
      Dot = require("superman:superuijs/util/dot"),
      _attrTag = "placeholder",
      DotPlaceholderCompile = Dot.compile(
        [
          "<div data-attr='" + _attrTag + "' ",
          "style='position:absolute;text-indent:{{=it.indent}}px;",
          "width:{{=it.width}}px;height:{{=it.height}}px;",
          "line-height:{{=it.lineheight}}px;",
          "font-size:{{=it.font}}px;",
          "color:#666;cursor:text;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;'>",
          "{{=it.holderText}}",
          "</div>",
        ].join("")
      );
    require("superui/superui.css");
    function Placeholder(options) {
      this.initialize(options);
    }
    Placeholder.prototype = {
      initialize: function (options) {
        var that = this;
        if (that.isSupportPlacerHolder()) {
          options.target.attr("placeholder", options.holderText);
          return;
        }
        that.options(
          F.mix(
            {
              component: "placeholder",
              logactid: "4000",
              componentWrap: null,
              target: null,
              holderText: "",
              height: 0,
              lineheight: 0,
              font: 12,
            },
            options
          )
        );
        if (isNaN(options.top) || isNaN(options.left)) {
          throw new Error(
            "组件" + (options.component || "") + "必须设置top，left值"
          );
        }
        that.render();
        that.bind();
      },
      isSupportPlacerHolder: function () {
        return "placeholder" in document.createElement("input");
      },
      render: function () {
        var that = this,
          options = that.options();
        that.input = options.target;
        that.top = options.top;
        that.left = options.left;
        that.componentWrap = options.componentWrap;
        options.indent = parseInt(that.input.css("padding-left"), 10);
        that.holder = $(DotPlaceholderCompile(options));
        that.componentWrap.append(that.holder);
        that.toPositionPlaceHolder();
        if (!that.input.val()) {
          that.show();
        }
        this.emit("onRender");
      },
      bind: function () {
        var that = this,
          options = that.options();
        options.target.on("keydown keyup change blur focus", function () {
          that.updateHolderStatus();
        });
        that.holder.on("click", function () {
          options.target.focus();
        });
        that
          .on("destroy", function () {
            that.close();
          })
          .on("refresh", function () {
            that.toPositionPlaceHolder();
            that.updateHolderStatus();
          });
      },
      updateHolderStatus: function () {
        var that = this;
        if ($.trim(that.input.val())) {
          that.hide();
        } else {
          that.show();
        }
      },
      toPositionPlaceHolder: function () {
        var that = this,
          options = that.options();
        var that = this;
        that.holder.css({ left: that.left, top: that.top });
      },
      show: function () {
        this.holder && this.holder.show();
      },
      hide: function () {
        this.holder.hide();
      },
      close: function () {
        var that = this;
        that.holder.remove();
      },
    };
    return F.inherit(Placeholder, Component);
  }
);
