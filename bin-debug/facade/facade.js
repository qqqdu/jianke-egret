/// <reference path="../rely/rely.d.ts"/>
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Facade;
(function (Facade) {
    var AppFacade = (function (_super) {
        __extends(AppFacade, _super);
        function AppFacade(key) {
            var _this = _super.call(this, key) || this;
            _this.container = null;
            _this.PrepModelCommand = SimpleCommand.PrepModelCommand;
            return _this;
        }
        AppFacade.prototype.initializeController = function () {
            puremvc.Facade.prototype.initializeController.call(this);
            this.registerCommand(AppFacade.START_COMOMAND, SimpleCommand.PrepModelCommand);
        };
        AppFacade.prototype.initializeModel = function () {
            puremvc.Facade.prototype.initializeModel.call(this);
        };
        AppFacade.prototype.initializeView = function () {
            puremvc.Facade.prototype.initializeView.call(this);
        };
        AppFacade.prototype.startup = function () {
            this.sendNotification(AppFacade.START_COMOMAND);
        };
        AppFacade.getInstance = function (key) {
            var instanceMap = puremvc.Facade.instanceMap;
            var instance = instanceMap[key];
            if (instance) {
                return instance;
            }
            return instanceMap[key] = new AppFacade(key);
        };
        return AppFacade;
    }(puremvc.Facade));
    AppFacade.START_COMOMAND = "STARTUP";
    Facade.AppFacade = AppFacade;
    __reflect(AppFacade.prototype, "Facade.AppFacade", ["puremvc.IFacade", "puremvc.INotifier"]);
})(Facade || (Facade = {}));
//# sourceMappingURL=facade.js.map