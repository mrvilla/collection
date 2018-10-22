'use strict';

export interface DomOptions {
	DOM: any
}

export interface DomPlugin {
	options: DomOptions,
	pluginName: string,
	initialize: any
}

const VeamsDOM = {
	options: {
		DOM: null
	},
	pluginName: '$',
	initialize: function (Veams, {DOM}: DomOptions): void {
		if (!DOM) {
			console.error('VeamsDOM :: You need to pass an options object with a DOM handler: options.DOM!');
			return;
		}
		if (Veams.$) {
			console.log('VeamsDOM :: It seems that you have already defined a DOM handler. I am overwriting it now for you ;)');
		}

		Veams.$ = this.options.DOM = DOM;
	}
};

export default VeamsDOM;