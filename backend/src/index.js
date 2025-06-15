import express from "express";
import authRoutes from "../src/routes/auth.route.js";
import messageRoutes from "../src/routes/message.route.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.listen(PORT, () => {
  console.log("Server running on PORT:" + PORT);
  connectDB();
});
