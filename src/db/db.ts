import mongoose from "mongoose"; 
export const connectDb =async()=>{
    try {
       await  mongoose.connect(process.env.MONGO_URL as string); 
       console.log("😀 Mongodb Connected")
    } catch (e) {
        console.error("😡 Error Connecting mongodb",e)
    }
}