module.exports = function(sequelize, DataTypes) {
  var Shoe = sequelize.define("Shoe", {
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
