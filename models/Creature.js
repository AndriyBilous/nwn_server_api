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
  locations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Locations",
    },
  ],
});

export default mongoose.model("Creature", CreatureSchema);
