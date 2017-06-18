var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../../rely/rely.d.ts"/>
var InjectFSMCommand = inject.InjectFSMCommand;
var command;
(function (command) {
    var PrepControllerCommand = (function (_super) {
        __extends(PrepControllerCommand, _super);
        function PrepControllerCommand() {
            return _super.call(this) || this;
        }
        PrepControllerCommand.prototype.initializeMacroCommand = function () {
            this.addSubCommand(InjectFSMCommand);
        };
        return PrepControllerCommand;
    }(puremvc.MacroCommand));
    PrepControllerCommand.NAME = 'PREP_CONTROLLER_COMMAND';
    command.PrepControllerCommand = PrepControllerCommand;
    __reflect(PrepControllerCommand.prototype, "command.PrepControllerCommand");
})(command || (command = {}));
//# sourceMappingURL=control.js.map