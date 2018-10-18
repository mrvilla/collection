
/**
 * Main entry file for styles.
 */
import './app.scss';

/**
 * Main entry file for application.
 */
import { Veams } from './app.veams';
import Cta from './shared/components/cta/scripts/cta';
import Search from './shared/components/search/scripts/search';
// Initialize modules with Veams

// Init Call-To-Action

Veams.modules.add({ namespace: 'cta', module: Cta });

Veams.modules.add({ namespace: 'search', module: Search });

// @INSERTPOINT :: @ref: js-init-modules-@1, @keep: true //
// @INSERTPOINT :: @ref: js-init-once, @keep: true //
