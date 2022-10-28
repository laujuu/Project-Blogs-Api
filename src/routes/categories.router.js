const express = require('express');

const categoryController = require('../controllers/categories.controller');

const { validateToken } = require('../middlewares/auth.middleware');
const { validateCategory } = require('../middlewares/validateCategories');

const router = express.Router();

router.post('/', validateToken, validateCategory, categoryController.createCategory);

module.exports = router;