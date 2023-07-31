import mongoose from "mongoose";

const LocationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  imgUrl: {
    type: String,
    default: "",
  },
  creatures: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Creatures",
    },
  ],
});

export default mongoose.model("Location", LocationSchema);
