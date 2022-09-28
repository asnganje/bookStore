import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import '../styles/Books.css';
import Book from './Book';
import Form from './Form';

function AllBooks() {
  const books = useSelector((state) => state.books, shallowEqual);

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
          {dispatchBooks}
        </section>
        <Form />
      </section>
      ;
    </div>
  );
}

export default AllBooks;
