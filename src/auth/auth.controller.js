const UserService = require('../user/user.service');
const AuthService = require('./auth.service');

const register = async (req, res) => {
  const payload = req.body;

  const registered = await UserService.createUser(payload);
  
  return res.json({ registered });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const token = await AuthService.login({ email, password }); 

  return res.json({ token });
};

module.exports = {
  register, login
};