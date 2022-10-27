const express = require('express');
const userController = require('../controllers/user.controller');

const { validateToken } = require('../middlewares/auth.middleware');
const { validateUser } = require('../middlewares/validateUser');

const router = express.Router();

router.post('/', validateUser, userController.createUser);
router.get('/', validateToken, userController.getUsers);
router.get('/:id', validateToken, userController.findById);

module.exports = router;