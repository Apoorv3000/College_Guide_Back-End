import express from "express";

import {
  createCourse,
  deleteCourse,
  getAllCourses,
  getCourse,
  updateCourse,
} from "../controllers/course.js";
import { verifyCollege } from "../middlewares/verifyToken.js";

const router = express.Router();

router.post("/:streamId/:collegeId", verifyCollege, createCourse);

router.put("/:id", updateCourse);

router.delete("/:id/:collegeId", verifyCollege, deleteCourse);

router.get("/:id", getCourse);

router.get("/", getAllCourses);

export default router;
