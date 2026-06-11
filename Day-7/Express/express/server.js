

const express = require("express");

const app = express();

app.get("/search" , (req,res)=>{

    // console.log(req.params.id)

    // console.log(req.query)

    // console.log(req.headers)

    // console.log(req.method)

    // console.log(req.url)

    // console.log(req.path)
    



    // res.json({
    //     message : "Success"
    // })


    // res.status(200).json({
    //     message : "Success"
    // })


    // res.redirect("/new");

    // res.send("Hello");
})

app.get('/new' , (req,res)=>{
    res.send("Hello")
})

app.listen(3000 , ()=>{
    console.log("Server is running on port 3000")
})  

