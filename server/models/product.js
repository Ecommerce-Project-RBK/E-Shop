module.exports=(sequelize,DataTypes) =>{
   const  Product =  sequelize.define('Product', {
       name: 
       { type: DataTypes.STRING,
          allowNull: false },
       price: 
       { type: DataTypes.INTEGER,  
         allowNull: false },
       category: 
       { type: DataTypes.STRING, 
         allowNull: false },
       description: 
       { type: DataTypes.STRING,
          allowNull: false },
       image: 
       { type: DataTypes.STRING,
          allowNull: true },
          image1: 
          { type: DataTypes.STRING,
             allowNull: true },
             image2: 
             { type: DataTypes.STRING,
                allowNull: true },
                image3: 
                { type: DataTypes.STRING,
                   allowNull: true },
          stock:{
           type: DataTypes.INTEGER,
           allowNull: true,
           defaultValue: 0,
        },
        sales: {
           type: DataTypes.INTEGER,
           allowNull: true,
           defaultValue: 0
       }
     })
     return Product;
}