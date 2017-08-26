module.exports = function(sequelize, DataTypes) {
  var Order = sequelize.define("Order", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  Order.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Order.belongsTo(models.Client, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Order;
};
