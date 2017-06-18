/// <reference path="../rely/rely.d.ts"/>

module Facade{
    export class AppFacade extends puremvc.Facade implements puremvc.IFacade{
        private static START_COMOMAND : string = "STARTUP";
        public container: egret.DisplayObjectContainer  = null;
        public PrepModelCommand = SimpleCommand.PrepModelCommand;
        public constructor(key){
            super(key);
        }   
        public initializeController(){
            puremvc.Facade.prototype.initializeController.call(this);
           
            this.registerCommand(AppFacade.START_COMOMAND, SimpleCommand.PrepModelCommand);
        }
        public initializeModel(){
            puremvc.Facade.prototype.initializeModel.call(this);
        }
        public initializeView() {
            puremvc.Facade.prototype.initializeView.call(this);
        }
        public startup() {	
            this.sendNotification(AppFacade.START_COMOMAND);
        }
        public static getInstance(key): any {

            var instanceMap = puremvc.Facade.instanceMap;

            var instance = instanceMap[key];
            if (instance) {
                return instance;
            }
            return instanceMap[key] = new AppFacade(key);
        }
    }
}