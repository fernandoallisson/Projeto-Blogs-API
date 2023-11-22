const joi = require('joi');

const userSchema = joi
  .object({
    displayName: joi.string().min(8).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
    image: joi.string(),
  })
  .messages({
    'string.min': '"{#key}" length must be at least {#limit} characters long',
    'any.required': 'key: "{#key}" are missing',
    'string.empty': 'key: "{#key}" are missing',
    'string.email': '"{#key}" must be a valid email',
  });

module.exports = userSchema;
