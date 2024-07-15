import mongoose from "mongoose";
const fractionSchema = new mongoose.Schema({
  tokenId: { type: String, required: true, unique: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  batchId: { type: mongoose.Schema.Types.ObjectId, ref: "Batch" },
});
export default mongoose.model("Fraction", fractionSchema);
