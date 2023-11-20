const blogPostSchema = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, { timestamps: false, tableName: 'blog_posts', underscored: true });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.users, { as: 'user', foreignKey: 'userId' });
  };

}

module.exports = blogPostSchema;