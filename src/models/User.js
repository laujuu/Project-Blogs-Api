module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: DataTypes.INTEGER,
      display_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    }, {
      timestamps: false,
    });

    User.associate = (models) => {
      User.hasMany(models.BlogPost, {
        as: 'blog_posts',
        foreignKey: 'id',
      })
 }
  
    return User;
  };
