import Batch from "../models/Batch.js";

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
