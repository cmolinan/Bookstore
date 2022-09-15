import React from 'react';
import PropTypes from 'prop-types';
import './book.css';

function Book(props) {
  const { book } = props;
  const { id, author, title } = book;

  return (
    <li key={id} className="bookLi">
      <div className="description">
        <p className="title">{title}</p>
        <p className="author">{author}</p>
      </div>
      <div className="otherInfo">
        <button type="button">Remove</button>
      </div>
    </li>
  );
}

export default Book;

Book.defaultProps = {
  book: {
    id: 0,
    title: '',
    author: '',
  },
};

Book.propTypes = {
  book:
    PropTypes.shape(
      {
        id: PropTypes.number,
        title: PropTypes.string,
        author: PropTypes.string,
      },
    ),
};
