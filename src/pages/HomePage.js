import React from 'react';
import ShowBooks from '../components/ShowBooks';
import AddBook from '../components/AddBook';

const HomePage = () => {
  const booksList = [
    {
      id: 1,
      title: 'React for dummies',
      author: 'Mitch Chen',
    },
    {
      id: 2,
      title: 'FullStack React',
      author: 'Nate Murray',
    },

  ];

  return (
    <>
      <ShowBooks bookArray={booksList} />
      <AddBook />
    </>
  );
};

export default HomePage;
