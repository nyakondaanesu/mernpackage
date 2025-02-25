import express from "express";
export const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello");
});

router.get("/:id", (req, res) => {
  res.send(`hello ${req.params.id}`);
});
