const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const AuthTokenHandler = require("../code/extentions.js");
const _auth = new AuthTokenHandler();

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
    var jtoken = await _auth.encryption();
    req.session.jwt = jtoken;
    res.redirect("/bank/dashboard");
  }
});

app.route("/testing").get(redirectLogin, (req, res) => {
  res.send("Hi");
});
module.exports = app;
