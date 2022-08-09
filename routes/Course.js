import express from "express";
import { AddCourses } from "../controllers/course.js";


const router = express.Router();

router.post("/courses", AddCourses);

export default router;
