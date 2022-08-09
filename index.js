import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import authRoute from "./routes/auth.js";
import usersRoute from "./routes/user.js";

import placementRoute from "./routes/Placements.js";
import courseRoute from "./routes/Course.js";
import onlineCourseRoute from "./routes/OnlineCourse.js";
import collegeRoute from "./routes/College.js";
import universityRoute from "./routes/University.js";
import entranceTestRoute from "./routes/EntranceTest.js";
import streamRoute from "./routes/Streams.js";
import facultyRoute from "./routes/Faculty.js";
import alumniRoute from "./routes/Alumni.js";

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

app.use("/api", placementRoute);
app.use("/api", courseRoute);
app.use("/api", onlineCourseRoute);
app.use("/api", collegeRoute);
app.use("/api", universityRoute);
app.use("/api", entranceTestRoute);
app.use("/api", streamRoute);
app.use("/api", facultyRoute);
app.use("/api", alumniRoute);
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

//error handling
app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMessage = err.message || "Something went wrong";
  return res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMessage,
    stack: err.stack,
  });
});

//listening to port

app.listen(port, () => {
  connect();
  console.log(`Connected to Server to ${port}`);
});
