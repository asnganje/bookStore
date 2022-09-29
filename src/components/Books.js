import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { fetchBooks } from '../redux/books/Api';
import '../styles/Books.css';
import Book from './Book';
import Form from './Form';

function AllBooks() {
  const books = useSelector((state) => state.books, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const dispatchBooks = books.map((book) => (
    <Book
      title={book.title}
      author={book.author}
      category={book.category}
      id={book.id}
      key={book.id}
    />
  ));

  return (
    <div>
      <section className="main">
        <section className="book-list">
          {dispatchBooks}
        </section>
        <Form />
      </section>
      ;
    </div>
  );
}

export default AllBooks;
