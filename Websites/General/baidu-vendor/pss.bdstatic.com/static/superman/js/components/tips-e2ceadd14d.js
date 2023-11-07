F.addLog("superman:components/tips", ["tipsClick", "activityClick"]);
F.module("superman:components/tips", function (require, exports, ctx) {
  function init() {
    var $lmLink = $("#lm-new a");
    var activity = $("#bottom_layer .activity");
    if ($lmLink.size() > 0) {
      $lmLink.on("mousedown", function (e) {
        var $curLink = $(e.currentTarget);
        ctx.fire("tipsClick", {
          showType: $curLink.data("dataType"),
          clkText: $curLink.text(),
          clkImgUrl: $curLink.find("img").attr("src"),
        });
      });
    }
    if (activity.length > 0) {
      activity.on("mousedown", function () {
        ctx.fire("activityClick", { clickType: "activity" });
      });
    }
  }
  exports.init = init;
});
