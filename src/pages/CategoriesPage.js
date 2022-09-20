import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const clickHandle = () => {
    dispatch(checkStatus());
  };

  return (
    <div>
      <button type="button" onClick={clickHandle}>Check status</button>
      <br />
      Under Construction
    </div>
  );
};

export default CategoriesPage;
