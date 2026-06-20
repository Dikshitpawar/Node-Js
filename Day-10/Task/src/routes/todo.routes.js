const express = require("express");
const upload = require("../config/multer.storage")
const validate = require("../middleware/validateRequest");
const todoSchema = require("../validation/index");

const todoController = require("../controllers/index");

const router = express.Router();



router.route("/").get(validate(todoSchema.todoQuerySchema , 'query'),todoController.getTodo).post(validate(todoSchema.createTodoSchema),todoController.addTodo);

router
  .route("/:id")
  .get(validate(todoSchema.idSchema , 'params'),todoController.getOneTodo)
  .delete(validate(todoSchema.idSchema , 'params'),todoController.deleteTodo)
  .put(validate(todoSchema.idSchema , 'params'),validate(todoSchema.createTodoSchema) ,todoController.updateTodo)
  .patch(validate(todoSchema.idSchema , 'params'),validate(todoSchema.patchTodoSchema),todoController.patchTodo);

router.post("/uploadfile" , upload.single("file") , todoController.uploadFile)


module.exports = router;

