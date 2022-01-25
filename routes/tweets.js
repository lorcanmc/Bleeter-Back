import express from "express";
const router = express.Router();

import { getAllTweets, createTweet, updateTweets } from "../models/tweets.js";

router.get("/", async function (req, res) {
  const allTweets = await getAllTweets();
  res.json({
    success: true,
    message: "here are all the tweets",
    payload: allTweets,
  });
});

router.post("/", async function (req, res) {
  const { text, timestamp, author } = req.body;

  const { statusCode, success, message, payload } = await createTweet(
    text,
    timestamp,
    author
  );

  res.status(statusCode).json({ success, message, payload });
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { liked } = req.body;
  console.log("id call running")

  const { statusCode, success, message, payload } = await updateTweets(
    liked,
    id
  );

  res.status(statusCode).json({ success, message, payload });
});

export default router;
