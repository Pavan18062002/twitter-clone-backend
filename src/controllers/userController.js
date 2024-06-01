const userService = require('../services/userService');

const registerUser = async (req, res) => {
  try {
    const newUser = await userService.registerUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const token = await userService.loginUser(req.body);
    res.json({ token });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
};