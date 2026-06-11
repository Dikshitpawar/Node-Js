
const express = require('express');

const app = express();


app.get("/" , (req,res)=>{
    res.send("Home page")
})

app.get("/user" , (req,res)=>{
    res.send("User page")
})
app.get("/contact" , (req,res)=>{
    res.send("Contact page");
})
app.get("/product" , (req,res)=>{
    res.send("Product page");
})


app.listen(3000 ,()=>{
    console.log("Server is running...");
})