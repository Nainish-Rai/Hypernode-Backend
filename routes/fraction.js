import express from "express";
const router = express.Router();
import { purchaseFractions } from "../controllers/fractionController.js";

router.post("/purchase", purchaseFractions);

export default router;
