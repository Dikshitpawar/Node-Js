const express = require("express");

const app = express();

const requestCount = {};

const rateLimiter = (req, res, next) => {
  const ip = req.ip;
  const now = Date.now();

  if (!requestCount[ip]) {
    requestCount[ip] = { count: 1, lastRequest: now };
  } else {
    let timeSinceLastRequest = now - requestCount[ip].lastRequest;
    let timeLimit = 15 * 60 * 1000;
    if (timeSinceLastRequest < timeLimit) {
      requestCount[ip].count += 1;
    } else {
      requestCount[ip] = { count: 1, lastRequest: now };
    }
  }
  const maxRequest = 10;
  if (requestCount[ip].count > maxRequest) {
    return res.status(429).json({
      message: "Too many request. Please try again letter",
    });
  } 
  requestCount[ip].lastRequest = now;
  next();
};

app.use(rateLimiter);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(3000, () => {
  console.log("server is running..");
});
