import mongoose from "mongoose";
const CollegeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    ugc_id: {
      type: String,
      unique: true,
      required: true,
    },
    info: {
      type: String,
    },
    telephone: {
      type: [Number],
      unique: true,
    },
    location: {
      type: String,
      unique: true,
      required: true,
    },
    stream: {
      type: [String],
    },
    website: {
      type: String,
      unique: true,
      required: true,
    },
    photos: {
      type: [String],
    },
    alumni: {
      type: [String],
    },
    placementDetails: {
      type: [String],
    },
    faculty: {
      type: [String],
    },
    courses: {
      type: [String],
    },
    university: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
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
    },
    videos: {
      type: [String],
    },
    certificates: [
      {
        title: { type: String },
        url: { type: String },
      },
    ],
    research: {
      totalPublications: { type: Number },
      url: { type: [String] },
    },
    accreditation: [
      {
        provider: String,
        grade: String,
      },
    ],
    rating: {
      type: String,
    },
    isVerified: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

export default mongoose.model("College", CollegeSchema);
