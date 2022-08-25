import mongoose from "mongoose";
// import validator from "validator";
const AccreditationSchema = new mongoose.Schema(
  {
    provider: {
      type: String,
    },
    grade: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Accreditation", AccreditationSchema);
