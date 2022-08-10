import express from "express";
import { createStream } from "../controllers/stream.js";
import { verifyCollege } from "../middlewares/verifyToken.js";

const router = express.Router();

router.post("/:collegeId", verifyCollege, createStream);

export default router;
