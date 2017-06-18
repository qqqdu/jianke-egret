//中介者模式
/// <reference path="../../rely/rely.d.ts"/>
module Mediator{
    export class game_media extends puremvc.Mediator{
        public static NAME: string = 'GAME_MAIN_SCENE_MEDIATOR';
        public constructor(){
            super(game_media.NAME);
			console.log('ok');
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
		
	
		self.viewComponent = new sceners.game(width, height);
		self.viewComponent.onAction = function(action) {
			self.sendNotification(puremvc.statemachine.StateMachine.ACTION, null, action);
		}
	}

	public destroyScene() {
		this.viewComponent = null;
	}

    }
}