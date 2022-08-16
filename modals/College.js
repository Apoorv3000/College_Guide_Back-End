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
      required: true,
    },
    telephone: {
      type: [Number],
      unique: true,
      required: true,
    },
    location: {
      type: String,
      unique: true,
      required: true,
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
    },
    photos: {
      type: [String],
      required: true,
    },
    alumni: {
      type: [String],
      required: true,
    },
    placementDetails: {
      type: [String],
      required: true,
    },
    faculty: {
      type: [String],
      required: true,
    },
    university: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
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
    ugc_id: {
      type: String,
      unique: true,
      required: true,
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
