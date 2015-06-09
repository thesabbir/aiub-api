var
    ctrl = require('./ctrl'),
    express = require('express'),
    router = express.Router();


router.get('/', ctrl.index);
router.get('/notices/:page?', ctrl.notices);
router.get('/notices/details/:link', ctrl.noticesDetails);

module.exports = router;