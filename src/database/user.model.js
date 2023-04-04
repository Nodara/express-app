const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(connection) {
    super.init({
      nickName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      balance: {
        type: DataTypes.NUMBER,
        allowNull: false,
        defaultValue: 0,
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
     {
      sequelize: connection,
      timestamps: true,
      tableName: 'users'
    });
  }
}

module.exports = User;