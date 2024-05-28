const {DataTypes}=require("sequelize")

module.exports=(sequelize,Datatypes) =>{
    const  Product =  connection.define('Product', {
        name: 
        { type: DataTypes.STRING,
           allowNull: false },
        price: 
        { type: DataTypes.FLOAT, 
          allowNull: false },
        category: 
        { type: DataTypes.STRING, 
          allowNull: false },
        description: 
        { type: DataTypes.TEXT,
           allowNull: false },
        image: 
        { type: DataTypes.STRING,
           allowNull: true },
           stock:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
         
           }
      })
      return Product;
}