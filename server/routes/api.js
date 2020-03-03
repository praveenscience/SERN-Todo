const express = require("express");
const { runSqlGetJson, runSqlExecJson } = require("../todos/db");
const route = express.Router();

route.use(express.json());
route.use(express.urlencoded({ extended: true }));

route.get("/", (req, res) => {
  res.json("You're in the main API.");
});

route.get("/todo", (req, res) => {
  runSqlGetJson("SELECT * FROM `todos`", undefined, res);
});

route.post("/todo", (req, res) => {
  if (req.body && req.body.todo) {
    runSqlExecJson("INSERT INTO `todos` (`content`, `done`) VALUES (?, ?)", [req.body.todo, 0], res);
  } else {
    res.status(400).json({ error: "Enter todo!" });
  }
});

route.get("/todo/:id", (req, res) => {
  runSqlGetJson("SELECT * FROM `todos` WHERE `id`=?", [req.params.id], res);
});

route.put("/todo/:id", (req, res) => {
  if (req.body && req.body.todo && typeof req.body.done !== "undefined") {
    runSqlExecJson("UPDATE `todos` SET `content`=?, `done`=? WHERE `id`=?", [req.body.todo, req.body.done, req.params.id], res);
  } else {
    res.status(400).json({ error: "Enter todo!" });
  }
});

route.delete("/todo/:id", (req, res) => {
  if (req.params && req.params.id) {
    runSqlGetJson("DELETE FROM `todos` WHERE `id`=?", [req.params.id], res);
  } else {
    res.status(400).json({ error: "Enter todo id!" });
  }
});

module.exports = route;
