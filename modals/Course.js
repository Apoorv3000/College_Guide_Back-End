import mongoose from "mongoose";
const CoursesSchema = new mongoose.Schema(
  {
    Branch :{
        type : [
            {
                name:{type: String},
                seats:{type : String},
            },
        ]
    },
    colleges :{
        type :[String],
    },
    coursename :{
      type: [String],
    },
    
  },
  { timestamps: true }
);

export default mongoose.model("Courses", CoursesSchema);
