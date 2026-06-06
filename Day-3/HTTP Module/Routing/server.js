//Static routing : /product , /user
//Dynmaic routing : /user/1 , /user/2


const { listenerCount } = require('cluster');
const http = require('http');


const server = http.createServer((req,res)=>{

    if(req.url === '/'){
        res.statusCode = 200
        res.end("Home page");
    }
    else if(req.url === "/user"){
        res.statusCode = 200
        res.end("User page")
    }
    else if(req.url === "/product"){
        res.statusCode = 200
        res.end("Product page");
    }
    else if(req.url === "/contact"){
        res.statusCode = 200
        res.end("Contact page");
    }
    else{
        res.statusCode = 404
        res.end("Page not found");
    }
})


server.listen(3000 , ()=>{
    console.log("Server is running....");
})





