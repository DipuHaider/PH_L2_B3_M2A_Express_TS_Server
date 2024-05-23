import { Schema, model, connect } from "mongoose";

interface Order {
  email: string;
  productId: string;
  price: number;
  quantity: string;
}

export { Order };
