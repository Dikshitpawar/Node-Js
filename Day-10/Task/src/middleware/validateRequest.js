
const schema = require("../validation/schemas/todo.schema");


const validate = (schema , property = "body") => {
  return (req, res, next) => {
    const options = {
      abortEarly: false,
      stripUnknown: true,
      errors: {
        wrap: {
          label: false
        }
      }
    };
    const { error, value } = schema.validate(req[property],options);
    console.log(req[property])
    // console.log("V:",value)
    if (error) {
      return res.status(400).json({
        message: "Validation failed",
        errors: error.message
      });
    }

    req[property] = value;
    console.log(req[property])
     next();
  };
};

module.exports = validate;