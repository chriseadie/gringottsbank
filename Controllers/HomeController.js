const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("./Homepage/index.njk");
});

module.exports = router;
