import express from "express";
import connectDB from "./database/db.js";
import dotenv from "dotenv";
import fractionRouter from "./routes/fraction.js";
import nftRouter from "./routes/nft.js";
import batchRouter from "./routes/batch.js";
import cors from "cors";
dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.get("/api/hello", (_, res) => res.send("API running"));

app.use("/api/fractions", fractionRouter);
app.use("/api/nft", nftRouter);
app.use("/api/batch", batchRouter);

export default app;

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
