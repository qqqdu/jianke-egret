/// <reference path="../../rely/rely.d.ts"/>
//背景对象
module sceners{
    export class bkgd extends egret.Sprite{
        public back:egret.Bitmap;
        public back_2:egret.Bitmap;
        public width:number;
        public height:number;
        public scale:number = 2;
        public x:number=0;
        public y:number=-300;
        public res = "timg_png";
        public res_2 = "black_jpg"
        public backgroundOffset_x:number=0; //偏移量
        public backgroundOffset_y:number=0;
        public BACKGROUND_VELOCITY_x = 0; //速度
        public BACKGROUND_VELOCITY_y = 0; 
        public timeOnEnterFrame = 0; //上一帧秒数
        public constructor(width,height){
            super();
           
            this.width = width;
            this.height = height;
        }
        public addback(that){
            this.back_2 = new egret.Bitmap();
            this.back_2.texture = RES.getRes(this.res_2);
            that.addChild(this.back_2);
            this.back_2.x = this.x;
            this.back_2.y = 2*this.y+100;
            
            this.back = new egret.Bitmap();
            this.back.texture = RES.getRes(this.res); 
            that.addChild(this.back);
            this.back.x = this.x;
            this.back.y = this.y;
            this.back.scaleX = this.scale;
            this.back.scaleY = this.scale;

            
        }
        public rollIt(){
             egret.startTick(this.scrollBack, this);
        }
        public scrollBack(timeStamp:number){
            let now = timeStamp;
            let lastTime =  this.timeOnEnterFrame;
            //x 偏移量
            this.backgroundOffset_x += this.BACKGROUND_VELOCITY_x * (now - lastTime) /1000;
            
            //y 偏移量 
            this.backgroundOffset_y += this.BACKGROUND_VELOCITY_y * (now - lastTime) /1000;
            sceners.heroObj.heroOffset_x = 0;
            sceners.heroObj.heroOffset_y = 0;
            if(this.backgroundOffset_x>=0){
                this.backgroundOffset_x = 0;
                sceners.heroObj.heroOffset_x = this.BACKGROUND_VELOCITY_x * (now - lastTime) /1000;
            }
            if(this.backgroundOffset_x<=this.width-this.back.width*2){
                this.backgroundOffset_x = this.width-this.back.width*2;
                sceners.heroObj.heroOffset_x = this.BACKGROUND_VELOCITY_x * (now - lastTime) /1000;
            }
            
            if(this.backgroundOffset_y>=50){
                this.backgroundOffset_y = 50;
                sceners.heroObj.heroOffset_y = this.BACKGROUND_VELOCITY_y * (now - lastTime) /1000;
            } 
            
            if(this.backgroundOffset_y<=this.height-this.back.height*2){
                this.backgroundOffset_y = this.height-this.back.height*2;
                sceners.heroObj.heroOffset_y = this.BACKGROUND_VELOCITY_y * (now - lastTime) /1000;
            }
           
            this.timeOnEnterFrame = timeStamp;
            if(this.back){
                this.back.x = this.backgroundOffset_x;
                this.back.y = this.backgroundOffset_y;
            }
            return false;
        }
    }
}