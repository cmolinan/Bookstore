import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    title: 'React for dummies',
    author: 'Mitch Chen',
  },
  {
    id: '2',
    title: 'FullStack React',
    author: 'Nate Murray',
  },
  {
    id: '3',
    title: 'Learning Redux',
    author: 'Daniel Bugl',
  },
  {
    id: '4',
    title: 'Real-World',
    author: 'Jakob Lind',
  },

];

const reducerBook = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addNewBook: (state, action) => [...state, action.payload],
    removeBook: (state, action) => state.filter((book) => book.id !== action.payload),
  },
});

export default reducerBook.reducer;
export const { addNewBook, removeBook } = reducerBook.actions;
