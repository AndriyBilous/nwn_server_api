import { Router } from "express";
import { getAllLocations, getLocationById } from "../controllers/location.js";

const router = new Router();

// Get all
// http://localhost:3002/api/location/
router.get("/", getAllLocations);

//Get by id
// http://localhost:3002/api/location/:id
router.get("/:id", getLocationById);

export default router;
