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
    var screnes = (function (_super) {
        __extends(screnes, _super);
        function screnes(width, height) {
            var _this = _super.call(this) || this;
            _this.SceneAction = scene.SceneAction;
            _this.width = width;
            _this.height = height;
            _this.addback();
            _this.addpop();
            _this.init();
            return _this;
        }
        screnes.prototype.addback = function () {
            this.back = new egret.Bitmap();
            this.back.texture = RES.getRes("timg_jpg");
            this.addChild(this.back);
            this.back.x = 0;
            this.back.y = 0;
            this.back.width = this.width;
        };
        screnes.prototype.addpop = function () {
            var skeletonData = RES.getRes("SwordsMan_json");
            var textureData = RES.getRes("texture_json");
            var texture = RES.getRes("texture_png");
            var factory = new dragonBones.EgretFactory();
            factory.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(skeletonData));
            factory.addTextureAtlas(new dragonBones.EgretTextureAtlas(texture, textureData));
            this.armature = factory.buildArmature("Swordsman");
            this.addChild(this.armature.display);
            dragonBones.WorldClock.clock.add(this.armature);
            this.armature.display.x = 300;
            this.armature.display.y = 600;
            this.armature.display.scaleY = 0.5;
            this.armature.display.scaleX = 0.5;
            this.armature.animation.gotoAndPlay("steady");
            egret.startTick(this.onTicker, this);
        };
        screnes.prototype.onTicker = function (timeStamp) {
            if (!this._time) {
                this._time = timeStamp;
            }
            var now = timeStamp;
            var pass = now - this._time;
            this._time = now;
            dragonBones.WorldClock.clock.advanceTime(pass / 1000);
            return false;
        };
        screnes.prototype.moveback = function (that, obj, callback) {
            egret.Tween.get(that).to(obj, 800, egret.Ease.sineIn).call(callback);
        };
        screnes.prototype.init = function () {
            var title = new egret.Bitmap();
            title.texture = RES.getRes("jianke_png");
            title.x = this.width / 2 - title.width / 4;
            title.y = 50;
            title.scaleX = 0.5;
            title.scaleY = 0.5;
            this.addChild(title);
            var btn = new egret.Bitmap();
            btn.texture = RES.getRes("begin_png");
            btn.x = this.width / 2 - btn.width / 4;
            btn.y = 200;
            btn.scaleX = 0.5;
            btn.scaleY = 0.5;
            btn.touchEnabled = true;
            this.addChild(btn);
            btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
                var that = this;
                if (this.onAction) {
                    this.moveback(that.back, {
                        width: that.width * 1.5,
                        height: that.height * 1.5
                    }, function () {
                        that.onAction(SceneAction.GAME_MAIN_ACTION);
                        egret.stopTick(that.onTicker, that);
                    });
                }
            }, this);
            var btn2 = new egret.Bitmap();
            btn2.texture = RES.getRes("help_png");
            btn2.x = this.width / 2 - btn2.width / 4;
            btn2.y = 300;
            btn2.scaleX = 0.5;
            btn2.scaleY = 0.5;
            btn2.touchEnabled = true;
            this.addChild(btn2);
            btn2.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
                if (this.onAction) {
                    egret.stopTick(this.onTicker, this);
                    this.onAction(SceneAction.GAME_MAIN_ACTION);
                }
            }, this);
        };
        return screnes;
    }(egret.Sprite));
    sceners.screnes = screnes;
    __reflect(screnes.prototype, "sceners.screnes");
})(sceners || (sceners = {}));
//# sourceMappingURL=screnes.js.map