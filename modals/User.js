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
    address: {
      type: String,
    },
    ugc_id: {
      type: String,
      unique: true,
    },
    role: {
      type: String,
      default: "user",
      diff: ["admin", "collegeUser"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
