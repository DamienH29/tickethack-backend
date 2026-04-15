var express = require("express");
var router = express.Router();
var Trip = require("../models/trips");
const moment = require('moment');
var Book = require("../models/books");

/* GET trips listing for departure/arrival/date */
router.get("/:departure/:arrival/:date", function (req, res) {
    const { departure, arrival, date } = req.params;

    // On crée une plage de dates pour la journée entière
    const startOfDay = moment(date).startOf('day').toDate();
    const endOfDay = moment(date).endOf('day').toDate();

    Trip.find({
        departure: { $regex: new RegExp(departure, "i") }, // "i" pour ignorer la casse
        arrival: { $regex: new RegExp(arrival, "i") },
        date: { $gte: startOfDay, $lte: endOfDay },
    }).then((data) => {
        // Important : On renvoie result: false si le tableau est vide
        if (data.length > 0) {
            res.json({ result: true, trips: data });
        } else {
            res.json({ result: false, trips: [] });
        }
    });
});

/* GET go to cart */
router.get("/cart", function (req, res) {
});

/* POST put to bookings */
router.post

/* GET go to bookings */
router.get("/bookings", function (req, res) {
  Cart.find()
  .then((data) => {
    if(data.length > 0) {
      res.json({result : true, bookings : data})
    } else {
    res.json({result : false, error : "No bookings found."})
    }
  })
});

/* GET go to main page */
router.get("/", function (req, res) {
});

module.exports = router;
