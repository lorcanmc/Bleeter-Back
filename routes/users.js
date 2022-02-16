// UPDATE MyTable SET FieldA=@FieldA WHERE Key=@Key

// IF @@ROWCOUNT = 0
//    INSERT INTO MyTable (FieldA) VALUES (@FieldA)


import express from "express";
const router = express.Router();

import { getAllTweets, createTweet, updateTweets } from "../models/tweets.js";


router.put("/", async (req, res) => {
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