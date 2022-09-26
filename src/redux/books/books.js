const ADD = 'src/redux/books/ADD';
const REMOVE = 'src/redux/books/REMOVE';
const initialState = [];
/* eslint-disable*/
const bookReducer = (state = initialState, action) => {
    /* eslint-enable */
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          title: action.title,
          author: action.author,
          category: action.category,
          id: action.id,
        },
      ];

    case REMOVE:
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
  type: ADD,
  title,
  author,
  category,
  id,
});

export const removingBook = (id) => ({
  type: REMOVE,
  id,
});

export default bookReducer;
