const { loginServices } = require('../service/index');

const login = async (req, res) => {
  const { email, password } = req.body;
  const response = await loginServices.login(email, password);
  console.log('AQUIII', response);
  if (response.status === 'BAD_REQUEST') {
    return res.status(400).json(response.data);
  }
  const { token } = response.data;
  return res.status(200).json({ token });
};

module.exports = {
  login,
};
