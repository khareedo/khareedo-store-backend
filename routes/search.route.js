import express from 'express';
import SearchController from '../controller/search.controller.js';

const searchRouter = express.Router();
const search = new SearchController();

searchRouter.get('/', search.searchProducts);

export default searchRouter;