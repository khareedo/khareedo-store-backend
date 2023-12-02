import ProductModel from "../model/product.model.js";
import __dirname from 'path';

class ProductController {
  async getProducts(req, res) {
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
    const { image } = req.files;
    const data = req.body;

    if (image) {
      image.mv(__dirname + './../public/images/' + image.name);
      data.thumbnail = '/images/' + image.name;
    }

    const result = await ProductModel.create(data);
    res.status(200)
    res.json({ message: 'OK', success: true});
  }

  async update(req, res) {
    const id = req.params.id;
    const data = req.body
    const { image } = req.files;

    if (image) {
      image.mv(__dirname + './../public/images/' + image.name);
      data.thumbnail = '/images/' + image.name;
    }

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