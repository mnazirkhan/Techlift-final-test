const Book = require('../models/BookSchema');
// const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();

router.post('/books', async (req, res) => {
  const { title, writer } = req.body;

  // Check if the title already exists in the database
  const existingBook = await Book.findOne({ title });
  if (existingBook) {
    return res.status(400).json({ msg: 'Book already exists' });
  }

  // Create a new instance of the Book model
  const newBook = new Book({
    title,
    writer,
  });

  // Save the new book to the database
  try {
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to add the book.' });
  }
});

// Rest of the code remains the same

module.exports = router;