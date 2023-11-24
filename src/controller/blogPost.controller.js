const { blogPostServices } = require('../service/index');

const createBlogPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { user } = req;
  const response = await blogPostServices.createPost({ title, content, categoryIds, user });
  if (response.status === 'BAD_REQUEST') {
    return res.status(400).json(response.data);
  }
  return res.status(201).json(response.data);
};

const getAllBlogPosts = async (_req, res) => {
  const response = await blogPostServices.getAllPosts();
  if (response.status === 'BAD_REQUEST') {
    return res.status(400).json(response.data);
  }
  return res.status(200).json(response.data);
};

const getBlogPostById = async (req, res) => {
  const { id } = req.params;
  const response = await blogPostServices.getPostById(id);
  if (response.status === 'BAD_REQUEST') {
    return res.status(404).json(response.data);
  }
  return res.status(200).json(response.data);
};

module.exports = {
  createBlogPost,
  getAllBlogPosts,
  getBlogPostById,
};