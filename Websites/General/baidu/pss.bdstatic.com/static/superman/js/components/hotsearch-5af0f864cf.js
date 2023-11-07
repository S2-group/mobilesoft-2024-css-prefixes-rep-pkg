F.addLog("superman:components/hotsearch", [
  "hotsearchClick",
  "hotsearchShow",
  "hotsearchSet",
  "newsClick",
]);
F.addLog("superman:components", { categoryClick: "1200100001" });
F.module("superman:components/hotsearch", function (require, exports, ctx) {
  var pageNum = 0;
  var hotsearchData;
  var totalPages;
  var $hotsearchWrapper = $(".s-hotsearch-wrapper");
  var $hotsearchContentWrapper = $hotsearchWrapper.find(
    "#hotsearch-content-wrapper"
  );
  var $hideHotsearchBtn = $("#s-user-setting-menu .s-set-hotsearch.set-hide");
  var $showHotsearchBtn = $("#s-user-setting-menu .s-set-hotsearch.set-show");
  function getHotsearchData() {
    try {
      hotsearchData = $.parseJSON($("#hotsearch_data").text()).hotsearch;
    } catch (err) {
      hotsearchData = [];
    }
    var hitSample =
      bds &&
      bds.comm &&
      bds.comm.sampleval &&
      bds.comm.sampleval.indexOf("new_hotitem_num") > -1;
    var perPage = hitSample ? 10 : 6;
    totalPages = Math.floor(hotsearchData.length / perPage);
    tempData = hotsearchData.map(function (item) {
      var newItem = item;
      newItem.index = parseInt(item.index, 10);
      if (newItem.index === -100) {
        newItem.isAd = true;
      } else if (newItem.index === 0) {
        newItem.isTop = true;
      }
      return newItem;
    });
    var current = 0;
    hotsearchData = [];
    while (current < totalPages) {
      hotsearchData.push(
        tempData.slice(current * perPage, current * perPage + perPage)
      );
      current++;
    }
  }
  function changeStatus(nodeA, nodeB) {
    nodeA.css("display", "none");
    nodeB.css("display", "inline-block");
  }
  function updateHotsearchItem(data, itemIndex) {
    var currentIndex = data.index;
    var $curDom = $hotsearchContentWrapper.find(
      '[data-index="' + itemIndex + '"]'
    );
    var $titleContent = $curDom.find(".title-content");
    var newDom = $curDom.html();
    $curDom.empty();
    $curDom.append(newDom);
    $curDom = $hotsearchContentWrapper.find('[data-index="' + itemIndex + '"]');
    $titleContent = $curDom.find(".title-content");
    var $titleIndex = $titleContent.find(".title-content-index");
    var $lastIndexClass = $titleIndex.attr("class") || "";
    var $titleMark = $curDom.find(".title-content-mark");
    var text = data.card_title;
    var tag = data.pre_tag;
    var link = decodeURIComponent(data.linkurl);
    $titleContent.attr("href", link);
    $titleContent.removeClass("tag-width");
    var title = $titleContent.find(".title-content-title");
    title.text(text);
    title.find(".title-content-icon").remove();
    if (tag) {
      var preImg = '<img class="title-content-icon" src="' + tag + '" />';
      title.prepend(preImg);
    }
    if (itemIndex === 0) {
      var $topWord = $curDom.find(".title-content-top-icon");
      data.isTop
        ? changeStatus($titleIndex, $topWord)
        : changeStatus($topWord, $titleIndex);
    } else if (itemIndex === 5 || itemIndex === 4) {
      var $adWord = $curDom.find(".title-content-noindex");
      data.isAd
        ? changeStatus($titleIndex, $adWord)
        : changeStatus($adWord, $titleIndex);
    }
    $titleIndex.removeClass();
    var newClass = $lastIndexClass.replace(
      /c-index-single-hot[^ ]+/,
      "c-index-single-hot" + currentIndex
    );
    $titleIndex.addClass(newClass);
    $titleIndex.text(currentIndex);
    var markClass = $titleMark.attr("class") || "c-text";
    $titleMark.removeClass();
    var HOT_TAGS = [
      "",
      "c-text-new",
      "c-text-business",
      "c-text-hot",
      "c-text-fei",
      "c-text-bao",
      "c-text-rec",
    ];
    var HOT_TAGS_TEXT = ["", "新", "商", "热", "沸", "爆", "荐"];
    var className = HOT_TAGS[data.hotTags] || "";
    $titleMark.addClass(
      markClass.replace(/c-text-[^ ]+/, "") + " " + className
    );
    $titleMark.text(HOT_TAGS_TEXT[data.hotTags]);
    if (className) {
      $titleContent.addClass("tag-width");
    }
  }
  function hotsearchRefreshHandler() {
    if (!hotsearchData) {
      getHotsearchData();
    }
    pageNum++;
    if (pageNum >= totalPages) {
      pageNum = 0;
    }
    hotsearchData[pageNum].forEach(updateHotsearchItem);
    sendHotsearchShowLog();
  }
  function bindHotSearchClickEvent() {
    $(".hot-title").click(function () {
      ctx.fire("hotsearchClick", {
        clickType: "hotSearchTitle",
      });
    });
  }
  function bindRefreshClickEvent() {
    $("#hotsearch-refresh-btn").click(function () {
      ctx.fire("newsClick", { clickType: "wordsChange" });
      hotsearchRefreshHandler();
      $(".c-icon").addClass("rotate");
      setTimeout(function () {
        $(".c-icon").removeClass("rotate");
      }, 200);
    });
  }
  function sendHotsearchShowLog() {
    var wordsStr = [];
    $hotsearchContentWrapper
      .find(".title-content-title")
      .map(function (index, dom) {
        wordsStr.push(dom.innerText);
      });
    ctx.fire("hotsearchShow", {
      showType: "hotword",
      words: $.stringify(wordsStr),
      pagenum: pageNum,
    });
  }
  function bindHotsearchItemClickEvent() {
    $hotsearchContentWrapper.find(".title-content").click(function () {
      ctx.fire("newsClick", {
        clickType: "wordTopic",
        newsType: "words",
        url: $(this).attr("href"),
        title: $(this).find(".title-content-title").text(),
        pagenum: pageNum,
        newsindex: $(this).closest(".hotsearch-item").attr("data-index"),
      });
    });
  }
  function judgeHotsearchStatus() {
    var isHideHotsearch = $.cookie.get("hide_hotsearch");
    if (isHideHotsearch !== "1") {
      showHotsearch();
    } else {
      hideHotsearch();
    }
  }
  function showHotsearch() {
    $hotsearchWrapper.removeClass("hide");
    $hideHotsearchBtn.show();
    $showHotsearchBtn.hide();
    $("#head_wrapper").removeClass("s-ps-islite");
  }
  function hideHotsearch() {
    $hotsearchWrapper.addClass("hide");
    $hideHotsearchBtn.hide();
    $showHotsearchBtn.show();
    $("#head_wrapper").addClass("s-ps-islite");
  }
  function bindShowAndHideHotsearchBtnClickEvent() {
    $showHotsearchBtn.click(function () {
      showHotsearch();
      $.cookie.remove("hide_hotsearch");
      ctx.fire("categoryClick", { category: "tjshowhotsearch" });
    });
    $hideHotsearchBtn.click(function () {
      hideHotsearch();
      var expiresDate = new Date();
      expiresDate.setTime(expiresDate.getTime() + 365 * 24 * 60 * 60 * 1e3);
      $.cookie.set("hide_hotsearch", 1, { path: "/", expires: expiresDate });
      ctx.fire("categoryClick", { category: "tjhidehotsearch" });
    });
  }
  function init() {
    bindHotSearchClickEvent();
    bindRefreshClickEvent();
    bindHotsearchItemClickEvent();
    bindShowAndHideHotsearchBtnClickEvent();
    sendHotsearchShowLog();
    judgeHotsearchStatus();
  }
  exports.init = init;
});
F.call("superman:components/hotsearch", "init");
