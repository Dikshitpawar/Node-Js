import todoModel from "../models/todo.model.js";


export async function getTodo(req, res) {
  const allTodos = await todoModel.find();

  if (allTodos.length === 0) {
    return res.json({
      message: "Empty Todo list",
    });
  }
  res.status(200).json({
    success: true,
    message: "Fetched all Todos",
    Data: allTodos,
  });
}

export async function addTodo(req, res) {
  const { title, description, dueDate } = req.body;

  if (!title || !description || !dueDate) {
    return res.status(400).json({
      sucess: false,
      message: "Title , Description or dueDate is Required",
    });
  }

  const todo = await todoModel.create({ title, description, dueDate });

  res.status(201).json({
    sucess: true,
    message: "Todo created successfully.!",
  });
}

export async function getOneTodo(req, res) {
  const id = req.params.id;
  if (!id) {
    return res.status(404).json({
      success: false,
      message: "Parameter not found",
    });
  }
  const todo = await todoModel.findById(id);

  if (!todo) {
    return res.status(404).json({
      success: false,
      message: "Todo not found",
    });
  }
  res.status(200).json({
    success: true,
    message: "Fetched Todo",
    Data: todo,
  });
}

export async function updateTodo(req, res) {
  const id = req.params.id;
  if (!id) {
    return res.status(404).json({
      success: false,
      message: "Parameter not found",
    });
  }
  const { title, description, dueDate } = req.body;
  const newTodo = await todoModel.findByIdAndUpdate(
    id,
    { title, description, dueDate },
    { new: true },
  );

  if (!newTodo) {
    return res.status(404).json({
      success: false,
      message: "Todo not found",
    });
  }

  return res.status(200).json({
    success: true,
    message: "Updated successfully.!",
  });
}

export async function patchTodo(req, res) {
  const id = req.params.id;
  if (!id) {
    return res.status(404).json({
      success: false,
      message: "Parameter not found",
    });
  }
  const { title, description, dueDate } = req.body;
  const newTodo = await todoModel.findByIdAndUpdate(
    id,
    { title, description, dueDate },
    { new: true },
  );
  if (!newTodo) {
    return res.status(404).json({
      success: false,
      message: "Todo not found",
    });
  }
  res.status(200).json({
    success: true,
    message: "Todo updated",
  });
}

export async function deleteTodo(req, res) {
  const id = req.params.id;
  if (!id) {
    return res.status(404).json({
      success: false,
      message: "Parameter not found",
    });
  }

  const newTodo = await todoModel.findByIdAndDelete(id);
  if(!newTodo){
    return res.status(404).json({
      success : false,
      message : "Todo not found"
    })
  }

  return res.status(200).json({
    success: true,
    message: "Todo deleted",
  });
}
