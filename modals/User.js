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
      required: true,
    },
    address: {
      type: String,
    },
    role: {
      type: String,
      default: "user",
      enum: ["student", "college", "alumni"],
    },
    confirmpassword :{
      type :String,
      required :true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
