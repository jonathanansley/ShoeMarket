module.exports = function(sequelize, DataTypes) {
  
  var Client = sequelize.define("Client", {

    name: DataTypes.STRING,
    
    address: DataTypes.STRING,

    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [10]
      }
    }, // end of phone
    
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [3, 150]
    }, // end of email

  }, // end of columns

    {
      timestamps: false
    }); // end of Client table

  Client.associate = function(models) {
    Client.hasMany(models.Order, {
      onDelete: "cascade"
    });
  };

  return Client;
};
