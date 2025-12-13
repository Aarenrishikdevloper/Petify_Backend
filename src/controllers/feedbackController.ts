import { Request, Response } from "express";
import { Feedback } from "../models/feedbackmodel";

export const CreateFeedback = async (
 req: Request<{}, any, { feedback: string }>,
 res: Response,
) => {
 try {
  const userId = req.userId;
  const { feedback } = req.body;
  if (!userId) {
   return res.status(401).json({ message: "The UserId is required" });
  }
  const newfeedback = await Feedback.create({
   feedback: feedback,
   user: userId,
   time: Date.now(),
  });
  return res
   .status(200)
   .json({ message: "Feedback generation Sucessfully", data: newfeedback });
 } catch (error: unknown) {
  console.error(error);
  return res.status(500).json({ message: "Something Went Wrong" });
 }
};
export const getFeedback = async (req: Request, res: Response) => {
 try {
  const userId = req.userId;
  if (!userId) {
   return res.status(401).json({ message: "userId is required" });
  }
  const feedbacks = await Feedback.find({ user: userId });
  return res.status(200).json({ data: feedbacks });
 } catch (error: unknown) {
  console.error(error);
  return res.status(500).json({ message: "Something Went Wrong" });
 }
};
export const deleteFeedback = async (
 req: Request<{ id: string }, any, {}>,
 res: Response,
) => {
 try {
  const feedbackId = req.params.id;
  if (!feedbackId) {
   return res.status(400).json({ message: "feedback id is required" });
  }
  const userId = req.userId;
  if (!userId) {
   return res.status(401).json({ message: "userid is required" });
  }
  await Feedback.deleteOne({ _id: feedbackId, user: userId });
  return res.status(200).json({ message: "User deletion Sucessfully" });
 } catch (error: unknown) {
  console.error(error);
  return res.status(500).json({ message: "Something Went Wrong" });
 }
};
