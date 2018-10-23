/**
 * Represents a simple toggler with global event binding.
 *
 * @module Toggler
 * @version v1.0.0
 *
 * @author Andy Gutsche
 */

// Global dependencies
import $ from '@veams/query';
import Component from '@veams/component';
import transitionEndEvent from '@veams/helpers/lib/detection/transition-end-event';

class Toggler extends Component {
	/**
	 * Generic Props
	 */
	$el = $(this.el);
	savedStyles = this.$el.attr('style');

	/**
	 * Constructor for our class
	 *
	 * @see module.js
	 *
	 * @param {Object} obj - Object which is passed to our class
	 * @param {Object} obj.el - element which will be saved in this.el
	 * @param {Object} obj.options - options which will be passed in as JSON object
	 */
	constructor(obj) {

		let options = {
			a11yFocusKeyClass: 'a11y-focus-key',
			calculatingClass: 'is-calculating',
			closeClass: 'is-closed',
			context: false,
			dataMaxAttr: 'data-js-height',
			globalEvent: '',
			globalEventId: '',
			openClass: 'is-open',
			setOverflow: false,
			toggleTabindexElems: ''
		};

		super(obj, options);
	}


	/**
	 * Get module information
	 */
	static get info() {
		return {
			version: '1.0.0',
			vc: true,
			mod: false
		};
	}


	get height() {
		return this._height;
	}


	set height(height) {
		this._height = height;
	}


	get isOpen() {
		return this._isOpen;
	}


	set isOpen(bool) {
		this._isOpen = bool;
	}


	/**
	 * Get global events
	 *
	 */
	get subscribe() {

		return {
			'{{this.context.EVENTS.resize}}': 'updateHeight'
		};
	}


	/**
	 * Initialize the view and merge options
	 *
	 */
	didMount() {
		let selfInit = this.$el.attr('data-js-module') && this.$el.attr('data-js-module').indexOf('toggler') > -1;

		if (selfInit && !this.options.globalEvent) {
			console.info('@veams/component-toggler :: this.options.globalEvent not set.');
		}

		this.isOpen = this.$el.hasClass(this.options.openClass);

		this.calculateHeight().then(() => !this.isOpen && this.setHeight(0));
	}


	/**
	 * Bind events
	 *
	 * Listen to open and close events
	 */
	bindEvents() {
		// Listen for addition/removal of child nodes amd update toggler height
		const observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {

				if (mutation.type === 'childList') {
					this.updateHeight();
				}
			});
		});

		observer.observe(this.el, { childList: true });

		// Global events
		if (this.options.globalEvent) {
			this.registerEvent('{{this.options.globalEvent}}', 'toggle', true);
		}
	}


	/**
	 * Update toggler height
	 *
	 */
	updateHeight() {
		clearTimeout(this.updateHeightTimeout);

		// give browser some time to recalculate
		this.updateHeightTimeout = setTimeout(() => {
			this.calculateHeight().then(() => this.isOpen && this.setHeight());
		}, 200);
	}


	/**
	 * Enable calc mode.
	 *
	 * @private
	 */
	enableCalcMode() {
		if (!this.isOpen) {
			this.$el.addClass(this.options.openClass);
			this.$el.removeClass(this.options.closeClass);
		}

		this.$el.addClass(this.options.calculatingClass);
	}

	/**
	 * Disable calc mode.
	 *
	 * @private
	 */
	disableCalcMode() {
		this.$el.removeClass(this.options.calculatingClass);

		if (!this.isOpen) {
			this.$el.addClass(this.options.closeClass);
			this.$el.removeClass(this.options.openClass);
		} else {
			this.setHeight();
		}
	}

	/**
	 * Set height of current view element to given value or latest calculated value.
	 *
	 * @private
	 * @param {Number} [height] - height
	 */
	setHeight(height) {
		this.$el.css('height',
				typeof height === 'number' ? height + 'px' : this.$el.attr(this.options.dataMaxAttr) + 'px');
	}


	/**
	 * Calc the height of current view element.
	 *
	 * @private
	 */
	calcHeight() {
		return new Promise((resolve, reject) => {
			clearTimeout(this.calcHeightTimeout);

			this.calcHeightTimeout = setTimeout(() => {
				let wantedHeight = this.$el.outerHeight();

				this.$el.attr(this.options.dataMaxAttr, wantedHeight);
				this.height = wantedHeight !== this.height ? wantedHeight : this.height;

				resolve();
			}, 10);
		});
	}


	/**
	 * Save all styles from current view element
	 *
	 * @private
	 */
	saveStyles() {
		this.savedStyles = this.$el.attr('style');
	}

	/**
	 * Restore all styles from current view element
	 *
	 * @private
	 */
	restoreStyles() {
		this.$el.attr('style', this.savedStyles);
		this.savedStyles = null;
	}

	/**
	 * Toggles content
	 *
	 * @public
	 *
	 * @param {Object} obj - the event data
	 * @param {String} [obj.globalEventId] - global event Id
	 * @param {Node} [obj.focusEl = null] - Element which you want to focus
	 */
	toggle({ globalEventId, focusEl = null }) {

		// if globalEventId is set on both (cta and toggler)
		if (this.options.globalEventId && globalEventId) {

			// stop here if global event id don't match
			if (this.options.globalEventId !== globalEventId) {
				return;
			}
		}

		if (!this.isOpen) {
			this.open(focusEl);
		} else {
			this.close();
		}
	}


	/**
	 * Open current view element
	 *
	 * @public
	 *
	 * @param {Object} [focusEl] - the event object
	 */
	open(focusEl) {
		this.$el.css('height', `${this.$el.attr(this.options.dataMaxAttr)}px`)
			.attr('aria-hidden', false)
			.removeClass(this.options.closeClass)
			.addClass(this.options.openClass);

		if (focusEl) {
			this.$el.on(transitionEndEvent(), () => {
				focusEl.focus();
				this.$el.off(transitionEndEvent());
			});
		}

		if (this.options.setOverflow) {
			this.$el.on(transitionEndEvent(), () => {
				this.$el.css('overflow', 'visible');
				this.$el.off(transitionEndEvent());
			});
		}

		if (this.options.toggleTabindexElems) {
			$(this.options.toggleTabindexElems, this.el).attr('tabindex', 0);
		}

		this.isOpen = true;
	}

	/**
	 * Close current view element
	 *
	 * @public
	 */
	close() {
		this.$el.removeAttr('style')
				.css('height', 0)
				.attr('aria-hidden', true)
				.removeClass(this.options.openClass)
				.addClass(this.options.closeClass);

		if (this.options.setOverflow) {
			this.$el.css('overflow', 'hidden');
		}

		if (this.options.toggleTabindexElems) {
			$(this.options.toggleTabindexElems, this.el).attr('tabindex', -1);
		}

		this.isOpen = false;
	}

	/**
	 * calculateHeight class
	 */
	calculateHeight() {
		return new Promise((resolve, reject) => {
			if (this.el && this.el.hasAttribute('style')) {
				this.saveStyles();
			}

			this.enableCalcMode(true);

			this.calcHeight().then(() => {
				if (this.savedStyles) {
					this.restoreStyles();
				}

				this.disableCalcMode();

				resolve();
			});
		});
	}
}

export default Toggler;
