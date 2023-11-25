import express from 'express';
import ProductController from '../controller/product.controller.js';

const productRouter = express.Router();
const product = new ProductController();

productRouter.get('/', product.getProducts);
productRouter.get('/:id', product.getProduct);
productRouter.post('/', product.create);
productRouter.patch('/:id', product.update);
productRouter.delete('/:id', product.delete);

export default productRouter;