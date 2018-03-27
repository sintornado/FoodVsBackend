const router = require('express').Router();

router.use('/users', require('./users'));
router.use('/orders', require('./orders'));
router.use('/daily-orders', require('./daily-orders'));
router.use('/dishes', require('./dishes'));

module.exports = router;