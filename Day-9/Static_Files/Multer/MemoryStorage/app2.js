//Upload multiple files


const express = require('express');
const multer = require('multer');

const app = express();

const upload = multer({storage : multer.memoryStorage()})

app.post("/upload" , upload.array("file") , (req,res)=>{
    const file = req.files;
    console.log(file)
    res.json({
        message : "File uploaded",
    })
})


app.listen(3000 , ()=>{
    console.log("Server is running....")
})