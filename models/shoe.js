module.exports = function(sequelize, DataTypes) {
  var Shoe = sequelize.define("Shoe", {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    size: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    phone: DataTypes.STRING,
    email: DataTypes.STRING
    // msrp
    // quantity
    // seller price

  });

  Shoe.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Shoe.belongsTo(models.Order, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Shoe;
};
