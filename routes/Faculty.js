import express from "express";
import { 
    createFaculty,
    deleteFaculty,
    updateFaculty,
} from "../controllers/faculty.js";

import { verifyCollege } from "../middlewares/verifyToken.js";

const router = express.Router();

router.post("/:collegeId",verifyCollege, createFaculty);

router.put("/:id",verifyCollege,updateFaculty);

router.delete("/:id",verifyCollege,deleteFaculty);

export default router;
