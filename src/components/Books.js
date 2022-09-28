import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { fetchBooks } from '../redux/books/Api';
import '../styles/Books.css';
import Book from './Book';
import Form from './Form';

/* eslint-disable */
const AllBooks = () => {
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
      <section>
        <section className="book-list">
          {/* <Book
            title="Hunger Games"
            author="Susana Collins"
            categories="Action"
          /> */}
          {dispatchBooks}
        </section>
        <Form />
      </section>
      ;
    </div>
  );
};

export default AllBooks;
