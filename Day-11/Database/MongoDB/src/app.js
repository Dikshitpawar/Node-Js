const express = require('express');
const indexRoutes = require("./routes/index");

const app = express();
app.use(express.json());
app.use("/api" , indexRoutes)

module.exports = app;