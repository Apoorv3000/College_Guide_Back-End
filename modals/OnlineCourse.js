import mongoose from "mongoose";
const OnlinecourseSchema = new mongoose.Schema(
  {
    title:[{
        name:{type:String},
        link:{type:String},
    }],
    college :{
        type:[String],
        required : true,
    },  

  },
  { timestamps: true }
);

export default mongoose.model("Onlinecouse", OnlinecourseSchema);
