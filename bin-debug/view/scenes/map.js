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
    var map = (function (_super) {
        __extends(map, _super);
        function map(width, height) {
            var _this = _super.call(this) || this;
            _this.width = width;
            _this.height = height;
            return _this;
        }
        map.prototype.addBar = function () {
            var barArr = [{
                    x: 500,
                    y: 550,
                    width: 120,
                    height: 80
                }, {
                    x: 200,
                    y: 700,
                    width: 130,
                    height: 90
                }];
            this.fillMap(barArr);
        };
        map.prototype.fillMap = function (arr) {
            var that = this;
            arr.map(function (item) {
                that.addBars(item);
                return item;
            });
        };
        map.prototype.addBars = function (obj) {
            var back_2 = new egret.Bitmap();
            back_2.texture = RES.getRes("bar_1_png");
            back_2.x = obj.x;
            back_2.y = obj.y;
            back_2.width = obj.width;
            back_2.height = obj.height;
            this.addChild(back_2);
            map.barArr.push(back_2);
        };
        return map;
    }(egret.Sprite));
    map.barArr = [];
    sceners.map = map;
    __reflect(map.prototype, "sceners.map");
})(sceners || (sceners = {}));
//# sourceMappingURL=map.js.map