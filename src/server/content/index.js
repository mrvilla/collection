import { Router } from 'express';

// // Routes
import index from './home';
import serverHosts from './server-hosts';

const router = new Router();

// Basic routes
router.get(['/', '/home', '/docs'], index);

// Additional routes
router.use([serverHosts]);


module.exports = router;
