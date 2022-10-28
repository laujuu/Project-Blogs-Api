const categoryService = require('../services/categories.services');
const errorMap = require('../utils/errorMap');

const CREATED_STATUS = 201;

const createCategory = async (req, res) => {
  const { name } = req.body;

  const { type, message } = await categoryService.createCategory(name);
  if (type) return res.status(errorMap.mapError(type)).json({ message: 'Oops algo deu errado' });
  return res.status(CREATED_STATUS).json(message);
};

module.exports = { createCategory };
