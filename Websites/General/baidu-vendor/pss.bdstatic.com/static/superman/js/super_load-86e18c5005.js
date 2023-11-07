F.module("superman:weather/weather_tpl", function (require, exports, ctx) {
  var isNewStyle = bds.comm && bds.comm.newTopMenu === 1;
  exports.pollutionLevel = {
    0: "优",
    10: "良",
    20: "轻度污染",
    30: "中度污染",
    40: "重度污染",
    50: "严重污染",
  };
  var _dom = $("#s_mod_weather");
  exports.createIconUrl = function (url, getStyleVal) {
    if (!url) {
      return "";
    }
    if (!getStyleVal) {
      return (
        'style="background-image:url(' +
        url +
        ");*background-image:none;*filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" +
        url +
        ', enabled=true,sizingMethod="crop")";'
      );
    } else {
      return (
        "background-image:url(" +
        url +
        ");*background-image:none;*filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" +
        url +
        ', enabled=true,sizingMethod="crop")'
      );
    }
  };
  exports.randIconCdn = function (img) {
    var _returnStr = (img ? img : "a2").slice(1);
    if (isNaN(_returnStr) || _returnStr.length < 1) {
      return 1;
    } else {
      return (parseInt(_returnStr) % 8) + 1;
    }
  };
  exports.randerImgPath = function (data, imgType, whichData, isNotToday) {
    var i = whichData ? whichData : 0;
    var _c = data,
      _t = _c.weatherArr ? _c.weatherArr[i] : {},
      _nowTime = sysTime * 1e3,
      _imgName = "";
    if (_c && _c.timeStamp && +_c.timeStamp) {
      _nowTime = +_c.timeStamp;
    }
    if (_t && _t.imgs && _t.imgs[0]) {
      _imgName = _t.imgs[0];
    } else {
      _imgName = "a2";
    }
    if (
      !isNotToday &&
      +new Date(_nowTime).getHours() >= 18 &&
      (_imgName == "a0" || _imgName == "a1")
    ) {
      _imgName = _imgName + "_night";
    }
    if (isNewStyle) {
      return $.url.escapeSSL(
        "https://dss" +
          Math.floor(Math.random() * 3.9) +
          ".bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/weather/icons2/" +
          _imgName +
          ".png"
      );
    }
    return $.url.escapeSSL(
      "http://" +
        exports.randIconCdn(_imgName) +
        ".su.bdimg.com/icon/weather/" +
        (_c.weatherType
          ? _c.weatherType +
            "/" +
            (imgType ? (imgType == "png" ? "png_18" : imgType) : "png_18")
          : "aladdin/png_18") +
        "/" +
        _imgName +
        "." +
        (imgType ? imgType : "png")
    );
  };
  var init = function (data) {
    $("#s_mod_weather .weather-bg").css(
      "width",
      _dom.find(".city-wather").get(0).offsetWidth
    );
    ctx.fire("weatherShow", { showType: "weatherMod" });
  };
  exports.init = init;
});
F.module("superman:weather/weather_ctrl", function (require, exports, ctx) {
  var _dom = $("#s_mod_weather .weather-mod");
  var isNewStyle = bds.comm && bds.comm.newTopMenu === 1;
  var _canGetWeatherPos = true;
  var bindEvents = function (data) {
    if (!_dom.get(0)) {
      _dom = $("#s_mod_weather .weather-mod");
    }
    if (!_dom.get(0)) {
      return;
    }
    if (!data || !data.content || !data.content.today) {
      exports.setWeatherPosKey(false);
    }
    function hoverWithCityInfo() {
      ctx.use("weather/setting_ctrl", function (ws) {
        if (!$("#s_mod_setweather").get(0)) {
          ws.init(data);
        } else {
          ws.show();
        }
      });
    }
    function hoverWithoutCityInfo() {
      ctx.use("weather/setting_ctrl", function (ws) {
        if (!$("#s_mod_setweather").get(0)) {
          ctx.use("weather/weather_autorefresh", function (wa) {
            wa.autoRefreshCtrl(true);
          });
          ws.init(data, true);
          ws.show(true);
        } else {
          ws.show(true);
        }
        ctx.fire("settingShow", {
          showType: "settingMod",
          lastSetCityState: _canGetWeatherPos,
        });
      });
    }
    if (isNewStyle) {
      $("#s_mod_weather .unknown-setting").mouseenter(hoverWithoutCityInfo);
      $("#s_mod_weather").mouseleave(function () {
        ctx.use("weather/setting_ctrl", function (ws) {
          setTimeout(function () {
            ws.hide();
          }, 200);
        });
      });
    } else {
      $("#s_mod_weather .unknown-setting").click(hoverWithoutCityInfo);
    }
    _dom.mouseenter(hoverWithCityInfo).mousemove(hoverWithCityInfo);
    if (!isNewStyle) {
      _dom.mouseleave(function () {
        ctx.use("weather/setting_ctrl", function (ws) {
          if ($("#s_mod_setweather").get(0)) {
            ws.hide();
          }
        });
      });
      $("body").click(function (e) {
        var _tar = e.target;
        if (
          !$.contains(_dom.get(0), _tar) &&
          !$.contains($("#s_mod_weather .unknown-city").get(0), _tar)
        ) {
          ctx.use("weather/setting_ctrl", function (ws) {
            if ($("#s_mod_setweather").get(0)) {
              ws.hide(true);
            }
          });
        }
      });
    }
    if ($("#s_mod_weather").hasClass("hide-unknow-city")) {
      ctx.use("weather/weather_autorefresh", function (wa) {
        wa.autoRefreshCtrl();
      });
      hoverWithCityInfo();
    } else {
      hoverWithoutCityInfo();
    }
  };
  exports.setWeatherPosKey = function (value) {
    _canGetWeatherPos = value;
  };
  exports.getWeatherPosKey = function () {
    return _canGetWeatherPos;
  };
  exports.open = open;
  exports.close = close;
  exports.bindEvents = bindEvents;
});
F.module(
  "superman:weather/weather_autorefresh",
  function (require, exports, ctx) {
    var _refreshWeatherInterval = null;
    var isNewStyle = bds.comm && bds.comm.newTopMenu === 1;
    exports.autoRefreshCtrl = function (isRestart) {
      var cityCode = $(".city-wather .show-city-name").attr("data-key");
      var bsToken = ($("#bsToken") && $("#bsToken").val()) || "";
      if (isRestart && _refreshWeatherInterval) {
        clearInterval(_refreshWeatherInterval);
        _refreshWeatherInterval = null;
      } else {
        _refreshWeatherInterval = setInterval(function () {
          $.ajaxget(
            s_domain.baseuri +
              "/weather/getweather?citycode=" +
              cityCode +
              "&bsToken=" +
              bsToken,
            function (result) {
              if (result.errno == 0) {
                var _d = result.data;
                if (_d && _d.content.countyName) {
                  exports.refreshWeather(
                    _d,
                    s_session.userTips.weatherShowWarning
                  );
                } else {
                }
              }
            }
          );
        }, 1e3 * 60 * 60 * 3);
      }
    };
    exports.refreshWeather = function (data) {
      var _dom = $("#s_mod_weather");
      if (!_dom.get(0) || !data.countyName) {
        return;
      }
      var contentData = data;
      F.use("weather/weather_tpl", function (WeatherTpl) {
        _dom
          .find(".city-wather")
          .attr(
            "href",
            "//www.baidu.com/s?tn=baidutop10&rsv_idx=2&wd=" +
              encodeURIComponent(contentData.countyName + "天气预报")
          );
        _dom.find(".show-city-name").html(contentData.countyName);
        var weatherIcon = _dom.find(".weather-icon");
        if (isNewStyle) {
          var iconUrl =
            "https://dss" +
            Math.floor(Math.random() * 3.9) +
            ".bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/weather/icons2/" +
            contentData.currentWeatherIcon +
            ".png";
          weatherIcon.attr("src", iconUrl);
        } else {
          weatherIcon.attr(
            "style",
            WeatherTpl.createIconUrl(
              WeatherTpl.randerImgPath(data, "png"),
              true
            )
          );
        }
        weatherIcon
          .next(".show-icon-temp")
          .html(contentData.currentTemp ? contentData.currentTemp + "℃" : "");
        var _po = contentData.pollution;
        if (+_po < 0) {
          _dom.find(".show-pollution").addClass("hide-pollution");
          _dom.addClass("no-polution-ie6");
        } else {
          var _polutionName = contentData.pollution
            ? WeatherTpl.pollutionLevel[contentData.pollution]
              ? WeatherTpl.pollutionLevel[contentData.pollution]
              : ""
            : "";
          _dom
            .find(".show-pollution")
            .removeClass("hide-pollution")
            .find(".show-polution-num")
            .html(contentData.pm25 ? contentData.pm25 : "")
            .parent();
          _dom
            .find(".show-polution-name")
            .html(_polutionName)
            .parent()
            .attr(
              "class",
              "show-airParm" +
                (+contentData.pollution >= 0
                  ? " polution-level-" + contentData.pollution
                  : "")
            );
          _dom.removeClass("no-polution-ie6");
        }
        $("#s_mod_weather .weather-bg").css(
          "width",
          _dom.find(".city-wather").get(0).offsetWidth
        );
        ctx.fire("settingsave", {});
      });
    };
  }
);
F.module("superman:start/skin_start", function (require, exports, ctx) {
  var _bgcolor = "",
    _definedGuideTipKey = s_session.userTips.definedGuideShowType;
  function _loadSkinAndLogo() {
    if (s_session.userIsNewSkined == "on") {
    }
  }
  exports.init = function (isbirthlogo) {
    ctx.use("skin/skin_rewrite", function (sr) {
      sr.setBg({
        userDefined: s_session.userSkinDefined,
        color: $(".s-skin-container").css("background-color")
          ? $(".s-skin-container").css("background-color")
          : "#fff",
        longUrl: decodeURIComponent(s_session.userSkinUrl),
        dataindex: s_session.userSkinName,
        logo: s_session.userSkinLogo,
      });
    });
  };
});
F.module("superman:skin/skin_rewrite", function (require, exports, ctx) {
  var _oldLogoUrl = s_session.userLogoSrc,
    _oldLogoUrlRe = s_session.userLogoSrcRe,
    _isBirthLogo = s_session._isBirthLogo,
    _isSetBgBefore = false,
    _skinTimer = null,
    _isSkined = s_session.userIsSkined,
    _modelsHeight = $("#s_main").offsetHeight,
    _isIE6HeightAuto = false,
    _bgHeightTimer = null,
    _ImgUrl = s_domain.staticUrl + "static/superman/img/logo/";
  function imgDomain(id) {
    var _id = id ? +id : 0;
    id = parseInt(id) || 0;
    return $.url.escapeSSL("http://" + (((id + 1) % 8) + 1) + ".su.bdimg.com/");
  }
  function theWholeImgUrl(imgobj) {
    return imgobj.userDefined == "on"
      ? decodeURIComponent(imgobj.longUrl)
      : imgDomain(imgobj.dataindex) + "skin/" + imgobj.dataindex + ".jpg?2";
  }
  function _addBg(imgobj, fn) {
    if (
      !imgobj ||
      (imgobj.userDefined == "on" && !imgobj.longUrl) ||
      (imgobj.userDefined != "on" && !imgobj.dataindex)
    ) {
      _isSetBgBefore = true;
      return;
    }
    _setUserUps("fullSkinName", imgobj.dataindex);
    !$.isIE6 &&
      $("#s_skin_opacity_set .bg-hideOrShowAjax").css("visibility", "visible");
    _removeLogoTitle();
    _imgurl = $.url.escapeSSL(theWholeImgUrl(imgobj));
    if (_isSetBgBefore) {
      if (window._sp_async) {
        var _body = $("#head");
      } else {
        var _body = $("body");
      }
      _body.addClass("s-skin-hasbg");
      _setLogoImg(imgobj.logo);
      _setAllBg(imgobj);
    } else {
      var _img = new Image();
      _img.src = _imgurl;
      imgLoad(_img, function () {
        _setAllBg(imgobj);
        listenResizeForIe();
      });
      _isSetBgBefore = true;
    }
    ctx.fire("skin_change", imgobj);
    _isSkined = "on";
    fn && fn();
  }
  function listenResizeForIe() {
    if (!$.browser.ie || $.browser.ie < 7 || $.browser.ie > 8) {
      return;
    }
    var imgDom = $(".s-skin-container img");
    var timer;
    var _resize = function () {
      var viewHeight = $(window).height(),
        viewWidth = $(window).width();
      if (viewWidth / viewHeight < 1.6) {
        imgDom.css("height", "100%");
      } else {
        imgDom.css("height", "auto");
      }
    };
    _resize();
    $(window).bind("resize", function (e) {
      clearInterval(timer);
      timer = setInterval(function () {
        _resize();
      }, 500);
    });
  }
  function _setAllBg(imgobj) {
    if (imgobj.dataindex < 0) {
      return;
    }
    if ($.isIE6) {
      _setBg4IE6(imgobj);
    } else {
      _setNotIE6Bg(imgobj);
    }
    _xman_speed.pushStTime &&
      _xman_speed.pushStTime("skin", new Date().getTime());
    $(window).trigger("s-skinon");
  }
  function _removeLogoTitle() {
    if (s_session.isFesLogo) {
      var _imgdom = $("#lg img");
      if (_imgdom) {
        _imgdom.attr("title", "");
        _imgdom.attr("cursor", "default");
      }
    }
  }
  function _setNotIE6Bg(imgobj) {
    var _skindoms = $(".s-skin-container");
    var _url = $.url.escapeSSL(theWholeImgUrl(imgobj));
    if (_skindoms.get(0)) {
      if ($.browser.ie < 9) {
        if (_skindoms.find("img")[0]) {
          $(_skindoms[0])
            .attr("style", "background-color:" + imgobj.color + ";")
            .find("img")
            .attr("src", _url);
        } else {
          $(_skindoms[0])
            .attr("style", "background-color:" + imgobj.color + ";")
            .html(
              '<img style="top:0;left:0;width:100%;position:fixed" src="' +
                _url +
                '">'
            );
        }
      } else {
        $(_skindoms[0]).attr(
          "style",
          "background-color:" +
            imgobj.color +
            ';background-image:url("' +
            _url +
            '");'
        );
        $(_skindoms[0]).find("img").remove();
      }
    } else {
      var _tpl =
          $.browser.ie < 9
            ? '<div class="s-skin-container" style="background-color:#{bgcolor};"><img style="top:0;left:0;height:100%;width:100%;position:fixed" src="#{bgimg}"></div>'
            : '<div class="s-skin-container" style="background-color:#{bgcolor};background-image:#{bgimg}"></div>',
        _skinHtml = $.formatString(_tpl, {
          bgcolor: imgobj.color,
          bgimg: $.browser.ie ? _url : "url('" + _url + "')",
        });
      if (window._sp_async) {
        $("#head").prepend(_tpl);
      } else {
        $("body").prepend(_tpl);
      }
    }
    _removeBgNoneCls();
  }
  function _setBg4IE6(imgobj) {
    var _bgcolordom = $(".s-skin-container");
    _bgcolordom && _bgcolordom[0] && $(_bgcolordom[0]).remove();
    var _bg =
      "url('" +
      theWholeImgUrl(imgobj) +
      "') center 0px no-repeat fixed " +
      imgobj.color;
    if (window._sp_async) {
      $("body").css({ background: _bg, overflow: "visible" });
    } else {
      $("body").css({ background: _bg, overflow: "visible" });
    }
  }
  function _hackLogo4IE6() {
    var _lg = $("#lg img");
    if (_lg.get(0)) {
      if (s_session.userLogoIsFestival !== "1") {
        _lg.attr(
          "src",
          s_domain.staticUrl +
            "static/superman/img/logo/logo_white-deadc30bf7.gif"
        );
      }
      if (!$("#head").hasClass("white-logo")) {
        $("#head").addClass("white-logo");
      }
    }
  }
  function _removeLogoTip() {
    var _logoTip = $("s_skin_logotip");
    _logoTip && _logoTip.remove();
  }
  function _removeBgNoneCls() {
    $.each($.makeArray($(".s-skin-container")), function (item, i) {
      $(item).removeClass("container-none");
    });
  }
  function _setLogoImg(imgName) {
    if (_isBirthLogo) {
      return;
    }
    var _imgLogo = $("#lg img"),
      _imgName = imgName ? imgName + ".png" : "logo_white.png",
      _docBody;
    if (window._sp_async) {
      _docBody = $("#head");
    } else {
      _docBody = $("body");
    }
    if ($.isIE6) {
      _hackLogo4IE6();
      return;
    }
    if (s_session.userLogoIsFestival !== "1") {
      if (_imgLogo.attr("src") != _ImgUrl + _imgName) {
        _imgLogo.attr("src", _ImgUrl + _imgName);
      }
    }
    switch (imgName) {
      case "logo_redBlue":
        if (_docBody.hasClass("white-logo")) {
          _docBody.removeClass("white-logo");
        }
        if (!_docBody.hasClass("red-blue-logo")) {
          _docBody.addClass("red-blue-logo");
        }
        break;
      case "logo_white":
      default:
        if (_docBody.hasClass("red-blue-logo")) {
          _docBody.removeClass("red-blue-logo");
        }
        if (!_docBody.hasClass("white-logo")) {
          _docBody.addClass("white-logo");
        }
        break;
    }
    s_session.userSkinLogo = imgName ? imgName : "logo_white";
  }
  function _removeBg(fn) {
    !$.isIE6 &&
      $("#s_skin_opacity_set .bg-hideOrShowAjax").css("visibility", "hidden");
    _setUserUps("fullSkinName", "0");
    var _skindoms = $(".s-skin-container");
    _skindoms.css("background", "none");
    $(window).trigger("s-skinoff");
    var img = _skindoms.find("img");
    img[0] && img.remove();
    var _mpname = _getMapName(),
      tips = "s-tips";
    if (_mpname) {
      $("#lg img").attr("usemap", _mpname);
    }
    if (window._sp_async) {
      var _skinModDom = $("#head");
    } else {
      var _skinModDom = $("body");
    }
    var _isShowSkinMod = _skinModDom.hasClass("s-show-skin")
      ? "s-show-skin"
      : "";
    if (!_skinModDom.hasClass(tips)) {
      tips = "";
    }
    _skinModDom.get(0).className = _isShowSkinMod;
    _skinModDom.addClass(tips);
    if ($.isIE6) {
      $(".has-background").css("background", "none");
      $("body").css("background", "none");
      _skinModDom.css("background", "none");
    }
    _isSkined = "off";
    fn && fn();
  }
  function _getMapName() {
    var _mapDom = $("#s_mp");
    if (_mapDom) {
      return "#" + _mapDom.attr("name");
    }
  }
  function _setUserUps(name, value, fn) {
    if (value == s_session.userSkinName) {
      fn && fn();
    } else {
      s_session.userSkinName = value;
      fn && fn();
    }
  }
  function imgLoad(img, callback) {
    img.complete || img.readyState == "loading" || img.readyState == "complete"
      ? callback()
      : (img.onload = callback);
  }
  exports.removeBg = _removeBg;
  exports.setBg = _addBg;
  exports.imgDomain = imgDomain;
  exports.setLogo = _setLogoImg;
  exports.imgLoad = imgLoad;
});
F.module("superman:mngr/top_layer", function (require, exports, ctx) {
  var _layerSwitch = { skin: false };
  var _changeLayerSwitch = function (val) {
    for (var i in _layerSwitch) {
      _layerSwitch[i] = false;
    }
    _layerSwitch[val] = true;
  };
  var _changeLayerWithSwitch = function () {
    for (var i in _layerSwitch) {
      if (!_layerSwitch[i]) _closeModLayer(i);
    }
  };
  var _closeModLayer = function (val) {
    switch (val) {
      case "skin":
        if ($("#s_skin_layer").get(0)) {
          F.call("superman:skin/skin_control", "hide", true);
        }
        break;
    }
  };
  exports.changeLayer = function (layer) {
    _changeLayerSwitch(layer);
    _changeLayerWithSwitch();
  };
});
F.module("superman:mngr/menu_user", function (require, exports, ctx) {
  var popup = null;
  var quitDialog = require("superman:mngr/quit_dialog");
  function changeAccount() {
    ctx.fire("userQuitClick", { userQuit: "changeaccount" });
    var loginurl =
      location.protocol +
      "//passport.baidu.com/passApi/js/uni_login_wrapper.js?cdnversion=" +
      new Date().getTime();
    $("#head").css("min-height", "");
    if (popup) {
      popup.show();
    } else {
      $.getScript(loginurl, function () {
        var config = {
          loginVersion: "v5",
          composeTemplate: 1,
          authsiteCfg: {
            act: "implicit",
            display: "popup",
            jumpUrl:
              location.protocol + "//www.baidu.com/cache/user/html/xd.html",
            onBindSuccess: function (url, obj) {
              var user = decodeURIComponent(
                obj.passport_uname || obj.displayname
              );
              bds.se.login.success(user);
              return false;
            },
          },
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
          tangram:
            !window.baidu ||
            !window.baidu.version ||
            baidu.version.indexOf("2.") !== 0,
          onLoginSuccess: function (args) {},
        };
        popup = passport.pop.init(config);
        popup.show();
      });
    }
  }
  var menuTimer = null;
  function showMenu(menu, target) {
    clearTimeout(menuTimer);
    var pos =
      $(document.body).width() -
      target.offset().left -
      menu.width() / 2 -
      target.width() / 2;
    menu.css({ display: "block", right: pos });
  }
  function hideMenu(menu) {
    menuTimer = setTimeout(function () {
      menu.hide();
    }, 200);
  }
  function bindEvent() {
    var userMenu = $("#s-user-name-menu");
    var settingMenu = $("#s-user-setting-menu");
    userMenu.find(".s-switch-accunt").on("click", function (e) {
      e.preventDefault();
      changeAccount();
    });
    userMenu.find(".quit").on("click", function (e) {
      e.preventDefault();
      ctx.fire("categoryClick", { category: "tjlogout" });
      quitDialog.init();
    });
    $("#s-top-username")
      .on("mouseenter", function (e) {
        showMenu(userMenu, $(this));
        settingMenu.hide();
      })
      .on("mouseleave", function () {
        hideMenu(userMenu);
      });
    userMenu
      .on("mouseenter", function (e) {
        clearTimeout(menuTimer);
      })
      .on("mouseleave", function () {
        hideMenu(userMenu);
      });
    userMenu.find(".s-msg").on("mousedown", function () {
      ctx.fire("categoryClick", {
        category: "msg",
        hasNews: userMenu.find(".s-msg-count").text() === "" ? 0 : 1,
      });
    });
  }
  function init() {
    bindEvent();
  }
  exports.init = init;
});
F.module("superman:mngr/menu_common", function (require, exports, ctx) {
  var opt = {};
  opt.baseParams = {
    ct: 2,
    qid: s_session.seqId,
    sid: s_session.sid,
    ssid: s_session.logPortrait,
    logid: s_session.logId || "0",
    _r: Math.random(),
  };
  var thunder = window.Thunder.get(opt);
  var thunderlogClick = {
    tid: 11546,
    logFrom: "feed_index",
    logInfo: "tts_click",
    logExtra: { type: "tts_switch_click", value: "" },
  };
  var urlSid = s_session.sid;
  function showHomepageTtsStatus() {
    var top = this;
    var _ctx = this;
    if ($.isIE6) {
      top = $(window).height() / 2 + $(window).scrollTop();
    } else {
      top = "50%";
    }
    if (_ctx.TtsPannel) {
      _ctx.TtsPannel.hide();
    }
    var text = "已为您关闭播报";
    F.use("superman:superuijs/component/dialog", function (Dialog) {
      _ctx.TtsPannel = new Dialog({
        identity: "homepageCloseTts",
        content: '<span class="homepage-tts-pannel-text">' + text + "</span>",
        theme: "homepage-tts-pannel",
        hasClose: false,
        hasMask: false,
        width: 113,
        height: 34,
        top: top,
      });
      $("#sui-dialog-mask").on("click", function () {
        _ctx.TtsPannel.hide();
      });
    });
    setTimeout(function () {
      _ctx.TtsPannel.hide();
    }, 1500);
  }
  function bindHideFeedEvent() {
    var $ttsBtn = $("#s-user-setting-menu .s-set-homepage-tts");
    $("#s-user-setting-menu .hide-feed").click(function () {
      $ttsBtn.css({ display: "none" });
      ctx.fire("hideMain");
      ctx.fire("categoryClick", { category: "tjhidefeed" });
    });
    $("#s-user-setting-menu .show-feed").click(function () {
      var bsToken = ($("#bsToken") && $("#bsToken").val()) || "";
      var hrefUrl =
        location.protocol +
        "//" +
        location.host +
        "/home/data/liteon?bsToken=" +
        bsToken;
      window.location.href = hrefUrl;
      ctx.fire("categoryClick", {
        category: "tjshowfeed",
      });
    });
    $("#s-user-setting-menu .set-close-homepage-tts").click(function () {
      showHomepageTtsStatus();
      UPS.set("homepageTTS", "0");
      UPS.save(function () {
        if ($(".s-manhattan-index").hasClass("open-homepage-tts")) {
          $(".s-manhattan-index").removeClass("open-homepage-tts");
        }
      });
      $(".set-close-homepage-tts").css({ display: "none" });
      $(".set-open-homepage-tts").css({ display: "inline-block" });
      var thunderlog = $.extend(true, {}, thunderlogClick);
      thunderlog.logExtra.value = "off";
      thunderlog.logExtra = $.stringify(thunderlog.logExtra);
      thunder.send(thunderlog);
    });
    $("#s-user-setting-menu .set-open-homepage-tts").click(function () {
      UPS.set("homepageTTS", "1");
      UPS.save(function () {
        if (!$(".s-manhattan-index").hasClass("open-homepage-tts")) {
          $(".s-manhattan-index").addClass("open-homepage-tts");
        }
      });
      $(".set-close-homepage-tts").css({ display: "inline-block" });
      $(".set-open-homepage-tts").css({ display: "none" });
      var thunderlog = $.extend(true, {}, thunderlogClick);
      thunderlog.logExtra.value = "on";
      thunderlog.logExtra = $.stringify(thunderlog.logExtra);
      thunder.send(thunderlog);
    });
  }
  function bindSetSkinEvent() {
    var hideRedpoint = "0";
    try {
      hideRedpoint = window.localStorage.getItem("hide_redpoint_skin_new");
    } catch (e) {}
    if (hideRedpoint !== "1") {
      $("#s-user-setting-menu .s-set-skin").addClass("red-point");
    }
    $("#s-user-setting-menu .s-set-skin").on("click", function () {
      ctx.use("skin/skin_init_new", function (si) {
        si.init();
      });
      try {
        window.localStorage.setItem("hide_redpoint_skin_new", "1");
        $("#s-user-setting-menu .s-set-skin").removeClass("red-point");
      } catch (e) {}
      ctx.fire("categoryClick", { category: "skin" });
    });
  }
  function init() {
    bindHideFeedEvent();
    bindSetSkinEvent();
  }
  exports.init = init;
});
F.module("superman:mngr/quit_dialog", function (require, exports, ctx) {
  var quitDialog = null;
  var PlaceHolder = require("superman:superuijs/component/placeholder");
  var setinter = null;
  function setStore(tpl, key, value, cb) {
    var obj = {},
      submitUrl = "/home/xman/submit/";
    obj[tpl] = obj[tpl] || {};
    if (typeof value != "string") {
      value = $.stringify(value);
    }
    $.ajaxpost(
      submitUrl + "xcardstore",
      { tpl: tpl, key: key, value: value, cmd: "set" },
      function (data) {
        obj[tpl].key = value;
        cb && cb(data.errNo);
      }
    );
  }
  function placeHolder() {
    if ("placeholder" in document.createElement("input")) {
      return;
    }
    new PlaceHolder({
      componentWrap: $("#s_feedback_home .dialog-text-wrap"),
      top: 7,
      left: 0,
      identity: "superplus",
      target: $("#suggest_con"),
      holderText: "留下您宝贵的意见，我们会努力改进",
      width: 250,
      height: 24,
      lineheight: 24,
      font: 13,
    });
    new PlaceHolder({
      componentWrap: $("#s_feedback_home .dialog-input-wrap"),
      top: 4,
      left: 0,
      identity: "superplus",
      target: $("#s_user_contact"),
      holderText: "留下您的联系方式，方便我们及时回复您",
      width: 250,
      height: 24,
      lineheight: 24,
      font: 13,
    });
  }
  function checkboxHtml(customClass) {
    return [
      '<span class="c-checkbox ' + customClass + '">',
      '<span class="c-checkbox-inner">',
      '<span class="c-icon c-checkbox-inner-bg">&#xe611;</span>',
      '<span class="c-icon c-checkbox-inner-i">&#xe61a;</span>',
      "</span>",
      "</span>",
    ].join("");
  }
  function getDialogHtml(data) {
    var tipcon = [
      '<div class="dialog-con-wrap c-font-normal c-color-t" id="dialog_con_wrap">',
      '<i class="c-icon dialog-close">&#xe610;</i>',
      '<p class="c-font-large dialog-title">您确定要退出吗？</p>',
      '<iframe style="display:none;" name="s_homelogout_frame"></iframe>',
      '<div class="c-color-gray">退出后 “我的导航” 、 “我的股票” 、 “音乐” 及 “换肤” 功能将无法使用</div>',
      "#{detail}",
      '<div class="dialog-foot c-gap-top-large">',
      '<div class="dialog-foot-right">',
      '<span class="dialog-btn-ok c-btn c-gap-right-large">退出</span>',
      '<span class="dialog-btn-cancel c-btn c-btn-primary">保持登录</span>',
      "</div>",
      '<div class="dialog-feedback-btn">',
      checkboxHtml("dialog-feedback-checkbox"),
      '<span class="c-gap-left-small dialog-feedback-text">意见反馈</span>',
      "</div>",
      "</div>",
      "</div>",
    ].join("");
    var detailcon = [
      '<div class="dialog-detailcon">',
      '<form id= "s_feedback_home" target="s_homelogout_frame" action="#{actionurl}" method="post">',
      '<div class="dialog-con-title1 c-color-text c-gap-bottom">反馈类型：</div>',
      '<div class="dialog-con-option">',
      "#{spancon}",
      "</div>",
      '<div class="dialog-con-title2 c-color-text c-gap-bottom">其他建议：<span class="dialog-textarea-tip c-color-red c-gap-left-small">不能超过300个字哦，小度记不住啦!</span></div>',
      '<div class="dialog-text-wrap">',
      '<textarea class="dialog-textarea c-textarea" id="suggest_con" placeholder="留下您宝贵的意见，我们会努力改进" name="issuedesc" value style="resize:none;"></textarea>',
      "</div>",
      '<div class="dialog-con-title c-color-text c-gap-bottom">联系方式: <span class="dialog-input-tip c-color-red c-gap-left-small">不能超过100个字哦，小度记不住啦!</span></div>',
      '<div class="dialog-input-wrap">',
      '<input type="text" autocomplete="off" class="dialog-user-contact c-input" id="s_user_contact" placeholder="留下您的联系方式，方便我们及时回复您"  name="contactinfo" value style="resize:none;">',
      "</div>",
      '<input type="hidden" id="s_quit_necdata" name="necData">',
      "</form>",
      "</div>",
    ].join("");
    var sCon = "";
    var actionSrc = $.url.escapeSSL(
      "http://f3.baidu.com/index.php/feedback/zx/getData"
    );
    var opts = data.opts;
    for (var i = 0; i < opts.length; i++) {
      sCon += [
        '<span class="dialog-check-item" data-id = "' + opts[i].id + '">',
        checkboxHtml("c-gap-right-small"),
        '<span class="text">' + opts[i].title + "</span>",
        "</span>",
      ].join("");
    }
    var detailContent = $.formatString(detailcon, {
      spancon: sCon,
      actionurl: actionSrc,
    });
    var content = $.formatString(tipcon, { detail: detailContent });
    return content;
  }
  function quitEvent() {
    var suggestcon = "";
    var feedbackbtn = $("#dialog_con_wrap .dialog-feedback-btn");
    feedbackbtn.on("click", function () {
      var that = $(this);
      var spanchild = that.children(".dialog-feedback-checkbox");
      var clickok = spanchild.hasClass("c-checkbox-checked");
      if (clickok) {
        ctx.fire("userQuitClick", { userQuit: "suggestbtncancel" });
        $("#dialog_con_wrap .dialog-input-tip").hide();
        $("#dialog_con_wrap .dialog-textarea-tip").hide();
        $("#dialog_con_wrap .dialog-detailcon").hide();
        spanchild.removeClass("c-checkbox-checked");
      } else {
        ctx.fire("userQuitClick", { userQuit: "suggestbtnok" });
        spanchild.addClass("c-checkbox-checked");
        if ($.browser.ie == 7) {
          setTimeout(function () {
            $("#dialog_con_wrap .dialog-detailcon").show();
          }, 50);
        } else {
          $("#dialog_con_wrap .dialog-detailcon").show();
        }
      }
      setTimeout(function () {
        quitDialog.window.css({
          "margin-top": (-1 * quitDialog.window.height()) / 2 + "px",
        });
      }, 200);
    });
    $("#dialog_con_wrap .dialog-con-option").delegate(
      ".dialog-check-item",
      "click",
      function () {
        var that = $(this);
        var selectedid = that.attr("data-id");
        if (that.hasClass("c-checkbox-checked")) {
          ctx.fire("userQuitClick", {
            userQuit: "quitreasoncancel" + selectedid,
          });
          that.removeClass("c-checkbox-checked");
        } else {
          ctx.fire("userQuitClick", { userQuit: "quitreason" + selectedid });
          that.addClass("c-checkbox-checked");
        }
      }
    );
    $("#dialog_con_wrap .dialog-close").on("click", function (e) {
      ctx.fire("userQuitClick", { userQuit: "quitclose" });
      quitDialog.hide();
    });
    $("#dialog_con_wrap .dialog-btn-cancel").on("click", function () {
      ctx.fire("userQuitClick", { userQuit: "quitbtncancel" });
      quitDialog.hide();
    });
    $("#dialog_con_wrap .dialog-btn-ok").on("click", function () {
      var that = $(this),
        mydata = "",
        numitem = "",
        getSpan = $("#dialog_con_wrap .dialog-check-item"),
        spanlen = getSpan.length,
        contactuser = "",
        _contactuser = "",
        contactlen = "",
        other = "",
        len = 1;
      var conshow = $("#dialog_con_wrap .dialog-feedback-checkbox").hasClass(
        "c-checkbox-checked"
      );
      if (!conshow) {
        ctx.fire("userQuitClick", { userQuit: "quitbtnok" });
        quitAction();
        return;
      }
      getSpan.each(function (idx, item) {
        var _this = $(this),
          attrid = "";
        if (_this.hasClass("c-checkbox-checked")) {
          attrid = _this.attr("data-id");
          numitem += attrid;
          if (idx != spanlen - 1) {
            numitem += ",";
          }
        }
      });
      suggestcon = $("#suggest_con").val();
      contactuser = $("#s_user_contact").val();
      other = suggestcon.replace(
        /(^(\u3000|\s|\t|\u00A0)*)|((\u3000|\s|\t|\u00A0)*$)/g,
        ""
      );
      _contactuser = contactuser.replace(
        /(^(\u3000|\s|\t|\u00A0)*)|((\u3000|\s|\t|\u00A0)*$)/g,
        ""
      );
      len = other.length;
      contactlen = _contactuser.length;
      if (len > 300 || contactlen > 100) {
        if (len > 300) {
          $("#dialog_con_wrap .dialog-textarea-tip").show();
        } else {
          $("#dialog_con_wrap .dialog-input-tip").show();
        }
      } else {
        ctx.fire("userQuitClick", { userQuit: "quitbtnok" });
        mydata = { opts: numitem };
        $("#s_quit_necdata").val(
          $.stringify({
            product_id: 107,
            userAgent: navigator.userAgent,
            issuedesc: other,
            documentcookie: document.cookie,
            email: _contactuser,
            url: window.location.href,
          })
        );
        if (other != "") {
          $("#s_feedback_home").submit();
        }
        setStore("quitreason", "quitcon", mydata, function () {
          quitAction();
        });
      }
    });
  }
  function quitAction() {
    setTimeout(function () {
      window.location.href =
        "https://passport.baidu.com/?logout&u=https://www.baidu.com";
    }, 200);
  }
  function renderDialog(data) {
    var content = getDialogHtml(data);
    F.use("superman:superuijs/component/dialog", function (Dialog) {
      quitDialog = new Dialog({
        identity: "quit",
        content: content,
        width: 416,
        autoShow: true,
        theme: "quite",
        hasClose: false,
        dialogClassName: "s-quit-dialog",
        position: function () {
          return {
            top: $.isIE === 6 ? $(window).height() / 2 : "50%",
            left: "50%",
            "margin-left": -246,
            "margin-top": -75,
          };
        },
      });
      placeHolder();
      quitEvent();
    });
  }
  function quitRequest() {
    $.ajaxget(
      "/home/xman/data/exitfankui",
      function (data) {
        if (data.errNo != 0) {
          location.href =
            "https://passport.baidu.com/?logout&u=https://www.baidu.com";
          return;
        }
        var getData = data.bsData;
        renderDialog(getData);
      },
      true
    );
  }
  function quitDialogShow() {
    $("#dialog_con_wrap .dialog-input-tip").hide();
    $("#dialog_con_wrap .dialog-textarea-tip").hide();
    $("#dialog_con_wrap .dialog-detailcon").hide();
    $("#dialog_con_wrap .dialog-feedback-checkbox").removeClass(
      "c-checkbox-checked"
    );
    $("#dialog_con_wrap #suggest_con").val("");
    $("#dialog_con_wrap #s_user_contact").val("");
    clearTimeout(setinter);
    $("#dialog_con_wrap .dialog-check-item").removeClass("c-checkbox-checked");
    placeHolder();
    quitDialog.show();
  }
  function init() {
    if (quitDialog) {
      quitDialogShow();
    } else {
      quitRequest();
    }
  }
  exports.init = init;
});
F.addLog("superman:mngr/top_menunav_new", { tipsClose: "2300100001" });
F.module("superman:mngr/top_menunav_new", function (require, exports, ctx) {
  var pslog = require("superman:ps/log");
  var keyMap = pslog.keyMap;
  keyMap = $.extend(keyMap, { 百度营销: "tjyingxiao", 风云榜: "tjbang" });
  function log(that) {
    var key = that.text().replace(/[\s\t\xa0\u3000]/g, "");
    if (keyMap[key]) {
      pslog.fireLog(keyMap[key], { url: that.attr("href") });
    }
  }
  function initLog() {
    $("#s-top-more").on("mousedown", ".s-top-more-content a", function () {
      log($(this));
    });
  }
  exports.init = function () {
    initLog();
  };
});
F.module("superman:common/guide_tip", function (require, exports, ctx) {
  require("guide.css");
  var tpl = {
    guide:
      '<span #{id} class="s-guide-tip#{yahei}" #{guideStyle}><span class="#{innerClass}" #{innerStyle}>#{content}</span></span>',
    arrow: '<span class="#{arrowClass}" #{arrowStyle}></span>',
    content:
      '<span class="#{contentClass}" #{contentStyle}><span class="tip-content-msg" #{msgStyle}>#{content}</span>#{close}</span>',
    close:
      '<a class="guide-tip-close" #{closeStyle} href="#" onclick="return false;" hidefocus="true"></a>',
  };
  exports.render = function (cfg) {
    var arrowHtml = "";
    if (cfg.arrowType) {
      arrowHtml = $.formatString(tpl.arrow, {
        arrowClass: "guide-tip-arrow-" + cfg.arrowType,
        arrowStyle: 'style="left:' + cfg.arrowPosLeft + 'px;"',
      });
    }
    var msgStyle = cfg.textAlign ? "text-align:" + cfg.textAlign + ";" : "";
    msgStyle += cfg.width
      ? "width: " + (cfg.hasClose ? cfg.width - 11 : cfg.width) + "px;"
      : "";
    var closeStyle = cfg.type == "insert" ? 'style="position:relative;"' : "";
    var contentHtml = $.formatString(tpl.content, {
      content: cfg.content,
      contentClass: cfg.arrowType
        ? "guide-tip-content-" + cfg.arrowType
        : "guide-tip-content",
      contentStyle: cfg.width ? 'style="width:' + cfg.width + 'px;"' : "",
      msgStyle: 'style="' + msgStyle + '"',
      close: cfg.hasClose
        ? $.formatString(tpl.close, { closeStyle: closeStyle })
        : "",
    });
    var guideStyle = cfg.width ? "width:" + cfg.width + "px;" : "";
    guideStyle +=
      cfg.pos && cfg.pos.left ? "left: " + cfg.pos.left + "px;" : "";
    guideStyle += cfg.pos && cfg.pos.top ? "top: " + cfg.pos.top + "px;" : "";
    guideStyle += !cfg.type ? "position:absolute; z-index: 1999;" : "";
    var innerStyle = "";
    if (cfg.arrowType == "up") {
      innerStyle = "margin-top: 10px;";
    } else if (cfg.arrowType == "down") {
      innerStyle = "margin-bottom:12px;";
    }
    if ($.isIE6 && cfg.arrowType == "down") {
      innerStyle += "padding: 6px 10px;";
    }
    var html = $.formatString(tpl.guide, {
      id: cfg.id ? 'id="' + cfg.id + '"' : "",
      yahei: cfg.withoutYahei ? "" : " yahei",
      innerClass: cfg.noShadow
        ? "guide-tip-inner guide-tip-shadow"
        : "guide-tip-inner",
      innerStyle: 'style="' + innerStyle + '"',
      guideStyle: 'style="' + guideStyle + '"',
      content:
        cfg.arrowType == "up"
          ? arrowHtml + contentHtml
          : contentHtml + arrowHtml,
    });
    return html;
  };
});
F.addLog("superman:page", {
  ieHomePage: "9000100000",
  viewRange: "9000300000",
});
F.module("superman:page/page_exp", function (require, exports, ctx) {
  var ieHomePageEXP = function () {
    if (!$.browser.ie) {
      return;
    }
    var _check = function () {
      try {
        $("body").append(
          '<div id="s_homepage_href" style="display:none;behavior:url(\'#default#homePage\')"></div>'
        );
        var hpFlag = document
          .getElementById("s_homepage_href")
          .isHomePage("http://www.baidu.com/")
          ? 1
          : 0;
        ctx.fire("ieHomePage", { opType: hpFlag });
      } catch (e) {}
    };
    _check();
  };
  var viewHeightEXP = function () {
    var vh = $(window).height(),
      bh = $("body").height();
    var viewrange = 10;
    var viewover = vh < bh ? 1 : 0;
    viewrange = Math.ceil(vh / 50);
    if (viewrange < 10) {
      viewrange = 10;
    } else if (viewrange > 30) {
      viewrange = 30;
    }
    ctx.fire("viewRange", {
      isover: viewover,
      range: viewrange,
      vh: vh,
      bh: bh,
    });
  };
  var initExp = function (st, en, pvrate, fn) {
    st = st || 0;
    en = en || 0;
    pvrate = pvrate || 0;
    if (sysTime > st && sysTime < en && Math.random() * 100 < pvrate) {
      fn && fn();
    }
  };
  exports.init = function () {
    if ($.browser.ie && +new Date() % 100 < 1) {
      ieHomePageEXP();
    }
    initExp(0, +new Date(2015, 0, 1, 0, 0, 0) / 1e3, 1, function () {
      viewHeightEXP();
    });
  };
});
