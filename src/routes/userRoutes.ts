import { Router } from "express";
import {
 googleAuth,
 loginController,
 registerUser,
 userUpdate,
} from "../controllers/usercontroller";
import { rateLimiter } from "../middleware/ratelimit";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

router.post("/register", rateLimiter, registerUser);
router.post("/login", loginController);
//router.post("/googleAuth",googleAuth)
router.put("/updateUser", rateLimiter, authMiddleware, userUpdate);
export default router;
