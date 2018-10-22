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
import Toggler from './shared/components/toggler/scripts/toggler';
// Initialize modules with Veams

// Init Call-To-Action

Veams.modules.add({ namespace: 'cta', module: Cta });

Veams.modules.add({ namespace: 'search', module: Search });

// Init Toggler
Veams.modules.add({ namespace: 'toggler', module: Toggler });
// @INSERTPOINT :: @ref: js-init-modules-@1, @keep: true //
// @INSERTPOINT :: @ref: js-init-once, @keep: true //
