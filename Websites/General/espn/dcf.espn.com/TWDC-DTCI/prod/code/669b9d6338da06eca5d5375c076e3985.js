Bootstrapper.bindDOMParsed(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;Bootstrapper.propertyWatcher=function(options){var _private={watchers:[]};var _public={};_private.options=options||{};_private.options.interval=_private.options.interval||50;_private.Watcher=function(propertyFn,options){var _public={};_public.propertyFn=propertyFn;_public.lastValue=undefined;_public.options=options;_public.change=function(oldVal,newVal){};return _public};
_private.doChecks=function(){for(var i=0;i<_private.watchers.length;i++){var w=_private.watchers[i];var p=w.propertyFn?w.propertyFn():null;if(w.lastValue!=p){w.change(w.lastValue,p);w.lastValue=p;if(w.options)if(w.options.stopOnReturn)_private.watchers.splice(i,1)}}_private.resetTimer()};_private.resetTimer=function(){window.setTimeout(function(){_private.doChecks()},_private.options.interval)};_private.addWatcher=function(fn,options){var w=_private.Watcher(fn,options);_private.watchers.push(w);return w};
_public={create:_private.addWatcher};_private.doChecks();return _public}();if(/DZ|BH|EG|IQ|JO|KW|LB|LY|MR|MA|OM|PS|QA|SA|TN|AE|AO|BJ|BW|BF|BI|CM|CV|CF|TD|KM|CI|CD|DJ|GQ|ER|SZ|ET|TF|GA|GH|GW|GN|HM|KE|LS|LR|MG|MW|ML|MU|YT|MZ|NA|NE|NG|CG|RE|RW|SH|ST|SN|SC|SL|SO|ZA|TZ|GM|TG|UG|ZM|ZW|IL|EH|YE/i.test(Bootstrapper.Cookies.get("country"))||location.search.indexOf("narratiiveTest\x3dtrue")>-1)if(!!window._em&&!!window._em.trackAjaxPageview)_em.trackAjaxPageview();else{(function(t,r,a,c,k,n,o,w){t["em_ns"]=
k;w=1*new Date;t[k]=t[k]||function(){(t[k].q=t[k].q||[]).push(arguments)},t[k].t=w;n=r.createElement(a);n.async=1;n.src=c+"/tag"+(t.addEventListener&&"."||"_.")+"js?"+parseInt(w/1E9,10);o=r.getElementsByTagName(a)[0];o.parentNode.insertBefore(n,o)})(window,document,"script","https://t.effectivemeasure.net","_em");var w=Bootstrapper.propertyWatcher.create(function(){return document.querySelector(".stories-menu .active")});w.change=function(oldValue,newValue){if(newValue!="none"&&newValue!==oldValue&&
oldValue!==undefined)_em.trackAjaxPageview()}}},3531607,652317,-1);
Bootstrapper.bindImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;if(!!document.cookie.match(/country=sg/))Bootstrapper.loadScriptCallback("https://uid.mediacorp.sg/api/scripts/meid_partners.js?network\x3despn",function(){var meid=window.meid||Bootstrapper.Cookies.get("meid");googletag.cmd=googletag.cmd||[];googletag.pubads().setTargeting("meid",meid);googletag.pubads().setTargeting("meid_seg",window.meid_seg||Bootstrapper.Cookies.get("meid_seg"))})},
3427451,664622,-1);
Bootstrapper.bindDependencyImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;function initVision(){var app={app_id:__dataLayer.site.site},guestInfo={status:__dataLayer.pzn.login_status,entitlements:__dataLayer.pzn.entitlements},userab_1=__dataLayer.pzn.userab_1;var waitVision=setInterval(function(){if(typeof VISION!=="undefined"){clearInterval(waitVision);var environment=typeof espn!=="undefined"&&espn.i18n&&espn.i18n.environment?espn.i18n.environment:
typeof __espnfitt__!=="undefined"&&__espnfitt__.app&&__espnfitt__.app.envName?__espnfitt__.app.envName:"";var appUrl="https://vision.fn-pz.com/v2/";if(environment.indexOf("qa")===0)appUrl="https://vision.fn-pzqa.com/v2/";else if(environment.indexOf("local")===0||environment.indexOf("sandbox")===0)appUrl="https://vision.fn-pzdev.com/v2/";var visionConfigs={app_id:"espn-web",app_bundle_id:app.app_id,app_suite:"wdgespcom",app_platform:"web",app_version:"0",url:appUrl,debugMode:window.debugMode||null};
if(typeof __espnfitt__!=="undefined"){visionConfigs.flushAtEventCount=25;visionConfigs.flushIntervalSec=30}VISION.setConfigs(visionConfigs);if(userab_1)VISION.addTest("user_ab1",userab_1);var SWID=Bootstrapper.Cookies.get("SWID");var UNID=Bootstrapper.Cookies.get("UNID");if(SWID!=""){var loggedIn=SWID.indexOf("{")>=0;VISION.addGuestId(SWID,"swid",loggedIn,"primary")}if(UNID!="")VISION.addGuestId(UNID,"unid",false,"secondary");if(guestInfo.entitlements!=null)guestInfo.entitlements.split(",").map(function(s){return s.trim()}).filter(function(s){return s!==
""&&s!=="none"}).forEach(function(s){VISION.addSubscriptionId(s)});var did=DisneyID&&DisneyID.get();if(did)did.on("logout",function unsetSubs(){VISION.unsetAllSubscriptionId()});window.vision=new VISION;window.visionQ.runAll()}})}function trackVision(visionData){if(vision&&typeof vision.track==="function"&&visionData)vision.track(visionData)}if(typeof __dataLayer!=="undefined"&&typeof __dataLayer.subscribe==="function"){if(!window.visionQ)window.visionQ=new Bootstrapper.TrackQueue;initVision();var page=
__dataLayer.page||{},subscriptions=__dataLayer.subscribedEventNames||[],hasVisionSubscription=subscriptions.includes("__dataLayer.vision.track");window.visionParams={event_name:"page_view",page_url:page.page_url,page_location:page.page_location,page_nav_method:page.page_nav_method,page_type:page.page_type};window.visionQ.push(trackVision,{},window.visionParams);if(!hasVisionSubscription)__dataLayer.subscribe("vision.track",function(_visionData){var visionData=_visionData||{},vision=window.vision;
if(!visionData.event_name)visionData.event_name="pzncon";if(vision&&typeof vision.track==="function")trackVision(visionData);else window.visionQ.push(trackVision,{},visionData)})}},3874545,[3874542],639683,[736710],24);
Bootstrapper.bindDependencyImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;if(typeof __dataLayer!=="undefined"&&typeof __dataLayer.subscribe==="function"){var _dl=__dataLayer,site=_dl.site||{},siteName=site.site||"unknown",page=_dl.page||{},storyId=page.storyId,pageSection=page.section||"",gameDetail=page.game_detail||"",contentType=page.content_type||"",pageId=contentType,realHost=window.location.hostname||"",realPath=window.location.pathname||
"",configId,nielsenMetadata;configId=nielsenConfig.espn.static;if(pageSection.indexOf("fantasy")>-1||realHost.match(/\^fantasy\./)||realPath.match(/\/fantasy\//))configId=nielsenConfig.fantasy.static;else if(site.editionKey=="espn-es-us")configId=nielsenConfig.espndeportes.static;if(gameDetail)pageId=gameDetail.split("+")[0];else if(storyId)pageId=storyId;nielsenMetadata={type:"static",assetid:siteName+"_"+pageSection+"_"+pageId,section:pageSection,segA:contentType,segC:pageId};Bootstrapper.initNielsen(configId,
nielsenMetadata)}},3597229,[3877441],694693,[645962],24);