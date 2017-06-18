/// <reference path="../../rely/rely.d.ts"/>
var InjectFSMCommand = inject.InjectFSMCommand;
module command{
    export class PrepControllerCommand extends puremvc.MacroCommand {

        public static NAME: string = 'PREP_CONTROLLER_COMMAND';

        constructor() {
            super();
        }

        public initializeMacroCommand(): void {
            this.addSubCommand(InjectFSMCommand);
        }

    }
}