const express=require('express')
const router=express.Router()
const {createProduct,getAllProduct,getProductById,updateProduct,deleteProduct}=require("../models/product")
  
router.get('/get',getAllProduct)
router.post('/create',createProduct)
router.get('/:id',getProductById)
router.put('/:id',updateProduct)
router.delete('/id',deleteProduct)

   
   
    