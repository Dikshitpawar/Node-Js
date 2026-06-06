
const http = require('http');

let user = {
    name : "Dikshit",
    age : 32
}

const server = http.createServer((req,res)=>{
    if(req.url === "/user"  && req.method === "PUT"){
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
        user = JSON.parse(data);
        res.end(JSON.stringify({
            msg : "User updated",
            user 
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