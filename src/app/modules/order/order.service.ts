import { OrderModel } from "../order.model";
import { Order } from "./order.interface";

const createOrderIntoDB = async (order: Order) => {
    const result = await OrderModel.create(order);
    return result;
}

const getAllOrdersFromDB = async () => {
    const result = await OrderModel.find();
    return result;
}

const searchOrderInDB = async (searchTerm: string) => {
    try {
    
        const regex = new RegExp(searchTerm, 'i');

        const orders = await OrderModel.find({
            $or: [{ name: regex }, { description: regex }]
        });

        return orders;
    } catch (err) {
        throw new Error('An error occurred while searching for orders.');
    }
};


export const OrderServices = {
    createOrderIntoDB,
    getAllOrdersFromDB,
    searchOrderInDB,
}