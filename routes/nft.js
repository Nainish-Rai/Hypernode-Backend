import express from "express";
const router = express.Router();
import { mintFractionalNFT } from "../controllers/nftController.js";

router.post("/mint", mintFractionalNFT);

export default router;
