import mongoose from "mongoose";
const OnlinecourseSchema = new mongoose.Schema(
  {
    title: { type: String },
    courseName: { type: String },
    courseLink: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Onlinecouse", OnlinecourseSchema);
