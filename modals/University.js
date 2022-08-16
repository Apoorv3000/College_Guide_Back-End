import mongoose from "mongoose";
import validator from "validator";
const UniversitySchema = new mongoose.Schema(
  {
    universityname: {
      type: String,
      required: true,
      unique: true,
      validate(value){
        if(validator.isEmpty(value)){
            throw new Error("Please enter University name!");
        }
      }
    },
    info: {
        type: String,
        required:true,
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("Please enter info section!");
            }
          }
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate(value){
        // validator.normalizeEmail(value);
        if(!validator.isEmail(value)){
          throw new Error("Email is inValid!");
        }
        if(validator.isEmpty(value)){
            throw new Error("Please enter valid Email address!");
        }
      }
    },
    telephonenumber: {
        type : [String],
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
    college: {
        type : [String],
        required:true,
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("Please enter Colleges name!");
            }
          }
    },
    website :{
        type : [String],
        required:true,
        validate(value){
            if(!validator.isURL(value)){
                throw new Error("Invalid URL!");
            }
            if(validator.isEmpty(value)){
                throw new Error("Please enter valid website url!");
            }
        }
    },
    rank:{
        type: Number,
    },
    location :{
        type: String,
        requird:true,
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("Please enter University location!");
            }
          }
    },
    streams :{
        type :[String],
        required:true,
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("Please enter streams!");
            }
          }
    },
    photos :{   
        type :[String],
        required:true,
        validate(value){
            if(!validator.isURL(value)){
                throw new Error("Invalid URL!");
            }
            if(validator.isEmpty(value)){
                throw new Error("Please enter valid website url!");
            }
        }
    },
    logo :{
        type : String,
        required:true,
        validate(value){
            if(!validator.isURL(value)){
                throw new Error("Invalid URL!");
            }
            if(validator.isEmpty(value)){
                throw new Error("Please enter valid website url!");
            }
        }
    },
    rating :{
        type : String,
    },
    videos :{
        type :[String],
        validate(value){
            if(!validator.isURL(value)){
                throw new Error("Invalid URL!");
            }
    }
    },
    brochure :{
        type : String,
        required : true,
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("Please enter brochure!");
            }
          }
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
