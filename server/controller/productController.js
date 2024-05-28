
const product = require('../models/product')
const Product = require('../models/product')
const sequelize=require("sequelize")


// function to create the product
const createProduct=(req,res)=>{
    const {name,price,category,discreption,image,stock}=req.body
    Product.create(req.body)
    .then(product=>{ res.status(201).json(product)})
    .catch(error=>{res.status(400).send({error:error.message})})
}

//function to getall product
const getAllProduct=(req,res)=>{
    Product.findAll()
    .then(products=>{ res.json(products)})
    .catch(error=>{res.status(400).send({error:error.message})})
}

//function that get a product by id
const getProductById=(req,res)=>{
   const id=req.params
   Product.findBypK(id) 
   .then(product=> {
    if(product){  res.json(product)  }  
    else{ res.status(404).json({error:'Product not found'})}    
      })
      .catch(error=>{res.status(400).send({error:error.message})})
   }  

//function will delete a product
const deleteProduct=(req,res)=>{
    const id=req.params
    Product.destroy({where:id})
      .then(productDelete=>{
        if(productDelete>0){res.json({message:'product removed successfully'}) }
        else{ res.json({message:'product not found'})}
          })  
          .catch(error=>{ res.status(404).json({error:error.message})})
        }

  // function that give us power to update the product
  const updateProduct=(req,res)=>{
    const id=req.params
    const {name,price,category,discreption,image,stock}=req.body
   Product.update(req.body)
   .then(productUpdated=>{
    if(productUpdated>0){
        res.json({message:'product updated successfully'})
    }
   })
   .catch(error=>{ res.status(404).json({error:error.message})})
  }
   

module.exports={
createProduct,
getAllProduct,
getProductById,
updateProduct,
deleteProduct
}