const userService = require('../services/user.services');

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

module.exports = { getUsers, createUser };