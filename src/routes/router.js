const express = require('express');
const authRouter = require('./auth.router');
const userRouter = require('./user.router');
const categoryRouter = require('./categories.router');
const postRouter = require('./post.router');

const router = express.Router();

// rota pública
router.use('/login', authRouter);

// rotas privadas
router.use('/user', userRouter);
router.use('/categories', categoryRouter);
router.use('/post', postRouter);

module.exports = router;