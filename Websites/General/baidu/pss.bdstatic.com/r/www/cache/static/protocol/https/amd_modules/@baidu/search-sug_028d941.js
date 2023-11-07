define("@baidu/search-sug/sug/index", ["require"], function (require) {
  function checkHsugIn(e) {
    return window.__sample_hsug_length
      ? e.length >= 4 || encodeURIComponent(e).length >= 18
      : e.length >= 4 || encodeURIComponent(e).length >= 18;
  }
  function checkHsugShow(e) {
    return e.length >= 1 && encodeURIComponent(e).length > 3;
  }
  function SUGOBJ(e) {
    var t = this,
      e = (t.opts = e || {});
    (t.ipt = e.ipt || null),
      (t.reverse = e.reverse || !1),
      (t.form = e.form || null),
      (t.submission = e.submission || null),
      (t.maxNum = e.maxNum || 10),
      (t.bds = e.bds || null),
      (t.sids = t.bds && t.bds.comm && t.bds.comm.sid),
      (t.withoutMode = e.withoutMode || !1),
      (t.withoutRich = e.withoutRich || !1),
      (t.withoutStat = e.withoutStat || !1),
      (t.withoutZhixin = e.withoutZhixin || !1),
      (t.visible = !1),
      (t.stopRefresh = !1),
      (t.renderCallback = e.renderCallback || function () {}),
      (t.selectCallback = e.selectCallback || function () {}),
      (t.storestr = t.storestr || ""),
      (t.storearr = t.storearr || []),
      (t.zhixinsug = []),
      (t.zhixintemplate = {}),
      (t.zhixinused = {}),
      (t.zhixindata = {}),
      (t.query = (t.ipt && t.ipt.value) || ""),
      (t.inputValue = t.query),
      (t.showValue = t.query),
      (t.sugValue = ""),
      (t.queryValue = ""),
      (t.reqValue = ""),
      (t.value = t.query),
      (t.index = -1),
      t.sugcontainer,
      (t.dataCached = {}),
      (t.dataArray = []),
      (t.dataStored = []),
      (t.dataAladdin = []),
      (t.dataDirect = []),
      (t.directSugSelected = !1),
      (t.dataHot = []),
      t.timer,
      (t.rsv_sug = 0),
      (t.rsv_sug1 = 0),
      (t.rsv_sug3 = 0),
      (t.rsv_sug4 = 0),
      (t.rsv_sug7 = [0, 0, 0]),
      (t.rsv_sug9 = 0),
      (t.initTime = 0),
      (t.inputT = 0),
      (t.rsv_bp = e && e.comm && 1 === e.comm.ishome ? 0 : 1),
      (t.jqXhr = null),
      (t.resultSugSamples = [
        "search_sug_1",
        "search_sug_2",
        "search_sug_3-1",
        "search_sug_3-2",
        "search_sug_4-1",
        "search_sug_4-2",
        "search_sug_5",
        "search_sug_6",
        "search_sug_base",
      ]),
      (t.currentSugSample = ""),
      (t.isSugSample3 = !1),
      (t.isSugSample4 = !1),
      (t.isSugSample = !1),
      (t.currentSearchStatus = -1),
      t.ipt && t.init(),
      (t.pwd = ""),
      (t.hisSwitch = e.hisSwitch),
      (t.useFeedback = e.useFeedback),
      (t.sugprod = e.prod || ""),
      (t.tn = e.tn || ""),
      (t.requestDefaultData = {}),
      (t.showRightContent = !1),
      (t.backFrame = !1),
      (t.prevQuery = t.query),
      (t.backDelete = !1),
      (t.requestQuery = [t.query]),
      (t.isAddQuery = !1),
      (normalLog = ""),
      (recommendLog = ""),
      (searchHistroyLog = ""),
      (t.isReturnSearch = !1);
  }
  function xss(e) {
    return e
      .toString()
      .replace(/[<%3C]/g, "&lt;")
      .replace(/[>%3E]/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
  var bds = window.bds || {};
  (bds.se = bds.se || {}),
    (bds.se.store = (function () {
      function e() {
        try {
          return u in i && i[u];
        } catch (e) {
          return !1;
        }
      }
      function t() {
        try {
          return c in i && i[c] && i[c][i.location.hostname];
        } catch (e) {
          return !1;
        }
      }
      function s(e) {
        return function () {
          var t = Array.prototype.slice.call(arguments, 0);
          t.unshift(r),
            d.appendChild(r),
            r.addBehavior("#default#userData"),
            r.load(u);
          var s = e.apply(n, t);
          return d.removeChild(r), s;
        };
      }
      function a(e) {
        return "_" + e;
      }
      var r,
        n = {},
        i = window,
        o = i.document,
        u = "localStorage",
        c = "globalStorage",
        l = "__storejs__";
      if (
        ((n.disabled = !1),
        (n.set = function () {}),
        (n.get = function () {}),
        (n.remove = function () {}),
        (n.clear = function () {}),
        (n.transact = function (e, t, s) {
          var a = n.get(e);
          null == s && ((s = t), (t = null)),
            "undefined" == typeof a && (a = t || {}),
            s(a),
            n.set(e, a);
        }),
        (n.getAll = function () {}),
        (n.serialize = function (e) {
          return String(e);
        }),
        (n.deserialize = function (e) {
          return "string" != typeof e ? void 0 : e;
        }),
        e())
      )
        (r = i[u]),
          (n.set = function (e, t) {
            return void 0 === t
              ? n.remove(e)
              : void r.setItem(e, n.serialize(t));
          }),
          (n.get = function (e) {
            return n.deserialize(r.getItem(e));
          }),
          (n.remove = function (e) {
            r.removeItem(e);
          }),
          (n.clear = function () {
            r.clear();
          }),
          (n.getAll = function () {
            for (var e = {}, t = 0; t < r.length; ++t) {
              var s = r.key(t);
              e[s] = n.get(s);
            }
            return e;
          });
      else if (t())
        (r = i[c][i.location.hostname]),
          (n.set = function (e, t) {
            return void 0 === t ? n.remove(e) : void (r[e] = n.serialize(t));
          }),
          (n.get = function (e) {
            return n.deserialize(r[e] && r[e].value);
          }),
          (n.remove = function (e) {
            delete r[e];
          }),
          (n.clear = function () {
            for (var e in r) delete r[e];
          }),
          (n.getAll = function () {
            for (var e = {}, t = 0; t < r.length; ++t) {
              var s = r.key(t);
              e[s] = n.get(s);
            }
            return e;
          });
      else if (o.documentElement.addBehavior) {
        var d, g;
        try {
          (g = new ActiveXObject("htmlfile")),
            g.open(),
            g.write(
              "<script>document.w=window</script><iframe src='/favicon.ico'></iframe>"
            ),
            g.close(),
            (d = g.w.frames[0].document),
            (r = d.createElement("div"));
        } catch (m) {
          (r = o.createElement("div")), (d = o.body);
        }
        (n.set = s(function (e, t, s) {
          return (
            (t = a(t)),
            void 0 === s
              ? n.remove(t)
              : (e.setAttribute(t, n.serialize(s)), void e.save(u))
          );
        })),
          (n.get = s(function (e, t) {
            return (t = a(t)), n.deserialize(e.getAttribute(t));
          })),
          (n.remove = s(function (e, t) {
            (t = a(t)), e.removeAttribute(t), e.save(u);
          })),
          (n.clear = s(function (e) {
            var t = e.XMLDocument.documentElement.attributes;
            e.load(u);
            for (var s, a = 0; (s = t[a]); a++) e.removeAttribute(s.name);
            e.save(u);
          })),
          (n.getAll = s(function (e) {
            var t = e.XMLDocument.documentElement.attributes;
            e.load(u);
            for (var s, a = {}, r = 0; (s = t[r]); ++r) a[s] = n.get(s);
            return a;
          }));
      }
      try {
        n.set(l, l), n.get(l) != l && (n.disabled = !0), n.remove(l);
      } catch (m) {
        n.disabled = !0;
      }
      return n;
    })());
  var ImeTrack = (function () {
      function e(e) {
        var t = 0;
        if (document.selection) {
          e.focus();
          var s = document.selection.createRange(),
            a = 0;
          e && e.value && (a = e.value.length),
            s.moveStart("character", -a),
            (t = s.text.length - 1);
        } else
          (e.selectionStart || "0" === e.selectionStart) &&
            (t = e.selectionStart);
        return t;
      }
      function t(t) {
        function s(e) {
          r.ipt.value !== r.oldval &&
            ((r.oldval = r.ipt.value), r.inputchangeHandle(e));
        }
        function a() {
          for (var e = 0, t = r.logs.length - 1; t < r.logs.length - 1; t--)
            if (-1 === r.logs[t].type.indexOf("unval-")) return r.logs[t].time;
          return e;
        }
        var r = this;
        (r.logs = []),
          (r.opts = t || {}),
          (r.opts.logmaxnum = t.logmaxnum || 10),
          (r.opts.adv = t.adv || !1),
          (this.onLogChange = t.onLogChange),
          void 0 === r.opts.innerchange && (r.opts.innerchange = !0),
          (r.ipt = document.getElementById(r.opts.iptId)),
          (r._kdcode = 0),
          (r._kdevt = {}),
          (r._keyposition = 0),
          (r.ipt.onkeydown = function (e) {
            var t = e || window.event;
            (r._kdcode = t.keyCode || t.which), (r._kdevt = t);
          }),
          (r.ipt.onkeyup = function (t) {
            var s = t || window.event,
              a = s.keyCode || s.which;
            r.ipt.value || "",
              e(r.ipt),
              r._kdcode &&
                (r.addLog({ ku: a, type: "upsave" }),
                (r._kdcode = 0),
                (r._kdevt = {}),
                (r.oldval = r.ipt.value));
          }),
          (r.ipt.onpaste = function () {
            r.addLog(
              r._kdevt.ctrlKey
                ? { type: "unval-paste-key" }
                : { type: "unval-paste-mouse" }
            );
          }),
          (r.oldval = r.ipt.value || ""),
          (r.inputchangeHandle = function () {
            if (r._kdcode) r.addLog({ type: "unval-change-key" });
            else {
              var e = "";
              r.logs.length &&
                new Date().getTime() - a() < 300 &&
                (e = "unval-"),
                r.addLog({ type: e + "change-unkey" });
            }
          }),
          r.timmer,
          r.opts.innerchange &&
            ((r.ipt.onfocus = function (e) {
              r.timmer = setInterval(function () {
                s(e);
              }, 200);
            }),
            (r.ipt.onblur = function () {
              clearInterval(r.timmer);
            }));
      }
      return (
        (t.prototype = {
          checkLog: function (e) {
            for (var t = this.logs.length, s = !1; t > 0; )
              t--,
                -1 !== this.logs[t].type.indexOf("unval-")
                  ? ((e.type =
                      (-1 === e.type.indexOf("unval-") ? "" : "unval-") +
                      this.logs[t].type.replace("unval-", "") +
                      "-" +
                      e.type.replace("unval-", "")),
                    (this.logs[t] = e),
                    (s = !0))
                  : (t = -2);
            if (s) return !1;
            for (; this.logs.length >= this.opts.logmaxnum; ) this.logs.shift();
            return !0;
          },
          analyseLog: function () {
            function t() {
              if (s.opts.adv)
                for (var e = 0; e < n.length; e++)
                  n.charCodeAt(e) > 256 &&
                    ((o = n.substring(0, e + 1)), (u = n.substring(e + 1)));
            }
            var s = this;
            if (
              this.logs.length > 0 &&
              -1 === this.logs[this.logs.length - 1].type.indexOf("unval")
            ) {
              var a = this.logs[this.logs.length - 1],
                r = a.val.substring(0, a.start),
                n = a.val.substring(a.start, a.cursor),
                i = a.val.substring(a.cursor),
                o = "",
                u = "";
              229 === a.kd
                ? n.charCodeAt(n.length - 1) > 256 || !n.match(/[\x00-\x80]/g)
                  ? ((this._keyposition = e(this.ipt)),
                    (a.type += "-endime"),
                    0 === n.length && (a.type += "-cancelime"))
                  : ((a.type += "-imeinput"), t())
                : a.type.indexOf("paste-mouse") > -1
                ? (this._keyposition = e(this.ipt))
                : a.type.indexOf("change-unkey") > -1
                ? 0 === n.length
                  ? ((this._keyposition = e(this.ipt)),
                    this.logs.length > 1 &&
                      this.logs[this.logs.length - 2].type.indexOf("upsave") >
                        -1 &&
                      (a.type += "-link"))
                  : n.charCodeAt(n.length - 1) > 256 || !n.match(/[\x00-\x80]/g)
                  ? ((this._keyposition = e(this.ipt)), (a.type += "-endime"))
                  : ((a.type += "-imeinput"), t())
                : (this._keyposition = e(this.ipt)),
                this.opts.adv &&
                  ((a.type += "-adv"),
                  (a.strA = r),
                  (a.strB = n),
                  (a.strB1 = o),
                  (a.strB2 = u),
                  (a.strC = i)),
                this.onLogChange && this.onLogChange.call(this, a);
            }
          },
          addLog: function (t) {
            (t.kd = this._kdcode),
              (t.val = this.ipt.value),
              (t.start = this._keyposition),
              (t.cursor = e(this.ipt)),
              (t.type = t.type || 0),
              (t.time = new Date().getTime()),
              (0 === this.logs.length ||
                this.logs[this.logs.length - 1].val !== t.val ||
                -1 !== this.logs[this.logs.length - 1].type.indexOf("unval-") ||
                -1 !== t.type.indexOf("unval-")) &&
                (this.checkLog(t) && this.logs.push(t), this.analyseLog());
          },
          getLog: function () {
            var e = this.logs.slice(0);
            return e;
          },
          triggerInputChange: function (e) {
            this.inputchangeHandle(e);
          },
          diffLog: function () {
            for (var e = [], t = !1, s = 0; s < this.logs.length; s++)
              if (0 !== s) {
                var a = this.logs[s];
                if (a.strB && a.strA) {
                  if (
                    0 === a.strB.length &&
                    a.strA.length < this.logs[s - 1].strA.length
                  ) {
                    e = [];
                    continue;
                  }
                  if (
                    a.type.indexOf("link") > -1 ||
                    a.type.indexOf("paste") > -1
                  ) {
                    e = [];
                    continue;
                  }
                }
                var r = a.time - this.logs[s - 1].time;
                r > 3e3 && (e = []);
                var n = 0,
                  i =
                    (a.val.match(/[^\x00-\x80]/g) || []).length -
                    (this.logs[s - 1].val.match(/[^\x00-\x80]/g) || []).length;
                i > 0
                  ? (n = 1)
                  : (i =
                      (a.val.match(/[\x00-\x80]/g) || []).length -
                      (this.logs[s - 1].val.match(/[\x00-\x80]/g) || [])
                        .length),
                  a.type.indexOf("ime") > -1
                    ? ((n += 2), (t = !0))
                    : a.type.indexOf("unval") > -1 && t
                    ? (n += 2)
                    : (t = !1),
                  i > 0 && e.push(n, i, r);
              }
            return e;
          },
        }),
        t
      );
    })(),
    QuickDelete = (function () {
      function e() {
        this._init();
      }
      return (
        (e.prototype = {
          constructor: e,
          _init: function () {
            var e = this;
            (e.quickdelete = $(".quickdelete")),
              (e.quickdeleteline = $(".quickdelete-line")),
              (e.ipt = $("#kw")),
              e._bind_event();
          },
          _hide: function () {
            var e = this;
            e.quickdelete.hide(), e.quickdeleteline.hide();
          },
          _show: function () {
            var e = this;
            e.quickdelete.show(), e.quickdeleteline.show();
          },
          _bind_event: function () {
            var e = this,
              t = e.ipt,
              s = e.quickdelete;
            s.on("click", function () {
              t.val("").focus(),
                e._hide(),
                ns_c({ fm: "behs", tab: "search-delete" });
            });
          },
        }),
        e
      );
    })(),
    bdSug = function (e) {
      var t = new SUGOBJ(e);
      return t.outInterface();
    },
    supportInputEvent =
      "oninput" in document.createElement("input") &&
      !navigator.userAgent.match(/MSIE 9/) &&
      !navigator.userAgent.match(/chrome\/(28|29|30|31)/i),
    BDSUG_TIMESTAMP_START = 14183424e5,
    BDSUG_QUERY_LEV = 4;
  return (
    (SUGOBJ.prototype = {
      updateInitData: function (type) {
        var me = this,
          opts = me.opts || {};
        (me.setsug = !0),
          (me.setsugstorage = !0),
          (me.sets = {}),
          (me.sugcookie =
            navigator.cookieEnabled && /sug=(\d)/.test(document.cookie)
              ? RegExp.$1
              : 3),
          (me.sugstorecookie =
            navigator.cookieEnabled && /sugstore=(\d)/.test(document.cookie)
              ? RegExp.$1
              : 1),
          me.bds &&
            me.bds.comm &&
            me.bds.comm.personalData &&
            (me.sets =
              "string" == typeof me.bds.comm.personalData
                ? eval("(" + me.bds.comm.personalData + ")")
                : me.bds.comm.personalData),
          me.sets.errno &&
          0 === me.sets.errno &&
          me.sets.sugSet &&
          me.sets.sugSet.ErrMsg &&
          "SUCCESS" === me.sets.sugSet.ErrMsg
            ? "0" === me.sets.sugSet.value && (me.setsug = !1)
            : "0" === me.sugcookie && (me.setsug = !1),
          me.sets.errno &&
          0 === me.sets.errno &&
          me.sets.sugStoreSet &&
          me.sets.sugStoreSet.ErrMsg &&
          "SUCCESS" === me.sets.sugStoreSet.ErrMsg
            ? "0" === me.sets.sugStoreSet.value && (me.setsugstorage = !1)
            : "0" === me.sugstorecookie && (me.setsugstorage = !1),
          (me.loggedon =
            me.bds &&
            me.bds.se.store &&
            !me.bds.se.store.disabled &&
            navigator.cookieEnabled),
          (me.showsug = opts.showsug ? opts.showsug : me.setsug),
          (me.showsugstore = opts.showsugstore
            ? opts.showsugstore
            : me.showsug && me.loggedon && me.setsugstorage),
          (me.query = me.bds.comm.query),
          (me.pinyin = me.bds.comm.pinyin),
          (me.sugHost = me.bds.comm.sugHost || ""),
          (me.sid =
            navigator.cookieEnabled &&
            /H_PS_PSSID=([0-9_]+)/.test(document.cookie)
              ? RegExp.$1
              : me.bds.comm.sid);
        var canWriteStore = !0,
          isLogin = me.bds && me.bds.comm && me.bds.comm.username;
        (isLogin ||
          (me.bds &&
            me.bds.se &&
            me.bds.se.store &&
            1 == me.bds.se.store.get("wwwPassLogout"))) &&
          (canWriteStore = !1),
          me.bds &&
            me.bds.comm &&
            me.bds.comm.sampleval &&
            $.inArray("sample_his", me.bds.comm.sampleval) > -1 &&
            (canWriteStore = !0),
          ("init" !== type || document.referrer) &&
            canWriteStore &&
            me.writeStore(),
          (-1 !== me.resultSugSamples.indexOf(me.currentSugSample) ||
            -1 !== bds.comm.sampleval.indexOf("personal_sug_sample")) &&
            me.writeStore(),
          me.bds.se.store.set("wwwPassLogout", 0);
      },
      check: function () {
        var e = this;
        e.value !== e.ipt.value &&
          e.showValue !== e.ipt.value &&
          ((e.inputValue = e.showValue = e.value = e.ipt.value),
          e.bds &&
            e.bds.comm &&
            0 === e.bds.comm.ishome &&
            e.addStat(
              "oq",
              e.bds.comm.confirmQuery ? xss(e.bds.comm.confirmQuery) : ""
            ),
          e.bds &&
            e.bds.comm &&
            e.bds.comm.confirmQid &&
            e.addStat("rsv_pq", e.bds.comm.confirmQid),
          $(e.ipt).trigger("inputChange", [e]),
          e.request(e.value));
      },
      startCircle: function () {
        var e = this;
        e.timer ||
          ($(e.ipt).trigger("start", [e]),
          (e.timer = setTimeout(function () {
            e.check(), (e.timer = setTimeout(arguments.callee, 200));
          }, 200)),
          supportInputEvent &&
            $(e.ipt).bind("input", function () {
              e.check();
            }));
      },
      stopCircle: function () {
        var e = this;
        e.timer &&
          (clearTimeout(e.timer),
          supportInputEvent && $(e.ipt).unbind("input"),
          (e.timer = null),
          $(e.ipt).trigger("stop", [e]));
      },
      callback: function (e, t) {
        function s(e) {
          a.zhixintemplate[e] &&
            !a.zhixinused[e] &&
            (a.zhixinused[e] = $.ajax({
              crossDomain: !0,
              url: a.zhixintemplate[e],
              dataType: "script",
              scriptCharset: "UTF-8",
            }));
        }
        var a = this;
        if (e && e.exp) {
          var r = a.stat.rsv_sug6 || "";
          r.length > 0 && e.exp.length > 0 && -1 === r.indexOf(e.exp)
            ? (r += "_" + e.exp)
            : (r = e.exp),
            a.addStat("rsv_sug6", r);
        }
        if (
          e &&
          (e.g || e.z || (a.checkStore(e) && a.checkStore(e).length > 0))
        ) {
          if (
            ((a.queryValue = e.q),
            e.q && "2" !== t && (a.dataCached[e.q] = e),
            $(a.ipt).trigger("dataReady", [a]),
            !a.withoutZhixin && e.zzx)
          )
            for (var n = 0; n < e.zzx.length; n++)
              e.zzx[n] &&
                e.zzx[n].type &&
                (a.zhixinsug.push({
                  value: e.g[n].q,
                  type: e.zzx[n].type,
                  url: e.zzx[n].url,
                }),
                s(e.zzx[n].type));
          if (
            ((a.dataArray = a.packData(e)),
            (a.requestDefaultData = e),
            bds.comm.ishome ||
              -1 === a.resultSugSamples.indexOf(a.currentSugSample))
          )
            (a.normalLog = a.getNormalSugOrHisLog({
              total: e.g && e.g.length,
            })),
              a.render(a.dataArray);
          else {
            if (
              (("search_sug_1" === a.currentSugSample ||
                "search_sug_6" === a.currentSugSample) &&
                ((a.normalLog = a.getNormalSugOrHisLog({
                  total: e.g && e.g.length,
                })),
                a.render(a.dataArray)),
              a.isSugSample3)
            ) {
              $(".wrapper_new #form .bdsug-new")
                .children()
                .each(function () {
                  $(this).remove();
                }),
                a.backFrame &&
                  1 === a.currentSearchStatus &&
                  ($("#kw")[0].value = "");
              var i = e.g_mot && e.g_mot.length,
                o = e.g_mot_title;
              if (0 === a.currentSearchStatus)
                (a.showRightContent = (e.g_mot && e.g_mot.length >= 3) || !1),
                  (a.normalLog = a.getNormalSugOrHisLog({
                    total: e.g_mot && e.g_mot.length,
                  })),
                  a.render(a.dataArray),
                  a.backFrame &&
                    ((a.recommendLog = a.getRecommendOrHisLog(i, "right")),
                    a.renderRecomend(e.g_mot, o, "right"));
              else if (1 === a.currentSearchStatus) {
                var u = a.showsugstore ? "right" : "left",
                  c = a.showsugstore ? "left" : "right";
                if (a.backFrame) {
                  var l = e.g && e.g.length;
                  (a.recommendLog = a.getRecommendOrHisLog(i, u)),
                    (a.searchHistroyLog = a.getRecommendOrHisLog(l, c));
                }
                a.backFrame && e.g && e.g.length && e.g_mot && e.g_mot.length
                  ? (a.renderSearchHistory(e.g, "", c),
                    a.renderRecomend(e.g_mot, e.g_mot_title, u),
                    a.renderBottomContent())
                  : ((a.normalLog = a.getNormalSugOrHisLog({
                      total: e.g && e.g.length,
                    })),
                    a.render(a.dataArray));
              } else
                "" === a.inputValue &&
                  ((a.normalLog = a.getNormalSugOrHisLog({
                    total: e.g && e.g.length,
                  })),
                  a.render(a.dataArray));
            }
            if (
              "search_sug_2" === a.currentSugSample ||
              "search_sug_5" === a.currentSugSample
            ) {
              (a.showRightContent = (e.g_mot && e.g_mot.length >= 3) || !1),
                (a.normalLog = a.getNormalSugOrHisLog({
                  total: e.g && e.g.length,
                })),
                a.render(a.dataArray);
              var i = e.g_mot && e.g_mot.length,
                o = e.g_mot_title;
              a.backFrame
                ? (i > 0 &&
                    (a.recommendLog = a.getRecommendOrHisLog(i, "right")),
                  a.renderRecomend(e.g_mot, e.g_mot_title, "right"))
                : "search_sug_5" === a.currentSugSample &&
                  a.backDelete &&
                  "" !== a.inputValue &&
                  ((a.recommendLog = a.getRecommendOrHisLog(i, "right")),
                  a.renderRecomend(e.g_mot, e.g_mot_title, "right"));
            }
            if (
              "search_sug_4-1" === a.currentSugSample ||
              "search_sug_4-2" === a.currentSugSample
            ) {
              if (
                ((a.showRightContent =
                  (e.g_mot && e.g_mot.length >= 3 && a.showsugstore) || !1),
                (a.normalLog = a.getNormalSugOrHisLog({
                  total: e.g && e.g.length,
                })),
                a.render(a.dataArray),
                a.backFrame)
              ) {
                var i = e.g_mot && e.g_mot.length;
                i > 0 &&
                  (a.searchHistroyLog = a.getRecommendOrHisLog(i, "right"));
              }
              a.backFrame &&
                a.showsugstore &&
                a.renderSearchHistory(e.g_mot, e.g_mot_title, "right");
            }
            "search_sug_base" === a.currentSugSample &&
              ((a.normalLog = a.getNormalSugOrHisLog({
                total: e.g && e.g.length,
              })),
              a.render(a.dataArray));
          }
          if (a.isSugSample) {
            var d =
                $(".wrapper_new #form .bdsug-new")[0] &&
                "block" === $(".wrapper_new #form .bdsug-new")[0].style.display,
              g = (e.g && e.g.length) || 0,
              m = (e.g_mot && e.g_mot.length) || 0,
              h = 0;
            if (d) {
              var p = $(".wrapper_new #form .bdsug-new ul");
              p.each(function () {
                $(this).children().length > 0 && h++;
              });
            }
            a.sendSugShowLog({
              show: d ? 1 : 0,
              backFrame: a.backFrame ? 1 : 0,
              module: h,
              home: a.bds.comm.ishome,
              showHis: a.showsugstore ? 1 : 0,
              status: a.currentSearchStatus,
              test: a.currentSugSample,
              total: g + m,
              normalLog: a.normalLog,
              recommend: a.recommendLog,
              history: a.searchHistroyLog,
            }),
              (a.normalLog = ""),
              (a.recommendLog = ""),
              (a.searchHistroyLog = "");
          }
        } else
          (a.isSugSample3 &&
            1 === a.currentSearchStatus &&
            a.backFrame &&
            "" === a.inputValue) ||
            a.hideSug();
      },
      sendSugShowLog: function (e) {
        c({ rsv_ct: 10, rsv_cst: 1, rsv_clk_extra: JSON.stringify(e) });
      },
      getNormalSugOrHisLog: function (e) {
        var t = this,
          s = "" === t.inputValue ? "his" : "sug";
        return { total: e.total, pos: "left", type: s };
      },
      getRecommendOrHisLog: function (e, t) {
        return { total: e || 0, pos: t };
      },
      sendBackFrameShowSugLog: function () {
        c({ rsv_ct: 10, rsv_cst: 11 });
      },
      buildUrl: function (e, t, s) {
        var a = this,
          r = a.sid.replace(/_/g, ","),
          n = "pc";
        a.sugprod && (n = a.sugprod);
        var i =
            "/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=" +
            n +
            "&from=pc_web" +
            (r ? "&sugsid=" + r : ""),
          o = (a.sugHost || "http://suggestion.baidu.com/su", ""),
          u = [],
          c = [];
        try {
          var l = a.bds.se.store.get("BDSUGSTORED");
          c = (l && $.parseJSON(l)) || [];
        } catch (d) {}
        for (var g = 0; g < c.length; g++) {
          var m = c[g].t
            ? 1 * c[g].t + BDSUG_TIMESTAMP_START
            : new Date().getTime();
          m = Math.round(m / 1e3);
          var h = { time: m, kw: decodeURIComponent(c[g].q), hide: c[g].hide };
          c[g].s &&
            c[g].s > BDSUG_QUERY_LEV &&
            (h.fq = c[g].s - BDSUG_QUERY_LEV + 1),
            h.hide
              ? ("search_sug_1" === a.currentSugSample ||
                  "search_sug_2" === a.currentSugSample ||
                  "search_sug_5" === a.currentSugSample ||
                  (a.isSugSample3 && 0 === a.currentSearchStatus)) &&
                "" !== e &&
                (delete h.hide, u.push(h))
              : (delete h.hide, u.push(h)),
            u.length > 10 && u.shift();
        }
        "" === e &&
          ((i = "/sugrec?"),
          (o = "&prod=pc_his&from=pc_web&json=1&sid=" + a.sid + "&hisdata="),
          $.stringify && u.length && (o += encodeURIComponent($.stringify(u))),
          !window.__sam_his_hot ||
            (a.bds && a.bds.comm && a.bds.comm.username) ||
            (o += "&type=4"),
          (o += "&_t=" + new Date().getTime()));
        var p = t ? "&sugmode=" + t : "";
        a.backDelete && "" !== a.inputValue && (p = "&sugmode=3");
        var v = 0;
        try {
          v = +(localStorage.getItem("search_request_time") || 0);
        } catch (f) {
          console.error(f);
        }
        var S = "search_sug_3-2" === a.currentSugSample ? 18e5 : 72e4;
        if (((a.currentSearchStatus = Date.now() - v > S ? 1 : 0), 2 === +t)) {
          var _ = "&hot_launch=";
          (_ += 1 === a.currentSearchStatus ? 1 : 0), (p += _);
        }
        var b = -1 !== a.resultSugSamples.indexOf(a.currentSugSample),
          y = -1 !== bds.comm.sampleval.indexOf("personal_sug_sample");
        "" !== e &&
          (b || y) &&
          $.stringify &&
          u.length &&
          (o += "&his=" + encodeURIComponent($.stringify(u))),
          a.sugcookie > 0 && (a.sugcookie = 3);
        var w = "";
        return (
          (w =
            "" === e
              ? a.isSugSample3
                ? i + "&wd=" + encodeURIComponent(a.queryValue) + o
                : i + o
              : b || y
              ? i + "&wd=" + encodeURIComponent(e) + o
              : i + "&wd=" + encodeURIComponent(e)),
          bds.comm.supportis && (w += "&req=2"),
          window.bds &&
            bds.comm &&
            bds.comm.cur_query &&
            (w += "&bs=" + encodeURIComponent(bds.comm.cur_query)),
          window.bds &&
            bds.comm &&
            bds.comm.cur_disp_query &&
            (w += "&pbs=" + encodeURIComponent(bds.comm.cur_disp_query)),
          !window._is_sugemptyhot_sam ||
          !bds.comm.ishome ||
          bds.comm.username ||
          e ||
          s
            ? e || s || (w += "&sc=eb")
            : (w += "&sc=hot"),
          a.ipt && (w += "&csor=" + getCursortPosition(a.ipt)),
          a.pwd && (w += "&pwd=" + encodeURIComponent(a.pwd)),
          (w += p),
          (a.pwd = e),
          w
        );
      },
      request: function (e, t) {
        function s() {
          a.jqXhr = $.ajax({
            dataType: "jsonp",
            async: !0,
            url: a.buildUrl(e, t),
            jsonp: "cb",
            timeout: 5e3,
            success: function (e) {
              a.callback(e, t);
            },
            always: function () {
              a.jqXhr = null;
            },
          });
        }
        var a = this,
          r =
            "search_sug_3-1" === a.currentSugSample ||
            "search_sug_3-2" === a.currentSugSample;
        if (
          !r ||
          1 !== a.currentSearchStatus ||
          !a.backFrame ||
          "" !== a.inputValue
        ) {
          e && (e = $.limitWd(e, 160)),
            (a.directSugSelected = !1),
            (a.isAddQuery = e.length > a.prevQuery.length);
          var n = !1;
          if (
            ((a.backDelete = !1),
            e.length < a.queryValue.length && !a.isAddQuery
              ? a.requestQuery.forEach(function (t) {
                  n = -1 !== t.indexOf(e) ? !0 : !1;
                })
              : (n = !1),
            n
              ? (a.requestQuery.push(e), (a.backDelete = !0))
              : (a.backDelete = !1),
            "_blank" === $(a.form).attr("target") &&
              1 === $(a.ipt).attr("data-bfocus"))
          )
            $(a.ipt).focus().attr("data-bfocus", 0);
          else if (a.showsug) {
            if (((a.reqValue = e), 2 !== t && a.dataCached[e]))
              return void a.callback(a.dataCached[e]);
            a.jqXhr && a.jqXhr.abort(),
              "" === e
                ? a.backFrame && a.isSugSample3
                  ? s()
                  : (a.jqXhr = $.ajax({
                      type: "GET",
                      dataType: "json",
                      async: !0,
                      url: a.buildUrl(e, t),
                      timeout: 5e3,
                      xhrFields: { withCredentials: !0 },
                      crossDomain: !0,
                      success: function (e) {
                        a.callback(e, t);
                      },
                      always: function () {
                        a.jqXhr = null;
                      },
                    }))
                : s(),
              a.rsv_sug3++,
              a.addStat("rsv_sug3", a.rsv_sug3),
              (a.initTime = new Date().getTime());
          }
        }
      },
      packData: function (e) {
        var t = this,
          s = [];
        t.checkHot(e),
          t.checkAla(e),
          t.checkStore(e),
          t.bds.comm.supportis || t.checkDirect(e);
        for (var a = t.mergeData(e), r = 0; r < a.length; r++)
          t.reverse ? s.unshift(a[r]) : s.push(a[r]);
        return s;
      },
      checkHot: function (e) {
        var t = this;
        if (((t.dataHot = []), e.g && e.g.length))
          for (var s = 0; s < e.g.length; s++) {
            var a = e.g[s];
            a.t && "hot" === a.t
              ? t.dataHot.push({ value: a.q, otherData: a.st })
              : !window.__sam_his_hot ||
                !a.t ||
                "hs" !== a.t ||
                (window.me.bds && t.bds.comm && t.bds.comm.username) ||
                t.dataHot.push({ value: a.q, otherData: a.st });
          }
      },
      checkDirect: function (e) {
        var t = this;
        if (((t.dataDirect = []), e.tzx && "6" === e.tzx.type && e.tzx.info)) {
          var s = e.tzx.info;
          t.dataDirect.push({ value: s.site, otherData: s });
        }
      },
      checkAla: function (e) {
        var t = this;
        if (((t.dataAladdin = []), e.z && e.z.length > 0 && !t.withoutRich))
          for (var s = 0; s < e.z.length; s++) {
            var a = e.z[s];
            a.id &&
              a.type &&
              a.key &&
              a.word &&
              t.dataAladdin.push({ value: a.key, otherData: a });
          }
        else t.dataAladdin = [];
      },
      writeStore: function () {
        var e = this;
        if (e.query && e.pinyin && checkHsugIn(e.query)) {
          e.getStore();
          var t = encodeURIComponent(e.query.toLowerCase()),
            s = encodeURIComponent(e.pinyin.toLowerCase()),
            a = BDSUG_QUERY_LEV,
            r = new Date().getTime() - BDSUG_TIMESTAMP_START,
            n = -1;
          $.each(e.storearr, function (e, i) {
            i.p === s &&
              ((i.q = t),
              (a = (i.s || BDSUG_QUERY_LEV) + 1),
              (i.t = r),
              (n = e));
          }),
            n > -1 && e.storearr.splice(n, 1);
          var i = document.location.search || location.search,
            o = /base_query/.test(i);
          if (o) return;
          var u = e.showsugstore ? 0 : 1;
          e.storearr.push({ q: t, p: s, s: a, t: r, hide: u }),
            e.storearr.length > 50 && e.storearr.shift(),
            e.setStore();
        }
      },
      checkStore: function (e) {
        var t = this;
        if (((t.dataStored = []), t.showsugstore && checkHsugShow(t.value))) {
          if (e && e.g && e.g.length)
            for (var s = 0; s < e.g.length; s++) {
              var a = e.g[s];
              a.type &&
                ("his_normal" === a.type || "his_rec" === a.type) &&
                $.trim(a.q) &&
                t.dataStored.push({
                  value: $.trim(a.q),
                  pinyin: "|",
                  s: 4,
                  t: "",
                });
            }
          0 === t.dataStored.length &&
            (t.getStore(),
            $.each(t.storearr, function (e, s) {
              var a = decodeURIComponent(s.q),
                r = decodeURIComponent(s.p);
              (0 === a.indexOf(t.value.toLowerCase()) ||
                0 === r.indexOf(t.value.toLowerCase())) &&
                t.dataStored.unshift({ value: a, pinyin: r, s: s.s, t: s.t });
            }));
        } else if (t.showsugstore && "" === t.value) {
          if (e && e.g && e.g.length)
            for (var s = 0; s < e.g.length; s++) {
              var a = e.g[s];
              a.type &&
                ("his_normal" === a.type || "his_rec" === a.type) &&
                $.trim(a.q) &&
                t.dataStored.push({
                  value: $.trim(a.q),
                  pinyin: "|",
                  s: 4,
                  t: "",
                });
            }
          !window._is_sugempty_sam ||
            (t.bds && t.bds.comm && t.bds.comm.username) ||
            (t.getStore(),
            $.each(t.storearr, function (e, s) {
              var a = decodeURIComponent(s.q),
                r = decodeURIComponent(s.p);
              t.dataStored.unshift({ value: a, pinyin: r, s: s.s, t: s.t });
            }));
        }
        return t.dataStored;
      },
      placeHolder: function (e) {
        var t = this;
        (t.placeholder = e || ""), $(t.ipt).attr("placeholder", t.placeholder);
      },
      getStore: function () {
        var e = this;
        try {
          (e.storestr = e.bds.se.store.get("BDSUGSTORED")),
            (e.storearr = (e.storestr && $.parseJSON(e.storestr)) || []);
        } catch (t) {
          (e.storestr = "[]"), (e.storearr = []);
        }
        $.each(e.storearr, function (e, t) {
          (t.t = t.t || 0), (t.s = t.s || 4);
        });
      },
      setStore: function () {
        var e = this,
          t = "";
        $.each(e.storearr, function (e, s) {
          t +=
            (0 === e ? "" : ",") +
            '{"q":"' +
            s.q +
            '","p":"' +
            s.p +
            '","s":' +
            s.s +
            ',"t":' +
            s.t +
            ',"hide":' +
            (s.hide || 0) +
            "}";
        }),
          (e.storestr = "[" + t + "]");
        try {
          e.bds.se.store.set("BDSUGSTORED", e.storestr);
        } catch (s) {
          console.error(err);
        }
      },
      mergeData: function (e) {
        function t(e) {
          function t(e, t) {
            var e = $.subByte(e, "41");
            return (
              t && e
                ? ((e = $.trim(e)),
                  (t = $.trim(t)),
                  (e = 0 === e.indexOf(t) && e !== t ? a(e, t) : r(e)))
                : (e = r(e)),
              e
            );
          }
          function a(e, t) {
            (e = r(e)), (t = r(t));
            var s = t,
              a = t.length,
              n = "<b>" + e.substring(a) + "</b>";
            return s + n;
          }
          function r(e) {
            return (
              (e = e.replace(/&/g, "&amp;")),
              (e = e.replace(/</g, "&lt;")),
              (e = e.replace(/>/g, "&gt;"))
            );
          }
          function n(e) {
            if (e.flag) {
              var a = e.value && e.value.tag;
              a &&
                (v +=
                  '<span class="sug-tag-comm sug-hot-orange">' + a + "</span>");
            }
            if ("1020" === e.type && e.value) {
              var r = e.value.img,
                n = e.value.brief || "",
                o = e.value.info || "",
                u = (e.value.name[0] && e.value.name[0].text) || "",
                c = e.value.link,
                l = "";
              (r || n) && (p.isDouble = !0);
              var d = "";
              n && (d = '<span class="brief">' + n + "</span>");
              var g = "";
              if (
                (o && (g = '<span class="info">' + o + "</span>"), p.isDouble)
              ) {
                e.value &&
                  e.value.img &&
                  (l =
                    '<div class="left-img-wrap"><img class="left-img" src="' +
                    r +
                    '"></div>');
                var m = i(e.value),
                  h =
                    '<div class="content"><div class="header"><span class="name">' +
                    u +
                    "</span>" +
                    m +
                    '</div><div class="more c-line-clamp1">' +
                    d +
                    g +
                    "</div></div>",
                  f = '<div class="right-btn">查看</div>';
                if (c) {
                  var S = ' href="' + c + '" data-flag="' + e.flag + '"';
                  v =
                    "<a" +
                    S +
                    ' target="_blank" class="direct-sug-wrap">' +
                    l +
                    h +
                    f +
                    "</a>";
                } else
                  v =
                    '<div class="direct-sug-wrap" data-flag="' +
                    e.flag +
                    '">' +
                    l +
                    h +
                    f +
                    "</div>";
              } else v = t(u, s.queryValue) + i(e.value, e.flag);
            }
          }
          function i(e, t) {
            if (e.tag_style_list) {
              var s = "";
              return (
                e.tag_style_list.forEach(function (e) {
                  1 === e.tag_type
                    ? (s += o(e, t))
                    : 2 === e.tag_type && (s += c(e, t));
                }),
                s
              );
            }
            if (e.tag_style) {
              var a = e.tag_style.tag_type;
              if (1 === a) return o(e.tag_style, t);
              if (2 === a) return c(e.tag_style, t);
            }
            if (e.tag) {
              var r =
                "sug-tag-comm sug-new-tag sug-new-tag-" +
                (e.tagColor || "grey");
              return '<span class="' + r + '">' + e.tag + "</span>" || "";
            }
            return "";
          }
          function o(e, t) {
            var s =
                "border-color: " +
                u(e.border_color) +
                ";background-color:" +
                u(e.bg_color) +
                ";color:" +
                u(e.text_color),
              a = ' data-flag="' + t + '"';
            return (
              '<span class="sug-tag-comm sug-tag-text" style="' +
                s +
                '"' +
                a +
                ">" +
                e.text +
                "</span>" || ""
            );
          }
          function u(e) {
            if (!e) return "";
            var t = parseInt("0x" + e.slice(1, 3), 16) / 255,
              s = parseInt("0x" + e.slice(3, 5), 16),
              a = parseInt("0x" + e.slice(5, 7), 16),
              r = parseInt("0x" + e.slice(7, 9), 16);
            return "rgba(" + [s, a, r, t].join(",") + ");";
          }
          function c(e, t) {
            var s = e.image;
            return s
              ? '<img class="sug-tag-comm sug-tag-img" src="' +
                  s +
                  '" data-flag="' +
                  t +
                  '">'
              : "";
          }
          var l = e.v,
            d = e.type,
            g = e.otherData,
            m = e.s,
            h = e.info,
            p = {};
          p.value = l;
          var v = l && t(l, s.queryValue),
            f = !1;
          switch (
            (s.isSugSample &&
              ((f = !0),
              ("search_sug_1" === s.currentSugSample ||
                "search_sug_base" === s.currentSugSample) &&
                (f = !1)),
            d)
          ) {
            case "direct":
              (p.html =
                "-" === g.iconurl
                  ? '<p link="' +
                    g.siteurl +
                    '">' +
                    g.site +
                    "<span>" +
                    g.showurl +
                    "</span><i>官网</i></p>"
                  : '<p link="' +
                    g.siteurl +
                    '"><img src="' +
                    g.iconurl +
                    '"/>' +
                    g.site +
                    "<span>" +
                    g.showurl +
                    "</span></p>"),
                (p.type = "direct");
              break;
            case "ala":
              (p.html = "<h3>" + v + "</h3><p>" + g.word + "</p>"),
                (p.type = "ala"),
                (p.alaid = g.id);
              break;
            case "store":
              2 === g["new"] &&
                (v += '<span class="bdsug-newicon">&nbsp;[<i>企业</i>]</span>'),
                (p.html = "<span>" + v + "</span>"),
                s.isSugSample &&
                  f &&
                  (p.html =
                    '<i class="c-icon sug-history-icon">&#xe6a8;</i>' + v),
                (s.bds.comm.username || "|" !== g) &&
                  (p.html +=
                    '<u class="bdsug-store-del ' +
                    ("|" === g ? "bdsug-store-del-cloud" : "") +
                    '" title="如您不需要此搜索历史提示，&#13;可在右上角搜索设置中关闭">删除</u>'),
                (p.type = "store"),
                (p.pinyin = g),
                (p.s = m);
              break;
            case "direct_new":
              n(h), (p.html = v);
              break;
            default:
              g &&
                g["new"] &&
                2 === g["new"] &&
                (v += '<span class="bdsug-newicon">&nbsp;[<i>企业</i>]</span>'),
                "sug" === d &&
                  s.isSugSample &&
                  f &&
                  (v = '<i class="c-icon sug-search-icon">&#xe6a7;</i>' + v),
                (p.html = v);
          }
          if (!s.withoutZhixin && s.zhixinsug.length > 0)
            for (var S = 0; S < s.zhixinsug.length; S++)
              if (p.value === s.zhixinsug[S].value && "ala" !== p.type) {
                (p.zxtype = s.zhixinsug[S].type),
                  (p.zxurl = s.zhixinsug[S].url);
                var _ = '<i class="bdsug-arrow"></i>';
                p.html.split(_).length <= 1 && (p.html += _);
              }
          return p;
        }
        var s = this,
          a = [],
          r = 0,
          n = 0;
        if (((s.rsv_sug = 0), s.dataHot.length > 0 && "" === s.value)) {
          for (
            var i = 0;
            i < s.dataHot.length &&
            (r++,
            a.push(
              t({
                v: s.dataHot[i].value,
                type: "hot",
                otherData: s.dataHot[i].otherData,
              })
            ),
            !(r >= 8));
            i++
          );
          return a;
        }
        if (
          (s.dataDirect.length > 0 &&
            (a.push(
              t({
                v: s.dataDirect[0].value,
                type: "direct",
                otherData: s.dataDirect[0].otherData,
              })
            ),
            ns_c({
              pj_name: "zhida_sug",
              zhida_prefix: encodeURIComponent(s.inputValue),
              zhida_query: encodeURIComponent(s.dataDirect[0].value),
              zhida_chufa: encodeURIComponent(s.dataDirect[0].otherData.hit_q),
              zhida_bp: s.bds.comm.ishome ? 0 : 1,
            })),
          s.dataAladdin.length > 0)
        )
          for (
            var i = 0;
            i < s.dataAladdin.length &&
            (a.push(
              t({
                v: s.dataAladdin[0].value,
                type: "ala",
                otherData: s.dataAladdin[0].otherData,
              })
            ),
            r++,
            !(r >= 1));
            i++
          );
        if (s.dataStored.length > 0)
          for (var i = 0; i < s.dataStored.length; i++) {
            for (var o = !1, u = 0; u < a.length; u++)
              "direct" !== a[u].type &&
                s.dataStored[i].value === a[u].value &&
                (o = !0);
            var c =
              -1 === s.resultSugSamples.indexOf(s.currentSugSample) ||
              "" === s.inputValue;
            if (
              (!o &&
                c &&
                "" === s.inputValue &&
                (a.push(
                  t({
                    v: s.dataStored[i].value,
                    type: "store",
                    otherData: s.dataStored[i].pinyin,
                    s: s.dataStored[i].s || 0,
                  })
                ),
                r++,
                0 === n && "|" === s.dataStored[i].pinyin && (n = 3)),
              s.rsv_sug++,
              "" === s.value && r >= 9)
            )
              break;
            if ("" !== s.value && r >= 2) break;
          }
        var l = [];
        if (e.g && e.g.length > 0) {
          for (var i = 0; i < e.g.length; i++)
            if ("sug" === e.g[i].type || "direct_new" === e.g[i].type) {
              for (var o = !1, u = 0; u < a.length; u++)
                "direct" !== a[u].type && e.g[i].q === a[u].value && (o = !0);
              if (!o) {
                var d = {};
                if (e.g[i].info && e.g[i].info.vec_str_raw[0])
                  try {
                    d = JSON.parse(e.g[i].info.vec_str_raw[0]);
                  } catch (g) {
                    console.error(g);
                  }
                var m = e.g[i].q;
                "direct_new" === e.g[i].type &&
                  d &&
                  (m =
                    d.value.query ||
                    (d.value.name && d.value.name[0].text) ||
                    ""),
                  ("sug" === e.g[i].type || s.isShowDirectSug(d)) &&
                    (l.push(
                      t({
                        v: m,
                        type: e.g[i].type,
                        otherData: e.g[i].st,
                        info: d,
                      })
                    ),
                    (n = n ? n : 1));
              }
            }
          a =
            "" === s.value && l.length
              ? s.bds.comm.supportis
                ? l.slice(0, Math.max(4 - a.length, 2)).concat(a)
                : l.slice(0, Math.max(10 - a.length, 5)).concat(a)
              : a.concat(l);
        }
        switch (n) {
          case 1:
            s.rsv_sug7[0] = 1;
            break;
          case 3:
            s.rsv_sug7[2] = 1;
        }
        return a;
      },
      isShowDirectSug: function (e) {
        if ("1020" === e.type && e.value) {
          var t = (e.value.name[0] && e.value.name[0].text) || "",
            s = e.value.img,
            a = e.value.brief || "",
            r = e.value.info || "";
          if (!t) return !1;
          if (s && !a && !r) return !1;
        }
        return !0;
      },
      sendSpecialSugClickLog: function (e, t, s) {
        c({
          rsv_ct: 10,
          rsv_cst: e,
          rsv_clk_extra: JSON.stringify({ flag: t, index: s }),
        });
      },
      render: function (e) {
        var t = this;
        if (((t.is_selecting = !1), !t.sugcontainer)) {
          t.sugcontainer = document.createElement("DIV");
          var s = t.searchNewStyle,
            a = "";
          t.isSugSample3 && (a = " bdsug-sample3"),
            (t.sugcontainer.className = s
              ? "sam-bdsug bdsug bdsug-new new-pmd" + a
              : "bdsug bdsug-new new-pmd" + a),
            $(t.sugcontainer)
              .delegate("li", "mouseenter", function () {
                t.stopCircle();
                var e = $(this).data("key");
                t.blurSug($(t.sugcontainer).find("li")),
                  t.focusSug(this, e),
                  (t.index = $(t.sugcontainer).find("li").index($(this))),
                  (t.hoverSug = e);
              })
              .delegate("li", "mouseleave", function () {
                t.startCircle(), $(this).removeClass("bdsug-s");
              })
              .delegate("li", "click", function () {
                t.index = $(t.sugcontainer).find("li").index($(this));
                var e = $(this).find("a");
                if (e.length > 0)
                  return void t.sendSpecialSugClickLog(
                    14,
                    $(e).data("flag"),
                    t.index
                  );
                var s = $(this).find(".direct-sug-wrap");
                s.length > 0 &&
                  t.sendSpecialSugClickLog(15, $(s).data("flag"), t.index);
                var a = $(this).find(".sug-tag-comm");
                !e.length &&
                  !s.length &&
                  a.length > 0 &&
                  t.sendSpecialSugClickLog(16, $(a).data("flag"), t.index),
                  t.startCircle();
                var r = $(this).data("key"),
                  n = $(".kw-placeholder").hasClass("placeholders-hidden");
                !n && $(".kw-placeholder").addClass("placeholders-hidden"),
                  (t.directSugSelected = $(this).hasClass("bdsug-direct")
                    ? !0
                    : !1),
                  $(this).hasClass("bdsug-hot") && t.addStat("rsv_sug8", "hot"),
                  (t.sugValue = t.showValue = t.value = t.ipt.value = r),
                  t.ipt.value ? t.quickdelete._show() : t.quickdelete._hide(),
                  t.hideSug(),
                  t.bds &&
                    t.bds.comm &&
                    0 === t.bds.comm.ishome &&
                    t.addStat(
                      "oq",
                      t.bds.comm.confirmQuery
                        ? xss(t.bds.comm.confirmQuery)
                        : ""
                    ),
                  t.bds &&
                    t.bds.comm &&
                    t.bds.comm.confirmQid &&
                    t.addStat("rsv_pq", t.bds.comm.confirmQid),
                  t.addStat("sug", xss(r)),
                  t.addStat("rsv_sug2", 1),
                  t.formSubmit();
              }),
            $(t.sugcontainer).click(function (e) {
              e.stopPropagation();
            });
        }
        if (e.length > 0) {
          var r = document.createElement("UL");
          bds.comm.ishome || r.setAttribute("id", "normalSugSearchUl");
          for (
            var n =
                t.bds && t.bds.util && t.bds.util.domain
                  ? t.bds.util.domain.get("http://sclick.baidu.com")
                  : "http://sclick.baidu.com",
              i = 0;
            i < e.length;
            i++
          ) {
            var o = document.createElement("LI");
            if (
              (e[i].isDouble && $(o).css("line-height", "normal"),
              (o.innerHTML = e[i].html),
              e[i].zxtype && e[i].zxurl)
            ) {
              var u = e[i].value,
                l = e[i].zxtype,
                d = e[i].zxurl,
                g =
                  t.zhixindata[u] &&
                  t.zhixindata[u].responseJSON &&
                  0 === t.zhixindata[u].responseJSON.status &&
                  t.zhixindata[u].responseJSON.data &&
                  t.zhixindata[u].responseJSON.data.length > 0;
              g ||
                (t.zhixindata[u] = $.ajax({
                  dataType: "jsonp",
                  async: !0,
                  url: d,
                  jsonp: "cb",
                })),
                $(o)
                  .addClass("bdsug-zx")
                  .on("focused", function () {
                    var e = $(this).data("key"),
                      s =
                        t.zhixindata[e] &&
                        t.zhixindata[e].responseJSON &&
                        0 === t.zhixindata[e].responseJSON.status &&
                        t.zhixindata[e].responseJSON.data &&
                        t.zhixindata[e].responseJSON.data.length > 0,
                      a = $(t.sugcontainer).find(".bdsug-box")[0];
                    if (s && a && t.bds.se.sugzx && t.bds.se.sugzx[l]) {
                      var r = t.bds.se.sugzx[l](
                        t.zhixindata[e].responseJSON.data,
                        e,
                        t.outInterface(),
                        t
                      );
                      r instanceof jQuery &&
                        ($(t.sugcontainer).addClass("bdsug-showzx"),
                        $(a).empty().append(r),
                        $(t.sugcontainer).height() <
                          $(t.sugcontainer).find(".bdsug-box").height() &&
                          $(t.sugcontainer).css({
                            height: $(t.sugcontainer)
                              .find(".bdsug-box")
                              .height(),
                          }));
                    }
                  })
                  .on("blured", function () {
                    $(t.sugcontainer).removeClass("bdsug-showzx"),
                      $(t.sugcontainer).css({ height: "auto" });
                  });
            }
            t.setSug(o, e[i].value, e[i].type), r.appendChild(o);
          }
          t.form
            ? $(t.sugcontainer).insertBefore(t.form.firstChild)
            : $(t.ipt).after(t.sugcontainer);
          var m = document.createElement("div");
          m.appendChild(r),
            (t.sugcontainer.innerHTML = m && m.innerHTML),
            $(t.sugcontainer).removeClass("bdsug-showzx"),
            $(t.sugcontainer).css({ height: "auto" });
          var h = $(t.sugcontainer).find("ul li");
          t.withoutZhixin ||
            ($(t.sugcontainer).addClass("bdsug-showarrow"),
            $(t.sugcontainer).append($('<div class="bdsug-box"></div>')),
            $(t.form).find(".bdsug-tmp").length ||
              $(t.form).append($('<div class="bdsug-tmp"></div>')),
            $(t.sugcontainer)
              .find(".bdsug-box")
              .on("mouseenter", function () {
                $(t.sugcontainer).addClass("bdsug-showzx"),
                  $(h[t.index]).addClass("bdsug-s");
              })
              .on("mouseleave", function () {
                $(t.sugcontainer).removeClass("bdsug-showzx"),
                  $(h[t.index]).removeClass("bdsug-s"),
                  $(t.sugcontainer).css({ height: "auto" });
              })
              .on("click", function (e) {
                e.stopPropagation();
              })),
            $(t.form).find(".bdsug-tmp").empty();
          var p = $("<li>").appendTo(
              $("<div>")
                .addClass("bdsug-showzx")
                .appendTo($(t.form).find(".bdsug-tmp"))
            ),
            v = $("<div>")
              .css({
                position: "absolute",
                display: "inline-block",
                top: "-10000px",
                left: "-10000px",
              })
              .appendTo($(t.form).find(".bdsug-tmp"));
          $.each(h, function (e, s) {
            v.html($(s).html());
            var a = 28;
            v.width() >
              p.width() - $(t.sugcontainer).find(".bdsug-arrow").width() - a &&
              $(s).addClass("bdsug-overflow c-line-clamp1");
          });
          var f = "0";
          if (
            (0 === t.bds.comm.ishome
              ? (f = "0")
              : 1 === t.bds.comm.ishome &&
                window.s_domain &&
                "home" === window.s_domain.base
              ? (f = "2")
              : 1 === t.bds.comm.ishome && (f = "1"),
            "" === t.value && e.length)
          ) {
            for (var S = 0, i = 0; i < e.length; i++)
              e[i].type && "store" === e[i].type && S++;
            if (
              (ns_c({
                pj_name: "es_sug",
                es_sug_hot: t.dataHot.length,
                es_sug_num: e.length,
                eb_sug_num: e.length - S,
                es_sug_bp: f + "_" + (t.bds.comm.supportis ? 1 : 0),
              }),
              $(".bdsug-feedback-wrap").length > 0 &&
                $(".bdsug-feedback-wrap").remove(),
              (t.dataStored.length && t.dataStored.length > 3) ||
                (t.dataHot.length && t.dataHot.length > 3))
            ) {
              var s = t.searchNewStyle,
                _ = s ? 15 : 12,
                b = s ? 0 : -5,
                y = s ? "margin-bottom: 1px;" : "",
                w = "",
                k =
                  '<span class="setup_storeSug" style="margin-right:' +
                  _ +
                  'px; text-decoration:none; cursor:pointer;font-size: 13px; color: #9195a3">关闭历史</span>';
              t.hisSwitch === !1 && (k = ""),
                t.bds.comm.username
                  ? ((w =
                      '<div style="text-align:right; background:none; height: 25px; line-height: 15px; border-radius: 0 0 10px 10px;padding-bottom: 2px;margin-top: ' +
                      b +
                      "px;" +
                      y +
                      '">' +
                      k +
                      '<span class="del_all_storeSug" style="margin-right:' +
                      _ +
                      'px; text-decoration:none; cursor:pointer;font-size: 13px; color: #9195a3">删除历史</span><a class="more_storeSug" href="http://i.baidu.com/my/history?from=pssug"target="_blank" style="color:#666; text-decoration:none;margin-right:' +
                      _ +
                      'px; font-size: 13px; color: #9195a3">更多历史</a></div>'),
                    $(t.sugcontainer).append(w))
                  : ((w =
                      '<div style="text-align:right; background:none; height: 25px; line-height: 15px; border-radius: 0 0 10px 10px;padding-bottom: 2px;margin-top: ' +
                      b +
                      "px;" +
                      y +
                      '"><span class="setup_storeSug" style="margin-right:' +
                      _ +
                      'px; text-decoration:none; cursor:pointer;font-size: 13px; color: #9195a3">关闭历史</span></div>'),
                    $(t.sugcontainer).append(w)),
                $(t.sugcontainer)
                  .find(".del_all_storeSug")
                  .click(function () {
                    if (
                      (t.isSugSample && c({ rsv_ct: 10, rsv_cst: 12 }),
                      t.dataStored[0] &&
                        t.dataStored[0].pinyin &&
                        "|" === t.dataStored[0].pinyin)
                    ) {
                      var e =
                        "https://www.baidu.com/recsys/hisproxy/data/usrclear";
                      $.ajax({
                        type: "POST",
                        dataType: "json",
                        scriptCharset: "utf-8",
                        timeout: 6e3,
                        url: e,
                        xhrFields: { withCredentials: !0 },
                        crossDomain: !0,
                        success: function () {},
                      });
                    }
                    (t.storearr = []), t.setStore(), t.hideSug();
                    var s = (window["BD_PS_C" + new Date().getTime()] =
                      new Image());
                    s.src =
                      n +
                      "/w.gif?q=delall&fm=beha&rsv_sug=delall&rsv_sid=" +
                      t.bds.comm.sid +
                      "&t=" +
                      new Date().getTime() +
                      "&rsv_sug9=es_" +
                      f +
                      "_" +
                      (t.bds.comm.supportis ? 1 : 0) +
                      "&path=http://www.baidu.com";
                  }),
                $(t.sugcontainer)
                  .find(".more_storeSug")
                  .click(function () {
                    ns_c({ pj_name: "hs_sug_more" });
                  }),
                $(t.sugcontainer)
                  .find(".close_hotSug")
                  .click(function () {
                    t.hideSug(), ns_c({ pj_name: "hot_sug_close" });
                  }),
                $(t.sugcontainer)
                  .find(".setup_storeSug")
                  .click(function () {
                    t.bds.event.trigger("bd.se.loadpanel", {
                      tab: "general",
                      tipsConfig: {
                        content:
                          t.bds && t.bds.comm && t.bds.comm.username
                            ? "关闭该账号下所有设备的搜索历史"
                            : "该选项可以关闭您的历史记录",
                        wrapper: "#se-setting-5",
                      },
                    }),
                      t.hideSug(),
                      ns_c({ pj_name: "hs_sug_setup" });
                  });
            }
          }
          $.each(h, function (s, a) {
            var r = s;
            e[s] &&
              "store" === e[s].type &&
              $(a)
                .find("u")
                .click(function (s) {
                  if (
                    (s.stopPropagation(),
                    $(a).remove(),
                    t.bds && t.bds.comm && t.bds.comm.username)
                  ) {
                    var i = $(this).parent().attr("data-key");
                    t.requestDelHis(i);
                  }
                  if (e[r].pinyin && "|" === e[r].pinyin) {
                    t.dataCached = {};
                    var o = !1;
                    $.each(t.storearr, function (e) {
                      encodeURIComponent(t.dataArray[r].value) ===
                        t.storearr[e].q && (o = e);
                    }),
                      o !== !1 && (t.storearr.splice(o, 1), t.setStore());
                  } else {
                    var o = !1;
                    $.each(t.storearr, function (e) {
                      t.dataArray[r].pinyin ===
                        decodeURIComponent(t.storearr[e].p) && (o = e);
                    }),
                      o !== !1 && (t.storearr.splice(o, 1), t.setStore());
                  }
                  var u = (window["BD_PS_C" + new Date().getTime()] =
                    new Image());
                  u.src =
                    n +
                    "/w.gif?q=" +
                    encodeURIComponent(e[r].value) +
                    "&fm=beha&rsv_sug=del&rsv_sid=" +
                    t.bds.comm.sid +
                    "&t=" +
                    new Date().getTime() +
                    ("" === t.value
                      ? "&rsv_sug9=es_" +
                        f +
                        "_" +
                        (t.bds.comm.supportis ? 1 : 0)
                      : "") +
                    "&path=http://www.baidu.com";
                });
          });
          var x =
            !!window.ActiveXObject &&
            (!document.documentMode || document.documentMode <= 9);
          x ||
            (0 !== $(".bdsug-feedback-wrap").length &&
              $(".bdsug-feedback-wrap").remove(),
            "" !== t.value &&
              t.useFeedback !== !1 &&
              ($(t.sugcontainer).append(
                '<div class="bdsug-feedback-wrap"><span class="bdsug-feedback">反馈</span></div>'
              ),
              $(".bdsug-feedback-wrap").on("click", function () {
                var e = t.dataArray;
                t.dataArray.forEach(function (t, s) {
                  e[s] = t.value;
                }),
                  t.isSugSample && c({ rsv_ct: 10, rsv_cst: 13 });
                var s = t.requestDefaultData.g_mot || [];
                ("search_sug_2" === t.currentSugSample ||
                  "search_sug_5" === t.currentSugSample ||
                  (t.isSugSample3 && 0 === t.currentSearchStatus)) &&
                  s.length >= 3 &&
                  s.forEach(function (t) {
                    e.push(t.q);
                  }),
                  t.bds.se.ShortCut.initSugBar(e),
                  t.hideSug();
              }))),
            $(t.ipt).trigger("render", [t]),
            t.renderCallback(),
            t.showSug(),
            $(t.ipt).trigger("showSug", [t]);
          var C = [
            "search_sug_2",
            "search_sug_3-1",
            "search_sug_3-2",
            "search_sug_4-1",
            "search_sug_4-2",
            "search_sug_5",
          ];
          -1 !== C.indexOf(t.currentSugSample) &&
          t.showRightContent &&
          (t.backFrame ||
            ("search_sug_5" === t.currentSugSample && t.backDelete))
            ? $(".wrapper_new #form .bdsug-new").addClass("search-sug-short")
            : $(".wrapper_new #form .bdsug-new").removeClass(
                "search-sug-short"
              );
        } else t.renderCallback(), t.hideSug();
      },
      renderSugContainer: function () {
        var e = this;
        if (!e.sugcontainer) {
          e.sugcontainer = document.createElement("DIV");
          var t = e.searchNewStyle;
          e.sugcontainer.className = t
            ? "sam-bdsug bdsug bdsug-new new-pmd bdsug-sample3"
            : "bdsug bdsug-new new-pmd bdsug-sample3";
        }
        e.form
          ? $(e.sugcontainer).insertBefore(e.form.firstChild)
          : $(e.ipt).after(e.sugcontainer);
      },
      escapeHTML: function (e) {
        return (
          (e = e.replace(/&/g, "&amp;")),
          (e = e.replace(/</g, "&lt;")),
          (e = e.replace(/>/g, "&gt;"))
        );
      },
      renderSearchHistory: function (e, t, s) {
        var a = this;
        if (
          (a.renderSugContainer(), e && e.length > 0 && a.dataArray.length > 0)
        ) {
          var r = e || [];
          $("#sugSearchHisUl")[0] && $("#sugSearchHisUl")[0].remove(),
            $("#rightSugSearchHisUl")[0] &&
              $("#rightSugSearchHisUl")[0].remove(),
            a.isSugSample3 &&
              ($("#normalSugSearchUl")[0] &&
                $("#normalSugSearchUl")[0].remove(),
              $(".bdsug-feedback-wrap")[0] &&
                $(".bdsug-feedback-wrap")[0].remove());
          var n = document.createElement("ul");
          a.sugcontainer.appendChild(n);
          var i =
              "search_sug_4-1" === a.currentSugSample ||
              "search_sug_4-2" === a.currentSugSample,
            o = i ? "rightSugSearchHisUl" : "sugSearchHisUl";
          n.setAttribute("id", o);
          var u = "#" + o;
          if (i && t) {
            u = "#rightSugSearchHisUl";
            var l = document.createElement("div");
            l.setAttribute("class", "search-history-title"),
              (l.innerHTML = a.escapeHTML(t)),
              $(u)[0] && $(u)[0].append(l);
          }
          var d =
            '<u class="bdsug-store-del bdsug-store-del-cloud" title="如您不需要此搜索历史提示，&#13;可在右上角搜索设置中关闭">删除</u>';
          "0" === bds.comm.isUserLogin && (d = "");
          for (var g = 0; g < r.slice(0, 10).length; g++) {
            var m = document.createElement("li");
            m.setAttribute("class", "c-line-clamp1"),
              (m.innerHTML =
                '<i class="c-icon sug-history-icon">&#xe6a8;</i>' +
                a.escapeHTML(r[g].q) +
                d),
              a.setSug(m, r[g].q, r[g].type),
              $(a.sugcontainer)
                .delegate("li", "mouseover", function () {
                  $(this).addClass("bdsug-s");
                })
                .delegate("li", "mouseout", function () {
                  $(this).removeClass("bdsug-s");
                })
                .delegate("li", "click", function () {
                  a.startCircle();
                  var e = $(this).data("key");
                  (a.sugValue = a.showValue = a.value = a.ipt.value = e),
                    (a.index = $(a.sugcontainer).find("li").index($(this))),
                    a.ipt.value ? a.quickdelete._show() : a.quickdelete._hide(),
                    a.hideSug(),
                    a.formSubmit();
                }),
              n.appendChild(m);
          }
          if (i) {
            var h = $("#rightSugSearchHisUl").height(),
              p = $("#normalSugSearchUl").height();
            $("#normalSugSearchUl").height(h > p ? h : p);
          }
          $(u + " li").each(function (e) {
            var t = a.backFrame;
            $(this).click(function () {
              c({
                rsv_ct: 10,
                rsv_cst: 6,
                rsv_clk_extra: JSON.stringify({
                  pos: s,
                  index: e,
                  status: a.currentSearchStatus,
                  test: a.currentSugSample,
                  backFrame: t,
                }),
              });
            });
          }),
            $(u + " li u").each(function (e, t) {
              $(t).on("click", function (e) {
                e.stopPropagation(),
                  1 === $(u + " li").length &&
                    ($(".search-history-title")[0] &&
                      $(".search-history-title")[0].remove(),
                    ("search_sug_3-1" === a.currentSugSample ||
                      "search_sug_3-2" === a.currentSugSample) &&
                      a.setLeftGussStyle());
                var t = $(this).parent().attr("data-key"),
                  s = [];
                try {
                  var r = localStorage.getItem("BDSUGSTORED");
                  s = JSON.parse(r);
                } catch (n) {
                  console.error(n);
                }
                s = s.filter(function (e) {
                  return decodeURIComponent(e.q) !== t;
                });
                try {
                  localStorage.setItem("BDSUGSTORED", JSON.stringify(s));
                } catch (n) {
                  console.error(n);
                }
                a.requestDelHis(t),
                  $(this.parentNode).remove(),
                  0 === $("#rightSugSearchHisUl li").length &&
                    ($("#normalSugSearchUl").width("auto"),
                    $("#normalSugSearchUl li").width("auto"));
              });
            }),
            a.renderCallback(),
            a.showSug();
        }
      },
      requestDelHis: function (e) {
        var t = "https://www.baidu.com/recsys/hisproxy/data/usrdelete";
        $.ajax({
          type: "POST",
          scriptCharset: "utf-8",
          dataType: "json",
          timeout: 6e3,
          url: t,
          data: { items: JSON.stringify([{ query: e, ts: "" }]) },
          xhrFields: { withCredentials: !0 },
          crossDomain: !0,
          success: function () {},
        });
      },
      setLeftGussStyle: function () {
        $("#sugSearchGuessUl").attr("id", "leftSugSearchHisUl"),
          $("bdsug bdsug-new new-pmd").css("overflow", "hidden"),
          $(".wrapper_new #form .bdsug-new").css("overflow", "hidden");
      },
      renderRecomend: function (e, t, s) {
        var a = this;
        a.renderSugContainer();
        var r = e || [];
        if (
          ($("#sugSearchGuessUl")[0] && $("#sugSearchGuessUl")[0].remove(),
          $("#leftSugSearchHisUl")[0] && $("#leftSugSearchHisUl")[0].remove(),
          r.length >= 3)
        ) {
          var n = document.createElement("ul"),
            i = a.requestDefaultData.g_mot;
          i && 0 === i.length
            ? (n.setAttribute("id", "leftSugSearchHisUl"), a.setLeftGussStyle())
            : n.setAttribute("id", "sugSearchGuessUl"),
            a.sugcontainer.appendChild(n);
          var o = document.createElement("div");
          o.setAttribute("class", "search-recommend-title"),
            (o.innerHTML = a.escapeHTML(t)),
            $("#sugSearchGuessUl")[0] && $("#sugSearchGuessUl")[0].append(o);
          for (var u = 0; u < r.slice(0, 7).length; u++) {
            var l = document.createElement("li");
            l.setAttribute("class", "c-line-clamp1"),
              (l.innerHTML =
                '<i class="c-icon sug-search-icon">&#xe6a7;</i>' +
                a.escapeHTML(r[u].q)),
              a.setSug(l, r[u].q, r[u].type),
              $(a.sugcontainer)
                .delegate("li", "mouseenter", function () {
                  $(this).addClass("bdsug-s");
                })
                .delegate("li", "mouseleave", function () {
                  $(this).removeClass("bdsug-s");
                })
                .delegate("li", "click", function () {
                  a.startCircle();
                  var e = $(this).data("key");
                  (a.sugValue = a.showValue = a.value = a.ipt.value = e),
                    (a.index = $(a.sugcontainer).find("li").index($(this))),
                    a.ipt.value ? a.quickdelete._show() : a.quickdelete._hide(),
                    a.hideSug(),
                    a.formSubmit();
                }),
              n.appendChild(l);
          }
          var d = $(
            $("#sugSearchGuessUl li").length
              ? "#sugSearchGuessUl li"
              : "#leftSugSearchHisUl li"
          );
          d.each(function (e) {
            var t = a.backFrame ? 1 : 0;
            $(this).click(function () {
              c({
                rsv_ct: 10,
                rsv_cst: 3,
                rsv_clk_extra: JSON.stringify({
                  index: e,
                  pos: s,
                  status: a.currentSearchStatus,
                  test: a.currentSugSample,
                  backFrame: t,
                }),
              });
            });
          });
          var g = $("#sugSearchGuessUl").height(),
            m = $("#normalSugSearchUl").height();
          $("#normalSugSearchUl").height(g > m ? g : m),
            a.renderCallback(),
            a.showSug();
        }
      },
      renderBottomContent: function (e) {
        var t = this,
          e = t.requestDefaultData;
        $(".search-sug-bottom-tools")[0] &&
          $(".search-sug-bottom-tools")[0].remove();
        var s = '<span class="setup_storeSug">关闭历史</span>',
          a =
            '<span class="del_storeSug">删除历史</span><a class="more_storeSug" href="http://i.baidu.com/my/history?from=pssug"target="_blank" class="more_storeSug">更多历史</a>',
          r = '<span class="bdsug-feedback">反馈</span>';
        if (
          (((e.g && e.g.length < 4) || !t.showsugstore) && ((s = ""), (a = "")),
          +bds.comm.isUserLogin || (a = ""),
          !t.showsugstore)
        ) {
          $("#sugSearchGuessUl").attr("id", "leftSugSearchHisUl");
          var n = $("#sugSearchHisUl").height();
          $("#sugSearchHisUl li").each(function () {
            this.remove();
          }),
            $("#leftSugSearchHisUl .search-recommend-title").css("margin", 0),
            $("#sugSearchHisUl").height(n + 28);
        }
        e.g_mot && e.g_mot.length < 3 && (r = "");
        var i = $("#sugSearchGuessUl").height();
        if (0 === t.currentSearchStatus) {
          var o = $("#normalSugSearchUl").height();
          $("#normalSugSearchUl").height(o > i ? o : i);
        } else if (1 === t.currentSearchStatus) {
          var u =
            t.isSugSample3 && !t.showsugstore
              ? $("#leftSugSearchHisUl").height()
              : $("#sugSearchHisUl").height();
          t.isSugSample3 &&
            !t.showsugstore &&
            (i = $("#sugSearchHisUl").height()),
            $("#sugSearchHisUl").height(u > i ? u : i);
        }
        var l = '<div class="search-sug-bottom-tools">' + s + a + r + "</div>";
        $(t.sugcontainer).append(l),
          $(t.sugcontainer)
            .find(".del_storeSug")
            .click(function () {
              if (
                (c({ rsv_ct: 10, rsv_cst: 12 }),
                (t.aa = !0),
                t.dataStored[0] &&
                  t.dataStored[0].pinyin &&
                  "|" === t.dataStored[0].pinyin)
              ) {
                var e = "https://www.baidu.com/recsys/hisproxy/data/usrclear";
                $.ajax({
                  type: "POST",
                  dataType: "json",
                  scriptCharset: "utf-8",
                  timeout: 6e3,
                  url: e,
                  xhrFields: { withCredentials: !0 },
                  crossDomain: !0,
                  success: function () {},
                });
              }
              t.storearr = [];
              try {
                localStorage.setItem("BDSUGSTORED", "");
              } catch (s) {
                console.error(s);
              }
              t.showSug(),
                $("#sugSearchHisUl li").each(function () {
                  $(this).remove();
                }),
                $("#sugSearchGuessUl").attr("id", "leftSugSearchHisUl");
              var a = "0";
              0 === t.bds.comm.ishome
                ? (a = "0")
                : 1 === t.bds.comm.ishome &&
                  window.s_domain &&
                  "home" === window.s_domain.base
                ? (a = "2")
                : 1 === t.bds.comm.ishome && (a = "1");
              var r = (window["BD_PS_C" + new Date().getTime()] = new Image()),
                n =
                  t.bds && t.bds.util && t.bds.util.domain
                    ? t.bds.util.domain.get("http://sclick.baidu.com")
                    : "http://sclick.baidu.com";
              r.src =
                n +
                "/w.gif?q=delall&fm=beha&rsv_sug=delall&rsv_sid=" +
                t.bds.comm.sid +
                "&t=" +
                new Date().getTime() +
                "&rsv_sug9=es_" +
                a +
                "_" +
                (t.bds.comm.supportis ? 1 : 0) +
                "&path=http://www.baidu.com";
            }),
          $(t.sugcontainer)
            .find(".more_storeSug")
            .click(function () {
              ns_c({ pj_name: "hs_sug_more" });
            }),
          $(t.sugcontainer)
            .find(".close_hotSug")
            .click(function () {
              t.hideSug(), ns_c({ pj_name: "hot_sug_close" });
            }),
          $(t.sugcontainer)
            .find(".setup_storeSug")
            .click(function () {
              t.bds.event.trigger("bd.se.loadpanel", {
                tab: "general",
                tipsConfig: {
                  content:
                    t.bds && t.bds.comm && t.bds.comm.username
                      ? "关闭该账号下所有设备的搜索历史"
                      : "该选项可以关闭您的历史记录",
                  wrapper: "#se-setting-5",
                },
              }),
                t.hideSug(),
                ns_c({ pj_name: "hs_sug_setup" });
            }),
          $(".bdsug-feedback").on("click", function () {
            c({ rsv_ct: 10, rsv_cst: 13 });
            var s = [],
              a = e.g_mot && e.g_mot.length && e.g_mot;
            a.forEach(function (e) {
              s.push(e.q);
            }),
              t.bds.se.ShortCut.initSugBar(s),
              t.hideSug();
          });
      },
      setAutocomplete: function (e) {
        var t = this;
        $(t.ipt).attr("autocomplete", e);
      },
      setSug: function (e, t, s) {
        $(e).attr("data-key", t), s && $(e).addClass("bdsug-" + s);
      },
      clickIpt: function () {
        var e = this;
        e.bds.comm.query && e.ipt.value && e.bds.comm.query === e.ipt.value
          ? (e.request(e.ipt.value, "2"), (e.backFrame = !0))
          : (e.request(e.ipt.value), (e.backFrame = !1));
      },
      showSug: function () {
        var e = this;
        (e.index = -1),
          (e.ipt.value === e.reqValue ||
            (e.isSugSample3 && 1 === e.currentSearchStatus)) &&
            (e.bds.comm.ishome
              ? $(e.ipt).addClass("new-ipt-focus")
              : $(".s_ipt_wr").addClass("new-ipt-focus"),
            $(e.sugcontainer).show()),
          (e.visible = !0),
          e.rsv_sug1++,
          e.addStat("rsv_sug1", e.rsv_sug1),
          e.addStat("rsv_sug7", e.rsv_sug7.join(""));
      },
      hideSug: function () {
        var e = this;
        (e.is_selecting = !1),
          $(e.ipt).trigger("hide", [e]),
          $(e.ipt).removeClass("new-ipt-focus"),
          $(".s_ipt_wr").removeClass("new-ipt-focus"),
          $(e.sugcontainer).hide(),
          (e.visible = !1),
          e.jqXhr && e.jqXhr.abort(),
          (e.jqXhr = null);
      },
      selectSug: function (e) {
        var t = this,
          s = $(t.sugcontainer).find("li");
        if (
          (t.blurSug(s),
          (t.directSugSelected = -1 !== e && s.eq(e).hasClass("bdsug-direct")),
          -1 !== e)
        ) {
          t.is_selecting = !0;
          var a = $($(s)[e]).data("key");
          t.focusSug(s[e], a),
            (t.sugValue = t.showValue = t.value = t.ipt.value = a),
            t.addStat("sug", a),
            t.bds &&
              t.bds.comm &&
              0 === t.bds.comm.ishome &&
              t.addStat(
                "oq",
                t.bds.comm.confirmQuery ? xss(t.bds.comm.confirmQuery) : ""
              ),
            t.bds &&
              t.bds.comm &&
              t.bds.comm.confirmQid &&
              t.addStat("rsv_pq", t.bds.comm.confirmQid),
            t.addStat("rsv_n", 1);
        } else
          (t.is_selecting = !1),
            t.selectCallback(t.inputValue),
            (t.showValue = t.value = t.ipt.value = t.inputValue),
            (t.sugValue = ""),
            t.removeStat("sug"),
            t.removeStat("rsv_n");
        (t.stopRefresh = t.inputValue || 1 !== t.bds.comm.ishome ? !1 : !0),
          $(t.ipt).trigger("selectSug", [t, e, a]);
      },
      blurSug: function (e) {
        var t = this;
        (t.backFrame = !1), $(e).removeClass("bdsug-s"), $(e).trigger("blured");
      },
      focusSug: function (e, t) {
        var s = this;
        $(e).addClass("bdsug-s"), $(e).trigger("focused"), s.selectCallback(t);
      },
      pressUp: function (e) {
        var t = this,
          e = $(t.sugcontainer).find("li").length;
        t.index--, t.index < -1 && (t.index = e - 1), t.selectSug(t.index);
      },
      pressDown: function (e) {
        var t = this,
          e = $(t.sugcontainer).find("li").length;
        t.index++, t.index >= e && (t.index = -1), t.selectSug(t.index);
      },
      addStat: function (e, t) {
        t = encodeURIComponent(t);
        var s = this;
        if ((s.stat || (s.stat = {}), (s.stat[e] = t), !s.withoutStat)) {
          var a = $(s.form).find('input[type="hidden"][name="' + e + '"]');
          a.length
            ? $(a).val(t)
            : $(s.form).append(
                '<input type="hidden" name="' + e + '" value="' + t + '"/>'
              );
        }
      },
      removeStat: function (e) {
        var t = this;
        if (
          !t.withoutStat &&
          ($(t.form)
            .find('input[type="hidden"][name="' + e + '"]')
            .remove(),
          !t.stat)
        )
          try {
            delete t.stat[e];
          } catch (s) {}
      },
      setNewsRsv: function (e) {
        var t = this;
        "sug" === e
          ? t.addStat("rsv_dl", "news_t_sug")
          : "box" === e
          ? t.addStat("rsv_dl", "news_t_sk")
          : "his" === e && t.addStat("rsv_dl", "news_t_his");
      },
      clearStat: function () {
        var e = this;
        e.bds &&
          e.bds.comm &&
          e.bds.comm.isAsync &&
          (e.removeStat("rsp"),
          e.removeStat("prefixsug"),
          1 === e.bds.comm.ishome
            ? e.addStat("rsv_dl", "ib")
            : "news" === e.tn
            ? e.setNewsRsv("box")
            : e.addStat("rsv_dl", "tb")),
          (e.rsv_sug7 = [0, 0, 0]),
          e.removeStat("rsv_n"),
          e.removeStat("rsv_sug"),
          e.removeStat("rsv_sug1"),
          e.removeStat("rsv_sug2"),
          e.removeStat("rsv_sug3"),
          e.removeStat("rsv_sug4"),
          e.removeStat("rsv_sug5"),
          e.removeStat("rsv_sug6"),
          e.removeStat("rsv_sug7"),
          e.removeStat("rsv_sug8"),
          e.removeStat("rsv_sug9"),
          (e.stat = {});
      },
      getRsvStatus: function (e) {
        var t = this,
          s = [],
          a = [-2];
        if (t.rsv_sug) {
          a = [-1];
          for (var r in t.dataArray)
            e === t.dataArray[r].value &&
              ((a = [0, r]), r < t.rsv_sug && (a = [1, r]));
          for (var r = 0; r < t.rsv_sug && t.dataArray[r]; r++)
            s.push(t.dataArray[r].value.length, t.dataArray[r].s);
          a.push(t.index, t.rsv_sug, s.join("."));
        }
        return a.join("_");
      },
      formSubmit: function (e) {
        var t = this,
          s = !0,
          a = t.bds && t.bds.comm && 1 === t.bds.comm.ishome ? "i" : "t",
          r = "t";
        if (
          ("/" === window.location.pathname && (r = "i"),
          $($(t.sugcontainer).find("li")[t.index]).children("a").length &&
            t.isReturnSearch)
        ) {
          var n = $($(t.sugcontainer).find("li")[t.index])
            .children("a")
            .attr("href");
          return window.open(n, "_blank"), void t.hideSug();
        }
        if (
          (t.addStat("rsv_btype", r),
          -1 !== t.index
            ? (t.addStat("f", 3),
              t.addStat("prefixsug", xss(t.inputValue)),
              t.addStat("rsp", t.index),
              "" === t.inputValue
                ? "news" === t.tn
                  ? t.setNewsRsv("his")
                  : t.addStat("rsv_dl", a + "h_" + t.index)
                : "news" === t.tn
                ? t.setNewsRsv("sug")
                : t.addStat("rsv_dl", a + "s_" + t.index),
              t.dataArray[t.index] && t.dataArray[t.index].alaid
                ? t.addStat("rsv_sug5", t.dataArray[t.index].alaid)
                : t.removeStat("rsv_sug5"))
            : t.addStat("f", 8),
          !t.dataArray[t.index] ||
            ("" !== t.inputValue && "|" !== t.dataArray[t.index].pinyin) ||
            "store" !== t.dataArray[t.index].type)
        )
          "" === t.inputValue &&
            t.addStat("rsv_sug9", "eb_" + (t.bds.comm.supportis ? 1 : 0));
        else {
          var i = "0";
          0 === t.bds.comm.ishome
            ? (i = "0")
            : 1 === t.bds.comm.ishome &&
              window.s_domain &&
              "home" === window.s_domain.base
            ? (i = "2")
            : 1 === t.bds.comm.ishome && (i = "1"),
            t.addStat(
              "rsv_sug9",
              "es_" + i + "_" + (t.bds.comm.supportis ? 1 : 0)
            );
        }
        t.sugValue === t.value
          ? (t.removeStat("rsv_n"), t.removeStat("sug"))
          : (t.hoverSug !== t.value || t.sugValue !== t.value) &&
            ("news" === t.tn
              ? t.setNewsRsv("box")
              : t.addStat("rsv_dl", a + "b"),
            t.addStat("f", 8)),
          0 !== t.inputT
            ? (t.addStat("inputT", new Date().getTime() - t.inputT),
              (t.directInputT = new Date().getTime() - t.inputT),
              (t.inputT = 0))
            : t.removeStat("inputT"),
          0 !== t.rsv_sug4 &&
            (t.addStat("rsv_sug4", new Date().getTime() - t.rsv_sug4),
            (t.rsv_sug4 = 0)),
          t.rsv_sug && t.addStat("rsv_sug", t.rsv_sug),
          $($(t.sugcontainer).find("li")[t.index]).hasClass("bdsug-zx")
            ? "all" === $(t.sugcontainer).find(".bdsug-box").attr("bdsug-click")
              ? t.addStat("rsv_sugtp", 1)
              : t.addStat("rsv_sugtp", 0)
            : t.removeStat("rsv_sugtp");
        try {
          !(function () {
            var e = new Date().getTime();
            document.cookie =
              "WWW_ST=" + e + ";expires=" + new Date(e + 1e4).toGMTString();
          })();
        } catch (o) {}
        if (0 === t.index && t.dataDirect.length > 0 && t.directSugSelected) {
          if (
            (window.open(
              $(t.sugcontainer).find(".bdsug-direct p").attr("link"),
              "_blank"
            ),
            t.blankHandle(),
            ns_c({
              pj_name: "zhida_sug",
              sug_prefix: encodeURIComponent(t.inputValue),
              sug_query: encodeURIComponent(t.dataDirect[0].value),
              sug_siteurl: encodeURIComponent(
                t.dataDirect[0].otherData.siteurl
              ),
              sug_chufa: encodeURIComponent(t.dataDirect[0].otherData.hit_q),
              sug_inputT: t.directInputT ? t.directInputT : 0,
              rsv_bp: t.bds.comm.ishome ? 0 : 1,
            }),
            t.bds && t.bds.comm && t.bds.comm.username)
          ) {
            var u =
              t.bds &&
              t.bds.util &&
              t.bds.util.domain &&
              t.bds.util.domain.get(
                "http://api.open.baidu.com/new_hsug/data/write"
              );
            (u =
              u +
              "?query=" +
              encodeURIComponent(t.dataDirect[0].value) +
              "&src=1&f=3&st=" +
              (t.showsugstore ? "1" : "0")),
              $.ajax({
                dataType: "jsonp",
                scriptCharset: "utf-8",
                jsonp: "cb",
                timeout: 6e3,
                url: u,
                success: function () {},
              });
          }
          (t.index = -1), (t.directSugSelected = !1);
        } else if (
          ($.isFunction(t.submission) &&
            ((s = t.submission.call(t.form, e)),
            t.hideSug(),
            (t.inputValue = t.value),
            (t.dataCached = {}),
            t.clearStat()),
          s)
        ) {
          var c = t.ipt.value,
            l = $("#kw").attr("placeholder") || $(".kw-placeholder").text();
          c
            ? ((c = $.limitWd(c)),
              (t.ipt.value = t.value = t.inputValue = t.showValue = c))
            : l &&
              ((c = $.limitWd(l)),
              $(".kw-placeholder").hide(),
              (t.ipt.value = t.value = t.inputValue = t.showValue = c),
              t.addStat("rsv_dq", 1)),
            t.form.submit(),
            t.blankHandle();
        }
        "_blank" !== $(t.form).attr("target") && t.addStat("rsv_bp", 1),
          t.removeStat("rsv_dq");
      },
      blankHandle: function () {
        var e = this;
        /12783|14655|14668/.test(e.bds.comm.sid)
          ? setTimeout(function () {
              (e.ipt.value = e.value = e.inputValue = e.showValue = ""),
                (navigator && navigator.userAgent
                  ? navigator.userAgent
                  : ""
                ).match(/(msie [2-8])/i) || $(e.ipt).focus();
            }, 25)
          : /13488|14654|14667/.test(e.bds.comm.sid) &&
            setTimeout(function () {
              $(e.ipt).select();
            }, 25);
      },
      init: function () {
        var e = this;
        (e.searchNewStyle =
          (e.bds &&
            e.bds.comm &&
            e.bds.comm.sampleval &&
            $.inArray("new_search_style", e.bds.comm.sampleval) > -1) ||
          (e.bds.comm.nodeSample &&
            $.inArray("new_search_style", e.bds.comm.nodeSample) > -1)),
          e.setAutocomplete("off"),
          e.setCurrentSugSample(),
          e.addStat("rsv_bp", e.rsv_bp),
          e.updateInitData("init"),
          e.bds.se.sugdnscached ||
            ($.ajax({
              type: "GET",
              dataType: "json",
              async: !0,
              url: e.buildUrl("", "", !0),
              timeout: 5e3,
              xhrFields: { withCredentials: !0 },
              crossDomain: !0,
              success: function () {},
            }),
            (e.bds.se.sugdnscached = 1)),
          (e.imt = new ImeTrack({ iptId: "kw", adv: !0, innerchange: !1 })),
          (e.quickdelete = new QuickDelete()),
          e.ipt.value && e.quickdelete._show(),
          $(e.ipt).on("inputChange", function (e, t) {
            t.prevQuery = t.queryValue;
            var s =
              "search_sug_3-1" === t.currentSugSample ||
              "search_sug_3-2" === t.currentSugSample;
            (s &&
              t.backFrame &&
              1 === t.currentSearchStatus &&
              "" === t.inputValue) ||
              (t.backFrame = !1),
              t.imt.triggerInputChange(e),
              t.ipt.value ? t.quickdelete._show() : t.quickdelete._hide();
          }),
          $(e.ipt).on("blur", function () {
            e.backFrame = !1;
          }),
          e.startCircle(),
          e.clearStat(),
          $(e.ipt)
            .on("click", function (t) {
              t.stopPropagation(),
                !e.withoutMode && e.clickIpt(),
                e.ipt.value ? e.quickdelete._show() : e.quickdelete._hide(),
                0 === e.rsv_sug4 && (e.rsv_sug4 = new Date().getTime());
            })
            .on("focus", function () {
              e.startCircle();
            })
            .on("keydown", function (t) {
              t.stopPropagation(),
                e.startCircle(),
                (t = t || window.event),
                0 === e.inputT && (e.inputT = new Date().getTime()),
                0 === e.rsv_sug4 && (e.rsv_sug4 = new Date().getTime()),
                (9 === t.keyCode || 27 === t.keyCode) && e.hideSug(),
                13 === t.keyCode &&
                  (e.addStat("rsv_sug2", 0),
                  (e.isReturnSearch = !0),
                  e.ipt.value ? e.quickdelete._show() : e.quickdelete._hide()),
                86 === t.keyCode && t.ctrlKey && e.addStat("rsv_n", 2),
                e.sugcontainer && "none" !== e.sugcontainer.style.display
                  ? (38 === t.keyCode && (t.preventDefault(), e.pressUp()),
                    40 === t.keyCode && (t.preventDefault(), e.pressDown()))
                  : (38 === t.keyCode || 40 === t.keyCode) &&
                    (t.preventDefault(), e.request(e.value));
            }),
          e.form &&
            $(e.form).submit(function (t) {
              return (
                e.bds &&
                  e.bds.comm &&
                  0 === e.bds.comm.ishome &&
                  e.addStat(
                    "oq",
                    e.bds.comm.confirmQuery ? xss(e.bds.comm.confirmQuery) : ""
                  ),
                e.bds &&
                  e.bds.comm &&
                  e.bds.comm.confirmQid &&
                  e.addStat("rsv_pq", e.bds.comm.confirmQid),
                e.formSubmit(t),
                !1
              );
            });
      },
      outInterface: function () {
        var e = this;
        return {
          setVisibleSug: (function () {
            var t = $('<i class="c-icon c-icon-bear-round"></i>');
            return function (s) {
              var a;
              for (t.remove(), a = 0; a < e.dataArray.length; a++)
                if (e.dataArray[a].value === s) {
                  t.appendTo($(e.sugcontainer).find("li").eq(a));
                  break;
                }
            };
          })(),
          getStat: function (t) {
            return e.stat ? e.stat[t] : void 0;
          },
          clearStat: function () {
            return e.clearStat();
          },
          setKey: function (t) {
            e.ipt.value = e.value = e.inputValue = e.showValue = t;
          },
          visible: function () {
            return e.visible;
          },
          is_selecting: function () {
            return e.visible && e.is_selecting;
          },
          data: function () {
            return e.dataArray && e.dataArray.length
              ? $.grep(e.dataArray, function (e) {
                  return "direct" !== e.type;
                })
              : [];
          },
          show: function () {
            return e.showSug();
          },
          hide: function () {
            return e.hideSug();
          },
          start: function () {
            return e.startCircle();
          },
          stop: function () {
            return e.stopCircle();
          },
          setMaxNum: function (t) {
            return (e.maxNum = t);
          },
          check: function () {
            return e.check();
          },
          formSubmit: function () {
            return e.formSubmit();
          },
          updateInitData: function () {
            return e.updateInitData();
          },
          on: function () {
            $(e.ipt).on.apply($(e.ipt), arguments);
          },
          height: function () {
            return $(e.sugcontainer).height();
          },
          off: function () {
            $(e.ipt).off.apply($(e.ipt), arguments);
          },
          getRsvStatus: function (t) {
            return e.getRsvStatus(t);
          },
          setCurrentSugSample: function (t) {
            return e.setCurrentSugSample(t);
          },
        };
      },
      setCurrentSugSample: function (e) {
        var t = this,
          s = bds.comm.sampleval || [];
        e && e.length > 0 && (s = e),
          (t.currentSugSample = s.filter(function (e) {
            return -1 !== t.resultSugSamples.indexOf(e);
          })[0]),
          (t.prevQuery = t.query),
          (t.requestQuery = [t.query]),
          (t.backDelete = !1),
          (t.isAddQuery = !1),
          (t.showRightContent = !1),
          (t.isSugSample3 =
            "search_sug_3-1" === t.currentSugSample ||
            "search_sug_3-2" === t.currentSugSample),
          (t.isSugSample4 =
            "search_sug_4-1" === t.currentSugSample ||
            "search_sug_4-2" === t.currentSugSample),
          (t.isSugSample =
            -1 !== t.resultSugSamples.indexOf(t.currentSugSample));
      },
    }),
    bdSug
  );
}),
  define("@baidu/search-sug", ["@baidu/search-sug/sug/index"], function (e) {
    return e;
  });
