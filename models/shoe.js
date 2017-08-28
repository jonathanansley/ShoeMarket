module.exports = function(sequelize, DataTypes) {
  var Shoe = sequelize.define("Shoe", {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 60]
      }
    },

    size: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },

    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [10]
    },
    
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [2, 150]
    },
    
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      default: 0
    },

    msrp: DataTypes.INTEGER, // I had trouble getting DECIMAL to work.

    seller_price: DataTypes.INTEGER, // I had trouble getting DECIMAL to work.

  }, {
    timestamps: false
  });

  Shoe.associate = function(models) {
    Shoe.belongsTo(models.Order, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Shoe;
};
