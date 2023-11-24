const { validateToken } = require('../Utils/createToken');

const validateHeaders = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const token = authorization.split('Bearer ')[1];
  const validate = await validateToken(token);
  if (validate.error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  req.user = validate;
  next();
};

module.exports = validateHeaders;