const ProductService = require('./product.service');

const getProducts = async (req, res) => {
  const { id, price, isDeleted, amount } = req.query;

  const data = await ProductService.getProducts({
    isDeleted, amount, price, id
  });
    
  return res.json({ data: data });
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const message = await ProductService.deleteProduct(id);
 
  return res.json(message);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  
  const message = await ProductService.updateProduct(id, payload); 

  res.json(message);
};

const createProduct = async (req, res) => {
  const payload = req.body;

  const message = await ProductService.createProduct(payload);

  return res.json(message);
};

module.exports = { 
  getProducts,
  deleteProduct, 
  updateProduct,
  createProduct
};