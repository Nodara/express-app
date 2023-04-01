const { Sequelize } = require('sequelize');
const Product = require('./product.model');
const User = require('./user.model');

const sequelize = new Sequelize(
  'postgres',
  'root',
  'root',
  {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
  }
);

Product.init(sequelize);
User.init(sequelize);

// RELATIONS
User.hasMany(Product, {
  as: 'products',
  foreignKey: {
    allowNull: false,
    name: 'userId',
  }
});

Product.belongsTo(User, {
  as: 'user',
  foreignKey: {
    allowNull: false,
    name: 'userId',
  }
});

(async () => {
  try{ 
    await sequelize.authenticate();
    console.log('db: connected successfully');

    await Promise.all([
      Product.sync({ force: false }).catch((e) => {
        console.error('product sync failed, reason: ', e);
      }),
      User.sync({ force: false }).catch((e) => {
        console.error('user sync failed, reason: ', e);
      })
    ]);

  } catch(e) {
    console.log('db: error, reason:', e);
  }
})();

module.exports = sequelize;