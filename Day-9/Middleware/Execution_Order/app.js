
const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log("Middleware 1")
    next()
})
app.use((req,res,next)=>{
    console.log("Middleware 2")
    next()
})
app.use((req,res,next)=>{
    console.log("Middleware 3")
    next()
})

app.get("/" , (req,res)=>{
    console.log("Route")
    res.send("Hello")
})

app.listen(3000 , ()=>{
    console.log("Server is running..")
})