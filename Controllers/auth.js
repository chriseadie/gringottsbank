const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const AuthTokenHandler = require("../code/extentions.js");
const userbank = require("../code/GetUser.js");
const fs = require("fs");
const allusers = require("../LocalData/login.json");
var { newusermodel } = require("../Model/registernewusermodel");

const _auth = new AuthTokenHandler();
const _user = new userbank();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

const redirectLogin = (req, res, next) => {
  console.log(req.session.id);
  if (!req.session.jwt) {
    res.redirect("/");
  } else {
    next();
  }
};

app.route("/login").post(async (req, res) => {
  if (req.body.username && req.body.password) {
    var user = await _user.getUserByKey("newRandowUser");
    if (
      user.email === req.body.username &&
      user.password === req.body.password
    ) {
      var jtoken = await _auth.encryption();
      req.session.jwt = jtoken;
      res.redirect("/bank/dashboard");
    } else {
      res.end();
    }
  }
  res.end();
});

app.route("/registerNewUser").post(async (req, res) => {
  var user = req.body;
  console.log(req.body);
  if (
    user.firstname.length > 0 &&
    user.surname.length > 0 &&
    user.email.length > 0 &&
    user.password.length > 0
  ) {
    newusermodel = {
      firstName: user.firstname,
      surname: user.surname,
      password: user.password,
      email: user.email
    };
    var test = Object.assign(allusers, { newusers: newusermodel });
    fs.writeFileSync("./LocalData/login.json", JSON.stringify(test), err => {
      if (err) {
        console.log(err);
      }
      res.send("New User Added");
    });
  }
  res.redirect("/login");
});
module.exports = app;
