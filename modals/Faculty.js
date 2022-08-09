import mongoose from "mongoose";
const FacultySchema = new mongoose.Schema(
  {
    name :{
        type: String,
        required : true,
    },
    department :{
        type : String,
        required : true,
    },
    designation :{
        type : String,
        required : true,
    },
    isHod :{
        type : Boolean,
    },
    isDirector :{
        type : Boolean,
    },
    isPrincipal :{
        type : Boolean,
    },
    college :{
        type : String,
        required:true,
    },
    email :{
        type : String,
        required : true,
    },
    photo :{
        type : String,
        required : true,
    },
    research :[{
        totalPublications : {type : Number},
        url : [{type : String}],
    }],
  },
  { timestamps: true }
);

export default mongoose.model("faculty", FacultySchema);
