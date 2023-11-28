import ProductModel from "../model/product.model.js";

class SearchController{
    async searchProducts(req, res) {
        const search = req.query.search;
        const products = await ProductModel.find({ name: {$regex: search, $options: 'i'} });
        res.status(200)
        res.json(products)
      }
}

export default SearchController;