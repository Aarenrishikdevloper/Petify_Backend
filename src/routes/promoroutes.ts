import { Router } from "express";
import { rateLimiter } from "../middleware/ratelimit";
import { createPromocotroller, getpromo } from "../controllers/promocontroller";

const router = Router(); 
router.post('/create-promo', rateLimiter, createPromocotroller); 
router.get('/promo', rateLimiter,getpromo);
export default router;