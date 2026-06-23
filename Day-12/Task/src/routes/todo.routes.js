const express = require("express");
const {todoController} = require("../controllers/index");
const validate = require("../middleware/validateRequest");
const {todoSchema} = require("../validation/index");
const { auth } = require("../middleware/auth.middleware.js");
const router = express.Router();

router
  .route("/")
  .post(auth,validate(todoSchema.createTodoValidation), todoController.createTodo);
router
  .route("/paginate")
  .get(auth,validate(todoSchema.todoQuerySchema), todoController.getTodo);

router
  .route("/:id")
  .get(auth,validate(todoSchema.idSchema), todoController.getOneTodo)
  .patch(auth,validate(todoSchema.patchTodoValidation), todoController.updateTodo)
  .delete(auth,validate(todoSchema.idSchema), todoController.deleteTodo);

module.exports = router;
