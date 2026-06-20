//With custom messages


const express = require("express");
const joi = require("joi");

const app = express();
app.use(express.json());

const schema = joi.object({
  name: joi.string().min(3).max(20).required().messages({
    "string.empty": "Username is required",
    "string.min": "Username must be atleast 3 characters",
    "any.required": "Username is mandatory",
  }),
  age: joi.number().min(1).max(100).required().messages({
    "number.base" : "Age must be number",
    "number.min": "Age must be Greater or equal to 1",
    "number.max": "Enter a valid age",
    "any.required": "Age is mandatory",
  }),
  email: joi.string().email().required().messages({
    "string.empty": "Email is required",
    "string.email": "Please enter a valid email address",
    "any.required": "Email is mandatory",
  }),
  password: joi
    .string()
    .pattern(new RegExp(/^[a-zA-Z0-9]{6,30}$/))
    .required()
    .messages({
      "string.empty": "Password is required",
      "string.pattern.base":
        "Password must be 6-30 characters long and contain only letters and numbers",
      "any.required": "Password is mandatory",
    }),
  confirmPassword: joi.ref("password")
});

app.post("/", (req, res) => {
  // console.log(req.body)
  const { error, value } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
  res.send("success");
});

app.listen(3000, () => {
  console.log("Server is running..");
});
