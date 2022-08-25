import mongoose from "mongoose";
import validator from "validator";
const FacultySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      minlength: [2, "minimum 2letters"],
      maxlength: 30,
      validate(value) {
        if (validator.isEmpty(value)) {
          throw new Error("Please enter Faculty name!");
        }
      },
    },
    department: {
      type: String,
      // required: true,
      validate(value) {
        if (validator.isEmpty(value)) {
          throw new Error("Please enter department name!");
        }
      },
    },
    designation: {
      type: String,
      required: true,
      validate(value) {
        if (validator.isEmpty(value)) {
          throw new Error("Please enter designation!");
        }
      },
    },
    qualifiaction: {
      type: String,
    },

    email: {
      type: String,

      validate(value) {
        // validator.normalizeEmail(value);
        if (!validator.isEmail(value)) {
          throw new Error("Email is inValid!");
        }
        if (validator.isEmpty(value)) {
          throw new Error("Please enter valid Email address!");
        }
      },
    },
    photo: {
      type: String,

      validate(value) {
        if (!validator.isURL(value)) {
          throw new Error("Invalid URL!");
        }
        if (validator.isEmpty(value)) {
          throw new Error("Please enter valid website url!");
        }
      },
    },
    research: {
      type: String,
    },
  },
  { timestamps: true }
);
export default mongoose.model("Faculty", FacultySchema);
