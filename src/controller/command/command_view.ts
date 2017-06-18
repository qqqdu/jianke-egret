module command{
	export class PrepViewCommand extends puremvc.SimpleCommand {

		public static NAME: string = 'PREP_VIEW_COMMAND';

		constructor() {
			super();	
			console.log("ok")
		}
		
		public execute(notification: puremvc.INotification): void {	
			this.facade.registerMediator(new Mediator.DirectorMediator());
			this.facade.registerMediator(new Mediator.media());	
			this.facade.registerMediator(new Mediator.game_media());
			this.facade.registerMediator(new Mediator.help_media());
			
		}
	}
}