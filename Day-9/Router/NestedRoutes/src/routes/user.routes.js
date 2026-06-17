const express = require('express');
const postRoutes = require('./post.routes')
const router = express.Router();

router.use("/:id" , postRoutes )


module.exports = router