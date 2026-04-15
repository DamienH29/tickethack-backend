var express = require("express");
var router = express.Router();
var Trip = require("../models/trips");
var Cart = require("../models/carts");
const moment = require("moment");

/* GET trips listing for departure/arrival/date */
router.get("/:departure/:arrival/:date", function (req, res) {
  const { departure, arrival, date } = req.params;

  // On crée une plage de dates pour la journée entière
  const startOfDay = moment(date).startOf("day").toDate();
  const endOfDay = moment(date).endOf("day").toDate();

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

/* POST add to cart */
router.post("/cart", (req, res) => {
  const newTrip = new Cart({
    traject: req.body.traject,
    hour: req.body.hour,
    price: req.body.price,
  });
  newTrip.save().then(() => {
    res.json({ result: true });
  });
});

/* GET add to cart */
router.get("/cart", (req, res) => {
  Cart.find()
    .then((data) => res.json({ result: true, cart: data }));
});

/* DELETE delete trip in cart */
router.delete("/cart/:id", (req, res) => {
  Cart.deleteOne({ _id: req.params.id }).then((data) => {
    if (data.deletedCount > 0) {
      res.json({ result: true });
    } else {
      res.json({ result: false, error: "Trip not found" });
    }
  });
});

module.exports = router;
