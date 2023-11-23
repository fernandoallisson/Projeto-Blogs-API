const Router = require('express');
const { categoryController } = require('../controller/index');
const validateHeaders = require('../Middlewares/validate-headers');

const categoryRouter = Router();

categoryRouter.post('/categories', validateHeaders, categoryController.createCategory);
categoryRouter.get('/categories', validateHeaders, categoryController.getAllCategories);

module.exports = categoryRouter;