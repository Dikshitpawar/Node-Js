
const http = require('http');

let user = [
    {id:1 , name:"Dikshit"},
    {id:2 , name:"Rahul"},
    {id:3 , name:"Rahul"},
]

const server = http.createServer((req,res)=>{

    if(req.url === "/user" && req.method === "GET"){
        res.setHeader("Content-Type" , "application/json");
        res.statusCode = 200;
        res.end(JSON.stringify(user));
    }else{
        res.statusCode = 404;
        res.end("Route not found");
    }
})


server.listen(3000 , ()=>{
    console.log("Server is running....");
})