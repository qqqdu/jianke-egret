/// <reference path="../../rely/rely.d.ts"/>

module sceners{
    export class game extends egret.Sprite{
        //模块
        public bkgd:sceners.bkgd;
        public heroObj:sceners.heroObj;


        public onAction:any;
        public width;
        public height;
        public back;
        private armature: dragonBones.Armature;
        private armatureDisplay;
        private animateArr = ["steady","steady2","walk2","walk","jump","attack1","attack2","attack1_+1"];
          //  steady2 飞翔 "walk2" 飞翔动  walk 奔跑 "jump" 原地跳跃 attack1 向前刺击 attack2 飞起落刃 attack1_+1向前刺激加强版
        public constructor(width,height){
            super();
            this.width = width;
            this.height = height;
            this.init();
           
           
        }
       
        private  init(){
            //加入背景
            this.bkgd = new sceners.bkgd(this.width,this.height);
            this.bkgd.addback(this);
            this.bkgd.rollIt();
            //加入猪脚
            this.heroObj = new sceners.heroObj(this.width,this.height);
            this.heroObj.addpop(this);
            this.heroObj.controlKey(this.bkgd);

            var btn = new egret.TextField();
            btn.text = ' 返回主页 ';
            btn.x = 900;
            btn.y = 30;
            btn.touchEnabled = true;
            this.addChild(btn);
            btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function(e: egret.TouchEvent) {
                if (this.onAction) {
                    this.onAction("HOME_ACTION");
                }
            }, this);
            
        }
      
     
        private addpop(){
            var skeletonData = RES.getRes("SwordsMan_json");
            var textureData = RES.getRes("texture_json");
            var texture = RES.getRes("texture_png");
             var factory:dragonBones.EgretFactory = new dragonBones.EgretFactory();  
             factory.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(skeletonData));  
             factory.addTextureAtlas(new dragonBones.EgretTextureAtlas(texture,textureData));
             this.armature = factory.buildArmature("Swordsman");
             this.addChild(this.armature.display);
             dragonBones.WorldClock.clock.add(this.armature);
             this.armature.display.x = 300;
             this.armature.display.y = 600;
             this.armature.display.scaleY = 0.3;
             this.armature.display.scaleX = 0.3;
             this.armature.animation.gotoAndPlay(this.animateArr[0]);
             egret.startTick(this.onTicker, this);
        }
        private _time:number;

        private onTicker(timeStamp:number) {
            if(!this._time) {
                this._time = timeStamp;
            }
            var now = timeStamp;
            var pass = now - this._time;
            this._time = now;
            dragonBones.WorldClock.clock.advanceTime(pass / 1000);
            return false;
        }
    }
}