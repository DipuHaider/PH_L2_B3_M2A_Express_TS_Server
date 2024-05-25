import { OrderModel } from "../order.model";
import { Order } from "./order.interface";

const createOrderIntoDB = async (order: Order) => {
    const result = await OrderModel.create(order);
    return result;
}

const getAllOrdersFromDB = async (email: string) => {
    try {
        if (email) {
            const result = await OrderModel.find({ email });
            return result;
        } else {
            const result = await OrderModel.find();
            return result;
        }
    } catch (error) {
        throw error;
    }
}

export const OrderServices = {
    createOrderIntoDB,
    getAllOrdersFromDB,
}