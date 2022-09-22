import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { asyncAddNewBook } from '../redux/books/books';

const AddBook = () => {
  const [inputText, setInputText] = useState({ title: '', author: '' });
  const dispatch = useDispatch();

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
      category: 'default',
    };

    dispatch(asyncAddNewBook(newBook));

    setInputText({
      title: '',
      author: '',
    });
  };

  return (
    <>
      <h3 className="heading">ADD NEW BOOK</h3>
      <form className="form-container" onSubmit={submitHandler}>
        <input
          type="text"
          className="inputTextBox"
          placeholder="Book"
          value={inputText.title}
          name="title"
          onChange={onChange}
          required
        />
        <input
          type="text"
          className="inputTextBox"
          placeholder="Author"
          value={inputText.author}
          name="author"
          onChange={onChange}
          required
        />
        <button type="submit"> Add Book</button>
      </form>
    </>
  );
};

export default AddBook;
