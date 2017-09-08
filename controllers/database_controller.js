
var express = require("express");
var router = express.Router();
var db = require("../models")


module.exports = function(app) {


  app.get("/shoes", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Shoe.findAll({}).then(function(dbShoes) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbShoes);
      console.log(json(dbshoesb))
    });
  });







app.get("/chartData", function(req, res) {

// db.Shoe.findAll({

//   attributes:['quantity','date_order_placed','msrp','seller_price'],

//   include:[{

//     model: Order,
//     where:{id:Sequelize.col('order.id')}

//   }]


// }).then(function(dbShoes) {

  

//       res.json(dbShoes);
//     });




var test = 
{
  pie:[200, 100, 300],
  line:[[20, 59, 30, 81, 40, 55],[10, 30, 90, 15, 56, 20]],
}

    res.json(test);
  });


// app.post("/")


}



// router.post('/burgers', function(req, res) {
//   burger.create([
//     'burger_name'
//   ], [
//     req.body.burger_name
//   ], function(data) {
//     res.redirect('/');
//   });
// });

// router.put('/burgers/:id', function(req, res) {
//   var condition = 'id = ' + req.params.id;

//   burger.update({
//     devoured: true
//   }, condition, function(data) {
//     res.redirect('/');
//   });
// });

// // Export routes for server.js to use.
// module.exports = router;
