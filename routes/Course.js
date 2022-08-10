import express from "express";

import {
  createCourse,
  GetallColleges,
  getAllCourses,
} from "../controllers/course.js";
import { verifyCollege } from "../middlewares/verifyToken.js";

const router = express.Router();

router.post("/:streamId/:collegeId", verifyCollege, createCourse);

router.get("/college/:id", GetallColleges);

router.get("/", getAllCourses);

export default router;
