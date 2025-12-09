import { Router } from "express";
import {
  addMedical,
  getMedicalNotification,
} from "../controllers/medicalController";
import { rateLimiter } from "../middleware/ratelimit";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();
router.post("/add-medical/:id", rateLimiter, addMedical);
router.get("/getmedicals/:id", rateLimiter, getMedicalNotification);
export default router;
