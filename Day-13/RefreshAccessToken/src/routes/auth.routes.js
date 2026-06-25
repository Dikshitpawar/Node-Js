const express = require("express");
const authSchema = require("../validation/index");
const authController = require("../controllers");
const validate = require("../middlewares/validateRequest");
const { isAuthenticated } = require("../middlewares/auth.middleware");

const router = express.Router();

router.post(
  "/register",
  validate(authSchema.registerSchema),
  authController.register,
);
router.post("/login", validate(authSchema.loginSchema), authController.login);
router.get("/me", isAuthenticated, authController.getUserProfile);
router.post("/refresh", authController.refreshAccesstoken);

module.exports = router;
