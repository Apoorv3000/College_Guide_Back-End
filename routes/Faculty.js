import express from "express";
import { AddFaculty } from "../controllers/faculty.js";


const router = express.Router();

router.post("/faculty", AddFaculty);

export default router;
