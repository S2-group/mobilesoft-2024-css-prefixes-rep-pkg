Bootstrapper.bindDependencyDOMParsed(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;window.isNewVersion="1";window.subscriptions=[];function getPlayer(){var videoplayer=null,videoPlayers=window.videojs.getAllPlayers();if(videoPlayers&&videoPlayers.length>0)videoplayer=videoPlayers&&videoPlayers.pop();return videoplayer}window.activePlayer="";window.visionMedia=function(){if(typeof VISION!=="undefined"&&VISION.videojsPlugin&&typeof vision!=="undefined"&&
vision.trackMedia)if(typeof videojs!=="undefined"){var playerInfo=getPlayer();if(playerInfo&&playerInfo.mediainfo){if(activePlayer===playerInfo.id())return;activePlayer=playerInfo.id();VISION.videojsPlugin(playerInfo,{},function(data,mediainfo){vision.trackMedia(data,mediainfo)});if(typeof __dataLayer!=="undefined"&&typeof __dataLayer.updateDataLayer==="function")__dataLayer.updateDataLayer(["currentVideo"],playerInfo.mediainfo)}}else if(typeof espn!=="undefined"&&espn.video&&espn.video.player){var player=
espn.video.player,videoId;if(player._playerExtension&&player._playerExtension._savedInitOptions)videoId=player._playerExtension._savedInitOptions.id;if(activePlayer===videoId)return;activePlayer=videoId;VISION.videojsPlugin(player,{},function(data,mediainfo){vision.trackMedia(data,mediainfo)})}};if(typeof espn!=="undefined"&&espn.video&&espn.video.subscribe){subscriptions.push(espn.video.subscribe("espn.video.play",visionMedia));subscriptions.push(espn.video.subscribe("espn.video.ad.load",visionMedia));
subscriptions.push(espn.video.subscribe("espn.video.ready",visionMedia))}else if(typeof fitt!=="undefined"&&fitt.emitter)subscriptions.push(fitt.emitter.on("espn.video",visionMedia))},3527525,[3874545],639884,[639683],24);