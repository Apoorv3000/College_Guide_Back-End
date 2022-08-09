import express from "express";
import { AddAlumni } from "../controllers/alumni.js";


const router = express.Router();

router.post("/alumni", AddAlumni);

export default router;
