const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  traject: String,
  hour: String,
  price: String,
});

const Cart = mongoose.model("carts", cartSchema);

module.exports = Cart;
