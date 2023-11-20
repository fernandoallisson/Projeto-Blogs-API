const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
}).messages({
  'string.email': 'Email inválido',
  'string.empty': 'Senha deve ter no mínimo 6 caracteres',
  'any.required': 'Campo obrigatório',
  'any.min': 'Campo obrigatório',
});

module.exports = {
  loginSchema,
};
