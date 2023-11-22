const validateSchema = require('../Utils/validateSchema');
const loginSchema = require('../Schemas/login.schemas'); 
const { User } = require('../models/index');

const { createToken } = require('../Utils/createToken');

const login = async (email, password) => {
  const validateMessage = validateSchema(loginSchema, { email, password });
  console.log('AQUIII', validateMessage);
  if (validateMessage) {
    return { status: 'BAD_REQUEST', data: validateMessage };
  }
  const user = await User.findOne({ where: { email, password }, exclude: ['password'] });
  console.log('AQUII', user);
  if (!user) {
    return { status: 'BAD_REQUEST', data: { message: 'Invalid fields' } };
  }
  const token = createToken({ payload: user });

  return { status: 'SUCCESS', data: { token } };
};

module.exports = {
  login,
};
