const router = require('express').Router();
const bankController = require('@controllers/bankController');

router.get('/', bankController.index);

module.exports = router;
