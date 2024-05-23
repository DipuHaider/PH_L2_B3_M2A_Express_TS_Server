import { Schema, model, connect } from "mongoose";
import { Order } from "./order/order.interface";

// Define the schema
const orderSchema = new Schema({
    email: { type: String, required: true },
    productId: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: String, required: true }
});

// Create and export the model
const OrderModel = model<Order>('Order', orderSchema);

export { OrderModel };