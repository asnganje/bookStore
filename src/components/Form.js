import React from 'react';
import '../styles/Form.css';

const AddForm = () => (
  <form className="form-main">
    <h1>ADD NEW BOOK</h1>
    <div className="form-input">
      <input type="text" placeholder="Book title" />
      <select name="categories" id="categories">
        <option value="Category 1">Category A</option>
        <option value="Category 2">Category B</option>
        <option value="Category 3">Category C</option>
      </select>
      <button type="button" className="add-bk-btn">ADD BOOK</button>
    </div>
  </form>
);

export default AddForm;
