
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/game/game.js",
	"libs/modules/res/res.js",
	"libs/modules/tween/tween.js",
	"libs/modules/dragonBones/dragonBones.js",
	"polyfill/promise.js",
	"bin-debug/controller/command/injectFSMCommand.js",
	"bin-debug/scheme/sceneAction.js",
	"bin-debug/scheme/sceneState.js",
	"bin-debug/scheme/sceneFsm.js",
	"bin-debug/controller/command/startCommand.js",
	"bin-debug/facade/facade.js",
	"bin-debug/hitModel/hitTest.js",
	"bin-debug/LoadingUI.js",
	"bin-debug/Main.js",
	"bin-debug/model/proxy/heroProxy.js",
	"bin-debug/model/proxy/proxy.js",
	"bin-debug/controller/command/control.js",
	"bin-debug/controller/command/command_view.js",
	"bin-debug/controller/command/command_module.js",
	"bin-debug/scheme/sceneTransition.js",
	"bin-debug/view/mediator/game_media.js",
	"bin-debug/view/mediator/help_media.js",
	"bin-debug/view/mediator/media.js",
	"bin-debug/view/mediator/start_media.js",
	"bin-debug/view/scenes/bkgd.js",
	"bin-debug/view/scenes/game.js",
	"bin-debug/view/scenes/help.js",
	"bin-debug/view/scenes/heroObj.js",
	"bin-debug/view/scenes/map.js",
	"bin-debug/view/scenes/screnes.js",
	//----auto game_file_list end----
];

var window = this;

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    if(egret_native.featureEnable) {
        //控制一些优化方案是否开启
        var result = egret_native.featureEnable({
            
        });
    }
    egret_native.requireFiles();
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 30,
		scaleMode: "showAll",
		contentWidth: 1136,
		contentHeight: 629,
		showPaintRect: false,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel("/system/fonts/DroidSansFallback.ttf", 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};