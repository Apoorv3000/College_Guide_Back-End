import express from "express";
import { loginUser, registerUser } from "../controllers/auth.js";

const router = express.Router();

//register the user
router.post("/register", registerUser);

//login the user
router.post("/login", loginUser);

export default router;
