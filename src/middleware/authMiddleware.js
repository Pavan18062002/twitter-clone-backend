const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config');

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Authentication failed' });
  }
  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Authentication failed' });
  }
};

module.exports = authMiddleware;
