import { Schema, model, connect } from "mongoose";

export type Variant = {
  type: string;
  value: string;
}

export type Inventory = {
  quantity: number;
  inStock: boolean;
}

// Define the Product interface
export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: Variant[];
  inventory: Inventory;
}
