const postService = require('../services/post.services');

const OK_STATUS = 200;

const getPosts = async (_req, res) => {
    const categories = await postService.getPosts();
    return res.status(OK_STATUS).json(categories);
  };

module.exports = { getPosts };
