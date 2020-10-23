const { Router } = require('express'),
    router = Router(),
    {
        client_create,

    } = require('../controllers/clients.controller');

router.post('/', client_create)


module.exports = router;

