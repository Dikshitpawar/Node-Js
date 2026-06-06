

const http = require('http');
const url = require('url');

const server = http.createServer((req,res)=>{
    const parsedUrl = url.parse(req.url , true);
    console.log(parsedUrl.query.brand);
    res.end("Hello")
})

server.listen(3000 , ()=>{
    console.log("Server is running...");
})