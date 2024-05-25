import { Request, Response } from "express";
import { OrderServices } from "./order.service";
import { ProductServices } from "../product/product.service";

const createOrder = async (req: Request, res: Response) => {

    try {
        const { order: orderData } = req.body;

        // Check if the product exists
        const product: any = await ProductServices.getProductFindByIdFromDB(orderData.productId);
        // console.log(orderData.productId);
        
        

        if (!orderData.productId) {
            return res.status(404).json({
                success: false,
                message: 'Product not found.',
            });
        }
        
        // console.log(orderData.quantity)
        let productQuantity = product.inventory.quantity;
        let productStock = product.inventory.inStock;

        // Check if there is sufficient stock
        if (productQuantity < orderData.quantity) {
            return res.status(400).json({
                success: false,
                message: "Insufficient quantity available in inventory",
            });
        }

        // Update inventory quantity and inStock status
        productQuantity -= orderData.quantity;
        productStock = productQuantity > 0;

        // Save the updated product
        await product.save();

        // Create the order
        const result = await OrderServices.createOrderIntoDB(orderData);

        // Return success response
        res.status(201).json({
            success: true,
            message: 'Order created successfully.',
            data: result,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
};

const getAllOrders = async (req: Request, res: Response) => {

    try {
        let email = req.query.email as string;
        const result = await OrderServices.getAllOrdersFromDB(email);
        res.status(200).json({
            success: true,
            message: 'Orders retrieved successfully.',
            data: result,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
};

export const OrderControllers = {
    createOrder,
    getAllOrders,
}