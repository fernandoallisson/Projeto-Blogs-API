const { Router } = require('express');

const { userController } = require('../controller/index');

const userRouters = Router();

userRouters.get('/', userController.getAllUsers);
// Colocar as demais rotas aqui.

module.exports = userRouters;
