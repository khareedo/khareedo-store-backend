import {Schema, model} from 'mongoose';

const customerSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  phone: Number,
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
});

const CustomerModel = model('customer', customerSchema);

export default CustomerModel;