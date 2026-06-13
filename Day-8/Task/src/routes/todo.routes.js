const express = require('express');

const { getTodoController, addTodoController, getOneTodoController, deleteTodoController, updateTodoController, patchTodoController } = require('../controllers/')


const router = express.Router();

router.get("/get", getTodoController)


router.post("/post", addTodoController )


router.get('/getOne/:id', getOneTodoController)


router.delete("/delete/:id", deleteTodoController)


router.put("/put/:id" , updateTodoController)


router.patch("/patch/:id" , patchTodoController)



module.exports = router;
