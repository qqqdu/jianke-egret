/// <reference path="../../rely/rely.d.ts"/>
//代理
module GameProxys{
	export class GameProxy extends puremvc.Proxy{

		public static NAME: string = 'GAME_PROXY';

		public _life: number = 0;


		public constructor() {
			super();
		}
	}
}