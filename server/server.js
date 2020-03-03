const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

app.listen(3100, () => {
  console.log("API Server Started in port 3100!");
});
