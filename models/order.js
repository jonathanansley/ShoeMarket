module.exports = function(sequelize, DataTypes) {
  var Order = sequelize.define("Order", {
    date: DataTypes.STRING,
    quantity: DataTypes.STRING,
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  Order.associate = function(models) {
    // We're saying that an Order should belong to a Client.
    // An Order cannot be created without a Client due to the foreign key constraint.
    Order.belongsTo(models.Client, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Order;
};
