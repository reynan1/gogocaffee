const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("index.ejs");
});

router.get("/account/registration", (req, res, next) => {
  res.render("./account/registration.ejs");
});

router.get("/account/login", (req, res, next) => {
  res.render("./account/registration.ejs");
});

module.exports = router;
