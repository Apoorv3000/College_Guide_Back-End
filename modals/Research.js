import mongoose from "mongoose";
// import validator from "validator";
const ResearchSchema = new mongoose.Schema(
  {
    url: {
      type: String,
    },
    researchTopic: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Research", ResearchSchema);
