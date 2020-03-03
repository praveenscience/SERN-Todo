const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.json("Welcome to API Server.");
});

module.exports = route;
