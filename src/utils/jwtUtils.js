const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config');

const generateToken = (userId) => {
  return jwt.sign({ userId }, jwtSecret);
};

module.exports = {
  generateToken,
};
