

const http = require('http');
const fs = require('fs')

const server = http.createServer((req,res)=>{

    fs.readFile('./public/index.html', (err,data)=>{
        if(err){
            res.end("Error occuring");
            return;
        }

        res.setHeader("Content-Type" , "text/plain");
        res.end(data);
    } )


})

server.listen(3000, ()=>{
    console.log("Server is running....");
})