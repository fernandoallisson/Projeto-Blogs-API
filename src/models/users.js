const userSchema = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      id: DataTypes.INTEGER,
      display_name: DataTypes.STRING(255),
      email: DataTypes.STRING(255),
      password: DataTypes.STRING(255),
      image: DataTypes.STRING,
    },
    {
      tableName: "users",
      underscored: true,
      timestamps: false,
  });
  return User;
};

module.exports = userSchema;
