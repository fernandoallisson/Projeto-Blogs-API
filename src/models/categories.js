const categorySchema = (sequelize, DataTypes) => {
  const categories = sequelize.define('Categories', {
    name: DataTypes.STRING,
  }, { timestamps: false, tableName: 'categories', underscored: true });

  return categories;
}

module.exports = categorySchema;
