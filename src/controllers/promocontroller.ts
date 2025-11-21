import {Request, Response} from "express"
import { createPromo } from "../types/type"
import { Promo } from "../models/promomodel";
export const createPromocotroller =async(req:Request<{},any,createPromo >, res:Response)=>{
    try {
        const {category,title,image} = req.body;  
        const newpromo = new Promo({
            title:title, 
            category:category, 
            image:image,    
        })
        await newpromo.save(); 
        return res.status(200).json({promo:newpromo});
    } catch (error) {
        console.log(error); 
        return res.status(500).json({message:"Something Went Wrong"});
    }
}
export const getpromo = async(req:Request,res:Response)=>{
    try {
        const promos = await Promo.find(); 
        return res.status(200).json({promo:promos});
    } catch (error) {
        console.log(error); 
        return res.status(500).json({messgae:"Something Went WWrong"});
    }
}