//中介者模式
/// <reference path="../../rely/rely.d.ts"/>
module Mediator{
    export class media extends puremvc.Mediator{
        public static NAME: string = 'MENU_SCENE_MEDIATOR';
        public constructor(){
            super(media.NAME);
        }
        /** @override */
	public listNotificationInterests(): string[] {
		return [];
	}

	public handleNotification(notification: puremvc.INotification): void {


	}

	public onRegister(): void {		
	
		
	}

	public onRemove(): void {

	}

	public renderScene(width: number, height: number): void {

		var self = this;
		console.log(width,height);
		self.viewComponent = new sceners.screnes(width, height);
		  
		self.viewComponent.onAction = function(action) {
		
			self.sendNotification(puremvc.statemachine.StateMachine.ACTION, null, action);
		}
	}

	public destroyScene() {
		this.viewComponent = null;
	}

    }
}