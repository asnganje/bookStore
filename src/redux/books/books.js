const ADD_BOOK = 'src/redux/books/ADD_BOOK';
const REMOVE_BOOK = 'src/redux/books/REMOVE_BOOK';
const initialState = [];
/* eslint-disable*/
const bookReducer = (state = initialState, action) => {
    /* eslint-enable */
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          title: action.title,
          author: action.author,
          category: action.category,
          id: action.id,
        },
      ];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);

    default:
      return state;
  }
};

export const addingBook = (
/* eslint-disable */
  title = 'Redux Basics',
  author = 'Nganje',
  category = 'Action',
  id,
) => ({
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

export default bookReducer;
