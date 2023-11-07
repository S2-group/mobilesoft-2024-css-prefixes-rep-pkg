F.module("superman:components/qrcode", function (require, exports, ctx) {
  var login1;
  var $qrcodeWrapper = $("#s_qrcode_nologin");
  var $qrTooltip = $(".qrcode-tooltip");
  var called = false;
  function loadScript(cb) {
    $.getScript(
      location.protocol +
        "//passport.baidu.com/passApi/js/wrapper.js?cdnversion=" +
        new Date().getTime(),
      function () {
        cb && cb();
      }
    );
  }
  function hoverHandler() {
    if (called) {
      $qrTooltip.hide();
      called = false;
      return;
    }
    ctx.fire("qrcodehover");
    called = true;
    $qrTooltip.show();
    if ($(".qrcode-tooltip").children().length > 2) {
      return;
    }
    loadScript(function () {
      passport.use(
        "login",
        { tangram: true, loginVersion: "v5", defaultCss: true },
        function (magic) {
          login1 = new magic.passport.login({
            product: "mn",
            loginType: 1,
            qrcodeLogin: 1,
            hasRegUrl: false,
            autosuggest: false,
            hasPlaceholder: false,
            u: window.document.location.href,
            staticPage:
              window.location.protocol +
              "//www.baidu.com/cache/user/html/v3Jump.html",
          });
          window.mmm = login1;
          login1.on("loginSuccess", function (evt) {
            evt.returnValue = false;
            ctx.fire("qrcodeloginsuccess");
            setTimeout(function () {
              window.document.location.href = window.document.location.href;
            }, 500);
          });
          login1.on("render", function () {
            var success = $qrTooltip.find(
              ".Qrcode-status-success > p.Qrcode-status-msg"
            );
            var refresh = $qrTooltip.find(
              ".Qrcode-status-refresh > p.refresh-timeout"
            );
            var refreshIcon = $qrTooltip.find(
              ".Qrcode-status-refresh > p.Qrcode-status-icon"
            );
            var error = $qrTooltip.find(
              ".Qrcode-status-error > p.Qrcode-status-icon+p"
            );
            var errorIcon = $qrTooltip.find(
              ".Qrcode-status-error > p.Qrcode-status-icon"
            );
            $(refreshIcon).addClass("c-icon").html("&#xe622;");
            $(errorIcon).addClass("c-icon").html("&#xe622;");
            var text = $qrTooltip.find(
              ".Qrcode-status-success > p.Qrcode-status-icon+p"
            );
            $(success).hide();
            text.innerText = "扫码成功";
            refresh.innerText = "二维码失效";
            error.innerText = "加载失败";
            $(".refresh-loadout").text("加载失败").css({ color: "#9195a3" });
          });
          login1.render("qrcode-login-wrapper");
        }
      );
    });
  }
  exports.init = function () {
    $qrcodeWrapper.hover(hoverHandler);
    loadScript();
  };
});
F.addLog("superman:components/qrcode", ["qrcodehover"]);
F.addLog("superman:components/qrcode", ["qrcodeloginsuccess"]);
