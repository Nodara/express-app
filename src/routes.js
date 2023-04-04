const express = require('express');
const router = express.Router();

const productRoutes = require('./products/product.routes');
const userRoutes = require('./user/user.routes');
const authRoutes = require('./auth/auth.routes');
const { checkToken } = require('./auth/auth.middleware');

router.use('/auth', authRoutes);
router.use(checkToken);
router.use('/product', productRoutes);
router.use('/user', userRoutes);

module.exports = router;

