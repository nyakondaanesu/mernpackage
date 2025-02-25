import express from "express";
const app = express(); //creating express app
import dotenv from "dotenv";
import { router } from "./routes/books.js";
import mongoose from "mongoose";
dotenv.config();

app.use("/books", router);
app.use(express.json()); //midleware to access the req body

//conct to the db
if (process.env.MONGO_URI) {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("connected to db");
    })
    .catch((err) => {
      console.log(err);
    });
}

app.listen(3000, () => {
  console.log(`listening on port ${3000}`);
});
