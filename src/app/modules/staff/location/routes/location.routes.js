const { Router } = require('express'),
    router = Router(),
    {
        location_create,
    } = require('../controller/location.controller');

router.post('/', location_create)


module.exports = router;

