var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../../rely/rely.d.ts"/>
//代理
var GameProxys;
(function (GameProxys) {
    var GameProxy = (function (_super) {
        __extends(GameProxy, _super);
        function GameProxy() {
            var _this = _super.call(this) || this;
            _this._life = 0;
            return _this;
        }
        return GameProxy;
    }(puremvc.Proxy));
    GameProxy.NAME = 'GAME_PROXY';
    GameProxys.GameProxy = GameProxy;
    __reflect(GameProxy.prototype, "GameProxys.GameProxy");
})(GameProxys || (GameProxys = {}));
//# sourceMappingURL=proxy.js.map