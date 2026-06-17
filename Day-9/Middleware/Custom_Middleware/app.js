const express = require('express');
const { loggerMiddleware } = require('./src/middleware/logger.middleware');


const app = express();


app.get("/" , loggerMiddleware , (req,res)=>{
    res.send("home page")
})


app.get("/about" , loggerMiddleware , (req,res)=>{
    res.send("about page")
})

app.listen(3000 , ()=>{
    console.log("Server is running..")
})