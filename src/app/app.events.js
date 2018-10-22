/**
 * Const for events (pub/sub)
 */

/**
 * Events Global
 */
const EVENTS = {};

/**
 * Events for Search
 */
EVENTS.search = {
	submit: 'search:handleClick'
};

/**
 * Events Toggler
 */
EVENTS.toggler = {
	toggle: 'toggler:toggle',
	open: 'toggler:open',
	close: 'toggler:close'
};
// @INSERTPOINT :: @ref: js-events

export default EVENTS;
