import express from "express";
import {
  countCollegeInStream,
  createStream,
  deleteStream,
  getAllColleges,
  getAllcourses,
  getAllStreams,
  getStream,
  updateStream,
} from "../controllers/stream.js";
import { verifyCollege } from "../middlewares/verifyToken.js";

const router = express.Router();

router.post("/:collegeId", verifyCollege, createStream);

router.put("/:id", updateStream);

router.delete("/:id/:collegeId", verifyCollege, deleteStream);

router.get("/:id", getStream);

router.get("/", getAllStreams);

router.get("/courses/:id", getAllcourses);

router.get("/countOfColleges/:id", countCollegeInStream);

router.get("/colleges/:id", getAllColleges);

export default router;
