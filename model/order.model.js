import {Schema, model} from 'mongoose';

const orderSchema = new Schema({
    customer_id: {type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    telephone: { type: Number, required: true },
    payment_firstname: { type: String, required: true },
    payment_lastname: { type: String, required: true },
    payment_company: { type: String, required: true },
    payment_address_1: { type: String, required: true },
    payment_address_2: String,
    payment_city: { type: String, required: true },
    payment_postcode: { type: String, required: true },
    payment_country: { type: String, required: true },
    payment_zone: { type: String, required: true },
    payment_method: { type: String, required: true },
    payment_code: { type: String, required: true },
    shipping_firstname: { type: String, required: true },
    shipping_lastname: { type: String, required: true },
    shipping_company: { type: String, required: true },
    shipping_address_1: { type: String, required: true },
    shipping_address_2: String,
    shipping_city: { type: String, required: true },
    shipping_postcode: { type: String, required: true },
    shipping_country: { type: String, required: true },
    shipping_zone: { type: String, required: true },
    shipping_method: { type: String, required: true },
    shipping_code: { type: String, required: true },
    comment: { type: String, required: true },
    total: Number,
    order_status: String,
    ip: String,
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
});

const OrderModel = model('order', orderSchema);

export default OrderModel;