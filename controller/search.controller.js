import ProductModel from "../model/product.model.js";

class SearchController{
    async searchProducts(req, res) {
        const products = await ProductModel.find();
        
        res.status(200)
        res.json(products)
      }
    
      async searchProduct(req, res) {
        const data = await ProductModel.findById(req.params.id);
        res.status(200)
        res.json(data)
      }
}

export default SearchController;

// exports.search = async (req, res) => {
//   const { query } = req.query;

//   const products = await Product.find({
//     name: { $regex: new RegExp(query, 'i') },
//   });

//   res.json(products);
// };