import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router();

//will call controller function
router.post('/create-product', ProductControllers.createProduct);