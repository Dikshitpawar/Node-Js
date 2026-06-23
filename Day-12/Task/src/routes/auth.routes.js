const express = require('express');
const validate = require("../middleware/validateRequest")
const { authSchema } = require('../validation');
const { authController } = require('../controllers');

const router = express.Router();

router.post("/register" , validate(authSchema.registerSchema) , authController.register)
router.post("/login" , validate(authSchema.loginSchema) , authController.login)


module.exports = router