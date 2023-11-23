const validateSchema = require('../Utils/validateSchema');
const { blogPostSchema } = require('../Schemas/index'); 
const { BlogPost } = require('../models/index');

const createPost = async (title, content, userId) => {
  const validateMessage = validateSchema(blogPostSchema, { title, content, userId });
  if (validateMessage) {
    return { status: 'BAD_REQUEST', data: validateMessage };
  }
  const newPost = await BlogPost.create({ title, content, userId });
  return { status: 'SUCCESS', data: newPost };
};

const getAllPosts = async () => {
  const posts = await BlogPost.findAll();
  return { status: 'SUCCESS', data: posts };
};

module.exports = {
  createPost,
  getAllPosts,
};
