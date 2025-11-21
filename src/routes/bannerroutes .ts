import { Router } from "express";
import { rateLimiter } from "../middleware/ratelimit";
import { createPromocotroller, getpromo } from "../controllers/promocontroller";
import { createBannerController, getbanner } from "../controllers/bannerController";

const router = Router(); 
router.post('/create-banner', rateLimiter, createBannerController); 
router.get('/banner', rateLimiter,getbanner);
export default router;