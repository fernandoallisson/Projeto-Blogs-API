const categorySchema = (sequelize, DataTypes) => {
  const categories = sequelize.define("Category", {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    },
    name:{
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  }, { timestamps: false, tableName: "categories", underscored: true });

  return categories;
}

module.exports = categorySchema;
