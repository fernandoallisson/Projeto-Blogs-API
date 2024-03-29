const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET || 'meusegredo';

const createToken = (payload) => {
  const token = jwt.sign(payload, SECRET_KEY);

  return token;
};

const validateToken = (token) => {
  try {
    const data = jwt.verify(token, SECRET_KEY);

    return { error: false, data };
  } catch (error) {
    return { error: true, data: { message: error.message } };
  }
};

module.exports = {
  createToken,
  validateToken,
};