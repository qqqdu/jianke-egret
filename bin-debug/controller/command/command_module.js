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
    var com_module = (function (_super) {
        __extends(com_module, _super);
        function com_module() {
            return _super.call(this) || this;
        }
        com_module.prototype.execute = function (notification) {
            this.facade.registerProxy(new GameProxys.GameProxy());
        };
        return com_module;
    }(puremvc.SimpleCommand));
    com_module.NAME = 'PREP_MODEL_COMMAND';
    command.com_module = com_module;
    __reflect(com_module.prototype, "command.com_module");
})(command || (command = {}));
//# sourceMappingURL=command_module.js.map