/// <reference path="../../rely/rely.d.ts"/>
//背景对象
interface bar{
  x: number;
  y: number;
  width: number;
  height: number;
}

module sceners{ 
    export class map extends egret.Sprite{
        public width:number;
        public height:number;
        public static barArr = [
           
        ];
       
        
   
        public constructor(width,height){
            super();
            this.width = width;
            this.height = height;
        }
        public addBar(){
            let barArr = [{
                x : 500,
                y : 550,
                width : 120,
                height: 80
            },{
                x : 200,
                y : 700,
                width : 130,
                height: 90
            }];
            
            this.fillMap(barArr);
        }
        public fillMap(arr){ //填充障碍物地图
            let that = this;
            arr.map((item)=>{
                that.addBars(item);
                return item;
            })
        }
      
        public addBars(obj:bar){
            
            let back_2 = new egret.Bitmap();
            back_2.texture = RES.getRes("bar_1_png");
            back_2.x = obj.x;
            back_2.y = obj.y;
            back_2.width = obj.width;
            back_2.height = obj.height;
            this.addChild(back_2);
            map.barArr.push(back_2);
        }
     
       
       
    }
}