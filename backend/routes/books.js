import express from "express";
export const router = express.Router();
import { Book } from "../models/book.js";

router.get("/", (req, res) => {
  res.send("hello");
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
});

router.get("/:id", (req, res) => {
  res.send(`hello ${req.params.id}`);
});

router.post("/add", async (req, res) => {
  const { title, author, publishYear } = req.body;
  try {
    const newBook = new Book({
      title,
      author,
      publishYear,
    });
    const book = await newBook.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  res.send("hello post");
});
