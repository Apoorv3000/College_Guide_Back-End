import express from "express";
import { AddEntrancTest } from "../controllers/entranceTest.js";


const router = express.Router();

router.post("/EntranceTests", AddEntrancTest);

export default router;
