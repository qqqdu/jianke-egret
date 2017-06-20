module hitTest{  //碰撞检测函数
    export class hitTest{
        public static hitTest(obj1:egret.DisplayObject,obj2:egret.DisplayObject):boolean
        { 
            let rect_1:egret.Rectangle = obj1.getBounds();
            let rect_2:egret.Rectangle = obj2.getBounds();
            rect_1.x = obj1.x;
            rect_1.y = obj1.y;
            rect_2.x = obj2.x;
            rect_2.y = obj2.y;
            return rect_1.intersects(rect_2);
        }
    }
}