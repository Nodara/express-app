const express = require('express');
const router = express.Router();

const productRoutes = require('./products/product.routes');
const userRoutes = require('./user/user.routes');

router.use('/product', productRoutes);
router.use('/user', userRoutes);

module.exports = router;

