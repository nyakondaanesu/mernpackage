import express from "express";
const app = express(); //creating express app
import dotenv from "dotenv";
import { router } from "./routes/route.js";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();

app.use(express.json());
app.use(cors());
app.use("/api", router);
//midleware to access the req body

//conct to the db
if (process.env.MONGO_URI) {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("connected to db");
    })
    .catch((err) => {
      console.log(
        `couldn't connect to db make sure you create a mongodb atlas account`
      );
    });
}

app.listen(3000, () => {
  console.log(`listening on port ${3000}`);
});
