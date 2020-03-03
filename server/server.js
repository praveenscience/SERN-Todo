const express = require("express");
const morgan = require("morgan");
const root = require("./routes/root");
const api = require("./routes/api");

const app = express();

app.use(morgan("dev"));
app.use("/", root);
app.use("/api", api);

app.listen(3100, () => {
  console.log("API Server Started in port 3100!");
});
