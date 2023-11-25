import express from 'express';
import userRouter from './user.route.js';
import categoryRouter from './category.route.js';

const router = express.Router();
router.use('/user', userRouter);
router.use('/category', categoryRouter);

export default router;