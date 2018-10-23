'use strict';

module.exports = {
	register: function (handlebars) {
		handlebars.registerHelper('wrapWith', function (name, options) {
				if ('string' !== typeof name) {
					options = name;
					name = 'default';
				}

				let layout = handlebars.partials[name];

				if (!layout) {
					console.error('Wrap-With-Helper :: Layout ' + name + ' could not be found!');
					return;
				}

				let content = options.fn(this);
				let newContext = extend(options.data.root, {
					yield: content,
					options: options.hash,
					props: options.hash
				});
				let template = layout;

				if (typeof layout !== 'function') {
					template = handlebars.compile(layout, {preventIndent: true});
				}

				return template(newContext);
			}
		);
	}
};

/**
 * Extend object with another object by using a copy.
 *
 * @param {Object} a - Object which will be copied and extended
 * @param {Object} b - Object which will be applied
 */
function extend(a, b) {
	let customContext = Object.assign({}, a);

	for (let key in b) {
		if (b.hasOwnProperty(key)) {
			customContext[key] = b[key];
		}
	}

	return customContext;
}