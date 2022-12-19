const authService = require('../services/auth.service');

const validateToken = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const user = authService.validateToken(authorization);

    req.body = user;
    next();
  } catch (e) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { validateToken };