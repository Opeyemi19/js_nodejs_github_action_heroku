const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(morgan("common"));

app.get("/ping", (req, res) => {
  res.json({ message: "pong ping" });
});

app.listen(process.env.PORT || 8000, () => {
  console.log(`server started on port ${process.env.PORT || 8000}`);
});