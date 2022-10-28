const { BlogPost, User, Category } = require('../models');

 const getPosts = async () => {
    const post = await BlogPost.findAll({
        include: [
          {
            model: User,
            as: 'user',
            attributes: { exclude: ['password'] },
          },
          {
            model: Category,
            as: 'categories',
          },
        ],
      });
    return post;
   };

   const findPostById = async (id) => {
    const post = await BlogPost.findByPk(id, {
        include: [
          {
            model: User,
            as: 'user',
            attributes: { exclude: ['password'] },
          },
          {
            model: Category,
            as: 'categories',
          },
        ],
      });

    if (post) return { type: null, message: post };
    return { type: 'NOT_FOUND' };
  };
 
 module.exports = { getPosts, findPostById };