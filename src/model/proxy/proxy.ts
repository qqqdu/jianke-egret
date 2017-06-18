/// <reference path="../../rely/rely.d.ts"/>
//代理
module GameProxys{
	export class GameProxy extends puremvc.Proxy{

		public static NAME: string = 'GAME_PROXY';

		private _life: number = 0;


		public constructor() {
			super();
			console.log("hello proxy");
		}
	}
}