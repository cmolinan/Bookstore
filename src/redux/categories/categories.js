export const checkStatus = () => ({
  type: 'categories_CheckStatus',
});

const reducerCategories = (state = [], action) => {
  switch (action.type) {
    case 'categories_CheckStatus':
      return 'Under Construction';
    default:
      return state;
  }
};

export default reducerCategories;
