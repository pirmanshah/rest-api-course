const router = require('express').Router();
const userRouter = require('./userRouter');
const authRouter = require('./authRouter');
const cartRouter = require('./cartRouter');
const bankRouter = require('./bankRouter');
const courseRouter = require('./courseRouter');
const transactionRouter = require('./transactionRouter');
// const authMiddleware = require('@middlewares/authMiddleware');

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/carts', cartRouter);
router.use('/banks', bankRouter);
router.use('/courses', courseRouter);
router.use('/transactions', transactionRouter);

module.exports = router;
