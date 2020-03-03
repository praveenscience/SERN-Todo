const express = require("express");
const runSqlGetJson = require("../todos/db");
const route = express.Router();

route.get("/", (req, res) => {
  res.json("You're in the main API.");
});

route.get("/todo", (req, res) => {
  runSqlGetJson("SELECT * FROM `todos`", undefined, res);
});

module.exports = route;
