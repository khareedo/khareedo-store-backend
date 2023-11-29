import {Schema, model} from 'mongoose';

const productSchema = new Schema({
  name: { type: String, required: true },
  model: { type: String, required: true },
  price: { type: Number, default: 0 },
  description: String,
  categoryId: { type: Schema.Types.ObjectId, ref: 'CategoryModel' },
  quantity: { type: Number, default: 0 },
  thumbnail: String,
  metaKeyword: String,
  metaDescription: String
});

const ProductModel = model('product', productSchema);

export default ProductModel;