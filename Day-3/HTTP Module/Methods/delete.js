
const http = require('http');


let user = [
    {id:1 , name:"Dikshit"},
    {id:2 , name:"Rahul"},
    {id:3 , name:"Rahul"},
]

const server = http.createServer((req,res)=>{

    if(req.method === "DELETE"){
        let id = Number(req.url.split('/')[2])
        if(id === 0){
            return res.end(JSON.stringify({
                
                msg : "provide the parameters"
            }))
        }
            user = user.filter(user => user.id !== id);

            res.end(JSON.stringify({
                msg : "User Deleted successfuly",
                user
            }))
    
    }else{
        res.statusCode = 404;
        res.end("Route not found");
    }
})


server.listen(3000 , ()=>{
    console.log("Server is running....");
})