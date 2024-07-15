import mongoose from "mongoose";
const batchSchema = new mongoose.Schema({
  batchNumber: { type: Number, required: true, unique: true },
  fractions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Fraction" }],
  filled: { type: Boolean, default: false },
});
export default mongoose.model("Batch", batchSchema);
