const userService = require('../services/user.services');

const OK_STATUS = 200;

const getUsers = async (_req, res) => {
  const users = await userService.getUsers();
  return res.status(OK_STATUS).json(users);
};

module.exports = { getUsers };