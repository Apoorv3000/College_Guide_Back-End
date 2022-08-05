import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();
const app = express();

const connect = () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.log(err);
      err;
    });
};
const port = process.env.PORT || 8080;
//middlewares

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.listen(port, () => {
  connect();
  console.log(`Connected to Server to ${port}`);
});
