import Location from "../models/Location.js";

// Get all locations
export const getAllLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    console.log("Here" + locations);

    res.json({ locations });
  } catch (error) {
    res({ message: "Something went wrong with locations downloading" });
  }
};

// Get location by id

export const getLocationById = async (req, res) => {
  try {
    const test = "64b68f46089e0b7d47cdcee0"; // It`s for testing, later id will be taken from html index - req.params.id
    const location = await Location.findById(req.params.id);
    res.json(location);
  } catch (e) {
    res({ message: "Something went wrong with location downloading" });
  }
};
