import express from "express";
import { AddOnlineCourse } from "../controllers/onlineCourse.js";


const router = express.Router();

router.post("/OnlineCourses", AddOnlineCourse);

export default router;
