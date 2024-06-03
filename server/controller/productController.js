
const db = require('../database/index');
const Product = db.Product;


const createProduct = async (req, res) => {
    try {
        const { name, price, category, description, image, image1, image2, image3, stock } = req.body;
        const newProduct = await Product.create({ name, price, category, description, image, image1, image2, image3, stock });
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).send(' error')
    }
};

// get product by ID
const getProductById = async (req, res) => {
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
//get product by category
const getProductsByCategory = async (req, res) => {
    try {
        const { category } = req.params;
        const products = await Product.findAll({ where: { category :category} });
        if (products.length === 0) {
            return res.status(404).json({ message: 'No products found in this category' });
        }
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        const { name, price, category, description, image, image1, image2, image3, stock }= req.body;
        const { name: oldName } = req.params;

   
        const product = await Product.findOne({ where: { name: oldName } });
        
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

       
        await product.update({ name, price, category, description, image, image1, image2, image3, stock });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



const deleteProduct = async (req, res) => {
    try {
        const { name } = req.params;

        
        const product = await Product.findOne({ where: { name: name } });

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
    getProductsByCategory
}