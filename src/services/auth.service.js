const Joi = require('joi');
const jwtUtil = require('../utils/jwt.util');

const { User } = require('../models');

const validateBody = (params) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    });

    const { error, value } = schema.validate(params);

    if (error) throw error;

    return value;
};

const validateLogin = async ({ email, password }) => {
    const user = await User.findOne({ where: { email } });

    if (!user || user.password !== password) {
        return { type: 'BAD_REQUEST' };
    }
    const { password: _, ...userWithoutPassword } = user.dataValues;
    const token = jwtUtil.createToken(userWithoutPassword);

    return { type: null, token };
};

const validateToken = (token) => {
    const user = jwtUtil.validateToken(token);
    return user;
};

module.exports = { validateBody, validateLogin, validateToken };