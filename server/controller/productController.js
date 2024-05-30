// controllers/productController.js
const db = require('../database/index');
const Product = db.Product;

// Create a new product
createProduct = async (req, res) => {
    try {
        const { name, price, category, description, image, stock, sales } = req.body;
        const newProduct = await Product.create({ 
            name, 
            price, 
            category, 
            description, 
            image, 
            stock, 
            sales 
        });
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all products
getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).send('prot error')
    }
};

// Get product by ID
getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update product
updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, category, description, image, stock } = req.body;
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        await product.update({ name, price, category, description, image, stock });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete product
deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        await product.destroy();
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
  // it will fetch the product by the best seles 
const getBestSellers = async (req, res) => {
    try {
        const sales = await Product.findAll({

            order: [['sales', 'DESC']],
            //order mean that the products will be stortes by seles;
            //DESC:stands for "descending". It means that 
            //the results should be sorted in descending order;
            limit: 2, 
        });
        res.json(sales);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports={
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    getBestSellers,
}