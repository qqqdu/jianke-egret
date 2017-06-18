var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../../rely/rely.d.ts"/>
var Mediator;
(function (Mediator) {
    var DirectorMediator = (function (_super) {
        __extends(DirectorMediator, _super);
        function DirectorMediator() {
            return _super.call(this, DirectorMediator.NAME) || this;
        }
        /** @override */
        DirectorMediator.prototype.listNotificationInterests = function () {
            return [
                puremvc.statemachine.StateMachine.CHANGED
            ];
        };
        DirectorMediator.prototype.handleNotification = function (notification) {
            switch (notification.getName()) {
                case puremvc.statemachine.StateMachine.CHANGED:
                    this.changeScene(notification.getBody().name);
                    break;
            }
        };
        DirectorMediator.prototype.onRegister = function () {
            this.viewComponent = new egret.Sprite();
            this.viewComponent.width = this.facade.container.stage.stageWidth;
            this.viewComponent.height = this.facade.container.stage.stageHeight;
            if (this.facade.container) {
                this.facade.container.addChild(this.viewComponent);
            }
        };
        DirectorMediator.prototype.onRemove = function () {
        };
        DirectorMediator.prototype.changeScene = function (mediatorName) {
            if (this._activeSceneMediator) {
                this.getViewComponent().removeChildren();
                this._activeSceneMediator.destroyScene();
            }
            var sceneMediator = this.facade.retrieveMediator(mediatorName);
            if (sceneMediator) {
                this._activeSceneMediator = sceneMediator;
                sceneMediator.renderScene(this.viewComponent.width, this.viewComponent.height);
                this.viewComponent.addChild(sceneMediator.getViewComponent());
            }
        };
        return DirectorMediator;
    }(puremvc.Mediator));
    DirectorMediator.NAME = 'DIRECTOR_MEDIATOR';
    Mediator.DirectorMediator = DirectorMediator;
    __reflect(DirectorMediator.prototype, "Mediator.DirectorMediator");
})(Mediator || (Mediator = {}));
//# sourceMappingURL=start_media.js.map