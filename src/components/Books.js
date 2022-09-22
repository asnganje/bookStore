import React from 'react';
import '../styles/Books.css';
import Book from './Book';
import Form from './Form';

function AllBooks() {
  return (
    <section>
      <section className="books">
        <Book title="Hunger Games" author="Susana Collins" categories="Action" />
        <Book title="Dune" author="Frank Herbelt" categories="Science Fiction" />
        <Book
          title="Capital In The Tweenty Century"
          author="Susana Collin"
          categories="Economy"
        />
      </section>
      <Form />
    </section>
  );
}

export default AllBooks;
