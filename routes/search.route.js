import express from 'express';
import ProductController from '../controller/search.controller.js';

const searchRouter = express.Router();
const search = new SearchController();

searchRouter.get('/', product.searchProducts);
searchRouter.get('/:id', product.searchProduct);

export default searchRouter;