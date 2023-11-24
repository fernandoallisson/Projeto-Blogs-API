const joi = require('joi');

const updatePostSchema = joi.object({
  title: joi.string().required(),
  content: joi.string().required(),
}).messages({
  'string.empty': 'Some required fields are missing',
  'any.required': 'Some required fields are missing',
  'any.empty': 'Some required fields are missing',
});

module.exports = updatePostSchema;