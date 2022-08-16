import express from "express";

import {
  CourseSearch,
  createCourse,
  deleteCourse,
  getAllColleges,
  getAllCourses,
  getCourse,
  updateCourse,
} from "../controllers/course.js";
import { verifyCollege } from "../middlewares/verifyToken.js";

const router = express.Router();

router.post("/:streamId/:collegeId", verifyCollege, createCourse);

router.put("/:id", updateCourse);

router.delete("/:id", deleteCourse);

router.get("/:id", getCourse);

router.get("/college/:id", getAllColleges);

router.get("/", getAllCourses);

router.get("/search", CourseSearch);

export default router;
