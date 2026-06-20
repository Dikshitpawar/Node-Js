import { readTodo, writeTodo } from "../service/filehandler.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const getTodo = asyncHandler(async (req, res) => {
  const todo = await readTodo();
  
  const {page , limit} = req.query
    if (todo.length === 0) {
    return res.status(200).json({
      message: "Empty Todo",
    });
  }

  let startIndex = (page-1)*limit
  let endIndex = page*limit
  let totalTodos = todo.length
  let totalPages = Math.ceil(totalTodos/limit)

  const paginatedTodos = todo.slice(startIndex,endIndex)

  res.status(200).json({
    success: true,
    message: "Fetched Todos",
    page : page,
    limit : limit,
    totalTodos : totalTodos,
    totalPages : totalPages,
    data: paginatedTodos,
  });
});

export const addTodo = asyncHandler(async (req, res) => {
  const todo = await readTodo();
  const id = Date.now();
  const createdAt = new Date();
  
  const { title, description, dueDate } = req.body;
  
  // console.log("req body===>" , req.body)
  if (!title || !description || !dueDate) {
    const error = new Error("Title, Description and dueDate is Required");
    error.statusCode = 400;
    throw error;
  }

  todo.push({ id, title, description, dueDate, createdAt });

  await writeTodo(todo);

  res.status(201).json({
    success: true,
    message: "Todo created Successfully.!",
  });
});

export const getOneTodo = asyncHandler(async (req, res) => {
  const todo = await readTodo();

  if (todo.length === 0) {
    return res.status(200).json({
      message: "Empty Todo",
    });
  }

  const id = Number(req.params.id);

  if(!id){
    const error = new Error("Parameter not found");
    error.statusCode = 404
    throw error
  }

  const singleTodo = todo.find((item) => item.id === id);

  if (!singleTodo) {
    const error = new Error("Todo not found");
    error.statusCode = 404;
    throw error;
  }

  res.status(200).json({
    success: true,
    message: "Fetched Todo",
    data: singleTodo,
  });
});

export const deleteTodo = asyncHandler(async (req, res) => {
  let todo = await readTodo();

  if (todo.length === 0) {
    return res.status(200).json({
      message: "Empty Todo",
    });
  }

  const id = Number(req.params.id);

  const existTodo = todo.find((item) => item.id === id);

  if (!existTodo) {
    const error = new Error("Todo not found");
    error.statusCode = 404;
    throw error;
  }

  todo = todo.filter((item) => item.id !== id);

  await writeTodo(todo);

  res.status(200).json({
    success: true,
    message: "Todo deleted successfully",
  });
});

export const updateTodo = asyncHandler(async (req, res) => {
  const todo = await readTodo();

  if (todo.length === 0) {
    return res.status(200).json({
      message: "Empty Todo",
    });
  }

  const id = Number(req.params.id);
  const index = todo.findIndex((item) => item.id === id);

  if (index === -1) {
    const error = new Error("Todo not found");
    error.statusCode = 404;
    throw error;
  }

  const { title, description, dueDate } = req.body;

  if (!title || !description || !dueDate) {
    const error = new Error("Title, Description and dueDate is Required");
    error.statusCode = 400;
    throw error;
  }

  todo[index] = {
    id: todo[index].id,
    title,
    description,
    dueDate,
    createdAt: todo[index].createdAt,
  };

  await writeTodo(todo);

  res.status(200).json({
    success: true,
    message: "Todo updated successfully",
  });
});

export const patchTodo = asyncHandler(async (req, res) => {
  const todo = await readTodo();

  if (todo.length === 0) {
    return res.status(200).json({
      message: "Empty Todo",
    });
  }

  const id = Number(req.params.id);
  const index = todo.findIndex((item) => item.id === id);

  if (index === -1) {
    const error = new Error("Todo not found");
    error.statusCode = 404;
    throw error;
  }

  const { title, description, dueDate } = req.body;

  todo[index] = {
    id: todo[index].id,
    title: title || todo[index].title,
    description: description || todo[index].description,
    dueDate: dueDate || todo[index].dueDate,
    createdAt: todo[index].createdAt,
  };

  await writeTodo(todo);

  res.status(200).json({
    success: true,
    message: "Todo updated successfully",
  });
});

export const uploadFile = asyncHandler(async (req, res) => {
  const file = req.file;

  if (!file) {
    const error = new Error("File not found");
    error.statusCode = 404;
    throw error;
  }

  res.status(200).json({
    success: true,
    message: "File uploaded",
    file,
  });
});
