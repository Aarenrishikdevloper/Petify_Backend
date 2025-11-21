import rateLimit from "express-rate-limit"; 
import { NodeCacheStore } from "../utils/nodecache";  
export const rateLimiter = rateLimit({
    windowMs:60*1000,  
    limit:50,  
    message:"To many requests,Please try again", 
    standardHeaders:true, 
    legacyHeaders:false, 
    store:new NodeCacheStore(60)
})