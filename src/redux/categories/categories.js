const CHECK = 'src/redux/categories/CHECK';

const initialState = [];
/* eslint-disable*/
const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK:
      return 'Under Construction';
    default:
      return state;
  }
};

const checkState = () => ({
  type: CHECK,
});

export { checkState };
export default categoriesReducer;
