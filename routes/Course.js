import express from "express";
import { createCourse, getAllCourses } from "../controllers/course.js";

const router = express.Router();

router.post("/:streamId/:collegeId", createCourse);

router.get("/", getAllCourses);

export default router;
