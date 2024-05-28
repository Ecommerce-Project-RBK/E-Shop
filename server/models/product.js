

module.exports=(sequelize,Datatypes) =>{
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
           stock:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
         
           }
      })
      return Product;
}