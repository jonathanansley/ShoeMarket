module.exports = function(sequelize, DataTypes) {

  var Shoe = sequelize.define("Shoe", {
    
  subBrand:{
     type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 60]
      }
  },


    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 60]
      }
    }, // end of type

    size: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    }, // end of size

    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      default: 0
    }, // end of quantity

    msrp: DataTypes.INTEGER, // I had trouble getting DECIMAL to work.

    seller_price: DataTypes.INTEGER, // I had trouble getting DECIMAL to work.

  }, // end of columns

  {
    timestamps: false
  }); // end of Shoe table

  // Shoe.associate = function(models) {
  //   Shoe.belongsTo(models.Order, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });

  return Shoe;
};



// var order = {
//   date: '',
//   shoesInOrder: [
//     quantity: 5,
//     item: {
//       price: 5,
      
//     }
//   ]
// }
