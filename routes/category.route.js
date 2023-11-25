import express from 'express';
import CategoryController from '../controller/category.controller.js';

const categoryRouter = express.Router();
const category = new CategoryController();

categoryRouter.get('/', category.getCategories);
categoryRouter.get('/:id', category.getCategory);
categoryRouter.post('/', category.create);
categoryRouter.patch('/:id', category.update);
categoryRouter.delete('/:id', category.delete);

export default categoryRouter;