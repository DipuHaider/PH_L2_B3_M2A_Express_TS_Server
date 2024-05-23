import { Request, Response } from "express";
import { OrderServices } from "./order.service";

const createOrder = async (req: Request, res: Response) => {

    try{
        const {order: orderData } = req.body;

        //will call service func to send this data
        const result = await OrderServices.createOrderIntoDB(orderData);

        //send response
        res.status(200).json({
            success: true,
            message: 'Order is created Successfully.',
            data: result,
        });
    } catch (err){
        console.log(err);
    }
};

const getAllOrders = async (req: Request, res: Response) => {

    try{
        //will call service func to get this data
        const result = await OrderServices.getAllOrdersFromDB();

        //send response
        res.status(200).json({
            success: true,
            message: 'Orders are retrieved Successfully.',
            data: result,
        });
    } catch (err){
        console.log(err);
    }
};

const searchOrder = async (req: Request, res: Response) => {
    try {
        const searchTerm = req.query.searchTerm;

        if (!searchTerm) {
            return res.status(400).json({ success: false, message: 'Search term is required.' });
        }

        // Call service function to search for orders
        const orders = await OrderServices.searchOrderInDB(searchTerm as string);

        // Send response
        res.status(200).json({ 
            success: true,
            message: `Orders matching search term ${searchTerm} fetched successfully!",`,
            data: orders 
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'An error occurred while searching for orders.' });
    }
};

export const OrderControllers = {
    createOrder,
    getAllOrders,
    searchOrder,
}