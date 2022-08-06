import mongoose from "mongoose";
const AlumniSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    designation: {
      type: Object,
      companyName: { type: String, required: true },
      position: {
        type: String,
        required: true,
      },
    },
    websites: {
      type: String,
      enum: ["Twitter", "Linkedin"],
      required: true,
    },
    college: {
      type: String,
      required: true,
    },
    research: {
      totalPublications: { type: Number },
      url: { type: [String] },
    },
    branch: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Alumni", AlumniSchema);
