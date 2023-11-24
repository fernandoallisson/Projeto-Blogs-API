const { BlogPost, Category, PostCategory } = require('../models/index');
const { validatePost } = require('../Utils/validateSchema');
const { blogPostSchema } = require('../Schemas/index');

const createPost = async ({ title, content, user, categoryIds }) => {
  const validationError = validatePost(blogPostSchema, { title, content, categoryIds });
  if (validationError) return validationError;

  const { id: userId } = user.data.payload;
  if (userId === undefined || userId === null) {
    return { status: 'BAD_REQUEST', data: { message: 'UserId not found' } };
  }
  // busca as categorias correspondentes aos IDs fornecidos
  const categories = await Category.findAll({ where: { id: categoryIds } }); 

  // todas as categorias foram encontradas?
  if (categories.length !== categoryIds.length) {
    return { status: 'BAD_REQUEST', data: { message: 'one or more "categoryIds" not found' } };
  }

  const published = Date.now();
  const updated = Date.now();

  // criando um novo post
  const newPost = await BlogPost.create({ title, content, userId, updated, published });
  const postId = newPost.id;

  // associação do post as categorias da tabela PostCategory
  await Promise.all(categoryIds.map((categoryId) => PostCategory.create({ postId, categoryId })));

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
