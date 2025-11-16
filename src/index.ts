import express, { Request, Response } from "express";
import * as dotenv from 'dotenv'; 
import { connectDb } from "./db/db";
import userRoutes from "./routes/userRoutes"
import { rateLimiter } from "./middleware.ts/ratelimit";
dotenv.config();
const app = express();
const PORT = 3000;
app.use(express.json());
connectDb()
app.use(userRoutes);
app.get("/",rateLimiter, (req: Request, res: Response) => {
  res.send("Hello Express + TypeScript!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
