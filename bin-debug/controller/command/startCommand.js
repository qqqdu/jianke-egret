var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../../rely/rely.d.ts"/>
var SimpleCommand;
(function (SimpleCommand) {
    var PrepModelCommand = (function (_super) {
        __extends(PrepModelCommand, _super);
        function PrepModelCommand() {
            return _super.call(this) || this;
        }
        PrepModelCommand.prototype.initializeMacroCommand = function () {
            /*
            var GameProxy : GameProxys.GameProxy =new GameProxys.GameProxy();
            console.log("comomand run");
            this.facade.registerProxy(GameProxy);
            this.facade.registerMediator(new Mediator.media());
            */
            this.addSubCommand(command.com_module);
            this.addSubCommand(command.PrepViewCommand);
            this.addSubCommand(command.PrepControllerCommand);
        };
        return PrepModelCommand;
    }(puremvc.MacroCommand));
    PrepModelCommand.NAME = 'STARTUP_COMMAND';
    SimpleCommand.PrepModelCommand = PrepModelCommand;
    __reflect(PrepModelCommand.prototype, "SimpleCommand.PrepModelCommand");
})(SimpleCommand || (SimpleCommand = {}));
//# sourceMappingURL=startCommand.js.map