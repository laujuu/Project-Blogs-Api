const { Category } = require('../models');
const jwtUtil = require('../utils/jwt.util');

const createCategory = async (name) => {
    const category = await Category.create({ name });
 
    const token = jwtUtil.createToken(category);
    if (token) return { type: null, message: category };
    return { type: 'BAD_REQUEST' };
 };

 const getCategories = async () => {
    const user = await Category.findAll();
    return user;
   };
 
 module.exports = { createCategory, getCategories };