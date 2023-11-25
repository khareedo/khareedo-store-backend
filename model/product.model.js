import mongoose from 'mongoose';
import MongoDB from "../config/mongodb.js";
const mongo = new MongoDB()
mongo.connect();

const productSchema = new mongoose.Schema({
  name: String,
  model: String,
  price: Number,
  description: String,
  categoryId: String,
  quantiy: Number,
  thumbnail: String,
  metaKeyword: String,
  metaDescription: String
});

const ProductModel = mongoose.model('product', productSchema);

export default ProductModel;