const express = require('express');
const authController = require('../controllers/auth.controller');

const { validateLogin } = require('../middlewares/validateLogin');

const router = express.Router();

router.post('/', validateLogin, authController.login);

module.exports = router;