import express from "express";
import { 
    createPlacement,
    deletePlacement,
    updatePlacement,
 } from "../controllers/placement.js";
 import { verifyCollege } from "../middlewares/verifyToken.js";

const router = express.Router();


router.post("/:collegeId",verifyCollege,createPlacement);

router.put("/:id",verifyCollege,updatePlacement);

router.delete("/:id",verifyCollege,deletePlacement);



export default router;

