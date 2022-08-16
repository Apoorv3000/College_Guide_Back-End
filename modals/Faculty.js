import mongoose from "mongoose";
const FacultySchema = new mongoose.Schema(
  {
    name :{
        type: String,
        required : true,
        lowercase:true,
        trim:true,
        minlength :[2,"minimum 2letters"],
        maxlength :30,
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("Please enter Faculty name!");
            }
          }
    },
    department :{
        type : String,
        required : true,
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("Please enter department name!");
            }
          }
    },
    designation :{
        type : String,
        required : true,
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("Please enter designation!");
            }
          }
    },
    qualifiaction :[{
        degree : {type:String},
        Field : {type:String},
        required:true,
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("Please enter designation!");
            }
          }
    }],
    college :{
        type : String,
        required:true,
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("Please enter College name!");
            }
          }
    },
    email :{
        type : String,
        required : true,
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
    photo :{
        type : String,
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
    research: {
        totalPublications: { type: Number },
        title : [
          {
              name:{type: String},
              url:{type : String}
          }
      ],
      },
  },
  { timestamps: true }
);

export default mongoose.model("faculty", FacultySchema);
