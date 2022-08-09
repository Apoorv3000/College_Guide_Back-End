import mongoose from "mongoose";
const StreamSchema = new mongoose.Schema(
  {
    streamname :{
        type :String,
        required : true,
        unique : true,
    },
    college :{
        type : [String],
        required : true,
    },
    courses :{
        type:[String],
        required:true,
    },  
  },
  { timestamps: true }
);

export default mongoose.model("Stream", StreamSchema);
