import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import locationRoute from "./routes/location.js";
import creatureRoute from "./routes/creature.js";

const app = express();
dotenv.config();

// Constants
const PORT = process.env.PORT || 3001;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

//Middleware
app.use(cors()); // Allow to access to backend from different addresses
app.use(express.json()); // Makes backend to understand that info from backend will be in `json` format
app.use(express.static("uploads")); // here we are detecting folder with files

// Routes
app.use("/api/location", locationRoute);
app.use("/api/creature", creatureRoute);

app.get("/", (req, res) => {
  return res.json({ message: "All is fine" });
});

async function start() {
  try {
    await mongoose.connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.v0rzcgf.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
    );

    app.listen(PORT, () => {
      console.log(`Server started on port: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();
