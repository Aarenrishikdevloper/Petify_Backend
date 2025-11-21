import {Request,Response} from 'express'
import { Product } from '../models/productmodel'
export const getProduct = async(req:Request, res:Response)=>{
    try {
        const products = await Product.find(); 
        return res.status(200).json({products:products});
    } catch (error) {
         console.log(error); 
         return res.status(500).json({message:"Something Went Wrong"})
    }
} 
export const getproductbycategory =  async(req:Request<{category:string}>,res:Response)=>{ 
    try {
        const category = req.params.category; 
        const categoryLower = category.toLowerCase(); 
        const products = await Product.find({category:categoryLower}); 
        return res.status(200).json({products:products});
    } catch (error) {
        console.log(error); 
        return res.status(200).json({message:"Something went wrong"});
    }

}
export const getproductsearch = async(req:Request, res:Response)=>{
    try {
        const query = req.query.query as string;  
        if(!query || query.length < 1 || query.length > 100){
            return res.status(400).json({message:"Invalid query lenght"});
        } 
        const products =await Product.find({name:{$regex:query, $options:"i"}}); 
        return res.status(200).json({products:products});
    } catch (error) {
        console.log(error); 
        return res.status(500).json({message:"Something Went Wrong"});
    }
} 

export const getproductbyId = async(req:Request<{id:string}>, res:Response)=>{
    try {
        const id = req.params.id; 
        const product = await Product.findById(id); 
        return res.status(200).json({prduct:product});
    } catch (error) {
        console.log(error); 
        return res.status(500).json({message:"Something went Wrong"});
    }
}