const { User } = require('../models');
const jwtUtil = require('../utils/jwt.util');

const getUsers = async () => {
 const user = await User.findAll({
   attributes: { exclude: ['password'] },
  });

  return user;
};

const createUser = async (displayName, email, password, image) => {
   const user = await User.create({ displayName, email, password, image });

   const token = jwtUtil.createToken(user);
   return { type: null, token };
};

module.exports = { getUsers, createUser };