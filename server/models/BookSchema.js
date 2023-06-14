const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    writer: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
});
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
