const router = require('express').Router();
const cartController = require('@controllers/cartController');

router.delete('/:cartId', cartController.deleted);
router.post('/', cartController.create);
router.get('/', cartController.index);

module.exports = router;
