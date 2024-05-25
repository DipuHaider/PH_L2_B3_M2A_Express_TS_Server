import mongoose from "mongoose";
import { ProductModel } from "../product.model";
import { Product } from "./product.interface";

const createProductIntoDB = async (product: Product) => {
    const result = await ProductModel.create(product);
    return result;
}

const getAllProductsFromDB = async (searchTerm: string) => {
    try {
        if (searchTerm) {
            const regex = new RegExp(searchTerm, 'i');
            const products = await ProductModel.find({
                $or: [
                    { name: { $regex: regex } },
                    { description: { $regex: regex } },
                    { tags: { $in: [regex] } }
                ]
            });
            return products;
        } else {
            const result = await ProductModel.find();
            return result;
        }
    } catch (error) {
        throw error;
    }
};

const getSingleProductFromDB = async (id: string) => {
    const result = await ProductModel.findOne({id});
    return result;
}

const updateProductInDB = async (productId: string, updatedProductData: any) => {
    try {
        const filter = { id: productId };
        const update = updatedProductData; // Use $set for partial updates

        const result = await ProductModel.findOneAndUpdate(filter, update, { new: true, runValidators: true });
        return result;
    } catch (err) {
        console.error('Error in updateProductInDB:', err);
        throw err;
    }
}

const deleteProductFromDB = async (id: string) => {
    const result = await ProductModel.findOneAndDelete({ id });
    return result;
}


export const ProductServices = {
    createProductIntoDB,
    getAllProductsFromDB,
    getSingleProductFromDB,
    updateProductInDB,
    deleteProductFromDB,
}