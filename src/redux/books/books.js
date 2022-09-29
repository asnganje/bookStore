const ADD_BOOK = 'src/redux/books/ADD_BOOK';
const REMOVE_BOOK = 'src/redux/books/REMOVE_BOOK';
const LOAD_API_BOOK = 'ADD_API_BOOK';

const initialState = [];

// Reducer
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${ADD_BOOK}/fulfilled`:
      return [...state, action.payload];

    case `${REMOVE_BOOK}/fulfilled`:
      return state.filter((book) => book.id !== action.payload);

    case `${LOAD_API_BOOK}/fulfilled`:
      return [...action.payload];

    default:
      return state;
  }
};

// Action Creators
export const addingBook = (title, author, category, id) => ({
  type: ADD_BOOK,
  title,
  author,
  category,
  id,
});

export const removingBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export { LOAD_API_BOOK, ADD_BOOK, REMOVE_BOOK };
export default bookReducer;
