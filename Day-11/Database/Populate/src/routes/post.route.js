const express = require('express');
const { getPost, createPost } = require('../controllers/post.controller');

const router = express.Router();


router.route("/").get(getPost).post(createPost)


module.exports = router
