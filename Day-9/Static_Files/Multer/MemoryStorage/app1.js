//Upload single files


const express = require('express');
const multer = require('multer');

const app = express();

const upload = multer({storage : multer.memoryStorage()})

app.post("/upload" , upload.single("file") , (req,res)=>{
    const file = req.file;
    console.log(file)
    res.json({
        message : "File uploaded",
    })
})


app.listen(3000 , ()=>{
    console.log("Server is running....")
})