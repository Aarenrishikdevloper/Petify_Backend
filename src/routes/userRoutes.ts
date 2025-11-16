import { Router } from "express";
import { googleAuth, loginController, registerUser } from "../controllers/usercontroller";
import { rateLimiter } from "../middleware.ts/ratelimit";

const router = Router(); 

router.post("/register",rateLimiter, registerUser);
router.post("/login",rateLimiter, loginController);
//router.post("/googleAuth",googleAuth)
export default router;