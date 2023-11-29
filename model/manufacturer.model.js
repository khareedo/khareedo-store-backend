import {Schema, model} from 'mongoose';

const manufacturerSchema = new Schema({
  name: String,
  description: String,
  logo: String,
  metaKeyword: String,
  metaDescription: String
});

const ManufacturerModel = model('manufacturer', manufacturerSchema);

export default ManufacturerModel;