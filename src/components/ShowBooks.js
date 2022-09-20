import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const ShowBooks = () => {
  const bookArray = useSelector((state) => state.stBooks);
  return (
    <ul>
      {bookArray.map((book) => (
        <Book
          key={book.id}
          book={book}
        />
      ))}
    </ul>
  );
};

export default ShowBooks;
