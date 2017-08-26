module.exports = function(sequelize, DataTypes) {
  var Client = sequelize.define("Client", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING
  });

  Client.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Client.hasMany(models.Order, {
      onDelete: "cascade"
    });
  };

  return Client;
};
