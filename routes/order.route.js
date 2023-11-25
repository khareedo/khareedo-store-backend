import express from 'express';
import OrderController from '../controller/order.controller.js';

const orderRouter = express.Router();
const order = new OrderController();

orderRouter.get('/', order.getOrders);
orderRouter.get('/:id', order.getOrder);
orderRouter.post('/', order.create);
orderRouter.patch('/:id', order.update);
orderRouter.delete('/:id', order.delete);

export default orderRouter;