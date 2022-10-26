const express = require('express');
const authRouter = require('./auth.router');
const userRouter = require('./user.router');

const router = express.Router();

// rota pública
router.use('/login', authRouter);

// rotas privadas

router.use('/user', userRouter);

module.exports = router;