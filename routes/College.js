import express from "express";
import {
  createCollege,
  getCollegeStream,
  getCollegeCourse,
  getAllColleges,
} from "../controllers/college.js";

const router = express.Router();

router.post("/", createCollege);

router.get("/", getAllColleges);

router.get("/stream/:id", getCollegeStream);

router.get("/:streamId/course", getCollegeCourse);
export default router;
