var passport = passport || window.passport || {};
(passport._modulePool = passport._modulePool || {}),
  (passport._define =
    passport._define ||
    function (s, a) {
      passport._modulePool[s] = a && a();
    }),
  (passport._getModule =
    passport._getModule ||
    function (s) {
      return passport._modulePool[s];
    }),
  (window.upsmsStore = {
    reg_upsms: "106929130003000002",
    verify_upsms: "106929130003000004",
    verify_text_upsms: "1069 2913 0003 000 004",
  }),
  (window.YY_TPL_CONFIG =
    "yylive,yyliveserver,yyanchor,pcyy,yyudbsec,bdgameassist,yoyuyin,");
try {
  if (window.localStorage && window.localStorage.getItem("upsms-pcApi"))
    try {
      window.upsmsStore = JSON.parse(
        window.localStorage.getItem("upsms-pcApi")
      );
    } catch (e) {}
} catch (e) {}
var passport = window.passport || {};
(passport._load =
  passport._load ||
  function (s, a, e) {
    var t = document,
      n = t.createElement("SCRIPT");
    if (a) {
      (n.type = "text/javascript"), (n.charset = "UTF-8");
      var o = s.split("?")[0],
        p = Math.round(1e3 * Math.random()),
        i = new Date().getTime();
      n.readyState
        ? (n.onreadystatechange = function () {
            if ("loaded" === n.readyState || "complete" === n.readyState) {
              if (((n.onreadystatechange = null), 100 === p)) {
                var s = new Date().getTime() - i;
                new Image().src =
                  document.location.protocol +
                  "//nsclick.baidu.com/v.gif?pid=111&type=1023&url=" +
                  encodeURIComponent(o) +
                  "&time=" +
                  s;
              }
              e && e();
            }
          })
        : (n.onload = function () {
            if (100 === p) {
              var s = new Date().getTime() - i;
              new Image().src =
                document.location.protocol +
                "//nsclick.baidu.com/v.gif?pid=111&type=1023&url=" +
                encodeURIComponent(o) +
                "&time=" +
                s;
            }
            e && e();
          }),
        (n.src = 100 === p ? o + "?t=" + Math.random() : s),
        t.getElementsByTagName("head")[0].appendChild(n);
    } else
      (n.type = "text/javascript"),
        (n.charset = "UTF-8"),
        (n.src = s),
        t.getElementsByTagName("head")[0].appendChild(n),
        n.readyState
          ? (n.onreadystatechange = function () {
              ("loaded" === n.readyState || "complete" === n.readyState) &&
                ((n.onreadystatechange = null), e && e());
            })
          : (n.onload = function () {
              e && e();
            });
  }),
  (passport.ieVersion = function () {
    var s;
    try {
      var a = navigator.userAgent.toLowerCase(),
        e = a.indexOf("msie") > -1;
      e && a.match(/msie ([\d.]+)/) && (s = a.match(/msie ([\d.]+)/)[1]);
    } catch (t) {
      s = 0;
    }
    return s;
  }),
  (passport.getDomain = function () {
    var s = {
      "http:": "http://ppui-static-pc.cdn.bcebos.com",
      "https:": "https://ppui-static-pc.cdn.bcebos.com",
    };
    passport.ieVersion() <= 8 &&
      (s = {
        "http:": "http://passport.baidu.com",
        "https:": "https://passport.baidu.com",
      });
    var a;
    return (
      (a =
        passport && "https" === passport._protocol
          ? "https:"
          : window.location
          ? window.location.protocol.toLowerCase()
          : document.location.protocol.toLowerCase()),
      s[a] || s["https:"]
    );
  }),
  (passport._use =
    passport._use ||
    function (s, a, e) {
      function t() {
        passport._load(
          "https://wappass.baidu.com/static/waplib/moonshad.js?tt=" +
            new Date().getTime(),
          !0,
          function () {
            var s = passport._getModule(o);
            if (!s) throw new Error("load " + o + "module script error.");
            e && e(s);
          }
        );
      }
      var n = passport.getDomain() + a,
        o = s + ".js",
        p = passport._getModule(o);
      p ? e && e(p) : passport._load(n, !0, t);
    }),
  (passport.loadPass = function (s, a) {
    var e = passport.getDomain() + s,
      t = document.createElement("link");
    (t.rel = "stylesheet"),
      (t.type = "text/css"),
      (t.href = e),
      document.getElementsByTagName("head")[0].appendChild(t),
      t.readyState
        ? (t.onreadystatechange = function () {
            ("loaded" == t.readyState || "complete" == t.readyState) &&
              ((t.onreadystatechange = null), a && a());
          })
        : (t.onload = function () {
            a && a();
          });
  }),
  (passport.use =
    passport.use ||
    function (s, a, e) {
      var t = a && a.tangram === !1 ? "" : "_tangram";
      a && a.protocol && (passport._protocol = a.protocol),
        "reg" === s && a && a.regPhoneOnly && (s = "regPhone");
      var n,
        o,
        p,
        i = "login" === s && a && a.loginVersion && "v4" === a.loginVersion,
        r = "login" === s && a && a.loginVersion && "v5" === a.loginVersion;
      r
        ? ((p = "/passApi/css/loginv5_b4728be.css"),
          (o = "/passApi/js/loginv5_tangram_5ff98e7.js"),
          (n = "/passApi/js/loginv5_d80e2b4.js"))
        : i
        ? ((p = "/passApi/css/loginv4_7b5ffbb.css"),
          (o = "/passApi/js/loginv4_tangram_ddc0beb.js"),
          (n = "/passApi/js/loginv4_4210696.js"))
        : ((p = "/passApi/css/uni_login_merge_5e291d4.css"),
          (o = "/passApi/js/login_tangram_f69fea7.js"),
          (n = "/passApi/js/login_c06a5a1.js"));
      var c = {
          login: n,
          login_tangram: o,
          smsloginEn: "/passApi/js/smsloginEn_1f821d1.js",
          smsloginEn_tangram: "/passApi/js/smsloginEn_tangram_67dd7b0.js",
          loginWLtoPC: "/passApi/js/loginWLtoPC_44a8915.js",
          accConnect: "/passApi/js/accConnect_59390fd.js",
          accConnect_tangram: "/passApi/js/accConnect_tangram_c6b7c10.js",
          accRealName: "/passApi/js/accRealName_badc5e6.js",
          accRealName_tangram: "/passApi/js/accRealName_tangram_d4d32e9.js",
          checkPhone: "/passApi/js/checkPhone_a011d7f.js",
          checkPhone_tangram: "/passApi/js/checkPhone_tangram_20b903e.js",
          checkIDcard: "/passApi/js/checkIDcard_dceca7c.js",
          checkIDcard_tangram: "/passApi/js/checkIDcard_tangram_9b0e9fe.js",
          travelComplete: "/passApi/js/travelComplete_bf61361.js",
          travelComplete_tangram:
            "/passApi/js/travelComplete_tangram_87d8f62.js",
          bindGuide: "/passApi/js/bindGuide_b380a73.js",
          bindGuide_tangram: "/passApi/js/bindGuide_tangram_84beb4e.js",
          accSetPwd: "/passApi/js/accSetPwd_dc123b6.js",
          accSetPwd_tangram: "/passApi/js/accSetPwd_tangram_243eeda.js",
          IDCertify: "/passApi/js/IDCertify_5e74f2a.js",
          IDCertify_tangram: "/passApi/js/IDCertify_tangram_8791146.js",
          secondCardList: "/passApi/js/secondCardList_4e65075.js",
          secondCardList_tangram:
            "/passApi/js/secondCardList_tangram_6c82975.js",
          secondCardVerify: "/passApi/js/secondCardVerify_5aab7e8.js",
          secondCardVerify_tangram:
            "/passApi/js/secondCardVerify_tangram_09bfc7b.js",
          IDCertifyQrcode: "/passApi/js/IDCertifyQrcode_987e43c.js",
          IDCertifyQrcode_tangram:
            "/passApi/js/IDCertifyQrcode_tangram_29c0088.js",
          loadingApi: "/passApi/js/loadingApi_c732d61.js",
          loadingApi_tangram: "/passApi/js/loadingApi_tangram_e9ba334.js",
          loginWap: "/passApi/js/loginWap_3dfef41.js",
          reg: "/passApi/js/reg_b8d4332.js",
          reg_tangram: "/passApi/js/reg_tangram_15e9bab.js",
          regPhone: "/passApi/js/regPhone_ef18f51.js",
          regPhone_tangram: "/passApi/js/regPhone_tangram_90e3b6f.js",
          fillUserName: "/passApi/js/fillUserName_108f47b.js",
          fillUserName_tangram: "/passApi/js/fillUserName_tangram_51a6a8c.js",
          qrcode: "/passApi/js/qrcode_a405554.js",
          qrcode_tangram: "/passApi/js/qrcode_tangram_f0d728a.js",
          realUserTag: "/passApi/js/realUserTag_93147e0.js",
          realUserTag_tangram: "/passApi/js/realUserTag_tangram_734e16f.js",
          bind: "/passApi/js/bind_9748aec.js",
          bind_tangram: "/passApi/js/bind_tangram_4d36be4.js",
          multiBind: "/passApi/js/multiBind_55b824a.js",
          multiBind_tangram: "/passApi/js/multiBind_tangram_d94fce9.js",
          multiUnbind: "/passApi/js/multiUnbind_646a797.js",
          multiUnbind_tangram: "/passApi/js/multiUnbind_tangram_a802f59.js",
          changeUser: "/passApi/js/changeUser_790c85a.js",
          changeUser_tangram: "/passApi/js/changeUser_tangram_b2f59c0.js",
          loginMultichoice: "/passApi/js/loginMultichoice_c956081.js",
          loginMultichoice_tangram:
            "/passApi/js/loginMultichoice_tangram_ae15455.js",
          confirmWidget: "/passApi/js/confirmWidget_ed02faa.js",
          confirmWidget_tangram: "/passApi/js/confirmWidget_tangram_38c5a43.js",
          uni_rebindGuide: "/passApi/js/uni_rebindGuide_6f240a4.js",
          uni_rebindGuide_tangram:
            "/passApi/js/uni_rebindGuide_tangram_741d333.js",
        },
        d = { login: p },
        g = s + t;
      2 === arguments.length && (e = a),
        a && a.tangramInst && (passport.tangramInst = a.tangramInst),
        a && a.defaultCss && d[s]
          ? passport.loadPass(d[s], function () {
              passport._use(g, c[g], e);
            })
          : passport._use(g, c[g], e);
    });
