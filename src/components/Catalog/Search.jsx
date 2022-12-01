import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../reduxStore/slices/searchSlice';

export default function Search({ setOffset }) {
  const searchInputValue = useRef();

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setOffset(null);
    dispatch(
      setSearchValue(searchInputValue.current.value),
    );
  };

  const onChangeHandler = () => {
    if (!searchInputValue.current.value.length) {
      setOffset(null);
      dispatch(
        setSearchValue(null),
      );
    }
  };

  return (
    <form className="catalog-search-form form-inline" onSubmit={onSubmitHandler}>
      <input className="form-control" placeholder="Поиск" ref={searchInputValue} onChange={onChangeHandler} />
    </form>
  );
}

Search.propTypes = {
  setOffset: PropTypes.func.isRequired,
};
