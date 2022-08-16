import express from "express";
import {
  createCollege,
  getCollegeStream,
  getCollegeCourse,
  getAllColleges,
  updateCollege,
  deleteCollege,
} from "../controllers/college.js";
import { verifyCollege } from "../middlewares/verifyToken.js";

const router = express.Router();

router.post("/", verifyCollege, createCollege);

router.put("/:id", verifyCollege, updateCollege);

router.delete("/:id", verifyCollege, deleteCollege);

router.get("/", getAllColleges);

router.get("/stream/:id", getCollegeStream);

router.get("/course/:id", getCollegeCourse);

export default router;
