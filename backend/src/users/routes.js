const router = require('express').Router();
const controller = require('./controller');

router.get('/', controller.list);
router.get('/:id', controller.get)
router.post('/', controller.add);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;