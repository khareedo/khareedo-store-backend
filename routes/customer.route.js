import express from 'express';
import CustomerController from '../controller/customer.controller.js';

const customerRouter = express.Router();
const customer = new CustomerController();

customerRouter.get('/', customer.getCustomers);
customerRouter.get('/:id', customer.getCustomer);
customerRouter.post('/', customer.create);
customerRouter.patch('/:id', customer.update);
customerRouter.delete('/:id', customer.delete);

export default customerRouter;