const router = require('express').Router();
const courseController = require('@controllers/courseController');
const authMiddleware = require('@middlewares/authMiddleware');

router.get('/', courseController.index);
router.get('/populars', authMiddleware, courseController.getPopulars);
router.get('/search', courseController.getByTitle);
router.get('/:courseId', courseController.getById);

module.exports = router;
