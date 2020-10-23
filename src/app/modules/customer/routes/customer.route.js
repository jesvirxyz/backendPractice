const { Router } = require('express'),
    router = Router(),
    {
        customer_register,
    } = require('../controllers/customer.controller');

router.post('/', customer_register)
// router.get('/', location_findAll)


module.exports = router;

