import CartModel from "../model/cart.model.js";

class CartController {
  async getOrders(req, res) {
    const carts = await OrderModel.find();
    
    res.status(200)
    res.json(orders)
  }

  async getOrder(req, res) {
    const data = await OrderModel.findById(req.params.id);
    res.status(200)
    res.json(data)
  }

  async create(req, res) {
    const result = await OrderModel.create(req.body);
    console.log(result)
    res.status(200)
    res.json({ message: 'OK', success: true});
  }

  async update(req, res) {
    const id = req.params.id;
    const data = req.body
    await OrderModel.findByIdAndUpdate(id, data);
    res.status(200)
    res.json({ message: 'OK', success: true});
  }

  async delete (req, res) {
    const id = req.params.id
    const result = await OrderModel.findByIdAndDelete(id);
    res.status(200)
    res.json({ message: 'Customer was deleted successfully!', success: true});
  }
}

export default OrderController;