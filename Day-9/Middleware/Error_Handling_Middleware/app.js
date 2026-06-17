const express = require("express");

const app = express();

app.get("/profile", (req, res, next) => {
  let isLoggin = false;
  if (!isLoggin) {
    return next(new Error("Please login first"));
  }
  res.send("Profile page");
});

app.use((err, req, res, next) => {
  res.status(401).json({
    success: false,
    message: err.message,
  });
});

app.listen(3000, () => {
  console.log("Server is running..");
});
