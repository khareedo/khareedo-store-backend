import CustomerModel from "../model/customer.model.js";

class CustomerController {
  async getCustomers() {
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
    const result = await CustomerModel.create(req.body);
    console.log(result)
    res.status(200)
    res.json({ message: 'OK', success: true});
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