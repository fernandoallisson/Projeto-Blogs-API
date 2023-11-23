const { categoryServices } = require('../service/index');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const response = await categoryServices.createCategory(name);
  if (response.status === 'BAD_REQUEST') {
    return res.status(400).json(response.data);
  }
  return res.status(201).json(response.data);
};

const getAllCategories = async (_req, res) => {
  const response = await categoryServices.getAllCategories();
  if (response.status === 'BAD_REQUEST') {
    return res.status(400).json(response.status);
  }
  return res.status(200).json(response.data);
};

module.exports = { 
  createCategory,
  getAllCategories,
};