/// <reference path="../../rely/rely.d.ts"/>
//背景对象
module spriteProxy{ 
    export class heroProxy extends puremvc.Proxy{
        public width:number;
        public height:number;
        public scale:number = 0.3;
        public x:number=0;
        public y:number=-300;
        public back;
        private _time:number; //帧时间
        private armature: dragonBones.Armature;
        private armatureDisplay;
        private animateArr = ["steady","steady2","walk2","walk","jump","attack1","attack2","attack1_+1"];
          //  steady2 飞翔 "walk2" 飞翔动  walk 奔跑 "jump" 原地跳跃 attack1 向前刺击 attack2 飞起落刃 attack1_+1向前刺激加强版
        public bkgd:sceners.bkgd; //背景
        public static heroOffset_x:number=0; //偏移量
        public  static heroOffset_y:number=0;
        public VELOCITY_x = 120; //速度
        public VELOCITY_y = 70; 
        public timeOnEnterFrame = 0; //上一帧秒数
        public constructor(width,height){
            super();
            this.width = width;
            this.height = height;
        }
        public addback(that){
          
        }
       
        public controlKey(bkgd){
            this.bkgd = bkgd;
            var upEvent = (code) =>{
                this.armature.animation.gotoAndPlay(this.animateArr[0]);
                
            }
            var upSelfEvent = (code) =>{
                if(code===37||code===39)
                    this.bkgd.BACKGROUND_VELOCITY_x = 0;
                if(code===38||code===40)
                    this.bkgd.BACKGROUND_VELOCITY_y = 0;
            }
            keydown_event(37,()=>{
                this.armature.animation.gotoAndPlay(this.animateArr[3]);
               
                this.bkgd.BACKGROUND_VELOCITY_x = this.VELOCITY_x;
                this.armature.display.skewY = 180;
            },upEvent,upSelfEvent)
             keydown_event(39,()=>{
                this.armature.animation.gotoAndPlay(this.animateArr[3]);
                
                this.bkgd.BACKGROUND_VELOCITY_x = -this.VELOCITY_x;
                this.armature.display.skewY = 0;
            },upEvent,upSelfEvent)
             keydown_event(38,()=>{
                this.armature.animation.gotoAndPlay(this.animateArr[3]);
               
                this.bkgd.BACKGROUND_VELOCITY_y = this.VELOCITY_y;
            },upEvent,upSelfEvent)
             keydown_event(40,()=>{
                this.armature.animation.gotoAndPlay(this.animateArr[3]);
               
                this.bkgd.BACKGROUND_VELOCITY_y = -this.VELOCITY_y;
            },upEvent,upSelfEvent);
            keydown_event(67,()=>{  //c 
                this.armature.animation.gotoAndPlay(this.animateArr[4],0,0,1);
            });
            keydown_event(88,()=>{  // x
                this.armature.animation.gotoAndPlay(this.animateArr[5],0,0,1);
            });
            
            keydown_event(90,()=>{  // z
                this.armature.animation.gotoAndPlay(this.animateArr[6],0,0,1);
            });
            keydown_event(65,()=>{  // a
                this.armature.animation.gotoAndPlay(this.animateArr[7],0,0,1);
            });
        }
        public addpop(that){
            var skeletonData = RES.getRes("SwordsMan_json");
            var textureData = RES.getRes("texture_json");
            var texture = RES.getRes("texture_png");
             var factory:dragonBones.EgretFactory = new dragonBones.EgretFactory();  
             factory.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(skeletonData));  
             factory.addTextureAtlas(new dragonBones.EgretTextureAtlas(texture,textureData));
             this.armature = factory.buildArmature("Swordsman");
             that.addChild(this.armature.display);
             dragonBones.WorldClock.clock.add(this.armature);
             this.armature.display.x = 300;
             this.armature.display.y = 600;
             this.armature.display.scaleY = this.scale;
             this.armature.display.scaleX = this.scale;
             this.armature.animation.gotoAndPlay(this.animateArr[0]);
             egret.startTick(this.onTicker, this);
        }
       

        private onTicker(timeStamp:number) {
            if(!this._time) {
                this._time = timeStamp;
            }
            var now = timeStamp;
            var pass = now - this._time;
            this._time = now;
            dragonBones.WorldClock.clock.advanceTime(pass / 1000);
            this.listenMove();
            return false;
        }
        private listenMove(){
            
            this.armature.display.x = this.armature.display.x-sceners.heroObj.heroOffset_x;
            this.armature.display.y = this.armature.display.y-sceners.heroObj.heroOffset_y;
             if(this.armature.display.x<=this.armature.display.width*this.scale/2){
                this.armature.display.x = this.armature.display.width*this.scale/2;
                
            }
            if(this.armature.display.x>=this.width-this.armature.display.width*this.scale/2){
                this.armature.display.x = this.width-this.armature.display.width*this.scale/2; 
            }
        }
    }
}