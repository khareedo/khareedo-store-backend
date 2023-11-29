import CategoryModel from "../model/category.model.js";
import ProductModel from "../model/product.model.js";

class CategoryController {
  async getCategories(req, res) {
    const categories = await CategoryModel.find();
    res.status(200)
    res.json(categories)
  }

  async getCategory(req, res) {
    const category = await CategoryModel.findById(req.params.id);
    const products = await ProductModel.find({categoryId: req.params.id})
    const data = {
      _id: category._id,
      name: category.name,
      description: category.description,
      thumbnail: category.thumbnail,
      metaKeyword: category.metaKeyword,
      metaDescription: category.metaDescription,
      products: []
    };
    products.forEach((p) => {
      data.products.push({
        _id: p._id,
        name: p.name,
        model: p.model,
        description: p.description,
        price: p.price,
        quantity: p.quantity,
        thumbnail: p.thumbnail
      });
    })
    res.status(200)
    res.json(data)
  }

  async create(req, res) {
    const result = await CategoryModel.create(req.body);
    console.log(result)
    res.status(200)
    res.json({ message: 'OK', success: true});
  }

  async update(req, res) {
    const id = req.params.id;
    const data = req.body
    await CategoryModel.findByIdAndUpdate(id, data);
    res.status(200)
    res.json({ message: 'OK', success: true});
  }

  async delete (req, res) {
    const id = req.params.id
    const result = await CategoryModel.findByIdAndDelete(id);
    res.status(200)
    res.json({ message: 'Category was deleted successfully!', success: true});
  }
}

export default CategoryController;