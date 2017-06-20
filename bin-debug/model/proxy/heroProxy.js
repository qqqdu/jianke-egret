var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../../rely/rely.d.ts"/>
//背景对象
var spriteProxy;
(function (spriteProxy) {
    var heroProxy = (function (_super) {
        __extends(heroProxy, _super);
        function heroProxy(width, height) {
            var _this = _super.call(this) || this;
            _this.scale = 0.3;
            _this.x = 0;
            _this.y = -300;
            _this.animateArr = ["steady", "steady2", "walk2", "walk", "jump", "attack1", "attack2", "attack1_+1"];
            _this.VELOCITY_x = 120; //速度
            _this.VELOCITY_y = 70;
            _this.timeOnEnterFrame = 0; //上一帧秒数
            _this.width = width;
            _this.height = height;
            return _this;
        }
        heroProxy.prototype.addback = function (that) {
        };
        heroProxy.prototype.controlKey = function (bkgd) {
            var _this = this;
            this.bkgd = bkgd;
            var upEvent = function (code) {
                _this.armature.animation.gotoAndPlay(_this.animateArr[0]);
            };
            var upSelfEvent = function (code) {
                if (code === 37 || code === 39)
                    _this.bkgd.BACKGROUND_VELOCITY_x = 0;
                if (code === 38 || code === 40)
                    _this.bkgd.BACKGROUND_VELOCITY_y = 0;
            };
            keydown_event(37, function () {
                _this.armature.animation.gotoAndPlay(_this.animateArr[3]);
                _this.bkgd.BACKGROUND_VELOCITY_x = _this.VELOCITY_x;
                _this.armature.display.skewY = 180;
            }, upEvent, upSelfEvent);
            keydown_event(39, function () {
                _this.armature.animation.gotoAndPlay(_this.animateArr[3]);
                _this.bkgd.BACKGROUND_VELOCITY_x = -_this.VELOCITY_x;
                _this.armature.display.skewY = 0;
            }, upEvent, upSelfEvent);
            keydown_event(38, function () {
                _this.armature.animation.gotoAndPlay(_this.animateArr[3]);
                _this.bkgd.BACKGROUND_VELOCITY_y = _this.VELOCITY_y;
            }, upEvent, upSelfEvent);
            keydown_event(40, function () {
                _this.armature.animation.gotoAndPlay(_this.animateArr[3]);
                _this.bkgd.BACKGROUND_VELOCITY_y = -_this.VELOCITY_y;
            }, upEvent, upSelfEvent);
            keydown_event(67, function () {
                _this.armature.animation.gotoAndPlay(_this.animateArr[4], 0, 0, 1);
            });
            keydown_event(88, function () {
                _this.armature.animation.gotoAndPlay(_this.animateArr[5], 0, 0, 1);
            });
            keydown_event(90, function () {
                _this.armature.animation.gotoAndPlay(_this.animateArr[6], 0, 0, 1);
            });
            keydown_event(65, function () {
                _this.armature.animation.gotoAndPlay(_this.animateArr[7], 0, 0, 1);
            });
        };
        heroProxy.prototype.addpop = function (that) {
            var skeletonData = RES.getRes("SwordsMan_json");
            var textureData = RES.getRes("texture_json");
            var texture = RES.getRes("texture_png");
            var factory = new dragonBones.EgretFactory();
            factory.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(skeletonData));
            factory.addTextureAtlas(new dragonBones.EgretTextureAtlas(texture, textureData));
            this.armature = factory.buildArmature("Swordsman");
            that.addChild(this.armature.display);
            dragonBones.WorldClock.clock.add(this.armature);
            this.armature.display.x = 300;
            this.armature.display.y = 600;
            this.armature.display.scaleY = this.scale;
            this.armature.display.scaleX = this.scale;
            this.armature.animation.gotoAndPlay(this.animateArr[0]);
            egret.startTick(this.onTicker, this);
        };
        heroProxy.prototype.onTicker = function (timeStamp) {
            if (!this._time) {
                this._time = timeStamp;
            }
            var now = timeStamp;
            var pass = now - this._time;
            this._time = now;
            dragonBones.WorldClock.clock.advanceTime(pass / 1000);
            this.listenMove();
            return false;
        };
        heroProxy.prototype.listenMove = function () {
            this.armature.display.x = this.armature.display.x - sceners.heroObj.heroOffset_x;
            this.armature.display.y = this.armature.display.y - sceners.heroObj.heroOffset_y;
            if (this.armature.display.x <= this.armature.display.width * this.scale / 2) {
                this.armature.display.x = this.armature.display.width * this.scale / 2;
            }
            if (this.armature.display.x >= this.width - this.armature.display.width * this.scale / 2) {
                this.armature.display.x = this.width - this.armature.display.width * this.scale / 2;
            }
        };
        return heroProxy;
    }(puremvc.Proxy));
    heroProxy.heroOffset_x = 0; //偏移量
    heroProxy.heroOffset_y = 0;
    spriteProxy.heroProxy = heroProxy;
    __reflect(heroProxy.prototype, "spriteProxy.heroProxy");
})(spriteProxy || (spriteProxy = {}));
//# sourceMappingURL=heroProxy.js.map