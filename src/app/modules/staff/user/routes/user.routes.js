const { Router } = require('express'),
    router = Router(),
    {
        user_registration,
        find_allUser,
        update_commission,
        update_userServices
    } = require('../controller/user.controller');

router.post('/', user_registration);
router.get('/', find_allUser);
router.patch('/:id', update_commission);
router.patch('/service/:id', update_userServices);

module.exports = router;

