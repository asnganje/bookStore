import { createAsyncThunk } from '@reduxjs/toolkit';
import { ADD_BOOK, REMOVE_BOOK, LOAD_API_BOOK } from './books';

// Url
const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const uniqueId = '6nBz9Vc2TClKqeb9euQa';
const url = `${baseUrl}/apps/${uniqueId}/books/`;

const fetchBooks = createAsyncThunk(LOAD_API_BOOK, async () => {
  const response = await fetch(url);
  const data = await response.json();
  const result = Object.keys(data).map((key) => ({ id: key, ...data[key][0] }));
  return result;
});

const addNewBook = createAsyncThunk(ADD_BOOK, async (newBook) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      item_id: `${newBook.id}`,
      title: `${newBook.title}`,
      author: `${newBook.author}`,
      category: `${newBook.category}`,
    }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
  return newBook;
});

const deleteBook = createAsyncThunk(REMOVE_BOOK, async (id) => {
  await fetch(`${url}${id}`, { method: 'DELETE' });
  return id;
});

export { fetchBooks, addNewBook, deleteBook };
