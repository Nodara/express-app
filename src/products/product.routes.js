const router = require('express').Router();
const StoreController = require('./product.controller');

router.get('/', StoreController.getProducts);
  
router.post('/', StoreController.createProduct );
  
router.delete('/:id', StoreController.deleteProduct);
  
router.put('/:id', StoreController.updateProduct );

module.exports = router;