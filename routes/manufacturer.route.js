import express from 'express';
import ManufacturerController from '../controller/manufacturer.controller.js';

const manufacturerRouter = express.Router();
const manufacturer = new ManufacturerController();

manufacturerRouter.get('/', manufacturer.getManufacturers);
manufacturerRouter.get('/:id', manufacturer.getManufacturer);
manufacturerRouter.post('/', manufacturer.create);
manufacturerRouter.patch('/:id', manufacturer.update);
manufacturerRouter.delete('/:id', manufacturer.delete);

export default manufacturerRouter;