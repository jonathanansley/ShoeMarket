// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");


// routing to handlebars pages


// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.


  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // cms route loads cms.html
  app.get("/forms", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/forms.html"));
  });

  // blog route loads blog.html
  app.get("/charts", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/charts.html"));
  });

  // authors route loads author-manager.html
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/author-manager.html"));
  });

};
