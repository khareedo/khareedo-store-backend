import CustomerModel from "../model/customer.model.js";

class CustomerController {
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
    try {
      const result = await CustomerModel.create(req.body);
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