import mongoose from 'mongoose';
import MongoDB from "../config/mongodb.js";
const mongo = new MongoDB()
mongo.connect();

const categorySchema = new mongoose.Schema({
  name: String,
  description: String,
  thumbnail: String,
  metaKeyword: String,
  metaDescription: String
});

const CategoryModel = mongoose.model('category', categorySchema);

export default CategoryModel;