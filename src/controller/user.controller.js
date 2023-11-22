const { userServices } = require('../service/index');

const getAllUsers = async (req, res) => {
  const users = await userServices.getAllUsers();
  res.status(200).json(users);
};

const createUser = async (req, res) => {
  const { displayName, image, email, password } = req.body;
  const newUser = { displayName, image, email, password };
  const response = await userServices.createUser(newUser);
  console.log(response);
  if (response.status === 'CONFLICT') {
    const message = response.data;
    return res.status(409).json(message);
  }
  if (response.status === 'BAD_REQUEST') {
    const message = response.data;
    return res.status(400).json(message);
  }
  return res.status(201).json(response.data);
};

module.exports = {
  getAllUsers,
  createUser,
};
