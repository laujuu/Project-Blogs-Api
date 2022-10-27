const userService = require('../services/user.services');

const CONFLICT_STATUS = 409; 
const BAD_REQUEST = 400;

const userRegistered = 'User already registered';
const displayNameLength = '"displayName" length must be at least 8 characters long';
const passwordLength = '"password" length must be at least 6 characters long';
const validEmail = '"email" must be a valid email';

const validateUser = async (req, res, next) => {
  const { email, displayName, password } = req.body;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const users = await userService.getUsers(email);
  const findEmail = users.find((user) => user.dataValues.email === email);
  // Se o email estiver cadastrado o usuário não é adicionado e exibe uma mensagem de erro
  if (findEmail) return res.status(CONFLICT_STATUS).json({ message: userRegistered }); 

  if (displayName.length < 8) return res.status(BAD_REQUEST).json({ message: displayNameLength }); 

  if (password.length < 6) return res.status(BAD_REQUEST).json({ message: passwordLength });

  if (!emailRegex.test(email)) return res.status(BAD_REQUEST).json({ message: validEmail });

  next();
};

module.exports = { validateUser };