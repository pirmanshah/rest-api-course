const router = require('express').Router();
const levelController = require('@controllers/levelController');

router.get('/', levelController.index);

module.exports = router;
