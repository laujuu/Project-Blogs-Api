const express = require('express');
const authRouter = require('./auth.router');

const router = express.Router();
router.use('/login', authRouter);

module.exports = router;