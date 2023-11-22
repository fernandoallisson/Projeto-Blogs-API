const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
}).messages({
  'string.email': 'Invalid fields',
  'string.empty': 'Some required fields are missing',
  'any.required': 'Some required fields are missing',
  'any.min': 'Invalid fields',
});

module.exports = loginSchema;
