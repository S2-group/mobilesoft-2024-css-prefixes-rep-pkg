(function(g){var window=this;'use strict';var zkb=function(a,b){g.X.call(this,{G:"button",Na:["ytp-miniplayer-expand-watch-page-button","ytp-button","ytp-miniplayer-button-top-left"],Y:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button","aria-keyshortcuts":"i","data-title-no-tooltip":"{{data-title-no-tooltip}}"},X:[{G:"svg",Y:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},X:[{G:"g",Y:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},X:[{G:"g",Y:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},
X:[{G:"path",Y:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",fill:"#fff","fill-rule":"nonzero"}}]}]}]}]});this.I=a;this.Ta("click",this.onClick,this);this.updateValue("title",g.rT(a,"Expand","i"));this.update({"data-title-no-tooltip":"Expand"});g.tb(this,g.lT(b.Hc(),this.element))},Akb=function(a){g.X.call(this,{G:"div",
S:"ytp-miniplayer-ui"});this.yg=!1;this.player=a;this.T(a,"minimized",this.Ah);this.T(a,"onStateChange",this.GQ)},Bkb=function(a){g.XT.call(this,a);
this.u=new g.LK(this);this.j=new Akb(this.player);this.j.hide();g.YS(this.player,this.j.element,4);a.Ag()&&(this.load(),g.Pq(a.getRootNode(),"ytp-player-minimized",!0))};
g.w(zkb,g.X);zkb.prototype.onClick=function(){this.I.Qa("onExpandMiniplayer")};g.w(Akb,g.X);g.k=Akb.prototype;
g.k.AN=function(){this.tooltip=new g.xW(this.player,this);g.H(this,this.tooltip);g.YS(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Yc=new g.GU(this.player);g.H(this,this.Yc);this.Ak=new g.X({G:"div",S:"ytp-miniplayer-scrim"});g.H(this,this.Ak);this.Ak.Ja(this.element);this.T(this.Ak.element,"click",this.gI);var a=new g.X({G:"button",Na:["ytp-miniplayer-close-button","ytp-button"],Y:{"aria-label":"Close"},X:[g.gR()]});g.H(this,a);a.Ja(this.Ak.element);this.T(a.element,"click",this.Dp);
a=new zkb(this.player,this);g.H(this,a);a.Ja(this.Ak.element);this.vv=new g.X({G:"div",S:"ytp-miniplayer-controls"});g.H(this,this.vv);this.vv.Ja(this.Ak.element);this.T(this.vv.element,"click",this.gI);var b=new g.X({G:"div",S:"ytp-miniplayer-button-container"});g.H(this,b);b.Ja(this.vv.element);a=new g.X({G:"div",S:"ytp-miniplayer-play-button-container"});g.H(this,a);a.Ja(this.vv.element);var c=new g.X({G:"div",S:"ytp-miniplayer-button-container"});g.H(this,c);c.Ja(this.vv.element);this.mY=new g.KV(this.player,
this,!1);g.H(this,this.mY);this.mY.Ja(b.element);b=new g.JV(this.player,this);g.H(this,b);b.Ja(a.element);this.nextButton=new g.KV(this.player,this,!0);g.H(this,this.nextButton);this.nextButton.Ja(c.element);this.Oj=new g.qW(this.player,this);g.H(this,this.Oj);this.Oj.Ja(this.Ak.element);this.Pc=new g.PV(this.player,this);g.H(this,this.Pc);g.YS(this.player,this.Pc.element,4);this.RH=new g.X({G:"div",S:"ytp-miniplayer-buttons"});g.H(this,this.RH);g.YS(this.player,this.RH.element,4);a=new g.X({G:"button",
Na:["ytp-miniplayer-close-button","ytp-button"],Y:{"aria-label":"Close"},X:[g.gR()]});g.H(this,a);a.Ja(this.RH.element);this.T(a.element,"click",this.Dp);a=new g.X({G:"button",Na:["ytp-miniplayer-replay-button","ytp-button"],Y:{"aria-label":"Close"},X:[g.aFa()]});g.H(this,a);a.Ja(this.RH.element);this.T(a.element,"click",this.m8);this.T(this.player,"presentingplayerstatechange",this.Md);this.T(this.player,"appresize",this.Kb);this.T(this.player,"fullscreentoggled",this.Kb);this.Kb()};
g.k.show=function(){this.Af=new g.Bq(this.qw,null,this);this.Af.start();this.yg||(this.AN(),this.yg=!0);0!==this.player.getPlayerState()&&g.X.prototype.show.call(this);this.Pc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Af&&(this.Af.dispose(),this.Af=void 0);g.X.prototype.hide.call(this);this.player.Ag()||(this.yg&&this.Pc.hide(),this.player.loadModule("annotations_module"))};
g.k.xa=function(){this.Af&&(this.Af.dispose(),this.Af=void 0);g.X.prototype.xa.call(this)};
g.k.Dp=function(){this.player.stopVideo();this.player.Qa("onCloseMiniplayer")};
g.k.m8=function(){this.player.playVideo()};
g.k.gI=function(a){if(a.target===this.Ak.element||a.target===this.vv.element)g.eQ(this.player.Nb())?this.player.pauseVideo():this.player.playVideo()};
g.k.Ah=function(){g.Pq(this.player.getRootNode(),"ytp-player-minimized",this.player.Ag())};
g.k.cf=function(){this.Pc.Bc();this.Oj.Bc()};
g.k.qw=function(){this.cf();this.Af&&this.Af.start()};
g.k.Md=function(a){g.zP(a.state,32)&&this.tooltip.hide()};
g.k.Kb=function(){g.aW(this.Pc,0,this.player.qb().getPlayerSize().width,!1);g.QV(this.Pc)};
g.k.GQ=function(a){this.player.Ag()&&(0===a?this.hide():this.show())};
g.k.Hc=function(){return this.tooltip};
g.k.Mg=function(){return!1};
g.k.kh=function(){return!1};
g.k.qm=function(){return!1};
g.k.fJ=function(){};
g.k.mq=function(){};
g.k.Ty=function(){};
g.k.hn=function(){return null};
g.k.IG=function(){return null};
g.k.QM=function(){return new g.ye(0,0)};
g.k.Uk=function(){return new g.Kn(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Cw=function(a,b,c,d,e){var f=0,h=d=0,l=g.mo(a);if(b){c=g.Kq(b,"ytp-prev-button")||g.Kq(b,"ytp-next-button");var m=g.Kq(b,"ytp-play-button"),n=g.Kq(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Wn(b,this.element),h=b.x,f=b.y-12):n&&(h=g.Kq(b,"ytp-miniplayer-button-top-left"),f=g.Wn(b,this.element),b=g.mo(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.qb().getPlayerSize().width;e=f+(e||0);l=g.qe(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Pp=function(){};
g.k.fm=function(){return!1};
g.k.JE=function(){};
g.k.vA=function(){};
g.k.Kr=function(){};
g.k.Jr=function(){};
g.k.qy=function(){};
g.k.Ps=function(){};
g.k.tE=function(){};g.w(Bkb,g.XT);g.k=Bkb.prototype;g.k.onVideoDataChange=function(){if(this.player.getVideoData()){var a=this.player.getVideoAspectRatio(),b=16/9;a=a>b+.1||a<b-.1;g.Pq(this.player.getRootNode(),"ytp-rounded-miniplayer-not-regular-wide-video",a)}};
g.k.create=function(){g.XT.prototype.create.call(this);this.u.T(this.player,"videodatachange",this.onVideoDataChange);this.onVideoDataChange()};
g.k.ul=function(){return!1};
g.k.load=function(){this.player.hideControls();this.j.show()};
g.k.unload=function(){this.player.showControls();this.j.hide()};g.WT("miniplayer",Bkb);})(_yt_player);
