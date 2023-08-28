const router = require('express').Router();
const userRouter = require('./userRouter');
const authRouter = require('./authRouter');
const cartRouter = require('./cartRouter');
const bankRouter = require('./bankRouter');
const levelRouter = require('./levelRouter');
const topicRouter = require('./topicRouter');
const courseRouter = require('./courseRouter');
const categoryRouter = require('./categoryRouter');
const transactionRouter = require('./transactionRouter');
// const authMiddleware = require('@middlewares/authMiddleware');

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/level', levelRouter);
router.use('/topic', topicRouter);
router.use('/carts', cartRouter);
router.use('/banks', bankRouter);
router.use('/courses', courseRouter);
router.use('/categories', categoryRouter);
router.use('/transactions', transactionRouter);

module.exports = router;
