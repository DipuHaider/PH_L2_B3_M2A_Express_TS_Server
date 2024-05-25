import { Request, Response } from "express";
import { ProductServices } from "./product.service";

const createProduct = async (req: Request, res: Response) => {

    try{
        const {product: productData } = req.body;

        //will call service func to send this data
        const result = await ProductServices.createProductIntoDB(productData);

        //send response
        res.status(200).json({
            success: true,
            message: 'Product is created Successfully.',
            data: result,
        });
    } catch (err){
        console.log(err);
    }
};

const getAllProducts = async (req: Request, res: Response) => {

    try{
        //will call service func to get this data
        const result = await ProductServices.getAllProductsFromDB();

        //send response
        res.status(200).json({
            success: true,
            message: 'Products are retrieved Successfully.',
            data: result,
        });
    } catch (err){
        console.log(err);
    }
};

const getSingleProduct = async (req: Request, res: Response) => {

    try{

        const { productId } = req.params;

        //will call service func to get this data
        const result = await ProductServices.getSingleProductFromDB(productId);

        //send response
        res.status(200).json({
            success: true,
            message: `Product ${productId} is retrieved successfully.`,
            data: result,
        });
    } catch (err){
        console.log(err);
    }
};

const updateProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const updatedProductData = req.body;

        // Call service function to update the product
        const result = await ProductServices.updateProductInDB(productId, updatedProductData);
        if (!result) {
            return res.status(404).json({
                success: false,
                message: `Product with ID ${productId} not found.`,
            });
        }

        // Send response
        res.status(200).json({
            success: true,
            message: `Product ${productId} is updated successfully.`,
            data: result,
        });
    } catch (err) {
        console.log(err);
    }
};

const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;

        // Call service function to delete the product
        const result = await ProductServices.deleteProductFromDB(productId);

        // Send response
        res.status(200).json({
            success: true,
            message: `Product ${productId} is deleted successfully.`,
            data: result,
        });

    } catch (err) {
        console.log(err);
    }
};

const searchProduct = async (req: Request, res: Response) => {
    try {
        const searchTerm = req.query.searchTerm;

        if (!searchTerm) {
            return res.status(400).json({ success: false, message: 'Search term is required.' });
        }

        // Call service function to search for products
        const products = await ProductServices.searchProductInDB(searchTerm as string);

        // Send response
        res.status(200).json({ 
            success: true,
            message: `Products matching search term ${searchTerm} fetched successfully!",`,
            data: products 
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'An error occurred while searching for products.' });
    }
};

export const ProductControllers = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    searchProduct,
}