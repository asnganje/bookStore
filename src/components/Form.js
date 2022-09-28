import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
// import { addingBook } from '../redux/books/books';
import { addNewBook } from '../redux/books/Api';
import '../styles/Form.css';

/* eslint-disable */
const Form = () => {
  // Set States
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('DEFAULT');
  const dispatch = useDispatch();

  // Handle Submit book
  const handleAddBook = () => {
    if (title === '' || author === '' || category !== 'DEFAULT') {
      const id = nanoid();
      const newBook = {
        title,
        author,
        category,
        id,
      };
      dispatch(addNewBook(newBook));
      setTitle('');
      setAuthor('');
      setCategory('DEFAULT');
    }
  };

  return (
    <form className="form-main">
      <h1>ADD NEW BOOK</h1>
      <div className="form-input">
        <input
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <select
          name="categories"
          id="categories"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option disabled value="DEFAULT">
            select an option
          </option>
          <option value="History">History</option>
          <option value="Drama">Drama</option>
          <option value="Comedy">Comedy</option>
          <option value="Computers">Programming</option>
          <option value="Engineering">Science</option>
        </select>
        <button type="button" className="add-bk-btn" onClick={handleAddBook}>
          ADD BOOK
        </button>
      </div>
    </form>
  );
};

export default Form;
