import ProductModel from "../model/product.model.js";

class SearchController{
    async searchProducts(req, res) {
        console.log('query ', req.query);
        const search = req.query.search;
        const products = await ProductModel.find({ name: `/${search}/i` }).exec();
        console.log('products ', products);
        res.status(200)
        res.json(products)
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