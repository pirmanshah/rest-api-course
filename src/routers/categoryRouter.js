const router = require('express').Router();
const categoryController = require('@controllers/categoryController');

router.get('/', categoryController.index);

module.exports = router;
