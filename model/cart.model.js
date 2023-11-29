import {Schema, model} from 'mongoose';

const cartSchema = new Schema({
    customer_id: { type: String, required: true },
    product_id: { type: String, required: true },
    quantity: { type: Number, required: true },
    created: { type: Date, default: Date.now }
});

const CartModel = model('cart', cartSchema);

export default CartModel;