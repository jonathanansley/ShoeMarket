
var express = require("express");
var router = express.Router();
var db = require("../models")
var Sequelize = require("sequelize")  
module.exports = function(app) {


  app.get("/shoes", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Shoe.findAll({}).then(function(dbShoes) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbShoes);
      console.log(json(dbshoesb))
    });
  });











app.get("/chartDataLine", function(req, res) {

db.Order.findAll({

  // attributes:['quantity','date_order_placed','msrp','seller_price'],

  include:[{

    model: db.Shoe,
    // where:{id:Sequelize.col('order.id')}

  }]


}).then(function(dbShoes) {

  

      // res.json(dbShoes);
    });


  
var test = 
{
  pie:[200, 100, 300],
  line:[[ 20, 59, 30, 81, 40, 55,535,2000,300,1000,1200,900],[10, 30, 90, 15, 56, 20]],
}

res.json(test)

 });


app.get("/chartDataPie", function(req, res) {

// db.Order.findAll({

//   // attributes:['quantity','date_order_placed','msrp','seller_price'],

//   include:[{

//     model: db.Shoe,
//     // where:{id:Sequelize.col('order.id')}

//   }]


// }).then(function(dbShoes) {

  
var test = 
{
  pie:[200, 100, 300],
  line:[[ 20, 59, 30, 81, 40, 55,535,2000,300,1000,1200,900],[10, 30, 90, 15, 56, 20]],
}

      res.json(test);
  

 });









    // res.json(test);
 


// app.post("/")


}


