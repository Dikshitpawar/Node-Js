const Joi = require("joi");

const createTodoValidation = Joi.object({
  body: Joi.object({
    title: Joi.string().min(1).required(),
    description: Joi.string().required(),
    dueDate: Joi.date().iso().required(),
  }),
});

const patchTodoValidation = Joi.object({
  params: Joi.object({
    id: Joi.string().hex().required(),
  }),

  body: Joi.object({
    title: Joi.string().min(3).max(100),
    description: Joi.string().min(5).max(500),
    dueDate: Joi.date().iso(),
    status : Joi.string().valid("pending" , "complete")
  }),
});

const todoQuerySchema = Joi.object({
  query: Joi.object({
    page: Joi.number().integer().min(1),
    limit: Joi.number().integer().min(1).max(100),
  }),
});

const idSchema = Joi.object({
  params: Joi.object({
    id: Joi.string().hex().required(),
  }),
});

module.exports = {
  createTodoValidation,
  patchTodoValidation,
  todoQuerySchema,
  idSchema,
};
