const { Router } = require('express');

const { loginController } = require('../controller/index');

const userRouters = Router();

userRouters.post('/login', loginController.login);
// Colocar as demais rotas aqui.

module.exports = userRouters;
