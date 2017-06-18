/// <reference path="../../rely/rely.d.ts"/>
module sceners{
    export class help extends egret.Sprite{
        public onAction:any;
        public width;
        public height;
        public constructor(width,height){
            super();
            this.width = width;
            this.height = height;
            this.addEventListener(egret.Event.ADDED_TO_STAGE,this.loaderImg,this);
        }
       
         private loaderImg(){
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.imgLoadHandler,this);
            RES.loadConfig("resource/default.res.json","resource/");
            RES.loadGroup("preload");
        }
        private imgLoadHandler(){
             var rightBtn:egret.Bitmap = new egret.Bitmap();
            rightBtn.texture = RES.getRes("jianke_png");
            this.addChild(rightBtn);
            // var text = new egret.TextField();
            // text.text = " 这是帮助页 ";
            // text.x = this.width/2-text.width;
            // text.y = this.height/2-text.height;
            // this.addChild(text);
            // var btn = new egret.TextField();
            // btn.text = ' 返回主页 ';
            // btn.x = this.width/2 - 20 - btn.width;
            // btn.y = this.height/2 - 20 - btn.height;
            // btn.touchEnabled = true;
            // this.addChild(btn);
            // btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function(e: egret.TouchEvent) {
            //     if (this.onAction) {
            //         this.onAction("HOME_ACTION");
            //     }
            // }, this);

        }
    }
}