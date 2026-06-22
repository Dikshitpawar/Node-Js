const express = require('express');
const todoController = require("../controllers/index")


const router = express.Router();

router.route("/").get(todoController.getTodo).post(todoController.addTodo)

router.route("/:id").get(todoController.getOneTodo).put(todoController.updateTodo).delete(todoController.deleteTodo).patch(todoController.patchTodo)


module.exports = router