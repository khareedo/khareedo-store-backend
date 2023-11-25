import mongoose from 'mongoose';
import MongoDB from "../config/mongodb.js";
const mongo = new MongoDB()
mongo.connect();

const manufacturerSchema = new mongoose.Schema({
  name: String,
  description: String,
  logo: String,
  metaKeyword: String,
  metaDescription: String
});

const ManufacturerModel = mongoose.model('manufacturer', manufacturerSchema);

export default ManufacturerModel;