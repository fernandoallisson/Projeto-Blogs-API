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

const updateBlogPost = async (req, res) => {
  const { id: postId } = req.params;
  const { title, content } = req.body;
  const { id: userId } = req.user.data.payload;
  const newData = { title, content };

  const response = await blogPostServices.updatePost(newData, userId, postId);
  if (response.status === 'BAD_REQUEST') {
    return res.status(400).json(response.data.message);
  }
  if (response.status === 'UNAUTHORIZED') {
    return res.status(401).json(response.data);
  }
  return res.status(200).json(response.data);
};

const deleteBlogPost = async (req, res) => {
  const { id: postId } = req.params;
  const { id: userId } = req.user.data.payload;
  const response = await blogPostServices.deletePost(userId, postId);
  if (response.status === 'UNAUTHORIZED') {
    return res.status(401).json(response.data);
  }
  if (response.status === 'BAD_REQUEST') {
    return res.status(404).json(response.data);
  }
  return res.status(204).end();
};

module.exports = {
  createBlogPost,
  getAllBlogPosts,
  getBlogPostById,
  updateBlogPost,
  deleteBlogPost,
};