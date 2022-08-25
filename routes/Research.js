import express from "express";

import { createResearch } from "../controllers/research.js";

import { verifyCollege } from "../middlewares/verifyToken.js";

const router = express.Router();

router.post("/:collegeId", verifyCollege, createResearch);

export default router;
