import {Schema, model} from 'mongoose';

const categorySchema = new Schema({
  name: { type: String, required: true },
  description: String,
  thumbnail: String,
  metaKeyword: String,
  metaDescription: String,
  products: [{ type: Schema.Types.ObjectId, ref: 'ProductModel' }]
});

const CategoryModel = model('category', categorySchema);

export default CategoryModel;