
var express = require("express");
var router = express.Router();
var db = require("../models")
var Sequelize = require("sequelize")  
module.exports = function(app) {


  // app.get("/shoes", function(req, res) {
  //   // findAll returns all entries for a table when used with no options
  //   db.Shoe.findAll({}).then(function(dbShoes) {
  //     // We have access to the todos as an argument inside of the callback function
  //     res.json(dbShoes);
  //     console.log(json(dbshoesb))
  //   });
  // });




 app.post("/newItem", function(req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Shoe.create({

      type: req.body.type,
      msrp: req.body.msrp,
      seller_price:req.body.seller_price,
      size:req.body.size,
      quantity:req.body.quantity
      
    }).then(function(dbItem) {
      // We have access to the new todo as an argument inside of the callback function
      // res.json(dbItem);
            res.redirect("/forms")

    });
  });




 app.post("/newClient", function(req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Client.create({

      name: req.body.name,
      address: req.body.address,
      city:req.body.city,
      state:req.body.state,
      zipcode:req.body.zipcode,
      
    }).then(function(dbClient) {
      // We have access to the new todo as an argument inside of the callback function
      // res.json(dbClient);
      res.redirect("/tables")
    });
  });



app.post("/newOrder", function(req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Client.create({

      date_order_placed: req.body.date,
      comment: req.body.comment,
      clientId:req.body.clientId,
      shoeId:req.body.shoeId,
      
    }).then(function(dbOrder) {
      // We have access to the new todo as an argument inside of the callback function
      // res.json(dbClient);
      res.redirect("/orders")
    });
  });

app.get("/tables", function(req,res){


db.Client.findAll({




}).then(function(dbClients){


res.render("clients", {clients:dbClients})




})

})









app.get("/forms", function(req,res){


db.Shoe.findAll({




}).then(function(dbShoes){


res.render("inventory", {shoes:dbShoes})




})

})





app.get("/chartDataLine", function(req, res) {

db.Order.findAll({

  // attributes:['quantity','date_order_placed','msrp','seller_price'],
order:[['date_order_placed','DESC']],


  include:[{

    model: db.Shoe,
    // where:{id:Sequelize.col('order.id')}

  }]


}).then(function(dbShoes) {

  

      res.json(dbShoes);
    });


  
var test = 
{
  pie:[200, 100, 300],
  line:[[ 20, 59, 30, 81, 40, 55,535,2000,300,1000,1200,900],[10, 30, 90, 15, 56, 20]],
}

// res.json(test)

 });


app.get("/chartDataPie", function(req, res) {

db.Order.findAll({

  // attributes:['quantity','date_order_placed','msrp','seller_price'],
order:[['date_order_placed','DESC']],


  include:[{

    model: db.Shoe,
    // where:{id:Sequelize.col('order.id')}

  }]


}).then(function(dbShoes) {

  

      res.json(dbShoes);
    });




    // res.json(test);
 


// app.post("/")


});


}