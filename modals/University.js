import mongoose from "mongoose";
const UniversitySchema = new mongoose.Schema(
  {
    universityname: {
      type: String,
      required: true,
      unique: true,
    },
    info: {
        type: String,
        required:true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    telephonenumber: {
        type : [String],
        required:true,
    },
    college: {
        type : [String],
        required:true,
    },
    website :{
        type : [String],
        required:true,
    },
    rank:{
        type: Number,
    },
    location :{
        type: String,
        requird:true,
    },
    streams :{
        type :[String],
        required:true,
    },
    photos :{
        type :[String],
        required:true,
    },
    logo :{
        type : String,
        required:true,
    },
    rating :{
        type : String,
    },
    videos :{
        type :[String],
    },
    brochure :{
        type : String,
        required : true,
    },
    research: {
        totalPublications: { type: Number },
        title : [
          {
              name:{type: String},
              url:{type : String}
          },
      ],
    },
    accreditation :{
        type : [
            {
                provider:{type: String},
                grade:{type : String},
            }
        ]
    },
        
    
  },
  { timestamps: true }
);

export default mongoose.model("University", UniversitySchema);
