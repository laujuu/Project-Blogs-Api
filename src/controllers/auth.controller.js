const authService = require('../services/auth.service');
const errorMap = require('../utils/errorMap');

const OK_STATUS = 200;

const login = async (req, res) => {
    const { email, password } = authService.validateBody(req.body);
    const { type, token } = await authService.validateLogin({ email, password });

  if (type) return res.status(errorMap.mapError(type)).json({ message: 'Invalid fields' }); 
  return res.status(OK_STATUS).json({ token });
};

module.exports = { login };