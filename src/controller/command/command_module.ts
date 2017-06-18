module command {
    export class com_module extends puremvc.SimpleCommand{
        public static NAME: string = 'PREP_MODEL_COMMAND';
        constructor(){
            super();
        }
        public execute(notification: puremvc.INotification): void {
		    this.facade.registerProxy(new GameProxys.GameProxy());
	    }
    }
}