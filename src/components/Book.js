import React from 'react';
import PropTypes from 'prop-types';
import './book.css';
import { useDispatch } from 'react-redux';
import { asyncRemoveBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const { book } = props;
  const {
    id, author, title, category,
  } = book;

  const handleRemove = () => {
    dispatch(asyncRemoveBook(id));
  };

  const progress = Math.floor(Math.random() * 100);
  const chapter = Math.floor(Math.random() * 20);

  return (
    <li key={id}>
      <div className="bookLi">
        <div className="description">
          <p className="category">{category}</p>
          <p className="title">{title}</p>
          <p className="author">{author}</p>
          <div className="buttons-div">
            <button type="button" className="button">Comments</button>
            <div className="divider"> </div>
            <button type="button" className="button" onClick={handleRemove}>Remove</button>
            <div className="divider"> </div>
            <button type="button" className="button">Edit</button>
          </div>
        </div>
        <div className="progress-container">
          <div className="circular-progress-container">
            <div className="circular-progress" />
          </div>
          <div className="progress-stat">
            <p className="percent-complete">
              {progress}
              %
            </p>
            <p className="completed">Completed</p>
          </div>
          <div className="progress-divider" />
          <div className="current-chapter-container">
            <div>
              <p className="current-chapter-label">CURRENT CHAPTER</p>
              <p className="current-chapter">
                Chapter` `
                {chapter}
              </p>
            </div>
            <div>
              <button className="primary-button" type="button">UPDATE PROGRESS</button>
            </div>
          </div>
        </div>
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
    category: '',
  },
};

Book.propTypes = {
  book:
    PropTypes.shape(
      {
        id: PropTypes.string,
        title: PropTypes.string,
        author: PropTypes.string,
        category: PropTypes.string,
      },
    ),
};
