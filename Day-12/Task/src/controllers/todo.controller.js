import todoModel from "../models/todo.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import{ todoServices }from "../service/index.js";
import ApiError from "../utils/errorHandler.js";

export const createTodo = asyncHandler(async (req, res) => {
  const { title, description, dueDate } = req.body;
  if (!title || !description || !dueDate) {
    throw new ApiError(400, "Title, Description, dueDate is required");
  }
  const todo = await todoServices.createTodoService({
    user : req.user,
    title,
    description,
    dueDate,
  });
  res.status(201).json({
    success: true,
    message: "Todo created successfully.!",
  });
});

export const getTodo = asyncHandler(async (req, res) => { 
  const user = req.user
  const { todo, totalTodos, totalPages , page, limit } = await todoServices.getTodoService(
    req.query.page,
    req.query.limit,
    req.query.status,
    user
  );

  res.status(200).json({
    success: true,
    message: "Todo Fetched successfully.!",
    page: page,
    limit: limit,
    totalTodos: totalTodos,
    totalPages: totalPages,
    Data: todo,
  });
});

export const getOneTodo = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const user = req.user
  const todo = await todoServices.getOneTodoService(id, user);

  if (!todo) {
    throw new ApiError(404, "Todo not found");
  }

  res.status(200).json({
    success: true,
    meesage: "Todo Fetched successfully.!",
    Data: todo,
  });
});

export const updateTodo = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const user = req.user
  const { title, description, dueDate, status } = req.body;

  const updateTodo = await todoServices.updateTodoService(id, user, {
    title,
    description,
    dueDate,
    status,
  });

  if (!updateTodo) {
    throw new ApiError(404, "Todo not found");
  }
  res.status(200).json({
    success: true,
    meesage: "Todo updated successfully.!",
  });
});

export const deleteTodo = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const user = req.user
  const todo = await todoServices.deleteTodoService(id , user);

  if (!todo) {
    throw new ApiError(404, "Todo not found");
  }

  res.status(200).json({
    success: true,
    message: "Todo Deleted successfully.!",
  });
});
