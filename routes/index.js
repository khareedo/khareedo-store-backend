import express from 'express';
import userRouter from './user.route.js';
import categoryRouter from './category.route.js';
import productRouter from './product.route.js';
import manufacturerRouter from './manufacturer.route.js';
import customerRouter from './customer.route.js';
import orderRouter from './order.route.js';
import cartRouter from './cart.route.js';

const router = express.Router();
router.use('/user', userRouter);
router.use('/category', categoryRouter);
router.use('/product', productRouter);
router.use('/manufacturer', manufacturerRouter);
router.use('/customer', customerRouter);
router.use('/order', orderRouter);
router.use('/cart', cartRouter);

export default router;