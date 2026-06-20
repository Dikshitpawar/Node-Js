const express = require("express");
const rateLimit = require("express-rate-limit");
const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: "Too many request. Please try again letter",
});

app.use(limiter);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(3000, () => {
  console.log("Server is running..");
});
