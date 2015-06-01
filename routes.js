var
    ctrl = require('./ctrl'),
    express = require('express'),
    router = express.Router();


router.get('/', ctrl.index);

module.exports = router;