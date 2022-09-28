const ADD_BOOK = 'src/redux/books/ADD_BOOK';
const REMOVE_BOOK = 'src/redux/books/REMOVE_BOOK';
const initialState = [
  {
    id: '1',
    title: 'Mastering Computers',
    author: 'Graham Wright',
    category: 'Programming',
  },
  {
    id: '2',
    title: 'East Africa: An Introductory History',
    author: 'Robert M. Maxon ',
    category: 'History',
  },
  {
    id: '3',
    title: 'Stand-Up Comedy: The Book',
    author: 'Judy Carter',
    category: 'Comedy',
  },
];

// Reducer
/* eslint-disable */
const bookReducer = (state = initialState, action) => {
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

export default bookReducer;
