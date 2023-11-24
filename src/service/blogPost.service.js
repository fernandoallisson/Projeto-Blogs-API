const { BlogPost, Category, PostCategory, User } = require('../models/index');
const { validatePost, validateSchema } = require('../Utils/validateSchema');
const { blogPostSchema, updatePostSchema } = require('../Schemas/index');

const createPost = async ({ title, content, user, categoryIds }) => {
  const validationError = validatePost(blogPostSchema, { title, content, categoryIds });
  if (validationError) return validationError;

  const { id: userId } = user.data.payload;
  if (userId === undefined || userId === null) {
    return { status: 'BAD_REQUEST', data: { message: 'UserId not found' } };
  }
  const categories = await Category.findAll({ where: { id: categoryIds } }); 

  if (categories.length !== categoryIds.length) {
    return { status: 'BAD_REQUEST', data: { message: 'one or more "categoryIds" not found' } };
  }

  const published = Date.now();
  const updated = Date.now();

  const newPost = await BlogPost.create({ title, content, userId, updated, published });
  const postId = newPost.id;

  await Promise.all(categoryIds.map((categoryId) => PostCategory.create({ postId, categoryId })));

  return { status: 'SUCCESS', data: newPost };
};

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: Category, as: 'categories', through: { attributes: [] } },
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
    ],
  });
  return { status: 'SUCCESS', data: posts };
};

const getPostById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: Category, as: 'categories', through: { attributes: [] } },
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
    ],
  });
  if (!post) return { status: 'BAD_REQUEST', data: { message: 'Post does not exist' } };
  return { status: 'SUCCESS', data: post };
};

const updatePost = async (newPost, userId, postId) => {
  const validateMessage = validateSchema(updatePostSchema, newPost);
  if (validateMessage) return { status: 'BAD_REQUEST', data: { message: validateMessage } };
  console.log(userId, postId);
  const auth = Number(userId) === Number(postId);
  if (!auth) return { status: 'UNAUTHORIZED', data: { message: 'Unauthorized user' } };

  await BlogPost.update(newPost, { where: { id: postId } });

  const updatedPost = await BlogPost.findByPk(postId, {
    include: [
      { model: Category, as: 'categories' },
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
    ],
  });

  return { status: 'SUCCESS', data: updatedPost };
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
};
