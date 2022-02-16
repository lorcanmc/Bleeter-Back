import express from "express";
const router = express.Router();

import { getAllFamilies, getFamilyById } from "../models/families.js";

router.get("/", async function (req, res) {
  const allFamliies = await getAllFamilies();
  res.json({
    success: true,
    message: "here are all the families",
    payload: allFamliies,
  });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const { statusCode, success, message, payload } = await getFamilyById(
    Number(id)
  );
  res.status(statusCode).json({ success, message, payload });
});

export default router;
