import { Request, Response } from "express";
import { cartInput } from "../types/type";
import { CartModel } from "../models/cartmodels";
import { Product } from "../models/productmodel";
export const addToCart = async (
 req: Request<{}, any, cartInput>,
 res: Response,
) => {
 try {
  const userId = req.userId;

  if (!userId) {
   return res.status(401).json({ message: "UserID is required" });
  }
  const cart_items = await CartModel.findOne({
   user_id: userId,
   product: req.body.productId,
  });
  const product = await Product.findOne({ _id: req.body.productId });
  if (!product) {
   return res.status(400).json({ message: "product Not found" });
  }
  if (cart_items) {
   const cart = await CartModel.updateOne(
    { user_id: userId, product: req.body.productId },
    { $inc: { quantity: 1 } },
   );
   return res
    .status(200)
    .json({ message: "Cart Updated Sucessfully", data: cart });
  } else {
   const cart = await CartModel.create({
    product: req.body.productId,
    user_id: userId,
    quantity: req.body.qty,
   });
   return res
    .status(200)
    .json({ message: "Added to Cart Sucessfully", data: cart });
  }
 } catch (error: unknown) {
  console.error(error);
  return res.status(500).json({ message: "Something Went Wrong" });
 }
};
export const getCart = async (req: Request, res: Response) => {
 try {
  const userId = req.userId;
  if (!userId) {
   return res.status(401).json({ message: "UserId is required" });
  }
  const cart = await CartModel.find({ user_id: userId }).populate("product");
  return res
   .status(200)
   .json({ message: "Sucessfully fetched cart data", data: cart });
 } catch (error: unknown) {
  console.error(error);
  return res.status(500).json({ message: "Something Went Wrong" });
 }
};
export const deleteCart = async (
 req: Request<{ id: string }, any, {}>,
 res: Response,
) => {
 try {
  const userId = req.userId;
  console.log(req.params.id);
  if (!userId) {
   return res.status(401).json({ message: "The userId is required" });
  }
  const cartId = req.params.id;
  await CartModel.deleteOne({ _id: cartId, user_id: userId });
  return res.status(200).json({ message: "User Cart deleted Sucessfully" });
 } catch (error: unknown) {
  console.error(error);
  return res.status(500).json({ message: "Something Went Wrong" });
 }
};
export const emptyCart = async (req: Request, res: Response) => {
 try {
  const userId = req.userId;
  if (!userId) {
   return res.status(401).json({ message: "UserId is required" });
  }
  await CartModel.deleteMany({ user_id: userId });
  return res.status(200).json({ message: "User Cart empty Sucessfully" });
 } catch (error: unknown) {
  console.error(error);
  return res.status(500).json({ message: "Something Went Wrong" });
 }
};
export const decreaseQuantity = async (
 req: Request<{ id: string }>,
 res: Response,
) => {
 try {
  const cartId = req.params.id;
  const userId = req.userId;
  if (!userId) {
   return res.status(401).json({ message: "UserId is required" });
  }
  const cart_items = await CartModel.findOne({ _id: cartId, user_id: userId });
  if (!cart_items) {
   return res.status(400).json({ message: "Cart Item not avalaible" });
  }
  if (cart_items.quantity > 1) {
   await CartModel.updateOne(
    { _id: cartId, user_id: userId },
    {
     $inc: { quantity: -1 },
    },
   );
  }
  return res.status(200).json({ message: "Quantity decreased" });
 } catch (error: unknown) {
  console.error(error);
  return res.status(500).json({ message: "Something Went Wrong" });
 }
};
