import React, { useRef } from 'react';
import PropTypes from 'prop-types';

export default function Search({ setSearchValue }) {
  const searchInputValue = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setSearchValue(searchInputValue.current.value);
  };

  const onChangeHandler = () => {
    if (!searchInputValue.current.value.length) {
      setSearchValue(null);
    }
  };

  return (
    <form className="catalog-search-form form-inline" onSubmit={onSubmitHandler}>
      <input className="form-control" placeholder="Поиск" ref={searchInputValue} onChange={onChangeHandler} />
    </form>
  );
}

Search.propTypes = {
  setSearchValue: PropTypes.func.isRequired,
};
