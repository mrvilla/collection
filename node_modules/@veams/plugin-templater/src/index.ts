'use strict';

let Veams: any = {};

/**
 * Interfaces
 */
export interface ITemplaterOptions {
	engine: any,
	templates: any,
	partials?: any,
	helpers?: any[]
}

export interface ITemplater extends ITemplaterOptions {
	render: any;
}

export interface VeamsExtendedByTemplater {
	templater: ITemplater
}

export interface ITemplaterPlugin {
	options: ITemplaterOptions,
	pluginName: string,
	initialize: any
}

/**
 * Represents the Templater class which will be used in VeamsTemplater plugin.
 * @module Templater
 *
 * @author Sebastian Fitzner
 */
class Templater {
	options = {
		engine: null,
		templates: null,
		partials: null,
		helpers: null
	};

	constructor(VEAMS = window['Veams'], {engine, templates, partials = null, helpers = null}: ITemplaterOptions) {
		Veams = VEAMS;

		if (!templates) {
			console.error(`VeamsTemplater :: You need to pass an object which contains your templates (obj.templates)!`);
			return;
		}

		if (!engine) {
			console.error(`VeamsTemplater :: You need to pass a handlebars instance by providing obj.engine!`);
			return;
		}

		this.options = {
			engine,
			templates,
			partials,
			helpers
		};

		this.initialize();
	}

	initialize(): VeamsExtendedByTemplater {
		if (this.options.helpers) {
			this.registerHelpers();
		}

		return this.addTemplater();
	}

	registerHelpers(): void {
		if (!Array.isArray(this.options.helpers)) {
			console.error(`VeamsTemplater :: You need to pass the helpers as an array!`);
			return;
		}

		for (let i = 0; i < this.options.helpers.length; i++) {
			let helper = this.options.helpers[i];

			if (helper.register) {
				this.options.engine.registerHelper(helper.register(this.options.engine));
			} else {
				console.error(`VeamsTemplater :: Your helper does not have a register function, see: ${helper}`);
			}
		}
	}

	addTemplater(): VeamsExtendedByTemplater {
		if (Veams.templater) {
			console.warn('It seems that you are already using Veams.templater! Veams is overriding it now!');
		}

		if (this.options.partials) {
			this.options.engine.partials = this.options.partials(this.options.engine);
		}

		Veams.templater = {
			engine: this.options.engine,
			templates: this.options.templates(this.options.engine),
			partials: this.options.partials ? this.options.partials(this.options.engine) : {},
			helpers: this.options.helpers,
			render: (tplName: string, data = {}) => {
				if (!Veams.templater.templates[tplName]) {
					console.error(`VeamsTemplater :: Template ${tplName} not found.`);
					return;
				}

				return Veams.templater.templates[tplName](data);
			}
		};

		return Veams;
	}
}

/**
 * Represents a templater plugin which you can use to render your precompiled handlebars templates.
 * You can also register custom helpers by providing them in an array!
 *
 * @module VeamsTemplater
 *
 * @author Sebastian Fitzner
 */
const TemplaterPlugin: ITemplaterPlugin = {
	options: {
		engine: () => {
		},
		templates: () => {
		},
		partials: () => {
		},
		helpers: []
	},
	pluginName: 'Templater',
	initialize: function (Veams, {engine, templates, partials, helpers}: ITemplaterOptions) {
		return new Templater(Veams, {
			engine,
			templates,
			partials,
			helpers
		});
	}
};

export default TemplaterPlugin;
export { Templater };