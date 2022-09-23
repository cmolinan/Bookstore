import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import './addbook.css';
import { asyncAddNewBook } from '../redux/books/books';

const AddBook = () => {
  const [inputText, setInputText] = useState({ title: '', author: '' });
  const dispatch = useDispatch();
  const infoCategories = ['Action', 'Romantic', 'Science Fiction', 'Economy'];
  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const newBook = {
      item_id: uuidv4(),
      title: inputText.title,
      author: inputText.author,
      category: infoCategories[Math.floor(Math.random() * 100) % 4],
    };

    dispatch(asyncAddNewBook(newBook));

    setInputText({
      title: '',
      author: '',
      category: '',
    });
  };

  return (
    <div className="addBookContainer">
      <div className="dividerLow" />
      <h3 className="form-title">ADD NEW BOOK</h3>
      <form className="form-container" onSubmit={submitHandler}>
        <input className="inputTextBox input" placeholder="Book title" name="title" onChange={onChange} required value={inputText.title} />
        <input className="inputTextBox input" placeholder="Author" name="author" onChange={onChange} required value={inputText.author} />
        <button className="form-button" type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBook;
