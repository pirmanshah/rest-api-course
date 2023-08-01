const router = require('express').Router();
const userController = require('@controllers/userController');

router.get('/', userController.index);

module.exports = router;
