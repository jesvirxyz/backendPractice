const { Router } = require('express'),
    router = Router(),
    {
        create_Service,
        service_findAll
    } = require('../controller/service.controller');

router.post('/', create_Service)
router.get('/', service_findAll)


module.exports = router;

