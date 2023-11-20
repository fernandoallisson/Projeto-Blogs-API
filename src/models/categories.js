const categorySchema = (sequelize, DataTypes) => {
  const categories = sequelize.define('Category', {
    name: DataTypes.STRING,
  }, { timestamps: false, tableName: 'categories', underscored: true });

  return categories;
}

module.exports = categorySchema;
