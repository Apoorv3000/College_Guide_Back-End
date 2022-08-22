import express from "express";
import { createAlumni, updateAlumni } from "../controllers/alumni.js";

import { verifyCollege } from "../middlewares/verifyToken.js";

const router = express.Router();

router.post("/:collegeId", verifyCollege, createAlumni);

router.put("/:id", verifyCollege, updateAlumni);

export default router;
