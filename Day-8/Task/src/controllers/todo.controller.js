
const fs = require('fs');
const {readTodo,writeTodo} = require("../service/filehandler")


async function getTodoController(req, res) {
    let todo = await readTodo()
    if (todo.length === 0) {
        return res.status(200).json({
            message: "Empty Todo"
        })
    }
    res.status(200).json({
        todo
    })
}


async function addTodoController(req, res) {

    let todo = await readTodo();
    const id = Date.now()
    const createdAt = new Date();

    if (!req.body) {
        return res.status(400).json({
            message: "Req body is empty.!"
        })
    }

    const { title, description, dueDate } = req.body

    if (!title || !description || !dueDate) {
        return res.status(400).json({
            message: "Title, Description and dueDate is Required "
        })
    }

    todo.push({ id, title, description, dueDate, createdAt });
    await writeTodo(todo)

    res.status(201).json({
        message: "Todo created Successfully.!"
    })
}



async function getOneTodoController(req, res) {

    let todo = await readTodo();
      if (todo.length === 0) {
        return res.status(200).json({
            message: "Empty Todo"
        })
    }
    const id = Number(req.params.id)

    let existTodo = todo.find(item => item.id === id);
    if (!existTodo) {
        return res.status(404).json({
            message: "Todo not found"
        })
    }

    let singleTodo = todo.filter(item => item.id === id);

    res.status(200).json({
        singleTodo
    })
 
}


async function deleteTodoController(req, res) {

    let todo = await readTodo();
     if (todo.length === 0) {
        return res.status(200).json({
            message: "Empty Todo"
        })
    }
    const id = Number(req.params.id)

    let existTodo = todo.find(item => item.id === id);
    if (!existTodo) {
        return res.status(404).json({
            message: "Todo not found"
        })
    }

    todo = todo.filter(item => item.id !== id);

    await writeTodo(todo);

    res.status(200).json({
        message: "Todo deleted successfully"
    })
}



async function updateTodoController(req, res) {

    let todo = await readTodo();
     if (todo.length === 0) {
        return res.status(200).json({
            message: "Empty Todo"
        })
    }
    const id = Number(req.params.id)
    let index = todo.findIndex(item => item.id === id);
    if (index === -1) {
        return res.status(404).json({
            message: "Todo not found"
        })
    }
    if (!req.body) {
        return res.status(400).json({
            message: "Req body is empty.!"
        })
    }
    const { title, description, dueDate } = req.body
    if (!title || !description || !dueDate) {
        return res.status(400).json({
            message: "Title, Description and dueDate is Required "
        })
    }
    todo[index] = { id: todo[index].id, title: title, description: description, dueDate: dueDate, createdAt: todo[index].createdAt };

    await writeTodo(todo);

    res.status(200).json({
        message: "Todo updated successfully"
    })
}




async function patchTodoController(req, res) {
    
    let todo = await readTodo()
    if (todo.length === 0) {
        return res.status(200).json({
            message: "Empty Todo"
        })
    }

    const id = Number(req.params.id)
    let index = todo.findIndex(item => item.id === id);
    if (index === -1) {
        return res.status(404).json({
            message: "Todo not found"
        })
    }
    if (!req.body) {
        return res.status(400).json({
            message: "Req body is empty.!"
        })
    }
    const { title, description, dueDate } = req.body

    todo[index] = { id: todo[index].id, title: title || todo[index].title, description: description || todo[index].description, dueDate: dueDate || todo[index].dueDate, createdAt: todo[index].createdAt }

    await writeTodo(todo)
    res.status(200).json({
        message: "Todo updated successfully"
    })

}



module.exports = {
    getTodoController,
    addTodoController,
    getOneTodoController,
    deleteTodoController,
    updateTodoController,
    patchTodoController
}