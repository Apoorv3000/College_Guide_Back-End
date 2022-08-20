import mongoose from "mongoose";
import validator from "validator";
const CollegeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      validate(value) {
        if (validator.isEmpty(value)) {
          throw new Error("Please enter College name!");
        }
      },
    },
    nirf_id: {
      type: String,
      unique: true,
      required: true,
      validate(value) {
        if (validator.isEmpty(value)) {
          throw new Error("Please enter Nirf id !");
        }
      },
    },
    info: {
      type: String,
      required: true,
      validate(value) {
        if (validator.isEmpty(value)) {
          throw new Error("Please enter College info!");
        }
      },
    },
    telephone: {
      type: [Number],
      unique: true,
      required: true,
      // validate(value) {
      //   if (!validator.isMobilePhone(value, "en-IN")) {
      //     throw new Error("Invalid mobile number!");
      //   }
      //   if (validator.isEmpty(value)) {
      //     throw new Error("Please enter valid Phone number!");
      //   }
      // },
    },
    location: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
    },

    rank: {
      type: Number,
      required: true,
    },
    stream: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Stream",
        required: true,
      },
    ],
    courses: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
    ],
    website: {
      type: String,
      unique: true,
      required: true,
      validate(value) {
        if (!validator.isURL(value)) {
          throw new Error("Invalid URL!");
        }
        if (validator.isEmpty(value)) {
          throw new Error("Please enter valid website url!");
        }
      },
    },
    photos: {
      type: [String],
      required: true,
      // validate(value) {
      //   if (!validator.isURL(value)) {
      //     throw new Error("Invalid URL!");
      //   }
      //   if (validator.isEmpty(value)) {
      //     throw new Error("Please enter valid website url!");
      //   }
      // },
    },
    alumni: {
      type: [String],
      required: true,
    },

    placementDetails: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Placement",
      required: true,
    },
    faculty: {
      type: [String],
      required: true,
    },
    university: {
      type: String,
      required: true,
      validate(value) {
        if (validator.isEmpty(value)) {
          throw new Error("Please enter university name!");
        }
      },
    },
    logo: {
      type: String,
      required: true,
      validate(value) {
        if (!validator.isURL(value)) {
          throw new Error("Invalid URL!");
        }
        if (validator.isEmpty(value)) {
          throw new Error("Please enter valid website url!");
        }
      },
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
      validate(value) {
        if (validator.isEmpty(value)) {
          throw new Error("Please enter College brochure!");
        }
      },
    },
    videos: {
      type: [String],
      // validate(value) {
      //   if (!validator.isURL(value)) {
      //     throw new Error("Invalid URL!");
      //   }
      // },
    },

    research: {
      totalPublications: { type: Number },
      url: { type: [String] },
    },
    accreditation: [
      {
        provider: { type: String },
        grade: { type: String },
      },
    ],
    rank: {
      type: String,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("College", CollegeSchema);
