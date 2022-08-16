import express from "express";
import {
  createStream,
  deleteStream,
  getAllcourses,
  getAllStreams,
  getStream,
  updateStream,
} from "../controllers/stream.js";
import { verifyCollege } from "../middlewares/verifyToken.js";

const router = express.Router();

router.post("/:collegeId", verifyCollege, createStream);

// what should be the user role for updating and deleting the stream and  course

router.put("/:id", updateStream);

router.delete("/:id", deleteStream);

router.get("/:id", getStream);

router.get("/", getAllStreams);

router.get("/courses/:id", getAllcourses);

export default router;
