import React from 'react';
import PropTypes from 'prop-types';
import './book.css';
import { useDispatch } from 'react-redux';
import { asyncRemoveBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const { book } = props;
  const { id, author, title } = book;

  const handleRemove = () => {
    dispatch(asyncRemoveBook(id));
  };

  return (
    <li key={id} className="bookLi">
      <div className="description">
        <p className="title">{title}</p>
        <p className="author">{author}</p>
      </div>
      <div className="otherInfo">
        <button type="button" onClick={handleRemove}>Remove</button>
      </div>
    </li>
  );
};

export default Book;

Book.defaultProps = {
  book: {
    id: '',
    title: '',
    author: '',
  },
};

Book.propTypes = {
  book:
    PropTypes.shape(
      {
        id: PropTypes.string,
        title: PropTypes.string,
        author: PropTypes.string,
      },
    ),
};
