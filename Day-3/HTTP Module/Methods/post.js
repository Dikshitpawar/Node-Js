
const http = require('http');

let result = []
const server = http.createServer((req,res)=>{

    if(req.url === "/user" && req.method=== "POST"){
        let data = ""
        req.on("data" , (chunk)=>{
            data += chunk.toString();
        })
        req.on("end" , ()=>{
            if(!data){
                res.statusCode = 400;
                return res.end(JSON.stringify({
                    msg : "Req body is empty"
                }))
            }
            result.push(JSON.parse(data));
            res.statusCode = 201;
            res.end(JSON.stringify({
                msg : "User created",
                result
            }))
            
        })
    }else{
        res.statusCode = 404;
        res.end("Route not found");
    }
})

server.listen(3000 , ()=>{
    console.log("Server is running....");
})


