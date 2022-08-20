import express from "express";
import { 
    createOnlineCourse,
    deleteOnlineCourse,
    updateOnlineCourse,
} from "../controllers/onlineCourse.js";

import { verifyCollege } from "../middlewares/verifyToken.js";
const router = express.Router();

router.post("/:collegeId",verifyCollege,createOnlineCourse);

router.put("/:id",verifyCollege,updateOnlineCourse);

router.delete("/:id",verifyCollege,deleteOnlineCourse);

export default router;
