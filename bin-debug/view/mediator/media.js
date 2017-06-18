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
    var media = (function (_super) {
        __extends(media, _super);
        function media() {
            return _super.call(this, media.NAME) || this;
        }
        /** @override */
        media.prototype.listNotificationInterests = function () {
            return [];
        };
        media.prototype.handleNotification = function (notification) {
        };
        media.prototype.onRegister = function () {
        };
        media.prototype.onRemove = function () {
        };
        media.prototype.renderScene = function (width, height) {
            var self = this;
            console.log(width, height);
            self.viewComponent = new sceners.screnes(width, height);
            self.viewComponent.onAction = function (action) {
                self.sendNotification(puremvc.statemachine.StateMachine.ACTION, null, action);
            };
        };
        media.prototype.destroyScene = function () {
            this.viewComponent = null;
        };
        return media;
    }(puremvc.Mediator));
    media.NAME = 'MENU_SCENE_MEDIATOR';
    Mediator.media = media;
    __reflect(media.prototype, "Mediator.media");
})(Mediator || (Mediator = {}));
//# sourceMappingURL=media.js.map