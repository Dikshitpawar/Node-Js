const express = require('express');
const todoRoutes = require("./todo.routes")
const authRoutes = require("./auth.routes")

const router = express();

router.use('/todo' , todoRoutes)
router.use("/auth" , authRoutes)

module.exports = router;