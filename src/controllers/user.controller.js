const userService = require('../services/user.services');
const errorMap = require('../utils/errorMap');

const OK_STATUS = 200;
const CREATED_STATUS = 201;

const getUsers = async (_req, res) => {
  const users = await userService.getUsers();
  return res.status(OK_STATUS).json(users);
};

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const { token } = await userService.createUser(displayName, email, password, image);
  return res.status(CREATED_STATUS).json({ token });
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await userService.findById(id);
  
  if (type) return res.status(errorMap.mapError(type)).json({ message: 'User does not exist' });
  res.status(OK_STATUS).json(message);
};

module.exports = { getUsers, createUser, findById };