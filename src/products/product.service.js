const { Op } = require('sequelize');
const Product = require('../database/store.model');


const getProducts = async ({
  id,
  isDeleted,
  amount,
  price,
}) => {
  const filter = {
    ...(id && { id }),
    ...(isDeleted !== undefined && (isDeleted ? { deletedAt: null} : { deletedAt: {[Op.not]: null }} )),
    ...(amount && { amount }),
    ...(price && { price }),
  };
 
  const products = await Product.findAll({
    where: {
      ...filter, 
    },
  }); 

  return products;
}; 


const deleteProduct = async (id) => {
  const product = await Product.findByPk(id);

  if(!product && product.isDeleted) {
      return { message: 'NOT_FOUND'};
  }

  product.deletedAt = new Date();

  // await Product.update({ deletedAt: new Date() }, { where: { id }});

  await product.save();

  return { message: 'PRODUCT_DELETED' };
};

const updateProduct = async ( id, payload ) => {
  const product = await Product.findByPk(id);

  if (!product) return { message: 'NOT_FOUND'};

  await Product.update(payload, { where: {
    id,
  }});

  return { message: 'UPDATED'};
};

const createProduct = async (payload) => {
  const product = await Product.findOne({
    where: {
      title: payload.title, 
      price: payload.price,
    }
  });

  if(product) return { message: 'ALREADY_EXIST' };

  await Product.create(payload);

  return { message: 'CREATED' };
};

module.exports = {
  getProducts, deleteProduct, updateProduct, createProduct
};