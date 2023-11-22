const { Router } = require('express');

const { loginController } = require('../controller/index');

const loginRouter = Router();

loginRouter.post('/login', loginController.login);
// Colocar as demais rotas aqui.

module.exports = loginRouter;