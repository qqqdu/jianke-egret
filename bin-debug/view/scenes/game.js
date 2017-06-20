/// <reference path="../../rely/rely.d.ts"/>
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var sceners;
(function (sceners) {
    var game = (function (_super) {
        __extends(game, _super);
        //  steady2 飞翔 "walk2" 飞翔动  walk 奔跑 "jump" 原地跳跃 attack1 向前刺击 attack2 飞起落刃 attack1_+1向前刺激加强版
        function game(width, height) {
            var _this = _super.call(this) || this;
            _this.animateArr = ["steady", "steady2", "walk2", "walk", "jump", "attack1", "attack2", "attack1_+1"];
            _this.width = width;
            _this.height = height;
            _this.init();
            return _this;
        }
        game.prototype.init = function () {
            //加入背景
            this.bkgd = new sceners.bkgd(this.width, this.height);
            this.bkgd.addback(this);
            this.bkgd.rollIt();
            //加入猪脚
            this.heroObj = new sceners.heroObj(this.width, this.height, this);
            this.heroObj.addpop();
            this.heroObj.controlKey(this.bkgd);
            var btn = new egret.TextField();
            btn.text = ' 返回主页 ';
            btn.x = 900;
            btn.y = 30;
            btn.touchEnabled = true;
            this.addChild(btn);
            btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
                if (this.onAction) {
                    this.onAction("HOME_ACTION");
                }
            }, this);
        };
        game.prototype.addpop = function () {
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
            this.armature.display.scaleY = 0.3;
            this.armature.display.scaleX = 0.3;
            this.armature.animation.gotoAndPlay(this.animateArr[0]);
            egret.startTick(this.onTicker, this);
        };
        game.prototype.onTicker = function (timeStamp) {
            if (!this._time) {
                this._time = timeStamp;
            }
            var now = timeStamp;
            var pass = now - this._time;
            this._time = now;
            dragonBones.WorldClock.clock.advanceTime(pass / 1000);
            return false;
        };
        return game;
    }(egret.Sprite));
    sceners.game = game;
    __reflect(game.prototype, "sceners.game");
})(sceners || (sceners = {}));
//# sourceMappingURL=game.js.map