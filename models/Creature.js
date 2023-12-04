import mongoose from "mongoose";

const CreatureSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  imgUrl: {
    type: String,
    default: "",
  },
  location: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "locations",
    },
  ],
});

export default mongoose.model("Creature", CreatureSchema);
