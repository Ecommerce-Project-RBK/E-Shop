<<<<<<< HEAD
module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define("Admin", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      phoneNumber: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Admin;
  };
=======
>>>>>>> 05e116f66a3c8b10511aa7b134dcd52b18a9da64
