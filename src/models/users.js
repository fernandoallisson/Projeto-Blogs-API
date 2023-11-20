const userSchema = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      display_name: DataTypes.STRING(255),
      email: DataTypes.STRING(255),
      password: DataTypes.STRING(255),
      image: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      tableName: "users",
      underscored: true,
      timestamps: true,
    }
  );
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};

module.exports = userSchema;
