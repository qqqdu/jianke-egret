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
var sceners;
(function (sceners) {
    var bkgd = (function (_super) {
        __extends(bkgd, _super);
        function bkgd(width, height) {
            var _this = _super.call(this) || this;
            _this.scale = 2;
            _this.x = 0;
            _this.y = -300;
            _this.res = "timg_png";
            _this.res_2 = "black_jpg";
            _this.backgroundOffset_x = 0; //偏移量
            _this.backgroundOffset_y = 0;
            _this.BACKGROUND_VELOCITY_x = 0; //速度
            _this.BACKGROUND_VELOCITY_y = 0;
            _this.timeOnEnterFrame = 0; //上一帧秒数
            _this.width = width;
            _this.height = height;
            return _this;
        }
        bkgd.prototype.addback = function (that) {
            this.back_2 = new egret.Bitmap();
            this.back_2.texture = RES.getRes(this.res_2);
            that.addChild(this.back_2);
            this.back_2.x = this.x;
            this.back_2.y = 2 * this.y + 100;
            this.back = new egret.Bitmap();
            this.back.texture = RES.getRes(this.res);
            that.addChild(this.back);
            this.back.x = this.x;
            this.back.y = this.y;
            this.back.scaleX = this.scale;
            this.back.scaleY = this.scale;
        };
        bkgd.prototype.rollIt = function () {
            egret.startTick(this.scrollBack, this);
        };
        bkgd.prototype.scrollBack = function (timeStamp) {
            var now = timeStamp;
            var lastTime = this.timeOnEnterFrame;
            //x 偏移量
            this.backgroundOffset_x += this.BACKGROUND_VELOCITY_x * (now - lastTime) / 1000;
            //y 偏移量 
            this.backgroundOffset_y += this.BACKGROUND_VELOCITY_y * (now - lastTime) / 1000;
            sceners.heroObj.heroOffset_x = 0;
            sceners.heroObj.heroOffset_y = 0;
            if (this.backgroundOffset_x >= 0) {
                this.backgroundOffset_x = 0;
                sceners.heroObj.heroOffset_x = this.BACKGROUND_VELOCITY_x * (now - lastTime) / 1000;
            }
            if (this.backgroundOffset_x <= this.width - this.back.width * 2) {
                this.backgroundOffset_x = this.width - this.back.width * 2;
                sceners.heroObj.heroOffset_x = this.BACKGROUND_VELOCITY_x * (now - lastTime) / 1000;
            }
            if (this.backgroundOffset_y >= 50) {
                this.backgroundOffset_y = 50;
                sceners.heroObj.heroOffset_y = this.BACKGROUND_VELOCITY_y * (now - lastTime) / 1000;
            }
            if (this.backgroundOffset_y <= this.height - this.back.height * 2) {
                this.backgroundOffset_y = this.height - this.back.height * 2;
                sceners.heroObj.heroOffset_y = this.BACKGROUND_VELOCITY_y * (now - lastTime) / 1000;
            }
            this.timeOnEnterFrame = timeStamp;
            if (this.back) {
                this.back.x = this.backgroundOffset_x;
                this.back.y = this.backgroundOffset_y;
            }
            return false;
        };
        return bkgd;
    }(egret.Sprite));
    sceners.bkgd = bkgd;
    __reflect(bkgd.prototype, "sceners.bkgd");
})(sceners || (sceners = {}));
//# sourceMappingURL=bkgd.js.map