import mongoose from 'mongoose';
import MongoDB from "../config/mongodb.js";
const mongo = new MongoDB()
mongo.connect();

const orderSchema = new mongoose.Schema({
    customer_id: String,
    firstname: String,
    lastname: String,
    email: String,
    telephone: Number,
    payment_firstname: String,
    payment_lastname: String,
    payment_company: String,
    payment_address_1: String,
    payment_address_2: String,
    payment_city: String,
    payment_postcode: String,
    payment_country: String,
    payment_zone: String,
    payment_method: String,
    payment_code: String,
    shipping_firstname: String,
    shipping_lastname: String,
    shipping_company: String,
    shipping_address_1: String,
    shipping_address_2: String,
    shipping_city: String,
    shipping_postcode: String,
    shipping_country: String,
    shipping_zone: String,
    shipping_method: String,
    shipping_code: String,
    comment: String,
    total: Number,
    order_status: String,
    ip: String,
    date_added: String,
    date_modified: String,
});

const OrderModel = mongoose.model('order', orderSchema);

export default OrderModel;