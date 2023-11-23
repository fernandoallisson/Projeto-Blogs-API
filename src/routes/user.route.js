const { Router } = require('express');

const { userController } = require('../controller/index');
const validateHeaders = require('../Middlewares/validate-headers');

const userRouters = Router();

userRouters.get('/user', validateHeaders, userController.getAllUsers);
userRouters.get('/user/:id', validateHeaders, userController.getUserById);
userRouters.post('/user', userController.createUser);

module.exports = userRouters;
