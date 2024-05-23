import { ProductModel } from "../product.model";
import { Product } from "./product.interface";

const createProductIntoDB = async (product: Product) => {
    const result = await ProductModel.create(product);
    return result;
}

const getAllProductsFromDB = async () => {
    const result = await ProductModel.find();
    return result;
}

const getSingleProductFromDB = async (id: string) => {
    const result = await ProductModel.findOne({id});
    return result;
}

const updateProductInDB = async (id: string, updatedProductData: Partial<Product>) => {
    const result = await ProductModel.findOneAndUpdate({ id }, updatedProductData, { new: true });
    return result;
}

const deleteProductFromDB = async (id: string) => {
    const result = await ProductModel.findOneAndDelete({ id });
    return result;
}

const searchProductInDB = async (searchTerm: string) => {
    try {
    
        const regex = new RegExp(searchTerm, 'i');

        const products = await ProductModel.find({
            $or: [{ name: regex }, { description: regex }]
        });

        return products;
    } catch (err) {
        throw new Error('An error occurred while searching for products.');
    }
};


export const ProductServices = {
    createProductIntoDB,
    getAllProductsFromDB,
    getSingleProductFromDB,
    updateProductInDB,
    deleteProductFromDB,
    searchProductInDB,
}