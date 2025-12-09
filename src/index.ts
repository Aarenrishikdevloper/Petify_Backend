import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
import { connectDb } from "./db/db";
import userRoutes from "./routes/userRoutes";
import productRoutes from "./routes/productRoute";
import { rateLimiter } from "./middleware/ratelimit";
import promoroutes from "./routes/promoroutes";
import bannerroutes from "./routes/bannerroutes ";
import userpetcontroller from "./routes/userpetroutes";
import medicalRouter from "./routes/medicalroutes";
import aiRouter from "./routes/botroutes";
import cartRouter from "./routes/cartRoutes";
dotenv.config();
const app = express();
const PORT = 3000;
app.use(express.json());
connectDb();
app.use(userRoutes);
app.use(cartRouter);
app.use(aiRouter);
app.use(productRoutes);
app.use(promoroutes);
app.use(bannerroutes);
app.use(userpetcontroller);
app.use(medicalRouter);

app.get("/", rateLimiter, (req: Request, res: Response) => {
 res.send("Hello Express + TypeScript!");
});

app.listen(PORT, "0.0.0.0", () => {
 console.log(`Server running on http://localhost:${PORT}`);
});
