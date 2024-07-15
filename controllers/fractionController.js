import User from "../models/User.js";
import Fraction from "../models/Fraction.js";
import Batch from "../models/Batch.js";
import { v4 as uuidv4 } from "uuid";

export const purchaseFractions = async (req, res) => {
  const { walletAddress, quantity } = req.body;

  try {
    let user = await User.findOne({ walletAddress });
    if (!user) {
      user = new User({ walletAddress });
      await user.save();
    }

    for (let i = 0; i < quantity; i++) {
      const tokenId = uuidv4();
      const fraction = new Fraction({ tokenId, owner: user._id });
      await fraction.save();

      let batch = await Batch.findOne({ filled: false });
      if (!batch) {
        batch = new Batch({ batchNumber: (await Batch.countDocuments()) + 1 });
      }
      batch.fractions.push(fraction._id);

      if (batch.fractions.length === 10) {
        batch.filled = true;
        batch.tokenId = batch.batchNumber;
      }

      await batch.save();
      fraction.batchId = batch._id;
      await fraction.save();
    }

    res.status(200).json({ message: "Fractions purchased successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
