const mongoose = require("mongoose");
const validator = require("validator");

const Register = mongoose.model("register", {
  firstname: {
    type: String,
    required: true,
    trim: true,
  },

  lastname: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      } else {
        console.log("Correct Email!");
      }
    },
  },

  mobile_number: {
    type: String,
    required: true,
    trim: true,
    min: 10,
    max: 10,
  },

  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("Error choose other password!");
      } else {
        console.log("Password correctly!");
      }
    },
  },
});

module.exports = Register;
