import { Request, Response } from "express";
import { ICategoryRequest } from "../types/type";
import { Category } from "../models/categorymodel";

export const createCategory = async (
 req: Request<{}, any, ICategoryRequest>,
 res: Response,
) => {
 try {
  const { name, priority, image } = req.body;
  const newCategory = await Category.create({
   name: name,
   image: image,
   priority: priority,
  });
  return res
   .status(200)
   .json({ message: "Category Creation Sucesssfully", data: newCategory });
 } catch (error: unknown) {
  console.error(error);
  return res.status(500).json({ message: "Something Went Wrong" });
 }
};
export const getCategories = async (req: Request, res: Response) => {
 try {
  const categories = await Category.find().sort({ priority: 1 });
  return res.status(200).json({ data: categories });
 } catch (error: unknown) {
  console.error(error);
  return res.status(200).json({ message: "Something Went Wrong" });
 }
};
