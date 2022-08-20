import mongoose from "mongoose";
import validator from "validator";
const StreamSchema = new mongoose.Schema(
  {
    streamname: {
      type: String,
      required: true,
      unique: true,
      validate(value) {
        if (validator.isEmpty(value)) {
          throw new Error("Please enter streamname!");
        }
      },
    },
    college: {
      type: [String],
      required: true,
    },
    courses: {
      type: [String],
      required: true,
      // validate(value) {
      //   if (validator.isEmpty(value)) {
      //     throw new Error("Please enter courses!");
      //   }
      // },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Stream", StreamSchema);
