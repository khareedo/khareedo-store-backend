import mongoose from 'mongoose';
import MongoDB from "../config/mongodb.js";
const mongo = new MongoDB()
mongo.connect();

const cartSchema = new mongoose.Schema({
    customer_id: String,
    product_id: String,
    quantity: Number,
    date_added: String
});

const CartModel = mongoose.model('cart', cartSchema);

export default CartModel;