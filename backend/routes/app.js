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

router.get("/myadmin", (req, res, next) => {
  Register.find({})
    .then((users) => {
      res.render("./admin/myadmin.ejs", {
        data: users,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/myadmin/dashboard", (req, res, next) => {
    res.render("./admin/component/dashboard");
});

router.get("/myadmin/customer", (req, res, next) => {
  Register.find({})
  .then((users) => {
    res.render("./admin/component/customer", {
      data: users,
    });
  })
  .catch((error) => {
    console.log(error);
  });
});

router.get("/search-id", (req, res, next) => {
  const _id = req.query.id;
  
  Register.findById(_id)
  .then((users) => {
      if(!users) {
        res.status(302).send(["Data is not found!"]);

        console.log("may mali: :" + users);
      }

      res.status(200).send(users)
  })
  .catch((error) => {
    console.log(error)
  });
});

router.get("/myadmin/customer/search-id", (req, res, next) => {
  res.render("./admin/component/customer/customer-search-id");
});

router.get("/myadmin/orders", (req, res, next) => {
  res.render("./admin/component/orders");
});

router.get("/myadmin/analytics", (req, res, next) => {
  res.render("./admin/component/analytics");
});

router.get("/myadmin/message", (req, res, next) => {
  res.render("./admin/component/message");
});

router.get("/myadmin/products", (req, res, next) => {
  res.render("./admin/component/products");
});

router.get("/myadmin/reports", (req, res, next) => {
  res.render("./admin/component/reports");
});

router.get("/myadmin/setting", (req, res, next) => {
  res.render("./admin/component/setting");
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
