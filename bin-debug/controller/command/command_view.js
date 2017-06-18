var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var command;
(function (command) {
    var PrepViewCommand = (function (_super) {
        __extends(PrepViewCommand, _super);
        function PrepViewCommand() {
            var _this = _super.call(this) || this;
            console.log("ok");
            return _this;
        }
        PrepViewCommand.prototype.execute = function (notification) {
            this.facade.registerMediator(new Mediator.DirectorMediator());
            this.facade.registerMediator(new Mediator.media());
            this.facade.registerMediator(new Mediator.game_media());
            this.facade.registerMediator(new Mediator.help_media());
        };
        return PrepViewCommand;
    }(puremvc.SimpleCommand));
    PrepViewCommand.NAME = 'PREP_VIEW_COMMAND';
    command.PrepViewCommand = PrepViewCommand;
    __reflect(PrepViewCommand.prototype, "command.PrepViewCommand");
})(command || (command = {}));
//# sourceMappingURL=command_view.js.map