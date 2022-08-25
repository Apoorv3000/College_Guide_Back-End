import mongoose from "mongoose";
import validator from "validator";
const AlumniSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      // required: true,
      unique: true,
      lowercase: true,
      trim: true,
      minlength: [2, "minimum 2letters"],
      maxlength: 30,
    },

    email: {
      type: String,
      // required: true,
      unique: true,
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
      // required: true,
      validate(value) {
        if (!validator.isURL(value)) {
          throw new Error("Invalid URL!");
        }
        if (validator.isEmpty(value)) {
          throw new Error("Please enter valid website url!");
        }
      },
    },
    designation: {
      type: String,
    },
    companyName: { type: String },
    LinkedIn: { type: String },
    Twitter: { type: String },

    researchLink: {
      type: String,
    },
    branch: {
      type: String,
      // required: true,
      validate(value) {
        if (validator.isEmpty(value)) {
          throw new Error("Please enter your branch!");
        }
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Alumni", AlumniSchema);
