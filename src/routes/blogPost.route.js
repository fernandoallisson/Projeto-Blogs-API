const Router = require('express');
const { blogPostController } = require('../controller/index');
const validateHeaders = require('../Middlewares/validate-headers');

const blogPostRouter = Router();

blogPostRouter.post('/post', validateHeaders, blogPostController.createBlogPost);
blogPostRouter.get('/post', validateHeaders, blogPostController.getAllBlogPosts);
blogPostRouter.get('/post/:id', validateHeaders, blogPostController.getBlogPostById);
blogPostRouter.put('/post/:id', validateHeaders, blogPostController.updateBlogPost);
blogPostRouter.delete('/post/:id', validateHeaders, blogPostController.deleteBlogPost);

module.exports = blogPostRouter;