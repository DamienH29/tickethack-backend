const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  traject: String,
  hour: Date,
  price: Number,
});

const Cart = mongoose.model("carts", cartSchema);

module.exports = Cart;
