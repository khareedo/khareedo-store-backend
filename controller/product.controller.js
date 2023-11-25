import ProductModel from "../model/product.model.js";

class ProductController {
  async getProducts() {
    const products = await ProductModel.find();
    
    res.status(200)
    res.json(products)
  }

  async getProduct(req, res) {
    const data = await ProductModel.findById(req.params.id);
    res.status(200)
    res.json(data)
  }

  async create(req, res) {
    const result = await ProductModel.create(req.body);
    console.log(result)
    res.status(200)
    res.json({ message: 'OK', success: true});
  }

  async update(req, res) {
    const id = req.params.id;
    const data = req.body
    await ProductModel.findByIdAndUpdate(id, data);
    res.status(200)
    res.json({ message: 'OK', success: true});
  }

  async delete (req, res) {
    const id = req.params.id
    const result = await ProductModel.findByIdAndDelete(id);
    res.status(200)
    res.json({ message: 'Product was deleted successfully!', success: true});
  }
}

export default ProductController;