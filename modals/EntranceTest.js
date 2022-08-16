import mongoose from "mongoose";
const EntranceTestSchema = new mongoose.Schema(
  {
    name: {
      type: [String],
      required: true,
      unique: true,
      validate(value){
        if(validator.isEmpty(value)){
            throw new Error("Please enter entrancetest name!");
        }
      }
    },
    stream: {
      type: String,
      required: true,
      validate(value){
        if(validator.isEmpty(value)){
            throw new Error("Please enter stream name!");
        }
      }
    },
    college: [{ type: String, required: true, 
      validate(value){
      if(validator.isEmpty(value)){
          throw new Error("Please enter colleges name!");
      }
    } }],
    link: [{
      type: String,
      required: true,
      validate(value){
        if(!validator.isURL(value)){
            throw new Error("Invalid URL!");
        }
        if(validator.isEmpty(value)){
            throw new Error("Please enter valid website url!");
        }
    }
    }],
  },

  { timestamps: true }
);

export default mongoose.model("EntranceTest", EntranceTestSchema);
