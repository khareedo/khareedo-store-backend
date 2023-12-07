import CustomerModel from "../model/customer.model.js";
import bcrypt from 'bcrypt';
import * as auth from '../config/auth.config.js';
import Auth from '../middleware/auth.js'

class CustomerController {
  async login(req, res) {
    const auth = new Auth();
    const { email, password } = req.body;

    const {status, token, name, username} = await auth.verifyUserLogin(email, password);
    
    res.status(status);

    res.json({token, name, username});
  }

  async logout(req, res) {
    const auth = new Auth();
    const result = await auth.destroyUserLogin();
    
    res.status(200);

    res.json({message: 'Logged out!'});
  }
  
  async isLogged(req, res) {
    const { token } = req.body;
    const auth = new Auth();
    const result = await auth.verifyToken(token);
    res.send(result);
  }

  async getCustomers(req, res) {
    const customers = await CustomerModel.find();
    res.status(200)
    res.json(customers)
  }

  async getCustomer(req, res) {
    const data = await CustomerModel.findById(req.params.id);
    res.status(200)
    res.json(data)
  }

  async create(req, res) {
    const hashedPassword = await bcrypt.hash(req.body.password, auth.default.salt);
    try {
      const customerData = { ...req.body, password: hashedPassword}
      const result = await CustomerModel.create(customerData);
      res.status(200)
      res.json({ message: 'OK', success: true});
    } catch (error) {
      res.status(409)
      res.json({ message: 'Error in saving customer : ' + error.message, success: false});
    }
  }

  async update(req, res) {
    const id = req.params.id;
    const data = req.body
    await CustomerModel.findByIdAndUpdate(id, data);
    res.status(200)
    res.json({ message: 'OK', success: true});
  }

  async delete (req, res) {
    const id = req.params.id
    const result = await CustomerModel.findByIdAndDelete(id);
    res.status(200)
    res.json({ message: 'Customer was deleted successfully!', success: true});
  }
}

export default CustomerController;