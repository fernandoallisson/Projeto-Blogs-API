const postsCategoriesSchema = (sequelize, DataTypes) => {
  const PostsCategories = sequelize.define('PostsCategories', {
    postId: { type: DataTypes.INTEGER, primaryKey: true },
    categoryId: { type: DataTypes.INTEGER, primaryKey: true },
  }, { timestamps: false, tableName: 'posts_categories', underscored: true });

  PostsCategories.associate = (models) => {
    models.BlogPosts.belongsToMany(models.Category, {
      as: 'categories',
      through: PostsCategories,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    
    models.Category.belongsToMany(models.BlogPosts, {
      as: 'blogPosts',
      through: PostsCategories,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return PostsCategories;
}

module.exports = postsCategoriesSchema;