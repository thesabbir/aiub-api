var
    ctrl = require('./ctrl'),
    express = require('express'),
    router = express.Router();


router.get('/', ctrl.index);
router.get('/notices/:page*?', ctrl.notices);

module.exports = router;