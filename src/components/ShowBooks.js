import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { asyncBooksFromAPI } from '../redux/books/books';

const ShowBooks = () => {
  const bookArray = useSelector((state) => state.stBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncBooksFromAPI());
  }, [dispatch]);

  return (
    <ul className="ul-container">
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
