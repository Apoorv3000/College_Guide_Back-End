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
    colleges: {
      type: [String],
    },
<<<<<<< HEAD
    coursename: {
      type: [String],
=======
    coursename :{
      type: String,
>>>>>>> ce422cd11c986747aa02fe8717d2e95420110dbd
    },
  },
  { timestamps: true }
);

export default mongoose.model("Courses", CoursesSchema);
