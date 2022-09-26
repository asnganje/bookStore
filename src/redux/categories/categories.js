const CHECK_STATUS = 'src/redux/categories/CHECK_STATUS';

const initialState = [];
/* eslint-disable*/
const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
};

const checkState = () => ({
  type: CHECK_STATUS,
});

export { checkState };
export default categoriesReducer;
