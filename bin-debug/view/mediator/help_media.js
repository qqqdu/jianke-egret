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
    var help_media = (function (_super) {
        __extends(help_media, _super);
        function help_media() {
            var _this = _super.call(this, help_media.NAME) || this;
            console.log("come in");
            return _this;
        }
        /** @override */
        help_media.prototype.listNotificationInterests = function () {
            return [];
        };
        help_media.prototype.handleNotification = function (notification) {
        };
        help_media.prototype.onRegister = function () {
        };
        help_media.prototype.onRemove = function () {
        };
        help_media.prototype.renderScene = function (width, height) {
            var self = this;
            self.viewComponent = new sceners.help(width, height);
            self.viewComponent.onAction = function (action) {
                console.log("help_media");
                self.sendNotification(puremvc.statemachine.StateMachine.ACTION, null, action);
            };
        };
        help_media.prototype.destroyScene = function () {
            this.viewComponent = null;
        };
        return help_media;
    }(puremvc.Mediator));
    help_media.NAME = 'HELP_SCENE_MEDIATOR';
    Mediator.help_media = help_media;
    __reflect(help_media.prototype, "Mediator.help_media");
})(Mediator || (Mediator = {}));
//# sourceMappingURL=help_media.js.map