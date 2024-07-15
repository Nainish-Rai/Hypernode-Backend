import Batch from "../models/Batch.js";
import Fraction from "../models/Fraction.js";

export const getBatches = async (req, res) => {
  try {
    const batches = await Batch.find();

    // Populate fractions in each batch
    const data = await Promise.all(
      batches.map(async (batch) => {
        const fractions = await Fraction.find({ batchId: batch._id });
        return { ...batch.toObject(), fractions };
      })
    );
    res.status(200).json(data);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};
export const getBatchInfo = async (req, res) => {
  const { batchId } = req.params;

  try {
    const batch = await Batch.findById(batchId).populate("fractions");
    if (!batch) {
      return res.status(404).send("Batch not found");
    }

    res.status(200).json(batch);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};
