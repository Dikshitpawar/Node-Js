const express = require("express");
const indexRoutes = require("./routes/index")
const cookieParser = require("cookie-parser")
const {errorMiddleware} = require("./middlewares/errorMiddleware")

const app = express();
app.use(express.json());
app.use(cookieParser())
app.use("/api" , indexRoutes)
app.use(errorMiddleware)

module.exports = app;