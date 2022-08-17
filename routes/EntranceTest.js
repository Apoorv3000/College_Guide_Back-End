import express from "express";
import { 
    createEntranceTest,
    deleteEntranceTest,
    updateEntranceTest,  
} from "../controllers/entranceTest.js";

import { verifyCollege } from "../middlewares/verifyToken.js";

const router = express.Router();

router.post("/:collegeId",verifyCollege, createEntranceTest);

router.put("/:id", verifyCollege, updateEntranceTest);

router.delete("/:id",verifyCollege,deleteEntranceTest);


export default router;
