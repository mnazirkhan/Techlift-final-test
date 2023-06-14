import React, { useState } from 'react';
import './Card.css'
function Card() {
  const [bookName, setBookName] = useState('');
  const [writerName, setWriterName] = useState('');

  const handleBookChange = (e) => {
    setBookName(e.target.value);
  };

  const handleWriterChange = (e) => {
    setWriterName(e.target.value);
  };

  const handleAddBook = async () => {
    const bookData = {
        title: bookName, 
        writer:writerName, 
      };
    await  fetch('/api/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Book added successfully:', data);
          setBookName('')
          setWriterName('')
          // Handle the successful addition of the book and provide a response if needed
        })
        .catch((error) => {
          console.error('Failed to add the book:', error);
          // Handle the error and provide an appropriate response
        });
      
};

  return (
    <div className="card">
      <div className="input-box">
        <input
          type="text"
          placeholder="Book Name"
          value={bookName}
          onChange={handleBookChange}
        />
      </div>
      <div className="input-box">
        <input
          type="text"
          placeholder="Writer Name"
          value={writerName}
          onChange={handleWriterChange}
        />
      </div>
      <button className='btn' onClick={handleAddBook}>Add Book</button>
    </div>
  );
}

export default Card;
