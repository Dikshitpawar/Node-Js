const express = require("express");
const todoRoutes = require("../src/routes/index");
const loggerMiddleware = require("../src/middleware/loggMiddleware")
const errorHandlerMiddleware = require("../src/middleware/errorMiddleware")

const app = express();
app.use(express.json());

app.use(loggerMiddleware.loggerMiddlerware)
app.use("/api", todoRoutes);
app.use(errorHandlerMiddleware.errorHandlerMiddleware)

module.exports = app;
