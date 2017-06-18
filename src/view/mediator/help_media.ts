//中介者模式
/// <reference path="../../rely/rely.d.ts"/>
module Mediator{
    export class help_media extends puremvc.Mediator{
        public static NAME: string = 'HELP_SCENE_MEDIATOR';
        public constructor(){
            super(help_media.NAME);
			console.log("come in");
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
		
		self.viewComponent = new sceners.help(width, height);
		
	
		self.viewComponent.onAction = function(action) {
			console.log("help_media");
			self.sendNotification(puremvc.statemachine.StateMachine.ACTION, null, action);
		}
	}

	public destroyScene() {
		this.viewComponent = null;
	}

    }
}