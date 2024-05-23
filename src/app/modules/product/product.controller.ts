import { Request, Response } from "express";
import { ProductServices } from "./product.service";

const createProduct = async (req: Request, res: Response) => {

    try{
        const {product: productData } = req.body;

        //will call service func to send this data
        const result = await ProductServices.createProductIntoDb(productData);

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

export const ProductControllers = {
    createProduct,
}