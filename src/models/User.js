const UserSchema = (sequelize, DataTypes) => {
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
  user.associate = (models) => {
    user.hasMany(models.BlogPost, { as: 'blogPost', foreignKey: 'userId' });
  };
  return user;
};

module.exports = UserSchema;
