import mongoose from "mongoose";
const PlacementSchema = new mongoose.Schema(
  {
    average: {
      type: Number,
      required: true,
      validate(value) {
        if (validator.isEmpty(value)) {
          throw new Error("Please enter average package!");
        }
      },
    },
    median: {
      type: Number,
    },
    highest: {
      type: Number,
    },
    images: {
      type: [String],
      validate(value) {
        if (!validator.isURL(value)) {
          throw new Error("Invalid URL!");
        }
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Placement", PlacementSchema);
