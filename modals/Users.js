import mongoose from "mongoose";
import validator from "validator";
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase:true,
      trim:true,
      minlength :[2,"minimum 2letters"],
      maxlength :30,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate(value){
        // validator.normalizeEmail(value);
        if(!validator.isEmail(value)){
          throw new Error("Email is inValid");
        }
        if(validator.isEmpty(value)){
          throw new Error("Please enter valid Email address");
      }
      }
    },
    phone: {
      type: String,
      unique: true,
      validate(value){
        if(!validator.isMobilePhone(value,'en-IN')){
          throw new Error("Invalid mobile number!");
        }
      }
    },
    password: {
      type: String,
      required: true,
      validate(value){
        if(!validator.isStrongPassword(value)){
          throw new Error("Password is not strong!");
        }
        if(validator.isEmpty(value)){
          throw new Error("Please enter valid Password");
      }
      }
    },
    confirmPassword: {
      type: String,
    },
    city: {
      type: String,
    },

    course: {
      type: String,
    },

    role: {
      type: String,
      default: "basic",
      enum: ["student", "college", "alumni", "basic"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
