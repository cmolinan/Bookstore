import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reducerBook from './books/books';
import reducerCategories from './categories/categories';

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(thunk),
  reducer: {
    stBooks: reducerBook,
    stCategories: reducerCategories,
  },
});

export default store;
