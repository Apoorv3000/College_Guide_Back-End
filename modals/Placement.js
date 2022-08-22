import mongoose from "mongoose";
import validator from "validator";
const PlacementSchema = new mongoose.Schema(
  {
    average: {
      type: String,
      required: true,
      validate(value) {
        if (validator.isEmpty(value)) {
          throw new Error("Please enter average package!");
        }
      },
    },
    median: {
      type: String,
    },
    highest: {
      type: String,
    },
    images: {
      type: [String],
      // validate(value) {
      //   if (!validator.isURL(value)) {
      //     throw new Error("Invalid URL!");
      //   }
      // },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Placement", PlacementSchema);
