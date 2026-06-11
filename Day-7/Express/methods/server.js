
const express = require("express");

const app = express();


app.get("/get" , (req,res)=>{
    console.log(req.query.id);
    console.log(req.query.product);
    console.log()
    res.send("Get method")
})

app.post("/post" , (req,res)=>{
    res.send("Post method")
})

app.put("/put" , (req,res)=>{
    res.send("Put method")
})

app.delete("/delete/:id" , (req,res)=>{
    console.log(req.params.id);
    res.send("delete")
})

app.patch("/patch" , (req,res)=>{
    res.send("Patch method")
})


app.listen(3000 , ()=>{
    console.log("Server is running....");
})