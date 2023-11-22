const { User } = require('../models/index');

const getAllUsers = async () => {
  const users = await User.findAll();
  return users;
};

module.exports = {
  getAllUsers,
};
