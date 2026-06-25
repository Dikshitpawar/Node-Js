const express = require('express');
const session = require("express-session");
const app = express();

app.use(session({
    secret: "my-secret-key",
    resave: false,
    saveUninitialized: false
}))

app.get("/" , (req,res)=>{
    req.session.username = "Dikshit";
    res.send("Logged in");
})

app.get("/profile" , (req,res)=>{
    if(!req.session.username){
        res.send("Please login first")
    }else{
    res.send(`Hello ${req.session.username}`)
    }
})

app.get("/logout" , (req,res)=>{
    req.session.destroy();
    res.send("Logged out");
})

app.listen(3000 , ()=>{
    console.log("Server is running..")
})