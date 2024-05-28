// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

// Create a new product
router.post('/create', createProduct);

// Get all products
router.get('/get', getAllProducts);

// Get product by ID
router.get('/:id', getProductById);

// Update product
router.put('/:id', updateProduct);

// Delete product
router.delete('/:id',deleteProduct);

module.exports = router;
