const router = require('express').Router();
const validateParamsId = require('../tools/validateParamsId');
const StoreController = require('./product.controller');

router.get('/', StoreController.getProducts);
  
router.post('/', StoreController.createProduct );
  
router.delete('/:id', validateParamsId, StoreController.deleteProduct);
  
router.put('/:id', StoreController.updateProduct );

module.exports = router;