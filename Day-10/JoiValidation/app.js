const express = require("express");
const joi = require("joi");

const app = express();
app.use(express.json());

const schema = joi.object({
  name: joi.string().min(3).max(20).required(),
  age: joi.number().min(1).max(100).required(),
  email: joi.string().email().required(),
  password: joi
    .string()
    .pattern(new RegExp(/^[a-zA-Z0-9]{6,30}$/))
    .required(),
  confirmPassword: joi.ref("password"),
});

app.post("/", (req, res) => {
  // console.log(req.body)
  const { error, value } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
  res.send(value);
});

app.listen(3000, () => {
  console.log("Server is running..");
});
