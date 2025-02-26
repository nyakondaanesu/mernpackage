import express from "express";
export const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    res.json(data); // Send the fetched data to the frontend
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});
