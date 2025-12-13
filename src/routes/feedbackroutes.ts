import { Router } from "express";
import { rateLimiter } from "../middleware/ratelimit";
import { authMiddleware } from "../middleware/authMiddleware";
import {
 CreateFeedback,
 deleteFeedback,
 getFeedback,
} from "../controllers/feedbackController";

const router = Router();
router.post("/create-feedback", rateLimiter, authMiddleware, CreateFeedback);
router.get("/feedback", rateLimiter, authMiddleware, getFeedback);
router.delete(
 "/deletefeedback/:id",
 rateLimiter,
 authMiddleware,
 deleteFeedback,
);
export default router;
