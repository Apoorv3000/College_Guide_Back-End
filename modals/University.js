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
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
      unique: true,
    },
    telephonenumber: {
        type : [String],
    },
    college: {
        type : [String],
    },
    website :{
        type : [String],
    },
    rank:{
        type: Number,
    },
    location :{
        type: String,
    },
    streams :{
        type :[String],
    },
    photos :{
        type :[String],
    },
    logo :{
        type : String,
    },
    certifications :{
        type : [
            {
                title:{type: String},
                url:{type : String}
            },
        ]
    },
    rating :{
        type : String,
    },
    videos :{
        type :[String],
    },
    brochure :{
        type : String,
    },
    research :[{
        totalPublications : {type : Number},
        url : [{type : String}],
    }],
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
