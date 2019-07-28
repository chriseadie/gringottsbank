const express = require("express");
const app = express();
const nunjucks = require("nunjucks");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const HomeController = require("./Controllers/HomeController.js");
const BankingController = require("./Controllers/BankingController.js");
const ApiBridgeController = require("./Controllers/auth.js");

app.use(express.static("Assets"));
nunjucks.configure("./Views", {
  autoescape: true,
  express: app,
  watch: true
});
app.use(cookieParser());
app.use(
  session({
    secret: "SuperSecretKey",
    saveUninitialized: true,
    resave: true,
    cookie: {
      maxAge: 2400000
    }
  })
);

app.use("/", HomeController);
app.use("/bank", BankingController);
app.use("/auth", ApiBridgeController);

app.listen(9000, null, () => {
  console.log("Port launched on 9000");
});
