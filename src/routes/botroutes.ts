import { Router } from "express";
import { rateLimiter } from "../middleware/ratelimit";
import { aiController } from "../controllers/aicontroller";

const router = Router();
router.post("/ai-bot", rateLimiter, aiController);
export default router;
