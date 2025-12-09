import { Request, Response } from "express"
import { createpetbody, updatepetbody } from "../types/type";
import { UserPetsModel } from "../models/userpetmodel";
export const addUserPet = async (req: Request<{}, any, createpetbody>, res: Response) => { 
    console.log(req.body);
    try {
        const userId = req.userId;
        if (!userId) {
            return res.status(401).send({ message: "userId is required" })
        }
        const { name, breed, species, gender, age } = req.body
        if (!name || !breed || !species || !gender || !age) {
            return res.status(400).send({ message: "Please fill tthe required fields" })
        }
        const newpet = new UserPetsModel({
            name: name,
            gender: gender,
            owner: userId,
            age: age,
            species: species,
            breed: breed,


        })
        await newpet.save();
        return res.status(200).json({ message: "Pet Creation Sucessfully", data: newpet })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something Went Wrong" });
    }
}
export const getUserPet = async (req: Request, res: Response) => {
    try {
        const userId = req.userId;
        if (!userId) {
            return res.status(401).json({ message: "UserId is required" })
        }
        const pets = await UserPetsModel.find({ owner: userId });
        return res.status(200).json({ data: pets });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Something Went Wrong" })
    }
}
export const updateUserpet = async (req: Request<{ id: string }, any, updatepetbody>, res: Response) => {
    try {
        const { age, gender, name, species, breed } = req.body;
        console.log(req.body);
        const petid = req.params.id;
        const userId = req.userId;
        const updatedBody: updatepetbody = {
            name: name,
            gender: gender,
            age: age,
            species: species,
            breed: breed,
        }
        if (!userId) {
            return res.status(401).json({ message: "UserId is required" })
        }
        if (!petid) {
            return res.status(400).json({ message: "Pet id is required" })
        }
        const petupdate = await UserPetsModel.findByIdAndUpdate(petid, updatedBody,{new:true, runValidators:true});
          //const updatedPet = await UserPetsModel.findById(petid);
        console.log(petupdate);
        return res.status(200).json({ message: "User pet updated Sucessfully", data: petupdate})
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Something Went Wrong" });
    }


} 
export const deletepet = async(req:Request<{id:string},any,{}>, res:Response)=>{
   try {
      const petId = req.params.id; 
      const userId = req.userId;  
      if(!userId){
        return res.status(401).json({message:"User ID is required"})
      }
      console.log(petId);
      if(!petId){
        return res.status(400).json({message:"Petid is required"})
      } 
      await UserPetsModel.deleteOne({_id:petId});
      const pets = await UserPetsModel.find({owner:userId}); 
      return res.status(200).json({message:"Pet deletion sucessfull", data:pets});
   } catch (error) {
     console.error(error);  
     return res.status(500).json({message:"Something Went Wrong"});
   }
}