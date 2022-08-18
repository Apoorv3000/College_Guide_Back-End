import mongoose from "mongoose";
const AddressSchema = new mongoose.Schema(
  {
    addressLine: {
      type: String,
    },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    pincode: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Address", AddressSchema);
