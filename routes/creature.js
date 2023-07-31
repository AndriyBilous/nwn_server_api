import { Router } from "express";
import { getAllCreatures, getCreatureById } from "../controllers/creature.js";

const router = new Router();

// Get all
// http://localhost:3002/api/creature/
router.get("/", getAllCreatures);

//Get by id
// http://localhost:3002/api/creature/:id
router.get("/:id", getCreatureById);

export default router;
