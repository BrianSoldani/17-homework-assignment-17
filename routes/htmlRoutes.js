const path = require("path");
const express = require("express");
const router = express.Router();

router.get("/", (_, res) => {
  res.sendFile(path.resolve(__dirname, "../public/index.html"));
});
router.get("/stats", (_, res) => {
  res.sendFile(path.resolve(__dirname, "../public/stats.html"));
});
router.get("/exercise", (_, res) => {
  res.sendFile(path.resolve(__dirname, "../public/exercise.html"));
});

module.exports = router;