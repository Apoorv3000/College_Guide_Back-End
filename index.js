import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/user.js";
dotenv.config();
const app = express();

//db connection

const connect = () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.log(err);
    });
};
const port = process.env.PORT || 8080;

//middlewares

app.use(cors());
app.use(express.json());
app.use(cookieParser());

//routes

app.use("/api/auth", authRoute);
app.use("/api/user", usersRoute);

//error handling

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

//listen to port

app.listen(port, () => {
  connect();
  console.log(`Connected to Server to ${port}`);
});
