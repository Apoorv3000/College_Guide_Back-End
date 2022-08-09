import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
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
    password: {
      type: String,
      required: true,
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
