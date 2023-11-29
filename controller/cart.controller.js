import CartModel from "../model/cart.model.js";

class CartController {
  async getCarts(req, res) {
    const carts = await CartModel.find();
    
    res.status(200)
    res.json(carts)
  }

  async getCart(req, res) {
    const data = await CartModel.findById(req.params.id);
    res.status(200)
    res.json(data)
  }

  async create(req, res) {
    const result = await CartModel.create(req.body);
    console.log(result)
    res.status(200)
    res.json({ message: 'OK', success: true});
  }

  async update(req, res) {
    const id = req.params.id;
    const data = req.body
    await CartModel.findByIdAndUpdate(id, data);
    res.status(200)
    res.json({ message: 'OK', success: true});
  }

  async delete (req, res) {
    const id = req.params.id
    const result = await CartModel.findByIdAndDelete(id);
    res.status(200)
    res.json({ message: 'Cart was deleted successfully!', success: true});
  }
}

export default CartController;