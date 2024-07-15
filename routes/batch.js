import express from "express";
const router = express.Router();
import { getBatchInfo, getBatches } from "../controllers/batchController.js ";

router.get("/:batchId", getBatchInfo);
router.get("/", getBatches);

export default router;
