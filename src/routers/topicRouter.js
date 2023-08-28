const router = require('express').Router();
const topicController = require('@controllers/topicController');

router.get('/', topicController.index);

module.exports = router;
