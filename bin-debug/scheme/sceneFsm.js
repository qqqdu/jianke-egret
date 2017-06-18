var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SceneAction = scene.SceneAction;
var SceneState = scene.SceneState;
var scene;
(function (scene) {
    var SceneFsm = (function () {
        function SceneFsm() {
        }
        SceneFsm.prototype.createFsm = function () {
            var fsm = {
                // 开始状态
                "@initial": scene.SceneState.GAME_MAIN_MEDIATOR,
                "state": [
                    {
                        // Menu
                        "@name": scene.SceneState.MENU_MEDIATOR,
                        //"@changed": SceneTransition ,
                        "transition": [
                            {
                                "@action": scene.SceneAction.GAME_MAIN_ACTION,
                                "@target": scene.SceneState.GAME_MAIN_MEDIATOR
                            },
                            {
                                "@action": scene.SceneAction.OPTION_ACTION,
                                "@target": scene.SceneState.OPTION_MEDIATOR
                            },
                            {
                                "@action": scene.SceneAction.HELP_ACTION,
                                "@target": scene.SceneState.HELP_MEDIATOR
                            }
                        ]
                    },
                    {
                        // Game
                        "@name": scene.SceneState.GAME_MAIN_MEDIATOR,
                        //"@changed": SceneTransition ,
                        "transition": [
                            {
                                "@action": scene.SceneAction.GAME_OVER_ACTION,
                                "@target": scene.SceneState.GAME_OVER_MEDIATOR
                            },
                            {
                                "@action": scene.SceneAction.HOME_ACTION,
                                "@target": scene.SceneState.MENU_MEDIATOR
                            }
                        ]
                    },
                    {
                        // GameOver
                        "@name": scene.SceneState.GAME_OVER_MEDIATOR,
                        //"@changed": SceneTransition ,
                        "transition": [
                            {
                                "@action": scene.SceneAction.HOME_ACTION,
                                "@target": scene.SceneState.MENU_MEDIATOR
                            }
                        ]
                    },
                    {
                        // Option
                        "@name": scene.SceneState.OPTION_MEDIATOR,
                        //"@changed": SceneTransition ,
                        "transition": [
                            {
                                "@action": scene.SceneAction.HOME_ACTION,
                                "@target": scene.SceneState.MENU_MEDIATOR
                            }
                        ]
                    },
                    {
                        // Help
                        "@name": scene.SceneState.HELP_MEDIATOR,
                        //"@changed": SceneTransition ,
                        "transition": [
                            {
                                "@action": scene.SceneAction.HOME_ACTION,
                                "@target": scene.SceneState.MENU_MEDIATOR
                            }
                        ]
                    }
                ]
            };
            return fsm;
        };
        return SceneFsm;
    }());
    scene.SceneFsm = SceneFsm;
    __reflect(SceneFsm.prototype, "scene.SceneFsm");
})(scene || (scene = {}));
//# sourceMappingURL=sceneFsm.js.map