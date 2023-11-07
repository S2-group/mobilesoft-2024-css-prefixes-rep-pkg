function toast(e) {
  var s = '<div class="toast-for-result"><span></span></div>';
  $("body").append(s),
    $(".toast-for-result").fadeIn(300).find("span").text(e),
    setTimeout(function () {
      $(".toast-for-result").fadeOut(300), $(".toast-for-result").remove();
    }, 2e3);
}
$(function () {
  function e(e) {
    var s = new RegExp("^\\s+|\\s+$"),
      t = $("#kw").val().replace(s, "");
    ns_c({
      fm: "behs",
      tab: e,
      query: encodeURIComponent(t),
      un: encodeURIComponent(bds.comm.user || ""),
    });
  }
  function s(e, s) {
    var t,
      a = S;
    e.mouseover(function () {
      s.show(), u && u.hide(), n(I), t && (clearTimeout(t), (t = !1));
    }),
      e.mouseout(function () {
        t && (clearTimeout(t), (t = !1)),
          (t = setTimeout(function () {
            s.hide();
          }, a));
      }),
      s.mouseover(function () {
        u && u.hide(), n(I), t && (clearTimeout(t), (t = !1));
      }),
      s.mouseout(function () {
        t && (clearTimeout(t), (t = !1)),
          (t = setTimeout(function () {
            s.hide();
          }, a));
      });
  }
  function t() {
    return bds.comm && bds.comm.ishome && bds.comm.sIndex;
  }
  function n() {
    I && clearTimeout(I), T && clearTimeout(T), y && clearTimeout(y);
  }
  function a(e, s) {
    var t = 56;
    t += bds.comm.username
      ? $("#s-top-username").width()
      : $("#s-top-loginbtn").width();
    var a = t - (e.width() - s.width()) / 2;
    e.css({ display: "block", right: a }), $("#s-user-name-menu").hide(), n();
  }
  function o(e) {
    y = setTimeout(function () {
      e.hide();
    }, S);
  }
  function i() {
    var e = m.offset(),
      s = m.height(),
      t = 48;
    t += bds.comm.username
      ? $(".username").width()
      : $(".lb[name=tj_login]").width();
    var a = t - (u.width() - m.width()) / 2;
    bds.comm.ishome
      ? u && u.css({ left: e.left - 20, top: e.top + s + 5 })
      : u && u.css({ right: a - 4, top: 48 }),
      u && u.show(),
      p && p.hide(),
      b && b.hide(),
      m.addClass("pfhover"),
      n(I);
  }
  function r() {
    I = setTimeout(function () {
      u && u.hide(), m && m.removeClass("pfhover");
    }, S);
  }
  function l() {
    b && b.hide(), u && u.hide(), p && p.hide();
  }
  function d() {
    var s,
      n,
      a,
      o,
      a,
      i,
      r = $(
        "<a class='setpref first' href='javascript:;'><span class='set'>搜索设置</span></a>"
      ),
      l = navigator.userAgent.toLowerCase().match(/msie\s+(\d*)/),
      d = (l && 6 == l[1], []),
      m = navigator.userAgent,
      p =
        Boolean(m.match(/(iPad)/)) ||
        ("MacIntel" === navigator.platform && navigator.maxTouchPoints > 1),
      b =
        (m.indexOf("compatible") > -1 && m.indexOf("MSIE") > -1) ||
        document.documentMode,
      h = p || b;
    if (
      (h ||
        (i = $(
          "<span class='set-result-tts'><a class='set-open-result-tts' href='javascript:;'><span class='set'>开启播报</span></a><a class='set-close-result-tts' href='javascript:;'><span class='set'>关闭播报</span></a></span>"
        )),
      !t())
    ) {
      u = $(".bdpfmenu");
      var f = '<div class="bdnuarrow"><em></em><i></i></div>';
      u.append(f);
    }
    if (
      (r.on("mousedown", function () {
        return e("tj_setting"), !1;
      }),
      r.on("click", function (e) {
        e.preventDefault(),
          D({
            callback: function () {
              bds.event.trigger("bd.se.showpanel", { tab: "general" });
            },
          });
      }),
      (s = $(
        "<a href='//www.baidu.com/gaoji/advanced.html' target='_blank'><span class='set'>高级搜索</span></a>"
      )),
      s.on("mousedown", function () {
        return e("tj_advsearch"), !1;
      }),
      s.on("click", function (e) {
        e.preventDefault(),
          D({
            callback: function () {
              bds.event.trigger("bd.se.showpanel", { tab: "advanced" });
            },
          });
      }),
      bds &&
        bds.comm &&
        bds.comm.ishome &&
        bds.comm.skin &&
        (!window.s_domain ||
          !window.s_domain.base ||
          "home" != window.s_domain.base))
    ) {
      o = $("<a href='javascript:' target='_blank'>换肤设置</a>");
      var v = Cookie.get("H_PS_SKIN_GI") || "0";
      (!v || parseInt(v) < 4) &&
        o.append('<span class="c-icon c-icon-reddot"></span>'),
        o.on("click", function (e) {
          ($_this = this),
            e.preventDefault(),
            D({
              callback: function () {
                bds.event.trigger("bd.se.showpanel", { tab: "skin" }),
                  $(".c-icon-reddot", $_this).hide();
              },
            });
        });
    }
    if (
      (bds.comm.ishome &&
      window.s_domain &&
      window.s_domain.base &&
      "home" == window.s_domain.base
        ? (n = $(
            "<a href='https://www.baidu.com/duty/privacysettings.html' target='_blank'>隐私设置</a>"
          ).on("mousedown", function () {
            return e("tj_history"), !1;
          }))
        : ((n = $(
            "<a class='last' href='javascript:;'><span class='set'>隐私设置</span></a>"
          ).on("mousedown", function () {
            return e("tj_history"), !1;
          })),
          n.on("click", function () {
            return bds.comm.username
              ? ((location.href =
                  "https://www.baidu.com/duty/privacysettings.html"),
                !1)
              : void (
                  bds.se.login &&
                  bds.se.login.open &&
                  bds.se.login.open(function (e) {
                    return 1 == e
                      ? ((location.href =
                          "https://www.baidu.com/duty/privacysettings.html"),
                        !1)
                      : void 0;
                  }, !0)
                );
          })),
      (bds.comm.supportis || 2 == Cookie.get("ORIGIN")) &&
        (a =
          0 == UPS.get("isSwitch")
            ? $(
                "<a href='javascript:;'><span class='set'>开启预测</span></a>"
              ).click(function () {
                return (
                  UPS.set("isSwitch", 1),
                  UPS.save(function () {
                    location.reload();
                  }),
                  !1
                );
              })
            : $(
                "<a href='javascript:;'><span class='set'>关闭预测</span></a>"
              ).click(function () {
                return (
                  UPS.set("isSwitch", 0),
                  UPS.save(function () {
                    location.reload();
                  }),
                  !1
                );
              })),
      bds && bds.comm && bds.comm.ishome
        ? bds.comm.skin
          ? ((d = [r, s, o, a, n]),
            $(window).on("index_off", function () {
              o.hide(), $("[data-tabid='skin']").hide();
            }))
          : (d = [r, s, a, n])
        : (d = [r, s, a, n, i]),
      t())
    ) {
      var g = $("#s-user-setting-menu .s-user-setting-pfmenu");
      g.html();
    }
    for (var w = 0, _ = d.length; _ > w; w++) {
      var k = d[w];
      k && (t() ? g.append(k) : u.append(k));
    }
    "open" === localStorage.getItem("set_result_tts")
      ? ($(".set-open-result-tts").css({ display: "none" }),
        $(".set-close-result-tts").css({ display: "inline-block" }))
      : ($(".set-open-result-tts").css({ display: "inline-block" }),
        $(".set-close-result-tts").css({ display: "none" })),
      $(".set-open-result-tts").on("click", function (e) {
        localStorage.setItem("set_result_tts", "open"),
          $(".set-open-result-tts").css({ display: "none" }),
          $(".set-close-result-tts").css({ display: "inline-block" }),
          $("body").addClass("open-result-tts"),
          c({ rsv_ct: "2", rsv_cst: "2" });
        var s = $(".tts").length;
        c({
          rsv_ct: "2",
          rsv_cst: "4",
          rsv_clk_extra: JSON.stringify({ nums: s }),
        }),
          require(["modules/event/event"], function (e) {
            e.default.trigger("result.open_tts");
          }),
          e.preventDefault();
      }),
      $(".set-close-result-tts").on("click", function (e) {
        localStorage.setItem("set_result_tts", "close"),
          $(".set-open-result-tts").css({ display: "inline-block" }),
          $(".set-close-result-tts").css({ display: "none" }),
          $("body").removeClass("open-result-tts"),
          toast("已为您关闭播报"),
          c({ rsv_ct: "2", rsv_cst: "3" }),
          require(["modules/event/event"], function (e) {
            e.default.trigger("result.close_tts");
          }),
          e.preventDefault();
      });
  }
  !(function (e, s, t, n) {
    var a = bds && bds.comm && bds.comm.samNewBox,
      o = $("#form");
    e &&
      s &&
      (e
        .on("mouseover", function () {
          e.addClass("ipthover"),
            a && (n.addClass("btnfocus"), o.addClass("sam_form_shadow"));
        })
        .on("mouseout", function () {
          if ((e.removeClass("ipthover"), a)) {
            var s = e.hasClass("iptfocus");
            s || (n.removeClass("btnfocus"), o.removeClass("sam_form_shadow"));
          }
        }),
      s
        .on("focus", function () {
          e.addClass("iptfocus"),
            a && (n.addClass("btnfocus"), o.addClass("sam_form_shadow"));
        })
        .on("blur", function () {
          e.removeClass("iptfocus"),
            a && (n.removeClass("btnfocus"), o.removeClass("sam_form_shadow"));
        })
        .on("render", function () {
          var s = e.parent().find(".bdsug"),
            t = s.find("li").length;
          t >= 5 ? s.addClass("bdsugbg") : s.removeClass("bdsugbg");
        })),
      t &&
        n &&
        t
          .on("mouseover", function () {
            n.addClass("btnhover"),
              a &&
                (e.addClass("ipthover"),
                n.addClass("btnfocus"),
                o.addClass("sam_form_shadow"));
          })
          .on("mouseout", function () {
            if ((n.removeClass("btnhover"), a)) {
              var s = e.hasClass("iptfocus");
              s ||
                (n.removeClass("btnfocus"), o.removeClass("sam_form_shadow")),
                e.removeClass("ipthover");
            }
            n.removeClass("s_btn_h");
          })
          .on("mousedown", function () {
            n.removeClass("btnhover"), n.addClass("s_btn_h");
          })
          .on("mouseup", function () {
            n.addClass("btnhover"), n.removeClass("s_btn_h");
          });
  })($(".s_ipt_wr"), $(".s_ipt"), $(".s_btn_wr"), $(".s_btn"));
  var m,
    u,
    p,
    b,
    h = ($("#wrapper"), $("#u")),
    f = $("#u .pf,#u1 .pf,#u_sp .pf"),
    v = 0,
    g = $("<input type='hidden' name='rsv_enter' value='1'>");
  $("#form").append(g),
    $("#su").on("mousedown", function () {
      g.val(0);
    }),
    $(document).on("click", function () {
      l();
    }),
    h.delegate(".username", "mouseover", function () {
      0 == $(this).nextAll(".usermenu").length &&
        ((p = $(
          '<div class="usermenu"><div class="bdnuarrow"><em></em><i></i></div><a class="first" href="https://www.baidu.com/my/index" onmousedown="return user_c({\'fm\':\'set\',\'tab\':\'uc_center\'})"><span class="set">个人中心</span></a><a href="http://passport.baidu.com" name="tj_user"><span class="set">帐号设置</span></a><a class="set-feedback" href="javascript:;"><span class="set">意见反馈</span></a><a class="last logout"  name="tj_logout" onmousedown="return user_c({\'fm\':\'set\',\'tab\':\'logout\'})"><span class="set">退出</span></a></div>'
        ).insertAfter(this)),
        p.delegate(".set-feedback", "click", function () {
          return $(".fb-feedback-right-dialog").length > 0
            ? !1
            : (e("tj_feedback"),
              void require(["plugins/feedback_suggest"], function (e) {
                e.init(),
                  $(".feedback").on("click", function () {
                    e.destroy();
                  });
              }));
        }),
        p.delegate(".logout", "click", function () {
          $(".search-quit-dialog-wrap").show(),
            c({ rsv_ct: "5", rsv_cst: "1" });
        }),
        (b = $('<div class="bdnuarrow arrowusermenu"></div>').insertAfter(
          this
        )),
        p.click(function (e) {
          e.stopPropagation();
        }),
        b.click(function (e) {
          e.stopPropagation();
        }),
        s($(this), p.add(b)));
      var t = $(this).offset(),
        n = t.left,
        a = ($(this).width() - (p ? p.width() : 0)) / 2 + 24;
      p && p.css({ top: 48, right: a }),
        b && b.offset({ top: t.top + 18, left: n });
    }),
    f.on("click", function () {
      return !1;
    });
  var w = $("#s-user-setting-menu");
  if (t()) {
    var _ = 0,
      k = {};
    k.baseParams = {
      ct: 2,
      qid: s_session.seqId,
      sid: s_session.sid,
      ssid: s_session.portrait,
      logid: s_session.logId || "0",
      _r: Math.random(),
    };
    var C = window.Thunder.get(k),
      j = {
        tid: 11545,
        logFrom: "feed_index",
        logInfo: "tts_show",
        logExtra: { type: "tts_switch_show" },
      };
    $("#s-usersetting-top")
      .on("mouseenter", function (e) {
        var s = $(this);
        if (
          (e.stopPropagation(),
          e.preventDefault(),
          _ || (d(), (_ = 1)),
          a(w, s),
          0 != $(".s-set-homepage-tts").length)
        ) {
          var t = $.extend(!0, {}, j);
          (t.logExtra = $.stringify(t.logExtra)), C.send(t);
        }
      })
      .on("mouseleave", function () {
        o(w);
      }),
      w
        .on("mouseenter", function () {
          n();
        })
        .on("mouseleave", function () {
          o(w);
        });
  }
  f.on("mouseenter", function (e) {
    if (
      ((v = !!u),
      (m = $(this)),
      (h = $(this).parent()),
      e.stopPropagation(),
      e.preventDefault(),
      v ||
        (d(),
        (v = 1),
        u.show().hover(
          function () {
            i();
          },
          function () {
            r();
          }
        )),
      $(".usermenu") && $(".usermenu").hide(),
      i(),
      bds && bds.comm && bds.comm.ishome && bds.comm.skin)
    ) {
      var s = Cookie.get("H_PS_SKIN_GO") || "0";
      Cookie.set(
        "H_PS_SKIN_GO",
        parseInt(s) + 4,
        document.domain,
        "/",
        new Date(new Date().getTime() + 5184e6)
      ),
        $(".frontpage-rt-guide").hide();
      var t = Cookie.get("H_PS_SKIN_GI") || "0";
      t && parseInt(t) > 3
        ? $(".bdpfmenu .c-icon-reddot").hide()
        : Cookie.set(
            "H_PS_SKIN_GI",
            parseInt(t) + 1,
            document.domain,
            "/",
            new Date(new Date().getTime() + 5184e6)
          );
    }
    0 !== $(".set-result-tts").length && c({ rsv_ct: "2", rsv_cst: "1" });
  }).on("mouseleave", function () {
    r();
  });
  var I,
    T,
    y,
    S = 200,
    x = bds.comm.isNode || 0,
    P =
      bds &&
      bds.comm &&
      bds.comm.personalData &&
      bds.comm.personalData.homepageTTS &&
      ("" === bds.comm.personalData.homepageTTS.value ||
        "1" === bds.comm.personalData.homepageTTS.value)
        ? 1
        : 0;
  x &&
    (P =
      s_session &&
      s_session.userTips &&
      s_session.userTips.homepageTTS &&
      ("" === s_session.userTips.homepageTTS ||
        "1" === s_session.userTips.homepageTTS)
        ? 1
        : 0),
    P
      ? ($(".set-close-homepage-tts").css({ display: "inline-block" }),
        $(".set-open-homepage-tts").css({ display: "none" }))
      : ($(".set-close-homepage-tts").css({ display: "none" }),
        $(".set-open-homepage-tts").css({ display: "inline-block" }));
  var D = function (e) {
    var s = e.callback,
      t = D.status;
    if (($.isFunction(s) && D.callbacklist.push(s), "pendding" !== t))
      if ("loaded" !== t)
        (D.status = "pendding"),
          $.ajax({
            dataType: "script",
            cache: !0,
            url: "https://pss.bdstatic.com/r/www/cache/static/protocol/https/home/js/instant_6b552f4.js",
            success: function () {
              if (D.callbacklist.length > 0) {
                for (var e = 0, s = D.callbacklist.length; s > e; e++)
                  D.callbacklist[e]();
                D.callbacklist = [];
              }
              if (
                ((D.status = "loaded"),
                bds && bds.comm && bds.comm.ishome && bds.comm.skin)
              ) {
                var t = Cookie.get("H_PS_SKIN_GI") || "0";
                Cookie.set(
                  "H_PS_SKIN_GI",
                  parseInt(t) + 4,
                  document.domain,
                  "/",
                  new Date(new Date().getTime() + 5184e6)
                );
              }
            },
          });
      else if (D.callbacklist.length > 0) {
        for (var n = 0, a = D.callbacklist.length; a > n; n++)
          D.callbacklist[n]();
        D.callbacklist = [];
      }
  };
  (D.callbacklist = []),
    (D.status = "ready"),
    bds.event &&
      bds.event.on("bd.se.loadpanel", function (e) {
        var s = e.data;
        D({
          callback: function () {
            bds.event.trigger("bd.se.showpanel", s);
          },
        });
      });
  var u;
}),
  $(function () {
    function e(e) {
      var s = new RegExp("^\\s+|\\s+$"),
        t = $("#kw").get(0).value.replace(s, "");
      ns_c({
        fm: "behs",
        tab: e,
        query: encodeURIComponent(t),
        un: encodeURIComponent(bds.comm.user || ""),
      });
    }
    function s() {
      h && clearTimeout(h), f && clearTimeout(f);
    }
    function t() {
      var e = $(".briguide");
      e && e.hide(),
        l &&
          (l.css({ display: "block", opacity: "0", "min-height": m }),
          "undefined" == typeof document.body.style.maxHeight &&
            l.css({ height: m }),
          l.find(".briscrollwrapper").scrollTop(0),
          l.css({ display: "none", opacity: "1" }).fadeIn(v)),
        c && c.show(),
        r && r.render($(window).height() - p.offset().top - 34 - 20),
        s(f);
    }
    function n() {
      f = setTimeout(function () {
        l && l.fadeOut(v), c && c.hide();
      }, v);
    }
    function a() {
      c && c.hide(), l && l.hide();
    }
    function o() {
      b || ((c = $("<div>", { class: "bdnuarrow bdbriarrow" })), c.appendTo(u));
    }
    function i() {
      function s(e) {
        function s(e, s, t) {
          return t && (e = e > t ? t : e), e >= s ? e : s;
        }
        function t() {
          N.call(window, { value: L, scale: S });
        }
        function n() {
          p && clearInterval(p),
            o(),
            (p = setInterval(function () {
              X ? o() : clearInterval(p);
            }, 100));
        }
        function a() {
          b && clearInterval(b),
            i(),
            (b = setInterval(function () {
              Z ? i() : clearInterval(b);
            }, 100));
        }
        function o() {
          var e = L - T;
          (e = 0 > e ? 0 : e), d(e);
        }
        function i() {
          var e = L + T;
          (e = e > 1 ? 1 : e), d(e);
        }
        function r(e) {
          e = window.event || e;
          var t = s(e.clientY - F, B, Y);
          return (L = (t - B) / (Y - B)), $(K).css({ top: t + "px" }), !1;
        }
        function c() {
          return (
            $(f).removeClass("bdbriscroll-ctrl-scroll-hover"),
            $(f).removeClass("bdbriscroll-ctrl-scroll-touch"),
            $(K).removeClass("bdbriscroll-slider-hover"),
            $(K).removeClass("bdbriscroll-slider-touch"),
            $(g).css({ "-moz-user-select": "" }),
            $(g).css({ "-webkit-user-select": "" }),
            Q && window.clearInterval(Q),
            (document.onselectstart = W
              ? W
              : function () {
                  return !0;
                }),
            $(document).unbind("mousemove", r),
            $(document).unbind("mouseup", c),
            $(K).addClass("bdbriscroll-slider OP_LOG_BTN"),
            (J = 0),
            !1
          );
        }
        function l(e) {
          d((e.offsetY || e.layerY) / A);
        }
        function d(e, s) {
          (e = 0 > e ? 0 : e), (e = e > 1 ? 1 : e), (L = e);
          var n = (Y - B) * L + B;
          $(K).css({ top: n + "px" }), s || t();
        }
        function m(e) {
          if ((e.preventDefault(), (e = e.originalEvent))) {
            this.onwheel = 1;
            var s = (-e.wheelDelta || (e.detail && 40 * e.detail) || 0) / j,
              t = s,
              n = t > 0 ? v.scrollTop + 2 : v.scrollTop - 2;
            $(g).css({ zoom: "1" }),
              n > 0 && n < g.offsetHeight - v.offsetHeight
                ? ((v.scrollTop += t),
                  (L = v.scrollTop / (v.scrollHeight - v.offsetHeight)))
                : (C && "none" != $(f).css("display")) ||
                  ((document.documentElement.scrollTop += t),
                  (document.body.scrollTop += t));
          }
        }
        function u(e) {
          if (((S = e > 10 ? 10 : e), 1 >= S))
            return void $(K).css({ display: "none" });
          $(K).css({ display: "block" });
          var s = A - 2 * R;
          (M = parseInt(s / S)),
            (M = 15 > M ? 15 : M),
            (Y = A - R - M),
            $(K).css({ height: M + "px" });
        }
        this.options = e;
        var p,
          b,
          h,
          f = e.scrollbar || $("<div>").get(0),
          v = e.content,
          g = $(e.content).children().get(0),
          w = e.initPos || 0,
          _ = e.initDom || null,
          k = e.mousewheel || !0,
          C = e.mousewheellock || !1,
          j = e.wheeldelta || 1,
          I = e.ctrlblock || 0,
          T = e.step || 0.1,
          y = e.length,
          S = e.scale || 0,
          x = (e.theme || "", e.refresh || !1),
          P = 0,
          D = 0,
          H = 0,
          N = function (e) {
            var s = parseInt(P - D);
            if (s > 0) {
              var e = e.value;
              v.scrollTop = s * e;
            }
          },
          z = $("<div>", { class: "bdbriscroll-up" }).get(0),
          O = $("<div>", { class: "bdbriscroll-down" }).get(0),
          G = $("<div>", { class: "bdbriscroll-axis" }).get(0),
          K = $("<div>", { class: "bdbriscroll-slider OP_LOG_BTN" }).get(0),
          U = $("<div>", { class: "bdbriscroll-s-top" }).get(0),
          q = $("<div>", { class: "bdbriscroll-s-bottom" }).get(0),
          E = $("<div>", { class: "bdbriscroll-s-block" }).get(0),
          A = 0,
          R = I || 0,
          M = 0,
          B = R,
          Y = 0,
          L = 0,
          F = 0,
          J = 0,
          W = null,
          Q = null,
          V = function () {
            (X = !1), (Z = !1);
          };
        if (
          (e.scrollbar || $(v).after($(f)),
          $(v).addClass("bdbriscroll-ctrl-content"),
          $(f).addClass("bdbriscroll-ctrl-scroll"),
          $(f).attr("data-click", '{fm:"beha"}'),
          (this.render = function (e) {
            x || clearInterval(h);
            try {
              (D = v.offsetHeight), (H = f.offsetHeight), (P = g.offsetHeight);
            } catch (t) {}
            if (
              ((A = e || y || D - 22),
              $(f).css({ height: A + "px" }),
              $(G).css({ height: A + "px" }),
              A >= 0 && P >= 0)
            ) {
              A + 22 >= P ? $(f).hide() : $(f).show(),
                S != P / A && ((S = P / A), u(S), d(0));
              var n = 0;
              if (_) {
                (n =
                  _.offsetTop + _.scrollHeight >= P
                    ? 1
                    : _.offsetTop + _.scrollHeight <= D
                    ? 0
                    : _.offsetTop / P),
                  d(n);
                var a = s(H * n, B);
                a > A - M && (a = A - M);
              }
              if (w) {
                d(w);
                var a = s(H * w, B);
                a > A - M && (a = A - M);
              }
            }
          }),
          (h = setInterval(this.render, 50)),
          $(f).empty(),
          I && z.offsetHeight == O.offsetHeight)
        ) {
          var X = !1,
            Z = !1;
          f.appendChild(z),
            f.appendChild(O),
            $(z).on("mousedown", function () {
              n(), (X = !0);
            }),
            $(O).on("mousedown", function () {
              a(), (Z = !0);
            }),
            $(z).on("mouseup", function () {
              $(f).removeClass("bdbriscroll-ctrl-scroll-touch"), (X = !1);
            }),
            $(O).on("mouseup", function () {
              $(f).removeClass("bdbriscroll-ctrl-scroll-touch"), (Z = !1);
            }),
            $(document).on("mouseup", V);
        }
        f.appendChild(G),
          f.appendChild(K),
          K.appendChild(U),
          K.appendChild(q),
          K.appendChild(E),
          (K.onDragstart = function () {
            return !1;
          }),
          $(K).on("mouseover", function () {
            $(K).addClass("bdbriscroll-slider-hover"),
              $(f).addClass("bdbriscroll-ctrl-scroll-hover");
          }),
          $(K).on("mousedown", function () {
            $(K).addClass("bdbriscroll-slider-touch"),
              $(f).addClass("bdbriscroll-ctrl-scroll-touch");
          }),
          $(K).on("mouseout", function () {
            $(K).removeClass("bdbriscroll-slider-hover");
          }),
          $(K).on("mouseup", function () {
            $(K).removeClass("bdbriscroll-slider-touch");
          }),
          $(f).on("mouseover", function () {
            $(f).addClass("bdbriscroll-ctrl-scroll-hover");
          }),
          $(f).on("mousedown", function () {
            $(f).addClass("bdbriscroll-ctrl-scroll-touch");
          }),
          $(f).on("mouseout", function () {
            $(f).removeClass("bdbriscroll-ctrl-scroll-hover");
          }),
          $(f).on("mouseup", function () {
            $(f).removeClass("bdbriscroll-ctrl-scroll-touch");
          }),
          $(G).on("click", l),
          k &&
            !this.onwheel &&
            ($(v).hasClass("bdbriscroll-onwheel") ||
              ($(v).on("DOMMouseScroll", m),
              $(v).on("mousewheel", m),
              $(v).addClass("bdbriscroll-onwheel"))),
          v &&
            $(v).on("scroll", function () {
              J || d(v.scrollTop / (v.scrollHeight - v.offsetHeight), 1);
            }),
          $(K).on("mousedown", function (e) {
            return (
              (W = document.onselectstart),
              (document.onselectstart = function () {
                return !1;
              }),
              (Q = window.setInterval(t, 40)),
              $(g).css({ "-moz-user-select": "none" }),
              $(g).css({ "-webkit-user-select": "none" }),
              (F = e.clientY - K.offsetTop),
              $(document).on("mousemove", r),
              $(document).on("mouseup", c),
              (J = 1),
              e.preventDefault(),
              !1
            );
          }),
          S > 1 && u(S),
          (this.dispose = function () {
            (document.onselectstart = W
              ? W
              : function () {
                  return !0;
                }),
              $(document).unbind("mousemove", r),
              $(document).unbind("mouseup", c),
              $(document).unbind("mouseup", V),
              Q && clearInterval(Q),
              p && clearInterval(p),
              b && clearInterval(b),
              h && clearInterval(h);
          });
      }
      if (
        ((l = $("<div>", { class: "bdbri" }).appendTo($(".head_wrapper"))),
        l.on("click", function (e) {
          e.stopPropagation();
        }),
        u.hasClass("bdbrilink"))
      );
      else {
        l.addClass("bdbriimg").html(
          $(".mnav_nuomi").length
            ? "<div class='bdmainlink'><div class='bdbriimgtitle'>更多产品</div><div class='briscrollwrapperContainer'><div class='briscrollwrapper'><div class='bdbriwrapper'><a href='http://zhidao.baidu.com' name='tj_zhidao'><span class='bdbriimgitem_2'></span>知道</a><a href='http://music.taihe.com' name='tj_mp3'><span class='bdbriimgitem_3'></span>音乐</a><a href='http://image.baidu.com' name='tj_img'><span class='bdbriimgitem_4'></span>图片</a><a href='http://wenku.baidu.com' name='tj_wenku'><span class='bdbriimgitem_5'></span>文库</a><a href='http://top.baidu.com' name='tj_bang'><span class='bdbriimgitem_6'></span>风云榜</a><a href='http://e.baidu.com/?refer=888' name='tj_tuiguang'><span class='bdbriimgitem_7'></span>百度推广</a><div class='bdbrievenmore'><a href='//www.baidu.com/more/' name='tj_more'>全部产品&gt;&gt;</a></div></div></div></div></div>"
            : 1 == window._sam_ns_nuomi
            ? "<div class='bdmainlink'><div class='bdbriimgtitle'>更多产品</div><div class='briscrollwrapperContainer'><div class='briscrollwrapper'><div class='bdbriwrapper'><a href='https://www.hao123.com' name='tj_hao123'><span class='bdbriimgitem_hao123'></span>hao123</a><a href='http://music.taihe.com' name='tj_mp3'><span class='bdbriimgitem_3'></span>音乐</a><a href='http://image.baidu.com' name='tj_img'><span class='bdbriimgitem_4'></span>图片</a><a href='http://zhidao.baidu.com' name='tj_zhidao'><span class='bdbriimgitem_2'></span>知道</a><a href='http://wenku.baidu.com' name='tj_wenku'><span class='bdbriimgitem_5'></span>文库</a><a href='http://top.baidu.com' name='tj_bang'><span class='bdbriimgitem_6'></span>风云榜</a><a href='http://e.baidu.com/?refer=888' name='tj_tuiguang'><span class='bdbriimgitem_7'></span>百度推广</a><div class='bdbrievenmore'><a href='//www.baidu.com/more/' name='tj_more'>全部产品&gt;&gt;</a></div></div></div></div></div>"
            : 2 == window._sam_ns_nuomi
            ? "<div class='bdmainlink'><div class='bdbriimgtitle'>更多产品</div><div class='briscrollwrapperContainer'><div class='briscrollwrapper'><div class='bdbriwrapper'><a href='http://v.baidu.com' name='tj_video'><span class='bdbriimgitem_video'></span>视频</a><a href='http://music.taihe.com' name='tj_mp3'><span class='bdbriimgitem_3'></span>音乐</a><a href='http://image.baidu.com' name='tj_img'><span class='bdbriimgitem_4'></span>图片</a><a href='http://zhidao.baidu.com' name='tj_zhidao'><span class='bdbriimgitem_2'></span>知道</a><a href='http://wenku.baidu.com' name='tj_wenku'><span class='bdbriimgitem_5'></span>文库</a><a href='http://top.baidu.com' name='tj_bang'><span class='bdbriimgitem_6'></span>风云榜</a><a href='http://e.baidu.com/?refer=888' name='tj_tuiguang'><span class='bdbriimgitem_7'></span>百度推广</a><div class='bdbrievenmore'><a href='//www.baidu.com/more/' name='tj_more'>全部产品&gt;&gt;</a></div></div></div></div></div>"
            : 3 == window._sam_ns_nuomi
            ? "<div class='bdmainlink'><div class='bdbriimgtitle'>更多产品</div><div class='briscrollwrapperContainer'><div class='briscrollwrapper'><div class='bdbriwrapper'><a href='http://e.baidu.com?refer=889' name='tj_yingxiao'><span class='bdbriimgitem_1'></span>百度营销</a><a href='http://zhidao.baidu.com' name='tj_zhidao'><span class='bdbriimgitem_2'></span>知道</a><a href='http://music.taihe.com' name='tj_mp3'><span class='bdbriimgitem_3'></span>音乐</a><a href='http://image.baidu.com' name='tj_img'><span class='bdbriimgitem_4'></span>图片</a><a href='http://wenku.baidu.com' name='tj_wenku'><span class='bdbriimgitem_5'></span>文库</a><a href='http://top.baidu.com' name='tj_bang'><span class='bdbriimgitem_6'></span>风云榜</a><div class='bdbrievenmore'><a href='//www.baidu.com/more/' name='tj_more'>全部产品&gt;&gt;</a></div></div></div></div></div>"
            : "<div class='bdmainlink'><div class='bdbriimgtitle'>更多产品</div><div class='briscrollwrapperContainer'><div class='briscrollwrapper'><div class='bdbriwrapper'><a href='http://e.baidu.com?refer=889' name='tj_yingxiao'><span class='bdbriimgitem_1'></span>百度营销</a><a href='http://music.taihe.com' name='tj_mp3'><span class='bdbriimgitem_3'></span>音乐</a><a href='http://image.baidu.com' name='tj_img'><span class='bdbriimgitem_4'></span>图片</a><a href='http://zhidao.baidu.com' name='tj_zhidao'><span class='bdbriimgitem_2'></span>知道</a><a href='http://wenku.baidu.com' name='tj_wenku'><span class='bdbriimgitem_5'></span>文库</a><a href='http://top.baidu.com' name='tj_bang'><span class='bdbriimgitem_6'></span>风云榜</a><div class='bdbrievenmore'><a href='//www.baidu.com/more/' name='tj_more'>全部产品&gt;&gt;</a></div></div></div></div></div>"
        );
        var t =
            (l.find(".bdothlink"),
            l.find(".bdbrievenmore"),
            l.find(".briscrollwrapper")),
          n = $(window).height() - p.offset().top - 34;
        t.height(n),
          (r = new s({
            content: t.get(0),
            length: n - 20,
            mousewheellock: !0,
            wheeldelta: 5,
          })),
          $(window).on("resize", function () {
            var e = $(window).height() - p.offset().top - 34;
            t.height(e), r && r.render(e - 20);
          });
      }
      (d = 600),
        (m = $(window).height() < d ? d : $(window).height()),
        $(window).on("resize", function () {
          (m = $(window).height() < d ? d : $(window).height()),
            l && l.css({ "min-height": m }),
            $.support.leadingWhitespace || (l && l.css({ height: m }));
        }),
        $.each(l.find("a"), function (s, t) {
          $(t).on("mousedown", function () {
            $(t).attr("name") && e($(t).attr("name"));
          });
        });
    }
    var r,
      c,
      l,
      d,
      m,
      u = ($("#wrapper"), $("#u1")),
      p = $("#u1 .bri"),
      b = 0;
    !(function () {
      if (bds && bds.comm && bds.comm.ishome && bds.comm.skin) {
        if (
          !window.s_domain ||
          !window.s_domain.base ||
          "home" != window.s_domain.base
        ) {
          var e = Cookie.get("H_PS_SKIN") ? Cookie.get("H_PS_SKIN") : "0",
            s = Cookie.get("H_PS_SKIN_GO") || "0";
          if (
            ((!s || parseInt(s) < 4) &&
              (($skinGuide = $("<div>", { class: "frontpage-rt-guide" })),
              ns_c({ tj_skinChangeTip: "skin_tip_show" }),
              $skinGuide.appendTo("#wrapper"),
              Cookie.set(
                "H_PS_SKIN_GO",
                parseInt(s) + 1,
                document.domain,
                "/",
                new Date(new Date().getTime() + 5184e6)
              )),
            e && "0" != e)
          ) {
            var t = $(".s-skin-container"),
              n =
                "http://" +
                (((parseInt(e) + 1) % 8) + 1) +
                ".su.bdimg.com/skin/" +
                e +
                ".jpg?2";
            n =
              bds.util.domain && bds.util.domain.get
                ? bds.util.domain.get(n)
                : n;
            var a = navigator && navigator.userAgent ? navigator.userAgent : "";
            a.match(/(msie [2-8])/i)
              ? t.find("img")[0]
                ? $(t[0])
                    .attr("style", "background-color:#aaa;")
                    .find("img")
                    .attr("src", n)
                : $(t[0])
                    .attr("style", "background-color:#aaa;")
                    .html(
                      '<div class="topbanner"></div><img style="top:0;left:0;width:100%;position:fixed" src="' +
                        n +
                        '">'
                    )
              : ($(t[0]).attr(
                  "style",
                  'background-color:#aaa;background-image:url("' + n + '");'
                ),
                $(t[0]).find("img").remove());
          }
        }
        $(window).on("index_off", function () {
          $("#head").removeClass("s-skin-hasbg").addClass("skin-no-bg"),
            $("#ftCon").removeClass("s-skin-hasbg").addClass("skin-no-bg"),
            $(".s-skin-container").hide();
          var e = $("#lg img").val(0);
          e.attr("src", "//www.baidu.com/img/bd_logo1.png");
        });
      }
    })(),
      $(document).on("click", function () {
        a();
      }),
      $("#kw").on("click", function () {
        a();
      }),
      p.on("click", function (e) {
        return e.stopPropagation(), e.preventDefault(), !1;
      });
    var h,
      f,
      v = 100;
    p
      .on("mouseover", function (e) {
        e.stopPropagation(),
          e.preventDefault(),
          o(),
          b ||
            (i(),
            (b = 1),
            l.hover(
              function () {
                s(f);
              },
              function () {
                n();
              }
            ),
            c.hover(
              function () {},
              function () {
                n();
              }
            )),
          t();
      })
      .on("mouseout", function () {}),
      $(window).on("index_off", function () {
        l && l.hide(), c && c.hide();
      }),
      $.each($(".bri-btlinks").find("a"), function (s, t) {
        $(t).on("mousedown", function () {
          $(t).attr("name") && e($(t).attr("name"));
        });
      });
  });
