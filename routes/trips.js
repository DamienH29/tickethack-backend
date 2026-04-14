var express = require('express');
var router = express.Router();
var Trip = require("../models/trips")

/* GET trips listing. */
router.get('/', function(req, res) {
  res.send({ result: true, trips: data });
});

module.exports = router;
