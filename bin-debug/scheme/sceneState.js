var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var scene;
(function (scene) {
    var SceneState = (function () {
        function SceneState() {
        }
        return SceneState;
    }());
    SceneState.MENU_MEDIATOR = 'MENU_SCENE_MEDIATOR';
    SceneState.GAME_MAIN_MEDIATOR = 'GAME_MAIN_SCENE_MEDIATOR';
    SceneState.GAME_OVER_MEDIATOR = 'GAME_OVER_SCENE_MEDIATOR';
    SceneState.OPTION_MEDIATOR = 'OPTION_SCENE_MEDIATOR';
    SceneState.HELP_MEDIATOR = 'HELP_SCENE_MEDIATOR';
    scene.SceneState = SceneState;
    __reflect(SceneState.prototype, "scene.SceneState");
})(scene || (scene = {}));
//# sourceMappingURL=sceneState.js.map