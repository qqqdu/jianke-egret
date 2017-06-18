/// <reference path="../../rely/rely.d.ts"/>
interface moveObj{
        width:number;
        height:number;
 }
module sceners{
    export class screnes extends egret.Sprite{
        public onAction:any;
        public width;
        public height;
        public back:egret.Bitmap;
        public SceneAction = scene.SceneAction;
        public constructor(width,height){
            super();
            this.width = width;
            this.height = height;
            this.addback();
            this.addpop();
            this.init();
        }
        private addback(){
            this.back = new egret.Bitmap();
            this.back.texture = RES.getRes("timg_jpg"); 
            
            this.addChild(this.back);
            this.back.x = 0;
            this.back.y = 0;
            this.back.width = this.width; 
        }
        private armature: dragonBones.Armature;
        private armatureDisplay;
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
             this.armature.display.scaleY = 0.5;
             this.armature.display.scaleX = 0.5;
             this.armature.animation.gotoAndPlay("steady");
         
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
    
    private moveback(that,obj:moveObj,callback){
        egret.Tween.get( that ).to( obj, 800, egret.Ease.sineIn).call(callback);
    }
        private init(){
            var title: egret.Bitmap = new egret.Bitmap();
            title.texture = RES.getRes("jianke_png");
            title.x = this.width/2 - title.width/4;
            title.y = 50;
            title.scaleX = 0.5;
            title.scaleY = 0.5;
            this.addChild(title);

           var btn: egret.Bitmap = new egret.Bitmap();
           btn.texture = RES.getRes("begin_png");
            btn.x = this.width/2 -  btn.width/4;
            btn.y = 200;
            
            btn.scaleX = 0.5;
            btn.scaleY = 0.5;
            btn.touchEnabled = true;
            this.addChild(btn);
            btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function(e: egret.TouchEvent) {
                var that = this;
                if (this.onAction) {
                    this.moveback(that.back,{
                        width : that.width*1.5,
                        height: that.height*1.5
                    },function(){
                        
                         that.onAction(SceneAction.GAME_MAIN_ACTION);
                         egret.stopTick(that.onTicker,that);
                    });
                   
                }
                 
            }, this);
            
            var btn2: egret.Bitmap = new egret.Bitmap();
           btn2.texture = RES.getRes("help_png");
            btn2.x = this.width/2 -  btn2.width/4;
            btn2.y = 300;
            btn2.scaleX = 0.5;
            btn2.scaleY = 0.5;
            btn2.touchEnabled = true;
            this.addChild(btn2);
            btn2.addEventListener(egret.TouchEvent.TOUCH_TAP, function(e: egret.TouchEvent) {
                if (this.onAction) {
                    
                    egret.stopTick(this.onTicker,this);
                    this.onAction(SceneAction.GAME_MAIN_ACTION);
                }
            }, this);

         
           
       }
    }
}