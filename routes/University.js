import express from "express";
import { AddUniversity } from "../controllers/university.js";


const router = express.Router();

router.post("/universities", AddUniversity);

export default router;
