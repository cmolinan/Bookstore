import { configureStore } from '@reduxjs/toolkit';
import reducerBook from './books/books';
import reducerCategories from './categories/categories';

const store = configureStore({
  reducer: {
    stBooks: reducerBook,
    stCategories: reducerCategories,
  },
});

export default store;
