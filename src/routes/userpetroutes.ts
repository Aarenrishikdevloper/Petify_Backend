import { Router } from "express";
import { rateLimiter } from "../middleware/ratelimit";
import { authMiddleware } from "../middleware/authMiddleware";
import {
 addUserPet,
 deletepet,
 getUserPet,
 updateUserpet,
} from "../controllers/userpetcontroller";

const router = Router();
router.post("/add-pet", rateLimiter, authMiddleware, addUserPet);
router.get("/getuserpets", rateLimiter, authMiddleware, getUserPet);
router.patch("/petupdate/:id", rateLimiter, authMiddleware, updateUserpet);
router.delete("/deletepet/:id", rateLimiter, authMiddleware, deletepet);

export default router;
