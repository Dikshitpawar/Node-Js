const Joi = require("joi");

const createTodoSchema = Joi.object({
  title: Joi.string().min(1).required(),
  description: Joi.string().required(),
  dueDate: Joi.date().iso().required(),
});

const patchTodoSchema = Joi.object({
  title: Joi.string().min(3).max(100),
  description: Joi.string().min(5).max(500),
  dueDate: Joi.date().iso(),
});

const idSchema = Joi.object({
  id: Joi.number().integer().required(),
});

const todoQuerySchema = Joi.object({
  page: Joi.number().integer().default(1),
  limit: Joi.number().integer().default(10),
});

module.exports = {
  createTodoSchema,
  patchTodoSchema,
  idSchema,
  todoQuerySchema,
};
