const router = require('express').Router();
const courseController = require('@controllers/courseController');

router.get('/', courseController.index);
router.get('/test', courseController.getTest);
router.get('/populars', courseController.getPopulars);
router.get('/search', courseController.getByTitle);
router.get('/user', courseController.getByUserId);
router.get('/detail', courseController.getDetail);
router.get('/show-detail', courseController.getDetailCourse);
router.get('/:courseId', courseController.getById);

module.exports = router;
