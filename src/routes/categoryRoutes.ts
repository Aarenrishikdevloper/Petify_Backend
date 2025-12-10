import { Router } from "express";
import { rateLimiter } from "../middleware/ratelimit";
import {
 createCategory,
 getCategories,
} from "../controllers/categoryController";

const router = Router();
router.post("/create-category", rateLimiter, createCategory);
router.get("/category", rateLimiter, getCategories);
export default router;
