var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//中介者模式
/// <reference path="../../rely/rely.d.ts"/>
var Mediator;
(function (Mediator) {
    var game_media = (function (_super) {
        __extends(game_media, _super);
        function game_media() {
            var _this = _super.call(this, game_media.NAME) || this;
            console.log('ok');
            return _this;
        }
        /** @override */
        game_media.prototype.listNotificationInterests = function () {
            return [];
        };
        game_media.prototype.handleNotification = function (notification) {
        };
        game_media.prototype.onRegister = function () {
        };
        game_media.prototype.onRemove = function () {
        };
        game_media.prototype.renderScene = function (width, height) {
            var self = this;
            self.viewComponent = new sceners.game(width, height);
            self.viewComponent.onAction = function (action) {
                self.sendNotification(puremvc.statemachine.StateMachine.ACTION, null, action);
            };
        };
        game_media.prototype.destroyScene = function () {
            this.viewComponent = null;
        };
        return game_media;
    }(puremvc.Mediator));
    game_media.NAME = 'GAME_MAIN_SCENE_MEDIATOR';
    Mediator.game_media = game_media;
    __reflect(game_media.prototype, "Mediator.game_media");
})(Mediator || (Mediator = {}));
//# sourceMappingURL=game_media.js.map