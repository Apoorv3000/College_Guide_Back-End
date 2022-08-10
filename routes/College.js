import express from "express";
import {
  createCollege,
  getCollegeStream,
  getCollegeCourse,
  getAllColleges,
} from "../controllers/college.js";
import { verifyCollege } from "../middlewares/verifyToken.js";

const router = express.Router();

router.post("/", verifyCollege, createCollege);

router.get("/", getAllColleges);

router.get("/stream/:id", getCollegeStream);

router.get("/course/:id", getCollegeCourse);
export default router;
