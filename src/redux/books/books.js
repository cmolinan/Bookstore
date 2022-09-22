import { createSlice } from '@reduxjs/toolkit';
import { ApiAddBook, ApiGetAllBooks, ApiRemoveBook } from '../../apiCalls';

const initialState = [];

const reducerBook = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addNewBook: (state, action) => [...state, action.payload],
    removeBook: (state, action) => state.filter((book) => book.id !== action.payload),
    getBooksAPI: (state, action) => {
      const tmpArray = Object.entries(action.payload).map(([id, value]) => (
        { ...value[0], id }
      ));
      // eslint-disable-next-line no-param-reassign
      [...state] = [...tmpArray];
      return state;
    },
  },
});
export const { addNewBook, removeBook, getBooksAPI } = reducerBook.actions;

const asyncBooksFromAPI = () => async (dispatch) => {
  const response = await ApiGetAllBooks();
  dispatch(getBooksAPI(response));
};

const asyncAddNewBook = (newBook) => async (dispatch) => {
  await ApiAddBook(newBook);
  dispatch(addNewBook({ ...newBook, id: newBook.item_id }));
};

const asyncRemoveBook = (id) => async (dispatch) => {
  await ApiRemoveBook(id);
  dispatch(removeBook(id));
};

export { asyncBooksFromAPI, asyncAddNewBook, asyncRemoveBook };
export default reducerBook.reducer;
