import express from 'express';
import CartController from '../controller/cart.controller.js';

const cartRouter = express.Router();
const cart = new CartController();

cartRouter.get('/', cart.getCarts);
cartRouter.post('/', cart.create);
cartRouter.patch('/:id', cart.update);
cartRouter.delete('/:id', cart.delete);

export default cartRouter;