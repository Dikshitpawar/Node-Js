const express = require('express');
const indexRoutes = require("./routes/index");
const { errorHandlerMiddleware } = require('./middleware/errorMiddleware');
const { logMiddleware } = require('./middleware/logMiddleware');


const app =express();
app.use(express.json())
app.use(logMiddleware)
app.use('/api' , indexRoutes);
app.use(errorHandlerMiddleware)

module.exports = app;