const { validateSchema } = require('../Utils/validateSchema');
const { categorySchema } = require('../Schemas/index'); 
const { Category } = require('../models/index');

const createCategory = async (name) => {
  const validateMessage = validateSchema(categorySchema, { name });
  if (validateMessage) {
    return { status: 'BAD_REQUEST', data: validateMessage };
  }
  const category = await Category.create({ name });
  return { status: 'SUCCESS', data: category };
};

const getAllCategories = async () => {
  const categories = await Category.findAll();
  return { status: 'SUCCESS', data: categories };
};

module.exports = {
  createCategory,
  getAllCategories,
};
