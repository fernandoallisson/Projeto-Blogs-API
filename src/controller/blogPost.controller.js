const { blogPostServices } = require('../service/index');

const createBlogPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;
  const response = await blogPostServices.createBlogPost(title, content, categoryIds, id);
  if (response.status === 'BAD_REQUEST') {
    return res.status(400).json(response.data);
  }
  return res.status(201).json(response.data);
};

module.exports = {
  createBlogPost,
};