import {Request, Response} from "express"
import { Banner } from "../models/bannermodel";
import { createPromo } from "../types/type";

export const createBannerController =async(req:Request<{},any,createPromo >, res:Response)=>{
    try {
        const {category,title,image} = req.body;  
        const newbanner = new Banner({
            title:title, 
            category:category, 
            image:image,    
        })
        await newbanner.save(); 
        return res.status(200).json({promo:newbanner});
    } catch (error) {
        console.log(error); 
        return res.status(500).json({message:"Something Went Wrong"});
    }
}
export const getbanner = async(req:Request,res:Response)=>{
    try {
        const banner = await Banner.find(); 
        return res.status(200).json({banner:banner});
    } catch (error) {
        console.log(error); 
        return res.status(500).json({messgae:"Something Went WWrong"});
    }
}