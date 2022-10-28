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
 
 module.exports = { getPosts };