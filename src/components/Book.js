import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Book.css';
import progress from '../images/progress.png';

const Book = (props) => {
  const { title, author, categories } = props;
  return (
    <section className="book">
      <div className="book-container">
        <div className="block-left">
          <div className="info">
            <span className="categories">{categories}</span>
            <h2>{title}</h2>
            <h3>{author}</h3>
          </div>
          <div className="btns">
            <button type="button" className="btn-outline">
              Comments
            </button>
            <div className="vertical-divider" />
            <button type="button" className="btn-outline">
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
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  categories: PropTypes.string.isRequired,
};
export default Book;
