const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  departure: {type: String, required: true},
  arrival: {type: String, required: true},
  date: Date,
  price: Number,
});

const Trip = mongoose.model("trips", tripSchema);

module.exports = Trip;
