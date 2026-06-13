
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/todo.json");


function readTodo(){

    if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([]), "utf-8");
  }
    const data = fs.readFileSync(filePath , "utf-8");
    return JSON.parse(data);
}


function writeTodo(data){
    
    fs.writeFileSync(filePath, JSON.stringify(data));

}


module.exports = {
    readTodo,writeTodo
}