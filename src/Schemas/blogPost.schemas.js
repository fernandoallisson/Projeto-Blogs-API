const joi = require('joi');

const blogPostSchema = joi.object({
  title: joi.string().required(),
  content: joi.string().required(),
  categoryIds: joi.array().items(joi.number()).required(),
}).messages({
  'string.empty': 'Some required fields are missing',
  'array.empty': 'one or more "categoryIds" not found',
  'any.required': 'Some required fields are missing',
  'any.empty': 'Some required fields are missing',
  'title.empty': 'The "title" field is required',
});

module.exports = blogPostSchema;