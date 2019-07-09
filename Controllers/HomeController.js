const express = require("express");
const app = express();
const router = express.Router();
app.use(express.static("Assets"));

router.get("/", (req, res) => {
  res.render("./Homepage/index.njk");
});

module.exports = router;
