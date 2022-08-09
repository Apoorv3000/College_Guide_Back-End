import mongoose from "mongoose";
const EntranceTestSchema = new mongoose.Schema(
  {
    name: {
      type: [String],
      required: true,
      unique: true,
    },
    stream: {
      type: String,
      required: true,
    },
    college: [{ type: String, required: true }],
    link: [{
      type: String,
      required: true,
    }],
  },

  { timestamps: true }
);

export default mongoose.model("EntranceTest", EntranceTestSchema);
