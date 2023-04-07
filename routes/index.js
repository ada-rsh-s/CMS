var express = require('express');
var router = express.Router();
var indexHelpers = require("../helpers/indexHelpers")
// GET home page.
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get("/add", function (req, res, next) {
  res.render("addperson");
});



module.exports = router;
