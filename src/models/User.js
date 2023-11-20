const User = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      displayName: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      email: DataTypes.STRING(255),
      password: DataTypes.STRING(255),
      image: DataTypes.STRING,
    },
    {
      tableName: "users",
      underscored: true,
      timestamps: false,
  });
  return user;
};

module.exports = User;
