const ApiURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/pFiLfKbWFkJnZqQuuBS8/books';

const ApiAddBook = async (book) => {
  const response = await fetch(ApiURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  });
  return response;
};

const ApiRemoveBook = async (id) => {
  const response = await fetch(`${ApiURL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: id }),
  });
  return response;
};

const ApiGetAllBooks = async () => {
  const response = await fetch(ApiURL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  const booksData = await response.json();
  return booksData;
};

export { ApiAddBook, ApiGetAllBooks, ApiRemoveBook };
