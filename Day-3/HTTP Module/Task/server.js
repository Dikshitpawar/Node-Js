

const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req,res)=>{

    if(req.url === "/todo" && req.method === "POST"){

        if(!fs.existsSync('../todo.json')){
            fs.writeFileSync('../todo.json' , JSON.stringify([]) , 'utf-8')
        }

        let data = fs.readFileSync("../todo.json" , 'utf-8');

        let todo = JSON.parse(data);
        let inp = ""
        req.on("data" , (chunk)=>{
            inp += chunk.toString();
        })
        req.on("end" , ()=>{
            if(!inp){
                res.statusCode = 400
                return res.end(JSON.stringify({
                    message : "Req body is empty"
                }))
            }
            let result = JSON.parse(inp);
            if(!result.task){
                res.statusCode = 404
                return res.end(JSON.stringify({
                    message : "Task not found"
                }))
            }
            let id = Date.now();
            todo.push({id , ...result , "completed" : false});
            fs.writeFileSync("../todo.json" , JSON.stringify(todo));
            res.statusCode = 201;
            res.end(JSON.stringify({
                message : "Todo created successfully"
            }))
        })

    }


    else if(req.url === "/todos" && req.method === "GET"){
        if(!fs.existsSync("../todo.json")){
            res.statusCode = 404
            return res.end(JSON.stringify({
                message : "File not found"
            }))
        }

        let data = fs.readFileSync("../todo.json" , 'utf-8');
        let todo = JSON.parse(data);

        if(todo.length === 0){
            return res.end(JSON.stringify({
                message : "Empty Todo List"
            }))
        }

        res.setHeader("Content-Type" , "application/json");
        res.end(JSON.stringify(todo))
    }
 

    else if(req.url.startsWith('/todo?')  && req.method === "GET"){

        if(!fs.existsSync("../todo.json")){
            res.statusCode = 404
            return res.end(JSON.stringify({
                message : "File not found"
            }))
        }

        let parsedUrl = url.parse(req.url , true);
        let id = Number(parsedUrl.query.id);
        console.log(parsedUrl)
        console.log(req.query)

        if(!id){
            res.statusCode = 404;
            return res.end(JSON.stringify({
                message : "Parameter not found"
            }))
        }
        let data = fs.readFileSync("../todo.json" , 'utf-8');
        let todo = JSON.parse(data);

        let oneTodo = todo.find(elem => elem.id === id);

        if(!oneTodo){
            res.statusCode = 404;
            return res.end(JSON.stringify({
                message : "Todo not found"
            }))
        }
        
        res.setHeader("Content-Type" , "application/json");

        res.end(JSON.stringify(oneTodo));
    }




    else if(req.url.startsWith('/todo?')  && req.method === "PUT"){

        if(!fs.existsSync("../todo.json")){
            res.statusCode = 404
            return res.end(JSON.stringify({
                message : "File not found"
            }))
        }

        let parsedUrl = url.parse(req.url , true);
        let id = Number(parsedUrl.query.id);

        if(!id){
            res.statusCode = 404;
            return res.end(JSON.stringify({
                message : "Parameter not found"
            }))
        }
        let data = fs.readFileSync("../todo.json" , 'utf-8');
        let todo = JSON.parse(data);

        let index = todo.findIndex(elem => elem.id === id);
        if(index === -1){
            res.statusCode = 404;
            return res.end(JSON.stringify({
                message : "Todo not found"
            }))
        }

        let inp = ""
        req.on("data" , (chunk)=>{
            inp += chunk.toString();
        })
        req.on("end" , ()=>{
            if(!inp){
                res.statusCode = 400
                return res.end(JSON.stringify({
                    message : "Req body is empty"
                }))
            }
            let result = JSON.parse(inp);
            todo[index] = {...todo[index] , ...result}

            fs.writeFileSync("../todo.json", JSON.stringify(todo));

            res.statusCode = 200;
            res.setHeader("Content-Type" , 'application/json');

            res.end(JSON.stringify({
                message : "Todo updated successfully"
            }))
            
        })

    }



    else if(req.url.startsWith('/todo?')  && req.method === "DELETE"){
        if(!fs.existsSync("../todo.json")){
            res.statusCode = 404
            return res.end(JSON.stringify({
                message : "File not found"
            }))
        }

        let parsedUrl = url.parse(req.url , true);
        let id = Number(parsedUrl.query.id);

        if(!id){
            res.statusCode = 404;
            return res.end(JSON.stringify({
                message : "Parameter not found"
            }))
        }
        let data = fs.readFileSync("../todo.json" , 'utf-8');
        let todo = JSON.parse(data);

        let oneTodo = todo.find(elem => elem.id === id);

        if(!oneTodo){
            res.statusCode = 404;
            return res.end(JSON.stringify({
                message : "Todo not found"
            }))
        }

        todo = todo.filter(elem => elem.id !== id)

        fs.writeFileSync('../todo.json' , JSON.stringify(todo));

        res.end(JSON.stringify({
            message : "Todo deleted successfully"
        }))
    }

    else{
        res.statusCode = 404;
        return res.end(JSON.stringify({
            message : "Route not found"
        }))
    }

    });

server.listen(3000 , (req,res)=>{
    console.log("Server is running....");
})





