const postService = require('../services/post.services');
const errorMap = require('../utils/errorMap');

const OK_STATUS = 200;

const getPosts = async (_req, res) => {
    const categories = await postService.getPosts();
    return res.status(OK_STATUS).json(categories);
  };

  const findPostById = async (req, res) => {
    const { id } = req.params;
    const { type, message } = await postService.findPostById(id);
    
    if (type) return res.status(errorMap.mapError(type)).json({ message: 'Post does not exist' });
    res.status(OK_STATUS).json(message);
  };

module.exports = { getPosts, findPostById };
