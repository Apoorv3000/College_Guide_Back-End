import mongoose from "mongoose";
const PlacementSchema = new mongoose.Schema(
  {
    average: {
      type: Number,
    },
    median: {
      type: Number,
    },
    highest: {
      type: Number,
    },
    images: {
      type: [String],
    },
    college: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Placement", PlacementSchema);
