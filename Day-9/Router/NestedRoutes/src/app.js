const express = require('express');
const indexRoutes = require("./routes/index")

const app = express();
app.use("/api" , indexRoutes)


module.exports = app;