const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    traject: String,
    hour: String,
    price: Number,
});

const Book = mongoose.model("books", bookSchema);

module.exports = Book;
