import { Router } from "express";
import { rateLimiter } from "../middleware/ratelimit";
import { authMiddleware } from "../middleware/authMiddleware";
import {
 addToCart,
 decreaseQuantity,
 deleteCart,
 emptyCart,
 getCart,
} from "../controllers/cartcontroller";

const router = Router();
router.post("/cart", rateLimiter, authMiddleware, addToCart);
router.get("/getcart", rateLimiter, authMiddleware, getCart);
router.delete("/deletecart/:id", rateLimiter, authMiddleware, deleteCart);
router.delete("/emptycart", rateLimiter, authMiddleware, emptyCart);
router.patch("/decrease/:id", rateLimiter, authMiddleware, decreaseQuantity);
export default router;
