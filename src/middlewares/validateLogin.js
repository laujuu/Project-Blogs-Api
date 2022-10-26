const BAD_REQUEST = 400;

const validateLogin = (req, res, next) => {
  const { password, email } = req.body;

  if (!password || !email) {
    return res.status(BAD_REQUEST)
    .json({ message: 'Some required fields are missing' });
  } 

  return next();
};

module.exports = { validateLogin };