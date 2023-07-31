import Creature from "../models/Creature.js";

// Get all creatures
export const getAllCreatures = async (req, res) => {
  try {
    const creatures = await Creature.find();
    res.json({ creatures });
  } catch (error) {
    res({ message: "Something went wrong with locations downloading" });
  }
};

// Get creature by id

export const getCreatureById = async (req, res) => {
  try {
    const test = "64c0f087b25a4c41e903839d"; // It`s for testing, later id will be taken from html index - req.params.id
    const creature = await Creature.findById(req.params.id);
    res.json(creature);
  } catch (e) {
    res({ message: "Something went wrong with location downloading" });
  }
};
