const fs = require("fs");
const express = require("express");
const app = express();
const router = express.Router();
app.use(express.static("Assets"));

router.get("/", (req, res) => {
  res.render("./Homepage/index.njk");
});

router.get("/login", (req, res) => {
  res.render("./Homepage/login.njk");
});

router.get("/dailyprofit", (req, res) => {
  console.log(req.session);
  fs.readFile("./LocalData/BlogPostsMock.json", (err, data) => {
    if (err) {
      console.log(err);
    }
    res.render("./Homepage/blog.njk", JSON.parse(data));
  });
});

router.get("/register", (req, res) => {
  res.render("./Homepage/register.njk");
});

module.exports = router;


