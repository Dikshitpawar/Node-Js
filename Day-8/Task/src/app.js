const express = require("express");
const todoRoutes = require("../src/routes/index");


const app = express();
app.use(express.json())
app.use("/api" , todoRoutes);



module.exports = app;