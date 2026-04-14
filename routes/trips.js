var express = require("express");
var router = express.Router();
var Trip = require("../models/trips");

/* GET trips listing for departure/arrival/date */
router.get("/trips", function (req, res) {
  Trip.find({
    departure: req.body.departure,
    arrival: req.body.arrival,
    date: req.body.date,
  }).then((data) => {
    res.json({ result: true, trips: data });
  });
});

/* GET go to cart */
router.get("/cart", function (req, res) {
});

/* GET go to bookings */
router.get("/bookings", function (req, res) {
});

/* GET go to main page */
router.get("/", function (req, res) {
});

module.exports = router;
