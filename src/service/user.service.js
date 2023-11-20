const { User } = require('../models/User');

const getAllUsers = async () => {
  const users = await User.findAll();
  console.log(users);
  return users;
};

module.exports = {
  getAllUsers,
};
