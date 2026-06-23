import todoModel from "../models/todo.model.js";

export const createTodoService = async (data) => {
  return await todoModel.create(data);
};

export const getTodoService = async (page = 1, limit = 10, status , user) => {

  const filter = {
    user : user._id
  }
  if(status){
    filter.status = status
  }
  const skip = (page-1)*limit
  const todo = await todoModel.find(filter).skip(skip).limit(limit);
  const totalTodos = await todoModel.countDocuments(filter);
  const totalPages = Math.ceil(totalTodos/limit);
  return {todo , totalTodos, totalPages , page, limit}
};

export const getOneTodoService = async (id , user) => {
  return await todoModel.findOne({_id:id , user:user.id});
};

export const updateTodoService = async (id,user, data) => { 
  return await todoModel.findOneAndUpdate({_id:id , user : user.id}, data);
};


export const deleteTodoService = async (id , user) => {
  return await todoModel.findOneAndDelete({_id:id , user : user.id});
};



