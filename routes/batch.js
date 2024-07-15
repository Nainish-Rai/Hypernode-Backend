import express from "express";
const router = express.Router();
import { getBatchInfo } from "../controllers/batchController.js ";

router.get("/:batchId", getBatchInfo);

export default router;
