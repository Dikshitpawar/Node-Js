    const http = require('http');

    const server = http.createServer((req, res) => {

        // console.log(req.url)
        // console.log(req.method)
        // console.log(req.headers)

        // res.setHeader('Content-Type' , 'application/json')
        // let data = {
        //     name : "Dikshit",
        //     age : 20
        // }
        // res.end(JSON.stringify(data))



        res.setHeader('Contetn-Type' , "text/plain");
        res.write("Hello ");
        res.write("how are you");
        res.end()


        // res.setHeader("Contetn-Type" , "text/html");
        // res.end('<h1>Dikshit</h1>')



    });

    server.listen(3000 , ()=>{
        console.log("Server is running on port 3000");
    })  