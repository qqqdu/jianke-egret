/// <reference path="../../rely/rely.d.ts"/>
module SimpleCommand{

	export class PrepModelCommand extends puremvc.MacroCommand {

		public static NAME: string = 'STARTUP_COMMAND';
		
		constructor() {
			super();
		}

		
		public initializeMacroCommand(): void {
			/*
			var GameProxy : GameProxys.GameProxy =new GameProxys.GameProxy();
			console.log("comomand run");
			this.facade.registerProxy(GameProxy);
			this.facade.registerMediator(new Mediator.media());
			*/
			this.addSubCommand(command.com_module);
			this.addSubCommand(command.PrepViewCommand);
			this.addSubCommand(command.PrepControllerCommand);
		}
		
	}
}