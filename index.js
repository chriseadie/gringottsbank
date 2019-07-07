const express = require("express");
const app = express();
const nunjucks = require("nunjucks");

const HomeController = require("./Controllers/HomeController.js");
const BankingController = require("./Controllers/BankingController.js");

app.use(express.static("Assets"));
nunjucks.configure("./Views", {
  autoescape: true,
  express: app,
  watch: true
});

app.use("/", HomeController);
app.use("/bank", BankingController);

app.listen(8080, null, () => {
  console.log("Port launched on 8080");
});
