import mongoose from "mongoose";
const CoursesSchema = new mongoose.Schema(
  {
    Branch: {
      type: [
        {
          name: { type: String },
          seats: { type: String },
        },
      ],
    },
    colleges: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "College",
      },
    ],
    coursename: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Courses", CoursesSchema);
