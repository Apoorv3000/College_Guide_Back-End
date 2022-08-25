import express from "express";
import { createAccreditation } from "../controllers/accreditation.js";

import { verifyCollege } from "../middlewares/verifyToken.js";

const router = express.Router();

router.post("/:collegeId", verifyCollege, createAccreditation);

export default router;
