const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config');

const registerUser = async ({ username, password }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword });
  await user.save();
  return user;
};

const loginUser = async ({ username, password }) => {
  const user = await User.findOne({ username });
  if (!user) {
    throw new Error('User not found');
  }
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    throw new Error('Invalid password');
  }
  const token = jwt.sign({ userId: user._id }, jwtSecret);
  return token;
};

module.exports = {
  registerUser,
  loginUser,
};
