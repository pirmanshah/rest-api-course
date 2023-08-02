const router = require('express').Router();
const courseRouter = require('./courseRouter');
const userRouter = require('./userRouter');
// const authMiddleware = require('@middlewares/authMiddleware');

router.use('/course', courseRouter);
router.use('/users', userRouter);

module.exports = router;
