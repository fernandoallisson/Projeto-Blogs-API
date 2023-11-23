const categorySchema = (sequelize, DataTypes) => {
  const categories = sequelize.define('Category', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name:{
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  }, { timestamps: false, tableName: 'categories', underscored: true });

  return categories;
}

module.exports = categorySchema;
