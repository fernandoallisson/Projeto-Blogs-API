const Router = require('express');
const { blogPostController } = require('../controller/index');
const validateHeaders = require('../Middlewares/validate-headers');

const blogPostRouter = Router();

blogPostRouter.post('/post', validateHeaders, blogPostController.createBlogPost);

module.exports = blogPostRouter;