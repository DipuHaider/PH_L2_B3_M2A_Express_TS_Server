import express from "express";
import { OrderControllers } from "./order.controller";

const router = express.Router();

// Create a order
router.post('/create-order', OrderControllers.createOrder);
// Get all orders
router.get('/', OrderControllers.getAllOrders);

export const OrderRoutes = router;