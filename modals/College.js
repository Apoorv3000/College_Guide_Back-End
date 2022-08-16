import mongoose from "mongoose";
const CollegeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      validate(value){
        if(validator.isEmpty(value)){
            throw new Error("Please enter College name!");
        }
      }
    },
    ugc_id: {
      type: String,
      unique: true,
      required: true,
      validate(value){
        if(validator.isEmpty(value)){
            throw new Error("Please enter ugc_id!");
        }
      }
    },
    info: {
      type: String,
      required:true,
      validate(value){
        if(validator.isEmpty(value)){
            throw new Error("Please enter College info!");
        }
      }
    },
    telephone: {
      type: [Number],
      unique: true,
      required:true,
      validate(value){
        if(!validator.isMobilePhone(value,'en-IN')){
          throw new Error("Invalid mobile number!");
        }
        if(validator.isEmpty(value)){
            throw new Error("Please enter valid Phone number!");
        }
      }
    },
    location: {
      type: String,
      unique: true,
      required: true,
      validate(value){
        if(validator.isEmpty(value)){
            throw new Error("Please enter College location!");
        }
      }
    },
    stream: {
      type: [String],
      required:true,
      validate(value){
        if(validator.isEmpty(value)){
            throw new Error("Please enter stream!");
        }
      }
    },
    website: {
      type: String,
      unique: true,
      required: true,
      validate(value){
        if(!validator.isURL(value)){
            throw new Error("Invalid URL!");
        }
        if(validator.isEmpty(value)){
            throw new Error("Please enter valid website url!");
        }
    }
    },
    photos: {
      type: [String],
      required: true,
      validate(value){
        if(!validator.isURL(value)){
            throw new Error("Invalid URL!");
        }
        if(validator.isEmpty(value)){
            throw new Error("Please enter valid website url!");
        }
    }
    },
    alumni: {
      type: [String],
      required : true,
      validate(value){
        if(validator.isEmpty(value)){
            throw new Error("Please enter Alumni details!");
        }
      }

    },
    placementDetails: {
      type: [String],
      required : true,
      validate(value){
        if(validator.isEmpty(value)){
            throw new Error("Please enter placement details!");
        }
      }
    },
    faculty: {
      type: [String],
      required : true,
      validate(value){
        if(validator.isEmpty(value)){
            throw new Error("Please enter faculty details!");
        }
      }
    },
    university: {
      type: String,
      required: true,
      validate(value){
        if(validator.isEmpty(value)){
            throw new Error("Please enter university name!");
        }
      }
    },
    logo: {
      type: String,
      required : true,
      validate(value){
        if(!validator.isURL(value)){
            throw new Error("Invalid URL!");
        }
        if(validator.isEmpty(value)){
            throw new Error("Please enter valid website url!");
        }
    }
    },
    entranceTest: {
      type: [String],

    },
    onlineCourse: {
      type: [String],
    },
    brochure: {
      type: String,
      required: true,
      validate(value){
        if(validator.isEmpty(value)){
            throw new Error("Please enter College brochure!");
        }
      }
    },
    videos: {
      type: [String],
      validate(value){
        if(!validator.isURL(value)){
            throw new Error("Invalid URL!");
        }
    }
    },
    research: {
      totalPublications: { type: Number },
      url: { type: [String] },
    },
    accreditation: [
      {
        provider:{type:String},
        grade: {type:String},
        
      },
    ],
    rank: {
      type: String,
    },
    isVerified: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

export default mongoose.model("College", CollegeSchema);
