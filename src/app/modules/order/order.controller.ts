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