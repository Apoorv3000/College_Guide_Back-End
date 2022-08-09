import express from "express";
import { AddStream } from "../controllers/stream.js";


const router = express.Router();

router.post("/streams", AddStream);

export default router;
