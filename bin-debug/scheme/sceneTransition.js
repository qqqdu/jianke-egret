var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var scene;
(function (scene) {
    var SceneTransition = (function () {
        function SceneTransition() {
        }
        return SceneTransition;
    }());
    scene.SceneTransition = SceneTransition;
    __reflect(SceneTransition.prototype, "scene.SceneTransition");
})(scene || (scene = {}));
//# sourceMappingURL=sceneTransition.js.map