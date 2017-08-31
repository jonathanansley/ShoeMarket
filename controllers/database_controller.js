
var express = require("express");
var router = express.Router();
var db = require("../models")


module.exports = function(app) {

  app.get("/shoes", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Shoe.findAll({}).then(function(dbShoes) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbShoes);
      console.log(dbshoes)
    });
  });

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
