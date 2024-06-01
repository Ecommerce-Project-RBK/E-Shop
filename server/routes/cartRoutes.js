const express = require('express');
const {buy} = require('../controller/CartController.js');
const router = express.Router();
router.post('/add', buy)



module.exports = router;