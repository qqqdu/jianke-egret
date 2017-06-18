/// <reference path="../../rely/rely.d.ts"/>
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var sceneFsm;
var inject;
(function (inject) {
    var InjectFSMCommand = (function (_super) {
        __extends(InjectFSMCommand, _super);
        function InjectFSMCommand() {
            return _super.call(this) || this;
        }
        InjectFSMCommand.prototype.execute = function (notification) {
            var sceneFsm = new scene.SceneFsm();
            var fsm = sceneFsm.createFsm();
            var injector = new puremvc.statemachine.FSMInjector(fsm);
            injector.initializeNotifier(this.multitonKey);
            injector.inject();
        };
        return InjectFSMCommand;
    }(puremvc.SimpleCommand));
    InjectFSMCommand.NAME = 'INJECT_FSM_COMMAND';
    inject.InjectFSMCommand = InjectFSMCommand;
    __reflect(InjectFSMCommand.prototype, "inject.InjectFSMCommand");
})(inject || (inject = {}));
//# sourceMappingURL=injectFSMCommand.js.map