import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router();

// Create a product
router.post('/create-product', ProductControllers.createProduct);
// Get all products
router.get('/', ProductControllers.getAllProducts);
// Get a single product by ID
router.get('/:productId', ProductControllers.getSingleProduct);;
// Update a product by ID
router.put('/:productId', ProductControllers.updateProduct);
// Delete a product by ID
router.delete('/:productId', ProductControllers.deleteProduct);
// Search for products by term
// router.get('/', ProductControllers.searchProduct);

export const ProductRoutes = router;