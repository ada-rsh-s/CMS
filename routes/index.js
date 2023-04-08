var express = require("express");
var router = express.Router();
var indexHelpers = require("../helpers/indexHelpers");
// GET home page.
router.get("/", function (req, res, next) {
  indexHelpers.getDetails().then((person) => {
    res.render("index", { person });
  });
});
router.get("/add", function (req, res, next) {
  res.render("addperson");
});

router.post("/add", (req, res) => {
  (req.body.date =
    ("0" + new Date().getDate()).slice(-2) +
    "-" +
    ("0" + (new Date().getMonth() + 1)).slice(-2) +
    "-" +
    new Date().getFullYear()),
    indexHelpers.addPerson(req.body).then(() => {
      res.redirect("/");
    });
});

router.get("/edit/:id", (req, res) => {
  indexHelpers.getPerson(req.params.id).then((person) => {
    res.render("editperson", { person });
  });
});
router.post("/edit/:id", (req, res) => {
  indexHelpers.editPerson(req.params.id, req.body).then(() => {
    res.redirect("/");
  });
});
router.get("/delete/:id", (req, res) => {
  indexHelpers.deletePerson(req.params.id).then(() => {
    res.redirect("/");
  });
});

module.exports = router;
