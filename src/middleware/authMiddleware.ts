import { Request,Response,NextFunction } from "express"
import jwt from 'jsonwebtoken';
interface JwtPayload{
    userId:string
} 
declare global {
    namespace Express{
        interface Request{
            userId?:string
        }
    }
} 
export const authMiddleware =(req:Request, res:Response,next:NextFunction)=>{
    try{
    const authHeader = req.headers.authorization; 
    if(!authHeader || !authHeader.startsWith("Bearer ")){
        return res.status(401).json({message:"Authorization token missing or invalid"});
    } 
    const token = authHeader.split(" ")[1]; 
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;  
    req.userId = decoded.userId;
    next();
 }catch(e){
    return res.status(401).json({message:"Invalid or expired token"});
 }
}