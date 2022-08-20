import express from "express";
import { loginUser, registerUser, logoutUser } from "../controllers/auth.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

//register the user
router.post("/registerUser", registerUser);

//login the user
router.post("/login", loginUser);

//logout the user
router.get("/logout", verifyToken, logoutUser);

export default router;
