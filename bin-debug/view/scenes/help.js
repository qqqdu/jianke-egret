var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../../rely/rely.d.ts"/>
var sceners;
(function (sceners) {
    var help = (function (_super) {
        __extends(help, _super);
        function help(width, height) {
            var _this = _super.call(this) || this;
            _this.width = width;
            _this.height = height;
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.loaderImg, _this);
            return _this;
        }
        help.prototype.loaderImg = function () {
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.imgLoadHandler, this);
            RES.loadConfig("resource/default.res.json", "resource/");
            RES.loadGroup("preload");
        };
        help.prototype.imgLoadHandler = function () {
            var rightBtn = new egret.Bitmap();
            rightBtn.texture = RES.getRes("jianke_png");
            this.addChild(rightBtn);
            // var text = new egret.TextField();
            // text.text = " 这是帮助页 ";
            // text.x = this.width/2-text.width;
            // text.y = this.height/2-text.height;
            // this.addChild(text);
            // var btn = new egret.TextField();
            // btn.text = ' 返回主页 ';
            // btn.x = this.width/2 - 20 - btn.width;
            // btn.y = this.height/2 - 20 - btn.height;
            // btn.touchEnabled = true;
            // this.addChild(btn);
            // btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function(e: egret.TouchEvent) {
            //     if (this.onAction) {
            //         this.onAction("HOME_ACTION");
            //     }
            // }, this);
        };
        return help;
    }(egret.Sprite));
    sceners.help = help;
    __reflect(help.prototype, "sceners.help");
})(sceners || (sceners = {}));
//# sourceMappingURL=help.js.map