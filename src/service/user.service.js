const validateSchema = require('../Utils/validateSchema');
const { userSchema } = require('../Schemas/index');
const { User } = require('../models/index');

const { createToken } = require('../Utils/createToken');
 
const getAllUsers = async () => {
  const users = await User.findAll();
  return users;
};

const createUser = async (dataUser) => {
  const validateMessage = validateSchema(userSchema, dataUser);

  if (validateMessage) {
    return { status: 'BAD_REQUEST', data: validateMessage };
  }

  const user = await User.findOne({ where: { email: dataUser.email } });

  if (user) {
    return { status: 'CONFLICT', data: { message: 'User already registered' } }; 
  }

  await User.create(dataUser);

  const userWithPassword = { ...dataUser };
  delete userWithPassword.password;

  const token = createToken({ payload: userWithPassword });

  return { status: 'SUCCESS', data: { token } };
};

module.exports = {
  getAllUsers,
  createUser,
};
