//express.text()

const express = require('express');

const app = express();

app.use(express.text())

app.post('/message' , (req,res)=>{
    console.log(req.body);

    res.send("Message sent");
})

app.listen(3000 , ()=>{
    console.log("Server is running...")
})