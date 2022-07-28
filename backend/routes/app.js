require("../db/mongoose");

const express = require("express");
const router = express.Router();
const Register = require("../model/resgistration");

router.get("/", (req, res, next) => {
  res.render("index.ejs");
});

router.get("/account/registration", (req, res, next) => {
  res.render("./account/registration.ejs");
});

router.get("/account/login", (req, res, next) => {
  res.render("./account/registration.ejs");
});

router.post("/account/registration/verify", (req, res) => {
  const register = new Register(req.body);

  register
    .save()
    .then(() => {
      res.send("Your data has been register to our server ");
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

module.exports = router;
