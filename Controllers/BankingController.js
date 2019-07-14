const express = require("express");
const app = express();
const router = express.Router();
const nunjucks = require("nunjucks");

app.use(express.static("Assets"));

nunjucks.configure("Views", {
  autoescape: true,
  express: app
});

router.get("/", (req, res) => {
  res.send("This is the Banking Section");
});
router.get("/dashboard", (req, res) => {
  if (req.session.jwt) {
    return res.render("./Banking/index.njk");
  }
  return res.redirect("/");
});

module.exports = router;
