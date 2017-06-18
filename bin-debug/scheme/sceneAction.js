var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var scene;
(function (scene) {
    var SceneAction = (function () {
        function SceneAction() {
        }
        return SceneAction;
    }());
    SceneAction.HOME_ACTION = 'HOME_ACTION';
    SceneAction.GAME_MAIN_ACTION = 'GAME_MAIN_ACTION';
    SceneAction.GAME_OVER_ACTION = 'GAME_OVER_ACTION';
    SceneAction.OPTION_ACTION = 'OPTION_ACTION';
    SceneAction.HELP_ACTION = 'HELP_ACTION';
    scene.SceneAction = SceneAction;
    __reflect(SceneAction.prototype, "scene.SceneAction");
})(scene || (scene = {}));
//# sourceMappingURL=sceneAction.js.map