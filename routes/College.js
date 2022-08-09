import express from "express";
import { AddCollege } from "../controllers/college.js";


const router = express.Router();

router.post("/colleges", AddCollege);

export default router;
