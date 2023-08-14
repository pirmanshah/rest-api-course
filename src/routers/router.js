const router = require('express').Router();
const courseRouter = require('./courseRouter');
const userRouter = require('./userRouter');
const authRouter = require('./authRouter');
const cartRouter = require('./cartRouter');
// const authMiddleware = require('@middlewares/authMiddleware');

router.use('/course', courseRouter);
router.use('/users', userRouter);
router.use('/carts', cartRouter);
router.use('/auth', authRouter);

module.exports = router;
