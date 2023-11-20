const { userServices } = require('../service/index');

const getAllUsers = async (req, res) => {
  const users = await userServices.getAllUsers();

  return res.status(200).json(users);
};

module.exports = {
  getAllUsers,
};
