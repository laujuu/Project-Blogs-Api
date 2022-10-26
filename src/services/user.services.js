const { User } = require('../models');

const getUsers = async () => {
 const user = await User.findAll({
   attributes: { exclude: ['password'] },
  });

  return user;
};

module.exports = { getUsers };