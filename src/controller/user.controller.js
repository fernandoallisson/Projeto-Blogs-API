const { userServices } = require('../service/index');

const getAllUsers = async (req, res) => {
  const users = await userServices.getAllUsers();
  res.status(200).json(users);
};

const createUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await userServices.createUser(email, password);
  res.status(201).json(user);
};

module.exports = {
  getAllUsers,
  createUser,
};
