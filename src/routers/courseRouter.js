const router = require('express').Router();
const courseController = require('@controllers/courseController');

router.get('/', courseController.index);
router.get('/populars', courseController.getPopulars);
router.get('/search', courseController.getByTitle);
router.get('/:courseId', courseController.getById);

module.exports = router;
