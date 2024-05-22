import { ProductModel } from "../product.model";
import { Product } from "./product.interface";

const createProductIntoDb = async (product: Product) => {

    const result = await ProductModel.create(product);
    return result;
}

export const ProductServices = {
    createProductIntoDb,
}