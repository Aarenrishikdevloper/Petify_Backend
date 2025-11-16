import {Request, Response} from "express"
import { IuserIn, IuserLogin } from "../types/type"
import { UserModel } from "../models/usermodel";
import bcrypt from 'bcrypt'; 
import jwt from 'jsonwebtoken'
import { userInfo } from "os";
import { EventEmitterAsyncResource } from "stream";
const createjwt = async(id:any)=>{

    const token = await jwt.sign({userId:id},process.env.JWT_SECRET as string, {algorithm:'HS256'});
    return token
}
export const registerUser = async(req:Request<{},any,IuserIn>, res:Response)=>{
   try {
     const {email,password,name} = req.body;  
     const existingUser = await UserModel.findOne({email:email})
     if(existingUser){
        return res.status(400).json({message:"User Already exists"})
     }
     const hashpassword = await bcrypt.hash(password, 10); 
     const newUser = await UserModel.create({
        name:name, 
        email:email, 
        password:hashpassword,
     })
  
     const token = await createjwt(newUser._id);
     console.log(token);
      return res.status(200).json({message:"User Registration Sucessfull",token:token,user:newUser});
   } catch (error) {
     console.log(error); 
     return res.status(500).json({message:"Something Went Wrong"})
   }
}  

export const loginController =async(req:Request<{},any,IuserLogin>, res:Response)=>{ 
   try {
      const{email,password} = req.body   
      const userexist = await UserModel.findOne({email:email});  
      if(!userexist){
         return res.status(401).json({mesage:"Unauthorized! user do not exist"})
      }
      const ispassok = await bcrypt.compareSync(password,userexist.password);  
      if(!ispassok){
         return res.status(401).json({mesage:"Unauthorized! Invalid Password"})
      }
      const token = await createjwt(userexist._id); 
      return res.status(200).json({message:"User login Sucessfully", token:token, user:userexist})
   } catch (error) {
      console.error(error); 
      return res.status(500).json({message:"Something Went Wrong"});
   }

} 
export const googleAuth =async(req:Request<{}, any,IuserIn>, res:Response)=>{
   try {
      const{name,email} = req.body;  
      if(!email){
         return res.status(400).json({message:"Email is required"})
      } 
      let user = await UserModel.findOne({email:email}); 
      if(!user){
         user = await UserModel.create({
            name:name,  
            email:email, 

         }); 
         
      }
      const token = await createjwt(user._id); 
      return res.json({message:"Google Auth Sucessfully",token:token,user:user})
   } catch (error) {
      console.error(error);
      return res.status(500).json({message:"Something Went Wrong"})
   }
}