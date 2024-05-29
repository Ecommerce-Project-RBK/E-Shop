const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");
const jwtMiddleware = require("../middleware/jwtMiddleware");

// post a product (protected because its a seller feature)
router.post("/create", jwtMiddleware, productController.createProduct);

// get all products
router.get("/get", productController.getAllProducts);
// get one product
router.get("/:id", productController.getProductById);

// update a product (protected because its a seller feature)
router.put("/:id", jwtMiddleware, productController.updateProduct);

// delete a produt (protected because its a seller feature)
router.delete("/:id", jwtMiddleware, productController.deleteProduct);

module.exports = router;
