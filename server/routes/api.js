const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.json("You're in the main API.");
});

module.exports = route;
