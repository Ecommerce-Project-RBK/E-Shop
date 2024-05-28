const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("eshop", "Selim", "Maken_wochen987", {
  host: "localhost",
  dialect: "mysql",
});



const db={};
db.Sequelize=Sequelize
db.sequelize=sequelize
db.Admin = require("../models/admin.js")(sequelize,DataTypes)
db.Buyer = require("../models/buyer.js")(sequelize,DataTypes)
db.Seller = require("../models/seller.js")(sequelize,DataTypes)
db.Product = require("../models/product.js")(sequelize,DataTypes)



sequelize.authenticate()
  .sync({ force: true })
  .then(() => {
    console.log("phrase table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports=db;