var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hitTest;
(function (hitTest_1) {
    var hitTest = (function () {
        function hitTest() {
        }
        hitTest.hitTest = function (obj1, obj2) {
            var rect_1 = obj1.getBounds();
            var rect_2 = obj2.getBounds();
            rect_1.x = obj1.x;
            rect_1.y = obj1.y;
            rect_2.x = obj2.x;
            rect_2.y = obj2.y;
            return rect_1.intersects(rect_2);
        };
        return hitTest;
    }());
    hitTest_1.hitTest = hitTest;
    __reflect(hitTest.prototype, "hitTest.hitTest");
})(hitTest || (hitTest = {}));
//# sourceMappingURL=hitTest.js.map