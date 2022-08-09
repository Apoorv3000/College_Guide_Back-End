import express from "express";
import { AddPlacements } from "../controllers/placement.js";

const router = express.Router();


router.post("/placements",AddPlacements);





export default router

