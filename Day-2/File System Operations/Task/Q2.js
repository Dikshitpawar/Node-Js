

const fs = require('fs');

const args = process.argv

let query = args[2]

if(query === "add"){
    addTodo(args[3]);
}
else if(query === "list"){
    listTodo()
}
else if(query === "delete"){
    deleteTodo(Number(args[3]));
}
else{
    console.log("Please pass the input");
}


function addTodo(task){

    let todo;
    let data = fs.readFileSync("../todo.json" , "utf-8")
    todo = JSON.parse(data);
    let obj = {};
    obj = {id:todo.length+1 , text:task};
    todo.push(obj)
    
    fs.writeFileSync("../todo.json" , JSON.stringify(todo) )
    console.log("Added successfully.!")   
}

function listTodo(){
    let todo;
    let data = fs.readFileSync('../todo.json' , 'utf-8')
    todo = JSON.parse(data);
    console.log(todo)
}


function deleteTodo(id){
    let todo;
    let data = fs.readFileSync('../todo.json' , 'utf-8')
    todo = JSON.parse(data);

    todo = todo.filter(item => item.id !== id);

    fs.writeFileSync("../todo.json" , JSON.stringify(todo) )
    console.log("Deleted Successfully.!") 
}




