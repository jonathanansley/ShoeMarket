module.exports = function(sequelize, DataTypes) {
  
  var Client = sequelize.define("Client", {

    name: DataTypes.STRING,
    
    address: DataTypes.STRING,


    city:DataTypes.STRING,

    state:DataTypes.STRING,


    zipcode:DataTypes.STRING,
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [10]
      }
    }, // end of phone
    
    email: {
      type: DataTypes.STRING,
      allowNull: true,
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
