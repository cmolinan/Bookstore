import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const ShowBooks = (props) => {
  const { bookArray } = props;

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

ShowBooks.defaultProps = {
  bookArray: [],
};

ShowBooks.propTypes = {
  bookArray: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.number,
        title: PropTypes.string,
        author: PropTypes.string,
      },
    ),
  ),
};
