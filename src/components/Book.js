import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import '../styles/Book.css';
import progress from '../images/progress.png';
import { deleteBook } from '../redux/books/Api';

function Book(props) {
  const {
    id, title, author, category,
  } = props;
  const dispatch = useDispatch();
  return (
    <section id={id} className="book">
      <div className="book-container">
        <div className="block-left">
          <div className="info">
            <span className="categories">{category}</span>
            <h2>{title}</h2>
            <h3>{author}</h3>
          </div>
          <div className="btns">
            <button type="button" className="btn-outline">
              Comments
            </button>
            <div className="vertical-divider" />
            <button
              type="button"
              className="btn-outline"
              onClick={() => dispatch(deleteBook(id))}
            >
              Remove
            </button>
            <div className="vertical-divider" />
            <button type="button" className="btn-outline">
              Edit
            </button>
          </div>
        </div>
        <div className="block-row">
          <div className="stats">
            <figure>
              <img
                className="progress-circle"
                alt="progress-circle"
                src={progress}
              />
            </figure>
            <div className="progress-text">
              <span className="stat-number">64%</span>
              <span className="stat-text">Completed</span>
            </div>
          </div>
          <div className="progress-divider" />
          <div className="progress-info">
            <span className="chapter-title">Current chapter</span>
            <span className="chapter-number">Chapter 3</span>
            <button type="button" className="update-btn">
              UPDATE PROGRESS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

Book.defaultProps = {
  id: '0',
  title: null,
  author: null,
  category: null,
};

Book.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
};
export default Book;
