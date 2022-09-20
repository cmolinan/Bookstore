const addBook = (newBook) => ({
  type: 'books_Add',
  payload: newBook,
});

const removeBook = (bookId) => ({
  type: 'books_Remove',
  payload: bookId,
});

const reducerBook = (state = [], action) => {
  switch (action.type) {
    case 'books_Add':
      return [...state, action.payload];
    case 'books_Remove':
      return [...state.filter((book) => (book.id !== action.payload))];
    default:
      return state;
  }
};

export { reducerBook, removeBook, addBook };
