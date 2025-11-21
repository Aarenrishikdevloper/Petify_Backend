import { Router } from "express";
import { rateLimiter } from "../middleware/ratelimit";
import { getProduct, getproductbycategory, getproductbyId, getproductsearch } from "../controllers/productController";


const router = Router();
router.get('/getproducts', rateLimiter, getProduct);   
router.get('/getproducts/:category', rateLimiter, getproductbycategory); 
router.get("/productSearch",  getproductsearch );
router.get("/getproduct/:id", rateLimiter, getproductbyId);
export default router