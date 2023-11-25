import mongoose from 'mongoose';
import MongoDB from "../config/mongodb.js";
const mongo = new MongoDB()
mongo.connect();

const customerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phoneNumber: Number,
  email: String,
  password: String,
});

const CustomerModel = mongoose.model('customer', customerSchema);

export default CustomerModel;