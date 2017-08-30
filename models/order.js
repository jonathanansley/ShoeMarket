module.exports = function(sequelize, DataTypes) {
  
  var Order = sequelize.define("Order", {

    date_order_placed: {
      type: DataTypes.DATE, // I had trouble getting type: Sequelize.DATE to
      allowNull: false,
      defaultValue: new Date()
    }, // end of date_order_placed

    quantity: DataTypes.STRING,

    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    } // end of comment

  }, // end of columns

  {
    timestamps: false
  }); // end of Order table

  Order.associate = function(models) {
    Order.belongsTo(models.Client, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  // Order.associate = function(models) {
  //   Order.hasMany(models.Shoe, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return Order;
};
