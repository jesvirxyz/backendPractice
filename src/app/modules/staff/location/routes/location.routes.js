const { Router } = require('express'),
    router = Router(),
    {
        location_create,
        location_findAll
    } = require('../controller/location.controller');

router.post('/', location_create)
router.get('/', location_findAll)


module.exports = router;

